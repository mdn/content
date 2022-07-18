---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - clearAll
browser-compat: webextensions.api.alarms.clearAll
---
{{AddonSidebar()}}

Cancels all active alarms.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let clearAlarms = browser.alarms.clearAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean. This will be `true` if any alarms were cleared, `false` otherwise. Note that Chrome always passes `true` here.

## Examples

```js
function onClearedAll(wasCleared) {
  console.log(wasCleared);  // true/false
}

let clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
