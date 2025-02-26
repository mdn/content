---
title: VirtualKeyboard
slug: Web/API/VirtualKeyboard
page-type: web-api-interface
status:
  - experimental
browser-compat: api.VirtualKeyboard
---

{{SeeCompatTable}}{{APIRef("VirtualKeyboard API")}}{{securecontext_header}}

The **`VirtualKeyboard`** interface of the [VirtualKeyboard API](/en-US/docs/Web/API/VirtualKeyboard_API) is useful on devices that have on-screen virtual keyboards, such as tablets, mobile phones, or other devices where a hardware keyboard may not be available.

The `VirtualKeyboard` interface makes it possible to opt out of the automatic way browsers handle on-screen virtual keyboards by reducing the height of the viewport to make room for the virtual keyboard. You can prevent the browser from changing the size of the viewport, detect the position and size of the virtual keyboard — adapting the layout of your web page as a follow-up — and programmatically show or hide the virtual keyboard.

You access the `VirtualKeyboard` interface by using {{domxref("navigator.virtualKeyboard")}}.

{{InheritanceDiagram}}

## Instance properties

_The `VirtualKeyboard` interface inherits properties from its parent, {{domxref("EventTarget")}}._

- {{DOMxRef("VirtualKeyboard.boundingRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMRect")}} that describes the geometry of the virtual keyboard.
- {{DOMxRef("VirtualKeyboard.overlaysContent")}} {{Experimental_Inline}}
  - : A {{jsxref('Boolean')}} that defines whether the browser should stop handling the on-screen virtual keyboard.

## Instance methods

_The `VirtualKeyboard` interface inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref('VirtualKeyboard.show()')}} {{experimental_inline}}
  - : Show the virtual keyboard.
- {{domxref('VirtualKeyboard.hide()')}} {{experimental_inline}}
  - : Hide the virtual keyboard.

## Events

- {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} {{Experimental_Inline}}
  - : Fires when the geometry of the on-screen virtual keyboard changes, which happens when the virtual keyboard appears or disappears.

## Example

The following example demonstrates how to opt out of the automatic virtual keyboard behavior, and detect the geometry of the virtual keyboard in the web page:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
