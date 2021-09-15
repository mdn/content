---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
tags:
  - API
  - HTML DOM
  - HTMLTextAreaElement
  - Interface
  - Reference
browser-compat: api.HTMLTextAreaElement
---
{{APIRef("HTML DOM")}}

The **`HTMLTextAreaElement`** interface provides special properties and methods for manipulating the layout and presentation of {{HTMLElement("textarea")}} elements.

{{InheritanceDiagram(600,120)}}

## Properties

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>accessKey</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the element's
        {{htmlattrxref("accesskey", "textarea")}} attribute.
      </td>
    </tr>
    <tr>
      <td><code>autocapitalize</code> {{experimental_inline}}</td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the element's
        capitalization behavior for user input. Valid values are:
        <code>none</code>, <code>off</code>, <code>characters</code>,
        <code>words</code>, <code>sentences</code>.
      </td>
    </tr>
    <tr>
      <td><code>autocomplete</code> {{experimental_inline}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>autofocus</code></td>
      <td>
        <code><em>boolean</em>:</code> Returns / Sets the element's
        {{htmlattrxref("autofocus", "textarea")}} attribute,
        indicating that the control should have input focus when the page loads
      </td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>
        <code><em>unsigned long</em>:</code> Returns / Sets the element's
        {{htmlattrxref("cols", "textarea")}} attribute, indicating
        the visible width of the text area.
      </td>
    </tr>
    <tr>
      <td><code>defaultValue</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the control's default
        value, which behaves like the {{domxref("Node.textContent")}}
        property.
      </td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>
        <code><em>boolean</em>:</code> Returns / Sets the element's
        {{htmlattrxref("disabled", "textarea")}} attribute,
        indicating that the control is not available for interaction.
      </td>
    </tr>
    <tr>
      <td><code>form</code> {{readonlyInline}}</td>
      <td>
        <code><em>object</em>:</code> Returns a reference to the parent form
        element. If this element is not contained in a form element, it can be
        the {{htmlattrxref("id", "form")}} attribute of any
        {{HTMLElement("form")}} element in the same document or the
        value <code>null</code>.
      </td>
    </tr>
    <tr>
      <td><code>inputMode</code> {{experimental_inline}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>maxLength</code></td>
      <td>
        <code><em>long</em>:</code> Returns / Sets the element's
        {{htmlattrxref("maxlength", "textarea")}} attribute,
        indicating the maximum number of characters the user can enter. This
        constraint is evaluated only when the value changes.
      </td>
    </tr>
    <tr>
      <td><code>minLength</code></td>
      <td>
        <code><em>long</em>:</code> Returns / Sets the element's
        {{htmlattrxref("minlength", "textarea")}} attribute,
        indicating the minimum number of characters the user can enter. This
        constraint is evaluated only when the value changes.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the element's
        {{htmlattrxref("name", "textarea")}} attribute, containing
        the name of the control.
      </td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the element's
        {{htmlattrxref("placeholder", "textarea")}} attribute,
        containing a hint to the user about what to enter in the control.
      </td>
    </tr>
    <tr>
      <td><code>readOnly</code></td>
      <td>
        <code><em>boolean</em>:</code> Returns / Sets the element's
        {{htmlattrxref("readonly", "textarea")}} attribute,
        indicating that the user cannot modify the value of the control.
      </td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>
        <code><em>boolean</em>:</code> Returns / Sets the element's
        {{htmlattrxref("required", "textarea")}} attribute,
        indicating that the user must specify a value before submitting the
        form.
      </td>
    </tr>
    <tr>
      <td><code>rows</code></td>
      <td>
        <code><em>unsigned long</em>:</code> Returns / Sets the element's
        {{htmlattrxref("rows", "textarea")}} attribute, indicating
        the number of visible text lines for the control.
      </td>
    </tr>
    <tr>
      <td><code>selectionDirection</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the direction in which
        selection occurred. This is "<code>forward</code>" if selection was
        performed in the start-to-end direction of the current locale, or
        "<code>backward</code>" for the opposite direction. This can also be
        "<code>none</code>" if the direction is unknown.
      </td>
    </tr>
    <tr>
      <td><code>selectionEnd</code></td>
      <td>
        <code><em>unsigned long</em>:</code> Returns / Sets the index of the end
        of selected text. If no text is selected, contains the index of the
        character that follows the input cursor. On being set, the control
        behaves as if <code>setSelectionRange()</code> had been called with this
        as the second argument, and <code>selectionStart</code> as the first
        argument.
      </td>
    </tr>
    <tr>
      <td><code>selectionStart</code></td>
      <td>
        <code><em>unsigned long</em>:</code> Returns / Sets the index of the
        beginning of selected text. If no text is selected, contains the index
        of the character that follows the input cursor. On being set, the
        control behaves as if <code>setSelectionRange()</code> had been called
        with this as the first argument, and <code>selectionEnd</code> as the
        second argument.
      </td>
    </tr>
    <tr>
      <td><code>tabIndex</code></td>
      <td>
        <code><em>long</em>:</code> Returns / Sets the position of the element
        in the tabbing navigation order for the current document.
      </td>
    </tr>
    <tr>
      <td><code>textLength</code> {{readonlyInline}}</td>
      <td>
        <code><em>long</em>:</code> Returns the codepoint length of the
        control's <code>value</code>. Same as reading <code>value.length</code>
      </td>
    </tr>
    <tr>
      <td><code>type</code> {{readonlyInline}}</td>
      <td>
        <code><em>string</em>:</code> Returns the string <code>textarea</code>.
      </td>
    </tr>
    <tr>
      <td><code>validationMessage</code> {{readonlyInline}}</td>
      <td>
        <code><em>string</em>:</code> Returns a localized message that describes
        the validation constraints that the control does not satisfy (if any).
        This is the empty string if the control is not a candidate for
        constraint validation (<code>willValidate</code> is <code>false</code>),
        or it satisfies its constraints.
      </td>
    </tr>
    <tr>
      <td><code>validity</code> {{readonlyInline}}</td>
      <td>
        <code><em>{{domxref("ValidityState")}} object</em>:</code>
        Returns the validity states that this element is in.
      </td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the raw value contained in
        the control.
      </td>
    </tr>
    <tr>
      <td><code>willValidate</code> {{readonlyInline}}</td>
      <td>
        <p>
          <code><em>boolean</em>:</code> Returns whether the element is a
          candidate for constraint validation. <code>false</code> if any
          conditions bar it from constraint validation, including its
          <code>readOnly</code> or <code>disabled</code> property is
          <code>true</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>
        <code><em>string</em>:</code> Returns / Sets the
        {{htmlattrxref("wrap", "textarea")}} HTML attribute,
        indicating how the control wraps text.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLTextAreaElement.labels")}}{{ReadOnlyInline}}
      </td>
      <td>
        {{domxref("NodeList")}}: Returns a list of label elements
        associated with this element.
      </td>
    </tr>
  </tbody>
</table>

The two properties `tabIndex` and `accessKey` are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLTextAreaElement` in DOM Level 2 HTML and earlier specifications.

## Methods

<table class="standard-table">
  <tbody>
    <tr>
      <td>{{domxref("HTMLElement/blur", "blur()")}}</td>
      <td>
        Removes focus from the control; keystrokes will subsequently go nowhere.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/focus", "focus()")}}</td>
      <td>
        Gives focus to the control; keystrokes will subsequently go to this
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/select", "select()")}}
      </td>
      <td>Selects the contents of the control.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/setRangeText", "setRangeText()")}}
      </td>
      <td>Replaces a range of text in the element with new text.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/setSelectionRange", "setSelectionRange()")}}
      </td>
      <td>Selects a range of text in the element (but does not focus it).</td>
    </tr>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>
        Returns <code>false</code> if the element is a candidate for constraint
        validation, and it does not satisfy its constraints. In this case, it
        also fires a cancelable <code>invalid</code> event at the control. It
        returns <code>true</code> if the control is not a candidate for
        constraint validation, or if it satisfies its constraints.
      </td>
    </tr>
    <tr>
      <td><code>reportValidity()</code></td>
      <td>
        <p>
          This method reports the problems with the constraints on the element,
          if any, to the user. If there are problems, it fires a cancelable
          <code>invalid</code> event at the element, and returns
          <code>false</code>; if there are no problems, it returns
          <code>true</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>setCustomValidity(DOMstring)</code></td>
      <td>
        Sets a custom validity message for the element. If this message is not
        the empty string, then the element is suffering from a custom validity
        error, and does not validate.
      </td>
    </tr>
  </tbody>
</table>

The two methods `blur()` and `focus()` are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLTextAreaElement` in DOM Level 2 HTML and earlier specifications.

## Events

Listen to these events using {{domxref("EventTarget/addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface:

- {{domxref("HTMLElement/input_event", "input")}} event
  - : Fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.
- {{domxref("HTMLTextAreaElement/selectionchange_event", "selectionchange")}} event{{experimental_inline}}
  - : Fires when the text selection in a {{HTMLElement("textarea")}} element has been changed.

## Examples

### Autogrowing textarea example

Make a textarea autogrow while typing:

#### JavaScript

```js
function autoGrow (oField) {
  if (oField.scrollHeight > oField.clientHeight) {
    oField.style.height = oField.scrollHeight + "px";
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

Insert some HTML tags or _smiles_ or any custom text in a textarea.

#### JavaScript

```js
function insertMetachars(sStartTag, sEndTag) {
  var bDouble = arguments.length > 1, oMsgInput = document.myForm.myTxtArea, nSelStart = oMsgInput.selectionStart, nSelEnd = oMsgInput.selectionEnd, sOldText = oMsgInput.value;
  oMsgInput.value = sOldText.substring(0, nSelStart) + (bDouble ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag : sStartTag) + sOldText.substring(nSelEnd);
  oMsgInput.setSelectionRange(bDouble || nSelStart === nSelEnd ? nSelStart + sStartTag.length : nSelStart, (bDouble ? nSelEnd : nSelStart) + sStartTag.length);
  oMsgInput.focus();
}
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
<p>[&nbsp;<span class="intLink" onclick="insertMetachars('&lt;strong&gt;','&lt;\/strong&gt;');"><strong>Bold</strong></span> | <span class="intLink" onclick="insertMetachars('&lt;em&gt;','&lt;\/em&gt;');"><em>Italic</em></span> | <span class="intLink" onclick="var newURL=prompt('Enter the full URL for the link');if(newURL){insertMetachars('&lt;a href=\u0022'+newURL+'\u0022&gt;','&lt;\/a&gt;');}else{document.myForm.myTxtArea.focus();}">URL</span> | <span class="intLink" onclick="insertMetachars('\n&lt;code&gt;\n','\n&lt;\/code&gt;\n');">code</span> | <span class="intLink" onclick="insertMetachars(' :-)');">smile</span> | etc. etc.&nbsp;]</p>
<p><textarea name="myTxtArea" rows="10" cols="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. Sed consectetur eleifend felis vitae luctus. Praesent sagittis, est eget bibendum tincidunt, ligula diam tincidunt augue, a fermentum odio velit eget mi. Phasellus mattis, elit id fringilla semper, orci magna cursus ligula, non venenatis lacus augue sit amet dui. Pellentesque lacinia odio id nisi pulvinar commodo tempus at odio. Ut consectetur eros porttitor nunc mollis ultrices. Aenean porttitor, purus sollicitudin viverra auctor, neque erat blandit sapien, sit amet tincidunt massa mi ac nibh. Proin nibh sem, bibendum ut placerat nec, cursus et lacus. Phasellus vel augue turpis. Nunc eu mauris eu leo blandit mollis interdum eget lorem. </textarea></p>
</form>
```

{{EmbedLiveSample('Insert_HTML_tags_example', 600, 300)}}

### Maximum length and number of lines example

Create a textarea with a maximum number of characters per line and a maximum number of lines:

First, create a function that takes the text field and a key event as input and determines if any of the limits have been reached. If the limit has not been reached, it will return the key.

```js
function checkRows(oField, oKeyEvent) {
  var nKey = (oKeyEvent || /* old IE */ window.event || /* check is not supported! */ { keyCode: 38 }).keyCode,

    // put here the maximum number of characters per line:
    nCols = 30,
    // put here the maximum number of lines:
    nRows = 5,

    nSelS = oField.selectionStart, nSelE = oField.selectionEnd,
    sVal = oField.value, nLen = sVal.length,

    nBackward = nSelS >= nCols ? nSelS - nCols : 0,
    nDeltaForw = sVal.substring(nBackward, nSelS).search(new RegExp("\\n(?!.{0," + String(nCols - 2) + "}\\n)")) + 1,
    nRowStart = nBackward + nDeltaForw,
    aReturns = (sVal.substring(0, nSelS) + sVal.substring(nSelE, sVal.length)).match(/\n/g),
    nRowEnd = nSelE + nRowStart + nCols - nSelS,
    sRow = sVal.substring(nRowStart, nSelS) + sVal.substring(nSelE, nRowEnd > nLen ? nLen : nRowEnd),
    bKeepCols = nKey === 13 || nLen + 1 < nCols || /\n/.test(sRow) || ((nRowStart === 0 || nDeltaForw > 0 || nKey > 0) && (sRow.length < nCols || (nKey > 0 && (nLen === nRowEnd || sVal.charAt(nRowEnd) === "\n"))));

  return (nKey !== 13 || (aReturns ? aReturns.length + 1 : 1) < nRows) && ((nKey > 32 && nKey < 41) || bKeepCols);
}
```

In the HTML we just need to hook our function to the \`onkeypress\` event and specify that our textarea does not accept pasting:

```html
<form>
  <p>Textarea with fixed number of characters per line:<br />
    <textarea cols="50" rows="10" onkeypress="return checkRows(this, event);"
              onpaste="return false;"></textarea>
  </p>
</form>
```

{{EmbedLiveSample('Maximum_length_and_number_of_lines_example', 600, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
