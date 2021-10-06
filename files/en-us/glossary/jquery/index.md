---
title: jQuery
slug: Glossary/jQuery
tags:
  - Glossary
  - JQuery
  - JavaScript
---
<p><strong>jQuery</strong> is a {{Glossary("JavaScript")}} {{Glossary("Library")}} that focuses on simplifying {{Glossary("DOM")}} manipulation, {{Glossary("AJAX")}} calls, and {{Glossary("Event")}} handling.</p>

<p>jQuery uses a format, <code>$(selector).action()</code> to assign an element(s) to an event. To explain it in detail, <code>$(selector)</code> will call jQuery to select <code>selector</code> element(s), and assign it to an event {{Glossary("API")}} called <code>.action()</code>.</p>

<pre class="brush: js">$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});</pre>

<p>The above code carries out the same function as the following code:</p>

<pre class="brush: js">window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};</pre>

<p>Or:</p>

<pre class="brush: js">window.addEventListener("load", () =&gt; {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});</pre>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "jQuery")}} on Wikipedia</li>
 <li><a href="https://jquery.com/">jQuery Official Website</a></li>
 <li><a href="https://api.jquery.com/">Official API reference documentation</a><a href="https://api.jquery.com/"> </a></li>
</ul>
