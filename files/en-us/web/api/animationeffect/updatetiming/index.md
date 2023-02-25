---
title: AnimationEffect.updateTiming()
slug: Web/API/AnimationEffect/updateTiming
page-type: web-api-instance-method
browser-compat: api.AnimationEffect.updateTiming
---

{{ APIRef("Web Animations API") }}

The `updateTiming()` method of the {{domxref("AnimationEffect")}} interface updates the specified timing properties for an animation effect.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameters

- `timing`
  - : An object containing zero or more of the properties from the return value of {{domxref("AnimationEffect.getTiming()")}}, representing the timing properties to update.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if invalid values are provided for any of the timing properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
