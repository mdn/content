---
title: "ARIA: graphics-object role"
short-title: graphics-object
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-object_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-object
sidebar: accessibilitysidebar
---

The `graphics-object` role constitutes a distinct object with semantically meaningful content within a larger graphic.

## Description

The `graphics-object` role identifies an element as a unique, distinct object, often nested inside a [`graphics-document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role). It may contain nested sub-components and does not need to be self-contained.

## Examples

```html
<svg role="graphics-document document" aria-label="Example map">
  <g role="graphics-object group" aria-label="Europe region"></g>
  <g role="graphics-object group" aria-label="Asia region"></g>
</svg>
```

## Accessibility concerns

To ensure backward compatibility with ARIA 1.0 user agents and assistive technologies, include [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) as a fallback role value.

## Best practices

- Use the `graphics-object` role for distinct, semantically meaningful parts of larger graphical content, such as map regions, chart elements, or diagram components.
- When dealing with container elements that represent a collection of separate objects, use [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) or [`list`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) roles instead.
- Avoid assigning this role to grouping elements used purely for styling or layout purposes. In such cases, keep the role as `none` or use `presentation` instead.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [`aria-graphics-document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [`aria-group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
