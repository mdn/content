---
title: "ARIA: graphics-document role"
short-title: graphics-document
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-document_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-document
sidebar: accessibilitysidebar
---

The `graphics-document` role identifies a structured document whose structure is defined by its visual layout or appearance.

## Description

The `graphics-document` role is used to identify a region of the page where the user explores or browses graphical content rather than interacting with or manipulating web content. It's typically used for complex, semantically meaningful graphics such as charts, maps, and diagrams.

### How it differs from similar roles

- `img`
  - : Unlike an image, a `graphics-document` role may include structured, semantic content such as links and interactive regions.
- `document`
  - : The `graphics-document` role emphasizes the visual layout and relationships, rather than textual or structural content.
- `graphics-object`
  - : The `graphics-document` role is self-contained and retains its meaning when separated from the surrounding content.

## Examples

```html
<svg role="graphics-document document" aria-label="Example map">
  <g
    role="graphics-object"
    aria-label="Map compass"
    transform="translate(50,50)"></g>
</svg>
```

## Accessibility concerns

To ensure backward compatibility with ARIA 1.0 user agents and assistive technologies, include the [`document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) role as a fallback value.

## Best practices

- Use `graphics-document` role for structured, self-contained graphical content such as charts, maps, diagrams, technical drawings, blueprints, and instructional graphics.
- Nested `graphics-document` roles are applicable for complex structures, such as a map containing regional charts.
- When dealing with a single large graphical content with discrete or unrelated regions, each region should be separated as a standalone `graphics-document`. Alternatively, you can combine them using [`figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) rule.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [`ARIA in HTML`](https://w3c.github.io/html-aria/)
- [`aria-graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [`aria-figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
