---
title: "ARIA: graphics-object role"
short-title: graphics-object
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-object_role
page-type: aria-role
spec-urls: https://w3c.github.io/graphics-aria/#graphics-object
sidebar: accessibilitysidebar
---

The `graphics-object` role identifies a section of a [`graphics-document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role) that represents a distinct object or sub-component with semantic meaning.

> [!NOTE]
> The `graphics-object` role is defined in the [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) specification.
> It's not part of the core [WAI-ARIA](https://w3c.github.io/aria/) specification.

## Description

The `graphics-object` role identifies a distinct part of a larger graphic, such as a region on a map, a bar in a chart, or a node in a diagram. A `graphics-object` may itself contain nested sub-components. Unlike a [`graphics-document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role), it does not need to be self-contained and does not introduce a separate navigation context.

### Associated WAI-ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : An accessible name is optional and can also be derived from the element's contents. Use `aria-labelledby` to reference a label or `aria-label` to provide one directly.

## Examples

In this simplified map, each continent is a distinct object containing a shape and a text label. The `graphics-object` role identifies each {{SVGElement("g")}} as a meaningful part of the map while preserving its child content. A group used only to position or style elements would not need this role. The outer {{SVGElement("svg")}} provides the graphical document semantics.

```html
<svg aria-label="World map showing major continents" viewBox="0 0 900 420">
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
    <text x="400" y="267" fill="black" text-anchor="middle">Africa</text>
  </g>
  <g role="graphics-object" aria-label="North America region">
    <circle cx="120" cy="70" r="65" fill="#8A4931" stroke="black" />
    <text x="120" y="77" fill="white" text-anchor="middle">North America</text>
  </g>
  <g role="graphics-object" aria-label="South America region">
    <circle cx="120" cy="260" r="60" fill="#009698" stroke="black" />
    <text x="120" y="267" fill="black" text-anchor="middle">South America</text>
  </g>
  <g role="graphics-object" aria-label="Australia region">
    <circle cx="760" cy="350" r="50" fill="#e97451" stroke="black" />
    <text x="760" y="357" fill="black" text-anchor="middle">Australia</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 340)}}

## Best practices

When dealing with container elements that represent a collection of disconnected objects, use [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) or [`list`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) roles instead.

Avoid assigning this role to grouping elements used purely for styling or layout purposes. In such cases, omit the role or use `none` or `presentation` instead.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: `graphics-document` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA: `group` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
