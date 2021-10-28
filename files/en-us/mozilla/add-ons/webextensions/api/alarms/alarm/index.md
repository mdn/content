---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - alarm
  - alarms
browser-compat: webextensions.api.alarms.Alarm
---
{{AddonSidebar()}}

Information about a single alarm. This object is returned from {{WebExtAPIRef('alarms.get()')}} and {{WebExtAPIRef('alarms.getAll()')}}, and is passed into the {{WebExtAPIRef('alarms.onAlarm')}} listener.

## Type

Values of this type are objects. They contain the following properties:

- `name`
  - : `string`. Name of this alarm. This is the name that was passed into the {{WebExtAPIRef('alarms.create()')}} call that created this alarm.
- `scheduledTime`
  - : `double`. Time at which the alarm is scheduled to fire next, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `periodInMinutes`{{optional_inline}}
  - : `double`. If this is not `null`, then the alarm is periodic, and this represents its period in minutes.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
