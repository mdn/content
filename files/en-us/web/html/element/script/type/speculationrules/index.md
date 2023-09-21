---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
page-type: html-attribute-value
browser-compat: html.elements.script.type.speculationrules
---

{{HTMLSidebar}}

The **`speculationrules`** value of the [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of the [`<script>` element](/en-US/docs/Web/HTML/Element/script) indicates that the body of the element contains speculation rules.

Speculation rules take the form of a JSON object that determine what resources should be prefetched or prerendered by the browser. This is part of the [speculation rules API](/en-US/docs/Web/Performance/Speculative_loading#the_speculation_rules_api).

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

The `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, and `referrerpolicy` attributes must not be specified.

### Exceptions

xxx

## Description

xxx

Explain the JSON syntax, and how it works

For the requirements field, see https://github.com/WICG/nav-speculation/blob/main/triggers.md#requirements.
Domenic says: The requirements feature of speculation rules is fairly special and needs some care when documenting. Because it hides IP addresses by using a Google-owned proxy, by default it only works for Google-controlled referrers (since in that case, sending the URLs of the destination to Google is not an additional privacy leak). If someone uses this feature on a non-Google-owned site, then it only works for users which turn on "Enhanced preloading" in chrome://settings/preloading, which is not the default. Users without this setting turned on will have their prefetches canceled, since the requirement cannot be met.

This is fairly Chrome-specific information, so I'm not sure how best to document it on MDN. But it's important we not document this feature as something anyone can and should use, as that will lead to lots of failed prefetches.

Explain static inclusion in HTML, versus dynamic insertion via JS

explain CSP integration

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- xxx
