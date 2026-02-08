---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
page-type: css-property
browser-compat: css.properties.animation-timeline
sidebar: cssref
---

The **`animation-timeline`** [CSS](/en-US/docs/Web/CSS) property specifies the timeline used to control the progress of a CSS animation.

## Syntax

```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Named timeline */
animation-timeline: --timeline_name;

/* Anonymous scroll progress timeline */
animation-timeline: scroll();
animation-timeline: scroll(x root);

/* Anonymous view progress timeline */
animation-timeline: view();
animation-timeline: view(inline);
animation-timeline: view(x 200px auto);

/* Multiple values */
animation-timeline: --progress-bar-timeline, --carousel-timeline;
animation-timeline: auto, view(20% 80%), none, scroll(inline nearest);

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Values

The `animation-timeline` property is specified as one or more comma-separated values, each of which can be one of the following:

- `none`
  - : The animation is not associated with a timeline, and no animation occurs.

- `auto`
  - : The animation's timeline is the document's default {{domxref("DocumentTimeline")}}. This is the default value.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Defines the root element, nearest scroller, or self as an anonymous scroll progress timeline, and optionally the scroll direction of the scroller.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Defines the nearest ancestor scroll container as an anonymous view progress timeline, optionally overriding the default `baseline` axis direction and the `auto` start and ending insets.

- `<dashed-ident>`
  - : The name of a scroll-driven or view-progress timeline, as defined by the scroll container's {{cssxref('scroll-timeline-name')}} or {{cssxref('view-timeline-name')}} property (or the {{cssxref('scroll-timeline')}} or {{cssxref('view-timeline')}} shorthand property).

## Description

The default timeline for a CSS keyframe animation is the time-based {{domxref("DocumentTimeline")}}. The `animation-timeline` property can be used to set a named or anonymous scroll progress or view progress timeline. Alternatively, it can be used to explicitly set the default time-based document timeline to control the progress of an element's animation or to have no timeline at all, in which case the element does not animate.

The following types of timelines can be set via `animation-timeline`:

- {{domxref("DocumentTimeline")}}
  - : The default document timeline, which is progressed through by the passing of time since the document was first loaded in the browser. This is the timeline traditionally associated with CSS animations and is selected with a value of `auto`, or by not specifying an `animation-timeline` value at all, as this is the default value.
- [Scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : The animation is progressed through by scrolling a scrollable element, or _scroller_, horizontally or vertically. The element that provides the scroll progress timeline can be specified in two ways:
    - [Named scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : The scroller is explicitly named by setting the {{cssxref("scroll-timeline-name")}} property (or the {{cssxref("scroll-timeline")}} shorthand property) to a {{cssxref("dashed-ident")}}; that `<dashed-ident>` name is then set as the value of the `animation-timeline` property.
    - [Anonymous scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : The `animation-timeline` property of the element to animate is set to the {{cssxref("animation-timeline/scroll", "scroll()")}} function. The function's two optional parameters define the scroller providing the scroll progress timeline and the scroll axis to be used.
- [View progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : A keyframe animation is progressed through based on the change in visibility of an element inside a scroller; this element is known as the _subject_. By default, the timeline is at `0%` when the element first becomes visible at one edge of the scroller, and is at `100%` when its end edge exits the scroller's opposite edge. A view progress timeline can be specified in two ways:
    - [Named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : The subject is explicitly named by setting the {{cssxref("view-timeline-name")}} property (or the {{cssxref("view-timeline")}} shorthand property) to a `<dashed-ident>`. When you set the `animation-timeline` property of the element to animate to that `<dashed-ident>`, the subject's visibility controls the progression of the element's animation. Note that the element to animate does not have to be the same as the subject.
    - [Anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : The `animation-timeline` property of the element to animate is set to a {{cssxref("animation-timeline/view", "view()")}} function, causing it to be animated based on its visibility within the scrollport of its nearest parent scroller.
- No timeline
  - : All animation timelines can be removed by selecting a value of `none`. When `animation-timeline: none` is set, no animation will occur as there is no timeline to follow.

The `animation-timeline` property is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that including `animation` resets a previously-declared `animation-timeline` value to `auto`. As this component of the shorthand is reset-only, a specific value cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines), you need to declare `animation-timeline` after declaring any `animation` shorthand for it to take effect.

If you specify multiple comma-separated values, each `animation-timeline` value is applied to a single animation in the order in which the {{cssxref("animation-name")}} values appear. If the number of values in the `animation-timeline` declaration is greater than the number of `animation-name` values, the excess timeline values are ignored. If there are fewer `animation-timeline` values than `animation-name` values, the `animation-timeline` values are repeated, in order, until every `animation-name` has an associated timeline.

If two or more timelines share the same `<dashed-ident>` name and the same specificity, the one last declared within the cascade will be used. If no timeline is found that matches a name included within the `animation-timeline`, the `animation-name` associated with that value is not associated with a timeline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates basic usage of the `animation-timeline` property, along with the `none`, `auto`, and default (`auto`) values.

#### HTML

We have an {{htmlelement("article")}} with three {{htmlelement("section")}} children. Each `<section>` has a unique `id` and a {{htmlelement("div")}} child.

```html
<article>
  <section id="none">
    <div></div>
  </section>
  <section id="auto">
    <div></div>
  </section>
  <section id="default">
    <div></div>
  </section>
</article>
```

#### CSS

We use [flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) to set the three sections side-by-side. We use [generated content](/en-US/docs/Web/CSS/Guides/Generated_content) to display the `id`. We style all elements the same, applying the `rotate` {{cssxref("@keyframes")}} animation that rotates the element by 1 full turn. Using the {{cssxref("animation")}} shorthand, we declare infinite, 2-second, linearly progressing iterations of the `rotate` animation, alternating the direction of each animation.

```css
article {
  display: flex;
  gap: 10px;
  text-align: center;
}
section {
  background-color: beige;
  padding: 20px;
}
section::after {
  content: attr(id);
  display: block;
}
div {
  height: 100px;
  width: 100px;
  background-color: magenta;
  animation: rotate 2s infinite alternate linear;
}
@keyframes rotate {
  to {
    rotate: 1turn;
  }
}
```

The only difference is the `animation-timeline` declaration (or lack thereof in the case of `default`) for each `<div>`.

```css
#none div {
  animation-timeline: none;
}
#auto div {
  animation-timeline: auto;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: none) {
    body::before {
      content: "Your browser doesn't support the `animation-timeline` property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

Because the `animation-timeline` property is included in the {{cssxref("animation")}} shorthand as a reset-only value, the `animation-timeline` must come after the `animation` shorthand, or be applied with greater specificity than the `animation` shorthand, to be applied.

#### Results

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Note that declaring a value of `auto` has the same effect as allowing the `animation-timeline` to default to that value, and that `none` removes all timelines from the element, so no animation in the `none` case.

### Setting a named scroll progress timeline

In this example, the animation timeline is set to a horizontal scroll progress timeline.

#### HTML

Our container includes three stretcher elements which will be wide enough to ensure our container is a scroll container. The middle one contains a shape that we will animate.

```html live-sample___named_scroll live-sample___anonymous_scroll
<div id="container">
  <div class="stretcher"></div>
  <div class="stretcher">
    <div id="shape"></div>
  </div>
  <div class="stretcher"></div>
</div>
```

#### CSS

We define the container as a flex container, setting a {{cssxref("width")}} on the container that is half the width of it's combined flex children. Adding an {{cssxref("overflow-x")}} value of `scroll` sets it to have a horizontal scrollbar.

Our scroll progress timeline, defined using the {{cssxref("scroll-timeline-name")}} and {{cssxref("scroll-timeline-axis")}} properties, is named `--square-timeline`. This timeline is applied to our `#square` element using `animation-timeline: --square-timeline`.

```css live-sample___named_scroll live-sample___anonymous_scroll
#container {
  display: flex;
  width: 300px;
  border: 1px solid;

  overflow-x: scroll;
  scroll-timeline-axis: inline;
  scroll-timeline-name: --square-timeline;
}

.stretcher {
  flex: 0 0 200px;
}
```

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property, which is set to the `--square-timeline` timeline named above. The animation is set two occur twice, in alternating directions, as it passes through the viewport. We added [notched corners](/en-US/docs/Web/CSS/Reference/Properties/corner-shape) to make the animation effect more apparent.

```css live-sample___named_scroll live-sample___anonymous_scroll
#shape {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  corner-shape: notch;

  animation: rotateAnimation 1ms linear 2 alternate;
  animation-timeline: --square-timeline;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```css hidden live-sample___named_scroll live-sample___named_view
@layer no-support {
  @supports not (animation-timeline: --square-timeline) {
    body::before {
      content: "Your browser doesn't support named animation timelines.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Result

Scroll to see the element being animated.

{{EmbedLiveSample("named_scroll", "100%", "150px")}}

### Setting an anonymous scroll progress timeline

This example expands on the previous one, applying an anonymous scroll progress timeline using the `scroll()` function.

#### CSS

We include all the CSS from the previous example, only setting the `animation-timeline` property to override the previous example's value. The timeline is provided by the `scroll(inline nearest)` value, which selects the scrollbar in the inline direction of the nearest ancestor element that has scrollbars. This is the vertical scrollbar of the `#container` element, as the `.stretcher` elements don't have overflowing content and therefore aren't scroll containers.

```css live-sample___anonymous_scroll
#shape {
  animation-timeline: scroll(inline nearest);
}
```

```css hidden live-sample___anonymous_scroll
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Your browser doesn't support the scroll() function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Result

Scroll to see the square element being animated.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Setting a named view progress timeline

In this example, we demonstrate how to create and apply a named view progress timeline. Two elements will be animated, with different elements serving as the scroller.

#### HTML

```html-nolint hidden live-sample___named_view
<main class="scroller">
  <div class="container">
    <h1>Directions</h1>
    <h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h2>
    <ol>
      <li>Head south on Lincoln Memorial Circle</li>
      <li>Turn right toward Independence Ave</li>
      <li>Turn left onto Independence Ave</li>
      <li>Turn right onto West Basin Dr</li>
      <li>Look up when you reach 64 Independence Ave!</li>
    </ol>
    <section>
```

Our HTML includes a lot of text in a container within a scroller, which we've hidden for brevity. In the middle of the wall of text, we include two `<div>` elements that we will animate based on the visibility of the element itself in the first case and based on the visibility of its parent in the second case:

```html live-sample___named_view
<div class="animated-element self">SELF</div>
<div class="animated-element parent">PARENT</div>
```

```html-nolint hidden live-sample___named_view
</section>
<h2>Martin Luther King, Jr. Memorial to Lincoln Memorial</h2>
<ol>
  <li>Head north toward Independence Ave SW</li
  ><li>Turn left onto Independence Ave</li
  ><li>Turn right toward the Korean War Veterans Memorial</li
  ><li>Take a photo of the memorial as you walk past it.</li
  ><li>Head north on Lincoln Memorial Circle</li
  ><li>Look up. You can't miss it!</li>
</ol>
  </div>
</main>
```

#### CSS

We create a keyframe animation that changes the opacity and scale of the element, and apply it to both animated elements:

```css live-sample___named_view
@keyframes animation-effect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.animated-element {
  animation: animation-effect 1ms linear;
}
```

The `self` element is explicitly named as the scroller for itself by setting the `view-timeline-name` property to a `<dashed-ident>` and also setting that `<dashed-ident>` name as the value of the `animation-timeline` property. In the `parent` case, we set the `container` as the scroller for the animated element:

```css live-sample___named_view
.self {
  view-timeline-name: --self-scroller-element;
  animation-timeline: --self-scroller-element;
}
.container {
  view-timeline-name: --parent-scroller-element;
}
.parent {
  animation-timeline: --parent-scroller-element;
}
```

Additional CSS declarations were hidden for brevity.

```css hidden live-sample___named_view
@layer setup {
  section {
    display: flex;
    gap: 10px;
  }
  main {
    width: 400px;
    padding: 1em;
    height: 300px;
    overflow: scroll;
    border: 1px solid;
    background-color: beige;
    font-family: sans-serif;
  }

  li {
    margin-bottom: 0.75lh;
  }

  .animated-element {
    height: 200px;
    width: calc(100% - 2em);
    margin: auto;
    background-color: forestgreen;
    background-image:
      repeating-linear-gradient(37deg, transparent 0 52px, beige 52px 57px),
      repeating-linear-gradient(94deg, transparent 0 52px, beige 52px 57px);
    border: 1px solid;
    font-size: 3em;
    place-content: center;
  }
}
```

#### Result

Scroll the container to see both elements animate.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Note how the visibility of the `self` element controls its own animation. In this case, the element is at the `0%` keyframe when the top edge enters the viewport, or visible part of the scrollport, and only reaches the `100%` keyframe when the bottom edge exits the viewport.

The `parent` element only becomes visible when that parent is visible, meaning that when it comes into view, it is already about `25%` of the way through the animation. It is only about `75%` through its animation when it exits the top of the viewport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- {{domxref("AnimationTimeline")}}
- [Guide: Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
