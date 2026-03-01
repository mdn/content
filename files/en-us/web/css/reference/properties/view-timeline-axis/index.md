---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
page-type: css-property
browser-compat: css.properties.view-timeline-axis
sidebar: cssref
---

The **`view-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property specifies the scroll direction to be used for a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).

## Syntax

```css
/* Logical property values */
view-timeline-axis: block;
view-timeline-axis: inline;

/* Physical property values */
view-timeline-axis: y;
view-timeline-axis: x;

/* Global values */
view-timeline-axis: inherit;
view-timeline-axis: initial;
view-timeline-axis: revert;
view-timeline-axis: revert-layer;
view-timeline-axis: unset;
```

### Values

- `<axis>`
  - : Specifies the scroll direction used by the view progress timeline. The value can be one of the {{cssxref("axis")}} keywords: `block`, `inline`, `x`, or `y`. The default value is `block`.

## Description

The `view-timeline-axis` property specifies the direction, or `<axis>`, of [named view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) that are based on the element's box.

By default, CSS {{cssxref("@keyframes")}} animations progress along the time-based default timeline. When you set the animation progress via a view progress timeline instead, `view-timeline-axis` specifies the direction that controls the timeline progression.

For view progress timelines, progression of the animation along the timelines is based on the visibility of the element, or _subject_. The `view-timeline-axis` property is set on the subject.

The subject must be nested inside a scrollable element. If the scrollable element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no scroll progress timeline will be created.

The `view-timeline-axis`, along with the {{cssxref("view-timeline-inset")}} and {{cssxref("view-timeline-name")}} properties, is a component of the {{cssxref("view-timeline")}} shorthand property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the axis of the view progress timeline

In this example, a view progress timeline named `--subject-reveal` is defined using the `view-timeline-name` property on a subject element with a class of "animation". This timeline is then applied to the animation on the same element, using `animation-timeline: --subject-reveal;`.

To demonstrate the effect of `view-timeline-axis`, a horizontal (non-default) scrollbar is used in this example to drive the animation.

#### HTML

The HTML for the example is shown below.

```html
<div class="content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
    libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
    tincidunt lobortis feugiat vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras.
  </p>

  <p>
    A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
    nisl vel pretium lectus.
  </p>

  <p>
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris.
  </p>
</div>
```

#### CSS

In the CSS, we set the `subject` element as the source of a view progress timeline named `--subject-reveal` using the `view-timeline-name` property.
The scroll axis is set using `view-timeline-axis: x;`. We also include `view-timeline-axis: horizontal;` for browsers that support the non-standard legacy `horizontal` and `vertical` values, rather than `x` and `y`.

The `content` ancestor element is made to overflow horizontally by laying out its contents using `display: flex;` and `flex-flow: column wrap;`.

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 50%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

p {
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subject-reveal;
  view-timeline-axis: x;
  view-timeline-axis: horizontal;

  animation: appear 1ms linear both;
  animation-timeline: --subject-reveal;
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

```css hidden
@layer no-support {
  body::before {
    display: block;
    text-align: center;
    padding: 1em;
  }
  @supports not (view-timeline-axis: inherit) {
    body::before {
      content: "Your browser doesn't support the `view-timeline-axis` property.";
      background-color: wheat;
    }
  }
  @supports (view-timeline-axis: horizontal) {
    body::before {
      content: "Your browser supports legacy values for the `view-timeline-axis` property.";
      background-color: yellow;
    }
  }
}
```

#### Result

Scroll the horizontal bar at the bottom to see the subject element animate as you scroll.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("animation-timeline/view", "view()")}}
- [Guide: Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
