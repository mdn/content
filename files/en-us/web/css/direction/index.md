---
title: direction
slug: Web/CSS/direction
page-type: css-property
browser-compat: css.properties.direction
---

{{CSSRef}}

> **Warning:** Where possible, authors are encouraged to avoid using the `direction` CSS property and use the HTML [`dir`](/en-US/docs/Web/HTML/Global_attributes#dir) global attribute instead.

The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Note that text direction is usually defined within a document (e.g., with [HTML's `dir` attribute](/en-US/docs/Web/HTML/Global_attributes/dir)) rather than through direct use of the `direction` property.

The property sets the base text direction of block-level elements and the direction of embeddings created by the {{Cssxref("unicode-bidi")}} property. It also sets the default alignment of text, block-level elements, and the direction that cells flow within a table row.

Unlike the `dir` attribute in HTML, the `direction` property is not inherited from table columns into table cells, since CSS inheritance follows the document tree, and table cells are inside of rows but not inside of columns.

The `direction` and {{cssxref("unicode-bidi")}} properties are the two only properties which are not affected by the {{cssxref("all")}} shorthand property.

## Syntax

```css
/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
```

### Values

- `ltr`
  - : Text and other elements go from left to right. This is the default value.
- `rtl`
  - : Text and other elements go from right to left.

For the `direction` property to have any effect on inline-level elements, the {{Cssxref("unicode-bidi")}} property's value must be `embed` or `override`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting right-to-left direction

In the example below are two strings of text, both which are displaying using `direction: rtl`. While the Arabic text is displayed correctly with this setting, the English text now has a full stop in an unusual location.

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>This paragraph is in English but incorrectly goes right to left.</p>
  <p></p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
  <p></p>
</blockquote>
```

{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
- The HTML [`dir`](/en-US/docs/Web/HTML/Global_attributes#dir) global attribute
