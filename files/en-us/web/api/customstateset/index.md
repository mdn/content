---
title: CustomStateSet
slug: Web/API/CustomStateSet
tags:
  - API
  - Interface
  - Reference
  - CustomStateSet
browser-compat: api.CustomStateSet
---
{{DefaultAPISidebar("DOM")}}

The **`CustomStateSet`** interface of the {{domxref('Document_Object_Model','','',' ')}} stores a list of possible states for a custom element to be in, and allows states to be added and removed from the set.

## Description

An HTML form element, such as a checkbox has different _states_, "checked" and "unchecked". Likewise, developers creating custom elements need to assign possible states to these elements. The `CustomStateList` allows these states to be stored, and accessed from the custom element.

A instance of `CustomStateList` is returned by {{domxref("ElementInternals.states")}}. The `CustomStateList` object is a {{jsxref("Set")}}, and therefore the properties and methods available on a `Set` can be used when working with a `CustomSetList`.

Each value stored in a `CustomStateList` is a `<dashed-ident>`, in the format `--mystate`.

### Interaction with CSS

States are stored as a `<dashed-ident>` as this format can then be accessed from CSS using the _custom state pseudo-class_.
In the same way that you can use CSS to determine if a checkbox is checked using the {{cssxref(":checked")}} pseudo-class,
you can use a custom state pseudo-class to select a custom element that is in a certain state.

## Methods

- {{domxref("CustomStateSet.add()")}}
  - : Adds a value to the set, extending the {{jsxref("Set.add()")}} method with a check that the _value_ is a `<dashed-ident>`.

## Examples

The following function adds and removes the state `--checked` to a `CustomStateSet`, then prints to the console `true` or `false` as the custom checkbox is checked or unchecked.

The state of the element can be accessed from CSS using the custom state pseudo-class `--checked`.

```js
set checked(flag) {
  if (flag) {
    this._internals.states.add('--checked');
  } else {
    this._internals.states.delete('--checked');
  }

  console.log(this._internals.states.has('--checked'));
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

