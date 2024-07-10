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
<!-- and -->
<input required="required" />
```

> **Note:** Though setting the value of a boolean attribute to anything may be parsed as true across different browsers, it's suggested to follow the [specification](https://html.spec.whatwg.org/#boolean-attributes) to set its value to either be the empty string or a value that is an ASCII case-insensitive match for the attribute's canonical name, with no leading or trailing whitespace.

In XML, attributes without equals sign or value will throw a syntax error:

```xml-nolint example-bad
<tag id />
```

> **Note:** Any presence of a boolean attribute on an element represents `true`, regardless of the attribute's value. To set the attribute to `false`, you should just omit the attribute altogether.

## See also

- [Boolean attributes](/en-US/docs/Web/HTML/Attributes#boolean_attributes)
- [Boolean attributes](https://html.spec.whatwg.org/#boolean-attributes) in HTML specification
- Related glossary terms:
  - {{Glossary("Attribute")}}
