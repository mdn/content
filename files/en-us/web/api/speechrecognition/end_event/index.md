---
title: 'SpeechRecognition: end event'
slug: Web/API/SpeechRecognition/end_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.end_event
---
{{APIRef("Web Speech API")}}

The **`end`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}} object is fired when the speech recognition service has disconnected.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onend">onend</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `end` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('end', function() {
  console.log('Speech recognition service disconnected');
});
```

Or use the [`onend`](/en-US/docs/Web/API/SpeechRecognition/onend) event handler property:

```js
recognition.onend = function() {
  console.log('Speech recognition service disconnected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [`onend`](/en-US/docs/Web/API/SpeechRecognition/onend)
