---
title: Using container style queries
slug: Web/CSS/CSS_containment/Container_style_queries
page-type: guide
browser-compat: css.at-rules.container.style
---

{{CSSRef}}{{SeeCompatTable}}

Container style queries enable you to apply styles to an element based on the style features of the element's container.For example, you can query a container, and target styles to a descendant of the container only if the container is `display: inline flex`, has a dark mode custom variable value set, has a background color is not transparent, or other style feature.

In this guide,

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The media query {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. With container query {{cssxref("@container")}} at-rule enables applying styles to elements based on the size or style features of a container.

### Container queries

With {{cssxref("@container")}} query, declarations are filtered by a condition and applied to the container if the condition is true. Once an eligible query container has been selected for an element, each container query feature in the `<container-condition>` is evaluated against that query container. An optional case-sensitive {{cssxref("container-name")}} can be provided which filters the set of query containers considered to just those with a matching query container name.

### Container style queries

Container queries can also evaluate the computed style of the container element. A _container style query_ is an `@container` query that uses one or more `style()` functional notations. The boolean syntax and logic combining style features into a style query is the same as for [CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

The parameter of each `style()` is a single `<style-feature>`. A **`<style-feature>`** is a valid CSS [declaration](/en-US/docs/Web/CSS/syntax#CSS_declarations), a CSS property, or a [`<custom-property-name>`](/en-US/docs/Web/CSS/var#Values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

A style feature without a value evaluates to true if the computed value is different from the initial value for the given property.

If the `<style-feature>` includes a value, the style query evaluates to true if the computed value of the given in the CSS declaration or custom property value passed as the `style()` argument is true for the container being queried. Otherwise, it resolves to false.

The following container query checks if the {{cssxref("computed_value")}} of the container element's `--accent-color` is `blue`:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> **Note:** If a custom property has a value of `blue`, the equivalent hexidecimal code `#0000ff` will not match unless the property has been defined as a color with {{cssxref("@property")}} so the browser can properly compare computed values.

Style features that query a shorthand property are true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style(border: 2px solid red)` will resolve to true if all 12 longhand properties (`border-bottom-style`, etc.) that make up that shorthand are true.

The global `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

-
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}} property
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-name")}} property
