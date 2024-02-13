---
title: Using container size and style queries
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
page-type: guide
browser-compat: css.at-rules.container
---

{{CSSRef}}{{SeeCompatTable}}

[Container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) enable you to apply styles to container elements based on features of the container. The query returns true or false depending on whether the query condition is true for the element container.

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. Similarly, the {{cssxref("@container")}} at-rule enables applying styles to elements based on the container's size or other style features, rather than the viewport's. Container queries have the same syntax rules and the same logical operators as media queries.

```css
@container <container-condition> {
  /* <stylesheet> */
}
```

There are two types of container queries: _container size queries_ and _container style queries_.

**Container size queries** enable applying styles based on the current [size](/en-US/docs/Web/CSS/@container#descriptors) of the element's container, including the orientation and aspect ratio, on elements that have been declared to be a container.

**Container style queries** enable applying styles based on the container's style features. All non-empty elements can be a style query container. Currently, the only style feature supported by style queries is CSS [custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties). The query returns true or false depending on the computed value of the element's custom property. When container style queries are fully supported, they will enable you to apply styles to any element's descendants based on any style feature and computed value, such as if the container is `display: inline flex` or has a non-transparent background color. In the future, container style queries are expected to support querying any CSS property or declaration.

In this guide, we learn the basics of container queries by looking at:

1. [container size queries](#container-size-queries),
2. [naming containers](#naming_containers) to limit their scope, and
3. using the `style()` functional notation within the {{cssxref("@container")}} `<container-condition>` to create [style queries with custom properties](#style_queries_for_custom_properties).

## Container size queries

With size queries, container queries are filtered by a size condition and applied if the element has both 1) been declared to be a container and 2) the container condition is true for that element.

Elements are declared as _size query containers_ by setting their {{cssxref("container-type")}} (or the {{cssxref("container")}} shorthand) property set to `size` or `inline-size`. Container size queries are relevant only for these elements as these property values add [containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment). This is a performance necessity. Querying the size of every element in the DOM, all the time, would be bad for performance and user experience. Additionally, if a descendant style changed the size of the container element, an infinite loop could occur.

In a container size query, the `<container-condition>` includes one or more `<size-query>`s. Each size query includes a size feature name, a comparison operator, and a value. The size features that can be queried are limited to `width`, `height`, `inline-size`, `block-size`, `aspect-ratio`, and `orientation`. The boolean syntax and logic combining one or more `<size-query>`s is the same as for [`@media`](/en-US/docs/Web/CSS/@media) size feature queries.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

The `<size-query>` in this size container query `<container-condition>` example is `(10em <= width <= 20em)`. In this case, all {{htmlelement("form")}} elements are potential matches for any unnamed container query. The styles declared within our container query apply to the descendants of all forms between `10em` and `30em` wide, inclusive.

We could have limited the elements matched by the query by adding a name to the `<container-condition>`. We could also have limited the `@container` queries applicable to {{htmlelement("form")}} elements by setting a {{cssxref("container-name")}}.

## Naming containers

A `<container-condition>` can include an optional case-sensitive {{cssxref("container-name")}}.

```css
@container <container-name> <container-query> {
  /* <stylesheet> */
}
```

The `<container-name>` is a case-sensitive {{cssxref("ident")}}. You can use the {{cssxref("container-name")}} property or the {{cssxref("container")}} shorthand to give container elements a name to ensure that the elements are only matched by the limited set of container queries that contain the same container name in the `@container` query condition. That name needs to match the value of the `container-name` property of the element for the query to apply to that element. The name filters the set of query containers considered to those with a matching query container name.

Container names also enable querying styles from elements that aren't a direct parent. When a containment context is given a name, it can be specifically targeted using the `@container` at-rule instead of the nearest ancestor with containment.

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

The `<style-query>` parameter of the `style()` functional notation can include just a CSS variable name; a custom property with no value. When no value is included, the style query will match all elements that have a value for `--theme-color` that differs from the initial value. It returns false if the value is the same ase the value of the `initial-value` descriptor within the `@property` at-rule, if there is one.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In this example, the container query matches the element on which the `--theme-color` property was declared and all of its descendants. As the CSS variable `--theme-color` was declared on the {{cssxref(":root")}}, the style query `style(--theme-color)` will be true for every element within that {{glossary("DOM")}}.

If explicitly defined with the {{cssxref("@property")}} CSS at-rule, the style query `style(--theme-color)` will only be true for elements where the computed value for `--theme-color` is different from the [`initial-value`](/en-US/docs/Web/CSS/@property/initial-value) set in the original definition.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherited: true;
}

:root {
  --theme-color: rebeccapurple;
}

main {
  --theme-color: blue;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In this example, the `:root` element would NOT match as the custom property value for that element (and all the elements inheriting the value) is the same as the `initial-value`. Only elements that override that value, in this case the {{htmlelement("p")}} and its descendants, are a match.

#### Custom property with a value

If a style query includes a value for the custom property, the element's computed value for that property must be an exact match, with equivalent values only being a match if the custom property was defined with the {{cssxref("@property")}} at rule containing a `syntax` descriptor.

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

##### Example

In this example, we have a {{htmlelement("fieldset")}} with four radio buttons. The fourth option includes a text {{htmlelement("input")}} for entering a custom color.

```html
<fieldset>
  <legend>Change the value of <code>--theme</code></legend>
  <ol>
    <li>
      <input type="radio" name="selection" value="red" id="red" />
      <label for="red">--theme: red;</label>
    </li>
    <li>
      <input type="radio" name="selection" value="green" id="green" />
      <label for="green">--theme: green</label>
    </li>
    <li>
      <input type="radio" name="selection" value="blue" id="blue" />
      <label for="blue">--theme: blue</label>
    </li>
    <li>
      <input type="radio" name="selection" value="currentcolor" id="other" />
      <label for="other">Other</label>
      <label for="color">color:</label>
      <input text="checkbox" name="selection" value="currentcolor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

When a radio button is selected, JavaScript updates the value of the CSS `--theme` variable on the {{htmlelement("body")}} element, which is an ancestor of the {{htmlelement("fieldset")}} and {{htmlelement("output")}} elements. When the text `<input>` is updated, the {{domxref("HTMLInputElement", "value")}} of the `other` is updated, updating the value of `--theme` if `other` is {{domxref("HTMLInputElement", "checked")}}.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", (e) => {
    body.style.setProperty("--theme", e.target.value);
  });
}
color.addEventListener("input", (e) => {
  other.style.setProperty("value", e.target.value);
  if (other.checked) {
    body.style.setProperty("--theme", e.target.value);
  }
});
```

We use the `@property` at-rule to define a CSS variable `--theme` to be a {{cssxref("color_value", "&lt;color>")}} and set the `initial-value` to `#00F`, ensuring equivalent colors are a match whether declared using {{cssxref("rgb")}}, {{cssxref("hex-color")}}, {{cssxref("named-color")}}, or other syntax (for example, `#00F` is equal to `rgb(255 0 0)`, `#ff0000`, and `red`.

```css
@property --theme {
  syntax: "<color>";
  inherits: false;
  initial-value: #f00;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

The first style feature query is a custom property with no value. This query type returns true when the computed value for the custom property value is different from the `initial-value` for that property. In this case, it will be true when the value of `--theme` is any value other than any syntax equivalent value of`#f00` ( such as `red`). When true, the {{htmlelement("output")}} will have a dotted outline.

```css
@container style(--theme) {
  output {
    outline: 2px dotted;
    color: #777;
  }
}
```

These style queries include values for the custom property. These will match if the container's `--theme` value is an equivalent color to the value listed, even if that value is the same as the `initial-value`. When equal to `red`, `blue`, or `green`, the {{cssxref("color")}} will be the color current value of `--theme`. When `red` it will also be bold, to better demonstrate that the container query is a match.

```css
@container style(--theme: green) or style(--theme: blue) or style(--theme: red) {
  output {
    color: var(--theme);
  }
}

@container style(--theme: red) {
  output {
    font-weight: bold;
  }
}
```

{{EmbedLiveSample('example','100%','200')}}

Try changing the color value. Notice that any equivalent of `red` will make the `<output>` red, while removing the outline. Any other valid color , including `currentcolor` or `hsl(0 100% 50%)` makes the first style query return true. Valid values for `color` that aren't value `<color>` values, such as `unset` or `inherit`, are [invalid](/en-US/docs/Web/CSS/CSS_syntax/Error_handling), and will be ignored. When invalid, the `--theme` value inherits its initial value.

When declaring custom properties, consider using `@property` with the {{cssxref("@property/syntax","syntax")}} descriptor so the browser can properly compare computed values.

### Nested queries

Container queries can be nested within other container queries. The styles defined inside multiple nested container queries are applied when all of the wrapping container queries are true.

```css
@container style(--theme: red) {
  output {
    outline: 1px dotted;
  }
  @container style(--theme: purple) {
    output {
      outline: 5px dotted;
    }
  }
}
```

In this case, the `<output>` will have a large dotted border if it's nested in a container where `--theme: purple` is set, and that container is nested within a container whose `--theme` value is `red`.

### Style query CSS declarations and properties

Not yet supported in any browser, the `style()` functional notation can include a regular CSS declaration.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

This basic example makes the background color of any {{htmlelement("b")}} and {{htmlelement("strong")}} elements yellow when the parent is already bold.

The matching is done against the computed value of the parent container; if the parent's computed {{cssxref("font-weight")}} is `bold` (not `bolder` or `900`), there is a match. Just as with custom property container style queries, we did not have to define any elements as style containers as all elements are style containers by default. As long as an element doesn't have a `container-name` set, if it has `font-weight: bold` set or inherited, it will match.

Style features that query a shorthand property are true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style(border: 2px solid red)` will resolve to true if all 12 longhand properties (`border-bottom-style`, etc.) that make up that shorthand are true.

The global `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

Do not apply the styles you are querying in the feature query to the element you're styling with that query as this may cause an infinite loop.

It is expected that style queries will also accept properties in a boolean context. The style query will return false if the value of the property is the initial value for that property (has not been changed), and true otherwise.

```css
@container style(font-weight) {
}
```

The above will return true for any element that has a value for `font-weight` that differs from its initial value. User-agent stylesheets set `font-weight: bold` for {{htmlelement("heading_elements", "heading elements")}} and {{htmlelement("th")}}. Some browsers set {{htmlelement("strong")}} and {{htmlelement("b")}} to `bold`, others to `bolder`. {{htmlelement("optgroup")}} also sometimes has a `font-weight` other than `normal` set by the user agent. As long as the element's font-weight is no the default value for that user-agent, the style query will return true.

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
