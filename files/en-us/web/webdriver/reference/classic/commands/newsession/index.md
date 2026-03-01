---
title: New Session
short-title: New Session
slug: Web/WebDriver/Reference/Classic/Commands/NewSession
page-type: webdriver-command
browser-compat: webdriver.classic.NewSession
sidebar: webdriver
---

The _New Session_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API creates a new WebDriver session with the browser.
The session identifier returned in the response is required for all subsequent commands.

## Syntax

| Method                                                | URI template |
| ----------------------------------------------------- | ------------ |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session`   |

### Payload

- `capabilities`
  - : Used to define the features the driver must satisfy when creating a new session.
    See [Capabilities](/en-US/docs/Web/WebDriver/Reference/Classic/Capabilities#list_of_capabilities) for available options.

### Response

The response payload is a JSON object with:

- `sessionId`
  - : The unique identifier of the session.
- `capabilities`
  - : The negotiated capabilities of the session.

### Errors

- Session not created
  - : A new session could not be created.

## Examples

### Starting a new session

With a WebDriver server running on `localhost:4444`, the following command starts a new WebDriver session requesting Firefox as the browser:

```bash
curl -i -H "Content-Type: application/json" -d '{"capabilities": {"alwaysMatch": {"browserName": "firefox"}}}' http://localhost:4444/session
```

The output will look similar to the following, where `27c8437e-5e42-43f9-a26f-2db0fd509ec1` is the unique identifier of this session:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"sessionId":"27c8437e-5e42-43f9-a26f-2db0fd509ec1","capabilities":{"acceptInsecureCerts":false,"browserName":"firefox","browserVersion":"147.0.4","pageLoadStrategy":"normal","platformName":"mac","proxy":{},"setWindowRect":true,"strictFileInteractability":false,"timeouts":{"implicit":0,"pageLoad":300000,"script":30000}}}}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Capabilities](/en-US/docs/Web/WebDriver/Reference/Classic/Capabilities)
