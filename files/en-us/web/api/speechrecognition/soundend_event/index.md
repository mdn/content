---
title: 'SpeechRecognition: soundend event'
slug: Web/API/SpeechRecognition/soundend_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.soundend_event
---
{{APIRef("Web Speech API")}}

The **`soundend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when any sound — recognisable speech or not — has stopped being detected.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onsoundend"
            >onsoundend</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `soundend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('soundend', function(event) {
  console.log('Sound has stopped being received');
});
```

Or use the [`onsoundend`](/en-US/docs/Web/API/SpeechRecognition/onsoundend) event handler property:

```js
recognition.onsoundend = function(event) {
  console.log('Sound has stopped being received');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
