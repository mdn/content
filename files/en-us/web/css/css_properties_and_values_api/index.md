---
title: CSS Properties and Values API
slug: Web/CSS/CSS_properties_and_values_API
page-type: css-module
browser-compat:
  - css.at-rules.property
  - css.properties.custom-property.var
  - api.CSSPropertyRule
  - api.CSS.registerProperty_static
---

{{CSSRef}}

The **CSS properties and values API** module is is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs and allows authors to define custom properties for cascading variables.
This API expands on [CSS custom properties for cascading variables](Web/CSS/CSS_cascading_variables) which allows authors to define custom properties in CSS using [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*).

The additional functionality provided by the Properties and Values API is the introduction of control over inheritance, the ability to set initial values, and data type constraints.
Authors can define CSS properties using the [`@property`](/en-US/docs/Web/CSS/@property) at-rule in CSS and the {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} interface in JavaScript.

## Examples

### Registering custom properties in JavaScript

Registering custom properties is done using {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}.
Because inheritance is disabled, the value `cornflowerblue` set in the parent element is not defined in the scope of the `.child` element, and the initial value of `cornflowerblue` is used:

```js
window.CSS.registerProperty({
  name: "--custom-bg-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aquamarine",
});
```

```css hidden
div {
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border: 2px black solid;
}

.child {
  width: 80%;
  height: 80%;
}
```

```css
.parent {
  --custom-bg-color: cornflowerblue;
  background-color: var(--custom-bg-color);
}

.child {
  background-color: var(--custom-bg-color);
}
```

```html
<div class="parent">
  <div class="child">
    <p>Custom property registered in JavaScript</p>
  </div>
</div>
```

{{EmbedLiveSample("",600,260)}}

### Using the `@property` at-rule in CSS

The following example shows a custom property (`--box-color`) defined using the `@property` at-rule.
This custom property represents a color data type and has a default value of `cornflowerblue`.
The `inherits: false;` property ensures that the custom property does not inherit its value from its parent.

The element with the `.child` class has a style declaration that sets its background to the `--box-color` property value.
The value `green` set in the parent element is not defined in the scope of the `.child` element, and the initial value of `cornflowerblue` is used:

```css hidden
div {
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border: 2px black solid;
  color: white;
}

.child {
  width: 80%;
  height: 80%;
}
```

```css
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  background-color: var(--box-color);
}
```

```html
<div class="parent">
  <div class="child">
    <p>@property at-rule example</p>
  </div>
</div>
```

{{EmbedLiveSample("",600,260)}}

### Using initial values

If a custom property is not defined, the initial value can be used as a fallback.
In the following example, a custom property is defined using the `@property` syntax with `cornflowerblue` as the initial value.
The `.parent` element uses this color as its background color while the property is not defined outside of the at-rule.
The initial value is used instead of the background color inherited from its parent:

```css hidden
div {
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border: 2px black solid;
  color: white;
}

.child {
  width: 80%;
  height: 80%;
}
```

```css
@property --box-color {
  syntax: "<color>";
  inherits: true;
  initial-value: cornflowerblue;
}

.parent {
  background-color: var(--box-color);
}
```

```html
<div class="parent">
  <div class="child">
    <p>Undefined property value for <code>--box-color</code></p>
  </div>
</div>
```

{{EmbedLiveSample("",600,260)}}

## Reference

### At-rules

- {{cssxref("@property")}}

### Functions

- {{cssxref("var")}}

### Interfaces

- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}

## Guides

- [Using the CSS properties and values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
- [CSS `env()`](Web/CSS/env)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
