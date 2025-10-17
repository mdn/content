---
title: autofocus
slug: Web/SVG/Reference/Attribute/autofocus
page-type: svg-attribute
browser-compat: svg.global_attributes.autofocus
sidebar: svgref
---

The **`autofocus`** global SVG attribute defines a focusable element to be focused after it's connected to a document. The attribute has no effect if the element is not already focusable.

> [!NOTE]
> The `autofocus` attribute has an HTML counterpart: [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus)

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>[boolean attribute](/en-US/docs/Glossary/Boolean/HTML)</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>(none)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the [HTML `autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute.

## Accessibility concerns

Automatically focusing an SVG can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When autofocus is assigned, screen-readers "teleport" their user to the focusable element without warning them beforehand.

Use careful consideration for accessibility when applying the `autofocus` attribute. Automatically focusing on an element can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the {{glossary("accessible name")}} of the element receiving focus, the screen reader will not announce anything before the element that may provide more context, and the sighted user on a small device will equally miss the context created by the preceding content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("tabindex")}} attribute
- HTML [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) property
- {{domxref("SVGElement/autofocus")}} property
