---
title: flex-basis
slug: Web/CSS/flex-basis
page-type: css-property
browser-compat: css.properties.flex-basis
---

{{CSSRef}}

The **`flex-basis`** [CSS](/en-US/docs/Web/CSS) property sets the initial main size of a {{glossary("flex item")}}. It sets the size of the content box unless otherwise set with {{Cssxref("box-sizing")}}.

> [!NOTE]
> It is recommended to use the {{cssxref("flex")}} shorthand instead of separate `flex-grow`, `flex-shrink`, and `flex-basis` declarations. We have separated them here as this document is about one of the shorthand components: the `flex-basis` property.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

In this example, the {{cssxref("flex-grow")}} and {{cssxref("flex-shrink")}} properties are both set to `1` on all three items, indicating that the flex item can grow and shrink from the initial `flex-basis`.

The demo changes the `flex-basis` value set on the first flex item, causing it to grow or shrink to fill the available space. The other flex items will also change size; they will be at least `min-content`-sized. For example, when the `flex-basis` of the first item is set to `200px`, it will start at `200px` but then shrink to fit the space available.

If `flex-basis` is set to a value other than `auto` and there is a `width` (or `height` in case of `flex-direction: column`) set for that same flex item, the `flex-basis` value takes precedence.

## Syntax

```css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item's content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

The `flex-basis` property is specified as either the keyword `content` or a `<'width'>`.

### Values

- `<'width'>`

  - : Any of the following units:
    - {{cssxref("&lt;length&gt;")}} sets an absolute value.
    - {{cssxref("&lt;percentage&gt;")}} sets a percentage of the width or height of the containing block's content area.
    - `auto` uses the value of the {{cssxref("width")}} in horizontal writing mode, and the value of the {{cssxref("height")}} in vertical writing mode; when the corresponding value is also `auto`, the `content` value is used instead.
    - {{cssxref("max-content")}} sets the intrinsic preferred width.
    - {{cssxref("min-content")}} sets the intrinsic minimum width.
    - {{cssxref("fit-content")}} sets the maximum possible size of a containing block's content area, bounded by the `min-content` and `max-content` values, and calculated based on the content of the current element.

- `content`

  - : Indicates automatic sizing, based on the flex item's content.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item initial sizes

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Results

{{EmbedLiveSample('Setting_flex_item_initial_sizes', '', '360')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("flex")}} shorthand
- {{cssxref("inline-size")}}
- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
