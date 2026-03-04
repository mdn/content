---
title: session.subscribe command
short-title: session.subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
page-type: webdriver-command
browser-compat: webdriver.bidi.session.subscribe
sidebar: webdriver
---

The `session.subscribe` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module registers the client to receive asynchronous browser events, by individual event or by module, either globally or scoped to specific browsing contexts or user contexts.

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

The input is an object with the following fields:

- `events`
  - : An array of one or more strings that specifies event names for subscription.
    Each string can be either a specific event name (for example, `"log.entryAdded"`) or a module name (for example, `"log"`) that subscribes the client to all events in that module.
- `contexts` {{optional_inline}}
  - : An array of one or more browsing context IDs.
    If specified, events are received only for those contexts and their descendants.
    This field cannot be used if `userContexts` is also specified.
- `userContexts` {{optional_inline}}
  - : An array of one or more user context IDs.
    If specified, events are received only for contexts belonging to those user contexts.
    This field cannot be used if `contexts` is also specified.

If neither `contexts` nor `userContexts` is provided, the subscription is global and events are received for all browsing contexts.

### Return value

An object with the following fields:

- `subscription`
  - : A string that contains the unique identifier for this subscription.

### Errors

- [invalid argument](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : An event name is not recognized, or values for both `contexts` and `userContexts` were provided in the same request.

## Examples

### Subscribing to an event globally

With a WebDriver BiDi connection and an active session, to subscribe to the `log.entryAdded` event for all browsing contexts, send the following message:

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

### Subscribing to multiple events

To subscribe to all events in the `log` module and a specific event from the `network` module, specify them in the `events` array:

```json
{
  "id": 3,
  "method": "session.subscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

The browser responds with a subscription ID for the specified events as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "subscription": "e9d0a5c4-3h6d-6d6g-0c3h-4c5d6e7f8g9h"
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
