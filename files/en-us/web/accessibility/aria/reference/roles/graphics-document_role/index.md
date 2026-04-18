---
title: "ARIA: graphics-document role"
short-title: graphics-document
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-document_role
page-type: aria-role
spec-urls: https://www.w3.org/TR/graphics-aria-1.0/#graphics-document
sidebar: accessibilitysidebar
---

> [!NOTE]
> The `graphics-document` role is defined in the [Graphics Accessibility API Mappings(graphics-aam)](https://www.w3.org/TR/graphics-aam-1.0/) specs.
> It's not a part of the core [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.3/).

The `graphics-document` role identifies a structured document whose structure is defined by its visual layout or appearance.

## Description

The `graphics-document` role identifies a region of the page where the user browses graphical content rather than interacting with or manipulating web content. Unlike standard web content, which is typically consumed linearly, graphics documents rely on two-dimensional positioning to communicate meaning.

It's typically used for complex, semantically meaningful graphics such as flowcharts, maps, and diagrams.

### How it differs from similar roles

- `img`
  - : Unlike an image, a `graphics-document` role may include structured, semantic content such as links and interactive regions.
- `document`
  - : The `graphics-document` role emphasizes the visual layout and relationships, rather than textual or structural content.
- `graphics-object`
  - : The `graphics-document` role is self-contained and retains its meaning when separated from the surrounding content.

## Examples

```html
<svg
  role="graphics-document"
  aria-label="User Authentication Flowchart"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 300">
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="6"
      refX="9"
      refY="3"
      orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="black" />
    </marker>
  </defs>
  <title>System Authentication decision flow diagram</title>
  <desc>
    A flowchart showing the System Authentication decision flow with decision
    points
  </desc>
  <g
    id="node-start"
    role="graphics-object"
    aria-label="Start: User Enters credentials">
    <rect x="200" y="30" width="100" height="60" fill="green" stroke="black" />
    <text x="250" y="65" fill="white" text-anchor="middle">User login</text>
  </g>
  <g id="start-arrow">
    <line
      id="arrow-line"
      x1="250"
      y1="90"
      x2="250"
      y2="130"
      stroke="black"
      stroke-width="1.6"
      marker-end="url(#arrowhead)" />
  </g>
  <g
    id="decision"
    role="graphics-object"
    aria-label="Decision: Credentials Match?">
    <polygon
      points="250,130 300,160 250,190 200,160"
      fill="yellow"
      stroke="black" />
    <text x="250" y="165" text-anchor="middle">Is Valid?</text>
  </g>
  <g id="grant-arrow">
    <line
      x1="280"
      y1="172"
      x2="340"
      y2="220"
      stroke="black"
      stroke-width="1.6"
      marker-end="url(#arrowhead)" />
  </g>
  <g id="node-grant" role="graphics-object" aria-label="Success: Grant access">
    <rect
      x="290"
      y="220"
      width="100"
      height="60"
      fill="lightgreen"
      stroke="black" />
    <text x="340" y="255" text-anchor="middle">Grant access</text>
  </g>
  <g id="deny-arrow">
    <line
      x1="220"
      y1="172"
      x2="170"
      y2="220"
      stroke="black"
      stroke-width="1.6"
      marker-end="url(#arrowhead)" />
  </g>
  <g id="node-deny" role="graphics-object" aria-label="Error: Deny access">
    <rect x="120" y="220" width="100" height="60" fill="red" stroke="black" />
    <text x="170" y="255" text-anchor="middle">Deny access</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 450)}}

## Best practices

### When to use this role

- The `graphics-document` role can be used for structured, self-contained graphical content such as charts, maps, diagrams, technical drawings, blueprints, and instructional graphics.
- Nested `graphics-document` roles are applicable for complex structures, such as a map containing regional charts.
- When dealing with a single large graphical content with discrete or unrelated regions, each region should be separated as a standalone `graphics-document`. Alternatively, you can combine them using [`figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) role.

### When **NOT** to use this role

- Most simple `SVG` graphics don't need this role.
- When dealing with decorative graphics should use `aria-hidden="true"`.
- Single images without complex internal structure should use `role="img"` with `aria-label`.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [`ARIA in HTML`](https://w3c.github.io/html-aria/)
- [`aria-graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [`aria-figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
