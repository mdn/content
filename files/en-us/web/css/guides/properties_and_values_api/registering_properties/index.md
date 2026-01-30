---
title: Registering custom properties in CSS
slug: Web/CSS/Guides/Properties_and_values_API/Registering_properties
page-type: guide
sidebar: cssref
---

The `@property` at-rule, part of the [CSS Houdini](/en-US/docs/Web/API/Houdini_APIs) set of APIs, allows developers to explicitly define [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*). In this guide, we learn how to use `@property` for type checking and constraining, set default custom property values in CSS, and define whether a custom property can inherit values or not.

## Why register custom properties?

CSS custom properties, commonly called CSS variables, can be defined by simple declaration. Generally, these are declared on the {{cssxref(":root")}}, and can be overridden with a different value in subsequent rulesets, including in ruled based on UI state and within container and media queries.

In this example, `--myColor` is assigned the value `#bada55` on `:root`, then set to a different value on `main`, which is inherited by all descendants of `main`. That value is overridden when `main` is hovered or is in a viewport that is less than `750px` wide. Within elements with a class of `circles`, `--myColor` is set to `45deg`, which is a different data type.

```css
:root {
  --myColor: #bada55;
}
main {
  --myColor: #cacaca;
}
main:hover {
  --myColor: #abba;
}
@media (width < 750px) {
  main {
    --myColor: #abba;
  }
}

.circles {
  --myColor: 45deg;
}
```

The [CSS properties and values API](/en-US/docs/Web/CSS/Guides/Properties_and_values_api/) provides methods of registering custom properties. Registering CSS custom properties sets the variable's type, inheritance, and default value, making them more predictable and performant.

Registered properties are validated when they're computed rather than when they are parsed. This means that:

 Invalid values won't appear as invalid when inspecting the element's properties.
 An invalid property included after a valid one won't fall back to the valid property. An invalid property will, however, fall back to its registered default.

By default, all CSS variables inherit. When you change a non-registered variable value, the browser re-parses the DOM to check which elements in the DOM tree are affected. With registered properties, setting the value `inherits: false;` tells the browser that, if the value changes, the children don't need to be reparsed, narrowing the scope of style recalculation.

Generally, you'll want to register your custom properties if you are animating the variable, implementing type checking, or guaranteeing predictable inheritance behavior. If you're creating a CSS framework, namespace and register your custom properties to ensure that they always have a default value, and prevent framework users from assigning invalid data types to them if they change their values.

In CSS, properties are registered using the `@property` at-rule. In this example, `--myColor` is globally registered as an inheritable color with the value `#bada55`, and used in `main` in the hovered state. The registration improves the animation performance because the value is of the correct type, and the browser doesn't need to parse the value before animating it. The `.circles` assignment is ignored because the property's data type is registered as `<color>`, not `<angle>`.

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: #bada55;
}

main:hover {
  color: var(--myColor);
  animation: colorChange 2s linear forwards;
}

@keyframes colorChange {
  to {
    color: red;
  }
}

.circles {
  --myColor: 45deg;
}
```

## The @property and descriptors

The `@property` rule enables custom property registration directly inside stylesheets without requiring any JavaScript. Valid `@property` rules produce registered custom properties, producing the same effect as calling {{domxref('CSS.registerProperty_static', 'registerProperty()')}} with equivalent parameters.

The custom property name is a {{cssxref("dashed-ident")}} that starts with `--` and is followed by a valid, user-defined identifier. It is case-sensitive. The declaration includes up to three descriptors: {{cssxref("@property/syntax","syntax")}}, {{cssxref("@property/inherits","inherits")}}, and {{cssxref("@property/initial-value","initial-value")}}.

In this example, we create a `--rotation` custom property.

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

### @property descriptors

For the `@property` rule to be valid, it must include both the {{cssxref("@property/syntax","syntax")}} and {{cssxref("@property/inherits","inherits")}} descriptors. The {{cssxref("@property/initial-value","initial-value")}} descriptor is optional.

- `syntax`
  - : The {{cssxref("@property/syntax","syntax")}} descriptor is a string that describes the allowed value types for the registered custom property. The value of the descriptor may be a data type name, such as `<color>`, `<length>`, or `<number>`, with multipliers (`+`, `#`) and combinators (`|`), or a custom ident. In our example, the `--rotation` property is set to `<angle>`, meaning it can only be assigned an {{cssxref("angle")}} value.

- `inherits`
  - : The {{cssxref("@property/inherits","inherits")}} descriptor is a {{glossary("boolean")}} value that controls whether the custom property inherits by default: set it to `true` to have it inherit, `false` to not inherit. See [Registering and using custom properties](#registering_and_using_custom_properties) for an example of both values.

- `initial-value`
  - : The `@property` at-rule also accepts the {{cssxref("@property/initial-value","initial-value")}} descriptor. The value defines the starting value for the property. This descriptor is optional only if the value of the `syntax` descriptor is the universal syntax definition (that is, `syntax: "*"`). If the syntax has any other values, it is required and has to be a _computationally independent_ value, meaning the value can't be of a data-type that is dependent on another value, such as values with `%` or `em` units.

If either the `syntax` or `inherits` descriptor is missing, the entire `@property` rule is invalid and ignored. If the `initial-value` descriptor is required but omitted, the entire `@property` rule is invalid and ignored. Unknown descriptors are invalid and ignored, but do not invalidate the `@property` rule.

## Registering and using custom properties

In this example, we will define two custom properties: `--item-size` and `--item-color`. We'll then use these custom properties to define the size (width and height) and background color of the three following items.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Here we use the CSS `@property` at-rule to define the `--item-size` custom property. We set its initial value to `40%` and limit valid values to {{cssxref("percentage")}} values only. This means that when this property is used to size an element, the element's size will always be relative to its parent's size. The property is inheritable.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

You can also use [JavaScript](/en-US/docs/Web/JavaScript) to register properties. JavaScript's {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}} method is equivalent to `@property` at-rule. Here we defined our second custom property, `--item-color`, to have an initial value of `aqua`, to accept only {{cssxref("&lt;color&gt;")}} values, and to not be inherited.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

See the [JavaScript API guide to registering custom properties](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide) for more information.

### Using registered custom properties

We can assign new values to registered properties. Here, we set custom property values on the parent container, then set custom property values on the items themselves. The values set on `two` are valid while the values set on `three` are invalid.

```css
.container {
  --item-size: 20%;
  --item-color: orange;
}
.two {
  --item-size: initial;
  --item-color: inherit;
}
.three {
  --item-size: 1000px;
  --item-color: xyz;
}
```

We use the two custom properties as values for the items' {{cssxref("width")}}, {{cssxref("height")}}, and {{cssxref("background-color")}} properties:

```css
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}
```

```css hidden
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;
}
```

{{ EmbedLiveSample('Registering and using custom properties', '100%', '250px') }}

### Inheritance

The `inherits` descriptor controls whether or not the registered CSS custom property inherits by default.

In our example, the size property was set to be inheritable; the color was not. The two custom properties, `--item-size: 20%` and `--item-color: orange;` were set on the `container` parent, overriding the `40%` and `aqua` default values set when these custom properties were defined.

For item one, none of these custom properties were set. Because the `--item-size` is inheritable, the value `20%` set on its parent `container` was inherited and used. The property `--item-color` was not inheritable, so the value `orange` set on the parent was not considered. Instead, the default initial value `aqua` was used.

The `inherits` descriptor is a required descriptor; if it were missing or invalid, the entire `@property` rule would have been invalid and ignored.

### Valid and invalid values

A benefit of registering your custom properties (versus using simple declarations) is that they can be set to be reassigned only to valid values. The `syntax` descriptor defines which values are valid. Any declaration with a value that doesn't meet those constraints will be ignored.

For item two, CSS global keywords were set for both custom properties. The CSS global keyword values — {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, and {{cssxref("revert-layer")}} — are valid values for all value types and therefore valid no matter the `syntax` descriptor value. The `--item-size` was set to `initial` and therefore used the `initial-value: 40%;` set in the `@property` declaration. The `--item-color` was set to `inherit`, explicitly inheriting the `orange` value from its parent even though the custom property was set to otherwise not be inherited. This is why item two was orange.

For item three, the `--item-size` value was set to `1000px`. While `1000px` is a {{cssxref("length")}} value, the `@property` declaration requires the value be a `<percentage>`, so the declaration was not valid and was ignored, meaning the inheritable `20%` set on the parent was used. The `xyz` value was also invalid. As `registerProperty()` set `--item-color` to not be inherited, the default initial value of `aqua` was used and not the parent's `orange` value.

### Animating custom property values

Registered CSS custom properties offer a performance edge because they are treated as typed data rather than strings, providing the browser's rendering engine with a defined syntax and inheritance rules. The browser parses the defined syntax once; when that variable is used elsewhere, the type and internal representation are already known, so it doesn't need to be re-parsed.

Because non-registered custom properties are just strings, the browser cannot {{glossary("interpolation", "interpolate")}} them, so it cannot smoothly animate them. Instead, non-registered custom property values are animated discretely. Registered variables can be interpolated and therefore animated; their interpolation calculations are offloaded to the GPU, which is more performant than animations done on the main thread.

See [Animating a custom property value](/en-US/docs/Web/CSS/Reference/At-rules/@property#animating_a_custom_property_value) for an animation example.

## See also

- {{cssxref("var()")}}
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) guide
- [CSS Properties and Values API](/en-US/docs/Web/CSS/Guides/Properties_and_values_api) module
- [CSS Properties and Values](/en-US/docs/Web/API/CSS_Properties_and_Values_API) API
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/Guides/Cascading_variables) module
