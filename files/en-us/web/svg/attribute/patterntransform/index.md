---
title: patternTransform
slug: Web/SVG/Attribute/patternTransform
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.pattern.patternTransform
---
{{SVGRef}}

The **`patternTransform`** attribute defines a list of [transform definitions](/en-US/docs/Web/SVG/Attribute/transform#transform_functions) that are applied to a pattern tile.

You can use this attribute with the following SVG elements:

*   {{SVGElement('pattern')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Apply a transform on the tile -->
  <pattern id="p1" width=".25" height=".25"
           patternTransform="rotate(20)
                             skewX(30)
                             scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Apply the transformed pattern tile -->
  <rect x="10" y="10" width="80" height="80"
        fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 300)}}

## pattern

For {{SVGElement('pattern')}}, `patternTransform` defines a list of [transform definitions](/en-US/docs/Web/SVG/Attribute/transform#transform_functions) that are applied to a pattern tile.

> **Note:** As of SVG2, it is also allowed to use the CSS {{ cssxref('transform') }} property. However, the current state of implementation isn't very good. For backward compatibility reason, it is highly suggested to keep using the `patternTransform` attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute/transform#transform_functions"
          >&#x3C;transform-list></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Identity transform</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### Transform functions

To know more about the definition of transform functions, see the {{ SVGAttr("transform") }} attribute definition.

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
        {{SpecName("SVG2", "pservers.html#PatternElementPatternTransformAttribute", "patternTransform")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#PatternElementPatternTransformAttribute", "patternTransform")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
