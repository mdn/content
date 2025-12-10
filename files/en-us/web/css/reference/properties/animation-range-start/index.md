---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
page-type: css-property
browser-compat: css.properties.animation-range-start
sidebar: cssref
---

The **`animation-range-start`** [CSS](/en-US/docs/Web/CSS) property sets the point on the timeline where an animation should start.

## Syntax

```css
/* Keyword or length percentage value */
animation-range-start: normal;
animation-range-start: 20%;
animation-range-start: 100px;

/* Named timeline range value */
animation-range-start: cover;
animation-range-start: contain;
animation-range-start: cover 20%;
animation-range-start: contain 100px;

/* Global values */
animation-range-start: inherit;
animation-range-start: initial;
animation-range-start: revert;
animation-range-start: revert-layer;
animation-range-start: unset;
```

### Values

- `normal`
  - : Represents the start of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : Specifies a named timeline range within the overall timeline. The range starts at `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

## Description

Allowed values for the `animation-range-start` property are `normal`, a {{cssxref("length-percentage")}}, a `<timeline-range-name>`, or a `<timeline-range-name>` followed by a `<length-percentage>`. If the [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) value does not include a `<length-percentage>`, the percentage defaults to `0%`.
See {{cssxref("animation-range")}} for a detailed description of the available values.
Also check out the [View progress timeline visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), which shows what the different values mean in an easy-to-follow visual format.

The `animation-range-start` is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that using the `animation` shorthand resets any previously declared `animation-range-start` value of equal or lower specificity to `normal`; the shorthand cannot be used to set a new `animation-range-start` value. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), you should declare `animation-range-start` _after_ declaring any `animation` shorthand to avoid resetting the value to `normal`.

The `animation-range-start`, along with the {{cssxref("animation-range-end")}} property, can also be set using the {{cssxref("animation-range")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a scroll view progress timeline with range start

In this example, the `animation-range-start` is applied to an element animated via a scroll progress timeline. This makes the animation start well before the element enters the scrollport.

#### HTML

```html-nolint hidden
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>
```

In the middle of a long block of text, we've included an element that we'll animate. We've added a lot of text to ensure that the content overflows its container; the extra text is hidden here for brevity.

```html
<div class="animatedElement"></div>
```

```html hidden
<p>
  Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
  cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
  tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
  vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
  quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
  imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
  scelerisque. Netus et malesuada fames ac.
</p>
</div>
```

#### CSS

A scroll progress timeline is defined using setting a [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) function as the value of the {{cssxref("animation-timeline")}} property. This is declared **after** the {{cssxref("animation")}} shorthand to avoid resetting the longhand property value.

We've also set `animation-range-start` to make the animation start earlier than expected.

```css
.animatedElement {
  background-color: deeppink;

  animation: appear 1ms linear;

  animation-timeline: scroll();
  animation-range-start: -25%;
}

@keyframes appear {
  from {
    background-color: rebeccapurple;
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    background-color: darkturquoise;
    opacity: 0.75;
    transform: scaleX(0.75);
  }
}
```

Other styles applied in this example have been hidden here for brevity.

```css hidden
.animatedElement {
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

@supports not (animation-range-start: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range-start' property.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

Scroll to see the element animate. Notice how the element is already scaled and semi-opaque as it enters the viewport. This is because the element started animating well before it entered the viewport.

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("view-timeline-inset")}}
- {{domxref("Element.animate()")}} `rangeStart` property
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [View progress timeline: Ranges and animation progress visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
