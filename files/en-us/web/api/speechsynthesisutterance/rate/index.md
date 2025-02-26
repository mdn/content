---
title: "SpeechSynthesisUtterance: rate property"
short-title: rate
slug: Web/API/SpeechSynthesisUtterance/rate
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisUtterance.rate
---

{{APIRef("Web Speech API")}}

The **`rate`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the speed at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

## Value

A float representing the rate value.
It can range between 0.1 (lowest) and 10 (highest), with 1 being the default rate for the current platform or voice, which should correspond to a normal speaking rate.
Other values act as a percentage relative to this, so for example 2 is twice as fast, 0.5 is half as fast, etc.

Some speech synthesis engines or voices may constrain the minimum and maximum rates further.
If [SSML](https://www.w3.org/TR/speech-synthesis/) is used, this value will be overridden by [prosody tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) in the markup.

## Examples

### Adjusting playback rate

In this example we can adjust the playback rate using the slider, then play the utterance with the "Play" button.

#### HTML

```html
<p id="text">It was a dark and stormy night.</p>

<div id="rate-control">
  <label for="rate">Rate:</label>
  <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
</div>

<button id="play">Play</button>
```

#### CSS

```css
body {
  font-family: sans-serif;
}

#rate-control {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}
```

#### JavaScript

```js
const synth = window.speechSynthesis;

const text = document.querySelector("#text");
const play = document.querySelector("#play");
const rate = document.querySelector("#rate");

function speak() {
  if (synth.speaking) {
    synth.cancel();
  }
  const utterThis = new SpeechSynthesisUtterance(text.textContent);
  utterThis.addEventListener("error", () => {
    console.error("SpeechSynthesisUtterance error");
  });
  utterThis.rate = rate.value;
  synth.speak(utterThis);
}

play.addEventListener("click", speak);
```

#### Output

{{EmbedLiveSample("Adjusting playback rate")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
