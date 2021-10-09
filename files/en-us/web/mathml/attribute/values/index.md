---
title: Values
slug: Web/MathML/Attribute/Values
tags:
  - Guide
  - MathML
  - MathML Reference
---
{{MathMLRef}}

## Lengths

Several MathML presentation elements have attributes that accept length values used for size or spacing. MathML accepts different units and constants for specifying lengths.

### Units

| Unit | Description                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------- |
| `em` | {{ Cssxref("font-size", "Font-relative") }} unit                                                               |
| `ex` | {{ Cssxref("font-size", "Font-relative") }} unit. (The "x"-height of the element, `1ex ≈ 0.5em` in many fonts) |
| `px` | Pixels                                                                                                                      |
| `in` | Inches (1 inch = 2.54 centimeters)                                                                                          |
| `cm` | Centimeters                                                                                                                 |
| `mm` | Millimeters                                                                                                                 |
| `pt` | Points (1 point = 1/72 inch)                                                                                                |
| `pc` | Picas (1 pica = 12 points)                                                                                                  |
| `%`  | Percentage of the default value.                                                                                            |

### Constants

{{deprecated_header}}

A replacement for the deprecated constants below is:

    veryverythinmathspace  => 0.05555555555555555em
    verythinmathspace      => 0.1111111111111111em
    thinmathspace          => 0.16666666666666666em
    mediummathspace        => 0.2222222222222222em
    thickmathspace         => 0.2777777777777778em
    verythickmathspace     => 0.3333333333333333em
    veryverythickmathspace => 0.3888888888888889em

| Constant                         | Value     |
| -------------------------------- | --------- |
| `veryverythinmathspace`          | 1/18`em`  |
| `verythinmathspace`              | 2/18`em`  |
| `thinmathspace`                  | 3/18`em`  |
| `mediummathspace`                | 4/18`em`  |
| `thickmathspace`                 | 5/18`em`  |
| `verythickmathspace`             | 6/18`em`  |
| `veryverythickmathspace`         | 7/18`em`  |
| `negativeveryverythinmathspace`  | -1/18`em` |
| `negativeverythinmathspace`      | -2/18`em` |
| `negativethinmathspace`          | -3/18`em` |
| `negativemediummathspace`        | -4/18`em` |
| `negativethickmathspace`         | -5/18`em` |
| `negativeverythickmathspace`     | -6/18`em` |
| `negativeveryverythickmathspace` | -7/18`em` |

Note: [Namedspace binding is deprecated](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) in MathML3 and has been removed in Gecko 15.0 {{ geckoRelease("15.0") }} ([bug 673759](https://bugzilla.mozilla.org/show_bug.cgi?id=673759)).
