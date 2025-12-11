---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
page-type: css-function
browser-compat: css.properties.animation-timeline.view
sidebar: cssref
---

The **`view()`** [CSS function](/en-US/docs/Web/CSS/Reference/Values/Functions) is used with the {{cssxref("animation-timeline")}} property to create an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) based on when an element comes into view inside its nearest {{glossary("scroll container")}}. You can adjust the tracking axis and the optional insets to control when the element is considered "in view".

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
  - : Specifies the scroll direction used by the view progress timeline. The value can be one of the {{cssxref("axis")}} keywords: `block`, `inline`, `x`, or `y`. The default value is `block`.
- `<view-timeline-inset>`
  - : Specifies the inset area that defines when an element is considered "in view". The value can be the keyword `auto` or up to two {{cssxref("length-percentage")}} values.

## Description

A view progress timeline progresses based on changes in the visibility of a subject element inside its nearest scroll container. The `view()` function is used with the {{cssxref("animation-timeline")}} property to create such a view progress timeline.

The function's parameters can specify the scrollbar axis along which timeline progress is tracked and insets that adjust the position of the box in which the subject is considered visible.

- **Axis**: By default, `view()` uses the block axis. You can change this by providing an explicit `<axis>` value. If the chosen axis does not contain a scrollbar, then the animation timeline will be inactive (zero progress).
- **Inset**: By default, the timeline is at `0%` (the `from` keyframe in the {{cssxref("@keyframes")}} animation) when the subject is first visible at one edge of the scroller, and at `100%` (the `to` keyframe) when the subject's outer border edge reaches the opposite edge of the scroller. You can control these points with the `<view-timeline-inset>` parameters.
  The animation lasts as long as the element is in the inset-adjusted view. The inset is used to determine whether the element is in view, which in turn determines the length of the animation timeline. The inset consists of up to two values, each of which can be either `auto` or a {{cssxref("length-percentage")}}.
  - The first value defines the start, an inward offset from the scrollport's beginning.
  - The second value, if present, specifies the end, an inward offset from the scrollport's end. If the value is greater than `0`, it specifies an inset (positive). A negative value defines an outset adjustment to the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport).

The axis and inset components can be specified in any order. Within the inset component, the first value defines the start inset, and the second value defines the end inset.

## Formal syntax

{{CSSSyntax}}

## Examples

### Creating an anonymous view progress timeline using `view()`

In this example, we create an anonymous view progress timeline for the element with the `subject` and `animation` classes using `animation-timeline: view()`. The result is that as you scroll the document, this element animates as it moves upward through the document.

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

The `subject` and `content` classes are minimally styled, and the text content has some basic font settings:

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

To help show the result, we've defined a few extra classes. The `subject-container` class shows the bounds of the animation. And the semi-transparent `top` and `bottom` overlays mark inset-adjusted scrollport.

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

The `<div>` element with the `subject` class is also given a class of `animation`. The `grow` animation causes the `subject` element to grow or shrink. The `animation-timeline: view(block 55% 10%)` rule sets the element to be animated as it progresses through the view progress timeline created by its nearest scroll container (in this case, the document's root element).

While scrolling down, note how the inset values `50% 10%` cause the animation to start when the element is 10% from the bottom of the scrollport and to finish when it is 50% from the top. As the animation progresses along the timeline, the `subject` grows. Conversely, when scrolling up, the animation proceeds in reverse, starting at 50% from the top, moving backward through the keyframes, and ending at 10% from the bottom. So, as the animation runs backward, the `subject` shrinks.

An important point to remember is that the animation lasts only as long as the `subject` element is within view, which is defined here by `50% 10%` inset values.

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

```css hidden
@layer no-support {
  @supports not (animation-timeline: view()) {
    body::before {
      content: "Your browser doesn't support the CSS `view()` function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Result

Scroll to see the element with the `subject` class animate as it enters and leaves the adjusted inset view.

{{EmbedLiveSample("Examples", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- {{domxref("ViewTimeline")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
