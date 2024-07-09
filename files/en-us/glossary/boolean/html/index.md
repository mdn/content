---
title: Boolean attribute (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
spec-urls: https://html.spec.whatwg.org/#boolean-attributes
---

{{GlossarySidebar}}

A **boolean attribute** in {{Glossary("HTML")}} is an attribute that represents `true` or `false` values. If an HTML tag contains a boolean attribute - no matter the value of that attribute - the attribute is set to `true` on that element. If an HTML tag does not contain the attribute, the attribute is set to `false`. However, this is not allowed in XML: XML requires the equals sign followed by the attribute name.

The following code provides examples of different boolean attribute forms in HTML:

```html example-good
<input required />
<!-- is equivalent to -->
<input required="" />
<!-- or -->
<input required="anything" />
```

In XML, attributes without equals sign or value will throw a syntax error:

```xml-nolint example-bad
<tag id />
```

> **Note:** Any presence of a boolean attribute on an element represents `true`, regardless of the attribute's value.

## See also

- [Boolean attributes](/en-US/docs/Web/HTML/Attributes#boolean_attributes)
- Related glossary terms:
  - {{Glossary("Attribute")}}
