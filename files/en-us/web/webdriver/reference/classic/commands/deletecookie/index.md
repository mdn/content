---
title: Delete Cookie
short-title: Delete Cookie
slug: Web/WebDriver/Reference/Classic/Commands/DeleteCookie
page-type: webdriver-command
browser-compat: webdriver.classic.DeleteCookie
sidebar: webdriver
---

The _Delete Cookie_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API deletes the cookie with the given name from the cookie store associated with the current browsing context's active document.

## Syntax

| Method                                                    | URI template                          |
| --------------------------------------------------------- | ------------------------------------- |
| [`DELETE`](/en-US/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/cookie/{name}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `name`
  - : The name of the cookie to delete.

### Return value

`null` if successful. The command succeeds even if no cookie matching the given name exists.

### Errors

- `No such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `Unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of the command until it is dealt with.
- [`Invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Deleting a cookie by name

With a WebDriver server running on `localhost:4444`, assume an active session has a `session_token` cookie set. To delete it, append the cookie name to the endpoint, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/cookie/session_token
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

- [Delete All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
- [Add Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Get All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Get Named Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
