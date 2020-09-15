---
title: Invalid session ID
slug: Web/WebDriver/Errors/InvalidSessionID
tags:
  - Error
  - Reference
  - WebDriver
  - invalid session id
---
<p>The <strong>invalid session ID</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when the server does not recognize the unique session identifier. This happens if the <a href="/en-US/docs/Web/WebDriver/Commands/DeleteSession">session has been deleted</a> or if the session ID is invalid.</p>

<h2 id="Example">Example</h2>

<h3 id="Explicit_session_deletion">Explicit session deletion</h3>

<p>A WebDriver session is explicitly deleted when quitting:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))
session.quit()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4</pre>

<h3 id="Implicit_session_deletion">Implicit session deletion</h3>

<p>The session can also be <em>implicitly deleted</em> if you close the last window or tab:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))

# closes current window/tab
session.close()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li><a href="/en-US/docs/Web/WebDriver/Errors/SessionNotCreated">Session not created</a></li>
 <li>Related WebDriver commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/NewSession">New Session</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/DeleteSession">Delete Session</a></li>
  </ul>
 </li>
</ul>
