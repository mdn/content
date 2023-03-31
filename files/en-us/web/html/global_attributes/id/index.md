---
title: id
slug: Web/HTML/Global_attributes/id
page-type: html-attribute
browser-compat: html.global_attributes.id
---

{{HTMLSidebar("Global_attributes")}}

The **`id`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) defines an identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a [fragment identifier](/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment)), scripting, or styling (with {{glossary("CSS")}}).

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **Warning:** This attribute's value is an opaque string: this means that web authors should not rely on it to convey human-readable information (although having your IDs somewhat human-readable can be useful for code comprehension, e.g. consider `ticket-18659` versus `r45tgfe-freds&$@`).

An `id`'s value must not contain {{glossary("whitespace")}} (spaces, tabs etc.). Browsers treat non-conforming IDs that contain whitespace as if the whitespace is part of the ID. In contrast to the [`class`](/en-US/docs/Web/HTML/Global_attributes#class) attribute, which allows space-separated values, elements can only have one single ID value.

Technically, the value for an `id` attribute may contain any character, except {{glossary("whitespace")}} characters. However, to avoid inadvertent errors, only {{glossary("ASCII")}} letters, digits, `'_'`, and `'-'` should be used and the value for an `id` attribute should start with a letter.

For example, `.` has a special meaning in CSS (it acts as a [class selector](/en-US/docs/Web/CSS/Class_selectors)). While valid, unless you are careful to escape it when used as part of a CSS selector, including as part of a [`querySelector()`](/en-US/docs/Web/API/Document/querySelector) or [`querySelectorAll()`](/en-US/docs/Web/API/Document/querySelectorAll) parameter, it won't be recognized as part of the value of an `id` attribute. It is easy to forget to do this, resulting in bugs in your code that could be hard to detect.

Similarly, an `id` starting with a digit (E.g., `1234-322-678`) or a hyphen followed by a digit (E.g., `-123`), though valid in HTML, may lead to problems when used in CSS, JavaScript, and Web APIs:

- CSS [ID selectors](/en-US/docs/Web/CSS/ID_selectors) accept any CSS identifier. If the `id` starts with a digit or one hyphen immediately followed by a digit, the hyphen and digit must be escaped in CSS. For example, while `id="544-383-3388"` and `id="-3Pi"` are valid in HTML, the `id` selectors must be escaped. The element with these `id` values can be targeted in CSS with `#\35 44-383-3388` and `#\2D \33 pi`.
- Any valid HTML `id` value is valid as an attribute selector in CSS and JavaScript. The selectors `[id="544-383-3388"]` and `[id="-3Pi"]` are valid.
- {{domxref("Document.querySelector()")}} and similar methods will not find them unless you escape them (See this [page](https://codepen.io/estelle/pen/jOvzbgb) for an example.)
- Such an `id` will not be valid JavaScript identifiers, as [elements with IDs may become global properties](https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-properties): `1234.doSomething()` will not work, whereas `_1234.doSomething()` will. This may be problematic.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
- The {{domxref("Document.getElementById")}} method.
- CSS [ID selectors](/en-US/docs/Web/CSS/ID_selectors).
