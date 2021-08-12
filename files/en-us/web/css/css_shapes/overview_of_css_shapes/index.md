---
title: Overview of CSS Shapes
slug: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
tags:
  - CSS
  - CSS Shapes
  - Guide
  - Overview
  - shapes
---
<div>{{CSSRef}}</div>

<p>The <a href="https://www.w3.org/TR/css-shapes/">CSS Shapes Level 1 Specification</a> describes geometric shapes in CSS. They are, in Level 1 of the specification, designed to be applied to floated items. This article provides an overview of what you can do with shapes.</p>

<p>You could for example float an item left, which would cause the text to wrap round the right and bottom of the item in a rectangular fashion. If you then apply a circle shape, the text would then wrap round the line of the circle.</p>

<p>There are a number of ways to create these Shapes and in these guides we will find out how CSS Shapes work, and consider some ways you might like to use them.</p>

<h2 id="What_does_the_specification_define">What does the specification define?</h2>

<p>The specification defines three new properties:</p>

<ul>
 <li>{{cssxref("shape-outside")}} — allows definition of basic shapes</li>
 <li>{{cssxref("shape-image-threshold")}} — Sets an opacity threshold value. If an image is being used to define the shape, only the parts of the image that are the same opacity or greater than the threshold value are used in the shape. Any other parts are ignored.</li>
 <li>{{cssxref("shape-margin")}} — sets a margin around the defined shape</li>
</ul>

<h2 id="Defining_basic_shapes">Defining basic shapes</h2>

<p>The <code>shape-outside</code> property allows us to a define a shape. It takes a variety of values, all of which define different shapes, specified in the {{cssxref("&lt;basic-shape&gt;")}} datatype. We can start by looking at a very simple case.</p>

<p>In the following example I have an image floated left. I have then applied the <code>shape-outside</code> property to it with a value of <code>circle(50%)</code>. The result is that the content now curves around the circular shape rather than following the rectangle created by the box of the image.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}</p>

<p>As in this level of the specification an element has to be floated in order to apply <code>&lt;basic-shape&gt;</code> to it; this has the side-effect of creating a simple fallback for many cases. If you do not have Shapes support in the browser, the user will see content flowing around the sides of a rectangular box as before. If they do have Shapes support then the visual display is enhanced.</p>

<h3 id="Basic_Shapes">Basic Shapes</h3>

<p>The value <code>circle(50%)</code> is an example of a Basic Shape. The specification defines four <code>&lt;basic-shape&gt;</code> values, which are:</p>

<ul>
 <li><code>inset()</code></li>
 <li><code>circle()</code></li>
 <li><code>ellipse()</code></li>
 <li><code>polygon()</code></li>
</ul>

<p>Using the value <code>inset()</code> wraps text around a rectangular shape however you are able to add offset values, thus pulling the line boxes of any wrapping content closer to the object than would otherwise happen.</p>

<p>We have already seen how <code>circle()</code> creates a circular shape. An <code>ellipse()</code> is essentially a squashed circle. If none of these simple shapes do the trick you can create a <code>polygon()</code> and make the shape as complex as you want.</p>

<p>In our <a href="/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes">Guide to Basic Shapes</a> we explore each of the possible Basic Shapes and how to create them.</p>

<h3 id="Shapes_from_the_Box_Value">Shapes from the Box Value</h3>

<p>Shapes can also be created around the Box Value, therefore you could create your shape on the:</p>

<ul>
 <li><code>border-box</code></li>
 <li><code>padding-box</code></li>
 <li><code>content-box</code></li>
 <li><code>margin-box</code></li>
</ul>

<p>In the example below you can change the value <code>border-box</code> to any of the other allowed values to see how the shape moves closer or further away from the box.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}</p>

<p>To explore the box values in more detail see our guide covering <a href="/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values">Shapes From Box Values</a>.</p>

<h3 id="Shapes_from_images">Shapes from images</h3>

<p>An interesting way to generate your path is to use an image with an alpha channel — the text will then wrap around the non-transparent parts of the image. This allows the overlay of wrapped content around an image, or the use of an image which is never displayed on the page purely as a method of creating a complex shape without needing to carefully map a polygon.</p>

<p>Note that images used in this way must be <a href="/en-US/docs/Web/HTTP/CORS">CORS compatible</a>, otherwise <code>shape-outside</code> will act as if <code>none</code> had been given as the value, and you will get no shape.</p>

<p>In this next example, we have an image with a fully transparent area, and we are using an image as the URL value for <code>shape-outside</code>. The shape is created around the opaque area — the image of the balloon.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}</p>

<h4 id="shape-image-threshold"><code>shape-image-threshold</code></h4>

<p>The <code>shape-image-threshold</code> property is used to set the threshold of image transparency used to define the area of the image used for the shape. If the value of <code>shape-image-threshold</code> is <code>0.0</code> (which is the initial value) then the area must be fully transparent. If the value is <code>1.0</code> then it is fully opaque. Values in between mean that you can set a semi-transparent area as the defining area of the shape.</p>

<p>You can see the threshold in action if we use a gradient as the image on which to define our shape. In the example below, if you change the threshold the path that the shape takes changes based on the level of opacity you have selected.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}</p>

<p>We take a deeper look at creating shapes from images in the <a href="/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images">Shapes from Images</a> guide.</p>

<h2 id="The_shape-margin_property">The <code>shape-margin</code> property</h2>

<p>The {{cssxref("shape-margin")}} property adds a margin to <code>shape-outside</code>. This will further shorten the line boxes of any content wrapping the shape, pushing it away from the shape itself.</p>

<p>In the example below we have added a <code>shape-margin</code> to a basic shape. Change the margin to push the text further away from the path the shape would take by default.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}</p>

<h2 id="Using_Generated_Content_as_the_floated_item">Using Generated Content as the floated item</h2>

<p>In the examples above we have used images or a visible element to define the shape, meaning that you can see the shape on the page. Instead, you might want to cause some text to flow along a non-rectangular invisible line. You can do this with Shapes, however you will still need a floated item, which you can then make invisible. That could be a redundant element inserted into the document, an empty {{htmlelement("div")}} or {{htmlelement("span")}} perhaps, but our preference is to use generated content. This means we can keep things used for styling inside the CSS.</p>

<p>In this next example, we use generated content to insert an element with height and width of 150px. We can then use Basic Shapes, Box Values or even the Alpha Channel of an image to create a shape for the text to wrap around.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}</p>

<h2 id="Relationship_to_clip-path">Relationship to <code>clip-path</code></h2>

<p>The Basic Shapes and Box values used to create Shapes are the same as those used as values for {{cssxref("clip-path")}}. Therefore if you want to create a shape using an image, and also clip away part of that image, you can use the same values.</p>

<p>The image below is a square image with a blue background. We have defined a shape using <code>shape-outside: ellipse(40% 50%);</code> and also used <code>clip-path: ellipse(40% 50%);</code> to clip away the same area that we have used to define the shape.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}</p>

<h2 id="Developer_Tools_for_Shapes">Developer Tools for Shapes</h2>

<p>Along with CSS Shapes support in the browser, Firefox are shipping a <a href="/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">Shape Path Editor</a> in the Firefox DevTools. This tool means that you can inspect any shapes on your page, and even change the values in the live page. If your polygon isn’t quite right you can use the Shapes Editor to tweak it, then copy the new value back into your CSS.</p>

<p>The Shape Path Editor will be enabled by default in Firefox 60 for shapes generated via <code>clip-path</code>. You can also use it to edit shapes generated via <code>shape-outside</code>, but only when you enable it via the <code>layout.css.shape-outside.enabled</code> pref.</p>

<h2 id="Future_CSS_Shapes_Features">Future CSS Shapes Features</h2>

<p>The initial Shapes specification included a property <code>shape-inside</code> for creating shapes inside an element. This property, along with the possibility of creating shapes on non-floated elements, has been moved to <a href="https://drafts.csswg.org/css-shapes-2/">level 2</a> of the specification. As the <code>shape-inside</code> property was initially in Level 1 of the specification, you may find tutorials on the web detailing both properties.</p>
