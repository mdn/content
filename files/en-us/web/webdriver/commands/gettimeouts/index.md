---
title: Get Timeouts
slug: Web/WebDriver/Commands/GetTimeouts
tags:
  - Command
  - Get Timeouts
  - Reference
  - WebDriver
browser-compat: webdriver.commands.GetTimeouts
---
<p>The <em>Get Timeouts</em> <a href="/en-US/docs/Web/WebDriver/Commands">command</a> of the <a href="/en-US/docs/Web/WebDriver">WebDriver</a> API returns the timeouts associated with the current session. The <a href="/en-US/docs/Web/WebDriver/Timeouts">session timeout</a> durations control such behavior as timeouts on <a href="/en-US/docs/Web/WebDriver/Timeouts#script">script injection</a>, <a href="/en-US/docs/Web/WebDriver/Timeouts#pageload">document navigation</a>, and <a href="/en-US/docs/Web/WebDriver/Timeouts#implicit">element retrieval</a>.</p>

<h2 id="Syntax">Syntax</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">URI template</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/en-US/docs/Web/HTTP/Methods/GET">GET</a></code></td>
   <td><code>/session/{<em>session id</em>}/timeouts</code></td>
  </tr>
 </tbody>
</table>

<h3 id="URL_parameters">URL parameters</h3>

<dl>
 <dt><code>session id</code></dt>
 <dd>Identifier of the session.</dd>
</dl>

<h3 id="Response">Response</h3>

<p>The response payload is a <code><a href="/en-US/docs/Web/WebDriver/Timeouts">Timeouts</a></code> object:</p>

<dl>
 <dt><code>implicit</code></dt>
 <dd>Time in milliseconds to retry the <a href="/en-US/docs/Web/WebDriver/WebElement">element location strategy</a> when finding an element. This defaults to 0, meaning the strategy is run only once.</dd>
 <dt><code>pageLoad</code></dt>
 <dd>Time in milliseconds to wait for the document to finish loading. By default WebDriver will wait five minutes (or 300,000 ms).</dd>
 <dt><code>script</code></dt>
 <dd>Scripts injected with <a href="/en-US/docs/Web/WebDriver/Commands/ExecuteScript">Execute Script</a> or <a href="/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript">Execute Async Script</a> will run until they hit the script timeout duration, which is also given in milliseconds. The scripts will then be interrupted and a <a href="/en-US/docs/Web/WebDriver/Errors/ScriptTimeoutError">script timeout error</a> will be returned. Defaults to 30 seconds (or 30,000 ms).</dd>
</dl>

<h3 id="Errors">Errors</h3>

<dl>
 <dt><a href="/en-US/docs/Web/WebDriver/Errors/InvalidSessionID">Invalid session ID</a></dt>
 <dd>Session does not exist.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/WebDriver/Timeouts">Timeouts</a></code> object</li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands/SetTimeouts">Set Timeouts</a> command</li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands">List of WebDriver commands</a></li>
</ul>
