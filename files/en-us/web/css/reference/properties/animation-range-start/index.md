---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
page-type: css-property
browser-compat: css.properties.animation-range-start
sidebar: cssref
---

The **`animation-range-start`** [CSS](/en-US/docs/Web/CSS) property is used to set the start of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start.

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
```

### Values

- `normal`
  - : Represents the start of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : A length or percentage value measured from the beginning of the timeline.
- [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : A specific named timeline range inside the overall timeline, starting at `0%`.
- `<timeline-range-name> <length-percentage>`
  - : A specified percentage or distance through a named timeline range, measured from the start of that timeline range.

## Description

In the case of [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) values that do not include a `<length-percentage>`, the percentage defaults to `0%`.

Allowed values for `animation-range-start` are `normal`, a {{cssxref("length-percentage")}}, a `<timeline-range-name>`, or a `<timeline-range-name>` with a `<length-percentage>` following it. See [`animation-range`](/en-US/docs/Web/CSS/animation-range) for a detailed description of the available values.

Also check out the [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), which shows exactly what the different values mean in an easy visual format.

The `animation-range-start` and {{cssxref("animation-range-end")}} properties can also be set using the {{cssxref("animation-range")}} shorthand property.

The `animation-range-start` is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that the `animation` resets a previously-declared `animation-range-start` value of equal or lower specificity to `normal`, but the range start value cannot be set via an `animation` shorthand declaration. For this reason, when creating ranges for [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines), you should declare `animation-range-start` after declaring any `animation` shorthand for it to take effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a scroll view progress timeline with range start

In this example, the `animation-range-end` is applied to an element animated via a scroll progress timeline, setting the animation to begin animating well before the element enters the scrollport.

#### HTML

```html hidden
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
</div>
```

In the middle of a wall of text, we include an element that we will animate. We added a lot of text in to ensure that our content overflows its container, but this was hidden for the sake of brevity.

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

A scroll progress timeline is defined using setting a [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) function as the value of the {{cssxref("animation-timeline")}} property. This is declared **after** the {{cssxref("animation")}} shorthand, so as to not reset the longhand property value.

An `animation-range-start` declaration is also set to make the animation start earlier than expected.

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

The other styles were hidden for the sake of brevity.

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
```

#### Result

Scroll to see the element being animated. Note that the element is 25% of the width of it's final state and semi-opaque as it enters the viewprt. This is because the element started animating well before it entered the viewport.

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
- [View timeline ranges visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
