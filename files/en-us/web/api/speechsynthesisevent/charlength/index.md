---
title: "SpeechSynthesisEvent: charLength property"
short-title: charLength
slug: Web/API/SpeechSynthesisEvent/charLength
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisEvent.charLength
---

{{APIRef("Web Speech API")}}

The read-only **`charLength`** property of the {{DOMxRef("SpeechSynthesisEvent")}} interface returns the number of characters left to be spoken after the character at the {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}} position.

If the speech engine can't determine it, it returns 0.

## Value

An integer.

## Examples

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  const charLeft = event.charLength;
  if (charLeft) {
    console.log(
      `Speech paused. There are still ${charLeft} characters to be spoken.`,
    );
  } else {
    console.log(
      "Speech paused. The underlying speech engine can't tell how many characters are left.",
    );
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
