---
title: Document.activeElement
slug: Web/API/Document/activeElement
tags:
  - API
  - Document
  - Focus
  - Property
  - Reference
  - ShadowRoot
  - activeElement
browser-compat: api.Document.activeElement
---
{{APIRef("Shadow DOM")}}

The **`activeElement`** read-only property
of the {{domxref("Document")}} interface returns the {{domxref("Element")}} within the DOM that currently has focus.

Often `activeElement` will return a {{domxref("HTMLInputElement")}} or
{{domxref("HTMLTextAreaElement")}} object if it has the text selection at the time. If
so, you can get more detail by using the object's {{domxref("Document.selectionStart",
  "selectionStart")}} and {{domxref("Document.selectionEnd", "selectionEnd")}} properties.
Other times the focused element might be a {{HTMLElement("select")}} element (menu) or
an {{HTMLElement("input")}} element, of `type` `"button"`,
`"checkbox"`, or `"radio"`.

Typically a user can press the tab key to move the focus around the page among
focusable elements, and use the space bar to activate one (that is, to press a button or
toggle a radio button). Which elements are focusable varies depending on the platform
and the browser's current configuration. For example, on macOS systems, elements that
aren't text input elements are not typically focusable by default.

> **Note:** Focus (which element is receiving user input events) is not
> the same thing as selection (the currently highlighted part of the document). You can
> get the current selection using {{domxref("window.getSelection()")}}.

## Syntax

```js
element = document.activeElement
```

### Value

The {{domxref('Element')}} which currently has focus, {{HTMLElement("body")}} or
`null` if there is no focused element.

## Example

### HTML

```html
<p>Select some text from one of the text areas below:</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea>
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">This is Text Area Two. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea>
</form>

<p>Active element ID: <b id="output-element"></b></p>
<p>Selected text: <b id="output-text"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart, activeTextarea.selectionEnd
  );

  const outputElement = document.getElementById('output-element');
  const outputText = document.getElementById('output-text');
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

const textarea1 = document.getElementById('ta-example-one');
const textarea2 = document.getElementById('ta-example-two');
textarea1.addEventListener('mouseup', onMouseUp, false);
textarea2.addEventListener('mouseup', onMouseUp, false);
```

### Result

{{ EmbedLiveSample('Example', '400', '400') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
