---
title: Unknown method
slug: Web/WebDriver/Errors/UnknownMethod
page-type: webdriver-error
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver/Errors")}}

The **unknown method** error is a [WebDriver error](/en-US/docs/Web/WebDriver/Errors) that occurs when the driver does not recognize the [HTTP request method](/en-US/docs/Web/HTTP/Methods) used for the endpoint.

WebDriver provides a largely REST-ish API and not all endpoints in this API has `GET`, `POST`, and `DELETE` methods. This error occurs when you try to call an endpoint with an HTTP request method it does not support.

## Examples

The New Session command provides a `POST` request endpoint which lets you create new WebDriver sessions:

```bash
% curl -d '{}' http://localhost:4444/session
{"sessionId":"d4605710-5a4e-4d64-a52a-778bb0c31e00","value":{"XULappId":"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}","acceptSslCerts":false,"appBuildId":"20160913030425","browserName":"firefox","browserVersion":"51.0a1","command_id":1,"platform":"LINUX","platformName":"linux","platformVersion":"4.9.0-1-amd64","processId":17474,"proxy":{},"raisesAccessibilityExceptions":false,"rotatable":false,"specificationLevel":0,"takesElementScreenshot":true,"takesScreenshot":true,"version":"51.0a1"}}
```

It also implements the `DELETE` method for ending a session:

```bash
% curl -X DELETE http://localhost:4444/session/d4605710-5a4e-4d64-a52a-778bb0c31e00
{}
```

But it does not, for example, provide a `GET` method, and this will consequently return an unknown method error:

```bash
% curl http://localhost:4444/session/650f9df3-740e-314c-958d-307e41752fae
{"value":{"error":"unknown command","message":"GET /session/650f9df3-740e-314c-958d-307e41752fae did not match a known command","stacktrace":""}}%
```

## See also

- [List of WebDriver errors](/en-US/docs/Web/WebDriver/Errors)
- [List of WebDriver commands](/en-US/docs/Web/WebDriver/Commands)
