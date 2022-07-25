---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - registerContentScripts
  - scripting
browser-compat: webextensions.api.scripting.registerContentScripts
---
{{AddonSidebar()}}

Registers one or more content scripts.

> **Note:** This method is available in Manifest V3 or higher in Chrome and Firefox 101. In Firefox 102+, this method is also available in Manifest V2.

To use this API you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
await browser.scripting.registerContentScripts(
  scripts         // array
)
```

### Parameters

- `scripts`
  - : `array` of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. A list of scripts to register.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. If there are errors during script parsing and file validation, or if the IDs specified do not exist, no scripts are registered and the promise is rejected.

## Examples

This example registers a content script that injects the file `"script.js"`:

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["https://example.com/*"],
};

try {
  await browser.scripting.registerContentScripts([aScript]);
} catch (err) {
  console.error(`failed to register content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-registerContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
