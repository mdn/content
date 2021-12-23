---
title: 'SpeechRecognition: error event'
slug: Web/API/SpeechRecognition/error_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.error_event
---
{{APIRef("Web Speech API")}}

The **`error`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}} object is fired when a speech recognition error occurs.

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
      <td>{{domxref("SpeechRecognitionErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onerror"
            >onerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `error` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('error', function(event) {
  console.log('Speech recognition error detected: ' + event.error);
});
```

Or use the [`onerror`](/en-US/docs/Web/API/SpeechRecognition/onerror) event handler property:

```js
recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [`onerror`](/en-US/docs/Web/API/SpeechRecognition/onerror)
