---
title: animation-range-end
slug: Web/CSS/animation-range-end
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
```

### Values

- `normal`
  - : Represents the end of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : A length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : A specific named timeline range inside the overall timeline, starting at `0%`.
- `<timeline-range-name> <length-percentage>`
  - : A specified percentage or distance through a named timeline range, measured from the start of that timeline range.

## Description

The `animation-range-end` property specifies the end of the animation's attachment range, potentially shifting the end time of the animation (i.e., where keyframes mapped to `100%` progress are attached when the iteration count is 1) and/or reducing the duration of the animation.

The value can be `normal`, a `<length-percentage>`, or a {{cssxref("timeline-range-name")}} with an optional `<length-percentage>`. When the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `100%`.

The `animation-range-end` property is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that including `animation` resets a previously-declared `animation-range-end` value to `normal`, but the `<animation-range-end>` value cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), you should declare `animation-range-end` after declaring any `animation` shorthand to prevent the value from being reset to `normal`.

The `animation-range-end` property (and the {{cssxref("animation-range-start")}} property) can also be set using the {{cssxref("animation-range")}} shorthand property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a named view progress timeline with range end

A view progress timeline named `--subject-reveal` is defined using the `view-timeline` property on a subject element with a `class` of `animation`.
This is then set as the timeline for the same element using `animation-timeline: --subject-reveal;`. The result is that the subject element animates as it moves upwards through the document as it is scrolled.

An `animation-range-end` declaration is also set to make the animation end earlier than expected.

#### HTML

The HTML for the example is shown below.

```html
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

  <div class="subject animation"></div>

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

The `subject` element and its containing `content` element are styled minimally, and the text content is given some basic font settings:

```css
.subject {
  width: 300px;
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

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `view-timeline` is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed. We also give it an `animation-range-end` declaration to make the animation end earlier than expected.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  view-timeline: --subject-reveal block;
  animation-timeline: --subject-reveal;

  animation-name: appear;
  animation-range-end: contain 50%;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Creating a named view progress timeline with range end", "100%", "480px")}}

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
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
- [View timeline ranges visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
