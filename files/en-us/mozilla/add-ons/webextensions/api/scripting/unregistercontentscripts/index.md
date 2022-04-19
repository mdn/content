---
title: scripting.unregisterContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/unregisterContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - unregisterContentScripts
  - tabs
browser-compat: webextensions.api.scripting.unregisterContentScripts
---
{{AddonSidebar()}}

Unregisters one or more content scripts.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.scripting.unregisterContentScripts(
  scripts         // object
)
```

### Parameters

- `scripts`{{optional_inline}} 
  - : `array` of {{WebExtAPIRef("scripting.ContentScriptFilter")}}. A filter to identify the dynamic content scripts to unregistered. If not specified, all dynamic content scripts are unregistered.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with no arguments when all the scripts are unregistered. If any error occurs, the promise fulfills with an error message.

## Examples

This example unregisters a script the ID `a-script`:

```js
const scriptFilter = {
  id: "a-script"
  };

await browser.scripting.unregisterContentScripts([scriptFilter]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#method-unregisterContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.