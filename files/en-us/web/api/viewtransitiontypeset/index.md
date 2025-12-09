---
title: ViewTransitionTypeSet
slug: Web/API/ViewTransitionTypeSet
page-type: web-api-interface
browser-compat: api.ViewTransitionTypeSet
---

{{APIRef("View Transition API")}}

The **`ViewTransitionTypeSet`** interface of the {{domxref("View Transition API", "View Transition API", "", "nocode")}} is a [set-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) representing the types of an active view transition. This enables the types to be queried or modified on-the-fly during a transition.

The `ViewTransitionTypeSet` object can be accessed via the {{domxref("ViewTransition.types")}} property.

The property and method links below link to the JavaScript {{jsxref("Set")}} object documentation.

## Instance properties

- {{jsxref("Set.prototype.size")}}
  - : Returns the number of values in the set.

## Instance methods

- {{jsxref("Set.prototype.add")}}
  - : Inserts the specified value into this set, if it is not already present.
- {{jsxref("Set.prototype.clear()")}}
  - : Removes all values form the set.
- {{jsxref("Set.prototype.delete()")}}
  - : Removes the specified value from this set, if it is in the set.
- {{jsxref("Set.prototype.entries()")}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the set, in insertion order.
- {{jsxref("Set.prototype.forEach()")}}
  - : Calls a callback function once for each value present in the set, in insertion order.
- {{jsxref("Set.prototype.has()")}}
  - : Returns a boolean indicating whether the specified value exists in the set.
- {{jsxref("Set.prototype.keys()")}}
  - : An alias for {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.values()")}}
  - : Returns a new iterator object that yields the **values** for each element in the set, in insertion order.
- [`Set.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Returns a new iterator object that yields the **values** for each element in the set, in insertion order.

## Examples

```js
// Start a view transition
const vt = document.startViewTransition({
  update: updateTheDOMSomehow,
  types: ["slideLeft", "fadeOut", "flipVertical"],
});

// Add another type
vt.types.add("flipHorizontal");

// Delete a type
vt.types.delete("flipVertical");

// Return the number of types in the set
console.log(vt.types.size);

// Log each type to the console
vt.types.forEach((type) => console.log(type));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ViewTransition.types")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
