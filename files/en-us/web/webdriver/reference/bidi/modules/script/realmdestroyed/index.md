---
title: "`script.realmDestroyed` event"
short-title: realmDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed
page-type: webdriver-event
browser-compat: webdriver.bidi.script.realmDestroyed_event
sidebar: webdriver
---

The `script.realmDestroyed` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module fires when the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) of a document, a worker, or a worklet is destroyed.

## Event data

The `params` field in the event notification is an object with the following field:

- `realm`
  - : A string that contains the ID of the realm that was destroyed.

## Description

Together with [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated), use this event to monitor the lifetime of JavaScript realms.

This event fires when a document is unloaded, which happens when its [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) navigates to a new document or is closed.
Unloading a document destroys the realm of the document and the realms of its worklets, so the event fires once for each of them.
The event also fires when a worker reaches the end of its lifecycle or is terminated.

The event payload contains only the realm ID.
If you need to identify the context or worker to which the realm belonged, match this ID against the realm information previously received from [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) or retrieved using [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms).

After this event fires, the ID of the destroyed realm is no longer valid. The realm's objects are also released when it is destroyed, so you don't need to release them using [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown).

Unlike [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated), this event is never replayed; it fires only for realms destroyed after you subscribe to it.

## Examples

### Tracking realms across a navigation

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to both `script.realmDestroyed` and [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated).

Suppose a tab is open at `https://example.com` and you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to navigate the context to `https://example.org`.

The browser first sends the following notification about the destroyed realm of the previous document:

```json
{
  "type": "event",
  "method": "script.realmDestroyed",
  "params": {
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
  }
}
```

It then sends the following notification about the realm of the new document:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "https://example.org",
    "realm": "2b8e6d41-0f9a-4c3b-8d7e-1a2b3c4d5e6f",
    "type": "window"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.disown`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) command
- [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command
- [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
