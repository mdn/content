---
title: 'MediaDevices: devicechange event'
slug: Web/API/MediaDevices/devicechange_event
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Video
  - events
browser-compat: api.MediaDevices.devicechange_event
---
{{APIRef}}

A `devicechange` event is sent to a {{domxref("MediaDevices")}} instance whenever a media device such as a camera, microphone, or speaker is connected to or removed from the system. It's a generic {{domxref("Event")}} with no added properties.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/MediaDevices/ondevicechange"
            >ondevicechange</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Example

You can use the `devicechange` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
navigator.mediaDevices.addEventListener('devicechange', function(event) {
  updateDeviceList();
});
```

Or use the `ondevicechange` event handler property:

```js
navigator.mediaDevices.ondevicechange = function(event) {
  updateDeviceList();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.ondevicechange")}}
