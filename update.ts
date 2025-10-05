import { $ } from "bun";

const existingPartnaFile = (await import("./api-reference/partna.json")).default;
const mintJson = (await import("./mint.json")).default;

const updatedPartnaFile = (await (await Bun.fetch("https://staging-api.getpartna.com/v4/docs")).json());

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

const firstV4Index = mintJson.navigation.findIndex(item => item.group === "Account" && item.version === "v4");
const count = mintJson.navigation.length - firstV4Index
mintJson.navigation.splice(firstV4Index, count, ...outputJson);

await Bun.write("./mint.json", JSON.stringify(mintJson, null, 2));

// console.log({ outputJson });
// Bun.spawn(["bun", "-c", script]);

