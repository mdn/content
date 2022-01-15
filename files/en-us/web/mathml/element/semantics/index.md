---
title: <semantics>
slug: Web/MathML/Element/semantics
tags:
  - MathML
  - MathML Reference
  - MathML:Element
browser-compat: mathml.elements.semantics
---
{{MathMLRef}}

In MathML there are two ways to mark up mathematics: _Presentation_ MathML is used to control the layout of equations, whereas _Content_ MathML is designed to encode the semantic mathematical meaning and to make expressions understandable to computer algebra systems. The MathML elements `<semantics>`, `<annotation>` and `<annotation-xml>` are used to combine presentation and content markup and to provide both, layout information and semantic meaning of mathematical expressions.

The `<semantics>` element acts as a container element associating annotations and must have child elements (it will raise an _invalid markup_ error otherwise). The `<annotation>` element is the container element containing semantic information in a non-XML format, whereas the `<annotation-xml>` element contains content in an XML format, e.g. Content MathML or OpenMath.

The rules of determining the visible child in a `<semantics>` element are the following:

- If no rule other rule applies: By default only the first child is rendered, which is supposed to be presentation markup.
- If the first child is a presentation MathML element other than `<annotation>` or `<annotation-xml>`, render the first child.
- If no Presentation MathML is found, render the first `<annotation>` or `<annotation-xml>` child element of `<semantics>`.
  Beware that `<annotation-xml>` elements are only recognized, if the encoding attribute is set to one of the following:

  - `"application/mathml-presentation+xml"`
  - `"MathML-Presentation"`
  - `"SVG1.1"`
  - `"text/html"`
  - `"image/svg+xml"`
  - `"application/xml`".

  Note that `"application/mathml+xml"` is _not_ mentioned here as it does not distinguish between Content or Presentation MathML.

## Attributes

The following attributes can be set on `<annotation>` and `<annotation-xml>`:

- definitionURL
  - : The location of the annotation key symbol.
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- encoding
  - : The encoding of the semantic information in the annotation (e.g. "MathML-Content", "MathML-Presentation", "application/openmath+xml", "image/png")
- cd
  - : The content dictionary that contains the annotation key symbol.
- name
  - : The name of the annotation key symbol.
- src
  - : The location of an external source for semantic information.

## Example

```html
<math>
  <semantics>

    <!-- Presentation MathML -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- Content MathML -->
    <annotation-xml encoding="MathML-Content">
      <apply>
        <plus/>
        <apply>
          <power/>
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- annotate an image -->
    <annotation encoding="image/png" src="some/path/formula.png"/>

    <!-- annotate TeX -->
    <annotation encoding="application/x-tex">
      x^{2} + y
    </annotation>

  </semantics>
</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- The algorithm of determining the visible child in `<semantics>` has been corrected in {{geckoRelease("23")}} to match the MathML specification. In prior versions the first child element has been rendered.
- In Gecko `<annotation>` and `<annotation-xml>` elements are ignored if the `src` attribute is set.
