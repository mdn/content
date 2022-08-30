---
title: SVG Presentation Attributes
slug: Web/SVG/Attribute/Presentation
tags:
  - Attribute
  - Beginner
  - Draft
  - Reference
  - SVG
browser-compat: svg.attributes.presentation
---
SVG presentation attributes are CSS properties that can be used as attributes on SVG elements.

- [alignment-baseline](#alignment-baseline)
- [baseline-shift](#baseline-shift)
- [clip](#clip)
- [clip-path](#clip-path)
- [clip-rule](#clip-rule)
- [color](#color)
- [color-interpolation](#color-interpolation)
- [color-interpolation-filters](#color-interpolation-filters)
- [color-profile](#color-profile)
- [color-rendering](#color-rendering)
- [cursor](#cursor)
- [d](#d)
- [direction](#direction)
- [display](#display)
- [dominant-baseline](#dominant-baseline)
- [enable-background](#enable-background)
- [fill](#fill)
- [fill-opacity](#fill-opacity)
- [fill-rule](#fill-rule)
- [filter](#filter)
- [flood-color](#flood-color)
- [flood-opacity](#flood-opacity)
- [font-family](#font-family)
- [font-size](#font-size)
- [font-size-adjust](#font-size-adjust)
- [font-stretch](#font-stretch)
- [font-style](#font-style)
- [font-variant](#font-variant)
- [font-weight](#font-weight)
- [glyph-orientation-horizontal](#glyph-orientation-horizontal)
- [glyph-orientation-vertical](#glyph-orientation-vertical)
- [image-rendering](#image-rendering)
- [kerning](#kerning)
- [letter-spacing](#letter-spacing)
- [lighting-color](#lighting-color)
- [marker-end](#marker-end)
- [marker-mid](#marker-mid)
- [marker-start](#marker-start)
- [mask](#mask)
- [opacity](#opacity)
- [overflow](#overflow)
- [pointer-events](#pointer-events)
- [shape-rendering](#shape-rendering)
- [solid-color](#solid-color)
- [solid-opacity](#solid-opacity)
- [stop-color](#stop-color)
- [stop-opacity](#stop-opacity)
- [stroke](#stroke)
- [stroke-dasharray](#stroke-dasharray)
- [stroke-dashoffset](#stroke-dashoffset)
- [stroke-linecap](#stroke-linecap)
- [stroke-linejoin](#stroke-linejoin)
- [stroke-miterlimit](#stroke-miterlimit)
- [stroke-opacity](#stroke-opacity)
- [stroke-width](#stroke-width)
- [text-anchor](#text-anchor)
- [text-decoration](#text-decoration)
- [text-rendering](#text-rendering)
- [transform](#transform)
- [unicode-bidi](#unicode-bidi)
- [vector-effect](#vector-effect)
- [visibility](#visibility)
- [word-spacing](#word-spacing)
- [writing-mode](#writing-mode)

## Attributes

- {{SVGAttr('alignment-baseline')}}
  - : It specifies how an object is aligned along the font baseline with respect to its parent.
    _Value_: **`auto`**|`baseline`|`before-edge`|`text-before-edge`|`middle`|`central`|`after-edge`|`text-after-edge`|`ideographic`|`alphabetic`|`hanging`|`mathematical`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('baseline-shift')}}
  - : It allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element.
    _Value_: **`auto`**|`baseline`|`super`|`sub`|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('clip')}} {{deprecated_inline}}
  - : It defines what portion of an element is visible.
    _Value_: **`auto`**|{{cssxref("shape")}}|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('clip-path')}}
  - : It binds the element it is applied to with a given {{SVGElement('clipPath')}} element.
    _Value_: **`none`**|[\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('clip-rule')}}
  - : It indicates how to determine what side of a path is inside a shape in order to know how a {{SVGElement('clipPath')}} should clip its target.
    _Value_: **`nonezero`**|`evenodd`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('color')}}
  - : It provides a potential indirect value (`currentcolor`) for the `fill`, `stroke`, `stop-color`, `flood-color` and `lighting-color` presentation attributes.
    _Value_: [\<color>](/en-US/docs/Web/SVG/Content_type#color)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('color-interpolation')}}
  - : It specifies the color space for gradient interpolations, color animations, and alpha compositing.
    _Value_: `auto`|**`sRGB`**|`linearRGB`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('color-interpolation-filters')}}
  - : It specifies the color space for imaging operations performed via filter effects.
    _Value_: `auto`|`sRGB`|**`linearRGB`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('color-profile')}} {{deprecated_inline}}
  - : It defines which color profile a raster image included through the {{SVGElement('image')}} element should use.
    _Value_: `auto`|`sRGB`|`linearRGB`|[\<name>](/en-US/docs/Web/SVG/Content_type#name)|[\<IRI>](/en-US/docs/Web/SVG/Content_type#iri)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('color-rendering')}}
  - : It provides a hint to the browser about how to optimize its color interpolation and compositing operations.
    _Value_: **`auto`**|`optimizeSpeed`|`optimizeQuality`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('cursor')}}
  - : It specifies the mouse cursor displayed when the mouse pointer is over an element.
    _Value_: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|[\<keywords>](/en-US/docs/Web/CSS/cursor#values)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('d')}}
  - : It defines a path to be drawn.
    _Value_: [path()](/en-US/docs/Web/CSS/path\(\))|`none`
- {{SVGAttr('direction')}}
  - : It specifies the base writing direction of text.
    _Value_: **`ltr`**|`rtl`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('display')}}
  - : It allows to control the rendering of graphical or container elements.
    _Value_: see css {{cssxref('display')}}; _Animatable_: **Yes**
- {{SVGAttr('dominant-baseline')}}
  - : It defines the baseline used to align the box's text and inline-level contents.
    _Value_: `auto`|`text-bottom`|`alphabetic`|`ideographic`|`middle`|`central`| `mathematical`|`hanging`|`text-top`; _Animatable_: **Yes**
- {{SVGAttr('enable-background')}} {{deprecated_inline}}
  - : It tells the browser how to manage the accumulation of the background image.
    _Value_: **`accumulate`**|`new`|`inherit`; _Animatable_: **No**
- {{SVGAttr('fill')}}
  - : It defines the color of the inside of the graphical element it applies to.
    _Value_: [\<paint>](/en-US/docs/Web/SVG/Content_type#paint); _Animatable_: **Yes**
- {{SVGAttr('fill-opacity')}}
  - : It specifies the opacity of the color or the content the current object is filled with.
    _Value_: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); _Animatable_: **Yes**
- {{SVGAttr('fill-rule')}}
  - : It indicates how to determine what side of a path is inside a shape.
    _Value_: **`nonzero`**|`evenodd`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('filter')}}
  - : It defines the filter effects defined by the {{SVGElement('filter')}} element that shall be applied to its element.
    _Value_: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('flood-color')}}
  - : It indicates what color to use to flood the current filter primitive subregion defined through the {{SVGElement('feFlood')}} or {{SVGElement('feDropShadow')}} element.
    _Value_: [\<color>](/en-US/docs/Web/SVG/Content_type#color); _Animatable_: **Yes**
- {{SVGAttr('flood-opacity')}}
  - : It indicates the opacity value to use across the current filter primitive subregion defined through the {{SVGElement('feFlood')}} or {{SVGElement('feDropShadow')}} element.
    _Value_: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); _Animatable_: **Yes**
- {{SVGAttr('font-family')}}
  - : It indicates which font family will be used to render the text of the element.
    _Value_: see css {{cssxref('font-family')}}; _Animatable_: **Yes**
- {{SVGAttr('font-size')}}
  - : It specifies the size of the font.
    _Value_: see css {{cssxref('font-size')}}; _Animatable_: **Yes**
- {{SVGAttr('font-size-adjust')}}
  - : It specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters.
    _Value_: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|**`none`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('font-stretch')}}
  - : It selects a normal, condensed, or expanded face from a font.
    _Value_: see css {{cssxref('font-stretch')}}; _Animatable_: **Yes**
- {{SVGAttr('font-style')}}
  - : It specifies whether a font should be styled with a normal, italic, or oblique face from its {{SVGAttr('font-family')}}.
    _Value_: **`normal`**|`italic`|`oblique`; _Animatable_: **Yes**
- {{SVGAttr('font-variant')}}
  - : It specifies whether a font should be used with some of their variation such as small caps or ligatures.
    _Value_: see css {{cssxref('font-variant')}}; _Animatable_: **Yes**
- {{SVGAttr('font-weight')}}
  - : It specifies the weight (or boldness) of the font.
    _Value_: **`normal`**|`bold`|`lighter`|`bolder`|`100`|`200`|`300`|`400`|`500`|`600`|`700`|`800`|`900`; _Animatable_: **Yes**
- {{SVGAttr('glyph-orientation-horizontal')}} {{deprecated_inline}}
  - : It controls glyph orientation when the inline-progression-direction is horizontal.
    _Value_: [\<angle>](/en-US/docs/Web/SVG/Content_type#angle)|`inherit`; _Animatable_: **No**
- {{SVGAttr('glyph-orientation-vertical')}} {{deprecated_inline}}
  - : It controls glyph orientation when the inline-progression-direction is vertical.
    _Value_: **`auto`**|[\<angle>](/en-US/docs/Web/SVG/Content_type#angle)|`inherit`; _Animatable_: **No**
- {{SVGAttr('image-rendering')}}
  - : It provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.
    _Value_: **`auto`**|`optimizeQuality`|`optimizeSpeed`; _Animatable_: **Yes**
- {{SVGAttr('kerning')}} {{deprecated_inline}}
  - : It indicates whether the browser should adjust inter-glyph spacing.
    _Value_: **`auto`**|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('letter-spacing')}}
  - : It controls spacing between text characters.
    _Value_: **`normal`**|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('lighting-color')}}
  - : It defines the color of the light source for filter primitives elements {{SVGElement('feDiffuseLighting')}} and {{SVGElement('feSpecularLighting')}}.
    _Value_: [\<color>](/en-US/docs/Web/SVG/Content_type#color); _Animatable_: **Yes**
- {{SVGAttr('marker-end')}}
  - : It defines the arrowhead or polymarker that will be drawn at the final vertex of the given {{SVGElement('path')}} element or basic shape.
    _Value_: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('marker-mid')}}
  - : It defines the arrowhead or polymarker that will be drawn at every vertex other than the first and last vertex of the given {{SVGElement('path')}} element or basic shape.
    _Value_: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('marker-start')}}
  - : It defines the arrowhead or polymarker that will be drawn at the first vertex of the given {{SVGElement('path')}} element or basic shape.
    _Value_: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('mask')}}
  - : It alters the visibility of an element by either masking or clipping the image at specific points.
    _Value_: see css {{cssxref('mask')}}; _Animatable_: **Yes**
- {{SVGAttr('opacity')}}
  - : It specifies the transparency of an object or a group of objects.
    _Value_: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value); _Animatable_: **Yes**
- {{SVGAttr('overflow')}}
  - : Specifies whether the content of a block-level element is clipped when it overflows the element's box.
    _Value_: **`visible`**|`hidden|scroll`|`auto`|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('pointer-events')}}
  - : Defines whether or when an element may be the target of a mouse event.
    _Value_: `bounding-box`|**`visiblePainted`**|`visibleFil`|`visibleStroke`|`visible` |`painted`|`fill`|`stroke`|`all`|`none`; _Animatable_: **Yes**
- {{SVGAttr('shape-rendering')}}
  - : Hints about what tradeoffs to make as the browser renders {{SVGElement('path')}} element or basic shapes.
    _Value_: **`auto`**|`optimizeSpeed`|`crispEdges`|`geometricPrecision` |`inherit`; _Animatable_: **Yes**
- {{SVGAttr('solid-color')}}
  - : -
    _Value_:; _Animatable_: **-**
- {{SVGAttr('solid-opacity')}}
  - : -
    _Value_:; _Animatable_: **-**
- {{SVGAttr('stop-color')}}
  - : Indicates what color to use at that gradient stop.
    _Value_: `currentcolor`|[\<color>](/en-US/docs/Web/SVG/Content_type#color)|[\<icccolor>](/en-US/docs/Web/SVG/Content_type#icccolor)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('stop-opacity')}}
  - : Defines the opacity of a given gradient stop.
    _Value_: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value)|`inherit`; _Animatable_: **Yes**
- {{SVGAttr('stroke')}}
  - : Defines the color used to paint the outline of the shape.
    _Value_: [\<paint>](/en-US/docs/Web/SVG/Content_type#paint); _Animatable_: **Yes**
- {{SVGAttr('stroke-dasharray')}}
  - : Defines the pattern of dashes and gaps used to paint the outline of the shape.
    _Value_: `none`|`<dasharray>`; _Animatable_: **Yes**
- {{SVGAttr('stroke-dashoffset')}}
  - : Defines an offset on the rendering of the associated dash array.
    _Value_: [\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)|[\<length>](/en-US/docs/Web/SVG/Content_type#length); _Animatable_: **Yes**
- **{{SVGAttr('stroke-linecap')}}**
  - : Defines the shape to be used at the end of open subpaths when they are stroked.
    _Value_: **`butt`**|`round`|`square`; _Animatable_: **Yes**
- **{{SVGAttr('stroke-linejoin')}}**
  - : Defines the shape to be used at the corners of paths when they are stroked.
    _Value_: `arcs`|`bevel`|**`miter`**|`miter-clip`|`round`; _Animatable_: **Yes**
- **{{SVGAttr('stroke-miterlimit')}}**
  - : Defines a limit on the ratio of the miter length to the {{ SVGAttr("stroke-width") }} used to draw a miter join.
    _Value_: [\<number>](/en-US/docs/Web/SVG/Content_type#number); _Animatable_: **Yes**
- **{{SVGAttr('stroke-opacity')}}**
  - : Defines the opacity of the stroke of a shape.
    _Value_: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#paint); _Animatable_: **Yes**
- **{{SVGAttr('stroke-width')}}**
  - : Defines the width of the stroke to be applied to the shape.
    _Value_: [\<length>](/en-US/docs/Web/SVG/Content_type#length)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); _Animatable_: **Yes**
- **{{SVGAttr('text-anchor')}}**
  - : Defines the vertical alignment a string of text.
    _Value_: `start`|`middle`|`end`|**`inherit`**; _Animatable_: **Yes**
- **{{SVGAttr('text-decoration')}}**
  - : Sets the appearance of decorative lines on text.
    _Value_: `none`|`underline`|`overline`|`line-through`|`blink`|**`inherit`**; _Animatable_: **Yes**
- **{{SVGAttr('text-rendering')}}**
  - : Hints about what tradeoffs to make as the browser renders text.
    _Value_: **`auto`**|`optimizeSpeed`|`optimizeLegibility`|`geometricPrecision`|`inherit`; _Animatable_: **Yes**
- **{{SVGAttr('transform')}}**
  - : Defines a list of transform definitions that are applied to an element and the element's children.
    _Value_: [\<transform-list>](/en-US/docs/Web/SVG/Content_type#transform-list); _Animatable_: **Yes**
- **{{SVGAttr('unicode-bidi')}}**
  - : -
    _Value_:; _Animatable_: **-**
- **{{SVGAttr('vector-effect')}}**
  - : Specifies the vector effect to use when drawing an object.
    _Value_: `default`|`non-scaling-stroke`|`inherit`|`<uri>`; _Animatable_: **Yes**
- **{{SVGAttr('visibility')}}**
  - : Lets you control the visibility of graphical elements.
    _Value_: **`visible`**|`hidden`|`collapse`|`inherit`; _Animatable_: **Yes**
- **{{SVGAttr('word-spacing')}}**
  - : Specifies spacing behavior between words.
    _Value_: [\<length>](/en-US/docs/Web/SVG/Content_type#length)|**`inherit`**; _Animatable_: **Yes**
- **{{SVGAttr('writing-mode')}}**
  - : Specifies whether the initial inline-progression-direction for a {{SVGElement('text')}} element shall be left-to-right, right-to-left, or top-to-bottom.
    _Value_: **`lr-tb`**|`rl-tb`|`tb-rl`|`lr`|`rl`|`tb`|`inherit`; _Animatable_: **Yes**

## Browser compatibility

{{Compat}}
