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

/* Name | source */
timeline-trigger: --t view();
timeline-trigger: --t --my-timeline;

/* Name | source | activation range */
timeline-trigger: --t view() contain;
timeline-trigger: --t --my-timeline entry exit 50%;

/* Name | source | activation range | active range */
timeline-trigger: --t view() contain / cover;
timeline-trigger: --t --my-timeline entry / entry exit 50%;

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

Specified as the keyword `none` or a comma-separated list of `<timeline-trigger>` values:

- `none`
  - : Specifies that the element does not create a trigger, resetting all four longhand properties to their default values.
- `<timeline-trigger>`
  - : Specified as a space-separated list of the following values:
  - `<'timeline-trigger-name'>`
    - : Specifies the {{cssxref("timeline-trigger-name")}} value representing the trigger's identifying name. Defaults to `none`.
  - `<'timeline-trigger-source'>`
    - : Specifies the {{cssxref("timeline-trigger-source")}} value representing the trigger's timeline. Defaults to `auto`.
  - `<'timeline-trigger-activation-range'>` {{optional_inline}}
    - : Specifies the {{cssxref("timeline-trigger-activation-range")}} value representing the trigger's activation range. Defaults to `normal`, which is equivalent to `cover 0% cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `0% 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.
  - `<'timeline-trigger-active-range'>` {{optional_inline}}
    - : Preceded by a slash (`/`), specifies the {{cssxref("timeline-trigger-active-range")}} value representing the trigger's activation range. Defaults to `auto`, which sets the `<'timeline-trigger-active-range'>` to the same value as the `<'timeline-trigger-activation-range'>`.

## Description

The `timeline-trigger` property can be used to define all the longhand properties used to create a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger in a single declaration.

Component properties not set in the `timeline-trigger` shorthand property value declaration are set to their default values.

### Shorthand property order

Because some of the component properties share value types, the order of those component properties within the shorthand is important. The values must be given in the specified order.

- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-active-range")}}, preceded by a forward slash.

The `timeline-trigger-active-range` value can only be included if the {{cssxref("timeline-trigger-activation-range")}} value is included, and must be included immediately after the `<'timeline-trigger-activation-range'>`, with the two separated by a slash (`/`).

For example:

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

An animated element can be triggered by the previously-described trigger by referencing its identifying name in its {{cssxref("animation-trigger")}} property. For the animated element to create the trigger for itself, the `timeline-trigger-name` component of a `timeline-trigger` should be included as the trigger name component of the `animation-trigger` property set on it.

### The `none` value

The `none` keyword specifies that the element does not create a scroll-triggered animation trigger. Setting `none` is equivalent to setting `none auto normal / normal`, which effectively resets all four equivalent longhand properties to their default values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates using the `timeline-trigger` shorthand property to create a scroll-triggered animation.

#### HTML

We include two {{htmlelement("div")}} elements, one to animate and one on which to create a trigger. The basic text content that causes the page to scroll has been hidden for brevity.

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

The `.animated` element's {{cssxref("position")}} is set to `fixed`, positioning it near the top-left of the scrollport to enable us to see when its animation starts and stops.

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
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} creating a `rotate` animation:

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

Using the {{cssxref("animation")}} shorthand, we apply the `rotate` animation to the `.animated` element. Without a trigger, animations start on page load. We include the {{cssxrf("animation-trigger")}} property, referencing a `timeline-trigger-name` of `--t` and specifies two `<animation-action>` values — `play` and `pause`, making it a triggered animation that will play on activation and pause on deactivation.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` element creates the `.animated` element's trigger using a `timeline-trigger` value of `--t view() entry / cover`. This specifies the following, all in a single declaration:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the `.animated` selector's `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} of [`entry`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry), which means that the trigger will activate when the tracked element's block start edge enters the scrollport, to the point where its block end edge enters the scrollport.
- A {{cssxref("timeline-trigger-active-range")}} of [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#entry), which means that, once activated, the trigger will stay active until the tracked element completely leaves the scrollport.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() entry / cover;
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content. The rotation will start when the tracked element enters the `entry` range, when the `.trigger` first enters into view at the bottom of the scrollport, and the animation won't stop until the `.trigger` has completely exited the scrollport.

### Multiple timeline-trigger values

This example builds on the previous example, demonstrating how multiple `timeline-trigger` values can be set on the same element, creating multiple triggers that can be used to trigger multiple animations.

#### HTML

The markup is the same as the previous example, with the addition of an extra animated `<div>` element with a class of `animated2`. This example has two animated elements and one element to create triggers on.

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated2">I am animated as well</div>
```

#### CSS

The animated elements are `fixed` in `position`, as in the previous example, with different `left` values so they don't overlap.

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
.animated,
.animated2 {
  position: fixed;
  top: 25px;
}

.animated {
  left: 25px;
}

.animated2 {
  left: 150px;
}
```

We define two `@keyframes` animations:

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

Each one has a different animation that is triggered by a separate timeline trigger, and different `<animation-action>` values applied. We apply the same `animation` to the `.animated` element as in the previous example, and a different `animation` to the `.animated2` element. Both have the `animation-trigger` property applied, but with different values. The first animation plays on activation and plays in reverse on deactivation, whereas the second one plays on activation and pauses on deactivation.

```css live-sample___multiple-values
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}

.animated2 {
  animation: up-down 1s infinite linear;
  animation-trigger: --t2 play pause;
}
```

We set a `timeline-trigger` value on `.trigger` that contains two values. Each value has a different `timeline-trigger-name`. They also have different `timeline-trigger-activation-range` and `timeline-trigger-active-range` values, so the animated elements start and stop their animations at different offsets.

```css live-sample___multiple-values
.trigger {
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

Try scrolling the content. The first animated element starts to rotate when the tracked element enters the `entry` range down at the bottom of the scrollport, then rotates in reverse when the tracked element has completely exited the scrollport. The second animated element starts moving up and down when the tracked element has completely entered the scrollport, and stops when it the tracked elements begins exiting the scrollport.

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
