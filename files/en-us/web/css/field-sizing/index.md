---
title: field-sizing
slug: Web/CSS/field-sizing
page-type: css-property
browser-compat: css.properties.field-sizing
---

{{CSSRef}}{{seecompattable}}

The **`field-sizing`** [CSS](/en-US/docs/Web/CSS) property sets the sizing behavior of elements that by default are given a default preferred size — i.e. form control elements. `field-sizing` enables this behavior to be overridden so that controls are instead sized to fit their contents.

This property is typically used to create text [inputs](/en-US/docs/Web/HTML/Element/input) and {{htmlelement("textarea")}}s that grow to fit their content as more text is entered.

## Syntax

```css
/* Keyword values */
field-sizing: content;
field-sizing: fixed;

/* Global values */
empty-cells: inherit;
empty-cells: initial;
empty-cells: revert;
empty-cells: revert-layer;
empty-cells: unset;
```

### Values

- `content`
  - : Affected elements are sized to fit their contents.
- `fixed`
  - : Affected elements are sized with a fixed preferred size.

## Description

`field-sizing: content` overrides the default preferred sizing of form elements, providing an easy way to create text inputs that shrinkwrap their content and grow as more text is entered, only stopping their growth and requiring scrolling to view all the content when maximum size limits are reached (i.e. their containing elements' size, or a size set on them via CSS).

Specifically, this property affects the following elements:

- Form input types that accept direct text input from users: This includes [`email`](/en-US/docs/Web/HTML/Element/input/email), [`number`](/en-US/docs/Web/HTML/Element/input/number), [`password`](/en-US/docs/Web/HTML/Element/input/password), [`search`](/en-US/docs/Web/HTML/Element/input/search), [`tel`](/en-US/docs/Web/HTML/Element/input/tel), [`text`](/en-US/docs/Web/HTML/Element/input/text), and [`url`](/en-US/docs/Web/HTML/Element/input/url) types.
  - If no minimum width is set on the control, it will only be as big as the text cursor.
  - Controls with [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attributes set will be rendered large enough to display the placeholder text.
- [`file`](/en-US/docs/Web/HTML/Element/input/file) inputs: Direct text input is not possible, but the filename display changes as the user selects a new file to upload, which will change the control size if `field-sizing: content` is set.
- {{htmlelement("textarea")}} controls: It is worth noting that `<textarea>` elements with `field-sizing: content` set behave much like single-line text controls do, with the following additions:
  - If `<textarea>`s are unable to grow due to a width constraint, they will start to grow in height to display additional content. When a height constraint is then reached, they will then start to show a scrollbar to allow all the content to be viewed.
  - [`rows`](/en-US/docs/Web/HTML/Element/textarea#cols) and [`cols`](/en-US/docs/Web/HTML/Element/textarea#cols) attributes modify the default preferred size of a `<textarea>`, so as such do not have any effect on `<textarea>` elements with `field-sizing: content` set.
- {{htmlelement("select")}} controls: These behave a bit differently to what you might expect with `field-sizing: content` set. The effect depends on the type of select control you are creating:
  - Regular drop-down select boxes will change width to always fit the displayed option value, as new values are selected. (By default, the drop-down would be sized large enough to display the longest option value.)
  - List boxes (`<select>`s with the [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) attribute set) will be large enough to display all the options without needing to scroll. (By default, the drop-down would require scrolling to view all the option values.)

### Sizing controls with CSS

The sizing imposed on form controls by `field-sizing: content` can be overidden by CSS sizing properties. It doesn't really make sense to set {{cssxref("width")}} and {{cssxref("height")}} because that will reimpose a fixed size on the control, but using properties like {{cssxref("min-width")}} and {{cssxref("max-width")}} work well alongside `field-sizing: content`, allowing the control to grow and shrink with the entered text without getting too big or small.

It is also useful to combine these properties with form attributes like [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength), which will cause the control to stop growing in size when the maximum character limit is reached.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Showing and hiding empty table cells

#### HTML

```html
<table class="table_1">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
<br />
<table class="table_2">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### Result

{{ EmbedLiveSample('Showing_and_hiding_empty_table_cells', '100%', '200') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
