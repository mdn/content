---
title: id
slug: Web/HTML/Global_attributes/id
tags:
  - Global attributes
  - HTML
  - Reference
  - Web
  - id
browser-compat: html.global_attributes.id
---
{{HTMLSidebar("Global_attributes")}}

The **`id`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) defines an identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a [fragment identifier](/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment)), scripting, or styling (with {{glossary("CSS")}}).

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **Warning:** This attribute's value is an opaque string: this means that web authors should not rely on it to convey human-readable information (although having your IDs somewhat human-readable can be useful for code comprehension, e.g. consider `ticket-18659` versus `r45tgfe-freds&$@`).

`id`'s value must not contain {{glossary("whitespace")}} (spaces, tabs etc.). Browsers treat non-conforming IDs that contain whitespace as if the whitespace is part of the ID. In contrast to the {{htmlattrxref("class")}} attribute, which allows space-separated values, elements can only have one single ID value.

> **Note:** Technically, the value for an `id` attribute may contain any character, except {{glossary("whitespace")}} characters. However, to avoid inadvertent errors, only {{glossary("ASCII")}} letters, digits, `'_'`, and `'-'` should be used and the value for an `id` attribute should start with a letter. For example, `.` has a special meaning in CSS (it acts as a [class selector](/en-US/docs/Web/CSS/Class_selectors)). Unless you are careful to escape it in the CSS, it won't be recognized as part of the value of an `id` attribute. It is easy to forget to do this, resulting in bugs in your code that could be hard to detect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
