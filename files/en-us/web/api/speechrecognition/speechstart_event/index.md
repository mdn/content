---
title: 'SpeechRecognition: speechstart event'
slug: Web/API/SpeechRecognition/speechstart_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.speechstart_event
---
{{APIRef("Web Speech API")}}

The **`speechstart`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when sound recognized by the speech recognition service as speech has been detected.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onspeechstart"
            >onspeechstart</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `speechstart` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('speechstart', function() {
  console.log('Speech has been detected');
});
```

Or use the [`onspeechstart`](/en-US/docs/Web/API/SpeechRecognition/onspeechstart) event handler property:

```js
recognition.onspeechstart = function() {
  console.log('Speech has been detected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
