---
title: view()
slug: Web/CSS/animation-timeline/view
page-type: css-function
browser-compat: css.properties.animation-timeline.view
sidebar: cssref
---

The **`view()`** [CSS function](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) can be used to define the axis and insets of an [anonymous view progress timeline](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines#anonymous_view_progress_timelines_the_view_function).

## Syntax

```css
/* No parameters */
animation-timeline: view();

/* Axis parameter */
animation-timeline: view(block);
animation-timeline: view(x);

/* Inset parameter */
animation-timeline: view(auto);
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Axis and inset parameters */
animation-timeline: view(block auto);
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Parameters

- `<axis>`
  - : An {{ cssxref("axis") }} keyword value describing the direction, or axis, of the scrollport that controls the scroll-driven animation. The default value is `block`.
- `<view-timeline-inset>`
  - : Up to two {{cssxref("length-percentage")}} values or the keyword `auto`.

## Description

The `view()` function is used with the {{cssxref("animation-timeline")}} property to indicate that the nearest ancestor scroll container will provide an anonymous view progress timeline to animate, optionally providing the direction of the scroller and starting and ending timeline insets. View progress timelines progress through by a change in visibility of subject elements inside their nearest ancestor scrollers.

The function parameters can specify the scrollbar axis along which timeline progress will be tracked and an inset that adjusts the position of the box in which the subject is deemed to be visible.

By default, the `view()` references the block axis. This can be changed by providing an explicit `<axis>` value. If the indicated axis does not contain a scrollbar, then the animation timeline will be inactive (have zero progress).

By default, the timeline is at its `0%` or `from` of its {{cssxref("keyframe")}} animation when the subject is first visible at one edge of the scroller, and at the `100%` or `to` keyframe when its outer border edge reaches the opposite edge of the scroller. This can be controlled with the `<view-timeline-inset>` parameters.

The animation lasts as long as the element is in the inset-adjusted view.The timeline inset consists of up to two values, which can be either `auto` or a {{cssxref("length-percentage")}}. The first value is the start, which defines the inward offset from beginning of the scrollport. The second value, if present, is the end, defining the inward offset from end of the scrollport. If the value is greater than `0`, it specifies an inset (positive). A negative value defines an outset adjustment to the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport). The inset is used to determine whether the element is in view which determines the length of the animation timeline.

While the axis and inset components can be specified in any order, within the inset component, the first value defines the starting inset and the second component defines the end offset.

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting an anonymous view progress timeline

An anonymous view progress timeline is set on an element with class `subject` using `animation-timeline: view()`. The result is that the `subject` element animates as it moves upwards through the document as it is scrolled.

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

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

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
<div class="overlay top">inset start 50%</div>
<div class="overlay bottom">inset end 10%</div>
```

#### CSS

The `subject` element and `content` elements are minimally styled and the text content is given some basic font settings:

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

To aid the understanding of the result, extra elements `subject-container`, `top`, and `bottom` have been used. The `subject-container` shows the bounds of the animation. And semi-transparent `top` and `bottom` overlays mark inset offsetted scrollport.

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 50%;
  align-items: end;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

In the following code, the `<div>` with the class of `subject` is also given a class of `animation`. The `grow` animation causes the `subject` element to grow or shrink. The `animation-timeline: view(block 55% 10%)` is set to declare that it will be animated as it progresses through the view progress timeline provided by its scrolling ancestor (in this case the document's root element).

While scrolling down, note how the inset value of `50% 10%` causes the animation to start at 10% from the bottom and finish at 50% from the top. As animation moves forward along the timeline the `subject` grows. Conversely, when scrolling up the animation proceeds in the reverse direction, starting at 50% from the top, moving backward through the animation, and ending at 10% from the bottom. So, as the animation happens backwards the `subject` shrinks.

An important point to remember is that the animation lasts as long as the `subject` element is in the view which has been set and to be offset using `50% 10%` inset values.

```css
.animation {
  animation-timeline: view(block 50% 10%);
  animation-name: grow;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
- {{domxref("ViewTimeline")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
