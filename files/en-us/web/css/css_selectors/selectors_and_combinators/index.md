---
title: CSS selectors and combinators
slug: Web/CSS/CSS_Selectors/Selectors_and_combinators
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

When combining a type or universal selector with a class or id selector to create a [compound selector](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#compound_selector), the type or universal selector must precede the class or id.

#### CSS

We declare four [simple selectors](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#simple_selector) and one [compound selector](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#compound_selector) using the four basic selector types.

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
p.myClass#myId {
  font-size: 1.5rem;
}
```

#### HTML

```html
<p class="myClass" id="myId">I match everything.</p>
<p>I match the universal and type selectors only.</p>
```

#### Result

{{EmbedLiveSample("Basic selectors", "100%", 100)}}

### Selector namespaces

[Type selectors](/en-US/docs/Web/CSS/Type_selectors) and the [universal selectors](/en-US/docs/Web/CSS/Universal_selectors) allow an optional namespace component. A namespace prefix that has been previously declared via {{CSSXref("@namespace")}} may be prepended to the element name separated by the namespace separator (`|`). WIth HTML, the `http://www.w3.org/1999/xhtml` namespace is implied. Namespacing can be useful to target MathML, SVG, or other XML based content within your HTML.

For example, by declaring `@namespace SVG url('http://www.w3.org/2000/svg');` you can include selectors targeting elements nested in an SVG namespace only. Declaring `SVG|a` would match links within SVGs and not those in the rest of the document.

## Combinators

With CSS combinators we can combine selectors to select DOM nodes based on their relationship to other elements within the document node tree to create [complex selectors](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#complex_selector).

The [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), denoted with one or more spaces, selects nodes that are descendants of the first element. For example, `div span` will match all {{HTMLElement("span")}} elements that are inside a {{HTMLElement("div")}} element.

The [child combinator](/en-US/docs/Web/CSS/Child_combinator) is more specific than the descendant combinator. Denoted with the greater than character (`>`), the child combinator selects nodes that are direct children of the first element. Adding to our previous example, `div > span` will match only the {{HTMLElement("span")}} elements that direct children of a {{HTMLElement("div")}} element.

In addition to descendant selectors, CSS also enable selecting elements based on their siblings. The [general sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator), denoted with a tilde (`~`) selects siblings. Given `A ~ B`, all elements matching `B` will be selected if they are preceded by `A`, with both `A` and `B` sharing the same parent. For example, `h2 ~ p` will match all {{HTMLElement("p")}} elements that follow an {{HTMLElement("Heading_Elements", "h2")}}, immediately or not.

The [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator), denoted by the plus symbol (`+`) is similar to the general sibling, but given `A + B`, it only matches `B` if `B` is immediately preceded by `A`, with both sharing the same parent. Amending our previous example, `h2 + p` will match only the single `<p>` element that _immediately_ follows an `<h2>` element.

There is also a [column combinator](/en-US/docs/Web/CSS/Column_combinator), denoted by two pipe characters ( `||`), which, when supported, selects nodes that belong to a column. For example, `col || td` will match all {{HTMLElement("td")}} elements that belong to the scope of the {{HTMLElement("col")}}.

#### CSS

We declare five [relative selectors](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#relative_selector) using [simple selectors](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#simple_selector) combined with combinators.

```css
h2 + p ~ p {
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
> p {
  font-size: 1.1rem;
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  Nothing selectors match; not even the last one.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem</p>
<p>The second paragraph is red. This and the next paragraphs are italic</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Monospace font as this is a child of #myId. It is also italic and 1.1rem.
</p>
```

#### Result

{{EmbedLiveSample("Combinators", "100%", 400)}}

### Attribute selectors

[Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) select all elements that, depending on how the selector is written, either have the given attribute or have the given attribute with a substring value match.
For example, `[type]` will match all elements that have the `type` attribute set (to any value), and [type="submit"] will match `<input type="submit">` and `<button type="submit">`, or any element with `type="submit"` set, case-insensitive, even though that attribute-value pair is only supported on {{HTMLElement("input")}} and {{HTMLElement("button")}}.

The case sensitivity of the attribute depends on the language. Generally, in HTML, if the attribute is an {{glossary("enumerated")}} HTML attribute, the value in the selector is case-insensitive, even if the value is not one of the enumerated values or if the attribute is not a valid value for the element on which it is set. For non-enumerated attributes, like `class`, `id`, or any `data-*` attribute, or non-HTML attributes, like `role` or `aria-*` attributes, the value match is case sensitive, but can be made case insensitive with a case-insensitive modifier (`i`).

### Pseudo-class selectors

The [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors) defines over 60 [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes). Pseudo-classes are [simple selectors](#simple-selector), prefixed with a colon (`:`), that allow the selection of elements based on state information that is not contained in the document tree.
For example, the simple {{cssxref(":target")}} selector target element of a URL containing a fragment identifier and the [`a:visited`](/en-US/docs/Web/CSS/:visited) [compound selector](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure#compound_selector) matches all {{HTMLElement("a")}} elements that have been visited by the user.

There are [element display state](/en-US/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [input](/en-US/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistic](/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [location](/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [resource state](/en-US/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [time-dimensional](/en-US/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [tree-structural](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [user action](/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes), and [functional](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) pseudo-classes.

Multiple pseudo-classes can be combined to create [compound selectors](#compound-selector). When combining a pseudo-class into a compound selector with a type or universal selector, the pseudo-class must follow the type selector or universal selector, if present.

> **Note:** In contrast to pseudo-elements, {{CSSxRef("pseudo-classes")}} can be used to style an element based on its _state_.

### Pseudo-element selectors

Not all CSS selectors are defined in the [CSS selectors module](/en-US/docs/Web/CSS/). CSS pseudo-element selectors are defined in a [CSS pseudo-element module](/en-US/docs/Web/CSS/CSS_pseudo).

CSS [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), prefixed with two colons (`::`), represent entities that are not included in HTML. For example, the simple {{cssxref("::marker")}} selector selects list item bullets and the compound selector [`p::first-line`](/en-US/docs/Web/CSS/::first-line) matches the first line of all {{HTMLElement("p")}} elements.

## Specifications

{{Specifications}}

## Browser compatibility

See the [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes#specifications) and [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#specifications) specification tables for details on those.

## See also

- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [CSS selector structure](/en-US/docs/Web/CSS/CSS_Selectors/Selector_structure)
- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
