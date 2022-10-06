---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
page-type: css-shorthand-property
browser-compat: css.properties.scroll-timeline
---

{{CSSRef}}

The **`scroll-timeline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) can be used to name a particular container and specify which of its scrollbar axes should provide the scroll timeline for an animation.
It is equivalent to setting both [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name) and [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis) in a single declaration.

The name can be referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration to indicate that the specified scroll bar should be used as the source timeline for animating the current element.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)

## Syntax

```css
/* scroll-timeline-name and scroll-timeline-axis */
scroll-timeline: custom_name_for_timeline block;
scroll-timeline: custom_name_for_timeline inline;
scroll-timeline: custom_name_for_timeline vertical;
scroll-timeline: custom_name_for_timeline horizontal;

/* none and scroll-timeline-axis */
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

The `<scroll-timeline-axis>` indicates which scrollbar axis, in the container identified by `<scroll-timeline-name>`, provides the scroll timeline.
Allowed values are:

- `block`
  - : (Default) Scrollbar in the block axis of the scroll container.
    The block axis is the direction perpendicular to the flow of text within a line.
    For horizontal writing modes like standard English this is the same as `vertical`, while for vertical writing modes it is the same as `horizontal`.
- `inline`
  - : Scrollbar the inline axis of the scroll container.
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

<!-- Minor modification of example in animation-timeline -->

### Setting a scroll timeline

A scroll timeline named `squareTimeline` is declared and applied to the `#square` element using `animation-timeline: squareTimeline`.

#### HTML

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: squareTimeline;
  /* scroll-timeline-axis: vertical; */

  position: relative;
}

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

#stretcher {
  height: 600px;
}
```

#### Result

Scroll to see the animation.

{{EmbedLiveSample("Setting a scroll timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
