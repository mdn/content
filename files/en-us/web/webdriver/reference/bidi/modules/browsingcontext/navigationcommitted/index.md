---
title: "`browsingContext.navigationCommitted` event"
short-title: navigationCommitted
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.navigationCommitted_event
sidebar: webdriver
---

The `browsingContext.navigationCommitted` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when the browser commits a cross-document navigation and begins loading the new page.

## Description

A navigation is committed when the browser has accepted the URL from the server response and begun loading the new page, but before any content has been parsed or rendered. Page content is not yet available at this point.

In the lifecycle of a successful navigation, this event fires after [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) and before [`browsingContext.domContentLoaded`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) and [`browsingContext.load`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) events.

If you set `wait` to `"none"` for the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands, they return as soon as `browsingContext.navigationCommitted` fires.

This event does not fire for same-document navigations.
For navigations to a URL fragment, see [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated).
For URL changes made through the History API without a full navigation, see [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated).

## Event data

The `params` field in the event notification is a navigation object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the navigation is committed.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this navigation.
    This ID matches the `navigation` value in the response of the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) and [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) commands.
- `timestamp`
  - : A non-negative integer that represents the time in UTC when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL being loaded, including any basic auth credentials.
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the navigation is committed.

## Examples

### Receiving an event when a cross-document navigation commits

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.navigationCommitted`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com`, passing the context ID you obtain from [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
The browser first fires a [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event (since this example only subscribes to `browsingContext.navigationCommitted`, that notification is not received).
Once the browser accepts the server response and commits to loading the page, it sends the following notification, where the `context` value matches the context ID you passed to `browsingContext.navigate`:

```json
{
  "type": "event",
  "method": "browsingContext.navigationCommitted",
  "params": {
    "context": "9f271a75-04b2-4b35-80cc-e22427d446fc",
    "navigation": "dc716296-7076-4ec0-b446-51c6fb5fefe8",
    "timestamp": 1781715436774,
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
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
- [`browsingContext.fragmentNavigated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated) event
- [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) event
