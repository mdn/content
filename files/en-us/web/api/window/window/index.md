---
title: "Window: window property"
short-title: window
slug: Web/API/Window/window
page-type: web-api-instance-property
browser-compat: api.Window.window
---

{{APIRef}}

The **`window`** property of a {{domxref("Window")}} object points to the window object itself.

Thus, the following expressions all return the same window object:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

In web pages, the window object is also a _global object_. This means:

1. Global variables of your script are, in fact, properties of `window`:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // displays "true"
   ```

2. You can access the built-in properties of the window object without having to prefix them with `window.`:

   ```js
   setTimeout("alert('Hi!')", 50); // equivalent to using window.setTimeout().
   alert(window === window.window); // displays "true"
   ```

The point of having the `window` property refer to the object itself, was likely to make it easy to refer to the global object. Otherwise, you'd have to do a manual `let window = this;` assignment at the top of your script.

Another reason, is that without this property you wouldn't be able to write, for example, {{domxref("window.open","window.open('https://google.com/')")}}. You'd have to use `open('https://google.com/')` instead.

Yet another reason to use this property, is for libraries which wish to offer OOP-versions, and non-OOP versions (especially JavaScript modules). For example, if we refer to "this.window\.location.href", a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules) could define a property called "window" inside of a class it defined (since no global "window" variable exists for it by default) which could be created after passing in a window object to the module class' constructor. Thus, "this.window" inside of its functions would refer to that window object. In the non-namespaced version, "this.window" would refer back to "window", and also be able to readily get the document location. Another advantage, is that the objects of such a class (even if the class were defined outside of a module) could change their reference to the window at will, they would not be able to do this if they had hard-coded a reference to "window". The default in the class could still be set as the current window object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
