---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
page-type: web-api-interface
browser-compat: api.HTMLTextAreaElement
---

{{APIRef("HTML DOM")}}

The **`HTMLTextAreaElement`** interface provides special properties and methods for manipulating the layout and presentation of {{HTMLElement("textarea")}} elements.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("HTMLElement")}}._

- {{domxref("HTMLTextAreaElement.autocomplete", "autocomplete")}}
  - : A string that represents the element's [`autocomplete`](/en-US/docs/Web/HTML/Element/textarea#autocomplete) attribute.
- {{domxref("HTMLTextAreaElement.cols", "cols")}}
  - : A number that represents the element's [`cols`](/en-US/docs/Web/HTML/Element/textarea#cols) attribute, indicating the visible width of the text area.
- {{domxref("HTMLTextAreaElement.defaultValue", "defaultValue")}}
  - : A string that represents the control's default value, which behaves like the {{domxref("Node.textContent")}} property.
- {{domxref("HTMLTextAreaElement.dirName", "dirName")}}
  - : A string that represents the directionality of the element.
- {{domxref("HTMLTextAreaElement.disabled", "disabled")}}
  - : A boolean that represents the element's [`disabled`](/en-US/docs/Web/HTML/Element/textarea#disabled) attribute, indicating that the control is not available for interaction.
- {{domxref("HTMLTextAreaElement.form", "form")}} {{ReadOnlyInline}}
  - : Returns a reference to the parent form element. If this element is not contained in a form element, it can be the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute of any {{HTMLElement("form")}} element in the same document or the value `null`.
- {{domxref("HTMLTextAreaElement.labels", "labels")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with this element.
- {{domxref("HTMLTextAreaElement.maxLength", "maxLength")}}
  - : A number that represents the element's [`maxlength`](/en-US/docs/Web/HTML/Element/textarea#maxlength) attribute, indicating the maximum number of characters the user can enter. This constraint is evaluated only when the value changes.
- {{domxref("HTMLTextAreaElement.minLength", "minLength")}}
  - : A number that represents the element's [`minlength`](/en-US/docs/Web/HTML/Element/textarea#minlength) attribute, indicating the minimum number of characters the user can enter. This constraint is evaluated only when the value changes.
- {{domxref("HTMLTextAreaElement.name", "name")}}
  - : A string that represents the element's [`name`](/en-US/docs/Web/HTML/Element/textarea#name) attribute, containing the name of the control.
- {{domxref("HTMLTextAreaElement.placeholder", "placeholder")}}
  - : A string that represents the element's [`placeholder`](/en-US/docs/Web/HTML/Element/textarea#placeholder) attribute, containing a hint to the user about what to enter in the control.
- {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}}
  - : A boolean that represents the element's [`readonly`](/en-US/docs/Web/HTML/Element/textarea#readonly) attribute, indicating that the user cannot modify the value of the control.
- {{domxref("HTMLTextAreaElement.required", "required")}}
  - : A boolean that represents the element's [`required`](/en-US/docs/Web/HTML/Element/textarea#required) attribute, indicating that the user must specify a value before submitting the form.
- {{domxref("HTMLTextAreaElement.rows", "rows")}}
  - : A number that represents the element's [`rows`](/en-US/docs/Web/HTML/Element/textarea#rows) attribute, indicating the number of visible text lines for the control.
- {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}}
  - : A string that represents the direction in which selection occurred. This is `forward` if selection was performed in the start-to-end direction of the current locale, or `backward` for the opposite direction. This can also be `none` if the direction is unknown.
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}
  - : A number that represents the index of the end of selected text. If no text is selected, it contains the index of the character that follows the input cursor. On being set, the control behaves as if `setSelectionRange()` had been called with this as the second argument, and `selectionStart` as the first argument.
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}}
  - : A number that represents the index of the beginning of selected text. If no text is selected, it contains the index of the character that follows the input cursor. On being set, the control behaves as if `setSelectionRange()` had been called with this as the first argument and `selectionEnd` as the second argument.
- {{domxref("HTMLTextAreaElement.textLength", "textLength")}} {{ReadOnlyInline}}
  - : Returns the code point length of the control's `value`. Same as reading `value.length`.
- {{domxref("HTMLTextAreaElement.type", "type")}} {{ReadOnlyInline}}
  - : Returns the string `textarea`.
- {{domxref("HTMLTextAreaElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- {{domxref("HTMLTextAreaElement.validity", "validity")}} {{ReadOnlyInline}}
  - : Returns the validity state that this element is in.
- {{domxref("HTMLTextAreaElement.value", "value")}}
  - : A string that represents the raw value contained in the control.
- {{domxref("HTMLTextAreaElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : Returns whether the element is a candidate for constraint validation. `false` if any conditions bar it from constraint validation, including its `readOnly` or `disabled` property is `true`.
- {{domxref("HTMLTextAreaElement.wrap", "wrap")}}
  - : A string that represents the element's [`wrap`](/en-US/docs/Web/HTML/Element/textarea#wrap) attribute, indicating how the control wraps text.

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("HTMLElement")}}._

- {{domxref("HTMLTextAreaElement.checkValidity", "checkValidity()")}}
  - : Returns `false` if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires a cancelable `invalid` event at the control. It returns `true` if the control is not a candidate for constraint validation, or if it satisfies its constraints.
- {{domxref("HTMLTextAreaElement.reportValidity", "reportValidity()")}}
  - : This method reports the problems with the constraints on the element, if any, to the user. If there are problems, it fires a cancelable `invalid` event at the element, and returns `false`; if there are no problems, it returns `true`.
- {{domxref("HTMLTextAreaElement.select", "select()")}}
  - : Selects the contents of the control.
- {{domxref("HTMLTextAreaElement.setCustomValidity", "setCustomValidity()")}}
  - : Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
- {{domxref("HTMLTextAreaElement.setRangeText", "setRangeText()")}}
  - : Replaces a range of text in the element with new text.
- {{domxref("HTMLTextAreaElement.setSelectionRange", "setSelectionRange()")}}
  - : Selects a range of text in the element (but does not focus it).

## Events

_Also inherits events from its parent interface, {{DOMxRef("HTMLElement")}}._

Listen to these events using {{domxref("EventTarget/addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface:

- {{domxref("HTMLTextAreaElement/select_event", "select")}} event
  - : Fires when some text has been selected.
- {{domxref("HTMLTextAreaElement/selectionchange_event", "selectionchange")}} event {{experimental_inline}}
  - : Fires when the text selection in a {{HTMLElement("textarea")}} element has been changed.

## Examples

### Autogrowing textarea example

Make a textarea autogrow while typing:

#### JavaScript

```js
function autoGrow(field) {
  if (field.scrollHeight > field.clientHeight) {
    field.style.height = `${field.scrollHeight}px`;
  }
}
```

#### CSS

```css
textarea.noscrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>Your comments</legend>
    <p><textarea class="noscrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Insert HTML tags example

Insert some HTML tags in a textarea.

#### JavaScript

```js
function insert(startTag, endTag) {
  const textArea = document.myForm.myTxtArea;
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;
  const oldText = textArea.value;

  const prefix = oldText.substring(0, selectionStart);
  const inserted =
    startTag + oldText.substring(selectionStart, selectionEnd) + endTag;
  const suffix = oldText.substring(selectionEnd);
  textArea.value = `${prefix}${inserted}${suffix}`;

  const newSelectionStart = selectionStart + startTag.length;
  const newSelectionEnd = selectionEnd + startTag.length;
  textArea.setSelectionRange(newSelectionStart, newSelectionEnd);

  textArea.focus();
}

function insertURL() {
  const newURL = prompt("Enter the full URL for the link");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTxtArea.focus();
  }
}

const strong = document.querySelector("#format-strong");
const em = document.querySelector("#format-em");
const link = document.querySelector("#format-link");
const code = document.querySelector("#format-code");

strong.addEventListener("click", (e) => insert("<strong>", "</strong>"));
em.addEventListener("click", (e) => insert("<em>", "</em>"));
link.addEventListener("click", (e) => insertURL());
code.addEventListener("click", (e) => insert("\n<code>\n", "\n</code>\n"));
```

#### CSS

CSS to decorate the internal span to behave like a link:

```css
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: #0000ff;
}
```

HTML:

```html
<form name="myForm">
  <p>
    [&nbsp;
    <span class="intLink" id="format-strong"><strong>Bold</strong></span> |
    <span class="intLink" id="format-em"><em>Italic</em></span> |
    <span class="intLink" id="format-link">URL</span> |
    <span class="intLink" id="format-code">code</span> &nbsp;]
  </p>

  <p>
    <textarea name="myTxtArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. Sed consectetur eleifend felis vitae luctus. Praesent sagittis, est eget bibendum tincidunt, ligula diam tincidunt augue, a fermentum odio velit eget mi. Phasellus mattis, elit id fringilla semper, orci magna cursus ligula, non venenatis lacus augue sit amet dui. Pellentesque lacinia odio id nisi pulvinar commodo tempus at odio. Ut consectetur eros porttitor nunc mollis ultrices. Aenean porttitor, purus sollicitudin viverra auctor, neque erat blandit sapien, sit amet tincidunt massa mi ac nibh. Proin nibh sem, bibendum ut placerat nec, cursus et lacus. Phasellus vel augue turpis. Nunc eu mauris eu leo blandit mollis interdum eget lorem.
    </textarea>
  </p>
</form>
```

{{EmbedLiveSample('Insert_HTML_tags_example', 600, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
