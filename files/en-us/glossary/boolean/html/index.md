---
title: Boolean attribute (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
spec-urls: https://html.spec.whatwg.org/#boolean-attributes
---

{{GlossarySidebar}}

A **boolean attribute** in {{Glossary("HTML")}} is an {{glossary("attribute")}} that represents `true` or `false` values. If an HTML tag contains a boolean attribute - no matter the value of that attribute - the attribute is set to `true` on that element. If an HTML tag does not contain the attribute, the attribute is set to `false`.

If the attribute is present, it can have one of the following values:

- no value at all, e.g. `attribute`
- the empty string, e.g. `attribute=""`
- attribute's name itself, with no leading or trailing whitespace, e.g. `attribute="attribute"`

> **Note:** The strings "true" and "false" are invalid values. To set the attribute to `false`, the attribute should be omitted altogether. Though modern browsers treat _any_ string value as `true`, you should not rely on that behavior.

Here's an example of a HTML boolean attribute `checked`:

```html
<!-- The following checkboxes will be checked on initial rendering -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />

<!-- The following checkbox will not be checked on initial rendering -->
<input type="checkbox" />
```

## See also

- [Boolean attributes](/en-US/docs/Web/HTML/Attributes#boolean_attributes)
- [Boolean attributes](https://html.spec.whatwg.org/#boolean-attributes) in HTML specification
- Related glossary terms:
  - {{Glossary("Attribute")}}
  - {{Glossary("Enumerated", "Enumerated attribute")}}
