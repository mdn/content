---
title: '-ms-high-contrast'
slug: Web/CSS/@media/-ms-high-contrast
tags:
  - '@media'
  - CSS
  - Non-standard
  - Reference
  - media feature
---
{{CSSRef}}{{Non-standard_header}}

The **-ms-high-contrast** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [Microsoft extension](/en-US/docs/Web/CSS/Microsoft_Extensions) that describes whether the application is being displayed in high contrast mode, and with what color variation.

High Contrast Mode is a specialized display mode that prioritizes making content as legible as possible by dynamically replacing foreground and background colors with a user-specified theme. For web content, theme colors are mapped to content types.

This media feature applies to bitmap media types. It does not accept _min/max_ prefixes.

## Syntax

The **`-ms-high-contrast`** media feature is specified as one of the following values.

### Values

- `none` {{Deprecated_Inline}}
  - : _No longer supported as of Microsoft Edge 18._
- `active`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with any color variation.
- `black-on-white`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a black-on-white color variation.
- `white-on-black`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a white-on-black color variation.

## Examples

### Matching any high-contrast variations

```css
@media screen and (-ms-high-contrast: active) {
  /* All high contrast styling rules */
}
```

### Matching a black-on-white variation

```css
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
```

### Matching a white-on-black variation

```css
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
```

## Accessibility concerns

### Theming

High Contrast Mode's theme colors come from a limited subset of deprecated [CSS2 system colors](https://www.w3.org/TR/2018/REC-css-color-3-20180619/#css2-system). The available color keywords are:

- `windowText`: controls the color of text content.
- `linkText`: controls the color of the hyperlink text.
- `grayText`: controls the color of the disabled text.
- `highlightText`: controls the color of selected text.
- `highlight`: controls the background color of selected text.
- `buttonText`: controls the color of a {{HTMLElement("button")}} element's text.
- `buttonFace`: controls the background color of a {{HTMLElement("button")}} element.
- `window`: controls the color of the background.

Because High Contrast Mode themes are dynamic, use these color keywords in place of other [CSS color values](/en-US/docs/Web/CSS/color). This will ensure that content will always be able to be perceived.

### Content

If at all possible, prefer updating HTML markup over modifying content using CSS2 system color keywords. This helps keep the content more predictable.

## Specifications

Not part of any standard.

## Remarks

As of Microsoft Edge 18, `-ms-high-contrast: none` is no longer supported. Microsoft Edge versions 18 and higher will be using the [`forced-colors` media feature](/en-US/docs/Web/CSS/@media/forced-colors) instead, but the `forced-colors` media feature specification is still being actively worked on.

The `-ms-high-contrast` media feature works with the {{CSSxRef("-ms-high-contrast-adjust")}} property.

The `-ms-high-contrast` media feature was introduced in Windows 8.

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
