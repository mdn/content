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

The **`timeline-trigger`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) defines a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger on an element.

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

### Values

A shorthand specifying the various timeline trigger-related properties separated by spaces, or the keyword `none`.

- `none`
  - : Specifies that the element does not create a trigger, resetting all four longhand properties to their default values.
- `<'timeline-trigger-name'>`
  - : A {{cssxref("timeline-trigger-name")}} value representing the trigger's identifying name. Defaults to `none`.
- `<'timeline-trigger-source'>`
  - : A {{cssxref("timeline-trigger-source")}} value representing the trigger's timeline. Defaults to `auto`.
- `<'timeline-trigger-activation-range'>` {{optional_inline}}
  - : A {{cssxref("timeline-trigger-activation-range")}} value representing the trigger's activation range. Defaults to `normal`, which is equivalent to `cover 0% cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `0% 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.
- `<'timeline-trigger-active-range'>` {{optional_inline}}
  - : A {{cssxref("timeline-trigger-active-range")}} value representing the trigger's activation range. Defaults to `auto`, which sets the `<'timeline-trigger-active-range'>` to the same value as the `<'timeline-trigger-activation-range'>`.

## Description

The `timeline-trigger` property can be used to define all the longhand properties used to create a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger in a single declaration, resetting those not explicitly set.

A typical example looks like so:

```css
.trigger {
  timeline-trigger: --my-trigger view() entry / contain;
}
```

An element with this declaration set will have:

- An identifying {{cssxref("timeline-trigger-name")}} of `--my-trigger`.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function), which selects the element's nearest ancestor scrolling element to define its timeline trigger.
- An activation range of `entry`, meaning that the trigger will activate when its tracked element moves into the [`entry`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range. This is the range between the element's start edge crossing the scrollport's end edge, and the element's end edge crossing the scrollport's end edge.
- An active range of `contain` meaning that once activated, the trigger will stay active until its tracked element leaves the [`contain`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range: the range in which any part of the tracked element is visible in the scrollport.

An animated element can be triggered by the previously-described trigger by referencing its identifying name in its {{cssxref("animation-trigger")}} property. It is possible for the animated element and the element that creates the trigger to be the same element; that is, if a single element has both the `timeline-trigger`and `animation-trigger` properties set on it.

### The `none` value

The `none` keyword specifies that the element does not create a scroll-triggered animation trigger. `none` is equivalent to setting `none auto normal / normal`, which effectively resets all four equivalent longhand properties to their default values.

### Shorthand property order

Due to the potential for ambiguities in the syntax, this shorthand's values must be given in the specified order.

- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- Optionally, a {{cssxref("timeline-trigger-activation-range")}}
- A {{cssxref("timeline-trigger-active-range")}} value, preceded by a forward slash.

The `timeline-trigger-active-range` value can only be included if the {{cssxref("timeline-trigger-activation-range")}} value is included.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to set up a basic scroll-triggered animation, including defining the trigger using a `timeline-trigger` shorthand property.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, one to animate and one to create the trigger on, and some basic text content to cause the page to scroll.

We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

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

We start by giving the `.animated` `<div>` element a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the scrollport so we can see when its animation starts and stops.

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

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation that we'll apply later:

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

We apply the animation to the `.animated` `<div>` for infinite iterations using the {{cssxref("animation")}} shorthand. We then set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t` and specifies two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
div.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` `<div>` element creates the animated `<div>`'s trigger using a `timeline-trigger` value of `--t view() entry / cover`. This specifies the following, all in a single declaration:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} of `entry`, which means that the trigger will activate in the [`entry`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range (from the point where the tracked element's block start edge enters the scrollport, to the point where its block end edge enters the scrollport).
- A {{cssxref("timeline-trigger-active-range")}} of `cover`, which means that, once activated, the trigger will stay active until the tracked element leaves the [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry) range (in other words, until it completely leaves the scrollport).

```css live-sample___basic-example
div.trigger {
  timeline-trigger: --t view() entry / cover;
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content. The rotation will start when the tracked element enters the `entry` range down the bottom of the scrollport, but won't stop again until it has completely exited the scrollport.

### Multiple timeline-trigger values

In this example, we build on the previous example to demonstrate how multiple `timeline-trigger` values can be set on the same element, creating multiple triggers that can be used to trigger multiple animations.

#### HTML

The markup for this example is exactly the same as the previous example markup except that we have included one extra animated `<div>` element with a class of `animated2`. This example has a total of two animated elements and one element to create triggers on.

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated2">I am animated as well</div>
```

#### CSS

We give the animated elements `fixed` positioning like in the previous example, but we give them different `left` values so that they don't sit on top of one another.

```css hidden live-sample___multiple-values
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
```

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

Next, we define the `@keyframes` for the two animations we'll apply to the `<div>`s:

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

The scroll trigger CSS is very similar to the previous example, except that in this case we have separate `animation` and `animation-trigger` properties applied to the two animated `<div>` elements. Each one has a different animation that is triggered by a separate timeline trigger, and different `<animation-action>` values applied. The first animation plays on activation and plays in reverse on deactivation, whereas the second one plays on activation and pauses on deactivation.

```css live-sample___multiple-values
div.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}

div.animated2 {
  animation: up-down 1s infinite linear;
  animation-trigger: --t2 play pause;
}
```

We then set a `timeline-trigger` value on the `.trigger` `<div>` that contains two separate values. Each one has a separate `timeline-trigger-name` and different `timeline-trigger-activation-range` and `timeline-trigger-active-range` values so that the two animated elements start and stop their animations at different offsets.

```css live-sample___multiple-values
div.trigger {
  timeline-trigger:
    --t view() entry / cover,
    --t2 view() contain;
}
```

```css hidden live-sample___basic-example live-sample___multiple-values
@supports not (timeline-trigger: --t view() entry / cover) {
  body::before {
    content: "Your browser does not support the timeline-trigger property.";
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

{{EmbedLiveSample("multiple-values", "100%", "240")}}

Try scrolling the content. The first animated element will start to rotate when the tracked element enters the `entry` range down at the bottom of the scrollport, and will start to rotate in reverse when the tracked element has completely exited the scrollport. The second animated element will start to move up and down when the tracked element has completely entered the scrollport, and stop when it starts to exit again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
