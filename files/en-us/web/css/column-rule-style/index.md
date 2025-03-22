---
title: column-rule-style
slug: Web/CSS/column-rule-style
page-type: css-property
browser-compat: css.properties.column-rule-style
---

{{CSSRef}}

The **`column-rule-style`** [CSS](/en-US/docs/Web/CSS) property sets the style of the line drawn between columns in a multi-column layout.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #88f;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## Syntax

```css
/* <'border-style'> values */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Global values */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

The `column-rule-style` property is specified as a single `<'border-style'>` value.

### Values

- `<'border-style'>`
  - : Is a keyword defined by {{ cssxref("border-style") }} describing the style of the rule. The styling must be interpreted as in the collapsing border model.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a dashed column rule

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-style`
  property is used to change the style of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Result

{{ EmbedLiveSample('Setting_a_dashed_column_rule') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
