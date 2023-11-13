---
title: aria-invalid
slug: Web/Accessibility/ARIA/Attributes/aria-invalid
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-invalid
---

The `aria-invalid` state indicates the entered value does not conform to the format expected by the application.

## Description

The `aria-invalid` attribute is used to indicate that the value entered into an input field is not in a format or a value the application will accept. This may include formats such as email addresses or telephone numbers. `aria-invalid` can also be used to indicate that a required field is empty.

The `aria-invalid` attribute can be used with any typical HTML form element, and is not limited to elements that have an ARIA role assigned.

The attribute should be set with JavaScript as a result of a validation process. If a value is determined to be invalid or out-of-range, set `aria-invalid="true"` **and** tell the user there is an error. For better user experience, provide suggestions for how the error can be corrected. Do not set `aria-invalid="true"` on empty required elements until after the user attempts to submit the form. They may still be working on filling it out.

> **Note:** When `aria-invalid` is used in conjunction with the `aria-required` attribute, `aria-invalid` should not be set to true before the form is submitted - only in response to validation.

There are currently four values: in addition to `true` and `false` we have `grammar` which can be used when a grammatical error is detected and `spelling` for spelling errors. If the attribute is not present, or its value is false, or its value is an empty string, the default value of false applies. Any other value is treated as if `true` were set.

### Native HTML validation

HTML has native form validation. When a user submits a form with a control containing errors, the first form control with an invalid value displays an error message, natively.

If there is a [`required`](/en-US/docs/Web/HTML/Global_attributes#required) attribute on a form control that isn't filled out, the form will not submit, and an error message appears reading "Please fill out this field" or something similar. The messaging for native validation varies depending on the browser, and cannot be styled.

```html
<input type="number" step="2" min="0" max="100" required />
```

If the user had entered a value in the preceding input example above the maximum, below the minimum, or that doesn't match the step value, an error message would appear. If the user had entered "3", the native error message would be similar to "Please enter a valid value."

If you are creating your own form validation scripts, make sure to include `aria-invalid` on invalid form controls, along with styling (use the `[aria-invalid="true"]` attribute selector) and messaging (with [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)) to help users understand where the mistake is and how they can fix it.

## Values

- `grammar`
  - : A grammatical error was detected.
- `false` (default)
  - : There are no detected errors in the value.
- `spelling`
  - : A spelling error was detected.
- `true`
  - : The value entered by the user has failed validation.

Any value not in this list will be treated as `true`.

## Example

The following snippet shows a simplified version of two form fields with a validation function attached to the blur event. Note that since the default value for `aria-invalid` is `false`, it is not strictly necessary to add the attribute to input.

```html
<ul>
  <li>
    <label for="name">Full Name</label>
    <input
      type="text"
      name="name"
      id="name"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('name', ' ', 'Invalid name entered (requires both first and last name)');" />
  </li>
  <li>
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('email', '@', 'Invalid email address');" />
  </li>
</ul>
```

Note that it is not necessary to validate the fields immediately on blur; the application could wait until the form is submitted (though this is not necessarily recommended).

The snippet below shows a very simple validation function, which only checks for the presence of a particular character (in the real world, validation will likely be more sophisticated):

```js
function checkValidity(id, searchTerm, msg) {
  const elem = document.getElementById(id);
  if (elem.value.includes(searchTerm)) {
    elem.setAttribute("aria-invalid", "false");
    updateAlert();
  } else {
    elem.setAttribute("aria-invalid", "true");
    updateAlert(msg);
  }
}
```

The snippet below shows the alert functions, which add (or remove) the error message:

```js
function updateAlert(msg) {
  const oldAlert = document.getElementById("alert");
  if (oldAlert) {
    oldAlert.remove();
  }

  if (msg) {
    const newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    const content = document.createTextNode(msg);
    newAlert.appendChild(content);
    document.body.appendChild(newAlert);
  }
}
```

Note that the alert has the ARIA role attribute set to [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role).

## Associated roles

Used in roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role)

Inherited into role:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Specifications

{{Specifications}}

## See Also

- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- CSS {{CSSXRef(':valid')}} pseudoclass
- CSS {{CSSXRef(':invalid')}} pseudoclass
- [Form Validation](/en-US/docs/Learn/Forms/Form_validation) tutorial

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
