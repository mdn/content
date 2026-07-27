---
title: "`browsingContext.contextCreated` event"
short-title: contextCreated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.contextCreated_event
sidebar: webdriver
---

The `browsingContext.contextCreated` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a new context is created in the browser.

## Event data

The `params` field in the event notification is a [context object](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) with the following properties:

- `children`
  - : An array of [context objects](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#contexts) that represents child contexts.
    This event does not include child contexts ([`maxDepth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree#maxdepth) is `0`).
    To retrieve the children of a context, use [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `clientWindow`
  - : A string that contains the ID of the [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) that contains this context.
- `context`
  - : A string that contains the ID of the newly created context.
- `originalOpener`
  - : A string that contains the ID of the context that originally opened this context.
    The value is `null` if the context was opened directly (not by another context).
- `parent`
  - : A string that contains the ID of the parent context.
    The value is `null` if the context has no parent (that is, it is a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context)).
- `url`
  - : A string that contains the URL of the context, including the fragment, at the time it was created.
    For newly created contexts, the value is `"about:blank"` because the event fires before any navigation has occurred and content has loaded.
    For existing contexts at subscription time, the value reflects their current URL.
- `userContext`
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) associated with this context.

## Description

When you subscribe to this event, the browser immediately fires the event recursively for all contexts that already exist at the time of subscription, starting from top-level contexts down through their children.

If the [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) was scoped to specific contexts using the [`contexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) parameter, only child contexts created within those contexts will fire the event.

## Examples

### Receiving an event for a new tab

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.contextCreated` active.

When your automation script creates a tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": null,
    "originalOpener": null,
    "url": "about:blank",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

### Receiving an event for a child context

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.contextCreated` active.

Suppose a page containing an `<iframe>` loads. The browser sends the following notification for the new child context:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "6442450945",
    "children": null,
    "originalOpener": null,
    "url": "about:blank",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Identifying the opener of a context

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Consider a scenario where two tabs are already open: Tab 1 at `https://example.com/page1.html`, and Tab 2 at `https://example.com/page2.html`, which was opened from Tab 1 using `window.open()`. When you subscribe to `browsingContext.contextCreated`, the browser fires events for the two existing contexts. The `originalOpener` field in Tab 2's notification identifies the context that opened it.

The browser sends the following notification for Tab 1:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "children": null,
    "originalOpener": null,
    "url": "https://example.com/page1.html",
    "userContext": "default",
    "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
    "parent": null
  }
}
```

This is immediately followed by the notification for Tab 2:

```json
{
  "type": "event",
  "method": "browsingContext.contextCreated",
  "params": {
    "context": "32ed30da-24ad-459d-8f0d-660526e92d96",
    "children": null,
    "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "url": "https://example.com/page2.html",
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

- [`browsingContext.contextDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) event
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
