---
title: In Flow and Out of Flow
slug: Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
tags:
  - CSS
  - CSS Flow Layout
  - Flow Layout
  - Guide
  - Intermediate
  - Layout
  - flow
---
<div>{{CSSRef}}</div>

<p>In the <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">previous guide</a> I explained block and inline layout in normal flow. All elements that are in flow, will be laid out using this method.</p>

<p>In the following example I have a heading, paragraph, a list and a final paragraph which contains a <code>strong</code> element. The heading and paragraphs are block level, the <code>strong</code> element inline. The list is displayed using flexbox to arrange the items into a row, however it too is participating in block and inline layout - the container has an outside <code>display</code> type of <code>block</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}</p>

<p>All of the elements can be said to be in flow. Appearing on the page in the order that they are in the source.</p>

<h2 id="Taking_an_item_out_of_flow">Taking an item out of flow</h2>

<p>All elements are in-flow apart from:</p>

<ul>
 <li>floated items</li>
 <li>items with <code>position: absolute</code> (including <code>position: fixed</code> which acts in the same way)</li>
 <li>the root element (<code>html</code>)</li>
</ul>

<p>Out of flow items create a new Block Formatting Context (BFC) and therefore everything inside them can be seen as a mini layout, separate from the rest of the page. The root element therefore is out of flow, as the container for everything in our document, and establishes the Block Formatting Context for the document.</p>

<h3 id="Floated_Items">Floated Items</h3>

<p>In this example I have a <code>div</code>, and then two paragraphs. I’ve added a background color to the paragraphs, and then floated the <code>div</code> left. The <code>div</code> is now out of flow.</p>

<p>As a float it is first laid out according to where it would be in normal flow, then taken out of flow and moved to the left as far as possible.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}</p>

<p>You can see the background color of the following paragraph running underneath, it is only the line boxes of that paragraph that have been shortened to cause the effect of wrapping content around the float. The box of our paragraph is still displaying according to the rules of normal flow. This is why, to make space around a floated item, you must add a margin to the item, in order to push the line boxes away from it. You cannot apply anything to the following in-flow content to achieve that.</p>

<h3 id="Absolute_Positioning">Absolute Positioning</h3>

<p>Giving an item <code>position: absolute</code> or <code>position: fixed</code> removes it from flow, and any space that it would have taken up is removed. In the next example I have three paragraph elements, the second element has <code>position</code> <code>absolute</code>, with offset values of <code>top: 30px</code> and <code>right: 30px</code>. It has been removed from document flow.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}</p>

<p>Using <code>position: fixed</code> also removes the item from flow, however the offsets are based on the viewport rather than the containing block.</p>

<p>When taking an item out of flow with positioning, you will need to manage the possibility of content overlapping. Out of flow essentially means that the other elements on your page no longer know that element exists so will not respond to it.</p>

<h3 id="Relative_Positioning_and_Flow">Relative Positioning and Flow</h3>

<p>If you give an item relative positioning with <code>position: relative</code> it remains in flow, however you are then able to use the offset values to push it around. The space that it would have been placed in normal flow is reserved however, as you can see in the example below.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}</p>

<p>When you do anything to remove, or shift an item from where it would be placed in normal flow, you can expect to need to do some managing of the content and the content around it to prevent overlaps. Whether that involves clearing floats, or ensuring that an element with <code>position: absolute</code> does not sit on top of some other content. For this reason methods which remove elements from being in-flow should be used with understanding of the effect that they have.</p>

<h2 id="Summary">Summary</h2>

<p>In this guide we have covered the ways to take an element out of flow in order to achieve some very specific types of positioning. In the next guide we will look at a related issue, that of creating a <a href="/en-US/docs/Web/Guide/CSS/Block_formatting_context">Block Formatting Context</a>, in <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained">Formatting Contexts Explained</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Learn Layout: <em><a href="/en-US/docs/Learn/CSS/CSS_layout/Positioning">Positioning</a></em></li>
</ul>
