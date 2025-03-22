---
title: "HTMLMediaElement: readyState property"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.readyState
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.readyState`** property indicates the
readiness state of the media.

## Value

A number which is one of the five possible state constants defined on the {{domxref("HTMLMediaElement")}} interface:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : No information is available about the media resource.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Data is available for the current playback position, but not enough to actually play more than one frame.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption.

## Examples

This example will listen for audio data to be loaded for the element `example`. It will
then check if at least the current playback position has been loaded. If it has, the
audio will play.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.readyState` property
