---
title: Invalid cookie domain
slug: Web/WebDriver/Errors/InvalidCookieDomain
tags:
  - Error
  - Reference
  - WebDriver
  - invalid cookie domain
---
<p>The <strong>invalid cookie domain</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when an illegal attempt was made to set a <a href="/en-US/docs/Glossary/Cookie">cookie</a> under a different <a href="/en-US/docs/Glossary/Domain">domain</a> than that of the current document.</p>

<p>In WebDriver it is not permissable to set cookies for other domains than the domain of the <a href="/en-US/docs/Glossary/Browsing_context">current browsing context</a>’s <a href="/en-US/docs/Web/API/Document">document</a>’s domain.</p>

<p>This error will also happen if the document is <em>cookie-averse</em>, that is if the document is not loaded via <code>http://</code>, <code>https://</code>, or <code>ftp://</code>.</p>

<h2 id="Example">Example</h2>

<h3 id="Other_domains">Other domains</h3>

<p>If the current domain were to be <code>example.com</code>, it would not be possible to <a href="/en-US/docs/Web/WebDriver/Commands/AddCookie">add a cookie</a> for the domain <code>example.org</code>:</p>

<pre class="brush: python">from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("https://example.com/")
try:
    cookie = {"name": "foo",
              "value": "bar",
              "domain": "example.org"}
    session.add_cookie(cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>InvalidCookieDomainException: https://example.org/</pre>

<h3 id="Cookie-averse_documents">Cookie-averse documents</h3>

<p>This error may also occur when you visit a cookie-averse document, such as a file on your local disk:</p>

<pre>from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
session.get("file:///home/jdoe/document.html")
try:
    foo_cookie = {"name": "foo", "value": "bar"}
    session.add_cookie(foo_cookie)
except exceptions.InvalidCookieDomainException as e:
    print(e.message)
</pre>

<p>Output:</p>

<pre>InvalidCookieDomainException: Document is cookie-averse</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Errors">List of WebDriver errors</a></li>
 <li>Relevant WebDriver commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/AddCookie">Add Cookie</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/DeleteCookie">Delete Cookie</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/DeleteAllCookies">Delete All Cookies</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/GetAllCookies">Get All Cookies</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/GetNamedCookie">Get Named Cookie</a></li>
  </ul>
 </li>
</ul>
