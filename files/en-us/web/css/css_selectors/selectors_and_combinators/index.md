---
title: CSS selectors and combinators
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
page-type: guide
spec-urls:
  - https://drafts.csswg.org/selectors/
  - https://drafts.csswg.org/css-pseudo/
---

{{CSSRef("Selectors")}}

CSS selectors are used to define a pattern of the elements that you want to select for applying a set of CSS rules on the selected elements. Combinators define the relationship between the selectors. Using various selectors and combinators, you can precisely select and style the desired elements based on their type, attributes, state, or relationship to other elements.

## Types of selectors

There are over 80 selectors and combinators. CSS selectors can be grouped into the following categories based on the type of elements they can select.

### Basic selectors

The [type selector](/en-US/docs/Web/CSS/Type_selectors) selects all elements that have the given node name. For example, `div` will select all {{HTMLElement("div")}} elements and `input` will match any {{HTMLElement("input")}} element. The [universal selector](/en-US/docs/Web/CSS/Universal_selectors), denoted with an asterisk (`*`), is a special type selector that selects all elements.

The [class selector](/en-US/docs/Web/CSS/Class_selectors) selects all elements that have the given `class` attribute denoted by the class name prefixed with a period (`.`). For example, `.index` will match any element that has `class="index"`. The [ID selector](/en-US/docs/Web/CSS/ID_selectors) selects an element based on the value of its `id` attribute. The selector is the `id` prefixed with a "number sign" (U+0023, `#`). For example, `#toc` will match the element that has `id="toc"`. Both [`class`](/en-US/docs/Web/HTML/Global_attributes/class) and [`id`](/en-US/docs/Web/HTML/Global_attributes/id) are global attributes. There should be only one element with a given `id` in a document; but if there is more than one, the ID selector will match all the elements with that `id`.

When combining a type or universal selector with a class or id selector to create a [compound selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), the type or universal selector must precede the class or id.

#### CSS

In this example, we declare four [simple selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) and one [compound selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) using the four basic selector types, as described above.

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

## Combinators

Using CSS combinators, we can combine selectors to select DOM nodes based on their relationship to other elements within the document node tree. This combining of selectors with combinators creates [complex selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Descendant combinator

The [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), denoted with one or more spaces, selects nodes that are descendants of the first element. For example, `div span` will match all {{HTMLElement("span")}} elements that are inside a {{HTMLElement("div")}} element.

### Child combinator

The [child combinator](/en-US/docs/Web/CSS/Child_combinator) is more specific than the descendant combinator. Denoted with the greater than character (`>`), the child combinator selects nodes that are direct children of the first element. Comparing with our previous example, `div > span` will match only the {{HTMLElement("span")}} elements that are direct children of a {{HTMLElement("div")}} element.

### General sibling combinator

In addition to descendant selectors, CSS also enables selecting elements based on their siblings. The [general sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator), denoted with a tilde (`~`), selects siblings. Given `A ~ B`, all elements matching `B` will be selected if they are preceded by `A`, provided both `A` and `B` share the same parent. For example, `h2 ~ p` will match all {{HTMLElement("p")}} elements that follow an {{HTMLElement("Heading_Elements", "h2")}}, immediately or not.

### Adjacent sibling combinator

The [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator), denoted by the plus symbol (`+`), is similar to the general sibling. However, given `A + B`, it only matches `B` if `B` is immediately preceded by `A`, with both sharing the same parent. Amending our previous example, `h2 + p` will match only the single `<p>` element that _immediately_ follows an `<h2>` element.

### Column combinator

There is also a [column combinator](/en-US/docs/Web/CSS/Column_combinator), denoted by two pipe characters ( `||`), which, when supported, selects nodes that belong to a column. For example, `col || td` will match all {{HTMLElement("td")}} elements that belong to the scope of the {{HTMLElement("col")}}.

### Namespace separator

The [namespace separator](/en-US/docs/Web/CSS/Namespace_separator) is another combinator that is generally used in conjunction with the {{CSSXref("@namespace")}} at-rule. This combinator is denoted by a single pipe character (`|`). It enables limiting [type selectors](/en-US/docs/Web/CSS/Type_selectors) and the [universal selector](/en-US/docs/Web/CSS/Universal_selectors) to a specific namespace. For example, by defining a namespace such as `@namespace SVG url('http://www.w3.org/2000/svg');`, you can include selectors that target elements nested in an SVG namespace only. Declaring `SVG|a` would match links within SVGs and not those in the rest of the document. Namespacing can be useful to target MathML, SVG, or other XML-based content within your HTML.

#### CSS

In this example, we declare five [relative selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) using [simple selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) combined with combinators.

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
  outline: 3px dashed red;
}
> p {
  font-size: 1.1rem;
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  No selectors match. <span class="myClass">This span has an outline</span> as
  it is both myClass and a child of #myId.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem.</p>
<p>
  The second paragraph is red. This and the following paragraphs are italic.
</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Does not have an outline; this is a sibling of H2, not a child. It is italic
  and 1.1rem.
</p>
```

#### Result

{{EmbedLiveSample("Combinators", "100%", 300)}}

## Attribute selectors

[Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) select all elements that, depending on how the selector is written, either have the given attribute or have the given attribute with a substring value match.
For example, `[type]` will match all elements that have the `type` attribute set (to any value), and `[type="submit"]` will match `<input type="submit">` and `<button type="submit">`, or any element with `type="submit"` set, even though this attribute-value pair is only supported on {{HTMLElement("input")}} and {{HTMLElement("button")}} elements. The match is case-insensitive.

The case sensitivity of the attribute depends on the language. Generally, in HTML, if an attribute is {{glossary("enumerated")}}, the value in the selector is case-insensitive, even if the value is not one of the enumerated values or if the attribute is not a valid value for the element on which it is set. For non-enumerated attributes, like `class`, `id`, or any `data-*` attribute, or for non-HTML attributes, like `role` or `aria-*` attributes, the value match is case-sensitive; the match can be made case-insensitive with a case-insensitive modifier (`i`).

## Pseudo-class selectors

The [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module defines over 60 [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes). Pseudo-classes are [simple selectors](#simple-selector), prefixed with a colon (`:`), that allow the selection of elements based on state information that is not contained in the document tree. {{CSSxRef("pseudo-classes")}} can be used to style an element based on its _state_.
For example, the {{cssxref(":target")}} simple selector targets element of a URL containing a fragment identifier, and the [`a:visited`](/en-US/docs/Web/CSS/:visited) [compound selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) matches all {{HTMLElement("a")}} elements that have been visited by a user.

The pseudo-classes can be categorized as [element display state](/en-US/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [input](/en-US/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistic](/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [location](/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [resource state](/en-US/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [time-dimensional](/en-US/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [tree-structural](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [user action](/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes), and [functional](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes).

Multiple pseudo-classes can be combined to create [compound selectors](#compound-selector). When combining a pseudo-class into a compound selector with a type or universal selector, the pseudo-class must follow the type selector or universal selector, if present.

## Pseudo-element selectors

Not all CSS selectors are defined in the [CSS selectors module](/en-US/docs/Web/CSS). CSS pseudo-element selectors are defined in the [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module.

CSS [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), prefixed with two colons (`::`), represent entities that are not included in HTML. For example, the simple {{cssxref("::marker")}} selector selects list item bullets, and the compound selector [`p::first-line`](/en-US/docs/Web/CSS/::first-line) matches the first line of all {{HTMLElement("p")}} elements.

## Specifications

{{Specifications}}

See the [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#specifications) and [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements#specifications) specification tables for details on those.

## See also

- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [CSS selector structure](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Specificity](/en-US/docs/Web/CSS/Specificity)
