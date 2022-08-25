---
title: Unknown command
slug: Web/WebDriver/Errors/UnknownCommand
tags:
  - Error
  - Reference
  - Unknown command
  - WebDriver
---
The **unknown command** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs when the driver does not recognize the command/HTTP endpoint.

## Examples

The `/session/{session id}/foo` endpoint does not exist, and will return an unknown command error with a [`404 Not Found`](/en-US/docs/Web/HTTP/Status/404) HTTP status code:

```bash
curl -i -d '{}' http://localhost:4444/session/foo
```

```http
HTTP/1.1 404 Not Found
Connection: close
Content-Type: application/json; charset=utf-8
Cache-Control: no-cache
Content-Length: 113
Date: Fri, 30 Mar 2018 15:30:51 GMT

{"value":{"error":"unknown command","message":"POST /session/asd did not match a known command","stacktrace":""}}
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Errors)
- [List of WebDriver commands](/en-US/docs/Web/WebDriver/Commands)
