---
title: 'SVGElement: error event'
slug: Web/API/SVGElement/error_event
page-type: web-api-event
tags:
  - API
  - Error
  - Reference
  - SVGElement
  - events
browser-compat: api.SVGElement.error_event
---
{{APIRef("SVG")}}

The `error` event is fired when an SVG element does not load properly or when an error occurs during script execution.

This basically implements the standard `error` DOM event.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => {});

onerror = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
svgElem.addEventListener('error', () => {
  console.log('SVG not loaded properly.');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
