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

For example, `.` has a special meaning in CSS (it acts as a [class selector](/en-US/docs/Web/CSS/Class_selectors)). While valid, unless you are careful to escape it when used as part of a CSS selector, including as part of a [`querySelector()`](/en-US/docs/Web/API/Document/querySelector) or  [`querySelectorAll()`](/en-US/docs/Web/API/Document/querySelectorAll) parameter, it won't be recognized as part of the value of an `id` attribute. It is easy to forget to do this, resulting in bugs in your code that could be hard to detect.

Similarly, an `id` comprised only of digits (E.g., `1234`), or starting with a digit (E.g., `1234-322-678`) or an hyphen (E.g., `-123`), though valid and working well in HTML, may lead to problems when used in CSS, JavaScript and Web APIs:

- CSS selector can only take a CSS identifier, excludint `id` starting with a digit, two hyphens, or one hyphen immediatly followed by a digit: `#544-383-3388` is an invalid selector in CSS and won't work
- {{domxref("Document.querySelector()")}} and similar methods will not find it (This [page](http://calixe.fr/global_id.html) document the problem).
- Such an `id` will not be a valid JavaScript identifier: `myvar.1234` will not work, while `myvar._1234` would. This may be problematic.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
- The {{domxref("Document.getElementById")}} method.
- CSS [ID selectors](/en-US/docs/Web/CSS/ID_selectors).
