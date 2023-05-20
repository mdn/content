---
title: "@import"
slug: Web/CSS/@import
page-type: css-at-rule
browser-compat: css.at-rules.import
---

{{CSSRef}}

The **`@import`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to import style rules from other valid stylesheets. An `@import` rule _must_ be defined at the top of stylesheet, before any other at-rule (except [@charset](/en-US/docs/Web/CSS/@charset) and [@layer](/en-US/docs/Web/CSS/@layer)) and style declaration, else it will be ignored.

## Syntax

```css
@import url;
@import url list-of-media-queries;
@import url layer;
@import url layer(layer-name);
@import url layer(layer-name) list-of-media-queries;
```

where:

- _url_
  - : Is a {{CSSxRef("&lt;string&gt;")}}, a `<url>`, or a {{CSSxRef("url")}} function representing the location of the resource to import. The URL may be absolute or relative.
- _list-of-media-queries_
  - : Is a comma-separated list of [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), which specify the media-dependent conditions for applying the CSS rules defined in the linked URL. If the browser does not support any of these queries, it does not load the linked resource.
- _layer-name_
  - : Is the name of a [cascade layer](/en-US/docs/Web/CSS/@layer) into which the contents of the linked resource are imported.

## Description

Imported rules must come before all other types of rules, except {{CSSxRef("@charset")}} rules and layer creating [`@layer`](/en-US/docs/Web/CSS/@layer) statements. The `@import` rule is not a [nested statement](/en-US/docs/Web/CSS/Syntax#nested_statements). Therefore, it cannot be used inside [conditional group at-rules](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

So that {{glossary("user agent", "user agents")}} can avoid retrieving resources for unsupported media types, authors may specify media-dependent import conditions. These conditional imports specify comma-separated [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) after the URL. In the absence of any media query, the import is unconditional. Specifying `all` for the `list-of-media-queries` has the same effect.

The `@import` rule can also be used to create a [cascade layer](/en-US/docs/Web/CSS/@layer) by importing rules from a linked resource. Rules can also be imported into an existing cascade layer. The `layer` keyword or the `layer()` function is used with `@import` for this purpose. Declarations in style rules from imported stylesheets interact with the cascade as if they were written literally into the stylesheet at the point of the import.

## Formal syntax

{{csssyntax}}

## Examples

### Importing CSS rules

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

The two examples above show how to specify the _url_ as a `<string>` and as a `url()` function.

### Importing CSS rules conditionally

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

The `@import` rules in the above examples show media-dependent conditions that will need to be true before the linked CSS rules are applied. So for instance, the last `@import` rule will load the `landscape.css` stylesheet only on a screen device in landscape orientation.

### Importing CSS rules into a cascade layer

```css
@import "theme.css" layer(utilities);
```

In the above example, a cascade layer named `utilities` is created and it will include rules from the imported stylesheet `theme`.

```css
@import url(headings.css) layer(default);
@import url(links.css) layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

In the above example, the rules in `headings.css` and `links.css` stylesheets cascade within the same layer as the `audio[controls]` rule.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

This is an example of creating two separate unnamed cascade layers and importing the linked rules into each one separately. A cascade layer declared without a name is an unnamed cascade layer. Unnamed cascade layers are finalized when created: they do not provide any means for re-arranging or adding styles and they cannot be referenced from outside.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
