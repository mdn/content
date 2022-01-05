---
title: GlobalEventHandlers.onloadstart
slug: Web/API/GlobalEventHandlers/onloadstart
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - Web
  - events
  - onloadstart
browser-compat: api.GlobalEventHandlers.onloadstart
---
{{ApiRef}}

The **`onloadstart`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing
the code to be called when the {{event("loadstart")}} event is raised (when progress has
begun on the loading of a resource.)

## Syntax

```js
img.onloadstart = funcRef;
```

### Value

`funcRef` is the handler function to be called when the resource's
`loadstart` event fires.

## Examples

### HTML content

```html
<img src="myImage.jpg">
```

### JavaScript content

```js
// 'loadstart' fires first, then 'load', then 'loadend'

image.addEventListener('load', function(e) {
  console.log('Image loaded');
});

image.addEventListener('loadstart', function(e) {
  console.log('Image load started');
});

image.addEventListener('loadend', function(e) {
  console.log('Image load finished');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
