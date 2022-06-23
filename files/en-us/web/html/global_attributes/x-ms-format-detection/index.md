---
title: x-ms-format-detection
slug: Web/HTML/Global_attributes/x-ms-format-detection
tags:
  - Attribute
  - HTML
  - HTML:Microsoft Extensions
  - Non-standard
  - Reference
  - x-ms-format-detection
---
{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

The [`x-ms-format-detection`](<https://docs.microsoft.com/previous-versions/dn337007(v%3Dvs.85)>) attribute determines whether data formats within the element's text, like phone numbers, are automatically converted to followable links.

Existing links, such as ones with the `tel:` scheme, are unaffected.

> **Note:** Links created through format detection do not appear in the DOM.

{{Non-standard_inline}} This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```html
<html x-ms-format-detection="none">
```

## Value

- `all`
  - : All supported data formats are detected.
- `none`
  - : Format detection is turned off.
- `phone`
  - : Phone number patterns are autolinked.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
- [Safari Supported Meta Tags](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)
