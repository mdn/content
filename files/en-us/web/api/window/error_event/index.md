---
title: 'Window: error event'
slug: Web/API/Window/error_event
page-type: web-api-event
tags:
  - API
  - Event
  - UI Events
  - Window
browser-compat: api.Window.error_event
---
{{APIRef}}

The `error` event is fired on a {{domxref("Window")}} object when a resource failed to load or couldn't be used — for example if a script has an execution error.

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
      <td>{{domxref("Event")}} or {{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

The event object is a {{domxref("UIEvent")}} instance if it was generated from a user interface element, or an {{domxref("Event")}} instance otherwise.

## Examples

### Live example

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
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

button {
  height: 2rem;
  margin: .5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JS

```js
const log = document.querySelector('.event-log-contents');

window.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: ${event.message}\n`;
    console.log(event)
});

const scriptError = document.querySelector('#script-error');
scriptError.addEventListener('click', () => {
    const badCode = 'const s;';
    eval(badCode);
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This event on `Element` targets: {{domxref("Element/error_event", "error")}} event
