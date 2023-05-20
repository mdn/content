---
title: "Window: DOMContentLoaded event"
short-title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
page-type: web-api-event
browser-compat: api.Window.DOMContentLoaded_event
---

{{APIRef}}

The **`DOMContentLoaded`** event fires when the HTML document has been completely parsed, and all deferred scripts (`<script defer src="…">` and `<script type="module">`) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

`DOMContentLoaded` does not wait for stylesheets to load, however deferred scripts _do_ wait for stylesheets, and the `DOMContentLoaded` event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g. `<script>`) will wait for already-parsed stylesheets to load.

The original target for this event is the {{domxref("Document")}} that has loaded. You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event.

A different event, {{domxref("Window/load_event", "load")}}, should be used only to detect a fully-loaded page. It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("DOMContentLoaded", (event) => {});

onDOMContentLoaded = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Basic usage

```js
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
