---
title: SpeechSynthesis.pause()
slug: Web/API/SpeechSynthesis/pause
tags:
  - API
  - Experimental
  - Method
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - pause
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.pause
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`pause()`** method of the {{domxref("SpeechSynthesis")}}
interface puts the `SpeechSynthesis` object into a paused state.

## Syntax

```js
speechSynthesisInstance.pause();
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
