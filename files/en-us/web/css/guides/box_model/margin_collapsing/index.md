---
title: Mastering margin collapsing
slug: Web/CSS/Guides/Box_model/Margin_collapsing
page-type: guide
sidebar: cssref
---

The [top](/en-US/docs/Web/CSS/Reference/Properties/margin-top) and [bottom](/en-US/docs/Web/CSS/Reference/Properties/margin-bottom) margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as **margin collapsing**. Note that the margins of [floating](/en-US/docs/Web/CSS/Reference/Properties/float) and [absolutely positioned](/en-US/docs/Web/CSS/Reference/Properties/position#types_of_positioning) elements never collapse.

Margin collapsing occurs in three basic cases:

- Adjacent siblings
  - : The margins of adjacent siblings are collapsed (except when the latter sibling needs to be [cleared](/en-US/docs/Web/CSS/Reference/Properties/clear) past floats).
- No content separating parent and descendants
  - : The vertical margins between a parent block and its descendants can collapse. This happens when there is no separating content between them. Specifically, this occurs in two main cases:
    - The {{cssxref("margin-top")}} of a parent collapses with the {{cssxref("margin-top")}} of its first in-flow descendant unless the parent has a {{cssxref("border-top")}} , {{cssxref("padding-top")}} , contains any inline content (such as text), or has _[clearance](/en-US/docs/Web/CSS/Reference/Properties/clear)_ applied.
    - The {{cssxref("margin-bottom")}} of a parent collapses with the {{cssxref("margin-bottom")}} of its last in-flow descendant unless the parent has a defined {{cssxref("height")}} or {{cssxref("min-height")}}, a {{cssxref("border-bottom")}}, or {{cssxref("padding-bottom")}}.

    In both cases, creating a new [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) on the parent will also prevent its margins from collapsing with its children.

- Empty blocks
  - : If there is no border, padding, inline content, {{cssxref("height")}}, or {{cssxref("min-height")}} to separate a block's {{cssxref("margin-top")}} from its {{cssxref("margin-bottom")}}, then its top and bottom margins collapse.

Some things to note:

- More complex margin collapsing (of more than two margins) occurs when the above cases are combined.
- These rules apply even to margins that are zero, so the margin of a descendant ends up outside its parent (according to the rules above) whether or not the parent's margin is zero.
- When negative margins are involved, the size of the collapsed margin is the sum of the largest positive margin and the smallest (most negative) negative margin.
- When all margins are negative, the size of the collapsed margin is the smallest (most negative) margin. This applies to both adjacent elements and nested elements.
- Collapsing margins is only relevant in the vertical direction.
- Margins don't collapse in a container with `display` set to `flex` or `grid`.

## Examples

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>
  … with the top margin of this paragraph, yielding a margin of
  <code>1.2rem</code> in between.
</p>

<div>
  This parent element contains two paragraphs!
  <p>
    This paragraph has a <code>.4rem</code> margin between it and the text
    above.
  </p>
  <p>
    My bottom margin collapses with my parent, yielding a bottom margin of
    <code>2rem</code>.
  </p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### Result

{{EmbedLiveSample('Examples', 'auto', 350)}}

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rules)
  - [Comments](/en-US/docs/Web/CSS/CSS_syntax/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction)
  - [Layout modes](/en-US/docs/Glossary/Layout_mode)
  - [Visual formatting model](/en-US/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/Guides/Cascade/Value_processing#initial_value)
    - [Computed values](/en-US/docs/Web/CSS/Guides/Cascade/Value_processing#computed_value)
    - [Used values](/en-US/docs/Web/CSS/Guides/Cascade/Value_processing#used_value)
    - [Actual values](/en-US/docs/Web/CSS/Guides/Cascade/Value_processing#actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements")}}
