---
title: Using container size and style queries
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
page-type: guide
browser-compat: css.at-rules.container
---

{{CSSRef}}

[Container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) enable you to apply styles to elements nested within a specific container based on the features of that container. The query returns true or false depending on whether the query condition is true for the container.

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries). The {{cssxref("@media")}} at-rule enables applying styles to elements based on viewport size or other device characteristics. Similarly, the {{cssxref("@container")}} at-rule enables applying styles to elements based on a containing element's size or other style features, rather than the viewport's. Container queries have the same syntax rules and logical operators as media queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

There are two types of container queries: _container size queries_ and _container style queries_:

- **Container size queries**

  - : Size queries enable applying styles to elements based on the current [size](/en-US/docs/Web/CSS/@container#descriptors) of a containing element, including the orientation and {{glossary("aspect ratio")}}. The containing elements need to be explicitly declared as _size query containers_.

- **Container style queries**
  - : Style queries enable applying styles to elements based on a containing element's style features. Any non-empty element can be a style query container. Currently, the only style feature supported by style queries is CSS [custom properties](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In this case, the query returns true or false depending on the computed value of the containing element's custom properties. When container style queries are fully supported, they will enable you to apply styles to any element's descendants based on any property, declaration, or computed value — for example if the container is `display: inline flex` or has a non-transparent background color.

In this guide, we learn the basics of container queries by looking at:

1. [container size queries](#container_size_queries_2),
2. [naming containers](#naming_containers) to limit their scope, and
3. using the `style()` functional notation within the {{cssxref("@container")}} at rule's `<container-condition>` to create [style queries with custom properties](#style_queries_for_custom_properties).

## Container size queries

Container size queries are filtered by a size condition. The associated styles are applied to contained elements if the container element has been declared to be a container and the container condition is true for that element. An element's size container is the nearest ancestor with containment.

Elements are declared as _size query containers_ by setting their {{cssxref("container-type")}} property (or the {{cssxref("container")}} shorthand) to `size` or `inline-size`.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Declaring size query containers adds [containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment) to them. This is a performance necessity — querying the size of every element in the DOM, all the time, would be bad for performance and user experience. Additionally, if a descendant style changed the size of the container element, an infinite loop could occur.

In a container size query, the `<container-condition>` includes one or more `<size-query>`s. Each size query includes a size feature name, a comparison operator, and a value. The size features that can be queried are limited to `width`, `height`, `inline-size`, `block-size`, `aspect-ratio`, and `orientation`. The boolean syntax and logic combining one or more `<size-query>`s is the same as for [`@media`](/en-US/docs/Web/CSS/@media) size feature queries.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

The `<container-condition>` in this example contains a single `<size-query>` — `(10em <= width <= 20em)`. In this case, all {{htmlelement("form")}} elements are potential matches for any unnamed container query. The styles declared within our container query apply to the descendants of all forms between `10em` and `30em` wide, inclusive.

## Naming containers

A `<container-condition>` can include an optional case-sensitive {{cssxref("container-name")}}. A container name makes the container condition more specific — it is evaluated only against elements that have that name set in the `container-name` property.

The {{cssxref("container-name")}} property specifies a list of query `<container-name>` values that can be used in `@container` rules; these are case-sensitive {{cssxref("ident")}} values. The container names enable targeting any container ancestor of the element. Without a container name, the query matches only the nearest container ancestor.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

After you add names to your `@container` at rules, you can use the {{cssxref("container-name")}} property or the {{cssxref("container")}} shorthand to target specific container elements. Styles inside the named `@container` at rules will be applied only to matching elements inside containers with those names set, which satisfy the container queries.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

In the above example, the styles within the container query block will apply to the descendants of all {{htmlelement("li")}} elements with a width that is greater than their height. Note that other elements with `container-name: card` applied to them that match the size query will also have these styles applied to their elements' descendants.

```css
@container wide (min-width: 20em) {
  /* styles applied to descendants of wide .sizeContainer */
}

@container narrow (max-width: 20em) {
  /* styles applied to descendants of narrow .sizeContainer */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

In the above example, the element has two container names, `wide` and `narrow`. The descendants of any elements with `class="sizeContainer"` will get the styles from the `wide` or `narrow` query applied (or both if an element is precisely 20em wide).

The default value `container-type: normal` prevents the container from being a size container, but it can still be a [style container](#container_style_queries). The default value `container-name: none` states the container has no name, but it does not prevent the element from matching unnamed queries.

With container queries, we are not limited to size queries! You can also query a container's style features.

## Container style queries

A _container style query_ is a `@container` query that evaluates computed styles of the container element as defined in one or more `style()` functional notations. The boolean syntax and logic used to combine style features into a style query are the same as in [CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). The only difference is the function name — `style()` within a `<style-feature>` as opposed to `supports()` within a `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

The parameter of each `style()` function is a single **`<style-feature>`**. Per the CSS containment specification, a `<style-feature>` can be a valid CSS [declaration](/en-US/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), a CSS property, or a [`<custom-property-name>`](/en-US/docs/Web/CSS/var#values). The only style feature currently supported is custom properties, with or without a value. See the [browser compatibility table](#browser_compatibility).

If the `<style-feature>` includes a value, the style query evaluates to true if the computed value of the custom property (or, in the future, the CSS declaration) passed as the `style()` argument is true for the container being queried. Otherwise, it resolves to false.
A style feature without a value evaluates to true if the computed value is different from the [initial value](#registered_properties) for the given property.

In the future, we'll be able to write style queries like so:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

The `style()` functional notation is used to differentiate style queries from size queries. While not yet supported, we will eventually be able to query regular CSS declarations such as `max-width: 100vw`. Querying `@container (max-width: 100vw)` is a size query; containment with {{cssxref("container-type")}}, or the {{cssxref("container")}} shorthand, is needed. That query will return true if the container is 100vw or less. That is different from querying `@container style(max-width: 100vw)`, which is a style query; when supported, this query will return true if the container has a {{cssxref("max-width")}} value of `100vw`.

Until style queries for regular CSS declarations and properties are supported, we are limited to including only custom properties as the `style()` parameter, with or without a value:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

A few things to note that have already been mentioned but are important to remember:

- All elements can be style query containers; setting a `container-type` is not required. When descendant styles don't impact the computed styles of an ancestor, containment is not needed.
- A `<container-condition>` can include both style and size features. If including size features in your query, make sure your container elements have a `container-type` of `size` or `inline-size` set.
- If you don't want an element to be considered as a container, ever, give it a `container-name` that will not be used. Setting `container-name: none` removes any query names associated with a container; it does not prevent the element from being a style container.
- At the time of this writing (February 2024), container style queries only work with CSS custom property values in the `style()` query.

Now, let's dive in and take a look at the different `<style-feature>` types.

### Style queries for custom properties

Style queries for custom properties allow you to query the [custom properties](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), also called "CSS variables", of a parent element. They are included within a `<style-query>` just as you would include any regular CSS property within a feature query: either with or without a value.

#### Standalone custom property queries

The `<style-query>` parameter of the `style()` functional notation can include just a CSS variable name; a custom property with no value. When no value is included, the query will return false if the value is the same as the value of the `initial-value` descriptor within the `@property` at-rule, if there is one. The style query will return true and match all elements that have a custom property value that differs from the `initial-value` or for all elements that have a custom property of any value if the custom property was declared without being registered.

##### Unregistered custom properties

When CSS variables are introduced via a simple CSS custom property value assignment, valueless custom property queries always return true.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In this example, the container query matches the element on which the `--theme-color` property was declared and all of its descendants. As the CSS variable `--theme-color` was declared on the {{cssxref(":root")}}, the style query `style(--theme-color)` will be true for every element within that {{glossary("DOM")}} node.

##### Registered properties

The behavior of registered custom properties is different. When explicitly defined with the {{cssxref("@property")}} CSS at-rule or via JavaScript with {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}, the style query `style(--theme-color)` only returns true for elements if the element's computed value for `--theme-color` is different from the [`initial-value`](/en-US/docs/Web/CSS/@property/initial-value) set in the original definition of that custom property.

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

In this example, the `:root` element does NOT match the style query because the value of the custom property is the same as the `initial-value` value. The custom property value for the element (and all the elements inheriting the value) is still `rebeccapurple`. Only elements that differ from the initial value, in this case, the {{htmlelement("main")}} and its descendants that inherit that changed value, are a match.

#### Custom property with a value

If a style query includes a value for the custom property, the element's computed value for that property must be an exact match, with equivalent values only being a match if the custom property was defined with a {{cssxref("@property")}} at rule (or a {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}} method call) containing a `syntax` descriptor.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

This container style query matches any element that has `blue` as the {{cssxref("computed_value")}} of the `--accent-color` custom property.

In this case, other color values equivalent to sRGB `blue` (such as the hexadecimal code `#0000ff`) will match only if the `--accent-color` property was defined as a color with `@property` or `CSS.registerProperty()`, for example:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In this case, if the value of `--accent-color` were set to `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)`, or `rgb(0% 0% 100%)` it would return true for `@container style(--accent-color: blue)`.

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

JavaScript updates the value of the CSS `--theme` variable on the {{htmlelement("body")}} element, which is an ancestor of the {{htmlelement("fieldset")}} and {{htmlelement("output")}} elements, whenever a radio button is selected. When the text `<input>` is updated, the {{domxref("HTMLInputElement.value", "value")}} of the `other` radio button is updated only if the `other` radio button is checked, which in turn updates the value of `--theme`.

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

We use the `@property` at-rule to define a CSS variable `--theme` to be a {{cssxref("color_value", "&lt;color&gt;")}} value and set the `initial-value` to `#00F`, ensuring equivalent colors are a match regardless of what syntax is used (for example, `#F00` is equal to `rgb(255 0 0)`, `#ff0000`, and `red`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: #f00;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

The first style feature query is a custom property with no value. This query type returns true when the computed value for the custom property value is different from the `initial-value` for that property. In this case, it will be true when the value of `--theme` is any value other than any syntax equivalent value of `#f00` ( such as `red`). When true, the {{htmlelement("output")}} will have a 5px dotted outline. The outline color is the current value of `--theme`. The default text {{cssxref("color")}} is grey.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

The second and third style queries include values for the custom property. These will match if the container's `--theme` value is an equivalent color to the value listed, even if that value is the same as the `initial-value`. The first query matches elements whose `--theme` value is equivalent to `red`, `blue`, or `green`. When it is, the {{cssxref("color")}} will be the color current value of `--theme` (in the case of `blue` and `green`, overriding the grey set in the first style query).

The second style query states that when `--theme` is equivalent to `red`, the `<output>`'s contents will also be bold. We did this to better demonstrate that the container query is a match.

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

Try entering different color values into the text box. You may notice that values that are sRGB equivalents of `red` will make the `<output>` red — as it matches `style(--theme: red)` — while removing the outline, because `style(--theme)` returns false if the element's value for `--theme` is the same as the initial value for `--theme` defined by the `@property` at-rule. Any non-red sRGB valid color value, including `currentcolor` or `hsl(180 100% 50%)`, etc., makes the first style query return true; they are values that are different from the `initial-value`.

Because we set `syntax: "<color>";`, the CSS variable can only be assigned valid `<color>` values. Valid values for the {{cssxref("color")}} property that aren't value `<color>` values, such as `unset` or `inherit`, are [invalid](/en-US/docs/Web/CSS/CSS_syntax/Error_handling) for this custom property, and will be ignored.

If you enter `unset` or `gibberish`, the JavaScript updates the `style` on the {{HTMLElement("body")}} to `--theme: unset` or `--theme: gibberish`. Neither of these are colors. Both are invalid and ignored. This means the initial value is inherited and unchanged, with `style(--theme)` returning false and `style(--theme: red)` returning true.

> [!NOTE]
> When declaring custom properties, consider using `@property` with the {{cssxref("@property/syntax","syntax")}} descriptor so the browser can properly compare computed values.

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

In this case, the `<output>` will have a 5px dotted border if it's nested in a container where `--theme: purple` is set, and that container is nested within a container whose `--theme` value is `red`.

### Style query CSS declarations and properties

Not yet supported in any browser, the `style()` functional notation can include regular CSS declarations including CSS properties and property value pairs.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

When supported, this basic example will make the background color of any {{htmlelement("b")}} and {{htmlelement("strong")}} elements yellow when the parent is already `bold`.

The matching is done against the computed value of the parent container; if the parent's computed {{cssxref("font-weight")}} is `bold` (not `bolder` or `900`), there is a match. Just as with custom property container style queries, we did not have to define any elements as style containers as all elements are style containers by default. As long as an element doesn't have a `container-name` set, if it has `font-weight: bold` set or inherited, it will match.

Style features that query a shorthand property will be true if the computed values match for each of its longhand properties, and false otherwise. For example, `@container style({{cssxref("border")}}: 2px solid red)` will resolve to true if all 12 longhand properties ({{cssxref("border-bottom-style")}}, etc.) that make up that shorthand are set to the same equivalent values.

The global CSS values `revert` and `revert-layer` are invalid as values in a `<style-feature>` and cause the container style query to be false.

Do not apply the styles you are querying in the style query to the element you are styling with that query as this may cause an infinite loop.

It is expected that style queries will also accept properties in a boolean context. The style query will return false if the value of the property is the initial value for that property (if it has not been changed), and true otherwise.

```css
@container style(font-weight) {
}
```

The above example will return true for any element that has a value for `font-weight` that differs from its initial value. User-agent stylesheets set `font-weight: bold` for {{htmlelement("heading_elements", "heading")}} and {{htmlelement("th")}} elements, for example. Some browsers set {{htmlelement("strong")}} and {{htmlelement("b")}} to `bold`, others to `bolder`. {{htmlelement("optgroup")}} also sometimes has a `font-weight` other than `normal` set by the user agent. As long as the element's `font-weight` is not the default value for that user-agent, the style query will return true.

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
- [Understanding `aspect-ratio`](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Getting Started with Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Style queries](https://una.im/style-queries/) via una.im (2022)
