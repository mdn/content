---
title: caret-color
slug: Web/CSS/caret-color
tags:
  - CSS
  - CSS Property
  - CSS User Interface
  - Editing
  - HTML Colors
  - Input
  - Reference
  - Styling HTML
  - Text Editing
  - caret
  - caret-color
  - contenteditable
  - recipe:css-property
browser-compat: css.properties.caret-color
---
{{CSSRef}}

The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as {{HTMLElement("input")}} or those with the {{htmlattrxref("contenteditable")}} attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Note that the insertion caret is only one type of caret. For example, many browsers have a "navigation caret," which acts similarly to an insertion caret but can be moved around in non-editable text. On the other hand, the mouse cursor image shown when hovering over text where the {{cssxref("cursor")}} property is `auto`, or when hovering over an element where the `cursor` property is `text` or `vertical-text`, though it sometimes looks like a caret, is not a caret (it's a cursor).

## Syntax

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);

/* Global values */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Values

- `auto`

  - : The user agent selects an appropriate color for the caret. This is generally {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of `currentcolor`, the background, shadows, and other factors.

    > **Note:** While user agents may use `currentcolor` (which is usually animatable) for the `auto` value, `auto` is not interpolated in transitions and animations.

- {{cssxref("&lt;color&gt;")}}
  - : The color of the caret.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a custom caret color

#### HTML

```html
<input value="This field uses a default caret." size="64"/>
<input class="custom" value="I have a custom caret color!" size="64"/>
<p contenteditable class="custom">This paragraph can be
   edited, and its caret has a custom color as well!</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: .5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}
```

#### Result

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("input")}} element
- The HTML {{htmlattrxref("contenteditable")}} attribute, which can be used to make any element's text editable
- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
