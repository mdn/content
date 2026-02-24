---
title: timeline-trigger-activation-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-end
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-activation-range-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-activation-range-end`** [CSS](/en-US/docs/Web/CSS) property specifies the end point of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger's activation range.

## Syntax

```css
/* Keyword or <length-percentage> */
timeline-trigger-activation-range-end: normal;
timeline-trigger-activation-range-end: 80%;
timeline-trigger-activation-range-end: 400px;

/* Named timeline range value */
timeline-trigger-activation-range-end: contain;
timeline-trigger-activation-range-end: exit;
timeline-trigger-activation-range-end: entry 100%;
timeline-trigger-activation-range-end: contain 600px;

/* Multiple range start values */
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

The `timeline-trigger-activation-range-end` shorthand property is specified as one or more values, separated by commas.

### Values

- `normal`
  - : Represents the end of the timeline. This is the default value.
- {{cssxref("length-percentage")}}
  - : Specifies a length or percentage value measured from the beginning of the timeline.
- {{cssxref("timeline-range-name")}}
  - : Specifies a named timeline range within the overall timeline. The range starts at `0%`.
- `<timeline-range-name>` `<length-percentage>`
  - : Specifies a length or percentage value measured from the beginning of the specified named timeline range.

## Description

When creating [CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations), the `timeline-trigger-activation-range-end` property can be set on the trigger element to explicitly define the end of the trigger's **activation range**. Read the linked guide and the [`timeline-trigger-activation-range` description](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) for more information on how this animation type works.

Allowed values for the `timeline-trigger-activation-range-end` property are `normal`, a `<length-percentage>`, a `<timeline-range-name>`, or a `<timeline-range-name>` and a `<length-percentage>` separated by a space. If the `<timeline-range-name>` value does not include a `<length-percentage>`, the percentage defaults to `100%`. See {{cssxref("timeline-trigger-activation-range")}} for additional information about the available values.

The `timeline-trigger-activation-range-end`, along with the {{cssxref("timeline-trigger-activation-range-start")}} property, can both be set in a single declaration using the {{cssxref("timeline-trigger-activation-range")}} shorthand.

### Specifying multiple range end values

When multiple values are specified in a single `timeline-trigger-activation-range-end` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-activation-range-end` value is set, the `timeline-trigger-activation-range-end` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-activation-range-end` values are set, they will cycle between the `timeline-trigger-name`s until all of them have an `timeline-trigger-activation-range-end` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-activation-range-end:
  cover,
  entry 100%;
```

In this case, the first name will use the `cover` range end, and the second name will use the `entry 100%` range end. The third name will cycle back to using the `cover` range end again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that uses a custom timeline range end value.

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

Finally for this rule, we specify a `timeline-trigger-activation-range-end` of `contain 60%`, which sets the trigger's activation range end point to 60% of the way through the `contain` range (when the trigger element has scrolled a little over half way through the viewport in either direction). The {{cssxref("timeline-trigger-activation-range-start")}} value defaults to 0% of the way through the `cover` range, meaning that the animation will start when the trigger element has started to enter the viewport.

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
  timeline-trigger-activation-range-end: contain 60%;
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

Try scrolling the content up. When the trigger `<div>` starts to enter the viewport, the animation will play; when the trigger has scrolled a little over half-way up the viewport, the animation will pause.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, and {{cssxref("timeline-trigger-active-range")}}
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
