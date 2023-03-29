---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
page-type: web-api-interface
browser-compat: api.ClipboardEvent
---

{{APIRef("Clipboard API")}}

The **`ClipboardEvent`** interface represents events providing information related to modification of the clipboard, that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Creates a `ClipboardEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : A {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, or {{domxref("Element/paste_event", "paste")}} operation, along with its MIME type.

## Instance methods

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
