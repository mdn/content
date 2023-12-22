---
title: "EditContext: EditContext() constructor"
short-title: EditContext()
slug: Web/API/EditContext/EditContext
page-type: web-api-constructor
browser-compat: api.EditContext.EditContext
---

{{APIRef("EditContext API")}}

The **`EditContext()`** constructor returns a new {{DOMxRef("EditContext")}} object.

The {{domxref("EditContext API", "", "", "nocode")}} can be used to build rich text editors on the web that support advanced text input experiences, such as IME composition or emoji picker.

## Syntax

```js-nolint
new EditContext()
new EditContext(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An optional object with the following properties:
    - `text`
      - : A string to set the initial text of the `EditContext`.
    - `selectionStart`
      - : A number to set the initial selection start of the `EditContext`.
    - `selectionEnd`
      - : A number to set the initial selection end of the `EditContext`.

## Example

The following example creates a new `EditContext` object with the initial text "Hello world!" and the initial selection covering the entire text.

```js-nolint
const initialText = "Hello world!";

const editContext = new EditContext({
  text: initialText,
  selectionStart: 0,
  selectionEnd: initialText.length
});

const editorElement = document.getElementById("editor");
editorElement.editContext = editContext;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
