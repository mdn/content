---
title: "`browsingContext.navigationStarted` event"
short-title: navigationStarted
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.navigationStarted_event
sidebar: webdriver
---

The `browsingContext.navigationStarted` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a navigation to a new document begins in a context.

## Description

The navigation to a different page can be triggered by the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) or [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command, by user interaction with elements on the page, or by JavaScript running in the page's context.

> [!NOTE]
> This event is not emitted when the initial `about:blank` page is loaded for a new top-level browsing context.

This event does not fire for same-document navigations.
For navigations to a URL fragment, see [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated).
For URL changes made through the History API without a full navigation, see [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated).

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the navigation is occurring.
- `navigation`
  - : A string that contains the ID of the navigation, or the value `null` if the navigation does not have an associated navigation ID.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL being loaded.

## Examples

### Receiving an event when a cross-document navigation starts

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.navigationStarted`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com`, passing the context ID you obtained from [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree). The browser sends the following notification, where the `context` value matches the context ID you passed to `browsingContext.navigate`:

```json
{
  "type": "event",
  "method": "browsingContext.navigationStarted",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1781646423959,
    "url": "https://example.com"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated) event
- [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) event
- [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
