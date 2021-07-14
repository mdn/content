---
title: Typical use cases of Flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
tags:
  - CSS
  - Flexible Box
  - Guide
  - common uses
  - flexbox
  - patterns
---
<p>{{CSSRef}}</p>

<p>In this guide we will take a look at some of the common use cases for flexbox — those places where it makes more sense than another layout method.</p>

<h2 id="Why_choose_flexbox">Why choose flexbox?</h2>

<p>In a perfect world of browser support, the reason you'd choose to use flexbox is because you want to lay a collection of items out in one direction or another. As you lay out your items you want to control the dimensions of the items in that one dimension, or control the spacing between items. These are the uses that flexbox was designed for. You can read more about the difference between flexbox and CSS Grid Layout in <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">Relationship of Flexbox to other layout methods</a>, where we discuss how flexbox fits into the overall picture of CSS Layout.</p>

<p>In reality we also often use Flexbox for jobs that might be better done by Grid Layout, as a fallback for Grid, and also in order to get alignment capabilities. This is something that may well change once Box Alignment is implemented in Block Layout. In this guide I look at some of the typical things you might use flexbox for today.</p>

<h2 id="Navigation">Navigation</h2>

<p>A common pattern for navigation is to have a list of items displayed as a horizontal bar. This pattern, as basic as it seems, was difficult to achieve before flexbox. It forms the most simple of flexbox examples, and could be considered the ideal flexbox use case.</p>

<p>When we have a set of items that we want to display horizontally, we may well end up with additional space. We need to decide what to do with that space, and have a couple of options. We either display the space outside of the items — therefore spacing them out with white space between or around them — or we absorb the extra space inside the items and therefore need a method of allowing the items to grow and take up this space.</p>

<h3 id="Space_distributed_outside_the_items">Space distributed outside the items</h3>

<p>To distribute the space between or around the items we use the alignment properties in flexbox, and the {{cssxref("justify-content")}} property. You can read more about this property in <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning Items in a flex container</a>, which deals with aligning items on the main axis.</p>

<p>In the below live example we display the items at their natural size and by using <code>justify-content: space-between</code> make equal amounts of space between the items. You can change how the space is distributed using the <code>space-around</code> value, or where supported, <code>space-evenly</code>. You could also use <code>flex-start</code> to place the space at the end of the items, <code>flex-end</code> to place it before them, or <code>center</code> to centre the navigation items.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}</p>

<h3 id="Space_distributed_within_the_items">Space distributed within the items</h3>

<p>A different pattern for navigation would be to distribute the available space within the items themselves, rather than create space between them. In this case we would use the {{cssxref("flex")}} properties to allow items to grow and shrink in proportion to one another as described in <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling ratios of flex items along the main axis</a>.</p>

<p>If I wanted all of my navigation items to have equal width, then I might use <code>flex: auto</code>, which is the shorthand for <code>flex: 1 1 auto</code> — all items grow and shrink from a flex-basis of auto. This would mean that the longer item would have more space.</p>

<p>In the live example below try changing <code>flex: auto</code> to <code>flex: 1</code>. This is the shorthand for <code>flex: 1 1 0</code> and causes all of the items become the same width, as they are working from a flex-basis of 0 allowing all of the space to be distributed evenly.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}</p>

<h2 id="Split_navigation">Split navigation</h2>

<p>Another way to align items on the main axis is to use auto margins. This enables the design pattern of a navigation bar where one group of items are aligned left and another group aligned right.</p>

<p>Here we are using the auto margins technique described in <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#using_auto_margins_for_main_axis_alignment">Using auto margins for main axis alignment</a>. The items are aligned on the main axis with <code>flex-start</code> as this is the initial behavior of flexbox, and we are aligning the item on the right by giving it a left margin of auto. You can move the class from one item to another to change where the split happens.</p>

<p>Also in this example we are using margins on the flex items to create a gap between items, and a negative margin on the container in order that the items still remain flush with the right and left edges. Until the <code>gap</code> properties from the Box Alignment specification are implemented in flexbox, we have to use margins in this way if we want to create a gutter between items.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}</p>

<h2 id="Center_item">Center item</h2>

<p>Before flexbox, developers would joke that the hardest problem in web design was vertical centering. This has now been made straightforward using the alignment properties in flexbox, as the following live example shows.</p>

<p>You can play with the alignment, aligning the item to the start with <code>flex-start</code> or end with <code>flex-end</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}</p>

<p>In the future we may not need to make a container a flex container just to centre a single item, as the Box Alignment properties will ultimately be implemented in Block layout. For now however, if you need to properly centre one thing inside another, flexbox is the way to do it. As in the above example, make a container into a flex container, and then use either <code>align-items</code> on the parent element or target the flex item itself with <code>align-self</code>.</p>

<h2 id="Card_layout_pushing_footer_down">Card layout pushing footer down</h2>

<p>Whether you use flexbox or CSS Grid to lay out a list of card components, these layout methods only work on direct children of the flex or grid component. This means that if you have variable amounts of content, the card will stretch to the height of the grid area or flex container. Any content inside uses regular block layout, meaning that on a card with less content the footer will rise up to the bottom of the content rather than stick to the bottom of the card.</p>

<p><img alt="Two card components showing that the internals of the component do not stretch with the wrapper." src="flex-cards.png"></p>

<p>Flexbox can solve this. We make the card a flex container, with {{cssxref("flex-direction")}}<code>: column</code>. We then set the content area to <code>flex: 1</code>, which is the shorthand for <code>flex: 1 1 0</code> — the item can grow and shrink from a flex basis of <code>0</code>. As this is the only item that can grow, it takes up all available space in the flex container and pushes the footer to the bottom. If you remove the <code>flex</code> property from the live example you will see how the footer then moves up to sit directly under the content.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}</p>

<h2 id="Media_objects">Media objects</h2>

<p>The media object is a common pattern in web design — this pattern has an image or other element to one side and text to the right. Ideally a media object should be able to be flipped — moving the image from left to right.</p>

<p>We see this pattern everywhere, used for comments, and anywhere we need to display images and descriptions. With flexbox we can allow the part of the media object containing the image to take its sizing information from the image, and then the body of the media object flexes to take up the remaining space.</p>

<p>In the live example below you can see our media object. I have used the alignment properties to align the items on the cross axis to <code>flex-start</code>, and then set the <code>.content</code> flex item to <code>flex: 1</code>. As with our column layout card pattern above, using <code>flex: 1</code> means this part of the card can grow.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}</p>

<p>Some things that you might want to try in this live example relate to the different ways you might want to constrain the media object in your design.</p>

<p>To prevent the image growing too large, add a {{cssxref("max-width")}} to the image. As that side of the media object is using the initial values of flexbox it can shrink but not grow, and uses a <code>flex-basis</code> of auto. Any {{cssxref("width")}} or max-width applied to the image will become the <code>flex-basis</code>.</p>

<pre class="brush: css">.image img {
  max-width: 100px;
}
</pre>

<p>You could also allow both sides to grow and shrink in proportion. If you set both sides to <code>flex: 1</code>, they will grow and shrink from a {{cssxref("flex-basis")}} of 0, so you will end up with two equal-sized columns. You could either take the content as a guide and set both to <code>flex: auto</code>, in which case they would grow and shrink from the size of the content or any size applied directly to the flex items such as a width on the image.</p>

<pre class="brush: css">.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<p>You could also give each side different {{cssxref("flex-grow")}} factors, for example setting the side with the image to <code>flex: 1</code> and the content side to <code>flex: 3</code>. This will mean they use a <code>flex-basis</code> of <code>0</code> but distribute that space at different rates according to the <code>flex-grow</code> factor you have assigned. The flex properties we use to do this are described in detail in the guide <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling ratios of flex items along the main axis</a>.</p>

<pre class="brush: css">.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<h3 id="Flipping_the_media_object">Flipping the media object</h3>

<p>To switch the display of the media object so that the image is on the right and the content is on the left we can use the <code>flex-direction</code> property set to <code>row-reverse</code>. The media object now displays the other way around. I have achieved this in the live example by adding a class of <code>flipped</code> alongside the existing <code>.media</code> class. This means you can see how the display changes by removing that class from the html.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}</p>

<h2 id="Form_controls">Form controls</h2>

<p>Flexbox is particularly useful when it comes to styling form controls. Forms have lots of markup and lots of small elements that we typically want to align with each other. A common pattern is to have an {{htmlelement("input")}} element paired with a {{htmlelement("button")}}, perhaps for a search form or where you want your visitor to enter an email address.</p>

<p>Flexbox makes this type of layout easy to achieve. I have contained my <code>&lt;button&gt;</code> and <code>&lt;input&gt;</code> field in a wrapper which I have given a border and set to <code>display: flex</code>. I then use the flex properties to allow the <code>&lt;input&gt;</code> field to grow, while the button does not grow. This means we have a pair of fields, with the text field growing and shrinking as the available space changes.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}</p>

<p>You could add a label or icon to the left as easily as we popped the button onto the right. I have added a label, and other than some styling for background color I didn’t need to change the layout. The stretchy input field now has a little less space to play with but it uses the space left after the two items are accounted for.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}</p>

<p>Patterns like this can make it much easier to create a library of form elements for your design, which easily accommodate additional elements being added. You are taking advantage of the flexibility of flexbox by mixing items that do not grow with those that do.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>While exploring the above patterns you have hopefully started to see how you can think through the best way to use flexbox to achieve the result that you want. Quite often you have more than one choice. Mix items that cannot stretch with those that can, use the content to inform the size, or allow flexbox to share out space in proportion. It’s up to you. </p>

<p>Think about the best way to present the content that you have and then see how flexbox or other layout methods can help you achieve it.</p>
