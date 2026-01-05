---
title: CaptureController
slug: Web/API/CaptureController
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CaptureController
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`CaptureController`** interface provides methods that can be used to further manipulate a captured display surface (captured via {{domxref("MediaDevices.getDisplayMedia()")}})

A `CaptureController` object is associated with a captured display surface by passing it into a `getDisplayMedia()` call as the value of the options object's `controller` property.

## Constructor

- {{ domxref("CaptureController.CaptureController", "CaptureController()") }} {{Experimental_Inline}}
  - : Creates a new `CaptureController` object instance.

## Instance properties

- {{ domxref("CaptureController.zoomLevel", "zoomLevel") }} {{Experimental_Inline}}
  - : The captured display surface's current zoom level.

## Instance methods

- {{ domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()") }} {{Experimental_Inline}}
  - : Decreases the captured display surface's zoom level by one increment.
- {{ domxref("CaptureController.forwardWheel", "forwardWheel()") }} {{Experimental_Inline}}
  - : Starts forwarding {{domxref("Element.wheel_event", "wheel")}} events fired on the referenced element to the viewport of an associated captured display surface.
- {{ domxref("CaptureController.getSupportedZoomLevels", "getSupportedZoomLevels()") }} {{Experimental_Inline}}
  - : Returns the different zoom levels supported by the captured display surface.
- {{ domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()") }} {{Experimental_Inline}}
  - : Increases the captured display surface's zoom level by one increment.
- {{ domxref("CaptureController.resetZoomLevel", "resetZoomLevel()") }} {{Experimental_Inline}}
  - : Resets the captured display surface's zoom to its initial level, which is `100`.
- {{ domxref("CaptureController.setFocusBehavior", "setFocusBehavior()") }} {{Experimental_Inline}}
  - : Controls whether the captured tab or window will be focused or whether the focus will remain with the tab containing the capturing app.

## Events

- {{ domxref("CaptureController.zoomlevelchange_event", "zoomlevelchange") }} {{Experimental_Inline}}
  - : Fires when the captured display surface's zoom level changes.

## Examples

```js
// Create a new CaptureController instance
const controller = new CaptureController();

// Prompt the user to share a tab, window, or screen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Query the displaySurface value of the captured video track
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface === "browser") {
  // Focus the captured tab.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface === "window") {
  // Do not move focus to the captured window.
  // Keep the capturing page focused.
  controller.setFocusBehavior("no-focus-change");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [Better screen sharing with Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
