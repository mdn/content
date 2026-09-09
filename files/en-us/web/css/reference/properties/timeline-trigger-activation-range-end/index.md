---
title: timeline-trigger-activation-range-end CSS property
short-title: timeline-trigger-activation-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range-end`** [CSS](/en-US/docs/Web/CSS) property specifies the end of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's activation range.

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range-end: normal;

/* <length-percentage> */
timeline-trigger-activation-range-end: 80%;
timeline-trigger-activation-range-end: 400px;

/* Named timeline range */
timeline-trigger-activation-range-end: contain;
timeline-trigger-activation-range-end: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-activation-range-end: entry 100%;
timeline-trigger-activation-range-end: contain 600px;

/* Multiple range end values */
timeline-trigger-activation-range-end:
  contain,
  entry 100%;

/* Global values */
timeline-trigger-activation-range-end: inherit;
timeline-trigger-activation-range-end: initial;
timeline-trigger-activation-range-end: revert;
timeline-trigger-activation-range-end: revert-layer;
timeline-trigger-activation-range-end: unset;
```

### Values

This property is specified either as `normal` or a comma-separated list of values:

- `normal`
  - : The default value. Equivalent to `cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `scroll 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.
- {{cssxref("length-percentage")}}
  - : Specifies a {{cssxref("length")}} or {{cssxref("percentage")}} value measured from the beginning of the `normal` timeline. Percentages are relative to the length of the `normal` timeline range.
- {{cssxref("timeline-range-name")}}
  - : Specifies the end (`100%`) of the `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll` timeline range.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range. Percentages are relative to the named timeline range length.

## Description

The `timeline-trigger-activation-range-end` property can be used to explicitly specify the end of a trigger's [activation range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) as a timeline range, offset, or both, when creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

The default named range depends on the {{cssxref("timeline-trigger-source")}}: it is equivalent to `cover` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) and `scroll` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines). The default offset is `100%`. Therefore, `normal` resolves to either `cover 100%` or `scroll 100%`.

The `timeline-trigger-activation-range-start` property can be used to set:

- An offset from the `normal` range
  - : A `<length>` or `<percentage>` value specifies an offset from the beginning of the `normal` timeline, which again defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover) for a view progress timeline source, and [`scroll`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) for a scroll progress timeline source. Negative values outset the end, resulting in a longer activation range. Positive values inset the end of the activation range, making it shorter.
- The end of a specific named range
  - : A `<timeline-range-name>` value specifies a `100%` offset along the named timeline range, which is `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll`. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- An offset from a specific named range
  - : When both a `<timeline-range-name>` and `<length>` or `<percentage>` value are specified, the end is offset by the distance specified from the start of the named range. Percentage values are relative to the range specified. See [Setting insets using percentages](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages)

The `timeline-trigger-activation-range-end` property, along with the {{cssxref("timeline-trigger-activation-range-start")}} property, can also be set using the {{cssxref("timeline-trigger-activation-range")}} shorthand, which in turn can be set using the {{cssxref("timeline-trigger")}} shorthand.

The `timeline-trigger-activation-range-end` value is also the default end of the trigger's active range; use the {{cssxref("timeline-trigger-active-range-end")}} property to set this value.

### Specifying multiple range end values

When you specify multiple comma-separated values in a single `timeline-trigger-activation-range-end` declaration, they apply to the timeline triggers in the order they appear in the {{cssxref("timeline-trigger-name")}} property. When the number of triggers and `timeline-trigger-activation-range-end` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range-end` value is set, the `timeline-trigger-activation-range-end` will apply to all the `timeline-trigger-name`s. If two or more `timeline-trigger-activation-range-end` values are set, they will cycle between the `timeline-trigger-name`s until every timeline trigger has a `timeline-trigger-activation-range-end` value set.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range-end:
  cover,
  entry 100%;
```

In this case, `--my-trigger` will use the `cover` range end and `--my-other-trigger` will use the `entry 100%` range end. As there are three names but only two range ends, the range ends are cycled, so the third trigger name, `--another-trigger`, will use the `cover` range end.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we inset the end of a scroll-triggered animation trigger's activation range by setting a custom `timeline-trigger-activation-range-end` value.

#### HTML

Our markup contains two {{htmlelement("div")}} elements — one to animate and one to create a trigger on — plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

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
- A `timeline-trigger-activation-range-end` of `contain 60%`. The `contain` range spans from when the trigger element has fully entered the scrollport to when it starts to leave. This value sets the trigger's activation range's start to `60%` through the `contain` range.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 60%;
}
```

When not explicitly set, the {{cssxref("timeline-trigger-activation-range-start")}} value defaults to `normal`, which in this case is `cover 0%`. This is the start of the `cover` range, meaning activation occurs when the tracked element starts to enter the scrollport's end edge.

```css hidden live-sample___basic-example
@supports not (timeline-trigger-activation-range-end: contain 60%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range-end property.";
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

Try scrolling the content up. The animation starts playing when the tracked `.trigger` element first becomes visible at the scrollport end edge and pauses when it has scrolled `60%` of the way up the timeline range. When you scroll down, the effect reverses — the animation restarts playing when the trigger element gets to `60%` of the way up, and pauses again when the trigger element reaches the end edge.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
