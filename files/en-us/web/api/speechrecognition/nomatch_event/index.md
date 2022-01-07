---
title: 'SpeechRecognition: nomatch event'
slug: Web/API/SpeechRecognition/nomatch_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.nomatch_event
---
{{APIRef("Web Speech API")}}

The **`nomatch`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the speech recognition service returns a final result with no significant recognition.

This may involve some degree of recognition, which doesn't meet or exceed the {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.

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
      <td>{{domxref("SpeechRecognitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onnomatch"
            >onnomatch</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `nomatch` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('nomatch', function() {
  console.log('Speech not recognized');
});
```

Or use the [`onnomatch`](/en-US/docs/Web/API/SpeechRecognition/onnomatch) event handler property:

```js
recognition.onnomatch = function() {
  console.log('Speech not recognized');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
