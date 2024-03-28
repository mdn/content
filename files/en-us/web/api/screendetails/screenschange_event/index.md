---
title: "ScreenDetails: screenschange event"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ScreenDetails.screenschange_event
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`screenschange`** event of the {{domxref("ScreenDetails")}} interface is fired when the set of screens available to the system has changed: that is, a new screen has become available or an existing screen has become unavailable. This will be reflected in a change in the {{domxref("ScreenDetails.screens", "screens")}} array.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("screenschange", (event) => {});

onscreenschange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You could use the `screenschange` event to detect when the available screens have changed, report the change, close all windows, and then reopen them all to suit the new configuration:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens, report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );

    // Update noOfScreens value
    noOfScreens = screenDetails.screens.length;
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
