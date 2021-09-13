---
title: RadioNodeList.value
slug: Web/API/RadioNodeList/value
tags:
- HTML DOM
- Property
- RadioNodeList
- Reference
browser-compat: api.RadioNodeList.value
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>If the underlying element collection contains radio buttons, the
  <strong><code>RadioNodeList.value</code></strong> property represents the checked radio
  button. On retrieving the <code>value</code> property, the <code>value</code> of the
  currently <code>checked</code> radio button is returned as a string. If the collection
  does not contain any radio buttons or none of the radio buttons in the collection is in
  <code>checked</code> state, the empty string is returned. On setting the
  <code>value</code> property, the first radio button input element whose
  <code>value</code> property is equal to the new value will be set to
  <code>checked</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>value</em> = <em>radioNodeList</em>.value;
<em>radioNodeList</em>.value = <em>string</em>;
</pre>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;label&gt;&lt;input type="radio" name="color" value="blue"&gt;Blue&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="color" value="red"&gt;Red&lt;/label&gt;
&lt;/form&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// Get the form
const form = document.forms[0];

// Get the form's radio buttons
const radios = form.elements['color'];

// Choose the "red" option
radios.value = 'red';</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}
    elements.</li>
</ul>
