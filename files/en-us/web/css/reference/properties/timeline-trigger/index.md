---
title: timeline-trigger CSS property
short-title: timeline-trigger
slug: Web/CSS/Reference/Properties/timeline-trigger
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-active-range")}}

## Syntax

```css
/* Keyword */
timeline-trigger: none;

/* name | source */
timeline-trigger: --t view();
timeline-trigger: --t --my-timeline;

/* name | source | activation range */
timeline-trigger: --t view() contain;
timeline-trigger: --t view() entry exit 50%;

/* name | source | activation range | active range */
timeline-trigger: --t view() contain / cover;
timeline-trigger: --t view() entry / entry exit 50%;

/* Multiple triggers */
timeline-trigger:
  --t view(),
  --other-trigger --my-timeline entry / entry 50% exit 50%;

/* Global values */
timeline-trigger: inherit;
timeline-trigger: initial;
timeline-trigger: revert;
timeline-trigger: revert-layer;
timeline-trigger: unset;
```

The `timeline-trigger` shorthand property is specified as the keyword `none` or one or more timeline triggers, separated by commas. Each timeline trigger is specified as a {{cssxref("timeline-trigger-name")}} value, a {{cssxref("timeline-trigger-source")}} and optionally, a {{cssxref("timeline-trigger-activation-range")}} value, separated by spaces.

If specified, the {{cssxref("timeline-trigger-activation-range")}} value can optionally be followed by a {{cssxref("timeline-trigger-active-range")}} value, with the two separated by a forward slash.

### Values

- `none`
  - : Specifies that the element is not a scroll-triggered animation trigger. Equivalent to `none none normal`.
- `<'timeline-trigger-name'>`
  - : A {{cssxref("timeline-trigger-name")}} value representing the trigger's identifying name. Defaults to `none`.
- `<'timeline-trigger-source'>`
  - : A {{cssxref("timeline-trigger-source")}} value representing the trigger's timeline. Defaults to `auto`.
- `<'timeline-trigger-activation-range'>`
  - : A {{cssxref("timeline-trigger-activation-range")}} value representing the trigger's activation range. Defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover).
- `<'timeline-trigger-active-range'>`
  - : A {{cssxref("timeline-trigger-active-range")}} value representing the trigger's activation range. Defaults to the same value as the `timeline-trigger-activation-range`.

> [!NOTE]
> Due to the potential for ambiguities in the syntax, this shorthand's values must be given in the order specified above.

## Description

The `timeline-trigger` property can be used to set all the properties used to specify a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger element in a single declaration.

For example:

```css
.trigger {
  timeline-trigger: --my-trigger view() entry / entry exit 50%;
}
```

An element with this declaration set will have:

- An identifying {{cssxref("timeline-trigger-name")}} of `--my-trigger`.
- A {{cssxref("timeline-trigger-source")}} value of `view()`, which selects the element's nearest ancestor scrolling element to define the [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) that its **activation range** will be measured against.
- An activation range of [`entry`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry), meaning that the animation will activate when its trigger starts to enter the viewport.
- An active range of `entry exit 50%` meaning that once activated, the animation will stay active when its trigger is scrolled between the start of the `entry` range and 50% of the way through the [`exit`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#exit) range (when 50% of the trigger has left the viewport).

An animated element can be triggered by the previously-described trigger element by referencing the trigger's identifying name in its {{cssxref("animation-trigger")}} property.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}
```

In this case, the animation will be triggered by the trigger element with a `timeline-trigger-name` of `--my-trigger`. Its {{cssxref("animation-action")}} keywords — `play-forwards play-backwards` — specify that the animation should play forwards on activation (when the trigger element is scrolled into its activation range), and backwards on deactivation (when the trigger element is scrolled out of its active range).

> [!NOTE]
> It is possible for the animated element and the trigger element to be the same element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to set up a basic scroll-triggered animation, including defining the animation trigger using a `timeline-trigger` shorthand property.

#### HTML

Our markup contains two {{htmlelement("div")}} elements to act as the animated element and trigger, and some basic text content to cause the page to scroll.

We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I am the trigger</div>

...
```

```html hidden live-sample___basic-example live-sample___multiple-values
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

The animated {{htmlelement("div")}} element has an `animation` applied that rotates it. We set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t`; we also specify two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

The trigger `<div>` element is defined as the animated `<div>`'s trigger using a `timeline-trigger` value of `--t view() entry / cover`. This specifies the following, all in a single declaration:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the element providing the view progress timeline as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} of `entry`, which means that the animation will activate in the [`entry`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range (from the point where the trigger's block start edge enters the viewport, to the point where its block end edge enters the viewport).
- A {{cssxref("timeline-trigger-active-range")}} of `cover`, which means that, once active, the animation will stay active until the trigger leaves the [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range (in other words, until the trigger completely leaves the viewport).

```css hidden live-sample___basic-example live-sample___multiple-values
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
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play pause;
}

div.trigger {
  timeline-trigger: --t view() entry / cover;
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

```css live-sample___basic-example
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

Try scrolling the content. The rotation will start when the trigger enters the `entry` range down the bottom of the viewport, but won't stop again until the trigger has completely exited the viewport.

### Multiple timeline-trigger values

In this example, we build on the previous example to demonstrate how multiple `timeline-trigger` values can be set on the same trigger element, triggering multiple animations.

#### HTML

The markup for this example is exactly the same as the previous example markup except that we have included one extra animated `<div>` element with a class of `animated2`. This example has a total of two animated elements and one trigger element.

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated2">I am animated as well</div>
```

#### CSS

```css hidden live-sample___basic-example live-sample___multiple-values
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

.animated,
.animated2 {
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

The CSS is very similar to the previous example, except that in this case we have separate `animation` and `animation-trigger` properties applied to the two animated `<div>` elements. Each one has a different animation that is triggered by a separate timeline trigger, and different `<animation-action>` values applied. The first animation plays on activation and plays in reverse on deactivation, whereas the second one plays on activation and pauses on deactivation.

```css live-sample___multiple-values
div.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}

div.animated2 {
  animation: up-down 1s infinite linear both;
  animation-trigger: --t2 play pause;
}
```

Next, we give the animated elements `fixed` positioning like in the previous example, but we give them different `left` values so that they don't sit on top of one another.

```css live-sample___multiple-values
div.animated,
div.animated2 {
  position: fixed;
  top: 25px;
}

div.animated {
  left: 25px;
}

div.animated2 {
  left: 150px;
}
```

We then set a `timeline-trigger` value on the trigger `<div>` that contains two separate values. Each one has a separate `timeline-trigger-name` and different `timeline-trigger-activation-range` and `timeline-trigger-active-range` values so that the two animated elements start and stop their animations at different times.

```css live-sample___multiple-values
div.trigger {
  timeline-trigger:
    --t view() entry / cover,
    --t2 view() contain;
}
```

Finally, we define the `@keyframes` for the two animations.

```css live-sample___multiple-values
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes up-down {
  0% {
    translate: 0 0;
  }

  25% {
    translate: 0 25px;
  }

  50% {
    translate: 0 0;
  }

  75% {
    translate: 0 -25px;
  }

  100% {
    translate: 0 0;
  }
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("multiple-values", "100%", "240")}}

Try scrolling the content. The first animated element will start to rotate when the trigger enters the `entry` range down at the bottom of the viewport, and will start to rotate in reverse when the trigger has completely exited the viewport. The second animated element will start to move up and down when the trigger has completely entered the viewport, and stop when the trigger starts to exit again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
