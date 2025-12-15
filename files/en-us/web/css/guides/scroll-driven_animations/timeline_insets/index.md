---
title: Effective scroll-driven animations
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
page-type: guide
sidebar: cssref
---

By default, with a view progress timeline, you track an element as it crosses the entire viewport. Often, you only want an animation to run during a specific section—for example, only while an element is entering the viewport or only within the first third of a scroll container viewport. In this guide we look at three ways of animating through just a section of the viewport: via `@keyframes` definitions, the `view()` function parameters, and the animation-range properties and values. An basic understanding of [CSS animations]() and [scroll-driven animations]() is assumed.

## Animation timelines primer

In CSS, animations are created by attaching {{cssxref("@keyframes")}} animations to an element using the {{cssxref("animation-name")}} property (or {{cssxref("animation")}} shorthand). The element is the thing on the page that will be animated. The keyframes define what happens to that element during the animation. When and how the element moves through the animation is based on the {{cssxref("animation-timeline")}}.

By default, the timeline is the [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline), with each {{cssxref("animation-iteration-count", "animation iteration", "", "nocode")}} taking as long as the time defined by the {{cssxref("animation-duration")}} property. When applying [CSS scroll-driven animations'](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), animations progress is based on user scroll and element visibility rather than with time.

With [scroll-progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) the timeline progresses or reverses based on the scrolling of the scrollable element. With [view-progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), the progression of an animation's keyframes is based on the visibility of the subject inside the scroller: as the view progress element comes into or moves out of view, the timeline progresses or reverses, respectively. In both cases, the moment scrolling stops, the animation pauses.

## Basic view progress timeline

A view progress timeline animation only occurs when the element is visible within its scrollport. By default (when the {{cssxref("animation-iteration-count")}} defaults to `1`, the {{cssxref("animation-direction")}} defaults to normal, and no ranges are set on the timeline), the view timeline progress starts when the tracked subject's start edge starts intersects the scrollport at the block or inline end edge and ends when its end edge exits the scrollport at the block or inline start edge. Let's demonstrate!

### View progress timeline default progression

In this example, we have directions to and from two monuments, with two fake `yellow` maps between them. We want to animate one as we scroll it into view; the comparison element we animate using the default time-based document timeline.

#### The @keyframes animation

To create an animation effect, the first step is defining a keyframe animation. We want our map to be fully transparent `brown` as it enter the viewport, then to is scaled in to be fully opaque `forestgreen` and full-size as it comes into view:

```css live-sample___default live-sample___range live-sample___range_both live-sample___view-inset live-sample___selector30 live-sample___reverse
@keyframes originalChangeEffect {
  0% {
    opacity: 0;
    scale: 0 1;
    background-color: brown;
  }
  100% {
    opacity: 1;
    scale: 1 1;
    background-color: forestgreen;
  }
}
```

#### Anonymous view progress timeline

We apply the animation to both elements, and then add an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) to the element we want to animate as the user scrolls it into view:

```css live-sample___default live-sample___selector30 live-sample___reverse live-sample___view-inset
.animatedElement,
.comparisonElement {
  animation-name: originalChangeEffect;
  animation-duration: 1ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.animatedElement {
  animation-timeline: view();
}
```

We include a `1ms` {{cssxref("animation-duration")}} and the {{cssxref("animation-fill-mode")}} property to ensure both animations occur and retains the styles defined in the `to` keyframe. This also ensure both animations occur even in browsers that don't support scroll driven animations.

We could have included all these properties in a single {{cssxref("animation")}} shorthand declaration, but if we do so, remember to declare the `animation-timeline` after the shorthand so it doesn't get reset to the default `auto`.

```css
.animatedElement {
  animation: originalChangeEffect 1ms linear forwards;

  animation-timeline: view();
}
```

```html hidden live-sample___default live-sample___selector30 live-sample___reverse live-sample___range live-sample___range_both live-sample___view-inset
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
      <div class="animatedElement">DEMO</div>
      <div class="comparisonElement">COMPARISON</div>
    </section>
    <h2>Martin Luther King, Jr. Memorial to Lincoln Memorial</h2>
    <ol>
      <li>Head north toward Independence Ave SW</li>
      <li>Turn left onto Independence Ave</li>
      <li>Turn right toward the Korean War Veterans Memorial</li>
      <li>Take a photo of the memorial as you walk past it.</li>
      <li>Head north on Lincoln Memorial Circle</li>
      <li>Look up. You can't miss it!</li>
    </ol>
  </div>
</main>
```

We added stripes and a semi-opaque box to denote the map's default (non-animated) location and size. The CSS for the stripes, the box, and other styles have been hidden for brevity.

{{EmbedLiveSample("default", "100%", "350")}}

Scroll down from the first set of directions to the second set, and you'll notice the animated element appearing as you scroll.

The DEMO map doesn't finish animating until it has reached the top of the viewport. An animation that goes through the entire length of the viewport is generally not the user experience you want.

For a better user experience, we want the map to finish animating part way through the viewport, and stay as defined by the 100% keyframe. Let's fix this! We can do this a few ways: by editing the `@keyframes` definition, by setting insets, or by defining a range for the timeline.

## Controlling insets with @keyframe selectors

With default values, as seen in the previous [basic view progress timeline](#basic_view_progress_timeline), the `100%` keyframe is reached when the element leaves the viewport. One way to make our final effect visible earlier is to set the ending values of our animation in an earlier keyframe selector block. We can set the values to reach their final values, and stay that way, by setting the completed effect earlier, such as 30% through the animation, and maintaining the applied styles by adding the `100%` keyframe to that selector list:

```css live-sample___selector30 live-sample___reverse live-sample___view-inset
@keyframes endsAtThirty {
  0% {
    opacity: 0;
    scale: 0 1;
    background-color: brown;
  }
  30%,
  100% {
    opacity: 1;
    scale: 1 1;
    background-color: forestgreen;
  }
}

.animatedElement {
  animation-name: endsAtThirty;
}
```

```css hidden live-sample___selector30 live-sample___reverse
.comparisonElement {
  animation-timeline: view();
}
```

{{EmbedLiveSample("selector30", "100%", "350")}}

When both map element comes into view as you scroll, the map-like elements animate in. With the updated keyframes, the DEMO map reaches it's full size 30% of the way through the viewport. By putting our final effects in an earlier keyframe block, and not limiting ourselves to the `to` or `100%` keyframe like in the COMPARISON map which is using the original animation effect, the element finishes animating while still in view.

There are a few things to note here. The first is that the updated animation doesn't end when the the top edge is 30% of the way through the viewport. Rather, it ends when that edge is 30% of the way through the [timeline attachment range](#controlling-insets-with-animation-range), which by default includes 100% of the scroll container in the axis dimension plus the size of the subject in that same dimension.

![the image](animation-range-explainer.png)

The `0%` occurs when the top edge of the map crosses the bottom edge of the viewport. The `100%` is when the bottom edge of the map exits the top of the element's viewport. In this case, the element is `150px` tall and the scrollport is `300px` tall, making the timeline attachment range `450px` tall; this is why the `30%` endpoint animation keyframe occurs when the top of the map `135px` from the bottom edge of the scroll container.

Also note that even though the animation effect ends 30% of the way through the viewport, the {{domxref("Element/animationend_event", "animationend")}} event only happens when the `100%` keyframe is reached, which still occurs when the bottom edge of the subject reaches the top edge of the scroll container, as the element scrolls out of view.

### Reversing an animation

To make the animated element fade in as it enters the viewport and fade out as the user scrolls the element out of view, we can set the {{cssxref("animation-iteration-count")}} so the animation occurs twice, alternating the {{cssxref("animation-direction")}} so the second iteration goes in the reverse direction, from `100%` to `0%`.

```css live-sample___reverse
.animatedElement,
.comparisonElement {
  animation-iteration-count: 2;
  animation-direction: alternate;
}
```

{{EmbedLiveSample("reverse", "100%", "350")}}

When the elements comes into view as you scroll, the map-like elements animate in, with the DEMO map reaching it's full size 15% of the way through the animation timeline range and starts fading out when it reaches 85% of that range. While this effect is better than the comparison map, which starts fading out as soon as it finally faded in, the fade in (and out) is now twice as fast, and still partially out of view, which is not a great effect.

While we realize we are focusing on the technology and not the (lack of) design, this demonstrates an issue with using `@keyframes` to control our animation ranges: this method requires redefining `@keyframe` animations. To make the animation with an intro and outro both 30% of the timeline range, matching the intro of the previous example, we would have to redefine another keyframe animation. This conundrum demonstrates how controlling the range of the animation using keyframes is brittle; it can require defining multiple similar animation definitions to create the same effect to handle the different ranges. Fortunately, there are other solutions.

## View timeline insets

The {{cssxref("view()"}} functions accepts two optional parameters: a {{cssxref("&lt;axis>"}} and a `<view-timeline-inset>`. The `<view-timeline-inset>` is the keyword `auto`, or one or two `<length-percentage>` values that specify the inset area that defines when an element is considered "in view". The default value is `auto`. This parameter is used to adjust the view progress visibility range.

With this inset, we can virtually move the edges of the edges of the animation's timeline attachment range, with positive values creating an inward adjustment and negative values an outward adjustment. Percentages are relative to the scrollport size, `300px` in this case, not the size of the default timeline attachment range, which is `450px` tall.

For example:

```css
.map {
  animation: originalChangeEffect 1ms linear forwards;
  animation-timeline: view(block 70% 0%);
}
```

This `animation-timeline` value of `view(block 70% 0%)` states "the timeline is a view progress timeline in the block direction. The animation range ends 70% of the block size of the scroll view port from the start edge of the default animation timeline attachment range (not the start edge of the scroll view port) and starts 0% from the bottom of the range."

In the `30%` keyframe example, the map animated fully in `135px` when the top edge of the map was `135px` from the bottom edge of the scroll viewport's end edge and animation timeline attachment range, which is `315px` from the top of the default timeline attachment range. As the animation timeline attachment range is `450px` tall and the scroll viewport is `300px` tall, to create the `30%` keyframe effect, we would need to declare the top inset to be `315px`, which is `105%` of the scroll viewport's height. We set the COMPARISON element to the `endsAtThirty` animation for comparison.

```css live-sample___view-inset
.animatedElement {
  animation-name: originalChangeEffect;
  animation-timeline: view(block 105% 0%);
}
.comparisonElement {
  animation-name: endsAtThirty;
  animation-timeline: view();
}
```

{{EmbedLiveSample("view-inset", "100%", "350")}}

This method worked, but it is brittle. If we change the size of the animating element or the container, we would have to update parameter. We we could use [CSS custom properties](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) for the height of the subject element, the height of scroll viewport container, and then calculate the parameters with the CSS {{cssxref("calc()")}} function.

```md
topOffset = percentFromTopOfScroller \* (subjectHeight + scrollerHeight) / scrollerHeight
```

The equation to get to `105%` is the percent from the top of the scroller top edge multiplied by the full height of the attachment range, divided by the height of the scroller. Imagine your future self trying to decipher your CSS:

```css
.animatedElement {
  animation-name: originalChangeEffect;
  --topOffset: calc((1 - var(--bottomOffset)) * (var(--subjectHeight) + var(--scrollerHeight)) / var(--scrollerHeight);
  animation-timeline: view(block var(--topOffset) 0%);
}
```

Fortunately, the [CSS scroll driven animations module](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) defines animation range values and properties that provide a more robust solution.

## Controlling insets with animation-range

While you can control the insets of the effects of an animation via the keyframe selectors themselves or via the `view()` function parameters, as we just saw, these method of controlling insets have clear limitations. CSS scroll driven animations module defined properties and values enable defining when to start and stop animation along the timeline, effectively controlling when the animation effects occur without having to declare multiple different `@keyframe` animations or calculate complex attachment range sizes.

As we saw earlier, the default keyframe animation attachment range is the same as the entirety of the timeline defined by the {{cssxref("animation-timeline")}}. The default range is `0%`, when the target element starts to enter our viewport, to `100%`, when the target element completely exits the viewport.

This range can be restricted, or inset. Animation keyframes can be attached in reference to an animation attachment range, restricting the animation's active interval to that range of a timeline, with the {{cssxref("animation-range")}} property, which is shorthand for {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}}, in that order.

The position in the scroll range is converted into a percentage of the scroll progress of the scroller. By default, the `0%` is the start and `100%` is the end. The animation range properties control this by setting the start and end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start and end.

Prior examples let the `animation-range` default to `normal`, meaning as soon as the first pixel of the element entered the viewport, the animation began and it didn't end until the last pixel exited the viewport.

To make the animation stop when we are 30% of the way through the viewport, and remain at that keyframe, we set the start of the range at `0%`, which is where it has always been, and end at `30%`:

```css live-sample___range live-sample___range_both
.animatedElement {
  animation: originalChangeEffect 1ms linear;
  animation-timeline: view();

  animation-range: 0% 30%;
}
```

{{EmbedLiveSample("range", "100%", "350")}}

## Applying styles outside of the animation range

The `animation-range` limits the application of the animation to the defined range. In the previous example, the animation completed and ended 30% of the way through the viewport. The animation applied the `brown` background which transitioned to `forestgreen` as the animation progressed, but once the animation ended, the {{cssxref("background-color")}} values set by the animation no longer applied. We can ensure the property values defined in the `to` keyframe get applied after the animation ends with the {{cssxref("animation-fill-mode")}} property.

In the previous example, we intentionally omitted the {{cssxref("animation-fill-mode")}} property, which is used to CSS animation applies styles to an element before and after the animation execution, so you can better see when the animation is applied. Generally, you will include the `animation-fill-mode` property when using `animation-range` to prevent this jumping effect:

```css live-sample___range_both
.animatedElement {
  animation-fill-mode: both;
}
```

{{EmbedLiveSample("range_both", "100%", "350")}}
Scroll the scroll port and notice how it no longer "jumps". With `both`, the `0%` keyframe is applied until the animation range start, which is not visible, here. Importantly in this case, the `100%` keyframe gets applied once were reach the animation range end, 30% in this case, and continues to be applied after we scroll past that mark.

```css
.animatedElement {
  animation: originalChangeEffect 1ms linear;
  animation-timeline: view();

  animation-range-start: entry 20%;
  animation-range-end: exit 80%;
}
```

The declaration `animation-range-start: entry 20%` represents the point in a view progress timeline from `20%` of the way through the scroll port from the point where the subject element's top edge first starts to enter the scroll port.

Initially, from `0%` to `20%`, the element is at it's full size.It disappears at the 20% mark, then grows to 90% of it's original size as it fades it. At the `80%` mark it jumps back to it's original size, as the the animation-timeline has reached the end of its range.

## View progress timelines

You can also progress an animation based on the change in visibility of an element inside a scroller — this is done via _view progress timelines_. Instead of tracking the scroll offset of a scroll container, view progress timelines track the relative position of an element, called the _subject_, within a scrollport. The progression of an animation's keyframes is based on the _visibility_ of the subject inside the scroller. Unlike scroll progress timelines, with view progress timelines, you can't specify the scroller — the subject's visibility is always tracked within its nearest ancestor scroller.

A view progress timeline animation only occurs when the element is visible within its scrollport. Timeline progress starts at `0%` when the tracked subject starts intersecting the scrollport at the block or inline end edge. The `100%` occurs when the subject exits the scrollport at the block or inline start edge.

Because the `100%` is generally reached when the element leaves the viewport, you likely want to set the final effect of your animation in a keyframe block that occurs well before the end of the animation. You can set your completed effect within the `20%`, `50%`, or `80%` keyframe block rather than using the `to` or `100%` keyframe to ensure the element finishes animating while still in view.

With view progress timelines, you can adjust the view progress visibility range.
Use {{cssxref("view-timeline-inset")}}, part of the {{cssxref("view-timeline")}} shorthand, to adjust when the subject is considered to be in view. The default value is `auto`. The effect of any non-`auto` inset value is as if you moved the edges of the scroll port: a positive inset value creates an inward adjustment, and a negative value creates an outward adjustment.

Similar to scroll progress timelines, the view progress timeline can be named or anonymous.

## Reversing animations

The effect we've created is still t lgood user experience. The element should be fully

```css hidden live-sample___default live-sample___selector30 live-sample___reverse live-sample___range live-sample___range_both live-sample___view-inset
@layer basicStyles {
  main {
    width: 400px;
    padding: 0;
    height: 300px;
    overflow: scroll;
    border: 1px solid;
    background-color: hsl(from beige h s l / 0.5);
    font-family: sans-serif;
  }

  ol,
  h1,
  h2 {
    padding: 0 0 1rem 1rem;
  }

  li {
    margin-bottom: 0.75lh;
    margin-left: 1rem;
  }

  section {
    height: 150px;
    margin: auto;
    border: 1px solid #dedede;
    background-color: #ededed99;
    display: flex;
    gap: 10px;
  }
  section div {
    width: calc(50% - 7px);
    color: white;
    text-shadow:
      1px 1px black,
      -1px -1px black,
      -1px 1px black,
      1px -1px black;
    line-height: 3em;
    font-family: sans-serif;
    font-size: 1.5rem;
    text-align: center;
    height: calc(100% - 2px);
    background-color: yellow;
    border: 1px solid;
    background-image:
      repeating-linear-gradient(39deg, transparent 0 52px, beige 52px 57px),
      repeating-linear-gradient(119deg, transparent 0 52px, beige 52px 57px);
  }
  .container {
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0 29px,
      #dedede 29px 30px
    );
  }
}

@layer no-support {
  @supports not (animation-timeline: view()) {
    body {
    }
    body::before {
      content: "Your browser doesn't support scroll-driven animations.";
      background-color: crimson;
      color: white;
      font-family: sans-serif;
      display: block;
      text-align: center;
      padding: 1em;
      margin-bottom: 1rem;
    }
  }
}
```

## See also

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
