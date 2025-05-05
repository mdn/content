---
title: <mi>
slug: Web/MathML/Reference/Element/mi
page-type: mathml-element
browser-compat: mathml.elements.mi
sidebar: mathmlref
---

The **`<mi>`** [MathML](/en-US/docs/Web/MathML) element indicates that the content should be rendered as an **identifier**, such as a function name, variable or symbolic constant.

By default `<mi>` elements that contain multiple characters are a rendered as normal text, while single character characters are rendered as italic: the same formatting behavior as the [CSS `text-transform`](/en-US/docs/Web/CSS/text-transform) property with a value of `math-auto`.
The `mathvariant` attribute with a value of `normal` can be used to reset a single character to the normal font.

In order to use a particular form of a character such as bold/italic, serif, sans-serif, script/calligraphy, monospaced, double-struck, and so on, you should use the appropriate [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols).

> [!NOTE]
> In a previous specification (MathML3), the `mathvariant` attribute was used to define logical classes that could apply the character formatting for mathematical alphanumeric symbols.
> The associated values are now deprecated, and expected to be removed from browsers in future releases.

## Attributes

- `mathvariant`

  - : The only value allowed in the current specification is `normal` (case insensitive):

    - `normal`
      - : Use default/normal rendering, removing automatic styling of single characters to italic.

    Deprecated legacy values are:

    - `bold` {{deprecated_inline}}
      - : Try and use bold characters e.g., "𝐀".
    - `italic` {{deprecated_inline}}
      - : Try and use italic characters e.g., "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Try and use bold-italic characters e.g., "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Try and use double-struck characters e.g., "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Try and use bold-fraktur characters e.g., "𝕬".
    - `script` {{deprecated_inline}}
      - : Try and use script characters e.g., "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Try and use bold-script characters e.g., "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Try and use fraktur characters e.g., "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Try and use sans-serif characters e.g., "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Try and use bold-sans-serif characters e.g., "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Try and use sans-serif-italic characters e.g., "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Try and use sans-serif-bold-italic characters e.g., "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Try and use monospace characters e.g., "𝙰".
    - `initial` {{deprecated_inline}}
      - : Try and use initial characters e.g., "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Try and use tailed characters e.g., "𞹂".
    - `looped` {{deprecated_inline}}
      - : Try and use looped characters e.g., "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Try and use stretched characters e.g., "𞹢".

This element also accepts the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes).

## Examples

```html
<math display="block">
  <!-- Multiple characters render as "normal" text -->
  <mi>sin</mi>
</math>
<hr />
<math display="block">
  <!-- Single characters render as italic by default (i.e. "A" renders as "𝐴") -->
  <mi>A</mi>
</math>
<hr />
<math display="block">
  <!-- Use mathvariant="normal" to make single character render as normal text -->
  <mi mathvariant="normal">F</mi>
</math>
<hr />
<math display="block">
  <!-- To use a specific variant, such as "B" in Fraktur -->
  <mi>𝔅</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 400, 100) }}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
