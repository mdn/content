---
title: <length-percentage>
slug: Web/CSS/length-percentage
page-type: css-type
browser-compat: css.types.length-percentage
---

{{CSSRef}}

The **`<length-percentage>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a value that can be either a {{Cssxref("length")}} or a {{Cssxref("percentage")}}.

## Syntax

Refer to the documentation for {{Cssxref("length")}} and {{Cssxref("percentage")}} for details of the individual syntaxes allowed by this type.

## Formal syntax

{{csssyntax}}

## Examples

### length-percentage examples

The following simple example demonstrates several properties that use `<length-percentage>` values.

#### HTML

```html
<p>You can use percentages and lengths in so many places.</p>
```

#### CSS

```css
p {
  /* length-percentage examples */
  width: 75%;
  height: 200px;
  margin: 3rem;
  padding: 1%;
  border-radius: 10px 10%;
  font-size: 250%;
  line-height: 1.5em;

  /* length examples */
  text-shadow: 1px 1px 1px red;
  border: 5px solid red;
  letter-spacing: 3px;

  /* percentage example */
  text-size-adjust: 20%;
}
```

#### Result

{{EmbedLiveSample('length-percentage_examples', '100%', 320)}}

### Use in calc()

Where a `<length-percentage>` is specified as an allowable type, this means that the percentage resolves to a length and therefore can be used in a {{cssxref("calc", "calc()")}} expression. Therefore, all of the following values are acceptable for {{cssxref("width")}}:

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;length&gt;")}}
- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
