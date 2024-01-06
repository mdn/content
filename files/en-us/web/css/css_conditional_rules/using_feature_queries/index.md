---
title: Using feature queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
page-type: guide
---

{{CSSRef}}

**Feature queries** are created using the CSS at-rule [@supports](/en-US/docs/Web/CSS/@supports), and are useful as they give web developers a way to test to see if a browser has support for a certain feature, and then provide CSS that will only run based on the result of that test. In this guide you will learn how to implement progressive enhancement using feature queries.

> **Note:** The CSS at-rule [@import](/en-US/docs/Web/CSS/@import) can similarly use a `supports()` condition, if available, to ensure that stylesheets are not even loaded (and possibly not fetched) if they use features that are not supported.
> The syntax is almost identical to that described here for `@supports`.

## Syntax

CSS feature queries are part of the [CSS conditional rules module](/en-US/docs/Web/CSS/CSS_conditional_rules), which also contains the media query [@media](/en-US/docs/Web/CSS/@media) rule; when you use feature queries, you will find they behave in a similar way to media queries. The difference is that with a media query you are testing something about the environment in which the web page is running, whereas with feature queries you are testing browser support for CSS features.

A feature query consists of the `@supports` rule, followed by the property name and value you would like to test for. You may not test for a bare property name such as `display`; the rule requires a property name and a value:

```css
@supports (property: value) {
  CSS rules to apply
}
```

If you want to check if a browser supports the `row-gap` property, for example, you would write the following feature query. It doesn't matter which value you use in a lot of cases: if all you want is to check that the browser supports this property, then any valid value will do.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

The value part of the property value pair matters more if you are testing for new values of a particular property. A good example would be the `display` property. All browsers support `display`, as `display: block` dates back to CSS1. However the values `display: flex` and `display: grid` are newer. There are often additional values added to properties in CSS, and so the fact that you have to test for property and value means that you can detect support for these values.

## Testing for lack of support

In addition to asking the browser if it supports a feature, you can test for the opposite by adding in the `not` keyword:

```css
@supports not (property: value) {
  CSS rules to apply
}
```

The CSS inside the following example feature query will run if the browser does not support `row-gap`.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Testing for more than one feature

You may need to test support for more than one property in your feature query. To do so, you can include a list of features to test for, separated by `and` keywords:

```css
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

For example, if the CSS you want to run requires that the browser supports CSS Shapes and CSS Grid, you could create a rule which checks for both of these things. The following rule will only return true if both `shape-outside: circle()` and `display: grid` are supported by the browser.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

You can also use `or`, if one property out of a selection could match to enable the CSS you want to use:

```css
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

This can be particularly useful if a feature is vendor prefixed, as you can test for the standard property plus any vendor prefixes.

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Limitations of feature queries

The `@supports` rule tests to see if the browser can parse one or more property/value pairs, and therefore if it claims to support the feature(s). If the property and value pair is understood by the browser it returns a positive response. Therefore feature queries cannot be used to check if a browser supports a thing properly, and without bugs!

In addition, feature queries cannot test for _partial implementations_. A good example of this is the `gap` property. All browsers that support CSS Grid support `gap` in CSS Grid, however only Firefox supports `gap` in Flexbox. If you test for the `gap` property, because you want to use it in Flexbox, you will get a positive response even though it is not implemented.

## How to use feature queries for progressive enhancement

Feature queries are an incredibly useful tool when progressively enhancing a site. They enable you to provide a good solution for all browsers, and an enhanced solution for those browsers that support newer features.

However, there are browsers that don't support feature queries but also have no support for a feature we want to use. For example, we might want to use CSS Grid, which is not supported in IE11. We can't create a fallback by checking for browsers which do not have support, as IE11 doesn't support feature queries either! In practice however, when using feature queries for progressive enhancement, this doesn't matter. You do however need to structure your CSS in a certain way, writing CSS for non-supporting browsers and overwriting it with the CSS inside the feature query.

Let's walk through a very simple example where feature queries come in handy, which uses them in the way described above.

Let's say we want to create a layout of three boxes in a row, and ideally we would like to use [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout). However, we would like to have a layout for older browsers using floats. We can start by creating that floated layout with the following code, which gives us three columns.

{{EmbedGHLiveSample("css-examples/feature-queries/step1.html", '100%', 900)}}

When browsers don't understand a CSS property or value, they ignore it. So we could start enhancing our layout by using CSS Grid. Browsers that do not support grid will ignore the `grid` value of the `display` property. Once a floated item becomes a grid item, the float is removed — something you can read more about in [Supporting Older Browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers). Therefore the grid version should just overwrite the floated one.

We have a problem however, caused by the `width` property we used on our floated items to make them display as three columns. This is now interpreted by grid as being the width of the column track, not the width of the container as it is for the float.

{{EmbedGHLiveSample("css-examples/feature-queries/step2.html", '100%', 900)}}

What we need is a way to remove the width if `display: grid` is supported. This is exactly the situation feature queries solve. We can set the `width` back to `auto` if grid is supported.

{{EmbedGHLiveSample("css-examples/feature-queries/step3.html", '100%', 900)}}

In the above scenario, it doesn't matter that IE11 doesn't support feature queries or CSS Grid — it would get the floated version anyway, which is then overwritten by browsers that do support grid.

An alternate way to write the above code is to wrap all of the grid code in a feature query as follows.

{{EmbedGHLiveSample("css-examples/feature-queries/step4.html", '100%', 900)}}

This may mean you have a little more code but comes with the benefit of being able to test the fallback by misspelling the property or value name. You can try this in the live example above by changing `display: grid` in the `@supports` rule to `display: grip` or similar.

## Summary

Feature Queries can help you start to use newer features by enhancing a simpler display of the site used for older browsers. As you can wrap up the CSS for supporting browsers, you do not run the risk of styles used for the fallback display leaking through, as shown in our grid example above.

### See also

- The [@supports](/en-US/docs/Web/CSS/@supports) rule
- Learn Layout: [Supporting Older Browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [CSS Grid Layout and Progressive Enhancement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Using Feature Queries in CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
