---
title: Stale element reference
slug: Web/WebDriver/Errors/StaleElementReference
tags:
  - Error
  - Reference
  - Stale element reference
  - WebDriver
---
<p>The <strong>stale element reference</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs because the referenced <a href="/en-US/docs/Web/WebDriver/WebElement">web element</a> is no longer attached to the <a href="/en-US/docs/Glossary/DOM">DOM</a>.</p>

<p>Every DOM element is represented in WebDriver by a unique identifying reference, known as a <em><a href="/en-US/docs/Web/WebDriver/WebElement">web element</a></em>. The web element reference is a UUID used to execute commands targeting specific elements, such as <a href="/en-US/docs/Web/WebDriver/Commands/GetElementTagName">getting an element’s tag name</a> and <a href="/en-US/docs/Web/WebDriver/Commands/GetElementProperty">retrieving a property</a> off an element.</p>

<p>When an element is no longer attached to the DOM, i.e. it has been removed from the document or the document has changed, it is said to be <em>stale</em>. Staleness occurs for example when you have a web element reference and the document it was retrieved from navigates.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Document_navigation">Document navigation</h3>

<p>Upon navigation, all web element references to the previous document will be discarded along with the document. This will cause any subsequent interaction with the <a href="/en-US/docs/Web/WebDriver/WebElement">web element</a> to fail with the stale element reference error:</p>

<pre class="brush: python">import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("&lt;strong&gt;foo&lt;/strong&gt;"))
foo = session.find_element_by_css_selector("strong")

session.get(inline("&lt;i&gt;bar&lt;/i&gt;"))
try:
    foo.tag_name
except exceptions.StaleElementReferenceException as e:
    print(e)
</pre>

<p>Output:</p>

<pre>StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed</pre>

<h3 id="Node_removal">Node removal</h3>

<p>When a document node is removed from the DOM, its web element reference will be invalidated. This will also cause any subsequent interaction with the <a href="/en-US/docs/Web/WebDriver/WebElement">web element</a> to fail with the stale element reference error:</p>

<pre class="brush: python">import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("&lt;button&gt;foo&lt;/button&gt;"))
button = session.find_element_by_css_selector("button")
session.execute_script("""
    let [button] = arguments;
    button.remove();
    """, script_args=(button,))

try:
    button.click()
except exceptions.StaleElementReferenceException as e:
    print(e)
</pre>

<p>Output:</p>

<pre>StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/WebElement">WebElement</a></li>
 <li>Associated commands:
  <ul>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElement">Find Element</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElements">Find Elements</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElementFromElement">Find Element From Element</a></li>
   <li><a href="/en-US/docs/Web/WebDriver/Commands/FindElementsFromElement">Find Elements From Element</a></li>
  </ul>
 </li>
</ul>
