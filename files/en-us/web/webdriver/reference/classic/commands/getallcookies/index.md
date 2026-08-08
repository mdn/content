---
title: Get All Cookies
short-title: Get All Cookies
slug: Web/WebDriver/Reference/Classic/Commands/GetAllCookies
page-type: webdriver-command
browser-compat: webdriver.classic.GetAllCookies
sidebar: webdriver
---

The _Get All Cookies_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns all cookies associated with the current browsing context's active document. This is broadly equivalent to reading {{domxref("Document.cookie")}} in JavaScript, but returns structured cookie objects rather than a string.

## Syntax

| Method                                              | URI template                   |
| --------------------------------------------------- | ------------------------------ |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/cookie` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Return value

An array of **cookie objects**. Each cookie object has the following fields:

- `name`
  - : The name of the cookie.
- `value`
  - : The cookie value.
- `path`
  - : The cookie path.
- `domain`
  - : The domain the cookie is visible to.
- `secure`
  - : Whether the cookie is a secure cookie.
- `httpOnly`
  - : Whether the cookie is an HTTP-only cookie.
- `expiry`
  - : When the cookie expires, specified in seconds since the Unix epoch. Omitted for session cookies.
- `sameSite`
  - : The cookie's [same-site policy](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value). One of `"Lax"`, `"Strict"`, or `"None"`.

### Errors

- `No such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `Unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of the command until it is dealt with.
- [`Invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Retrieving all cookies

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to a page that has set one or more cookies. To retrieve them, use the following command, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i http://localhost:4444/session/ID/cookie
```

The server responds with an array of cookie objects:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":[{"name":"session_token","value":"abc123","path":"/","domain":"example.org","secure":true,"httpOnly":false,"sameSite":"Strict"}]}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Get Named Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
- [Add Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Delete Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Delete All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
