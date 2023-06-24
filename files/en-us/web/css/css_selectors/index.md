---
title: CSS selectors
slug: Web/CSS/CSS_Selectors
page-type: css-module
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef}}

The **CSS selectors** module defines the patterns to select elements to which a set of CSS rules are then applied. We are provided with five combinators and more than 60 selectors.

- {{CSSXref("Adjacent_sibling_combinator","+")}} ([next-, or adjacent-", sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator))
- {{CSSXref("Child_combinator", "&gt;")}} ([child combinator](/en-US/docs/Web/CSS/Child_combinator))
- {{CSSXref("||")}} ([column combinator](/en-US/docs/Web/CSS/Column_combinator)) {{Experimental_Inline}}
- {{CSSXref("General_sibling_combinator", "~")}} ([general-, or subsequent-, sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator))
- {{CSSXref("descendant_combinator", "&nbsp;")}} ([descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator))
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

- Pseudoclass
- Combinator
- [Simple selector](/en-US/docs/Web/CSS/CSS_selectors/selectors_guide#structure-of-a-selector)
- [Compound selector](/en-US/docs/Web/CSS/CSS_selectors/selectors_guide#structure-of-a-selector)
- [Complex selector]()
- [Relative selector]()
- [Selector list](/en-US/docs/Web/CSS/Selector_list)

### Guides

- [CSS selectors guide](/en-US/docs/Web/CSS/CSS_selectors/selectors_guide)

  - : Overview of the selectors, combinators, and terminology introduced in the CSS selectors module.

- [Attribute selector](/en-US/docs/Web/CSS/Attribute_selectors)

  - : Selects elements that have the given attribute, with optional substring values.

- [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes)

  - : The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.

- [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements)

  - : The `::` pseudo represent entities that are not included in HTML.

## Related concepts

- [Pseudo-elements]()

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
- [`:has()`-allowed pseudo-elements]()

## Specifications

{{Specifications}}

## See also

- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
