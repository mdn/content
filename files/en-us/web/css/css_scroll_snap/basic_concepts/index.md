---
title: Basic concepts of CSS Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap/Basic_concepts
tags:
  - CSS
  - CSS Scroll Snap
  - Guide
  - concepts
---
{{CSSRef}}

The [CSS Scroll Snap specification](https://drafts.csswg.org/css-scroll-snap-1/) gives us a way to snap scrolling to certain points as the user scrolls through a document. This can be helpful in creating a more app-like experience on mobile or even on the desktop for some types of applications.

## Key properties for CSS Scroll Snap

The key properties of the Scroll Snap specification are:

- {{CSSxRef("scroll-snap-type")}}: This property is used on the [scroll container](/en-US/docs/Glossary/Scroll_container) to state the type and direction of scrolling.
- {{CSSxRef("scroll-snap-align")}}: This property must be used on child elements in order to set the position that scrolling will snap to.

The example below demonstrates scroll snapping along the vertical axis, which is defined by `scroll-snap-type`. Additionally, `scroll-snap-align` is used on the section element to dictate the point where the scrolling should stop.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Using scroll-snap-type

The {{CSSxRef("scroll-snap-type")}} property needs to know the direction in which scroll snapping happens. This could be `x`, `y`, or the logical mappings `block` or `inline`. You can also use the keyword `both` to have scroll snapping work along both axes.

You can also pass in the keywords `mandatory` or `proximity`. The `mandatory` keyword tells the browser whether the content _has_ to snap to a certain point, no matter where the scroll is. The `proximity` keyword means that the content may snap to the point, but does not have to.

Using `mandatory` gives a very consistent experience — you know that the browser will always snap to each defined point. This means you can be confident that something you expect to be at the top of the screen will be when scrolling finishes. However, it can cause problems if the content is larger than you expect — users may find themselves in the frustrating position of never being able to scroll and view a certain point in the content. Therefore, use of mandatory should be carefully considered and only used in situations where you know how much content is on the screen at any one time.

The `proximity` value will only snap to a position when it is close by, the exact distance being left to the browser to decide.

In the example below, you can change the value between `mandatory` and `proximity` to see the effect this has on the scroll experience.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

## Using scroll-snap-align

The {{CSSxRef("scroll-snap-align")}} property can take a value of `start`, `end`, or `center` — indicating the point the content should snap to in the scroll container. In the example below, you can change the value of `scroll-snap-align` to see how this changes the scroll behavior.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

## Using scroll-padding

If you do not want the content to snap right to the edge of the scroll container, you can use the {{CSSxRef("scroll-padding")}} property or its equivalent longhand values to set some padding.

In the below example, `scroll-padding` is set to 40 pixels. When the content snaps to the start of the second and third sections, the scrolling stops 40 pixels away from the start of the section. Try changing the `scroll-padding` value to see how this changes the distance.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

This is potentially useful if you have a fixed element, for example a navigation bar, which could end up overlapping scrolled content. By using `scroll-padding`, you can reserve a space for it as in the example below where the `<h1>` remains on screen as the content scrolls beneath it. Without padding, the heading would overlap some of the content when snapping happens.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Using scroll-margin

The {{CSSxRef("scroll-margin")}} property can be set on child elements, essentially defining an outset from the defined box. This allows for different amounts of space for different child elements, and can be used in conjunction with `scroll-padding` on the parent. Try this in the example below.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Using scroll-snap-stop

The {{CSSxRef("scroll-snap-stop")}} property tells the browser whether it should snap to each defined snap point — meaning that in our examples above we would stop at the start of each section — or be able to skip past sections.

It could be helpful in ensuring users see each section of the scroller and don't accidentally zip past them. However, it could be problematic in making the scrolling experience slower if the user is looking for a particular section.

## Browser compatibility

The individual property pages detail the browser compatibility situation for Scroll Snap.
