---
title: CustomStateSet
slug: Web/API/CustomStateSet
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - CustomStateSet
  - Experimental
browser-compat: api.CustomStateSet
---
{{APIRef("DOM")}}{{SeeCompatTable}}

The **`CustomStateSet`** interface of the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) stores a list of possible states for a custom element to be in, and allows states to be added and removed from the set.

## Description

An HTML form element, such as a checkbox has different _states_, "checked" and "unchecked". Likewise, developers creating custom elements need to assign possible states to these elements. The `CustomStateList` allows these states to be stored, and accessed from the custom element.

A instance of `CustomStateList` is returned by {{domxref("ElementInternals.states")}}. The `CustomStateList` object is described as _setlike_, and therefore the methods behave in a similar manner to those on a {{jsxref("Set")}}.

Each value stored in a `CustomStateList` is a `<dashed-ident>`, in the format `--mystate`.

### Interaction with CSS

States are stored as a `<dashed-ident>` as this format can then be accessed from CSS using the _custom state pseudo-class_.
In the same way that you can use CSS to determine if a checkbox is checked using the {{cssxref(":checked")}} pseudo-class,
you can use a custom state pseudo-class to select a custom element that is in a certain state.

## Properties

- {{domxref("CustomStateSet.size")}} {{Experimental_Inline}}
  - : Returns the number of values in the `CustomStateSet`.

## Methods

- {{domxref("CustomStateSet.add()")}} {{Experimental_Inline}}
  - : Adds a value to the set, first checking that the _value_ is a `<dashed-ident>`.
- {{domxref("CustomStateSet.clear()")}} {{Experimental_Inline}}
  - : Removes all elements from the `CustomStateSet` object.
- {{domxref("CustomStateSet.delete()")}} {{Experimental_Inline}}
  - : Removes one value from the `CustomStateSet` object.
- {{domxref("CustomStateSet.entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator with the values for each element in the `CustomStateSet` in insertion order.
- {{domxref("CustomStateSet.forEach()")}} {{Experimental_Inline}}
  - : Executes a provided function for each value in the `CustomStateSet` object.
- {{domxref("CustomStateSet.has()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Boolean")}} asserting whether an element is present with the given value.
- {{domxref("CustomStateSet.keys()")}} {{Experimental_Inline}}
  - : An alias for {{domxref("CustomStateSet.values()")}}.
- {{domxref("CustomStateSet.values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields the values for each element in the `CustomStateSet` object in insertion order.

## Examples

The following function adds and removes the state `--checked` to a `CustomStateSet`, then prints to the console `true` or `false` as the custom checkbox is checked or unchecked.

The state of the element can be accessed from CSS using the custom state pseudo-class `--checked`.

```js
class MyCustomElement extends HTMLElement {
  set checked(flag) {
    if (flag) {
      this._internals.states.add('--checked');
    } else {
      this._internals.states.delete('--checked');
    }

    console.log(this._internals.states.has('--checked'));
  }
}
```

```css
labeled-checkbox { border: dashed red; }
labeled-checkbox:--checked { border: solid; }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
