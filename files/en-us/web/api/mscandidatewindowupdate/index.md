---
title: MSCandidateWindowUpdate
slug: Web/API/MSCandidateWindowUpdate
tags:
  - MSCandidateWindowUpdate
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

**`MSCandidateWindowUpdate`** fires after the Input Method Editor (IME) candidate window has been identified as needing to change size, but before any visual updates have rendered.

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
object.addEventListener("MSCandidateWindowUpdate", handler, useCapture)
```

### Parameters

**pEvtObj** \[in]

Type: _IHTMLEventObj_

Pointer to an `IHTMLEventObj` interface for the current event.

TAn IME candidate window may be identified as needing to change size for any of the following reasons:

- As a result of displaying new / changed alternatives or predictions

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- [IME handling guide for Gecko](/en-US/docs/Mozilla/IME_handling_guide)
