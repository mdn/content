---
title: Status
short-title: Status
slug: Web/WebDriver/Reference/Classic/Commands/Status
page-type: webdriver-command
browser-compat: webdriver.classic.Status
sidebar: webdriver
---

The _Status_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API reports whether the WebDriver server is ready to create a new session.

Unlike most commands, it doesn't take a session ID. You can send it before you create a session, for example to check that the server has started.

## Syntax

| Method                                              | URI template |
| --------------------------------------------------- | ------------ |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/status`    |

### Return value

An object that contains the following fields and may also include other fields with details about the server, such as its version:

- `message`
  - : A string that explains the value of `ready`.
    Its text depends on the server, and it can be empty.
- `ready`
  - : A boolean that indicates whether the server can create a new session.
    It is `false` if the server knows that a [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) command sent now would fail, for example because the server can run only one session at a time and a session is already running.
    The value `true` doesn't guarantee that a New Session command succeeds.

## Examples

### Checking whether the server is ready

With a WebDriver server running on `localhost:4444` and no session created, send the following request to check whether the server can create a session:

```bash
curl -i http://localhost:4444/status
```

The server responds that it is ready:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"message":"","ready":true}}
```

### Checking the status while a session is running

Using the same server as in the first example, assume you then created a session with [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession). Send the same request again:

```bash
curl -i http://localhost:4444/status
```

The server responds that it can't create another session because it runs only one session at a time:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"message":"Session already started","ready":false}}
```

Once you end the session with [Delete Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteSession), `ready` is `true` again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) command
- [Delete Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteSession) command
- [`session.status`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/status), the WebDriver BiDi equivalent
