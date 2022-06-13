---
title: '@media'
slug: Web/CSS/@media
tags:
  - '@media'
  - At-rule
  - CSS
  - Conditional
  - Reference
browser-compat: css.at-rules.media
---
{{CSSRef}}

The **`@media`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) can be used to apply part of a style sheet based on the result of one or more [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). With it, you specify a media query and a block of CSS to apply to the document if and only if the media query matches the device on which the content is being used.

> **Note:** In JavaScript, the rules created using `@media` can be accessed with the {{domxref("CSSMediaRule")}} CSS object model interface.

## Syntax

The `@media` at-rule may be placed at the top level of your code or nested inside any other [conditional group at-rule](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

For a discussion of media query syntax, please see [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax).

## Description

### Media types

{{page("/en-US/docs/Web/CSS/Media_Queries/Using_media_queries", "Media types")}}

### Media features

{{page("/en-US/docs/Web/CSS/Media_Queries/Using_media_queries","Media features")}}

## Accessibility concerns

To best accommodate people who adjust a site's text size, use [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values)s when you need a {{cssxref("&lt;length&gt;")}} for your [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

Both [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) and [`px`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) are valid units, but [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) works better if the user changes the browser text size.

Also consider using Level 4 media queries to improve the user's experience. For example, `prefers-reduced-motion` to [detect if the user has requested that the system minimize the amount of animation](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) or motion it uses.

## Security

Because media queries provide insights into the capabilities—and by extension, the features and design—of the device the user is working with, there is the potential that they could be abused to construct a "fingerprint" which identifies the device, or at least categorizes it to some degree of detail that may be undesirable to users.

Because of this potential, a browser may opt to fudge the returned values in some manner in order to prevent them from being used to precisely identify a computer. A browser might also offer additional measures in this area; for example, if Firefox's "Resist Fingerprinting" setting is enabled, many media queries report default values rather than values representing the actual device state.

## Formal syntax

{{csssyntax}}

## Examples

### Testing for print and screen media types

```css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (resolution: 150dpi) {
    body { line-height: 1.4; }
}
```

Introduced in Media Queries Level 4 is a new range syntax that allows for less verbose media queries when testing for any feature accepting a range, as shown in the below examples:

```css
@media (height > 600px) {
    body { line-height: 1.4; }
}

@media (400px <= width <= 700px) {
    body { line-height: 1.4; }
}
```

For more examples, please see [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- In JavaScript, `@media` can be accessed via the CSS object model interface {{domxref("CSSMediaRule")}}.
- [Extended Mozilla media features](/en-US/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Extended WebKit media features](/en-US/docs/Web/CSS/WebKit_Extensions#media_features)
