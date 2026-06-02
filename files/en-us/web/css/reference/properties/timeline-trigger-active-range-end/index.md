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

The **`timeline-trigger-active-range-end`** [CSS](/en-US/docs/Web/CSS) property specifies the end point of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's active range.

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

/* Named timeline range plus offset */
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

The `timeline-trigger-active-range-end` property is specified as one or more values, separated by commas.

### Values

- `auto`
  - : The `timeline-trigger-active-range-end` property is set to the same value as the {{cssxref("timeline-trigger-activation-range-end")}} property. This is the default value.
- `normal`
  - : Represents the end of the `cover` timeline.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

Percentages are relative to the length of the named timeline range if one is specified, or the entire timeline if not.

## Description

When creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations), the `timeline-trigger-active-range-end` property can be set to explicitly define the end of the trigger's [active range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description).

Allowed values for the `timeline-trigger-active-range-end` property are:

- `auto`
- `normal`
- A `<length-percentage>`
- A `<timeline-range-name>`
- A `<timeline-range-name>` and a `<length-percentage>` separated by a space.

The default value is `auto`, which sets the `timeline-trigger-active-range-end` value to the same as the {{cssxref("timeline-trigger-activation-range-end")}}.

A value of `normal` is equivalent to `cover 100%` for a [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) {{cssxref("timeline-trigger-source")}}, and `100%` for a [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) `timeline-trigger-source`.

If the `<timeline-range-name>` value does not include a `<length-percentage>`, it defaults to `100%` of the named timeline range. If a `<timeline-range-name>` is not included, the timeline range defaults to [`cover`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name#cover).

The `timeline-trigger-active-range-end` and {{cssxref("timeline-trigger-active-range-start")}} properties can also be set using the {{cssxref("timeline-trigger-active-range")}} shorthand.

### Specifying multiple range end values

When multiple, comma-separated values are specified in a single `timeline-trigger-active-range-end` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as other [multiple animation property values are set](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range-end` value is set, the `timeline-trigger-active-range-end` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-active-range-end` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-active-range-end` value set. And so on.

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

In this example, we show how to create a basic scroll-triggered animation with a custom active range end value.

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
- A {{cssxref("timeline-trigger-activation-range")}} of `contain 30% contain 60%`, which sets the trigger's activation range to a small portion of the `contain` range.
- A `timeline-trigger-active-range-end` of `cover 100%`. The {{cssxref("timeline-trigger-active-range-start")}} value defaults to the {{cssxref("timeline-trigger-activation-range-start")}} value — `contain 30%` — so we end up with an overall {{cssxref("timeline-trigger-active-range")}} of `contain 30% cover 100%`.

```css live-sample___basic-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 30% contain 60%;
  timeline-trigger-active-range-end: cover 100%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range-end: cover 100%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range-end property.";
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

Try scrolling the content up and down. The animation plays when the trigger `<div>` moves into the narrow activation range between `30%` and `60%` of the way up the timeline range. At this point, you can scroll the trigger completely off the top of the scrollport before the animation will stop again. However, if after starting the animation, you start to scroll the trigger downwards again, it will stop as soon as the start of the narrow activation range is reached. This is because we extended the end of the active range, but not the start.

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
