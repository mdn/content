---
title: <view>
slug: Web/SVG/Element/view
page-type: svg-element
browser-compat: svg.elements.view
---

{{SVGRef}}

The **`<view>`** [SVG](/en-US/docs/Web/SVG) element defines a particular view of an SVG document. A specific view can be displayed by referencing the `<view>` element's [`id`](/en-US/docs/Web/HTML/Global_attributes/id) as the target fragment of a URL.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("preserveAspectRatio")}}
  - : This attribute defines how the SVG fragment must be deformed if it is embedded in a container with a different {{glossary("aspect ratio")}}.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("viewBox")}}
  - : This attribute defines the bound of the SVG viewport for the pattern fragment.
    _Value type_: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : This attribute specifies whether the SVG document can be magnified and panned.
    _Value type_: **disable | magnify** ; _Default value_: magnify; _Animatable_: **no**

## Example

### SVG

```svg
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">

  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

### HTML

```html
<img src="example.svg" alt="three circles" width="300" height="100" />
<br />
<img src="example.svg#three" alt="blue circle" width="100" height="100" />
```

### Result

{{EmbedLiveSample("Example", "85ch", "240px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
