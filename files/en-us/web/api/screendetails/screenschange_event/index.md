---
title: "ScreenDetails: screenschange event"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ScreenDetails.screenschange_event
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`screenschange`** event of the {{domxref("ScreenDetails")}} interface is fired when the screens available to the system change in some way.

Specifically, a _change_ in this context means either:

- A screen ({{domxref("ScreenDetailed")}} object) is added to or removed from the {{domxref("ScreenDetails.screens", "screens")}} array.
- A screen's _basic observable properties_ change. These are:
  - {{domxref("Screen.width", "width")}}
  - {{domxref("Screen.height", "height")}}
  - {{domxref("Screen.availWidth", "availWidth")}}
  - {{domxref("Screen.availHeight", "availHeight")}}
  - {{domxref("Screen.colorDepth", "colorDepth")}}
  - {{domxref("Screen.orientation", "orientation")}}
- A screen's _advanced observable properties_ change. These are:
  - The screen's position ((x,y) coordinates of the top-left corner) inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API#multi-screen_origin)
  - The screen's available position ((x,y) coordinates of the top-left corner) inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API#multi-screen_origin). This is equal to the screen position, plus the width/height of any OS UI elements drawn on the top-left of the screen — windows cannot be placed in those areas
  - {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}}
  - {{domxref("ScreenDetailed.label", "label")}}
  - The screen's designation as primary or secondary (see {{domxref("ScreenDetailed.isPrimary", "isPrimary")}})
  - The screen's designation as internal or external (see {{domxref("ScreenDetailed.isInternal", "isInternal")}})

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("screenschange", (event) => {});

onscreenschange = (event) => {};
```

## Event type

An event of type `screenschange`, the event object of which is structurally equivalent to an {{domxref("Event")}}.

{{InheritanceDiagram("Event")}}

## Examples

You could use the `screenschange` event to detect when the available screens have changed, report the change, close all windows, and then reopen them all to suit the new configuration:

```js
screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens, report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );
  }

  // If the windows are open, close them and then open them again
  // So that they fit with the new screen configuration
  if (windowRefs.length > 0) {
    closeAllWindows();
    openWindows();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
