---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - registerContentScripts
  - scripting
browser-compat: webextensions.api.scripting.registerContentScripts
---
{{AddonSidebar()}}

Registers one or more content scripts. 

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.scripting.registerContentScripts(
  scripts         // object
)
```

### Parameters

- `scripts`
  - : `array` of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. A list of scripts to register. 

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}. If there are errors during script parsing and file validation, or if the IDs specified exist, no scripts are registered and the promise fulfills with an error message.


## Examples

This example registers a script file called `script.js`:

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["<all_urls>"],
};

await browser.scripting.registerContentScripts([aScript]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#method-registerContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.