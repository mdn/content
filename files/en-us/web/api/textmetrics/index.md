---
title: TextMetrics
slug: Web/API/TextMetrics
tags:
  - API
  - Canvas
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics
---
<div>{{APIRef("Canvas API")}}</div>

<p>The <strong><code>TextMetrics</code></strong> interface represents the dimensions of a piece of text in the canvas; a <code>TextMetrics</code> instance can be retrieved using the {{domxref("CanvasRenderingContext2D.measureText()")}} method.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("TextMetrics.width")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the calculated width of a segment of inline text in CSS pixels. It takes into account the current font of the context.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxLeft")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the left side of the bounding rectangle of the given text, in CSS pixels. The distance is measured parallel to the baseline.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxRight")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the right side of the bounding rectangle of the given text, in CSS pixels. The distance is measured parallel to the baseline.</dd>
 <dt>{{domxref("TextMetrics.fontBoundingBoxAscent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.fontBoundingBoxDescent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxAscent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the bounding rectangle used to render the text, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.actualBoundingBoxDescent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.emHeightAscent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the top of the <em>em</em> square in the line box, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.emHeightDescent")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the bottom of the <em>em</em> square in the line box, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.hangingBaseline")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the hanging baseline of the line box, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.alphabeticBaseline")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the alphabetic baseline of the line box, in CSS pixels.</dd>
 <dt>{{domxref("TextMetrics.ideographicBaseline")}} {{readonlyInline}}</dt>
 <dd>Is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the ideographic baseline of the line box, in CSS pixels.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Baselines_illustrated">Baselines illustrated</h3>

<p>This example demonstrates the baselines the <code>TextMetrics</code> object holds. The default baseline is the <code>alphabeticBaseline</code>. See also the {{domxref("CanvasRenderingContext2D.textBaseline")}} property.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas" width="550" height="500"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const baselinesAboveAlphabetic = ['fontBoundingBoxAscent', 'actualBoundingBoxAscent',
                   'emHeightAscent', 'hangingBaseline'];
const baselinesBelowAlphabetic = ['ideographicBaseline', 'emHeightDescent',
                   'actualBoundingBoxDescent', 'fontBoundingBoxDescent'];
const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
ctx.font = '25px serif';
ctx.strokeStyle = 'red';

baselines.forEach(function (baseline, index) {
  let text = 'Abcdefghijklmnop (' + baseline + ')';
  let textMetrics = ctx.measureText(text);
  let y = 50 + index * 50;
  ctx.beginPath();
  ctx.fillText(text, 0, y);
  let lineY = y - Math.abs(textMetrics[baseline]);
  if (baselinesBelowAlphabetic.includes(baseline)) {
    lineY = y + Math.abs(textMetrics[baseline]);
  }
  ctx.moveTo(0, lineY);
  ctx.lineTo(550, lineY);
  ctx.stroke();

});
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Baselines_illustrated', 700, 550) }}</p>

<h3 id="Measuring_text_width">Measuring text width</h3>

<p>When measuring the x-direction of a piece of text, the sum of <code>actualBoundingBoxLeft</code> and <code>actualBoundingBoxRight</code> can be wider than the width of the inline box (<code>width</code>), due to slanted/italic fonts where characters overhang their advance width.</p>

<p>It can therefore be useful to use the sum of <code>actualBoundingBoxLeft</code> and <code>actualBoundingBoxRight</code> as a more accurate way to get the absolute text width:</p>

<pre class="brush: js">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const text = 'Abcdefghijklmnop';
ctx.font = 'italic 50px serif';
const textMetrics = ctx.measureText(text);

console.log(textMetrics.width);
// 459.8833312988281

console.log(Math.abs(textMetrics.actualBoundingBoxLeft) +
            Math.abs(textMetrics.actualBoundingBoxRight));
// 462.8833333333333</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Creator method in {{domxref("CanvasRenderingContext2D")}}</li>
 <li>The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}</li>
</ul>
