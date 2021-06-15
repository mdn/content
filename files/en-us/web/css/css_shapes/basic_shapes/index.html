---
title: Basic Shapes
slug: Web/CSS/CSS_Shapes/Basic_Shapes
tags:
  - CSS
  - CSS Shapes
  - Guide
  - Reference
---
<p>{{CSSRef}}</p>

<p>CSS Shapes can be defined using the {{cssxref("&lt;basic-shape&gt;")}} type, and in this guide I’ll explain how each of the different values accepted by this type work. They range from simple circles to complex polygons.</p>

<p>Before looking at the shapes, it is worth understanding two pieces of information that go together to make these shapes possible:</p>

<ul>
 <li>The <code>&lt;basic-shape&gt;</code> type</li>
 <li>The reference box</li>
</ul>

<h2 id="The_&lt;basic-shape&gt;_type">The &lt;basic-shape&gt; type</h2>

<p>The <code>&lt;basic-shape&gt;</code> type is used as the value for all of our Basic Shapes. This type uses Functional Notation: the type of shape is followed by brackets, inside of which are additional values used to describe the shape.</p>

<p>The arguments which are accepted vary depending on the shape that you are creating. We will cover these in the examples below.</p>

<h2 id="The_reference_box">The reference box</h2>

<p>Understanding the reference box used by CSS Shapes is important when using Basic Shapes, as it defines each shape's coordinate system. You have already met the reference box in <a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values">the guide on creating shapes from Box Values</a>, which directly uses the reference box to create the shape.</p>

<p>The Firefox Shapes Inspector helpfully shows the reference box in use when you inspect a shape. In the screenshot below I have created a circle, using <code>shape-outside: circle(50%)</code>. The floated element has 20 pixels of padding, border and margin applied, and the Shapes Inspector highlights these reference boxes. When using a Basic Shape the reference box used by default is the margin-box. You can see in the screenshot that the shape is being defined with reference to that part of the Box Model.</p>

<p><img alt="" src="shapes-reference-box.png"></p>

<p>You can add the various Box Values after your Basic Shape definition. Therefore the default behavior is as if you have defined.</p>

<pre class="brush: css">.shape {
  shape-outside: circle(50%) margin-box;
}
</pre>

<p>You can therefore change this in order that your shape uses the different parts of the box model, for example to use the border.</p>

<pre class="brush: css">.shape {
  shape-outside: circle(50%) border-box;
}
</pre>

<p>What is worth noting is that the <code>margin-box</code> will clip the shape, therefore shapes created in reference to other shapes which extend past the margin box will have the shape clipped to the margin box. We will see this in the following examples of basic shapes.</p>

<p>For an excellent description of references boxes as they apply to CSS Shapes see <a href="http://razvancaliman.com/writing/css-shapes-reference-boxes/">Understanding Reference Boxes for CSS Shapes</a>.</p>

<h2 id="inset()">inset()</h2>

<p>The <code>inset()</code> type defines a rectangle, which may not seem very useful as floating an item will give you a rectangular shape around it. However the <code>inset()</code> types enables the definition of offsets, thus pulling the content in over the shape.</p>

<p>Therefore <code>inset()</code> takes four values for the top, right, bottom and left values plus a final value for <code>border-radius</code>. The below CSS creates a rectangular shape inset from the reference box of the floated element 20 pixels from the top and bottom and 10 pixels from the left and right, with a border-radius value of 10 pixels.</p>

<pre class="brush: css">.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
</pre>

<p>Using the same rules as we use for the margin shorthand, you can set more than one offset at once. If there is only one value, it applies to all sides. If there are two values, the top and bottom offsets are set to the first value and the right and left offsets are set to the second. If there are three values, the top is set to the first value, the left and right are set to the second, and the bottom is set to the third. If there are four values, they apply to the top, right, bottom, and left, respectively. So, the above rules could also be described as:</p>

<pre class="brush: css">.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}</pre>

<p>In the example below we have an <code>inset()</code> shape used to pull content over the floated element. Change the offset values to see how the shape changes.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}</p>

<p>You can also add the Box Value that you wish to use as a reference box. In the example below change the reference box from <code>margin-box</code> to <code>border-box</code>, <code>padding-box</code> or <code>content-box</code> to see how the reference box used as the starting point before offsets are calculated changes.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}</p>

<h2 id="circle()">circle()</h2>

<p>The <code>circle()</code> value for <code>shape-outside</code> can accept two possible arguments. The first is the <code>shape-radius</code>.</p>

<p>Both <code>circle()</code> and <code>ellipse()</code> values for <code>shape-outside</code> are specified as accepting this argument of <code>&lt;shape-radius&gt;</code>. This argument can be a length or percentage but can also be one of the keywords <code>closest-side</code> or <code>farthest-side</code>.</p>

<p>The keyword <code><strong>closest-side</strong></code> uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension. For ellipses, this is the closest side in the radius dimension.</p>

<p>The keyword <code><strong>farthest-side</strong></code> uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the farthest side in any dimension. For ellipses, this is the farthest side in the radius dimension.</p>

<p>The second argument is a <code>position</code>. If omitted this will be set to <code>center</code>. However you can use any valid position here to indicate the position of the centre of the circle.</p>

<p>Our circle therefore accepts one radius value, which may be a length, a percentage or the closest-side or farthest side keyword then optionally the keyword <strong>at</strong> followed by a position value.</p>

<p>In the below example I have created a circle on an item with a width of 100 pixels, plus a margin of 20 pixels. This gives a total width for the reference box of 140 pixels. I have given a value of 50% for the shape-radius value which means that our radius is 70px. I have then set the position value to 30%.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}</p>

<p>In the live example you can play with increasing or decreasing the size of the circle by changing the size of the radius, moving the circle around with the position value, or setting a reference box as we did for <code>inset()</code>.</p>

<p>As an additional example, if you use the keywords <code>top left</code> for position, you can make a quarter circle shape in the top left corner of the page. The example below uses generated content to create a quarter circle shape for text to flow around.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}</p>

<h3 id="The_shape_will_be_clipped_by_the_margin_box">The shape will be clipped by the margin box</h3>

<p>When describing Reference Boxes I explained that the margin-box will clip the shape. You can see this by moving the centre of our circle towards the content by setting the position to 60%. The centre of the circle is now nearer the content and the circle extends past the margin-box. This means that the extension becomes clipped and squared off.</p>

<pre class="brush: css">img {
  float: left;
  shape-outside: circle(50% at 60%);
}
</pre>

<p><img alt="The circle shape is clipped by the margin box" src="shapes-circle-clipped.png"></p>

<h2 id="ellipse()">ellipse()</h2>

<p>An ellipse is essentially a squashed circle and so <code>ellipse()</code> acts in a very similar way to <code>circle()</code> except that we have to specify two radii x and y in that order.</p>

<p>These may then be followed by position values as with <code>circle()</code> to move the centre of the ellipse around. In the example below we have an ellipse with an x radius of 40%, a y radius of 50% and the position being left. This means that the centre of the ellipse is on the left edge of the box giving us a half ellipse shape to wrap our text around. You can change these values to see how the ellipse changes.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}</p>

<p>The keyword values of <code>closest-side</code> and <code>farthest-side</code> are useful to create a quick ellipse based on the size of the floated element reference box.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}</p>

<h2 id="polygon()">polygon()</h2>

<p>The final Basic Shape is the most complex and enables the creation of many side shapes by way of creating a <code>polygon()</code>. This shape accepts three or more pairs of values (a polygon must at least draw a triangle). These values are co-ordinates drawn with reference to the reference box.</p>

<p>In the example below I have created a shape for text to follow using the <code>polygon()</code>, you can change any of the values to see how the shape is changed.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}</p>

<p>You may well find the Firefox Shape Inspector very useful here to create your polygon shape. The screenshot below shows the shape highlighted in the tool.</p>

<p><img alt="The polygon basic shape, highlighted with the Shapes Inspector." src="shapes-polygon.png"></p>

<p>Another useful resource is <a href="http://bennettfeely.com/clippy/">Clippy</a> - a tool for creating shapes for <code>clip-path</code>, as the values for Basic Shapes are the same as those used for <code>clip-path</code>.</p>
