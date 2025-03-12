---
title: "HTMLMediaElement: preservesPitch property"
short-title: preservesPitch
slug: Web/API/HTMLMediaElement/preservesPitch
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.preservesPitch
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.preservesPitch`** property determines whether or not the browser should adjust the pitch of the audio to compensate for changes to the playback rate made by setting {{domxref("HTMLMediaElement.playbackRate")}}.

## Value

A boolean value defaulting to `true`.

## Examples

### Setting the preservesPitch property

In this example, we have an {{HTMLElement("audio")}} element, a range control that adjusts the playback rate, and a checkbox that sets `preservesPitch`.

Try playing the audio, then adjusting the playback rate, then enabling and disabling the checkbox.

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>

<div>
  <label for="rate">Adjust playback rate:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1" />
</div>

<div>
  <label for="pitch">Preserve pitch:</label>
  <input type="checkbox" id="pitch" name="pitch" checked />
</div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const audio = document.querySelector("audio");
document.getElementById("rate").addEventListener("change", (e) => {
  audio.playbackRate = e.target.value;
});
document.getElementById("pitch").addEventListener("change", (e) => {
  audio.preservesPitch = e.target.checked;
});
```

{{EmbedLiveSample("Setting the preservesPitch property")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.playbackRate")}}
- [Web Audio playbackRate explained](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
