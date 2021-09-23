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

*   [alignment-baseline](#attr-alignment-baseline)
*   [baseline-shift](#attr-baseline-shift)
*   [clip](#attr-clip)
*   [clip-path](#attr-clip-path)
*   [clip-rule](#attr-clip-rule)
*   [color](#attr-color)
*   [color-interpolation](#attr-color-interpolation)
*   [color-interpolation-filters](#attr-color-interpolation-filters)
*   [color-profile](#attr-color-profile)
*   [color-rendering](#attr-color-rendering)
*   [cursor](#attr-cursor)
*   [d](#attr-d)
*   [direction](#attr-direction)
*   [display](#attr-display)
*   [dominant-baseline](#attr-dominant-baseline)
*   [enable-background](#attr-enable-background)
*   [fill](#attr-fill)
*   [fill-opacity](#attr-fill-opacity)
*   [fill-rule](#attr-fill-rule)
*   [filter](#attr-filter)
*   [flood-color](#attr-flood-color)
*   [flood-opacity](#attr-flood-opacity)
*   [font-family](#attr-font-family)
*   [font-size](#attr-font-size)
*   [font-size-adjust](#attr-font-size-adjust)
*   [font-stretch](#attr-font-stretch)
*   [font-style](#attr-font-style)
*   [font-variant](#attr-font-variant)
*   [font-weight](#attr-font-weight)
*   [glyph-orientation-horizontal](#attr-glyph-orientation-horizontal)
*   [glyph-orientation-vertical](#attr-glyph-orientation-vertical)
*   [image-rendering](#attr-image-rendering)
*   [kerning](#attr-kerning)
*   [letter-spacing](#attr-letter-spacing)
*   [lighting-color](#attr-lighting-color)
*   [marker-end](#attr-marker-end)
*   [marker-mid](#attr-marker-mid)
*   [marker-start](#attr-marker-start)
*   [mask](#attr-mask)
*   [opacity](#attr-opacity)
*   [overflow](#attr-overflow)
*   [pointer-events](#attr-pointer-events)
*   [shape-rendering](#attr-shape-rendering)
*   [solid-color](#attr-solid-color)
*   [solid-opacity](#attr-solid-opacity)
*   [stop-color](#attr-stop-color)
*   [stop-opacity](#attr-stop-opacity)
*   [stroke](#attr-stroke)
*   [stroke-dasharray](#attr-stroke-dasharray)
*   [stroke-dashoffset](#attr-stroke-dashoffset)
*   [stroke-linecap](#attr-stroke-linecap)
*   [stroke-linejoin](#attr-stroke-linejoin)
*   [stroke-miterlimit](#attr-stroke-miterlimit)
*   [stroke-opacity](#attr-stroke-opacity)
*   [stroke-width](#attr-stroke-width)
*   [text-anchor](#attr-text-anchor)
*   [text-decoration](#attr-text-decoration)
*   [text-rendering](#attr-text-rendering)
*   [transform](#attr-transform)
*   [unicode-bidi](#attr-unicode-bidi)
*   [vector-effect](#attr-vector-effect)
*   [visibility](#attr-visibility)
*   [word-spacing](#attr-word-spacing)
*   [writing-mode](#attr-writing-mode)

## Attributes

*   {{SVGAttr('alignment-baseline')}}
    *   : It specifies how an object is aligned along the font baseline with respect to its parent.
        *Value*: **`auto`**|`baseline`|`before-edge`|`text-before-edge`|`middle`|`central`|`after-edge`|`text-after-edge`|`ideographic`|`alphabetic`|`hanging`|`mathematical`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('baseline-shift')}}
    *   : It allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element.
        *Value*: **`auto`**|`baseline`|`super`|`sub`|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('clip')}} {{deprecated_inline}}
    *   : It defines what portion of an element is visible.
        *Value*: **`auto`**|{{cssxref("shape")}}|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('clip-path')}}
    *   : It binds the element it is applied to with a given {{SVGElement('clipPath')}} element.
        *Value*: **`none`**|[\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('clip-rule')}}
    *   : It indicates how to determine what side of a path is inside a shape in order to know how a {{SVGElement('clipPath')}} should clip its target.
        *Value*: **`nonezero`**|`evenodd`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('color')}}
    *   : It provides a potential indirect value (`currentcolor`) for the `fill`, `stroke`, `stop-color`, `flood-color` and `lighting-color` presentation attributes.
        *Value*: [\<color>](/en-US/docs/Web/SVG/Content_type#color)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('color-interpolation')}}
    *   : It specifies the color space for gradient interpolations, color animations, and alpha compositing.
        *Value*: `auto`|**`sRGB`**|`linearRGB`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('color-interpolation-filters')}}
    *   : It specifies the color space for imaging operations performed via filter effects.
        *Value*: `auto`|`sRGB`|**`linearRGB`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('color-profile')}} {{deprecated_inline}}
    *   : It defines which color profile a raster image included through the {{SVGElement('image')}} element should use.
        *Value*: `auto`|`sRGB`|`linearRGB`|[\<name>](/en-US/docs/Web/SVG/Content_type#name)|[\<IRI>](/en-US/docs/Web/SVG/Content_type#iri)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('color-rendering')}}
    *   : It provides a hint to the browser about how to optimize its color interpolation and compositing operations.
        *Value*: **`auto`**|`optimizeSpeed`|`optimizeQuality`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('cursor')}}
    *   : It specifies the mouse cursor displayed when the mouse pointer is over an element.
        *Value*: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|[\<keywords>](/en-US/docs/Web/CSS/cursor#values)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('d')}}
    *   : It defines a path to be drawn.
        *Value*: [path()](/en-US/docs/Web/CSS/path\(\))|`none`
*   {{SVGAttr('direction')}}
    *   : It specifies the base writing direction of text.
        *Value*: **`ltr`**|`rtl`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('display')}}
    *   : It allows to control the rendering of graphical or container elements.
        *Value*: see css {{cssxref('display')}}; *Animatable*: **Yes**
*   {{SVGAttr('dominant-baseline')}}
    *   : It defines the baseline used to align the box’s text and inline-level contents.
        *Value*: `auto`|`text-bottom`|`alphabetic`|`ideographic`|`middle`|`central`| `mathematical`|`hanging`|`text-top`; *Animatable*: **Yes**
*   {{SVGAttr('enable-background')}} {{deprecated_inline}}
    *   : It tells the browser how to manage the accumulation of the background image.
        *Value*: **`accumulate`**|`new`|`inherit`; *Animatable*: **No**
*   {{SVGAttr('fill')}}
    *   : It defines the color of the inside of the graphical element it applies to.
        *Value*: [\<paint>](/en-US/docs/Web/SVG/Content_type#paint); *Animatable*: **Yes**
*   {{SVGAttr('fill-opacity')}}
    *   : It specifies the opacity of the color or the content the current object is filled with.
        *Value*: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); *Animatable*: **Yes**
*   {{SVGAttr('fill-rule')}}
    *   : It indicates how to determine what side of a path is inside a shape.
        *Value*: **`nonzero`**|`evenodd`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('filter')}}
    *   : It defines the filter effects defined by the {{SVGElement('filter')}} element that shall be applied to its element.
        *Value*: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('flood-color')}}
    *   : It indicates what color to use to flood the current filter primitive subregion defined through the {{SVGElement('feFlood')}} or {{SVGElement('feDropShadow')}} element.
        *Value*: [\<color>](/en-US/docs/Web/SVG/Content_type#color); *Animatable*: **Yes**
*   {{SVGAttr('flood-opacity')}}
    *   : It indicates the opacity value to use across the current filter primitive subregion defined through the {{SVGElement('feFlood')}} or {{SVGElement('feDropShadow')}} element.
        *Value*: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); *Animatable*: **Yes**
*   {{SVGAttr('font-family')}}
    *   : It indicates which font family will be used to render the text of the element.
        *Value*: see css {{cssxref('font-family')}}; *Animatable*: **Yes**
*   {{SVGAttr('font-size')}}
    *   : It specifies the size of the font.
        *Value*: see css {{cssxref('font-size')}}; *Animatable*: **Yes**
*   {{SVGAttr('font-size-adjust')}}
    *   : It specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters.
        *Value*: [\<number>](/en-US/docs/Web/SVG/Content_type#number)|**`none`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('font-stretch')}}
    *   : It selects a normal, condensed, or expanded face from a font.
        *Value*: see css {{cssxref('font-stretch')}}; *Animatable*: **Yes**
*   {{SVGAttr('font-style')}}
    *   : It specifies whether a font should be styled with a normal, italic, or oblique face from its {{SVGAttr('font-family')}}.
        *Value*: **`normal`**|`italic`|`oblique`; *Animatable*: **Yes**
*   {{SVGAttr('font-variant')}}
    *   : It specifies whether a font should be used with some of their variation such as small caps or ligatures.
        *Value*: see css {{cssxref('font-variant')}}; *Animatable*: **Yes**
*   {{SVGAttr('font-weight')}}
    *   : It specifies the weight (or boldness) of the font.
        *Value*: **`normal`**|`bold`|`lighter`|`bolder`|`100`|`200`|`300`|`400`|`500`|`600`|`700`|`800`|`900`; *Animatable*: **Yes**
*   {{SVGAttr('glyph-orientation-horizontal')}} {{deprecated_inline}}
    *   : It controls glyph orientation when the inline-progression-direction is horizontal.
        *Value*: [\<angle>](/en-US/docs/Web/SVG/Content_type#angle)|`inherit`; *Animatable*: **No**
*   {{SVGAttr('glyph-orientation-vertical')}} {{deprecated_inline}}
    *   : It controls glyph orientation when the inline-progression-direction is vertical.
        *Value*: **`auto`**|[\<angle>](/en-US/docs/Web/SVG/Content_type#angle)|`inherit`; *Animatable*: **No**
*   {{SVGAttr('image-rendering')}}
    *   : It provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.
        *Value*: **`auto`**|`optimizeQuality`|`optimizeSpeed`; *Animatable*: **Yes**
*   {{SVGAttr('kerning')}} {{deprecated_inline}}
    *   : It indicates whether the browser should adjust inter-glyph spacing.
        *Value*: **`auto`**|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('letter-spacing')}}
    *   : It controls spacing between text characters.
        *Value*: **`normal`**|[\<length>](/en-US/docs/Web/SVG/Content_type#length)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('lighting-color')}}
    *   : It defines the color of the light source for filter primitives elements {{SVGElement('feDiffuseLighting')}} and {{SVGElement('feSpecularLighting')}}.
        *Value*: [\<color>](/en-US/docs/Web/SVG/Content_type#color); *Animatable*: **Yes**
*   {{SVGAttr('marker-end')}}
    *   : It defines the arrowhead or polymarker that will be drawn at the final vertex of the given {{SVGElement('path')}} element or basic shape.
        *Value*: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('marker-mid')}}
    *   : It defines the arrowhead or polymarker that will be drawn at every vertex other than the first and last vertex of the given {{SVGElement('path')}} element or basic shape.
        *Value*: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('marker-start')}}
    *   : It defines the arrowhead or polymarker that will be drawn at the first vertex of the given {{SVGElement('path')}} element or basic shape.
        *Value*: [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('mask')}}
    *   : It alters the visibility of an element by either masking or clipping the image at specific points.
        *Value*: see css {{cssxref('mask')}}; *Animatable*: **Yes**
*   {{SVGAttr('opacity')}}
    *   : It specifies the transparency of an object or a group of objects.
        *Value*: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value); *Animatable*: **Yes**
*   {{SVGAttr('overflow')}}
    *   : Specifies whether the content of a block-level element is clipped when it overflows the element's box.
        *Value*: **`visible`**|`hidden|scroll`|`auto`|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('pointer-events')}}
    *   : Defines whether or when an element may be the target of a mouse event.
        *Value*: `bounding-box`|**`visiblePainted`**|`visibleFil`|`visibleStroke`|`visible` |`painted`|`fill`|`stroke`|`all`|`none`; *Animatable*: **Yes**
*   {{SVGAttr('shape-rendering')}}
    *   : Hints about what tradeoffs to make as the browser renders {{SVGElement('path')}} element or basic shapes.
        *Value*: **`auto`**|`optimizeSpeed`|`crispEdges`|`geometricPrecision` |`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('solid-color')}}
    *   : -
        *Value*:; *Animatable*: **-**
*   {{SVGAttr('solid-opacity')}}
    *   : -
        *Value*:; *Animatable*: **-**
*   {{SVGAttr('stop-color')}}
    *   : Indicates what color to use at that gradient stop.
        *Value*: `currentcolor`|[\<color>](/en-US/docs/Web/SVG/Content_type#color)|[\<icccolor>](/en-US/docs/Web/SVG/Content_type#icccolor)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('stop-opacity')}}
    *   : Defines the opacity of a given gradient stop.
        *Value*: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value)|`inherit`; *Animatable*: **Yes**
*   {{SVGAttr('stroke')}}
    *   : Defines the color used to paint the outline of the shape.
        *Value*: [\<paint>](/en-US/docs/Web/SVG/Content_type#paint); *Animatable*: **Yes**
*   {{SVGAttr('stroke-dasharray')}}
    *   : Defines the pattern of dashes and gaps used to paint the outline of the shape.
        *Value*: `none`|`<dasharray>`; *Animatable*: **Yes**
*   {{SVGAttr('stroke-dashoffset')}}
    *   : Defines an offset on the rendering of the associated dash array.
        *Value*: [\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)|[\<length>](/en-US/docs/Web/SVG/Content_type#length); *Animatable*: **Yes**
*   **{{SVGAttr('stroke-linecap')}}**
    *   : Defines the shape to be used at the end of open subpaths when they are stroked.
        *Value*: **`butt`**|`round`|`square`; *Animatable*: **Yes**
*   **{{SVGAttr('stroke-linejoin')}}**
    *   : Defines the shape to be used at the corners of paths when they are stroked.
        *Value*: `arcs`|`bevel`|**`miter`**|`miter-clip`|`round`; *Animatable*: **Yes**
*   **{{SVGAttr('stroke-miterlimit')}}**
    *   : Defines a limit on the ratio of the miter length to the {{ SVGAttr("stroke-width") }} used to draw a miter join.
        *Value*: [\<number>](/en-US/docs/Web/SVG/Content_type#number); *Animatable*: **Yes**
*   **{{SVGAttr('stroke-opacity')}}**
    *   : Defines the opacity of the stroke of a shape.
        *Value*: [\<opacity-value>](/en-US/docs/Web/SVG/Content_type#opacity_value)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#paint); *Animatable*: **Yes**
*   **{{SVGAttr('stroke-width')}}**
    *   : Defines the width of the stroke to be applied to the shape.
        *Value*: [\<length>](/en-US/docs/Web/SVG/Content_type#length)|[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage); *Animatable*: **Yes**
*   **{{SVGAttr('text-anchor')}}**
    *   : Defines the vertical alignment a string of text.
        *Value*: `start`|`middle`|`end`|**`inherit`**; *Animatable*: **Yes**
*   **{{SVGAttr('text-decoration')}}**
    *   : Sets the appearance of decorative lines on text.
        *Value*: `none`|`underline`|`overline`|`line-through`|`blink`|**`inherit`**; *Animatable*: **Yes**
*   **{{SVGAttr('text-rendering')}}**
    *   : Hints about what tradeoffs to make as the browser renders text.
        *Value*: **`auto`**|`optimizeSpeed`|`optimizeLegibility`|`geometricPrecision`|`inherit`; *Animatable*: **Yes**
*   **{{SVGAttr('transform')}}**
    *   : Defines a list of transform definitions that are applied to an element and the element's children.
        *Value*: [\<transform-list>](/en-US/docs/Web/SVG/Content_type#transform-list); *Animatable*: **Yes**
*   **{{SVGAttr('unicode-bidi')}}**
    *   : -
        *Value*:; *Animatable*: **-**
*   **{{SVGAttr('vector-effect')}}**
    *   : Specifies the vector effect to use when drawing an object.
        *Value*: `default`|`non-scaling-stroke`|`inherit`|`<uri>`; *Animatable*: **Yes**
*   **{{SVGAttr('visibility')}}**
    *   : Lets you control the visibility of graphical elements.
        *Value*: **`visible`**|`hidden`|`collapse`|`inherit`; *Animatable*: **Yes**
*   **{{SVGAttr('word-spacing')}}**
    *   : Specifies spacing behavior between words.
        *Value*: [\<length>](/en-US/docs/Web/SVG/Content_type#length)|**`inherit`**; *Animatable*: **Yes**
*   **{{SVGAttr('writing-mode')}}**
    *   : Specifies whether the initial inline-progression-direction for a {{SVGElement('text')}} element shall be left-to-right, right-to-left, or top-to-bottom.
        *Value*: **`lr-tb`**|`rl-tb`|`tb-rl`|`lr`|`rl`|`tb`|`inherit`; *Animatable*: **Yes**

## Browser compatibility

{{Compat}}
