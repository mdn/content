---
title: <feConvolveMatrix>
slug: Web/SVG/Element/feConvolveMatrix
tags:
  - Element
  - Filters
  - SVG
  - SVG Filter
browser-compat: svg.elements.feConvolveMatrix
---
{{SVGRef}}

The **`<feConvolveMatrix>`** [SVG](/en-US/docs/Web/SVG) filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.

A matrix convolution is based on an n-by-m matrix (the convolution kernel) which describes how a given pixel value in the input image is combined with its neighboring pixel values to produce a resulting pixel value. Each result pixel is determined by applying the kernel matrix to the corresponding source pixel and its neighboring pixels. The basic convolution formula which is applied to each color value for a given pixel is:

COLOR<sub>X,Y</sub> = (
              SUM <sub>I=0 to [<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderY</a>-1]</sub> {
                SUM <sub>J=0 to [<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderX</a>-1]</sub> {
                  SOURCE <sub>X-<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute">targetX</a>+J, Y-<a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute">targetY</a>+I</sub> \*  [kernelMatrix](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute)<sub><a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderX</a>-J-1,  <a href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute">orderY</a>-I-1</sub>
                }
              }
            ) /  [divisor](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute) +  [bias](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementBiasAttribute) \* ALPHA<sub>X,Y</sub>

where "orderX" and "orderY" represent the X and Y values for the ['order'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute) attribute, "targetX" represents the value of the ['targetX'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute) attribute, "targetY" represents the value of the ['targetY'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute) attribute, "kernelMatrix" represents the value of the ['kernelMatrix'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute) attribute, "divisor" represents the value of the ['divisor'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute) attribute, and "bias" represents the value of the ['bias'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementBiasAttribute) attribute.

Note in the above formulas that the values in the kernel matrix are applied such that the kernel matrix is rotated 180 degrees relative to the source and destination images in order to match convolution theory as described in many computer graphics textbooks.

To illustrate, suppose you have a input image which is 5 pixels by 5 pixels, whose color values for one of the color channels are as follows:

```
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

and you define a 3-by-3 convolution kernel as follows:

```
1 2 3
4 5 6
7 8 9
```

Let's focus on the color value at the second row and second column of the image (source pixel value is 120). Assuming the simplest case (where the input image's pixel grid aligns perfectly with the kernel's pixel grid) and assuming default values for attributes ['divisor'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute), ['targetX'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute) and ['targetY'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute), then resulting color value will be:

```
(9*  0 + 8* 20 + 7* 40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- [Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Specific attributes

- {{SVGAttr("in")}}
- {{SVGAttr("order")}}
- {{SVGAttr("kernelMatrix")}}
- {{SVGAttr("divisor")}}
- {{SVGAttr("bias")}}
- {{SVGAttr("targetX")}}
- {{SVGAttr("targetY")}}
- {{SVGAttr("edgeMode")}}
- {{SVGAttr("kernelUnitLength")}}
- {{SVGAttr("preserveAlpha")}}

## DOM Interface

This element implements the {{domxref("SVGFEConvolveMatrixElement")}} interface.

## Example

### SVG

```html
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
          kernelMatrix="3 0 0
                        0 0 0
                        0 0 -3"/>
    </filter>
  </defs>

  <image xlink:href="mdn.svg" x="0" y="0"
      height="200" width="200" style="filter:url(#emboss);" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 200, 210)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
