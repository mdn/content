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

The **`timeline-trigger-activation-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies the start and end of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's activation range.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range-end")}}

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range: normal;

/* Range start only */
/* Offset only */
timeline-trigger-activation-range: 40%;
timeline-trigger-activation-range: 200px;
/* Named timeline only */
timeline-trigger-activation-range: contain;
timeline-trigger-activation-range: entry;
/* Named timeline and offset value */
timeline-trigger-activation-range: exit 50%;
timeline-trigger-activation-range: contain 150px;

/* Range start and end */
timeline-trigger-activation-range: 20% 80%;
timeline-trigger-activation-range: entry exit;
timeline-trigger-activation-range: normal 20%;
timeline-trigger-activation-range: 20% normal;
/* Offset on start only */
timeline-trigger-activation-range: entry 10% 90%;
/* Offset on end only */
timeline-trigger-activation-range: 200px exit 300px;
/* Named timeline and offset for both start and end */
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

This property is specified as a comma-separated list of animation ranges. Each animation range is specified as a {{cssxref("timeline-trigger-activation-range-start")}} value and, optionally, a {{cssxref("timeline-trigger-activation-range-end")}} value.

- `<'timeline-trigger-activation-range-start'>`
  - : The keyword `normal`, a {{cssxref("length-percentage")}}, a {{cssxref("timeline-range-name")}}, or a `<timeline-range-name>` followed by a `<length-percentage>`, representing the {{cssxref("timeline-trigger-activation-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : The keyword `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` followed by a `<length-percentage>`, representing the {{cssxref("timeline-trigger-activation-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

Percentages are relative to the length of the named timeline range if one is specified, or the timeline represented by `normal` if not.

## Description

The `timeline-trigger-activation-range` property can be used to explicitly specify the start or start and end of a trigger's activation range. The property sets both the {{cssxref("timeline-trigger-activation-range-start")}} and {{cssxref("timeline-trigger-activation-range-end")}} properties in one declaration, with each specified as a timeline range, offset, or both. Start and end offsets are both measured from the start of their ranges. If only the `timeline-trigger-activation-range-start` value is specified, the `timeline-trigger-activation-range-end` value defaults to `normal`, which is either `contain 100%` or `scroll 100%`, depending on the {{cssxref("timeline-trigger-source")}} value.

A trigger's activation range is the range along the associated scrollport within which a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger will activate. Activation occurs when the tracked element enters the _activation range_, and deactivation occurs when it leaves the _active range_.

The default value is `normal`, which sets the activation range to the default named range. The default named range depends on the {{cssxref("timeline-trigger-source")}}: it is equivalent to `cover` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) and `scroll` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines). The default offset values are `0%` for activation start and `100%` for activation end. Therefore, `normal` resolves to either `cover 0% cover 100%` or `scroll 0% scroll 100%`.

Other `timeline-trigger-activation-range` values can be used to set:

- Start and end offsets from the `normal` range
  - : A `<length>` or `<percentage>` value specifies an offset from the beginning of the `normal` timeline, which again defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover) for a `view()` progress timeline source, and [`scroll`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) for a `scroll()` progress timeline source. Negative values outset the start and end, resulting in a longer activation range. Positive values inset the start and end of the activation range, shortening it.
- Specific named ranges
  - : If a `<timeline-range-name>` values is set without including an offset, the offset defaults to `0%` for start and `100%` for end values. The named timeline ranges include `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, and `scroll`. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Offsets from specific named ranges
  - : When both a `<timeline-range-name>` and `<length>` or `<percentage>` value are specified for the start or end, the value is specified as a length or percentage offset from the start of the named range. Percentage values are relative to the full length of the named range specified. See [Setting insets using percentages](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

In each component of a `timeline-trigger-activation-range` value, the `<timeline-range-name>` value must come before the `<length>` or `<percentage>` offset. In the following example, you might think `timeline-trigger-activation-range-start` is set to `contain` and `timeline-trigger-activation-range-end` is set to `50%`, but that is not the case. Instead, `timeline-trigger-activation-range-start` is set to `contain 50%` while `timeline-trigger-activation-range-end` defaults to `normal`:

```css
timeline-trigger-activation-range: contain 50%;
```

To set `timeline-trigger-activation-range-start` to `contain` and `timeline-trigger-activation-range-end` to `50%`, explicitly set `0%`, which is the default start offset:

```css
timeline-trigger-activation-range: contain 0% 50%;
```

By default, the active range is the same as the activation range. To make the active range longer than the activation range, use the {{cssxref("timeline-trigger-active-range-start")}} and {{cssxref("timeline-trigger-active-range-end")}} properties, or the {{cssxref("timeline-trigger-active-range")}} shorthand. Making the active range longer than the activation range is useful when you want to trigger an animation in a small activation range but keep the trigger active over a larger range.

The `timeline-trigger-activation-range` property, along with the {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}} properties, can also be set using the {{cssxref("timeline-trigger")}} shorthand.

### Explicit and default values for `timeline-trigger-activation-range`

In terms of explicit and default values, `timeline-trigger-activation-range` works in exactly the same way as the {{cssxref("animation-range")}} property. See the following for more information:

- [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Specifying multiple ranges

When multiple values are specified in a comma-separated `timeline-trigger-activation-range` declaration, each value applies to a timeline trigger in the order in which the names appear in the {{cssxref("timeline-trigger-name")}} property. When the number of triggers and `timeline-trigger-activation-range` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values):

- If the number of `timeline-trigger-activation-range` values exceeds the number of `timeline-trigger-name` values, the excess range values are discarded.
- If the number of trigger names is greater than the number of ranges, the `timeline-trigger-activation-range` values are cycled until every `timeline-trigger-name` value has a `timeline-trigger-activation-range` value set.
- If multiple `timeline-trigger-name` values are set, but only one `timeline-trigger-activation-range` value is set, the `timeline-trigger-activation-range` will apply to all the `timeline-trigger-name`s.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we inset a scroll-triggered animation trigger's activation range by setting a custom `timeline-trigger-activation-range` value.

#### HTML

Our markup contains two {{htmlelement("div")}} elements—one to animate and one to create a trigger on—and some text content to make the page scroll. We have hidden the text content for brevity.

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

The `.animated` element's {{cssxref("position")}} is set to `fixed`, positioning it near the top-left of the scrollport so we can see when its animation starts and stops.

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
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation:

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

Using the {{cssxref("animation")}} shorthand, the `rotate` animation is applied to the `.animated` element. Without an associated trigger, the element would start animating when the page loads. The `animation-trigger` property makes it a triggered animation. The value references a `timeline-trigger-name` of `--t` and specifies two `<animation-action>` values — `play` and `pause` — which specify that the animation plays on activation and pauses on deactivation.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` element creates the `.animated` element's trigger via the following properties:

- A {{cssxref("timeline-trigger-name")}} with value `--t`, which is equal to the identifier referenced in the `.animated` element's `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} with value [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A `timeline-trigger-activation-range` of `entry 50% exit 50%`. The `entry` range spans from when the trigger element first starts entering the scrollport to when it has completely entered the scrollport, while the `exit` range spans from when the trigger element first starts leaving the scrollport to when it has completely left the scrollport. This value sets the trigger's activation range to start at `50%` through the `entry` range and end `50%` through the `exit` range.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

#### Result

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up and down. The animation starts playing when `50%` of the tracked `.trigger` element has entered the scrollport in either direction and pauses when `50%` of the trigger element has exited the scrollport at either edge.

### Comparing multiple range values

This example is identical to the previous example, except that it allows selecting different activation ranges to compare their effects.

The markup is the same as the previous example except we've added a {{htmlelement("select")}} element that can be used to change the `timeline-trigger-activation-range` value. When a new value is selected, it is applied to the trigger element using JavaScript. We have hidden the HTML and JavaScript for brevity.

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

The CSS is the same as for the previous example, except we've omitted the `timeline-trigger-activation-range` value. This means that until a range value is selected, the range will default to `normal`, which is `cover 0% cover 100%` in this case.

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
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}

.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

```css hidden live-sample___basic-example live-sample___compare-multiple-values
@supports not (timeline-trigger-activation-range: entry 50% exit 50%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range property.";
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

{{EmbedLiveSample("compare-multiple-values", "100%", "240")}}

Select different range values then scroll the tracked element up and down the scrollport to see where the animated element starts and stops rotating.

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
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
