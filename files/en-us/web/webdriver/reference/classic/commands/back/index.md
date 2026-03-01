---
title: Back
short-title: Back
slug: Web/WebDriver/Reference/Classic/Commands/Back
page-type: webdriver-command
browser-compat: webdriver.classic.Back
sidebar: webdriver
---

The _Back_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API navigates to the previous page in the browsing history. This is equivalent to clicking the browser's back button or calling {{domxref("History.back()")}} in JavaScript.

## Syntax

| Method                                                | URI template                 |
| ----------------------------------------------------- | ---------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/back` |

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
- Timeout
  - : The navigation did not complete before its timeout expired.

## Examples

### Navigating back in browsing history

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to at least two pages. To navigate back to the previous page, use the `back` command, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" -d '{}' http://localhost:4444/session/ID/back
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

- [Forward command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Forward)
- [Refresh command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Refresh)
