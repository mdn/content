---
title: ':modal'
slug: Web/CSS/:modal
tags:
  - CSS
  - Modal
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.modal
---
{{CSSRef}}

The **`:modal`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed. Multiple elements can be selected by the `:modal` pseudo-class at the same time, but only one of them will be active and able to receive input.

## Syntax

```
:modal
```

## Usage notes

Examples of elements that will prevent user interaction with the rest of the page and will be selected by the `:modal` pseudo-class include:

- The [`dialog`](/en-US/docs/Web/HTML/Element/dialog) element opened with the `showModal()` API.
- The element selected by the [`:fullscreen`](/en-US/docs/Web/CSS/:fullscreen) pseudo-class when opened with the `requestFullscreen()` API.

## Examples

### Styling a modal dialog

This example styles a modal dialog that opens when the "Update details" button is activated. This example has been built on top of the dialog element [example](/en-US/docs/Web/HTML/Element/dialog#advanced_example).

```html hidden
<!-- Simple modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Favorite animal:
      <select>
        <option value="default">Choose…</option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </label></p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Update details</button>
</p>
<output></output>
```

#### CSS

```css
:modal {
  border: 5px solid red;
  background-color: yellow;
  box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
}
```

```js hidden
const updateButton = document.getElementById('updateDetails');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== 'function') {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  outputBox.value = `${favDialog.returnValue} button clicked - ${(new Date()).toString()}`;
});
```

### Result

{{EmbedLiveSample("Styling_a_modal_dialog", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dialog`](/en-US/docs/Web/HTML/Element/dialog) element
- Other element display state pseudo-classes: {{CSSxRef(":fullscreen")}} and {{CSSxRef(":picture-in-picture")}}
- Complete list of [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
