---
title: "`browsingContext.historyUpdated` event"
short-title: historyUpdated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.historyUpdated_event
sidebar: webdriver
---

The `browsingContext.historyUpdated` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when the active URL in a context is updated programmatically without a full navigation.

## Description

This event fires when {{domxref("History.pushState", "history.pushState()")}} or {{domxref("History.replaceState", "history.replaceState()")}} is called to update the URL, or when {{domxref("Document.open", "document.open()")}} is called to replace the document.
These calls change the active URL in the context.

`browsingContext.historyUpdated` fires specifically when the URL is changed programmatically, unlike [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated), which fires for same-document navigations to a URL fragment.

## Event data

The `params` field in the event notification is a history update object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the history update is occurring.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the updated URL.

## Examples

### Receiving an event when `history.pushState()` is called

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.historyUpdated`.

Suppose {{domxref("History.pushState", "history.pushState()")}} is called to update the URL to `https://example.com/new-path`. The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.historyUpdated",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "timestamp": 1781888825943,
    "url": "https://example.com/new-path"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated) event
