---
title: dx
slug: Web/SVG/Attribute/dx
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`dx`** attribute indicates a shift along the x-axis on the position of an element or its content.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('feDropShadow')}}
*   {{SVGElement('feOffset')}}
*   {{SVGElement('glyphRef')}}
*   {{SVGElement('text')}}
*   {{SVGElement('tref')}}
*   {{SVGElement('tspan')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="0"  x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0"   y2="100%" />
  <line x1="60%" x2="60%" y1="0"   y2="100%" />

  <!-- Some reference text -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- The same text with a shift along the x-axis -->
  <text dx="50%" x="10%" y="50%">SVG</text>
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

For {{SVGElement('altGlyph')}}, if it contains a single value, `dx` defines a shift along the x-axis for all alternate glyph.

If there are multiple values, `dx` defines a shift along the x-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

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

For {{SVGElement('feDropShadow')}}, `dx` defines the x offset of the dropped shadow. The unit used to resolve the value of the attribute is set by the {{SVGAttr('primitiveUnits')}} attribute of the {{SVGElement('filter')}} element.

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

For {{SVGElement('feOffset')}}, `dx` defines the x offset of the filter input graphic. The unit used to resolve the value of the attribute is set by the {{SVGAttr('primitiveUnits')}} attribute of the {{SVGElement('filter')}} element.

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

For {{SVGElement('glyphRef')}}, `dx` defines the x offset of the glyph, in the font metric system.

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

For {{SVGElement('text')}}, if it contains a single value, `dx` defines a shift along the x-axis for all glyphs.

If there are multiple values, `dx` defines a shift along the x-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="0"  x2="100%" y1="25%" y2="25%" />
  <line x1="0"  x2="100%" y1="50%" y2="50%" />
  <line x1="0"  x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0"   y2="100%" />
  <line x1="30%" x2="30%" y1="0"   y2="100%" />
  <line x1="60%" x2="60%" y1="0"   y2="100%" />

  <!-- Behaviors change based on the number
       of values in the attributes -->
  <text dx="20%"       x="10%" y="25%">SVG</text>
  <text dx="0 10%"     x="10%" y="50%">SVG</text>
  <text dx="0 10% 20%" x="10%" y="75%">SVG</text>
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

For {{SVGElement('tref')}}, if it contains a single value, `dx` defines a shift along the x-axis for all glyphs.

If there are multiple values, `dx` defines a shift along the x-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

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

For {{SVGElement('tspan')}}, if it contains a single value, `dx` defines a shift along the x-axis for all alternate glyph.

If there are multiple values, `dx` defines a shift along the x-axis for each individual glyph relative to the preceding glyph. If there are less values than glyphs, the remaining glyphs use a value of `0`. If there are more values than glyphs, extra values are ignored.

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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ SpecName('Filters 1.0', '#element-attrdef-fedropshadow-dx', 'dx') }}
      </td>
      <td>{{Spec2('Filters 1.0')}}</td>
      <td>Initial definition for <code>&#x3C;feDropShadow></code></td>
    </tr>
    <tr>
      <td>
        {{ SpecName('Filters 1.0', '#element-attrdef-feoffset-dx', 'dx') }}
      </td>
      <td>{{Spec2('Filters 1.0')}}</td>
      <td>Definition for <code>&#x3C;feOffset></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "text.html#TextElementDXAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Definition for <code>&#x3C;text></code> and <code>&#x3C;tspan></code>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feOffsetDxAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feOffset></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#AltGlyphElementDXAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;altGlyph></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#GlyphRefElementDXAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;glyphRef></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TextElementDXAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;text></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TSpanElementDXAttribute", "dx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Initial definition for <code>&#x3C;tref></code> and
        <code>&#x3C;tspan></code>
      </td>
    </tr>
  </tbody>
</table>
