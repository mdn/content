---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
page-type: svg-attribute
browser-compat: 
- svg.elements.feimage.fetchpriority
- svg.elements.image.fetchpriority
- svg.elements.script.fetchpriority
sidebar: svgref
---
The `fetchpriority` provides a hint of the relative priority to use when fetching an external script. This works the same way as `fetchpriority` for the HTML {{HTMLElement("script", "", "#fetchpriority")}} element.

You can use this attribute with the following SVG elements:

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>high</code> | <code>low</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
  </tbody>
</table>

- `high`
  - : Fetch the external script at a high priority relative to other external scripts.
- `low`
  - : Fetch the external script at a low priority relative to other external scripts.
- `auto`
  - : Don't set a preference for the fetch priority.
    This is the default.
    It is used if no value or an invalid value is set.

## Examples

This example shows how to set an SVG {{SVGelement("script")}} element priority to `high`.

```html
<svg viewBox="0 0 10 10" height="120px" width="120px" xmlns="http://www.w3.org/2000/svg">
  <circle id="normal" cx="5" cy="5" r="4" />
  <script href="./color-change.js" fetchpriority="high" />
</svg>
```

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGelement("script")}} element
- HMTL `<script>` element [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Elements/script#fetchpriority) attribute
