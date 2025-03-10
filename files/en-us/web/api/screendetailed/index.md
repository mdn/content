---
title: ScreenDetailed
slug: Web/API/ScreenDetailed
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ScreenDetailed
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`ScreenDetailed`** interface of the [Window Management API](/en-US/docs/Web/API/Window_Management_API) represents detailed information about one specific screen available to the user's device.

`ScreenDetailed` objects can be accessed via the {{domxref("ScreenDetails.screens")}} and {{domxref("ScreenDetails.currentScreen")}} properties.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Screen")}}._

- {{domxref("ScreenDetailed.availLeft", "availLeft")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the available screen area.
- {{domxref("ScreenDetailed.availTop", "availTop")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the y-coordinate (top edge) of the available screen area.
- {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the screen's device pixel ratio.
- {{domxref("ScreenDetailed.isInternal", "isInternal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean indicating whether the screen is internal to the device or external.
- {{domxref("ScreenDetailed.isPrimary", "isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean indicating whether the screen is set as the operating system (OS) primary screen or not.
- {{domxref("ScreenDetailed.label", "label")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string providing a descriptive label for the screen, for example "Built-in Retina Display".
- {{domxref("ScreenDetailed.left", "left")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the total screen area.
- {{domxref("ScreenDetailed.top", "top")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the y-coordinate (top edge) of the total screen area.

## Events

_Inherits events from its parent, {{DOMxRef("Screen")}}._

- `change` {{experimental_inline}}
  - : Fired on a specific screen when any property of the screen changes — width or height, available width or available height, color depth, or orientation, screen position and available screen position, device pixel ratio, label or screen's designation.

## Examples

When {{domxref("Window.getScreenDetails()")}} is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). Provided they grant permission, the resulting {{domxref("ScreenDetails")}} object contains `ScreenDetailed` objects representing all the screens available to the user's system.

The following example opens a window in the top-left corner of the OS primary screen:

```js
// Return ScreenDetails
const allScreens = await window.getScreenDetails();

// Return the primary screen ScreenDetailed object
const primaryScreenDetailed = allScreens.screens.find(
  (screenDetailed) => screenDetailed.isPrimary,
);

// Open a window in the top-left corner of the OS primary screen
window.open(
  "https://example.com",
  "_blank",
  `left=${primaryScreenDetailed.availLeft},
   top=${primaryScreenDetailed.availTop},
   width=200,
   height=200`,
);
```

> [!NOTE]
> See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
