---
title: Javascript error
slug: Web/WebDriver/Errors/JavaScriptError
tags:
  - Error
  - JavaScript error
  - Reference
  - WebDriver
---
<p>The <strong>Javascript</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when a script the supplied by the user fails to execute.</p>

<p>The underlying cause of the execution error is often supplied in the error message, along with a stacktrace provided by the JavaScript engine in the browser.</p>

<h2 id="Example">Example</h2>

<p>Consider the following injected script which tries to use an undefined variable. In JavaScript this normally causes a ReferenceError to be thrown. WebDriver catches this error and serializes it as a JavaScript error:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("return foo")
except exceptions.JavascriptException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>JavascriptException: ReferenceError: foo is not defined</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li>Associated commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/ExecuteScript">Execute Script</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript">Execute Async Script</a></li>
  </ul>
 </li>
</ul>
