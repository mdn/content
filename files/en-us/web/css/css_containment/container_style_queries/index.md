---
title: Using container style queries
slug: Web/CSS/CSS_containment/Container_style_queries
page-type: guide
browser-compat: css.at-rules.container.style
---

{{CSSRef}}{{SeeCompatTable}}

Basic [container queries]((/en-US/docs/Web/CSS/CSS_containment/Container_queries) enable you to apply styles to container elements based on current [size](/en-US/docs/Web/CSS/@container#descriptors) of the element's container, including the orientation and aspect ratio. Container style queries enable you to apply styles to any element's descendants based on the style features of that element, such as if the element is `display: inline flex`, has a dark mode custom variable value set, has a background color that is not transparent, or any other style feature. While you have to explicitly set an element to be a container for container size queries, every element is a style container.

In this guide, we learn the basics of container queries by looking at container size queries, then learn how to use the `style()` functional notation within the {{cssxref("@container")}} `<container-condition>` to create container style queries.

### Container size queries

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The media query {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. Similarly, the container query {{cssxref("@container")}} at-rule enables applying styles to elements based on the container's size or, with container style queries, other style features of a container.

```css
@container <container-condition> {
  /* <stylesheet> */
}
```

With container size queries, declarations are filtered by a size condition and applied if 1) the element has been declared to be a container with the {{cssxref("container-type")}} property set to `size` or `inline-size`, and 2) the condition is true for that element.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

In this example, the `<container-condition>` is `(10em <= width <= 20em)` and all {{htmlelement("form")}} elements are potential matches for any unnamed container queries. The styles declared within our container query apply to the descendants of all forms between `10em` and `30em` wide, inclusive.

In a container size query, the `<container-condition>` includes one or more size-features. A `<container-condition>` can also include an optional case-sensitive {{cssxref("container-name")}}.

The syntax for `<size-features>` is identical to the size feature syntax of [`@media` queries](/en-US/docs/Web/CSS/@media). The size features that can be queried are limited to `width`, `height`, `inline-size`, `block-size`, `aspect-ratio`, and `orientation`.

Media queries are based on the viewport, of which there is only one, and its size rarely changes. There are often thousands of elements on a page. Querying the size of every element all the time would be bad for performance and, therefore, user experience. Additionally, if a descendant style changed the size of the container element, an infinite could could occur. For these reasons, container size queries are relevant only for elements with a `container-type` property of either `size` or `inline-size` set is a container, as these values add [containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment). You can also use the {{cssxref("container-name")}} property to give container elements a name to ensure that the elements are only matched by the limited set of container queries that contain the same container name in the `@container` query condition.

```css
@container <container-name> <container-query> {
  /* <stylesheet> */
}
```

The `<container-name>` is a case-sensitive {{cssxref("ident")}}. That name needs to match the value of the `container-name` property of the element for the query to apply to that element. The name filters the set of query containers considered to those with a matching query container name.

```css
@container card (orientation: landscape) and (max-width: 40rem) {
  /* styles */
}

.cards li {
  container-type: inline-size;
  container-name: card;
}
```

In the above example, all list items nested within an element with a class of `cards` with a width that is greater than its height, are the containers. The styles within the container query style block will apply to the list-items' descendants. This container query is limited to only elements with `container-name: card` applied. The `<container-query>` has the same syntax rules and the same logical operators as a `<media-query>`.

With container queries, we are not limited to size queries! You can also query a container's style features.

### Container style queries

Container queries can evaluate the computed style of the container element. A _container style query_ is a `@container` query that uses one or more `style()` functional notations. The boolean syntax and logic combining style features into a style query is the same as for [CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

A style feature without a value evaluates to true if the computed value is different from the initial value for the given property.

If the `<style-feature>` includes a value, the style query evaluates to true if the computed value of the given in the CSS declaration or custom property value passed as the `style()` argument is true for the container being queried. Otherwise, it resolves to false.

A few things to note:

- All elements can be styles query containers; setting a `container-type` is not required. As descendant styles don't impact the computed styles of an ancestor, containment is needed.
- If you don't want an element to be considered as a container, ever, give it a `container-name` that will not be used. The `none` value removes any query names associated with a container; it doest not prevent the element from being a style container.
- The container condition can include both style and size features. If including size features, include the `container-type` property.

Now, let's dive in and take a look at the different style types:

### CSS declaration

Style features that query a shorthand property are true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style(border: 2px solid red)` will resolve to true if all 12 longhand properties (`border-bottom-style`, etc.) that make up that shorthand are true.

The global `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

### CSS property

### CSS custom property

Custom properties, also called "CSS variables" are CSS properties. They can be included within a `<style-query>` just as you would any other CSS property: either with a value as a CSS declaration, or without the value as a property name.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

The above container query checked if the {{cssxref("computed_value")}} of the container element's `--accent-color` is `blue`.

> **Note:** If a custom property has a value of `blue`, the equivalent hexidecimal code `#0000ff` will not match unless the property has been defined as a color with {{cssxref("@property")}} so the browser can properly compare computed values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}} property
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-name")}} property
