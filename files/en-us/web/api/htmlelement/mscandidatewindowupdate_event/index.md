---
title: "HTMLElement: mscandidatewindowupdate event"
short-title: mscandidatewindowupdate
slug: Web/API/HTMLElement/mscandidatewindowupdate_event
page-type: web-api-event
status:
  - non-standard
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

The **`mscandidatewindowupdate`** event is thrown after the Input Method Editor (IME) candidate window has been identified as needing to change size, but before any visual updates have rendered.

This proprietary method is specific to Internet Explorer.

An IME candidate window may be identified as needing to change size for any of the following reasons:

- As a result of displaying new / changed alternatives or predictions

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("mscandidatewindowupdate", (event) => {});

onmscandidatewindowupdate = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- Related events: {{domxref("HTMLElement/mscandidatewindowshow_event", "mscandidatewindowshow")}} and {{domxref("HTMLElement/mscandidatewindowhide_event", "mscandidatewindowhide")}}
