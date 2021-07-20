---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
- Error
- Errors
- JavaScript
- Security
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "Permission denied to access property" occurs when there was
  an attempt to access an object for which you have no permission.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Error: Permission denied to access property "x"
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("Error")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was attempt to access an object for which you have no permission. This is likely
  an {{HTMLElement("iframe")}} element loaded from a different domain for which you
  violated the <a href="/en-US/docs/Web/Security/Same-origin_policy">same-origin
    policy</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="No_permission_to_access_document">No permission to access document</h3>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"&gt;&lt;/iframe&gt;
    &lt;script&gt;
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTMLElement("iframe")}}</li>
  <li><a href="/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a></li>
</ul>
