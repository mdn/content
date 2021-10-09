---
title: Close Window
slug: Web/WebDriver/Commands/CloseWindow
tags:
  - Close Window
  - Command
  - Reference
  - WebDriver
browser-compat: webdriver.commands.CloseWindow
---
<p>The <em>Close Window</em> <a href="/en-US/docs/Web/WebDriver/Command">command</a> of the <a href="/en-US/docs/Web/WebDriver">WebDriver</a> API closes the current top-level browsing context (window or tab) and returns with the list of currently open <code><a href="/en-US/docs/Web/WebDriver/WebWindow">WebWindow</a></code>s. If it is the last window that is being closed, the WebDriver session will implicitly be deleted. Subsequent commands after the session is ended will therefore cause <a href="/en-US/docs/Web/WebDriver/Errors/InvalidSessionID">invalid session ID</a> errors.</p>

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
   <td><code><a href="/en-US/docs/Web/HTTP/Methods/DELETE">DELETE</a></code></td>
   <td><code>/session/{<em>session id</em>}/window</code></td>
  </tr>
 </tbody>
</table>

<h3 id="URL_parameters">URL parameters</h3>

<dl>
 <dt><code>session id</code></dt>
 <dd>Identifier of the session.</dd>
</dl>

<h3 id="Errors">Errors</h3>

<dl>
 <dt><a href="/en-US/docs/Web/WebDriver/Errors/InvalidSessionID">Invalid session ID</a></dt>
 <dd>Session does not exist.</dd>
 <dt><a href="/en-US/docs/Web/WebDriver/Errors/UnexpectedAlertOpen">Unexpected alert open</a></dt>
 <dd>A user prompt, such as <code><a href="/en-US/docs/Web/API/Window/alert">window.alert</a></code>, blocks execution of command until it is dealt with.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>Python:</p>

<pre class="brush: python">from selenium import webdriver

session = webdriver.Firefox()
original_window = session.window_handle

new_window = session.execute_script("return window.open()")
session.switch_to.window(new_window)

session.close()
session.switch_to.window(original_window)
</pre>

<p>C#:</p>

<pre class="brush: cpp">using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();
            string original_window = session.CurrentWindowHandle;// Optional if you want to store the handle in a variable

            session.ExecuteScript("window.open()");
            session.SwitchTo().Window(session.WindowHandles[1]); // Switch to the second window

            session.Close(); // Close current window
            session.SwitchTo().Window(session.WindowHandles[0]); // Switch back to the first window
        }
    }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Commands/SwitchToWindow">Switch To Window</a> command</li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands/GetWindowHandle">Get Window Handle</a> command</li>
 <li><a href="/en-US/docs/Web/WebDriver/Commands/GetWindowHandles">Get Window Handles</a> command</li>
</ul>
