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
/* Range start value only*/
/* Single value syntax */
animation-range: normal;
animation-range: 20%;
animation-range: 100px;
animation-range: cover;
animation-range: contain;
/* Two value syntax */
animation-range: cover 20%;
animation-range: contain 100px;

/* Range start and end values */
/* Two value syntax */
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

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

The `animation-range` shorthand property is specified as one or more single animation ranges, separated by commas. Each animation range is specified as one to four space separated values composed of `<timeline-range-name>` values, `<length-percentage>` values, and/or the keyword `normal`.

### Values

- `<animation-range-start>`
  - : The keyword `normal`, a `<length-percentage>`, a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name), or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-start`](/en-US/docs/Web/CSS/animation-range-start). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<animation-range-end>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name> <length-percentage>` pair, representing the [`animation-range-end`](/en-US/docs/Web/CSS/animation-range-end). If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

## Description

The `animation-range` shorthand property sets the `animation-range-start` and `animation-range-end` values, defining where along the animation timeline the animation will start and end. By default, animation keyframe effects are only applied to the elements when the animation is applied to the element based on the `animation-timeline`, meaning the animation is only applied between the range start and range end. To apply the animation outside of this range, set the {{cssxref("animation-fill-mode")}} to `backwards`, `forwards`, or `both`.

The {{glossary("Scroll container", "scroll port")}} area known as the view progress visibility range is the area inside which the subject element of a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) animation is deemed to be visible. By default, this is the full range of the scrollport, but it can be adjusted using the {{cssxref("view-timeline-inset")}} property.

If two values are specified as components of the `<animation-range>` property, they will be interpreted in the order `<animation-range-start>` then `<animation-range-end>`. The value of each component is either the keyword `normal` or a {{cssxref("length-percentage")}} or a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name), optionally defined with a `<length-percentage>`. These values are space-separated. Normal is equal to `0%` for start and `100%` for end. Setting `normal` with a `<length-percentage>` for either the start or end range is invalid.

### Defining range start and defaulting range end

If the value is a {{cssxref("length-percentage")}} or `normal`, this is interpreted as the value for `<animation-range-start>`. The `<animation-range-end>` value will be implicitly set to `normal`. For example:

- `animation-range: 20%;` is the equivalent to `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` is the equivalent to `animation-range-start: 0%; animation-range-end: 100%;`

If the value is a [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) without a `<length-percentage>` following it, that timeline range name is applied to the `<animation-range-start>` and `<animation-range-end>` components at `0%` and `100%`, respectively. For example:

- `animation-range: contain;` is equivalent to `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` is equivalent to `animation-range-start: cover 0%; animation-range-end: cover 100%;`

If the value is a single `<timeline-range-name>` with a `<length-percentage>` following it, in that order, the pair defines the `<animation-range-start>`. The `<animation-range-end>` is set to the same `<timeline-range-name>` at `100%`. For example:

- `animation-range: cover 20%;` is equivalent to `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` is equivalent to `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Defining both range start and range end

If only one value is specified, or if two values are specified, and the value is a single `<timeline-range-name>` with a `<length-percentage>`, this defines the range start, and the value for range end is determined by the rules previously explained in [Defining range start and defaulting range end](#defining-both-range-start-and-range-end). Otherwise, both `<animation-range-start>` and `<animation-range-end>` are defined.

If the first value is the keyword `normal` or a `<length-percentage>`, that defines the `<animation-range-start>`, and the rest of the value defines the `<animation-range-end>`. For example:

- `animation-range: normal 25%;` is equivalent to `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` is equivalent to `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` is equivalent to `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` is equivalent to `animation-range-start: 25%; animation-range-end: 100%;`

### Multiple animations

When specifying ranges for multiple animations, the `animation-range` shorthand property is specified as one or more single animation ranges, separated by commas. Each animation-range is applied to the animations in the order in which the {{cssxref("animation-name")}}s appear. For situations where the number of animations and the `animation-range` property values do not match, if there are more `animation-range` value than animations, the extra ranges are ignore. If there are more animations than ranges, the list of `animation-range` values are repeated until there is a corresponding range for each animation. For example, if we set `animation-range: 25% 75%, normal;`, the animation range of all the odd numbered animations `25% 75%` and all the even animations will be be `0% 100%`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage of the `animation-range` property

In this example, we reduce the duration of the view progress scroll animation by using the `animation-range` property to offset the start and end of the animation, and demonstrate the effect of the {{cssxref("animation-fill-mode")}} property on shortened animation timelines.

#### HTML

In the middle of a wall of text, we include an element that we will animate. We added a lot of text in to ensure that our content overflows its container, but this was hidden for the sake of brevity.
The checkbox included to toggle the demonstration of the effect of the {{cssxref("animation-fill-mode")}} property on shortened animation timelines is also hidden.

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
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus
  orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam
  elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis
  ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
  Netus et malesuada fames ac.
</p>
<p></p>
<label>
  <input type="checkbox" /> Add <code>animation-fill-mode: both;</code>
</label>
  </p>
</div>
```

#### CSS

We define an animation that animates an element's opacity, scale, and color, causing it to fade in, size up, and change colors as the animation progresses. We apply this animation to the `animatedElement` with the {{cssxref("animation")}} shorthand.

A view progress timeline is created by setting the [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function as the value of the {{cssxref("animation-timeline")}} property on our `animatedElement`. The result is that the element animates as it moves upwards through the document as it is scrolled. We declared the shorthand before the `animation-timeline`, as the shorthand resets this property.

Lastly, an `animation-range` declaration is also set to make the animation begin later than expected, and finish earlier.

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

We also include conditional styling: when the checkbox is checked, the `animation-fill-mode` property gets applied to the animated element:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range' property.";
    background-color: #ffcd33;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

Scroll to see the element being animated.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Note how the `from`, or `0%`, keyframe property values are not applied to the animated element until the top block border edge is `10%` past the container's bottom edge; it is full size, fully opaque, and magenta. At that point, the animation is applied and it is styled with the values defined by the `0%` keyframe selector. When the `animation-range-end` is reached, 25% from the top of the scrollport, it jumps back to its original styling.

The jumping to the default state occurs because we did not set the {{cssxref("animation-fill-mode")}} property on the element, which can be used to apply an animation's styles to an element before and after the animation's execution. We've omitted the property in this example to better enable visualizing the effects of `animation-range`.But, generally, you will want to set `animation-fill-mode: both` when creating [scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations).

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
