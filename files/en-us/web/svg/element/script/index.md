---
title: <script>
slug: Web/SVG/Element/script
page-type: svg-element
browser-compat: svg.elements.script
---

{{SVGRef}}

The SVG `script` element allows to add scripts to an SVG document.

> **Note:** While SVG's `script` element is equivalent to the HTML {{HTMLElement('script')}} element, it has some discrepancies, like it uses the {{SVGAttr('href')}} attribute instead of [`src`](/en-US/docs/Web/HTML/Element/script#src) and it doesn't support ECMAScript modules so far (See browser compatibility below for details)

## Example

```html
Click the circle to change colors.
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4" />

  <script>
    // <![CDATA[
    function getColor() {
      const R = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const G = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const B = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      return `#${R}${G}${B}`;
    }

    document.querySelector("circle").addEventListener("click", (e) => {
      e.target.style.fill = getColor();
    });
    // ]]>
  </script>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- [`crossorigin`](/en-US/docs/Web/HTML/Element/script#crossorigin)
  - : This attribute defines [CORS settings](/en-US/docs/Web/HTML/Attributes/crossorigin) as define for the HTML {{HTMLElement('script')}} element.
    _Value type_: [**\<string>**](/en-US/docs/Web/CSS/string); _Default value_: `?`; _Animatable_: **yes**
- {{SVGAttr("href")}}
  - : The {{Glossary("URL")}} to the script to load.
    _Value type_: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; _Default value_: _none_; _Animatable_: **no**
- {{SVGAttr("type")}}
  - : This attribute defines type of the script language to use.
    _Value type_: [**\<string>**](/en-US/docs/Web/CSS/string); _Default value_: `application/ecmascript`; _Animatable_: **no**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : The {{Glossary("URL")}} to the script to load.
    _Value type_: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; _Default value_: _none_; _Animatable_: **no**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script` element in HTML](/en-US/docs/Web/HTML/Element/script)
