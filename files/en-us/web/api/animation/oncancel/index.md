---
title: Animation.oncancel
slug: Web/API/Animation/oncancel
tags:
  - API
  - Animation
  - Event Handler
  - Property
  - Reference
  - Web Animations
  - oncancel
  - web animations api
browser-compat: api.Animation.oncancel
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The **`oncancel`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface is the event handler for the {{event("cancel")}} event.

The `cancel` event can be triggered manually with {{domxref("Animation.cancel()")}} when the animation enters the `"idle"` play state from another state, such as when the animation is removed from an element before it finishes playing

> **Note:** Creating a new animation that is initially idle does not trigger a {{event("cancel")}} event on the new animation.

## Syntax

```js
var cancelHandler = Animation.oncancel;

Animation.oncancel = cancelHandler;
```

### Value

A function to be executed when the animation is cancelled, or `null` if there is no {{event("cancel")}} event handler.

## Examples

If this animation is canceled, remove its element.

```js
animation.oncancel = function() { animation.effect.target.remove(); };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- The {{event("cancel")}} event
