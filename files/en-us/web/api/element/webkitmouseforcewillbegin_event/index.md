---
title: 'Element: webkitmouseforcewillbegin event'
slug: Web/API/Element/webkitmouseforcewillbegin_event
page-type: web-api-event
tags:
  - API
  - Element
  - Event
  - Force Touch
  - Input
  - MouseEvent
  - NeedsExample
  - Non-standard
  - Reference
  - UI
  - Web
  - WebKit
  - apple
  - macOS
  - webkitmouseforcewillbegin
browser-compat: api.Element.webkitmouseforcewillbegin_event
---
{{APIRef}}{{Non-standard_header()}}

Safari for macOS fires the non-standard **`webkitmouseforcewillbegin`** event at an {{domxref("Element")}} before firing the initial {{domxref("Element/mousedown_event", "mousedown")}} event.

This offers the opportunity to tell the system not to trigger any default Force Touch actions if and when the click turns into a [Force Touch event](/en-US/docs/Web/API/Force_Touch_events).

To instruct macOS not to engage any default Force Touch actions if the user apply enough pressure to activate a Force Touch event, call {{domxref("Event.preventDefault", "preventDefault()")}} on the `webkitmouseforcewillbegin` event object.

**`webkitmouseforcewillbegin`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('webkitmouseforceup', (event) => {});

onwebkitmouseforceup = (event) => { };
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Event properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Returns `true` if the <kbd>alt</kbd> key was down when the mouse event was fired.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : The button number that was pressed (if applicable) when the mouse event was fired.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : The buttons being pressed (if any) when the mouse event was fired.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : The X coordinate of the mouse pointer in local (DOM content) coordinates.
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : The Y coordinate of the mouse pointer in local (DOM content) coordinates.
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Returns `true` if the <kbd>control</kbd> key was down when the mouse event was fired.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Returns the horizontal coordinate of the event relative to the current layer.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Returns the vertical coordinate of the event relative to the current layer.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Returns `true` if the <kbd>meta</kbd> key was down when the mouse event was fired.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : The X coordinate of the mouse pointer relative to the position of the last {{domxref("Element/mousemove_event", "mousemove")}} event.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : The Y coordinate of the mouse pointer relative to the position of the last {{domxref("Element/mousemove_event", "mousemove")}} event.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : The X coordinate of the mouse pointer relative to the whole document.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : The Y coordinate of the mouse pointer relative to the whole document.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : The secondary target for the event, if there is one.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : The X coordinate of the mouse pointer in global (screen) coordinates.
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : The Y coordinate of the mouse pointer in global (screen) coordinates.
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Returns `true` if the <kbd>shift</kbd> key was down when the mouse event was fired.
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : The amount of pressure applied to a touch or tablet device when generating the event; this value ranges between `0.0` (minimum pressure) and `1.0` (maximum pressure).
    Instead of using this deprecated (and non-standard) property, you should use {{domxref("PointerEvent")}} and look at its {{domxref("PointerEvent.pressure", "pressure")}} property.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : The type of device that generated the event (one of the `MOZ_SOURCE_*` constants).
    This lets you, for example, determine whether a mouse event was generated by an actual mouse or by a touch event (which might affect the degree of accuracy with which you interpret the coordinates associated with the event).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : The amount of pressure applied when clicking.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias for {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias for {{domxref("MouseEvent.clientY")}}.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Force Touch events](/en-US/docs/Web/API/Force_Touch_events)
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
