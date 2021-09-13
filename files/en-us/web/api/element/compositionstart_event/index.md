---
title: 'Element: compositionstart event'
slug: Web/API/Element/compositionstart_event
tags:
  - Element
  - Event
  - Input method
  - Reference
  - compositionstart
browser-compat: api.Element.compositionstart_event
---
{{APIRef}}

The **`compositionstart`** event is fired when a text composition system such as an {{glossary("input method editor")}} starts a new composition session.

For example, this event could be fired after a user starts entering a Chinese character using a [Pinyin](https://en.wikipedia.org/wiki/Pinyin) IME.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Examples

```js
const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener('compositionstart', (event) => {
  console.log(`generated characters were: ${event.data}`);
});
```

### Live example

#### HTML

```html
<div class="control">
  <label for="name">On macOS, click in the textbox below,<br> then type <kbd>option</kbd> + <kbd>`</kbd>, then <kbd>a</kbd>:</label>
  <input type="text" id="example" name="example">
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="25"></textarea>
  <button class="clear-log">Clear</button>
</div>
```

```css hidden
body {
  padding: .2rem;
  display: grid;
  grid-template-areas: "control  log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

input[type="text"] {
  margin: .5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

#### JS

```js
const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clearLog = document.querySelector('.clear-log');

clearLog.addEventListener('click', () => {
    log.textContent = '';
});

function handleEvent(event) {
    log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener('compositionstart', handleEvent);
inputElement.addEventListener('compositionupdate', handleEvent);
inputElement.addEventListener('compositionend', handleEvent);
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '180px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.
