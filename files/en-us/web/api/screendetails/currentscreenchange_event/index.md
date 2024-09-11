---
title: "ScreenDetails: currentscreenchange event"
short-title: currentscreenchange
slug: Web/API/ScreenDetails/currentscreenchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ScreenDetails.currentscreenchange_event
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`currentscreenchange`** event of the {{domxref("ScreenDetails")}} interface is fired when the {{domxref("ScreenDetails.currentScreen")}} changes in one of the following ways:

- The current screen changes to a different screen, i.e., the current browser window is moved to a different screen.
- One or more of the following properties change on the current screen:
  - {{domxref("Screen.width", "width")}}
  - {{domxref("Screen.height", "height")}}
  - {{domxref("Screen.availWidth", "availWidth")}}
  - {{domxref("Screen.availHeight", "availHeight")}}
  - {{domxref("Screen.colorDepth", "colorDepth")}}
  - {{domxref("Screen.orientation", "orientation")}}
- One or more of the following values change:
  - The screen's **position** ((x,y) coordinates of the top-left corner) inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API/Multi-screen_origin)
  - The screen's **available position** ((x,y) coordinates of the top-left corner) inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API/Multi-screen_origin). This is equal to the screen position, plus the width/height of any OS UI elements drawn on the top-left of the screen — windows cannot be placed in those areas
  - {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}}
  - {{domxref("ScreenDetailed.label", "label")}}
  - The screen's designation as primary or secondary (see {{domxref("ScreenDetailed.isPrimary", "isPrimary")}})
  - The screen's designation as internal or external (see {{domxref("ScreenDetailed.isInternal", "isInternal")}})

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("currentscreenchange", (event) => {});

oncurrentscreenchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const screenDetails = await window.getScreenDetails();
screenDetails.addEventListener("currentscreenchange", (event) => {
  const details = screenDetails.currentScreen;
  console.log("The current screen has changed.", event, details);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
