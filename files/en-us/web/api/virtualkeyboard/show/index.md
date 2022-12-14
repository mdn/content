---
title: VirtualKeyboard.show()
slug: Web/API/VirtualKeyboard/show
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - VirtualKeyboard
  - show
  - Experimental
browser-compat: api.VirtualKeyboard.show
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`show()`** method of the {{domxref("VirtualKeyboard")}} interface programmatically shows the on-screen virtual keyboard. This is useful when the page needs to implement its own virtual keyboard logic, especially when using the `virtualkeyboardpolicy` attribute on `contenteditable` elements as explained in [Control the virtual keyboard on `contenteditable` elements](/en-US/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements).

The method only works if the currently focused element is a form control, such as an `input`, a `textarea`, or if the focused element is `contenteditable`.

The `show()` method always returns `undefined` but triggers a {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} event.

## Syntax

```js-nolint
show()
```

### Parameters

None.

### Return value

Undefined.

## Examples

The code snippet below shows how to use the `virtualkeyboardpolicy` attribute and use the `navigator.virtualKeyboard.show()` method to show the virtual keyboard on double-click instead:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
