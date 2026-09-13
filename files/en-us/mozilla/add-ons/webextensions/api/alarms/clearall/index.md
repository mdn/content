---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
page-type: webextension-api-function
browser-compat: webextensions.api.alarms.clearAll
sidebar: addonsidebar
---

Cancels all active alarms.

## Syntax

```js-nolint
browser.alarms.clearAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with `undefined`.

> [!NOTE]
> Before Firefox 157, the promise was fulfilled with a boolean: `true` if any alarms were cleared and `false` otherwise. Chrome fulfills the promise with `true` and Safari with `undefined`. Don't rely on the fulfillment value. See [w3c/webextensions#1055](https://github.com/w3c/webextensions/issues/1055) for details.
>
> To check whether any alarms remain, call {{WebExtAPIRef("alarms.getAll()")}}.

## Examples

Clear all the alarms the extension has scheduled, then log that the alarms are cleared:

```js
async function clearAllAlarms() {
  await browser.alarms.clearAll();
  console.log("All alarms cleared");
}

clearAllAlarms();
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.
