---
title: session.status command
short-title: session.status
slug: Web/WebDriver/Reference/BiDi/Modules/session/status
page-type: webdriver-command
browser-compat: webdriver.bidi.session.status
sidebar: webdriver
---

The `session.status` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-us/docs/web/webdriver/reference/bidi/modules/session) module returns information about whether the browser is able to create new BiDi sessions and may additionally include arbitrary meta information.

This is a static command; it can run without an active session.

## Syntax

```json-nolint
{
  "method": "session.status",
  "params": {}
}
```

### Parameters

None. However, an empty params object `{}` must be sent.

### Return value

An object with the following fields:

- `ready`
  - : A boolean that indicates whether the browser is ready to create new sessions.
    - `true`
      - : The browser is ready to create a new session.
    - `false`
      - : The browser cannot accept new sessions because it already has an active session or is otherwise in a state where creating a session would fail.
- `message`
  - : A string with information about the browser's current status.

## Examples

### Checking browser status before creating a session

With a WebDriver BiDi connection established, send the following message to check whether the browser is ready to create a new session:

```json
{
  "id": 1,
  "method": "session.status",
  "params": {}
}
```

When the browser is available, it responds with:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "ready": true,
    "message": ""
  }
}
```

If the browser already has an active session, the response might look as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "ready": false,
    "message": "Session already started"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
