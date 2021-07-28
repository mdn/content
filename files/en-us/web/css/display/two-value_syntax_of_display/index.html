---
title: Adapting to the new two-value syntax of display
slug: Web/CSS/display/two-value_syntax_of_display
tags:
  - CSS
  - Example
  - Experimental
  - Guide
  - Intermediate
---
<p>{{CSSRef}}</p>

<p><a href="https://drafts.csswg.org/css-display/">CSS Display Module Level 3</a> describes the two-value syntax for the <code><a href="/en-US/docs/Web/CSS/display">display</a></code> property. This guide explains the change to the syntax, including the reasoning behind this change. It also details the in-built backwards compatibility for the <code>display</code> property.</p>

<h2 id="What_happens_when_we_change_the_value_of_the_display_property">What happens when we change the value of the display property?</h2>

<p>One of the first things we learn about CSS is that some elements are block-level and some are inline-level. For example, an <code>&lt;h1&gt;</code> or a <code>&lt;p&gt;</code> are block-level by default, and a <code>&lt;span&gt;</code> is inline-level. Using the {{cssxref("display")}} property we can switch between block and inline. For example to make a heading inline we would use the following CSS:</p>

<pre class="brush: css">h1 {
  display: inline;
}
</pre>

<p>More recently we have gained <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a> and <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>. To access these we also use values of the <code>display</code> property — <code>display: grid</code> and <code>display: flex</code>. Only when the value of <code>display</code> is changed do the children become flex or grid items and begin to respond to the other properties in the grid or flexbox specifications. Changing an element's <code>display</code> value changes the formatting context of its direct children.</p>

<p>What grid and flexbox demonstrate, however, is that an element has both an <strong>outer</strong> and an <strong>inner</strong> display type. The outer display type describes whether the element is block-level or inline-level. The inner display type describes how the children of that box behave.</p>

<p>As an example, when we use <code>display: flex</code> we create a block-level container, with flex children. The children are described as participating in a flex formatting context. You can see this if you take a <code>&lt;span&gt;</code> — normally an inline-level element — and apply <code>display: flex</code> to it. The <code>&lt;span&gt;</code> becomes a block-level element. It behaves as block-level things do in relationship to other boxes in the layout. It’s as if you had applied <code>display: block</code> to the span, however we also get the changed behavior of the children.</p>

<p>The live example below has a <code>&lt;span&gt;</code> with <code>display: flex</code> applied. It has become a block-level box taking up all available space in the inline direction. You can now use <code>justify-content: space-between;</code> to put this space between the two flex items.</p>

<p>{{EmbedGHLiveSample("css-examples/display/two-value/span-flex.html", '100%', 440)}}</p>

<p>We can create inline flex containers. If you create a flex container using the single value of <code>inline-flex</code> you will have an inline-level box with flex children. The children behave in the same way as the flex children of a block-level container. The only thing that has changed is that the parent is now an inline-level box. It therefore behaves like other inline-level things, and doesn't take up the full width (or size in the inline dimension) that a block-level box does. This means that some following text could come up alongside the flex container.</p>

<p>{{EmbedGHLiveSample("css-examples/display/two-value/inline-flex.html", '100%', 440)}}</p>

<p>The same is true when working with grid layout. Using <code>display: grid</code> will give you a block-level box, which creates a grid formatting context for the direct children. Using <code>display: inline-grid</code> will create an inline-level box, which creates a grid formatting context for the children.</p>

<h2 id="The_two-value_syntax">The two-value syntax</h2>

<p>As you can see from the above explanation, the <code>display</code> property has gained considerable new powers. In addition to indicating whether something is block-level or inline-level in relationship to other boxes on the page, it now also indicates the formatting context inside the box it is applied to. In order to better describe this behavior, the <code>display</code> property has been refactored to allow for two values — an outer and inner value — to be set on it, as well as the single values we are used to.</p>

<p>This means that instead of setting <code>display: flex</code> to create a block-level box with flex children, we will use <code>display: block flex</code>. Instead of <code>display: inline-flex</code> to create an inline-level box with flex children, we will use <code>display: inline flex</code>. The example below, which will work in Firefox 70 and upwards, demonstrates these values.</p>

<p>{{EmbedGHLiveSample("css-examples/display/two-value/two-value-flex.html", '100%', 640)}}</p>

<p>There are mappings for all of the existing values of <code>display</code>; the most common ones are listed in the table below. To see a full list take a look at the table found in the <a href="https://drafts.csswg.org/css-display/#display-value-summary"><code>display</code> property specification</a>.</p>

<table>
 <thead>
  <tr>
   <th>Single value</th>
   <th>New value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>block</code></td>
   <td><code>block flow</code></td>
  </tr>
  <tr>
   <td><code>flow-root</code></td>
   <td><code>block flow-root</code></td>
  </tr>
  <tr>
   <td><code>inline</code></td>
   <td><code>inline flow</code></td>
  </tr>
  <tr>
   <td><code>inline-block</code></td>
   <td><code>inline flow-root</code></td>
  </tr>
  <tr>
   <td><code>flex</code></td>
   <td><code>block flex</code></td>
  </tr>
  <tr>
   <td><code>inline-flex</code></td>
   <td><code>inline flex</code></td>
  </tr>
  <tr>
   <td><code>grid</code></td>
   <td><code>block grid</code></td>
  </tr>
  <tr>
   <td><code>inline-grid</code></td>
   <td><code>inline grid</code></td>
  </tr>
 </tbody>
</table>

<h2 id="display_block_flow-root_and_display_inline_flow-root">display: block flow-root and display: inline flow-root</h2>

<p>In terms of how these new values help to clarify CSS layout, we can take a look at a couple of values in the table that might seem less familiar. The two-value <code>display: block flow-root</code> maps to a fairly recent single value; <code>display: flow-root</code>. This value's only purpose is to create a new <a href="/en-US/docs/Web/Guide/CSS/Block_formatting_context">Block Formatting Context</a> (BFC). A BFC ensures that everything inside your box stays inside it, and things from outside the box cannot intrude into it. The most obvious use-case for creating a new BFC is to contain floats, and avoid the need for clearfix hacks.</p>

<p>In the example below we have a floated item inside a container. The float is contained by the bordered box, which wraps it and the text alongside. If you remove the line <code>display: flow-root</code> then the float will poke out of the bottom of the box. If you are using Firefox you can replace it with the newer <code>display: block flow-root</code>, which will achieve the same as the single <code>flow-root</code> value.</p>

<p>{{EmbedGHLiveSample("css-examples/display/two-value/block-flow-root.html", '100%', 440)}}</p>

<p>The <code>flow-root</code> value makes sense if you think about block and inline layout, which is sometimes called <a href="/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">normal flow</a>. Our HTML page creates a new formatting context (floats and margins cannot extend out from the boundaries) and our content lays out in normal flow, using block and inline layout, unless we change the value of <code>display</code> to use some other formatting context. Creating a grid or flex container also creates a new formatting context (a grid or flex formatting context, respectively.) These also contain everything inside them. However, if you want to contain floats and margins but continue using block and inline layout, you can create a new flow root, and start over with block and inline layout. From that point downwards everything is contained inside the new flow root.</p>

<p>The two-value syntax for <code>display: flow-root</code> being <code>display: block flow-root</code> therefore makes a lot of sense. You are creating a block formatting context, with a block-level box and children participating in normal flow. What about the matched pair <code>display: inline flow-root</code>? This is the new way of describing <code>display: inline-block</code>.</p>

<p>The value <code>display: inline-block</code> has been around since the early days of CSS. The reason we tend to use it is to allow padding to push inline items away from an element, when creating navigation items for example, or when wanting to add a background with padding to an inline element as in the example below.</p>

<p>{{EmbedGHLiveSample("css-examples/display/two-value/inline-block.html", '100%', 440)}}</p>

<p>An element with <code>display: inline-block</code> however, will also contain floats. It contains everything inside the inline-level box. Therefore <code>display: inline-block</code> does exactly what <code>display: flow-root</code> does, but with an inline-level, rather than a block-level box. The new syntax accurately describes what is happening with this value. In the example above, you can change <code>display: inline-block</code> to <code>display: inline flow-root</code> in Firefox and get the same result.</p>

<h2 id="What_about_the_old_values_of_display">What about the old values of display?</h2>

<p>The single values of <code>display</code> are described in the specification as legacy values, and currently you gain no benefit from using the two-value versions, as there is a direct mapping for each two-value version to a legacy version, as demonstrated in the table above.</p>

<p>To deal with single values of <code>display</code> <a href="https://www.w3.org/TR/css-display-3/#outer-role">the specification</a> explains what to do if only the outer value of <code>block</code> or <code>inline</code> is used:</p>

<blockquote>
<p>"If a <code>&lt;display-outside&gt;</code> value is specified but <code>&lt;display-inside&gt;</code> is omitted, the element’s inner display type defaults to flow."</p>
</blockquote>

<p>This means that the behavior is exactly as it is in a single value world. If you specify <code>display: block</code> or <code>display: inline</code>, that changes the outer display value of the box but any children continue in normal flow.</p>

<p>If only an inner value of <code>flex</code>, <code>grid</code>, or <code>flow-root</code> is specified then <a href="https://www.w3.org/TR/css-display-3/#inner-model">the specification</a> explains that the outer value should be set to <code>block</code>:</p>

<blockquote>
<p>"If a <code>&lt;display-inside&gt;</code> value is specified but <code>&lt;display-outside&gt;</code> is omitted, the element’s outer display type defaults to block—except for ruby, which defaults to inline."</p>
</blockquote>

<p>Finally, we have some legacy <a href="https://www.w3.org/TR/css-display-3/#legacy-display">pre-composed inline-level values</a> of:</p>

<ul>
 <li><code>inline-block</code></li>
 <li><code>inline-table</code></li>
 <li><code>inline-flex</code></li>
 <li><code>inline-grid</code></li>
</ul>

<p>If a supporting browser comes across these as single values then it treats them the same as the two-value versions:</p>

<ul>
 <li><code>inline flow-root</code></li>
 <li><code>inline table</code></li>
 <li><code>inline flex</code></li>
 <li><code>inline grid</code></li>
</ul>

<p>So all of the current situations are neatly covered, meaning that we maintain compatibility of existing and new sites that use the single values, while allowing the spec to evolve.</p>

<h2 id="Can_I_start_to_use_the_two-value_syntax">Can I start to use the two-value syntax?</h2>

<p>As demonstrated above, there is not a lot of advantage in using the two-value version right now; if you did your page would only work in Firefox! Other browsers do not yet implement the two-value versions. Therefore <code>display: block flex</code> will only get you flex layout in Firefox, and will be ignored as invalid in Chrome. You can see current support in the compat data for the two-value syntax:</p>

<p>{{Compat("css.properties.display.multi-keyword_values", 10)}}</p>

<ul>
 <li>Chromium bug: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=804600">https://bugs.chromium.org/p/chromium/issues/detail?id=804600</a></li>
</ul>

<p>There is value in thinking about the values of <code>display</code> in this two-value way however. If you consider the outer and inner values when you change the value of <code>display</code>, you will understand immediately what impact the value will have on the box itself, and how it displays and behaves in the layout, and the direct children.</p>
