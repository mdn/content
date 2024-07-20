---
title: "VirtualKeyboard: hide() method"
short-title: hide()
slug: Web/API/VirtualKeyboard/hide
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.VirtualKeyboard.hide
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`hide()`** method of the {{domxref("VirtualKeyboard")}} interface programmatically hides the on-screen virtual keyboard. This is useful when the page needs to implement its own virtual keyboard logic by using the {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}}.

This method only works if the currently-focused element's [`virtualKeyboardPolicy`](/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) attribute is set to `manual` and [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) isn't set to `none`.

The `hide()` method always returns `undefined` and triggers a {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} event.

## Syntax

```js-nolint
hide()
```

### Parameters

None.

### Return value

Undefined.

## Example

The code snippet below shows how to use the `virtualkeyboardpolicy` attribute to prevent the browser from showing the virtual keyboard on click or tap. The code also uses the `navigator.virtualKeyboard.show()` and `navigator.virtualKeyboard.hide()` methods to show and hide the virtual keyboard when a button is clicked:

```html
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
