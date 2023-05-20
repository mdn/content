---
title: "HTMLElement: mscandidatewindowhide event"
short-title: mscandidatewindowhide
slug: Web/API/HTMLElement/mscandidatewindowhide_event
page-type: web-api-event
status:
  - non-standard
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

The **`mscandidatewindowhide`** event is thrown after the Input Method Editor (IME) candidate window closes and is fully hidden.

This proprietary method is specific to Internet Explorer.

The handler of this event will see that the `isCandidateWindowVisible` method returns `false`, and no `ClientRect` object is returned from `getCandidateWindowClientRect()`.

Web applications need only register for this event once per element (the handler will remain valid for the lifetime of the element).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("mscandidatewindowhide", (event) => {});

onmscandidatewindowhide = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- Related events: {{domxref("HTMLElement/mscandidatewindowupdate_event", "mscandidatewindowupdate")}} and {{domxref("HTMLElement/mscandidatewindowshow_event", "mscandidatewindowshow")}}
