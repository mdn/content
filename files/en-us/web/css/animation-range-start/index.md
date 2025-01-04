---
title: animation-range-start
slug: Web/CSS/animation-range-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.animation-range-start
---

{{CSSRef}}{{SeeCompatTable}}

The **`animation-range-start`** [CSS](/en-US/docs/Web/CSS) property is used to set the start of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start.

The `animation-range-start` and {{cssxref("animation-range-end")}} properties can also be set using the [`animation-range`](/en-US/docs/Web/CSS/animation-range) shorthand property.

> **Note:** `animation-range-start` is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that including `animation` resets a previously-declared `animation-range-start` value to `normal`, but a specific value cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), you need to declare `animation-range-start` after declaring any `animation` shorthand for it to take effect.

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

Allowed values for `animation-range-start` are `normal`, a {{cssxref("length-percentage")}}, a `<timeline-range-name>`, or a `<timeline-range-name>` with a `<length-percentage>` following it. See [`animation-range`](/en-US/docs/Web/CSS/animation-range) for a detailed description of the available values.

Also check out the [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), which shows exactly what the different values mean in an easy visual format.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a named view progress timeline with range start

A view progress timeline named `--subjectReveal` is defined using the `view-timeline` property on a subject element with a `class` of `animation`.
This is then set as the timeline for the same element using `animation-timeline: --subjectReveal;`. The result is that the subject element animates as it moves upwards through the document as it is scrolled.

An `animation-range-start` declaration is also set to make the animation begin later than expected.

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
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `view-timeline` is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed. We also give it an `animation-range-start` declaration to make the animation begin later than expected.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range-start: entry 25%;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1,
    transform: scaleX(1);
  }
}
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`animation-range`](/en-US/docs/Web/CSS/animation-range), [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/en-US/docs/Web/CSS/view-timeline-inset)
- The JavaScript equivalent: The `rangeStart` property available in {{domxref("Element.animate()")}} calls
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
