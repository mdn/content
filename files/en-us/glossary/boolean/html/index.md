---
title: Boolean attribute (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
spec-urls: https://html.spec.whatwg.org/#boolean-attributes
---

{{GlossarySidebar}}

A **boolean attribute** in HTML is an attribute that represents `true` or `false` values. The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

If the attribute is present, it can have one of the following values:
- no value at all, e.g. `attribute`
- the empty string, e.g. `attribute=""`
- attribute's name itself, with no leading or trailing whitespace, e.g. `attribute="attribute"`

> **Note:** The values "true" and "false" are not allowed on boolean attributes. To represent a false value, the attribute has to be omitted altogether.

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

- [Enumerated](/en-US/docs/Glossary/Enumerated)
