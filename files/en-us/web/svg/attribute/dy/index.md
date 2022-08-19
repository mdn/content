---
title: dy
slug: Web/SVG/Attribute/dy
tags:
  - SVG
  - SVG Attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fedropshadow-dy
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-feoffset-dy
  - https://svgwg.org/svg2-draft/text.html#TextElementDYAttribute
---
{{SVGRef}}

The **`dy`** attribute indicates a shift along the y-axis on the position of an element or its content.

You can use this attribute with the following SVG elements:

- {{SVGElement('altGlyph')}}
- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('glyphRef')}}
- {{SVGElement('text')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="10%" x2="10%"  y1="0"   y2="100%" />
  <line x1="0"   x2="100%" y1="30%" y2="30%"  />
  <line x1="0"   x2="100%" y1="80%" y2="80%"  />

  <!-- Some reference text -->
  <text x="10%" y="30%" fill="grey">SVG</text>

  <!-- The same text with a shift along the y-axis -->
  <text dy="50%" x="10%" y="30%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample("Example", '100%', 200)}}

## altGlyph

> **Warning:** As of SVG2 {{SVGElement('altGlyph')}} is deprecated and shouldn't be used.

For {{SVGElement('altGlyph')}}, if it contains a single value, `dy` defines a shift along the y-axis for all alternate glyph.

If there are multiple values, `dy` defines a shift along the y-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
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

## feDropShadow

For {{SVGElement('feDropShadow')}}, `dy` defines the y offset of the dropped shadow. The unit used to resolve the value of the attribute is set by the {{SVGAttr('primitiveUnits')}} attribute of the {{SVGElement('filter')}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feOffset

For {{SVGElement('feOffset')}}, `dy` defines the y offset of the filter input graphic. The unit used to resolve the value of the attribute is set by the {{SVGAttr('primitiveUnits')}} attribute of the {{SVGElement('filter')}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
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

## glyphRef

> **Warning:** As of SVG2 {{SVGElement('glyphRef')}} is deprecated and shouldn't be used.

For {{SVGElement('glyphRef')}}, `dy` defines the y offset of the glyph, in the font metric system.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
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

## text

For {{SVGElement('text')}}, if it contains a single value, `dy` defines a shift along the y-axis for all glyphs.

If there are multiple values, `dy` defines a shift along the y-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
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

### Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Horizontal lines -->
  <line x1="0" x2="100%" y1="30" y2="30" />
  <line x1="0" x2="100%" y1="40" y2="40" />
  <line x1="0" x2="100%" y1="50" y2="50" />
  <line x1="0" x2="100%" y1="60" y2="60" />

  <!-- Vertical lines -->
  <line x1="10" x2="10" y1="0" y2="100%" />
  <line x1="50" x2="50" y1="0" y2="100%" />
  <line x1="90" x2="90" y1="0" y2="100%" />

  <!-- Behaviors change based on the number of values in the attributes -->
  <text dy="20"      x="10" y="30">SVG</text>
  <text dy="0 10"    x="50" y="30">SVG</text>
  <text dy="0 10 20" x="90" y="30">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> **Warning:** As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, if it contains a single value, `dy` defines a shift along the y-axis for all glyphs.

If there are multiple values, `dy` defines a shift along the y-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
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

## tspan

For {{SVGElement('tspan')}}, if it contains a single value, `dy` defines a shift along the y-axis for all alternate glyph.

If there are multiple values, `dy` defines a shift along the y-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        List of
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
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

## Specifications

{{Specifications}}
