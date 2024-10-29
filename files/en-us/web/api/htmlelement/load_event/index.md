---
title: "HTMLElement: load event"
short-title: load
slug: Web/API/HTMLElement/load_event
page-type: web-api-event
browser-compat: api.HTMLElement.load_event
---

{{APIRef}}

The **`load`** event fires for elements containing a resource when the resource has successfully loaded. Currently, the list of supported HTML elements are: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("track")}}.

> [!NOTE]
> The `load` event on {{domxref("HTMLBodyElement#event_handlers", "HTMLBodyElement")}} is actually an alias for the {{domxref("Window/load_event", "window.onload")}} event. Therefore, the `load` event will only fire on the `<body>` element once all of the document's resources have loaded or errored. However, for the sake of clarity, it is recommended that the event handler is attached to the `window` object directly rather than on `HTMLBodyElement`.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
elt.addEventListener("load", (event) => { ... });
// or
elt.onload = (event) => { ... };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example prints to the screen whenever the {{HtmlElement("img")}} element successfully loads its resource.

### HTML

```html
<img id="image" src="favicon144.png" alt="MDN logo" width="72" />
<div><button onclick="reload()">Reload</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.appendChild(document.createElement("div")).textContent =
    "loaded!";
};

function reload() {
  image.src = "favicon144.png";
}
```

### Result

{{EmbedLiveSample("Example", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - Window: {{domxref("Window/load_event", "load")}} event
  - Window: {{domxref("Window/error_event", "error")}} event
