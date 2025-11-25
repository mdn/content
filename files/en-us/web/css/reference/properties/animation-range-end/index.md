---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
page-type: css-property
browser-compat: css.properties.animation-range-end
sidebar: cssref
---

The **`animation-range-end`** [CSS](/en-US/docs/Web/CSS) property is used to set the end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will end.

## Syntax

```css
/* Keyword or length percentage value */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* Named timeline range value */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;

/* Global values */
animation-range-end: inherit;
animation-range-end: initial;
animation-range-end: revert;
animation-range-end: revert-layer;
animation-range-end: unset;
```

### Values

- `normal`
  - : Represents the end of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : A length or percentage value measured from the beginning of the timeline.
- [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : A specific named timeline range inside the overall timeline, starting at `0%`.
- `<timeline-range-name> <length-percentage>`
  - : A specified percentage or distance through a named timeline range, measured from the start of that timeline range.

## Description

The `animation-range-end` property specifies the end of the animation's attachment range, potentially shifting the end time of the animation (i.e., where keyframes mapped to `100%` progress are attached when the iteration count is 1) and/or reducing the duration of the animation.

The value can be `normal`, a `<length-percentage>`, or a {{cssxref("timeline-range-name")}} with an optional `<length-percentage>`. When the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `100%`.

The `animation-range-end` property is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that including `animation` resets a previously-declared `animation-range-end` value to `normal`, but the `<animation-range-end>` value cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), you should declare `animation-range-end` after declaring any `animation` shorthand to prevent the value from being reset to `normal`.

The `animation-range-end` property (and the {{cssxref("animation-range-start")}} property) can also be set using the {{cssxref("animation-range")}} shorthand property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a view progress timeline with a range end

In this example, the `animation-range-end` is applied to an element animated via a view progress timeline, setting the animation to reach the last keyframe well before the element reaches the end of it's containing viewport.

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
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus
  orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam
  elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis
  ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
  Netus et malesuada fames ac.
</p>
<p></p>
```

We also includes a checkbox to that will toggle the {{cssxref("animation-fill-mode")}} property to demonstrate the effect of this property on shortened animation timelines.

```html
<label>
  <input type="checkbox" /> Add <code>animation-fill-mode: forwards;</code>
</label>
```

```html hidden
  </p>
</div>
```

#### CSS

A view progress timeline is defined using setting a [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function as the value of the {{cssxref("animation-timeline")}} property. This is declared **after** the {{cssxref("animation")}} shorthand, so as to not reset the longhand property value.

An `animation-range-end` declaration is also set to make the animation end earlier than expected.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range-end: exit 25%;
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

We also include conditional styling: when the checkbox is checked, the `animation-fill-mode` property gets applied to the animated element:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

The other styles were hidden for the sake of brevity.

```css hidden
.animatedElement {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range-end: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range-end' property.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

Scroll to see the element being animated. Toggle the checkbox and scroll again. Note how the element finishes animating 75% of the way through the viewport, and how it returns to its default state at this point when the `animation-fill-mode` property is not applied.

{{EmbedLiveSample("Creating a view progress timeline with a range end", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("view-timeline-inset")}}
- {{domxref("Element.animate()")}} `rangeStart` property
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [View timeline ranges visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
