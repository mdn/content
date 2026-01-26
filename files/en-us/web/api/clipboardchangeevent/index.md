---
title: ClipboardChangeEvent
slug: Web/API/ClipboardChangeEvent
page-type: web-api-interface
browser-compat: api.ClipboardChangeEvent
---

{{APIRef("Clipboard API")}}

The **`ClipboardChangeEvent`** interface of the {{domxref("Clipboard API", "", "", "nocode")}} is the event fired whenever the contents of the system clipboard are changed.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ClipboardChangeEvent.ClipboardChangeEvent", "ClipboardChangeEvent()")}}
  - : Creates a new `ClipboardChangeEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardChangeEvent.types")}} {{ReadOnlyInline}}
  - : A array of objects indicating the mandatory data types available on the system clipboard when the event was fired.
- {{domxref("ClipboardChangeEvent.changeId")}} {{ReadOnlyInline}}
  - : A bigint representing a unique identifier for this specific clipboard change operation.

## Instance methods

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## Examples

In this example, when the clipboard's contents are changed, the event listener logs the data types, change id, and the the entire event object to the console. This is a `ClipboardChangeEvent` object of type `clipboardchange`.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  console.log(`MIME types: ${event.types}`);
  console.log(`ID: ${event.changeId})`;
  console.dir(event);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("ClipboardEvent")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
