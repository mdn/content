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
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement`** interface provides special properties and methods for manipulating the options, layout, and presentation of {{HtmlElement("input")}} elements.

{{InheritanceDiagram}}

## Properties

Some properties only apply to input element types that support the corresponding attributes.

- {{domxref("HTMLInputElement.align", "align")}} {{deprecated_inline}}
  - : `string`: **Represents** the alignment of the element. _Use CSS instead._

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{experimental_inline}}
  - : `string`: **Defines** the capitalization behavior for user input. Valid values are `none`, `off`, `characters`, `words` or `sentences`.

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}
  - : `string`: **Returns / Sets** the default value as originally specified in the HTML that created this object.

- {{domxref("HTMLInputElement.dirName", "dirName")}}
  - : `string`: **Returns / Sets** the directionality of the element.

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}
  - : Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.

- {{domxref("HTMLInputElement.labels", "labels")}} {{readonlyInline}}
  - : {{domxref("NodeList")}} array: **Returns** a list of {{ HTMLElement("label") }} elements that are labels for this element.

- {{domxref("HTMLInputElement.list", "list")}} {{readonlyInline}}
  - : {{domxref("HTMLElement")}}: **Returns** the element pointed by the {{ htmlattrxref("list", "input") }} attribute. The property may be `null` if no HTML element found in the same tree.

- {{domxref("HTMLInputElement.multiple", "multiple")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("multiple", "input") }} attribute, indicating whether more than one value is possible (e.g., multiple files).

- {{domxref("HTMLInputElement.name", "name")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("name", "input") }} attribute, containing a name that identifies the element when submitting the form.

- {{domxref("HTMLInputElement.step", "step")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("step", "input") }} attribute, which works with {{htmlattrxref("min","input")}} and {{htmlattrxref("max","input")}} to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.

- {{domxref("HTMLInputElement.type", "type")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("type", "input") }} attribute, indicating the type of control to display. See {{ htmlattrxref("type", "input") }} attribute of {{ HTMLElement("input") }} for possible values.

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{deprecated_inline}}
  - : `string`: **Represents** a client-side image map.

- {{domxref("HTMLInputElement.value", "value")}}
  - : `string`: **Returns / Sets** the current value of the control. If the user enters a value different from the value expected, this may return an empty string.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}
  - : {{jsxref("Date")}}: **Returns / Sets** the value of the element, interpreted as a date, or `null` if conversion is not possible.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : `double`: **Returns** the value of the element, interpreted as one of the following, in order: A time value, a number or `NaN` if conversion is impossible

### Properties related to the parent form

- {{domxref("HTMLInputElement.form", "form")}} {{readonlyInline}}
  - : {{domxref("HTMLFormElement")}}: **Returns** a reference to the parent {{HtmlElement("form")}} element.

- {{domxref("HTMLInputElement.formAction", "formAction")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("formaction", "input") }} attribute, containing the URI of a program that processes information submitted by the element. This overrides the {{ htmlattrxref("action", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("formenctype", "input") }} attribute, containing the type of content that is used to submit the form to the server. This overrides the {{ htmlattrxref("enctype", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("formmethod", "input") }} attribute, containing the HTTP method that the browser uses to submit the form. This overrides the {{ htmlattrxref("method", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("formnovalidate", "input") }} attribute, indicating that the form is not to be validated when it is submitted. This overrides the {{ htmlattrxref("novalidate", "form") }} attribute of the parent form.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("formtarget", "input") }} attribute, containing a name or keyword indicating where to display the response that is received after submitting the form. This overrides the {{ htmlattrxref("target", "form") }} attribute of the parent form.

### Properties that apply to any type of input element that is not hidden

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("autofocus", "input") }} attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the {{htmlattrxref("autofocus","input")}} attribute.

- {{domxref("HTMLInputElement.disabled", "disabled")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("disabled", "input") }} attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also {{ htmlattrxref("readOnly", "input") }}.

- {{domxref("HTMLInputElement.required", "required")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("required", "input") }} attribute, indicating that the user must fill in a value before submitting a form.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{readonlyInline}}
  - : `string`: **Returns** a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ({{htmlattrxref("willValidate","input")}} is `false`), or it satisfies its constraints. This value can be set by the {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} method.

- {{domxref("HTMLInputElement.validity", "validity")}} {{readonlyInline}}
  - : {{domxref("ValidityState")}}: **Returns** the element's current validity state.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{readonlyInline}}
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
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("alt", "input") }} attribute, containing alternative text to use.

- {{domxref("HTMLInputElement.height", "height")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("height", "input") }} attribute, which defines the height of the image displayed for the button.

- {{domxref("HTMLInputElement.src", "src")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("src", "input") }} attribute, which specifies a URI for the location of an image to display on the graphical submit button.

- {{domxref("HTMLInputElement.width", "width")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("width", "input") }} attribute, which defines the width of the image displayed for the button.

### Properties that apply only to elements of type file

- {{domxref("HTMLInputElement.accept", "accept")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("accept", "input") }} attribute, containing comma-separated list of file types that can be selected.

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{non-standard_inline}}
  - : `boolean`: Part of the non-standard Directory Upload API. Indicates whether or not to allow directories and files both to be selected in the file list. Implemented only in Firefox and is hidden behind a preference.

- {{domxref("HTMLInputElement.files", "files")}}
  - : {{domxref("FileList")}}: **Returns / Sets** a list of {{domxref("File")}} objects representing the files selected for upload.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} {{Non-standard_inline}}
  - : `boolean`: **Returns** the {{htmlattrxref("webkitdirectory", "input")}} attribute. If `true`, the file system picker interface only accepts directories instead of files.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{Non-standard_inline}}
  - : {{domxref("FileSystemEntry")}} array: **Describes** the currently selected files or directories.

### Properties that apply only to visible elements containing text or numbers

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}
  - : `string`: **Returns / Sets** the element's {{htmlattrxref("autocomplete", "input")}} attribute, indicating whether the value of the control can be automatically completed by the browser.

- {{domxref("HTMLInputElement.max", "max")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("max", "input") }} attribute, containing the maximum (numeric or date-time) value for this item, which must not be less than its minimum ({{htmlattrxref("min","input")}} attribute) value.

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}
  - : `unsigned long`: **Returns / Sets** the element's {{ htmlattrxref("maxlength", "input") }} attribute, containing the maximum number of characters (in Unicode code points) that the value can have.

- {{domxref("HTMLInputElement.min", "min")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("min", "input") }} attribute, containing the minimum (numeric or date-time) value for this item, which must not be greater than its maximum ({{htmlattrxref("max","input")}} attribute) value.

- {{domxref("HTMLInputElement.minLength", "minLength")}}
  - : `unsigned long`: **Returns / Sets** the element's {{ htmlattrxref("minlength", "input") }} attribute, containing the minimum number of characters (in Unicode code points) that the value can have.

- {{domxref("HTMLInputElement.pattern", "pattern")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("pattern", "input") }} attribute, containing a regular expression that the control's value is checked against. Use the {{htmlattrxref("title","input")}} attribute to describe the pattern to help the user. This attribute only applies when the value of the {{htmlattrxref("type","input")}} attribute is `text`, `search`, `tel`, `url` or `email`.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}
  - : `string`: **Returns / Sets** the element's {{ htmlattrxref("placeholder", "input") }} attribute, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute only applies when the value of the {{htmlattrxref("type","input")}} attribute is `text`, `search`, `tel`, `url` or `email`.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}
  - : `boolean`: **Returns / Sets** the element's {{ htmlattrxref("readonly", "input") }} attribute, indicating that the user cannot modify the value of the control. This is ignored if the {{htmlattrxref("type","input")}} is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}
  - : `unsigned long`: **Returns / Sets** the end index of the selected text. When there's no selection, this returns the offset of the character immediately following the current text input cursor position.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}
  - : `unsigned long`: **Returns / Sets** the beginning index of the selected text. When nothing is selected, this returns the position of the text input cursor (caret) inside of the {{HTMLElement("input")}} element.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}
  - : `string`: **Returns / Sets** the direction in which selection occurred. Possible values are: `forward` (the selection was performed in the start-to-end direction of the current locale), `backward` (the opposite direction) or `none` (the direction is unknown).

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: **Returns / Sets** the element's {{ htmlattrxref("size", "input") }} attribute, containing visual size of the control. This value is in pixels unless the value of {{htmlattrxref("type","input")}} is `text` or `password`, in which case, it is an integer number of characters. Applies only when {{htmlattrxref("type","input")}} is set to `text`, `search`, `tel`, `url`, `email`, or `password`.

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
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} event {{experimental_inline}}
  - : Fires when the text selection in a {{HTMLElement("input")}} element has been changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("input") }}
