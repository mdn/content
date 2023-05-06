---
title: "SVGAnimationElement: endEvent event"
short-title: endEvent
slug: Web/API/SVGAnimationElement/endEvent_event
page-type: web-api-event
browser-compat: api.SVGAnimationElement.endEvent_event
---

{{APIRef("SVG")}}

The **`endEvent`** event of the {{domxref("SVGAnimationElement")}} interface is fired when at the active end of the animation is reached.

> **Note:** This event is not raised at the simple end of each animation repeat. This event may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was ended with a DOM method.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("endEvent", (event) => {});

onend = (event) => {};
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

<button>Stop animation</button>

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
let btn = document.querySelector("button");

animateElem.addEventListener("beginEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "beginEvent fired";
  list.appendChild(listItem);
});

animateElem.addEventListener("endEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "endEvent fired";
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

btn.addEventListener("click", () => {
  btn.disabled = true;
  animateElem.setAttribute("repeatCount", "1");
});
```

{{EmbedLiveSample('Animated_circle', '100%', '300')}}

### Event handler property equivalent

Note that you can also create an event listener for the `end` event using the `onend` event handler property:

```js
animateElem.onend = () => {
  console.log("endEvent fired");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG animation with SMIL](/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
- {{domxref("SVGAnimationElement.beginEvent_event", "beginEvent")}} event
- {{domxref("SVGAnimationElement.repeatEvent_event", "repeatEvent")}} event
