---
title: "`rule-visibility-items` CSS property"
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
page-type: css-property
browser-compat: css.properties.rule-visibility-items
sidebar: cssref
---

The **`rule-visibility-items`** [CSS](/en-US/docs/Web/CSS) shorthand property defines whether rule segments are painted in both row and column gaps adjacent to empty areas.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule-visibility-items")}}

{{InteractiveExample("CSS Demo: rule-visibility-items")}}

```css interactive-example-choice
rule-visibility-items: all;
```

```css interactive-example-choice
rule-visibility-items: around;
```

```css interactive-example-choice
rule-visibility-items: between;
```

```css interactive-example-choice
rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss<cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  rule: solid 5px red;
  gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
cite {
  grid-row: 3;
  grid-column: 3;
}
```

## Syntax

```css
/* Keywords */
rule-visibility-items: all;
rule-visibility-items: around;
rule-visibility-items: between;
rule-visibility-items: normal;

/* Global values */
rule-visibility-items: inherit;
rule-visibility-items: initial;
rule-visibility-items: revert;
rule-visibility-items: revert-layer;
rule-visibility-items: unset;
```

### Values

- `all`
  - : Rules should be painted in all gap segments, regardless of whether adjacent areas contain an item.

- `around`
  - : A rule should be painted in a gap segment if at least one of the two adjacent areas is occupied by a item.

- `between`
  - : A rule should be painted in a gap segment only if both adjacent areas are occupied by items.

- `normal`
  - : With grid containers, behaves the same as `all`. In multicol layout, behaves the same as `between`. This is the default.

## Description

The `rule-visibility-items` property defines whether rule segments are painted in gaps adjacent to empty areas in the gaps between rows and columns in [multi-row](/en-US/docs/Web/CSS/Guides/Multicol_layout) and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row or column.

The value is a single keyword that sets the same value for both the {{cssxref("column-rule-visibility-items")}} and {{cssxref("row-rule-visibility-items")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a rule to be drawn between two grid areas if at least one adjacent grid area contains a grid item.

#### HTML

We include a list of dynamic sports duos:

```html
<ol>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ol>
```

#### CSS

We define the ordered list ({{htmlelement("ol")}}) to be a grid container, creating 4 columns and 4 rows by setting both the {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} properties to `repeat(4, 1fr)`, and move the last item to the bottom-right grid area using the {{cssxref("grid-column")}} and {{cssxref("grid-row")}} properties. We include a {{cssxref("gap")}} of `20px` to provide enough room between the columns to fit our `5px` rules. We set the column rules to `dashed` and the row rules to `solid`.

Finally, we set `rule-visibility-items` to `between`, so that row- and column-rules are painted only if both grid areas adjacent to them contain a grid item.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  column-rule: dashed 5px blue;
  row-rule: solid 5px red;

  rule-visibility-items: around;
}
li:last-child {
  grid-row: 4;
  grid-column: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the rule-visibility-items shorthand";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Basic", "", "230")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-rule-visibility-items")}} shorthand
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
