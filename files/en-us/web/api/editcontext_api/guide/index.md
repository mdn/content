---
title: Using the EditContext API
slug: Web/API/EditContext_API/Guide
page-type: guide
---

{{DefaultAPISidebar("EditContext API")}}

The **[EditContext API](/en-US/docs/Web/API/EditContext_API)** can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("Input Method Editor")}} (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

This article goes through all the steps that are necessary to build a text editor using the EditContext API. In this guide, you will build a simple HTML code editor that highlights the syntax of the code as you type, and that supports IME composition.

## Final code and live demo

If you want to see the final code, you can check out the [live demo](https://mdn.github.io/dom-examples/editcontext-api/html-editor/) and [source code](https://github.com/mdn/dom-examples/tree/master/editcontext-api/html-editor) on GitHub.

## Create the editor UI

The first step is to create the UI for the editor. The editor will be a simple [`<div>`](/en-US/docs/Web/HTML/Element/div) element with he [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute set to `false` to disable spell checking:

```html
<div id="html-editor" spellcheck="false"></div>
```

The following CSS code is used to make the editor fill the entire viewport and scroll when there's too much content to fit. The [`white-space`](/en-US/docs/Web/CSS/white-space) property is also used to preserve whitespace, and the [`tab-size`](/en-US/docs/Web/CSS/tab-size) property is used to make tab characters render as two spaces. Finally, some default background and text colors are set.

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

To make an element editable on the web, most of the time, you use an [`<input>`](/en-US/docs/Web/HTML/Element/input) element, a [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) element, or the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute.

However, with the EditContext API, you can make other types of elements editable without using an attribute. To see the list of elements that can be used with the EditContext API, see [Possible elements](/en-US/docs/Web/API/HTMLElement/editContext#possible_elements) on the HTMLElement editContext property page.

To make the editor editable, you create an {{domxref("EditContext")}} instance, and then you set the [`editContext`](/en-US/docs/Web/API/HTMLElement/editContext) property of the editor element to the `EditContext` instance:

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

## Render the text

The next step is to write a function that renders the syntax-highlighted HTML code in the editor when the user enters text. This function will be called when new text is entered, when characters are deleted, or when the selection is changed.

### Tokenizing the HTML code

In order to render the syntax-highlighted HTML, you'll first need to tokenize the HTML code. This means reading the HTML code string, and determining where each opening tag, closing tag, attribute, comment node, and text node start and end. This can be done by iterating over the string character by character while maintaining a state machine.

Since this is a guide about the EditContext API, the tokenizer code is not shown here. You can find the tokenizer code used in this tutorial in the [source code](https://github.com/mdn/dom-examples/blob/main/editcontext-api/html-editor/tokenizer.js).

For the purpose of this tutorial, let's assume that the tokenizer is a function that's imported from a separate file:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### The render function

For the `render` function, let's start the following simple code snippet:

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
  }
}
```

With the above code, it's easy to see that the EditContext API makes you responsible for rendering the user interface of your editor. You can render the HTML text any other way you want, including rendering it into a `<canvas>` element.

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

## Handle tab, enter, and other text edit keys

The `textupdate` event used in the previous section isn't fired when the user presses the <kbd>Tab</kbd> or <kbd>Enter</kbd> keys, so you need to handle these keys separately.

To handle them, you can listen to the {{domxref("keydown_event", "keydown")}} event on the editor element, and use it to update the `EditContext` instance's text content and selection, as shown below:

```js
// Handle key presses that are not already handled by the EditContext.
editorEl.addEventListener("keydown", (e) => {
  // Handling the Tab key.
  if (e.key === "Tab") {
    // Prevent the default behavior of the Tab key.
    e.preventDefault();

    // Use the EditContext.updateText method to insert a tab character
    // at the current selection position.
    editContext.updateText(
      editContext.selectionStart,
      editContext.selectionEnd,
      "\t",
    );

    // Update the selection to be after the inserted tab character.
    editContext.updateSelection(
      editContext.selectionStart + 1,
      editContext.selectionStart + 1,
    );

    // Re-render the editor.
    render();
  }

  // Handling the Enter key.
  if (e.key === "Enter") {
    // Use the EditContext.updateText method to insert a newline character
    // at the current selection position.
    editContext.updateText(
      editContext.selectionStart,
      editContext.selectionEnd,
      "\n",
    );

    // Update the selection to be after the inserted newline character.
    editContext.updateSelection(
      editContext.selectionStart + 1,
      editContext.selectionStart + 1,
    );

    // Re-render the editor.
    render();
  }
});
```

## Updating the control bounds

## Updating the selection

## Calculating character bounds for IME composition

## Applying IME composition text formats

## Summary

## See also

- [EditContext API](/en-US/docs/Web/API/EditContext_API)
