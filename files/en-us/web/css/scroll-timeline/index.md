---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
page-type: css-shorthand-property
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
  - Experimental
browser-compat: css.properties.scroll-timeline
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.

The name can be referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration in order to indicate the element, and hence the scrollbar, that will be used to control the progress of the animation.
Note that if the element does not display a scrollbar in the axis dimension, then no timeline will be created.

The `scroll-timeline` property is equivalent to setting both [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name) and [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis) properties in a single declaration.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)

## Syntax

```css
/* values for both scroll-timeline-name and scroll-timeline-axis */
scroll-timeline: custom_name_for_timeline block;
scroll-timeline: custom_name_for_timeline inline;
scroll-timeline: custom_name_for_timeline vertical;
scroll-timeline: custom_name_for_timeline horizontal;

/* none keyword for scroll-timeline-name and value for scroll-timeline-axis */
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none vertical;
scroll-timeline: none horizontal;

/* scroll-timeline-name or scroll-timeline-axis */
scroll-timeline: none;
scroll-timeline: custom_name_for_timeline;
scroll-timeline: block;
scroll-timeline: inline;
scroll-timeline: vertical;
scroll-timeline: horizontal;
```

### Values

A `<scroll-timeline-name>` value followed by a `<scroll-timeline-axis>` value may be applied to the container element in any order.
At least one value must be applied.

Allowed values for `<scroll-timeline-name>` are:

- `none`
  - : The timeline has no name.
- `<custom-ident>`
  - : An arbitrary custom identifier that can be used to reference the scroll timeline in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline).
    Possible values are described in [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident).

The `<scroll-timeline-axis>` indicates which scrollbar axis, in the element identified by `<scroll-timeline-name>`, provides the scroll timeline.
Allowed values are:

- `block`
  - : (Default) Scrollbar in the block axis of the scroll container.
    The block axis is the direction perpendicular to the flow of text within a line.
    For horizontal writing modes like standard English this is the same as `vertical`, while for vertical writing modes it is the same as `horizontal`.
- `inline`
  - : Scrollbar in the inline axis of the scroll container.
    The inline axis is the direction parallel to the flow of text in a line.
    For horizontal writing modes this is the same as `horizontal`, while for vertical writing modes this is the same as `vertical`.
- `vertical`
  - : Scrollbar in the vertical axis of the scroll container.
- `horizontal`
  - : Scrollbar in the horizontal axis of the scroll container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

In this example, a scroll timeline named `squareTimeline` is defined using the `scroll-timeline-name` property on the element with the id `container`.
This is then applied to the animation on the `#square` element using `animation-timeline: squareTimeline`.

### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

### CSS

The CSS for the container sets it as the source of a scroll timeline named `squareTimeline` using the `scroll-timeline` property.
It also sets the scrollbar to use for the timeline as "vertical" (though this was not actually needed as it would have been used by default).

The height of the container is set to 300px and we also set the container to create a vertical scrollbar if it overflows (below we will use CSS on the "stretcher" element to ensure that it does overflow).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: squareTimeline vertical;
  position: relative;
}
```

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property, which is set to the `squareTimeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;

  position: absolute;
  bottom: 0;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

The "stretcher" CSS simply sets the block height to 600px, which forces the container element to overflow and create scroll bars.
Without this element there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

```css
#stretcher {
  height: 600px;
}
```

### Result

Scroll the vertical bar to see the animation.

{{EmbedLiveSample("Setting a scroll timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
