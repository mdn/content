---
title: timeline-trigger-activation-range-start CSS property
short-title: timeline-trigger-activation-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range-start`** [CSS](/en-US/docs/Web/CSS) property specifies the start point of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's activation range.

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range-start: normal;

/* <length-percentage> */
timeline-trigger-activation-range-start: 20%;
timeline-trigger-activation-range-start: 350px;

/* Named timeline range */
timeline-trigger-activation-range-start: cover;
timeline-trigger-activation-range-start: exit;

/* Named timeline range plus offset */
timeline-trigger-activation-range-start: entry 40%;
timeline-trigger-activation-range-start: contain 200px;

/* Multiple range start values */
timeline-trigger-activation-range-start:
  contain,
  entry 50%;

/* Global values */
timeline-trigger-activation-range-start: inherit;
timeline-trigger-activation-range-start: initial;
timeline-trigger-activation-range-start: revert;
timeline-trigger-activation-range-start: revert-layer;
timeline-trigger-activation-range-start: unset;
```

The `timeline-trigger-activation-range-start` property is specified as one or more values, separated by commas.

### Values

- `normal`
  - : The default value. Equivalent to `cover 0%` for a [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) {{cssxref("timeline-trigger-source")}}, and `0%` for a [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) `timeline-trigger-source`.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

Percentages are relative to the length of the named timeline range if one is specified, or the entire timeline if not.

## Description

When creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations), the `timeline-trigger-activation-range-start` property can be used to explicitly define the start of the trigger's [activation range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description).

Allowed values for the `timeline-trigger-activation-range-start` property are:

- `normal`
- A `<length-percentage>`
- A `<timeline-range-name>`
- A `<timeline-range-name>` and a `<length-percentage>` separated by a space.

The default value, `normal`, is equivalent to `cover 0%` for a [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) {{cssxref("timeline-trigger-source")}}, and `0%` for a [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) `timeline-trigger-source`.

If the `<timeline-range-name>` value does not include a `<length-percentage>`, it defaults to `0%` of the named timeline range. If a `<timeline-range-name>` is not included, the timeline range defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover).

The `timeline-trigger-activation-range-start` and {{cssxref("timeline-trigger-activation-range-end")}} properties can also be set using the {{cssxref("timeline-trigger-activation-range")}} shorthand.

### Specifying multiple range start values

When multiple, comma-separated values are specified in a single `timeline-trigger-activation-range-start` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as other [multiple animation property values are set](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range-start` value is set, the `timeline-trigger-activation-range-start` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-activation-range-start` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-activation-range-start` value set. And so on.

Consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range-start:
  cover,
  entry 40%;
```

In this case, `--my-trigger` will use the `cover` range start and `--my-other-trigger` will use the `entry 40%` range start. As there are three names but only two range ends, the range ends are cycled, so the third trigger name, `--another-trigger`, will use the `cover` range start.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation with a custom activation range start value.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

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
```

```css live-sample___basic-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation that we'll apply later:

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
- A `timeline-trigger-activation-range-start` of `entry 50%`, which sets the trigger's activation range start point to `50%` through the `entry` range (when `50%` of the tracked element has entered the scrollport via the scrollport's end edge). The {{cssxref("timeline-trigger-activation-range-end")}} value defaults to `100%` of the way through the `cover` range, meaning that the animation won't pause until the tracked element has left the scrollport in either direction.

```css live-sample___basic-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-start: entry 50%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-activation-range-start: entry 50%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range-start property.";
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

Try scrolling the content up and down. The animation plays when `50%` of the trigger `<div>` has entered the scrollport and pauses when the trigger has completely exited the scrollport at the opposite edge.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-activation-range-end")}}
- {{cssxref("timeline-trigger-activation-range")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
