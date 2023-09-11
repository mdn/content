---
title: <use>
slug: Web/SVG/Element/use
page-type: svg-element
browser-compat: svg.elements.use
---

{{SVGRef}}

The **`<use>`** element takes nodes from within the SVG document, and duplicates them somewhere else.
The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, then pasted where the `use` element is, much like cloned [template elements](/en-US/docs/Web/HTML/Element/template).

## Example

The following example shows how to use the `use` element to draw a circle with a different fill and stroke color.
In the last circle, `stroke="red"` will be ignored because stroke was already set on `myCircle`.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Attributes

- {{SVGAttr("href")}}
  - : The URL to an element/fragment that needs to be duplicated.<br/> _Value type_: [**`<URL>`**](/en-US/docs/Web/SVG/Content_type#url) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : An [`<IRI>`](/en-US/docs/Web/SVG/Content_type#iri) reference to an element/fragment that needs to be duplicated. If both {{SVGAttr("href")}} and {{SVGAttr("xlink:href")}} are present, the value given by {{SVGAttr("href")}} is used.<br/> _Value type_: [**`<IRI>`**](/en-US/docs/Web/SVG/Content_type#iri) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : The x coordinate of an additional final offset transformation applied to the `<use>` element.<br/> _Value type_: [**`<coordinate>`**](/en-US/docs/Web/SVG/Content_type#coordinate) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The y coordinate of an additional final offset transformation applied to the `<use>` element.<br/> _Value type_: [**`<coordinate>`**](/en-US/docs/Web/SVG/Content_type#coordinate) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The width of the use element.<br/> _Value type_: [**`<length>`**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("height")}}
  - : The height of the use element.<br/> _Value type_: [**`<length>`**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0`; _Animatable_: **yes**

> **Note:** `width`, and `height` have no effect on `use` elements, unless the element referenced has a [viewBox](/en-US/docs/Web/SVG/Attribute/viewBox) - i.e. they only have an effect when `use` refers to a `svg` or `symbol` element.

> **Note:** Starting with SVG2, `x`, `y`, `width`, and `height` are _Geometry Properties_, meaning those attributes can also be used as CSS properties for that element.

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`
- XLink Attributes
  - : {{SVGAttr("xlink:href")}} {{deprecated_inline}}, {{SVGAttr("xlink:title")}}

## Usage notes

Most attributes on `use` are ignored if the corresponding attribute is already defined on the element _referenced_ by `use`. (This differs from how CSS style attributes override those set 'earlier' in the cascade).
**Only** the attributes {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} and {{SVGAttr("href")}} on the `use` element will or may have some effect, described later, if the referenced element has already defined the corresponding attribute. However, _any other attributes_ not set on the referenced element **will** be applied to the `use` element.

Since the cloned nodes are not exposed, care must be taken when using [CSS](/en-US/docs/Web/CSS) to style a `use` element and its cloned descendants. CSS properties are not guaranteed to be inherited by the cloned DOM unless you explicitly request them using [CSS inheritance](/en-US/docs/Web/CSS/Inheritance).

For security reasons, browsers may apply the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) on `use` elements and may refuse to load a cross-origin URL in the {{SVGAttr("href")}} attribute. There is currently no defined way to set a cross-origin policy for `use` elements.

> **Warning:** Since SVG 2, the {{SVGAttr("xlink:href")}} attribute is deprecated in favor of {{SVGAttr("href")}}. See {{SVGAttr("xlink:href")}} page for more information.

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
