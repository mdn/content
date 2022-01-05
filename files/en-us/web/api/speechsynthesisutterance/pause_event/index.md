---
title: 'SpeechSynthesisUtterance: pause event'
slug: Web/API/SpeechSynthesisUtterance/pause_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.pause_event
---
{{APIRef("Web Speech API")}}

The **`pause`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance is paused part way through.

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
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause"
            >onpause</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `pause` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('pause', function(event) {
  console.log('Speech paused after ' + event.elapsedTime + ' seconds.');
});
```

Or use the [`onpause`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause) event handler property:

```js
utterThis.onpause = function(event) {
  console.log('Speech paused after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
