---
title: 'HTMLVideoElement: enterpictureinpicture event'
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
tags:
  - API
  - Event
  - Interface
  - Media
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
browser-compat: api.HTMLVideoElement.enterpictureinpicture_event
---
{{APIRef("HTMLVideoElement")}}

The `enterpictureinpicture` event is fired when the {{DOMxRef("HTMLVideoElement")}} enters picture-in-picture mode successfully.

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
        {{domxref("HTMLVideoElement.onenterpictureinpicture")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

These examples add an event listener for the HTMLVideoElement's `enterpictureinpicture` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener('enterpictureinpicture', onEnterPip, false);

button.onclick = function() => {
  video.requestPictureInPicture();
}
```

Using the `onenterpictureinpicture` event handler property:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = function() => {
  video.requestPictureInPicture();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API")}}
