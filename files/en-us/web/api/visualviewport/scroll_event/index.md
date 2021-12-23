---
title: 'VisualViewport: scroll event'
slug: Web/API/VisualViewport/scroll_event
tags:
  - API
  - Reference
  - Scroll
  - VisualViewport
  - events
browser-compat: api.VisualViewport.scroll_event
---
{{APIRef("Window")}}

The **`scroll`** event of the [`VisualViewport`](/en-US/docs/Web/API/VisualViewport) interface is fired when the visual viewport is scrolled.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('scroll', event => { });

onscroll = event => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `scroll` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
visualViewport.addEventListener('scroll', function() {
  /* ... */
});
```

Or use the `onscroll` event handler property:

```js
visualViewport.onscroll = function() {
  /* ... */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Visual Viewport API homepage](/en-US/docs/Web/API/Visual_Viewport_API)
