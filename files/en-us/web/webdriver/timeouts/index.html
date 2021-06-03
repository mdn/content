---
title: Timeouts
slug: Web/WebDriver/Timeouts
tags:
  - WebDriver
  - timeouts
---
<p>Associated with a <a href="/en-US/docs/Web/WebDriver">WebDriver</a> session are various timeout definitions that control behavior for <a href="/en-US/docs/Web/WebDriver/Timeouts#script" rel="nofollow">script injection</a>, <a href="/en-US/docs/Web/WebDriver/Timeouts#pageload" rel="nofollow">document navigation</a>, and <a href="/en-US/docs/Web/WebDriver/Timeouts#implicit" rel="nofollow">element retrieval</a>.</p>

<p>You will find the <em><a href="#payload">timeouts object</a></em> used in a few different contexts. It can be used as configuration when <a href="/en-US/docs/Web/WebDriver/Commands/NewSession">creating a new session</a> through <a href="/en-US/docs/Web/WebDriver/Capabilities">capabilities</a>, it is returned as part of the matched, effective capabilities after the session has been created, and it is used as input and output for the <a href="/en-US/docs/Web/WebDriver/Commands/SetTimeouts">Set Timeouts</a> and <a href="/en-US/docs/Web/WebDriver/Commands/GetTimeouts">Get Timeouts</a> commands.</p>

<p>The default values can be overridden when <a href="/en-US/docs/Web/WebDriver/Commands/NewSession">creating the session</a> and they will be effective until the session is closed. If you call <a href="/en-US/docs/Web/WebDriver/Commands/SetTimeouts">Set Timeouts</a> during the session’s lifetime, the defaults are overridden and will take effect for the lifetime of the session or until <a href="/en-US/docs/Web/WebDriver/Commands/SetTimeouts">Set Timeouts</a> is called again.</p>

<h2 id="Payload">Payload</h2>

<p>The <strong>timeouts object</strong> is a JSON Object that either describes the current session’s timeout values, or which is used as input when configuring the timeouts:</p>

<dl>
 <dt><code>implicit</code></dt>
 <dd>Time in milliseconds to retry the <a href="/en-US/docs/Web/WebDriver/WebElement" rel="nofollow">element location strategy</a> when finding an element. This defaults to 0, meaning the strategy is run only once.</dd>
 <dt><code>pageLoad</code></dt>
 <dd>Time in milliseconds to wait for the document to finish loading. By default WebDriver will wait five minutes (or 300,000 ms).</dd>
 <dt><code>script</code></dt>
 <dd>Scripts injected with <a href="/en-US/docs/Web/WebDriver/Commands/ExecuteScript" rel="nofollow">Execute Script</a> or <a href="/en-US/docs/Web/WebDriver/Commands/ExecuteAsyncScript" rel="nofollow">Execute Async Script</a> will run until they hit the script timeout duration, which is also given in milliseconds. The scripts will then be interrupted and a <a href="/en-US/docs/Web/WebDriver/Errors/ScriptTimeoutError" rel="nofollow">script timeout error</a> will be returned. Defaults to 30 seconds (or 30,000 ms).</dd>
</dl>

<p>When the object is used as input for the <a href="/en-US/docs/Web/WebDriver/Commands/SetTimeouts">Set Timeouts</a> command or as part of the <a href="/en-US/docs/Web/WebDriver/Capabilities">timeouts capability</a> when <a href="/en-US/docs/Web/WebDriver/Commands/NewSession">creating a new session</a>, all fields are optional. This means you can configure zero or more of the timeout duration values individually or all at once.</p>

<p>When it is returned by the driver, either by <a href="/en-US/docs/Web/WebDriver/Commands/GetTimeouts">Get Timeouts</a> or in the matched capabilities from <a href="/en-US/docs/Web/WebDriver/Commands/NewSession">having created a session</a>, all fields will be present.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Setting_timeouts_at_session_creation">Setting timeouts at session creation</h3>

<p>You can override the default session timeouts by providing a <a href="/en-US/docs/Web/WebDriver/Capabilities">timeouts capabilities object</a> when you start a new WebDriver session:</p>

<pre class="brush: python">import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox(capabilities={"timeouts": {"implicit": 4500}})
session.get(inline("""
    &lt;h1&gt;Example&lt;/h1&gt;

    &lt;script&gt;
    // Inserts &lt;p&gt; below &lt;h1&gt; after 2.5 seconds:
    window.setTimeout(() =&gt; {
      let delayedElement = document.createElement("p");
      let h1 = document.querySelector("h1");
      document.body.insertAfter(delayedElement, h1);
    }, 2500);
    &lt;/script&gt;
    """)

# This will cause the driver to wait 4.5 seconds
# for #foo to appear in the DOM:
delayed_element = session.find_element_by_tag_name("p")</pre>

<h3 id="Setting_and_getting_timeouts_at_runtime">Setting and getting timeouts at runtime</h3>

<p>Timeouts can also be set at runtime using the Set Timeouts command. These will override the session’s current timeouts and will take effect for the entire lifetime of the session or until a subsequent call is made to the same command:</p>

<pre class="brush: python">from selenium import webdriver

session = webdriver.Firefox()

session.set_timeouts({"implicit": 4.5})
print(session.get_timeouts)
</pre>

<p>The output will be in seconds because this is the idiomatic time unit in Python:</p>

<pre>{"implicit": 4.5, "script": 300, "pageLoad": 30000}
</pre>

<p>{{QuickLinksWithSubpages}}</p>
