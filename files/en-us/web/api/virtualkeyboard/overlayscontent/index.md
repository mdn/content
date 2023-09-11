---
title: "VirtualKeyboard: overlaysContent property"
short-title: overlaysContent
slug: Web/API/VirtualKeyboard/overlaysContent
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.VirtualKeyboard.overlaysContent
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`overlaysContent`** property of the VirtualKeyboard interface can be used to opt out of the automatic way in which browsers handle on-screen virtual keyboards by reducing the size of the viewport to make space for them.

If the `overlaysContent` property is set to `true`, the browser no longer resizes the viewport when the virtual keyboard appears. The virtual keyboard instead overlays the content of the web page, and you can adapt the page layout as appropriate using the {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} and your own custom CSS and JavaScript.

## Value

A boolean. `false` by default, set it to `true` to opt out of the browser's automatic handling of the on-screen virtual keyboard.

## Example

```js
if ("virtualKeyboard" in navigator) {
  console.log(navigator.virtualKeyboard.overlaysContent); // false
  navigator.virtualKeyboard.overlaysContent = true; // Opt out of the automatic handling.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
