---
title: CSS data types
slug: Web/CSS/CSS_Types
tags:
  - CSS
  - CSS Data Type
  - Guide
  - Index
  - Overview
  - Reference
  - Syntax
  - Types
  - data types
  - list
---
<div>{{CSSRef}}</div>

<p><strong>CSS data types</strong> define typical values (including keywords and units) accepted by CSS properties and functions. They are a special kind of <a href="https://www.w3.org/TR/css3-values/#component-types">component value type</a>.</p>

<p>The most commonly-used types are defined in the <a href="/en-US/docs/Web/CSS/CSS_Values_and_Units">CSS Values and Units</a> specification. This specification also defines <a href="/en-US/docs/Web/CSS/CSS_Functions">functional notations</a>, which allow for more complex types or processing. Other types are defined in the specifications to which they apply.</p>

<p>Below you will find a reference to the types that you are most likely to come across, however it is not a comprehensive reference for all types defined in every CSS specification.</p>

<h2 id="Syntax">Syntax</h2>

<p>In formal CSS syntax, data types are denoted by a keyword placed between the inequality signs "<code>&lt;</code>" and "<code>&gt;</code>".</p>

<h2 id="Textual_data_types">Textual data types</h2>

<p>These types include keywords and identifiers as well as strings, and urls.</p>

<dl>
 <dt>Pre-defined keywords</dt>
 <dd>Keywords with a pre-defined meaning, for example the value of <code>collapse</code> for the {{cssxref("border-collapse")}} property.</dd>
 <dt>CSS-wide keyword: <code>initial</code></dt>
 <dd>The value specified as the property's initial value.</dd>
 <dt>CSS-wide keyword: <code>inherit</code></dt>
 <dd>The computed value of the property on the element's parent.</dd>
 <dt>CSS-wide keyword: <code>unset</code></dt>
 <dd>Acts as <code>inherit</code> or <code>initial</code> depending on whether the property is inherited or not.</dd>
 <dt><code>&lt;custom-ident&gt;</code></dt>
 <dd>A user-defined identifier, for example the name assigned using the {{cssxref("grid-area")}} property. See more information on the {{cssxref("&lt;custom-ident&gt;")}} page.</dd>
 <dt><code>&lt;dashed-ident&gt;</code></dt>
 <dd>A <code>&lt;custom-ident&gt;</code> with the additional restriction that it must start with two dashes, for example with <a href="/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS Custom Properties</a>. See more information on the {{cssxref("&lt;dashed-ident&gt;")}} page.</dd>
 <dt><code>&lt;string&gt;</code></dt>
 <dd>A quoted string, such as used for a value of the {{cssxref("content")}} property. See more information on the {{cssxref("&lt;string&gt;")}} type.</dd>
 <dt><code>&lt;url&gt;</code></dt>
 <dd>A pointer to a resource, for example as the value of {{cssxref("background-image")}}. See more information on the {{cssxref("&lt;url&gt;")}} page.</dd>
</dl>

<h2 id="Numeric_data_types">Numeric data types</h2>

<p>These data types are used to indicate quantities, indexes, and positions. The majority of these are defined in the Values and Units specification, however additional types are described in other specifications where they are specific to that specification alone — for example the <code>fr</code> unit in <a href="https://www.w3.org/TR/css-grid-1/#fr-unit">CSS Grid Layout</a>.</p>

<dl>
 <dt><code>&lt;integer&gt;</code></dt>
 <dd>One or more decimal units 0 through 9. See more information on the {{cssxref("&lt;integer&gt;")}} page.</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>Real numbers which may also have a fractional component, for example 1 or 1.34. See more information on the {{cssxref("&lt;number&gt;")}} page.</dd>
 <dt><code>&lt;dimension&gt;</code></dt>
 <dd>A number with a unit attached to it, for example 23px or 15em. See more information on the {{cssxref("&lt;dimension&gt;")}} page.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>A number with a percentage sign attached to it, for example 10%. See more information on the {{cssxref("&lt;percentage&gt;")}} page.</dd>
 <dt><code>&lt;ratio&gt;</code></dt>
 <dd>A ratio, written with the syntax <code>&lt;number&gt; / &lt;number&gt;</code>. See more information on the {{cssxref("&lt;ratio&gt;")}} page.</dd>
 <dt><code>&lt;flex&gt;</code></dt>
 <dd>A flexible length introduced for <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a>, written as a <code>&lt;dimension&gt;</code> with the <code>fr</code> unit attached and used for grid track sizing. See more information on the {{cssxref("&lt;flex&gt;")}} page.</dd>
</dl>

<h2 id="Quantities">Quantities</h2>

<p>These types are used to specify distance and other quantities.</p>

<dl>
 <dt>&lt;length&gt;</dt>
 <dd>Lengths are a <code>&lt;dimension&gt;</code> and refer to distances. See more information on the {{cssxref("&lt;length&gt;")}} page.</dd>
 <dt><code>&lt;angle&gt;</code></dt>
 <dd>Angles are used in properties such as {{cssxref("&lt;linear-gradient&gt;")}} and are a &lt;dimension&gt; with one of <code>deg</code>, <code>grad</code>, <code>rad</code>, or <code>turn</code> units attached. See more information on the {{cssxref("&lt;angle&gt;")}} page.</dd>
 <dt><code>&lt;time&gt;</code></dt>
 <dd>Duration units are a <code>&lt;dimension&gt;</code> with an <code>s</code> or <code>ms</code> unit. See more information on the {{cssxref("&lt;time&gt;")}} page.</dd>
 <dt><code>&lt;frequency&gt;</code></dt>
 <dd>Frequencies are a <code>&lt;dimension&gt;</code> with a <code>Hz</code> or <code>kHz</code> unit attached. See more information on the {{cssxref("&lt;frequency&gt;")}} page.</dd>
 <dt><code>&lt;resolution&gt;</code></dt>
 <dd>Is a &lt;dimension&gt; with a unit identifier of <code>dpi</code>, <code>dpcm</code>, <code>dppx</code>, or <code>x</code>. See more information on the {{cssxref("&lt;resolution&gt;")}} page.</dd>
</dl>

<h2 id="Combinations_of_types">Combinations of types</h2>

<p>Some CSS properties can take a dimension or a percentage value. In this case the percentage value will be resolved to a quantity that matches the allowable dimension. Properties which can accept a percentage in addition to a dimension will use one of the types listed below.</p>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>A type that can accept a length or a percentage as a value. See more information on the {{cssxref("&lt;length-percentage&gt;")}} page.</dd>
 <dt><code>&lt;frequency-percentage&gt;</code></dt>
 <dd>A type that can accept a frequency or a percentage as a value. See more information on the {{cssxref("&lt;frequency-percentage&gt;")}} page.</dd>
 <dt><code>&lt;angle-percentage&gt;</code></dt>
 <dd>A type that can accept an angle or a percentage as a value. See more information on the {{cssxref("&lt;angle-percentage&gt;")}} page.</dd>
 <dt><code>&lt;time-percentage&gt;</code></dt>
 <dd>A type that can accept a time or a percentage as a value. See more information on the {{cssxref("&lt;time-percentage&gt;")}} page.</dd>
</dl>

<h2 id="Color">Color</h2>

<p><a href="https://www.w3.org/TR/css-color-3/">The CSS Color Specification</a> defines the {{cssxref("&lt;color&gt;")}} data type, and other types which relate to color in CSS.</p>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Specified as a keyword or a numerical color value. See more information on the {{cssxref("&lt;color&gt;")}} page.</dd>
 <dt><code>&lt;alpha-value&gt;</code></dt>
 <dd>Specifies the transparency of a color. May be a <code>&lt;number&gt;</code>, in which case 0 is fully transparent and 1 is fully opaque, or a <code>&lt;percentage&gt;</code>, in which case 0% is fully transparent and 100% fully opaque.</dd>
</dl>

<h2 id="Images">Images</h2>

<p><a href="https://www.w3.org/TR/css-images-3/">The CSS Images Specification</a> defines the data types which deal with images, including gradients.</p>

<dl>
 <dt><code>&lt;image&gt;</code></dt>
 <dd>A url reference to an image or a color gradient. See more information on the {{cssxref("&lt;image&gt;")}} page.</dd>
 <dt><code>&lt;color-stop-list&gt;</code></dt>
 <dd>A list of two or more color stops with optional transition information using a color hint.</dd>
 <dt><code>&lt;linear-color-stop&gt;</code></dt>
 <dd>A <code>&lt;color&gt;</code> and a <code>&lt;length-percentage&gt;</code> to indicate the color stop for this part of the gradient.</dd>
 <dt><code>&lt;linear-color-hint&gt;</code></dt>
 <dd>A <code>&lt;length-percentage&gt;</code> to indicate how the color interpolates.</dd>
 <dt><code>&lt;ending-shape&gt;</code></dt>
 <dd>Used for radial gradients; can have a keyword value of <code>circle</code> or <code>ellipse</code>.</dd>
 <dt><code>&lt;size&gt;</code></dt>
 <dd>Determines the size of the radial gradient's ending shape. This accepts a value of a keyword or a <code>&lt;length&gt;</code> but not a percentage.</dd>
</dl>

<h2 id="2D_positioning">2D positioning</h2>

<p>The {{cssxref("&lt;position&gt;")}} data type is interpreted as defined for the {{cssxref("&lt;background-position&gt;")}} property.</p>

<dl>
 <dt>{{cssxref("&lt;position&gt;")}}</dt>
 <dd>Defines the position of an object area. Accepts a keyword value such as <code>top</code> or <code>left</code>, or a <code>&lt;length-percentage&gt;</code>.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS4 Values') }}</td>
   <td>{{ Spec2('CSS4 Values') }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Values') }}</td>
   <td>{{ Spec2('CSS3 Values') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Values_and_Units">CSS Units and Values</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">Introduction to CSS: Values and Units</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Functions">CSS Functional Notation</a></li>
</ul>
