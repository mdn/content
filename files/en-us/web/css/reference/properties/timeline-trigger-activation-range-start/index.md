---
title: timeline-trigger-activation-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-start
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range-start`** [CSS](/en-US/docs/Web/CSS) property specifies the start point of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger's activation range.

## Syntax

```css
/* Keyword or <length-percentage> */
timeline-trigger-activation-range-start: normal;
timeline-trigger-activation-range-start: 20%;
timeline-trigger-activation-range-start: 350px;

/* Named timeline range value */
timeline-trigger-activation-range-start: cover;
timeline-trigger-activation-range-start: exit;
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

The `timeline-trigger-activation-range-start` shorthand property is specified as one or more values, separated by commas.

### Values

- `normal`
  - : Represents the start of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline. The range starts at `0%`.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

## Description

When creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations), the `timeline-trigger-activation-range-start` property can be set on the trigger element to explicitly define the start of the trigger's **activation range**. Read the linked guide and the [`timeline-trigger-activation-range` description](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) for more information on how this animation type works.

Allowed values for the `timeline-trigger-activation-range-start` property are:

- `normal`
- A `<length-percentage>`
- A `<timeline-range-name>`
- A `<timeline-range-name>` and a `<length-percentage>` separated by a space.

If the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `0%`.

The `timeline-trigger-activation-range-start`, along with the {{cssxref("timeline-trigger-activation-range-end")}} property, can both be set in a single declaration using the {{cssxref("timeline-trigger-activation-range")}} shorthand.

### Specifying multiple range start values

When multiple values are specified in a single `timeline-trigger-activation-range-start` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range-start` value is set, the `timeline-trigger-activation-range-start` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-activation-range-start` values are set, they will cycle between the `timeline-trigger-name`s until all of them have an `timeline-trigger-activation-range-start` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range-start:
  cover,
  entry 40%;
```

In this case, the first name will use the `cover` range start, and the second name will use the `entry 40%` range start. The third name will cycle back to using the `cover` range start again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that uses a custom timeline range start value.

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

Finally for this rule, we specify a `timeline-trigger-activation-range-start` of `entry 50%`, which sets the trigger's activation range start point to 50% through the `entry` range (when 50% of the trigger element has entered the viewport). The {{cssxref("timeline-trigger-activation-range-end")}} value defaults to 100% of the way through the `cover` range, meaning that the animation won't pause until the trigger element has left the viewport in either direction.

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
  timeline-trigger-activation-range-start: entry 50%;
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

Try scrolling the content up. When 50% of the trigger `<div>` has entered the viewport, the animation will play; when the trigger has completely exited the viewport at either edge, the animation will pause.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-activation-range-end")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
