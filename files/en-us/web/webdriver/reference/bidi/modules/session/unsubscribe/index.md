---
title: session.unsubscribe command
short-title: session.unsubscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe
page-type: webdriver-command
browser-compat: webdriver.bidi.session.unsubscribe
sidebar: webdriver
---

The `session.unsubscribe` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module cancels event subscriptions previously registered with [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe), either by subscription ID or by event name.

## Syntax

To unsubscribe using subscription ID:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["<subscription ID>"]
  }
}
```

To unsubscribe using event name:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "events": ["<event name>"]
  }
}
```

### Parameters

The `params` field contains one of the following fields:

- `subscriptions`
  - : An array of one or more subscription IDs that specifies the subscriptions to cancel, including both global and context-scoped subscriptions.
- `events`
  - : An array of one or more strings that specifies event names for canceling subscriptions.
    Each string can be either a specific event name (for example, `"log.entryAdded"`) or a module name (for example, `"log"`) that unsubscribes the client from all events in that module.
    Only global subscriptions can be removed using event names; those created using [`contexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) or [`userContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#usercontexts) cannot be.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : When unsubscribing using IDs, a subscription ID is not found.
    When unsubscribing using event names, the `events` array is empty or omitted, or an event name does not match any active global subscription.

## Examples

### Unsubscribing using a subscription ID

With an active subscription, send the following message to cancel it by ID:

```json
{
  "id": 3,
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"]
  }
}
```

After successfully unsubscribing, the browser responds as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Unsubscribing from an event globally using an event name

With a global subscription to `log.entryAdded` active, send the following message to stop receiving that event:

```json
{
  "id": 4,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

After successfully unsubscribing, the browser responds as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

### Unsubscribing from multiple events globally using event names

With global subscriptions active, send the following message to unsubscribe from all events in the `log` module and a specific event from the `network` module:

```json
{
  "id": 5,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

After successfully unsubscribing, the browser responds as follows:

```json
{
  "id": 5,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
