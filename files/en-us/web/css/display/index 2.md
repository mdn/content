---
title: display
slug: Web/CSS/display
tags:
  - CSS
  - CSS Display
  - CSS Property
  - Reference
  - display
  - recipe:css-property
browser-compat: css.properties.display
---
{{CSSRef}}

The **`display`** [CSS](/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline element](/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

Formally, the **`display`** property sets an element's inner and outer _display types_. The outer type sets an element's participation in [flow layout](/en-US/docs/Web/CSS/CSS_Flow_Layout); the inner type sets the layout of children. Some values of `display` are fully defined in their own individual specifications; for example the detail of what happens when `display: flex` is declared is defined in the CSS Flexible Box Model specification. See [the table at the end of this document](#specifications) for all of the individual specifications.

## Syntax

The CSS `display` property is specified using keyword values.

```css
/* legacy values */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* box generation */
display: none;
display: contents;

/* two-value syntax */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: unset;
```

## Grouped values

The keyword values can be grouped into six value categories.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : These keywords specify the element's outer display type, which is essentially its role in flow layout.

{{page("/en-US/docs/Web/CSS/display-outside", "Syntax")}}

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : These keywords specify the element's inner display type, which defines the type of formatting context that its contents are laid out in (assuming it is a non-replaced element).

{{page("/en-US/docs/Web/CSS/display-inside", "Syntax")}}

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : The element generates a block box for the content and a separate list-item inline box.

{{page("/en-US/docs/Web/CSS/display-listitem", "Syntax")}}

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Some layout models such as `table` and `ruby` have a complex internal structure, with several different roles that their children and descendants can fill. This section defines those "internal" display values, which only have meaning within that particular layout mode.

{{page("/en-US/docs/Web/CSS/display-internal", "Syntax")}}

### Box

- {{CSSxRef("&lt;display-box&gt;")}}
  - : These values define whether an element generates display boxes at all.

{{page("/en-US/docs/Web/CSS/display-box", "Syntax")}}

### Legacy

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 used a single-keyword syntax for the `display` property, requiring separate keywords for block-level and inline-level variants of the same layout mode.

{{page("/en-US/docs/Web/CSS/display-legacy", "Syntax")}}

### Which syntax should you use now?

The Level 3 specification details two values for the `display` property — enabling the specification of the outer and inner display type explicitly — but this is not yet well-supported by browsers.

The `<display-legacy>` methods allow the same results with single keyword values, and should be favoured by developers until the two keyword values are better supported. For example, using two values you might specify an inline flex container as follows:

```css
.container {
  display: inline flex;
}
```

This can currently be specified using a single value.

```css
.container {
  display: inline-flex;
}
```

For more information on these changes to the specification, see the article [Adapting to the new two-value syntax of display](/en-US/docs/Web/CSS/display/two-value_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Description

The individual pages for the different types of value that `display` can have set on it feature multiple examples of those values in action — see the {{anch("Syntax")}} section. In addition, see the following material, which covers the various values of display in depth.

- [Adapting to the new two-value syntax of display](/en-US/docs/Web/CSS/display/two-value_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block and Inline Layout in Normal Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Flow Layout and Overflow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Flow Layout and Writing Modes](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Formatting Contexts Explained](/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [In Flow and Out of Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### display: flex

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Aligning Items in a Flex Container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Controlling Ratios of Flex Items Along the Main Axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Cross-browser Flexbox mixins](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Mastering Wrapping of Flex Items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Ordering Flex Items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Backwards Compatibility of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Typical use cases of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### display: grid

- [Basic Concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship to other layout methods](/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and Accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout and Progressive Enhancement](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizing common layouts using grids](/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Accessibility concerns

### display: none

Using a `display` value of `none` on an element will remove it from the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This will cause the element and all its descendant elements to no longer be announced by screen reading technology.

If you want to visually hide the element, a more accessible alternative is to use [a combination of properties](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) to remove it visually from the screen but keep it parsable by assistive technology such as screen readers.

### display: contents

Current implementations in most browsers will remove from the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) any element with a `display` value of `contents` (but descendants will remain). This will cause the element itself to no longer be announced by screen reading technology. This is incorrect behavior according to the [CSS specification](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tables

Changing the `display` value of a {{HTMLElement("table")}} element to `block`, `grid`, or `flex` will alter its representation in the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This will cause the table to no longer be announced properly by screen reading technology.

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### display value comparison

In this example we have two block-level container elements, each one with three inline children. Below that, we have a select menu that allows you to apply different `display` values to the containers, allowing you to compare and contrast how the different values affect the element's layout, and that of their children.

We've included {{cssxref("padding")}} and {{cssxref("background-color")}} on the containers and their children, so that it is easier to see the effect the display values are having.

> **Note:** We've not included any of the modern two-value syntax, as support for that is still fairly limited.

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</article>

<div>
  <label for="display">Choose a display value:</label>
  <select id="display">
    <option selected>block</option>
    <option>inline</option>
    <option>inline-block</option>
    <option>none</option>
    <option>flex</option>
    <option>inline-flex</option>
    <option>grid</option>
    <option>inline-grid</option>
    <option>table</option>
    <option>list-item</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article, span {
  padding: 10px;
  border-radius: 7px;
}

article, div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener('change', updateDisplay);

updateDisplay();
```

#### Result

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

> **Note:** You can find more examples in the pages for each separate display data type, linked above.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Block and inline layout in normal flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Introduction to formatting contexts](/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
