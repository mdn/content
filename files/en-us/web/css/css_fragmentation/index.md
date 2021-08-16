---
title: CSS Fragmentation
slug: Web/CSS/CSS_Fragmentation
tags:
  - CSS
  - CSS Fragmentation
  - Guide
  - NeedsCompatTable
  - NeedsContent
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Fragmentation** is a module of CSS that defines how content is displayed when it is broken (fragmented) across multiple [pages](/en-US/docs/Web/CSS/Paged_Media), regions, or [columns](/en-US/docs/Web/CSS/CSS_Columns).

Fragmentation occurs when an inline box wraps onto multiple lines. It also occurs when a block spans more than one column inside a column layout container, or spans a page break when printed. Each piece of the rendering for the element is called a _fragment_.

## Reference

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## Specifications

| Specification                                | Status                                   | Comment             |
| -------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('CSS3 Fragmentation')}} | {{Spec2('CSS3 Fragmentation')}} | Initial definition. |
