---
title: timeline-trigger-activation-range CSS property
short-title: timeline-trigger-activation-range
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's activation range.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range-end")}}

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range: normal;

/* Range start value only */
/* Single value */
timeline-trigger-activation-range: 40%;
timeline-trigger-activation-range: 200px;
timeline-trigger-activation-range: contain;
timeline-trigger-activation-range: entry;
/* Two values */
timeline-trigger-activation-range: exit 50%;
timeline-trigger-activation-range: contain 150px;

/* Range start and end values */
/* Two values */
timeline-trigger-activation-range: 20% 80%;
timeline-trigger-activation-range: entry exit;
timeline-trigger-activation-range: normal 20%;
timeline-trigger-activation-range: 20% normal;
/* Three values */
timeline-trigger-activation-range: contain contain 40%;
timeline-trigger-activation-range: 200px exit 300px;
timeline-trigger-activation-range: entry 10% 90%;
/* Four values */
timeline-trigger-activation-range: entry 0% exit 50%;
timeline-trigger-activation-range: contain 100px contain 90%;

/* Multiple ranges */
timeline-trigger-activation-range:
  contain,
  entry 0% exit 50%;

/* Global values */
timeline-trigger-activation-range: inherit;
timeline-trigger-activation-range: initial;
timeline-trigger-activation-range: revert;
timeline-trigger-activation-range: revert-layer;
timeline-trigger-activation-range: unset;
```

### Values

Specified as one or more single animation ranges, separated by commas. Each animation range is specified as a {{cssxref("timeline-trigger-activation-range-start")}} value, and optionally, a {{cssxref("timeline-trigger-activation-range-end")}} value.

- `<'timeline-trigger-activation-range-start'>`
  - : The keyword `normal`, a {{cssxref("length-percentage")}}, a {{cssxref("timeline-range-name")}}, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-activation-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-activation-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

Percentages are relative to the length of the named timeline range if one is specified, or the timeline represented by `normal` if not.

## Description

The `timeline-trigger-activation-range` property can be used to set a custom **activation range** for a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger. The activation range is the range between the scrolling offset at which the trigger is activated, and the scrolling offset at which the trigger is deactivated.

For example:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 0% exit 50%;
}
```

Here we set a `timeline-trigger-activation-range` value of `entry 100% exit 50%`, which sets the start of the activation range to `100%` of the way through the `entry` range and the end of the activation range to `50%` of the way through the `exit` range. The result is that any animation using this trigger will start when the tracked element has completely entered the scrollport, and deactivate when `50%` of the tracked element has left the scrollport.

> [!NOTE]
> The `timeline-trigger-activation-range` property can also be set via the {{cssxref("timeline-trigger")}} shorthand property.

> [!NOTE]
> It is possible for the animated element and the element that creates the trigger to be the same element.

Optionally, you can also set a longer **active range**, which is the range in which the trigger stays active before it deactivates, using the {{cssxref("timeline-trigger-active-range")}} shorthand property or its longhands.

### `timeline-trigger-activation-range` value explanation

In terms of explicit and default values, `timeline-trigger-activation-range` works in exactly the same way as the {{cssxref("animation-range")}} property. In this section we will provide a brief explanation and then link to the appropriate sections on that page for more details.

If two values are specified as components of the `timeline-trigger-activation-range` property, they will be interpreted in the order `timeline-trigger-activation-range-start` then `timeline-trigger-activation-range-end`.

The activation range's default value is `normal`, which is equivalent to `cover 0% cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `0% 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.

See [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values) for more information.

When defining a `timeline-trigger-activation-range-start` value explicitly and letting the `timeline-trigger-activation-range-end` value adopt a default value, what the default value is depends on the supplied start value, and the rules to determine this are complex. Read [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end) for more details.

### Specifying multiple ranges

When you specify multiple comma-separated values on a single `timeline-trigger-activation-range` property, they are applied to the timeline triggers in the order in which the {{cssxref("timeline-trigger-name")}}s appear. When the number of triggers and `timeline-trigger-activation-range-start` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range` value is set, the `timeline-trigger-activation-range` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-activation-range` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-activation-range` value set. And so on.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range:
  contain,
  entry 0% exit 50%;
```

In this case, `--my-trigger` will use the `contain` range and `--my-other-trigger` will use the `entry 0% exit 50%` range. As there are three names but only two range ends, the range ends are cycled, so the third trigger name, `--another-trigger`, will use the `contain` range end.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we inset a scroll-triggered animation trigger's activation range by setting a custom `timeline-trigger-activation-range` value.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example live-sample___compare-multiple-values
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

```css hidden live-sample___basic-example live-sample___compare-multiple-values
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

```css live-sample___basic-example live-sample___compare-multiple-values
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation that we will apply later:

```css live-sample___basic-example live-sample___compare-multiple-values
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

The `.trigger` `<div>` element creates a trigger for the animated `<div>` using:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A `timeline-trigger-activation-range` of `entry 50% exit 50%`, which sets the trigger's activation range to a range between `50%` through the `entry` range (when `50%` of the tracked element has entered the scrollport via the scrollport's end edge) and `50%` through the `exit` range (when `50%` of the tracked element has exited the scrollport via the scrollport's start edge).

```css live-sample___basic-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up and down. In either direction, the animation plays when `50%` of the tracked `<div>` has entered the scrollport and pauses when `50%` of it has exited the scrollport at the opposite edge.

### Comparing multiple range values

This example is identical to the previous example, except that it allows you to select different activation ranges and then compare their effects.

#### HTML

The markup is identical to the previous example except that it includes a {{htmlelement("select")}} element that can be used to select different `timeline-trigger-activation-range` values. When a new value is selected, it is applied to the trigger using JavaScript.

We have hidden the HTML and JavaScript for brevity.

```html hidden live-sample___compare-multiple-values
<form>
  <label for="range-select">Select activation range</label>
  <select id="range-select">
    <optgroup label="Start value">
      <option>40%</option>
      <option>200px</option>
      <option>contain</option>
      <option selected>cover</option>
      <option>entry</option>
      <option>exit 50%</option>
      <option>contain 150px</option>
    </optgroup>
    <optgroup label="Start and end value">
      <option>20% 80%</option>
      <option>entry exit</option>
      <option>normal 20%</option>
      <option>20% normal</option>
      <option>contain contain 40%</option>
      <option>200px exit 300px</option>
      <option>entry 10% 90%</option>
      <option>entry 0% exit 50%</option>
      <option>contain 100px contain 90%</option>
    </optgroup>
  </select>
</form>
```

```js hidden live-sample___compare-multiple-values
const selectElem = document.querySelector("select");
const triggerElem = document.querySelector(".trigger");

selectElem.addEventListener("change", () => {
  triggerElem.style.timelineTriggerActivationRange = selectElem.value;
});
```

#### CSS

The CSS is the same as for the previous example, except that this time, we don't set a `timeline-trigger-activation-range` value on the trigger in CSS, meaning that by default, before a new value is selected via the `<select>` element, the range will be `cover`.

```css hidden live-sample___compare-multiple-values
form {
  width: 250px;
  padding: 5px;
  border: 2px solid black;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
}

label,
select {
  font-size: 1rem;
}

select {
  padding: 5px;
  margin-top: 5px;
  width: 100%;
}
```

```css live-sample___compare-multiple-values
div.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}

div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

```css hidden live-sample___basic-example live-sample___compare-multiple-values
@supports not (timeline-trigger-activation-range: entry 50% exit 50%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range property.";
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

{{EmbedLiveSample("compare-multiple-values", "100%", "240")}}

Try selecting different range values from the `<select>` dropdown and then for each one scrolling the tracked element up through the scrollport to see where the animated element starts and stops rotating. This will give you an idea of each activation range's effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
