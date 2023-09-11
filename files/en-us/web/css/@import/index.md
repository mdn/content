---
title: "@import"
slug: Web/CSS/@import
page-type: css-at-rule
browser-compat: css.at-rules.import
---

{{CSSRef}}

The **`@import`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to import style rules from other valid stylesheets.
An `@import` rule _must_ be defined at the top of the stylesheet, before any other at-rule (except [@charset](/en-US/docs/Web/CSS/@charset) and [@layer](/en-US/docs/Web/CSS/@layer)) and style declarations, or it will be ignored.

## Syntax

```css
@import url;
@import url layer;
@import url layer(layer-name);
@import url layer(layer-name) supports(supports-condition);
@import url layer(layer-name) supports(supports-condition) list-of-media-queries;
@import url layer(layer-name) list-of-media-queries;
@import url supports(supports-condition);
@import url supports(supports-condition) list-of-media-queries;
@import url list-of-media-queries;
```

where:

- _url_
  - : Is a {{CSSxRef("&lt;string&gt;")}}, a `<url>`, or a {{CSSxRef("url")}} function representing the location of the resource to import. The URL may be absolute or relative.
- _list-of-media-queries_
  - : Is a comma-separated list of [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), which specify the media-dependent conditions for applying the CSS rules defined in the linked URL. If the browser does not support any of these queries, it does not load the linked resource.
- _layer-name_
  - : Is the name of a [cascade layer](/en-US/docs/Web/CSS/@layer) into which the contents of the linked resource are imported.
- _supports-condition_ {{experimental_inline}}
  - : Indicates the feature(s) that the browser must support in order for the stylesheet to be imported.
    If the browser does not conform to the conditions specified in the _supports-condition_, it may not fetch the linked stylesheet, and even if downloaded through some other path, will not load it.
    The syntax of `supports()` is almost identical to that described in {{CSSxRef("@supports")}}, and that topic can be used as a more complete reference.

## Description

Imported rules must come before all other types of rules, except {{CSSxRef("@charset")}} rules and layer creating [`@layer`](/en-US/docs/Web/CSS/@layer) statements.

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* more styles */
@import url("my-imported-styles.css");
```

As the `@import` at-rule is declared after the styles it is invalid and hence ignored.

```css example-good
@import url("my-imported-styles.css");
* {
  margin: 0;
  padding: 0;
}
/* more styles */
```

The `@import` rule is not a [nested statement](/en-US/docs/Web/CSS/Syntax#nested_statements). Therefore, it cannot be used inside [conditional group at-rules](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

So that {{glossary("user agent", "user agents")}} can avoid retrieving resources for unsupported media types, authors may specify media-dependent import conditions. These conditional imports specify comma-separated [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) after the URL. In the absence of any media query, the import is not conditional on the media used. Specifying `all` for the `list-of-media-queries` has the same effect.

Similarly, user agents can use the `supports()` function in an `@import` at-rule to only fetch resources if a particular feature set is (or is not) supported.
This allows authors to take advantage of recently introduced CSS features, while providing graceful fallbacks for older browser versions.
Note that the conditions in the `supports()` function of an `@import` at-rule can be obtained in JavaScript using {{domxref("CSSImportRule.supportsText")}}.

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

### Importing CSS rules conditional on media queries

```css
@import url("fineprint.css") print;
@import url("bluish.css") print, screen;
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

The `@import` rules in the above examples show media-dependent conditions that will need to be true before the linked CSS rules are applied. So for instance, the last `@import` rule will load the `landscape.css` stylesheet only on a screen device in landscape orientation.

### Importing CSS rules conditional on feature support

```css
@import url("gridy.css") supports(display: grid) screen and (max-width: 400px);
@import url("flexy.css") supports(not (display: grid) and (display: flex)) screen
  and (max-width: 400px);
```

The `@import` rules above illustrate how you might import a layout that uses a grid if `display: grid` is supported, and otherwise imports CSS that uses `display: flex`.
While you can only have one `supports()` statement, you can combine any number of feature checks with `not`, `and`, and `or`, as long as you wrap each condition to be tested in parentheses.
You can also use parentheses to indicate precedence.
Note that if you just have a single declaration then you don't need to wrap it in additional brackets: this is shown in the first example above.

The examples above show support conditions using simple declaration syntax.
You can also specify CSS functions in `supports()`, and it will evaluate to `true` if they are supported and can be evaluated on the user-agent.
For example, the code below shows an `@import` that is conditional on both [child combinators](/en-US/docs/Web/CSS/Child_combinator) (`selector()`) and the `font-tech()` function:

```css
@import url("whatever.css") supports((selector(h2 > p)) and
    (font-tech(color-COLRv1)));
```

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
