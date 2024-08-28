---
title: scripting.getRegisteredContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/getRegisteredContentScripts
page-type: webextension-api-function
browser-compat: webextensions.api.scripting.getRegisteredContentScripts
---

{{AddonSidebar}}

Returns all the content scripts registered with {{WebExtAPIRef("scripting.registerContentScripts()")}} or a subset of the registered scripts when using a filter.

> [!NOTE]
> This method is available in Manifest V3 or higher in Chrome and Firefox 101. In Firefox 102+, this method is also available in Manifest V2.

To use this API you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let scripts = await browser.scripting.getRegisteredContentScripts(
  filter          // object
)
```

### Parameters

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. A filter for the registered script details to return.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. If any error occurs, the promise is rejected.

## Examples

This example returns all the registered content scripts:

```js
// Register two content scripts.
await browser.scripting.registerContentScripts([
  {
    id: "script-1",
    js: ["script-1.js"],
    matches: ["*://example.com/*"],
  },
  {
    id: "script-2",
    js: ["script-2.js"],
    matches: ["*://example.com/*"],
  },
]);

// Retrieve all content scripts.
let scripts = await browser.scripting.getRegisteredContentScripts();
console.log(scripts.map((script) => script.id)); // ["script-1", "script-2"]

// Only retrieve the second script.
scripts = await browser.scripting.getRegisteredContentScripts({
  ids: ["script-2"],
});
console.log(scripts.map((script) => script.id)); // ["script-2"]
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-getRegisteredContentScripts) API.
