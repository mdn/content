---
title: CSS selectors
slug: Web/CSS/CSS_Selectors
tags:
  - CSS
  - Guide
  - Overview
  - Reference
  - Selectors
---
{{CSSRef("Selectors")}}

**CSS selectors** define the elements to which a set of CSS rules apply.

> **Note:** There are no selectors or combinators to select parent items, siblings of parents, or children of parent siblings.

## Basic selectors

- [Universal selector](/en-US/docs/Web/CSS/Universal_selectors)
  - : Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.
    **Syntax:** `*` `ns|*` `*|*`
    **Example:** `*` will match all the elements of the document.
- [Type selector](/en-US/docs/Web/CSS/Type_selectors)
  - : Selects all elements that have the given node name.
    **Syntax:** `elementname`
    **Example:** `input` will match any {{HTMLElement("input")}} element.
- [Class selector](/en-US/docs/Web/CSS/Class_selectors)
  - : Selects all elements that have the given `class` attribute.
    **Syntax:** `.classname`
    **Example:** `.index` will match any element that has a class of "index".
- [ID selector](/en-US/docs/Web/CSS/ID_selectors)
  - : Selects an element based on the value of its `id` attribute. There should be only one element with a given ID in a document.
    **Syntax:** `#idname`
    **Example:** `#toc` will match the element that has the ID "toc".
- [Attribute selector](/en-US/docs/Web/CSS/Attribute_selectors)
  - : Selects all elements that have the given attribute.
    **Syntax:** `[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`
    **Example:** `[autoplay]` will match all elements that have the `autoplay` attribute set (to any value).

## Grouping selectors

- [Selector list](/en-US/docs/Web/CSS/Selector_list)
  - : The `,` is a grouping method, it selects all the matching nodes.
    **Syntax:** `A, B`
    **Example:** `div, span` will match both {{HTMLElement("span")}} and {{HTMLElement("div")}} elements.

## Combinators

- [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator)
  - : The ` ` (space) combinator selects nodes that are descendants of the first element.
    **Syntax:** `A B`
    **Example:** `div span` will match all {{HTMLElement("span")}} elements that are inside a {{HTMLElement("div")}} element.
- [Child combinator](/en-US/docs/Web/CSS/Child_combinator)
  - : The `>` combinator selects nodes that are direct children of the first element.
    **Syntax:** `A > B`
    **Example:** `ul > li` will match all {{HTMLElement("li")}} elements that are nested directly inside a {{HTMLElement("ul")}} element.
- [General sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator)
  - : The `~` combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.
    **Syntax:** `A ~ B`
    **Example:** `p ~ span` will match all {{HTMLElement("span")}} elements that follow a {{HTMLElement("p")}}, immediately or not.
- [Adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
  - : The `+` combinator matches the second element only if it _immediately_ follows the first element.
    **Syntax:** `A + B`
    **Example:** `h2 + p` will match all {{HTMLElement("p")}} elements that _immediately_ follows {{HTMLElement("h2")}} element.
- [Column combinator](/en-US/docs/Web/CSS/Column_combinator) {{Experimental_Inline}}
  - : The `||` combinator selects nodes which belong to a column.
    **Syntax:** `A || B`
    **Example:** `col || td` will match all {{HTMLElement("td")}} elements that belong to the scope of the {{HTMLElement("col")}}.

## Pseudo

- [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes)
  - : The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.
    **Example:** `a:visited` will match all {{HTMLElement("a")}} elements that have been visited by the user.
- [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements)
  - : The `::` pseudo represent entities that are not included in HTML.
    **Example:** `p::first-line` will match the first line of all {{HTMLElement("p")}} elements.

## Specifications

| Specification                                        | Status                               | Comment                                                                                                                                                                                                                                             |
| ---------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Selectors")}}             | {{Spec2("CSS4 Selectors")}} | Added the `\|\|` column combinator, grid structural selectors, logical combinators, location, time-dimensional, resource state, linguistic and UI pseudo-classes, modifier for ASCII case-sensitive and case-insensitive attribute value selection. |
| {{SpecName("CSS3 Selectors")}}             | {{Spec2("CSS3 Selectors")}} | Added the `~` general sibling combinator and tree-structural pseudo-classes. Made pseudo-elements use a `::` double-colon prefix. Additional attribute selectors                                                                                    |
| {{SpecName("CSS2.1", "selector.html")}} | {{Spec2("CSS2.1")}}             | Added the `>` child and `+` adjacent sibling combinators. Added the **universal** and **attribute** selectors.                                                                                                                                      |
| {{SpecName("CSS1")}}                         | {{Spec2("CSS1")}}             | Initial definition.                                                                                                                                                                                                                                 |

See the [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes#Specifications) and [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#Specifications) specification tables for details on those.

## See also

- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
