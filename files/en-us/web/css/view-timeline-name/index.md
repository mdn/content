---
title: view-timeline-name
slug: Web/CSS/view-timeline-name
page-type: css-property
browser-compat: css.properties.view-timeline-name
sidebar: cssref
---

The **`view-timeline-name`** [CSS](/en-US/docs/Web/CSS) property is used to define the name of a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_).

## Syntax

```css
view-timeline-name: none;
view-timeline-name: --custom_name_for_timeline;
```

### Values

- `none`
  - : The timeline has no name.
- `<dashed-ident>`
  - : A [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) defining a name for a view progress timeline.

## Description

The `view-timeline-name` property is used to define the name of a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). The `view-timeline-name`, {{cssxref("view-timeline-axis")}} and {{cssxref("view-timeline-inset")}} properties can also be set using the {{cssxref("view-timeline")}} shorthand property.

The `view-timeline` property is set on the subject. The value is the keyword `none` or a comma separated list of `<dashed-ident>` custom names identifiers. All `<dashed-ident>` values must start with `--`, which helps avoid name clashes with standard CSS keywords. The names can then be referenced in {{cssxref("animation-timeline")}} declarations to indicate the element that will be animated as the timeline progresses.

If the subject's named scroller element does not overflow its container in the [axis dimension](/en-US/docs/Web/CSS/view-timeline-axis) or if the overflow is hidden or clipped, no scroll progress timeline will be created.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a named view progress timeline

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

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `view-timeline-name` is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

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

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
