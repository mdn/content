---
title: Using the EditContext API
slug: Web/API/EditContext_API/Guide
page-type: guide
---

{{DefaultAPISidebar("EditContext API")}}

The **[EditContext API](/en-US/docs/Web/API/EditContext_API)** can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("Input Method Editor")}} (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

This article goes through all the steps that are necessary to build a text editor using the EditContext API. In this guide, you will build a simple HTML code editor that highlights the syntax of the code as you type, and that supports IME composition.

## Final code and live demo

If you want to see the final code, you can check out the [live demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) and [source code](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) on GitHub.

## Create the editor UI

The first step is to create the UI for the editor. The editor will be a simple {{HTMLElement("div")}} element with the [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute set to `false` to disable spell checking:

```html
<div id="html-editor" spellcheck="false"></div>
```

The following CSS code is used to make the editor fill the entire viewport and scroll when there's too much content to fit. The {{CSSXref("white-space")}} property is also used to preserve whitespace, and the {{CSSXref("tab-size")}} property is used to make tab characters render as two spaces. Finally, some default background and text colors are set.

```css
#html-editor {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
  background: #000;
  color: red;
}
```

## Make the editor editable

To make an element editable on the web, most of the time, you use an {{HTMLElement("input")}} element, a {{HTMLElement("textarea")}} element, or the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute.

However, with the EditContext API, you can make other types of elements editable without using an attribute. To see the list of elements that can be used with the EditContext API, see [Possible elements](/en-US/docs/Web/API/HTMLElement/editContext#possible_elements) on the HTMLElement editContext property page.

To make the editor editable, you create an {{domxref("EditContext")}} instance, and then you set the {{DOMxRef("HTMLElement.editContext", "editContext")}} property of the editor element to the `EditContext` instance:

```js
if ("EditContext" in window) {
  // Create the EditContext instance.
  const editContext = new EditContext();

  // Retrieve the editor element from the DOM.
  const editorEl = document.getElementById("html-editor");

  // Set the editor's editContext property value.
  editorEl.editContext = editContext;
} else {
  console.log("The EditContext API is not supported.");
}
```

You can now focus the editor element. Entering text in the element will fire the {{domxref("EditContext.textupdate_event", "textupdate")}} event on the `EditContext` instance.

## Render the text and user selection

The next step is to write a function that renders the syntax-highlighted HTML code in the editor when the user enters text. This function will be called when new text is entered, when characters are deleted, or when the selection is changed.

### Tokenize the HTML code

In order to render the syntax-highlighted HTML, you'll first need to tokenize the HTML code. This means reading the HTML code string, and determining where each opening tag, closing tag, attribute, comment node, and text node starts and ends. This can be done by iterating over the string character by character while maintaining a state machine.

Since this is a guide about the EditContext API, the tokenizer code is not shown here. You can find the tokenizer code used in this tutorial in the [source code](https://github.com/mdn/dom-examples/blob/main/editcontext-api/html-editor/tokenizer.js).

For the purpose of this tutorial, let's assume that the tokenizer is a function that's imported from a separate file:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Render the text

To render the text, let's create a `render` function that will be called whenever the user enters text, or when the selection changes. This function will first empty the editor element, and then it will render each token as a separate HTML element:

```js
function render() {
  // First, empty the editor. We're re-rendering everything.
  editorEl.innerHTML = "";

  // Tokenize the text.
  const currentTokens = tokenizeHTML(editContext.text);

  for (const token of currentTokens) {
    // Render each token as a span element.
    const span = document.createElement("span");
    span.classList.add(`token-${token.type}`);
    span.textContent = token.value;

    // Attach the span to the editor element.
    editorEl.appendChild(span);

    // Save the span element in the token object for later.
    token.node = span;
  }
}
```

As seen above, with the EditContext API, you are responsible for rendering the user interface of your editor. You can render the HTML text any way you want, including rendering it into a `<canvas>` element.

Make sure to call the render function when needed. This includes calling it once at the beginning, when initializing the editor, and then calling it again when the user enters text, by listening to the {{domxref("EditContext.textupdate_event", "textupdate")}} event:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render();
});

// Do the initial render.
render();
```

### Render the selection

Even though you used a `<div>` element for the editor, which already supports displaying a blinking text cursor and highlighting the selected text, you still need to render the selection yourself. This is because the EditContext API can be used with other types of elements that don't support this behavior. Rendering the selection yourself also gives you more control over how the selection is displayed. Finally, because your `render` function clears the HTML content of the editor element everytime it runs, any selection that the user might have made will be lost if you don't render it yourself.

To render the selection, because the EditContext API gives you the selection as a pair of start and end character offsets, you'll need to convert these offsets into a DOM selection. The following code snippet shows how you can do this:

```js
function convertFromOffsetsToSelection(start, end) {
  // Create a TreeWalker that walks over all the
  // text nodes in the editor element.
  const treeWalker = document.createTreeWalker(editorEl, NodeFilter.SHOW_TEXT);

  let offset = 0;
  let anchorNode = null;
  let anchorOffset = 0;
  let extentNode = null;
  let extentOffset = 0;

  // Iterate over the text nodes.
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;

    if (!anchorNode && offset + node.textContent.length >= start) {
      // The anchor node is the first node that contains the start offset.
      anchorNode = node;
      anchorOffset = start - offset;
    }

    if (!extentNode && offset + node.textContent.length >= end) {
      // The extent node is the first node that contains the end offset.
      extentNode = node;
      extentOffset = end - offset;
    }

    if (anchorNode && extentNode) {
      break;
    }

    offset += node.textContent.length;
  }

  // Return an object that can be used to create a DOM selection.
  return { anchorNode, anchorOffset, extentNode, extentOffset };
}
```

With the above function, you can now update the `render` function created earlier to render the current selection by using the {{DOMxRef("Selection.setBaseAndExtent()")}} method:

```js
function render() {
  // ...
  // The beginning of the render function is omitted for brevity.

  // Render the selection at the correct location by
  // converting the start/end offsets to a DOM selection.
  const selectionStart = editContext.selectionStart;
  const selectionEnd = editContext.selectionEnd;

  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    convertFromOffsetsToSelection(selectionStart, selectionEnd);

  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

## Update the control bounds

The EditContext API gives you a lot of flexibility to define your own text editor UI. However, this also means that you need to handle some things that are usually handled by the browser or operating system (OS).

For example, you must tell the OS where the editable text region is located on the page. This way, the OS can correctly position any text-editing UI that the user might be composing text with, such as an IME composition window.

This is done by calling the {{domxref("EditContext.updateControlBounds()")}} method, and passing it a {{domxref("DOMRect")}} object that represents the bounds of the editable text region:

```js
function updateControlBounds() {
  // Get the DOMRect object for the editor element.
  const editorBounds = editorEl.getBoundingClientRect();

  // Update the control bounds of the EditContext instance.
  editContext.updateControlBounds(editorBounds);
}

// Call the updateControlBounds function when the editor is initialized,
updateControlBounds();

// And call it again when the window is resized.
window.addEventListener("resize", updateControlBounds);
```

## Handle Tab, Enter, and other text edit keys

The `textupdate` event used in the previous section isn't fired when the user presses the <kbd>Tab</kbd> or <kbd>Enter</kbd> keys, so you need to handle these keys separately.

To handle them, you can listen to the {{domxref("keydown_event", "keydown")}} event on the editor element, and use it to update the `EditContext` instance's text content and selection, as shown below:

```js
// Handle key presses that are not already handled by the EditContext.
editorEl.addEventListener("keydown", (e) => {
  // EditContext.updateText() expects the start and end offsets
  // to be in the correct order, but the current selection state
  // might be backwards.
  const start = Math.min(editContext.selectionStart, editContext.selectionEnd);
  const end = Math.max(editContext.selectionStart, editContext.selectionEnd);

  // Handling the Tab key.
  if (e.key === "Tab") {
    // Prevent the default behavior of the Tab key.
    e.preventDefault();

    // Use the EditContext.updateText method to insert a tab character
    // at the current selection position.
    editContext.updateText(start, end, "\t");

    // Update the selection to be after the inserted tab character.
    editContext.updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render();
  }

  // Handling the Enter key.
  if (e.key === "Enter") {
    // Use the EditContext.updateText method to insert a newline character
    // at the current selection position.
    editContext.updateText(start, end, "\n");

    // Update the selection to be after the inserted newline character.
    editContext.updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render();
  }
});
```

You might also want to handle other key combinations like <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd> to copy and paste text, or <kbd>Ctrl</kbd>+<kbd>Z</kbd> and <kbd>Ctrl</kbd>+<kbd>Y</kbd> to undo and redo text changes.

## Update the selection state and selection bounds

Earlier, you wrote code to _render_ the selection in the editor element. But you also need to _update_ the selection state and bounds when the user changes the selection. The EditContext API doesn't do this for you, again because you might choose to implement your editor UI in a different way, such as by using a `<canvas>` element.

To know when the user changes the selection, use the {{domxref("Document/selectionchange_event", "selectionchange")}} event and the {{domxref("Document.getSelection()")}} method. This will give you a {{DOMxRef("Selection")}} object. Because the EditContext API uses character offsets to represent the selection, you'll need to convert the DOM selection to character offsets. This can be done by using the following function:

```js
function convertFromSelectionToOffsets(selection) {
  // Create a TreeWalker that walks over all the
  // text nodes in the editor element.
  const treeWalker = document.createTreeWalker(editorEl, NodeFilter.SHOW_TEXT);

  let anchorNodeFound = false;
  let extentNodeFound = false;
  let anchorOffset = 0;
  let extentOffset = 0;

  // Iterate over the text nodes until we find
  // the anchor and extent nodes given by the selection.
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node === selection.anchorNode) {
      anchorNodeFound = true;
      anchorOffset += selection.anchorOffset;
    }

    if (node === selection.extentNode) {
      extentNodeFound = true;
      extentOffset += selection.extentOffset;
    }

    if (!anchorNodeFound) {
      anchorOffset += node.textContent.length;
    }
    if (!extentNodeFound) {
      extentOffset += node.textContent.length;
    }
  }

  // Return null if the nodes couldn't be found.
  // The selection is outside the editor element.
  if (!anchorNodeFound || !extentNodeFound) {
    return null;
  }

  return { start: anchorOffset, end: extentOffset };
}
```

With the above function, listen to the `selectionchange` event and update the EditContext selection state. Also update the bounds of the selection using the {{domxref("EditContext.updateSelectionBounds()")}} method. This is used by the OS to position the IME composition window correctly:

```js
// Listen to selectionchange events to let the
// EditContext know where it is.
document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();
  const offsets = convertFromSelectionToOffsets(selection);
  if (!offsets) {
    return;
  }

  // Update the selection.
  editContext.updateSelection(offsets.start, offsets.end);

  // Get the bounds of the selection.
  editContext.updateSelectionBounds(
    document.getSelection().getRangeAt(0).getBoundingClientRect(),
  );
});
```

## Calculate character bounds

Earlier, you used the {{domxref("EditContext.updateControlBounds()")}} and {{domxref("EditContext.updateSelectionBounds()")}} methods to help the OS position any text editing UI that the user might be composing text with, such as an IME composition window. There's one more bit of information that the OS requires to do this correctly: the position and size of certain characters within the editor element.

To do this, you'll need to listen to the {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} event, use it to calculate the bounds of some of the characters in the editor element, and then use the {{domxref("EditContext.updateCharacterBounds()")}} method to update the character bounds.

The EditContext API only uses character offsets, which means that the `characterboundsupdate` event will only tell you the start and end offsets for the characters it needs bounds for. It's up to you to find the DOM elements that these characters have been rendered in, and to calculate the bounds for these characters. To help with this, you'll first create a function that converts from character offsets to DOM elements:

```js
function convertFromOffsetsToListOfRenderedTokenNodes(start, end) {
  const tokenNodes = [];

  // Go over all character offsets in the range.
  for (let offset = start; offset < end; offset++) {
    // Find the DOM node that contains this character.
    // This assumes that the `currentTokens` array is accessible,
    // and that each item of the `currentTokens` array has a
    // `node` and `pos` property.
    const token = currentTokens.find(
      (token) => token.pos <= offset && token.pos + token.value.length > offset,
    );
    if (token) {
      tokenNodes.push({
        node: token.node,
        nodeOffset: token.pos,
        charOffset: offset,
      });
    }
  }

  return tokenNodes;
}
```

With the above function, you can now listen to the `characterboundsupdate` event, and use it to calculate the bounds of the characters in the editor element:

```js
editContext.addEventListener("characterboundsupdate", (e) => {
  // Retrieve information about the token nodes in the range.
  const tokenNodes = convertFromOffsetsToListOfRenderedTokenNodes(
    e.rangeStart,
    e.rangeEnd,
  );

  // Convert this information into a list of DOMRect objects.
  const charBounds = tokenNodes.map(({ node, nodeOffset, charOffset }) => {
    const range = document.createRange();
    range.setStart(node.firstChild, charOffset - nodeOffset);
    range.setEnd(node.firstChild, charOffset - nodeOffset + 1);
    return range.getBoundingClientRect();
  });

  // Let the EditContext instance know about the character bounds.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## Apply IME composition text formats

For the final step, there is one more thing you need to do to fully support IME composition. When the user is composing text with an IME, the IME might decide that certain parts of the text being composed should be formatted differently to indicate the composition state. For example, the IME might decide to underline the text.

Because you're responsible for rendering the content in the editable text region, the EditContext API doesn't do this for you. Instead, the API fires the {{domxref("EditContext.textformatupdate_event", "textformatupdate")}} event, and it's up to you to listen to this event and apply the formatting to the text.

As shown in the following code snippet, you will use the `convertFromOffsetsToSelection` function again to find the DOM nodes that are in the range of the IME composition. Let's also use the [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) to render the text formats. The CSS Custom Highlight API provides a mechanism for styling arbitrary text ranges by using JavaScript to create the ranges, and CSS to style them.

First, use the {{cssxref("::highlight", "::highlight()")}} pseudo-element to define the highlight styles. The text formats define the style and thickness of an underline. So, create as many highlights as there are possible combinations of underline styles and thicknesses:

```css
::highlight(ime-solid-thin) {
  text-decoration: underline 1px;
}

::highlight(ime-solid-thick) {
  text-decoration: underline 2px;
}

::highlight(ime-dotted-thin) {
  text-decoration: underline dotted 1px;
}

::highlight(ime-dotted-thick) {
  text-decoration: underline dotted 2px;
}

/* The rest of the highlights are omitted for brevity. */
```

Next, create instances of the highlights using the {{domxref("Highlight")}} constructor, store them in an object, and register them in the {{domxref("HighlightRegistry")}} by using the {{domxref("CSS/highlights_static", "CSS.highlights")}} property:

```js
// Instances of CSS custom Highlight objects, used to render
// the IME composition text formats.
const imeHighlights = {
  "solid-thin": null,
  "solid-thick": null,
  "dotted-thin": null,
  "dotted-thick": null,
  "dashed-thin": null,
  "dashed-thick": null,
  "wavy-thin": null,
  "wavy-thick": null,
  "squiggle-thin": null,
  "squiggle-thick": null,
};
for (const [key, value] of Object.entries(imeHighlights)) {
  imeHighlights[key] = new Highlight();
  CSS.highlights.set(`ime-${key}`, imeHighlights[key]);
}
```

Now, you can listen to the `textformatupdate` event, and use it to apply the IME composition text formats:

```js
editContext.addEventListener("textformatupdate", (e) => {
  // Get the list of formats that the IME wants to apply.
  const formats = e.getTextFormats();

  // Iterate over the text formats.
  for (const format of formats) {
    // For each format, we know the underline style and thickness,
    // as well as the start and end offsets of the range that needs
    // to be styled.
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    // Find the nodes that are in the range of the current format.
    const { anchorNode, anchorOffset, extentNode, extentOffset } =
      convertFromOffsetsToSelection(rangeStart, rangeEnd);

    // Get the right Highlight instance.
    const highlight =
      imeHighlights[
        `${format.underlineStyle.toLowerCase()}-${format.underlineThickness.toLowerCase()}`
      ];

    // Create a range object for the range that needs to be styled
    // And add it to the Highlight object.
    const range = document.createRange();
    range.setStart(anchorNode, anchorOffset);
    range.setEnd(extentNode, extentOffset);
    highlight.add(range);
  }
});
```

## Summary

This article showed you how to use the EditContext API to build a simple HTML code editor that supports IME composition and syntax highlighting.

The final code and live demo can be found on GitHub: [live demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) and [source code](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

More importantly, this article showed you that the EditContext API provides a lot of flexibility when it comes to the user interface of your editor. Based on this demo, you could build a similar text editor that uses a `<canvas>` element to render the syntax-highlighted HTML code instead of the `<div>` that the demo uses. You could also change how each token is rendered, or how the selection is rendered.

## See also

- [EditContext API](/en-US/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API)
