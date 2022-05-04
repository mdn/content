---
title: scripting.getRegisteredContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/getRegisteredContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getRegisteredContentScripts
  - scripting
browser-compat: webextensions.api.scripting.getRegisteredContentScripts
---
{{AddonSidebar()}}

Returns all the content scripts registered with {{WebExtAPIRef("scripting.registerContentScripts()")}} that match a filter.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
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
let scripts = await browser.scripting.registerContentScripts();
````

This example returns the registered scripts with the ID `a-script`:

```js
let scripts = await browser.scripting.registerContentScripts({
  ids: ["a-script-id"],
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting/#method-getRegisteredContentScripts) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.