---
title: Using the CSS properties and values API
slug: Web/API/CSS_Properties_and_Values_API/guide
page-type: guide
---

{{DefaultAPISidebar("CSS Properties and Values API")}}{{SeeCompatTable}}

The **CSS Properties and Values API** — part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs — allows the registration of {{cssxref('--*', 'CSS custom properties')}}, allowing for property type checking, default values, and properties that do or do not inherit their value.

## Registering a custom property

Registering a custom property allows you to tell the browser how the custom property should behave; what are allowed types, whether the custom property inherits its value, and what the default value of the custom property is. There are two ways to register a property, in [JavaScript](/en-US/docs/Web/JavaScript) or in [CSS](/en-US/docs/Web/CSS).

### CSS.registerProperty

The following will register a {{cssxref('--*', 'CSS custom properties')}}, `--my-prop`, using {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}, as a color, give it a default value, and have it not inherit its value:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

The same registration can take place in CSS. The following will register a {{cssxref('--*', 'CSS custom properties')}}, `--my-prop`, using {{cssxref('@property')}} [at-rule](/en-US/docs/Web/CSS/At-rule), as a color, give it a default value, and have it not inherit its value:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Using registered custom properties

One of the advantages of registering a property is that the browser now knows how it should handle your custom property through things like transitions! When a property isn't registered, the browser doesn't know how to treat it, so it assumes that any value can be used and therefore can't animate it. When a property has a registered syntax, though, the browser can optimize around that syntax, including being able to animate it!

In this example, the custom property `--registered` has been registered using the syntax `<color>` and then used in a linear gradient. That property is then transitioned on hover or focus to a different color. Notice that with the registered property the transition works, but that it doesn't with the unregistered property!

### HTML

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

### CSS

```css
.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
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
  height: 40vh;
  display: block;
  width: 100%;
  font-size: 3vw;
}
```

### JavaScript

```js
window.CSS.registerProperty({
  name: "--registered",
  syntax: "<color>",
  inherits: false,
  initialValue: "red",
});
```

### Result

{{EmbedLiveSample("Using_registered_custom_properties", 320, 320)}}

While not functionally accurate, a good way to think about the difference between the unregistered property in the above example and the registered property is the difference between a {{cssxref('custom-ident')}} and a number when trying to animate {{cssxref('height')}}. You cannot transition or animate from `auto` to a number because the browser doesn't know what the value of `auto` is until it's calculated. With an unregistered property, the browser likewise doesn't know what the value _may be_ until it's calculated, and because of that, it can't set up a transition from one value to another. When registered, though, you've told the browser what type of value it should expect, and because it knows that, it can then set up the transitions properly.

## Gotchas

There are two gotchas when registering a property. The first is that, once a property is registered, there's no way to update it, and trying to re-register it with [JavaScript](/en-US/docs/Web/JavaScript) will throw an error indicating it's already been defined.

Second, unlike standard properties, registered properties aren't validated when they're parsed. Rather, they're validated when they're computed. That means both that invalid values won't appear as invalid when inspecting the element's properties, and that including an invalid property after a valid one won't fall back to the valid property. An invalid property will, however, fall back to its registered default.
