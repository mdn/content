---
title: 'SpeechSynthesisUtterance: start event'
slug: Web/API/SpeechSynthesisUtterance/start_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.start_event
---
{{APIRef("Web Speech API")}}

The **`start`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance has begun to be spoken.

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
      <td>{{domxref("SpeechSynthesisEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart"
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
utterThis.addEventListener('start', function(event) {
  console.log('We have started uttering this speech: ' + event.utterance.text);
});
```

Or use the [`onstart`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart) event handler property:

```js
utterThis.onstart = function(event) {
  console.log('We have started uttering this speech: ' + event.utterance.text);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
