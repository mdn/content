---
title: 'SpeechRecognition: audiostart event'
slug: Web/API/SpeechRecognition/audiostart_event
tags:
  - Event
  - Reference
  - SpeechRecognition
  - Web Speech API
  - audiostart
  - onaudiostart
browser-compat: api.SpeechRecognition.audiostart_event
---
{{APIRef("Web Speech API")}}

The **`audiostart`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the user agent has started to capture audio for speech recognition.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `audiostart` event in an {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}} method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('audiostart', function() {
  console.log('Audio capturing started');
});
```

Or use the [onaudiostart](/en-US/docs/Web/API/SpeechRecognition/onaudiostart) event handler property:

```js
recognition.onaudiostart = function() {
  console.log('Audio capturing started');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognition/onaudiostart", "onaudiostart")}} event handler property
