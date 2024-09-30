---
title: ViewTimeline
slug: Web/API/ViewTimeline
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ViewTimeline
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`ViewTimeline`** interface of the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} represents a view progress timeline (see [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) for more details).

Pass a `ViewTimeline` instance to the {{domxref("Animation.Animation", "Animation()")}} constructor or the {{domxref("Element.animate()", "animate()")}} method to specify it as the timeline that will control the progress of the animation.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ViewTimeline.ViewTimeline", "ViewTimeline()")}} {{Experimental_Inline}}
  - : Creates a new `ViewTimeline` object instance.

## Instance properties

_This interface also inherits the properties of its parent, {{domxref("ScrollTimeline")}}._

- {{domxref("ViewTimeline.subject", "subject")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the subject element whose visibility within its nearest ancestor scrollable element (scroller) is driving the progress of the timeline and therefore the animation.
- {{domxref("ViewTimeline.startOffset", "startOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("CSSNumericValue")}} representing the starting (0% progress) scroll position of the timeline as an offset from the start of the overflowing section of content in the scroller.
- {{domxref("ViewTimeline.endOffset", "endOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("CSSNumericValue")}} representing the ending (100% progress) scroll position of the timeline as an offset from the start of the overflowing section of content in the scroller.

## Instance methods

_This interface inherits the methods of its parent, {{domxref("ScrollTimeline")}}._

## Examples

### Displaying the subject and offsets of a view progress timeline

In this example, we animate an element with a `class` of `subject` along a view progress timeline — it animates when moved upwards through the document as it scrolls. We also output the `subject`, `startOffset`, and `endOffset` values to an output element in the top-right corner.

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
    Dolor sed viverra ipsum nunc aliquet. Sed risus pretium quam vulputate
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

In the JavaScript, we grab references to the `subject` and `output` `<div>`s, then create a new `ViewTimeline`, associating it with the `subject` element to specify that the timeline progress is based on this element's visibility through its scrolling ancestor, setting a `block` axis, and setting `inset` values to adjust the position of the box in which the subject is deemed to be visible.

We then animate the `subject` element with the Web Animations API. Last of all, we display the `subject`, `startOffset`, and `endOffset` values in the `output` element.

```js
const subject = document.querySelector(".subject");
const output = document.querySelector(".output");

const timeline = new ViewTimeline({
  subject,
  axis: "block",
  inset: [CSS.px("200"), CSS.px("300")],
});

subject.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    timeline,
  },
);

output.textContent += `Subject element: ${timeline.subject.nodeName}, `;
output.textContent += `start offset: ${timeline.startOffset}, `;
output.textContent += `end offset: ${timeline.endOffset}.`;
```

#### Result

Scroll to see the subject element being animated.

{{EmbedLiveSample("Tracking the progress of a view progress timeline", "100%", "480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
