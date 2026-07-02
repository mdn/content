---
title: Add Cookie
short-title: Add Cookie
slug: Web/WebDriver/Reference/Classic/Commands/AddCookie
page-type: webdriver-command
browser-compat: webdriver.classic.AddCookie
sidebar: webdriver
---

The _Add Cookie_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API adds a single cookie to the cookie store associated with the current browsing context's active document. This is broadly equivalent to setting {{domxref("Document.cookie")}} in JavaScript.

## Syntax

| Method                                                | URI template                   |
| ----------------------------------------------------- | ------------------------------ |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/cookie` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The body is a JSON Object with a single `cookie` field whose value is a **cookie object**:

- `name`
  - : The name of the cookie. Required.
- `value`
  - : The cookie value. Required.
- `path` {{optional_inline}}
  - : The cookie path. Defaults to `"/"`.
- `domain` {{optional_inline}}
  - : The domain the cookie is visible to. Defaults to the current browsing context's document domain.
- `secure` {{optional_inline}}
  - : Whether the cookie is a secure cookie. Defaults to `false`.
- `httpOnly` {{optional_inline}}
  - : Whether the cookie is an HTTP-only cookie. Defaults to `false`.
- `expiry` {{optional_inline}}
  - : When the cookie expires, specified in seconds since the Unix epoch. Must be a number in the 0 to 2^53 − 1 range. If omitted, the cookie is a session cookie.
- `sameSite` {{optional_inline}}
  - : The cookie's [same-site policy](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value). One of `"Lax"`, `"Strict"`, or `"None"`.

### Return value

`null` if successful.

### Errors

- [`Invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `cookie` object is missing, is not a JSON Object, is missing a required field, or one of its fields does not meet the type or value constraints.
- [`Invalid cookie domain`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)
  - : Attempted to set a cookie on a domain that is different from the current browsing context's document domain.
- `No such window`
  - : The [`window`](/en-US/docs/Web/API/Window) object has been discarded, indicating that the tab or window has been closed.
- `Unable to set cookie`
  - : The remote end was unable to add the cookie to the cookie store.
- `Unexpected alert open`
  - : A user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), blocks execution of the command until it is dealt with.
- [`Invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Adding a cookie

With a WebDriver server running on `localhost:4444`, assume an active session has navigated to `https://example.org`. To add a cookie, send the cookie object as the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"cookie": {"name": "session_token", "value": "abc123", "secure": true, "sameSite": "Strict"}}' \
  http://localhost:4444/session/ID/cookie
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

- [Get All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetAllCookies)
- [Get Named Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetNamedCookie)
- [Delete Cookie](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteCookie)
- [Delete All Cookies](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteAllCookies)
