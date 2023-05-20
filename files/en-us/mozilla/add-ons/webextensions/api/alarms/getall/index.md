---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.alarms.getAll
---

{{AddonSidebar()}}

Gets all active alarms for the extension.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getAlarms = browser.alarms.getAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of [`Alarm`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm) objects. Each of these represents an active alarm that belongs to the extension. If no alarms are active, the array will be empty.

## Examples

```js
function gotAll(alarms) {
  for (const alarm of alarms) {
    console.log(alarm.name);
  }
}

browser.alarms.getAll().then(gotAll);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
