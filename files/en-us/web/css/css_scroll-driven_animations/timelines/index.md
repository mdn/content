---
title: Scroll-driven animation timelines
slug: Web/CSS/CSS_scroll-driven_animations/Timelines
page-type: guide
spec-urls: https://drafts.csswg.org/scroll-animations-1/
sidebar: cssref
---

A common UI pattern involves elements that are animated as the user scrolls up and down (or left and right) across a page. These animations are called _scroll-driven animations_ as the effects are in direct response to scrolling; be it scrolling a page, or just an overflowing scroll container within a page.

The properties defined in the [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module expand upon [CSS animations](/en-US/docs/Web/CSS/CSS_animations) by enabling animating property values defined in {{cssxref("@keyframes")}} animations in response to user interaction.

This guide provides an overview of using CSS to scroll-driven animation timelines and creating scroll-driven animations.

## What is scroll-driven animation

The [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module defines properties that enable linking [CSS keyframe animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations#defining_an_animation_sequence_using_keyframes) to scrolling.

Animations can be set to progress along a scroll-based timeline instead of the default time-based document timeline, without needing JavaScript. This means that, by [defining which animation timeline](#animation_timelines) to use, you can animate an element by scrolling a scrollable element, rather than just by the passing of time with CSS.

CSS scroll driven animations are performant. JavaScript scroll driven animations requires [`scroll`](/en-US/docs/Web/API/Document/scroll_event) event listeners and {{domxref("IntersectionObserver")}} objects on the {{glossary("main thread")}} to track elements across the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport). Any time you rely on the main thread to render effects with JavaScript, you run the risk of blocking the main thread, leading to an unresponsive page and a bad user experience, or {{glossary("jank")}}. As CSS scroll-driven animations are native to the web platform, JavaScript isn't necessary.

> [!NOTE]
> Scroll driven animations build upon [CSS animations](/en-US/docs/Web/CSS/CSS_animations) and the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API). Prior to creating scroll driven animations, you must have an understanding of CSS {{cssxref("@keyframes")}} animations. See the [using CSS animations guide](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) to learn more.

Animations in CSS are created by attaching keyframe animations to an element using the {{cssxref("animation-name")}} property (or {{cssxref("animation")}} shorthand). By default, animations run on the default document timeline, moving from the `from` keyframe to the `to` keyframe as time passes by, with the animation lasting as long as the time defined by the {{cssxref("animation-duration")}} property value. When set to run on the default document timeline, animation play through completion unless prevented of doing so, such as by having the {{cssxref("animation-play-state")}} set to `paused` or by removing the `animation-name` from the element.

Scroll-driven animations are CSS animations are not run on the default document timeline; rather, on a scroll-progress or view-progress timeline, which is driven by user scrolling.

In scroll-driven animations, there's a direct link between the user's scrolling action and the progress of the animation along the `@keyframe` key frames. Instead of progressing through animation keyframes based on time, the scroll-driven animation progresses based on the scroll position of overflowing content in its scroll port. As the user scroll up or down or left or right the animation moves forward or backward through the keyframe animation progression. When scrolling is paused, the animation pauses, as if `animation-play-state` were set to `pause`.

## Animation timelines

All animations run on a timeline. In CSS, you can have regular CSS animations that progress based on time, or you can set animations to progress based on scrolling, using either a _scroll progress timeline_ or a _view progress timeline_.

The {{cssxref("animation-timeline")}} property, defined in the [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module, is used to set the timeline used for the animation. The [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module expands upon the notion of animation timelines, defining properties that enable animating elements based on scroll positioning and element visibility.

You can define an element to drive another element's animation progression by explicitly [naming an element as a timeline controller](#named_timelines) using the `scroll-timeline-*` and `view-timeline-*` properties, then setting that name as the `animation-timeline` of a descendant element. You can also define _anonymous scroll progress timelines_ and _anonymous view progress timelines_ using the [`scroll()`](#scroll-progress_timelines) and [`view()`](#view-progress_timelines)) functions.
Alternatively, the `animation-timeline` property can be used to explicitly state that the [default document timeline be used](#regular_css_animations_default_document_timeline) or to specify that the [animation doesn't have a timeline](#removing_an_animations_timeline), and therefore shouldn't occur at all.

### Regular CSS animations: default document timeline

By default, CSS animation progression is based on the time-based document timeline.

Setting `animation-timeline` explicitly to `auto`, or omitting the property and allowing it to default to `auto`, sets the timeline to be the default document timeline. When set to this default value, the animation's progress is determined by the {{cssxref("animation-duration")}}, the {{cssxref("animation-delay")}}, and how much time has passed since the animation was associated with the element via the `animation-name` property. The time-based document timeline is the timeline traditionally associated with CSS animations.

```css live-sample___regular
:checked ~ .container > .item {
  animation-name: action;
  animation-duration: 3s;
  animation-delay: 3s;
  animation-timeline: auto;
}
```

We create a rotation keyframe animation called `action`:

```css live-sample___regular live-sample___named_scroll live-sample___anon_scroll
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 765deg;
  }
}
```

```html hidden live-sample___regular
<input type="checkbox" id="i" />
<label for="i">
  Check to apply the animation. Uncheck to remove the animation
</label>
<div class="container">
  <span class="item"></span>
</div>
```

```css hidden live-sample___regular
div {
  width: 400px;
  height: 100px;
  border: 1px solid;
  background-color: palegoldenrod;
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

When the checkbox is checked, the `action` animation is applied to the element. When unchecked, the animation is not applied to the `<div>`.

{{EmbedLiveSample("regular", "100%", "150")}}

Try checking the checkbox. Nothing will happen for the 3-second duration of the animation delay. Then, once the animation starts, the box will turn 45 degrees, and then it will take 3 seconds to rotate an additional 720 degrees, or two rotations. After a total of six seconds, the animation concludes, and the `<div>` will return to its default rotation.

### `animation-timeline` and the `animation` shorthand

The `animation-timeline` is reset to the default `auto` value by the {{cssxref("animation")}} shorthand property, but cannot be set using the shorthand. Therefore, when creating scroll-driven animations, always declare the `animation-timeline` after any `animation` shorthand declarations to achieve the desired effect.

### Scroll progress timelines

With _scroll progress timeline_, the timeline progresses based on the scrolling of the scrollable element (_scroller_) from top to bottom (or left to right) and back again. By default, the position in the scroll range is converted into a percentage of progress — `0%` at the start and `100%` at the end. This [animation range can be controlled](#controlling_the_animation_range) via the {{cssxref("animation-range")}} properties.

To create a scroll progress timeline, the `animation-timeline` value must reference the scroller. The _scroller_, the element that provides the scroll progress timeline, can be named or anonymous.

#### Named scroll progress timelines

A _named scroll progress timeline_ is one where the scroller is explicitly named using the {{cssxref("scroll-timeline-name")}} property (or the {{cssxref("scroll-timeline")}} shorthand). The name is a {{cssxref("dashed-ident")}}. This name is applied to the scroller, the {{glossary("scroll container")}} whose scrolling controls the progress of the animation timeline. The scroller is linked to the element to be animated by specifying it's name as the value of that element's `animation-timeline` property.

Our HTML includes three elements: the `item`, which we will be animating; its `container`, which we will be scrolling; and the' scroller', which will need to be large enough to overflow its `scroller` parent.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

We provide some basic styles, which we've hidden for brevity. The important styles include setting a height on the container that is taller than the scroller, and then setting the overflow to allow scrolling (if there is no scrolling, there will be no scroll timeline):

```css hidden live-sample___named_scroll live-sample___anon_scroll
.scroller {
  width: 400px;
  height: 100px;
  overflow: scroll;
}
.container {
  height: 200px;
}
```

Setting an `animation-timeline` on the element to be animated that matches the `scroll-timeline-name` of an ancestor element is what creates the named scroll progress timeline. We also have to include an animation, which we do by setting the value of the `animation-name` component of the {{cssxref("animation")}} shorthand to the {{cssxref("custom-ident")}} name of our keyframe animation:

```css live-sample___named_scroll
.scroller {
  scroll-timeline-name: --rotate;
}
.item {
  animation: action 1ms linear;
  animation-timeline: --rotate;
}
```

```css hidden live-sample___named_scroll live-sample___anon_scroll
main {
  border: 1px solid;
  background-color: palegoldenrod;
}
div {
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

In this case, we don't have a checkbox, as the `action` animation progression is controlled by the scrolling of the overflowing scroller, which, unlike time, does not expire.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Before any scrolling occurs, the container's position is at the top of the scroller, and the animation is at the 0% keyframe. Try scrolling down. As you scroll, the animation progresses through the timeline, rotating an additional 720 degrees. When you can no longer scroll, the animation's progression is at the 100%, or `to`, keyframe. The animated item never returns to its default rotation.

##### Animation duration

You may have noticed that the {{cssxref("animation-duration")}} component of the `animation` shorthand was set to `1ms`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), specifying an `animation-duration` value has no effect on the duration of the animation, and shouldn't be necessary. However, while a duration has no effect on scroll progress timeline animations, durations can have an effect on non-linear view progress animation timelines, and Firefox requires a non-zero `animation-duration` to apply an animation to an element. For these reasons, it is common practice to set `animation-duration` to `1ms`.

Setting `animation-durations: 1ms` ensures that the animation works in Firefox, that the animation effect is consistent across all browsers, and that the animation is not visible if a browser doesn't support view progress animation timelines. If the browser supports `@keyframe` animations, the animation will not be visible to the user, but the animation still happens, and animation events are fired.

#### Anonymous scroll progress timelines

You don't have to name your scroll progress timeline. Instead, you can associate an _anonymous scroll progress timeline_. In this case, the `animation-timeline` of the element to animate is set to a {{cssxref("animation-timeline/scroll", "scroll()")}} function. The function selects the scroller that provides the scroll progress timeline and the scroll axis to use based on the optional arguments you pass to it. One parameter is a [`<scroller>`](/en-US/docs/Web/CSS/animation-timeline/scroll#scroller) keyword defining the relationship of the scroller element to the current element (`nearest`, `root`, or `self`). The other is the scrollbar [`<axis>`](/en-US/docs/Web/CSS/animation-timeline/scroll#axis) value (`block`, `inline`, `y`, or `x`).

We use all the same CSS as in the previous examples, except for the `animation-timeline`, which we set to a `scroll()` function. We are also overriding the size of the container to change the direction of the scroll:

```css live-sample___anon_scroll
.item {
  animation: action 1ms linear;
  animation-timeline: scroll(nearest inline);
}
.container {
  inline-size: 800px;
  block-size: 100%;
}
```

{{EmbedLiveSample("anon_scroll", "100%", "150")}}

We set an {{cssxref("inline-size")}} on the container so that in overflows in the inline direction, and set the {{cssxref("block-size")}} to `100%`, so it no longer overflows the container. Try scrolling in the inline direction.

### View progress timelines

You can also progress an animation based on the change in visibility of an element inside a scroller. The _view progress timeline_ is a type of scroll progress timeline; it responds to scroll, but instead of tracking the scroll offset of a scroll container, it tracks the relative position of an element, called the _subject_, within a scrollport. The progression of the animation is based on the _visibility_ of the subject inside the scroller. With view progress timelines, you can't specify the scroller — the subject's visibility is always tracked within its nearest ancestor scroller, which is different from scroll progress timelines.

When a view progress timeline is applied to an animated element, the animation progresses along that timeline rather than the default time-based one, with the animation's keyframe progression reflecting the subject's position in the scroller. The animation only occurs when the element is visible within its scrollport, with the current point in the keyframe animation being determined by the element's scroll position within that scrollport. Timeline progress starts at `0%` when the tracked subject starts intersecting the scrollport at the block or inline end edge. The `100%` occurs when the subject exits the scrollport at the block or inline start edge.

By default, the timeline is at `0%` when the subject is first visible at the start edge of the scroller, and `100%` when the element's end edge reaches the end edge of its nearest scroll container ancestor. Because the `100%` is only reached when the element leaves the viewport, when creating keyframe animations for view-timed animations, you likely want to set the final effect of your animation in a keyframe block that occurs well before the end of the animation. You can set your completed effect within the 20%, 50%, or 80% keyframe block rather than using the `to` or `100%` keyframe to ensure the element finishes animating while still in view.

With view progress timelines, you can adjust the view progress visibility range.
Use {{cssxref("view-timeline-inset")}}, part of the {{cssxref("view-timeline")}} shorthand, to adjust when the subject is considered to be in view. The default value is `auto`. The effect of any non-`auto` inset value is as if you moved the edges of the scroll port: a positive inset value creates an inward adjustment and a negative value an outward adjustment.

Similar to scroll progress timelines, the view progress timeline can be named or anonymous.

#### Named view progress timeline

A _named view progress timeline_ is one where the subject is explicitly named using the {{cssxref("view-timeline-name")}} property, a component of the `view-timeline` shorthand. The `<dashed-ident>` name is then linked to the element to animate by specifying it as the value of that element's `animation-timeline` property.

With named view progress timelines, the element to animate does not have to be the same as the subject. In other words, the element controlling the timeline doesn't have to be the same as the element being animated. This means you can animate one element based on another element's movement in the viewport, and animations can depend on a separate element's visibility or position within its scrollable container.

Here we use the {{cssxref("view-timeline-name")}} property to name an element, identifying the element itself as the source of a view progress timeline. We then set that name as the value of the `animation-timeline` property.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --aName;
  animation-timeline: --aName;
}
```

We applied the animation **before** the animation timeline, as the `animation` resets the `animation-timeline` to `auto`.

The animation is slightly different from the previous animations in that the spinning effect starts 20% through the animation and ends 80% of the way through the animation; this means the element will not be actively spinning when it first comes into view and will stop spinning before it is completely out of view.

```css live-sample___named_view live-sample___anon_view
@keyframes action {
  from,
  20% {
    rotate: 45deg;
  }
  80%,
  to {
    rotate: 720deg;
  }
}
```

```css hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
.scroller {
  width: 400px;
  height: 100px;
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

{{EmbedLiveSample("named_view", "100%", "150")}}

Scroll the element into view. Note that the element animates through the `@keyframe` animation as it moves through the visible area of its ancestor scroller.

#### Anonymous view progress timeline: the `view()` function

Alternatively, the CSS {{cssxref("animation-timeline/view", "view()")}} function can be used to specify that the `animation-timeline` for an element is a view progress timeline. An _anonymous view progress timeline_ is one in which the subject is given a `view()` function as an `animation-timeline` value, causing it to be animated based on its position inside its nearest parent scroller.

The `view()` function is used to create a view timeline. You attach the timeline to the element you want to animate using the `animation-timeline` property. The function creates a view timeline for each element matched by the selector.

Again, we define the `animation` before the `animation-timeline`, so as to not reset the timeline. We then include an argument-less `view()` function. We don't specify a scroller as, by definition, the subject's visibility is tracked by its nearest ancestor scroller.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "150")}}

#### Parameters of the `view()` function

The `view()` function takes up to three optional values as arguments: zero or one `<axis>` parameters and either the keyword `auto` or zero, one, or two {{cssxref("length-percentage")}} inset values. Declaring `view()` is equivalent to `view(block auto)`, which defines `block` as the axis of the parent element that supplies the timeline and the {{cssxref("scroll-padding")}}, which generally defaults to `0`, as the insets within the visible area at which the animation starts and ends. The function sets the values of the {{cssxref("view-timeline-axis")}} and {{cssxref("view-timeline-inset")}} properties.

The {{cssxref("view-timeline-inset")}} argument can either be set to `auto` or up to two {{cssxref("length-percentage")}} values. It specifies an inset (positive) or outset (negative) adjustment of the scrollport. The inset is used to determine whether the element is in view, which determines the length of the animation timeline. In other words, instead of starting at the start edge and ending at the end edge of the scrollport, the animation lasts as long as the element is in the inset-adjusted view.

Unlike the scroll timeline's `scroll()` function, there is no `<scroller>` argument in the `view()` function, as the view timeline always tracks the subject within its nearest ancestor scroll container.

In this case, as we are using inset values, we can use the `from` and `to` keyframe selectors.

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

{{EmbedLiveSample("anon_view_args", "100%", "150")}}

## Accessibility concerns

As with all animations and transitions, always take any user's [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) preference into account.

### Removing an animation's timeline

Setting `animation-timeline: none` disassociates the element from all animation timelines, including the default time-based document timeline, meaning the element will not animate. While some animations may be necessary, you can remove animations based on the user's `prefers-reduced-motion` setting with:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Because the [`animation` shorthand sets the `animation-timeline` to `auto`](#animation-timeline-and-the-animation-shorthand), use a selector with great enough specificity to ensure your `animation-timeline` isn't overridden by your `animation` shorthand declarations.

> [!NOTE]
> Scroll-driven animations should not be confused with _scroll-triggered animations_, which are regular animations programmed to apply to elements based on scrolling. These document timeline-based animations are initially paused, inactive, or non-existent, and are initiated by scroll interactions that add an `animation-name` to an element, thereby initiating the animation, changing the `animation-play-state` to a value other than `paused`, or otherwise triggering an animation on an element. Scroll-triggered animations do not use features of the [scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module. Rather, once the user reaches a certain scroll offset, the animation is triggered and, as with regular CSS animations, the animation progresses through the keyframes as a timed animation normally does. Scrolling only initiates, or triggers, the animation; it has no effect on the animation progression once triggered. For example, scrolling back will not stop or reverse the scroll-triggered animation.

## See also

- [CSS animations](/en-US/docs/Web/CSS/CSS_animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
