---
title: "SVGElement: error event"
short-title: error
slug: Web/API/SVGElement/error_event
page-type: web-api-event
browser-compat: api.SVGElement.error_event
---

{{APIRef("SVG")}}

The `error` event is fired when an SVG element does not load properly or when an error occurs during script execution.

This basically implements the standard `error` DOM event.

This event is not cancelable.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("error", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
svgElem.addEventListener("error", () => {
  console.log("SVG not loaded properly.");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
