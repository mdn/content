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

### Enumerated reflected attributes

In HTML, [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) are attributes with a limited, predefined set of text values. For example, the global HTML [`dir`](/en-US/docs/Web/HTML/Reference/Global_attributes/dir) attribute has three valid values: `ltr`, `rtl`, and `auto`.

```html
<p dir="rtl">Right to left</p>
```

Like for HTML tag names, HTML enumerated attributes and their values are case-insensitive, so `LTR`, `RTL`, and `AUTO` will also work.

```html
<p dir="RTL">Right to left</p>
```

The IDL-reflected property, {{domxref("HTMLElement.dir")}}, always returns a canonical value as provided in the specification (lowercased values in this example). Setting the value also serializes it to the canonical form.

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

Alternatively, you can use the {{domxref("Element.getAttribute()","getAttribute()")}} method of the {{domxref("Element")}} interface. It will get the attribute value from HTML without modifications.

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## Reflected element references

> [!NOTE]
> This section applies to [reflected ARIA attributes that contain element references](/en-US/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references).
> The same considerations are likely to apply to other/future attributes that reflect element references.

Some attributes take element _references_ as values: either an element `id` value or a space-separated string of element `id` values.
These `id` values refer to other elements which are related to the attribute, or that contain information needed by the attribute.
These attributes are reflected by a corresponding property as an array of {{domxref("HTMLElement")}}-derived object instances that match the `id` values, with some caveats.

For example, the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute lists the `id` values of elements that contain the accessible name for an element in their inner text.
The HTML below shows this for an {{htmlelement("input")}} that has a label defined in {{htmlelement("span")}} elements with `id` values of `label_1`, `label_2`, and `label_3`:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

This attribute is reflected by {{domxref("Element.ariaLabelledByElements")}} property, which returns the array of elements that have the corresponding `id` values.
The attribute and corresponding property can be returned as shown:

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

The first thing to note from the code above is that the attribute and the property contain different numbers of elements — the property doesn't _directly_ reflect the attribute because the reference `label_3` does not have a corresponding element.
It is also possible that a reference will not match because the `id` is [out of scope for the element](#element_id_reference_scope).
This can happen if the referenced element is not in the same DOM or shadow DOM as the element, since ids are only valid in the scope in which they are declared.

We can iterate the elements in the property array, in this case to get the accessible name from their inner text (this is more natural than using the attribute, because we don't have to first get the element references and then use them to find the elements, and we only have to work with elements that we know to be available in the current scope):

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// (Label 1 Text) (Label 2 Text)
```

### Setting the property and attribute

For normal reflected properties, updates to the property are reflected in the corresponding attribute and vice versa.
For reflected element references this is not the case.
Instead, setting the property clears (unsets) the attribute, so that the property and attribute no longer reflect each other.
For example, given the following HTML:

```html
<span id="label_1">(Label 1 Text)</span>
<span id="label_2">(Label 2 Text)</span>
<input aria-labelledby="label_1 label_2" />
```

The initial value of the `aria-labelledby` is `"label_1 label_2"`, but if we set it from the DOM API, the attribute is reset to `""`:

```js
const inputElement = document.querySelector("input");

let attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1 label_2"

// Set attribute using the reflected property
inputElement.ariaLabelledByElements = document.querySelectorAll("span");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// ""
```

This makes sense because you could otherwise assign elements to the property that don't have an `id` reference, and hence can't be represented in the attribute.

Setting the attribute value restores the relationship between the attribute and the property.
Continuing the example from above:

```js
inputElement.setAttribute("aria-labelledby", "label_1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// Set attribute using the reflected property
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

The array returned by the property is static, so you can't modify the returned array to cause changes to the corresponding attribute.
When an array is assigned to the property it is copied, so any changes to the attribute will not be reflected in a previously returned property array.

### Element id reference scope

Attribute element references can only refer to other elements that are in the same DOM or [Shadow DOM](/en-US/docs/Web/API/Web_components#shadow_dom_2), because element ids are only valid in the scope in which they are declared.

We can see this in the following code.
The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute of the {{htmlelement("input")}} element references the elements with ids `label_1`, `label_2`, and `label_3`.
However `label_3` is not a valid id in this case because it is not defined in the same scope as the {{htmlelement("input")}} element.
As a result the label will only come from the elements with ids `label_1` and `label_2`.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input aria-labelledby="label_1 label_2 label_3" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

### Reflected element reference scope

When using the [instance properties reflected from ARIA element references](/en-US/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references), such as {{domxref("Element.ariaLabelledByElements")}} for `aria-labelledby`, the scoping rules are a little different.
To be in scope a target element must be in the same DOM as the referencing element, or a parent DOM.
Elements in other DOMs, including shadow DOMs that are children or peers of the referring DOM, are out of scope.

The example below shows the case where an element in a parent DOM (`label_3`) is set as a target, along with the elements with ids `label_1` and `label_2` which are declared in the same shadow root.
This works because all the target elements are in scope for the referencing element.

```html
<div id="in_dom">
  <span id="label_3">(Label 3 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">(Label 1 Text)</span>
    <input id="input" />
    <span id="label_2">(Label 2 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = host.shadowRoot.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_1"),
  host.shadowRoot.getElementById("label_2"),
  document.getElementById("label_3"),
];
```

The equivalent code with an element in the DOM referencing another in the shadow DOM would not work, because target elements that are in nested shadow DOMs are not in scope:

```html
<div id="in_dom">
  <span id="label_1">(Label 1 Text)</span>
  <input id="input" />
  <span id="label_2">(Label 2 Text)</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">(Label 3 Text)</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = document.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_3"),
  document.getElementById("label_1"),
  document.getElementById("label_2"),
];
```

Note that an element may initially be "in scope" and then moved out of scope into a nested shadow root.
In this case the referenced element will still be listed in the attribute, but will not be returned in the property.
Note however that if the element is moved back into scope, it will again be present in the reflected property.

### Summary of the attribute/property relationship

The relationship between attributes containing element references and their corresponding property is as follows:

- Attribute element `id` references are only [in-scope](#element_id_reference_scope) for target elements declared in the same DOM or shadow DOM as the element.
- Properties that reflect ARIA element references can target elements in the same scope or a parent scope. Elements in nested scopes are not accessible.
- Setting the property clears the attribute and the property and attribute no longer reflect each other.
  If the attributes is read, with {{domxref("Element.getAttribute()")}}, the value is `""`.
- Setting the attribute, with {{domxref("Element.setAttribute()")}}, also sets the property and restores the "reflection relationship".
- Setting the attribute with a value reference that is subsequently moved out of scope will result in removal of the corresponding element from the property array.
  Note however that the attribute still contains the reference, and if the element is moved back in-scope the property will again include the element (i.e., the relationship is restored).
