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

Specifically, a _change_ in this context means a screen ({{domxref("ScreenDetailed")}} object) has been added to or removed from the {{domxref("ScreenDetails.screens", "screens")}} array.

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

  // Open, close, or rearrange windows as needed, to fit the new screen configuration
  updateWindows();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
