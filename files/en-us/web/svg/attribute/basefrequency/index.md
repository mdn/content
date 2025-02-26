---
title: baseFrequency
slug: Web/SVG/Attribute/baseFrequency
page-type: svg-attribute
browser-compat: svg.elements.feTurbulence.baseFrequency
---

{{SVGRef}}

The **`baseFrequency`** attribute represents the base frequency parameter for the noise function of the {{SVGElement("feTurbulence")}} filter primitive.

You can use this attribute with the following SVG elements:

- {{SVGElement("feTurbulence")}}

## Example

### Example 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example 1", "220", "220")}}

### Example 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example 2", "220", "250")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`

  - : If two numbers are provided, the first one represents the base frequency in the horizontal direction and the second one the base frequency in the vertical direction. If one number is provided, then that value is used for both x and y.

    Negative values are forbidden.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
