---
title: Delete All Cookies
short-title: Delete All Cookies
slug: Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies
page-type: webdriver-command
browser-compat: webdriver.classic.DeleteAllCookies
sidebar: webdriver
---

The _Delete All Cookies_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API deletes all cookies associated with the current browsing context's active document.

## Syntax

| Method                                                    | URI template                   |
| --------------------------------------------------------- | ------------------------------ |
| [`DELETE`](/en-US/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/cookie` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Return value

`null` if successful.

### Errors

- `No such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `Unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of the command until it is dealt with.
- [`Invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Deleting all cookies

With a WebDriver server running on `localhost:4444`, assume an active session has one or more cookies set. To delete them all, use the following command, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/cookie
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

- [Delete Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Add Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Get All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Get Named Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
