---
title: GlobalEventHandlers.onloadend
slug: Web/API/GlobalEventHandlers/onloadend
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - Web
  - events
  - onloadend
browser-compat: api.GlobalEventHandlers.onloadend
---
{{ApiRef}}

The **`onloadend`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing
the code to be called when the {{event("loadend")}} event is raised (when progress has
stopped on the loading of a resource.)

## Syntax

```js
img.onloadend = funcRef;
```

### Value

`funcRef` is the handler function to be called when the resource's
`loadend` event fires.

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

## Browser compatibility

{{Compat}}
