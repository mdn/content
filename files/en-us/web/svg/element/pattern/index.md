---
title: <pattern>
slug: Web/SVG/Element/pattern
page-type: svg-element
browser-compat: svg.elements.pattern
---

{{SVGRef}}

The **`<pattern>`** [SVG](/en-US/docs/Web/SVG) element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.

The `<pattern>` is referenced by the {{SVGAttr("fill")}} and/or {{SVGAttr("stroke")}} attributes on other [graphics elements](/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) to fill or stroke those elements with the referenced pattern.

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('Examples', 150, '100%')}}

## Attributes

- {{SVGAttr("height")}}
  - : This attribute determines the height of the pattern tile.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length); _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("href")}}
  - : This attribute reference a template pattern that provides default values for the `<pattern>` attributes.
    _Value type_: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url); _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("patternContentUnits")}}

  - : This attribute defines the coordinate system for the contents of the {{SVGElement("pattern")}}.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox`; _Default value_: `userSpaceOnUse`; _Animatable_: **yes**

    > [!NOTE]
    > This attribute has no effect if a `viewBox` attribute is specified on the `<pattern>` element.

- {{SVGAttr("patternTransform")}}
  - : This attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system.
    _Value type_: **[\<transform-list>](/en-US/docs/Web/SVG/Content_type#transform-list)**; _Default value_: _identity transform_; _Animatable_: **yes**
- {{SVGAttr("patternUnits")}}
  - : This attribute defines the coordinate system for attributes `x`, `y`, `width`, and `height`.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox`; _Default value_: `objectBoundingBox`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : This attribute defines how the SVG fragment must be deformed if it is embedded in a container with a different {{glossary("aspect ratio")}}.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("viewBox")}}
  - : This attribute defines the bound of the SVG viewport for the pattern fragment.
    _Value type_: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : This attribute determines the width of the pattern tile.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : This attribute determines the x coordinate shift of the pattern tile.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

  - : This attribute references a template pattern that provides default values for the `<pattern>` attributes.
    _Value type_: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url); _Default value_: _none_; _Animatable_: **yes**

    > [!NOTE]
    > For browsers implementing `href`, if both `href` and `xlink:href` are set, `xlink:href` will be ignored and only `href` will be used.

- {{SVGAttr("y")}}
  - : This attribute determines the y coordinate shift of the pattern tile.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0`; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
