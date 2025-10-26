---
title: "ARIA: graphics-symbol role"
short-title: graphics-symbol
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-symbol
sidebar: accessibilitysidebar
---

The `graphics-symbol` role represents a graphical symbol that conveys a simple meaning.

## Description

The `graphics-symbol` role identifies an element as a meaningful, atomic symbol whose children are presentational. Its meaning is more important than its visual appearance. It may be part of a larger graphical structure, such as a map, chart, or diagram.

## Examples

```html
<g role="graphics-symbol img" aria-label="Sun symbol">
  <circle cx="50" cy="50" r="20"></circle>
</g>
```

## Accessibility concerns

To ensure backward compatibility with ARIA 1.0 user agents and assistive technologies, include [`img`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) as a fallback role value.

## Best practices

- Use the `graphics-symbol` role for meaningful, atomic objects.
- When used as a part of structured symbolic language, the [`ariaRoleDescription`](/en-US/docs/Web/API/Element/ariaRoleDescription/ariaRoleDescription) property can be used to assign the symbol type, separately from the name and description of the symbol.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [`aria-graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [`aria-figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
