---
title: UserScripts.UserScriptOptions (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/UserScriptOptions
page-type: webextension-api-type
---

{{AddonSidebar}}

> [!WARNING]
> This is documentation for the legacy `userScripts` API. It's available in Firefox for Manifest V2. For functionality to work with user scripts in Manifest V3 see the new {{WebExtAPIRef("userScripts")}} API.

The UserScriptOptions object represents the content scripts to register. It has similar syntax to the contentScript options supported by browser.contentScripts.register. The differences are:

- it does not support a CSS property (use browser.contentScripts.register to dynamically register/unregister stylesheets)
- It does support an optional scriptMetadata property (as a plain JSON object which contains some metadata properties associated to the registered userScripts)

The UserScriptOptions object has the following properties:

- `allFrames` {{optional_inline}}
  - : Same as `all_frames` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `excludeGlobs` {{optional_inline}}
  - : Same as `exclude_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `excludeMatches` {{optional_inline}}
  - : Same as `exclude_matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `includeGlobs` {{optional_inline}}
  - : Same as `include_globs` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `js` {{optional_inline}}
  - : An array of objects. Each object has either a property named `file`, which is a URL starting at the extension's manifest.json and pointing to a JavaScript file to register, or a property named `code`, which is some JavaScript code to register.
- `matchAboutBlank` {{optional_inline}}
  - : Same as `match_about_blank` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `matches`
  - : Same as `matches` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `runAt` {{optional_inline}}
  - : Same as `run_at` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key.
- `scriptMetadata` {{optional_inline}}
  - : A user script metadata value

It has similar syntax to the contentScript options supported by browser.contentScripts.register.
