---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.spellcheck
---

{{HTMLSidebar("Global_attributes")}}

The **`spellcheck`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute defines whether the element may be checked for spelling errors.

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

It may have the following values:

- empty string or `true`, which indicates that the element should be, if possible, checked for spelling errors;
- `false`, which indicates that the element should not be checked for spelling errors.

If this attribute is not set, its default value is element-type and browser-defined. This default value may also be _inherited_, which means that the element content will be checked for spelling errors only if its nearest ancestor has a _spellcheck_ state of `true`.

This attribute is merely a hint for the browser: browsers are not required to check for spelling errors. Typically non-editable elements are not checked for spelling errors, even if the `spellcheck` attribute is set to `true` and the browser supports spellchecking.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
