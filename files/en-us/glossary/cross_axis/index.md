---
title: Cross Axis
slug: Glossary/Cross_Axis
tags:
  - CSS
  - Glossary
  - cross axis
  - flexbox
---
<p>The cross axis in {{glossary("flexbox")}} runs perpendicular to the {{glossary("main axis")}}, therefore if your {{cssxref("flex-direction")}} is either <code>row</code> or <code>row-reverse</code> then the cross axis runs down the columns.</p>

<p><img alt="The cross axis runs down the column" src="basics3.png"></p>

<p>If your main axis is <code>column</code> or <code>column-reverse</code> then the cross axis runs along the rows.</p>

<p><img alt="The cross axis runs along the row." src="basics4.png"></p>

<p>Alignment of items on the cross axis is achieved with the <code>align-items</code> property on the flex container or <code>align-self</code> property on individual items. In the case of a multi-line flex container, with additional space on the cross axis, you can use <code>align-content</code> to control the spacing of the rows.</p>

<h2 id="see_also">See also</h2>

<h3 id="Property_reference">Property reference</h3>

<ul>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("flex-wrap")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-flow")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("order")}}</li>
</ul>

<h3 id="Further_reading">Further reading</h3>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">Mastering wrapping of flex items</a></em></li>
 <li><a href="/en-US/docs/Glossary">Glossary</a>
  <ul>
   <li>{{Glossary("Flex")}}</li>
   <li>{{Glossary("Flex Container")}}</li>
   <li>{{Glossary("Flex Item")}}</li>
   <li>{{Glossary("Grid")}}</li>
  </ul>
 </li>
</ul>
