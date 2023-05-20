---
title: flex-shrink
slug: Web/CSS/flex-shrink
page-type: css-property
browser-compat: css.properties.flex-shrink
---

{{CSSRef}}

The **`flex-shrink`** [CSS](/en-US/docs/Web/CSS) property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

In use, `flex-shrink` is used alongside the other flex properties {{cssxref("flex-grow")}} and {{cssxref("flex-basis")}}, and normally defined using the {{cssxref("flex")}} shorthand.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## Syntax

```css
/* <number> values */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

The `flex-shrink` property is specified as a single `<number>`.

### Values

- `<number>`
  - : See {{cssxref("&lt;number&gt;")}}. Negative values are invalid. Defaults to 1.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item shrink factor

#### HTML

```html
<p>The width of content is 500px; the flex-basis of the flex items is 120px.</p>
<p>A, B, C have flex-shrink:1 set. D and E have flex-shrink:2 set</p>
<p>The width of D and E is less than the others.</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

#### Result

{{EmbedLiveSample('Setting_flex_item_shrink_factor', 500, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
