---
title: flex-basis
slug: Web/CSS/flex-basis
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.flex-basis
---
{{CSSRef}}

The **`flex-basis`** [CSS](/en-US/docs/Web/CSS) property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with {{Cssxref("box-sizing")}}.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

In this example the {{cssxref("flex-grow")}} and {{cssxref("flex-shrink")}} properties are both set to `1` on all three items, indicating that the flex item can grow and shrink from the initial `flex-basis`.

The demo then changes the `flex-basis` on the first item. It will then grow and shrink from that flex-basis. This means that, for example, when the `flex-basis` of the first item is `200px`, it will start out at 200px but then shrink to fit the space available with the other items being at least `min-content` sized.

The image below shows how the Firefox [Flexbox Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts) helps you understand the size items become:

![The Firefox Flexbox Inspector showing the size of the item once it has shrunk.](firefox-flex-basis.png)

> **Note:** in case both `flex-basis` (other than `auto`) and `width` (or `height` in case of `flex-direction: column`) are set for an element, `flex-basis` has priority.

## Syntax

```css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item’s content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: unset;
```

The `flex-basis` property is specified as either the keyword `content` or a `<'width'>`.

### Values

- `<'width'>`
  - : An absolute {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}} of the parent flex container's main size property, or the keyword `auto`. Negative values are invalid. Defaults to `auto`.
- `content`

  - : Indicates automatic sizing, based on the flex item’s content.

    > **Note:** This value was not present in the initial release of Flexible Box Layout, and thus some older implementations will not support it. The equivalent effect can be had by using `auto` together with a main size ([width](https://drafts.csswg.org/css2/visudet.html#propdef-width) or [height](https://drafts.csswg.org/css2/visudet.html#propdef-height)) of `auto`.
    >
    > - Originally, `flex-basis:auto` meant "look at my `width` or `height` property".
    > - Then, `flex-basis:auto` was changed to mean automatic sizing, and "main-size" was introduced as the "look at my `width` or `height` property" keyword. It was implemented in {{bug("1032922")}}.
    > - Then, that change was reverted in {{bug("1093316")}}, so `auto` once again means "look at my `width` or `height` property"; and a new `content` keyword is being introduced to trigger automatic sizing. ({{bug("1105111")}} covers adding that keyword).

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
  background: #6AB6D8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex:after {
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

.flex1:after {
  content: 'auto';
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: 'max-content';
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: 'min-content';
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: 'fit-content';
}

.flex5 {
   flex-basis: content;
}

.flex5:after {
  content: 'content';
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: 'fill';
}
```

#### Results

{{EmbedLiveSample('Setting_flex_item_initial_sizes', '', '360')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- {{cssxref("width")}}
