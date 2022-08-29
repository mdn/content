---
title: CanvasRenderingContext2D.isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.isContextLost
---
{{APIRef}}

The **`CanvasRenderingContext2D.isContextLost()`** method of the Canvas 2D API returns `true` if the rendering context is lost (and has not yet been reset).
This might occur due to driver crashes, running out of memory, and so on.

If the user agent detects that the canvas backing storage is lost it will fire the  [`contextlost` event](/en-US/docs/Web/API/HTMLCanvasElement/contextlost_event) at the associated [`HTMLCanvasElement`](/en-US/docs/Web/API/HTMLCanvasElement) and attempt to reset the backing storage to the default state (this is equivalent to calling {{domxref("CanvasRenderingContext2D.reset()")}}).
On success it will fire the [`contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event).

## Syntax

```js
isContextLost()
```

### Parameters

None.

### Return value

`true` if the rendering context was lost; `false` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- [`HTMLCanvasElement: contextlost` event](/en-US/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`HTMLCanvasElement: contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event)
