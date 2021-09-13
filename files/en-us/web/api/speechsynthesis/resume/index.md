---
title: SpeechSynthesis.resume()
slug: Web/API/SpeechSynthesis/resume
tags:
  - API
  - Experimental
  - Method
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - resume
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.resume
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`resume()`** method of the {{domxref("SpeechSynthesis")}}
interface puts the `SpeechSynthesis` object into a non-paused state:
resumes it if it was already paused.

## Syntax

```js
speechSynthesisInstance.resume();
```

### Returns

Void.

### Parameters

None.

## Examples

    var synth = window.speechSynthesis;

    var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
    var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

    synth.speak(utterance1);
    synth.speak(utterance2);

    synth.pause(); // pauses utterances being spoken

    synth.resume() // resumes speaking

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
