---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
tags:
  - API
  - Clipboard
  - Clipboard API
  - Cut
  - Event
  - Experimental
  - Interface
  - copy
  - paste
browser-compat: api.ClipboardEvent
---
{{APIRef("Clipboard API")}} {{SeeCompatTable}}

The **`ClipboardEvent`** interface represents events providing information related to modification of the clipboard, that is {{event("cut")}}, {{event("copy")}}, and {{event("paste")}} events.

## Constructor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Creates a `ClipboardEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Is a {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{event("cut")}}, {{event("copy")}}, or {{event("paste")}} operation, along with its MIME type.

## Methods

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/image-support-for-async-clipboard/)
