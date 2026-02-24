---
title: timeline-trigger-activation-range
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger's activation range.

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

The `timeline-trigger-activation-range` shorthand property is specified as one or more single animation ranges, separated by commas. Each animation range is specified as a {{cssxref("timeline-trigger-activation-range-start")}} value, and optionally, a {{cssxref("timeline-trigger-activation-range-end")}} value.

Each longhand property value is specified as one of:

- A {{cssxref("timeline-range-name")}} value.
- A {{cssxref("length-percentage")}} value.
- The keyword `normal`.
- A `<timeline-range-name>` followed by a `<length-percentage>` value.

### Values

- `<'timeline-trigger-activation-range-start'>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-activation-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-activation-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.

## Description

[CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) allow you specify that [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) applied to an element should be activated when a corresponding trigger element reaches a certain offset inside the viewport. In other words, an animation should play when its trigger element is scrolled into view, rather than immediately when it is applied to an element.

The trigger is given an identifying name using the {{cssxref("timeline-trigger-name")}} property. An animated element can reference a trigger's `timeline-trigger-name` inside its {{cssxref("animation-trigger")}} property value to have its animations triggered by that trigger.

The range in which a scroll-triggered animation should be triggered (activated and deactivated) is called the **activation range**. The activation range needs to be measured against a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), which is a representation of a scrollport inside which the trigger element can scroll. The timeline is specified using the {{cssxref("timeline-trigger-source")}} property.

When the trigger is scrolled inside the scrollport so that it reaches the start of the activation range, it will activate. When it scrolls to the end of the activation range, it will deactivate. Exactly what happens to the animated element on activation and deactivation is specified by the {{cssxref("animation-action")}} values specified in the animated element's `animation-trigger` property value.

By default, the activation range along the timeline is `cover` — the animation activates as soon as the start edge of the trigger element enters the end edge of the viewport, and deactivates when the end edge of the trigger has exited either edge of the viewport. Consult the {{cssxref("timeline-range-name")}} reference page to see what other range settings are available. A scroll-triggered animation trigger's activation range is set via the `timeline-trigger-activation-range` shorthand property or its longhands — {{cssxref("timeline-trigger-activation-range-start")}} and {{cssxref("timeline-trigger-activation-range-end")}}.

Optionally, you can also set a longer **active range**, which is the range in which the animation stays active before it deactivates, using the {{cssxref("timeline-trigger-active-range")}} shorthand property or its longhands.

> [!NOTE]
> The `timeline-trigger-activation-range` property can also be specified as part of the {{cssxref("timeline-trigger")}} shorthand property.

### Explicit and default `timeline-trigger-activation-range` values

In terms of explicit and default values, `timeline-trigger-activation-range` works in exactly the same way as the {{cssxref("animation-range")}} property. In this section we will provide a brief explanation and then link to the appropriate sections on that page for more details.

If two values are specified as components of the `timeline-trigger-activation-range` property, they will be interpreted in the order `timeline-trigger-activation-range-start` then `timeline-trigger-activation-range-end`. The value of each component is either the keyword `normal`, a `<length-percentage>`, or a `<timeline-range-name>` optionally followed by a `<length-percentage>`. These values are space-separated. `normal` is equivalent to `0%` for start and `100%` for end. Setting `normal` with a `<length-percentage>` for either the start or end range is invalid. See [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values) for more information.

When defining a `timeline-trigger-activation-range-start` value explicitly and letting the `timeline-trigger-activation-range-end` value adopt a default value, what the default value is depends on the supplied start value, and the rules to determine this are complex. Read [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end) for more details.

### Specifying multiple ranges

When multiple ranges are specified in a single `timeline-trigger-activation-range` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range` value is set, the `timeline-trigger-activation-range` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-activation-range` values are set, they will cycle between the `timeline-trigger-name`s until all of them have an `timeline-trigger-activation-range` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range:
  contain,
  entry 0% exit 50%;
```

In this case, the first name will use the `contain` range, and the second name will use the `entry 0% exit 50%` range. The third name will cycle back to using the `contain` range again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that uses a custom timeline range.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I am the trigger</div>

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

The trigger `<div>` element is defined as the animated `<div>`'s trigger using a {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together. It also includes a {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the element providing the view progress timeline as the nearest scrolling ancestor element.

Finally for this rule, we specify a `timeline-trigger-activation-range` of `entry 50% exit 50%`, which sets the trigger's activation range to a range between 50% through the `entry` range (when 50% of the trigger element has entered the viewport) and 50% through the `exit` range (when 50% of the trigger element has exited the viewport).

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
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

Next, we give the animated `<div>` a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the viewport so that we can easily see when its animation starts and stops.

```css live-sample___basic-example live-sample___compare-multiple-values
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Finally, we define the {{cssxref("@keyframes")}} for the `rotate` animation:

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

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. When 50% of the trigger `<div>` has entered the viewport, the animation will play; when the 50% of the trigger has exited the viewport at either edge, the animation will pause.

### Comparing multiple range values

This example is identical to the previous example, except that it allows you to select different activation ranges and then compare their effects.

#### HTML

The markup is identical to the previous example except that it includes a {{htmlelement("select")}} element that can be used to select different `timeline-trigger-activation-range` values. When a new value is selected, it is applied to the trigger element using JavaScript.

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
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play pause;
}

div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("compare-multiple-values", "100%", "240")}}

Try selecting different range values from the `<select>` dropdown and then for each one scrolling the trigger element up through the viewport to see where the animated element starts and stops rotating. This will give you an idea of the activation range created by each one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
