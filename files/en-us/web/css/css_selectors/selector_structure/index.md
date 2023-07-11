---
title: CSS selector structure
slug: Web/CSS/CSS_selectors/Selector_structure
page-type: guide
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef("Selectors")}}

The CSS selector represents a particular pattern of element or elements in a tree structure. The term "selector" can refer to a [simple selector](#simple-selector), a [compound selector](#compound-selector), or a [complex selector](#complex-selector). When included in the `:has()` pseudo-class as a parameter, these selectors are referred to as [relative selectors](#relative-selector), representing elements relative to one or more anchor elements.

These selectors can be combined into a comma-separated [selector list](#selector-list). If any selector in a [non-forgiving selector](/en-US/docs/Web/CSS/Selector_list##valid_and_invalid_selector_lists) list is invalid, the entire selector list is invalidated.

### Simple selector

A **simple selector** is a selector with a single component, such as a single type selector, attribute selector, or pseudo-class, that's not used in combination with or contains any other selector component or combinator. A given element is said to match a simple selector when that simple selector accurately describes the element. Any selector that contains a single [basic selector](/en-US/docs/Web/CSS/CSS_Selectors/Selectors_and_combinators#basic_selectors), [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors), [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), or [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) selector is a simple selector.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Compound selector

A **compound selector** is a sequence of [simple selectors](#simple_selector) that are not separated by a [combinator](/en-US/docs/Web/CSS/CSS_Selectors/Selectors_and_combinators#combinators). A compound selector represents a set of simultaneous conditions on a single element. A given element is said to match a compound selector when the element matches all the simple selectors in the compound selector.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In a compound selector, the [type selector](/en-US/docs/Web/CSS/Type_selectors) or [universal selector](/en-US/docs/Web/CSS/Universal_selectors) must come first in the sequence of selectors. Only one type selector or universal selector is allowed in the sequence. As whitespace represents the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), no whitespace is allowed between the simple selectors that make up a compound selector.

### Complex selector

A **complex selector** is a sequence of one or more simple and/or compound selectors that are separated by combinators, including the white space [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator).

A complex selector represents a set of simultaneous conditions on a set of elements.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selectors can be read from right to left. For example, `a#selected > .icon` matches all elements with a class of `icon` that are the direct children of the `<a>` element with the id `selected`. The selector `.box h2 + p` matches the first `<p>`s to come immediately after any `<h2>` elements that are descendants of any element with the class of `box`.

### Relative selector

A **relative selector** is a selector representing an element relative to one or more anchor elements preceded by a combinator. Relative selectors that don't begin with an explicit combinator have an implied [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator).

```css
+ div#topic > #reference {
}

> .icon {
}

dt:has(+ img) ~ dd {
}
```

### Selector list

A [**selector list**](/en-US/docs/Web/CSS/Selector_list) is a comma-separated list of simple, compound, and/or complex selectors. A given element is said to match a selector list when the element matches any (at least one) of the selectors in that selector list.

```css
#main,
article.heading {
}
```

If any selector in a [non-forgiving selector](/en-US/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) list is invalid, the entire selector list is invalidated.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

The {{cssxref("is", ":is()")}} and {{cssxref(":where", ":where()")}} pseudo-classes can be used to construct [forgiving selector lists](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list).

## Specifications

{{Specifications}}

## See also

- [CSS selectors and combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Forgiving selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list)
- {{DOMXref("Document.querySelector()")}}
- {{DOMXref("Document.querySelectorAll()")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo) module
