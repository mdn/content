---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
tags:
- API
- HTML DOM
- HTMLFormElement
- Method
- NeedsMarkupWork
- NeedsSpecTable
- Reference
browser-compat: api.HTMLFormElement.reset
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>HTMLFormElement.reset()</code></strong> method restores a form
  element's default values. This method does the same thing as clicking the form's reset
  button.</p>

<p>If a form control (such as a reset button) has a name or id of <var>reset</var> it will
  mask the form's reset method. It does not reset other attributes in the input, such as
  <code>disabled</code>.</p>

<p>Note that if {{domxref("Element.setAttribute", "setAttribute()")}} is called to set
  the value of a particular attribute, a subsequent call to <code>reset()</code> won’t
  reset the attribute to its default value, but instead will keep the attribute at
  whatever value the {{domxref("Element.setAttribute", "setAttribute()")}} call set it to.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>HTMLFormElement</em>.reset()
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">document.getElementById('myform').reset();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
