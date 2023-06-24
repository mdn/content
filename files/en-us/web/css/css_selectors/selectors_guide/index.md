---
title: CSS selectors guide
slug: Web/CSS/CSS_Selectors/Selectors_guide
page-type: landing-page
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef("Selectors")}}

**CSS selectors** define the pattern to select elements to which a set of CSS rules are then applied.

CSS selectors can be grouped into the following categories based on the type of elements they can select.

## Selector types

There are over 80 selectors and combinators.

### Basic selectors

The [type selector](/en-US/docs/Web/CSS/Type_selectors) selects all elements that have the given node name. For example, `div` will select all {{HTMLElement("div")}} elements and `input` will match any {{HTMLElement("input")}} element. The [universal selector](/en-US/docs/Web/CSS/Universal_selectors), denoted with an asterisk (`*`), is a special type selector that selects all elements.

The [class selector](/en-US/docs/Web/CSS/Class_selectors) selects all elements that have the given `class` attribute denoted by the class name prefixed with a period (`.`). For example, `.index` will match any element that has `class="index"`. The [ID selector](/en-US/docs/Web/CSS/ID_selectors) selects an element based on the value of its `id` attribute. The selector is the `id` prefixed with an octothorp (`#`). For example, `#toc` will match the element that has `id="toc"`. Both [`class`](/en-US/docs/Web/HTML/Global_attributes/class) and [`id`](/en-US/docs/Web/HTML/Global_attributes/id) are global attributes. There should be only one element with a given `id` in a document; but if there are more than one, the ID selector will match all the elements with that `id`.

#### CSS

We declare four [simple selectors](#simple-selector) using the four basic selector types.

```css
* {
  font-style: italic;
}
p {
  color: red;
}
.myClass {
  text-decoration: underline;
}
#myId {
  font-family: monospace;
}
```

#### HTML

```html
<p class="myClass" id="myId">I match everything.</p>
<p>I match the universal and type selectors only.</p>
```

#### Result

{{EmbedLiveSample("Basic selectors", "100%", 100)}}

## Combinators

With CSS combinators we can combineselectors to select DOM nodes based on their relationship to other elements within the document node tree.

The [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), denoted with one or more spaces, selects nodes that are descendants of the first element. For example, `div span` will match all {{HTMLElement("span")}} elements that are inside a {{HTMLElement("div")}} element.

The [child combinator](/en-US/docs/Web/CSS/Child_combinator) is more specific than the descendant combinator. Denoted with the greater than character (`>`), the child combinator selects nodes that are direct children of the first element. Adding to our previous example, `div > span` will match only the {{HTMLElement("span")}} elements that direct children of a {{HTMLElement("div")}} element.

In addition to descendant selectors, CSS also enable selecting elements based on their siblings. The [general sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator), denoted with a tilde (`~`) selects siblings. Given `A ~ B`, all elements matching `B` will be selected if they are preceded by `A`, with both `A` and `B` sharing the same parent. For example, `h2 ~ p` will match all {{HTMLElement("p")}} elements that follow an {{HTMLElement("Heading_Elements", "h2")}}, immediately or not.

The [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator), denoted by the plus symbol (`+`) is similar to the general sibling, but given `A + B`, it only matches `B` if `B` is immediately preceded by `A`, with both sharing the same parent. Amending our previous example, `h2 + p` will match only the single `<p>` element that _immediately_ follows an `<h2>` element.

There is also a [column combinator](/en-US/docs/Web/CSS/Column_combinator), denoted by two pipe characters ( `||`), which, when supported, selects nodes that belong to a column. For example, `col || td` will match all {{HTMLElement("td")}} elements that belong to the scope of the {{HTMLElement("col")}}.

#### CSS

We declare four [compound selectors](#compund-selector) using the basic selectors with combinators.

```css
h2 ~ p {
  font-style: italic;
}
h2 + p + p {
  color: red;
}
.myClass + p {
  text-decoration: underline;
}
#myId > .myClass {
  font-family: monospace;
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  Nothing selectors match; not even the last one.
</h2>
<p>The first paragraph is underlined. All the paragraphs are italic</p>
<p>The second paragraph is red. All the paragraphs are italic</p>
<p>The third paragraph is NOT red. All the paragraphs are italic.</p>
<p class="myClass">Monospace font as this is a child of #myId.</p>
```

#### Result

{{EmbedLiveSample("Combinators", "100%", 400)}}

### Attribute selectors

[Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) selects all elements that, depending on how the selector is written, either have the given attribute or have the given attribute with a substring value match.
For example, `[type]` will match all elements that have the `type` attribute set (to any value).

Additionally, [type="submit"] will match `<input type="submit">` and `<button type="submit">`. If the attribute is an enumerated HTML attribute, the value in the selector is case-insensitive, even if the value is not one of the enumerated values or if the attribute is not a valid value for the element on which it is set. For non-enumerated attributes, like `class`, `id`, or any `data-*` attribute, or non-HTML attributes, like `role` or `aria-*` attributes, the value match is case sensitive, but can be made case insensitive with a case-insensitive modifier (`i`).

## Pseudo-classes and pseudo-elements

- [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes)

  - : The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.

    **Example:** `a:visited` will match all {{HTMLElement("a")}} elements that have been visited by the user.

- [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements)

  - : The `::` pseudo represent entities that are not included in HTML.

    **Example:** `p::first-line` will match the first line of all {{HTMLElement("p")}} elements.

## Structure of a selector

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

## See also

- [`:has()` pseudo class](/en-US/docs/Web/CSS/:has)
- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
