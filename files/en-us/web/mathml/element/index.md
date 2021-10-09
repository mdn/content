---
title: MathML element reference
slug: Web/MathML/Element
tags:
  - MathML
  - MathML Reference
---
{{MathMLRef}}

This is an alphabetical list of MathML **presentation** elements.

The term **presentation markup** is used to describe the layout structure of mathematical notation whereas **content markup** provides the underlying mathematical meaning and is not supposed to be rendered by the MathML parser (see {{ bug(276028) }}). If you want to learn more about content markup you should consider [Chapter 4](https://www.w3.org/TR/MathML3/chapter4.html) in the [MathML 3 specification](https://www.w3.org/TR/MathML3/).

MathML elements implement the {{domxref("MathMLElement")}} class.

## MathML presentation elements A  to Z

### math

- {{MathMLElement("math")}} (Top-level element)

### A

- {{MathMLElement("maction")}} (Bound actions to sub-expressions)
- {{MathMLElement("maligngroup")}} (Alignment group)
- {{MathMLElement("malignmark")}} (Alignment points)

### E

- {{MathMLElement("menclose")}} (Enclosed contents)
- {{MathMLElement("merror")}} (Enclosed syntax error messages)

### F

- {{MathMLElement("mfenced")}} (Parentheses) {{deprecated_inline}}
- {{MathMLElement("mfrac")}} (Fraction)

### I

- {{MathMLElement("mi")}} (Identifier)

### L

- {{MathMLElement("mlongdiv")}} (Long division notation)

### M

- {{MathMLElement("mmultiscripts")}} (Prescripts and tensor indices)

### N

- {{MathMLElement("mn")}} (Number)

### O

- {{MathMLElement("mo")}} (Operator)
- {{MathMLElement("mover")}} (Overscript)

### P

- {{MathMLElement("mpadded")}} (Space around content)
- {{MathMLElement("mphantom")}} (Invisible content with reserved space)

### R

- {{MathMLElement("mroot")}} (Radical with specified index)
- {{MathMLElement("mrow")}} (Grouped sub-expressions)

### S

- {{MathMLElement("ms")}} (String literal)
- {{MathMLElement("mscarries")}} (Annotations such as carries)
- {{MathMLElement("mscarry")}} (Single carry, child element of {{MathMLElement("mscarries")}})
- {{MathMLElement("msgroup")}} (Grouped rows of {{MathMLElement("mstack")}} and {{MathMLElement("mlongdiv")}} elements)
- {{MathMLElement("msline")}} (Horizontal lines inside {{MathMLElement("mstack")}} elements)
- {{MathMLElement("mspace")}} (Space)
- {{MathMLElement("msqrt")}} (Square root without an index)
- {{MathMLElement("msrow")}} (Rows in {{MathMLElement("mstack")}} elements)
- {{MathMLElement("mstack")}} (Stacked alignment)
- {{MathMLElement("mstyle")}} (Style change)
- {{MathMLElement("msub")}} (Subscript)
- {{MathMLElement("msup")}} (Superscript)
- {{MathMLElement("msubsup")}} (Subscript-superscript pair)

### T

- {{MathMLElement("mtable")}} (Table or matrix)
- {{MathMLElement("mtd")}} (Cell in a table or a matrix)
- {{MathMLElement("mtext")}} (Text)
- {{MathMLElement("mtr")}} (Row in a table or a matrix)

### U

- {{MathMLElement("munder")}} (Underscript)
- {{MathMLElement("munderover")}} (Underscript-overscript pair)

### Other elements

- {{MathMLElement("semantics")}} (Container for semantic annotations)
- [`<annotation>`](/en-US/docs/Web/MathML/Element/semantics#annotation) (Data annotations)
- [`<annotation-xml>`](/en-US/docs/Web/MathML/Element/semantics#annotation-xml) (XML annotations)

## MathML presentation elements by category

### Top-level elements

- {{MathMLElement("math")}}

### Token elements

- {{MathMLElement("mi")}}
- {{MathMLElement("mn")}}
- {{MathMLElement("mo")}}
- {{MathMLElement("ms")}}
- {{MathMLElement("mspace")}}
- {{MathMLElement("mtext")}}

### General layout

- {{MathMLElement("menclose")}}
- {{MathMLElement("merror")}}
- {{MathMLElement("mfenced")}} {{deprecated_inline}}
- {{MathMLElement("mfrac")}}
- {{MathMLElement("mpadded")}}
- {{MathMLElement("mphantom")}}
- {{MathMLElement("mroot")}}
- {{MathMLElement("mrow")}}
- {{MathMLElement("msqrt")}}
- {{MathMLElement("mstyle")}}

### Script and limit elements

- {{MathMLElement("mmultiscripts")}}
- {{MathMLElement("mover")}}
- {{MathMLElement("mprescripts")}}
- {{MathMLElement("msub")}}
- {{MathMLElement("msubsup")}}
- {{MathMLElement("msup")}}
- {{MathMLElement("munder")}}
- {{MathMLElement("munderover")}}
- {{MathMLElement("none")}}

### Tabular math

- {{MathMLElement("maligngroup")}}
- {{MathMLElement("malignmark")}}
- {{MathMLElement("mtable")}}
- {{MathMLElement("mtd")}}
- {{MathMLElement("mtr")}}

### Elementary math

- {{MathMLElement("mlongdiv")}}
- {{MathMLElement("mscarries")}}
- {{MathMLElement("mscarry")}}
- {{MathMLElement("msgroup")}}
- {{MathMLElement("msline")}}
- {{MathMLElement("msrow")}}
- {{MathMLElement("mstack")}}

### Uncategorized elements

- {{MathMLElement("maction")}}

## Semantic annotations

- [`<annotation>`](/en-US/docs/Web/MathML/Element/semantics#annotation)
- [`<annotation-xml>`](/en-US/docs/Web/MathML/Element/semantics#annotation-xml)
- {{MathMLElement("semantics")}}

## See also

- [MathML](/en-US/docs/Web/MathML)
- [MathML attribute reference](/en-US/docs/Web/MathML/Attribute)
