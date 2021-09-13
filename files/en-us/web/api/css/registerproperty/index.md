---
title: CSS.registerProperty()
slug: Web/API/CSS/RegisterProperty
tags:
  - CSS
  - Houdini
  - Reference
browser-compat: api.CSS.registerProperty
---
{{SeeCompatTable}}

The **`CSS.registerProperty()`** method registers
{{cssxref('--*', 'custom properties')}}, allowing for property type checking, default
values, and properties that do or do not inherit their value.

Registering a custom property allows you to tell the browser how the custom property
should behave; what are allowed types, whether the custom property inherits its value,
and what the default value of the custom property is.

## Syntax

```js
CSS.registerProperty(PropertyDefinition);
```

### Parameters

A `PropertyDefinition` dictionary object, which can contain the following
members:

- `name`
  - : A [`DOMString`](/en-US/docs/Web/API/DOMString) indicating the
    name of the property being defined.
- `syntax` {{optional_inline}}
  - : A [`DOMString`](/en-US/docs/Web/API/DOMString) representing
    the expected syntax of the defined property. Defaults to `"*"`.
- `inherits`
  - : A boolean value defining whether the defined property should be inherited
    (`true`), or not (`false`). Defaults to `false`.
- `initialValue` {{optional_inline}}
  - : A [`DOMString`](/en-US/docs/Web/API/DOMString) representing
    the initial value of the defined property.

### Return value

`undefined`.

### Exceptions

- `InvalidModificationError`
  - : The given `name` has already been registered.
- `SyntaxError`
  - : The given `name` isn't a valid custom property name (starts with two
    dashes, e.g. `--foo`).
- `TypeError`
  - : The required `name` and/or `inherits` dictionary members were
    not provided.

## Examples

The following will register a {{cssxref('--*', 'custom property')}},
`--my-color`, using `registerProperty()`, as a color, give it a
default value, and have it not inherit its value:

```js
window.CSS.registerProperty({
  name: '--my-color',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
});
```

In this example, the custom property `--my-color` has been registered using
the syntax `<color>` . We can now use that property to transition a
gradient on hover or focus. Notice that with the registered property the transition
works, but that it doesn't with the unregistered property!

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}
```

We can add these styles to some buttons:

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS
  properties and values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide)
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSS.supports()")}}
- {{DOMxRef("CSS.escape()")}}
- {{DOMxRef("CSS.factory_functions", 'CSS factory functions')}}
