---
title: <menclose>
slug: Web/MathML/Element/menclose
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.menclose
---
<div>{{MathMLRef}}</div>

<p class="summary">The MathML <code>&lt;menclose&gt;</code> element renders its content inside an enclosing notation specified by the <code>notation</code> attribute.</p>

<h2 id="Attributes">Attributes</h2>

<dl>
 <dt id="attr-class-id-style">class, id, style</dt>
 <dd>Provided for use with <a href="/en-US/docs/Web/CSS">stylesheets</a>.</dd>
 <dt id="attr-displaystyle"><code>displaystyle</code></dt>
 <dd>A Boolean value specifying whether more vertical space is used for displayed equations or, if set to <code>false</code>, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when <code>displaystyle</code> is set to <code>true</code>. See also <code>movablelimits</code> on {{ MathMLElement("mo") }}.</dd>
 <dt id="attr-href">href</dt>
 <dd>Used to set a hyperlink to a specified URI.</dd>
 <dt id="attr-mathbackground">mathbackground</dt>
 <dd>The background color. You can use <code>#rgb</code>, <code>#rrggbb</code> and <a href="/en-US/docs/Web/CSS/color_value#color_keywords">HTML color names</a>.</dd>
 <dt id="attr-mathcolor">mathcolor</dt>
 <dd>The text color. You can use <code>#rgb</code>, <code>#rrggbb</code> and <a href="/en-US/docs/Web/CSS/color_value#color_keywords">HTML color names</a>.</dd>
 <dt id="attr-notation">notation</dt>
 <dd>A list of notations, separated by white space, to apply to the child elements. The symbols are each drawn as if the others are not present, and therefore may overlap. Possible values are:
 <table class="standard-table">
  <tbody>
   <tr>
    <th>Value</th>
    <th>Sample Rendering</th>
    <th>Rendering in<br>
     your browser</th>
    <th>Description</th>
   </tr>
   <tr>
    <td><code>longdiv</code> (default)</td>
    <td><img alt="longdiv" src="default.png"></td>
    <td><math> <menclose notation="longdiv"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>long division symbol</td>
   </tr>
   <tr>
    <td><code>actuarial</code></td>
    <td><img alt="actuarial" src="actuarial.png"></td>
    <td><math> <menclose notation="actuarial"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td><a href="https://en.wikipedia.org/wiki/Actuarial_notation">actuarial symbol</a></td>
   </tr>
   <tr>
    <td><code>radical</code> {{deprecated_inline}}</td>
    <td><img alt="radical" src="radical.png"></td>
    <td><math> <menclose notation="radical"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>square root symbol. Deprecated. Use {{MathMLElement("msqrt")}} instead.</td>
   </tr>
   <tr>
    <td><code>box</code></td>
    <td><img alt="box" src="box.png"></td>
    <td><math> <menclose notation="box"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>box</td>
   </tr>
   <tr>
    <td><code>roundedbox</code></td>
    <td><img alt="roundedbox" src="roundedbox.png"></td>
    <td><math> <menclose notation="roundedbox"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>rounded box</td>
   </tr>
   <tr>
    <td><code>circle</code></td>
    <td><img alt="circle" src="circle.png"></td>
    <td><math> <menclose notation="circle"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>circle</td>
   </tr>
   <tr>
    <td><code>left</code></td>
    <td><img alt="left" src="left.png"></td>
    <td><math> <menclose notation="left"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>line to the left of the contents</td>
   </tr>
   <tr>
    <td><code>right</code></td>
    <td><img alt="right" src="right.png"></td>
    <td><math> <menclose notation="right"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>line to the right of the contents</td>
   </tr>
   <tr>
    <td><code>top</code></td>
    <td><img alt="top" src="top.png"></td>
    <td><math> <menclose notation="top"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>line above of the contents</td>
   </tr>
   <tr>
    <td><code>bottom</code></td>
    <td><img alt="bottom" src="bottom.png"></td>
    <td><math> <menclose notation="bottom"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>line below of the contents</td>
   </tr>
   <tr>
    <td><code>updiagonalstrike</code></td>
    <td><img alt="updiagonalstrike" src="updiagonalstrike.png"></td>
    <td><math> <menclose notation="updiagonalstrike"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>strikeout line through contents from lower left to upper right</td>
   </tr>
   <tr>
    <td><code>downdiagonalstrike</code></td>
    <td><img alt="downdiagonalstrike" src="downdiagonalstrike.png"></td>
    <td><math> <menclose notation="downdiagonalstrike"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>strikeout line through contents from upper left to lower right</td>
   </tr>
   <tr>
    <td><code>verticalstrike</code></td>
    <td><img alt="verticalstrike" src="verticalstrike.png"></td>
    <td><math> <menclose notation="verticalstrike"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>vertical strikeout line through contents</td>
   </tr>
   <tr>
    <td><code>horizontalstrike</code></td>
    <td><img alt="horizontalstrike" src="horizontalstrike.png"></td>
    <td><math> <menclose notation="horizontalstrike"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>horizontal strikeout line through contents</td>
   </tr>
   <tr>
    <td><code>madruwb</code></td>
    <td><img alt="madruwb" src="madruwb.png"></td>
    <td><math> <menclose notation="madruwb"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td><a href="https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra">Arabic factorial symbol</a></td>
   </tr>
   <tr>
    <td><code>updiagonalarrow</code></td>
    <td><img alt="" src="updiagonalarrow.png"></td>
    <td><math> <menclose notation="updiagonalarrow"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>diagonal arrow</td>
   </tr>
   <tr>
    <td><code>phasorangle</code></td>
    <td><img alt="Screenshot of the phasorangle notation" src="phasorangle.png"></td>
    <td><math> <menclose notation="phasorangle"> <msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> </menclose> </math></td>
    <td>phasor angle</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;math&gt;

  &lt;menclose notation="circle box"&gt;
    &lt;mi&gt; x &lt;/mi&gt;
    &lt;mo&gt; + &lt;/mo&gt;
    &lt;mi&gt; y &lt;/mi&gt;
  &lt;/menclose&gt;

&lt;/math&gt;</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Gecko-specific_notes">Gecko-specific notes</h2>

<ul>
 <li>Addtional values for the <code>notation</code> attribute have been added in the following releases:

  <ul>
   <li><code>madruwb</code> in Gecko 2.0 {{GeckoRelease("2.0")}}.</li>
   <li><code>updiagonalarrow</code> in Gecko 24.0 {{GeckoRelease("24.0")}}</li>
   <li><code>phasorangle</code> in Gecko 32.0 {{GeckoRelease("32.0")}}</li>
  </ul>
 </li>
</ul>
