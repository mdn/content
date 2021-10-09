---
title: Script timeout
slug: Web/WebDriver/Errors/ScriptTimeout
tags:
  - Error
  - Reference
  - Script timeout
  - WebDriver
---
<p>The <strong>script timeout</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when a script the user has provided did not complete before the session’s <a href="/en-US/docs/Web/WebDriver/Capabilities#script-timeout">script timeout</a> duration expired.</p>

<p>The script timeout duration is a configurable capability, which means you can change how long it will take before the driver interrupts an injected script. The driver will by default wait 30 seconds before interrupting the script and returning with a script timeout error, but this can be both extended, limited, and be set to indefinite.</p>

<p>If the session script timeout duration is set to indefinite by using a <code>null</code> value, you are at risk of putting the session into a non-recoverable state. Be aware that this should be used with caution.</p>

<h2 id="Example">Example</h2>

<p>Consider the following asynchronous script that will resolve the promise, or invoke the callback, after 35 seconds have passed:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("""
        let [resolve] = arguments;
        window.setTimeout(resolve, 35000);
        """)
except exceptions.ScriptTimeoutException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>ScriptTimeoutException: Timed out after 35000 ms</pre>

<p>However, it is possible to <em>extend</em> the session’s default script timeout by using capabilities if you have a script that you expect will take longer:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"alwaysMatch": {"timeouts": {"script": 150000}}})
session.execute_script("""
    let [resolve] = arguments;
    window.setTimeout(resolve, 35000);
    """)
print("finished successfully")
</pre>

<p>Output:</p>

<pre>finished successfully</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li>Associated commands and types:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Errors/JavaScriptError">JavaScript error</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/ExecuteScript">Execute Script</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript">Execute Async Script</a></li>
  </ul>
 </li>
</ul>
