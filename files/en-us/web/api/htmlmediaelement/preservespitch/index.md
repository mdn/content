---
title: HTMLMediaElement.preservesPitch
slug: Web/API/HTMLMediaElement/preservespitch
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
browser-compat: api.HTMLMediaElement.preservesPitch
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.preservesPitch`** property determines whether or not the browser should adjust the pitch of the audio to compensate for changes to the playback rate made by setting {{domxref("HTMLMediaElement.playbackRate")}}.

By default this property is  `true` (the pitch is adjusted).

## Syntax

```js
// video
video.preservesPitch = false;
// audio
audio.preservesPitch = false;
```

### Value

A boolean value defaulting to `true`.

## Example

In this example, we have an {{HTMLElement("audio")}} element, a range control that adjusts the playback rate, and a checkbox that sets `preservesPitch`.

Try playing the audio, then adjusting the playback rate, then enabling and disabling the checkbox.

```html
<audio controls src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>

<div>
  <label for="rate">Adjust playback rate:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1">
</div>

<div>
  <label for="pitch">Preserve pitch:</label>
  <input type="checkbox" id="pitch" name="pitch" checked>
</div>
```

```css hidden
div {
  margin: .5rem 0;
}
```

```js
const audio = document.querySelector("audio");

const rate = document.querySelector('#rate');
rate.addEventListener('input', () => audio.playbackRate = rate.value );

const pitch = document.querySelector('#pitch');
pitch.addEventListener('change', () => {
  audio.mozPreservesPitch = pitch.checked;
  audio.preservesPitch = pitch.checked;
});
```

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
