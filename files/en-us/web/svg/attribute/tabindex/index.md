---
title: tabindex
slug: Web/SVG/Attribute/tabindex
page-type: svg-attribute
browser-compat: svg.global_attributes.tabindex
---

{{SVGRef}}

The **`tabindex`** attribute allows you to control whether an element is focusable and to define the relative order of the element for the purposes of sequential focus navigation.

You can use this attribute with any SVG element.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="15" tabindex="0" />
  <circle cx="60" cy="160" r="30" tabindex="0" />
  <circle cx="160" cy="60" r="30" tabindex="0" />
  <circle cx="160" cy="160" r="60" tabindex="0" />
</svg>
```

{{EmbedLiveSample("Example", "260", "260")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer">valid integer</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- valid integer
  - : Relative order of the element for the purposes of sequential focus navigation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML `tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)
