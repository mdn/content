---
title: Get Named Cookie
short-title: Get Named Cookie
slug: Web/WebDriver/Reference/Classic/Commands/GetNamedCookie
page-type: webdriver-command
browser-compat: webdriver.classic.GetNamedCookie
sidebar: webdriver
---

The _Get Named Cookie_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns the cookie with the given name associated with the current browsing context's active document.

## Syntax

| Method                                              | URI template                          |
| --------------------------------------------------- | ------------------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/cookie/{name}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `name`
  - : The name of the cookie to retrieve.

### Return value

A single **cookie object** with the following fields:

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

- `No such cookie`
  - : No cookie matching the given `name` was found among the associated cookies of the current browsing context's active document.
- `No such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `Unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of the command until it is dealt with.
- [`Invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Retrieving a cookie by name

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to a page that has set a `session_token` cookie. To retrieve it, append the cookie name to the endpoint, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i http://localhost:4444/session/ID/cookie/session_token
```

The server responds with the matching cookie object:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"name":"session_token","value":"abc123","path":"/","domain":"example.org","secure":true,"httpOnly":false,"sameSite":"Strict"}}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Get All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Add Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/AddCookie)
- [Delete Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Delete All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
