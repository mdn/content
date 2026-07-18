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

The **`animation-trigger`** [CSS](/en-US/docs/Web/CSS) property specifies whether [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) declared on an element are triggered animations or not and, if so, what their triggers are and how they should behave when the trigger becomes active or inactive. This can be used to create [scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

## Syntax

```css
/* Keywords */
animation-trigger: none;

/* One trigger */
animation-trigger: --my-trigger play;
animation-trigger: --my-other-trigger play-once;
animation-trigger: --my-trigger play-forwards play-backwards;
animation-trigger: --my-other-trigger play reset;

/* Multiple triggers */
animation-trigger: --my-trigger play --my-other-trigger play-backwards;
animation-trigger: 
  --my-trigger play-forwards play-backwards --my-other-trigger play reset;

/* Multiple values */
animation-trigger:
  none,
  --my-trigger play-forwards play-backwards,
  --my-other-trigger play reset;
animation-trigger:
  --my-trigger play-forwards --my-other-trigger play-backwards,
  none,
  --my-trigger play-forwards play-backwards --my-other-trigger play pause;

/* Global values */
animation-trigger: inherit;
animation-trigger: initial;
animation-trigger: revert;
animation-trigger: revert-layer;
animation-trigger: unset;
```

### Values

The property accepts a comma-separated list of values. Each value is either the keyword `none` or {{cssxref("dashed-ident")}}s, followed by one or two {{cssxref("animation-action")}} values each.

- `none`
  - : The associated animation is not a triggered animation.
- {{cssxref("dashed-ident")}}
  - : A custom identifier defining the name of the trigger that will trigger the animation.
- {{cssxref("animation-action")}}
  - : An `<animation-action>`: The keywords `none`, `play`, `play-forwards`, `play-backwards`, `play-once`,`pause`, `replay`, or `reset`.

## Description

The `animation-trigger` property specifies which trigger will control the animated element's animations. A value other than `none` turns the animation into a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

The trigger is identified via a `<dashed-ident>` value, which is defined in the tracked element's {{cssxref("timeline-trigger-name")}} property. If there is no scrolling element with the same `<dashed-ident>` set as the `timeline-trigger-name` value, the animation will not have a trigger, and will never occur.

You must include at least one but no more than two {{cssxref("animation-action")}} keywords after the `<dashed-ident>` to specify the behavior of the animation when the trigger is activated and deactivated.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}

.trigger {
  timeline-trigger: --my-trigger view();
}
```

In this case, the animation will be triggered by a trigger with a `timeline-trigger-name` of `--my-trigger`, as specified in the second declaration {{cssxref("timeline-trigger")}} shorthand.

> [!NOTE]
> It is possible for the animated element and the element that creates the timeline to be the same element.

### `animation` shorthand reset behavior

The `animation-trigger` property is a reset-only sub-property of the {{cssxref("animation")}} shorthand property. An `animation-trigger` value cannot be set via the `animation` shorthand; instead, `animation` resets `animation-trigger` to its initial value of `none`. For this reason, you should always set `animation-trigger` after a corresponding `animation` property in a declaration list.

### Multiple `animation-trigger` values

The {{cssxref("animation-trigger")}} property works in the same way as the {{cssxref("animation")}} shorthand property and the other animation longhand properties with regard to setting [multiple values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values):

- If multiple `animation-name` values are set, but only a single `animation-trigger` value is set, the `animation-trigger` will apply to all the animations.
- If two comma-separated `animation-trigger` values are set, they will cycle between the animations until all of them have an `animation-trigger` value set. See an example of [declaring multiple scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations#multiple_scroll-triggered_animations).
- If an animation has more than one trigger, the two `animation-trigger` values must be separated by a space.

Given the following CSS:

```css
.animated {
  animation:
    fade-in linear 1s forwards,
    rotate infinite 5s both;
}
.trigger1 {
  timeline-trigger: --t1 view();
}
.trigger2 {
  timeline-trigger: --t2 view();
}
```

If `animation-trigger: --t1 play pause, --t2 forwards backwards` is set on the animated element, `--t1` will trigger the fade-in animation while --t2 will trigger the rotate animation.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, one to animate and one to create a trigger on, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

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

We start by giving the animated `<div>` element a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the scrollport so that we can easily see when its animation starts and stops.

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

Next, we define the {{cssxref("@keyframes")}} for the `rotate` animation we will use later:

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

The `.animated` `<div>` has the `rotate` `animation` applied. We then set an `animation-trigger` value on it that references a `timeline-trigger-name` of `--t`; we also specify two `<animation-action>` values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
div.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play pause;
}
```

The `.trigger` `<div>` element creates the animated `<div>`'s trigger using a `timeline-trigger` value of `--t view()`. This value includes the identifier referenced in the animated `<div>`'s `animation-trigger` property value (the `timeline-trigger-name`), associating the two together. It also includes a `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.

```css live-sample___basic-example
div.trigger {
  timeline-trigger: --t view();
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up and down. When any part of the `.trigger` `<div>` appears in the scrollport, the animation will play; when it has completely left the scrollport at either edge, the animation will pause.

### Making the animated element create the trigger

In this example, we demonstrate how an animated element can also create its own trigger.

#### HTML

This time, our markup contains only a single {{htmlelement("div")}} element, plus basic text content to cause the page to scroll. We have hidden all the markup for brevity.

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

We set an `animation-trigger` value on the `<div>` that references a `timeline-trigger-name` of `--t`; we also specify two `<animation-action>` values — `play-forwards` and `play-backwards` — which specify that the animation will play forwards on activation, and play in reverse on deactivation.

We then specify a `timeline-trigger` value of `--t view() contain` on the same `<div>`, meaning that it creates the trigger for its own animation. This value includes the identifier referenced in the `animation-trigger` property, plus:

- A `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger to the view progress timeline tracking the element inside its nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} value of [`contain`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#contain), which means that the trigger will activate when the `<div>` is fully inside the scrollport, and deactivate when it stops being fully inside the scrollport.

  > [!NOTE]
  > This is in contrast to the default activation range, [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover), which would cause the trigger to activate when any part of the `<div>` enters the scrollport and deactivate only when it has fully left the scrollport.

```css live-sample___same-element
div {
  animation: invert-colors 0.6s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger: --t view() contain;
}
```

```css hidden live-sample___basic-example live-sample___same-element
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

The rendered result looks like this:

{{EmbedLiveSample("same-element", "100%", "240")}}

Try scrolling the content up. When the `<div>` fully appears in the scrollport, its animation will play; when any part of the `<div>` leaves the scrollport at either edge, the animation will play backwards.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
