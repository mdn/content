---
title: "`browsingContext.navigationFailed` event"
short-title: navigationFailed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.navigationFailed_event
sidebar: webdriver
---

The `browsingContext.navigationFailed` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a cross-document navigation is blocked.

## Description

In the lifecycle of a navigation, this event fires after [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) when the navigation is blocked, for example because of a security or CSP restriction or because the client cancels the unload prompt.

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the navigation failed.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL being loaded.

## Examples

### Receiving an event when a cross-document navigation is blocked

Consider the following scenario: you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.navigationFailed`.
The session's `unhandledPromptBehavior` capability is configured to dismiss [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) prompts.
The current page also has a `beforeunload` handler that calls [`event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) to warn before leaving.

Suppose there are unsaved changes on this page and you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load a different URL.

The browser opens the `beforeunload` prompt, fires a [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event, and blocks the navigation.
The browser sends the following notification, where the `context` value matches the context ID you passed to `browsingContext.navigate`, and the `navigation` value is the ID of the blocked navigation:

```json
{
  "type": "event",
  "method": "browsingContext.navigationFailed",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1712345678901
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
