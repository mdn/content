---
title: HTML id global attribute
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
page-type: html-attribute
browser-compat: html.global_attributes.id
---

{{HTMLSidebar("Global_attributes")}}

The **`id`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) defines an identifier (ID) that must be unique within the entire document.

{{InteractiveExample("HTML Demo: id", "tabbed-shorter")}}

```html interactive-example
<p>A normal, boring paragraph. Try not to fall asleep.</p>

<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid #696969;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting::before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## Syntax

An ID attribute's value must not contain [ASCII whitespace](/en-US/docs/Glossary/Whitespace#in_html) characters. Browsers treat non-conforming IDs that contain whitespace as if the whitespace is part of the ID. In contrast to the [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute, which allows space-separated values, elements can only have one single ID value.

Technically, the value for an ID attribute may contain any other Unicode character. However, when used in CSS selectors, either from JavaScript using APIs like {{domxref("Document.querySelector()")}} or in CSS stylesheets, ID attribute values must be valid [CSS identifiers](/en-US/docs/Web/CSS/ident). This means that if an ID attribute value is not a valid CSS identifier (for example, `my?id` or `1234`) then it must be escaped before being used in a selector, either using the {{domxref("CSS.escape_static", "CSS.escape()")}} method or [manually](/en-US/docs/Web/CSS/ident#escaping_characters).

For this reason, it's recommended that developers choose values for ID attributes that are valid CSS identifiers that don't require escaping.

Also, not all valid ID attribute values are valid JavaScript identifiers. For example, `1234` is a valid attribute value but not a valid JavaScript identifier. This means that the value is not a valid variable name, so you can't access the element using code like `window.1234`. However, you can access it using `window["1234"]`.

## Description

The purpose of the ID attribute is to identify a single element when linking (using a [fragment identifier](/en-US/docs/Web/URI/Reference/Fragment)), scripting, or styling (with {{glossary("CSS")}}).

You can access elements with ID attributes as global properties of the `window` object, where the property name is the ID value, and the property value is the corresponding element. For example, given this markup:

```html
<p id="preamble"></p>
```

You can access this paragraph element in JavaScript using the following code:

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> Relying on the `window["id-value"]` or `window.idValue` pattern is dangerous and discouraged because it can lead to unexpected conflicts with existing or future APIs in the browser.
> For example, if a browser introduces a built-in global property named `preamble` in the future, your code may no longer be able to access the HTML element.
> To avoid such conflicts, always use the {{domxref("Document.getElementById()")}} or {{domxref("Document.querySelector()")}} method to access elements by ID.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
- The {{domxref("Document.getElementById")}} method.
- CSS [ID selectors](/en-US/docs/Web/CSS/ID_selectors).
