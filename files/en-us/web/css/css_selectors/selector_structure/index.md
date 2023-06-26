---
title: CSS selector structure
slug: Web/CSS/CSS_Selectors/Selector_structure
page-type: guide
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef("Selectors")}}

The term 'selector' can refer to one of the following:

### Simple selector

A **simple selector** is a selector with a single component, such as a single type selector, attribute selector, or pseudo-class, that's not used in combination with or contains any other selector component or combinator. A given element is said to match a simple selector when that simple selector accurately describes the element. All [basic selectors](#basic_selectors), attribute selectors, and single [pseudo-classes and pseudo-element](#pseudo-classes_and_pseudo-elements) selectors are simple selectors.

```css
#myId {
}
[pattern*="\d"] {
}
```

### Compound selector

A **compound selector** is a sequence of [simple selectors](#simple_selector) that are not separated by a [combinator](#combinators). A compound selector represents a set of simultaneous conditions on a single element. A given element is said to match a compound selector when the element matches all the simple selectors in the compound selector.

In a compound selector, the [type selector](/en-US/docs/Web/CSS/Type_selectors) or a [universal selector](/en-US/docs/Web/CSS/Universal_selectors) in a compound selector must come first in the sequence of selectors. Only one type selector or universal selector is allowed in the sequence. Since whitespace represents the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), no whitespace is allowed between the simple selectors in a compound selector.

```css
a#selected {
}
```

### Complex selector

A **complex selector** is a sequence of one or more simple and/or [compound selectors](#compound_selector) that are separated by [combinators](#combinators). A complex selector represents a set of simultaneous conditions on a set of elements. These conditions apply in the context of relationships described by the combinators. A given element is said to match a complex selector when the element matches compound selectors and the combinators between the compound selectors.

```css
a#selected > .icon {
}
.box h2 + p {
}
a .icon {
}
```

### Relative selector

A **relative selector** is a selector representing an element relative to one or more anchor elements preceded by a combinator. Relative selectors that don't begin with an explicit [combinator](#combinators) have an implied [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator).

```css
+ div#topic > #reference {
}
> .icon {
}
dt:has(+ img) ~ dd {
}
```

### Selector list

A [**selector list**](/en-US/docs/Web/CSS/Selector_list) is a comma-separated list of [simple](#simple_selector), [compound](#compound_selector), or [complex](#complex_selector) selectors. If the constituent selector type of a selector list is important but unspecified, it is called a _complex selector list_. A given element is said to match a selector list when the element matches any (at least one) of the selectors in that selector list. Read more about when a selector list is deemed [invalid](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list) and how to construct a [forgiving selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list).

```css
#main,
article.heading {
}
```

Selectors can be restricted to a specific namespace or to all namespaces.

**Syntax:** `*` `ns|*` `*|*`

## Specifications

{{Specifications}}

See the [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes#specifications) and [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#specifications) specification tables for details on those.
