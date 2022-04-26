---
title: dynamic-range
slug: Web/CSS/@media/dynamic-range
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.dynamic-range
---
{{CSSRef}}

The **`dynamic-range`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the combination of brightness, contrast ratio, and color depth that are supported by the {{glossary("user agent")}} and the output device.

> **Note:** Some devices have high dynamic range capabilities that are not always 'on' and need to be activated (sometimes programmatically, sometimes by the user, sometimes based on the content). This media feature does not test whether the dynamic range capability is active; it only tests whether the device is capable of high dynamic range visuals.

## Syntax

The `dynamic-range` feature is specified as a keyword value chosen from the list below.

- `standard`
  - : This value matches any visual device and excludes devices lacking visual capabilities. A user agent or an output device that matches `high` will also match the `standard` value.

- `high`
  - : This value matches user agents and output devices that support high peak brightness, high contrast ratio, and color depth greater than 24 bit or 8 bit per color component of RGB. **Peak brightness** refers to how bright the brightest point a light-emitting device, such as an LCD screen, can produce. In the case of a light-reflective device, such as paper or e-ink, peak brightness refers to the point that at least absorbs light. **Contrast ratio** refers to the ratio of the luminance of the brightest color to that of the darkest color that the system is capable of producing. Currently, there is no precise way to measure peak brightness and contrast ratio, and the determination of what counts as high peak brightness and high contrast ratio depends on the user agent.

## Examples

```css
@media (dynamic-range: standard) {
    p {
        color: red;
    }
}

@media (dynamic-range: high) {
    p {
        color: green;
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
