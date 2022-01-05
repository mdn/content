---
title: 'SpeechSynthesisUtterance: end event'
slug: Web/API/SpeechSynthesisUtterance/end_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.end_event
---
{{APIRef("Web Speech API")}}

The **`end`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance has finished being spoken.

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
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onend"
            >onend</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `end` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('end', function(event) {
  console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
});
```

Or use the [`onend`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onend) event handler property:

```js
utterThis.onend = function(event) {
  console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
