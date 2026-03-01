---
title: Refresh
short-title: Refresh
slug: Web/WebDriver/Reference/Classic/Commands/Refresh
page-type: webdriver-command
browser-compat: webdriver.classic.Refresh
sidebar: webdriver
---

The _Refresh_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API reloads the current page in the active browsing context. This is equivalent to clicking the browser's reload button or calling {{domxref("Location.reload()")}} in JavaScript.

## Syntax

| Method                                                | URI template                    |
| ----------------------------------------------------- | ------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/refresh` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Return value

`null` if successful.

### Errors

- [Invalid session id](/en-US/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Session does not exist.
- No such window
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- Unexpected alert open
  - : A modal dialog was open, blocking this operation.

## Examples

### Reloading the current page

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to a page. To reload the current page, use the `refresh` command, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/refresh
```

The server responds with a null value to indicate success:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Back command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Back)
- [Forward command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
