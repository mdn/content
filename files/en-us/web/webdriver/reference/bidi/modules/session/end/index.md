---
title: session.end command
short-title: session.end
slug: Web/WebDriver/Reference/BiDi/Modules/session/end
page-type: webdriver-command
browser-compat: webdriver.bidi.session.end
sidebar: webdriver
---

The `session.end` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module ends the current BiDi session with the browser.

## Syntax

```json-nolint
{
  "method": "session.end",
  "params": {}
}
```

### Parameters

None. However, an empty params object `{}` must be sent.

### Return value

None.

## Examples

### Ending an automation session with the browser

With a WebDriver BiDi connection established, send the following message to end the current session:

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
