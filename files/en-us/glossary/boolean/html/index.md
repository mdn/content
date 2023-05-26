---
title: Boolean attribute (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
---

<section id="Quick_links">
  <ol>
    <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
  </ol>
</section>

A **boolean attribute** in HTML is an attribute that can be either `true` or `false`.

It is worth noticing that a boolean attribute is `true` when it is present, and `false` when it is absent.

Here's an example of a HTML boolean attribute `checked`:

```html
<!-- The following checkboxes will be checked on initial rendering -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
<input type="checkbox" checked="any value" />

<!-- The following checkbox will not be checked on initial rendering -->
<input type="checkbox" />
```

## See also

- [Enumerated](/en-US/docs/Glossary/Enumerated)
