---
title: "ARIA: graphics-symbol role"
short-title: graphics-symbol
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-symbol
sidebar: accessibilitysidebar
---

> [!NOTE]
> The `graphics-symbol` role is defined in the [Graphics Accessibility API Mappings(graphics-aam)](https://www.w3.org/TR/graphics-aam-1.0/) specs.
> It's not a part of the core [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.3/).

The `graphics-symbol` role represents a graphical symbol that conveys a simple meaning.

## Description

The `graphics-symbol` role identifies an element as a meaningful, atomic symbol whose children are presentational. Its meaning is more important than its visual appearance. It may be part of a larger graphical structure, such as a map, chart, or diagram.

## Examples

```html
<svg role="graphics-document" aria-label="Parking lot" viewBox="0 0 700 200">
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

### When to use this role

- The `graphics-symbol` role can be used for meaningful, atomic objects.
- When used as a part of structured symbolic language, the [`ariaRoleDescription`](/en-US/docs/Web/API/Element/ariaRoleDescription) property can be used to assign the symbol type, separately from the name and description of the symbol.

### When **NOT** to use this role

- Don't use for decorative graphics. Use `aria-hidden="true"` instead.
- Avoid for complex graphics with internal structure. Use [`graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role) instead.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [`aria-graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [`aria-figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
