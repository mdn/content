---
title: Alignment subject
slug: Glossary/Alignment_Subject
tags:
  - Alignment subject
  - CSS
  - Glossary
  - alignment
---
<p>In <a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment</a> the <strong>alignment subject</strong> is the thing (or things) being aligned by the property.</p>

<p>For {{cssxref("justify-self")}} and {{cssxref("align-self")}}, the alignment subject is the margin box of the box the property is set on, using the writing mode of that box.</p>

<p>For {{cssxref("justify-content")}} and {{cssxref("align-content")}}, the writing mode of the box is also used. The definition of the alignment subject depends on the layout mode being used.</p>

<dl>
 <dt>Block containers (including table cells)</dt>
 <dd>The entire content of the block as a single unit.</dd>
 <dt>Multicol containers</dt>
 <dd>The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.</dd>
 <dt>Flex containers</dt>
 <dd>For {{cssxref("justify-content")}}, the flex items in each flex line.<br>
 For {{cssxref("align-content")}}, the flex lines. Note, this only has an effect on multi-line flex containers.</dd>
 <dt>Grid containers</dt>
 <dd>The grid tracks in the appropriate axis, with any spacing inserted between tracks added to the relevant gutters. Collapsed gutters are treated as a single opportunity for space insertion.</dd>
</dl>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment</a></li>
</ul>
