---
title: 'SpeechRecognition: speechend event'
slug: Web/API/SpeechRecognition/speechend_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.speechend_event
---
{{APIRef("Web Speech API")}}

The **`speechend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when speech recognized by the speech recognition service has stopped being detected.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onspeechend"
            >onspeechend</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `speechend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('speechend', function() {
  console.log('Speech has stopped being detected');
});
```

Or use the [`onspeechend`](/en-US/docs/Web/API/SpeechRecognition/onspeechend) event handler property:

```js
recognition.onspeechend = function() {
  console.log('Speech has stopped being detected');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
