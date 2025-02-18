---
title: MathML Attribute Values
slug: Web/MathML/Values
page-type: guide
browser-compat: mathml.attribute_values
---

{{MathMLRef}}

## MathML-specific types

In addition to [CSS data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), some MathML attributes accept the following types:

- `<unsigned-integer>`: An [`<integer>`](/en-US/docs/Web/CSS/integer), whose first character is neither U+002D HYPHEN-MINUS character (-) nor U+002B PLUS SIGN (+); for example `1234`.
- `<boolean>`: A string `true` or `false` representing a boolean value.

## Legacy MathML lengths

{{deprecated_header}}

Instead of {{cssxref("length-percentage")}}, MathML used to define its own [type to describe lengths](https://www.w3.org/TR/MathML3/chapter2.html#type.length). Accepted values included non-zero unitless length values (e.g. `5` to mean `500%`), values containing numbers ending with a dot (e.g. `34.px`), or named spaces (e.g. `thinmathspace`). For compatibility reasons, it is recommended to replace non-zero unitless length values with equivalent {{cssxref("percentage")}} values, to remove unnecessary dots in numbers, and to use the following replacement for named lengths:

```plain
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

### Units

| Unit | Description                                                                                                    |
| ---- | -------------------------------------------------------------------------------------------------------------- |
| `em` | {{ Cssxref("font-size", "Font-relative") }} unit                                                               |
| `ex` | {{ Cssxref("font-size", "Font-relative") }} unit. (The "x"-height of the element, `1ex ≈ 0.5em` in many fonts) |
| `px` | Pixels                                                                                                         |
| `in` | Inches (1 inch = 2.54 centimeters)                                                                             |
| `cm` | Centimeters                                                                                                    |
| `mm` | Millimeters                                                                                                    |
| `pt` | Points (1 point = 1/72 inch)                                                                                   |
| `pc` | Picas (1 pica = 12 points)                                                                                     |
| `%`  | Percentage of the default value.                                                                               |

### Constants

| Constant                         | Value      |
| -------------------------------- | ---------- |
| `veryverythinmathspace`          | 1/18 `em`  |
| `verythinmathspace`              | 2/18 `em`  |
| `thinmathspace`                  | 3/18 `em`  |
| `mediummathspace`                | 4/18 `em`  |
| `thickmathspace`                 | 5/18 `em`  |
| `verythickmathspace`             | 6/18 `em`  |
| `veryverythickmathspace`         | 7/18 `em`  |
| `negativeveryverythinmathspace`  | -1/18 `em` |
| `negativeverythinmathspace`      | -2/18 `em` |
| `negativethinmathspace`          | -3/18 `em` |
| `negativemediummathspace`        | -4/18 `em` |
| `negativethickmathspace`         | -5/18 `em` |
| `negativeverythickmathspace`     | -6/18 `em` |
| `negativeveryverythickmathspace` | -7/18 `em` |

## Browser compatibility

{{Compat}}
