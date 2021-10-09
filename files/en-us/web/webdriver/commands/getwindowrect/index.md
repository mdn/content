---
title: Get Window Rect
slug: Web/WebDriver/Commands/GetWindowRect
tags:
  - Command
  - Get Window Rect
  - Reference
  - WebDriver
browser-compat: webdriver.commands.GetWindowRect
---
<p>The <em>Get Window Rect</em> <a href="/en-US/docs/Web/WebDriver/Commands">command</a> of the <a href="/en-US/docs/Web/WebDriver">WebDriver</a> API returns the size and position of the given <code><a href="/en-US/docs/Web/WebDriver/WebElement">WebElement</a></code>. Many <a href="/en-US/docs/Web/WebDriver/Clients">WebDriver clients</a> present separate API methods for getting an element’s location and dimensions, but as an optimization they both use this primitive.</p>

<p>The command operates on the currently selected window, and returns size and position of the operating system window. The returned <code><a href="/en-US/docs/Web/WebDriver/WindowRect">WindowRect</a></code> can be used as input for the <a href="/en-US/docs/Web/WebDriver/SetWindowRect">Set Window Rect</a> command, which is for manipulating a window’s position and dimensions.</p>

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
   <td><code>/session/{<em>session id</em>}/window/rect</code></td>
  </tr>
 </tbody>
</table>

<h3 id="URL_parameters">URL parameters</h3>

<dl>
 <dt><code>session id</code></dt>
 <dd>Identifier of the session.</dd>
</dl>

<h3 id="Response">Response</h3>

<p>The response payload is a <code><a href="/en-US/docs/Web/WebDriver/WebWindow">WindowRect</a></code><a href="/en-US/docs/Web/WebDriver/WebWindow">:</a></p>

<dl>
 <dt><code>x</code></dt>
 <dd>Horizontal position of the operating system window associated with <code><a href="/en-US/docs/Web/API/Window">window</a></code>, equivalent to <code><a href="/en-US/docs/Web/API/Window/screenX">Window.screenX</a></code>.</dd>
 <dt><code>y</code></dt>
 <dd>Vertical position of the operating system window associated with <code><a href="/en-US/docs/Web/API/Window">window</a></code>, equivalent to <code><a href="/en-US/docs/Web/API/Window/screenY">Window.screenY</a></code>.</dd>
 <dt><code>width</code></dt>
 <dd>Width of outer bounds of the operating system window associated with <code><a href="/en-US/docs/Web/API/Window">window</a></code>, equivalent to <code><a href="/en-US/docs/Web/API/Window/outerWidth">Window.outerWidth</a></code>.</dd>
 <dt><code>height</code></dt>
 <dd>Height of the outer bounds of the operating system window associated with <code><a href="/en-US/docs/Web/API/Window">window</a></code>, equivalent to <code><a href="/en-US/docs/Web/API/Window/outerHeight">Window.outerHeight</a></code>.</dd>
</dl>

<h3 id="Errors">Errors</h3>

<dl>
 <dt><a href="/en-US/docs/Web/WebDriver/Errors/InvalidSessionID">Invalid session ID</a></dt>
 <dd>Session does not exist.</dd>
 <dt><a href="/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen">Unexpected alert open</a></dt>
 <dd>A user prompt, such as <code><a href="/en-US/docs/Web/API/Window/alert">window.alert</a></code>, blocks execution of command until it is dealt with.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>WebWindow</li>
 <li>Associated commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/SetWindowRect">Set Window Rect</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/GetWindowHandle">Get Window Handle</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/GetWindowHandles">Get Window Handles</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/CloseWindow">Close Window</a></li>
  </ul>
 </li>
</ul>
