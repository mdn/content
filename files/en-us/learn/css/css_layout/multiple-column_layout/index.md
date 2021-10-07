---
title: Multiple-column layout
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
tags:
  - Beginner
  - CSS
  - Guide
  - Layout
  - Learn
  - Learning
  - Multi-col
  - Multiple columns
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}</div>

<p>The multiple-column layout specification provides you with a method for laying content out in columns, as you might see in a newspaper. This article explains how to use this feature.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>HTML basics (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), and an idea of How CSS works (study <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To learn how to create multiple-column layout on webpages, such as you might find in a newspaper.</td>
  </tr>
 </tbody>
</table>

<h2 id="A_basic_example">A basic example</h2>

<p>Let's explore how to use multiple-column layout — often referred to as <em>multicol</em>. You can follow along by <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/multicol/0-starting-point.html">downloading the multicol starting point file</a> and adding the CSS into the appropriate places. At the bottom of the section you can see an example of what the final code should look like.</p>

<h3>A three-column layout</h3>

<p>Our starting point file contains some very simple HTML: a wrapper with a class of <code>container</code>, inside of which is a heading and some paragraphs.</p>

<p>The {{htmlelement("div")}} with a class of container will become our multicol container. We enable multicol by using one of two properties: {{cssxref("column-count")}} or {{cssxref("column-width")}}. The <code>column-count</code> property takes a number as its value and creates that number of columns. If you add the following CSS to your stylesheet and reload the page, you'll get three columns:</p>

<pre class="brush: css">.container {
  column-count: 3;
}
</pre>

<p>The columns that you create have flexible widths — the browser works out how much space to assign each column.</p>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
    </pre>
</div>

<pre class="brush: html hidden">&lt;div class="container"&gt;
  &lt;h1&gt;Simple multicol example&lt;/h1&gt;

  &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('A_three-column_layout', '100%', 400) }}</p>

<h3>Setting column-width</h3>

<p>Change your CSS to use <code>column-width</code> as follows:</p>

<pre class="brush: css">.container {
  column-width: 200px;
}
</pre>

<p>The browser will now give you as many columns as it can of the size that you specify; any remaining space is then shared between the existing columns. This means that you won't get exactly the width that you specify unless your container is exactly divisible by that width.</p>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}</pre>

<pre class="brush: html hidden">&lt;div class="container"&gt;
  &lt;h1&gt;Simple multicol example&lt;/h1&gt;

  &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;</pre>

<p>{{ EmbedLiveSample('Setting_column-width', '100%', 400) }}</p>

<h2 id="Styling_the_columns">Styling the columns</h2>

<p>The columns created by multicol cannot be styled individually. There's no way to make one column bigger than other columns or to change the background or text color of a single column. You have two opportunities to change the way that columns display:</p>

<ul>
 <li>Changing the size of the gap between columns using the {{cssxref("column-gap")}}.</li>
 <li>Adding a rule between columns with {{cssxref("column-rule")}}.</li>
</ul>

<p>Using your example above, change the size of the gap by adding a <code>column-gap</code> property. You can play around with different values — the property accepts any length unit.</p>

<p>Now add a rule between the columns with <code>column-rule</code>. In a similar way to the {{cssxref("border")}} property that you encountered in previous lessons, <code>column-rule</code> is a shorthand for {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}}, and {{cssxref("column-rule-width")}}, and accepts the same values as <code>border</code>.</p>

<pre class="brush: css">.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}</pre>

<p>Try adding rules of different styles and colors.</p>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
</pre>

<pre class="brush: html hidden">&lt;div class="container"&gt;
  &lt;h1&gt;Simple multicol example&lt;/h1&gt;

  &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;</pre>

<p>{{ EmbedLiveSample('Styling_the_columns', '100%', 400) }}</p>

<p>Something to take note of is that the rule doesn't take up any width of its own. It lies across the gap you created with <code>column-gap</code>. To make more space on either side of the rule, you'll need to increase the <code>column-gap</code> size.</p>

<h2 id="Spanning_columns">Spanning columns</h2>

<p>You can cause an element to span across all the columns. In this case, the content breaks where the spanning element's introduced and then continues below the element, creating a new set of columns. To cause an element to span all the columns, specify the value of <code>all</code> for the {{cssxref("column-span")}} property.</p>

<div class="notecard note">
<p><strong>Note:</strong> It isn't possible to cause an element to span just <em>some</em> columns. The property can only have the values of <code>none</code> (which is the default) or <code>all</code>.</p>
</div>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
.container {
 column-count: 3;
 column-gap: 20px;
 column-rule: 4px dotted rgb(79, 185, 227);
}
h2 {
 column-span: all;
 background-color: rgb(79, 185, 227);
 color: white;
 padding: .5em;
}
</pre>

<pre class="brush: html hidden">&lt;div class="container"&gt;
  &lt;h1&gt;Simple multicol example&lt;/h1&gt;

  &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

  &lt;h2&gt;Spanning subhead&lt;/h2&gt;
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

  &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;</pre>

<p>{{ EmbedLiveSample('Spanning_columns', '100%', 550) }}</p>

<h2 id="Columns_and_fragmentation">Columns and fragmentation</h2>

<p>The content of a multi-column layout is fragmented. It essentially behaves the same way as content behaves in paged media, such as when you print a webpage. When you turn your content into a multicol container, it fragments into columns. In order for the content to do this, it must <em>break</em>.</p>

<h3>Fragmented boxes</h3>

<p>Sometimes, this breaking will happen in places that lead to a poor reading experience. In the example below, I have used multicol to lay out a series of boxes, each of which has a heading and some text inside. The heading becomes separated from the text if the columns fragment between the two.</p>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}            </pre>

<pre class="brush: html">&lt;div class="container"&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

&lt;/div&gt;
</pre>

<pre class="brush: css">.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}</pre>

<p>{{ EmbedLiveSample('Fragmented_boxes', '100%', 1000) }}</p>

<h3>Setting break-inside</h3>

<p>To control this behavior, we can use properties from the <a href="/en-US/docs/Web/CSS/CSS_Fragmentation">CSS Fragmentation</a> specification. This specification gives us properties to control the breaking of content in multicol and in paged media. For example, by adding the property {{cssxref("break-inside")}} with a value of <code>avoid</code> to the rules for <code>.card</code>. This is the container of the heading and text, so we don't want it fragmented.</p>

<pre class="brush: css">.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
</pre>

<p>The addition of this property causes the boxes to stay in one piece—they now do not <em>fragment</em> across the columns.</p>

<pre class="brush: css hidden">body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
</pre>

<pre class="brush: html hidden">&lt;div class="container"&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;I am the heading&lt;/h2&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.&lt;/p&gt;
    &lt;/div&gt;

&lt;/div&gt;
</pre>

<pre class="brush: css hidden">.container {
  column-width: 250px;
  column-gap: 20px;
}
</pre>


<p>{{ EmbedLiveSample('Setting_break-inside', '100%', 1100) }}</p>

<h2 id="Test_your_skills!">Test your skills!</h2>

<p>You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see <a href="/en-US/docs/Learn/CSS/CSS_layout/Multicol_skills">Test your skills: Multiple-column Layout</a>.</p>

<h2 id="Summary">Summary</h2>

<p>You now know how to use the basic features of multiple-column layout, another tool at your disposal when choosing a layout method for the designs you're building.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Fragmentation">CSS Fragmentation</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts">Using multi-column layouts</a></li>
</ul>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Introduction">Introduction to CSS layout</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">Normal flow</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Grids">Grid</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Floats">Floats</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Positioning">Positioning</a></li>
 <li><strong>Multiple-column layout</strong></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design">Responsive design</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Media_queries">Beginner's guide to media queries</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">Legacy layout methods</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Supporting older browsers</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">Fundamental layout comprehension assessment</a></li>
</ul>
