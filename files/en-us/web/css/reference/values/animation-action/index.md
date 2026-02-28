---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
page-type: css-type
browser-compat: css.types.animation-action
sidebar: cssref
---

The **`<animation-action>`** {{glossary("enumerated")}} data type is a CSS identifier that specifies how a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) should behave when activated and deactivated.

The `<animation-action>` keyword values are used in the following properties:

- {{cssxref("animation-trigger")}}

## Syntax

Valid `<animation-action>` values:

- `none`
  - : The animation will not play.
- `play`
  - : The animation will play.
- `play-forwards`
  - : The animation will play. `play-forwards` differs from the `play` value in that it extends the effect of an {{cssxref("animation-fill-mode")}} set on the corresponding animation to before/after the animation activated/deactivated. The animation will play and adopt the animation's finished state once finished, if its `animation-fill-mode` is set to `forwards` or `both`.
- `play-backwards`
  - : The animation will play in reverse. Like `play-forwards`, it extends the effect of an {{cssxref("animation-fill-mode")}} set on the corresponding animation to before/after the animation activated/deactivated. The animation will play in reverse and adopt the animation's starting state once finished. It is important to note that, even if the {{cssxref("animation-iteration-count")}} is set to `infinite`, the animation will not play backwards a greater number of times than it has already played forwards. For example, if the animation has previously played forwards five times before the `play-backwards` behavior starts, it will then play backwards five times and stop.
- `play-once`
  - : The animation will play once and then stop.
- `pause`
  - : The animation will pause.
- `replay`
  - : The animation will play from the start (progress `0`), regardless of where it had played to previously.
- `reset`
  - : The animation will pause, and its progress will be set back to `0`.

## Description

When setting an {{cssxref("animation-trigger")}} value on an animated element to specify the animation as a scroll-triggered animation, the value can include one or two `<animation-action>` values, separated by a space. The first value specifies the behavior of the animation on activation, while the optional second value specifies the behavior of the animation on deactivation.

If only a single value is specified, the animation doesn't change its behavior on deactivation; it will continue with the activation behavior. It has the same effect as setting `none` as the second value.

Some `<animation-action>` values are designed to be used together. For example:

- `play-forwards play-backwards` is very common when you want a UI element to "animate in" when it appears on-screen, and then "animate out" again when it goes off-screen.
- `play pause` is common for animating an element as it appears, then pausing the animation as it starts to go off-screen.

Other values are designed to be used on their own, for example `play-once`.

## Formal syntax

{{CSSSyntaxRaw(`<animation-action> = none | pause | play | play-backwards | play-forwards | play-once | replay | reset`)}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that plays forwards on activation and backwards on deactivation.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I am the trigger</div>

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

<div class="trigger">I am the trigger</div>

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

The animated {{htmlelement("div")}} element has an `animation` applied that rotates it once. We set an `animation-trigger` value on it that references a `timeline-trigger-name` of `--t`; we also specify two `<animation-action>` values — `play-forwards` and `play-backwards` — which specify that the animation will play on activation, and play in reverse on deactivation.

The trigger `<div>` element is defined as the animated `<div>`'s trigger using a `timeline-trigger` value of `--t view()`. This value includes the identifier referenced in the animated `<div>`'s `animation-trigger` property value (the `timeline-trigger-name`), associating the two together. It also includes:

- A `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the element providing the view progress timeline as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} value of [`contain`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#contain), which means that the animation will activate when the `<div>` is fully inside the viewport, and deactivate when it stops being fully inside the viewport.

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

@supports not (timeline-trigger-name: --t) {
  body::before {
    font-family: sans-serif;
    font-size: 1.3rem;
    content: "Your browser does not support scroll-triggered animations.";
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

```css live-sample___basic-example
div.animated {
  animation: rotate 1.5s linear both;
  animation-trigger: --t play-forwards play-backwards;
}

div.trigger {
  timeline-trigger: --t view() contain;
}
```

Next, we give the animated `<div>` a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the viewport so that we can easily see when its animation starts and stops.

```css live-sample___basic-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Finally, we define the {{cssxref("@keyframes")}} for the `rotate` animation:

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

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. When the trigger `<div>` fully appears in the viewport, the animation will play; when the trigger starts to leave the viewport at either edge, the animation will play in reverse.

### Demonstrating different `<animation-action>` effects

In this example we show a series of {{htmlelement("div")}} elements with the same `rotate` animation applied as in the previous example, but different `<animation-action>` values. This allows you to compare and contrast the effect of the different actions.

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

We set the same {{cssxref("animation")}} on each `<div>` element — we play the `rotate` animation an infinite number of times, with each iteration lastly two seconds. We also style each `<div>` to be a `50px` diameter colored circle.

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

@supports not (timeline-trigger-name: --t) {
  body::before {
    font-family: sans-serif;
    font-size: 1.3rem;
    content: "Your browser does not support scroll-triggered animations.";
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
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

Next, we set the `<section>` element to be an animation trigger, with a `timeline-trigger` value of `--t view() contain 20% contain 80%`. There is nothing unusual going on here, except that we've set the contained {{cssxref("timeline-trigger-activation-range")}} value to `contain 20% contain 80%`. This means that the animation will activate when the trigger has scrolled around `20%` of the way up the viewport, and deactivate when the triggered has scrolled around `80%` of the way up the viewport. This allows you to see the `<animation-action>` effects more clearly than if the activation range covered the entire viewport.

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

> [!NOTE]
> We explain what each set of `<animation-action>`s does below the rendered result. Before you get there, have a look at the code and think about what their effects might be, before scrolling down to see our descriptions.

#### Result

The rendered result looks like this:

{{EmbedLiveSample("different-effects", "100%", "240")}}

Try scrolling down to the point where the `<section>` and `<div>` elements enter the viewport. Move them through the start and end of the trigger activation range, concentrating on a different `<div>` each time, to visualize the effects of each set of `<animation-action>`s.

The effects are:

1. The first `<div>` (far left) has `play-forwards play-backwards` set. When it enters the activation range, the animation starts to play forwards. When it leaves the activation range (at the top or bottom of the viewport), it will start to play backwards.
2. The second `<div>` has a single `<animation-action>` set — `play`. When it enters the activation range, the animation starts to play. However, given that there is no deactivation action set to change its behavior, the animation continues to play forever until the page reloads.
3. The third `<div>` has `play replay` set. When it enters the activation range, the animation starts to play forwards. When it leaves the activation range, the animation resets to progress `0`, and then starts to play again.
4. The fourth `<div>` has `pause play` set. When it enters the activation range, the animation continues to not play, as it is set to a paused state. However, when it leaves the activation range, the animation starts to play. From then on, it will pause when inside the activation range, and play when outside it.
5. The fifth `<div>`(far right, the one with an iteration count of `1`) has `play-once reset` set. When it enters the activation range, the animation plays once. When it leaves the activation range, the animation resets to progress `0` and pauses. From then on, it will play once when entering the activation range, and reset when it leaves the activation range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
