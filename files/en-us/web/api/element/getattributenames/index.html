---
title: Element.getAttributeNames()
slug: Web/API/Element/getAttributeNames
tags:
- API
- Attribute
- DOM
- Element
- Method
- getAttributeNames
browser-compat: api.Element.getAttributeNames
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>getAttributeNames()</code></strong> method of the
  {{domxref("Element")}} interface returns the attribute names of the element as an
  {{jsxref("Array")}} of strings. If the element has no attributes it returns an empty
  array.</p>

<p>Using <code>getAttributeNames()</code> along with
  {{domxref("Element.getAttribute","getAttribute()")}}, is a memory-efficient and
  performant alternative to accessing {{domxref("Element.attributes")}}.</p>

<p>The names returned by <strong><code>getAttributeNames()</code></strong> are <em>qualified</em> attribute names, meaning that attributes with a namespace prefix have their names returned with that namespace prefix (<em>not</em> the actual namespace), followed by a colon, followed by the attribute name (for example, <strong><code>xlink:href</code></strong>), while any attributes which have no namespace prefix have their names returned as-is (for example, <strong><code>href</code></strong>).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>let attributeNames</em> = element.getAttributeNames();
</pre>

<h2 id="Example">Example</h2>

<p>The following example shows how:</p>

<ul>
  <li>For an attribute which has a namespace prefix, <code>getAttributeNames()</code> returns that namespace prefix along with the attribute name.</li>
  <li>For an attribute which has no namespace prefix, <code>getAttributeNames()</code> returns just the attribute name, as-is.</li>
</ul>

<p>It’s important to understand that:
<ol>
  <li>An attribute can be present in the DOM with a namespace but lacking a namespace prefix.</li>
  <li>For an attribute in the DOM that has a namespace but lacks a namespace prefix, <code>getAttributeNames()</code> will return just the attribute name, with no indication that the attribute is in a namespace.</li>
</ol>

<p>The example below includes such a “namespaced but without a namespace prefix” case.</p>

<pre class="brush:js">
const element = document.createElement('a')

// set "href" attribute with no namespace and no namespace prefix
element.setAttribute('href', 'https://example.com')
// set "href" attribute with namespace and also "xlink" namespace prefix
element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'https://example.com')
// set "show" attribute with namespace but no namespace prefix
element.setAttributeNS('http://www.w3.org/1999/xlink', 'show', 'new')

// Iterate over element's attributes
for (let name of element.getAttributeNames()) {
  let value = element.getAttribute(name);
  console.log(name, value);
}

// logs:
// href https://example.com
// xlink:href https://example.com
// show new
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush:js">if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i &lt; length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
