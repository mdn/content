---
title: 'Performance: resourcetimingbufferfull event'
slug: Web/API/Performance/resourcetimingbufferfull_event
tags:
  - API
  - DOM
  - Event
  - Performance
  - Reference
  - Web Performance
  - onresourcetimingbufferfull
browser-compat: api.Performance.resourcetimingbufferfull_event
---
{{APIRef}}

The `resourcetimingbufferfull` event is fired when the browser's [resource timing buffer](/en-US/docs/Web/API/Performance/setResourceTimingBufferSize) is full.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example sets a callback function on the `onresourcetimingbufferfull` property.

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

Note that you could also set up the handler using the addEventListener() function:

```js
performance.addEventListener('resourcetimingbufferfull', buffer_full);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
