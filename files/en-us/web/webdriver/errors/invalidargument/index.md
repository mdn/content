---
title: Invalid argument
slug: Web/WebDriver/Errors/InvalidArgument
tags:
  - Error
  - Reference
  - WebDriver
  - invalid argument
---
<p>The <strong>invalid argument</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when the arguments passed to a <a href="/en-US/docs/Web/WebDriver/Commands">command</a> are either invalid or malformed.</p>

<p>Invalid argument errors can be likened to <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError">TypeError</a></code>s in <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, in that they can occur for a great many APIs when the input value is not of the expected type or malformed in some way. See the type- and bounds constraints for each <a href="/en-US/docs/Web/WebDriver/Commands">WebDriver command</a>.</p>

<h2 id="Example">Example</h2>

<p>It is for example not possible to set a window size to a negative value:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.set_window_size(-100, 0)
except exceptions.InvalidArgumentException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>InvalidArgumentException: Expected -100 to be &gt;= 0
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands">List of WebDriver commands</a></li>
</ul>
