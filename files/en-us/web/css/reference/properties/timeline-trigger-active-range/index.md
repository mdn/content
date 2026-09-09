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

This property is specified as one or more single animation ranges, separated by commas. Each animation range is specified as a {{cssxref("timeline-trigger-active-range-start")}} value, and optionally, a {{cssxref("timeline-trigger-active-range-end")}} value.

- `<'timeline-trigger-active-range-start'>`
  - : The keyword `normal`, the keyword `auto`, a {{cssxref("length-percentage")}}, a {{cssxref("timeline-range-name")}}, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-active-range-end'>`
  - : The keyword `normal`, the keyword `auto`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

Percentages are relative to the length of the named timeline range if one is specified, or the timeline represented by `normal` if not.

## Description

The `timeline-trigger-active-range` property can be used to explicitly specify the start or start and end of a trigger's active range, which means the timeline range along the associated scrollport within which a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger will stay active once activated. The start and end values can be specified as a timeline range, offset, or both.

This is useful in situations where you want an animation to be triggered in a small activation range, but then you want the trigger to stay active within a larger range. The trigger will only deactivate when the tracked element leaves the active range.

The default value is `auto`, which sets the `timeline-trigger-active-range` value to the same as the {{cssxref("timeline-trigger-activation-range")}}.

A value of `normal` sets the active range to the default named range. The default named range depends on the {{cssxref("timeline-trigger-source")}}: it is equivalent to `cover` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) and `scroll` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines). The default offset values are `0% 100%`. Therefore, `normal` resolves to either `cover 0% cover 100%` or `scroll 0% scroll 100%`.

The `timeline-trigger-active-range` property can be used to set:

- Start and end offsets from the `normal` range
  - : `<length>` or `<percentage>` values specify offsets from the beginning of the `normal` timeline, which again defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover) for a view progress timeline source, and [`scroll`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) for a scroll progress timeline source. Negative values outset the start and end, resulting in a longer active range. Positive values inset the start and end of the active range, making it shorter.
- Specific named ranges
  - : `<timeline-range-name>` values specify `0%` (for start) and `100%` (for end) offsets along the named timeline ranges, which can be `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll`. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Offset from specific named ranges
  - : When both a `<timeline-range-name>` and `<length>` or `<percentage>` value are specified for the start and end values, they are offset by the distances specified the named ranges. Percentage values are relative to the range specified. See [Setting insets using percentages](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages)

The `timeline-trigger-active-range` property, along with the {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-activation-range")}} properties, can also be set using the {{cssxref("timeline-trigger")}} shorthand.

### `timeline-trigger-active-range` explicit and default values

In terms of explicit and default values, `timeline-trigger-active-range` works in exactly the same way as the {{cssxref("animation-range")}} property. See the following for more information:

- [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Specifying multiple ranges

When you specify multiple comma-separated values in a single `timeline-trigger-active-range` declaration, they apply to the timeline triggers in the order in which they appear in the {{cssxref("timeline-trigger-name")}} property. When the number of triggers and `timeline-trigger-active-range` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range` value is set, the `timeline-trigger-active-range` will apply to all the `timeline-trigger-name`s. If two or more `timeline-trigger-active-range` values are set, they will cycle between the `timeline-trigger-name`s until every timeline trigger has a `timeline-trigger-active-range` value set.

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
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation:

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

Using the {{cssxref("animation")}} shorthand, the `rotate` animation is applied to the `.animated` element. Without an associated trigger, the element would start animating when the page loads. The `animation-trigger` property makes it a triggered animation. The value references a `timeline-trigger-name` of `--t` and specifies two `<animation-action>` values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` element creates the `.animated` element's trigger via the following properties:

- A {{cssxref("timeline-trigger-name")}} with value `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} with value [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A `timeline-trigger-activation-range` of `entry` — on its own, this means that the trigger will activate when the tracked element starts to enter the scrollport via the scrollport's end edge and deactivate when the tracked element has completely entered the scrollport.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry;
}
```

Now we use a combination of the {{cssxref(":has()")}} and {{cssxref(":checked")}} pseudo-classes to select the tracked element only when the checkbox is checked. The `<form>` element appears right after the `.trigger` `<div>` as a direct sibling, hence using the `+` combinator in the selector that we are checking for. The result is that when the checkbox is unchecked, the trigger deactivates as soon as the tracked element leaves the `entry` range, but when it is checked (as it is by default), the `timeline-trigger-active-range` property is applied, and the trigger won't deactivate until the tracked element leaves the `cover` range.

```css live-sample___basic-example
.trigger:has(+ form input:checked) {
  timeline-trigger-active-range: cover;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range: cover) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range property.";
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

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. Initially the animation will start playing when the tracked `.trigger` element enters the scrollport end edge, but won't pause until the trigger element has completely exited the scrollport again. Note however that when you scroll back down, the animation will not start playing until the trigger element starts to exit the scrollport end edge — it has to reach the activation range (`entry`) to activate once more.

Now uncheck the checkbox and try scrolling the content up again. Without the active range set, the animation will start playing when the trigger element starts to enter the scrollport's end edge and then pause as soon as it has completely entered the scrollport. When you scroll it down, the effect reverses — the animation starts playing when the trigger element starts to exit the scrollport's end edge and then pause as soon as it has completely exited the scrollport.

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
