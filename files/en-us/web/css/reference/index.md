---
title: CSS reference
short-title: Reference
slug: Web/CSS/Reference
page-type: landing-page
sidebar: cssref
---

Use this **CSS reference** to browse an [alphabetical index](#index) of all of the standard [CSS](/en-US/docs/Web/CSS) [properties](/en-US/docs/Web/CSS/Reference/Properties), [pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes), [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [data types](/en-US/docs/Web/CSS/Reference/Values/Data_types), [functional notations](/en-US/docs/Web/CSS/Reference/Values/Functions) and [at-rules](/en-US/docs/Web/CSS/Reference/At-rules). You can also browse [key CSS concepts](#concepts) and a list of [selectors organized by type](#selectors). Also included is a brief [DOM-CSS / CSSOM reference](#dom-css_cssom).

## Basic rule syntax

### Style rule syntax

```plain
style-rule ::=
    selectors-list {
      properties-list
    }
```

Where:

```plain
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

See the index of [_selectors_](#selectors), [_pseudo-classes_](#pseudo), and _[pseudo-elements](#pseudo)_ below. The syntax for each specified _value_ depends on the data type defined for each specified _property_.

#### Style rule examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

For a beginner-level introduction to the syntax of selectors, see our [guide on CSS Selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Be aware that any [syntax](/en-US/docs/Web/CSS/Guides/Syntax/Introduction) error in a rule definition invalidates the entire rule. Invalid rules are ignored by the browser. Note that CSS rule definitions are entirely (Unicode) [text-based](https://drafts.csswg.org/css-syntax/#intro), whereas DOM-CSS / CSSOM (the rule management system) is [object-based](https://drafts.csswg.org/cssom/#introduction).

### At-rule syntax

As the structure of at-rules varies widely, please see [At-rule](/en-US/docs/Web/CSS/Reference/At-rules) to find the syntax of the specific one you want.

## Index

> [!NOTE]
> This index does not include SVG-exclusive presentation attributes, which can be used as CSS properties on [SVG](/en-US/docs/Web/SVG) elements.

> [!NOTE]
> The property names in this index do **not** include the JavaScript names which do differ from the CSS standard names.

{{CSS_Ref}}

## Selectors

The following are the various [selectors](/en-US/docs/Web/CSS/Reference/Selectors), which allow styles to be conditional based on various features of elements within the DOM.

### Basic selectors

**Basic selectors** are fundamental selectors; these are the most basic selectors that are frequently combined to create other, more complex selectors.

- [Universal selector](/en-US/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [Type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
- [Class selector](/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
- [ID selector](/en-US/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
- [Attribute selector](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

### Grouping selectors

- [Selector list](/en-US/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Specifies that both `A` and `B` elements are selected. This is a grouping method to select several matching elements.

### Combinators

Combinators are selectors that establish a relationship between two or more simple selectors, such as "`A` is a child of `B`" or "`A` is adjacent to `B`", creating a complex selector.

- [Next-sibling combinator](/en-US/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : Specifies that the elements selected by both `A` and `B` have the same parent and that the element selected by `B` immediately follows the element selected by `A` horizontally.
- [Subsequent-sibling combinator](/en-US/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : Specifies that the elements selected by both `A` and `B` share the same parent and that the element selected by `A` comes before—but not necessarily immediately before—the element selected by `B`.
- [Child combinator](/en-US/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : Specifies that the element selected by `B` is the direct child of the element selected by `A`.
- [Descendant combinator](/en-US/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : Specifies that the element selected by `B` is a descendant of the element selected by `A`, but is not necessarily a direct child.
- [Column combinator](/en-US/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Specifies that the element selected by `B` is located within the table column specified by `A`. Elements which span multiple columns are considered to be a member of all of those columns.

### Pseudo

- [Pseudo classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : Specifies a special state of the selected element(s).
- [Pseudo elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : Represents entities that are not included in HTML.

> [!CALLOUT]
>
> See also [selectors in the Selectors specification](https://drafts.csswg.org/selectors/) and the [pseudo-element specification](https://drafts.csswg.org/css-pseudo/).

## Modules

- [Anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module
- [Animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [Backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
- [Basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
- [Borders and box decorations](/en-US/docs/Web/CSS/Guides/Borders_and_box_decorations) module
- [Box alignment](/en-US/docs/Web/CSS/Guides/Box_alignment) module
- [Box model](/en-US/docs/Web/CSS/Guides/Box_model) module
- [Box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
- [Cascading and inheritance](/en-US/docs/Web/CSS/Guides/Cascade) module
- [Color adjustment](/en-US/docs/Web/CSS/Guides/Color_adjustment) module
- [Colors](/en-US/docs/Web/CSS/Guides/Colors) module
- [Compositing and blending](/en-US/docs/Web/CSS/Guides/Compositing_and_blending) module
- [Conditional rules](/en-US/docs/Web/CSS/Guides/Conditional_rules) module
- [Containment](/en-US/docs/Web/CSS/Guides/Containment) module
- [Counter styles](/en-US/docs/Web/CSS/Guides/Counter_styles) module
- [CSSOM view](/en-US/docs/Web/CSS/Guides/CSSOM_view) module
- [Custom functions and mixins](/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins) module
- [Custom highlight API](/en-US/docs/Web/CSS/Guides/Custom_highlight_API) module
- [Custom properties for cascading variables](/en-US/docs/Web/CSS/Guides/Cascading_variables) module
- [Display](/en-US/docs/Web/CSS/Guides/Display) module
- [Easing functions](/en-US/docs/Web/CSS/Guides/Easing_functions) module
- [Environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables) module,
- [Filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects) module
- [Flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) module
- [Font loading](/en-US/docs/Web/CSS/Guides/Font_loading) module
- [Fonts](/en-US/docs/Web/CSS/Guides/Fonts) module
- [Fragmentation](/en-US/docs/Web/CSS/Guides/Fragmentation)
- [Generated content](/en-US/docs/Web/CSS/Guides/Generated_content) module
- [Grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module
- [Images](/en-US/docs/Web/CSS/Guides/Images) module
- [Inline layout](/en-US/docs/Web/CSS/Guides/Inline_layout) module
- [Lists and counters](/en-US/docs/Web/CSS/Guides/Lists) module
- [Logical properties and values](/en-US/docs/Web/CSS/Guides/Logical_properties_and_values) module
- [Masking](/en-US/docs/Web/CSS/Guides/Masking) module
- [Media queries](/en-US/docs/Web/CSS/Guides/Media_queries) module
- [Motion path](/en-US/docs/Web/CSS/Guides/Motion_path) module
- [Multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout) module
- [Namespaces](/en-US/docs/Web/CSS/Guides/Namespaces) module
- [Nesting](/en-US/docs/Web/CSS/Guides/Nesting) module
- [Overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [Overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module
- [Paged media](/en-US/docs/Web/CSS/Guides/Paged_media) module
- [Positioned layout](/en-US/docs/Web/CSS/Guides/Positioned_layout) module
- [Properties and values API](/en-US/docs/Web/CSS/Guides/Properties_and_values_API) module
- [Pseudo-elements](/en-US/docs/Web/CSS/Guides/Pseudo-elements) module
- [Round display](/en-US/docs/Web/CSS/Guides/Round_display) module
- [Ruby layout](/en-US/docs/Web/CSS/Guides/Ruby_layout) module
- [Scoping](/en-US/docs/Web/CSS/Guides/Scoping) module
- [Scroll anchoring](/en-US/docs/Web/CSS/Guides/Scroll_anchoring) module
- [Scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module
- [Scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [Scrollbars styling](/en-US/docs/Web/CSS/Guides/Scrollbars_styling) module
- [Selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
- [Shadow parts](/en-US/docs/Web/CSS/Guides/Shadow_parts) module
- [Shapes](/en-US/docs/Web/CSS/Guides/Shapes) module
- [Syntax](/en-US/docs/Web/CSS/Guides/Syntax) module
- [Table](/en-US/docs/Web/CSS/Guides/Table) module
- [Text](/en-US/docs/Web/CSS/Guides/Text) module
- [Text decoration](/en-US/docs/Web/CSS/Guides/Text_decoration) module
- [Transforms](/en-US/docs/Web/CSS/Guides/Transforms) module
- [Transitions](/en-US/docs/Web/CSS/Guides/Transitions) module
- [Values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module
- [View transitions](/en-US/docs/Web/CSS/Guides/View_transitions) module
- [Viewport](/en-US/docs/Web/CSS/Guides/Viewport) module
- [Writing modes](/en-US/docs/Web/CSS/Guides/Writing_modes) module

## Concepts

### Syntax and semantics

- [CSS syntax](/en-US/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-rules](/en-US/docs/Web/CSS/Reference/At-rules)
- [Cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [Comments](/en-US/docs/Web/CSS/Guides/Syntax/Comments)
- [Descriptor](/en-US/docs/Glossary/CSS_Descriptor)
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- [Values](/en-US/docs/Web/CSS/Reference/Values)
- [Value definition syntax](/en-US/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units)
- [CSS functional notations](/en-US/docs/Web/CSS/Reference/Values/Functions)

### Values

- [Actual value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Initial value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Resolved value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Specified value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- [Used value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)

### Layout

- [Block formatting context](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction)
- [Containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block)
- [Layout mode](/en-US/docs/Glossary/Layout_mode)
- [Margin collapsing](/en-US/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{glossary("Replaced elements")}}
- [Stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Visual formatting model](/en-US/docs/Web/CSS/Guides/Display/Visual_formatting_model)

## DOM-CSS / CSSOM

### Major object types

- {{DOMxRef("Document.styleSheets")}}
- {{DOMxRef("HTMLElement.style")}}
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}

### Important methods

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Reference/Mozilla_extensions) (prefixed with `-moz-`)
- [WebKit CSS extensions](/en-US/docs/Web/CSS/Reference/Webkit_extensions) (mostly prefixed with `-webkit-`)

## External Links

- [CSS Indices (w3.org)](https://www.w3.org/TR/css/#indices)
