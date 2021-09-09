---
title: '@import'
slug: Web/CSS/@import
tags:
  - At-rule
  - CSS
  - CSS Cascade
  - CSS Conditional Rules
  - Reference
browser-compat: css.at-rules.import
---
{{CSSRef}}

The **`@import`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to import style rules from other style sheets.

## Syntax

```css
@import url;
@import url list-of-media-queries;
@import url supports( supports-query );
@import url supports( supports-query ) list-of-media-queries;
```

where:

- _url_
  - : Is a {{CSSxRef("&lt;string&gt;")}} or a {{CSSxRef("&lt;url&gt;")}} representing the location of the resource to import. The URL may be absolute or relative.
- _list-of-media-queries_
  - : Is a comma-separated list of [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) conditioning the application of the CSS rules defined in the linked URL. If the browser does not support any these queries, it does not load the linked resource.
- _supports-query_
  - : Is either a {{CSSxRef("@supports", "&lt;supports-condition&gt;", "#Syntax")}} or a {{CSSxRef("Syntax", "&lt;declaration&gt;", "#CSS_declarations")}}.

## Description

Imported rules must precede all other types of rules, except {{CSSxRef("@charset")}} rules; as it is not a [nested statement](/en-US/docs/Web/CSS/Syntax#nested_statements), `@import` cannot be used inside [conditional group at-rules](/en-US/docs/Web/CSS/At-rule#Conditional_Group_Rules).

So that {{glossary("user agent")}}s can avoid retrieving resources for unsupported media types, authors may specify media-dependent `@import` rules. These conditional imports specify comma-separated [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) after the URL. In the absence of any media query, the import is unconditional. Specifying `all` for the medium has the same effect.

## Formal syntax

{{csssyntax}}

## Examples

### Importing CSS rules

```css
@import 'custom.css';
@import url("chrome://communicator/skin/");
```

### Importing CSS rules conditionally

```css
@import url("fineprint.css") print;
@import url("bluish.css") speech;
@import "common.css" screen;
@import url('landscape.css') screen and (orientation:landscape);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
