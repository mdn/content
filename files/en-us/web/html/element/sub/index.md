---
title: "<sub>: The Subscript element"
slug: Web/HTML/Element/sub
page-type: html-element
browser-compat: html.elements.sub
---

{{HTMLSidebar}}

The **`<sub>`** [HTML](/en-US/docs/Web/HTML) element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<sub>` element should be used only for typographical reasons—that is, to change the position of the text to comply with typographical conventions or standards, rather than solely for presentation or appearance purposes.

For example, using `<sub>` to style the name of a company which uses altered baselines in their [wordmark](https://en.wikipedia.org/wiki/Wordmark) would not be appropriate; instead, CSS should be used. For example, you could use the {{cssxref("vertical-align")}} property with a declaration like `vertical-align: sub` or, to more precisely control the baseline shift, `vertical-align: -25%`.

Appropriate use cases for `<sub>` include (but aren't necessarily limited to):

- Marking up footnote numbers. See [Footnote numbers](#footnote_numbers) for an example.
- Marking up the subscript in mathematical variable numbers (although you may also consider using a [MathML](/en-US/docs/Web/MathML) formula for this). See [Variable subscripts](#variable_subscripts).
- Denoting the number of atoms of a given element within a chemical formula (such as every developer's best friend, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, otherwise known as "caffeine"). See [Chemical formulas](#chemical_formulas).

## Examples

### Footnote numbers

Traditional footnotes are denoted using numbers which are rendered in subscript. This is a common use case for `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Result

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable subscripts

In mathematics, families of variables related to the same concept (such as distances along the same axis) are represented using the same variable name with a subscript following. For example:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Result

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemical formulas

When writing a chemical formula, such as H<sub>2</sub>0, the number of atoms of a given element within the described molecule is represented using a subscripted number; in the case of water, the subscripted "2" indicates that there are two atoms of hydrogen in the molecule.

Another example:

```html
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, which is commonly known
  as "caffeine."
</p>
```

#### Result

{{EmbedLiveSample("Chemical_formulas", 650, 120)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("sup")}} HTML element that produces superscript. Note that you cannot use `sup` and `sub` both at the same time: you need to use [MathML](/en-US/docs/Web/MathML) to produce both a superscript directly above a subscript next to the chemical symbol of an element, representing its atomic number and its nuclear number.
- The [`<msub>`](/en-US/docs/Web/MathML/Element/msub), [`<msup>`](/en-US/docs/Web/MathML/Element/msup), and [`<msubsup>`](/en-US/docs/Web/MathML/Element/msubsup) MathML elements.
- The CSS {{cssxref("vertical-align")}} property.
