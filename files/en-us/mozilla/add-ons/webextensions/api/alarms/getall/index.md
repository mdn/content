---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - getAll
browser-compat: webextensions.api.alarms.getAll
---
{{AddonSidebar()}}

Gets all active alarms for the extension.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var getAlarms = browser.alarms.getAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of [`Alarm`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm "Information about a single alarm. This object is returned from alarms.get() and alarms.getAll(), and is passed into the alarms.onAlarm listener.") objects. Each of these represents an active alarm that belongs to the extension. If no alarms are active, the array will be empty.

## Examples

```js
function gotAll(alarms) {
  for (var alarm of alarms) {
    console.log(alarm.name);
  }
}

var getAlarms = browser.alarms.getAll();
getAlarms.then(gotAll);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
