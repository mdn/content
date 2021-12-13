---
title: 'SpeechSynthesisUtterance: mark event'
slug: Web/API/SpeechSynthesisUtterance/mark_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.mark_event
---
{{APIRef("Web Speech API")}}

The **`mark`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the spoken utterance reaches a named SSML "mark" tag.

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
          ><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark"
            >onmark</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `mark` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('mark', function(event) {
  console.log('A mark was reached: ' + event.name);
});
```

Or use the [`onmark`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark) event handler property:

```js
utterThis.onmark = function(event) {
  console.log('A mark was reached: ' + event.name);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
