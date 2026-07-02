---
title: "`browsingContext.navigationFailed` event"
short-title: navigationFailed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.navigationFailed_event
sidebar: webdriver
---

The `browsingContext.navigationFailed` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a cross-document navigation cannot be completed.

## Description

In the lifecycle of a failed navigation, this event fires after [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) when the navigation cannot be completed.

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the navigation failed.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL being loaded.
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the navigation failed.

## Examples

### Receiving an event when a cross-document navigation fails

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.navigationFailed`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load a URL, passing the context ID you obtain from [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

The browser first fires a [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event (that notification is not received since the subscription in this example is only to `browsingContext.navigationFailed`).

The browser sends the following notification if the navigation cannot be completed, where the `context` value matches the context ID you passed to `browsingContext.navigate`:

```json
{
  "type": "event",
  "method": "browsingContext.navigationFailed",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1712345678901,
    "url": "https://not-a-valid-domain.example"
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
