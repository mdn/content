---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Web
browser-compat: api.HTMLMediaElement.readyState
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.readyState`** property indicates the
readiness state of the media.

## Value

An `unsigned short`. Possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>HAVE_NOTHING</code></td>
      <td>0</td>
      <td>No information is available about the media resource.</td>
    </tr>
    <tr>
      <td><code>HAVE_METADATA</code></td>
      <td>1</td>
      <td>
        Enough of the media resource has been retrieved that the metadata
        attributes are initialized. Seeking will no longer raise an exception.
      </td>
    </tr>
    <tr>
      <td><code>HAVE_CURRENT_DATA</code></td>
      <td>2</td>
      <td>
        Data is available for the current playback position, but not enough to
        actually play more than one frame.
      </td>
    </tr>
    <tr>
      <td><code>HAVE_FUTURE_DATA</code></td>
      <td>3</td>
      <td>
        Data for the current playback position as well as for at least a little
        bit of time into the future is available (in other words, at least two
        frames of video, for example).
      </td>
    </tr>
    <tr>
      <td><code>HAVE_ENOUGH_DATA</code></td>
      <td>4</td>
      <td>
        Enough data is available—and the download rate is high enough—that the
        media can be played through to the end without interruption.
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example will listen for audio data to be loaded for the element \`example\`. It will
then check if at least the current playback position has been loaded. If it has, the
audio will play.

```html
<audio id="example" preload="auto">
 <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById('example');

obj.addEventListener('loadeddata', () => {

  if (obj.readyState >= 2) {
    obj.play();
  }

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
