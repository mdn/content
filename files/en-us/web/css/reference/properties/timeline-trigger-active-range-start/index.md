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

The **`timeline-trigger-active-range-start`** [CSS](/en-US/docs/Web/CSS) property specifies the start point of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) trigger's active range.

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

/* Named timeline range plus offset */
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

The `timeline-trigger-active-range-start` property is specified as one or more values, separated by commas.

### Values

- `auto`
  - : The `timeline-trigger-active-range-start` property is set to the same value as the {{cssxref("timeline-trigger-activation-range-start")}} property. This is the default value.
- `normal`
  - : Represents the end of the `cover` timeline.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

## Description

When creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations), the `timeline-trigger-active-range-start` property can be set to explicitly define the start of the trigger's [active range](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description).

Allowed values for the `timeline-trigger-active-range-start` property are:

- `auto`
- `normal`
- A `<length-percentage>`
- A `<timeline-range-name>`
- A `<timeline-range-name>` and a `<length-percentage>` separated by a space.

If the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `0%`.

The `timeline-trigger-active-range-start` and {{cssxref("timeline-trigger-active-range-end")}} properties can both be set in a single declaration using the {{cssxref("timeline-trigger-active-range")}} shorthand.

### Specifying multiple range start values

When multiple values are specified in a single `timeline-trigger-active-range-start` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-active-range-start` value is set, the `timeline-trigger-active-range-start` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-active-range-start` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-active-range-start` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-start:
  contain,
  entry 5%;
```

In this case, the first name will use the `contain` range start, and the second name will use the `entry 5%` range start. The third name will cycle back to using the `contain` range start again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation with a custom active range start value.

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

The `.animated` {{htmlelement("div")}} element has an `animation` applied that rotates it. We set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t`; we also specify two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

The `.trigger` `<div>` element creates the animated `<div>`'s trigger using:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A {{cssxref("timeline-trigger-source")}} value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.
- A {{cssxref("timeline-trigger-activation-range")}} of `contain 30% contain 60%`, which sets the trigger's activation range to a small portion of the `contain` range.
- A `timeline-trigger-active-range-start` of `cover 0%`. The {{cssxref("timeline-trigger-active-range-end")}} value defaults to the {{cssxref("timeline-trigger-activation-range-end")}} value — `contain 60%` — so we end up with an overall {{cssxref("timeline-trigger-active-range")}} of `cover 0% contain 60%`.

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
  timeline-trigger-activation-range: contain 30% contain 60%;
  timeline-trigger-active-range-start: cover 0%;
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

Try scrolling the content up. When the tracked `<div>` moves into the narrow activation range, the animation will start. At this point, if you scroll the tracked `<div>` further upwards, the animation will stop as soon as it leaves the activation range. However, if after starting the animation, you start to scroll the tracked `<div>` downwards again, you can move it completely off the bottom of the viewport before the animation will stop again. This is because we extended the start of the active range, but not the end.

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
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
