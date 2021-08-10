---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Filter Effects
  - NeedsCompatTable
  - Reference
browser-compat: css.types.filter-function
---
<div>{{CSSRef}}</div>

<p>The <code><strong>&lt;filter-function&gt;</strong></code> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Types">data type</a> represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>&lt;filter-function&gt;</code> data type is specified using one of the filter functions listed below. Each function requires an argument which, if invalid, results in no filter being applied.</p>

<dl>
 <dt>{{cssxref("filter-function/blur()", "blur()")}}</dt>
 <dd>Blurs the image.</dd>
 <dt>{{cssxref("filter-function/brightness()", "brightness()")}}</dt>
 <dd>Makes the image brighter or darker.</dd>
 <dt>{{cssxref("filter-function/contrast()", "contrast()")}}</dt>
 <dd>Increases or decreases the image's contrast.</dd>
 <dt>{{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}</dt>
 <dd>Applies a drop shadow behind the image.</dd>
 <dt>{{cssxref("filter-function/grayscale()", "grayscale()")}}</dt>
 <dd>Converts the image to grayscale.</dd>
 <dt>{{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}</dt>
 <dd>Changes the overall hue of the image.</dd>
 <dt>{{cssxref("filter-function/invert()", "invert()")}}</dt>
 <dd>Inverts the colors of the image.</dd>
 <dt>{{cssxref("filter-function/opacity()", "opacity()")}}</dt>
 <dd>Makes the image transparent.</dd>
 <dt>{{cssxref("filter-function/saturate()", "saturate()")}}</dt>
 <dd>Super-saturates or desaturates the input image.</dd>
 <dt>{{cssxref("filter-function/sepia()", "sepia()")}}</dt>
 <dd>Converts the image to sepia.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Filter_function_comparison">Filter function comparison</h3>

<p>This example provides a simple graphic, along with a select menu to allow you to choose between the different types of filter function, and a slider to allow you to vary the values used inside the filter function. Updating the controls updates the filter effect in real time, allowing you to investigate the effects of different filters.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;&lt;/div&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;label for="filter-select"&gt;Choose a filter function:&lt;/label&gt;
    &lt;select id="filter-select"&gt;
      &lt;option selected&gt;blur&lt;/option&gt;
      &lt;option&gt;brightness&lt;/option&gt;
      &lt;option&gt;contrast&lt;/option&gt;
      &lt;option&gt;drop-shadow&lt;/option&gt;
      &lt;option&gt;grayscale&lt;/option&gt;
      &lt;option&gt;hue-rotate&lt;/option&gt;
      &lt;option&gt;invert&lt;/option&gt;
      &lt;option&gt;opacity&lt;/option&gt;
      &lt;option&gt;saturate&lt;/option&gt;
      &lt;option&gt;sepia&lt;/option&gt;
    &lt;/select&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;input type="range"&gt;&lt;output&gt;&lt;/output&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;p&gt;Current value: &lt;code&gt;&lt;/code&gt;&lt;/p&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  width: 300px;
  height: 300px;
  background: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png) no-repeat center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');
const slider = document.querySelector('input');
const output = document.querySelector('output');
const curValue = document.querySelector('p code');

selectElem.addEventListener('change', () =&gt; {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener('input', () =&gt; {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  if(filter === 'blur') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 30;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 4;
    slider.step = 0.05;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'drop-shadow') {
    slider.value = 0;
    slider.min = -20;
    slider.max = 40;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if(filter === 'opacity') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if(filter === 'hue-rotate') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 360;
    slider.step = 1;
    slider.setAttribute('data-unit', 'deg');
  }
}

function setDiv(filter) {
  if(filter === 'drop-shadow') {
    divElem.style.filter = `${selectElem.value}(${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(slider.value)}${slider.getAttribute('data-unit')} ${Math.round(Math.abs(slider.value/2))}${slider.getAttribute('data-unit')})`;
  } else {
    divElem.style.filter = `${selectElem.value}(${slider.value}${slider.getAttribute('data-unit')}`;
  }

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `filter: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Filter_function_comparison', '100%', 500)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}</li>
</ul>
