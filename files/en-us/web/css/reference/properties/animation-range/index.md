---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
page-type: css-shorthand-property
browser-compat: css.properties.animation-range
sidebar: cssref
---

The **`animation-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) is used to set the start and end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start and end.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`animation-range-start`](/en-US/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`animation-range-end`](/en-US/docs/Web/CSS/Reference/Properties/animation-range-end)

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
  - : The keyword `normal`, a `<length-percentage>`, a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name), or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-start`](/en-US/docs/Web/CSS/animation-range-start). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<animation-range-end>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

## Description

The `animation-range` shorthand property sets the `animation-range-start` and `animation-range-end` values, defining where along the animation timeline the animation will start and end. The `0%` keyframe effect will not be applied to the element until the range start is reached if the {{cssxref("animation-fill-mode")}} is not set to `backwards` or `both`.

The property can be applied to a container element as a combination of the `<animation-range-start>` and `<animation-range-end>` values. If both the values are specified, they will be interpreted in the order `<animation-range-start>` then `<animation-range-end>`.

The value of each component is either the keyword `normal`, a {{cssxref("length-percentage")}}, or a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name), optionally defined with a `<length-percentage>`

If the value is a {{cssxref("length-percentage")}} or `normal`, this is the value for the `<animation-range-start>` and `<animation-range-end>` will equal `normal`. For example, `animation-range: 20%;` is the equivalent to `animation-range: 20% normal;` and `animation-range: normal;` is the equivalent to `animation-range: normal normal;`.

If the value is a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) without a `<length-percentage>` following it, that timeline range name is applied to both the start and end animation range components at `0%` and `100%`. For example, `animation-range: contain;` is equivalent to `animation-range: contain 0% contain 100%;`.

If the value is a single `<timeline-range-name>` with a `<length-percentage>` following it, in that order, the pair defines the range start and the `<timeline-range-name>` is also applied to the range end set to `100%`. For example, `animation-range: cover 20%;` is equivalent to `animation-range: cover 20% cover 100%` and `animation-range: contain 100px;` is equivalent to `animation-range: contain 100px contain 100%`.

Otherwise, both `<animation-range-start>` and `<animation-range-end>` are defined. If the first value is the keyword `normal` or a `<length-percentage>`, that defines the `<animation-range-start>`, and the rest of the value defines the `<animation-range-end>`. For example, `animation-range: normal 25%;` is equivalent to `animation-range-start: normal; animation-range-end: 25%`, `animation-range: 25% 50%;` is equivalent to `animation-range-start: 25%; animation-range-end: 50%`, and `animation-range: 25% contain;` is equivalent to `animation-range-start: 25%; animation-range-end: contain`.

The {{glossary("Scroll container", "scroll port")}} area known as the view progress visibility range is the area inside which the subject element of a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) animation is deemed to be visible. By default, this is the full range of the scrollport, but it can be adjusted using the {{cssxref("view-timeline-inset")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage of the `animation-range` property

In this example, we reduce the duration of the view progress scroll animation by using the `animation-range` property to offset the start and end of the animation.

#### HTML

In the middle of a wall of text, we include an element that we will animate. We added a lot of text in to ensure that our content overflows its container, but this was hidden for the sake of brevity.

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
  <p>
    <label>
      <input type="checkbox"> Add <code>animation-fill-mode: both;</code>
    </label>
  </p>
</div>
```

#### CSS

We define an animation that animates an element's opacity, scale, and color, causing it to fade in, size up, and change colors as the animation progresses. We apply this animation to the `animatedElement` with the {{cssxref("animation")}} shorthand.

A view progress timeline is created by setting the [`view()`]() function as the value of the {{cssxref("animation-timeline")}} property on our `animatedElement`. The result is that the element animates as it moves upwards through the document as it is scrolled. We declared the shorthand before the `animation-timeline`, as the shorthand resets this property.

Lastly, an `animation-range` declaration is also set to make the animation begin later than expected, and finish earlier.

it moves up the scroller.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range: entry 10% exit -25%;
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

The `animatedElement` and its container's other styles were hidden for the sake of brevity.

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
```

#### Result

Scroll to see the element being animated.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Note how the `from` or `0%` keyframe property values are not applied to the animated element until the top block border edge is 10% past the container's bottom edge; it is full size, fully opaque, and magenta, then jumps to the values defined by the `0%` keyframe selector when the animation keyframes are applied, and jumps back to the original values when the `animation-range-end` is reached. This is because we did not set `animation-fill-mode` on the animated element.

Scroll to the end of the content and check the checkbox to apply the `0%` keyframe before the animation starts and the `100%` keyframe property values after the animation ends when the range end is reached.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("animation-fill-mode")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
