---
title: font-stretch
slug: Web/CSS/font-stretch
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-stretch
---
{{CSSRef}}

The **`font-stretch`** [CSS](/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.

{{EmbedInteractiveExample("pages/css/font-stretch.html")}}

## Syntax

```css
/* Keyword values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Percentage values */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: unset;
```

This property may be specified as a single keyword value or a single {{cssxref("&lt;percentage&gt;")}} value.

### Values

- `normal`
  - : Specifies a normal font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with `ultra-condensed` as the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with `ultra-expanded` as the most expanded.
- `<percentage>`

  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this property.

    > **Note:** In earlier versions of the `font-stretch` specification, the property accepts only the nine keyword values.
    >
    > **The {{ SpecName('CSS4 Fonts', '#propdef-font-stretch') }} spec** extends the syntax to accept a `<percentage>` value as well. This enables variable fonts to offer something more like a _continuum_ of character widths. For TrueType or OpenType variable fonts, the "`wdth`" variation is used to implement varying widths.
    >
    > However, note that the `<percentage>` syntax is not yet supported by all browsers: check the [Browser compatibility](#browser_compatibility) table for details.

### Keyword to numeric mapping

The table below shows the mapping between keyword values and numeric percentages:

| Keyword           | Percentage |
| ----------------- | ---------- |
| `ultra-condensed` | 50%        |
| `extra-condensed` | 62.5%      |
| `condensed`       | 75%        |
| `semi-condensed`  | 87.5%      |
| `normal`          | 100%       |
| `semi-expanded`   | 112.5%     |
| `expanded`        | 125%       |
| `extra-expanded`  | 150%       |
| `ultra-expanded`  | 200%       |

## Description

Some font families offer additional faces in which the characters are narrower than the normal face (_condensed_ faces) or wider than the normal face (_expanded_ faces).

You can use `font-stretch` to select a condensed or expanded face from such fonts. If the font you are using does not offer condensed or expanded faces, this property has no effect.

### Font face selection

The face selected for a given value of `font-stretch` depends on the faces supported by the font in question. If the font does not provide a face that exactly matches the given value, then values less than 100% map to a narrower face, and values greater than or equal to 100% map to a wider face.

The table below demonstrates the effect of supplying various different percentage values of `font-stretch` on two different fonts:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Helvetica Neue</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
    </tr>
    <tr>
      <th scope="row">League Mono Variable</th>
      <td><img alt="" src="screenshot_2018-06-06_example_page.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page1.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page2.png" /></td>
      <td><img alt="" src="screenshot_2018-06-06_example_page3.png" /></td>
      <td><img alt="" src="l-100.png" /></td>
      <td><img alt="" src="l-112.5.png" /></td>
      <td><img alt="" src="l-125.png" /></td>
      <td><img alt="" src="l-150.png" /></td>
      <td><img alt="" src="l-200.png" /></td>
    </tr>
  </tbody>
</table>

- **Helvetica Neue**, which is installed by default on macOS, has a single condensed face in addition to the normal face. All values of `font-stretch` less than 100% select the condensed face, while all other values select the normal face.
- **[League Mono Variable](http://tylerfinck.com/leaguemonovariable/)** is a variable font that offers something like a continuous range of widths for different percentage values of `font-stretch`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font stretch percentages

> **Note:** This example will only work in browsers that support `<percentage>` values.

#### HTML

```html
<div class="container">
    <p class="condensed">an elephantine lizard</p>
    <p class="normal">an elephantine lizard</p>
    <p class="expanded">an elephantine lizard</p>
</div>
```

#### CSS

```css
/*
This example uses the League Mono Variable font, developed by
Tyler Finck (https://www.tylerfinck.com/) and used here under
the terms of the SIL Open Font License, Version 1.1:
http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
*/

@font-face {
  src: url('https://mdn.mozillademos.org/files/16014/LeagueMonoVariable.ttf');
  font-family:'LeagueMonoVariable';
  font-style: normal;
  font-stretch: 1% 500%; /* Required by Chrome */
}

.container {
  border: 10px solid #f5f9fa;
  padding: 0 1rem;
  font: 1.5rem 'LeagueMonoVariable', sans-serif;
}

.condensed {
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

#### Result

{{EmbedLiveSample("Setting_font_stretch_percentages", 1200, 250, "", "", "example-outcome-frame")}}

## Specifications

{{Specifications}}

> **Note:** The `font-stretch` property was initially defined in CSS 2, but dropped in CSS 2.1 due to the lack of browser implementation. It was brought back in CSS 3.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
