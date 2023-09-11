---
title: in
slug: Web/SVG/Attribute/in
page-type: svg-attribute
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-primitive-in
---

{{SVGRef}}

The **`in`** attribute identifies input for the given filter primitive.

The value can be either one of the six keywords defined below, or a string which matches a previous {{SVGAttr("result")}} attribute value within the same {{SVGElement("filter")}} element. If no value is provided and this is the first filter primitive, then this filter primitive will use `SourceGraphic` as its input. If no value is provided and this is a subsequent filter primitive, then this filter primitive will use the result from the previous filter primitive as its input.

If the value for {{SVGAttr("result")}} appears multiple times within a given {{SVGElement("filter")}} element, then a reference to that result will use the closest preceding filter primitive with the given value for attribute {{SVGAttr("result")}}.

You can use this attribute with the following SVG elements:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <code>SourceGraphic</code> for first filter primitive, otherwise result
        of previous filter primitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : This keyword represents the graphics elements that were the original input into the {{SVGElement("filter")}} element.
- `SourceAlpha`
  - : This keyword represents the graphics elements that were the original input into the `<filter>` element. `SourceAlpha` has all of the same rules as `SourceGraphic` except that only the alpha channel is used.
- `BackgroundImage`
  - : This keyword represents an image snapshot of the SVG document under the filter region at the time that the `<filter>` element was invoked.
- `BackgroundAlpha`
  - : Same as `BackgroundImage` except only the alpha channel is used.
- `FillPaint`
  - : This keyword represents the value of the {{SVGAttr("fill")}} property on the target element for the filter effect. In many cases, the `FillPaint` is opaque everywhere, but that might not be the case if a shape is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
- `StrokePaint`
  - : This keyword represents the value of the {{SVGAttr("stroke")}} property on the target element for the filter effect. In many cases, the `StrokePaint` is opaque everywhere, but that might not be the case if a shape is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.
- `<filter-primitive-reference>`
  - : This value is an assigned name for the filter primitive in the form of a {{cssxref("custom-ident")}}. If supplied, then graphics that result from processing this filter primitive can be referenced by an in attribute on a subsequent filter primitive within the same filter element. If no value is provided, the output will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its in attribute.

## Workaround for BackgroundImage

`BackgroundImage` is not supported as a filter source in modern browsers (see the [feComposite compatibility table](/en-US/docs/Web/SVG/Element/feComposite#browser_compatibility)). We therefore need to import one of the images to blend inside the filter itself, using an `<feImage>` element.

> **Note:** Firefox [Bug 455986](https://bugzil.la/455986) means that `feImage` cannot load partial images, including circles, rectangles, paths or other fragments defined in the document. So that this example works on more browsers, a full external image of the logo is loaded.

### HTML

```html
<div style="width: 420px; height: 220px;">
  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="backgroundMultiply">
        <!-- This will not work. -->
        <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <image
      href="mdn_logo_only_color.png"
      x="10%"
      y="10%"
      width="80%"
      height="80%" />
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#backgroundMultiply);" />
  </svg>

  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="imageMultiply">
        <!-- This is a workaround. -->
        <feImage
          href="mdn_logo_only_color.png"
          x="10%"
          y="10%"
          width="80%"
          height="80%" />
        <feBlend in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#imageMultiply);" />
  </svg>
</div>
```

### Result

{{EmbedLiveSample("Workaround_for_BackgroundImage")}}

## Specifications

{{Specifications}}
