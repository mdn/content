---
title: animation-timeline
slug: Web/CSS/animation-timeline
page-type: css-property
browser-compat: css.properties.animation-timeline
sidebar: cssref
---

The **`animation-timeline`** [CSS](/en-US/docs/Web/CSS) property specifies the timeline used to control the progress of a CSS animation.

## Syntax

```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Named timeline */
animation-timeline: --timeline_name;

/* Anonymous scroll progress timeline */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* Anonymous view progress timeline */
animation-timeline: view();
animation-timeline: view(axis inset);

/* Multiple values */
animation-timeline: --progress-bar-timeline, --carousel-timeline;
animation-timeline: none, --sliding-timeline;

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Values

- `none`
  - : The animation is not associated with a timeline.
- `auto`
  - : The animation's timeline is the document's default [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline).

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Defines the root, nearest scroller, or self as the anonymous scroll progress timeline, and optionally the scroll direction of the scroller.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Defines the nearest ancestor scroll container as the anonymous view progress timeline, optionally overriding the default `baseline` axis direction and the `auto` start and ending insets.

- `<dashed-ident>`
  - : The name of a scroll-driven or view-progress timeline, as defined by the scroll container's {{cssxref('scroll-timeline-name')}} or {{cssxref('view-timeline-name')}} property (or the {{cssxref('scroll-timeline')}} or {{cssxref('view-timeline')}} shorthand property).

## Description

The default timeline for an CSS keyframe animation is the {{domxref("DocumentTimeline")}}. The `animation-timeline` property can be used to explicitly set the [default document timeline be used](#regular_css_animations_default_document_timeline) timeline that is used to control the progress of a CSS animation.

The following types of timelines can be set via `animation-timeline`:

- [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline)
  - : The default document timeline, which is progressed through by the passing of time since the document was first loaded in the browser. This is the timeline traditionally associated with CSS animations and is selected with a value of `auto`, or by not specifying an `animation-timeline` value at all.
- Scroll progress timeline
  - : The animation is progressed through by scrolling a scrollable element (_scroller_) between top and bottom (or left and right). The position in the scroll range is converted into a percentage of progress — 0% at the start and 100% at the end. The element that provides the scroll progress timeline can be specified in two ways:
- Named scroll progress timeline
  - : The scroller providing the scroll progress timeline is explicitly named using the {{cssxref("scroll-timeline-name")}} property (or the {{cssxref("scroll-timeline")}} shorthand property). The name is then linked to the element to animate by specifying it as the value of that element's `animation-timeline` property.
- Anonymous scroll progress timeline
  - : The element to animate is given a {{cssxref("animation-timeline/scroll", "scroll()")}} function as an `animation-timeline` value, which selects the scroller providing the scroll progress timeline and the scroll axis to be used based on the arguments you pass to it.
- View progress timeline
  - : Animation is progressed through based on the change in visibility of an element (known as the _subject_) inside a scroller. The visibility of the subject inside the scroller is tracked — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller, and 100% when it reaches the opposite edge. Unlike with scroll progress timelines, you can't specify the scroller — the subject's visibility is always tracked within its nearest ancestor scroller. The subject that provides the view progress timeline can be specified in two ways:
- Named view progress timeline
  - : The subject is explicitly named using the {{cssxref("view-timeline-name")}} property (or the {{cssxref("view-timeline")}} shorthand property). The name is then linked to the element to animate by specifying it as the value of that element's `animation-timeline` property. This is a key point — with named view progress timelines, the element to animate does not have to be the same as the subject.
- Anonymous view progress timeline
  - : The subject is given a {{cssxref("animation-timeline/view", "view()")}} function as an `animation-timeline` value, causing it to be animated based on its position inside its nearest parent scroller.
- No timeline
  - : All animation timelines can be removed by setting `animation-timeline: none`. In this case, no animation will occur as there is no timeline to follow.

The `animation-timeline` property is included in the {{cssxref("animation")}} shorthand as a reset-only value. This means that including `animation` resets a previously-declared `animation-timeline` value to `auto`. As this component of the shorthand is reset-only, a specific value cannot be set via `animation`. When creating [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines), you need to declare `animation-timeline` after declaring any `animation` shorthand for it to take effect.

If two or more timelines share the same name, the last declared within the cascade will be used. Also, if no timeline is found that matches the given name, the animation is not associated with a timeline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a named scroll progress timeline

A scroll progress timeline named `--square-timeline` is defined using the `scroll-timeline-name` property on an element with an `id` of `container`.
This is then set as the timeline for the animation on the `#square` element using `animation-timeline: --square-timeline`.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS for the container sets it as the source of a scroll progress timeline named `--square-timeline` using the `scroll-timeline-name` property (we could explicitly set which scrollbar axis to use with {{cssxref("scroll-timeline-axis")}}, but there is only a block direction scrollbar here, and it will be used by default).

The height of the container is set to 300px and we also set the container to create a vertical scrollbar if it overflows (below we will use CSS on the "stretcher" element to ensure that it does overflow).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property, which is set to the `--square-timeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: --square-timeline;

  position: absolute;
  bottom: 0;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

The "stretcher" CSS sets the block height to 600px, which forces the container element to overflow and create scroll bars.
Without this element there would be no scrollbar, and hence no scroll progress timeline to associate with the animation timeline.

```css
#stretcher {
  height: 600px;
}
```

#### Result

Scroll to see the square element being animated.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Setting an anonymous scroll progress timeline

In this example, the `#square` element is animated using an anonymous scroll progress timeline, which is applied to the element to be animated using the `scroll()` function.
The timeline in this particular example is provided by the nearest parent element that has (any) scrollbar, from the scrollbar in the block direction.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property.
In this case, the timeline is provided by `scroll(block nearest)`, which means that it will select the scrollbar in the block direction of the nearest ancestor element that has scrollbars; in this case the vertical scrollbar of the "container" element.

> [!NOTE]
> `block` and `nearest` are actually the default parameter values, so we could have used just `scroll()`.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

The CSS for the container sets its height to 300px and we also set the container to create a vertical scrollbar if it overflows.
The "stretcher" CSS sets the block height to 600px, which forces the container element to overflow.
These two together ensure that the container has a vertical scrollbar, which allows it to be used as the source of the anonymous scroll progress timeline.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

#### Result

Scroll to see the square element being animated.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Setting a named view progress timeline

A view progress timeline named `--subject-reveal` is defined using the `view-timeline-name` property on a subject element with a `class` of `animation`.
This is then set as the timeline for the same element using `animation-timeline: --subject-reveal;`. The result is that the subject element animates as it moves upwards through the document as it is scrolled.

#### HTML

The HTML for the example is shown below.

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
```

#### CSS

The `subject` element and its containing `content` element are styled minimally, and the text content is given some basic font settings:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

The `<div>` with the class of `subject` is also given a class of `animation` — this is where the {{cssxref("view-timeline-name")}} is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed.

Lastly, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  view-timeline-name: --subject-reveal;
  animation-timeline: --subject-reveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Setting an anonymous view progress timeline

An anonymous view progress timeline is set on an element with class `subject` using `animation-timeline: view()`. The result is that the `subject` element animates as it moves upwards through the document as it is scrolled.

#### HTML

The HTML for the example is shown below.

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
```

#### CSS

The `subject` element and its containing `content` element are styled minimally, and the text content is given some basic font settings:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `animation-timeline: view()` is set to declare that it will be animated as it progresses through the view progress timeline provided by its scrolling ancestor (in this case the document's root element).

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  animation-timeline: view();

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- {{domxref("AnimationTimeline")}}
- [Guide: Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timeslines)
- [Guide: Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
