---
title: view()
slug: Web/CSS/animation-timeline/view
page-type: css-function
status:
  - experimental
browser-compat: css.properties.animation-timeline.view
---

{{CSSRef}}{{SeeCompatTable}}

The **`view()`** [CSS function](/en-US/docs/Web/CSS/CSS_Functions) can be used with {{cssxref("animation-timeline")}} to indicate a subject element that will provide an anonymous view progress timeline to animate. The view progress timeline is progressed through by a change in visibility of the subject element inside the nearest ancestor scroller. The visibility of the subject inside the scroller is tracked — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller, and 100% when it reaches the opposite edge.

The function parameters can specify the scrollbar axis along which timeline progress will be tracked and an inset that adjusts the position of the box in which the subject is deemed to be visible.

> **Note:** If the indicated axis does not contain a scrollbar, then the animation timeline will be inactive (have zero progress).

> **Note:** Each use of `view()` corresponds to its own unique instance of {{domxref("ViewTimeline")}} in the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Function with no parameters set */
animation-timeline: view();

/* Values for selecting the axis */
animation-timeline: view(block); /* Default */
animation-timeline: view(inline);
animation-timeline: view(y);
animation-timeline: view(x);

/* Values for the inset */
animation-timeline: view(auto); /* Default */
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Examples that specify axis and inset */
animation-timeline: view(block auto); /* Default */
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Parameters

- axis

  - : The scrollbar axis value can be any one of the following:

    - `block`
      - : The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line.
        For horizontal writing modes, such as standard English, this is the same as `y`, while for vertical writing modes, it is the same as `x`. This is the default value.
    - `inline`
      - : The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line.
        For horizontal writing modes, this is the same as `x`, while for vertical writing modes, this is the same as `y`.
    - `y`
      - : The scrollbar on the vertical axis of the scroll container.
    - `x`
      - : The scrollbar on the horizontal axis of the scroll container.

- inset

  - : The inset value can be one or two values, which can be either `auto` or a {{cssxref("length-percentage")}}.

> **Note:** The scroller and inset values can be specified in any order.

### Formal syntax

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

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `animation-timeline: view(block 25% 25%)` is set to declare that it will be animated as it progresses through the view progress timeline provided by its scrolling ancestor (in this case the document's root element). Note how the inset value of `25% 25%` causes the animation to start 25% of the way up the viewport, and finish 25% from the top.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  animation-timeline: view(block 25% 25%);

  animation-name: appear;
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

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
