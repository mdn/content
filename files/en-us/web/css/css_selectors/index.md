---
title: CSS selectors
slug: Web/CSS/CSS_Selectors
page-type: css-module
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef}}

The **CSS selectors** module defines the patterns to select elements to which a set of CSS rules are then applied. We are provided with five combinators and more than 60 selectors.

## Reference

### Combinators

- {{CSSXref("Adjacent_sibling_combinator","+")}} ([next-, or adjacent-", sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator))
- {{CSSXref("Child_combinator", "&gt;")}} ([child combinator](/en-US/docs/Web/CSS/Child_combinator))
- {{CSSXref("||")}} ([column combinator](/en-US/docs/Web/CSS/Column_combinator)) {{Experimental_Inline}}
- {{CSSXref("General_sibling_combinator", "~")}} ([general-, or subsequent-, sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator))
- {{CSSXref("descendant_combinator", "&nbsp;")}} ([descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator))

### Selectors

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":closed")}}
- {{CSSXref(":current")}}
- {{CSSXref(":current", ":current()")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{CSSXref(":dir()")}}
- {{CSSXref(":disabled")}}
- {{CSSXref(":empty")}}
- {{CSSXref(":enabled")}}
- {{CSSXref(":first-child")}}
- {{CSSXref(":first-of-type")}}
- {{CSSXref(":focus")}}
- {{CSSXref(":focus-visible")}}
- {{CSSXref(":focus-within")}}
- {{CSSXref(":fullscreen")}}
- {{CSSXref(":future")}}
- {{CSSXref(":has", ":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":local-link")}}
- {{CSSXref(":matches()")}}
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not()")}}
- {{CSSXref(":nth-child()")}}
- {{CSSXref(":nth-col", ":nth-col()")}}
- {{CSSXref(":nth-last-child()")}}
- {{CSSXref(":nth-last-col", ":nth-last-col()")}}
- {{CSSXref(":nth-last-of-type()")}}
- {{CSSXref(":nth-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":open")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":target-within")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- {{CSSXref(":user-invalid")}}
- [`:-webkit-` pseudo-classes](/en-US/docs/Web/CSS/WebKit_Extensions#pseudo-classes)
- {{CSSXref("Attribute selector")}}
- [Class selector](/en-US/docs/Web/CSS/Class_selectors)
- [ID selector](/en-US/docs/Web/CSS/ID_selectors)
- [Type selector](/en-US/docs/Web/CSS/Type_selectors)
- [Universal selector](/en-US/docs/Web/CSS/Universal_selectors)

## Definitions

- {{glossary("Pseudo-class")}} glossary term
- Combinator
- [Simple selector](/en-US/docs/Web/CSS/CSS_selectors/selectors_guide#structure-of-a-selector)
- [Compound selector](/en-US/docs/Web/CSS/CSS_selectors/selectors_guide#structure-of-a-selector)
- [Complex selector]()
- [Relative selector]()
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- {{CSSXref("Specificity")}}
- Selectors can be restricted to a specific namespace or to all namespaces. `*` `ns|*` `*|*`

## Guides

- [CSS selectors and combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Overview of the different types of simple selectors and the various combinators defined in the CSS selectors and pseudo modules.

- [CSS selector structure](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : The structure of CSS selectors and the terminology introduced in the selectors module, from "simple selector" to "forgiving relative selector list".

- [Attribute selector](/en-US/docs/Web/CSS/Attribute_selectors)

  - : Selects elements that have the given attribute, with optional substring values.

- [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes)

  - : The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.

- [Learn: CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

  - Part of CSS building blocks, includes tutorials on [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors), [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors), [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators), [Cascade, specificity, and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), and [Cascade layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers).

- [Learn: Using the `:target` pseudo-class in selectors](/en-US/docs/Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors)

  - :

- [Learn: UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)

  - : The different UI pseudo-classes available for styling forms in different states

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  - :

## Related concepts

- [Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) (representing entities not included in HTML)

  - {{CSSXref("::after")}}
  - {{CSSXref("::before")}}
  - {{CSSXref("::file-selector-button")}}
  - {{CSSXref("::first-letter")}}
  - {{CSSXref("::first-line")}}
  - {{CSSXref("::grammar-error")}}
  - {{CSSXref("::marker")}}
  - {{CSSXref("::placeholder")}}
  - {{CSSXref("::postfix")}}
  - {{CSSXref("::prefix")}}
  - {{CSSXref("::selection")}}
  - {{CSSXref("::spelling-error")}}
  - {{CSSXref("::target-text")}}

- [cascade layer]()

## Specifications

{{Specifications}}

## See also

- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
