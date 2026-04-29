---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
page-type: css-type
browser-compat: css.properties.animation-trigger
sidebar: cssref
---

The **`<animation-action>`** {{glossary("enumerated")}} data type represents keyword values that specify how a [triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers) should behave when its trigger is activated and deactivated.

The `<animation-action>` keyword values are used in the following properties:

- {{cssxref("animation-trigger")}}

## Syntax

The `<animation-action>` enumerated type is specified using one of the values listed below:

- `none`
  - : No action is specified for the animation.
- `play`
  - : The animation will play, resume (if paused), or restart (if currently finished) in the same direction as its current {{domxref("Animation.playbackRate", "playbackRate")}}, as if {{domxref("Animation.play", "play()")}} were called on the animation.
- `play-forwards`
  - : As `play`, except that the `playbackRate` is adjusted if required (flipping it to positive if it is currently negative) so that the animation will play forwards.
- `play-backwards`
  - : As `play`, except that the `playbackRate` is adjusted if required (flipping it to negative if it is currently positive) so that the animation will play in reverse.
- `play-once`
  - : As `play`, except that once the animation has played through all its iterations, it won't be triggered again. Like `play`, if an animation is paused, `play-once` will resume playing it; unlike `play`, it won't replay a finished animation.
- `pause`
  - : The animation will pause, as if {{domxref("Animation.pause", "pause()")}} were called on the animation.
- `replay`
  - : As `play`, except that the animation's {{domxref("Animation.overallProgress", "overallProgress")}} is first set back to `0`.
- `reset`
  - : As `pause`, except that the animation's {{domxref("Animation.overallProgress", "overallProgress")}} is first set back to `0`.

## Description

When setting an {{cssxref("animation-trigger")}} value on an animated element to specify the animation as a triggered animation, the value can include one or two `<animation-action>` values, separated by a space. The first value specifies the behavior of the animation when its trigger activates, while the optional second value specifies the behavior of the animation when its trigger deactivates.

If only a single value is specified, the animation doesn't change its behavior when its trigger deactivates; it will continue with the activation behavior. It has the same effect as setting `none` as the second value.

There are some common patterns to observe:

- `play-forwards play-backwards` is very common when you want a UI element to "animate in" when it appears on-screen, and then "animate out" again when it goes off-screen.
- `play pause` is common for animating an element as it appears, then pausing the animation as it starts to go off-screen.
- `play-once` is often used on its own, when you want an animation to play only once when it appears on-screen.

The behavior of the different `<animation-action>` values is described in more detail in the following sections.

### Specifying no action

If you want to specify that no action is to occur on activation or deactivation, you can use the `none` value.

### Playing the animation

To play the animation, you can use the values `play`, `play-forwards`, `play-backwards`, or `play-once`.

#### `play`

`play` will play the animation through all its iterations. If combined with `pause`, `replay` or `reset`, for example:

```css
animation-trigger: --t play reset;
```

The animation will play on activation, and then `pause`, `replay` or `reset` on deactivation. On subsequent activation, the animation will play again.

If combined with `play-backwards`, for example:

```css
animation-trigger: --t play play-backwards;
```

The animation will play on activation, then play backwards through all the iterations it previously played forwards through on deactivation.

It doesn't make sense to combine `play` with `play-forwards` or `play-once`.

#### `play-forwards` and `play-backwards`

`play-forwards` and `play-backwards` will play the animation through all its iterations, except that the {{domxref("Animation.playbackRate", "playbackRate")}} will be changed to a positive or negative value, ensuring that the animation plays forwards or backwards, respectively.

Combining `play-forwards` with `play-backwards`, for example:

```css
animation-trigger: --t play-forwards play-backwards;
```

causes the animation to play forwards on activation, then play backwards through all the iterations it previously played forwards through on deactivation. On subsequent activations, the animation will start to play forwards again.

Combining `play-forwards` with `pause`, `replay` or `reset`, for example:

```css
animation-trigger: --t play-forwards pause;
```

Results in the same effect as with `play`: the animation will play on activation, and then `pause`, `replay` or `reset` on deactivation. On subsequent activations, the animation will play again.

It doesn't make sense to combine `play-forwards` with `play` or `play-once`.

Note that using `play-backwards` as an activation action has no effect, if the animation is already at the start of its iterations. For example:

```css
animation-trigger: --t play-backwards;
```

The animation does not play because it is already at the start.

#### `play-once`

`play-once` will play the animation through all its iterations, but only once. If the {{cssxref("animation-iteration-count")}} is set to `infinite`, there is not much difference in effect between `play-once` and `play`/`play-forwards`. However, with `animation-iteration-count` set to a finite number, you will observe the following behavior.

If combined with `pause`:

```css
animation-trigger: --t play-once pause;
```

The animation will play on activation, and then `pause` on deactivation. However, once the animation has played through all its iterations, the animation will not play again on subsequent activations.

If combined with `replay`:

```css
animation-trigger: --t play-once replay;
```

The animation will play on activation, and then start to play again from the beginning on deactivation. It won't go above its iteration count on any playthrough, but it will play again on subsequent deactivations because we are putting the animation back to the start each time. On subsequent activation, however, the animation will not play again.

If combined with `reset`:

```css
animation-trigger: --t play-once reset;
```

The animation will play on activation, and then reset to the beginning of the animation on deactivation. On subsequent activation, the animation will play again.

If combined with `play-backwards`, for example:

```css
animation-trigger: --t play-once play-backwards;
```

The animation will play on activation, then play backwards through all the iterations on deactivation. On subsequent activation, the animation will not play again, but you will notice that the animation will play backwards again on subsequent deactivations.

It doesn't make sense to combine `play-once` with `play` or `play-forwards`.

### Pausing the animation

The `pause` value is used to pause the animation at whatever point it reached in its playback upon activation/deactivation. Using this in combination with other values has largely been discussed above. One case that was not mentioned above is using `pause` as the activation action, for example:

```css
animation-trigger: --t pause play;
```

This has an interesting effect of no playback on activation, but playback on subsequent deactivation: useful if you want an animation to play only when the subject leaves the viewport.

It doesn't make sense to combine `pause` with `reset`.

### Resetting the animation

The `replay` and `reset` values are similar to `pause`, except that:

- `reset` pauses the animation but also sets its progress back to `0`.
- `replay` sets the animation progress back to `0` and then starts playing it again from that point.

Using these values in combination with other values has largely been discussed above. One case that was not mentioned above is using these values as the activation action.

For example:

```css
animation-trigger: --t replay pause;
```

This has an interesting effect of playing on activation (the same as an action like `play`) and pausing on deactivation. However, on subsequent activation, it will play from the start again, regardless of the play state before that. This is useful if you want an animation to play when the subject enters the viewport, pause when it leaves the viewport, but then play from the start on each subsequent entry.

Another interesting example is as follows:

```css
animation-trigger: --t reset play;
```

This has an interesting effect of not playing on activation and then playing on deactivation. On subsequent activation, it will reset to progress `0`, regardless of the play state before that. This is useful if you want an animation to play when the subject leaves the viewport, and then reset to the beginning on each subsequent entry.

It doesn't make sense to combine `replay` with `reset` or `pause`.

## Formal syntax

{{CSSSyntaxRaw(`<animation-action> = none | pause | play | play-backwards | play-forwards | play-once | replay | reset`)}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that plays forwards on trigger activation and backwards on trigger deactivation.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example
<div class="animated">I am animated</div>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<div class="trigger">I create the trigger</div>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>
```

#### CSS

We give the `.animated` `<div>` element a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the viewport so we can see when its animation starts and stops.

```css hidden live-sample___basic-example
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  height: 100px;
  border: 5px solid black;
}

.animated {
  width: 100px;
  background: orange;
}

.trigger {
  background: wheat;
}
```

```css live-sample___basic-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation:

```css live-sample___basic-example live-sample___different-effects
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

The `.animated` `<div>` has the `rotate` `animation` applied. We then set an `animation-trigger` value on it that references a `timeline-trigger-name` of `--t` with two `<animation-action>` values, `play-forwards` and `play-backwards`. These specify that the animation will play on activation, and play in reverse on deactivation.

```css live-sample___basic-example
div.animated {
  animation: rotate 1.5s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}
```

The `.trigger` `<div>` element creates the animated `<div>`'s trigger using a `timeline-trigger` value of `--t view()`. This value includes the identifier referenced in the animated `<div>`'s `animation-trigger` property value (the `timeline-trigger-name`), associating the two together. It also includes:

- A `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} value of [`contain`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#contain), which means that the trigger will activate when the `.trigger` `<div>` is fully inside the viewport, and deactivate when it stops being fully inside the viewport.

```css live-sample___basic-example
div.trigger {
  timeline-trigger: --t view() contain;
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. When the tracked `<div>` fully appears in the viewport, the animation will play; when it starts to leave the viewport at either edge, the animation will play in reverse.

### Comparing the `<animation-action>` values

This example provides a comparison of the various`<animation-action>` values. By applying the same rotation animation to identical side-by-side elements, only varying the `animation-trigger` values, you can compare and contrast the effects of the different actions.

#### HTML

We include a {{htmlelement("section")}} element containing five {{htmlelement("div")}} elements, each with a number inside. We also include some text content to cause the page to scroll, which we've hidden for brevity.

```html
<section>
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
</section>
```

```html hidden live-sample___different-effects
<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<section>
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
</section>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>
```

#### CSS

We set the same {{cssxref("animation")}} on each `<div>` element — we play the `rotate` animation an infinite number of times, with each iteration lasting two seconds. We also style each `<div>` to be a `50px` diameter colored circle.

```css hidden live-sample___different-effects
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  display: flex;
  justify-content: center;
}

section {
  display: flex;
  justify-content: space-between;
}
```

```css live-sample___different-effects
div {
  animation: rotate 2s infinite linear both;
  height: 50px;
  width: 50px;
  border: 5px solid black;
  border-radius: 50%;
  background-color: orange;
}
```

Next, we set the `<section>` element to create an animation trigger, with a `timeline-trigger` value of `--t view() contain 20% contain 80%`. There is nothing unusual going on here, except that we've set a {{cssxref("timeline-trigger-activation-range")}} value to `contain 20% contain 80%`. This means that the trigger will activate when the `<section>` element has scrolled around `20%` of the way up the viewport, and deactivate when it has scrolled around `80%` of the way up the viewport. This allows you to see the `<animation-action>` effects more clearly than if the activation range covered the entire viewport.

```css live-sample___different-effects
section {
  timeline-trigger: --t view() contain 20% contain 80%;
}
```

Next, we set a different {{cssxref("animation-trigger")}} property value on each `<div>` element. Each one references the `<section>` element's `timeline-trigger-name`, but each one has a different set of `<animation-action>` values applied. The last `<div>` additionally has a new `animation` property value applied, overriding the one we set earlier. It is the same as the original `animation` property, except that the iteration count is set to `1` rather than `infinite`. We have done this because it is easier to demonstrate the effect of `play-once` when the iteration-count is not `infinite` (if this is the case, it will play forever, regardless).

```css live-sample___different-effects
.one {
  animation-trigger: --t play-forwards play-backwards;
}

.two {
  animation-trigger: --t play;
}

.three {
  animation-trigger: --t play replay;
}

.four {
  animation-trigger: --t pause play;
}

.five {
  animation: rotate 2s 1 linear both;
  animation-trigger: --t play-once reset;
}
```

```css hidden live-sample___basic-example live-sample___different-effects
@supports not (timeline-trigger-name: --t) {
  body::before {
    content: "Your browser does not support scroll-triggered animations.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Result

{{EmbedLiveSample("different-effects", "100%", "240")}}

Scroll down to the point where the `<section>` and `<div>` elements enter the viewport. Move them through the start and end of the trigger activation range, concentrating on a different `<div>` each time, to visualize the effects of each set of `<animation-action>`s.

The effects are:

1. The first `<div>` (far left) has `play-forwards play-backwards` set. When the tracked element enters the activation range, the animation starts to play forwards. When it leaves the activation range (at the top or bottom of the viewport), it will start to play backwards.
2. The second `<div>` has a single `<animation-action>` set — `play`. When the tracked element enters the activation range, the animation starts to play. However, given that there is no deactivation action set to change its behavior, the animation continues to play forever until the page reloads.
3. The third `<div>` has `play replay` set. When the tracked element enters the activation range, the animation starts to play forwards. When it leaves the activation range, the animation resets to progress `0`, and then starts to play again.
4. The fourth `<div>` has `pause play` set. When the tracked element enters the activation range, the animation continues to not play, as it is set to a paused state. However, when it leaves the activation range, the animation starts to play. From then on, the animation will pause when the tracked element is inside the activation range, and play when it is outside it.
5. The fifth `<div>` (far right, with an iteration count of `1`) has `play-once reset` set. When the tracked element enters the activation range, the animation plays once. When it leaves the activation range, the animation resets to progress `0` and pauses. From then on, the animation will play once whenever the tracked element enters the activation range, and reset when the tracked element leaves the activation range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
