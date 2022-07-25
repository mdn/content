---
title: 'HTMLElement: mscandidatewindowshow event'
slug: Web/API/HTMLElement/mscandidatewindowshow_event
page-type: web-api-event
tags:
  - Non-standard
  - Event
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`mscandidatewindowshow`** event is thrown immediately after the Input Method Editor (IME) candidate window is set to appear, but before it renders.

This proprietary method is specific to Internet Explorer.

> **Note:** Windows 8.1 and Windows 7 IMEs for certain languages on Internet Explorer for the desktop might not support this event. On Internet Explorer in the new Windows UI, this event is supported in Windows 8.1 IMEs of all languages.

This event fires after the positioning information of the IME candidate window has been determined. You can obtain the positioning information using the [getCandidateWindowClientRect](/en-US/docs/Web/API/getCandidateWindowClientRect) method, and adjust your layout as needed to avoid any occlusions with the IME candidate window.

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('mscandidatewindowshow', (event) => { })

onmscandidatewindowshow = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

### Example

in IE11, developers can detect the opening of the IME candidate window by listening to `MSCandidateWindowShow` event, then call `getCandidateWindowClientRect()` function to find out where the candidate window is and position the suggestion UI away from it:

```js
const context = document.getElementById("mySearchBox").msGetInputContext();
context.addEventListener("MSCandidateWindowShow", candidateWindowShowHandler);

function candidateWindowShowHandler(e) {
   const imeRect = context.getCandidateWindowClientRect();
   const suggestionRect = document.getElementById("mySuggestionList").getBoundingClientRect();
   // Check if the two rects intersect, and position them away from each other.
}
```

When the IME candidate window changes position or closes, it fires  {{domxref("HTMLElement/mscandidatewindowupdate_event", "mscandidatewindowupdate")}} or {{domxref("HTMLElement/mscandidatewindowhide_event", "mscandidatewindowhide")}} events. Developers could listen to them and shift the suggestion UI accordingly.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- Related events: {{domxref("HTMLElement/mscandidatewindowupdate_event", "mscandidatewindowupdate")}} and {{domxref("HTMLElement/mscandidatewindowhide_event", "mscandidatewindowhide")}}
