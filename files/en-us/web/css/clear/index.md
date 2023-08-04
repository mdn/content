---
title: clear
slug: Web/CSS/clear
page-type: css-property
browser-compat: css.properties.clear
---

{{CSSRef}}

The **`clear`** [CSS](/en-US/docs/Web/CSS) property sets whether an element must be moved below (cleared) [floating](/en-US/docs/Web/CSS/float) elements that precede it. The `clear` property applies to floating and non-floating elements.

{{EmbedInteractiveExample("pages/css/clear.html")}}

When applied to non-floating blocks, it moves the [border edge](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) of the element down until it is below the [margin edge](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) of all relevant floats. The non-floated block's top margin collapses.

Vertical margins between two floated elements on the other hand will not collapse. When applied to floating elements, the margin edge of the bottom element is moved below the margin edge of all relevant floats. This affects the position of later floats, since later floats cannot be positioned higher than earlier ones.

The floats that are relevant to be cleared are the earlier floats within the same [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context).

> **Note:** If an element contains only floated elements, its height collapses to nothing. If you want it to always be able to resize, so that it contains floating elements inside it, set the value of the element's [`display`](/en-US/docs/Web/CSS/display) property to [`flow-root`](/en-US/docs/Web/CSS/display#flow-root).
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## Syntax

```css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### Values

- `none`
  - : Is a keyword indicating that the element is _not_ moved down to clear past floating elements.
- `left`
  - : Is a keyword indicating that the element is moved down to clear past _left_ floats.
- `right`
  - : Is a keyword indicating that the element is moved down to clear past _right_ floats.
- `both`
  - : Is a keyword indicating that the element is moved down to clear past _both_ left and right floats.
- `inline-start`
  - : Is a keyword indicating that the element is moved down to clear floats on _start side of its containing block_, that is the _left_ floats on ltr scripts and the _right_ floats on rtl scripts.
- `inline-end`
  - : Is a keyword indicating that the element is moved down to clear floats on _end side of its containing block_, that is the _right_ floats on ltr scripts and the _left_ floats on rtl scripts.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear_both','100%','300') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
