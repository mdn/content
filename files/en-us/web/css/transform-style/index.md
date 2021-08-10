---
title: transform-style
slug: Web/CSS/transform-style
tags:
  - CSS
  - CSS Property
  - CSS Transforms
  - Experimental
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.transform-style
---
<div>{{CSSRef}}</div>

<p>The <strong><code>transform-style</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.</p>

<div>{{EmbedInteractiveExample("pages/css/transform-style.html")}}</div>

<p>If flattened, the element's children will not exist on their own in the 3D-space.</p>

<p>As this property is not inherited, it must be set for all non-leaf descendants of the element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>flat</code></dt>
 <dd>Indicates that the children of the element are lying in the plane of the element itself.</dd>
 <dt><code>preserve-3d</code></dt>
 <dd>Indicates that the children of the element should be positioned in the 3D-space.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Transform_style_demonstration">Transform style demonstration</h3>

<p>In this example we have a 3D cube created using transforms. The parent container of the cube faces has <code>transform-style: preserve-3d</code> set on it by default, so it is transformed in the 3D space and you can see it as intended.</p>

<p>We also provide a checkbox allowing you to toggle between this, and <code>transform-style: flat</code>. In this alternative state, the cube faces are all flattened onto the plane of their parent, and you might not be able to see them at all, depending on the browser you are using.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;section id="example-element"&gt;
  &lt;div class="face front"&gt;1&lt;/div&gt;
  &lt;div class="face back"&gt;2&lt;/div&gt;
  &lt;div class="face right"&gt;3&lt;/div&gt;
  &lt;div class="face left"&gt;4&lt;/div&gt;
  &lt;div class="face top"&gt;5&lt;/div&gt;
  &lt;div class="face bottom"&gt;6&lt;/div&gt;
&lt;/section&gt;

&lt;div class="checkbox"&gt;
  &lt;label for="preserve"&gt;&lt;code&gt;preserve-3d&lt;/code&gt;&lt;/label&gt;
  &lt;input type="checkbox" id="preserve" checked&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
    background: rgba(90,90,90,.7);
    transform: translateZ(50px);
}

.back {
    background: rgba(0,210,0,.7);
    transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210,0,0,.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0,0,210,.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210,210,0,.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210,0,210,.7);
  transform: rotateX(-90deg) translateZ(50px);
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const cube = document.getElementById('example-element');
const checkbox = document.getElementById('preserve');

checkbox.addEventListener('change', () =&gt; {
  if(checkbox.checked) {
    cube.style.transformStyle = 'preserve-3d';
  } else {
    cube.style.transformStyle = 'flat';
  }
})</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/CSS/Using_CSS_transforms">Using CSS transforms</a></li>
</ul>
