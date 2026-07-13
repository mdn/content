---
title: "`browsingContext.fragmentNavigated` event"
short-title: fragmentNavigated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.fragmentNavigated_event
sidebar: webdriver
---

The `browsingContext.fragmentNavigated` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a same-document navigation to a [URL fragment](/en-US/docs/Web/URI/Reference/Fragment) occurs in a context.

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the fragment navigation is occurring.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the updated URL, including the fragment.

## Examples

### Receiving a fragment navigation event

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.fragmentNavigated`.

Suppose a navigation to a section on `https://example.com/page` occurs. The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.fragmentNavigated",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1712345678901,
    "url": "https://example.com/page#section-2"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) event
