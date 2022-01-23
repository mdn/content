---
title: 'SpeechSynthesisUtterance: error event'
slug: Web/API/SpeechSynthesisUtterance/error_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.error_event
---
{{APIRef("Web Speech API")}}

The **`error`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when an error occurs that prevents the utterance from being successfully spoken.

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
      <td>{{domxref("SpeechSynthesisErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror"
            >onerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `error` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('error', function(event) {
  console.log('An error has occurred with the speech synthesis: ' + event.error');
});
```

Or use the [`onerror`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror) event handler property:

```js
utterThis.onerror = function(event) {
  console.log('An error has occurred with the speech synthesis: ' + event.error');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
