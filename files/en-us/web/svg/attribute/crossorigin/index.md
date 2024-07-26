---
title: "SVG attribute: crossorigin"
slug: Web/SVG/Attribute/crossorigin
page-type: svg-attribute
browser-compat: svg.elements.image.crossorigin
---

{{SVGRef}}

The crossorigin attribute, valid on the {{SVGElement("image")}} and {{SVGElement("feImage")}} elements, provides support for configuration of the Cross-Origin Resource Sharing ([CORS](/en-US/docs/Web/HTTP/CORS)) requests for the element's fetched data.

This table shows possible keywords and their meaning:

| Keyword           | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| `anonymous`       | Client CORS requests for this element will have the credentials flag set to 'same-origin'.                        |
| `use-credentials` | Client CORS requests for this element will have the credentials flag set to 'include'.                            |
| `""`              | Setting the attribute name to an empty value, like `crossorigin` or `crossorigin=""`, is the same as `anonymous`. |

It follows the same processing rules as the HTML attribute [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin).

## Example

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    crossorigin="use-credentials" />
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
