---
title: Mastering margin collapsing
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
page-type: guide
---

{{CSSRef}}

The [top](/en-US/docs/Web/CSS/margin-top) and [bottom](/en-US/docs/Web/CSS/margin-bottom) margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as **margin collapsing**. Note that the margins of [floating](/en-US/docs/Web/CSS/float) and [absolutely positioned](/en-US/docs/Web/CSS/position#types_of_positioning) elements never collapse.

Margin collapsing occurs in three basic cases:

- Adjacent siblings
  - : The margins of adjacent siblings are collapsed (except when the latter sibling needs to be [cleared](/en-US/docs/Web/CSS/clear) past floats).
- No content separating parent and descendants
  - : If there is no border, padding, inline part, [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) created, or _[clearance](/en-US/docs/Web/CSS/clear)_ to separate the {{cssxref("margin-top")}} of a block from the {{cssxref("margin-top")}} of one or more of its descendant blocks; or no border, padding, inline content, {{cssxref("height")}}, or {{cssxref("min-height")}} to separate the {{cssxref("margin-bottom")}} of a block from the {{cssxref("margin-bottom")}} of one or more of its descendant blocks, then those margins collapse. The collapsed margin ends up outside the parent.
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
  - [At-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
  - [Comments](/en-US/docs/Web/CSS/CSS_syntax/Comments)
  - [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/CSS_cascade/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value)
    - [Used values](/en-US/docs/Web/CSS/CSS_cascade/used_value)
    - [Actual values](/en-US/docs/Web/CSS/CSS_cascade/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
