---
title: Window.getDefaultComputedStyle()
slug: Web/API/window/getDefaultComputedStyle
tags:
- API
- CSS
- Method
- Reference
browser-compat: api.Window.getDefaultComputedStyle
---
<div>{{APIRef("CSSOM")}} {{Non-standard_header}}</div>

<p>The <strong><code>getDefaultComputedStyle()</code></strong> method gives the default <a
    href="/en-US/docs/Web/CSS/computed_value">computed values</a> of all the CSS
  properties of an element, ignoring author styling. That is, only user-agent and user
  styles are taken into account.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>style</em> = window.getDefaultComputedStyle(<em>element</em> [, <em>pseudoElt</em>]);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>element</code></dt>
  <dd>The {{domxref("Element")}} for which to get the computed style.</dd>
  <dt><code>pseudoElt</code> {{optional_inline}}</dt>
  <dd>A string specifying the pseudo-element to match. Must be <code>null</code> (or not
    specified) for regular elements.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The returned <code>style</code> is a <a
    href="/en-US/docs/Web/API/CSSStyleDeclaration"><code>CSSStyleDeclaration</code></a>
  object. The object is of the same type as the object returned by
  {{domxref("Window.getComputedStyle()")}}, but only takes into account user-agent and
  user rules.</p>

<h2 id="Example">Example</h2>

<h3 id="Simple_example">Simple example</h3>

<pre class="brush: js">var elem1 = document.getElementById("elemId");
var style = window.getDefaultComputedStyle(elem1);
</pre>

<h3 id="Longer_example">Longer example</h3>

<pre class="brush: html">&lt;style&gt;
#elem-container {
  position: absolute;
  left:     100px;
  top:      200px;
  height:   100px;
}
&lt;/style&gt;

&lt;div id="elem-container"&gt;dummy&lt;/div&gt;
&lt;div id="output"&gt;&lt;/div&gt;

&lt;script&gt;
  var elem = document.getElementById("elem-container");
  var theCSSprop = window.getDefaultComputedStyle(elem).position;
  document.getElementById("output").innerHTML = theCSSprop; // Will output "static"
&lt;/script&gt;</pre>

<h3 id="Use_with_pseudo-elements">Use with pseudo-elements</h3>

<p>The <code>getDefaultComputedStyle()</code> method can pull style info from
  pseudo-elements (e.g., {{cssxref("::before")}} or {{cssxref("::after")}}).</p>

<pre class="brush: html">&lt;style&gt;
 h3:after {
   content: ' rocks!';
 }
&lt;/style&gt;

&lt;h3&gt;generated content&lt;/h3&gt;

&lt;script&gt;
  var h3       = document.querySelector('h3'),
      result   = getDefaultComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns 'none'
&lt;/script&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>The returned value is, in certain known cases, expressly incorrect by deliberate
  intent. In particular, to avoid the so called CSS History Leak security issue, browsers
  may expressly "lie" about the used value for a link and always return values as if a
  user has never visited the linked site, and/or limit the styles that can be applied
  using the <code>:visited</code> pseudo-selector. See <a
    href="http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/">http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/</a>
  and <a
    href="http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/">http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/</a>
  for details of the examples of how this is implemented.</p>

<h2 id="Specifications">Specifications</h2>

<p>Proposed to the CSS working group.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
