---
title: timeline-trigger-source CSS property
short-title: timeline-trigger-source
slug: Web/CSS/Reference/Properties/timeline-trigger-source
page-type: css-property
status:
  - experimental
browser-compat: css.properties.timeline-trigger-source
sidebar: cssref
---

{{SeeCompatTable}}

The **`timeline-trigger-source`** [CSS](/en-US/docs/Web/CSS) property specifies the timeline that will trigger a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

## Syntax

```css
/* Keywords */
timeline-trigger-source: none;
timeline-trigger-source: auto;

/* Named timeline */
timeline-trigger-source: --my-timeline;

/* Anonymous scroll progress timeline */
timeline-trigger-source: scroll();
timeline-trigger-source: scroll(x root);

/* Anonymous view progress timeline */
timeline-trigger-source: view();
timeline-trigger-source: view(inline);
timeline-trigger-source: view(x 200px auto);

/* Multiple source values */
timeline-trigger-source: view(), none, --my-timeline;
timeline-trigger-source: scroll(x), auto, scroll(y root);

/* Global values */
timeline-trigger-source: inherit;
timeline-trigger-source: initial;
timeline-trigger-source: revert;
timeline-trigger-source: revert-layer;
timeline-trigger-source: unset;
```

### Values

This property is specified as a comma-separated list of values. Each value can be one of the following value types:

- `none`
  - : The element does not create a animation trigger, as it has no timeline. Associated animations will not animated.
- `auto`
  - : The element does not create a trigger. Associated animations are set to the document's default time-based timeline.
- {{cssxref("dashed-ident")}}
  - : The element creates a scroll-triggered animation trigger as a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).
- [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
  - : The element creates a scroll-triggered animation trigger as a [anonymous scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines).
- [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view)
  - : The element creates a scroll-triggered animation trigger as a [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

## Description

The `timeline-trigger-source` property specifies the timeline trigger that will control a scroll-triggered animation.

For example:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

The resulting {{domxref("ViewTimeline")}} tracks the position of the `.trigger` element across the block-axis of the nearest ancestor scroller. The trigger is activated and deactivated when the tracked element is scrolled to certain positions inside the scrollport. By default, activation occurs when the tracked element starts to enter the scrollport, and deactivation occurs when the tracked element completely exits the scrollport.

An animated element can be triggered by the previously-described trigger by referencing its `timeline-trigger-name` in its {{cssxref("animation-trigger")}} property, which accepts a comma-separated list of values, each value being the name of the trigger and one or two {{cssxref("animation-action")}} keywords that specify what the animation should do when its trigger activates and deactivates:

For example:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;
}
```

It is possible for the animated element and the element that creates the trigger to be the same element. In this case, the animated element creates its own trigger:

```css
.animatedAndTrigger {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;

  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

The `timeline-trigger-source` property, along with the {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}} properties, can also be set using the {{cssxref("timeline-trigger")}} shorthand property.

### Trigger source types

To create a triggered animation, set the `timeline-trigger-source` property to one of three main value types:

- A [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function referencing an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) trigger. This is created on the nearest scrolling ancestor of the element that creates the trigger. As shown earlier, this allows you to create functionality whereby an element will start animating when it (or another element) reaches a certain scroll offset in the scrollport, and stop animating (or some other action) when it (or another element) reaches a different scroll offset. For example:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  ```

- A [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) function referencing an [anonymous scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) trigger. This can be created on the root element or the nearest scroller of the element that creates the trigger. This allows you to create functionality whereby an element will start animating when it (or another element) reaches an absolute scroll offset (for example, it scrolls upwards by `600px`), and stop animating (or some other action) when it (or another element) reaches a different offset. For example:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
  ```

  > [!NOTE]
  > See the [`timeline-trigger-source` `scroll()` example](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-source#basic_scroll_progress_timeline_source_usage).

- A {{cssxref("dashed-ident")}} referencing a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) or [named scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines). This involves setting a {{cssxref("view-timeline-name")}} or {{cssxref("scroll-timeline-name")}} on the element that creates the trigger, and then referring to that name in the value of the `timeline-trigger-source` property, for example:

  ```css
  view-timeline-name: --my-timeline;
  timeline-trigger-source: --my-timeline;
  ```

Scroll progress timelines are arguably not as useful for scroll-triggered animations as view progress timelines. You are more likely to want an animation to start at a scroll offset relative to the scrollport, not after an arbitrary amount of scrolling, where the animation may well be triggered offscreen on smaller screens.

### Other values

- `none`

- `auto`
  <!--if auto is used, is always a documentTimeline, or will it be a scroll-driven animation if that is also set? -->

### Multiple sources

<!-- this section sounds inaccurate to me -->

When you specify multiple comma-separated values on a single `timeline-trigger-source` property, they are applied to the timeline triggers in the order in which the {{cssxref("timeline-trigger-name")}}s appear. When the number of triggers and `timeline-trigger-source` property values do not match, they are applied in the same way as [multiple animation property values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

For example, if multiple `timeline-trigger-name` values are set, but only a single `timeline-trigger-source` value is set, the `timeline-trigger-source` will apply to all the `timeline-trigger-name`s. If two `timeline-trigger-source` values are set, they will cycle between the `timeline-trigger-name`s until all of them have a `timeline-trigger-source` value set. And so on.

Consider these declarations:

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

### Basic view progress timeline source usage

In this example, we create a basic scroll-triggered animation that uses an anonymous view progress timeline trigger source.

#### HTML

The markup contains two {{htmlelement("div")}} elements, one to animate and one on which to create a trigger, plus some basic text content to cause the page to scroll. The text is hidden for brevity.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
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

The animated `<div>` element's {{cssxref("position")}} is set to `fixed`, positioning it near the top-left of the scrollport to keep it visible, so we can see when its animation starts and stops.

```css hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
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

```css live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
div.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Next, we define the {{cssxref("@keyframes")}} for a `rotate` animation that we'll apply later:

```css live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

We use the {{cssxref("animation")}} shorthand to apply the animation, setting infinite iterations. Without an associated trigger, the element would start animating when the page loads.

We then set an {{cssxref("animation-trigger")}} value on it that references a trigger name of `--t` and specifies two {{cssxref("animation-action")}} values — `play` and `pause` — which specify that the animation will play when its trigger activates, and pause when it deactivates.

```css live-sample___basic-view-progress-example
div.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

The `.trigger` `<div>` element creates the animated `<div>`'s trigger via the following properties:

- A {{cssxref("timeline-trigger-name")}} value of `--t`, which is equal to the identifier referenced in the animated `<div>`'s `animation-trigger` property value, associating the two together.
- A `timeline-trigger-source` value of [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view), which sets the timeline trigger as a view progress timeline, and the element providing the timeline trigger as the nearest scrolling ancestor element.

```css live-sample___basic-view-progress-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Result

{{EmbedLiveSample("basic-view-progress-example", "100%", "240")}}

Try scrolling the content up. When any part of the `.trigger` `<div>` appears in the scrollport, the animation will play; when it has completely left the scrollport at either edge, the animation will pause.

### Basic scroll progress timeline source usage

This example is nearly identical to the previous one, except that this time we are setting the `timeline-trigger-source` to equal an anonymous scroll progress timeline instead of an anonymous view progress timeline.

The HTML and CSS are nearly identical, except that this time we have set our `.trigger` `<div>` element's `timeline-trigger-source` to [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) instead of `view()`. This creates the trigger as an anonymous scroll progress timeline on the nearest scrolling ancestor of the element.

We have also set a {{cssxref("timeline-trigger-activation-range")}} of `600px`, which means that the trigger will activate (meaning the animation will start playing) when the tracked element scrolls upwards by `600px`. If we didn't set this, the trigger would activate immediately on page load.

```css hidden live-sample___basic-scroll-progress-example
div.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

```css live-sample___basic-scroll-progress-example
div.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
}
```

```css hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
@supports not (timeline-trigger-source: scroll()) {
  body::before {
    content: "Your browser does not support the timeline-trigger-source property.";
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

{{EmbedLiveSample("basic-scroll-progress-example", "100%", "240")}}

The animation will start when the tracked element scrolls `600px` upwards.

### Disabling animations

In this example, we demonstrate the effects of the `none` and `auto` values.

<!-- and an example here -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("animation-trigger")}}
- {{cssxref("animation-action")}} type
- {{cssxref("trigger-scope")}}
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
