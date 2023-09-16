---
title: <xsl:number>
slug: Web/XSLT/Element/number
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:number>` element counts things sequentially. It can also be used to quickly format a number.

### Syntax

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-STRING
  lang=XML:LANG-CODE
  letter-value="alphabetic" | "traditional"
  grouping-separator=CHARACTER
  grouping-size=NUMBER  />
```

### Required Attributes

None.

### Optional Attributes

- `count`
  - : Specifies what in the source tree should be numbered sequentially. It uses an XPath expression.
- `level`

  - : Defines how levels of the source tree should be considered in generating sequential numbers. It has three valid values: `single`, `multiple`, and `any`. The default value is `single`:

    - `single`
      - : Numbers sibling nodes sequentially, as in the items in a list. The processor goes to the first node in the [`ancestor-or-self`](/en-US/docs/Web/XPath/Axes#ancestor-or-self) axis that matches the `count` attribute and then counts that node plus all its preceding siblings (stopping when it reaches a match to the `from` attribute, if there is one) that also match the `count` attribute. If no match is found, the sequence will be an empty list.
    - `multiple`
      - : Numbers nodes as a composite sequence that reflects the hierarchic position of the node, e.g. 1.2.2.5. (The nested format can be specified with the `format` attribute, e.g. A.1.1). The processor looks at all [`ancestors`](/en-US/docs/Web/XPath/Axes#ancestor) of the current node and the current node itself, stopping when it reaches a match for the `from` attribute, if there is one. For each node in this list that matches the `count` attribute, the processor counts how many preceding matching siblings it has, and adds one for the node itself. If no match is found, the sequence will be an empty list.
    - `any` (Not supported at this time.)
      - : Numbers all matching nodes, regardless of level, sequentially. The [`ancestor`](/en-US/docs/Web/XPath/Axes#ancestor), [`self`](/en-US/docs/Web/XPath/Axes#self), and [`preceding`](/en-US/docs/Web/XPath/Axes#preceding) axes are all considered. The processor starts at the current node and proceeds in reverse document order, stopping if it reaches a match to any `from` attribute. If no match to the `count` attribute is found, the sequence will be an empty list. This level is not supported at this time.

- `from`
  - : Specifies where the numbering should start or start over. The sequence begins with the first descendant of the node that matches the `from` attribute.
- `value`
  - : Applies a given format to a number. This is a quick way to format a user-supplied number (as opposed to a node sequence number) in any of the standard `<xsl:number>` formats.
- `format`

  - : Defines the format of the generated number:

    - `format="1"`
      - : `1 2 3 . . .` (This is the only format supported at this time)
    - `format="01"`
      - : `01 02 03 . . . 09 10 11 . . .`
    - `format="a"`
      - : `a b c . . .y z aa ab . . .`
    - `format="A"`
      - : `A B C . . . Y Z AA AB . . .`
    - `format="i"`
      - : `i ii iii iv v . . .`
    - `format="I"`
      - : `I II III IV V . . .`

- `lang` (Not supported at this time.)
  - : Specifies which language's alphabet should be used in letter-based numbering formats.
- `letter-value`
  - : Disambiguates between numbering sequences that use letters. Some languages have more than one numbering system that use letters. If both systems begin with the same token, ambiguity can arise. This attribute can have the value "`alphabetic`" or "`traditional`". The default is "`alphabetic`".
- `grouping-separator`
  - : Specifies what character should be used as the group (e.g. thousands) separator. The default is the comma (`,`).
- `grouping-size`
  - : Indicates the number of digits that make up a numeric group. The default value is "`3`".

### Type

Instruction, appears within a template.

### Defined

XSLT, section 7.7

### Gecko support

Partial support. See comments above.
