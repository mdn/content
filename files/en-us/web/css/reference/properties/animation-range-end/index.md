---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
page-type: css-property
browser-compat: css.properties.animation-range-end
sidebar: cssref
---

The **`animation-range-end`** [CSS](/en-US/docs/Web/CSS) property sets the point on the timeline where an animation should end.

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
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline. The range starts at `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

## Description

The `animation-range-end` property specifies the end of the animation's attachment range. Changing the end of the attachment range can potentially shift the end of the animation, that is, the point where keyframes mapped to `100%` progress land when the iteration count is `1`, and can also reduce the effective duration of the animation.

The property value can be `normal`, a `<length-percentage>`, or a {{cssxref("timeline-range-name")}} with an optional `<length-percentage>`. If the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `100%`.

The `animation-range-end` property is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that using the `animation` shorthand resets any previously declared `animation-range-end` value to `normal`; the shorthand cannot be used to set a new `animation-range-end` value. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), you should declare `animation-range-end` _after_ declaring any `animation` shorthand to avoid resetting the value to `normal`.

The `animation-range-end` property, along with the {{cssxref("animation-range-start")}} property, can also be set by using the {{cssxref("animation-range")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a view progress timeline with a range end

In this example, the `animation-range-end` is applied to an element animated via a view progress timeline. This makes the animation reach its last keyframe well before the element reaches the end of it's containing viewport.

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

In the middle of a long block of text, we've included an element that we'll animate. We've added a lot of text to ensure that the content overflows its container; the extra text is hidden here for brevity.

```html-nolint
<div class="animatedElement">
```

```html-nolint hidden
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
<p>
```

We've also included a checkbox that will toggle the {{cssxref("animation-fill-mode")}} property, so you can see how this property affects animations with shortened timelines.

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

We've defined a view progress timeline by setting a {{cssxref("animation-timeline/view", "view()")}} function as the value of the {{cssxref("animation-timeline")}} property. This is declared **after** the {{cssxref("animation")}} shorthand to avoid resetting the longhand property value.

We've also set `animation-range-end` to make the animation end earlier than expected.

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

When the checkbox is checked, the `animation-fill-mode` property gets applied to the animated element:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

The other styles applied in this example has been hidden here for brevity.

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

Scroll to see the element animate. Then toggle the checkbox at the end of the block of text and scroll again. Notice how the element finishes animating when it is 75% of the way through the viewport, and how it returns to its default state at that point when the `animation-fill-mode` property is not applied.

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
- [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [View progress timeline: Ranges and animation progress visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
