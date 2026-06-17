---
title: "`browsingContext.contextDestroyed` event"
short-title: contextDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.contextDestroyed_event
sidebar: webdriver
---

The `browsingContext.contextDestroyed` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a context is discarded from the browser, such as when a tab is closed or when an `<iframe>` is removed from the DOM.

## Event data

The `params` field in the event notification is a [context object](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) with the following fields, describing the discarded context and its subtree:

- `children`
  - : An array of [context objects](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) that represents child contexts.
    This event includes the full subtree of child contexts that were discarded ([`maxDepth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) is `null`).
    An empty array indicates that the context had no children.
- `clientWindow`
  - : A string that contains the ID of the [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) that contained this context.
- `context`
  - : A string that contains the ID of the discarded context.
- `originalOpener`
  - : A string that contains the ID of the context that originally opened this context.
    The value is `null` if the context was opened directly (not by another context).
- `parent`
  - : A string that contains the ID of the parent context.
    The value is `null` if the context had no parent (that is, it was a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context)).
    This field is present only for the top-level context in the event data.
- `url`
  - : A string that contains the URL of the context, including the fragment, at the time it was discarded.
- `userContext`
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) associated with this context.

## Description

If the [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) was scoped to specific contexts using the [`contexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) parameter, the discarded context's ID is automatically removed from that subscription's scope after the event is emitted.

If the discarded context was the only context in the subscription's scope, the subscription itself is automatically removed.

## Examples

### Receiving an event when a tab is closed

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.contextDestroyed` active.

When your automation script closes a tab using [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close), the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.contextDestroyed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": [],
    "originalOpener": null,
    "url": "https://example.com/",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

### Receiving an event when a tab with child frames is closed

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.contextDestroyed` active.

Suppose a tab that contains two `<iframe>`s is closed. The browser sends the following notification, which includes the full subtree in the `children` field:

```json
{
  "type": "event",
  "method": "browsingContext.contextDestroyed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": [
      {
        "context": "6442450945",
        "children": [],
        "originalOpener": null,
        "url": "https://example.com/frame1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
      },
      {
        "context": "15032385537",
        "children": [],
        "originalOpener": null,
        "url": "https://example.com/frame2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
      }
    ],
    "originalOpener": null,
    "url": "https://example.com/",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.contextCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) event
- [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
