---
title: animation-trigger CSS property
short-title: animation-trigger
slug: Web/CSS/Reference/Properties/animation-trigger
page-type: css-property
status:
  - experimental
browser-compat: css.properties.animation-trigger
sidebar: cssref
---

{{SeeCompatTable}}

The **`animation-trigger`** [CSS](/en-US/docs/Web/CSS) property specifies whether [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) declared on an element are triggered animations (or not) and, if so, what their triggers are and how they should behave when the trigger becomes active or inactive. This can be used to create [scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

## Syntax

```css
/* Keywords */
animation-trigger: none;

/* One trigger */
animation-trigger: --my-trigger play;
animation-trigger: --my-other-trigger play-once;
animation-trigger: --my-trigger play-forwards play-backwards;
animation-trigger: --my-other-trigger play reset;

/* Multiple values */
animation-trigger:
  none,
  --my-trigger play-forwards play-backwards,
  --my-other-trigger play reset;

/* Global values */
animation-trigger: inherit;
animation-trigger: initial;
animation-trigger: revert;
animation-trigger: revert-layer;
animation-trigger: unset;
```

### Values

The property accepts a comma-separated list of values. Each value is either the keyword `none` or a {{cssxref("dashed-ident")}} followed by one or two {{cssxref("animation-action")}} values.

- `none`
  - : The associated animation is not a triggered animation.
- {{cssxref("dashed-ident")}}
  - : A custom identifier defining the name of the trigger that will trigger the animation.
- {{cssxref("animation-action")}}
  - : An `<animation-action>`: The keywords `none`, `play`, `play-forwards`, `play-backwards`, `play-once`,`pause`, `replay`, or `reset`.

## Description

The `animation-trigger` property specifies which trigger will control an animated element's animations. A value other than `none` turns the animation into a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

### Defining a trigger

The trigger is identified via a `<dashed-ident>` value, which is defined in the tracked element's {{cssxref("timeline-trigger-name")}} property. If there is no scrolling element with the same `<dashed-ident>` set as the `timeline-trigger-name` value, the animation will not have a trigger, and will never occur.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play;
}
```

In this case, the animation will only play when an element with a `timeline-trigger-name` of `--my-trigger` enters the activation range defined on the trigger.

Here we create a trigger setting the `timeline-trigger-name` using the {{cssxref("timeline-trigger")}} shorthand property. The `.trigger` can be any element, including the `.animated` element.

```css
.trigger {
  timeline-trigger: --my-trigger view();
}
```

### Defining the triggered animation actions

The `animation-trigger` value must include one or two {{cssxref("animation-action")}} keywords after the `<dashed-ident>` to specify the behavior of the animation when the trigger is activated and deactivated. If two `<animation-action>`s are specified, the first is the activation action and the second is the deactivation action. If only one `<animation-action>` is set, this is the activation action, and there is no deactivation.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}
```

When the trigger is activated, the animation will `play-forwards`. When the trigger is deactivated, the animation will `play-backwards`.

There are eight `<animation-action>` values, each providing different animation behaviors. The `play-forwards play-backwards` is a common pattern, often used to "animate in" an element it's trigger scrolls into view, and then "animate out" again when the trigger scrolls out of view. The `play-once` is generally used on its own or as `play-once pause`; with `play-once`, the animation plays only once when it scrolls into view, The addition of `pause` on deactivation pauses the animation when the trigger scrolls out of its activation range, restarting where it was paused if re-activated. See the {{cssxref("animation-action")}} data type to see examples and learn more about the each keyword value.

### Triggering the same animation via multiple different triggers

If you have an animated element, and you want to define triggers on multiple different elements that all trigger the same animation, you need to specify the animation multiple times on the animated element, and then give each animation instance a different trigger.

For example:

```css
.animated {
  animation:
    moveright 2s 1 ease-out both,
    moveright 2s 1 ease-out forwards;
  animation-trigger:
    --t1 play-forwards play-backwards,
    --t2 play-forwards play-backwards;
}

.trigger1 {
  timeline-trigger: --t1 view();
}

.trigger2 {
  timeline-trigger: --t2 view();
}
```

See [Multiple triggers for the same animation](#multiple_triggers_for_the_same_animation) for a working example.

### Reset by the `animation` shorthand

The `animation-trigger` property is a reset-only sub-property of the {{cssxref("animation")}} shorthand property. This means that trigger name and animation actions can not be included in the `animation` shorthand, but using the inclusion of the `animation` shorthand resets `animation-trigger` to its initial value of `none`. For this reason, you should always set `animation-trigger` after a corresponding `animation` property in a declaration list or declare the `animation-trigger` in a declaration block with selectors with stronger {{cssxref("specificity")}}.

### Multiple `animation-trigger` values

The {{cssxref("animation-trigger")}} property works in the same way as the {{cssxref("animation")}} shorthand property and the other animation longhand properties with regard to setting [multiple values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values):

- If multiple `animation-name` values are set, but only a single `animation-trigger` value is set, the `animation-trigger` will apply to all the animations.
- If two comma-separated `animation-trigger` values are set, they will cycle between the animations until all of them have an `animation-trigger` value set. See an example of [declaring multiple scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations#multiple_scroll-triggered_animations).

Given the following CSS:

```css
.animated {
  animation:
    fade-in linear 1s forwards,
    rotate infinite 5s both,
    shrink ease-in 3s forwards,
    colorchange steps(5) 5s forwards;

  animation-trigger:
    --t1 play pause,
    --t2 forwards backwards;
}
.trigger1 {
  timeline-trigger: --t1 view();
}
.trigger2 {
  timeline-trigger: --t2 view();
}
```

With `animation-trigger: --t1 play pause, --t2 forwards backwards` set on the animated element, `--t1` will trigger the `fade-in` and `shrink` animations while `--t2` will trigger the `rotate` and `colorchange` animations.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates how to create a scroll-triggered animation that plays when activated and pauses when deactivated.

#### HTML

The markup contains two {{htmlelement("div")}} elements, one to animate and one to create a trigger on, plus some basic text content to cause the page to scroll. The text is hidden for brevity.

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

The animated `<div>` element's {{cssxref("position")}} is set to `fixed`, positioning it near the top-left of the scrollport to enable seeing when the animation plays and pauses.

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

```css live-sample___basic-example live-sample___multiple-triggers
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for the `rotate` animation we will use later:

```css live-sample___basic-example live-sample___multiple-triggers
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Using the `animation` shorthand, the `.animated` element has the `rotate` animation applied. Without an associated trigger, the element would start animating when the page loads. The `animation-trigger` property makes it a triggered animation. The value references a `timeline-trigger-name` of `--t` and specifies two `<animation-action>` values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play pause;
}
```

The `.trigger` element creates the animated element's trigger with a `timeline-trigger` value of `--t view()`. This value includes the identifier referenced in the `.animated` declaration block's `animation-trigger` property value (the `timeline-trigger-name`), associating the two together. It also includes a {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines).

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view();
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up and down. When any part of the `.trigger` appears in the scrollport, the animation will play; when it has completely left the scrollport at either edge, the animation will pause.

### Making the animated element create the trigger

In this example, we demonstrate how an animated element can also create its own trigger.

#### HTML

This time, the markup contains only a single {{htmlelement("div")}} element, plus basic text content to cause the page to scroll. We have hidden the markup for the content for brevity.

```html
<div>I create my own trigger</div>
```

```html hidden live-sample___same-element
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

<div>I create my own trigger</div>

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

The {{htmlelement("div")}} element has an `animation` applied that smoothly inverts its colors, defined as follows:

```css hidden live-sample___same-element
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  height: 100px;
  background: orange;
  border: 5px solid black;
}
```

```css live-sample___same-element
@keyframes invert-colors {
  from {
    background: orange;
    color: black;
  }

  to {
    background: black;
    color: orange;
  }
}
```

We set an `animation-trigger` value on the `<div>` that references a `timeline-trigger-name` of `--t`. We also specify two `<animation-action>` values — `play-forwards` and `play-backwards` — which specify that the animation will play forwards on activation, and play in reverse on deactivation.

We also specify a `timeline-trigger` value of `--t view() contain` on the `<div>`, so the `<div>` creates the trigger for its own animation. The `timeline-trigger` includes:

- A `<dashed-ident>`: The `timeline-trigger-name` identifier referenced in the `animation-trigger` property.
- A `<timeline-trigger-source>`: The [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) value sets the timeline trigger to a view progress timeline tracking the element inside its nearest scrolling ancestor element.
- A {{cssxref("timeline-range-name")}}: The {{cssxref("timeline-trigger-activation-range")}} value of [`contain`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#contain) means the trigger will activate when the `<div>` is fully inside the scrollport, and deactivate when it starts to exit the scrollport. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) for more information.

```css live-sample___same-element
div {
  animation: invert-colors 0.6s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger: --t view() contain;
}
```

#### Result

{{EmbedLiveSample("same-element", "100%", "240")}}

Try scrolling the content up. When the `<div>` fully appears in the scrollport, its animation will play; when any part of the `<div>` leaves the scrollport at either edge, the animation will play backwards.

### Multiple triggers for the same animation

This example shows how to assign multiple triggers to control the same animation. This example is similar to the [basic usage example](#basic_usage), but with multiple triggers triggering one keyframe animation.

#### HTML

We include three `<div>` elements as trigger. The text content is hidden for brevity.

```html
...

<div class="trigger1">I create a trigger</div>

...

<div class="trigger2">I create another trigger</div>

...

<div class="trigger3">I create yet another trigger</div>

...
```

```html hidden live-sample___multiple-triggers
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

<div class="trigger1">I create a trigger</div>

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

<div class="trigger2">I create another trigger</div>

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

<div class="trigger3">I create yet another trigger</div>

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

###3 CSS

```css hidden live-sample___multiple-triggers
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

.trigger1,
.trigger2,
.trigger3 {
  background: palegoldenrod;
}
```

The value of the `animation` shorthand property is a comma separated list of animations, applying the same `rotate` keyframe animation three times. The `animation-trigger` value is a comma separated list of three animation triggers, one for each animation instance.

```css live-sample___multiple-triggers
.animated {
  animation:
    rotate 3s infinite linear both,
    rotate 3s infinite linear forwards,
    rotate 3s infinite linear forwards;
  animation-trigger:
    --t1 play-forwards play-backwards,
    --t2 play-forwards play-backwards,
    --t3 play-forwards play-backwards;
}
```

We define a timeline trigger with a different name on each trigger `<div>` element. These names correspond to the names referenced in the `.animated` element's `animation-trigger` property.

```css live-sample___multiple-triggers
.trigger1 {
  timeline-trigger: --t1 view();
}

.trigger2 {
  timeline-trigger: --t2 view();
}

.trigger3 {
  timeline-trigger: --t3 view();
}
```

```css hidden live-sample___basic-example live-sample___same-element live-sample___multiple-triggers
@supports not (animation-trigger: --t play-forwards play-backwards) {
  body::before {
    content: "Your browser does not support the animation-trigger property.";
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

{{EmbedLiveSample("multiple-triggers", "100%", "160")}}

Try scrolling the content up and down, and note how the the animation is activated and then deactivated when each of the trigger elements scrolls into view and out of view again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
