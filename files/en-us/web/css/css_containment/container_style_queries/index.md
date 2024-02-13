---
title: Using container size and style queries
slug: Web/CSS/CSS_containment/Container_style_queries
page-type: guide
browser-compat: css.at-rules.container
---

{{CSSRef}}{{SeeCompatTable}}

[Container queries]((/en-US/docs/Web/CSS/CSS_containment/Container_queries) enable you to apply styles to container elements based on features of the container. The query returns true or false depending on whether the query condition is true for the element container.

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The media query {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. Similarly, the container query {{cssxref("@container")}} at-rule enables applying styles to elements based on the container's size or other style features, rather than the viewport's. Container queries have the same syntax rules and the same logical operators as media queries.

```css
@container <container-condition> {
  /* <stylesheet> */
}
```

There are two types of container queries: container size queries and container style queries.

Container size queries enable applying styles based on the current [size](/en-US/docs/Web/CSS/@container#descriptors) of the element's container, including the orientation and aspect ratio, on elements that have been declared to be a container.

Container style queries enable applying styles based on the container's style features. All non-empty elements can be a style query container. Currently, the only style feature supported by style queries is CSS [custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties). The query returns true or false depending on the computed value of the element's custom property. When container style queries are fully supported, they will enable you to apply styles to any element's descendants based on any style feature and computed value, such as if the container is `display: inline flex` or has a non-transparent background color. In the future, container style queries are expected to support querying any CSS property or declaration.

In this guide, we learn the basics of container queries by looking at container size queries, [naming containers](#naming_containers) to limit their scope, and using the `style()` functional notation within the {{cssxref("@container")}} `<container-condition>` to create [style queries with custom properties](#style_queries_for_custom_properties).

## Container size queries

With container size queries, declarations are filtered by a size condition and applied if the element has been declared to be a container with the {{cssxref("container-type")}} property set to `size` or `inline-size`, and the condition is true for that element.

Media queries are based on the viewport, of which there is only one, and its size rarely changes. There are often thousands of elements on a page. Querying the size of every element all the time would be bad for performance and, therefore, user experience. Additionally, if a descendant style changed the size of the container element, an infinite could occur. For these reasons, container size queries are relevant only for elements with a `container-type` property of either `size` or `inline-size` set is a container, as these values add [containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment).

In a container size query, the `<container-condition>` includes one or more `<size-query>`. The size features that can be queried are limited to `width`, `height`, `inline-size`, `block-size`, `aspect-ratio`, and `orientation`. The syntax for `<size-query>` is identical to the size feature syntax of [`@media` queries](/en-US/docs/Web/CSS/@media).

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

In this example, the `<size-query>` in this size container query `<container-condition>` is `(10em <= width <= 20em)`. All {{htmlelement("form")}} elements are potential matches for any unnamed container queries. The styles declared within our container query apply to the descendants of all forms between `10em` and `30em` wide, inclusive.

## Naming containers

A `<container-condition>` can include an optional case-sensitive {{cssxref("container-name")}}.

```css
@container <container-name> <container-query> {
  /* <stylesheet> */
}
```

The `<container-name>` is a case-sensitive {{cssxref("ident")}}. You can use the {{cssxref("container-name")}} property to give container elements a name to ensure that the elements are only matched by the limited set of container queries that contain the same container name in the `@container` query condition. That name needs to match the value of the `container-name` property of the element for the query to apply to that element. The name filters the set of query containers considered to those with a matching query container name.

Container names also enable querying styles from elements that aren't a direct parent.

```css
@container card (orientation: landscape) and (max-width: 40rem) {
  /* styles */
}

.cards li {
  container-type: inline-size;
  container-name: card;
}
```

In this container size query example, the query is limited to only elements with `container-name: card` applied. The styles within the query block will apply to the descendants of all list items nested within an element with a class of `cards` with a width that is greater than its height. The styles within the container query style block will apply to the descendants of the {{htmlelement("li")}} elements that match the size query that are descendants of an element with a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) of `card`. If other elements have `card` within their space-separated `container-name` value and match the size query, the styles will be applied to those elements' descendants as well.

Set `container-name: none` to prevent the container from matching any named container queries. That removes all associated container query names, but does not prevent the element from matching unnamed queries. To prevent an element from being a size container, set `container-type: normal`. This removes containment, meaning the element isn't a size container but it can still be a style query. To prevent an element from being matched by any container queries, provide it with an unused `container-name`.

With container queries, we are not limited to size queries! You can also query a container's style features.

## Container style queries

Container queries can evaluate the computed style of the container element. A _container style query_ is a `@container` query that uses one or more `style()` functional notations. The boolean syntax and logic combining style features into a style query is the same as including [CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries), but using the `style()` function with a `<style-feature>` instead of the `supports()` function with a `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

The parameter of each `style()` is a single `<style-feature>`. Per the CSS containment specification, a **`<style-feature>`** can be a valid CSS [declaration](/en-US/docs/Web/CSS/syntax#css_declarations), a CSS property, or a [`<custom-property-name>`](/en-US/docs/Web/CSS/var#values). The only style feature currently supported is custom properties, with and without a value. See the [browser compatibility table](#browser_compatibility) for declaration and property support status.

If the `<style-feature>` includes a value, the style query evaluates to true if the computed value of the custom property value (or, in the future, the CSS declaration) passed as the `style()` argument is true for the container being queried. Otherwise, it resolves to false.
A style feature without a value evaluates to true if the computed value is different from the initial value for the given property.

In the future, we'll be able to write style queries like so:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

The `style()` functional notation is used around the style feature to differentiate it from a size query. While not yet supported, we will eventually be able to query regular CSS declarations such as `max-width: 100vw`. Querying `@containers (max-width: 100vw)` is a size query; containment with {{cssxref("container-type")}}, or the {{cssxref("container")}} shorthand, is needed. That is different from querying `@containers style(max-width: 100vw)` which is a style query.

Until style queries for regular CSS declarations and properties are supported, we are limited to including only custom properties as the `style()` parameter, with or without a value:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

A few things to note:

- All elements can be style query containers; setting a `container-type` is not required. As descendant styles don't impact the computed styles of an ancestor, containment is not needed.
- If you don't want an element to be considered as a container, ever, give it a `container-name` that will not be used. Setting `container-name: none` removes any query names associated with a container; it does not prevent the element from being a style container.
- The container condition can include both style and size features. If including size features, include the `container-type` property.
- At the time of this writing (February 2024), container style queries only work with CSS custom property values in the `style()` query.

Now, let's dive in and take a look at the different `<style-feature>` types:

### Style queries for custom properties

Style queries for custom properties allow you to query the custom property, also called "CSS variables", of a parent element. Container style queries for custom properties has some [browser support](#browser_compatibility).

[Custom properties are CSS properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties). They are included within a `<style-query>` just as you would include any regular CSS property within a feature query: either with a value as a CSS property assignment or without the value as a custom property name.

#### Stand alone custom property queries

The `<style-query>` parameter of the `style()` functional notation can include just a CSS variable name; a custom property with no value.

```css
@container style(--theme-color) {
  /* <stylesheet> */
}
```

In this example, the container query matches the element on which the `--theme-color` property was declared and all of its descendants. For example, if the custom variable `--theme-color` was declared on the {{cssxref(":root")}}, the style query `style(--theme-color)` will be true for every element within that {{glossary("DOM")}}.

```css
:root {
  --theme-color: rebeccapurple;
}

/* every element is matched (see exception below) */
@container style(--theme-color) {
  /* <stylesheet> */
}
```

If explicitly defined with the {{cssxref("@property")}} CSS at-rule, the style query `style(--theme-color)` will only be true for elements where the computed value for `--theme-color` is different from the [`initial-value`](/en-US/docs/Web/CSS/@property/initial-value) set in the original definition.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherited: true;
}
```

If this explicit definition was declared, there would be an exception to the "every element is matched" comment preceding the container query: the `:root` element would NOT match as the custom property value for that element and all the elements inheriting the `rebeccapurple` value is the same as the `initial-value`. Only elements that override that value, and those element's descendants, would be a match.

#### Custom property with a value

If a style query includes a value for the custom property, the element's computed value for that property must be an exact match, with equivalent values only being a match if custom property was defined with the {{cssxref("@property")}} at rule containing a `syntax` descriptor.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

This container style query matches any element that has `blue` as the {{cssxref("computed_value")}} of for the `--accent-color` custom property.

In this case, the equivalent hexidecimal code `#0000ff` will match only if the property was defined as a color with {{cssxref("@property")}}. To ensure the container style query matches all cases of sRGB blue, we would declare the `--accent-color` like so:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

When declaring custom properties, consider using `@property` with the {{cssxref("@property/syntax","syntax")}} descriptor so the browser can properly compare computed values.

### Nested queries

Container queries can be nested within other container queries. The styles defined inside multiple nested container queries are applied when all of the wrapping container queries are true.

### Style query CSS declarations and properties

Not yet supported in any browser, the `style()` functional notation can include a regular CSS declaration. This basic example makes the background color of any {{htmlelement("b")}} and {{htmlelement("strong")}} elements yellow when the parent is already bold.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

The matching is done against the computed value of the parent container; if the parent's computed {{cssxref("font-weight")}} is `bold` (not `bolder` or `900`), there is a match. We did not have to define any elements as style containers as all elements are style containers by default. As long as an element doesn't have a `container-name` set, if it has `font-weight: bold` set or inherited, it will match.

Style features that query a shorthand property are true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style(border: 2px solid red)` will resolve to true if all 12 longhand properties (`border-bottom-style`, etc.) that make up that shorthand are true.

The global `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

Do not apply the styles you are querying in the feature query to the element you're styling with that query as this may cause an infinite loop.

It is expected that style queries will also accept properties in a boolean context. The style query will return false if the value of the property is the initial value for that property (has not been changed), and true otherwise.

```css
@container style(font-weight) {
}
```

The above will return true for any element that has a value for `font-weight` that differs from its initial value. User-agent stylesheets set `font-weight: bold` for {{htmlelement("headers", "h1-h6")}} and {{htmlelement("th")}}. Some browsers set {{htmlelement("strong")}} and {{htmlelement("b")}} to `bold`, others to `bolder`. {{htmlelement("optgroup")}} also sometimes has a `font-weight` other than `normal` set by the user agent. As long as the element's font-weight is no the default value for that user-agent, the style query will return true.

These features are not yet supported in any browser.

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
- [Getting Started with Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Style queries](https://una.im/style-queries/) via una.im (2022)
