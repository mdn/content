---
title: "@document"
slug: Web/CSS/@document
page-type: css-at-rule
status:
  - deprecated
  - non-standard
browser-compat: css.at-rules.document
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

The **`@document`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) restricts the style rules contained within it based on the URL of the document. It is designed primarily for user-defined style sheets (see [userchrome.org](https://www.userchrome.org/) for more information), though it can be used on author-defined style sheets, too.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

An `@document` rule can specify one or more matching functions. If any of the functions apply to a given URL, the rule will take effect on that URL. The functions available are:

- `url()`
  - : Matches an exact URL.
- `url-prefix()`
  - : Matches if the document URL starts with the value provided.
- `domain()`
  - : Matches if the document URL is on the domain provided (or a subdomain of it).
- `media-document()`
  - : Matches the media according to the string in parameter, one of `video`, `image`, `plugin` or `all`.
- `regexp()`
  - : Matches if the document URL is matched by the [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) provided. The expression must match the entire URL.

The values provided to the `url()`, `url-prefix()`, `domain()`, and `media-document()` functions can be optionally enclosed by single or double quotes. The values provided to the `regexp()` function _must_ be enclosed in quotes.

Escaped values provided to the `regexp()` function must additionally be escaped from the CSS. For example, a `.` (period) matches any character in regular expressions. To match a literal period, you would first need to escape it using regular expression rules (to `\.`), then escape that string using CSS rules (to `\\.`).

`@document` is currently only supported in Firefox; if you wanted to replicate using such functionality in your own non-Firefox browser, you could try using [this polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) by @An-Error94, which uses a combination of a user script, [data-\* attributes](/en-US/docs/Web/HTML/Global_attributes/data-*), and [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors).

> [!NOTE]
> There is a -moz-prefixed version of this property — `@-moz-document`. This has been limited to use only in user and UA sheets in Firefox 59 in Nightly and Beta — an experiment designed to mitigate potential CSS injection attacks (See [Firefox bug 1035091](https://bugzil.la/1035091)).

## Formal syntax

```plain
@document [ <url>                    |
            url-prefix(<string>)     |
            domain(<string>)         |
            media-document(<string>) |
            regexp(<string>)
          ]# {
  <group-rule-body>
}
```

## Examples

### Specifying document for CSS rule

```css
@document url("http://www.w3.org/"),
          url-prefix("http://www.w3.org/Style/"),
          domain("mozilla.org"),
          media-document("video"),
          regexp("https:.*") {
  /* CSS rules here apply to:
     - The page "http://www.w3.org/"
     - Any page whose URL begins with "http://www.w3.org/Style/"
     - Any page whose URL's host is "mozilla.org"
       or ends with ".mozilla.org"
     - Any standalone video
     - Any page whose URL starts with "https:" */

  /* Make the above-mentioned pages really ugly */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Specifications

[Initially](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, `@document` was [postponed](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) to Level 4, but then subsequently removed.

## Browser compatibility

{{Compat}}

## See also

- [Per-site user style sheet rules](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) on the www-style mailing list.
