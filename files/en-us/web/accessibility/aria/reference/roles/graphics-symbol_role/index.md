---
title: "ARIA: graphics-symbol role"
short-title: graphics-symbol
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role
page-type: aria-role
spec-urls: https://w3c.github.io/graphics-aria/#graphics-symbol
sidebar: accessibilitysidebar
---

The `graphics-symbol` role identifies a graphical object that conveys a simple meaning or category, where the meaning is more important than the particular visual appearance.

> [!NOTE]
> The `graphics-symbol` role is defined in the [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) specification.
> It's not part of the core [WAI-ARIA](https://w3c.github.io/aria/) specification.

## Description

The `graphics-symbol` role identifies an element as a meaningful, atomic symbol that functions as a single unit. It may be part of a larger graphical structure, such as a map, chart, or diagram.

### All descendants are presentational

The children of a `graphics-symbol` are not exposed separately to assistive technologies. Include any meaningful text from its children in the symbol's accessible name.

### Associated WAI-ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : A `graphics-symbol` must have an accessible name. Use `aria-labelledby` to reference a label or `aria-label` to provide one directly.
- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : When used as part of a structured symbolic language, this attribute can name the symbol type separately from the name and description of an individual symbol.

## Examples

Each parking-space symbol combines a rectangle and text into one {{SVGElement("g")}} element. The `graphics-symbol` role makes this combination a single object for assistive technologies, with its meaning supplied by `aria-label`. The outer {{SVGElement("svg")}} provides the graphical document semantics.

```html
<svg aria-label="Parking lot" viewBox="0 0 700 220">
  <title>Parking lot with designated spaces</title>
  <g role="graphics-symbol" aria-label="Available parking space">
    <rect
      x="90"
      y="50"
      width="100"
      height="150"
      fill="grey"
      stroke="blue"
      stroke-width="3" />
    <text
      x="140"
      y="135"
      text-anchor="middle"
      fill="white"
      font-size="35"
      font-weight="bold">
      P
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Reserved parking space">
    <rect
      x="290"
      y="50"
      width="100"
      height="150"
      fill="grey"
      stroke="blue"
      stroke-width="3" />
    <text
      x="340"
      y="135"
      text-anchor="middle"
      fill="white"
      font-size="35"
      font-weight="bold">
      RP
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Unavailable parking space">
    <rect
      x="490"
      y="50"
      width="100"
      height="150"
      fill="grey"
      stroke="blue"
      stroke-width="3" />
    <text
      x="540"
      y="135"
      text-anchor="middle"
      fill="white"
      font-size="35"
      font-weight="bold">
      UP
    </text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 340)}}

## Best practices

Don't use this role for decorative graphics. Use `aria-hidden="true"` instead.

Avoid this role for complex graphics with internal structure. Use [`graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role) instead.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: `graphics-object` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: `figure` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
