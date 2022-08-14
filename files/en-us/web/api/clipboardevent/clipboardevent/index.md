---
title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
page-type: web-api-constructor
tags:
  - API
  - Clipboard
  - Clipboard API
  - ClipboardEvent
  - Constructor
  - Cut
  - Reference
  - copy
  - paste
browser-compat: api.ClipboardEvent.ClipboardEvent
---
{{APIRef("Clipboard API")}}

The **`ClipboardEvent()`** constructor returns a new {{domxref("ClipboardEvent")}},
representing an event providing information related to modification of the clipboard,
that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and
{{domxref("Element/paste_event", "paste")}} events.

## Syntax

```js
new ClipboardEvent(type)
new ClipboardEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the type of the `ClipboardEvent`.
    It is case-sensitive and browsers set it to `copy`, `cut`, or `paste`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `clipboardData` {{optional_inline}}
      - : A {{domxref("DataTransfer")}} object containing the data concerned by the clipboard event. It defaults to `null`.
    - `dataType` {{non-standard_inline}} {{optional_inline}}
      - : A string containing the MIME-type of the data contained in the `data` argument. It defaults to `""`.
    - `data` {{non-standard_inline}} {{optional_inline}}
      - : A string containing the data concerned by the clipboard event. It defaults to `""`.

### Return value

A new {{domxref("ClipboardEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- The {{domxref("ClipboardEvent")}} interface it belongs to.
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
