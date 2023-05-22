---
title: "y"
slug: Web/SVG/Attribute/y
page-type: svg-attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-y
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fespotlight-y
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fepointlight-y
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-primitive-y
  - https://drafts.fxtf.org/css-masking-1/#element-attrdef-mask-y
  - https://svgwg.org/svg2-draft/geometry.html#Y
  - https://svgwg.org/svg2-draft/pservers.html#PatternElementYAttribute
  - https://svgwg.org/svg2-draft/text.html#TextElementYAttribute
---

{{SVGRef}}

The **`y`** attribute defines a y-axis coordinate in the user coordinate system.

You can use this attribute with the following SVG elements:

- {{SVGElement("cursor")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("filter")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("mask")}}
- {{SVGElement("pattern")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <rect y="20" x="20" width="60" height="60" />
  <rect y="120" x="20" width="60" height="60" />
  <rect y="220" x="20" width="60" height="60" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## feBlend

For {{SVGElement('feBlend')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feColorMatrix

For {{SVGElement('feColorMatrix')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feComponentTransfer

For {{SVGElement('feComponentTransfer')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feComposite

For {{SVGElement('feComposite')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feConvolveMatrix

For {{SVGElement('feConvolveMatrix')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDiffuseLighting

For {{SVGElement('feDiffuseLighting')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

For {{SVGElement('feDisplacementMap')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDropShadow

For {{SVGElement('feDropShadow')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFlood

For {{SVGElement('feFlood')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFuncA

For {{SVGElement('feFuncA')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFuncB

For {{SVGElement('feFuncB')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFuncG

For {{SVGElement('feFuncG')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feFuncR

For {{SVGElement('feFuncR')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feGaussianBlur

For {{SVGElement('feGaussianBlur')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feImage

For {{SVGElement('feImage')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feMerge

For {{SVGElement('feMerge')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feMergeNode

For {{SVGElement('feMergeNode')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feMorphology

For {{SVGElement('feMorphology')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feOffset

For {{SVGElement('feOffset')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## fePointLight

For {{SVGElement('fePointLight')}}, `y` defines the y location for the light source in the coordinate system defined by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

## feSpecularLighting

For {{SVGElement('feSpecularLighting')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feSpotLight

For {{SVGElement('feSpotLight')}}, `y` defines the y location for the light source in the coordinate system defined by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
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

## feTile

For {{SVGElement('feTile')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feTurbulence

For {{SVGElement('feTurbulence')}}, `y` defines the minimum y coordinate for the rendering area of the primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## filter

For {{SVGElement('filter')}}, `y` defines the y coordinate of the upper left corner for the rendering area of the filter.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## foreignObject

For {{SVGElement('foreignObject')}}, `y` defines the y coordinate of the upper left corner of its viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `y` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for `<foreignObject>`.

## glyphRef

> **Warning:** As of SVG2 {{SVGElement('glyphRef')}} is deprecated and shouldn't be used.

For {{SVGElement('glyphRef')}}, `y` defines the y-axis coordinate of the glyph.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## image

For {{SVGElement('image')}}, `y` defines the y coordinate of the upper left corner of the image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `y` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for images.

## mask

For {{SVGElement('mask')}}, `y` defines the y coordinate of the upper left corner of its area of effect. The exact effect of this attribute is influenced by the {{SVGAttr('maskUnits')}} attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## pattern

For {{SVGElement('pattern')}}, `y` defines the y coordinate of the upper left corner of the tile pattern. The exact effect of this attribute is influenced by the {{SVGAttr('patternUnits')}} and {{SVGAttr('patternTransform')}} attributes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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

For {{SVGElement('rect')}}, `y` defines the y coordinate of the upper left corner of the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `y` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for rectangles.

## svg

For {{SVGElement('svg')}}, `y` defines the y coordinate of the upper left corner of its viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `y` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for `<svg>`.

## text

For {{SVGElement('text')}}, if it contains a single value, `y` defines the y coordinate where the _content text position_ must be placed. The _content text position_ is usually a point on the baseline of the first line of text. The exact _content text position_ is influenced by other properties, such as {{SVGAttr('text-anchor')}} or {{cssxref('direction')}}.

If it contains multiple values, `y` defines the y coordinate of each individual glyph from the text. If there are fewer values than glyphs, the remaining glyphs are placed in line with the last positioned glyph. If there are more values than glyphs, the extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of (<strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
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

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- horizontal line to materialized the text base line -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="60%" x2="100%" y2="60%" />
  <line x1="0" y1="80%" x2="100%" y2="80%" />

  <!-- vertical line to materialized the x positioning -->
  <line x1="5%" y1="0" x2="5%" y2="100%" />
  <line x1="55%" y1="0" x2="55%" y2="100%" />

  <!-- y with a single value -->
  <text y="40%" x="5%">SVG</text>

  <!-- y with multiple values -->
  <text y="40%,60%,80%" x="55%">SVG</text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> **Warning:** As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, if it contains a single value, `y` defines the y coordinate where the _content text position_ must be placed. The _content text position_ is usually a point on the baseline of the first line of text. The exact _content text position_ is influenced by other properties, such as {{SVGAttr('text-anchor')}} or {{cssxref('direction')}}.

If it contains multiple values, `y` defines the y coordinate of each individual glyph from the text. If there are fewer values than glyphs, the remaining glyphs are placed in line with the last positioned glyph. If there are more values than glyphs, the extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of (<strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
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

## tspan

For {{SVGElement('tspan')}}, if it contains a single value, `y` defines the y coordinate where the _content text position_ must be placed. The _content text position_ is usually a point on the baseline of the first line of text. The exact _content text position_ is influenced by other properties, such as {{SVGAttr('text-anchor')}} or {{cssxref('direction')}}.

If it contains multiple values, `y` defines the y coordinate of each individual glyph from the text. If there are fewer values than glyphs, the remaining glyphs are placed in line with the last positioned glyph. If there are more values than glyphs, the extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of (<strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- horizontal line to materialized the text base line -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="60%" x2="100%" y2="60%" />
  <line x1="0" y1="80%" x2="100%" y2="80%" />

  <!-- vertical line to materialized the x positioning -->
  <line x1="5%" y1="0" x2="5%" y2="100%" />
  <line x1="55%" y1="0" x2="55%" y2="100%" />

  <text>
    <!-- y with a single value -->
    <tspan y="40%" x="5%">SVG</tspan>

    <!-- y with multiple values -->
    <tspan y="40%,60%,80%" x="55%">SVG</tspan>
  </text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('tspan', '100%', 100)}}

## use

For {{SVGElement('use')}}, `y` defines the y coordinate of the upper left corner of the referenced element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** Starting with SVG2, `y` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for used elements.

## Specifications

{{Specifications}}
