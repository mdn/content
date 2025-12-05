---
title: Effective scroll-driven animations
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
page-type: guide
sidebar: cssref
---

In CSS, animations are created by attaching {{cssxref("@keyframes")}} animations to an element using the {{cssxref("animation-name")}} property (or {{cssxref("animation")}} shorthand). The animation moves from the `from` or `0%` keyframe to the `to` or `100%` keyframe based on the {{cssxref("animation-timeline")}}. By default, this is the [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline), with each {{cssxref("animation-iteration-count", "animation iteration", "", "nocode")}} taking as long as the time defined by the {{cssxref("animation-duration")}} property. Thanks to features defined in the [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module, animations can progress along a scroll-progress or view based timeline instead of the default time-based document timeline. See the [scroll driven animation timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) guide to learn how to create scroll-driven animations that run on a scroll-progress or view-progress timeline.

By default, scroll-driven animations start and end at the edges of the scrollport or viewport, depending on the animation type. However, this isn't always what you want. Often, effective animations either occur when the element being animated is in the center of it's container or is done animating by the time it reaches that point. In this guide, we look at controlling the start and ends of scroll-driven animation by via @keyframe definitions, animation range properties, and setting insets.

## Scroll progress timelines

With _scroll progress timeline_, the timeline progresses based on the scrolling of the scroller either horizontally or vertically.

In this example, we have directions to and from two monuments, with a fake map between them that we want to animated in from fully transparent and scaled down to fully opaque and full size as we scroll down the page.

To create an animation effect, we need an animation. We define a keyframe animation that makes the element on which it is applied go from fully transparent and scaled down, to fully opaque and at it's default size:

```css live-sample___default live-sample___range
@keyframes someChangeEffect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
```

We apply the animation and a scroll timeline to the element we want to animate:

```css live-sample___default live-sample___selector
.animatedElement {
  animation: someChangeEffect 1ms linear;
  animation-timeline: scroll();
}
```

```html hidden live-sample___default live-sample___selector live-sample___range
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
    <div class="animatedElement"></div>
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

```css hidden live-sample___default live-sample___selector live-sample___range
main {
  width: 400px;
  padding: 1em;
  height: 300px;
  overflow: scroll;
  border: 1px solid;
  background-color: hsl(from beige h s l / 0.5);
  font-family: sans-serif;
}

li {
  margin-bottom: 0.75lh;
}

.animatedElement {
  height: 200px;
  width: calc(300px - 2em);
  margin: auto;
  background-color: forestgreen;
  background-image:
    repeating-linear-gradient(37deg, transparent 0 52px, beige 52px 57px),
    repeating-linear-gradient(94deg, transparent 0 52px, beige 52px 57px);
  border: 1px solid;
}
```

{{EmbedLiveSample("default", "100%", "350")}}

Scroll down from the first set of directions to the second set, and you'll notice the animated element appearing as you scroll. You may note the main problem with the animation: the element is only fully opaque at full size when it exits the screen. Let's fix this!

## Controlling insets with @keyframe selectors

Because the `100%` is generally reached when the element leaves the viewport, you likely want to set the final effect of your animation in a keyframe block that occurs well before the end of the animation. You can set your completed effect within any keyframe block, rather than limiting it to the `to` or `100%` keyframe, to ensure the element finishes animating while still in view.

To make the map element full size and fully visible earlier, and then have it reverse the animation as we scroll past the element and have it begin fading out as it reaches the top of the scroll port, we change the keyframe selector values and then set the animation two occur twice, with the second iteration going from 100% to 0%.

Here we set the element to be fully visible 40% through the animation, which is 20% through the scoll, and stay visible through 100% by default, which is 50% of the way through the scroll's progression. We then make the animation occur twice during the scroll by setting the {{cssxref("animation-iteration-count")}} to `2` and set the second iteration to occur in the reverse direction by setting the {{cssxref("animation-direction")}} to `alternate`. These are included as part of the {{cssxref("animation")}} shorthand:

```css live-sample___selector
@keyframes someChangeEffect {
  0% {
    opacity: 0;
    scale: 0;
  }
  40% {
    opacity: 1;
    scale: 1;
  }
}
.animatedElement {
  animation: someChangeEffect 1ms linear 2 alternate;
  animation-timeline: scroll();
}
```

{{EmbedLiveSample("selector", "100%", "350")}}

```css hidden live-sample___selector live-sample___range
body {
  background-image: linear-gradient(
    to bottom,
    #efefef 0 20%,
    transparent 20% 80%,
    #efefef 80%
  );
}
```

When the element comes into view as you scroll down the page, the map-like element animates in, reaching it's full size 20% of the way through the scroll port and starts fading out when it reaches 80%.

Unfortunately, this method requires redefining your keyframe animations and your `animation` declaration, and may necessitate multiple similar animation definitions that create the same effect but at different points in the scrolling. Fortunately, there are other solutions. The quick fade in and out may also not be a great effect; realize we are focusing on the technology, not (the lack of) design.

## Controlling insets with animation-range

By default, the position in the scroll range is converted into a percentage of the scroll progress of the scroller. By default, the `0%` is the start and `100%` is the end. This animation range can be controlled via the {{cssxref("animation-range")}} properties. The `animation-range` property is shorthand for {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}}, in that order. It is used to set the start and end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start and end.

```css live-sample___range
.animatedElement {
  animation: someChangeEffect 1ms linear;
  animation-timeline: scroll();

  animation-range: 20% 80%;
}
```

{{EmbedLiveSample("range", "100%", "350")}}

## View progress timelines

You can also progress an animation based on the change in visibility of an element inside a scroller — this is done via _view progress timelines_. Instead of tracking the scroll offset of a scroll container, view progress timelines track the relative position of an element, called the _subject_, within a scrollport. The progression of an animation's keyframes is based on the _visibility_ of the subject inside the scroller. Unlike scroll progress timelines, with view progress timelines, you can't specify the scroller — the subject's visibility is always tracked within its nearest ancestor scroller.

A view progress timeline animation only occurs when the element is visible within its scrollport. Timeline progress starts at `0%` when the tracked subject starts intersecting the scrollport at the block or inline end edge. The `100%` occurs when the subject exits the scrollport at the block or inline start edge.

Because the `100%` is generally reached when the element leaves the viewport, you likely want to set the final effect of your animation in a keyframe block that occurs well before the end of the animation. You can set your completed effect within the `20%`, `50%`, or `80%` keyframe block rather than using the `to` or `100%` keyframe to ensure the element finishes animating while still in view.

With view progress timelines, you can adjust the view progress visibility range.
Use {{cssxref("view-timeline-inset")}}, part of the {{cssxref("view-timeline")}} shorthand, to adjust when the subject is considered to be in view. The default value is `auto`. The effect of any non-`auto` inset value is as if you moved the edges of the scroll port: a positive inset value creates an inward adjustment, and a negative value creates an outward adjustment.

Similar to scroll progress timelines, the view progress timeline can be named or anonymous.

### Named view progress timeline

A _named view progress timeline_ is one where the subject is explicitly named using the {{cssxref("view-timeline-name")}} property, a component of the `view-timeline` shorthand. The `<dashed-ident>` name is then linked to the element to animate by specifying it as the value of that element's `animation-timeline` property.

With named view progress timelines, the element to animate does not have to be the same as the subject. In other words, the element controlling the timeline doesn't have to be the same as the element being animated. This means you can animate one element based on another element's movement within its scrollable container.

Here we use the {{cssxref("view-timeline-name")}} property to name an element, identifying the element itself as the source of a view progress timeline. We then set that name as the value of the `animation-timeline` property.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

We applied the animation **before** the animation timeline, as the `animation` resets the `animation-timeline` to `auto`.

The animation is slightly different from the previous examples in that the spinning effect starts at `20%` and ends at `80%` of the way through the animation; this means the element will not be actively spinning when it first comes into view and will stop spinning before it is completely out of view.

```css live-sample___named_view live-sample___anon_view
@keyframes action {
  0%,
  20% {
    rotate: 45deg;
  }
  80%,
  100% {
    rotate: 720deg;
  }
}
```

```css hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
.scroller {
  width: 400px;
  height: 200px;
  line-height: 2;
  overflow: scroll;
  border: 1px solid;
  background-color: palegoldenrod;
}
.item {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

```html hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
<main class="scroller">
  <p>Scroll down to view the animation</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <div class="item"></div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Scroll up to view the animation</p>
</main>
```

{{EmbedLiveSample("named_view", "100%", "250")}}

Scroll the element into view. Note that the element animates through the `@keyframes` animation as it moves through the visible area of its ancestor scroller.

### Anonymous view progress timeline: the `view()` function

Alternatively, a {{cssxref("animation-timeline/view", "view()")}} function can be set as the value of the `animation-timeline` property to specify that an element's animation timeline is an _anonymous view progress timeline_. This causes the element to be animated based on its position inside its nearest parent scroller.

The `view()` function creates a view timeline. You attach the timeline to the element you want to animate using the `animation-timeline` property. The function creates a view timeline for each element matched by the selector.

In this example, we again define the `animation` before the `animation-timeline`, so the timeline is not reset. We then include an argument-less `view()` function. We don't specify a scroller, as, by definition, the subject's visibility is tracked by its nearest ancestor scroller.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameters of the `view()` function

The `view()` function takes up to three optional values as arguments:

- Zero or one `<axis>` parameters. If set, this specifies the scroll axis along which the animation progresses.
- Either the keyword `auto` or zero, one, or two {{cssxref("length-percentage")}} inset values. If set, these values specify offsets for the scrollport start and/or end.

Declaring `view()` is equivalent to `view(block auto)`, which defines `block` as the axis of the parent element that supplies the timeline and the {{cssxref("scroll-padding")}}, which generally defaults to `0`, as the insets within the visible area at which the animation starts and ends.

The function sets the values of the {{cssxref("view-timeline-axis")}} and {{cssxref("view-timeline-inset")}} properties.

The {{cssxref("view-timeline-inset")}} arguments specify insets (if positive) or outsets (if negative) that adjust the start and end of the scrollport. They are used to determine the scroll positions at which the element is considered "in view", which determines the length of the animation timeline. In other words, instead of starting at the start edge and ending at the end edge of the scrollport, the animation occurs at the start and end of the inset-adjusted view.

Unlike the scroll timeline's `scroll()` function, there is no `<scroller>` argument in the `view()` function, as the view timeline always tracks the subject within its nearest ancestor scroll container.

In this example, as we are using inset values, we can use the `from` and `to` keyframe selectors.

```css live-sample___anon_view_args
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 720deg;
  }
}

.item {
  animation: action 1ms linear;
  animation-timeline: view(block 20% 20%);
}
```

{{EmbedLiveSample("anon_view_args", "100%", "250")}}

## Accessibility concerns

As with all animations and transitions, always take any user's [`prefers-reduced-motion`](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) preference into account.

### Removing an animation's timeline

Setting `animation-timeline: none` disassociates the element from all animation timelines, including the default time-based document timeline, meaning the element will not animate. While some animations may be necessary, you can remove animations based on the user's `prefers-reduced-motion` setting with:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Because the `animation` shorthand sets the `animation-timeline` to `auto`, use a selector with enough specificity to ensure your `animation-timeline` isn't overridden by your `animation` shorthand declarations.

## See also

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
