---
title: "Element: beforexrselect event"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.beforexrselect_event
---

{{APIRef}}{{SeeCompatTable}}

The **`beforexrselect`** event is fired before WebXR select events ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) are dispatched. It can be used to suppress XR world input events while the user is interacting with a DOM overlay UI.

This event [bubbles](/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling), is [cancelable](/en-US/docs/Web/API/Event/cancelable) and is [composed](/en-US/docs/Web/API/Event/composed).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforexrselect", (event) => {});

onbeforexrselect = (event) => {};
```

## Event type

An {{domxref("XRSessionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Event properties

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which the event refers.

## Event availability

The **`beforexrselect`** event is a global event and available to the following interfaces:

- {{domxref("Window")}}
- {{domxref("Document")}}
- {{domxref("HTMLElement")}}
- {{domxref("SVGElement")}}
- {{domxref("MathMLElement")}}

## Examples

To suppress WebXR select events ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}), an application can listen for the `beforexrselect` event. The event bubbles, so a call to {{domxref("Event/preventDefault", "preventDefault()")}} on the DOM overlay element will prevent any WebXR select events within this container allowing interaction with the DOM element and avoiding duplicate event input to the XR world.

```js
document
  .getElementById("xr-overlay")
  .addEventListener("beforexrselect", (ev) => ev.preventDefault());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession/select_event", "select")}} event
- {{domxref("XRSession/selectstart_event", "selectstart")}} event
- {{domxref("XRSession/selectend_event", "selectend")}} event
