---
title: "ARIA: graphics-object role"
short-title: graphics-object
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-object_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-object
sidebar: accessibilitysidebar
---

> [!NOTE]
> The `graphics-object` role is defined in the [Graphics Accessibility API Mappings(graphics-aam)](https://www.w3.org/TR/graphics-aam-1.0/) specs.
> It's not a part of the core [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.3/).

The `graphics-object` role constitutes a distinct object with semantically meaningful content within a larger graphic.

## Description

The `graphics-object` role identifies an element as a unique, distinct object, often nested inside a [`graphics-document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role) where their relative positioning conveys meaning. It may contain nested sub-components and does not need to be self-contained.

## Examples

```html
<svg
  role="graphics-document"
  aria-label="World map showing major continents"
  viewBox="0 0 900 400">
  <title>Simplified world map</title>
  <g role="graphics-object" aria-label="Asia region">
    <circle cx="700" cy="130" r="120" fill="green" stroke="black" />
    <text x="700" y="137" fill="white" text-anchor="middle">Asia</text>
  </g>
  <g role="graphics-object" aria-label="Europe region">
    <circle cx="400" cy="70" r="50" fill="#344E41" stroke="black" />
    <text x="400" y="77" fill="white" text-anchor="middle">Europe</text>
  </g>
  <g role="graphics-object" aria-label="Africa region">
    <circle cx="400" cy="260" r="100" fill="#C56F3B" stroke="black" />
    <text x="400" y="267" fill="white" text-anchor="middle">Africa</text>
  </g>
  <g role="graphics-object" aria-label="North-America region">
    <circle cx="120" cy="70" r="65" fill="#8A4931" stroke="black" />
    <text x="120" y="77" fill="white" text-anchor="middle">North America</text>
  </g>
  <g role="graphics-object" aria-label="South-America region">
    <circle cx="120" cy="260" r="60" fill="#009698" stroke="black" />
    <text x="120" y="267" fill="white" text-anchor="middle">South America</text>
  </g>
  <g role="graphics-object" aria-label="Australia region">
    <circle cx="760" cy="350" r="50" fill="#e97451" stroke="black" />
    <text x="760" y="357" fill="white" text-anchor="middle">Australia</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 340)}}

## Best practices

### When to use this role

- The `graphics-object` role can be used for distinct, semantically meaningful parts of larger graphical content, such as map regions, chart elements, or diagram components.

### When **NOT** to use this role

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
