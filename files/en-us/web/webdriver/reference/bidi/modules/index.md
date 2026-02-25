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

- `bluetooth`
- `browser`
- `browsingContext`
- `emulation`
- `input`
- `log`
- `network`
- `permission`
- `script`
- [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session)
- `storage`
- `webExtension`

## Commands

A command is an asynchronous operation sent from the client to the browser. Each command message has three fields:

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

Most commands require an active session. However, some commands are **static** — they can run without an active session. For example, the [`session.status`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) command is static because it can be used to check whether the browser is ready to create a new session before actually creating one.

## Events

An event is a notification sent by the browser to the client when something of interest occurs. Unlike commands, the browser sends events on its own, without the client requesting them. Each event message has two fields:

- `method`: The event name, in the form `module_name.event_name`.
- `params`: An object containing data about the event.

To receive events, the client must first subscribe to them using the [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command. The subscription message has the same `id` and `method` fields as any other command, and the `params` field takes an `events` array containing the event names to subscribe to:

```json
{
  "id": 2,
  "method": "session.subscribe",
  "params": {
    "events": ["network.responseCompleted"]
  }
}
```

`session.subscribe` returns a subscription ID, which can be used with `session.unsubscribe` to stop receiving those events.

## Browser compatibility

{{Compat}}
