---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - updateContentScripts
  - scripting
browser-compat: webextensions.api.scripting.updateContentScripts
---
{{AddonSidebar()}}

Updates registered content scripts. If there are errors during script parsing and file validation, or if the IDs specified do not exist, no scripts are updated.

> **Note:** This method is available in Manifest V3 or higher in Chrome and Firefox 101. In Firefox 102+, this method is also available in Manifest V2.

To use this API you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Syntax

```js
await browser.scripting.updateContentScripts(
  scripts         // object
)
```

### Parameters

- `scripts`
  - : `array` of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details of a script to update. All the properties are optional except for `id`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. If any error occurs, the promise is rejected.

## Examples

This example updates a content script registered with ID `a-script` by setting `allFrames` to `true`:

```js
try {
  await browser.scripting.registerContentScripts([
    {
      id: "a-script",
      js: ["script.js"],
      matches: ["*://example.org/*"],
    },
  ]);

  // Update content script registered before to allow execution
  // in all frames:
  await browser.scripting.updateContentScripts([
    {
      id: "a-script",
      allFrames: true,
    },
  ]);
} catch (err) {
  console.error(`failed to register or update content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-updateContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
