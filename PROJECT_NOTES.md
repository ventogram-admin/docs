# Project Notes

## Repo

- Path: `/Users/scozky/code/ventogram-docs`
- Remote: `https://github.com/ventogram-admin/docs.git`
- Working branch: `docs-widget-guides`

## What Changed

- Added new v4 widget guides:
  - `v4/documentation/guides/onramp-widget.mdx`
  - `v4/documentation/guides/offramp-widget.mdx`
- Updated `docs.json` navigation to group widget docs under a `Widgets` section
- Updated the main onramp/offramp guides to point readers to the widget option
- Updated quickstart links to include widget guides
- Added widget environment details to `v4/documentation/environments.mdx`

## Widget Decisions

- Widget page names:
  - `Onramp Widget`
  - `Offramp Widget`
- Widgets folder icon: `window`
- Widget page icons: `window-restore`
- Production widget base URL: `https://pay.getpartna.com/`
- Staging widget base URL: `https://staging-pay.getpartna.com/`

## Documented Widget Details

- Open and closed registration modes
- Links to settings endpoints:
  - `GET /user/settings`
  - `PUT /user/settings`
- `reference` is documented as a hex string
- Offramp widget supports optional `address`
  - this is the wallet address the crypto will be sent from
- Optional query parameters should appear at the bottom of the parameter tables

## Local Preview

Use Node 20 from Homebrew when starting Mintlify:

```bash
cd /Users/scozky/code/ventogram-docs
PATH=/opt/homebrew/opt/node@20/bin:$PATH /opt/homebrew/opt/node@20/bin/npx mintlify dev
```

Expected local preview URL:

```text
http://localhost:3000
```

## Git / PR

- Initial branch pushed to GitHub: `docs-widget-guides`
- PR page was opened in browser with a prefilled title and description
- Latest pushed commit at the time of writing these notes:
  - `f0d3803` - `Update widget environment and parameter docs`

## Resume Checklist

- `cd /Users/scozky/code/ventogram-docs`
- `git checkout docs-widget-guides`
- `git pull`
- restart Mintlify preview if needed
- continue editing widget docs or open the PR if it has not been created yet
