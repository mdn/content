---
title: Flow Layout and Writing Modes
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
tags:
  - CSS
  - Flow Layout
  - Guide
  - Orientation
  - Writing-mode
---
<p>The CSS 2.1 specification, which details how normal flow behaves, assumes a horizontal writing mode. <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">Layout</a> properties should work in the same way in vertical writing modes. In this guide, we look at how flow layout behaves when used with different document writing modes.</p>

<p>This is not a comprehensive guide to the use of writing modes in CSS, the aim here is to document the areas where flow layout interacts with writing modes in possibly unanticipated ways. The <a href="#external_resources">external resources</a> and <a href="#see_also">see also</a> sections of this document link to more writing modes resources.</p>

<h2 id="The_Writing_Modes_Specification">The Writing Modes Specification</h2>

<p>The CSS Writing Modes Level 3 Specification defines the impact a change the document writing mode has on flow layout. In the writing modes introduction, <a href="https://drafts.csswg.org/css-writing-modes-3/#text-flow">the specification says</a>,</p>

<blockquote>
<p>“A writing mode in CSS is determined by the {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}} properties. It is defined primarily in terms of its inline base direction and block flow direction.”</p>
</blockquote>

<p>The specification defines the <em>inline base direction</em> as the direction in which content is ordered on a line. This defines the start and end of the inline direction. The start is where sentences start and the end is where a line of text ends before it would begin to wrap onto a new line.</p>

<p>The <em>block flow direction</em> is the direction in which boxes, for example paragraphs, stack in that writing mode. The CSS writing-mode property controls the block flow direction. If you want to change your page, or part of your page, to <code>vertical-lr</code> then you can set <code>writing-mode: vertical-lr</code> on the element and this will change the direction of the blocks and therefore the inline direction as well.</p>

<p>While certain languages will use a particular writing mode or text direction, we can also use these properties for creative effect, such as running a heading vertically.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}</p>

<h2 id="The_writing-mode_property_and_block_flow">The <code>writing-mode</code> property and block flow</h2>

<p>The {{cssxref("writing-mode")}} property accepts the values <code>horizontal-tb</code>, <code>vertical-rl</code> and <code>vertical-lr</code>. These values control the direction that blocks flow on the page. The initial value is <code>horizontal-tb,</code> which is a top to bottom block flow direction with a horizontal inline direction. Left to right languages, such as English, and Right to left languages. such as Arabic, are all <code>horizontal-tb</code>.</p>

<p>The following example shows blocks using <code>horizontal-tb</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}</p>

<p>The value <code>vertical-rl</code> gives you a right-to-left block flow direction with a vertical inline direction, as shown in the next example.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}</p>

<p>The final example demonstrates the third possible value for <code>writing-mode</code> — <code>vertical-lr</code>. This gives you a left-to-right block flow direction and a vertical inline direction.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}</p>

<h2 id="Boxes_with_a_different_writing_mode_to_their_parent">Boxes with a different writing mode to their parent</h2>

<p>When a nested box is assigned a different writing mode to its parent, then an inline level box will display as if it has <code>display: inline-block</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}</p>

<p>A block-level box will establish a new block formatting context, meaning that if its inner display type would be <code>flow</code>, it will get a computed display type of <code>flow-root</code>. This is shown in the next example where the box which displays as <code>horizontal-tb</code> contains a float which is contained due to its parent establishing a new BFC.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}</p>

<h2 id="Replaced_elements">Replaced elements</h2>

<p>Replaced elements such as images will not change their orientation based on the <code>writing-mode</code> property. However, replaced elements such as form controls which include text, should match the writing mode in use.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}</p>

<h2 id="Logical_Properties_and_Values">Logical Properties and Values</h2>

<p>Once you are working in writing modes other than <code>horizontal-tb</code> many of the properties and values that are mapped to the physical dimensions of the screen seem strange. For example, if you give a box a width of 100px, in <code>horizontal-tb</code> that would control the size in the inline direction. In <code>vertical-lr</code> it controls the size in the block direction because it does not rotate with the text.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}</p>

<p>Therefore, we have new properties of {{cssxref("block-size")}} and {{cssxref("inline-size")}}. If we give our block an <code>inline-size</code> of 100px, it doesn’t matter whether we are in a horizontal or a vertical writing mode, <code>inline-size</code> will always mean the size in the inline direction.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}</p>

<p>The <a href="/en-US/docs/Web/CSS/CSS_Logical_Properties">CSS Logical Properties and Values</a> specification includes logical versions of the properties that control margins, padding and borders as well as other mappings for things that we have typically used physical directions to specify.</p>

<h2 id="Summary">Summary</h2>

<p>In most cases, flow layout works as you would expect it to when changing the writing mode of the document or parts of the document. This can be used to properly typeset vertical languages or for creative reasons. CSS is making this easier by way of introducing logical properties and values so that when working in a vertical writing mode sizing can be based on element's inline and block size. This will be useful when creating components which can work in different writing-modes.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Writing_Modes">Writing Modes</a></li>
</ul>

<h2 id="External_Resources">External Resources</h2>

<ul>
 <li><em><a href="https://24ways.org/2016/css-writing-modes/">CSS Writing Modes</a></em>, Jen Simmons on 24 Ways</li>
</ul>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/CSS_Flow_Layout/")}}</div>
