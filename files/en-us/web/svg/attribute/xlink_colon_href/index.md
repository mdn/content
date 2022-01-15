---
title: xlink:href
slug: Web/SVG/Attribute/xlink:href
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}{{Deprecated_Header}}

The **`xlink:href`** attribute defines a reference to a resource as a reference [IRI](/en-US/docs/Web/SVG/Content_type#iri). The exact meaning of that link depends on the context of each element using it.

> **Note:** SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use {{SVGAttr("href")}}.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("altGlyph")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("cursor")}}
*   {{SVGElement("feImage")}}
*   {{SVGElement("filter")}}
*   {{SVGElement("font-face-uri")}}
*   {{SVGElement("glyphRef")}}
*   {{SVGElement("image")}}
*   {{SVGElement("linearGradient")}}
*   {{SVGElement("mpath")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("radialGradient")}}
*   {{SVGElement("script")}}
*   {{SVGElement("set")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("use")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a xlink:href="https://developer.mozilla.org/"><text x="10" y="25">MDN Web Docs</text></a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## a

For {{SVGElement("a")}}, `xlink:href` defines the location of the referenced object.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## altGlyph

For {{SVGElement("altGlyph")}}, `xlink:href` defines the reference either to a {{SVGElement("glyph")}} element in an SVG document fragment or to an {{SVGElement("altGlyphDef")}} element.

If the reference is to a `<glyph>` element and that {{Glossary("glyph")}} is available, then that glyph is rendered instead of the characters that are inside of the `<altGlyph>` element.

If the reference is to an `<altGlyphDef>` element, then if an appropriate set of alternate glyphs is located from processing the `<altGlyphDef>` element, then those alternate glyphs are rendered instead of the characters that are inside of the `<altGlyph>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animate, animateColor, animateMotion, animateTransform, set

For {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("set")}}, `xlink:href` defines the reference to the element which is the target of this animation and which therefore will be modified over time.

The target element must be part of the current SVG document fragment.

The value must point to exactly one target element which is capable of being the target of the given animation.

If the `xlink:href` attribute is not provided, the target element will be the immediate parent element of the current animation element.

Refer to the descriptions of the individual animation elements for any restrictions on what types of elements can be targets of particular types of animations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## cursor

For {{SVGElement("cursor")}}, `xlink:href` defines the reference to the file or element which provides the image of the cursor.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#funciri"
            >&#x3C;funciri></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feImage

For {{SVGElement("feImage")}}, `xlink:href` defines the reference to the image source.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## filter

For {{SVGElement("filter")}}, `xlink:href` defines the reference to another `<filter>` element within the current SVG document fragment. Any attributes which are defined on the referenced `<filter>` element which are not defined on this element are inherited by this element. If this element has no defined filter nodes, and the referenced element has defined filter nodes (possibly due to its own `xlink:href` attribute), then this element inherits the filter nodes defined from the referenced `<filter>` element. Inheritance can be indirect to an arbitrary level; thus, if the referenced `<filter>` element inherits attributes or its filter node specification due to its own `xlink:href` attribute, then the current element can inherit those attributes or filter node specifications.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## font-face-uri

For {{SVGElement("font-face-uri")}}, `xlink:href` defines the location of the referenced font.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## glyphRef

For {{SVGElement("glyphRef")}}, `xlink:href` defines to a {{SVGElement("glyph")}} element in an SVG document fragment. The referenced `<glyph>` is rendered as an alternate glyph.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## image

For {{SVGElement("image")}}, `xlink:href` defines the location of the referenced image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## linearGradient

For {{SVGElement("linearGradient")}}, `xlink:href` defines the reference to a different `<linearGradient>` or {{SVGElement("radialGradient")}} element within the current SVG document fragment. Any `<linearGradient>` attributes which are defined on the referenced element which are not defined on this element are inherited by this element. If this element has no defined gradient stops, and the referenced element does (possibly due to its own `xlink:href` attribute), then this element inherits the gradient stop from the referenced element. Inheritance can be indirect to an arbitrary level; thus, if the referenced element inherits attribute or gradient stops due to its own `xlink:href` attribute, then the current element can inherit those attributes or gradient stops.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## mpath

For {{SVGElement("mpath")}}, `xlink:href` defines the reference to the {{SVGElement("path")}} element which defines the motion path.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## pattern

For {{SVGElement("pattern")}}, `xlink:href` defines the reference to a different `<pattern>` element within the current SVG document fragment. Any attributes which are defined on the referenced element which are not defined on this element are inherited by this element. If this element has no children, and the referenced element does (possibly due to its own `xlink:href` attribute), then this element inherits the children from the referenced element. Inheritance can be indirect to an arbitrary level; thus, if the referenced element inherits attributes or children due to its own `xlink:href` attribute, then the current element can inherit those attributes or children.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## radialGradient

For {{SVGElement("radialGradient")}}, `xlink:href` defines the to a different {{SVGElement("linearGradient")}} or `<radialGradient>` element within the current SVG document fragment. Any `<radialGradient>` attributes which are defined on the referenced element which are not defined on this element are inherited by this element. If this element has no defined gradient stops, and the referenced element does (possibly due to its own `xlink:href` attribute), then this element inherits the gradient stop from the referenced element. Inheritance can be indirect to an arbitrary level; thus, if the referenced element inherits attribute or gradient stops due to its own `xlink:href` attribute, then the current element can inherit those attributes or gradient stops.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## script

For {{SVGElement("script")}}, `xlink:href` defines a reference to an external resource containing the script code.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## textPath

For {{SVGElement("textPath")}}, `xlink:href` defines a reference to the {{SVGElement("path")}} element onto which the glyphs will be rendered.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## use

For {{SVGElement("use")}}, `xlink:href` defines the location of the referenced object.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## tref

For {{SVGElement("tref")}}, `xlink:href` defines a reference to an element whose character data content shall be used as character data for this `<tref>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
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
        {{SpecName("SVG1.1", "linking.html#AElementXLinkHrefAttribute", "href for &lt;a&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("a")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#AltGlyphElementHrefAttribute", "href for &lt;altGlyph&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("altGlyph")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#HrefAttribute", "href for &lt;animate&gt;, &lt;animateColor&gt;, &lt;animateMotion&gt;, &lt;animateTransform&gt;, and &lt;set&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Defines <code>href</code> for animation elements.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "interact.html#CursorElementHrefAttribute", "href for &lt;cursor&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("cursor")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feImageElementHrefAttribute", "href for &lt;feImage&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("feImage")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#FilterElementHrefAttribute", "href for &lt;filter&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("filter")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "fonts.html#FontFaceUriElementHrefAttribute", "href for &lt;font-face-uri&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the
        {{SVGElement("font-face-uri")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#GlyphRefElementHrefAttribute", "href for &lt;glyphRef&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("glyphRef")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "struct.html#ImageElementHrefAttribute", "href for &lt;image&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("image")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#LinearGradientElementHrefAttribute", "href for &lt;linearGradient&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the
        {{SVGElement("linearGradient")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#MPathElementHrefAttribute", "href for &lt;mpath&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("mpath")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#PatternElementHrefAttribute", "href for &lt;pattern&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("pattern")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#RadialGradientElementHrefAttribute", "href for &lt;radialGradient&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the
        {{SVGElement("radialGradient")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "script.html#ScriptElementHrefAttribute", "href for &lt;script&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("script")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TextPathElementHrefAttribute", "href for &lt;textPath&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("textPath")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "struct.html#UseElementHrefAttribute", "href for &lt;use&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("use")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TRefElementHrefAttribute", "href for &lt;tref&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("tref")}} element.
      </td>
    </tr>
  </tbody>
</table>

## See also

*   {{SVGAttr("href")}}
