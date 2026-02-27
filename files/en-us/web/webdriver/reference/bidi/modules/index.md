---
title: WebDriver BiDi modules
short-title: Modules
slug: Web/WebDriver/Reference/BiDi/Modules
page-type: listing-page
browser-compat: webdriver.bidi
sidebar: webdriver
---

The WebDriver BiDi protocol is organized into modules.
Each module represents a collection of related [commands](#commands) and [events](#events) used in specific browser automation cases.

Both command and event names use the module name as a prefix: `module_name.command_name` for commands and `module_name.event_name` for events.

## List of modules

{{SubpagesWithSummaries}}

## Commands

A command is an asynchronous operation sent from the client to the browser. Each command message you send to the browser has three fields:

- `id`: A number you assign to the command. Unlike HTTP where each request waits for a response, a WebSocket connection can have multiple commands in flight at the same time and responses may arrive out of order. The `id` lets you match each response to the command that triggered it.
- `method`: The command to run, in the form `module_name.command_name`.
- `params`: An object with any additional information the command needs. Some commands require no parameters, but an empty `params` object (`{}`) must still be sent.

For example, to create a new session, you would send the [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command as follows:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {}
}
```

Each command results in either a success response containing a `result` field or an error response containing an `error` field. The structure of `result` is specific to each command.

All commands except [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) and [`session.status`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) require an active WebDriver BiDi session in order to be properly targeted.

## Events

An event is a notification sent by the browser to the client when something of interest occurs.
To receive events, the client must first subscribe to them using the `session.subscribe` command.

The client can subscribe to a specific event or to all events in a module. For example, subscribing to `"browsingContext.contextCreated"` subscribes the client to that single event, while subscribing to `"browsingContext"` subscribes the client to every event in the `browsingContext` module. Once subscribed, the browser sends matching events on its own, without the client having to request each one.

The following is a sample event message sent by the browser when the client is subscribed to `log.entryAdded` and a console message is logged (some fields have been omitted for brevity):

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "log",
    "realm": null,
    "level": "info",
    "text": "Hello world",
    "timestamp": 1657282076037
  }
}
```

## Browser compatibility

{{Compat}}
