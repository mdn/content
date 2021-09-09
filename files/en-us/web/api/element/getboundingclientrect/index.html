---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - Boundary
  - Bounding
  - Bounds
  - CSSOM View
  - Client
  - Containing
  - DOM
  - Element
  - Enclosing
  - Method
  - Minimum
  - Rectangle
  - Reference
  - Smallest
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
browser-compat: api.Element.getBoundingClientRect
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.getBoundingClientRect()</strong></code> method returns a
  {{domxref("DOMRect")}} object providing information about the size of an element and its
  position relative to the <a href="/en-US/docs/Glossary/Viewport">viewport</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>domRect</em> = <em>element</em>.getBoundingClientRect();</pre>

<h3 id="Value">Value</h3>

<p>The returned value is a {{domxref("DOMRect")}} object which is the smallest rectangle
  which contains the entire element, including its padding and border-width. The
  <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>,
  <code>x</code>, <code>y</code>, <code>width</code>, and <code>height</code> properties
  describe the position and size of the overall rectangle in pixels. Properties other than
  <code>width</code> and <code>height</code> are relative to the top-left of the viewport.
</p>

<p><img alt="" src="element-box-diagram.png"></p>

<p>The <code>width</code> and <code>height</code> properties of the {{domxref("DOMRect")}}
  object returned by the method include the <code>padding</code> and
  <code>border-width</code>, not only the content width/height. In the standard box model,
  this would be equal to the <code>width</code> or <code>height</code> property of the
  element + <code>padding</code> + <code>border-width</code>. But
  if <code><a href="/en-US/docs/Web/CSS/box-sizing">box-sizing: border-box</a></code> is
  set for the element this would be directly equal to its <code>width</code> or
  <code>height</code>.</p>

<p>The returned value can be thought of as the union of the rectangles returned by
  {{domxref("Element.getClientRects", "getClientRects()")}} for the element, i.e., the CSS
  border-boxes associated with the element.</p>

<p>Empty border-boxes are completely ignored. If all the element's border-boxes are empty,
  then a rectangle is returned with a <code>width</code> and <code>height</code> of zero
  and where the <code>top</code> and <code>left</code> are the top-left of the border-box
  for the first CSS box (in content order) for the element.</p>

<p>The amount of scrolling that has been done of the viewport area (or any other
  scrollable element) is taken into account when computing the bounding rectangle. This
  means that the rectangle's boundary edges (<code>top</code>, <code>right</code>,
  <code>bottom</code>, <code>left</code>) change their values every time the scrolling
  position changes (because their values are relative to the viewport and not absolute).
</p>

<p>If you need the bounding rectangle relative to the top-left corner of the document,
  just add the current scrolling position to the <code>top</code> and <code>left</code>
  properties (these can be obtained using {{domxref("window.scrollX")}} and
  {{domxref("window.scrollY")}}) to get a bounding rectangle which is independent from the
  current scrolling position.</p>

<h3 id="Cross-browser_fallback">Cross-browser fallback</h3>

<p>Scripts requiring high cross-browser compatibility can use
  {{domxref("window.pageXOffset")}} and {{domxref("window.pageYOffset")}} instead of
  <code>window.scrollX</code> and <code>window.scrollY.</code> Scripts without access to
  these properties can use code like this:</p>

<pre class="brush: js">// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollTop == 'number' ? t : document.body).scrollTop
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Basic">Basic</h3>

<p>This simple example retrieves the <code>DOMRect</code> object representing the bounding
  client rect of a simple <code>&lt;div&gt;</code> element, and prints out its properties
  below it.</p>

<pre class="brush: html">&lt;div&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}</pre>

<pre class="brush: js">let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}</pre>

<p>{{EmbedLiveSample('Basic', '100%', 640)}}</p>

<p>Notice how the <code>width</code>/<code>height</code> are equal to its
  <code>width</code>/<code>height</code> + <code>padding</code>.</p>

<p>Also note how the values of <code>x</code>/<code>left</code>,
  <code>y</code>/<code>top</code>, <code>right</code>, and <code>bottom</code> are equal
  to the absolute distance from the relevant edge of the viewport to that side of the
  element, in each case.</p>

<h4 id="Scrolling">Scrolling</h4>
<p>This example demonstrates how bounding client rect is changing when document is scrolled.</p>

<pre class="brush: html notranslate">
&lt;div&gt;&lt;/div&gt;
    &lt;div id="example"&gt;&lt;/div&gt;
    &lt;div id="controls"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body { padding-bottom: 1000px; }
p { margin: 0; }</pre>

<pre class="brush: js notranslate">function update() {
  const container = document.getElementById("controls");
  const elem = document.querySelector('div');
  const rect = elem.getBoundingClientRect();

  container.innerHTML = '';
  for (let key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      container.appendChild(para);
    }
  }
}

document.addEventListener('scroll', update);
update();</pre>

<p>{{EmbedLiveSample('Scrolling', '100%', 640)}}</p>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h3 id="Notes">Notes</h3>

<p>The returned <code>DOMRect</code> object can be modified in modern browsers. This was
  not true with older versions which effectively returned <code>DOMRectReadOnly</code>.
  With IE and Edge, not being able to add missing properties to their returned <a
    href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx"><code>ClientRect</code></a>,
  object prevents backfilling <code>x</code> and <code>y</code>.</p>

<p>Due to compatibility problems (see below), it is safest to rely on only properties
  <code>left</code>, <code>top</code>, <code>right</code>, and <code>bottom</code>.</p>

<p>Properties in the returned <code>DOMRect</code> object are not own properties. While
  the <code>in</code> operator and <code>for...in</code> will find returned properties,
  other APIs such as <code>Object.keys()</code> will fail. Moreover, and unexpectedly, the
  ES2015 and newer features such as <code>Object.assign()</code> and object rest/spread
  will fail to copy returned properties.</p>

<pre class="brush: js">rect = elt.getBoundingClientRect()
// The result in emptyObj is {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
</pre>

<p><code>DOMRect</code> properties <code>top</code>, <code>left</code>,
  <code>right</code>, and <code>bottom</code> are computed using the values of the
  object's other properties.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.getClientRects", "getClientRects()")}}</li>
  <li><a href="https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx">MSDN:
      <code>getBoundingClientRect</code></a></li>
  <li><a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx">MSDN:
      <code>ClientRect</code></a>, an earlier version of <code>DOMRect</code></li>
</ul>
