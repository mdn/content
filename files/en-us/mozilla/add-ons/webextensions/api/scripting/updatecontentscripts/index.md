---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - updateContentScripts
  - scripting
browser-compat: webextensions.api.scripting.updateContentScripts
---
{{AddonSidebar()}}

Updates registered content scripts. If there are errors during script parsing and file validation, or if the IDs specified do not exist, no scripts are updated.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Syntax

```js
let removing = browser.scripting.updateContentScripts(
  scripts         // object
)
```

### Parameters

- `scripts`

  - : An object with these properties:  

    - `persistAcrossSessions`
      - : `boolean`. Whether the content script persists into future sessions. 
    - `script`
      - : `array` of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details of a script to update.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. If any error occurs, the promise fulfills with an error message.

## Examples

This example updates a script file called `a-script.js`:

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["<all_urls>"],
  };

await browser.scripting.updateContentScripts([aScript]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting/#method-updateContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.