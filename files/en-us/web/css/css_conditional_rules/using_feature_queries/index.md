---
title: Using feature queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
page-type: guide
---

{{CSSRef}}

**Feature queries** are conditional group rules that test whether the user agent supports or doesn't support one or more CSS features, such as CSS properties and property values. Feature queries give web developers a way to test to see if a browser has support for a certain feature, and then provide CSS that will only run based on the result of that test. In this guide, you will learn how to implement progressive enhancement using feature queries.

Feature queries are created using the CSS at-rule [`@supports`](/en-US/docs/Web/CSS/@supports) (or the `supports()` function within [`@import`](/en-US/docs/Web/CSS/@import) at-rules).

## Syntax

CSS feature queries are part of the [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module, which also defines the media query [`@media`](/en-US/docs/Web/CSS/@media) at-rule. Feature queries behave similarly to [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). The difference is that with a media query, you are testing something about the environment in which the web page is running, whereas with feature queries you are testing browser support for CSS features.

A feature query consists of the `@supports` at-rule followed by the support condition or a `supports()` function and declaration parameter within an `@import` at-rule declaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

For example, we can apply a set of styles or import an entire stylesheet if the user-agent supports `red` as a valid value for the CSS {{cssxref("color")}} property:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

As another example, if you want to check if a browser supports the `row-gap` property you would write the following feature query. It doesn't matter which value you use in a lot of cases: if all you want is to check that the browser supports this property, then any valid value will do.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

The value part of the property-value pair matters more if you are testing for new values of a particular property. All browsers support `color: red`: this dates back to CSS1. However, there are often additional values added to properties in CSS, like [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors), which may not be supported. Feature queries enable testing property and value pairs, meaning we can detect support for values.

Expanding on the `color` property example above, here we check if the browser supports the `color: AccentColor` declaration:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In these examples, we've used feature queries to check if the user-agent supports a specific value of a CSS property, listing the single declaration within parenthesis. You can test for multiple property values or the lack of support.

## Testing for lack of support

In addition to asking the browser if it supports a feature, you can test for the opposite by adding in the `not` keyword:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
}
```

The CSS inside the following example feature query will run if the browser does not support `row-gap`.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Testing for more than one feature

You may need to test support for more than one property in your feature query. To do so, you can include a list of features to test for, separated by `and` keywords:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

For example, if the CSS you want to run requires that the browser supports CSS Shapes and CSS grid, you could create a rule that tests browser support for both of these features. The following rule will only return true if `shape-outside: circle()` and `display: grid` are both supported by the browser.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

## Testing for at least one of multiple features

You can also use `or` to apply CSS only if one or more declarations are supported:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

This can be particularly useful if a feature is vendor prefixed, as you can test for the standard property plus any vendor prefixes.

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Additional feature query options

Feature queries are not limited to property-value pairs. You can include [`font-tech()`](/en-US/docs/Web/CSS/@supports#font-tech), [`font-format()`](/en-US/docs/Web/CSS/@supports#font-format), and [`selector()`](/en-US/docs/Web/CSS/@supports#function_syntax) functions in your feature queries to selectively apply CSS based on whether the user-agent supports a specified font technology, font format, or selector syntax, respectively.

For example, the `selector()` function can be used to import a stylesheet for browsers that support a vendor-prefixed pseudo-element:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Examples

### Browser support test

In this example, we check if the browser supports the `AccentColor` {{cssxref("system-color")}} and use `display: none` to change the default "not supported" message to a "supported" message if the color type is supported.

#### HTML

```html
<p class="accentcolor">
  Your browser does <span>not</span> support <code>AccentColor</code> as a color
  value.
</p>
```

#### CSS

```css
@supports (color: AccentColor) {
  p {
    color: green;
    border: 2px solid;
  }
  span {
    display: none;
  }
}
@supports not (color: AccentColor) {
  p {
    color: red;
  }
}
```

#### Results

{{EmbedLiveSample("Browser support test", "600", "50")}}

## Limitations of feature queries

The `@supports` rule tests to see if browsers can parse one or more property/value pairs, and therefore if they claim to support the associated feature(s). If the property/value pairs are understood by a browser it returns a positive response. Feature queries check that declarations are considered valid by a browser, but can't be used to check if it supports a feature properly without bugs or spec violations. Feature queries cannot test for _partial implementations_.

## Summary

Feature queries are a useful tool for progressively enhancing a site. They enable you to provide a good solution for all browsers, and an enhanced solution for browsers that support newer properties and values.

You don't need to use feature queries to start using new CSS features; CSS error handling means the browser simply ignores CSS it does not yet recognize. However, feature queries are a useful alternative to fallback declarations, and enable writing code once that can eventually be supported everywhere.

### See also

- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module
- [Using CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Supporting older browsers: feature queries](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser feature detection: CSS `@supports`](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)
