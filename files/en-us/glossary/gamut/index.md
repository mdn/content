---
title: Gamut
slug: Glossary/Gamut
page-type: glossary-definition
---

{{GlossarySidebar}}

A color **gamut** is a subset of colors, usually representing the colors that a display or a printing device can represent.

No display or printer can represent the whole range of colors that a human eye can perceive. The device _gamut_ represents the set that it supports.

Traditionally, in web development, the only gamut used was _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue), where each color is described using three bytes, one for each primary color. However, "wide-color" monitors and professional printers support a wider range of colors, that can't be represented using this gamut.

Since 2021, browsers have started to provide functionality for other gamuts, like _[Display-P3](/en-US/docs/Glossary/Color_space#display-p3)_, widely used in the movie industry, and _[rec2020](/en-US/docs/Glossary/Color_space#rec2020)_.

Developers can define different sets of colors for devices supporting larger gamuts using the [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) [media feature](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). They can describe colors outside the RGB gamut using specific CSS functions like [`lch()`](/en-US/docs/Web/CSS/color_value/lch) for the LCH cylindrical coordinate system, or [`lab()`](/en-US/docs/Web/CSS/color_value/lab) for the Lab coordinate system.

## See also

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) on _Wikipedia_.
