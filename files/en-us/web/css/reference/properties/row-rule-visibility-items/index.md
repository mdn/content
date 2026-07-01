---
title: "`row-rule-visibility-items` CSS property"
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
page-type: css-property
browser-compat: css.properties.row-rule-visibility-items
sidebar: cssref
---

The **`row-rule-visibility-items`** [CSS](/en-US/docs/Web/CSS) property defines whether a row-rule segment is painted in portions of gaps adjacent to empty areas.

{{InteractiveExample("CSS Demo: row-rule-visibility-items")}}

```css interactive-example-choice
row-rule-visibility-items: all;
```

```css interactive-example-choice
row-rule-visibility-items: around;
```

```css interactive-example-choice
row-rule-visibility-items: between;
```

```css interactive-example-choice
row-rule-visibility-items: normal;
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
  row-rule: solid 5px red;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
cite {
  grid-column: 3;
  grid-row: 3;
}
```

## Syntax

```css
/* keywords */
row-rule-visibility-items: all;
row-rule-visibility-items: around;
row-rule-visibility-items: between;
row-rule-visibility-items: normal;

/* Global values */
row-rule-visibility-items: inherit;
row-rule-visibility-items: initial;
row-rule-visibility-items: revert;
row-rule-visibility-items: revert-layer;
row-rule-visibility-items: unset;
```

### Values

- `all`
  - : The row rule should be painted in all gap segments, regardless of whether adjacent areas contain an item.

- `around`
  - : The row rule should be painted in a gap segment if at least one of the two adjacent areas is occupied by an item.

- `between`
  - : The row rule should be painted in a gap segment if both adjacent areas are occupied by items.

- `normal`
  - : Behaves the same as `all`. This is the default.

## Description

The `row-rule-visibility-items` property defines whether, in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row a row-rule, row rule segments area painted in the gaps between two adjacent areas if one or both of the areas area empty.

The `row-rule-visibility-items`, along with the {{cssxref("row-rule-visibility-items")}}, can be set using the {{cssxref("rule-visibility-items")}} shorthand.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a row rules to be drawn between two grid areas if at least one adjacent grid area contains grid items.

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

We define the ordered list ({{htmlelement("ol")}}) to be a grid container, creating 4 rows and 4 columns by setting both the {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-columns")}} to `repeat(4, 1fr)`, and move the last item to the 16th grid area using {{cssxref("grid-row")}} and {{cssxref("grid-column")}}. We include a {{cssxref("gap")}} of `20px` to provide enough room between the rows to fit our `5px` dashed rule.

Finally, we set `row-rule-visibility-items` to `around`, so only if a grid area above or below a segment contains a grid item, the row rule will be painted.

```css
ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  row-rule: dashed 5px blue;
  row-rule-visibility-items: around;
}
li:last-child {
  grid-column: 4;
  grid-row: 4;
}
```

```css hidden
@layer no-support {
  @supports not (row-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the row-rule-visibility-items property";
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
- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule")}} shorthand
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
