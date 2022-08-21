---
title: InputDeviceCapabilities API
slug: Web/API/InputDeviceCapabilities_API
page-type: web-api-overview
tags:
  - API
  - InputDeviceCapabilities
  - Overview
  - Reference
  - Experimental
browser-compat: api.InputDeviceCapabilities
---
{{DefaultAPISidebar("InputDeviceCapabilities API")}}{{SeeCompatTable}}

The InputDeviceCapabilities API provides details about the underlying sources of input events. The API attempts to describe how the device behaves rather than what it is. For example, the first version of the API indicates whether a device fires touch events rather than whether it is a touch screen.

## Input device capabilities concepts and usage

Because DOM events abstract device input, they provide no way to learn what device or type of device fired an event. This can lead to instances where the same action triggers multiple event handlers.  To deal with this, developers make assumptions and use heuristics to normalize behavior on web pages.

The InputDeviceCapabilities API addresses this problem by abstracting the capabilities of input devices. For example, let's say we have a web page that implements both a `touchstart` and a `mousedown` event. We can assume that if the touchstart event is triggered that the user's device has a touch interface.  What about when the mousedown event is triggered? It would be useful to know if a `touchstart` event were also triggered so that we don't take the same action twice. We can do this by checking the sourceCapabilities property of the {{domxref("UIEvent")}}.

```js
myButton.addEventListener('mousedown', (e) => {
  // Touch event case handled above, don't change the style again on tap.
  if (!e.sourceCapabilities.firesTouchEvents)
    myButton.classList.add("pressed");
});
```

## Interfaces

- {{DOMxRef("InputDeviceCapabilities")}} {{Experimental_Inline}}
  - : Provides logical information about an input device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
