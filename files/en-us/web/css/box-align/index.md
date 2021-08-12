---
title: box-align
slug: Web/CSS/box-align
tags:
  - CSS
  - CSS Property
  - NeedsUpdate
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.box-align
---
<div>{{CSSRef}}{{Non-standard_header}}{{warning("This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard.")}}</div>

<p>The <strong><code>box-align</code></strong> <a href="/en-US/docs/Web/CSS">CSS </a>property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.</p>

<p>See <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">flexbox</a> for information about the current standard.</p>

<pre class="brush:css no-line-numbers">/* Keyword values */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* Global values */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
</pre>

<p>The direction of layout depends on the element's orientation: horizontal or vertical.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>box-align</code> property is specified as one of the keyword values listed below.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>The box aligns contents at the start, leaving any extra space at the end.</dd>
 <dt><code>center</code></dt>
 <dd>The box aligns contents in the center, dividing any extra space equally between the start and the end.</dd>
 <dt><code>end</code></dt>
 <dd>The box aligns contents at the end, leaving any extra space at the start.</dd>
 <dt><code>baseline</code></dt>
 <dd>The box aligns the baselines of the contents (lining up the text). This only applies if the box's orientation is horizontal.</dd>
 <dt><code>stretch</code></dt>
 <dd>The box stretches the contents so that there is no extra space in the box.</dd>
</dl>

<h2 id="Notes">Notes</h2>

<p>The edge of the box designated the <em>start</em> for alignment purposes depends on the box's orientation:</p>

<ul>
  <li>For horizontal elements, the <em>start</em> is the top edge.</li>
  <li>For vertical elements, the <em>start</em> is the left edge.</li>
</ul>

<p>The edge opposite to the start is designated the <em>end</em>.</p>

<p>If the alignment is set using the element's <code>align</code> attribute, then the style is ignored.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_box_alignment">Setting box alignment</h3>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;CSS box-align example&lt;/title&gt;
&lt;style&gt;
div.example {
  display: box;                   /* As specified */
  display: -moz-box;              /* Mozilla */
  display: -webkit-box;           /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 400px;

  /* Make this box wider than the children
     so there is room for the box-align */
  width: 300px;

  /* Children should be oriented vertically */
  box-orient: vertical;           /* As specified */
  -moz-box-orient: vertical;      /* Mozilla */
  -webkit-box-orient: vertical;   /* WebKit */

  /* Align children to the horizontal center of this box */
  box-align: center;              /* As specified */
  -moz-box-align: center;         /* Mozilla */
  -webkit-box-align: center;      /* WebKit */

  /* Pack children to the bottom of this box */
  box-pack: end;                  /* As specified */
  -moz-box-pack: end;             /* Mozilla */
  -webkit-box-pack: end;          /* WebKit */
}

div.example &gt; p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="example"&gt;
    &lt;p&gt;I will be second from the bottom of div.example, centered horizontally.&lt;/p&gt;
    &lt;p&gt;I will be on the bottom of div.example, centered horizontally.&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}</li>
</ul>
