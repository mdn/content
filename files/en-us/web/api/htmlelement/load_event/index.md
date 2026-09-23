---
title: "HTMLElement: load event"
short-title: load
slug: Web/API/HTMLElement/load_event
page-type: web-api-event
browser-compat: api.HTMLElement.load_event
---

{{APIRef("HTML DOM")}}

The **`load`** event fires for elements containing a resource when the resource has successfully loaded. Currently, the list of supported HTML elements are: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("track")}}.

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

## Handling resources that have already loaded

A resource may finish loading before your script registers a `load` event listener. In that case, the listener will not receive the event that has already fired.

For an image, you can also check its {{domxref("HTMLImageElement.complete", "complete")}} and {{domxref("HTMLImageElement.naturalWidth", "naturalWidth")}} properties after registering the listener. The following example handles an image that is still loading or has already loaded successfully:

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

The `complete` property can also be `true` for an image that failed to load or has no source, so checking it alone is not sufficient. The `handled` flag prevents the callback's work from running twice if the image is complete but its `load` event has not yet been dispatched. This example handles the image once; it does not handle subsequent changes to its source.

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
