---
title: "`browsingContext.load` event"
short-title: load
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/load
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.load_event
sidebar: webdriver
---

The `browsingContext.load` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a cross-document navigation has fully completed in a context.

## Description

In the lifecycle of a successful navigation, this event fires after [`browsingContext.domContentLoaded`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) and is the final event in the sequence.

At this point, the document and all its subresources have finished loading, equivalent to the {{domxref("Window/load_event", "load")}} event firing.

If you set `wait` to `"complete"` for the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands, they return as soon as `browsingContext.load` fires.

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the document has fully loaded.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL of the document that has fully loaded.

## Examples

### Receiving an event when a document has fully loaded

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.load`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com`, passing the context ID you obtain from [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

The browser first fires [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted), [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted), and [`browsingContext.domContentLoaded`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) events (those notifications are not received since the subscription in this example is only to `browsingContext.load`).

Once the document and all its subresources have finished loading, the browser sends the following notification, where the `context` value matches the context ID you passed to `browsingContext.navigate`:

```json
{
  "type": "event",
  "method": "browsingContext.load",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1782343062410,
    "url": "https://example.com"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) event
- [`browsingContext.domContentLoaded`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
