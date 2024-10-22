---
title: id
slug: Web/HTML/Global_attributes/id
page-type: html-attribute
browser-compat: html.global_attributes.id
---

{{HTMLSidebar("Global_attributes")}}

The **`id`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) defines an identifier (ID) which must be unique in the whole document.

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

## Description

The purpose of the ID attribute is to identify a single element when linking (using a [fragment identifier](/en-US/docs/Web/URI#fragment)), scripting, or styling (with {{glossary("CSS")}}).

Elements with ID attributes are available as global properties. The property name is the ID attribute, and the property value is the element. For example, given markup like:

```html
<p id="preamble"></p>
```

You could access the paragraph element in JavaScript using code like:

```js
const content = window.preamble.textContent;
```

### Syntax

An ID attribute's value must not contain [ASCII whitespace](/en-US/docs/Glossary/Whitespace#in_html) characters. Browsers treat non-conforming IDs that contain whitespace as if the whitespace is part of the ID. In contrast to the [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute, which allows space-separated values, elements can only have one single ID value.

Technically, the value for an ID attribute may contain any other Unicode character. However, when used in CSS selectors, either from JavaScript using APIs like {{domxref("Document.querySelector()")}} or in CSS stylesheets, ID attribute values must be valid [CSS identifiers](/en-US/docs/Web/CSS/ident). This means that if an ID attribute value is not a valid CSS identifier (for example, `my?id` or `1234`) then it must be escaped before being used in a selector, either using the {{domxref("CSS.escape_static", "CSS.escape()")}} method or [manually](/en-US/docs/Web/CSS/ident#escaping_characters).

For this reason, it's recommended that developers choose values for ID attributes that are valid CSS identifiers that don't require escaping.

Also, not all valid ID attribute values are valid JavaScript identifiers. For example, `1234` is a valid attribute value but not a valid JavaScript identifier. This means that the value is not a valid variable name, so you can't access the element using code like `window.1234`. However, you can access it using `window["1234"]`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
- The {{domxref("Document.getElementById")}} method.
- CSS [ID selectors](/en-US/docs/Web/CSS/ID_selectors).
