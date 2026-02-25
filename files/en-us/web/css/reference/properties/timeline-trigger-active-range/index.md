---
title: timeline-trigger-active-range
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-active-range
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-active-range`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) specifies a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger's active range.

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

The `timeline-trigger-active-range` shorthand property is specified as one or more single animation ranges, separated by commas. Each animation range is specified as a {{cssxref("timeline-trigger-active-range-start")}} value, and optionally, a {{cssxref("timeline-trigger-active-range-end")}} value.

Each longhand property value is specified as one of:

- A {{cssxref("timeline-range-name")}} value.
- A {{cssxref("length-percentage")}} value.
- The keyword `normal`.
- The keyword `auto`.
- A `<timeline-range-name>` followed by a `<length-percentage>` value.

### Values

- `<'timeline-trigger-active-range-start'>`
  - : The keyword `normal`, the keyword `auto`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-start")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `0%`.
- `<'timeline-trigger-active-range-end'>`
  - : The keyword `normal`, the keyword `auto`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` `<length-percentage>` pair, representing the {{cssxref("timeline-trigger-active-range-end")}}. If a `<timeline-range-name>` is set without a `<length-percentage>`, the `<length-percentage>` defaults to `100%`.

## Description

The `timeline-trigger-active-range` property can be used to set a custom **active range** for a [CSS scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations). The active range is the range within which the trigger can stay to keep the animated element's animation active, after the animation has been activated by the trigger entering the **activation range**.

This is useful in situations where you want an animation to be triggered in a small activation range, but then you want the animation to stay active within a larger range. The animation will only deactivate when the trigger leaves the active range.

The active range's default value is `auto`, which sets the active range to the same as the activation range. The activation range's default value is `cover`. This means that the animation activates when the start edge of the trigger enters the end edge of the viewport, and deactivates when the end edge of the trigger has exited either edge of the viewport. The animation will also stay active over this same range.

The ranges can be changed by setting different `timeline-trigger-activation-range` and `timeline-trigger-active-range` values.

For example:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry;
  timeline-trigger-active-range: cover;
}
```

An element with these declarations set will have an identifying {{cssxref("timeline-trigger-name")}} of `--my-trigger`, and a {{cssxref("timeline-trigger-source")}} value of `view()`, which selects the element's nearest ancestor scrolling element to define the timeline along which the activation range is measured.

We also set a `timeline-trigger-activation-range` value of `entry` and a `timeline-trigger-active-range` of `cover`. This means that the animated element's animation will activate when the trigger element enters the `entry` range — the range between which the trigger's start edge and end edge scroll into the viewport. However, once activated, the animation will stay active as long as the trigger stays inside the `cover` range — it will only deactivate again once the trigger has completely left the viewport.

> [!NOTE]
> The active range is designed to be a superset of the activation range — you activate the animation over a certain range, and then have it staying active over a larger range. If you set the `timeline-trigger-active-range` to a smaller range than the `timeline-trigger-activation-range`, it doesn't invalidate your CSS, but the `timeline-trigger-active-range` property has no effect.

An animated element can set itself up to be triggered by the previously-described trigger element by referencing the trigger's identifying name in its {{cssxref("animation-trigger")}} property.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}
```

In this case, the animation will be triggered by the trigger element with the `timeline-trigger-name` of `--my-trigger`. Its {{cssxref("animation-action")}} keywords — `play-forwards play-backwards` — specify that the animation should play forwards on activation, and backwards on deactivation.

> [!NOTE]
> The `timeline-trigger-active-range` property can also be set via the {{cssxref("timeline-trigger")}} shorthand property.

> [!NOTE]
> It is possible for the animated element and the trigger element to be the same element.

### `timeline-trigger-active-range` value explanation

In terms of explicit and default values, `timeline-trigger-active-range` works in a very similar way to the {{cssxref("animation-range")}} property. In this section we will provide a brief explanation and then link to the appropriate sections on that page for more details.

If two values are specified as components of the `timeline-trigger-active-range` property, they will be interpreted in the order `timeline-trigger-active-range-start` then `timeline-trigger-active-range-end`.

The value of each component can be one of the following:

- The keyword `normal`, which is equivalent to `0%` for start and `100%` for end.
- A `<length-percentage>`, which sets a specific length or percentage through the default `cover` range.
- A {{cssxref("timeline-range-name")}}, which sets a different timeline range with an implicit percentage of `0%` for start and `100%` for end.
- A `<timeline-range-name>` followed by a `<length-percentage>`, which sets a specific percentage through a different timeline range. These values are space-separated.

See [Explicitly defining both range start and range end with two values](/en-US/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values) for more information.

> [!NOTE]
> Unlike `animation-range`, `timeline-trigger-active-range` also has a special value available, `auto`, which sets it to the same range as the `timeline-trigger-activation-range`. This is the default value.

When defining a `timeline-trigger-active-range-start` value explicitly and letting the `timeline-trigger-active-range-end` value adopt a default value, what the default value is depends on the supplied start value, and the rules to determine this are complex. Read [Defining range start and defaulting range end](/en-US/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end) for more details.

### Specifying multiple ranges

When multiple ranges are specified in a single `timeline-trigger-active-range` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range` value is set, the `timeline-trigger-active-range` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-active-range` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-active-range` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range: cover, contain;
```

In this case, the first name will use the `cover` range, and the second name will use the `contain` range. The third name will cycle back to using the `cover` range again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Active range demonstration

In this example, we demonstrate the effect of setting a `timeline-trigger-active-range` on a trigger element.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, an [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) that we will use to toggle the active range on and off, and some basic text content to cause the page to scroll.

We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I am the trigger</div>

<form>
  <label for="active-checkbox">Deactivate active range?</label>
  <input type="checkbox" checked id="active-checkbox" />
</form>

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

<form>
  <label for="active-checkbox">Deactivate active range?</label>
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

The animated {{htmlelement("div")}} element has an `animation` applied that rotates it. We set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t`; we also specify two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

The trigger `<div>` element is defined as the animated `<div>`'s trigger using a {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together. It also includes a {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the element providing the view progress timeline as the nearest scrolling ancestor element.

Finally for this rule, we specify a `timeline-trigger-activation-range` of `entry` — on its own, this means that the animation will activate when the trigger element starts to enter the viewport and deactivate when the trigger element has completely entered the viewport.

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

form {
  position: fixed;
  padding: 5px;
  background: white;
  border: 2px solid black;
  bottom: 0;
  right: 0;
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
  timeline-trigger-activation-range: entry;
}
```

Now we use a combination of the {{cssxref(":has()")}} and {{cssxref(":checked")}} pseudo-classes to select the trigger element only when the checkbox is checked. The `<form>` element appears right after the trigger `<div>` as a direct sibling, hence using the `+` combinator in the selector that we are checking for. The result is that when the checkbox is unchecked, the animation deactivates as soon as the trigger leaves the `entry` range, but when it is checked (as it is by default), the `timeline-trigger-active-range` property is applied, and the animation won't deactivate until the trigger leaves the `cover` range.

```css live-sample___basic-example
div.trigger:has(+ form input:checked) {
  timeline-trigger-active-range: cover;
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

Try scrolling the content. Initially the rotation will start when the trigger enters the viewport, but won't stop until the trigger has completely exited the viewport again. Now uncheck the checkbox and try scrolling the content again. Without the active range set, the rotation will start when the trigger enters the viewport and then stop as soon as it has completely entered the viewport.

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
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
