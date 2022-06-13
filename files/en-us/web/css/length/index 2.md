---
title: <length>
slug: Web/CSS/length
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
  - length
browser-compat: css.types.length
---
{{CSSRef}}

The **`<length>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a distance value. Lengths can be used in numerous CSS properties, such as {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, and {{Cssxref("text-shadow")}}.

> **Note:** Although {{cssxref("&lt;percentage&gt;")}} values are usable in some of the same properties that accept `<length>` values, they are not themselves `<length>` values. See {{cssxref("&lt;length-percentage&gt;")}}.

## Syntax

The `<length>` data type consists of a {{cssxref("&lt;number&gt;")}} followed by one of the units listed below. As with all CSS dimensions, there is no space between the unit literal and the number. The length unit is optional after the number `0`.

> **Note:** Some properties allow negative `<length>`s, while others do not.

### Units

#### Relative length units

Relative lengths represent a measurement in terms of some other distance. Depending on the unit, this can be the size of a specific character, the [line height](/en-US/docs/Web/CSS/line-height), or the size of the {{glossary("viewport")}}.

##### Font-relative lengths

Font-relative lengths define the `<length>` value in terms of the size of a particular character or font attribute in the font currently in effect in an element or its parent.

> **Note:** These units, especially `em` and `rem`, are often used to create scalable layouts, which maintain the [vertical rhythm of the page](https://24ways.org/2006/compose-to-a-vertical-rhythm)  even when the user changes the font size.

- `cap` {{experimental_inline}}
  - : Represents the "cap height" (nominal height of capital letters) of the element’s {{Cssxref("font")}}.
- `ch`

  - : Represents the width, or more precisely the advance measure, of the glyph "0" (zero, the Unicode character U+0030) in the element's {{Cssxref("font")}}.

    In the cases where it is impossible or impractical to determine the measure of the “0” glyph, it must be assumed to be 0.5em wide by 1em tall.

- `em`
  - : Represents the calculated {{Cssxref("font-size")}} of the element. If used on the {{Cssxref("font-size")}} property itself, it represents the _inherited_ font-size of the element.
- `ex`
  - : Represents the [x-height](https://en.wikipedia.org/wiki/X-height) of the element's {{Cssxref("font")}}. On fonts with the "x" letter, this is generally the height of lowercase letters in the font; `1ex ≈ 0.5em` in many fonts.
- `ic` {{experimental_inline}}
  - : Equal to the used advance measure of the "水" glyph (CJK water ideograph, U+6C34), found in the font used to render it.
- `lh` {{experimental_inline}}
  - : Equal to the computed value of the {{Cssxref("line-height")}} property of the element on which it is used, converted to an absolute length.
- `rem`
  - : Represents the {{Cssxref("font-size")}} of the root element (typically {{HTMLElement("html")}}). When used within the root element {{Cssxref("font-size")}}, it represents its initial value (a common browser default is `16px`, but user-defined preferences may modify this).
- `rlh` {{experimental_inline}}
  - : Equal to the computed value of the {{Cssxref("line-height")}} property on the root element (typically {{HTMLElement("html")}}), converted to an absolute length. When used on the {{Cssxref("font-size")}} or {{Cssxref("line-height")}} properties of the root element, it refers to the properties' initial value.

##### Viewport-percentage lengths

Viewport-percentage lengths define the `<length>` value relative to the size of the {{glossary("viewport")}}, i.e., the visible portion of the document. Viewport lengths are invalid in {{cssxref("@page")}} declaration blocks.

- `vh`
  - : Equal to 1% of the height of the viewport's initial [containing block](/en-US/docs/Web/CSS/Containing_block).
- `vw`
  - : Equal to 1% of the width of the viewport's initial [containing block](/en-US/docs/Web/CSS/Containing_block).
- `vi` {{experimental_inline}}
  - : Equal to 1% of the size of the initial [containing block](/en-US/docs/Web/CSS/Containing_block), in the direction of the root element’s [inline axis](/en-US/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline).
- `vb` {{experimental_inline}}
  - : Equal to 1% of the size of the initial [containing block](/en-US/docs/Web/CSS/Containing_block), in the direction of the root element’s [block axis](/en-US/docs/Web/CSS/CSS_Logical_Properties#block_vs._inline).
- `vmin`
  - : Equal to the smaller of `vw` and `vh`.
- `vmax`
  - : Equal to the larger of `vw` and `vh`.

#### Absolute length units

Absolute length units represent a physical measurement when the physical properties of the output medium are known, such as for print layout. This is done by anchoring one of the units to a physical unit, and then defining the others relative to it. The anchor is done differently for low-resolution devices, such as screens, versus high-resolution devices, such as printers.

For low-dpi devices, the unit `px` represents the physical _reference pixel_; other units are defined relative to it. Thus, `1in` is defined as `96px`, which equals `72pt`. The consequence of this definition is that on such devices, dimensions described in inches (`in`), centimeters (`cm`), or millimeters (`mm`) don't necessary match the size of the physical unit with the same name.

For high-dpi devices, inches (`in`), centimeters (`cm`), and millimeters (`mm`) are the same as their physical counterparts. Therefore, the `px` unit is defined relative to them (1/96 of 1 inch).

> **Note:** Many users increase their {{glossary("user agent")}}'s default font size to make text more legible. Absolute lengths can cause accessibility problems, since they are fixed and do not scale according to user settings. For this reason, prefer relative lengths (such as `em` or `rem`) when setting `font-size`.

- `px`
  - : One pixel. For screen displays, it traditionally represents one device pixel (dot). However, for _printers_ and _high-resolution screens_, one CSS pixel implies multiple device pixels. `1px` = 1/96th of `1in`.
- `cm`
  - : One centimeter. `1cm` = `96px/2.54`.
- `mm`
  - : One millimeter. `1mm` = 1/10th of `1cm`.
- `Q` {{experimental_inline}}
  - : One quarter of a millimeter. `1Q` = 1/40th of `1cm`.
- `in`
  - : One inch. `1in` = `2.54cm` = `96px`.
- `pc`
  - : One pica. `1pc` = `12pt` = 1/6th of `1in`.
- `pt`
  - : One point. `1pt` = 1/72nd of `1in`.

## Interpolation

When animated, values of the `<length>` data type are interpolated as real, floating-point numbers. The interpolation happens on the calculated value. The speed of the interpolation is determined by the [timing function](/en-US/docs/Web/CSS/easing-function) associated with the animation.

## Examples

### Length unit comparison

The following demo provides you with an input field in which you can enter a `<length>` value (e.g. `300px`, `50%`, `30vw`) to set the width of a result bar that will appear below it once you've pressed <kbd>Return</kbd>.

This allows you to compare and contrast the effect of different length units.

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label>Enter width:</label>
    <input type="text" id="length">
  </div>
  <div class="inner">

  </div>
</div>
<div class="results">
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
}

.result {
  height: 20px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector('.inner');
const inputElem = document.querySelector('input');
const resultsDiv = document.querySelector('.results');

inputElem.addEventListener('change', () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement('div');
  result.className = 'result';
  result.style.width = inputElem.value;
  result.innerHTML = `<code>width: ${inputElem.value}</code>`;
  resultsDiv.appendChild(result);

  inputElem.value = '';
  inputElem.focus();
})
```

#### Result

{{EmbedLiveSample('Length_unit_comparison','100%', 700)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS values & units tutorial](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS values & units reference](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Box Model](/en-US/docs/Web/CSS/CSS_Box_Model)
