---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ScrollTimeline
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`ScrollTimeline`** interface of the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} represents a scroll progress timeline (see [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) for more details).

Pass a `ScrollTimeline` instance to the {{domxref("Animation.Animation", "Animation()")}} constructor or the {{domxref("Element.animate()", "animate()")}} method to specify it as the timeline that will control the progress of the animation.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ScrollTimeline.ScrollTimeline", "ScrollTimeline()")}} {{Experimental_Inline}}
  - : Creates a new `ScrollTimeline` object instance.

## Instance properties

_This interface also inherits the properties of its parent, {{domxref("AnimationTimeline")}}._

- {{domxref("ScrollTimeline.source", "source")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the scrollable element (_scroller_) whose scroll position is driving the progress of the timeline and therefore the animation.
- {{domxref("ScrollTimeline.axis", "axis")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an enumerated value representing the scroll axis that is driving the progress of the timeline.

## Instance methods

_This interface inherits the methods of its parent, {{domxref("AnimationTimeline")}}._

## Examples

### Displaying the source and axis of a scroll progress timeline

In this example, we animate an element with a `class` of `box` along a view progress timeline — it animates across the screen as the document scrolls. We output the `source` element and scroll `axis` to an `output` element in the top-right corner.

#### HTML

The HTML for the example is shown below.

```html
<div class="content"></div>
<div class="box"></div>
<div class="output"></div>
```

#### CSS

The CSS for the example looks like this:

```css
.content {
  height: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
  left: 0%;
}

.output {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 5px;
  right: 5px;
}
```

#### JavaScript

In the JavaScript, we grab references to the `box` and `output` `<div>`s, then create a new `ScrollTimeline`, specifying that the element that will drive the scroll timeline progress is the document ({{htmlelement("html")}}) element, and the scroll axis is the `block` axis. We then animate the `box` element with the Web Animations API. Last of all, we display the source element and axis in the `output` element.

```js
const box = document.querySelector(".box");
const output = document.querySelector(".output");

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

box.animate(
  {
    rotate: ["0deg", "720deg"],
    left: ["0%", "100%"],
  },
  {
    timeline,
  },
);

output.textContent = `Timeline source element: ${timeline.source.nodeName}. Timeline scroll axis: ${timeline.axis}`;
```

#### Result

Scroll to see the box being animated.

{{EmbedLiveSample("Displaying the source and axis of a scroll progress timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
