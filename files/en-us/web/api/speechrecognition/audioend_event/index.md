---
title: 'SpeechRecognition: audioend event'
slug: Web/API/SpeechRecognition/audioend_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.audioend_event
---
{{APIRef("Web Speech API")}}

The **`audioend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the user agent has finished capturing audio for speech recognition.

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
        <code
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onaudioend"
            >onaudioend</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `audioend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('audioend', function() {
  console.log('Audio capturing ended');
});
```

Or use the [onaudioend](/en-US/docs/Web/API/SpeechRecognition/onaudioend) event handler property:

```js
recognition.onaudioend = function() {
  console.log('Audio capturing ended');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [`onaudioend`](/en-US/docs/Web/API/SpeechRecognition/onaudioend) event handler
