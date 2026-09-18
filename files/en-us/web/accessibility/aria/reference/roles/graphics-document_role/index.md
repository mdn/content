---
title: "ARIA: graphics-document role"
short-title: graphics-document
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-document_role
page-type: aria-role
spec-urls: https://w3c.github.io/graphics-aria/#graphics-document
sidebar: accessibilitysidebar
---

The `graphics-document` role identifies a type of [`document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) in which the visual appearance or layout of content conveys meaning.

> [!NOTE]
> The `graphics-document` role is defined in the [WAI-ARIA Graphics Module](https://w3c.github.io/graphics-aria/) specification.
> It's not part of the core [WAI-ARIA](https://w3c.github.io/aria/) specification.

## Description

The `graphics-document` role applies to the root element of a graphic whose visual representation, usually in two dimensions, carries semantic meaning. Users are expected primarily to browse this content rather than control an application.

It's typically used for structured, semantically meaningful graphics such as flowcharts, maps, diagrams, and technical drawings.

The `graphics-document` role is distinguished from similar roles as follows:

- Unlike an element with the [`img`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) role, an element with the `graphics-document` role may include child elements with semantic meaning, such as links and other interactive widgets.
- Compared with other [`document`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) types, a `graphics-document` is distinguished by the semantic importance of its visual representation.
- Unlike a [`graphics-object`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role), a `graphics-document` is self-contained: its meaning does not depend on surrounding content, and it provides the context for interpreting its children.

A `graphics-document` can contain another `graphics-document`, such as a bar chart embedded in a map. Each nested document provides its own context for navigation.

When dealing with a single large graphic with discrete regions that can be rearranged without changing its meaning, each region should be separated as a standalone `graphics-document`. You can group these regions using the [`figure`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) role.

### Associated WAI-ARIA roles, states, and properties

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : A `graphics-document` must have an accessible name. Use `aria-labelledby` if a visible label is present, otherwise use `aria-label`. For SVG, a {{SVGElement("title")}} element can also provide the name.

## Examples

This flowchart uses the native {{SVGElement("svg")}} element, for which [SVG-AAM defines `graphics-document` as the default role](https://w3c.github.io/svg-aam/). An explicit `role="graphics-document"` is therefore unnecessary here. The labeled nodes and connections convey the steps and branches of the flowchart.

```html
<svg
  aria-label="User authentication flowchart"
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
  <title>User authentication flowchart</title>
  <desc>
    The user enters credentials, which are checked for validity. Valid
    credentials lead to granted access; invalid credentials lead to denied
    access.
  </desc>
  <g
    id="node-start"
    role="graphics-object"
    aria-label="Start: User enters credentials">
    <rect x="200" y="30" width="100" height="60" fill="green" stroke="black" />
    <text x="250" y="65" fill="white" text-anchor="middle">User login</text>
  </g>
  <g
    id="start-arrow"
    role="graphics-symbol"
    aria-label="After entering credentials, check whether they are valid">
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
    aria-label="Decision: Are the credentials valid?">
    <polygon
      points="250,130 300,160 250,190 200,160"
      fill="yellow"
      stroke="black" />
    <text x="250" y="165" text-anchor="middle">Valid?</text>
  </g>
  <g
    id="grant-arrow"
    role="graphics-symbol"
    aria-label="Yes: If credentials are valid, grant access">
    <line
      x1="280"
      y1="172"
      x2="340"
      y2="220"
      stroke="black"
      stroke-width="1.6"
      marker-end="url(#arrowhead)" />
    <text x="315" y="195" text-anchor="middle">Yes</text>
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
  <g
    id="deny-arrow"
    role="graphics-symbol"
    aria-label="No: If credentials are invalid, deny access">
    <line
      x1="220"
      y1="172"
      x2="170"
      y2="220"
      stroke="black"
      stroke-width="1.6"
      marker-end="url(#arrowhead)" />
    <text x="185" y="195" text-anchor="middle">No</text>
  </g>
  <g id="node-deny" role="graphics-object" aria-label="Error: Deny access">
    <rect x="120" y="220" width="100" height="60" fill="red" stroke="black" />
    <text x="170" y="255" text-anchor="middle">Deny access</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 600, 450)}}

## Best practices

Do not add an explicit `graphics-document` role when the element already provides that role through its native semantics, as {{SVGElement("svg")}} does.

For decorative SVG graphics, use `aria-hidden="true"`. For graphics without meaningful internal structure, use the [`img`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) role with an accessible name. For HTML images, use the native {{HTMLElement("img")}} element with an `alt` attribute.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: `graphics-object` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: `figure` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
