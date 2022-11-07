---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
page-type: css-property
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
  - Experimental
browser-compat: css.properties.scroll-timeline-name
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline-name`** [CSS](/en-US/docs/Web/CSS) property defines a name that can be used to identify an element as the source of a scroll timeline for an animation.

The name can then be referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration to link the animation to the position of a scrollbar on the indicated element.
By default, the scrollbar in the "block" direction provides the timeline (this is the vertical scrollbar in left-to-right writing mode).
The scrollbar that is used can be set by applying [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis) on the same element as the `scroll-timeline-name`.
Note that if the element does not display a scrollbar in the axis dimension, then no timeline will be created.

The `scroll-timeline-name` (and `scroll-timeline-axis`) property can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: custom_name_for_timeline;
```

### Values

Allowed values for `<scroll-timeline-name>` are:

- `none`
  - : The timeline has no name.
- `<custom-ident>`
  - : An arbitrary custom identifier that can be used to reference the scroll timeline in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline).
    Possible values are described in [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident).

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

The CSS for the container sets it as the source of a scroll timeline named `squareTimeline` using the `scroll-timeline-name` property.
Here we choose not to set the scrollbar axis as the vertical axis will be used by default.

The height of the container is set to 300px and we also set the container to create a vertical scrollbar if it overflows (below we will use CSS on the "stretcher" element to ensure that it does overflow).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: squareTimeline;
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

The "stretcher" CSS below sets the block height to 600px, which forces the container element to overflow and create scroll bars.
Without this element, there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

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

- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
