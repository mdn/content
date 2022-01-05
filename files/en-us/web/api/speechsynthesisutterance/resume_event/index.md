---
title: 'SpeechSynthesisUtterance: resume event'
slug: Web/API/SpeechSynthesisUtterance/resume_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.resume_event
---
{{APIRef("Web Speech API")}}

The **`resume`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when a paused utterance is resumed.

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
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume"
            >onresume</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `resume` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('resume', function(event) {
  console.log('Speech resumed after ' + event.elapsedTime + ' seconds.');
});
```

Or use the [`onresume`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onend) event handler property:

```js
utterThis.onresume = function(event) {
  console.log('Speech resumed after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
