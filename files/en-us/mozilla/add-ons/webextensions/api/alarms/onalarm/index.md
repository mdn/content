---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
page-type: webextension-api-event
browser-compat: webextensions.api.alarms.onAlarm
---

{{AddonSidebar()}}

Fired when any alarm set by the extension goes off.

## Syntax

```js-nolint
browser.alarms.onAlarm.addListener(listener)
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}. The alarm that fired. Use `Alarm.name` to figure out which alarm fired.

## Examples

Handle an alarm going off:

```js
function handleAlarm(alarmInfo) {
  console.log(`on alarm: ${alarmInfo.name}`);
}

browser.alarms.onAlarm.addListener(handleAlarm);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
