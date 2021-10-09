---
title: Unknown command
slug: Web/WebDriver/Errors/UnknownCommand
tags:
  - Error
  - Reference
  - Unknown command
  - WebDriver
---
<p>The <strong>unknown command</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when the driver does not recognize the command/HTTP endpoint.</p>

<h2 id="Examples">Examples</h2>

<p>The <code>/session/{session id}/foo</code> endpoint does not exist, and will return an unknown command error with a <code><a href="/en-US/docs/Web/HTTP/Status/404">404 Not Found</a></code> HTTP status code:</p>

<pre>% curl -i -d '{}' http://localhost:4444/session/foo
HTTP/1.1 404 Not Found
Connection: close
Content-Type: application/json; charset=utf-8
Cache-Control: no-cache
Content-Length: 113
Date: Fri, 30 Mar 2018 15:30:51 GMT

{"value":{"error":"unknown command","message":"POST /session/asd did not match a known command","stacktrace":""}}</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands">List of WebDriver commands</a></li>
</ul>
