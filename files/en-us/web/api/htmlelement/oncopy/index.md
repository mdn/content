---
title: HTMLElement.oncopy
slug: Web/API/HTMLElement/oncopy
tags:
  - API
  - Event Handler
  - Experimental
  - HTMLElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLElement.oncopy
---
<div>{{ APIRef("HTML DOM") }}{{SeeCompatTable}}</div>

<p>The <strong><code>oncopy</code></strong> property of the {{domxref("HTMLElement")}}
  interface is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that processes
  {{domxref("Element/copy_event", "copy")}} events.</p>

<p>The <code>copy</code> event fires when the user attempts to copy text.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>target</var>.oncopy = <var>functionRef</var>;</pre>

<h3 id="Value">Value</h3>

<p><code><var>functionRef</var></code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives a {{domxref("ClipboardEvent")}} object as its
  sole argument.</p>

<h2 id="Example">Example</h2>

<p>This example blocks every copy and paste attempt from the {{htmlElement("textarea")}}.
</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;h3&gt;Play with this text area:&lt;/h3&gt;
&lt;textarea id="editor" rows="3"&gt;Try copying and pasting text into this field!&lt;/textarea&gt;

&lt;h3&gt;Log:&lt;/h3&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const log = document.getElementById('log');

function logCopy(event) {
  log.innerText = 'Copy blocked!\n' + log.innerText;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = 'Paste blocked!\n' + log.innerText;
  event.preventDefault();
}

const editor = document.getElementById('editor');

editor.oncopy = logCopy;
editor.onpaste = logPaste;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", 700, 300)}}</p>

<h2 id="Specifications">Specifications</h2>

<p><a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncopy">WHATWG
    Standard</a></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<p>Since Firefox 13, the preference <code>dom.event.clipboardevents.enabled</code>
  controls this feature. It defaults to <code>true</code> but can be disabled.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>Clipboard API event {{domxref("Element/copy_event", "copy")}}</li>
  <li>Related event handlers
    <ul>
      <li>{{domxref("HTMLElement.oncut")}}</li>
      <li>{{domxref("HTMLElement.onpaste")}}</li>
    </ul>
  </li>
</ul>
