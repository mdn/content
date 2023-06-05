---
title: "AnimationTimeline: getCurrentTime() method"
short-title: getCurrentTime()
slug: Web/API/AnimationTimeline/getCurrentTime
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AnimationTimeline.getCurrentTime
---

{{ APIRef("Web Animations") }}{{seecompattable}}

The **`getCurrentTime()`** method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("AnimationTimeline")}} interface returns a representation of how far an animation has progressed through named timeline ranges in its associated timeline.

## Syntax

```js-nolint
getCurrentTime()
getCurrentTime(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `range` {{optional_inline}}
      - : A string representing a named timeline range (see the CSS {{cssxref("animation-range")}} property for a guide to valid values) within which to measure the timeline progression.

### Return value

A {{domxref("CSSNumericValue")}} representing how far an animation has progressed through its associated timeline. For time-based animations, this should be a {{domxref("CSSUnitValue")}} with `ms` units. For [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations), this should be a {{domxref("CSSUnitValue")}} with `percent` units.

## Examples

### Tracking the progress of a view progress timeline

In this example, we animate an element with a `class` of `subject` along a view progress timeline — it animates when moved upwards through the document as it scrolls. Every 250 ms, we output the `getCurrentTime()` value to an output element in the top-right corner.

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

  <div class="output"></div>
</div>
```

#### CSS

The CSS for the example looks like this:

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

.output {
  position: fixed;
  top: 5px;
  right: 5px;
}

p,
h1,
div {
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

#### JavaScript

In the JavaScript, we grab references to the `subject` and `output` `<div>`s, then create a new {{domxref("ViewTimeline")}}, associating it with the `subject` element to specify that the timeline progress is based on this element's visibility through its scrolling ancestor. We then animate the `subject` element with the Web Animations API. Last of all, we run `getCurrentTime()` on the timeline every 250ms, and display the new value in the `output` element.

```js
const subject = document.querySelector(".subject");
const output = document.querySelector(".output");

const timeline = new ViewTimeline({
  subject,
  axis: "block",
});

subject.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    timeline,
  }
);

setInterval(() => {
  output.textContent = timeline.getCurrentTime();
}, 100);
```

#### Result

Scroll to see the subject element being animated and the change in percentage progress.

{{EmbedLiveSample("Tracking the progress of a view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("DocumentTimeline")}}, {{domxref("ScrollTimeline")}}, {{domxref("ViewTimeline")}}
