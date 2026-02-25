---
title: timeline-trigger-source
slug: Web/CSS/Reference/Properties/timeline-trigger-source
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-source
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-source`** [CSS](/en-US/docs/Web/CSS) property specifies the timeline along which a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger will measure its progress and determine its activation and deactivation.

## Syntax

```css
/* Keyword */
timeline-trigger-source: none;
timeline-trigger-source: auto;

/* Named timeline */
timeline-trigger-source: --my-timeline;

/* Anonymous view progress timeline */
timeline-trigger-source: view();
timeline-trigger-source: view(inline);
timeline-trigger-source: view(x 200px auto);

/* Multiple source values */
timeline-trigger-source: view(), none, --my-timeline;

/* Global values */
timeline-trigger-source: inherit;
timeline-trigger-source: initial;
timeline-trigger-source: revert;
timeline-trigger-source: revert-layer;
timeline-trigger-source: unset;
```

The `timeline-trigger-source` property may be specified as one or more single animation timelines, separated by commas. Each animation timeline is specified using a `none` or `auto` keyword, a {{cssxref("dashed-ident")}}, or a [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function.

### Values

- `none`
  - : The element does not define a scroll-triggered animation trigger, as it has no timeline.
- `auto`
  - : The element does not define a scroll-triggered animation trigger, as its timeline is set to the document's default time-based timeline.
- {{cssxref("dashed-ident")}}
  - : The element defines a scroll-triggered animation trigger, with its timeline set to a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).
- [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view)
  - : The element defines a scroll-triggered animation trigger, with its timeline set to an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

## Description

The `timeline-trigger-source` property specifies the [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) against which a trigger element's **activation range** will be measured against. The timeline is based on a scrolling ancestor of the trigger element, and its activation range is the range between the scrolling offset at which the animated element's animation is activated, and the scrolling offset at which the animated element's animation is deactivated.

For example:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

An element with these declarations set will have an identifying {{cssxref("timeline-trigger-name")}} of `--my-trigger`, and a `timeline-trigger-source` value of `view()`, which selects the element's nearest ancestor scrolling element to define its view progress timeline.

An animated element can set itself up to be triggered by the previously-described trigger element by referencing the trigger's identifying name in its {{cssxref("animation-trigger")}} property.

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}
```

In this case, the animation will be triggered by the trigger element with the `timeline-trigger-name` of `--my-trigger`. Its {{cssxref("animation-action")}} keywords — `play-forwards play-backwards` — specify that the animation should play forwards on activation (when the trigger element is scrolled into its activation range), and backwards on deactivation (when the trigger element is scrolled out of its activation range).

> [!NOTE]
> The `timeline-trigger-source` property can also be set via the {{cssxref("timeline-trigger")}} shorthand property.

> [!NOTE]
> It is possible for the animated element and the trigger element to be the same element.

### Different source types

The trigger element's `timeline-trigger-source` can take one of two main value types:

- A {{cssxref("dashed-ident")}} referencing a named view progress timeline. This references a {{cssxref("view-timeline-name")}} set on the trigger element.
- A [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function referencing an anonymous view progress timeline. This is the trigger element's nearest scrolling ancestor.

According to the specification, it is also possible to set the `timeline-trigger-source` to a [scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) or to the default time-based timeline. However, these options don't provide any useful effect, and result in the animation starting on page load.

### Setting the trigger's activation range

By default, the activation range along the timeline is `cover`, which means that the animation activates when the start edge of the trigger enters the end edge of the viewport, and deactivates when the end edge of the trigger has exited either edge of the viewport.

A custom activation range can be set via the {{cssxref("timeline-trigger-activation-range")}} property.

### Multiple sources

When multiple timeline values are specified in a single `timeline-trigger-source` property, they are distributed between the specified {{cssxref("timeline-trigger-name")}} values in the same fashion as multiple {{cssxref("animation")}} values are distributed (see [Setting multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values)).

If multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-source` value is set, the `timeline-trigger-source` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-source` values are set, they will cycle between the `timeline-trigger-name`s until all of them have an `timeline-trigger-source` value set. And so on.

For example, consider these declarations:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-source: view(), --my-source;
```

In this case, the first name will use the `view()` source, and the second name will use the `--my-source` source. The third name will cycle back to using the `view()` source again.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we show how to create a basic scroll-triggered animation that uses an anonymous view process timeline.

#### HTML

Our markup contains two {{htmlelement("div")}} elements, plus some basic text content to cause the page to scroll. We have hidden the text content for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I am the trigger</div>

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

The animated {{htmlelement("div")}} element has an `animation` applied that rotates it. We set an {{cssxref("animation-trigger")}} value on it that references a `timeline-trigger-name` of `--t`; we also specify two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play on activation, and pause on deactivation.

The trigger `<div>` element is defined as the animated `<div>`'s trigger using a {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together. It also includes a `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the element providing the view progress timeline as the nearest scrolling ancestor element.

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
}
```

Next, we give the animated `<div>` a {{cssxref("position")}} of `fixed`, positioning it near the top-left of the viewport so that we can easily see when its animation starts and stops.

```css live-sample___basic-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Finally, we define the {{cssxref("@keyframes")}} for the `rotate` animation:

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

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-example", "100%", "240")}}

Try scrolling the content up. When any part of the trigger `<div>` appears in the viewport, the animation will play; when the trigger has completely left the viewport at either edge, the animation will pause.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
