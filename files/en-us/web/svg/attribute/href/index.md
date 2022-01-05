---
title: href
slug: Web/SVG/Attribute/href
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.href
---
{{SVGRef}}

The **`href`** attribute defines a link to a resource as a reference [URL](/en-US/docs/Web/SVG/Content_type#URL). The exact meaning of that link depends on the context of each element using it.

> **Note:** Specifications before SVG 2 defined an {{SVGAttr("xlink:href")}} attribute, which is now rendered obsolete by the `href` attribute.

You can use this attribute with the following SVG elements:

*   {{SVGElement("a")}}
*   {{SVGElement("animate")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("discard")}}
*   {{SVGElement("feImage")}}
*   {{SVGElement("image")}}
*   {{SVGElement("linearGradient")}}
*   {{SVGElement("mpath")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("radialGradient")}}
*   {{SVGElement("script")}}
*   {{SVGElement("set")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("use")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a href="https://developer.mozilla.org/"><text x="10" y="25">MDN Web Docs</text></a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## In SVG

### a

For {{SVGElement("a")}}, `href` defines the location of the referenced object, expressed as a URL reference.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### animate, animateMotion, animateTransform, set

For the {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("set")}}, `href` defines a URL referring to the element which is the target of this animation element and which therefore will be modified over time.

The URL must point to exactly one target element which is capable of being the target of the given animation element. If the URL points to multiple target elements, if the given target element is not capable of being a target of the given animation element, or if the given target element is not part of the current document, then the animation element will not affect any target element. However, the animation element will still operate normally with regard to its timing properties. Specifically, TimeEvents are dispatched and the animation element can be used as syncbase in an identical fashion to when the URL refers to a valid target element.

If the `href` attribute or the deprecated {{SVGAttr("xlink:href")}} attribute is not provided, then the target element will be the immediate parent element of the current animation element. If both `xlink:href` and `href` are specified, the value of the latter attribute is used.

Refer to the descriptions of the individual animation elements for any restrictions on what types of elements can be targets of particular types of animations.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the {{Glossary("SMIL")}} Animation specification. In particular, see [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#SpecifyingAnimationTarget).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### discard

For {{SVGElement("discard")}}, `href` defines a URL referring the target element to discard. See the [definition of `href` on animation elements](#href_on_animation_elements) for details on identifying a target element.

> **Note:** Unlike other animation elements, the `<discard>` element does not support the deprecated {{SVGAttr("xlink:href")}} attribute.

Note that if the target element is not part of the current SVG document fragment, then whether the target element will be removed or not is defined by the host language.

If the `href` attribute is not provided, then the target element will be the immediate parent element of the `<discard>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### feImage

For {{SVGElement("feImage")}}, `href` defines a URL referring to an image resource or to an element. If both, the {{SVGAttr("xlink:href")}} and the `href` attribute are specified, the latter overrides the former.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### image

For {{SVGElement("image")}}, `href` defines a URL referring to the image to render.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image href="fxlogo.png" x="0" y="0" height="100" width="100"/>
</svg>
```

{{EmbedLiveSample("image", 200, 250)}}

### linearGradient

For {{SVGElement("linearGradient")}}, `href` defines URL referring to a template gradient element; to be valid, the reference must be to a different `<linearGradient>` or {{SVGElement("radialGradient")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### mpath

For {{SVGElement("mpath")}}, `href` defines a URL referring to the {{SVGElement("path")}} element or [basic shape](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) which defines the motion path.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### pattern

For {{SVGElement("pattern")}}, `href` defines a URL referring to a different `<pattern>` element within the current SVG document. Any attributes which are defined on the referenced element which are not defined on this element are inherited by this element. If this element has no children, and the referenced element does (possibly due to its own `href` attribute), then this element inherits the children from the referenced element. Inheritance can be indirect to an arbitrary level; thus, if the referenced element inherits attributes or children due to its own `href` attribute, then the current element can inherit those attributes or children. On the {{SVGElement("pattern")}} element, the `href` attribute is animatable.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### radialGradient

For {{SVGElement("radialGradient")}}, `href` defines URL referring to a template gradient element; to be valid, the reference must be to a different {{SVGElement("linearGradient")}} or `<radialGradient>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### script

For {{SVGElement("script")}}, `href` defines a URL referring to an external resource containing the script code.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### textPath

For {{SVGElement("textPath")}}, `href` defines a URL referring to the {{SVGElement("path")}} element or [basic shape](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) onto which the text will be rendered if no {{SVGAttr("path")}} attribute is provided. On the {{SVGElement("textPath")}} element, the `href` attribute is animatable.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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

### use

For {{SVGElement("use")}}, `href` defines a URL referring to an element or fragment within an SVG document to be cloned.

The `<use>` element can reference an entire SVG document by specifying an `href` value without a fragment. Such references are taken to be referring to the root element of the referenced document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#URL">&#x3C;url></a></code
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
        {{SpecName("SVG2", "linking.html#AElementHrefAttribute", "href for &lt;a&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("a")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#HrefAttribute", "href for &lt;animate&gt;, &lt;animateMotion&gt;, &lt;animateTransform&gt;, and &lt;set&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>Defines <code>href</code> for animation elements.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#DiscardElementHrefAttribute", "href for &lt;discard&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("discard")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#element-attrdef-feimage-href", "href for &lt;feImage&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("feImage")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "embedded.html#ImageElementHrefAttribute", "href for &lt;image&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("image")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#LinearGradientElementHrefAttribute", "href for &lt;linearGradient&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the
        {{SVGElement("linearGradient")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#MPathElementHrefAttribute", "href for &lt;mpath&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("mpath")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#PatternElementHrefAttribute", "href for &lt;pattern&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("pattern")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#RadialGradientElementHrefAttribute", "href for &lt;radialGradient&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the
        {{SVGElement("radialGradient")}} element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "interact.html#ScriptElementHrefAttribute", "href for &lt;script&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("script")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "text.html#TextPathElementHrefAttribute", "href for &lt;textPath&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("textPath")}}
        element.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "struct.html#UseElementHrefAttribute", "href for &lt;use&gt;")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Defines <code>href</code> for the {{SVGElement("use")}} element.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("xlink:href")}}
