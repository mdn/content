---
title: 'SpeechRecognition: soundstart event'
slug: Web/API/SpeechRecognition/soundstart_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.soundstart_event
---
{{APIRef("Web Speech API")}}

The **`soundstart`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when any sound — recognisable speech or not — has been detected.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onsoundstart"
            >onsoundstart</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `soundstart` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('soundstart', function() {
  console.log('Some sound is being received');
});
```

Or use the [`onsoundstart`](/en-US/docs/Web/API/SpeechRecognition/onsoundstart) event handler property:

```js
recognition.onsoundstart = function() {
  console.log('Some sound is being received');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
