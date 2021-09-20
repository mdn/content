---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
tags:
  - API
  - Clipboard
  - Clipboard API
  - ClipboardEvent
  - Cut
  - Experimental
  - Property
  - Read-only
  - copy
  - paste
browser-compat: api.ClipboardEvent.clipboardData
---
{{ apiref("Clipboard API") }} {{SeeCompatTable}}

The **`ClipboardEvent.clipboardData`** property holds a
{{domxref("DataTransfer")}} object, which can be used:

- to specify what data should be put into the clipboard from the {{event("cut")}} and
  {{event("copy")}} event handlers, typically with a {{domxref("DataTransfer.setData",
    "setData(format, data)")}} call;
- to obtain the data to be pasted from the {{event("paste")}} event handler, typically
  with a {{domxref("DataTransfer.getData", "getData(format)")}} call.

See the {{event("cut")}}, {{event("copy")}}, and {{event("paste")}} events
documentation for more information.

## Syntax

```js
data = ClipboardEvent.clipboardData
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- The {{domxref("ClipboardEvent")}} interface it belongs to.
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
