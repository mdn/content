---
title: "Element: ariaErrorMessageElements property"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaErrorMessageElements
---

{{APIRef("DOM")}}

The **`ariaErrorMessageElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that provide an error message for the element it is applied to.

The [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) topic contains additional information about how the attribute and property should be used.

## Value

An array of subclasses of {{domxref("HTMLElement")}}.
The inner text of these elements can be joined with spaces to get the error message.

When read, the returned array is a static and read-only.
When written, the assigned array is copied: subsequent changes to the array do not affect the value of the property.

## Description

The property is a flexible alternative to using the [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute to set the error message for an element.
Unlike `aria-errormessage`, the elements assigned to this property do not have to have an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute.

The property reflects the element's [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

### Email input with error message

This example shows how we use the `aria-errormessage` to set the error message for reporting entry of an invalid email address, and demonstrates how we can get and set the message using `ariaErrorMessageElements`.

#### HTML

First we define an HTML email input, setting its `aria-errormessage` attribute to reference an element with the `id` of `err1`.
We then define a `<span>` element that has this id, and which contains an error message.

```html
<p>
  <label for="email">Email address:</label>
  <input type="email" name="email" id="email" aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

#### CSS

We create some styles to hide the error message by default, but make it visible and styled as an error when `aria-invalid` is set on the element.

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

#### JavaScript

We then check for input, and set {{domxref("ariaInvalid")}} to `true` or `false` based on the [`typeMismatch`](/en-US/docs/Web/API/ValidityState/typeMismatch) constraint violation.
`ariaInvalid` is in turn reflected in the `aria-invalid` attribute, which hides and displays the error as needed.

```js
const email = document.querySelector("#email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.ariaInvalid = true;
  } else {
    email.ariaInvalid = false;
  }
});
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

We then log the value of the `aria-errormessage` attribute, the `ariaErrorMessageElements` and the inner text of the `ariaErrorMessageElements`

```js
log(`aria-errormessage: ${email.getAttribute("aria-errormessage")}`);
// Feature test for ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  // Get ariaErrorMessageElements
  const propElements = email.ariaErrorMessageElements;
  log(`ariaErrorMessageElements: ${propElements}`);

  // Accessible text from element inner text
  const text = propElements.map((e) => e.textContent.trim).join(" ");
  log(`Error message details: ${text.trim()}`);
} else {
  log("element.ariaErrorMessageElements: not supported by browser");
}
```

#### Result

As you enter an email address, the error text will be displayed until the email address is valid.
Note that the log shows the error message reference read from the attribute, the element from `ariaErrorMessageElements`, and the inner text of the element, which is its error message.

{{EmbedLiveSample("Email input with error message","100%","180px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
