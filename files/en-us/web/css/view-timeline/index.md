---
title: view-timeline
slug: Web/CSS/view-timeline
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.view-timeline
---

{{CSSRef}}{{SeeCompatTable}}

The **`view-timeline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) is used to define a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). `view-timeline` is set on the subject.

The visibility of the subject inside the scroller is tracked — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller and 100% when it reaches the opposite edge.

`view-timeline` can contain two constituent values — a name for the named view progress timeline and an optional scroll axis value.
The name is then referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration to indicate the element that will be animated as the timeline progresses. This can be the subject element, but it doesn't have to be — you can animate a different element as the subject moves through the scrolling area.

> [!NOTE]
> If the scroller does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no timeline will be created.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`view-timeline-name`](/en-US/docs/Web/CSS/view-timeline-name)
- [`view-timeline-axis`](/en-US/docs/Web/CSS/view-timeline-axis)

## Syntax

```css
/* two values: one each for view-timeline-name and view-timeline-axis */
view-timeline: --custom_name_for_timeline block;
view-timeline: --custom_name_for_timeline inline;
view-timeline: --custom_name_for_timeline y;
view-timeline: --custom_name_for_timeline x;
view-timeline: none block;
view-timeline: none inline;
view-timeline: none y;
view-timeline: none x;

/* one value: view-timeline-name */
view-timeline: none;
view-timeline: --custom_name_for_timeline;
```

The `view-timeline` shorthand property can be applied to a container element as a combination of the `<view-timeline-name>` and `<view-timeline-axis>` values. At least one of the values must be specified. If both the values are specified, the order followed must be the `<view-timeline-name>` value followed by the `<view-timeline-axis>` value.

> **Note:** `<view-timeline-name>`s must be [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) values, which means they must start with `--`. This helps avoid name clashes with standard CSS keywords.

### Values

- `<view-timeline-name>`

  - : See [`view-timeline-name`](/en-US/docs/Web/CSS/view-timeline-name).

- `<view-timeline-axis>`
  - : See [`view-timeline-axis`](/en-US/docs/Web/CSS/view-timeline-axis). The default value is `block`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a named view progress timeline

A view progress timeline named `--subjectReveal` is defined using the `view-timeline` property on a subject element with a `class` of `animation`.
This is then set as the timeline for the same element using `animation-timeline: --subjectReveal`. The result is that the subject element animates as it moves upwards through the document as it is scrolled.

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
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

The `<div>` with the class of `subject` is also given a class of `animation` — this is where `view-timeline` is set to define a named view progress timeline. It is also given an `animation-timeline` name with the same value to declare that this will be the element animated as the view progress timeline is progressed.

Last, an animation is specified on the element that animates its opacity and scale, causing it to fade in and size up as it moves up the scroller.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

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

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline-axis`](/en-US/docs/Web/CSS/view-timeline-axis), [`view-timeline-name`](/en-US/docs/Web/CSS/view-timeline-name)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
