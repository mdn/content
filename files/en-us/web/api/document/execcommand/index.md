---
title: "Document: execCommand() method"
short-title: execCommand()
slug: Web/API/Document/execCommand
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Document.execCommand
---

{{ApiRef("DOM")}}{{deprecated_header}}

When an HTML document has been switched to
[`designMode`](/en-US/docs/Web/API/Document/designMode), its
`document` object exposes an **`execCommand`**
method to run commands that manipulate the current editable region, such as [form inputs](/en-US/docs/Web/HTML/Element/input) or
[`contentEditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable)
elements.

Most commands affect the document's [selection](/en-US/docs/Web/API/Selection) (bold, italics, etc.), while others
insert new elements (adding a link), or affect an entire line (indenting). When using
`contentEditable`, `execCommand()` affects the currently active
editable element.

The [Clipboard API](/en-US/docs/Web/API/Clipboard_API) can be used instead of `execCommand` in many cases, but `execCommand` is still sometimes useful. In particular, the Clipboard API doesn't replace the `insertText` command, which you can use to programmatically replace text at the cursor while preserving the undo buffer (edit history) in plain `textarea` and `input` elements.

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameters

- `aCommandName`

  - : A string specifying the name of the command to execute. The following commands are specified:
    - `backColor`
      - : Changes the document background color. In `styleWithCss` mode, it affects the background color of the containing block instead. This requires a {{cssxref("&lt;color&gt;")}} value string to be passed in as a value argument.
    - `bold`
      - : Toggles bold on/off for the selection or at the insertion point.
    - `contentReadOnly`
      - : Makes the content document either read-only or editable. This requires a boolean true/false as the value argument.
    - `copy`
      - : Copies the current selection to the clipboard. Conditions of having this behavior enabled vary from one browser to another, and have evolved over time. Check the compatibility table to determine if you can use it in your case.
    - `createLink`
      - : Creates an hyperlink from the selection, but only if there is a selection. Requires a {{Glossary("URI")}} string as a value argument for the hyperlink's `href`. The URI must contain at least a single character, which may be whitespace.
    - `cut`
      - : Removes the current selection and copies it to the clipboard. When this behavior is enabled varies between browsers, and its conditions have evolved over time. Check [the compatibility table](#browser_compatibility) for usage details.
    - `decreaseFontSize`
      - : Adds a {{HTMLElement("small")}} tag around the selection or at the insertion point.
    - `defaultParagraphSeparator`
      - : Changes the paragraph separator used when new paragraphs are created in editable text regions. See [Differences in markup generation](/en-US/docs/Web/Guide/HTML/Editable_content#differences_in_markup_generation) for more details.
    - `delete`
      - : Deletes the current selection.
    - `enableAbsolutePositionEditor`
      - : Enables or disables the grabber that allows absolutely-positioned elements to be moved around. The grabber is disabled by default since Firefox 64 ([Firefox bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Enables or disables the table row/column insertion and deletion controls. The controls are disabled by default since Firefox 64 ([Firefox bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Enables or disables the resize handles on images, tables, and absolutely-positioned elements and other resizable objects. The handles are disabled by default since Firefox 64 ([Firefox bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Changes the font name for the selection or at the insertion point. This requires a font name string (like `"Arial"`) as a value argument.
    - `fontSize`
      - : Changes the font size for the selection or at the insertion point. This requires an integer from `1` - `7` as a value argument.
    - `foreColor`
      - : Changes a font color for the selection or at the insertion point. This requires a hexadecimal color value string as a value argument.
    - `formatBlock`
      - : Adds an HTML block-level element around the line containing the current selection, replacing the block element containing the line if one exists (in Firefox, {{HTMLElement("blockquote")}} is the exception — it will wrap any containing block element). Requires a tag-name string as a value argument. Virtually all block-level elements can be used. (Legacy Edge only supports heading tags `H1` – `H6`, `ADDRESS`, and `PRE`, which must be wrapped in angle brackets, such as `"<H1>"`.)
    - `forwardDelete`
      - : Deletes the character ahead of the [cursor](https://en.wikipedia.org/wiki/Cursor_%28computers%29)'s position, identical to hitting the Delete key on a Windows keyboard.
    - `heading`
      - : Adds a heading element around a selection or insertion point line. Requires the tag-name string as a value argument (i.e., `"H1"`, `"H6"`). (Not supported by Safari.)
    - `hiliteColor`
      - : Changes the background color for the selection or at the insertion point. Requires a color value string as a value argument. `useCSS` must be `true` for this to function.
    - `increaseFontSize`
      - : Adds a {{HTMLElement("big")}} tag around the selection or at the insertion point.
    - `indent`
      - : Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented.
    - `insertBrOnReturn`
      - : Controls whether the Enter key inserts a {{HTMLElement("br")}} element, or splits the current block element into two.
    - `insertHorizontalRule`
      - : Inserts a {{HTMLElement("hr")}} element at the insertion point, or replaces the selection with it.
    - `insertHTML`
      - : Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string as a value argument.
    - `insertImage`
      - : Inserts an image at the insertion point (deletes selection). Requires a URL string for the image's `src` as a value argument. The requirements for this string are the same as `createLink`.
    - `insertOrderedList`
      - : Creates a [numbered ordered list](/en-US/docs/Web/HTML/Element/ol) for the selection or at the insertion point.
    - `insertUnorderedList`
      - : Creates a [bulleted unordered list](/en-US/docs/Web/HTML/Element/ul) for the selection or at the insertion point.
    - `insertParagraph`
      - : Inserts a [paragraph](/en-US/docs/Web/HTML/Element/p) around the selection or the current line.
    - `insertText`
      - : Inserts the given plain text at the insertion point (deletes selection).
    - `italic`
      - : Toggles italics on/off for the selection or at the insertion point.
    - `justifyCenter`
      - : Centers the selection or insertion point.
    - `justifyFull`
      - : Justifies the selection or insertion point.
    - `justifyLeft`
      - : Justifies the selection or insertion point to the left.
    - `justifyRight`
      - : Right-justifies the selection or the insertion point.
    - `outdent`
      - : Outdents the line containing the selection or insertion point.
    - `paste`
      - : Pastes the clipboard contents at the insertion point (replaces current selection). Disabled for web content.
    - `redo`
      - : Redoes the previous undo command.
    - `removeFormat`
      - : Removes all formatting from the current selection.
    - `selectAll`
      - : Selects all of the content of the editable region.
    - `strikeThrough`
      - : Toggles strikethrough on/off for the selection or at the insertion point.
    - `subscript`
      - : Toggles [subscript](/en-US/docs/Web/HTML/Element/sub) on/off for the selection or at the insertion point.
    - `superscript`
      - : Toggles [superscript](/en-US/docs/Web/HTML/Element/sup) on/off for the selection or at the insertion point.
    - `underline`
      - : Toggles [underline](/en-US/docs/Web/HTML/Element/u) on/off for the selection or at the insertion point.
    - `undo`
      - : Undoes the last executed command.
    - `unlink`
      - : Removes the [anchor element](/en-US/docs/Web/HTML/Element/a) from a selected hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Toggles the use of HTML tags or CSS for the generated markup. Requires a boolean true/false as a value argument.
        > **Note:** This argument is logically backwards (i.e., use `false` to use CSS,
        > `true` to use HTML). This has been deprecated in favor of `styleWithCSS`.
    - `styleWithCSS`
      - : Replaces the `useCSS` command. `true` modifies/generates `style` attributes in markup, false generates presentational elements.
    - `AutoUrlDetect`
      - : Changes the browser auto-link behavior.

- `aShowDefaultUI`
  - : A boolean value indicating whether the default user interface should be shown. This is not implemented in Mozilla.
- `aValueArgument`
  - : For commands which require an input argument, is a string providing that information. For example, `insertImage` requires the URL of the image to insert. Specify `null` if no argument is needed.

### Return value

A boolean value that is `false` if the command is unsupported or disabled.

> **Note:** `document.execCommand()` only returns
> `true` if it is invoked as part of a user interaction. You can't use it to
> verify browser support before calling a command. From Firefox 82, nested
> `document.execCommand()` calls will always return `false`.

## Examples

An example of [how to use execCommand with contentEditable elements](https://codepen.io/chrisdavidmills/full/gzYjag/) on CodePen.

### Using insertText

This example shows two very basic HTML editors, one using a {{HTMLElement("textarea")}} element and one using a {{HTMLElement("pre")}} element with the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) attribute set.

Clicking the "Bold" or "Italic" buttons inserts the appropriate tags in the element, using `insertText` to preserve the edit history, so the user can undo the action.

#### HTML

```html
<h2>textarea</h2>

<div class="actions" data-for="textarea">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<textarea class="editarea">Some text.</textarea>

<h2>contenteditable</h2>

<div class="actions" data-for="pre">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<pre contenteditable="true" class="editarea">Some text.</pre>
```

#### JavaScript

```js
// Prepare action buttons
const buttonContainers = document.querySelectorAll(".actions");

for (const buttonContainer of buttonContainers) {
  const buttons = buttonContainer.querySelectorAll("button");
  const pasteTarget = buttonContainer.getAttribute("data-for");

  for (const button of buttons) {
    const elementName = button.getAttribute("data-el");
    button.addEventListener("click", () =>
      insertText(`<${elementName}></${elementName}>`, pasteTarget),
    );
  }
}

// Inserts text at cursor, or replaces selected text
function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error("error caught:", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("paste unsuccessful, execCommand not supported");
  }
}
```

#### Result

{{EmbedLiveSample("Using insertText", 100, 300)}}

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
