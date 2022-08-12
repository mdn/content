---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - get
browser-compat: webextensions.api.alarms.get
---
{{AddonSidebar()}}

Gets an alarm, given its name.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let getAlarm = browser.alarms.get(
  name                   // optional string
)
```

### Parameters

- `name` {{optional_inline}}
  - : `string`. The name of the alarm to get. If you don't supply this, the empty string "" will be used.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `{{WebExtAPIRef('alarms.Alarm', "Alarm")}}` object. This represents the alarm whose name matches `name`. If no alarms match, this will be `undefined`.

## Examples

```js
function gotAlarm(alarm) {
  if (alarm) {
    console.log(alarm.name);
  }
}

let getAlarm = browser.alarms.get("my-periodic-alarm");
getAlarm.then(gotAlarm);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
