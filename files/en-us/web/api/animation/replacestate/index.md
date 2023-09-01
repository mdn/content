---
title: "Animation: replaceState property"
short-title: replaceState
slug: Web/API/Animation/replaceState
page-type: web-api-instance-property
browser-compat: api.Animation.replaceState
---

{{ APIRef("Web Animations") }}

The read-only **`Animation.replaceState`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) indicates whether the animation has been [removed by the browser automatically](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) after being replaced by another animation.

## Value

A string that represents the replace state of the animation. The value can be one of:

- `active`
  - : The initial value of the animation's replace state when the animation is created.
- `persisted`
  - : The animation has been explicitly persisted by invoking {{domxref("Animation.persist()")}} on it.
- `removed`
  - : The animation has been removed by the browser automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.remove_event","remove")}} event
- {{domxref("Animation.persist()")}}
