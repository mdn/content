---
title: session.subscribe command
short-title: session.subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
page-type: webdriver-command
browser-compat: webdriver.bidi.session.subscribe
sidebar: webdriver
---

The `session.subscribe` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module registers the client to receive events asynchronously, either per event or per module, globally or scoped to specific contexts.

## Syntax

```json-nolint
{
  "method": "session.subscribe",
  "params": {
    "events": ["<event name>"]
  }
}
```

### Parameters

The `params` field contains:

- `events`
  - : An array of one or more event name strings. Use a module name (for example, `"log"`) to subscribe to all events in that module or a specific event name (for example, `"log.entryAdded"`) to subscribe to only that event.
- `contexts` {{optional_inline}}
  - : An array of one or more context IDs ([UUIDs](/en-US/docs/Glossary/UUID)), each corresponding to a tab or frame.
    If specified, events are received only for those contexts and their descendants.
    If the context ID corresponds to a frame, the subscription is created for the top-level context (tab) that owns the frame.

    This field cannot be used if `userContexts` is also specified.

- `userContexts` {{optional_inline}}
  - : An array of one or more user context IDs, each corresponding to a browser context or container.
    If specified, events are received only for those user contexts.

    This field cannot be used if `contexts` is also specified.

If neither `contexts` nor `userContexts` is provided, the subscription is global, so events are received for all contexts.

### Return value

The `result` field in the response is an object with the following field:

- `subscription`
  - : A string that contains the unique identifier for this subscription.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - The `events` array is empty, omitted, or contains an unrecognized event name.
    - `contexts` or `userContexts` is provided but empty.
    - Both `contexts` and `userContexts` are provided in the same request.
    - A parameter value has an invalid type.

## Examples

### Subscribing to an event globally

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to subscribe to the `log.entryAdded` event for all contexts:

```json
{
  "id": 2,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

The browser responds with a subscription ID as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "subscription": "c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"
  }
}
```

### Subscribing to multiple events globally

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to subscribe to all events in the `log` module and a specific event from the `network` module:

```json
{
  "id": 3,
  "method": "session.subscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

The browser responds with a subscription ID as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "subscription": "e9d0a5c4-3h6d-6d6g-0c3h-4c5d6e7f8g9h"
  }
}
```

### Subscribing to events scoped to a tab

Suppose your automation has two tabs open — one for the homepage and another for the checkout page. To receive `log.entryAdded` events only from the Checkout tab, send the following message with that tab's context ID:

```json
{
  "id": 4,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"],
    "contexts": ["9b4e2f1a-3c7d-4b8e-a2f5-6d1c9e3b7f4a"]
  }
}
```

The browser responds with a subscription ID as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "subscription": "a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.unsubscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe) command
- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
