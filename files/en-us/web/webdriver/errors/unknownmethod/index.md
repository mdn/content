---
title: Unknown method
slug: Web/WebDriver/Errors/UnknownMethod
tags:
  - Error
  - Reference
  - Unknown method
  - WebDriver
---
<p>The <strong>unknown method</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when the driver does not recognize the <a href="/en-US/docs/Web/HTTP/Methods">HTTP request method</a> used for the endpoint.</p>

<p>WebDriver provides a largely REST-ish API and not all endpoints in this API has <code>GET</code>, <code>POST</code>, and <code>DELETE</code> methods. This error occurs when you try to call an endpoint with an HTTP request method it does not support.</p>

<h2 id="Examples">Examples</h2>

<p>The New Session command provides a <code>POST</code> request endpoint which lets you create new WebDriver sessions:</p>

<pre>% curl -d '{}' http://localhost:4444/session
{"sessionId":"d4605710-5a4e-4d64-a52a-778bb0c31e00","value":{"XULappId":"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}","acceptSslCerts":false,"appBuildId":"20160913030425","browserName":"firefox","browserVersion":"51.0a1","command_id":1,"platform":"LINUX","platformName":"linux","platformVersion":"4.9.0-1-amd64","processId":17474,"proxy":{},"raisesAccessibilityExceptions":false,"rotatable":false,"specificationLevel":0,"takesElementScreenshot":true,"takesScreenshot":true,"version":"51.0a1"}}</pre>

<p>It also implements the <code>DELETE</code> method for ending a session:</p>


<pre>% curl -X DELETE http://localhost:4444/session/d4605710-5a4e-4d64-a52a-778bb0c31e00
{}</pre>


<p>But it does not, for example, provide a <code>GET</code> method, and this will consequently return an unknown method error:</p>

<pre>% curl http://localhost:4444/session/650f9df3-740e-314c-958d-307e41752fae
{"value":{"error":"unknown command","message":"GET /session/650f9df3-740e-314c-958d-307e41752fae did not match a known command","stacktrace":""}}%</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands">List of WebDriver commands</a></li>
</ul>
