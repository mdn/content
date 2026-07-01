---
title: "EditContext: EditContext() constructor"
short-title: EditContext()
slug: Web/API/EditContext/EditContext
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.EditContext.EditContext
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`EditContext()`** constructor returns a new {{DOMxRef("EditContext")}} object.

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

## Examples

### Instantiating an `EditContext` object

The following example creates a new `EditContext` object with the initial text "Hello world!" and the initial selection covering the entire text.

```html
<div id="editor"></div>
```

```js
const initialText = "Hello world!";

const editContext = new EditContext({
  text: initialText,
  selectionStart: 0,
  selectionEnd: initialText.length,
});

const editorElement = document.getElementById("editor");
editorElement.editContext = editContext;

console.log(
  `EditContext object ready. Text: ${editContext.text}. Selection: ${editContext.selectionStart} - ${editContext.selectionEnd}.`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
