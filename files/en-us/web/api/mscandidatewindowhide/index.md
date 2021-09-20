---
title: MSCandidateWindowHide
slug: Web/API/MSCandidateWindowHide
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

**`MSCandidateWindowHide`** fires after the Input Method Editor (IME) candidate window closes and is fully hidden.

This proprietary method is specific to Internet Explorer.

## General info

- Synchronous
  - : No
- Bubbles
  - : No
- Cancelable
  - : No

### Note

Windows 8.1 and Windows 7 IMEs for certain languages on Internet Explorer for the desktop might not support this event. On Internet Explorer in the new Windows UI, this event is supported in Windows 8.1 IMEs of all languages.

## Syntax

```js
object.addEventListener("MSCandidateWindowHide", handler, useCapture)
```

### Parameters

**pEvtObj** \[in]

Type: _IHTMLEventObj_

Pointer to an IHTMLEventObj interface for the current event.

The handler of this event will see that the isCandidateWindowVisible method returns false, and no ClientRect object is returned from getCandidateWindowClientRect.

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- [IME handling guide for Gecko](/en-US/docs/Mozilla/IME_handling_guide)
