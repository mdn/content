---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
page-type: webextension-api-function
browser-compat: webextensions.api.scripting.registerContentScripts
---

{{AddonSidebar}}

Registers one or more content scripts.

> [!NOTE]
> This method is available in Manifest V3 or higher in Chrome and Firefox 101. In Firefox 102+, this method is also available in Manifest V2.

To use this API you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
await browser.scripting.registerContentScripts(
  scripts         // array
)
```

### Parameters

- `scripts`
  - : `array` of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. A list of scripts to register.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with no arguments or rejected when there are errors. Errors can occur during script parsing and file validation or if the IDs specified exist. When an error occurs, no scripts are registered.

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

> [!NOTE]
> This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-registerContentScripts) API.
