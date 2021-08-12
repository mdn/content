---
title: Replaced elements
slug: Web/CSS/Replaced_element
tags:
  - CSS
  - Guide
  - Layout
  - Reference
  - css layout
  - rendering
  - replaced element
---
<div>{{CSSRef}}</div>

<p>In <a href="/en-US/docs/Web/CSS">CSS</a>, a <strong>replaced element</strong> is an element whose representation is outside the scope of CSS; they're external objects whose representation is independent of the CSS formatting model.</p>

<p>Put in simpler terms, they're elements whose contents are not affected by the current document's styles. The position of the replaced element can be affected using CSS, but not the contents of the replaced element itself. Some replaced elements, such as {{HTMLElement("iframe")}} elements, may have stylesheets of their own, but they don't inherit the styles of the parent document.</p>

<p>The only other impact CSS can have on a replaced element is that there are properties which support controlling the positioning of the element's content within its box. See {{anch("Controlling object position within the content box")}} for further information.</p>

<h2 id="Replaced_elements">Replaced elements</h2>

<p>Typical replaced elements are:</p>

<ul>
 <li>{{HTMLElement("iframe")}}</li>
 <li>{{HTMLElement("video")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("img")}}</li>
</ul>

<p>Some elements are treated as replaced elements only in specific cases:</p>

<ul>
 <li>{{HTMLElement("option")}}</li>
 <li>{{HTMLElement("audio")}}</li>
 <li>{{HTMLElement("canvas")}}</li>
 <li>{{HTMLElement("object")}}</li>
 <li>{{HTMLElement("applet")}}</li>
</ul>

<p>HTML spec also says that an {{HTMLElement("input")}} element can be replaced, because {{HTMLElement("input")}} elements of the <code>"image"</code> type are replaced elements similar to {{HTMLElement("img")}}. However, other form controls, including other types of {{HTMLElement("input")}} elements, are explicitly listed as non-replaced elements (the spec describes their default platform-specific rendering with the term "Widgets").</p>

<p>Objects inserted using the CSS {{cssxref("content")}} property are <em>anonymous replaced elements</em>. They are "anonymous" because they don't exist in the HTML markup.</p>

<h2 id="Using_CSS_with_replaced_elements">Using CSS with replaced elements</h2>

<p>CSS handles replaced elements specifically in some cases, like when calculating margins and some <code>auto</code> values.</p>

<p>Note that some replaced elements, but not all, have intrinsic dimensions or a defined baseline, which is used by some CSS properties, such as {{cssxref("vertical-align")}}. Only replaced elements can ever have intrinsic dimensions.</p>

<h3 id="Controlling_object_position_within_the_content_box">Controlling object position within the content box</h3>

<p>Certain CSS properties can be used to specify how the object contained within the replaced element should be positioned within the element's box area. These are defined by the {{SpecName("CSS3 Images")}} and {{SpecName("CSS4 Images")}} specifications:</p>

<dl>
 <dt>{{cssxref("object-fit")}}</dt>
 <dd>Specifies how the replaced element's content object should be fitted to the containing element's box.</dd>
 <dt>{{cssxref("object-position")}}</dt>
 <dd>Specifies the alignment of the replaced element's content object within the element's box.</dd>
</dl>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements">HTML Spec</a></li>
 <li>{{CSS_key_concepts()}}</li>
</ul>
