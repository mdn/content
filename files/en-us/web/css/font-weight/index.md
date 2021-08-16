---
title: font-weight
slug: Web/CSS/font-weight
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-weight
---
{{CSSRef}}

The **`font-weight`** [CSS](/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the {{cssxref("font-family")}} that is currently set.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## Syntax

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;// normal
font-weight: 500;
font-weight: 600;
font-weight: 700;// bold
font-weight: 800;
font-weight: 900;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: unset;
```

The `font-weight` property is specified using any one of the values listed below.

### Values

- `normal`
  - : Normal font weight. Same as `400`.
- `bold`
  - : Bold font weight. Same as `700`.
- `lighter`
  - : One relative font weight lighter than the parent element. Note that only four font weights are considered for relative weight calculation; see the {{anch("Meaning of relative weights")}} section below.
- `bolder`
  - : One relative font weight heavier than the parent element. Note that only four font weights are considered for relative weight calculation; see the {{anch("Meaning of relative weights")}} section below.
- `<number>`
  - : A {{cssxref("&lt;number&gt;")}} value between 1 and 1000, inclusive. Higher numbers represent weights that are bolder than (or as bold as) lower numbers. Certain commonly used values correspond to common weight names, as described in the [Common weight name mapping](#common_weight_name_mapping) section below.

In earlier versions of the `font-weight` specification, the property accepts only keyword values and the numeric values 100, 200, 300, 400, 500, 600, 700, 800, and 900; non-variable fonts can only really make use of these set values, although fine-grained values (e.g. 451) will be translated to one of these values for non-variable fonts using the {{anch("Fallback weights")}} system.

CSS Fonts Level 4 extends the syntax to accept any number between 1 and 1000 and introduces {{anch("Variable fonts")}}, which can make use of this much finer-grained range of font weights.

### Fallback weights

If the exact weight given is unavailable, then the following rule is used to determine the weight actually rendered:

- If the target weight given is between `400` and `500` inclusive:

  - Look for available weights between the target and `500`, in ascending order.
  - If no match is found, look for available weights less than the target, in descending order.
  - If no match is found, look for available weights greater than `500`, in ascending order.

- If a weight less than `400` is given, look for available weights less than the target, in descending order. If no match is found, look for available weights greater than the target, in ascending order.
- If a weight greater than `500` is given, look for available weights greater than the target, in ascending order. If no match is found, look for available weights less than the target, in descending order.

### Meaning of relative weights

When `lighter` or `bolder` is specified, the below chart shows how the absolute font weight of the element is determined.

Note that when using relative weights, only four font weights are considered — thin (100), normal (400), bold (700), and heavy (900). If a font-family has more weights available, they are ignored for the purposes of relative weight calculation.

<table class="standard-table">
  <thead>
    <tr>
      <th>Inherited value</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### Common weight name mapping

The numerical values `100` to `900` roughly correspond to the following common weight names (see the [OpenType specification](https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Value | Common weight name                                                                                                                |
| ----- | --------------------------------------------------------------------------------------------------------------------------------- |
| 100   | Thin (Hairline)                                                                                                                   |
| 200   | Extra Light (Ultra Light)                                                                                                         |
| 300   | Light                                                                                                                             |
| 400   | Normal (Regular)                                                                                                                  |
| 500   | Medium                                                                                                                            |
| 600   | Semi Bold (Demi Bold)                                                                                                             |
| 700   | Bold                                                                                                                              |
| 800   | Extra Bold (Ultra Bold)                                                                                                           |
| 900   | Black (Heavy)                                                                                                                     |
| 950   | [Extra Black (Ultra Black)](https://docs.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable fonts

Most fonts have a particular weight which corresponds to one of the numbers in [Common weight name mapping](#common_weight_name_mapping). However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.

For TrueType or OpenType variable fonts, the "wght" variation is used to implement varying widths.

For the example below to work, you'll need a browser that supports the CSS Fonts Level 4 syntax in which font-weight can be any number between 1 and 1000.

{{EmbedLiveSample("Variable_fonts", 1200, 180)}}

#### HTML

```html
<header>
    <input type="range" id="weight" name="weight" min="1" max="1000" />
    <label for="weight">Weight</label>
</header>
<div class="container">
    <p class="sample">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
</div>
```

#### CSS

```css
/*
Mutator Sans is created by LettError (https://github.com/LettError/mutatorSans)
and is used here under the terms of its license:
https://github.com/LettError/mutatorSans/blob/master/LICENSE
*/

@font-face {
  src: url('https://mdn.mozillademos.org/files/16011/MutatorSans.ttf');
  font-family:'MutatorSans';
  font-style: normal;
}

label {
  font: 1rem monospace;
  white-space: nowrap;
}

.container {
  max-height: 150px;
  overflow-y: auto;
}

.sample {
  text-transform: uppercase;
  font: 1.5rem 'MutatorSans', sans-serif;
}
```

```css hidden
html, body {
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  margin-bottom: 1.5rem;
}

.container {
  flex-grow: 1;
}

.container > p {
  margin-top: 0;
  margin-bottom: 0;
}
```

#### JavaScript

```js
let weightLabel = document.querySelector('label[for="weight"]');
let weightInput = document.querySelector('#weight');
let sampleText = document.querySelector('.sample');

function update() {
  weightLabel.textContent = `font-weight: ${weightInput.value};`;
  sampleText.style.fontWeight = weightInput.value;
}

weightInput.addEventListener('input', update);

update();
```

## Accessibility concerns

People experiencing low vision conditions may have difficulty reading text set with a `font-weight` value of `100` (Thin/Hairline) or `200` (Extra Light), especially if the font has a [low contrast color ratio](/en-US/docs/Web/CSS/color#Accessibility_concerns).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font weights

#### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the
  bank, and of having nothing to do: once or twice she had peeped into the
  book her sister was reading, but it had no pictures or conversations in
  it, "and what is the use of a book," thought Alice "without pictures or
  conversations?"
</p>

<div>I'm heavy<br/>
  <span>I'm lighter</span>
</div>
```

#### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps heavier than
   normal but less than a standard bold. */
div {
 font-weight: 600;
}

/* Set span text to be one step lighter
   than its parent. */
span {
  font-weight: lighter;
}
```

#### Result

{{EmbedLiveSample("Setting_font_weights","400","300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{cssxref("font-style")}}
- {{cssxref("font-family")}}
- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
