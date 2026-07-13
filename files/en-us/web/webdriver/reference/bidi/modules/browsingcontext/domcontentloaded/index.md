---
title: "`browsingContext.domContentLoaded` event"
short-title: domContentLoaded
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.domContentLoaded_event
sidebar: webdriver
---

The `browsingContext.domContentLoaded` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when the HTML document has been parsed during a cross-document navigation in a context.

## Description

In the lifecycle of a successful navigation, this event fires after [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) and before [`browsingContext.load`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) events.

At this point, the HTML has been parsed, equivalent to the {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event firing in the context, but subresources such as stylesheets and images may still be loading.

If you set `wait` to `"interactive"` for the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands, they return as soon as `browsingContext.domContentLoaded` fires.

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the HTML document is being parsed.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL being loaded.

## Examples

### Receiving an event when a document is parsed

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.domContentLoaded`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com`, passing the context ID you obtain from [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

The browser first fires [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) and [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) events (those notifications are not received since the subscription in this example is only to `browsingContext.domContentLoaded`).

Once the HTML has been parsed, the browser sends the following notification, where the `context` value matches the context ID you passed to `browsingContext.navigate`:

```json
{
  "type": "event",
  "method": "browsingContext.domContentLoaded",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1782342489906,
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
- [`browsingContext.load`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
