---
title: "Window: load event"
short-title: load
slug: Web/API/Window/load_event
page-type: web-api-event
browser-compat: api.Window.load_event
---

{{APIRef}}

The **`load`** event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images, except those that are [loaded lazily](/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes).
This is in contrast to {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

This event is not cancelable and does not bubble.

> **Note:** _All events named `load` will not propagate to `Window`_, even with `bubbles` initialized to `true`. To catch `load` events on the `window`, that `load` event must be dispatched directly to the `window`.

> **Note:** The `load` event that is dispatched when the main document has loaded _is_ dispatched on the `window`, but has two mutated properties: `target` is `document`, and `path` is `undefined`. These two properties are mutated due to legacy conformance.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Log a message when the page is fully loaded:

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

The same, but using the `onload` event handler property:

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

### Live example

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
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

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Document [readyState](/en-US/docs/Web/API/Document/readyState) API
- Related events:
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/beforeunload_event", "beforeunload")}}
  - {{domxref("Window/unload_event", "unload")}}
