---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
tags:
  - CSS
  - Houdini
  - Experimental
  - Guide
  - Overview
  - Reference
---
<div>{{CSSRef}}</div>

<p><strong>CSS Houdini</strong> is a set of APIs that expose parts of the CSS engine. This makes it easier for developers to create extensions for CSS. These extensions might be to polyfill features that are not yet available in a browser, experiment with new ways of doing layout, or add creative borders or other effects.</p>

<p>While many Houdini examples showcase the creative possibilities of the APIs, there are many practical use cases. For example, you can use Houdini to create advanced custom properties with type checking and default values.</p>

<h2 id="Basic_example">Basic example</h2>

<p>A regular <a href="/en-US/docs/Web/CSS/--*">CSS custom property</a> consists of a property name and a value. Therefore I might create a custom property called <code>--background-color</code> and expect it to be given a color value. The value is then used in the CSS as if it were the color value.</p>

<pre class="brush:css">:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}</pre>

<p>In the above example however, there is nothing to stop someone using some other value for this property, perhaps setting it to a length. Having done so, anywhere that the property is used would have no background color as <code>background-color: 12px</code> is not valid. When browsers come across CSS they don't recognize as valid they throw that line away.</p>

<p>Using {{cssxref("@property")}} however, we can declare the custom property with a {{CSSxRef("@property/syntax","syntax")}} of <code>&lt;color&gt;</code>. This shows that we need this property to have a value which is a valid color.</p>

<pre class="brush:css">@property --background-color {
  syntax: '&lt;color&gt;';
  inherits: false;
  initial-value: blue;
}</pre>

<h2 id="Houdini_worklets">Houdini worklets</h2>

<p>A feature of Houdini is the {{domxref("Worklet")}}. A worklet is a module, written in JavaScript, that extends CSS using one of the Houdini APIs. You can see an example worklet on the {{domxref("PaintWorklet.registerPaint()")}} page. Once a worklet has been registered you can use it in CSS just like any other value. This means that even if you are not a JavaScript developer, you can access Houdini APIs by using worklets other people have created.</p>

<p>The <a href="https://houdini.how/">Houdini.how</a> website has a number of worklets that you can try on your own site.</p>

<h2 id="Reference">Reference</h2>

<h3 id="CSS_at_rule">CSS at-rule and descriptors</h3>

<p>The {{CSSxRef("@property")}} at-rule allows you to register an advanced custom property.</p>

<ul>
 <li>{{CSSxRef("@property")}}</li>
 <li>{{CSSxRef("@property/inherits","inherits")}}</li>
 <li>{{CSSxRef("@property/initial-value","initial-value")}}</li>
 <li>{{CSSxRef("@property/syntax","syntax")}}</li>
</ul>

<h3 id="Houdini_API_references">Houdini API references</h3>

<ul>
  <li>{{domxref("CSS_Properties_and_Values_API")}}</li>
  <li>{{domxref("CSS_Typed_OM_API")}}</li>
  <li>{{domxref("CSS_Painting_API")}}</li>
  <li>{{domxref("Worklet")}} reference</li>
</ul>

<h3 id="Houdini_guides">Houdini guides</h3>

<ul>
  <li><a href="/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide">Properties and Values API Guide</a></li>
  <li><a href="/en-US/docs/Web/API/CSS_Typed_OM_API/Guide">Typed OM API Guide</a></li>
  <li><a href="/en-US/docs/Web/API/CSS_Painting_API/Guide">Using the CSS Painting API</a></li>
</ul>

<h2 id="External_resources">External resources</h2>

<ul>
 <li><a href="http://houdini.glitch.me/">Interactive introduction to Houdini</a></li>
 <li><a href="https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/">A Practical Overview of CSS Houdini</a></li>
 <li><a href="https://web.dev/css-props-and-vals/">Smarter custom properties with Houdini's new API</a></li>
</ul>
