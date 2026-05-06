---
title: session.end command
short-title: session.end
slug: Web/WebDriver/Reference/BiDi/Modules/session/end
page-type: webdriver-command
status:
  - experimental
browser-compat: webdriver.bidi.session.end
sidebar: webdriver
---

{{SeeCompatTable}}

The `session.end` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module ends the client's current BiDi session with the browser.

## Syntax

```json-nolint
{
  "method": "session.end",
  "params": {}
}
```

### Parameters

None. However, you must include the `params` field and set it to an empty object (`{}`).

### Return value

The `result` field in the response is an empty object (`{}`).

## Examples

### Ending an automation session with the browser

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) established, send the following message to end the current session:

```json
{
  "id": 2,
  "method": "session.end",
  "params": {}
}
```

The browser responds with:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

The success response is received before the WebSocket connection closes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`session.status`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) command
