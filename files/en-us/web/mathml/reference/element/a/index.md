---
title: <a>
slug: Web/MathML/Reference/Element/a
page-type: mathml-element
browser-compat: mathml.elements.a
sidebar: mathmlref
---

The **`<a>`** [MathML](/en-US/docs/Web/MathML) element enables hyperlinks to be created inside MathML formulae, linking different parts to different locations.

MathML's `<a>` element is a container, which means you can create a link around any MathML content. For layout purposes, it behaves like an {{MathMLElement("mrow")}} element.

If the `href` attribute is present, pressing the enter key while focused on the `<a>` element will activate it.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes) as well as the following attributes:

- `href`
  - : The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:
    - Telephone numbers with `tel:` URLs
    - Email addresses with `mailto:` URLs
    - SMS text messages with `sms:` URLs
    - Executable code with [`javascript:` URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript)
    - While web browsers may not support other URL schemes, websites can with [`registerProtocolHandler()`](/en-US/docs/Web/API/Navigator/registerProtocolHandler)

    Moreover other URL features can locate specific parts of the resource, including:
    - Sections of a page with document fragments
    - Specific text portions with [text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Pieces of media files with media fragments

- `hreflang`
  - : Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as [the global `lang` attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/lang).

- `target`
  - : Where to display the linked URL, as the name for a _browsing context_ (a tab, window, or {{HTMLElement("iframe")}}). The following keywords have special meanings for where to load the URL:
    - `_self`: The current browsing context. (Default)
    - `_blank`: Usually a new tab, but users can configure browsers to open a new window instead.
    - `_parent`: The parent browsing context of the current one. If no parent, behaves as `_self`.
    - `_top`: The topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as `_self`.

- `type`
  - : Hints at the linked URL's format with a {{Glossary("MIME type")}}. No built-in functionality.

## Examples

### Basic usage

This example marks up the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function) in MathML. It includes several MathML `<a>` elements to link individual parts of the formula to their respective sections on the Wiki page.

#### MathML

```html live-sample___mathml-a
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a href="https://en.wikipedia.org/wiki/Gamma_function"
        ><mrow
          ><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>t</mi
          ><mo stretchy="false">)</mo></mrow
        ></a
      ><mo>=</mo
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Main_definition"
        ><mrow
          ><msubsup
            ><mo>∫</mo><mn>0</mn><mrow><mo>+</mo><mn>∞</mn></mrow></msubsup
          ><msup
            ><mi>x</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msup
          ><msup
            ><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup
          ><mi>d</mi><mi>x</mi></mrow
        ></a
      ><mo>=</mo
      ><a
        href="https://en.wikipedia.org/wiki/Gamma_function#Euler's_definition_as_an_infinite_product"
        ><mrow
          ><mfrac><mn>1</mn><mi>t</mi></mfrac
          ><munderover
            ><mo>∏</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow
            ><mn>∞</mn></munderover
          ><mfrac
            ><msup
              ><mrow
                ><mo>(</mo
                ><mrow
                  ><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow
                ><mo>)</mo></mrow
              ><mi>t</mi></msup
            ><mrow
              ><mn>1</mn><mo>+</mo><mfrac><mi>t</mi><mi>n</mi></mfrac></mrow
            ></mfrac
          ></mrow
        ></a
      ><a href="https://en.wikipedia.org/wiki/Asymptotic_analysis#Definition"
        ><mo>∼</mo></a
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Stirling's_formula"
        ><mrow
          ><msqrt
            ><mfrac
              ><mrow><mn>2</mn><mi>π</mi></mrow
              ><mi>t</mi></mfrac
            ></msqrt
          ><msup
            ><mrow
              ><mo>(</mo><mfrac><mi>t</mi><mi>e</mi></mfrac
              ><mo>)</mo></mrow
            ><mi>t</mi></msup
          ></mrow
        ></a
      ></mrow
    ></semantics
  ></math
>
```

```css hidden live-sample___mathml-a
math {
  font-size: 4vw;
}
```

#### Result

{{EmbedLiveSample("mathml-a", "100%", "200")}}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles">Implicit ARIA role</a>
    </th>
    <td>
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">
        <code>generic</code>
      </a>
    </td>
  </tr>
  <tr>
    <th scope="row">DOM interface</th>
    <td>{{domxref("MathMLAnchorElement")}}</td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MathMLAnchorElement")}}
