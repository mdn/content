---
title: MSCandidateWindowShow
slug: Web/API/MSCandidateWindowShow
tags:
  - MSCandidateWindowShow
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

**`MSCandidateWindowShow`** fires immediately after the Input Method Editor (IME) candidate window is set to appear, but before it renders.

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
object.addEventListener("MSCandidateWindowShow", handler, useCapture)
```

### Parameters

**pEvtObj** \[in]

Type: _IHTMLEventObj_

Pointer to an `IHTMLEventObj` interface for the current event.

This event fires after the positioning information of the IME candidate window has been determined. You can obtain the positioning information using the [getCandidateWindowClientRect](/en-US/docs/Web/API/getCandidateWindowClientRect) method, and adjust your layout as needed to avoid any occlusions with the IME candidate window.

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

### Example

in IE11, developers can detect the opening of the IME candidate window by listening to `MSCandidateWindowShow` event, then call `getCandidateWindowClientRect()` function to find out where the candidate window is and position the suggestion UI away from it:

```js
var context = document.getElementById("mySearchBox").msGetInputContext();
context.addEventListener("MSCandidateWindowShow", candidateWindowShowHandler);

function candidateWindowShowHandler(e) {
   var imeRect = context.getCandidateWindowClientRect();
   var suggestionRect = document.getElementById("mySuggestionList").getBoundingClientRect();
   // Check if the two rects intersect, and position them away from each other.
}
```

When the IME candidate window changes position or closes, it fires `MSCandidateWindowUpdate` or `MSCandidateWindowHide` events. Developers could listen to them and shift the suggestion UI accordingly.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- [IME handling guide for Gecko](/en-US/docs/Mozilla/IME_handling_guide)
