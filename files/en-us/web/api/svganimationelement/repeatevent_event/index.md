---
title: "SVGAnimationElement: repeatEvent event"
short-title: repeatEvent
slug: Web/API/SVGAnimationElement/repeatEvent_event
page-type: web-api-event
browser-compat: api.SVGAnimationElement.repeatEvent_event
---

{{APIRef("SVG")}}

The **`repeatEvent`** event of the {{domxref("SVGAnimationElement")}} interface is fired when the element's local timeline repeats. It will be fired each time the element repeats, after the first iteration.

> **Note:** Associated with the `repeatEvent` event is an integer that indicates which repeat iteration is beginning; this can be found in the `detail` property of the event object. The value is a 0-based integer, but the repeat event is not raised for the first iteration and so the observed values will be >= 1. This is supported in Firefox, but not in Chrome.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("repeatEvent", (event) => {});

onrepeat = (event) => {};
```

## Event type

A {{domxref("TimeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TimeEvent")}}

## Event properties

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : A `long` that specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : A {{glossary("WindowProxy")}} that identifies the Window from which the event was generated.

## Examples

### Animated circle

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <title>SVG SMIL Animate with Path</title>
  <circle cx="0" cy="50" r="50" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="5s" repeatCount="indefinite" />
  </circle>
</svg>

<hr />

<ul></ul>
```

```css
ul {
  height: 100px;
  border: 1px solid #ddd;
  overflow-y: scroll;
  padding: 10px 30px;
}
```

```js
let svgElem = document.querySelector("svg");
let animateElem = document.querySelector("animateMotion");
let list = document.querySelector("ul");

animateElem.addEventListener("beginEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "beginEvent fired";
  list.appendChild(listItem);
});

animateElem.addEventListener("repeatEvent", (e) => {
  let listItem = document.createElement("li");
  let msg = "repeatEvent fired";
  if (e.detail) {
    msg += `; repeat number: ${e.detail}`;
  }
  listItem.textContent = msg;
  list.appendChild(listItem);
});
```

{{EmbedLiveSample('Animated_circle', '100%', '270')}}

### Event handler property equivalent

Note that you can also create an event listener for the `repeat` event using the `onrepeat` event handler property:

```js
animateElem.onrepeat = () => {
  console.log("repeatEvent fired");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG animation with SMIL](/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
- {{domxref("SVGAnimationElement.beginEvent_event", "beginEvent")}} event
- {{domxref("SVGAnimationElement.endEvent_event", "endEvent")}} event
