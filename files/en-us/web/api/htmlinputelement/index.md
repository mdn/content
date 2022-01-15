---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
tags:
  - API
  - DOM
  - HTML DOM
  - HTMLInputElement
  - Input
  - Interface
  - NeedsContent
  - NeedsMarkupWork
  - Reference
browser-compat: api.HTMLInputElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement`** interface provides special properties and methods for manipulating the options, layout, and presentation of {{HtmlElement("input")}} elements.

{{InheritanceDiagram}}

## Properties

<table class="standard-table">
  <caption>
    Properties related to the parent form
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.form", "form")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("HTMLFormElement")}} object:</em>
        <strong>Returns</strong> a reference to the parent
        {{HtmlElement("form")}} element.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formAction", "formAction")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("formaction", "input") }}
        attribute, containing the URI of a program that processes information
        submitted by the element. This overrides the
        {{ htmlattrxref("action", "form") }} attribute of the parent
        form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formEnctype", "formEnctype")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("formenctype", "input") }}
        attribute, containing the type of content that is used to submit the
        form to the server. This overrides the
        {{ htmlattrxref("enctype", "form") }} attribute of the parent
        form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formMethod", "formMethod")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("formmethod", "input") }}
        attribute, containing the HTTP method that the browser uses to submit
        the form. This overrides the
        {{ htmlattrxref("method", "form") }} attribute of the parent
        form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("formnovalidate", "input") }} attribute,
        indicating that the form is not to be validated when it is submitted.
        This overrides the {{ htmlattrxref("novalidate", "form") }}
        attribute of the parent form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formTarget", "formTarget")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("formtarget", "input") }}
        attribute, containing a name or keyword indicating where to display the
        response that is received after submitting the form. This overrides the
        {{ htmlattrxref("target", "form") }} attribute of the parent
        form.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties that apply to any type of input element that is not hidden
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.name", "name")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("name", "input") }} attribute,
        containing a name that identifies the element when submitting the form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.type", "type")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("type", "input") }} attribute,
        indicating the type of control to display. See
        {{ htmlattrxref("type", "input") }} attribute of
        {{ HTMLElement("input") }} for possible values.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.disabled", "disabled")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("disabled", "input") }} attribute,
        indicating that the control is not available for interaction. The input
        values will not be submitted with the form. See also
        {{ htmlattrxref("readOnly", "input") }}
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.autofocus", "autofocus")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("autofocus", "input") }} attribute, which
        specifies that a form control should have input focus when the page
        loads, unless the user overrides it, for example by typing in a
        different control. Only one form element in a document can have the
        {{htmlattrxref("autofocus","input")}} attribute. It cannot be
        applied if the {{htmlattrxref("type","input")}} attribute is
        set to <code>hidden</code> (that is, you cannot automatically set focus
        to a hidden control).
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.required", "required")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("required", "input") }} attribute,
        indicating that the user must fill in a value before submitting a form.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.value", "value")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        current value of the control.
        <p>
          <strong>Note:</strong> If the user enters a value different from the
          value expected, this may return an empty string.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.validity", "validity")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("ValidityState")}}<code> object</code>:</em>
        <strong>Returns</strong> the element's current validity state.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{readonlyInline}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns</strong> a localized
        message that describes the validation constraints that the control does
        not satisfy (if any). This is the empty string if the control is not a
        candidate for constraint validation
        ({{htmlattrxref("willValidate","input")}} is
        <code>false</code>), or it satisfies its constraints. This value can be
        set by the <code>setCustomValidity</code> method.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.willValidate", "willValidate")}} {{readonlyInline}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns</strong> whether the element
        is a candidate for constraint validation. It is <code>false</code> if
        any conditions bar it from constraint validation, including: its
        <code>type</code> is <code>hidden</code>, <code>reset</code>, or
        <code>button</code>; it has a {{HTMLElement("datalist")}}
        ancestor; its <code>disabled</code> property is <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties that apply only to elements of type
    <code>checkbox</code>
    or
    <code>radio</code>
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.checked", "checked")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the current
        state of the element when {{htmlattrxref("type","input")}}
        is <code>checkbox</code> or <code>radio</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the default
        state of a radio button or checkbox as originally specified in HTML that
        created this object.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.indeterminate", "indeterminate")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns</strong> whether the checkbox
        or radio button is in indeterminate state. For checkboxes, the effect is
        that the appearance of the checkbox is obscured/greyed in some way as to
        indicate its state is indeterminate (not checked but not unchecked).
        Does not affect the value of the <code>checked</code> attribute, and
        clicking the checkbox will set the value to false.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties that apply only to elements of type
    <code>image</code>
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.alt", "alt")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("alt", "input") }} attribute,
        containing alternative text to use when
        {{htmlattrxref("type","input")}} is <code>image.</code>
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.height", "height")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("height", "input") }} attribute,
        which defines the height of the image displayed for the button, if the
        value of {{htmlattrxref("type","input")}} is
        <code>image</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.src", "src")}}</td>
      <td>
        <code><em>string</em></code
        ><em>:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("src", "input") }} attribute, which specifies
        a URI for the location of an image to display on the graphical submit
        button, if the value of {{htmlattrxref("type","input")}} is
        <code>image</code>; otherwise it is ignored.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.width", "width")}}</td>
      <td>
        <code><em>string</em></code
        ><em>:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("width", "input") }} attribute, which
        defines the width of the image displayed for the button, if the value of
        {{htmlattrxref("type","input")}} is <code>image</code>.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties that apply only to elements of type
    <code>file</code>
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.accept", "accept")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("accept", "input") }} attribute,
        containing comma-separated list of file types accepted by the server
        when {{htmlattrxref("type","input")}} is <code>file</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{non-standard_inline}}</td>
      <td>
        <em>A boolean value:</em> Part of the non-standard Directory Upload API;
        <strong>indicates</strong> whether or not to allow directories and files
        both to be selected in the file list. Implemented only in Firefox and is
        hidden behind a preference.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.files", "files")}}</td>
      <td>
        <strong>Returns/accepts</strong> a {{domxref("FileList")}}
        object, which contains a list of {{domxref("File")}} objects
        representing the files selected for upload.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}
        {{Non-standard_inline}}
      </td>
      <td>
        <em>A boolean value:</em><strong> Returns</strong> the
        {{htmlattrxref("webkitdirectory", "input")}} attribute;
        if true, the file system picker interface only accepts directories
        instead of files.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
        {{Non-standard_inline}}
      </td>
      <td>
        <em>Array of {{domxref("FileSystemEntry")}} objects:</em>
        <strong>Describes</strong> the currently selected files or directories.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties that apply only to
    <code>text/number</code
    >-containing or elements
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.autocomplete", "autocomplete")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns / Sets</strong> the
        element's {{htmlattrxref("autocomplete", "input")}}
        attribute, indicating whether the value of the control can be
        automatically completed by the browser. Ignored if the value of the
        {{htmlattrxref("type","input")}} attribute is
        <code>hidden</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code>, or a button type (<code>button</code>,
        <code>submit</code>, <code>reset</code>, <code>image</code>). Possible
        values are:<br /><code>on</code>: the browser can autocomplete the value
        using previously stored value<br /><code>off</code>: the user must
        explicity enter a value
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.max", "max")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("max", "input") }} attribute,
        containing the maximum (numeric or date-time) value for this item, which
        must not be less than its minimum
        ({{htmlattrxref("min","input")}} attribute) value.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.maxLength", "maxLength")}}</td>
      <td>
        <em><code>long</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("maxlength", "input") }}
        attribute, containing the maximum number of characters (in Unicode code
        points) that the value can have. (If you set this to a negative number,
        an exception will be thrown.)
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.min", "min")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("min", "input") }} attribute,
        containing the minimum (numeric or date-time) value for this item, which
        must not be greater than its maximum
        ({{htmlattrxref("max","input")}} attribute) value.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.minLength", "minLength")}}</td>
      <td>
        <em><code>long</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("minlength", "input") }}
        attribute, containing the minimum number of characters (in Unicode code
        points) that the value can have. (If you set this to a negative number,
        an exception will be thrown.)
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.pattern", "pattern")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("pattern", "input") }}
        attribute, containing a regular expression that the control's value is
        checked against. Use the {{htmlattrxref("title","input")}}
        attribute to describe the pattern to help the user. This attribute
        applies when the value of the
        {{htmlattrxref("type","input")}} attribute is
        <code>text</code>, <code>search</code>, <code>tel</code>,
        <code>url</code> or <code>email</code>; otherwise it is ignored.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.placeholder", "placeholder")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("placeholder", "input") }}
        attribute, containing a hint to the user of what can be entered in the
        control. The placeholder text must not contain carriage returns or
        line-feeds. This attribute applies when the value of the
        {{htmlattrxref("type","input")}} attribute is
        <code>text</code>, <code>search</code>, <code>tel</code>,
        <code>url</code> or <code>email</code>; otherwise it is ignored.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.readOnly", "readOnly")}}</td>
      <td>
        <em><code>boolean</code>:</em><strong> Returns / Sets</strong> the
        element's {{ htmlattrxref("readonly", "input") }}
        attribute, indicating that the user cannot modify the value of the
        control.<br />This is ignored if the value of the
        {{htmlattrxref("type","input")}} attribute is
        <code>hidden</code>, <code>range</code>, <code>color</code>,
        <code>checkbox</code>, <code>radio</code>, <code>file</code>, or a
        button type.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionStart", "selectionStart")}}</td>
      <td>
        <em><code>unsigned long</code>:</em> <strong>Returns / Sets</strong> the
        beginning index of the selected text. When nothing is selected, this
        returns the position of the text input cursor (caret) inside of the
        {{HTMLElement("input")}} element.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}</td>
      <td>
        <em><code>unsigned long</code>:</em> <strong>Returns / Sets</strong> the
        end index of the selected text. When there's no selection, this returns
        the offset of the character immediately following the current text input
        cursor position.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        direction in which selection occurred. Possible values are:<br /><code
          >forward</code
        >
        if selection was performed in the start-to-end direction of the current
        locale<br /><code>backward</code> for the opposite direction<br /><code
          >none</code
        >
        if the direction is unknown
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.size", "size")}}</td>
      <td>
        <em><code>unsigned long</code>:</em> <strong>Returns / Sets</strong> the
        element's {{ htmlattrxref("size", "input") }} attribute,
        containing visual size of the control. This value is in pixels unless
        the value of {{htmlattrxref("type","input")}} is
        <code>text</code> or <code>password</code>, in which case, it is an
        integer number of characters. Applies only when
        {{htmlattrxref("type","input")}} is set to
        <code>text</code>, <code>search</code>, <code>tel</code>,
        <code>url</code>, <code>email</code>, or <code>password</code>;
        otherwise it is ignored.
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Properties not yet categorized
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.defaultValue", "defaultValue")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        default value as originally specified in the HTML that created this
        object.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.dirName", "dirName")}}</td>
      <td>
        <em><code>string</code>:</em> <strong>Returns / Sets</strong> the
        directionality of the element.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.accessKey", "accessKey")}}</td>
      <td>
        <em><code>string</code>: </em><strong>Returns</strong> a string
        containing a single character that switches input focus to the control
        when pressed.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.list", "list")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("HTMLElement")}}<code> object</code>:</em>
        <strong>Returns</strong> the element pointed by the
        {{ htmlattrxref("list", "input") }} attribute. The property
        may be <code>null</code> if no HTML element found in the same tree.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.multiple", "multiple")}}</td>
      <td>
        <em>A boolean value:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("multiple", "input") }} attribute,
        indicating whether more than one value is possible (e.g., multiple
        files).
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.files", "files")}}</td>
      <td>
        <em>{{domxref("FileList")}}<code> array</code>:</em>
        <strong>Returns</strong> the list of selected files.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.labels", "labels")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("NodeList")}}<code> array</code>:</em>
        <strong>Returns</strong> a list of {{ HTMLElement("label") }}
        elements that are labels for this element.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.step", "step")}}</td>
      <td>
        <code><em>string</em></code
        ><em>:</em> <strong>Returns / Sets</strong> the element's
        {{ htmlattrxref("step", "input") }} attribute, which works
        with {{htmlattrxref("min","input")}} and
        {{htmlattrxref("max","input")}} to limit the increments at
        which a numeric or date-time value can be set. It can be the string
        <code>any</code> or a positive floating point number. If this is not set
        to <code>any</code>, the control accepts only values at multiples of the
        step value greater than the minimum.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}</td>
      <td>
        <em>{{jsxref("Date")}}<code> object</code>:</em>
        <strong>Returns / Sets</strong> the value of the element, interpreted as
        a date, or <code>null</code> if conversion is not possible.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}</td>
      <td>
        <em><code>double</code>:</em> <strong>Returns</strong> the value of the
        element, interpreted as one of the following, in order:
        <ul>
          <li>A time value</li>
          <li>A number</li>
          <li><code>NaN</code> if conversion is impossible</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{experimental_inline}}</td>
      <td>
        <code><em>string</em></code
        ><em>:</em> <strong>Defines</strong> the capitalization behavior for
        user input. Valid values are <code>none</code>, <code>off</code>,
        <code>characters</code>, <code>words</code>, or <code>sentences</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.inputmode", "inputmode")}}</td>
      <td>
        Provides a hint to browsers as to the type of virtual keyboard
        configuration to use when editing this element or its contents.
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.align", "align")}} {{deprecated_inline}}
  - : `string`_:_ **Represents** the alignment of the element. _Use CSS instead._
- {{domxref("HTMLInputElement.useMap", "useMap")}} {{deprecated_inline}}
  - : `string`_:_ **Represents** a client-side image map.

## Methods

<table class="standard-table">
  <tbody>
    <tr>
      <td>{{domxref("HTMLElement/blur", "blur()")}}</td>
      <td>
        Removes focus from the input element; keystrokes will subsequently go
        nowhere.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement.click()", "click()")}}</td>
      <td>Simulates a click on the input element.</td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/focus", "focus()")}}</td>
      <td>
        Focuses on the input element; keystrokes will subsequently go to this
        element.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.select()", "select()")}}</td>
      <td>
        Selects all the text in the input element, and focuses it so the user
        can subsequently replace all of its content.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}</td>
      <td>
        Selects a range of text in the input element (but does not focus it).
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}</td>
      <td>Replaces a range of text in the input element with new text.</td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}</td>
      <td>
        Sets a custom validity message for the element. If this message is not
        the empty string, then the element is suffering from a custom validity
        error, and does not validate.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.showPicker()", "showPicker()")}}</td>
      <td>
        Shows a browser picker for date, time, color, and files.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}</td>
      <td>
        Returns a boolean value that is <code>false</code> if the element is a
        candidate for constraint validation, and it does not satisfy its
        constraints. In this case, it also fires an {{event("invalid")}}
        event at the element. It returns <code>true</code> if the element is not
        a candidate for constraint validation, or if it satisfies its
        constraints.
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}</td>
      <td>
        Runs the <code>checkValidity()</code> method, and if it returns false
        (for an invalid input or no pattern attribute provided), then it reports
        to the user that the input is invalid in the same manner as if you
        submitted a form.
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : Decrements the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an `InvalidStateError` exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}

  - : Increments the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an `InvalidStateError` exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value.,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

- {{domxref("HTMLInputElement.mozSetFileArray()", "mozSetFileArray()")}} {{non-standard_inline}}
  - : Sets the files selected on the input to the given array of {{domxref("File")}} objects. This is an alternative to `mozSetFileNameArray()` which can be used in frame scripts: a chrome script can [open files as File objects](/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) and send them via [message manager](/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox/The_message_manager).
- {{domxref("HTMLInputElement.mozGetFileNameArray()", "mozGetFileNameArray()")}} {{non-standard_inline}}
  - : Returns an array of all the file names from the input.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
  - : Fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed. Note that this is actually fired on the {{domxref("HTMLElement")}} interface and also applies to [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements, but we've listed it here because it is most commonly used with form input elements.
    Also available via the [`oninput`](/en-US/docs/Web/API/GlobalEventHandlers/oninput) event handler property.
- [`invalid`](/en-US/docs/Web/API/HTMLInputElement/invalid_event)
  - : Fired when an element does not satisfy its constraints during constraint validation.
    Also available via the [`oninvalid`](/en-US/docs/Web/API/GlobalEventHandlers/oninvalid) event handler property.
- [`search`](/en-US/docs/Web/API/HTMLInputElement/search_event)
  - : Fired when a search is initiated on an {{HTMLElement("input")}} of `type="search"`.
    Also available via the [`onsearch`](/en-US/docs/Web/API/GlobalEventHandlers/onsearch) event handler property.
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} event{{experimental_inline}}
  - : Fires when the text selection in a {{HTMLElement("input")}} element has been changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("input") }}
