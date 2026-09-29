---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
page-type: webextension-api-function
browser-compat: webextensions.api.alarms.clearAll
sidebar: addonsidebar
---

Cancels all active alarms.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let clearAlarms = browser.alarms.clearAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a boolean. This is `true` if any alarms were cleared, `false` otherwise.

> [!NOTE]
> Chrome always passes `true` and Safari `undefined`. The return type is subject to change and may always return `undefined` for all browsers in the future. It is best to not rely on the return type.

## Examples

```js
function onClearedAll(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.
