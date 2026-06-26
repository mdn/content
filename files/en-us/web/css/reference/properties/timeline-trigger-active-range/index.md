---
title: timeline-trigger-active-range CSS property
short-title: timeline-trigger-active-range
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-active-range
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-active-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's active range.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-active-range-end")}}

## Syntax

```css
/* Keyword */
timeline-trigger-active-range: normal;
timeline-trigger-active-range: auto;

/* Range start value only */
/* Single value */
timeline-trigger-active-range: 0%;
timeline-trigger-active-range: 0px;
timeline-trigger-active-range: cover;
/* Two values */
timeline-trigger-active-range: exit 10%;
timeline-trigger-active-range: contain 50px;

/* Range start and end values */
/* Two values */
timeline-trigger-active-range: 5% 95%;
timeline-trigger-active-range: entry exit;
timeline-trigger-active-range: auto 10%;
timeline-trigger-active-range: 10% normal;
/* Three values */
timeline-trigger-active-range: contain contain 90%;
timeline-trigger-active-range: 200px exit 600px;
timeline-trigger-active-range: entry 10% 90%;
/* Four values */
timeline-trigger-active-range: entry 0% exit 50%;
timeline-trigger-active-range: contain 100px contain 90%;

/* Multiple ranges */
timeline-trigger-active-range:
  cover,
  entry 0% exit 50%;

/* Global values */
timeline-trigger-active-range: inherit;
timeline-trigger-active-range: initial;
timeline-trigger-active-range: revert;
timeline-trigger-active-range: revert-layer;
timeline-trigger-active-range: unset;
```

### Values

Specified as one or more single animation ranges, separated by commas. Each animation range is specified as a {{cssxref("timeline-trigger-active-range-start")}} value, and optionally, a {{cssxref("timeline-trigger-active-range-end")}} value.

- `<'timeline-trigger-active-range-start'>`
  - : The keyword `normal`, the keyword `auto`, a {{cssxref("length-percentage")}}, a {{cssxref("timeline-range-name")}}, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-active-range-end'>`
  - : The keyword `normal`, the keyword `auto`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

Percentages are relative to the length of the named timeline range if one is specified, or the timeline represented by `normal` if not.

## Description

The `timeline-trigger-active-range` property can be used to set a custom **active range** for a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger. The active range is the range within which the trigger will stay active it has been activated.

This is useful in situations where you want an animation to be triggered in a small activation range, but then you want the trigger to stay active within a larger range. The trigger will only deactivate when the tracked element leaves the active range.

The ranges can be changed by setting different `timeline-trigger-activation-range` and `timeline-trigger-active-range` values.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play pause;
}

.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry;
  timeline-trigger-active-range: cover;
}
```

Here, we set a `timeline-trigger-activation-range` value of `entry` and a `timeline-trigger-active-range` of `cover`. This means that the animation will play when the tracked element enters the `entry` range — the range between which its start edge and end edge scroll into the scrollport. However, once activated, the animation will continue as long as the tracked element stays inside the `cover` range — it will only pause when the tracked element has completely left the scrollport.

> [!NOTE]
> The active range is designed to be a superset of the activation range — you activate the trigger over a certain range, and it stays active over a larger range. If you set the `timeline-trigger-active-range` to a smaller range than the `timeline-trigger-activation-range`, it doesn't invalidate your CSS, but the `timeline-trigger-active-range` property has no effect.

An animated element can be triggered by the previously-described trigger by referencing the trigger's identifying name in its {{cssxref("animation-trigger")}} property.

> [!NOTE]
> The `timeline-trigger-active-range` property can also be set via the {{cssxref("timeline-trigger")}} shorthand property.

> [!NOTE]
> It is possible for the animated element and element that creates the trigger to be the same element.

### `timeline-trigger-active-range` value explanation

In terms of explicit and default values, `timeline-trigger-active-range` works in a very similar way to the {{cssxref("animation-range")}} property. In this section we will provide a brief explanation and then link to the appropriate sections on that page for more details.

If two values are specified as components of the `timeline-trigger-active-range` property, they will be interpreted in the order `timeline-trigger-active-range-start` then `timeline-trigger-active-range-end`.

The active range's default value is `auto`, which sets the active range to the same as the activation range.

A value of `normal` is equivalent to `cover 0% cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `0% 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.

See [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values) for more information.

When defining a `timeline-trigger-active-range-start` value explicitly and letting the `timeline-trigger-active-range-end` value adopt a default value, what the default value is depends on the supplied start value, and the rules to determine this are complex. Read [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end) for more details. One special case in which `timeline-trigger-active-range` differs from `animation-range` is the use of the special `auto` keyword: When setting `timeline-trigger-active-range` to `normal` or `auto`, the `timeline-trigger-active-range-end` value is set to `auto`.

### Specifying multiple ranges

When you specify multiple comma-separated values on a single `timeline-trigger-active-range` property, they are applied to the timeline triggers in the order in which the {{cssxref("timeline-trigger-name")}}s appear. When the number of triggers and `timeline-trigger-active-range` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range` value is set, the `timeline-trigger-active-range` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-active-range` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-active-range` value set. And so on.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range: cover, contain;
```

In this case, `--my-trigger` will use the `cover` range and `--my-other-trigger` will use the `contain` range. As there are three names but only two ranges, the ranges are cycled, so the third trigger name, `--another-trigger`, will use the `cover` range.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Active range demonstration

In this example, we demonstrate the effect of defining a `timeline-trigger-active-range` on a trigger.

#### HTML

Our markup contains two {{htmlelement("div")}} elements — one to animate and one to create a trigger on — an [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) that we will use to toggle the active range on and off, and some basic text content to cause the page to scroll.

We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

<form>
  <label for="active-checkbox">Activate active range?</label>
  <input type="checkbox" checked id="active-checkbox" />
</form>

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

<form>
  <label for="active-checkbox">Activate active range?</label>
  <input type="checkbox" checked id="active-checkbox" />
</form>

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

form {
  position: fixed;
  padding: 5px;
  background: white;
  border: 2px solid black;
  bottom: 0;
  right: 0;
}
```

```css live-sample___basic-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation that we will apply later:

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

The `.animated` `<div>` has the `rotate` `animation` applied. We the set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t`; we also specify two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
div.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` `<div>` element creates a trigger for the animated `<div>` using:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A `timeline-trigger-activation-range` of `entry` — on its own, this means that the trigger will activate when the tracked element starts to enter the scrollport via the scrollport's end edge and deactivate when the tracked element has completely entered the scrollport.

```css live-sample___basic-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry;
}
```

Now we use a combination of the {{cssxref(":has()")}} and {{cssxref(":checked")}} pseudo-classes to select the tracked element only when the checkbox is checked. The `<form>` element appears right after the `.trigger` `<div>` as a direct sibling, hence using the `+` combinator in the selector that we are checking for. The result is that when the checkbox is unchecked, the trigger deactivates as soon as the tracked element leaves the `entry` range, but when it is checked (as it is by default), the `timeline-trigger-active-range` property is applied, and the trigger won't deactivate until the tracked element leaves the `cover` range.

```css live-sample___basic-example
div.trigger:has(+ form input:checked) {
  timeline-trigger-active-range: cover;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range: cover) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range property.";
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

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. Initially the animation will start when the tracked `<div>` enters the scrollport end edge, but won't pause until the trigger has completely exited the scrollport again. Note however that when you scroll back down, the animation will not start until the tracked `<div>` starts to exit the scrollport end edge — it has to reach the activation range (`entry`) to activate once more.

Now uncheck the checkbox and try scrolling the content up again. Without the active range set, the animation will start when the tracked element starts to enter the scrollport's end edge and then pause as soon as it has completely entered the scrollport. When you scroll it down, the effect happens in reverse — the animation starts when the tracked element starts to exit the scrollport's end edge and then pause as soon as it has completely exited the scrollport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-active-range-end")}}, {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
