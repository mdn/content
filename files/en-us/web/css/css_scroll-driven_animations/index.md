---
title: CSS Scroll-driven Animations
slug: Web/CSS/CSS_Scroll-driven_Animations
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/scroll-animations-1/
  - https://drafts.csswg.org/css-animations-2/
  - https://drafts.csswg.org/web-animations-2/
---

{{CSSRef}}

The **CSS Scroll-driven Animations** module provides functionality that builds on top of the [CSS animations module](/en-US/docs/Web/CSS/CSS_animations) and [Web Animations JavaScript API](/en-US/docs/Web/API/Web_Animations_API). It allows you to animate property values based on a progression along a scroll-based timeline rather than the default time-based document timeline — i.e. you can animate elements by scrolling an element rather than just by the passing of time.

There are two different types of scroll-based timeline:

- A _scroll progress timeline_ is progressed through by scrolling a scrollable element (_scroller_) between top and bottom (or left and right). The position in the scroll range is converted into a percentage of progress — 0% at the start and 100% at the end.
- A _view progress timeline_ is progressed through based on the change in visibility of an element (known as the _subject_) inside a scroller. The visibility of the subject inside the scroller is tracked — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller, and 100% when it reaches the opposite edge.

A defined timeline is then applied to an animated element to specify that the animation should be progressed along that timeline rather than the default.

It is also possible to adjust the effective placement of the animation along the timeline, i.e. the position at which it appears to start and end. This can be done in a couple of different ways:

- Start and end animation range values can be applied to the animation to adjust the position of the animation's starting and ending position along the timeline.
- View progress timelines can have a start and/or end inset (or outset) applied to them to adjust the position of the scrollport (see {{glossary("Scroll container")}} for more details) in which the subject element is deemed to be visible. Put another way, this allows you to specify start and/or end inset (or outset) values that offset the position of the timeline itself.

## Scroll-driven animations in action

### Scroll progress timeline-driven animation

The first example shows a scroll progress timeline-driven animation — scroll the container up and down to progress the animation forwards and backwards. The position of the scrollbar directly controls the animation.

{{EmbedLiveSample("Scroll progress timeline-driven animation", "100%", "240px")}}

The HTML contains one {{htmlelement("div")}} element to create the animated box, and another to which a large {{cssxref("height")}} is applied, causing the document to scroll.

```html
<div class="content"></div>
<div class="box animation"></div>
```

In the CSS, we designate the <code>:root</code> ({{htmlelement("html")}}) element as the scrolling element that will provide the scroll progress timeline, i.e. it will drive the animation when scrolled. We do this by giving it a {{cssxref("scroll-timeline-name")}} value of `--myScroller`. We then apply that timeline to the second `<div>` by setting its {{cssxref("animation-timeline")}} property to the same name.

```css
:root {
  scroll-timeline-name: --myScroller;
}

.content {
  height: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
}

.animation {
  animation: rotate-appear;
  animation-timeline: --myScroller;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    left: 0%;
  }

  to {
    rotate: 720deg;
    left: 100%;
  }
}
```

### View progress timeline-driven animation

The second example shows a view progress timeline-driven animation — again, you scroll the container up and down to progress the animation forwards and backwards, but bear in mind that in this case it is the visibility of the pink rectangle (the _subject element_) inside the scrolling element that controls the animation, not the position of the scrollbar.

{{EmbedLiveSample("View progress timeline-driven animation", "100%", "320px")}}

The HTML contains some sample content to make the document scroll. In the middle of it we have the subject element — the `<div>`.

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
    Sagittis aliquam malesuada bibendum arcu vitae elementum.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet.
  </p>
</div>
```

The CSS is shown below. The subject element and its containing `content` element are styled minimally, and the text content is given some basic font settings. The subject element is also given a {{cssxref("view-timeline-name")}} value of `--subjectReveal` to define a view progress timeline on it. The same element is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed.

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  margin: 0 auto;
}

p, h1 {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

.animation {
  view-timeline-name: --subjectReveal;
  animation-timeline: --subjectReveal;

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

> **Note:** The subject element does not have to be the element that is animated; you could animate a different element based on the defined view progress timeline.

## Reference

### Properties

Set the timeline that will control the progress of an animation, and set its attachment range along that timeline:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Define _named scroll progress timelines_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Define _named view progress timelines_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

### At-rules

CSS Scroll-driven Animations adds the ability to include `<timeline-range-name>`s in {{cssxref("@keyframes")}} blocks, to place keyframes at specific positions inside named timeline ranges.

### Functions

Possible values of the {{cssxref("animation-timeline")}} property for defining _anonymous scroll progress timelines_ and _anonymous view progress timelines_ (i.e. implicitly defined by the browser rather than being explicitly named and defined using the `scroll-timeline-*` and `view-timeline-*` properties):

- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/en-US/docs/Web/CSS/animation-timeline/view)

### Relevant JavaScript features

- {{domxref("Element.animate()")}}
- {{domxref("AnimationTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## Guides

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/articles/scroll-driven-animations/)

## Specifications

{{Specifications}}

## See also

- [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/)
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
