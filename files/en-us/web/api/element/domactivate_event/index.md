---
title: 'Element: DOMActivate event'
slug: Web/API/Element/DOMActivate_event
tags:
  - API
  - DOM
  - Deprecated
  - Element
  - Event
  - Input
  - Mouse Events
  - MouseEvent
  - Reference
  - activate event
  - onactivate
browser-compat: api.Element.DOMActivate_event
---
{{APIRef}}

{{Deprecated_Header}}

The **`DOMActivate`** event is fired at an element when it becomes active, such as when it is clicked on using the mouse or a keypress is used to navigate to it.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
  </tbody>
</table>

## Examples

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny"
     xmlns:ev="http://www.w3.org/2001/xml-events"
     width="6cm" height="5cm" viewBox="0 0 600 500">

  <desc>Example: invoke an ECMAScript function from a DOMActivate event</desc>

  <!-- ECMAScript to change the radius -->
  <script type="application/ecmascript"><![CDATA[
    function change(evt) {
      var circle = evt.target;
      var currentRadius = circle.getFloatTrait("r");
      if (currentRadius == 100)
        circle.setFloatTrait("r", currentRadius * 2);
      else
        circle.setFloatTrait("r", currentRadius * 0.5);
    }
  ]]></script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="application/ecmascript" ev:event="DOMActivate"> change(evt); </handler>
  </circle>

  <text x="300" y="480" font-family="Verdana" font-size="35" text-anchor="middle">
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
