---
title: StylePropertyMapReadOnly.get()
slug: Web/API/StylePropertyMapReadOnly/get
tags:
- API
- CSS Typed Object Model API
- Experimental
- Houdini
- Method
- Reference
- get()
browser-compat: api.StylePropertyMapReadOnly.get
---
<p>{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>get()</code></strong> method of the
  {{domxref("StylePropertyMapReadOnly")}} interface returns a {{domxref("CSSStyleValue")}}
  object for the first value of the specified property.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>declarationBlock</var> = StylePropertyMapReadOnly.get(<var>property</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>property</dt>
  <dd>The name of the property to retrieve the value of.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("CSSStyleValue")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>Let's get just a few properties and values. Let's start by creating a link inside a
  paragraph in our HTML, and adding a definition list which we will populate with
  JavaScript:</p>

<pre class="brush: html">&lt;p&gt;
   &lt;a href="https://example.com"&gt;Link&lt;/a&gt;
&lt;/p&gt;
&lt;dl id="results"&gt;&lt;/dl&gt;</pre>

<p>We add a bit of CSS, including a custom property and an inheritable property:</p>

<pre class="brush: css">p {
  font-weight: bold;
}
a {
   --color: red;
   color: var(--color);
}</pre>

<p>We use the Element's
  <code><a href="/en-US/docs/Web/API/Element/computedStyleMap">computedStyleMap()</a></code>
  to return a <em>StylePropertyMapReadOnly</em> object. We create an array of properties
  of interest and use the StylePropertyMapReadOnly's <code>get()</code> method to get only
  those values.</p>

<pre class="brush: js">// get the element
const myElement = document.querySelector('a');

// Retrieve all computed styles with computedStyleMap()
const styleMap = myElement.computedStyleMap();

// get the &lt;dl&gt; we'll be populating
const stylesList = document.querySelector('#results');

// array of properties we're interested in
const ofInterest = ['font-weight', 'border-left-color', 'color', '--color'];

// iterate over our properties of interest
for ( let i = 0; i &lt; ofInterest.length; i++ ) {

  // properties
  const cssProperty = document.createElement('dt');
  cssProperty.innerText = ofInterest[i];
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement('dd');
  // use get() to find the value
  cssValue.innerText = styleMap.get(ofInterest[i]);
  stylesList.appendChild(cssValue);
}
</pre>

<p>{{EmbedLiveSample("Examples", 120, 300)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/Houdini/CSS_Typed_OM">CSS Typed Object Model API</a></li>
  <li><a href="/en-US/docs/Web/Houdini/learn/CSS_Typed_OM">Learning Houdini: the CSS Typed
      Object Model</a></li>
</ul>
