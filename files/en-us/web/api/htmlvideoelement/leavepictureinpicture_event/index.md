---
title: 'HTMLVideoElement: leavepictureinpicture event'
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
tags:
  - API
  - Event
  - Interface
  - Media
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
browser-compat: api.HTMLVideoElement.leavepictureinpicture_event
---
{{APIRef("HTMLVideoElement")}}

The `leavepictureinpicture` event is fired when the {{DOMxRef("HTMLVideoElement")}} leaves picture-in-picture mode successfully.

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
      <td>{{DOMxRef("PictureInPictureEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Target</th>
      <td>{{DOMxRef("HTMLVideoElement")}}</td>
    </tr>
    <tr>
      <th scope="row">Default Action</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("HTMLVideoElement.onleavepictureinpicture")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

These examples add an event listener for the HTMLVideoElement's `leavepictureinpicture` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip, false);

button.onclick = function() => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

Using the `onleavepictureinpicture` event handler property:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = function() => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API")}}
