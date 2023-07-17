---
title: Relationship of flexbox to other layout methods
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
page-type: guide
---

{{CSSRef}}

In this article we will take a look at how Flexbox fits in with all the other CSS modules. We'll find out which specifications you also need to take notice of if you want to learn flexbox, and find out why flexbox is different to some other modules.

> **Note:** CSS versions 1 and 2 were a single monolithic specification where all of CSS was defined in one large document. As CSS became a more feature rich language, maintaining one huge specification became problematic, with different parts of CSS moving on at different speeds. CSS was therefore modularized, and the various CSS Specifications are different modules that make up CSS today. These modules relate to each other, and are at different stages of development.

## The box alignment module

For many people the first reason they start to look at flexbox is because of the ability to properly align flex items inside a flex container. Flexbox provides access to properties that allow the alignment of items on their cross axis and justification of items on the main axis.

These properties started life in the flexbox specification, but are now also part of the [Box Alignment Specification](https://www.w3.org/TR/css-align-3/). This specification details how alignment works in all layout — not just flexbox. Box alignment deals with alignment and justification, including creating gaps or gutters between flex items.

The reason that the Box alignment properties remain detailed in the flexbox specification as well as being in box alignment is to ensure that completion of the flexbox spec is not held up by box alignment, which has to detail these methods for all layout types. There is a note in the flexbox spec stating that in the future, once it is completed, the definitions in Box Alignment Level 3 will supersede those of flexbox:

> "Note: While the alignment properties are defined in CSS Box Alignment \[CSS-ALIGN-3], Flexible Box Layout reproduces the definitions of the relevant ones here so as to not create a normative dependency that may slow down advancement of the spec. These properties apply only to flex layout until CSS Box Alignment Level 3 is finished and defines their effect for other layout modes. Additionally, any new values defined in the Box Alignment module will apply to Flexible Box Layout; in other words, the Box Alignment module, once completed, will supersede the definitions here."

In a later article in this series — [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) — we will take a thorough look at how the Box Alignment properties apply to flex items.

## Writing Modes

In the [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) article, I explained that flexbox is **writing mode aware**. Writing modes are fully detailed in the CSS [Writing Modes specification](https://www.w3.org/TR/css-writing-modes-3/), which details how CSS supports the various different writing modes that exist internationally. We need to be aware of how this will impact our flex layouts as writing mode changes the direction that blocks are laid out in our document. Understanding **block** and **inline** directions is key to new layout methods.

It is worth noting that we might want to change the writing mode of our document for reasons other than publishing content in a language that uses a different writing mode. See [this article](https://24ways.org/2016/css-writing-modes/) for a full description of writing modes and ways to use them, both for content in other languages and for creative reasons.

### The writing modes

The writing modes specification defines the following values of the {{cssxref("writing-mode")}} property, which serve to change the direction that blocks are laid out on the page, to match the direction that blocks lay out when content is formatted in that particular writing mode. You can change the live example below to these modes in order to see what happens to the flex layout.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

Note that `sideways-rl` and `sideways-lr` have support only in Firefox currently. There are also some known issues with regard to `writing-mode` and flexbox. You can see more information on browser support in the [MDN documentation for writing-mode](/en-US/docs/Web/CSS/writing-mode). However if you are planning on using writing modes in your layout, carefully testing the results is advisable — not least because it would be easy to make things hard to read!

Note that you would not normally use CSS and the `writing-mode` property to change an entire document to another writing mode. This would be done via HTML, by adding a `dir` and `lang` attribute to the `html` element to indicate the document language and default text direction. This would mean that the document would display correctly even if CSS did not load.

## Flexbox and other layout methods

The flexbox specification contains a [definition of what happens](https://www.w3.org/TR/css-flexbox-1/#flex-containers) if an item uses another layout method and then becomes a flex item. For example, if an item is floated and then its parent becomes a flex container. Or, how a flex container behaves as part of layout.

An element set to `display: flex` behaves in most ways like any other block level container that establishes a containing block. Floats will not intrude, and the containers' margins will not collapse.

With regard to flex items, if an item was floated or cleared and then becomes a flex item due to the parent having `display: flex` applied, the floating and clearing will no longer happen, and the item will not be taken out of normal flow in the way that floats are. If you have used the {{cssxref("vertical-align")}} property, as used with `inline-block` or table layout for alignment, this will no longer affect the item and you can use the alignment properties of flexbox instead.

In this next live example the child elements have been floated, and then their container has had `display: flex` added. If you remove `display: flex`, you should see that the `.box` element collapses as we have no clearing applied. This demonstrates that the float is happening. Re-apply `display: flex` and the collapsing does not happen. This is because the items no longer have a float applied, as they have been transformed into flex items.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Flexbox and Grid Layout

[CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout) and Flexbox generally act in the same way with regards to overwriting other methods. You might however want to use flexbox as a fallback for grid layout, as there is better support for flexbox in older browsers. This approach works very well. If a flex item becomes a grid item, then the `flex` properties that may have been assigned to the child elements will be ignored.

You can use the Box Alignment properties across both layout methods, so using flexbox as a fallback for grid layout can work very well.

### Flex and grid — what's the difference?

A common question is to ask what the difference is between Flexbox and CSS Grid Layout — why do we have two specifications that sometimes appear to be doing the same thing?

The most straightforward answer to this question is defined in the specifications themselves. Flexbox is a one-dimensional layout method whereas Grid Layout is a two-dimensional layout method. The example below has a flex layout. As already described in the Basic concepts article, flex items can be allowed to wrap but, once they do so, each line becomes a flex container of its own. When space is distributed flexbox does not look at the placement of items in other rows and tries to line things up with each other.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

If we create a very similar layout using Grid, we can control the layout in both rows and columns.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

These examples point to another key difference between these layout methods. In Grid Layout you do the majority of sizing specification on the container, setting up tracks and then placing items into them. In flexbox, while you create a flex container and set the direction at that level, any control over item sizing needs to happen on the items themselves.

In some cases you could happily use either layout method, but as you become confident with both you will find each one suiting different layout needs, and you will end up with both methods in your CSS. There is rarely a right or wrong answer.

As a ground rule, if you are adding widths to flex items in order to make items in one row of a wrapped flex container line up with the items above them you really want two-dimensional layout. In this case it is likely that the component would be better laid out using CSS Grid Layout. It isn't the case that you should use flexbox for small components and grid layout for larger ones; a tiny component can be two dimensional, and a large layout can be represented better with layout in one dimension. Try things out — we have a choice in layout method for the first time, so take advantage of it.

For more comparisons of grid and flexbox see the article [Relationship of Grid Layout to other layout methods](/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). This article details many of the ways that Grid Layout differs from flex layout, and demonstrates some of the extra functionality you get when using Grid Layout such as layering of items on the grid. This may also help in your decision as to which layout method to use.

## Flexbox and display: contents

The `contents` value of the {{cssxref("display")}} property is a new value that is described in the spec as follows:

> "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal. For the purposes of box generation and layout, the element must be treated as if it had been replaced with its children and pseudo-elements in the document tree."

This value of `display` controls box generation, and whether the element should generate a box that we can style and see on the page, or whether instead the box it would normally create should be removed and the child elements essentially moved up to participate in whatever layout method the parent would have been part of. This is much easier to see with an example.

In the following live example I have a flex container with three child elements. One of these flex items has two elements nested inside it, which would not ordinarily participate in flex layout. Flex layout only applies to the direct children of a flex container.

By adding `display: contents` to the wrapper around the nested elements, you can see that the item has disappeared from the layout, allowing the two sub-children to be laid out as if they were direct children of the flex container. You can try removing the `display: contents` line to see it return.

Note that this only removes the box from the layout; the sub-children don't become direct children in any other way. You can see that as I have used a direct child selector to add the background and borders to the flex items, this has not been applied to our nested children. They have been laid out as flex items, but as they are not direct children they do not get the other styling.

> **Warning:** Current implementations in most browsers will remove any element with `display: contents` from the accessibility tree (but descendants will remain). This will cause the element itself to no longer be announced by screen reading technology. This is incorrect behavior according to the specification, see [`display: contents`](/en-US/docs/Web/CSS/display#display_contents).

Also, having removed the box you cannot then use it to — for example — add a background color behind the nested sub children. If you remove `display: contents` in this live example you will see that the direct child we are removing has an orange background color. This also disappears when the box disappears.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

Browser support for `display:contents` is limited and required for this demo to work. Firefox supports `display: contents` already, and the value is being implemented in Chrome. Once there is better browser support this feature will be very useful in circumstances where you need the markup for semantic reasons but do not want to display the box that it would generate by default.
