---
title: 'SpeechRecognition: start event'
slug: Web/API/SpeechRecognition/start_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.start_event
---
{{APIRef("Web Speech API")}}

The **`start`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}} object is fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.

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
          ><a href="/en-US/docs/Web/API/SpeechRecognition/onstart"
            >onstart</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `start` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('start', function() {
  console.log('Speech recognition service has started');
});
```

Or use the [`onstart`](/en-US/docs/Web/API/SpeechRecognition/onstart) event handler property:

```js
recognition.onstart = function() {
  console.log('Speech recognition service has started');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
