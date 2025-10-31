---
title: animation-range
slug: Web/CSS/animation-range
page-type: css-shorthand-property
browser-compat: css.properties.animation-range
sidebar: cssref
---

The **`animation-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) is used to set the start and end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start and end.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`animation-range-start`](/en-US/docs/Web/CSS/animation-range-start)
- [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end)

## Syntax

```css
/* Single value syntax */
animation-range: normal;
animation-range: 20%;
animation-range: 100px;
animation-range: cover;
animation-range: contain;

/* Two value syntax */
/* Named timeline range value */
animation-range: cover 20%;
animation-range: contain 100px;
/* Range start and end */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit;

/* Three value syntax */
animation-range: cover cover 200px;
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;

/* Four value syntax */
animation-range: cover 0% cover 200px;
animation-range: entry 10% exit 100%;
```

### Values

- `<animation-range-start>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-start`](/en-US/docs/Web/CSS/animation-range-start). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<animation-range-end>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

## Description

The `animation-range` shorthand property sets the `animation-range-start` and `animation-range-end` values, defining where along the animation timeline the animation will start and end.

The property can be applied to a container element as a combination of the `<animation-range-start>` and `<animation-range-end>` values. If both the values are specified, they will be interpreted in the order `<animation-range-start>` then `<animation-range-end>`.

The value of each component is either the keyword `normal`, a {{cssxref("length-percentage")}}, or a {{cssxref("timeline-range-name")}}, optionally defined with a `<length-percentage>`

If the value is a {{cssxref("length-percentage")}} or `normal`, `<animation-range-start>` will take that value, and `<animation-range-end>` will equal `normal`. For example, `animation-range: 20%;` is the equivalent to `animation-range: 20% normal;` and `animation-range: normal;` is the equivalent to `animation-range: normal normal;`.

If the value is a {{cssxref("timeline-range-name")}} without a `<length-percentage>` following it, that timeline range name is applied to both the start and end animation range components at 0% and 100%. For example, `animation-range: contain;` is equivalent to `animation-range: contain 0% contain 100%;`.

If the value is a `<timeline-range-name>` with a `<length-percentage>` following it, that defines the range start. In this case, both the start and end animation range components are set to the `<timeline-range-name>`, while the `<length-percentage>` value applies to the `<animation-range-start>` component and the `<animation-range-end>` component is set to `100%`. For example, `animation-range: cover 20%;` is equivalent to `animation-range: cover 20% cover 100%` and `animation-range: contain 100px;` is equivalent to `animation-range: contain 100px contain 100%`.

Otherwise, both `<animation-range-start>` and `<animation-range-end>` are defined. If the first value is `normal` or a `<length-percentage>`, that defines the `<animation-range-start>`, and the rest of the value defines the `<animation-range-end>`. For example, `animation-range: normal 25%;` is equivalent to `animation-range-start: normal; animation-range-end: 25%`, and `animation-range: 25% 50%;` is equivalent to `animation-range-start: 25%; animation-range-end: 50%`. Including `<timeline-range-name>`; `animation-range: entry exit;` is equivalent to `animation-range: entry 0% exit 100%`,
`animation-range: cover cover 200px;`is equivalent to `animation-range: cover 0% cover 200px;`, and `animation-range: entry 10% exit;` is equivalent to `animation-range: entry 10% exit 100%;`.

The {{glossary("Scroll container", "scroll port")}} area known as the view progress visibility range is the area inside which the subject element of a [named view progress timeline](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines#view_progress_timelines) animation is deemed to be visible. By default, this is the full range of the scrollport, but it can be adjusted using the {{cssxref("view-timeline-inset")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### View Timeline Ranges Visualizer

See the [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) for a visual explanation of what all the value types mean.

### Creating a named view progress timeline with range

A view progress timeline named `--subject-reveal` is defined using the `view-timeline` property on a subject element with a `class` of `animation`.
This is then set as the timeline for the same element using `animation-timeline: --subject-reveal;`. The result is that the subject element animates as it moves upwards through the document as it is scrolled.

An `animation-range` declaration is also set to make the animation begin later than expected, and finish earlier.

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

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `view-timeline` is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed. We also give it an `animation-range` declaration to make the animation begin later than expected, and finish earlier.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  view-timeline: --subject-reveal block;
  animation-timeline: --subject-reveal;

  animation-name: appear;
  animation-range: entry 10% contain 25%;
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

{{EmbedLiveSample("Creating a named view progress timeline with range", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end), [`animation-range-start`](/en-US/docs/Web/CSS/animation-range-start)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/en-US/docs/Web/CSS/view-timeline-inset)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
