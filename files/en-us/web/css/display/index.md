---
title: display
slug: Web/CSS/display
page-type: css-property
browser-compat: css.properties.display
---

{{CSSRef}}

The **`display`** [CSS](/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline box](/en-US/docs/Web/CSS/CSS_display/flow_layout) and the layout used for its children, such as [flow layout](/en-US/docs/Web/CSS/CSS_display/flow_layout), [grid](/en-US/docs/Web/CSS/CSS_grid_layout) or [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout).

Formally, the **`display`** property sets an element's inner and outer _display types_. The outer type sets an element's participation in [flow layout](/en-US/docs/Web/CSS/CSS_display/flow_layout); the inner type sets the layout of children. Some values of `display` are fully defined in their own individual specifications; for example the detail of what happens when `display: flex` is declared is defined in the CSS Flexible Box Model specification.

{{EmbedInteractiveExample("pages/css/display.html")}}

## Syntax

```css
/* precomposed values */
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

/* multi-keyword syntax */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

The CSS `display` property is specified using keyword values.

## Grouped values

The keyword values can be grouped into six value categories.

### Outside

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : These keywords specify the element's outer display type, which is essentially its role in flow layout:

    - `block`
      - : The element generates a block box, generating line breaks both before and after the element when in the normal flow.
    - `inline`
      - : The element generates one or more inline boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.

> [!NOTE]
> When browsers that support multi-keyword syntax encounter a display property that only has an **outer** value (e.g., `display: block` or `display: inline`), the inner value is set to `flow` (e.g., `display: block flow` and `display: inline flow`).

> [!NOTE]
> To be sure layouts work on older browsers, you may use single-value syntax, for example `display: inline flex` could have the following fallback
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> See [Using the multi-keyword syntax with CSS display](/en-US/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) for more information.

### Inside

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : These keywords specify the element's inner display type, which defines the type of formatting context that its contents are laid out in (assuming it is a non-replaced element):

    - `flow`

      - : The element lays out its contents using flow layout (block-and-inline layout).

        If its outer display type is `inline`, and it is participating in a block or inline formatting context, then it generates an inline box. Otherwise it generates a block box.

        Depending on the value of other properties (such as {{CSSxRef("position")}}, {{CSSxRef("float")}}, or {{CSSxRef("overflow")}}) and whether it is itself participating in a block or inline formatting context, it either establishes a new [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) for its contents or integrates its contents into its parent formatting context.

    - `flow-root`
      - : The element generates a block box that establishes a new [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context), defining where the formatting root lies.
    - `table`
      - : These elements behave like HTML {{HTMLElement("table")}} elements. It defines a block-level box.
    - `flex`
      - : The element behaves like a block-level element and lays out its content according to the [flexbox model](/en-US/docs/Web/CSS/CSS_flexible_box_layout).
    - `grid`
      - : The element behaves like a block-level element and lays out its content according to the [grid model](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
    - `ruby`
      - : The element behaves like an inline-level element and lays out its content according to the ruby formatting model. It behaves like the corresponding HTML {{HTMLElement("ruby")}} elements.

> [!NOTE]
> When browsers that support multi-keyword syntax encounter a display property that only has an **inner** value (e.g., `display: flex` or `display: grid`), the outer value is set to `block` (e.g., `display: block flex` and `display: block grid`).

### List Item

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : The element generates a block box for the content and a separate list-item inline box.

A single value of `list-item` will cause the element to behave like a list item.
This can be used together with {{CSSxRef("list-style-type")}} and {{CSSxRef("list-style-position")}}.

`list-item` can also be combined with any {{CSSxRef("&lt;display-outside&gt;")}} keyword and the `flow` or `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} keyword.

> [!NOTE]
> In browsers that support the multi-keyword syntax, if no inner value is specified, it will default to `flow`.
> If no outer value is specified, the principal box will have an outer display type of `block`.

### Internal

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Some layout models such as `table` and `ruby` have a complex internal structure, with several different roles that their children and descendants can fill.
    This section defines those "internal" display values, which only have meaning within that particular layout mode.

    - `table-row-group`
      - : These elements behave like {{HTMLElement("tbody")}} HTML elements.
    - `table-header-group`
      - : These elements behave like {{HTMLElement("thead")}} HTML elements.
    - `table-footer-group`
      - : These elements behave like {{HTMLElement("tfoot")}} HTML elements.
    - `table-row`
      - : These elements behave like {{HTMLElement("tr")}} HTML elements.
    - `table-cell`
      - : These elements behave like {{HTMLElement("td")}} HTML elements.
    - `table-column-group`
      - : These elements behave like {{HTMLElement("colgroup")}} HTML elements.
    - `table-column`
      - : These elements behave like {{HTMLElement("col")}} HTML elements.
    - `table-caption`
      - : These elements behave like {{HTMLElement("caption")}} HTML elements.
    - `ruby-base`
      - : These elements behave like {{HTMLElement("rb")}} HTML elements.
    - `ruby-text`
      - : These elements behave like {{HTMLElement("rt")}} HTML elements.
    - `ruby-base-container`
      - : These elements are generated as anonymous boxes.
    - `ruby-text-container`
      - : These elements behave like {{HTMLElement("rtc")}} HTML elements.

### Box

- {{CSSxRef("&lt;display-box&gt;")}}

  - : These values define whether an element generates display boxes at all.

    - `contents`

      - : These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes. Please note that the CSS Display Level 3 spec defines how the `contents` value should affect "unusual elements" — elements that aren't rendered purely by CSS box concepts such as replaced elements. See [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) for more details.

    - `none`
      - : Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off.
        To have an element take up the space that it would normally take, but without actually rendering anything, use the {{CSSxRef("visibility")}} property instead.

### Precomposed

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 used a single-keyword, precomposed syntax for the `display` property, requiring separate keywords for block-level and inline-level variants of the same layout mode.

    - `inline-block`

      - : The element generates a block box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).

        It is equivalent to `inline flow-root`.

    - `inline-table`

      - : The `inline-table` value does not have a direct mapping in HTML. It behaves like an HTML {{HTMLElement("table")}} element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.

        It is equivalent to `inline table`.

    - `inline-flex`

      - : The element behaves like an inline-level element and lays out its content according to the flexbox model.

        It is equivalent to `inline flex`.

    - `inline-grid`

      - : The element behaves like an inline-level element and lays out its content according to the grid model.

        It is equivalent to `inline grid`.

### Which syntax should you use?

The [CSS display module](/en-US/docs/Web/CSS/CSS_display) describes a multi-keyword syntax for values you can use with the `display` property to explicitly define **outer** and **inner** display.
The single keyword values (precomposed `<display-legacy>` values) are supported for backward-compatibility.

For example, using two values you can specify an inline flex container as follows:

```css
.container {
  display: inline flex;
}
```

This can also be specified using the legacy single value:

```css
.container {
  display: inline-flex;
}
```

For more information on these changes, see the [Using the multi-keyword syntax with CSS display](/en-US/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display) guide.

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Description

The individual pages for the different types of value that `display` can have set on it feature multiple examples of those values in action — see the [Syntax](#syntax) section. In addition, see the following material, which covers the various values of display in depth.

### Multi-keyword values

- [Using the multi-keyword syntax with CSS display](/en-US/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display)

### CSS Flow Layout (display: block, display: inline)

- [Block and inline layout in normal flow](/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Flow layout and overflow](/en-US/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
- [Flow layout and writing modes](/en-US/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Introduction to formatting contexts](/en-US/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [In flow and out of flow](/en-US/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)

### display: flex

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)

### display: grid

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Relationship to other layout methods](/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Line-based placement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-placement in grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Aligning items in CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [CSS grid layout and accessibility](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Realizing common layouts using grids](/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

### Animating display

[Supporting browsers](#browser_compatibility) animate `display` with a [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). This generally means that the property will flip between two values 50% through animating between the two.

There is one exception, which is when animating to or from `display: none`. In this case, the browser will flip between the two values so that the animated content is shown for the entire animation duration. So for example:

- When animating `display` from `none` to `block` (or another visible `display` value), the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating `display` from `block` (or another visible `display` value) to `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

This behavior is useful for creating entry/exit animations where you want to for example remove a container from the DOM with `display: none`, but have it fade out with [`opacity`](/en-US/docs/Web/CSS/opacity) rather than disappearing immediately.

When animating `display` with [CSS animations](/en-US/docs/Web/CSS/CSS_animations), you need to provide the starting `display` value in an explicit keyframe (for example using `0%` or `from`). See [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) for an example.

When animating `display` with [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions), two additional features are needed:

- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) provides starting values for properties you want to transition from when the animated element is first shown. This is needed to avoid unexpected behavior. By default, CSS transitions are not triggered on an element's first style update or when the `display` type changes from `none` to another type.
- [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) needs to be set on the {{cssxref("transition-property")}} declaration (or the {{cssxref("transition")}} shorthand) to enable `display` transitions.

For examples of transitioning the `display` property, see the [`@starting-style`](/en-US/docs/Web/CSS/@starting-style#examples) and [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior#examples) pages.

## Accessibility

### display: none

Using a `display` value of `none` on an element will remove it from the [accessibility tree](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). This will cause the element and all its descendant elements to no longer be announced by screen reading technology.

If you want to visually hide the element, a more accessible alternative is to use [a combination of properties](https://webaim.org/techniques/css/invisiblecontent/) to remove it visually from the screen but still make it available to assistive technology such as screen readers.

While `display: none` hides content from the accessibility tree, elements that are hidden but are referenced from visible elements' `aria-describedby` or `aria-labelledby` attributes are exposed to assistive technologies.

### display: contents

Current implementations in some browsers will remove from the [accessibility tree](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) any element with a `display` value of `contents` (but descendants will remain). This will cause the element itself to no longer be announced by screen reading technology. This is incorrect behavior according to the [CSS specification](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [More accessible markup with display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tables

In some browsers, changing the `display` value of a {{HTMLElement("table")}} element to `block`, `grid`, or `flex` will alter its representation in the [accessibility tree](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). This will cause the table to no longer be announced properly by screen reading technology.

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
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

We have included {{cssxref("padding")}} and {{cssxref("background-color")}} on the containers and their children, so that it is easier to see the effect the display values are having.

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
    <option>block flow</option>
    <option>inline</option>
    <option>inline flow</option>
    <option>flow</option>
    <option>flow-root</option>
    <option>block flow-root</option>
    <option>table</option>
    <option>block table</option>
    <option>flex</option>
    <option>block flex</option>
    <option>grid</option>
    <option>block grid</option>
    <option>list-item</option>
    <option>block flow list-item</option>
    <option>inline flow list-item</option>
    <option>block flow-root list-item</option>
    <option>inline flow-root list-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>inline-table</option>
    <option>inline table</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>inline-grid</option>
    <option>inline grid</option>
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

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### Result

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

Note that some multi-keyword values are added for illustration which have the following equivalents:

- `block` = `block flow`
- `inline` = `inline flow`
- `flow` = `block flow`
- `flow-root` = `block flow-root`
- `table` = `block table`
- `flex` = `block flex`
- `grid` = `block grid`
- `list-item` = `block flow list-item`
- `inline-block` = `inline flow-root`
- `inline-table` = `inline table`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`

You can find more examples in the pages for each separate display type under [Grouped values](#grouped_values).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- SVG {{SVGAttr("display")}} attribute
- [Block and inline layout in normal flow](/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Introduction to formatting contexts](/en-US/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
