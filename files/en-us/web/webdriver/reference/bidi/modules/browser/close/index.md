---
title: "`browser.close` command"
short-title: close
slug: Web/WebDriver/Reference/BiDi/Modules/browser/close
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.close
sidebar: webdriver
---

The `browser.close` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module closes the browser and ends all active WebDriver sessions. Tabs are closed without running [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) event handler functions. The response is sent before the WebSocket connection is closed.

## Syntax

```json-nolint
{
  "method": "browser.close",
  "params": {}
}
```

### Parameters

None. However, you must include the `params` field and set it to an empty object (`{}`).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- `unable to close browser`
  - : There are other active WebDriver sessions open at the time the command is sent.
    Browsers may return this error before continuing to close.

## Examples

### Closing the browser

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to close the browser:

```json
{
  "id": 1,
  "method": "browser.close",
  "params": {}
}
```

Before closing, the browser responds successfully as shown here:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

After the response, the WebSocket connection closes as the browser shuts down.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browser.removeUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) command
