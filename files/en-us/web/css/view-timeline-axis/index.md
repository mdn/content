---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
page-type: css-property
browser-compat: css.properties.view-timeline-axis
sidebar: cssref
---

The **`view-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property is used to specify the scrollbar direction that will be used to provide the timeline for a [named view progress timeline](/en-us/web/css/css_scroll-driven_animations/timelines#named_view_progress_timeline) animation.

## Syntax

```css
/* Logical property values */
view-timeline-axis: block;
view-timeline-axis: inline;

/* Physical property values */
view-timeline-axis: y;
view-timeline-axis: x;
```

### Values

- `<axis>`
  - : An {{ cssxref("axis") }} keyword value describing the direction, or axis, of the scrollport that controls the scroll-driven animation. The default value is `block`.

## Description

The `view-timeline-axis` property specifies the direction, or `<axis>`, of [named view progress timelines](/en-us/web/css/css_scroll-driven_animations/timelines#named_view_progress_timeline) derived from the element's box.

When applying CSS {{cssxref("@keyframes")}} animations to element using [CSS animations](/en-US/docs/Web/CSS/CSS_animations), animation are progressed through based on an timeline. When setting the animation progress via a view progress timeline, `view-timeline-axis` is used to define which direction, or axis, controls the timeline progression.

When animating based on view progress timelines, progression of the animation along the timelines is based on visibility of the element, or _subject_. The `view-timeline-axis` property is set on the subject.

The subject must be nested inside a scrollable element. If the scrollable element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no scroll progress timeline will be created.

The `view-timeline-axis`, along with the {{cssxref("view-timeline-inset")}} and {{cssxref("view-timeline-name")}} properties are components of the {{cssxref("view-timeline")}} shorthand property.

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
The scroll axis is set using `view-timeline-axis: x;` (Chromium) and `view-timeline-axis: horizontal;` (Firefox) — this causes the _horizontal scrollbar_ position of the scrolling ancestor element to determine the animation timeline.

The `content` ancestor element is made to overflow horizontally by laying out its contents using `display: flex;` and `flex-flow: column wrap;`.

Also worth noting is that the subject element has an `animation-duration` applied to it so that the example will work in Firefox.

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
  /* Chromium supports the new x/y syntax */
  view-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  view-timeline-axis: horizontal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-timeline: --subject-reveal;
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

Scroll the horizontal bar at the bottom to see the subject element animate as you scroll.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
