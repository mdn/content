---
title: 'HTML attribute: multiple'
slug: Web/HTML/Attributes/multiple
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
spec-urls: https://html.spec.whatwg.org/multipage/input.html#attr-input-multiple
---

{{HTMLSidebar}}

The Boolean **`multiple`** attribute, if set, means the form control accepts one or more values. Valid for the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/file", "file")}} input types and the {{HTMLElement("select")}}, the manner by which the user opts for multiple values depends on the form control.

Depending on the type, the form control may have a different appearance if the `multiple` attribute is set. For the file input type, the native messaging the browser provides differs. In Firefox, the file input reads "No files selected" when the attribute is present and "No file selected" when not, when no files are selected. Most browsers displaying a scrolling list box for a {{HTMLElement("select")}} control with the `multiple` attribute set versus a single line dropdown when the attribute is omitted. The {{HTMLElement("input/email", "email")}} input displays the same, but will match the {{cssxref(':invalid')}} pseudo-class if more than one comma-separated email address is included if the attribute is not present.

When `multiple` is set on the {{HTMLElement("input/email", "email")}} input type, the user can include zero (if not also [`required`](/en-US/docs/Web/HTML/Attributes/required)), one or more comma-separated email addresses.

```html
<input type="email" multiple name="emails" id="emails">
```

If and only if the `multiple` attribute is specified, the value can be a list of properly-formed comma-separated e-mail addresses. Any trailing and leading whitespace is removed from each address in the list.

When `multiple` is set on the {{HTMLElement("input/file", "file")}} input type, the user can select one or more files. The user can choose multiple files from the file picker in any way that their chosen platform allows (e.g. by holding down <kbd>Shift</kbd> or <kbd>Control</kbd>, and then clicking).

```html
<input type="file" multiple name="uploads" id="uploads">
```

When the attribute is omitted, the user can only select a single file per `<input>`.

The `multiple` attribute on the {{HTMLElement("select")}} element represents a control for selecting zero or more options from the list of options. Otherwise, the {{HTMLElement("select")}} element represents a control for selecting a single {{HTMLElement("option")}} from the list of options.

```html
<select multiple name="drawfs" id="drawfs">
  <option>Grumpy</option>
  <option>Happy</option>
  <option>Sleepy</option>
  <option>Bashful</option>
  <option>Sneezy</option>
  <option>Dopey</option>
  <option>Doc</option>
</select>
```

When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.

## Accessibility concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the `multiple` attribute, inform the user that multiple values are allowed and provide directions on how to provide multiple values, such as "separate email addresses with a comma."

Setting `size="1"` on a multiple select can make it appear as a single select in some browsers, but then it doesn't expand on focus, harming usability. Don't do that. If you do change the appearance of a select, and even if you don't, make sure to inform the user that more than one option can be selected by another method.

## Examples

### email input

```html
<label for="emails">Who do you want to email?</label>
<input type="email" multiple name="emails" id="emails" list="drawfemails" required size="64">

<datalist id="drawfemails">
  <option value="grumpy@woodworkers.com">Grumpy</option>
  <option value="happy@woodworkers.com">Happy</option>
  <option value="sleepy@woodworkers.com">Sleepy</option>
  <option value="bashful@woodworkers.com">Bashful</option>
  <option value="sneezy@woodworkers.com">Sneezy</option>
  <option value="dopey@woodworkers.com">Dopey</option>
  <option value="doc@woodworkers.com">Doc</option>
</datalist>
```

```css hidden
input:invalid {border: red solid 3px;}
```

If and only if the `multiple` attribute is specified, the value can be a list of properly-formed comma-separated e-mail addresses. Any trailing and leading whitespace is removed from each address in the list. If the [`required`](/en-US/docs/Web/HTML/Attributes/required) attribute is present, at least one email address is required.

Some browsers support the appearance of the [`list`](/en-US/docs/Web/HTML/Attributes/list) of options from the associated {{htmlelement('datalist')}} for subsequent email addresses when `multiple` is present. Others do not.

{{EmbedLiveSample("email_input", 600, 80) }}

### file input

When `multiple` is set on the {{HTMLElement("input/file", "file")}} input type, the user can select one or more files:

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads">
       Choose the images you want to upload:
    </label>
    <input type="file" id="uploads" name="uploads" accept=".jpg, .jpeg, .png, .svg, .gif" multiple>
  </p>
  <p>
    <label for="text">Pick a text file to upload: </label>
    <input type="file" id="text" name="text" accept=".txt">
 </p>
  <p>
    <input type="submit" value="Submit">
  </p>
</form>
```

{{EmbedLiveSample("file_input", 600, 80) }}

Note the difference in appearance between the example with `multiple` set and the other `file` input without.

When the form is submitted,had we used [`method="get"`](/en-US/docs/Web/HTML/Element/form) each selected file's name would have been added to URL parameters as`?uploads=img1.jpg&uploads=img2.svg`. However, since we are submitting [multipart](/en-US/docs/Web/API/XMLHttpRequest/multipart) form data, we much use post. See the {{htmlelement('form')}} element and [sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data#the_method_attribute) for more information.

### select

The `multiple` attribute on the {{HTMLElement("select")}} element represents a control for selecting zero or more options from the list of options. Otherwise, the {{HTMLElement("select")}} element represents a control for selecting a single {{HTMLElement("option")}} from the list of options. The control generally has a different appearance based on the presence of the multiple attribute, with most browsers displaying a scrolling list box instead of a single line dropdown when the attribute is present.

```html
<form method="get" action="#">
<p>
 <label for="dwarfs">Select the woodsmen you like:</label>
  <select multiple name="drawfs" id="drawfs">
    <option>grumpy@woodworkers.com</option>
    <option>happy@woodworkers.com</option>
    <option>sleepy@woodworkers.com</option>
    <option>bashful@woodworkers.com</option>
    <option>sneezy@woodworkers.com</option>
    <option>dopey@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
 <label for="favoriteOnly">Select your favorite:</label>
  <select name="favoriteOnly" id="favoriteOnly">
    <option>grumpy@woodworkers.com</option>
    <option>happy@woodworkers.com</option>
    <option>sleepy@woodworkers.com</option>
    <option>bashful@woodworkers.com</option>
    <option>sneezy@woodworkers.com</option>
    <option>dopey@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
  <input type="submit" value="Submit">
</p>
</form>
```

{{EmbedLiveSample("select", 600, 120) }}

Note the difference in appearance between the two form controls.

```css
/* uncomment this CSS to make the multiple the same height as the single */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

There are a few ways to select multiple options in a `<select>` element with a `multiple` attribute. Depending on the operating system, mouse users can hold the <kbd>Ctrl</kbd>, <kbd>Command</kbd>, or <kbd>Shift</kbd> keys and then click multiple options to select/deselect them. Keyboard users can select multiple contiguous items by focusing on the `<select>` element, selecting an item at the top or bottom of the range they want to select using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to go up and down the options. The selection of non-contiguous is not as well supported: items should be able to be selected and deselected by pressing <kbd>Space</kbd> , but support varies between browsers.

## Specifications

{{Specifications}}

## See also

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [Allowing multiple e-mail addresses](/en-US/docs/Web/HTML/Element/input/email#allowing_multiple_e-mail_addresses)
