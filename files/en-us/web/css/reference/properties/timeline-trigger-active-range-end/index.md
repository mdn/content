---
title: timeline-trigger-active-range-end CSS property
short-title: timeline-trigger-active-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-active-range-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-active-range-end`** [CSS](/en-US/docs/Web/CSS) property specifies the end of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's active range.

## Syntax

```css
/* Keyword */
timeline-trigger-active-range-end: auto;
timeline-trigger-active-range-end: normal;

/* <length-percentage> */
timeline-trigger-active-range-end: 80%;
timeline-trigger-active-range-end: 400px;

/* Named timeline range */
timeline-trigger-active-range-end: contain;
timeline-trigger-active-range-end: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-active-range-end: entry 100%;
timeline-trigger-active-range-end: contain 600px;

/* Multiple range end values */
timeline-trigger-active-range-end: contain, exit;

/* Global values */
timeline-trigger-active-range-end: inherit;
timeline-trigger-active-range-end: initial;
timeline-trigger-active-range-end: revert;
timeline-trigger-active-range-end: revert-layer;
timeline-trigger-active-range-end: unset;
```

### Values

This property is specified as a comma-separated list of the following values:

- `auto`
  - : Specifies the value of the {{cssxref("timeline-trigger-activation-range-end")}} property. This is the default value.
- `normal`
  - : Specifies the end, or `100%`, of the `normal` range. Equivalent to `cover 100%` for a [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) {{cssxref("timeline-trigger-source")}}, and `scroll 100%` for a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `timeline-trigger-source`.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the `normal` timeline. Percentages are relative to the length of the [`normal`](#normal) timeline range.
- {{cssxref("timeline-range-name")}}
  - : Specifies the end, or `100%`, of the `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll` timeline range.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range. Percentages are relative to the length of the named range.

## Description

The `timeline-trigger-active-range-end` property can be used to explicitly specify the end of a trigger's [active range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) that is equal to or further along the timeline than the end of the trigger's activation range.

The _active range_ is the range within which a trigger will remain activated once activation has occurred. By default, the active range ends where there activation range ends; with deactivation occurring when the tracked element leaves the activation range. This property creates a buffer zone, and is used to prevent premature resetting when a user scrolls back and forth across the activation's endpoint. Only when a tracked element moves out of the active range does the trigger become inactive.

The default value is `auto`, which sets the value to the same named range and offset as the {{cssxref("timeline-trigger-activation-range-end")}}. When specified as a timeline range, offset, or both, this property sets the end of the active range to a point that is independent from the `timeline-trigger-activation-range-end` value.

The value of `normal` sets the end of the active range to the end of the default named range, resolving to either `cover 0%` or `scroll 0%`.

Other values of the `timeline-trigger-active-range-end` property can be used to set:

- An offset from the `normal` range
  - : A `<length>` or `<percentage>` value specifies an offset from the beginning of the `normal` timeline, which again defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover) for a view progress timeline source, and [`scroll`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) for a scroll progress timeline source. Negative values outset the end, resulting in a longer active range. Positive values inset the end of the active range, making it shorter.
- The end of a specific named range
  - : A `<timeline-range-name>` value specifies a `100%` offset along the named timeline range, which is `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing`, or `scroll`. See [Understanding timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- An offset from a specific named range
  - : When both a `<timeline-range-name>` and `<length>` or `<percentage>` value are specified, the end is offset by the distance specified from the start of the named range. Percentage values are relative to the range specified. See [Setting insets using percentages](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages)

If the value is set to a point prior the the end of the activation range, the value of the `timeline-trigger-activation-range-end` is used, as if the value were set to `auto`.

The `timeline-trigger-active-range-end` property, along with the {{cssxref("timeline-trigger-active-range-start")}} property, can also be set using the {{cssxref("timeline-trigger-active-range")}} shorthand, which in turn can be set using the {{cssxref("timeline-trigger")}} shorthand.

### Specifying multiple range end values

When you specify multiple comma-separated values in a single `timeline-trigger-active-range-end` declaration, they apply to the timeline triggers in the order in which they appear in the {{cssxref("timeline-trigger-name")}} property. When the number of triggers and `timeline-trigger-active-range-end` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range-end` value is set, the `timeline-trigger-active-range-end` will apply to all the `timeline-trigger-name`s. If two or more `timeline-trigger-active-range-end` values are set, they will cycle between the `timeline-trigger-name`s until every timeline trigger has a `timeline-trigger-active-range-end` value set.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-end: contain, exit;
```

In this case, `--my-trigger` will use the `contain` range end and `--my-other-trigger` will use the `exit` range end. As there are three names but only two range ends, the range ends are cycled, so the third trigger name, `--another-trigger`, will use the `contain` range end.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we demonstrate the effect of extending a trigger's active range by creating two identical triggered animations, and insetting the end of one of the scroll-triggered animation trigger's active range with the with the `timeline-trigger-active-range-end` property.

#### HTML

Our markup contains four {{htmlelement("div")}} elements — two to animate and two to create a trigger on — plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>

...
<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
...
```

```html hidden live-sample___basic-example
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>
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

<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
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

The `.animated` elements' {{cssxref("position")}} is set to `fixed`, positioning them near the top-left of the scrollport to enable us to see when their animations start and stop.

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
.animated.longer {
  left: 150px;
}
section {
  display: flex;
  gap: 20px;
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

Using the {{cssxref("animation")}} shorthand, the `rotate` animation is applied to the `.animated` elements. Without an associated trigger, the elements would start animating when the page loads. The `animation-trigger` property makes it a triggered animation. The values references a `timeline-trigger-name` of `--t` and `--longerT`, respectively, and define two `<animation-action>` values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longerT play pause;
}
```

The `.trigger` element creates the `.animated` element's trigger via the following properties:

- A {{cssxref("timeline-trigger-name")}} with value `--t`, which is equal to the identifier referenced in the `.animated` element's `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} with value [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range-end")}} of `contain 50%`. The `contain` range spans from when the trigger element has completely entered the viewport to when it starts to leave. This value sets the trigger's activation range to end `50%` through it.

The `.trigger.longer` element creates the `.animated.longer` element's trigger via the following properties:

- A {{cssxref("timeline-trigger-name")}} with value `--longerT` (overriding the `--t`), which is equal to the identifier referenced in the `.animated.longer` element's `animation-trigger` property value, associating the two together.

- A `timeline-trigger-active-range-end` of `cover 100%`. The `cover` range spans from when the trigger element first starts to enter the viewport to when it has completely left it.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 50%;
}
.trigger.longer {
  timeline-trigger-name: --longerT;
  timeline-trigger-active-range-end: cover 100%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range-end: cover 100%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range-end property.";
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

Try scrolling the content up. Both animations start playing when the tracked `.trigger` elements first enter into. The animation of one element pauses when the trigger is at 50% of the `contain` timeline, which occurs when the triggers are vertically centered in the scrollport. The other element pauses only when the trigger has fully exited the viewport.

When you scroll downward again, after both animations have paused, the animations will both restart playing when the trigger elements reaches the `50%` point. This is because the active range extends how long the trigger remains active, but does not change where activation and deactivation occur.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-active-range")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
