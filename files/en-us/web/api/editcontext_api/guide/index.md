---
title: Using the EditContext API
slug: Web/API/EditContext_API/Guide
page-type: guide
---

{{DefaultAPISidebar("EditContext API")}}

The **[EditContext API](/en-US/docs/Web/API/EditContext_API)** can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("Input Method Editor")}} (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

This article goes over the necessary steps to build a text editor using the EditContext API. In this guide, you will review the main steps involved in building a simple HTML code editor that highlights the syntax of the code as you type, and that supports IME composition.

## Final code and live demo

To see the final code, check out the [source code](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) on GitHub. It's a good idea to keep the source code open while reading, as the tutorial only shows the most important parts of the code.

The source code is organized into the following files:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) contains the editor UI element, and loads the necessary CSS and JavaScript code for the demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) contains the styles for the editor UI.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) contains the JavaScript code that sets up the editor UI, renders the HTML code, and handles user input.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) contains the JavaScript code that splits the HTML code into separate tokens, such as opening tags, closing tags, and text nodes.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) contains the JavaScript code that converts between the character offsets that the EditContext API uses, and the DOM nodes that the browser uses for text selections.

To use the live demo, open [Edit Context API: HTML editor demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in a browser that supports the EditContext API.

## Creating the editor UI

The first step is to create the UI for the editor. The editor is a {{HTMLElement("div")}} element with the [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute set to `false` to disable spell checking:

```html
<div id="html-editor" spellcheck="false"></div>
```

To style the editor element, the following CSS code is used. The code makes the editor fill the entire viewport and scroll when there's too much content to fit. The {{cssxref("white-space")}} property is also used to preserve whitespace characters found in the HTML input text, and the {{cssxref("tab-size")}} property is used to make tab characters render as two spaces. Finally, some default background, text, and caret colors are set:

```css
#html-editor {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
  caret-color: red;
  background: #000;
  line-height: 1.6;
  color: red;
}
```

## Making the editor editable

To make an element editable on the web, most of the time, you use an {{HTMLElement("input")}} element, a {{HTMLElement("textarea")}} element, or the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute.

However, with the EditContext API, you can make other types of elements editable without using an attribute. To see the list of elements that can be used with the EditContext API, see [Possible elements](/en-US/docs/Web/API/HTMLElement/editContext#possible_elements) on the HTMLElement `editContext` property page.

To make the editor editable, the demo app creates an {{domxref("EditContext")}} instance, passing some initial HTML text to the constructor, and then sets the {{domxref("HTMLElement.editContext", "editContext")}} property of the editor element to the `EditContext` instance:

```js
// Retrieve the editor element from the DOM.
const editorEl = document.getElementById("html-editor");

// Create the EditContext instance.
const editContext = new EditContext({
  text: "<html>\n  <body id=foo>\n    <h1 id='header'>Cool Title</h1>\n    <p class=\"wow\">hello<br/>How are you? test</p>\n  </body>\n</html>",
});

// Set the editor's editContext property value.
editorEl.editContext = editContext;
```

These lines of code make the editor element focusable. Entering text in the element fires the {{domxref("EditContext.textupdate_event", "textupdate")}} event on the `EditContext` instance.

## Rendering the text and user selection

To render the syntax-highlighted HTML code in the editor when the user enters text, the demo app uses a function named `render()` that's called when new text is entered, when characters are deleted, or when the selection is changed.

### Tokenizing the HTML code

One of the first things the `render()` function does is tokenize the HTML text content. Tokenizing the HTML text content is needed to highlight the HTML syntax, and involves reading the HTML code string, and determining where each opening tag, closing tag, attribute, comment node, and text node starts and ends.

The demo app uses the `tokenizeHTML()` function to achieve this, which iterates over the string character by character while maintaining a state machine. You can see the source code for the `tokenizeHTML()` function in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js), on GitHub.

The function is imported into the demo app HTML file like this:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Rendering the text

Whenever the `render()` function is called, which is when the user enters text, or when the selection changes, the function removes the content in the editor element, and then renders each token as a separate HTML element:

```js
// Stores the list of HTML tokens.
let currentTokens = [];

function render(text, selectionStart, selectionEnd) {
  // Empty the editor. We're re-rendering everything.
  editorEl.textContent = "";

  // Tokenize the text.
  currentTokens = tokenizeHTML(text);

  for (const token of currentTokens) {
    // Render each token as a span element.
    const span = document.createElement("span");
    span.classList.add(`token-${token.type}`);
    span.textContent = token.value;

    // Attach the span to the editor element.
    editorEl.appendChild(span);

    // Store the new DOM node as a property of the token
    // in the currentTokens array. We will need it again
    // later in fromOffsetsToRenderedTokenNodes.
    token.node = span;
  }

  // Code to render the text selection is omitted for brevity.
  // See "Rendering the selection", below.
  // ...
}
```

The EditContext API gives the ability to control the way the edited text is rendered. The above function renders it by using HTML elements, but it could render it in any other way, including by rendering it into a `<canvas>` element.

The demo app runs the `render()` function when necessary. This includes once when the app starts, and then again when the user enters text, by listening to the {{domxref("EditContext.textupdate_event", "textupdate")}} event:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Do the initial render.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Styling the tokens

As seen in the previous `render()` function code example, each token is given a class name that corresponds to the type of token it is. The demo app uses this class name to style the tokens, using CSS, as shown below:

```css
.token-openTagStart,
.token-openTagEnd,
.token-closeTagStart,
.token-closeTagEnd,
.token-selfClose {
  background: rgb(7 53 92);
  margin: 0 2px;
  color: white;
  border-radius: 0.25rem;
}

.token-equal {
  color: white;
}

.token-tagName {
  font-weight: bold;
  color: rgb(117 186 242);
}

.token-attributeName {
  color: rgb(207 81 198);
}

.token-attributeValue {
  font-style: italic;
  color: rgb(127 230 127);
  border: 1px dashed #8c8c8c;
  border-width: 1px 0 1px 0;
}

.token-quoteStart,
.token-quoteEnd {
  font-weight: bold;
  color: rgb(127 230 127);
  border: 1px solid #8c8c8c;
  border-width: 1px 0 1px 1px;
  border-radius: 0.25rem 0 0 0.25rem;
}

.token-quoteEnd {
  border-width: 1px 1px 1px 0;
  border-radius: 0 0.25rem 0.25rem 0;
}

.token-text {
  color: #6a6a6a;
  padding: 0 0.25rem;
}
```

### Rendering the selection

Even though the demo app uses a `<div>` element for the editor, which already supports displaying a blinking text cursor and highlighting user selections, the EditContext API still requires to render the selection. This is because the EditContext API can be used with other types of elements that don't support these behaviors. Rendering the selection ourselves also gives us more control over how the selection is displayed. Finally, because the `render()` function clears the HTML content of the editor element every time it runs, any selection that the user might have made is lost the next time the `render()` function runs.

To render the selection, the demo app uses the {{domxref("Selection.setBaseAndExtent()")}} method at the end of the `render()` function. To use the `setBaseAndExtent()` method, we need a pair of DOM nodes and character offsets that represent the start and end of the selection. However, the EditContext API maintains the state for the current selection only as a pair of start and end character offsets into the entire edit buffer. The demo app code uses another function, called `fromOffsetsToSelection()` that's used to convert these character offsets into four values:

- The DOM node that contains the start of the selection.
- A number representing the character position of the selection start, within the start node.
- The DOM node that contains the end of the selection.
- A number representing the character position of the selection end, within the end node.

```js
function render(text, selectionStart, selectionEnd) {
  // ...
  // The beginning of the render function is omitted for brevity.

  // Convert the start/end offsets to a DOM selection.
  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    fromOffsetsToSelection(selectionStart, selectionEnd);

  // Render the selection in the editor element.
  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

You can see the code for the `fromOffsetsToSelection()` function in the [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) file.

## Updating the control bounds

The EditContext API gives us a lot of flexibility to define our own text editor UI. However, this also means that we need to handle some things that are usually handled by the browser or operating system (OS).

For example, we must tell the OS where the editable text region is located on the page. This way, the OS can correctly position any text-editing UI that the user might be composing text with, such as an IME composition window.

The demo app uses the {{domxref("EditContext.updateControlBounds()")}} method, providing it with a {{domxref("DOMRect")}} object that represents the bounds of the editable text region. The demo app calls this method when the editor is initialized, and again when the window is resized:

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

## Handling Tab, Enter, and other text edit keys

The `textupdate` event used in the previous section isn't fired when the user presses the <kbd>Tab</kbd> or <kbd>Enter</kbd> keys, so we need to handle these keys separately.

To handle them, the demo app uses an event listener for the {{domxref("Element.keydown_event", "keydown")}} event on the editor element, and uses this listener to update the `EditContext` instance's text content and selection, as shown below:

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
    updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }

  // Handling the Enter key.
  if (e.key === "Enter") {
    // Use the EditContext.updateText method to insert a newline character
    // at the current selection position.
    editContext.updateText(start, end, "\n");

    // Update the selection to be after the inserted newline character.
    updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }
});
```

The above code also calls the `updateSelection()` function to update the selection after the text content has been updated. See [Updating the selection state and selection bounds](#updating_the_selection_state_and_selection_bounds), below, for more information.

We could improve the code by handling other key combinations, such as <kbd>Ctrl</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>V</kbd> to copy and paste text, or <kbd>Ctrl</kbd>+<kbd>Z</kbd> and <kbd>Ctrl</kbd>+<kbd>Y</kbd> to undo and redo text changes.

## Updating the selection state and selection bounds

As we saw earlier, the `render()` function handles rendering the current user selection in the editor element. But the demo app also needs to _update_ the selection state and bounds when the user changes the selection. The EditContext API doesn't do this automatically, again because the editor UI might be implemented in a different way, such as by using a `<canvas>` element.

To know when the user changes the selection, the demo app uses the {{domxref("Document/selectionchange_event", "selectionchange")}} event and the {{domxref("Document.getSelection()")}} method, which provide a {{domxref("Selection")}} object, telling us where the user's selection is. Using this information the demo app updates the EditContext selection state and selection bounds by using the {{domxref("EditContext.updateSelection()")}} and {{domxref("EditContext.updateSelectionBounds()")}} methods. This is used by the OS to position the IME composition window correctly.

However, because the EditContext API uses character offsets to represent the selection, the demo app also uses a function, `fromSelectionToOffsets()` that converts DOM selection objects to character offsets.

```js
// Listen to selectionchange events to let the
// EditContext know where it is.
document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();

  // Convert the DOM selection into character offsets.
  const offsets = fromSelectionToOffsets(selection, editorEl);
  if (offsets) {
    updateSelection(offsets.start, offsets.end);
  }
});

// Update the selection and selection bounds in the EditContext object.
// This helps the OS position the IME composition window correctly.
function updateSelection(start, end) {
  editContext.updateSelection(start, end);
  // Get the bounds of the selection.
  editContext.updateSelectionBounds(
    document.getSelection().getRangeAt(0).getBoundingClientRect(),
  );
}
```

You can see the code for the `fromSelectionToOffsets()` function in the [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) file.

## Calculating character bounds

On top of using the {{domxref("EditContext.updateControlBounds()")}} and {{domxref("EditContext.updateSelectionBounds()")}} methods to help the OS position a text editing UI that the user might be using, there's one more bit of information that the OS requires: the position and size of certain characters within the editor element.

To do this, the demo app listens to the {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} event, uses it to calculate the bounds of some of the characters in the editor element, and then uses the {{domxref("EditContext.updateCharacterBounds()")}} method to update the character bounds.

As seen before, the EditContext API only knows about character offsets, which means that the `characterboundsupdate` event provides the start and end offsets for the characters it needs bounds for. The demo app uses another function, `fromOffsetsToRenderedTokenNodes()`, to find the DOM elements that these characters have been rendered in, and uses this information to calculate the required bounds.

```js
// Listen to the characterboundsupdate event to know when character bounds
// information is needed, and which characters need bounds.
editContext.addEventListener("characterboundsupdate", (e) => {
  // Retrieve information about the token nodes in the range.
  const tokenNodes = fromOffsetsToRenderedTokenNodes(
    currentTokens,
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

You can see the code for the `fromOffsetsToRenderedTokenNodes()` function in the [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) file.

## Applying IME composition text formats

The demo app goes through a final step to fully support IME composition. When the user is composing text with an IME, the IME might decide that certain parts of the text being composed should be formatted differently to indicate the composition state. For example, the IME might decide to underline the text.

Because it's the demo app's responsibility to render the content in the editable text region, it's also its responsibility to apply the necessary IME formatting. The demo app achieves this by listening to the {{domxref("EditContext.textformatupdate_event", "textformatupdate")}} event to know when the IME wants to apply text formats, where, and what formats to apply.

As shown in the following code snippet, the demo app uses the `textformatupdate` event and the `fromOffsetsToSelection()` function again to find the text range that the IME composition wants to format:

```js
editContext.addEventListener("textformatupdate", (e) => {
  // Get the list of formats that the IME wants to apply.
  const formats = e.getTextFormats();

  for (const format of formats) {
    // Find the DOM selection that corresponds to the format's range.
    const selection = fromOffsetsToSelection(
      format.rangeStart,
      format.rangeEnd,
      editorEl,
    );

    // Highlight the selection with the right style and thickness.
    addHighlight(selection, format.underlineStyle, format.underlineThickness);
  }
});
```

The above event handler calls the function named `addHighlight()` to format text. This function uses the [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) to render the text formats. The CSS Custom Highlight API provides a mechanism for styling arbitrary text ranges by using JavaScript to create the ranges, and CSS to style them. To use this API, the {{cssxref("::highlight", "::highlight()")}} pseudo-element is used to define the highlight styles:

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

/* Other highlights are omitted for brevity. */
```

{{domxref("Highlight")}} instances are also created, stored in an object, and registered in the {{domxref("HighlightRegistry")}} by using the {{domxref("CSS/highlights_static", "CSS.highlights")}} property:

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

With this in place, the `addHighlight()` function uses {{domxref("Range")}} objects for the ranges that need to be styled, and adds them to the `Highlight` object:

```js
function addHighlight(selection, underlineStyle, underlineThickness) {
  // Get the right CSS custom Highlight object depending on the
  // underline style and thickness.
  const highlight =
    imeHighlights[
      `${underlineStyle.toLowerCase()}-${underlineThickness.toLowerCase()}`
    ];

  if (highlight) {
    // Add a range to the Highlight object.
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.extentNode, selection.extentOffset);
    highlight.add(range);
  }
}
```

## Summary

This article showed you how to use the EditContext API to build a simple HTML code editor that supports IME composition and syntax highlighting.

The final code and live demo can be found on GitHub: [live demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) and [source code](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

More importantly, this article showed you that the EditContext API provides a lot of flexibility when it comes to the user interface of your editor. Based on this demo, you could build a similar text editor that uses a `<canvas>` element to render the syntax-highlighted HTML code instead of the `<div>` that the demo uses. You could also change how each token is rendered, or how the selection is rendered.

## See also

- [EditContext API](/en-US/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API)
