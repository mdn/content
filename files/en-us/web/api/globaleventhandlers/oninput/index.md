---
title: GlobalEventHandlers.oninput
slug: Web/API/GlobalEventHandlers/oninput
tags:
- API
- Event Handler
- GlobalEventHandlers
- HTML DOM
- Property
- Reference
browser-compat: api.GlobalEventHandlers.oninput
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>The <strong><code>oninput</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{event("input")}} events on the {{HTMLElement("input")}},
  {{HTMLElement("select")}}, and {{HTMLElement("textarea")}} elements. It also handles
  these events on elements where {{domxref("HTMLElement.contentEditable",
  "contenteditable")}} or {{domxref("Document.designMode", "designMode")}} are turned on.
</p>

<div class="notecard note">
  <p><strong>Note:</strong> Unlike <code>oninput</code>, the
    {{domxref("GlobalEventHandlers.onchange", "onchange")}} event handler is not
    necessarily called for each alteration to an element's <code>value</code>.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>target</em>.oninput = <em>functionRef</em>;</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives an {{domxref("InputEvent")}} object as its sole
  argument.</p>

<h2 id="Example">Example</h2>

<p>This example logs the number of characters in an {{HtmlElement("input")}} element,
  every time you modify its contents.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="text" placeholder="Type something here to see its length." size="50"&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function handleInput(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<p>The following links discuss compatibility issues and fixes that may be helpful when
  working with older browsers:</p>

<ul>
  <li><a href="http://www.useragentman.com/blog/2011/05/12/fixing-oninput-in-ie9-using-html5widgets/">Fixing
      oninput in IE Using html5Widgets</a> includes polyfill for IE6-8</li>
  <li>Mathias Bynens suggests <a href="http://mathiasbynens.be/notes/oninput">binding to both input and keydown</a>
  </li>
  <li><a href="http://help.dottoro.com/ljhxklln.php">oninput event |
      dottoro</a> has notes about bugginess in IE9</li>
  <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=312094">Bug 312094 - Add
      support for &lt;select oninput&gt;</a></li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("input")}} event</li>
</ul>
