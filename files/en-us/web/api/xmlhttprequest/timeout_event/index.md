---
title: 'XMLHttpRequest: timeout event'
slug: Web/API/XMLHttpRequest/timeout_event
tags:
  - API
  - Event
  - Reference
  - XHR
  - XMLHttpRequest
  - events
  - timeout
browser-compat: api.XMLHttpRequest.timeout_event
---
{{APIRef}}

The **`timeout`** event is fired when progression is terminated due to preset time expiring.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
const client = new XMLHttpRequest();
client.open('GET', 'http://www.example.org/example.txt');
client.ontimeout = () => {
    console.error('Timeout!!')
};

client.send();
```

You could also set up the event handler using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:

```js
client.addEventListener('timeout', () => {
    console.error("Timeout!!");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
