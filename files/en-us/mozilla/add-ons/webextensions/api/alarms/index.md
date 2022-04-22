---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
tags:
  - API
  - Extensions
  - Interface
  - Needs Privileges
  - Reference
  - WebExtensions
  - alarms
browser-compat: webextensions.api.alarms
---
{{AddonSidebar}}

Schedule code to run at a specific time in the future. This is like [`setTimeout()`](/en-US/docs/Web/API/setTimeout) and [`setInterval()`](/en-US/docs/Web/API/setInterval), except that those functions don't work with background pages that are loaded on demand.

Alarms do not persist across browser sessions. They are created globally across all contexts of a single extension. E.g. alarm created in background script will fire [`onAlarm`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) event in background script, options page, popup page and extension tabs (and vice versa). Alarms API is not available in [`Content scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).

To use this API you need to have the "alarms" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Types

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Information about a particular alarm.

## Methods

- {{WebExtAPIRef("alarms.clear()")}}
  - : Clear a specific alarm, given its name.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Clear all scheduled alarms.
- {{WebExtAPIRef("alarms.create()")}}
  - : Create a new alarm.
- {{WebExtAPIRef("alarms.get()")}}
  - : Retrieves a specific alarm, given its name.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Retrieve all scheduled alarms.

## Events

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Fired when an alarm goes off.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/alarms/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
