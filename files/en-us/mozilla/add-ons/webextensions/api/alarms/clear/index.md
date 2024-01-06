---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
page-type: webextension-api-function
browser-compat: webextensions.api.alarms.clear
---

{{AddonSidebar()}}

Cancels an alarm, given its name.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let clearAlarm = browser.alarms.clear(
  name                       // string
)
```

### Parameters

- `name` {{optional_inline}}
  - : `string`. The name of the alarm to clear. If you don't supply this, the empty string "" will be used.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean. This will be `true` if the alarm was cleared, `false` otherwise.

## Examples

```js
function onCleared(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarm = browser.alarms.clear("my-periodic-alarm");
clearAlarm.then(onCleared);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
