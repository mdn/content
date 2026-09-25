---
title: "HTMLElement: load event"
short-title: load
slug: Web/API/HTMLElement/load_event
page-type: web-api-event
browser-compat: api.HTMLElement.load_event
---

{{APIRef("HTML DOM")}}

The **`load`** event fires for elements containing a resource when the resource has successfully loaded. Currently, the list of supported HTML elements are: {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("track")}}.

> [!NOTE]
> The `load` event on {{domxref("HTMLBodyElement#event_handlers", "HTMLBodyElement")}} is actually an alias for the {{domxref("Window/load_event", "window.onload")}} event. Therefore, the `load` event will only fire on the `<body>` element once all of the document's resources have loaded or errored. However, for the sake of clarity, it is recommended that the event handler is attached to the `window` object directly rather than on `HTMLBodyElement`.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

### Handling resources that have already loaded

A resource may finish loading before your script registers a `load` event listener. In that case, the listener will not receive the event that has already fired.

For example, an image in the HTML may load while the browser is still receiving and parsing the rest of the document, before it reaches a subsequent script that registers the listener. The listener can also be registered too late if the script is loaded asynchronously or deferred, or if it waits for {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} before registering the listener. Server-rendered HTML using frameworks such as React or Vue can have the same issue because event handlers written in JSX or templates are compiled into JavaScript calls, not HTML event handler attributes.

There are some ways to ensure that the event handler is registered as soon as possible, before the resource loads. For example, you can use an [HTML event handler attribute](/en-US/docs/Web/HTML/Reference/Attributes#event_handler_attributes) if you don't mind its undesirable aspects, or you can dynamically create the whole element in JavaScript and make sure the event listener is attached before starting the load (such as by assigning to `src` for images).

Alternatively, when registering the event handler, you can check if the resource has already loaded—and if so, immediately trigger the handler. For an image, you can check its {{domxref("HTMLImageElement.complete", "complete")}} and {{domxref("HTMLImageElement.naturalWidth", "naturalWidth")}} properties after registering the listener. `complete` checks that the request completed; `naturalWidth > 0` ensures that an actual image was loaded.

```js
const image = document.getElementById("image");
let handled = false;

function handleLoaded() {
  if (handled) return;
  handled = true;
  // Use the loaded image here.
}

image.addEventListener("load", handleLoaded, { once: true });

if (image.complete && image.naturalWidth > 0) {
  handleLoaded();
}
```

## Examples

This example prints to the screen whenever the {{HtmlElement("img")}} element successfully loads its resource.

### HTML

```html
<img id="image" alt="MDN logo" width="72" />
<div><button>Reload</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.appendChild(document.createElement("div")).textContent =
    "loaded!";
};

document.querySelector("button").addEventListener("click", reload);
reload();

function reload() {
  image.src = "/shared-assets/images/examples/favicon144.png";
}
```

### Result

The example sets the image's source after registering the handler so that it receives the initial `load` event as well as events from the Reload button.

{{EmbedLiveSample("Example", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events
  - Window: {{domxref("Window/load_event", "load")}} event
  - Window: {{domxref("Window/error_event", "error")}} event
