---
title: timeline-trigger-active-range-start CSS property
short-title: timeline-trigger-active-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-active-range-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-active-range-start`** [CSS](/en-US/docs/Web/CSS) property specifies the start of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's active range.

## Syntax

```css
/* Keyword */
timeline-trigger-active-range-start: auto;
timeline-trigger-active-range-start: normal;

/* <length-percentage> */
timeline-trigger-active-range-start: 10%;
timeline-trigger-active-range-start: 50px;

/* Named timeline range */
timeline-trigger-active-range-start: contain;
timeline-trigger-active-range-start: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-active-range-start: entry 5%;
timeline-trigger-active-range-start: contain 100px;

/* Multiple range start values */
timeline-trigger-active-range-start:
  contain,
  entry 5%;

/* Global values */
timeline-trigger-active-range-start: inherit;
timeline-trigger-active-range-start: initial;
timeline-trigger-active-range-start: revert;
timeline-trigger-active-range-start: revert-layer;
timeline-trigger-active-range-start: unset;
```

### Values

This property is specified either as `auto`, `normal`, or a comma-separated list of values:

- `auto`
  - : The `timeline-trigger-active-range-start` property is set to the same value as the {{cssxref("timeline-trigger-activation-range-start")}} property. This is the default value.
- `normal`
  - : Equivalent to `cover 0%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `scroll 0%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the `normal` timeline. Percentages are relative to the length of the `normal` timeline range.
- {{cssxref("timeline-range-name")}}
  - : Specifies the start (`0%`) of the `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll` timeline range.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range. Percentages are relative to the named timeline range length.

## Description

The `timeline-trigger-active-range-start` property can be used to explicitly specify the start of a trigger's [active range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) as a timeline range, offset, or both, when creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

The default value is `auto`, which sets the `timeline-trigger-active-range-start` value to the same as the {{cssxref("timeline-trigger-activation-range-start")}}.

A value of `normal` sets the start of the active range to the start of the default named range. The default named range depends on the {{cssxref("timeline-trigger-source")}}: it is equivalent to `cover` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) and `scroll` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines). The default offset is `0%`. Therefore, `normal` resolves to either `cover 0%` or `scroll 0%`.

The `timeline-trigger-active-range-start` property can be used to set:

- An offset from the `normal` range
  - : A `<length>` or `<percentage>` value specifies an offset from the beginning of the `normal` timeline, which again defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover) for a view progress timeline source, and [`scroll`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) for a scroll progress timeline source. Negative values outset the start, resulting in a longer active range. Positive values inset the start of the active range, making it shorter.
- The start of a specific named range
  - : A `<timeline-range-name>` value specifies a `0%` offset along the named timeline range, which is `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll`. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- An offset from a specific named range
  - : When both a `<timeline-range-name>` and `<length>` or `<percentage>` value are specified, the start is offset by the distance specified from the start of the named range. Percentage values are relative to the range specified. See [Setting insets using percentages](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages)

The `timeline-trigger-active-range-start` property, along with the {{cssxref("timeline-trigger-active-range-end")}} property, can also be set using the {{cssxref("timeline-trigger-active-range")}} shorthand, which in turn can be set using the {{cssxref("timeline-trigger")}} shorthand.

### Specifying multiple range start values

When you specify multiple comma-separated values in a single `timeline-trigger-active-range-start` declaration, they apply to the timeline triggers in the order in which they appear in the {{cssxref("timeline-trigger-name")}} property. When the number of triggers and `timeline-trigger-active-range-start` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range-start` value is set, the `timeline-trigger-active-range-start` will apply to all the `timeline-trigger-name`s. If two or more `timeline-trigger-active-range-start` values are set, they will cycle between the `timeline-trigger-name`s until every timeline trigger has a `timeline-trigger-active-range-start` value set.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-start:
  contain,
  entry 5%;
```

In this case, `--my-trigger` will use the `contain` range start and `--my-other-trigger` will use the `entry 5%` range start. As there are three names but only two range starts, the range starts are cycled, so the third trigger name, `--another-trigger`, will use the `contain` range start.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we inset the start of a scroll-triggered animation trigger's active range by setting a custom `timeline-trigger-active-range-start` value.

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
- A {{cssxref("timeline-trigger-activation-range")}} of `contain 30% contain 60%`. The `contain` range spans from when the trigger element has completely entered the viewport to when it starts to leave. This value sets the trigger's activation range to start at `30%` through the `contain` range and end `60%` through it, which is a narrow range.
- A `timeline-trigger-active-range-start` of `cover 0%`. The `cover` range spans from when the trigger element first starts to enter the viewport to when it has completely left it. When not explicitly set, the {{cssxref("timeline-trigger-active-range-end")}} value defaults to the {{cssxref("timeline-trigger-activation-range-end")}} value — `contain 60%` — so we end up with an overall {{cssxref("timeline-trigger-active-range")}} of `cover 0% contain 60%`.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 30% contain 60%;
  timeline-trigger-active-range-start: cover 0%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range-start: cover 0%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range-start property.";
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

Try scrolling the content up. The animation starts playing when the tracked `.trigger` element moves into the narrow activation range between `30%` and `60%` of the way through the timeline range. It will then pause as soon as the trigger element goes above the `60%` point.

When you scroll downwards again, the animation will start playing when the trigger element reaches the `60%` point; you can now scroll it completely off the bottom of the scrollport before the animation will pause again. This is because we extended the start of the active range, but not the end.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-active-range-end")}}
- {{cssxref("timeline-trigger-active-range")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
