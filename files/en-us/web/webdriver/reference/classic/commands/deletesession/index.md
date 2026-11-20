---
title: Delete Session
short-title: Delete Session
slug: Web/WebDriver/Reference/Classic/Commands/DeleteSession
page-type: webdriver-command
browser-compat: webdriver.classic.DeleteSession
sidebar: webdriver
---

The _Delete Session_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API ends a session. After it, commands that use the session's ID return an [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID) error.

The command ends the session even if a user prompt, such as [`window.alert`](/en-US/docs/Web/API/Window/alert), is open.

When the last session ends, the browser can close all its windows, or close completely. If the browser closes its windows, it doesn't ask to confirm leaving their pages, so a page's {{domxref("Window/beforeunload_event", "beforeunload")}} handler can't stop the windows from closing.

## Syntax

| Method                                                    | URI template            |
| --------------------------------------------------------- | ----------------------- |
| [`DELETE`](/en-US/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.

## Examples

### Ending a session

With a WebDriver server running on `localhost:4444`, assume an active session has been created. To end it, send a `DELETE` request, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -X DELETE http://localhost:4444/session/ID
```

The server responds with a `null` value to indicate success:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

The session ID is no longer valid. For example, a [Get Current URL](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetCurrentURL) command for the same session returns an error:

```bash
curl -i http://localhost:4444/session/ID/url
```

```http
HTTP/1.1 404 Not Found
content-type: application/json; charset=utf-8

{"value":{"error":"invalid session id","message":"Tried to run command without establishing a connection","stacktrace":""}}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) command
- [Status](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/Status) command
