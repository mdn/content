---
title: "Element: ariaErrorMessageElements property"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaErrorMessageElements
---

{{APIRef("DOM")}}

The **`ariaErrorMessageElements`** property of the {{domxref("Element")}} interface identifies the element (or elements) that provide an error message for the element it is applied to.

The property reflects the [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.

## Value

An array of elements that can be joined with spaces to get the error message.

## Description

The `ariaErrorMessageElements` property is a flexible alternative to using the [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute to set the error message for an object.
Unlike `aria-errormessage`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the message.

The elements that form the message may be in the current scope or an ancestor scope of the element, but not a descendant scope.
In other words, a shadow root can set parts of the message from within its own shadow DOM or the parent DOM, but a DOM element can't set parts of the message from elements defined in a shadow root.

If the `ariaErrorMessageElements` property array includes an element that is subsequently moved out of scope, it will be omitted if you read the property, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property reflects the element's [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute if it is defined.
Note however that the property will omit elements in the attribute where the associated reference `id` does not exist or is out of scope.
The property can be set directly or using the `aria-errormessage` attribute with {{domxref("Element.setAttribute()")}}.
If the values are set using `ariaErrorMessageElements` then the `aria-errormessage` attribute is set to the empty string (`""`).

The [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) topic contains additional information about how the accessible details should be used.

## Examples

### Email input with aria error message

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
  let innerText = "";
  propElements.forEach((elem) => {
    innerText += elem.textContent.trim() + " ";
  });
  log(`Error message details: ${innerText.trim()}`);
} else {
  log("element.ariaErrorMessageElements: not supported by browser");
}
```

#### Result

As you enter an email address, the error text will be displayed until the email address is valid.
Note that the log shows the error message reference read from the attribute, the element from `ariaErrorMessageElements`, and the inner text of the element, which is its error message.

{{EmbedLiveSample("Email input with aria error message","100%","150px")}}

<!--

### Get the accessible details

This example shows how `ariaErrorMessageElements` can be used to get the information defined using the `aria-errormessage` attribute in HTML.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-errormessage` attribute of a {{htmlelement("button")}}.

```html
<button aria-errormessage="details1 details2">Button text</button>
…
<span id="details1">Details 1 information about the element.</span>
<span id="details2">Details 2 information about the element.</span>
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

#### JavaScript

The code below first logs the value of the `aria-errormessage` attribute from {{domxref("Element.getAttribute()")}} (a string listing the `id` values of the referenced elements).
It then checks whether the `ariaErrorMessageElements` is supported, and if so, logs its value.
Finally it returns the accessible string, calculated by iterating through the returned elements and concatenating their inner text.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-errormessage: ${buttonElement.getAttribute("aria-errormessage")}`);
// Feature test for ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  // Get ariaErrorMessageElements
  const buttonElements = buttonElement.ariaErrorMessageElements;
  log(`ariaErrorMessageElements: ${buttonElements}`);

  // Accessible details from ariaErrorMessageElements
  let ariaDetails = "";
  buttonElements.forEach((descElement) => {
    ariaDetails += descElement.textContent.trim() + " ";
  });
  log(`Accessible details: ${ariaDetails.trim()}`);
} else {
  log("element.ariaErrorMessageElements: not supported by browser");
}
```

#### Result

The log below shows the original element references, the associated/returned elements, and the accessible details.

{{EmbedLiveSample("Get the accessible details","100%","150px")}}

### Set the accessible details

This example shows how `ariaErrorMessageElements` and {{domxref("Element.setAttribute()")}} can be used to set the accessible details.
It also shows how using each approach changes the value of the corresponding attribute or property.

#### HTML

The HTML defines three {{htmlelement("span")}} elements and references the ids of two of them in the `aria-errormessage` attribute of a {{htmlelement("button")}}.

```html
<button aria-errormessage="details1 details2">Button</button>
…
<span id="details1">(Details1 Text)</span>
<span id="details2">(Details2 Text)</span>
<span>(Details3 Text)</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 270px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code first defines a logging function to list the ids from the `aria-errormessage` attribute using {{domxref("Element.getAttribute()")}}, the elements from `ariaErrorMessageElements`, and the accessible name constructed from the inner text of each of those elements.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-errormessage");

  let text = "";
  accessibleElements = element.ariaErrorMessageElements;
  accessibleElements.forEach((descElement) => {
    text += descElement.textContent.trim() + " ";
  });
  text = text.trim();

  log(` id: "${refids}", el: ${accessibleElements}, desc: ${text} `);
}
```

Next the code checks if `ariaErrorMessageElements` is supported, and if so:

1. Logs the original ids, elements, and element text, as set from the HTML
2. Sets the property by selecting the `<span>` elements and logs the same information (shows that the attribute is cleared if you set the property).
   Note that here we don't have to specify the `id` values, as we did in the attribute!
3. Sets the `aria-errormessage` attribute to the reference `id` string of `details1 details2 details3` and logs the same information.

```js
const buttonElement = document.querySelector("button");

// Feature test for ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logAccessibleInfo(buttonElement);

  log("[2] Property set from span selector");
  buttonElement.ariaErrorMessageElements = document.querySelectorAll("span");
  logAccessibleInfo(buttonElement);

  log("[3] Attribute set using setAttribute()");
  buttonElement.setAttribute("aria-errormessage", "details1 details2 details3");
  logAccessibleInfo(buttonElement);
} else {
  log("ariaErrorMessageElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.

- Line [1] demonstrates that the property reflects the references set in the HTML attribute.
- Line [2] demonstrates that setting the property clears the attribute to `""`.
- Line [3] demonstrates that invalid references in the attribute are omitted from the property.

{{EmbedLiveSample("Set the accessible details ","100%","350px")}}

-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaErrorMessageElements")}}
