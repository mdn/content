---
title: Attribute reflection
slug: Web/API/Document_Object_Model/Reflected_attributes
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

An {{glossary("attribute")}} extends an {{glossary("HTML")}}, {{glossary("XML")}}, {{glossary("SVG")}} or other {{glossary("element")}}, changing its behavior or providing metadata.

Many attributes are _reflected_ in the corresponding [DOM](/en-US/docs/Web/API/Document_Object_Model) interface.
This means that the value of the attribute can be read or written directly in JavaScript through a property on the corresponding interface, and vice versa.
The reflected properties offer a more natural programming approach than getting and setting attribute values using the {{domxref("Element.getAttribute()","getAttribute()")}} and {{domxref("Element.setAttribute()","setAttribute()")}} methods of the {{domxref("Element")}} interface.

This guide provides an overview of reflected attributes and how they are used.

## Attribute getter/setter

First let's see the default mechanism for getting and setting an attribute, which can be used whether or not the attribute is reflected.
To get the attribute you call the {{domxref("Element.getAttribute()","getAttribute()")}} method of the {{domxref("Element")}} interface, specifying the attribute name.
To set the attribute you call the {{domxref("Element.setAttribute()","setAttribute()")}} methods, specifying the attribute name and new value.

Consider the following HTML:

```html
<input placeholder="Original placeholder" />
```

To get and set the [`placeholder`](/en-US/docs/Web/HTML/Reference/Attributes/placeholder) attribute:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.getAttribute("placeholder");

// Set the placeholder attribute
input.setAttribute("placeholder", "Modified placeholder");
```

## Reflected attributes

For an {{htmlelement("input")}} the `placeholder` attribute is reflected by the {{domxref("HTMLInputElement.placeholder")}} property.
Given the same HTML as before:

```html
<input placeholder="Original placeholder" />
```

The same operation can be performed more naturally using the `placeholder` property:

```js
const input = document.querySelector("input");

// Get the placeholder attribute
let attr = input.placeholder;

// Set the placeholder attribute
input.placeholder = "Modified placeholder";
```

Note that the name of the reflected attribute and the property are the same: `placeholder`.
This is not always the case: properties are usually named following the {{glossary("Camel case","camelCase")}} convention.
This is particularly true for multi-word attribute names that contain a characters that are not allowed in a property name, such as the hyphen.
For example the [aria-checked](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) attribute is reflected by the [`ariaChecked`](/en-US/docs/Web/API/Element/ariaChecked) property.

### Boolean reflected attributes

{{Glossary("Boolean/HTML", "Boolean attributes")}} are a little different than others in that they don't have to be declared with a name and a value.
For example, the checkbox {{htmlelement("input")}} element below has the `checked` attribute, and will be checked on display:

```html
<input type="checkbox" checked />
```

The {{domxref("Element.getAttribute()")}} will return `""` if the input is checked or `null` if it is not.
The corresponding {{domxref("HTMLInputElement.checked")}} property returns `true` or `false` for the checked state.
Otherwise boolean reflected attributes are the same as any other reflected attributes.

## Reflected element references

> [!NOTE]
> This section applies to [reflected aria attributes that contain element references](/en-US/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> The same considerations are likely to apply to other/future attributes that reflect element references.

Some attributes take element _references_ as values: either an element `id` value or a space-separated string of element `id` values.
These attributes refer to other elements which are related to the attribute, or contain the information needed by the attribute.
For example, the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute lists the elements controlled by a button, while [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) lists elements that contain the accessible name for an element in their inner text.

The attribute's element references are reflected in the property as an array of the corresponding {{domxref("HTMLElement")}}-derived object instances, with some caveats.

### Element reference scope

Element references can only match to elements that are "in scope" with the referencing element.

An HTML document is represented to JavaScript as a hierarchical tree of objects referred to as the [Document Object Model (DOM)](/en-US/docs/Web/API/Document_Object_Model).
Elements within the model may contain and encapsulate "child" DOMs, referred to as [Shadow DOMs](/en-US/docs/Web/API/Web_components#shadow_dom_2) within a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), which can in turn nest their own Shadow DOMs.

The scope of a referencing element is the DOM in which it is defined, and any parent DOMs in which that DOM is nested. Shadow DOMS that are nested children of the DOM in which the referencing element is defined are out of scope.

What this means is that an element in the main DOM can only reference elements in the main DOM (since elements in a Shadow DOM are necessarily children of its DOM, and hence out of scope).
However an element in a shadow root can nest elements in that same shadow root and also in the main DOM (and any DOM's that are parents), since they are in scope.

<!-- diagrams? -->

Note that a referenced element may initially be "in scope" and then moved out of scope into a nested shadow root.
In this case the referenced element may still be listed in the attribute

### Relationship between attribute and property

The relationship between attributes containing element references and their corresponding property is as follows:

- Only attribute `id` values that match [in-scope elements](#element_reference_scope) are reflected in the property.
- Setting the property clears the attribute and the property and attribute no longer reflect each other.
  If the attributes is read, with {{domxref("Element.getAttribute()")}}, the value is `""`.
- Setting the attribute, with {{domxref("Element.setAttribute()")}}, also sets the property and restores the "reflection relationship".
- Setting the attribute with a value reference that is subsequently moved out of scope will result in removal of the corresponding element from the property array.
  Note however that the attribute still contains the reference, and if the element is moved back in-scope the property will again include the element (i.e., the relationship is restored).

## Examples

### Getting and setting reflected attributes

This example shows how you can get and set attributes and their reflected properties, and demonstrates that the values match irrespective of what value is used.

#### HTML

The HTML defines an {{htmlelement("input")}} element where the [`placeholder`](/en-US/docs/Web/HTML/Reference/Attributes/placeholder) attribute has been set with the text "Original placeholder".
We also define two {{htmlelement("button")}} elements for replacing the `placeholder` attribute.

```html
<input placeholder="Original placeholder" />
<button id="attr">Set attribute</button>
<button id="prop">Set property</button>
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

The code first gets the input element and logs value of the placeholder attribute using {{domxref("Element.getAttribute()")}} and the property using {{domxref("HTMLInputElement.placeholder")}}.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");

// Log placeholder attribute and property
log(
  `(Original) attr: "${inputElement.getAttribute("placeholder")}", prop: "${
    inputElement.placeholder
  }"`,
);
```

We then define two event listeners for the buttons, which set the placeholder using {{domxref("Element.setAttribute()")}} and {{domxref("HTMLInputElement.placeholder")}}, respectively.
In both cases the attribute and property are then logged.

```js
const setAttributeButton = document.querySelector("#attr");
const setPropertyButton = document.querySelector("#prop");

// Set placeholder attribute on button click
setAttributeButton.addEventListener("click", () => {
  inputElement.setAttribute("placeholder", "Set from attribute");
  log(
    `(Set attribute) attr: "${inputElement.getAttribute(
      "placeholder",
    )}", prop: "${inputElement.placeholder}"`,
  );
});

// Set placeholder property on button click
setPropertyButton.addEventListener("click", () => {
  inputElement.placeholder = "Set from property";
  log(
    `(Set property) attr: "${inputElement.getAttribute(
      "placeholder",
    )}", prop: "${inputElement.placeholder}"`,
  );
});
```

#### Result

The log below shows the output of the above code.
Note that the value can be set using either the attribute or the property, and the result read via either approach is the same.

{{EmbedLiveSample("Getting and setting reflected attributes","100%","350px")}}

### Setting and getting reflected element references

This example show how reflected element references work by demonstrating the effects of getting and setting the attribute and its reflected property.

This code sets an attribute in HTML and then reads both the attribute and reflected property - demonstrating that invalid properties are not included.
It then sets the property, demonstrating that the attribute is cleared, and then the attribute, demonstrating that it is restored.

While the example uses the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute and corresponding property {{domxref("Element.ariaLabelledByElements")}}, other attributes containing element references should behave similarly.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is then the concatenation of the inner text of the first two referenced elements.

```html
<span id="label_1">(Label 1 Text)</span>
<input aria-labelledby="label_1 label_2" />
<span id="label_2">(Label 2 Text)</span>
<span>(Label 3 Text)</span>
```

There is also a final span `label_3` which will be programmatically added using `setAttribute()`.

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

The code first defines a logging function to list the ids from the `aria-labelledby` attribute using {{domxref("Element.getAttribute()")}}, the elements from `ariaLabelledByElements`, and the accessible name constructed from the inner text of each of those elements.

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-labelledby");
  const accessElements = element.ariaLabelledByElements;
  const text = accessElements.map((e) => e.textContent).join(" ");

  log(` ref ids: "${refids}", el: ${accessElements}, label: ${text} `);
}
```

If `ariaLabelledByElements` is supported, the code:

1. Logs the original ids, elements, and element text, as set from the HTML (shows that properties are reflected when the attribute is set).
2. Sets the property by selecting the `<span>` elements and logs the same information (shows that the attribute is cleared if you set the property).
   Note that here we don't have to specify the `id` values, as we did in the attribute!
3. Sets the `aria-labelledby` attribute to the reference `id` string of `label_1 label_4 label_3` and logs the same information.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  log("[1] Attributes set in HTML");
  logAccessibleInfo(inputElement);

  log("[2] Property set from span selector");
  inputElement.ariaLabelledByElements = document.querySelectorAll("span");
  logAccessibleInfo(inputElement);

  log("[3] Attribute set from using setAttribute");
  inputElement.setAttribute("aria-labelledby", "label_1 label_4");
  logAccessibleInfo(inputElement);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code:

- Line [1] demonstrates that the property reflects the references set in the HTML attribute.
  It contains both the references in the original attribute, and we can see that their inner text is in the final output.
- Line [2] demonstrates that setting the property clears the attribute, setting it to `""`.
  The property no longer reflects the attribute, and contains one element (label 3) that doesn't even have an `id`.
- Line [3] demonstrates that setting the attribute "restores" the reflection.
  Note that the referenced element `label_4` does not exist, so there is no corresponding element in the property.

{{EmbedLiveSample("Setting and getting reflected element references","100%","350px")}}

### Reflected element reference DOM scope

This example demonstrates that an element can't reference a descendant scope, but that a referenced that is moved out of scope will be reflected again when it is moved back into scope.

While the example uses the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute and corresponding property {{domxref("Element.ariaLabelledByElements")}}, other attributes containing element references should behave similarly.

#### HTML

The HTML defines two {{htmlelement("span")}} elements in the DOM (`label_1` and `label_2`), and a third (`label_3`) in a shadow root.
These are all referenced in the `aria-labelledby` attribute of an {{htmlelement("input")}} in the DOM.
Note that the shadow root is a descendant scope of the input element, so `label_3` cannot be reflected by the property that reflects the attribute.
There is also a toggle button for moving the `label_1` element in and out of the shadow root, and a reset button to clear the log.

```html
<div id="in_dom">
  <span id="label_1">(Label 1 Text)</span>
  <input aria-labelledby="label_1 label_2 label_3" />
  <span id="label_2">(Label 2 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">(Label 3 Text)</span>
  </template>
</div>

<button id="toggle">Toggle label1</button>
<button id="reset" type="button">Reset</button>
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

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The code first defines a logging function to list the ids from the `aria-labelledby` attribute using {{domxref("Element.getAttribute()")}}, the number of elements in `ariaLabelledByElements`, and the accessible name constructed from the inner text of each of those elements.

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-labelledby");
  const accessElements = element.ariaLabelledByElements;
  const text = accessElements.map((e) => e.textContent).join(" ");

  log(` ref ids: "${refids}", el: ${accessElements}, label: ${text} `);
}
```

If `ariaLabelledByElements` is supported, the code:

1. Logs the original reference ids, number of elements, and element text, as set from the HTML.
   Note that the `label_1` element is initially in scope, but `label_3` is not.

2. Adds an event listener on the toggle button which toggles the `label_1` element in and out of the shadow root.
   This moves the element in and out of the property, though it will remain a reference.

```js
const inputElement = document.querySelector("input");
const toggleButton = document.querySelector("#toggle");

const host = document.querySelector("#host");
const label1Element = document.querySelector("#label_1");
const domDiv = document.querySelector("#in_dom");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  log("[1] Attributes set in HTML");
  logAccessibleInfo(inputElement);

  // Set placeholder property on button click
  let toggle = true;
  toggleButton.addEventListener("click", () => {
    if (toggle) {
      host.shadowRoot.appendChild(label1Element);
      log("Label1 to shadow");
    } else {
      log("Label1 to dom");
      domDiv.appendChild(label1Element);
    }
    toggle = !toggle;
    logAccessibleInfo(inputElement);
  });
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code:

- Line [1] demonstrates that the property reflects the references set in the HTML attribute.
  This should show that `label_3` has no corresponding element reflected in the property, as it is out of scope.
- As you toggle the button the `label_1` element should be added and removed from the property as it is moved in and out of scope.

{{EmbedLiveSample("Reflected element reference DOM scope","100%","400px")}}
