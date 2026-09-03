---
title: "`script.realmCreated` event"
short-title: realmCreated
slug: Web/WebDriver/Reference/BiDi/Modules/script/realmCreated
page-type: webdriver-event
browser-compat: webdriver.bidi.script.realmCreated_event
sidebar: webdriver
---

The `script.realmCreated` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module fires when a new [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) is created for a document, a worker, or a worklet.

## Event data

The `params` field in the event notification is a realm object with the following fields, where the value of the `type` field determines the other fields that are present:

- `context` {{optional_inline}}
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) to which the realm belongs.
    This field is included only when the `type` field value is `"window"`.
- `origin`
  - : A string with the [origin](/en-US/docs/Glossary/Origin) of the realm.
- `owners` {{optional_inline}}
  - : A single-element array that contains the ID of the realm that owns the worker.
    This field is included only when the `type` field value is `"dedicated-worker"`.
- `realm`
  - : A string that contains the ID of the realm.
    Pass this value as the `realm` field of the `target` parameter of commands such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).
- `sandbox` {{optional_inline}}
  - : A string that contains the name of the sandbox realm.
    This field is included only for a sandbox realm, which is of type `"window"`.
- `type`
  - : A string that indicates the [type of realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#types_of_realms).
    It has one of the following values:
    - `"window"`: A realm whose global object is a {{domxref("Window")}}.
      This includes sandbox realms.
    - `"worker"`: A realm whose global object is a {{domxref("WorkerGlobalScope")}}, but not one of the more specific dedicated, shared, or service worker global scopes.
    - `"dedicated-worker"`: A realm whose global object is a {{domxref("DedicatedWorkerGlobalScope")}}.
    - `"shared-worker"`: A realm whose global object is a {{domxref("SharedWorkerGlobalScope")}}.
    - `"service-worker"`: A realm whose global object is a {{domxref("ServiceWorkerGlobalScope")}}.
    - `"worklet"`: A realm whose global object is a {{domxref("WorkletGlobalScope")}}, but not one of the more specific audio or paint worklet global scopes.
    - `"audio-worklet"`: A realm whose global object is an {{domxref("AudioWorkletGlobalScope")}}.
    - `"paint-worklet"`: A realm whose global object is a {{domxref("PaintWorkletGlobalScope")}}.

## Description

Together with [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed), use this event to monitor the lifetime of JavaScript realms.

When you [subscribe](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to this event, the browser first sends a `script.realmCreated` event for each realm that already exists and is ready to run scripts, and then sends further events as new realms are created.
This means you don't need to call [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) to discover the realms that existed before you subscribed.

A cross-document navigation creates a new realm for the document, so you receive a new event with a new realm ID.
The realm ID from before the navigation is no longer valid.

## Examples

### Receiving an event when a document is loaded

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `script.realmCreated`.

If any realms already exist when you subscribe, you receive an event for each of them first.
Then, when a tab loads a document at `https://example.com`, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "https://example.com",
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "type": "window"
  }
}
```

### Receiving an event when a worker starts

Using the same connection and session as in the previous example, suppose the page starts a dedicated worker.

The browser sends the following notification, which has no `context` field because a worker realm doesn't belong to a context.
Instead, `owners` contains the ID of the realm that owns the worker:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "origin": "https://example.com",
    "owners": ["7c37f4c0-abcd-1234-ef56-789012345678"],
    "realm": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071",
    "type": "dedicated-worker"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) command
- [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
