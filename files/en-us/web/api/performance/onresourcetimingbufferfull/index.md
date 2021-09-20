---
title: Performance.onresourcetimingbufferfull
slug: Web/API/Performance/onresourcetimingbufferfull
tags:
  - API
  - Property
  - Reference
  - Web Peformance
browser-compat: api.Performance.onresourcetimingbufferfull
---
{{APIRef("Resource Timing API")}}

The **`onresourcetimingbufferfull`** property is an event
handler that will be called when the {{event("resourcetimingbufferfull")}} event is
fired. This event is fired when the browser's resource timing performance buffer is
full.

{{AvailableInWorkers}}

## Syntax

```js
callback = performance.onresourcetimingbufferfull = buffer_full_cb;
```

### Return value

- callback
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) that is invoked when the
    {{event("resourcetimingbufferfull")}} event is fired.

## Examples

The following example sets a callback function on the
`onresourcetimingbufferfull` property.

```js
function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Set a callback if the resource buffer becomes filled
  performance.onresourcetimingbufferfull = buffer_full;
}
<body onload="init()">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("resourcetimingbufferfull")}} event
- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
