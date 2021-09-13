---
title: 'PictureInPictureWindow: resize event'
slug: Web/API/PictureInPictureWindow/resize_event
tags:
  - API
  - Event
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
  - resize
browser-compat: api.PictureInPictureWindow.resize_event
---
{{APIRef}}

The **`resize`** event fires when the floating video window has been resized.

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
      <td>{{domxref("PictureInPictureWindow")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("PictureInPictureWindow.onresize", "onresize")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Window size logger

```html
<p>Resize the floating video window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
<video id="video" src="" muted autoplay></video>
```

```js
const video = document.querySelector('#video');
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize(evt) {
  heightOutput.textContent = evt.target.width;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture()
  .then(pictureInPictureWindow => {
    pictureInPictureWindow.onresize = resize;
  });
```

### addEventListener equivalent

You could set up the event handler using the [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
pictureInPictureWindow.addEventListener('resize', resize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PictureInPictureWindow.onresize")}}
