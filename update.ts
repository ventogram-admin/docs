import { $ } from "bun";

const existingPartnaFile = (await import("./api-reference/partna.json")).default;
const docJson = (await import("./docs.json")).default;

const updatedPartnaFile: any = (await (await Bun.fetch("https://staging-api.getpartna.com/v4/docs")).json());

if (JSON.stringify(updatedPartnaFile, null, 2) == JSON.stringify(existingPartnaFile, null, 2)) {
    console.log("No changes detected in the OpenAPI spec. Exiting.");
    process.exit(0);
}
const res = await Bun.write("./api-reference/partna.json", JSON.stringify(updatedPartnaFile, null, 2));

const script = await $`npx @mintlify/scraping@latest openapi-file ./api-reference/partna.json -o ./api-reference/endpoint/v3`;

const outputText = script.text().replace("navigation object suggestion:\n", "")
console.log({ res, s: outputText });
const outputJson: any[] = JSON.parse(outputText);
outputJson.map((item: any) => {
    item["version"] = "v4";
});

await Bun.write("./docs.json", JSON.stringify(docJson, null, 2));

// console.log({ outputJson });
// Bun.spawn(["bun", "-c", script]);

