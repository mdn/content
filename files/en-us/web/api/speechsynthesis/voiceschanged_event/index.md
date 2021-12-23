---
title: 'SpeechSynthesis: voiceschanged event'
slug: Web/API/SpeechSynthesis/voiceschanged_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesis.voiceschanged_event
---
{{APIRef("Web Speech API")}}

The **`voiceschanged`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the list of {{domxref("SpeechSynthesisVoice")}} objects that would be returned by the {{domxref("SpeechSynthesis.getVoices()")}} method has changed (when the `voiceschanged` event fires.)

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
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged"
            >onvoiceschanged</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This could be used to repopulate a list of voices that the user can choose between when the event fires. You can use the `voiceschanged` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var synth = window.speechSynthesis;

synth.addEventListener('voiceschanged', function() {
  var voices = synth.getVoices();
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
});
```

Or use the [`onvoiceschanged`](/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged) event handler property:

```js
var synth = window.speechSynthesis;
synth.onvoiceschanged = function() {
  var voices = synth.getVoices();
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
