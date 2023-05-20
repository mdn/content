---
title: "VirtualKeyboard: show() method"
short-title: show()
slug: Web/API/VirtualKeyboard/show
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.VirtualKeyboard.show
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`show()`** method of the {{domxref("VirtualKeyboard")}} interface programmatically shows the on-screen virtual keyboard. This is useful when the page needs to implement its own virtual keyboard logic, especially when using the `virtualkeyboardpolicy` attribute on `contenteditable` elements as explained in [Control the virtual keyboard on `contenteditable` elements](/en-US/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements).

This method only works if the currently-focused element is a form control — such as an {{htmlelement("input")}} or {{htmlelement("textarea")}} element — or if the focused element is [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable).

The `show()` method always returns `undefined` and triggers a {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} event.

## Syntax

```js-nolint
show()
```

### Parameters

None.

### Return value

Undefined.

## Example

The code snippet below shows how to use the `virtualkeyboardpolicy` attribute to prevent the browser from showing the virtual keyboard on click or tap. The code also uses the `navigator.virtualKeyboard.show()` and `navigator.virtualKeyboard.hide()` methods to show and hide the virtual keyboard when a button is clicked:

```js
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<button id="edit-button">Edit</button>
<script>
  if ("virtualKeyboard" in navigator) {
    const editor = document.getElementById("editor");
    const editButton = document.getElementById("edit-button");
    let isEditing = false;

    editButton.addEventListener("click", () => {
      if (isEditing) {
        navigator.virtualKeyboard.hide();
        editButton.textContent = "Edit";
      } else {
        editor.focus();
        navigator.virtualKeyboard.show();
        editButton.textContent = "Save changes";
      }

      isEditing = !isEditing;
    });
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
