---
title: "`column-rule-visibility-items` CSS property"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
page-type: css-property
status:
  - experimental
browser-compat: css.properties.column-rule-visibility-items
sidebar: cssref
---

{{SeeCompatTable}}

The **`column-rule-visibility-items`** [CSS](/en-US/docs/Web/CSS) property defines whether a column-rule segment is painted in gaps adjacent to empty areas.

{{InteractiveExample("CSS Demo: column-rule-visibility-items")}}

```css interactive-example-choice
column-rule-visibility-items: all;
```

```css interactive-example-choice
column-rule-visibility-items: around;
```

```css interactive-example-choice
column-rule-visibility-items: between;
```

```css interactive-example-choice
column-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss</cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  column-rule: solid 5px red;
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
column-rule-visibility-items: all;
column-rule-visibility-items: around;
column-rule-visibility-items: between;
column-rule-visibility-items: normal;

/* Global values */
column-rule-visibility-items: inherit;
column-rule-visibility-items: initial;
column-rule-visibility-items: revert;
column-rule-visibility-items: revert-layer;
column-rule-visibility-items: unset;
```

### Values

- `all`
  - : The column rule should be painted in all gap segments, regardless of whether adjacent areas contain an item.

- `around`
  - : The column rule should be painted in a gap segment if at least one of the two adjacent areas is occupied by an item.

- `between`
  - : The column rule should be painted in a gap segment if both adjacent areas are occupied by items.

- `normal`
  - : With grid containers, behaves the same as `all`. In multicol layout, behaves the same as `between`. This is the default.

## Description

The `column-rule-visibility-items` property defines whether a column-rule segment is painted in column gaps adjacent to empty areas in [multi-row](/en-US/docs/Web/CSS/Guides/Multicol_layout) and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column.

The `column-rule-visibility-items` and {{cssxref("row-rule-visibility-items")}} properties can both be set using the {{cssxref("rule-visibility-items")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a column rule to be drawn between two grid areas if at least one adjacent grid area contains a grid item.

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

We define the ordered list ({{htmlelement("ol")}}) to be a grid container, creating 4 columns and 4 rows by setting both the {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} properties to `repeat(4, 1fr)`, and move the last item to the bottom-right grid area using {{cssxref("grid-column")}} and {{cssxref("grid-row")}} properties. We include a {{cssxref("gap")}} of `20px` to provide enough room between the columns to fit our `5px` dashed rule.

Finally, we set `column-rule-visibility-items` to `between`, so that a column rule is painted in a column gap only if both adjacent grid areas contain a grid item.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  column-rule: dashed 5px blue;
  column-rule-visibility-items: between;
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
  @supports not (column-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the column-rule-visibility-items property";
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

- {{cssxref("rule-visibility-items")}} shorthand
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
