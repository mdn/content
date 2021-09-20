---
title: GlobalEventHandlers.onplay
slug: Web/API/GlobalEventHandlers/onplay
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onplay
---
{{ ApiRef("HTML DOM") }}

The **`onplay`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("play")}} events.

## Syntax

```js
element.onplay = handlerFunction;
var handlerFunction = element.onplay;
```

`handlerFunction` should be either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Example

```html
<p>This example demonstrates how to assign an "onplay" event to a video element.</p>

<video controls onplay="alertPlay()">
  <source src="mov_bbb.mp4" type="video/mp4">
  <source src="mov_bbb.ogg" type="video/ogg">
  Your browser does not support HTML5 video.
</video>

<p>Video courtesy of <a href="http://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.</p>

<script>
function alertPlay() {
  alert("The video has started to play.");
}
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("play")}}
- [Information on working with
  event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)
