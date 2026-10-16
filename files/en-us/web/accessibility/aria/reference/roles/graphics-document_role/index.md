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

This flowchart uses HTML elements laid out with CSS. The `graphics-document` role identifies the diagram as a graphical document because the arrangement of its nodes and arrows conveys the authentication flow. The `aria-label` attribute supplies its accessible name. Each arrow has a `graphics-symbol` role and a label describing the connection, so the flow can also be understood without seeing the layout.

If this graphic were implemented using {{SVGElement("svg")}} instead, then no `role` declaration would be necessary because [SVG-AAM defines `graphics-document` as the default role](https://w3c.github.io/svg-aam/).

```html
<div
  class="flowchart"
  role="graphics-document"
  aria-label="User authentication flowchart">
  <div
    class="node start"
    role="graphics-object"
    aria-label="User login: Enter credentials">
    User login
  </div>
  <div
    class="arrow next"
    role="graphics-symbol"
    aria-label="After entering credentials, check whether they are valid"></div>
  <div
    class="node decision"
    role="graphics-object"
    aria-label="Valid?: Are the credentials valid?">
    <span>Valid?</span>
  </div>
  <div
    class="arrow yes"
    role="graphics-symbol"
    aria-label="Yes: If credentials are valid, grant access">
    <span>Yes</span>
  </div>
  <div class="node grant" role="graphics-object">Grant access</div>
  <div
    class="arrow no"
    role="graphics-symbol"
    aria-label="No: If credentials are invalid, deny access">
    <span>No</span>
  </div>
  <div class="node deny" role="graphics-object">Deny access</div>
</div>
```

```css
.flowchart {
  position: relative;
  width: 500px;
  height: 300px;
  color: black;
  background: white;
  font-size: large;
}

.node {
  position: absolute;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 100px;
  height: 60px;
  border: 1px solid black;
}

.start {
  left: 200px;
  top: 30px;
  background: #3eca39;
}

.decision {
  left: 200px;
  top: 130px;
  border: none;
  background: black;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}

.decision::before {
  content: "";
  position: absolute;
  inset: 1px 2px;
  background: #cac539;
  clip-path: inherit;
}

.decision span {
  position: relative;
}

.grant {
  left: 290px;
  top: 220px;
  background: #86ca39;
}

.deny {
  left: 120px;
  top: 220px;
  color: white;
  background: #ca393e;
}

.arrow {
  position: absolute;
  height: 1.6px;
  background: black;
  transform-origin: left center;
}

.arrow::after {
  content: "";
  position: absolute;
  right: 0;
  top: -2.2px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 10px solid black;
}

.next {
  left: 250px;
  top: 90px;
  width: 40px;
  transform: rotate(90deg);
}

.yes {
  left: 280px;
  top: 172px;
  width: 77px;
  transform: rotate(39deg);
}

.no {
  left: 220px;
  top: 172px;
  width: 69px;
  transform: rotate(136deg);
}

.arrow span {
  position: absolute;
  left: 25px;
}

.yes span {
  top: -22px;
  transform: rotate(-39deg);
}

.no span {
  top: 8px;
  transform: rotate(-136deg);
}
```

{{EmbedLiveSample('Examples', 600, 350)}}

## Best practices

Do not add an explicit `graphics-document` role when the element already provides that role through its native semantics, as {{SVGElement("svg")}} does.

For decorative SVG graphics, use `aria-hidden="true"`. For graphics without meaningful internal structure, use the [`img`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) role with an accessible name. For HTML images, use the native {{HTMLElement("img")}} element with an `alt` attribute.

## Specifications

{{Specifications}}

## See also

- The {{SVGElement('svg')}} element
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA: `graphics-symbol` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
- [ARIA: `graphics-object` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: `figure` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Notes on Using ARIA in HTML](https://w3c.github.io/using-aria/)
