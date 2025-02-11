---
title: height
slug: Web/SVG/Attribute/height
page-type: svg-attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-height
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-primitive-height
  - https://drafts.fxtf.org/css-masking-1/#element-attrdef-mask-height
  - https://svgwg.org/svg2-draft/geometry.html#Sizing
  - https://svgwg.org/svg2-draft/pservers.html#PatternElementHeightAttribute
---

{{SVGRef}}

The **`height`** attribute defines the vertical length of an element in the user coordinate system.

You can use this attribute with the following SVG elements:

- {{SVGElement('feBlend')}}
- {{SVGElement('feColorMatrix')}}
- {{SVGElement('feComponentTransfer')}}
- {{SVGElement('feComposite')}}
- {{SVGElement('feConvolveMatrix')}}
- {{SVGElement('feDiffuseLighting')}}
- {{SVGElement('feDisplacementMap')}}
- {{SVGElement('feDropShadow')}}
- {{SVGElement('feFlood')}}
- {{SVGElement('feGaussianBlur')}}
- {{SVGElement('feImage')}}
- {{SVGElement('feMerge')}}
- {{SVGElement('feMorphology')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('feSpecularLighting')}}
- {{SVGElement('feTile')}}
- {{SVGElement('feTurbulence')}}
- {{SVGElement('filter')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('image')}}
- {{SVGElement('mask')}}
- {{SVGElement('pattern')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('use')}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- With a height of 0 or less, nothing will be rendered -->
  <rect y="0" x="0" width="90" height="0" />
  <rect y="0" x="100" width="90" height="60" />
  <rect y="0" x="200" width="90" height="100%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## feBlend

For {{SVGElement('feBlend')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feColorMatrix

For {{SVGElement('feColorMatrix')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feComponentTransfer

For {{SVGElement('feComponentTransfer')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feComposite

For {{SVGElement('feComposite')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feConvolveMatrix

For {{SVGElement('feConvolveMatrix')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDiffuseLighting

For {{SVGElement('feDiffuseLighting')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

For {{SVGElement('feDisplacementMap')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDropShadow

For {{SVGElement('feDropShadow')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFlood

For {{SVGElement('feFlood')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feGaussianBlur

For {{SVGElement('feGaussianBlur')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feImage

For {{SVGElement('feImage')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feMerge

For {{SVGElement('feMerge')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feMorphology

For {{SVGElement('feMorphology')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feOffset

For {{SVGElement('feOffset')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

For {{SVGElement('feSpecularLighting')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feTile

For {{SVGElement('feTile')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feTurbulence

For {{SVGElement('feTurbulence')}}, `height` defines the vertical length for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## filter

For {{SVGElement('filter')}}, `height` defines the vertical length for the rendering area of the filter.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>120%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## foreignObject

For {{SVGElement('foreignObject')}}, `height` defines the vertical length for the rendering area for the referenced document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code> (treated as <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Starting with SVG2, `height` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for `<foreignObject>`.

## image

For {{SVGElement('image')}}, `height` defines the vertical length for the image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code> (treated as the intrinsic height of the image)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Starting with SVG2, `height` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for images.

## mask

For {{SVGElement('mask')}}, `height` defines the vertical length of its area of effect. The exact effect of this attribute is influenced by the {{SVGAttr('maskUnits')}} attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>120%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## pattern

For {{SVGElement('pattern')}}, `height` defines the vertical length of the tile pattern. The exact effect of this attribute is influenced by the {{SVGAttr('patternUnits')}} and {{SVGAttr('patternTransform')}} attributes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
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

## rect

For {{SVGElement('rect')}}, `height` defines the vertical length for the rectangle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code> (treated as <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Starting with SVG2, `height` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for rectangles.

## svg

For {{SVGElement('svg')}}, `height` defines the vertical length for the rendering area of the SVG viewport.

> [!NOTE]
> In an HTML document if both the {{SVGAttr('viewBox')}} and `height` attributes are omitted, [the svg element will be rendered with a height of `150px`](https://svgwg.org/specs/integration/#svg-css-sizing)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code> (treated as <code>100%</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Starting with SVG2, `height` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for `<svg>`.

## use

For {{SVGElement('use')}}, `height` defines the vertical length for the referenced element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code> (treated as <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** `height` has no effect on `use` elements, unless the element referenced has a [viewBox](/en-US/docs/Web/SVG/Attribute/viewBox) - i.e. they only have an effect when `use` refers to a `svg` or `symbol` element.

> [!NOTE]
> Starting with SVG2, `height` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for used elements.

## Specifications

{{Specifications}}

## See also

- CSS {{cssxref("height")}} property
