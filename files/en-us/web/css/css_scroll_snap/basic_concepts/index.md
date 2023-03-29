---
title: Basic concepts of CSS Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap/Basic_concepts
page-type: guide
---

{{CSSRef}}

The [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap) feature provides a way to snap the scrolling to certain points as the user scrolls through a document. This can be helpful in creating a more app-like experience on mobile or even on the desktop for some types of applications.

## Key properties for CSS Scroll Snap

The key properties for the scroll snap feature are:

- {{CSSxRef("scroll-snap-type")}}: This property is used on the [scroll container](/en-US/docs/Glossary/Scroll_container) to specify the type, direction, and optionality of scrolling.
- {{CSSxRef("scroll-snap-align")}}: This property is used on child elements to specify the scroll snap position.

The example below demonstrates scroll snapping along the vertical axis, which is defined by `scroll-snap-type`. Additionally, `scroll-snap-align` is used on all the `<section>` element children dictating the point where the scrolling of each child should stop.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Using scroll-snap-type

The {{CSSxRef("scroll-snap-type")}} property needs to know the direction in which scroll snapping happens. This could be `x`, `y`, or the logical mappings `block` or `inline`. You can also use the keyword `both` to have scroll snapping work along both axes.

You can also pass in the keywords `mandatory` or `proximity`. The `mandatory` keyword tells the browser whether the content _has_ to snap to a certain point, no matter where the scroll is. The `proximity` keyword means that the content may snap to the point, but does not have to.

Using `mandatory` creates a very consistent scrolling experience — you know that the browser will always snap to each defined point. This means that you can be confident that something you expect to be at the top of the screen will be when scrolling finishes. However, it can cause problems if the content is larger than you expect — users may find themselves in the frustrating position of never being able to scroll and view a certain point in the content. Therefore, use of `mandatory` should be carefully considered and only used in situations where you know how much content is on the screen at any time.

> **Note:** Never use `mandatory` if the content inside one of your child elements will overflow the parent container because the overflowing content will not be visible.

The `proximity` value will only snap to a position when it is close by, the exact distance being left to the browser to decide.

In the example below, you can change the value between `mandatory` and `proximity` to see the effect this has on the scroll experience.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

In the above example, both {{cssxref("height", "height: 300px;")}} and {{cssxref("overflow-y", "overflow-y: scroll;")}} are set on the scroll container. If the contents don't overflow their container, there is nothing to scroll.

## Using scroll-snap-align

The valid values for the {{CSSxRef("scroll-snap-align")}} property include `start`, `end`, `center`, and `none`. These values are used to indicate the point in the scroll container to which the content should snap. In the example below, you can change the value of `scroll-snap-align` to see how this changes the scroll behavior.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

If `scroll-snap-type` is `mandatory` and `scroll-snap-align` on a child is either set to `none` or not set (in which case, it defaults to `none`), the user will be unable to scroll that element into view.

## Using scroll-padding

If you do not want the content to snap right to the edge of the scroll container, you can use the {{CSSxRef("scroll-padding")}} property or its equivalent longhand values to add some padding.

In the example below, `scroll-padding` is set to `40px`. When the content snaps to the start of the second and third sections, scrolling stops 40 pixels away from the start of the section. Try changing the `scroll-padding` value to see how this changes the distance.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

This is potentially useful if you have a [fixed](/en-US/docs/Web/CSS/position#fixed_positioning) element, for example a navigation bar, which could end up overlapping scrolled content. By using `scroll-padding`, you can reserve a space for the fixed element, as shown in the example below, where the `<h1>` element remains on screen as the content scrolls beneath it. Without padding, the heading would overlap some of the content when snapping happens.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Using scroll-margin

The {{CSSxRef("scroll-margin")}} property or the longhand scroll margin values can be set on child elements, essentially defining an outset from the defined box. This allows for different amounts of space for different child elements and can be used in conjunction with `scroll-padding` on the parent. Try this in the example below.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Using scroll-snap-stop

The {{CSSxRef("scroll-snap-stop")}} property tells the browser whether it should snap to each defined snap point — meaning that in our examples above we would stop at the start of each section — or be able to skip past sections.

It could be helpful in ensuring users see each section of the scroller and don't accidentally zip past them. However, it could be problematic in making the scrolling experience slower if the user is looking for a particular section.

## See also

- [Well-controlled scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
- [Practical CSS scroll snapping/](https://css-tricks.com/practical-css-scroll-snapping/)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/)
- [Scroll snap examples on Codepen](https://codepen.io/collection/KpqBGW)
