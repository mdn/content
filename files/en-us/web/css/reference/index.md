---
title: CSS reference
slug: Web/CSS/Reference
tags:
  - CSS
  - Guide
  - Overview
  - Reference
  - l10n:priority
---
{{CSSRef}}

Use this **CSS reference** to browse an [alphabetical index](#index) of all of the standard [CSS](/en-US/docs/Web/CSS) properties, [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes), [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), [data types](/en-US/docs/Web/CSS/CSS_Types), [functional notations](/en-US/docs/Web/CSS/CSS_Functions) and [at-rules](/en-US/docs/Web/CSS/At-rule). You can also browse [key CSS concepts](#concepts) and a list of [selectors organized by type](#selectors). Also included is a brief [DOM-CSS / CSSOM reference](#dom-css_cssom).

## Basic rule syntax

### Style rule syntax

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Where :

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

See the index of [_selectors_](#selectors), [_pseudo-classes_](#pseudo), and _[pseudo-elements](#pseudo)_ below. The syntax for each specified _value_ depends on the data type defined for each specified _property_.

#### Style rule examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

For a beginner-level introduction to the syntax of selectors, see our [guide on CSS Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors). Be aware that any [syntax](/en-US/docs/Web/CSS/Syntax) error in a rule definition invalidates the entire rule. Invalid rules are ignored by the browser. Note that CSS rule definitions are entirely (ASCII) [text-based](https://www.w3.org/TR/css-syntax-3/#intro), whereas DOM-CSS / CSSOM (the rule management system) is [object-based](https://www.w3.org/TR/cssom/#introduction).

### At-rule syntax

As the structure of at-rules varies widely, please see [At-rule](/en-US/docs/Web/CSS/At-rule) to find the syntax of the specific one you want.

## Index

> **Note:** The property names in this index do **not** include the [JavaScript names](/en-US/docs/Web/CSS/CSS_Properties_Reference) where they differ from the CSS standard names.

{{CSS_Ref}}

## Selectors

The following are the various [selectors](/en-US/docs/Web/CSS/CSS_Selectors), which allow styles to be conditional based on various features of elements within the DOM.

### Basic selectors

**Basic selectors** are fundamental selectors; these are the most basic selectors that are frequently combined to create other, more complex selectors.

- [Universal selector](/en-US/docs/Web/CSS/Universal_selectors) `*`
- [Type selector](/en-US/docs/Web/CSS/Type_selectors) `elementname`
- [Class selector](/en-US/docs/Web/CSS/Class_selectors) `.classname`
- [ID selector](/en-US/docs/Web/CSS/ID_selectors) `#idname`
- [Attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Grouping selectors

- [Selector list](/en-US/docs/Web/CSS/Selector_list) `A, B`
  - : Specifies that both `A` and `B` elements are selected. This is a grouping method to select several matching elements.

### Combinators

Combinators are selectors that establish a relationship between two or more simple selectors, such as "`A` is a child of `B`" or "`A` is adjacent to `B`", creating a complex selector.

- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - : Specifies that the elements selected by both `A` and `B` have the same parent and that the element selected by `B` immediately follows the element selected by `A` horizontally.
- [General sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - : Specifies that the elements selected by both `A` and `B` share the same parent and that the element selected by `A` comes before—but not necessarily immediately before—the element selected by `B`.
- [Child combinator](/en-US/docs/Web/CSS/Child_combinator) `A > B`
  - : Specifies that the element selected by `B` is the direct child of the element selected by `A`.
- [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator) `A B`
  - : Specifies that the element selected by `B` is a descendant of the element selected by `A`, but is not necessarily a direct child.
- [Column combinator](/en-US/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Specifies that the element selected by `B` is located within the table column specified by `A`. Elements which span multiple columns are considered to be a member of all of those columns.

### Pseudo

- [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes) `:`
  - : Specifies a special state of the selected element(s).
- [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements) `::`
  - : Represents entities that are not included in HTML.

> **Callout:**
>
> See also [Selectors in the Selectors Level 4 specification](https://www.w3.org/TR/selectors/#overview).

## Concepts

### Syntax and semantics

- [CSS syntax](/en-US/docs/Web/CSS/Syntax)
- [At-rules](/en-US/docs/Web/CSS/At-rule)
- [Cascade](/en-US/docs/Web/CSS/Cascade)
- [Comments](/en-US/docs/Web/CSS/Comments)
- [Descriptor](</en-US/docs/Glossary/Descriptor_(CSS)>)
- [Inheritance](/en-US/docs/Web/CSS/inheritance)
- [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
- [Specificity](/en-US/docs/Web/CSS/Specificity)
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
- [CSS unit and value types](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [CSS functional notations](/en-US/docs/Web/CSS/CSS_Functions)

### Values

- [Actual value](/en-US/docs/Web/CSS/actual_value)
- [Computed value](/en-US/docs/Web/CSS/computed_value)
- [Initial value](/en-US/docs/Web/CSS/initial_value)
- [Resolved value](/en-US/docs/Web/CSS/resolved_value)
- [Specified value](/en-US/docs/Web/CSS/specified_value)
- [Used value](/en-US/docs/Web/CSS/used_value)

### Layout

- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Containing block](/en-US/docs/Web/CSS/Containing_block)
- [Layout mode](/en-US/docs/Web/CSS/Layout_mode)
- [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
- [Stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Major object types

- {{DOMxRef("Document.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` (selector & style)
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}` (just style)
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### Important methods

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions) (prefixed with `-moz-`)
- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions) (mostly prefixed with `-webkit-`)
- [Microsoft CSS extensions](/en-US/docs/Web/CSS/Microsoft_Extensions) (prefixed with `-ms-`)

## External Links

- [CSS Indices (w3.org)](https://www.w3.org/TR/CSS/#indices)
