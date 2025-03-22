---
title: "Document: activeElement property"
short-title: activeElement
slug: Web/API/Document/activeElement
page-type: web-api-instance-property
browser-compat: api.Document.activeElement
---

{{APIRef("DOM")}}

The **`activeElement`** read-only property of the {{domxref("Document")}} interface returns the {{domxref("Element")}} within the DOM that is receiving keyboard events such as {{domxref("Element/keydown_event", "keydown")}} and {{domxref("Element/keyup_event", "keyup")}}. This is usually analogous to the focused element.

Which elements are focusable varies depending on the platform and the browser's current configuration. For example, on Safari, following the behavior of macOS, elements that aren't text input elements are not focusable by default, unless the "Full Keyboard Access" setting is enabled in System Preferences.

Typically a user can press the <kbd>Tab</kbd> key to move the focus around the page among focusable elements, and use keyboard gestures such as <kbd>Space</kbd> or <kbd>Enter</kbd> to simulate clicks on the focused element.

> [!NOTE]
> Focus (which element is receiving user input events) is not the same thing as selection (the currently highlighted part of the document). You can get the current selection using {{domxref("window.getSelection()")}}.

## Value

The deepest {{domxref('Element')}} which currently has focus.

- If the focused element is within a shadow tree within the current document (for example, the focused element is inside an `iframe`, and the invoking `document` contains that iframe), then this will be the root element of that tree (in this example, that `iframe`).
- If the focused element is within a document tree that's not descended from the current document (for example, the focused element is in the main document, and the invoking `document` is an embedded iframe), then this will be `null`.
- If there's no focused element, this is the {{domxref("Document.body")}} or {{domxref("Document.documentElement")}}.

## Examples

### HTML

```html
<p>Select some text from one of the text areas below:</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
This is Text Area Two. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>Active element ID: <em id="output-element"></em></p>
<p>Selected text: <em id="output-text"></em></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.textContent = activeTextarea.id;
  outputText.textContent = selection;
}

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### Result

{{ EmbedLiveSample('Examples', '400', '400') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.hasFocus")}}
