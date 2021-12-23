---
title: 'SpeechSynthesisUtterance: boundary event'
slug: Web/API/SpeechSynthesisUtterance/boundary_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.boundary_event
---
{{APIRef("Web Speech API")}}

The **`boundary`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the spoken utterance reaches a word or sentence boundary.

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
      <th scope="row">Event handler</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary"
            >onboundary</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `boundary` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('boundary', function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
});
```

Or use the [`onboundary`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary) event handler property:

```js
utterThis.onboundary = function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [`onboundary`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary)
