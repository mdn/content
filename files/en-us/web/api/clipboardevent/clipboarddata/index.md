---
title: "ClipboardEvent: clipboardData property"
short-title: clipboardData
slug: Web/API/ClipboardEvent/clipboardData
page-type: web-api-instance-property
browser-compat: api.ClipboardEvent.clipboardData
---

{{APIRef("Clipboard API")}}

The **`ClipboardEvent.clipboardData`** property holds a {{domxref("DataTransfer")}} object, which can be used:

- to specify what data should be put into the clipboard from the {{domxref("Element/cut_event", "cut")}} and
  {{domxref("Element/copy_event", "copy")}} event handlers, typically with a {{domxref("DataTransfer.setData",
    "setData(format, data)")}} call;
- to obtain the data to be pasted from the {{domxref("Element/paste_event", "paste")}} event handler, typically
  with a {{domxref("DataTransfer.getData", "getData(format)")}} call.

See the {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events
documentation for more information.

## Value

A {{domxref("DataTransfer")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- The {{domxref("ClipboardEvent")}} interface it belongs to.
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
