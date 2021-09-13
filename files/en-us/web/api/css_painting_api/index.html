---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
tags:
  - API
  - CSS
  - CSS Paint API
  - Houdini
  - Painting
  - Reference
---
<div>{{DefaultAPISidebar("CSS Painting API")}}</div>

<p>The CSS Painting API — part of the <a href="/en-US/docs/Web/Houdini">CSS Houdini</a> umbrella of APIs — allows developers to write JavaScript functions that can draw directly into an element's background, border, or content.</p>

<h2 id="Concepts_and_usage">Concepts and usage</h2>

<p>Essentially, the CSS Painting API contains functionality allowing developers to create custom values for {{cssxref('paint()', 'paint()')}}, a CSS <code><a href="/en-US/docs/Web/CSS/image">&lt;image&gt;</a></code> function. You can then apply these values to properties like {{cssxref("background-image")}} to set complex custom backgrounds on an element.</p>

<p>For example:</p>

<pre class="brush: css">aside {
  background-image: paint(myPaintedImage);
}</pre>

<p>The API defines {{domxref('PaintWorklet')}}, a {{domxref('worklet')}} that can be used to programmatically generate an image that responds to computed style changes. To find out more about how this is used, consult <a href="/en-US/docs/Web/API/CSS_Painting_API/Guide">Using the CSS Painting API</a>.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref('PaintWorklet')}}</dt>
 <dd>Programmatically generates an image where a CSS property expects a file. Access this interface through <a href="/en-US/docs/Web/API/CSS/paintWorklet" title="paintWorklet is a static, read-only property of the CSS interface that provides access to the PaintWorklet, which programmatically generates an image where a CSS property expects a file."><code>CSS.paintWorklet</code></a>.</dd>
 <dt>{{domxref('PaintWorkletGlobalScope')}}</dt>
 <dd>The global execution context of the <code>paintWorklet</code>.</dd>
 <dt>{{domxref('PaintRenderingContext2D')}}</dt>
 <dd>
 <p>Implements a subset of the <a href="/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D API</a>. It has an output bitmap that is the size of the object it is rendering to.</p>
 </dd>
 <dt>{{domxref('PaintSize')}}</dt>
 <dd>Returns the read-only values of the output bitmap's width and height.</dd>
</dl>

<h2 id="Dictionaries">Dictionaries</h2>

<dl>
 <dt>{{domxref('PaintRenderingContext2DSettings')}}</dt>
 <dd>A dictionary providing a subset of <a href="/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a> settings.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example creates a list of items with a background image that rotates between three different colors and three widths. In a supporting browser you will see something like the image below.</p>

<p><img alt="The width and color of the background image changes based on the custom properties" src="Guide/boxbg.png"></p>

<p>To achieve this we'll define two custom CSS properties, <code>--boxColor</code> and <code>--widthSubtractor</code>.</p>

<h3>The paint worklet</h3>

<p>In our worklet, we can reference these custom properties.</p>

<pre class="brush: js">registerPaint('boxbg', class {
  static get contextOptions() { return {alpha: true}; }

  /*
     use this function to retrieve any custom properties (or regular properties, such as 'height')
     defined for the element, return them in the specified array
  */
  static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

  paint(ctx, size, props) {
    /*
       ctx -&gt; drawing context
       size -&gt; paintSize: width and height
       props -&gt; properties: get() method
    */

    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);
  }
});</pre>

<p>We used the <code>inputProperties()</code> method in the <code>registerPaint()</code> class to get the values of two custom properties set on an element that has <code>boxbg</code> applied to it and then used those within our <code>paint()</code> function. The <code>inputProperties()</code> method can return all properties affecting the element, not just custom properties.</p>

<h3>Using the paint worklet</h3>

<h4>HTML</h4>

<pre class="brush: html">&lt;ul&gt;
    &lt;li&gt;item 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
    &lt;li&gt;item 4&lt;/li&gt;
    &lt;li&gt;item 5&lt;/li&gt;
    &lt;li&gt;item 6&lt;/li&gt;
    &lt;li&gt;item 7&lt;/li&gt;
    &lt;li&gt;item 8&lt;/li&gt;
    &lt;li&gt;item 9&lt;/li&gt;
    &lt;li&gt;item 10&lt;/li&gt;
    &lt;li&gt;item 11&lt;/li&gt;
    &lt;li&gt;item 12&lt;/li&gt;
    &lt;li&gt;item 13&lt;/li&gt;
    &lt;li&gt;item 14&lt;/li&gt;
    &lt;li&gt;item 15&lt;/li&gt;
    &lt;li&gt;item 16&lt;/li&gt;
    &lt;li&gt;item 17&lt;/li&gt;
    &lt;li&gt;item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4>CSS</h4>

<p>In our CSS, we define the <code>--boxColor</code> and <code>--widthSubtractor</code> custom properties.</p>

<pre class="brush: css">li {
   background-image: paint(boxbg);
   --boxColor: hsla(55, 90%, 60%, 1.0);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   --widthSubtractor: 20;
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   --widthSubtractor: 40;
}</pre>

<h4>JavaScript</h4>

<p>In our <code>&lt;script&gt;</code> we register the worklet:</p>

<pre class="brush: js">CSS.paintWorklet.addModule('boxbg.js');</pre>

<h4>Result</h4>

<p>While you can't play with the worklet's script, you can alter the custom property values in DevTools to change the colors and width of the background image.</p>

{{EmbedGHLiveSample("css-examples/houdini/css_painting_api/example-boxbg.html", '100%', 400)}}

<h2 id="Specifications">Specifications</h2>

{{Specifications("api.PaintWorkletGlobalScope")}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>See the browser compatibility data for each CSS Painting API Interface.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/CSS_Painting_API/Guide">Using the CSS Painting API</a></li>
 <li><a href="/en-US/docs/Web/API/CSS_Typed_OM_API">CSS Typed Object Model API</a></li>
 <li><a href="/en-US/docs/Web/Houdini">CSS Houdini</a></li>
</ul>
