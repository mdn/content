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
For example, `[type]` will match all elements that have the `type` attribute set (to any value), and [type="submit"] will match `<input type="submit">` and `<button type="submit">`, or any element with `type="submit"` set, case-insensitive, even though that attribute-value pair is only supported on {{HTMLElement("input")}} and {{HTMLElement("button")}}.

The case sensitivity of the attribute depends on the language. Generally, in HTML, if the attribute is an {{glossary("enumerated")}} HTML attribute, the value in the selector is case-insensitive, even if the value is not one of the enumerated values or if the attribute is not a valid value for the element on which it is set. For non-enumerated attributes, like `class`, `id`, or any `data-*` attribute, or non-HTML attributes, like `role` or `aria-*` attributes, the value match is case sensitive, but can be made case insensitive with a case-insensitive modifier (`i`).

### Pseudo-class selectors

The [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors) defines over 60 [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes). Pseudo-classes are [simple selectors](#simple-selector), prefixed with a colon (`:`), that allow the selection of elements based on state information that is not contained in the document tree.
For example, `a:visited` matches all {{HTMLElement("a")}} elements that have been visited by the user.

There are [element display state](/en-US/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [input](/en-US/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistic](/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [location](/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [resource state](/en-US/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [time-dimensional](/en-US/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [tree-structural](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [user action](/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes), and [functional](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) pseudo-classes.

Multiple pseudo-classes can be combined to create [compound selectors](#compound-selector) When combining a pseudo-class into a compound selector, the pseudo-class must follow the type selector or universal selector, if present.

### Pseudo-element selectors

Now defined in the [CSS pseudo element](/en-US/docs/Web/CSS/CSS_pseudo) specification, [pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements), prefixed with two colons (`::`), represent entities that are not included in HTML. For example, the simple {{cssxref("::target")}} selector selects the target element of a URL containing a fragment identifier and the complex [`p::first-line`](/en-US/docs/Web/CSS/::first-line) selector matches the first line of all {{HTMLElement("p")}} elements.

## Specifications

{{Specifications}}

See the [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes#specifications) and [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#specifications) specification tables for details on those.

## See also

- [`:has()` pseudo class](/en-US/docs/Web/CSS/:has)
- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
