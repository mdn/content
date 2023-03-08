---
title: requiredFeatures
slug: Web/SVG/Attribute/requiredFeatures
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.conditional_processing.requiredFeatures
---

{{SVGRef}}{{Deprecated_Header}}

The **`requiredFeatures`** attribute takes a list of feature strings, with the individual strings separated by white space. It determines whether or not all of the named features are supported by the browser; if all of them are supported, the attribute evaluates to `true` end the element is rendered; otherwise, the attribute evaluates to `false` and the current element and its children are skipped and thus will not be rendered. This provides a way to design SVG that gracefully falls back when features aren't available.

If the attribute is not present, then its implicit evaluated value is `true`. If a null string or empty string value is given to attribute `requiredFeatures`, the attribute is evaluate to `false`.

`requiredFeatures` is often used in conjunction with the {{SVGElement("switch")}} element. If `requiredFeatures` is used in other situations, it represents a simple switch on the given element whether to render the element or not.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("altGlyph")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("cursor")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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

text {
  fill: white;
}
```

```html
<svg viewBox="0 0 250 45" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect fill="forestgreen" x="10" y="10" height="25" width="230" />
    <text x="20" y="27">requiredFeatures supported</text>
  </g>
  <g requiredFeatures="">
    <rect fill="crimson" x="10" y="10" height="25" width="230" />
    <text x="20" y="27">requiredFeatures not supported</text>
  </g>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-features></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <code>true</code> if not defined, <code>false</code> if null or empty
        string as value
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<list-of-features>`
  - : This is a list of feature strings, separated using white space. Determines whether all of the named _features_ are supported by the browser. See [Feature strings](#feature_strings) below for a list of allowed values.

## Feature strings

The following are the feature strings for the `requiredFeatures` attribute. These same feature strings apply to the [hasFeature](/en-US/docs/DOM/DOMImplementation.hasFeature) method call that is part of the SVG DOM's support for the {{domxref("DOMImplementation")}} interface. In some cases the feature strings map directly to a set of attributes, properties or elements, in others they represent some functionality of the browser. Note that the format and naming for feature strings changed from SVG 1.0 to SVG 1.1. The SVG 1.0 feature strings are not listed here but can be found in the [SVG Specification](https://www.w3.org/TR/SVG/feature.html). Some browser support SVG 1.0 Feature strings for compatibility reasons. However, the SVG 1.0 feature strings are considered deprecated.

- `http://www.w3.org/TR/SVG11/feature#SVG`

  - : At least one of the following feature is supported:

    - `http://www.w3.org/TR/SVG11/feature#SVG-static`
    - `http://www.w3.org/TR/SVG11/feature#SVG-animation`
    - `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM`

  - : At least one of the following feature is supported:

    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-static`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-animation`
    - `http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic`

- `http://www.w3.org/TR/SVG11/feature#SVG-static`

  - : The browser supports all the following features:

    - `http://www.w3.org/TR/SVG11/feature#CoreAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Structure`
    - `http://www.w3.org/TR/SVG11/feature#ContainerAttribute`
    - `http://www.w3.org/TR/SVG11/feature#ConditionalProcessing`
    - `http://www.w3.org/TR/SVG11/feature#Image`
    - `http://www.w3.org/TR/SVG11/feature#Style`
    - `http://www.w3.org/TR/SVG11/feature#ViewportAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Shape`
    - `http://www.w3.org/TR/SVG11/feature#Text`
    - `http://www.w3.org/TR/SVG11/feature#PaintAttribute`
    - `http://www.w3.org/TR/SVG11/feature#OpacityAttribute`
    - `http://www.w3.org/TR/SVG11/feature#GraphicsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Marker`
    - `http://www.w3.org/TR/SVG11/feature#ColorProfile`
    - `http://www.w3.org/TR/SVG11/feature#Gradient`
    - `http://www.w3.org/TR/SVG11/feature#Pattern`
    - `http://www.w3.org/TR/SVG11/feature#Clip`
    - `http://www.w3.org/TR/SVG11/feature#Mask`
    - `http://www.w3.org/TR/SVG11/feature#Filter`
    - `http://www.w3.org/TR/SVG11/feature#XlinkAttribute`
    - `http://www.w3.org/TR/SVG11/feature#Font`
    - `http://www.w3.org/TR/SVG11/feature#Extensibility`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM-static`
  - : The browser supports all DOM interfaces and methods to the language features for `http://www.w3.org/TR/SVG11/feature#SVG-static`.
- `http://www.w3.org/TR/SVG11/feature#SVG-animation`
  - : The browser supports all of the language features from `http://www.w3.org/TR/SVG11/feature#SVG-static` plus the feature `http://www.w3.org/TR/SVG11/feature#Animation`.
- `http://www.w3.org/TR/SVG11/feature#SVGDOM-animation`
  - : The browser supports all DOM interfaces and methods corresponding to the language features for `http://www.w3.org/TR/SVG11/feature#SVG-animation`.
- `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`

  - : The browser supports all of the language features from `http://www.w3.org/TR/SVG11/feature#SVG-animation` plus the following features:

    - `http://www.w3.org/TR/SVG11/feature#Hyperlinking`
    - `http://www.w3.org/TR/SVG11/feature#Scripting`
    - `http://www.w3.org/TR/SVG11/feature#View`
    - `http://www.w3.org/TR/SVG11/feature#Cursor`
    - `http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute`
    - `http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute`

- `http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic`
  - : The browser supports all DOM interfaces and methods to the language features for `http://www.w3.org/TR/SVG11/feature#SVG-dynamic`.
- `http://www.w3.org/TR/SVG11/feature#CoreAttribute`
  - : The browser supports the {{SVGAttr("id")}}, {{SVGAttr("xml:base")}}, {{SVGAttr("xml:lang")}} and {{SVGAttr("xml:space")}} attributes
- `http://www.w3.org/TR/SVG11/feature#Structure`
  - : The browser supports {{SVGElement("svg")}}, {{SVGElement("g")}}, {{SVGElement("defs")}}, {{SVGElement("desc")}}, {{SVGElement("title")}}, {{SVGElement("metadata")}}, {{SVGElement("symbol")}} and {{SVGElement("use")}} elements.
- `http://www.w3.org/TR/SVG11/feature#BasicStructure`
  - : The browser supports {{SVGElement("svg")}}, {{SVGElement("g")}}, {{SVGElement("defs")}}, {{SVGElement("desc")}}, {{SVGElement("title")}}, {{SVGElement("metadata")}} and {{SVGElement("use")}} elements.
- `http://www.w3.org/TR/SVG11/feature#ContainerAttribute`
  - : The browser supports the {{SVGAttr("enable-background")}} attribute
- `http://www.w3.org/TR/SVG11/feature#ConditionalProcessing`
  - : The browser supports the {{SVGElement("switch")}} element, and the {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}}, {{SVGAttr("systemLanguage")}} attributes
- `http://www.w3.org/TR/SVG11/feature#Image`
  - : The browser supports the {{SVGElement("image")}} element.
- `http://www.w3.org/TR/SVG11/feature#Style`
  - : The browser supports the {{SVGElement("style")}} element.
- `http://www.w3.org/TR/SVG11/feature#ViewportAttribute`
  - : The browser supports the {{SVGAttr("clip")}} and {{SVGAttr("overflow")}} attributes.
- `http://www.w3.org/TR/SVG11/feature#Shape`
  - : The browser supports the {{SVGElement("rect")}}, {{SVGElement("circle")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}}, {{SVGElement("polygon")}}, {{SVGElement("ellipse")}} and {{SVGElement("path")}} elements.
- `http://www.w3.org/TR/SVG11/feature#Text`
  - : The browser supports the {{SVGElement("text")}}, {{SVGElement("tspan")}}, {{SVGElement("tref")}}, {{SVGElement("textPath")}}, {{SVGElement("altGlyph")}}, {{SVGElement("altGlyphDef")}}, {{SVGElement("altGlyphItem")}} and {{SVGElement("glyphRef")}} elements.
- `http://www.w3.org/TR/SVG11/feature#BasicText`
  - : The browser supports the {{SVGElement("text")}} element
- `http://www.w3.org/TR/SVG11/feature#PaintAttribute`
  - : The browser supports the {{SVGAttr("color")}}, {{SVGAttr("fill")}}, {{SVGAttr("fill-rule")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stroke-dasharray")}}, {{SVGAttr("stroke-dashoffset")}}, {{SVGAttr("stroke-linecap")}}, {{SVGAttr("stroke-linejoin")}}, {{SVGAttr("stroke-miterlimit")}}, {{SVGAttr("stroke-width")}}, {{SVGAttr("color-interpolation")}} and {{SVGAttr("color-rendering")}} attributes
- `http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute`
  - : The browser supports the {{SVGAttr("color")}}, {{SVGAttr("fill")}}, {{SVGAttr("fill-rule")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stroke-dasharray")}}, {{SVGAttr("stroke-dashoffset")}}, {{SVGAttr("stroke-linecap")}}, {{SVGAttr("stroke-linejoin")}}, {{SVGAttr("stroke-miterlimit")}}, {{SVGAttr("stroke-width")}} and {{SVGAttr("color-rendering")}} attributes
- `http://www.w3.org/TR/SVG11/feature#OpacityAttribute`
  - : The browser supports the {{SVGAttr("opacity")}}, {{SVGAttr("stroke-opacity")}} and {{SVGAttr("fill-opacity")}} attributes
- `http://www.w3.org/TR/SVG11/feature#GraphicsAttribute`
  - : The browser supports the {{SVGAttr("display")}}, {{SVGAttr("image-rendering")}}, {{SVGAttr("pointer-events")}}, {{SVGAttr("shape-rendering")}}, {{SVGAttr("text-rendering")}} and {{SVGAttr("visibility")}} attributes
- `http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute`
  - : The browser supports the {{SVGAttr("display")}} and {{SVGAttr("visibility")}} attributes
- `http://www.w3.org/TR/SVG11/feature#Marker`
  - : The browser supports the {{SVGElement("marker")}} element
- `http://www.w3.org/TR/SVG11/feature#Gradient`
  - : The browser supports the {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} and {{SVGElement("stop")}} elements
- `http://www.w3.org/TR/SVG11/feature#Pattern`
  - : The browser supports the {{SVGElement("pattern")}} element
- `http://www.w3.org/TR/SVG11/feature#Clip`
  - : The browser supports the {{SVGElement("clipPath")}} element and the {{SVGAttr("clip-path")}}, {{SVGAttr("clip-rule")}} attributes
- `http://www.w3.org/TR/SVG11/feature#BasicClip`
  - : The browser supports the {{SVGElement("clipPath")}} element and the {{SVGAttr("clip-path")}} attribute
- `http://www.w3.org/TR/SVG11/feature#Mask`
  - : The browser supports the {{SVGElement("mask")}} element
- `http://www.w3.org/TR/SVG11/feature#Filter`
  - : The browser supports the {{SVGElement("filter")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMergeNode")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feDistantLight")}}, {{SVGElement("fePointLight")}}, {{SVGElement("feSpotLight")}}, {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} and {{SVGElement("feFuncA")}} elements
- `http://www.w3.org/TR/SVG11/feature#BasicFilter`
  - : The browser supports the {{SVGElement("filter")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMergeNode")}}, {{SVGElement("feOffset")}}, {{SVGElement("feTile")}}, {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} and {{SVGElement("feFuncA")}} elements
- `http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute`
  - : The browser supports the {{SVGAttr("onunload")}}, {{SVGAttr("onabort")}}, {{SVGAttr("onerror")}}, {{SVGAttr("onresize")}}, {{SVGAttr("onscroll")}} and {{SVGAttr("onzoom")}} attributes
- `http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute`
  - : The browser supports the {{SVGAttr("onfocusin")}}, {{SVGAttr("onfocusout")}}, {{SVGAttr("onactivate")}}, {{SVGAttr("onclick")}}, {{SVGAttr("onmousedown")}}, {{SVGAttr("onmouseup")}}, {{SVGAttr("onmouseover")}}, {{SVGAttr("onmousemove")}}, {{SVGAttr("onmouseout")}} and {{SVGAttr("onload")}} attributes
- `http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute`
  - : The browser supports the {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}} and {{SVGAttr("onload")}} attributes
- `http://www.w3.org/TR/SVG11/feature#Cursor`
  - : The browser supports the {{SVGElement("cursor")}} element
- `http://www.w3.org/TR/SVG11/feature#Hyperlinking`
  - : The browser supports the {{SVGElement("a")}} element
- `http://www.w3.org/TR/SVG11/feature#XlinkAttribute`
  - : The browser supports the {{SVGAttr("xlink:type")}}, {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:role")}}, {{SVGAttr("xlink:arcrole")}}, {{SVGAttr("xlink:title")}}, {{SVGAttr("xlink:show")}} and {{SVGAttr("xlink:actuate")}} attributes
- `http://www.w3.org/TR/SVG11/feature#View`
  - : The browser supports the {{SVGElement("view")}} element
- `http://www.w3.org/TR/SVG11/feature#Script`
  - : The browser supports the {{SVGElement("script")}} element
- `http://www.w3.org/TR/SVG11/feature#Animation`
  - : The browser supports the {{SVGElement("animate")}}, {{SVGElement("set")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("mpath")}} elements
- `http://www.w3.org/TR/SVG11/feature#Font`
  - : The browser supports the {{SVGElement("font")}}, {{SVGElement("font-face")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}, {{SVGElement("hkern")}}, {{SVGElement("vkern")}}, {{SVGElement("font-face-src")}}, {{SVGElement("font-face-uri")}}, {{SVGElement("font-face-format")}} and {{SVGElement("font-face-name")}} elements
- `http://www.w3.org/TR/SVG11/feature#BasicFont`
  - : The browser supports the {{SVGElement("font")}}, {{SVGElement("font-face")}}, {{SVGElement("glyph")}}, {{SVGElement("missing-glyph")}}, {{SVGElement("hkern")}}, {{SVGElement("font-face-src")}} and {{SVGElement("font-face-name")}} elements
- `http://www.w3.org/TR/SVG11/feature#Extensibility`
  - : The browser supports the {{SVGElement("foreignObject")}} element

## Testing feature support

### SVG

```html
<svg width="450" height="1170" xmlns="http://www.w3.org/2000/svg">
  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG -->
  <rect class="ko" x="10" y="10" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="10"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG" />
  <text x="20" y="27">http://www.w3.org/TR/SVG11/feature#SVG</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM -->
  <rect class="ko" x="10" y="35" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="35"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM" />
  <text x="20" y="52">http://www.w3.org/TR/SVG11/feature#SVGDOM</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-static -->
  <rect class="ko" x="10" y="60" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="60"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-static" />
  <text x="20" y="77">http://www.w3.org/TR/SVG11/feature#SVG-static</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-static -->
  <rect class="ko" x="10" y="85" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="85"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-static" />
  <text x="20" y="102">http://www.w3.org/TR/SVG11/feature#SVGDOM-static</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-animation -->
  <rect class="ko" x="10" y="110" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="110"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-animation" />
  <text x="20" y="127">http://www.w3.org/TR/SVG11/feature#SVG-animation</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-animation -->
  <rect class="ko" x="10" y="135" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="135"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-animation" />
  <text x="20" y="152">
    http://www.w3.org/TR/SVG11/feature#SVGDOM-animation
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVG-dynamic -->
  <rect class="ko" x="10" y="160" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="160"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-dynamic" />
  <text x="20" y="177">http://www.w3.org/TR/SVG11/feature#SVG-dynamic</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic -->
  <rect class="ko" x="10" y="185" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="185"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic" />
  <text x="20" y="202">http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#CoreAttribute -->
  <rect class="ko" x="10" y="210" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="210"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#CoreAttribute" />
  <text x="20" y="227">http://www.w3.org/TR/SVG11/feature#CoreAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Structure -->
  <rect class="ko" x="10" y="235" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="235"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Structure" />
  <text x="20" y="252">http://www.w3.org/TR/SVG11/feature#Structure</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicStructure -->
  <rect class="ko" x="10" y="260" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="260"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicStructure" />
  <text x="20" y="277">http://www.w3.org/TR/SVG11/feature#BasicStructure</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ContainerAttribute -->
  <rect class="ko" x="10" y="285" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="285"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ContainerAttribute" />
  <text x="20" y="302">
    http://www.w3.org/TR/SVG11/feature#ContainerAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ConditionalProcessing -->
  <rect class="ko" x="10" y="310" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="310"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ConditionalProcessing" />
  <text x="20" y="327">
    http://www.w3.org/TR/SVG11/feature#ConditionalProcessing
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Image -->
  <rect class="ko" x="10" y="335" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="335"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Image" />
  <text x="20" y="352">http://www.w3.org/TR/SVG11/feature#Image</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Style -->
  <rect class="ko" x="10" y="360" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="360"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Style" />
  <text x="20" y="377">http://www.w3.org/TR/SVG11/feature#Style</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ViewportAttribute -->
  <rect class="ko" x="10" y="385" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="385"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ViewportAttribute" />
  <text x="20" y="402">
    http://www.w3.org/TR/SVG11/feature#ViewportAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Shape -->
  <rect class="ko" x="10" y="410" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="410"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Shape" />
  <text x="20" y="427">http://www.w3.org/TR/SVG11/feature#Shape</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Text -->
  <rect class="ko" x="10" y="435" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="435"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Text" />
  <text x="20" y="452">http://www.w3.org/TR/SVG11/feature#Text</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicText -->
  <rect class="ko" x="10" y="460" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="460"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicText" />
  <text x="20" y="477">http://www.w3.org/TR/SVG11/feature#BasicText</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#PaintAttribute -->
  <rect class="ko" x="10" y="485" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="485"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#PaintAttribute" />
  <text x="20" y="502">http://www.w3.org/TR/SVG11/feature#PaintAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute -->
  <rect class="ko" x="10" y="510" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="510"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute" />
  <text x="20" y="527">
    http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#OpacityAttribute -->
  <rect class="ko" x="10" y="535" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="535"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#OpacityAttribute" />
  <text x="20" y="552">
    http://www.w3.org/TR/SVG11/feature#OpacityAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#GraphicsAttribute -->
  <rect class="ko" x="10" y="560" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="560"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#GraphicsAttribute" />
  <text x="20" y="577">
    http://www.w3.org/TR/SVG11/feature#GraphicsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute -->
  <rect class="ko" x="10" y="585" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="585"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute" />
  <text x="20" y="602">
    http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Marker -->
  <rect class="ko" x="10" y="610" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="610"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Marker" />
  <text x="20" y="627">http://www.w3.org/TR/SVG11/feature#Marker</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#ColorProfile -->
  <rect class="ko" x="10" y="635" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="635"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#ColorProfile" />
  <text x="20" y="652">http://www.w3.org/TR/SVG11/feature#ColorProfile</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Gradient -->
  <rect class="ko" x="10" y="660" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="660"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Gradient" />
  <text x="20" y="677">http://www.w3.org/TR/SVG11/feature#Gradient</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Pattern -->
  <rect class="ko" x="10" y="685" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="685"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Pattern" />
  <text x="20" y="702">http://www.w3.org/TR/SVG11/feature#Pattern</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Clip -->
  <rect class="ko" x="10" y="710" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="710"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Clip" />
  <text x="20" y="727">http://www.w3.org/TR/SVG11/feature#Clip</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicClip -->
  <rect class="ko" x="10" y="735" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="735"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicClip" />
  <text x="20" y="752">http://www.w3.org/TR/SVG11/feature#BasicClip</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Mask -->
  <rect class="ko" x="10" y="760" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="760"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Mask" />
  <text x="20" y="777">http://www.w3.org/TR/SVG11/feature#Mask</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Filter -->
  <rect class="ko" x="10" y="785" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="785"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Filter" />
  <text x="20" y="802">http://www.w3.org/TR/SVG11/feature#Filter</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicFilter -->
  <rect class="ko" x="10" y="810" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="810"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicFilter" />
  <text x="20" y="827">http://www.w3.org/TR/SVG11/feature#BasicFilter</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute -->
  <rect class="ko" x="10" y="835" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="835"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute" />
  <text x="20" y="852">
    http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute -->
  <rect class="ko" x="10" y="860" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="860"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute" />
  <text x="20" y="877">
    http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute -->
  <rect class="ko" x="10" y="885" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="885"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute" />
  <text x="20" y="902">
    http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute
  </text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Cursor -->
  <rect class="ko" x="10" y="910" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="910"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Cursor" />
  <text x="20" y="927">http://www.w3.org/TR/SVG11/feature#Cursor</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Hyperlinking -->
  <rect class="ko" x="10" y="935" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="935"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Hyperlinking" />
  <text x="20" y="952">http://www.w3.org/TR/SVG11/feature#Hyperlinking</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#XlinkAttribute -->
  <rect class="ko" x="10" y="960" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="960"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#XlinkAttribute" />
  <text x="20" y="977">http://www.w3.org/TR/SVG11/feature#XlinkAttribute</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#View -->
  <rect class="ko" x="10" y="1010" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1010"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#View" />
  <text x="20" y="1027">http://www.w3.org/TR/SVG11/feature#View</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Script -->
  <rect class="ko" x="10" y="1035" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1035"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Script" />
  <text x="20" y="1052">http://www.w3.org/TR/SVG11/feature#Script</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Animation -->
  <rect class="ko" x="10" y="1060" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1060"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Animation" />
  <text x="20" y="1077">http://www.w3.org/TR/SVG11/feature#Animation</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Font -->
  <rect class="ko" x="10" y="1085" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1085"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Font" />
  <text x="20" y="1102">http://www.w3.org/TR/SVG11/feature#Font</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#BasicFont -->
  <rect class="ko" x="10" y="1110" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1110"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicFont" />
  <text x="20" y="1127">http://www.w3.org/TR/SVG11/feature#BasicFont</text>

  <!-- Testing : http://www.w3.org/TR/SVG11/feature#Extensibility -->
  <rect class="ko" x="10" y="1135" height="25" width="430" />
  <rect
    class="ok"
    x="10"
    y="1135"
    height="25"
    width="430"
    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
  <text x="20" y="1152">http://www.w3.org/TR/SVG11/feature#Extensibility</text>
</svg>
```

### CSS

```css
.ko {
  fill: #900;
}

.ok {
  fill: #060;
}

rect {
  stroke: #000;
  stroke-width: 2px;
}

text {
  fill: #fff;
  font: 12px sans-serif;
}
```

### Result

{{EmbedLiveSample("Testing feature support", "400", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
