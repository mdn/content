---
title: "Element: DOMActivate event"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
page-type: web-api-event
status:
  - deprecated
browser-compat: api.Element.DOMActivate_event
---

{{APIRef}}{{Deprecated_Header}}

The **`DOMActivate`** event is fired at an element when it becomes active, such as when it is clicked on using the mouse or a keypress is used to navigate to it.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("DOMActivate", (event) => {});

onDOMActivate = (event) => {};
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Event properties

[...]

## Examples

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.2"
  baseProfile="tiny"
  xmlns:ev="http://www.w3.org/2001/xml-events"
  width="6cm"
  height="5cm"
  viewBox="0 0 600 500">
  <desc>Example: invoke an ECMAScript function from a DOMActivate event</desc>

  <!-- ECMAScript to change the radius -->
  <script type="application/ecmascript">
    <![CDATA[ function change(evt) { const circle = evt.target; const
    currentRadius = circle.getFloatTrait("r"); if (currentRadius === 100) {
    circle.setFloatTrait("r", currentRadius * 2); } else {
    circle.setFloatTrait("r", currentRadius * 0.5); } } ]]>
  </script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="application/ecmascript" ev:event="DOMActivate">
      change(evt);
    </handler>
  </circle>

  <text
    x="300"
    y="480"
    font-family="Verdana"
    font-size="35"
    text-anchor="middle">
    Activate the circle to change its size
  </text>
</svg>
```

{{EmbedLiveSample("Examples", 640, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
