---
title: 'Window: blur event'
slug: Web/API/Window/blur_event
tags:
  - API
  - Event
  - FocusEvent
  - Reference
  - Web
  - Window
  - blur
  - onblur
browser-compat: api.Window.blur_event
---
{{APIRef}}

The **`blur`** event fires when an element has lost focus.

The opposite of `blur` is {{domxref("Window/focus_event", "focus")}}.

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
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onblur", "onblur")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th scope="row">Composed</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Examples

### Live example

This example changes the appearance of a document when it loses focus. It uses {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to monitor {{domxref("Window/focus_event", "focus")}} and `blur` events.

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add('paused');
  log.textContent = 'FOCUS LOST!';
}

function play() {
  document.body.classList.remove('paused');
  log.textContent = 'This document has focus. Click outside the document to lose focus.';
}

const log = document.getElementById('log');

window.addEventListener('blur', pause);
window.addEventListener('focus', play);
```

#### Result

{{EmbedLiveSample("Live_example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The value of {{DOMxRef("Document.activeElement")}} varies across browsers while this event is being handled ({{bug(452307)}}): IE10 sets it to the element that the focus will move to, while Firefox and Chrome often set it to the `body` of the document.

## See also

- Related event: {{domxref("Window/focus_event", "focus")}}
- This event on `Element` targets: {{domxref("Element/blur_event", "blur")}} event
