---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
page-type: svg-attribute
browser-compat:
  - svg.elements.feImage.fetchpriority
  - svg.elements.image.fetchpriority
  - svg.elements.script.fetchpriority
sidebar: svgref
---

The `fetchpriority` attribute provides a hint to the browser about the relative priority to use when fetching an external resource. This works the same way as the `fetchpriority` attribute for the HTML {{HTMLElement("img", "", "#fetchpriority")}} and {{HTMLElement("script", "", "#fetchpriority")}} elements.

You can use this attribute with the following SVG elements:

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>high</code> | <code>low</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
  </tbody>
</table>

- `high`
  - : Fetches the external resource at a high priority relative to other external resources.
- `low`
  - : Fetches the external resource at a low priority relative to other external resources.
- `auto`
  - : Doesn't set a preference for the fetch priority.
    It is used if no value or an invalid value is set.
    This is the default.

## Examples

This example shows how to set an SVG {{SVGelement("script")}} element priority to `high`.

```html
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="normal" cx="5" cy="5" r="4" />
  <script href="./color-change.js" fetchpriority="high"></script>
</svg>
```

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGelement("script")}} element
- HTML `<script>` element's [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Elements/script#fetchpriority) attribute
