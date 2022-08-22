---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
page-type: web-api-interface
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
{{APIRef("HTML DOM")}}

The **`HTMLInputElement`** interface provides special properties and methods for manipulating the options, layout, and presentation of {{HtmlElement("input")}} elements.

{{InheritanceDiagram}}

## Properties

Some properties only apply to input element types that support the corresponding attributes.

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}
  - : `string`: **Represents** the alignment of the element. _Use CSS instead._

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{Experimental_Inline}}
  - : `string`: **Defines** the capitalization behavior for user input. Valid values are `none`, `off`, `characters`, `words` or `sentences`.

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}
  - : `string`: **Returns / Sets** the default value as originally specified in the HTML that created this object.

- {{domxref("HTMLInputElement.dirName", "dirName")}}
  - : `string`: **Returns / Sets** the directionality of the element.

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}
  - : Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}
  - : {{domxref("NodeList")}} array: **Returns** a list of {{ HTMLElement("label") }} elements that are labels for this element.

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}}: **Returns** the element pointed to by the [`list`](/en-US/docs/Web/HTML/Element/input#list) attribute. The property may be `null` if no HTML element is found in the same tree.

- {{domxref("HTMLInputElement.multiple", "multiple")}}
  - : `boolean`: **Returns / Sets** the element's [`multiple`](/en-US/docs/Web/HTML/Element/input#multiple) attribute, indicating whether more than one value is possible (e.g., multiple files).

- {{domxref("HTMLInputElement.name", "name")}}
  - : `string`: **Returns / Sets** the element's [`name`](/en-US/docs/Web/HTML/Element/input#name) attribute, containing a name that identifies the element when submitting the form.

- {{domxref("HTMLInputElement.step", "step")}}
  - : `string`: **Returns / Sets** the element's [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute, which works with [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.

- {{domxref("HTMLInputElement.type", "type")}}
  - : `string`: **Returns / Sets** the element's [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute, indicating the type of control to display. For possible values, see the documentation for the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute.

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}
  - : `string`: **Represents** a client-side image map.

- {{domxref("HTMLInputElement.value", "value")}}
  - : `string`: **Returns / Sets** the current value of the control. If the user enters a value different from the value expected, this may return an empty string.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}
  - : {{jsxref("Date")}}: **Returns / Sets** the value of the element, interpreted as a date, or `null` if conversion is not possible.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : `double`: **Returns** the value of the element, interpreted as one of the following, in order: A time value, a number or `NaN` if conversion is impossible

### Properties related to the parent form

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}}: **Returns** a reference to the parent {{HtmlElement("form")}} element.

- {{domxref("HTMLInputElement.formAction", "formAction")}}
  - : `string`: **Returns / Sets** the element's [`formaction`](/en-US/docs/Web/HTML/Element/input#formaction) attribute, containing the URL of a program that processes information submitted by the element. This overrides the {{ htmlattrxref("action", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}
  - : `string`: **Returns / Sets** the element's [`formenctype`](/en-US/docs/Web/HTML/Element/input#formenctype) attribute, containing the type of content that is used to submit the form to the server. This overrides the {{ htmlattrxref("enctype", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}
  - : `string`: **Returns / Sets** the element's [`formmethod`](/en-US/docs/Web/HTML/Element/input#formmethod) attribute, containing the HTTP method that the browser uses to submit the form. This overrides the {{ htmlattrxref("method", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}
  - : `boolean`: **Returns / Sets** the element's [`formnovalidate`](/en-US/docs/Web/HTML/Element/input#formnovalidate) attribute, indicating that the form is not to be validated when it is submitted. This overrides the {{ htmlattrxref("novalidate", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : `string`: **Returns / Sets** the element's [`formtarget`](/en-US/docs/Web/HTML/Element/input#formtarget) attribute, containing a name or keyword indicating where to display the response that is received after submitting the form. This overrides the {{ htmlattrxref("target", "form") }} attribute of the parent form.

### Properties that apply to any type of input element that is not hidden

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}
  - : `boolean`: **Returns / Sets** the element's [`autofocus`](/en-US/docs/Web/HTML/Element/input#autofocus) attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the [`autofocus`](/en-US/docs/Web/HTML/Element/input#autofocus) attribute.

- {{domxref("HTMLInputElement.disabled", "disabled")}}
  - : `boolean`: **Returns / Sets** the element's [`disabled`](/en-US/docs/Web/HTML/Element/input#disabled) attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also [`readonly`](/en-US/docs/Web/HTML/Element/input#readonly).

- {{domxref("HTMLInputElement.required", "required")}}
  - : `boolean`: **Returns / Sets** the element's [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute, indicating that the user must fill in a value before submitting a form.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : `string`: **Returns** a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ([`willValidate`](/en-US/docs/Web/API/HTMLObjectElement/willValidate) is `false`), or it satisfies its constraints. This value can be set by the {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} method.

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}
  - : {{domxref("ValidityState")}}: **Returns** the element's current validity state.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : `boolean`: **Returns** whether the element is a candidate for constraint validation. It is `false` if any conditions bar it from constraint validation, including: its `type` is one of `hidden`, `reset` or `button`, it has a {{HTMLElement("datalist")}} ancestor or its `disabled` property is `true`.

### Properties that apply only to elements of type checkbox or radio

- {{domxref("HTMLInputElement.checked", "checked")}}
  - : `boolean`: **Returns / Sets** the current state of the element.

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}
  - : `boolean`: **Returns / Sets** the default state of a radio button or checkbox as originally specified in HTML that created this object.

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : `boolean`: **Returns** whether the checkbox or radio button is in indeterminate state. For checkboxes, the effect is that the appearance of the checkbox is obscured/greyed in some way as to indicate its state is indeterminate (not checked but not unchecked). Does not affect the value of the `checked` attribute, and clicking the checkbox will set the value to false.

### Properties that apply only to elements of type image

- {{domxref("HTMLInputElement.alt", "alt")}}
  - : `string`: **Returns / Sets** the element's [`alt`](/en-US/docs/Web/HTML/Element/input#alt) attribute, containing alternative text to use.

- {{domxref("HTMLInputElement.height", "height")}}
  - : `string`: **Returns / Sets** the element's [`height`](/en-US/docs/Web/HTML/Element/input#height) attribute, which defines the height of the image displayed for the button.

- {{domxref("HTMLInputElement.src", "src")}}
  - : `string`: **Returns / Sets** the element's [`src`](/en-US/docs/Web/HTML/Element/input#src) attribute, which specifies a URI for the location of an image to display on the graphical submit button.

- {{domxref("HTMLInputElement.width", "width")}}
  - : `string`: **Returns / Sets** the element's [`width`](/en-US/docs/Web/HTML/Element/input#width) attribute, which defines the width of the image displayed for the button.

### Properties that apply only to elements of type file

- {{domxref("HTMLInputElement.accept", "accept")}}
  - : `string`: **Returns / Sets** the element's [`accept`](/en-US/docs/Web/HTML/Element/input#accept) attribute, containing comma-separated list of file types that can be selected.

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{Non-standard_Inline}}
  - : `boolean`: Part of the non-standard Directory Upload API. Indicates whether or not to allow directories and files both to be selected in the file list. Implemented only in Firefox and is hidden behind a preference.

- {{domxref("HTMLInputElement.files", "files")}}
  - : {{domxref("FileList")}}: **Returns / Sets** a list of {{domxref("File")}} objects representing the files selected for upload.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}
  - : `boolean`: **Returns** the [`webkitdirectory`](/en-US/docs/Web/HTML/Element/input#webkitdirectory) attribute. If `true`, the file-system-picker interface only accepts directories instead of files.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
  - : {{domxref("FileSystemEntry")}} array: **Describes** the currently selected files or directories.

### Properties that apply only to visible elements containing text or numbers

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}
  - : `string`: **Returns / Sets** the element's [`autocomplete`](/en-US/docs/Web/HTML/Element/input#autocomplete) attribute, indicating whether the value of the control can be automatically completed by the browser.

- {{domxref("HTMLInputElement.max", "max")}}
  - : `string`: **Returns / Sets** the element's [`max`](/en-US/docs/Web/HTML/Element/input#max) attribute, containing the maximum (numeric or date-time) value for this item, which must not be less than its minimum ([`min`](/en-US/docs/Web/HTML/Element/input#min) attribute) value.

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}
  - : `unsigned long`: **Returns / Sets** the element's [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute, containing the maximum number of characters (in Unicode code points) that the value can have.

- {{domxref("HTMLInputElement.min", "min")}}
  - : `string`: **Returns / Sets** the element's [`min`](/en-US/docs/Web/HTML/Element/input#min) attribute, containing the minimum (numeric or date-time) value for this item, which must not be greater than its maximum ([`max`](/en-US/docs/Web/HTML/Element/input#max) attribute) value.

- {{domxref("HTMLInputElement.minLength", "minLength")}}
  - : `unsigned long`: **Returns / Sets** the element's [`minlength`](/en-US/docs/Web/HTML/Element/input#minlength) attribute, containing the minimum number of characters (in Unicode code points) that the value can have.

- {{domxref("HTMLInputElement.pattern", "pattern")}}
  - : `string`: **Returns / Sets** the element's [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern) attribute, containing a regular expression that the control's value is checked against. Use the [`title`](/en-US/docs/Web/HTML/Element/input#title) attribute to describe the pattern to help the user. This attribute only applies when the value of the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute is `text`, `search`, `tel`, `url` or `email`.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}
  - : `string`: **Returns / Sets** the element's [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attribute, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute only applies when the value of the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute is `text`, `search`, `tel`, `url` or `email`.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}
  - : `boolean`: **Returns / Sets** the element's [`readonly`](/en-US/docs/Web/HTML/Element/input#readonly) attribute, indicating that the user cannot modify the value of the control. This is ignored if the [`type`](/en-US/docs/Web/HTML/Element/input#type) is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}
  - : `unsigned long`: **Returns / Sets** the end index of the selected text. When there's no selection, this returns the offset of the character immediately following the current text input cursor position.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}
  - : `unsigned long`: **Returns / Sets** the beginning index of the selected text. When nothing is selected, this returns the position of the text input cursor (caret) inside of the {{HTMLElement("input")}} element.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}
  - : `string`: **Returns / Sets** the direction in which selection occurred. Possible values are: `forward` (the selection was performed in the start-to-end direction of the current locale), `backward` (the opposite direction) or `none` (the direction is unknown).

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: **Returns / Sets** the element's [`size`](/en-US/docs/Web/HTML/Element/input#size) attribute, containing visual size of the control. This value is in pixels unless the value of [`type`](/en-US/docs/Web/HTML/Element/input#type) is `text` or `password`, in which case, it is an integer number of characters. Applies only when [`type`](/en-US/docs/Web/HTML/Element/input#type) is set to `text`, `search`, `tel`, `url`, `email`, or `password`.

## Methods

- {{domxref("HTMLElement/blur", "blur()")}}
  - : Removes focus from the input element; keystrokes will subsequently go nowhere.

- {{domxref("HTMLElement.click()", "click()")}}
  - : Simulates a click on the input element.

- {{domxref("HTMLElement/focus", "focus()")}}
  - : Focuses on the input element; keystrokes will subsequently go to this element.

- {{domxref("HTMLInputElement.select()", "select()")}}
  - : Selects all the text in the input element, and focuses it so the user can subsequently replace all of its content.

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}
  - : Selects a range of text in the input element (but does not focus it).

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}
  - : Replaces a range of text in the input element with new text.

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}
  - : Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}
  - : Shows a browser picker for date, time, color, and files.

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}
  - : Returns a boolean value that is `false` if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element. It returns `true` if the element is not a candidate for constraint validation, or if it satisfies its constraints.

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}
  - :  Runs the `checkValidity()` method, and if it returns false (for an invalid input or no pattern attribute provided), then it reports to the user that the input is invalid in the same manner as if you submitted a form.

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}
  - : Decrements the [`value`](/en-US/docs/Web/HTML/Element/input#value) by ([`step`](/en-US/docs/Web/HTML/Element/input#step) \* n), where n defaults to 1 if not specified. Throws an `InvalidStateError` exception:
    - if the method is not applicable to for the current [`type`](/en-US/docs/Web/HTML/Element/input#type) value,
    - if the element has no [`step`](/en-US/docs/Web/HTML/Element/input#step) value,
    - if the [`value`](/en-US/docs/Web/HTML/Element/input#value) cannot be converted to a number,
    - if the resulting value is above the [`max`](/en-US/docs/Web/HTML/Element/input#max) or below the [`min`](/en-US/docs/Web/HTML/Element/input#min).

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : Increments the [`value`](/en-US/docs/Web/HTML/Element/input#value) by ([`step`](/en-US/docs/Web/HTML/Element/input#step) \* n), where n defaults to 1 if not specified. Throws an `InvalidStateError` exception:
    - if the method is not applicable to for the current [`type`](/en-US/docs/Web/HTML/Element/input#type) value.,
    - if the element has no [`step`](/en-US/docs/Web/HTML/Element/input#step) value,
    - if the [`value`](/en-US/docs/Web/HTML/Element/input#value) cannot be converted to a number,
    - if the resulting value is above the [`max`](/en-US/docs/Web/HTML/Element/input#max) or below the [`min`](/en-US/docs/Web/HTML/Element/input#min).

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`input`](/en-US/docs/Web/API/HTMLElement/input_event)
  - : Fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed. Note that this is actually fired on the {{domxref("HTMLElement")}} interface and also applies to [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements, but we've listed it here because it is most commonly used with form input elements.
- [`invalid`](/en-US/docs/Web/API/HTMLInputElement/invalid_event)
  - : Fired when an element does not satisfy its constraints during constraint validation.
- [`search`](/en-US/docs/Web/API/HTMLInputElement/search_event) {{Non-standard_Inline}}
  - : Fired when a search is initiated on an {{HTMLElement("input")}} of `type="search"`.
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} event {{Experimental_Inline}}
  - : Fires when the text selection in a {{HTMLElement("input")}} element has been changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("input") }}
