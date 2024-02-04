---
title: Using container style queries
slug: Web/CSS/CSS_containment/Container_style_queries
page-type: guide
browser-compat: css.at-rules.container.style
---

{{CSSRef}}{{SeeCompatTable}}

Basic [container queries]((/en-US/docs/Web/CSS/CSS_containment/Container_queries) enable you to apply styles to an element based on the [size](/en-US/docs/Web/CSS/@container#descriptors) of the element's container. Container style queries enable you to apply styles to an element based on the style features of the element's container. For example, you can target styles to a descendant of the container if the container is `display: inline flex`, has a dark mode custom variable value set, has a background color that is not transparent, or based on any other style feature.

In this guide, we learn how to use the `style()` functional notation withing the {{cssxref("@container")}} `<container-condition>` to create container style queries.

### Container queries

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The media query {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. Similarly, the container query {{cssxref("@container")}} at-rule enables applying styles to elements based on the container's size or, with container style queries, other style features of a container.

With {{cssxref("@container")}} query, declarations are filtered by a condition and applied if the element has been declared to be a container with the {{cssxref("container-type")}} property set and the condition is true for that element. The styles within a container query style block are applied to Once an eligible query container has been selected for an element, each container query feature in the `<container-condition>` is evaluated against that query container.

In a basic container query, the `<container-condition>` includes one or more size features. The syntax is identical to a [`@media` queries](/en-US/docs/Web/CSS/@media), with the size features that can be queried limited to `width`, `height`, `inline-size`, `block-size`, `aspect-ratio`, and `orientation`. The `<container-condition>` can also include an optional case-sensitive {{cssxref("container-name")}}. Media queries are based on the viewport, of which there is only one. Every element is a potential container, so unlike media queries, you can name your container, filtering the set of query containers considered to those with a matching query container name.

```css
@container medium (10em <= width <= 20em) {
  /* styles */
}
```

In the above example, the `medium` container can be any element that is between 10em and 20em, inclusive.

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
