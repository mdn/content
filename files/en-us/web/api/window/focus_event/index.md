---
title: 'Window: focus event'
slug: Web/API/Window/focus_event
tags:
  - API
  - Event
  - Focus
  - FocusEvent
  - Reference
  - Web
  - Window
  - onfocus
browser-compat: api.Window.focus_event
---
{{APIRef}}

The **`focus`** event fires when an element has received focus.

The opposite of `focus` is {{domxref("Window/blur_event", "blur")}}.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onfocus", "onfocus")}}
      </td>
    </tr>
    <tr>
      <th>Sync / Async</th>
      <td>Sync</td>
    </tr>
    <tr>
      <th>Composed</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Examples

### Live example

This example changes the appearance of a document when it loses focus. It uses {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to monitor `focus` and {{domxref("Window/blur_event", "blur")}} events.

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

## See also

- Related event: {{domxref("Window/blur_event", "blur")}}
- This event on `Element` targets: {{domxref("Element/focus_event", "focus")}} event
