---
title: "Element: pointerdown event"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
page-type: web-api-event
browser-compat: api.Element.pointerdown_event
---

{{APIRef("Pointer Events")}}

The `pointerdown` event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.

This behavior is different from {{domxref("Element/mousedown_event", "mousedown")}} events. When using a physical mouse, `mousedown` events fire whenever any button on a mouse is pressed down. `pointerdown` events fire only upon the first button press; subsequent button presses don't fire `pointerdown` events.

> [!NOTE]
> For touchscreen browsers that allow [direct manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation), a `pointerdown` event triggers [implicit pointer capture](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture), which causes the target to capture all subsequent pointer events as if they were occurring over the capturing target. Accordingly, `pointerover`, `pointerenter`, `pointerleave`, and `pointerout` **will not fire** as long as this capture is set. The capture can be released manually by calling {{domxref('element.releasePointerCapture')}} on the target element, or it will be implicitly released after a `pointerup` or `pointercancel` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointerdown", (event) => { })

onpointerdown = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("Pointer down event");
});
```

Using the `onpointerdown` event handler property:

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("Pointer down event");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events
  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousedown_event", "mousedown")}}
