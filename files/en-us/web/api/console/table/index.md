---
title: console.table()
slug: Web/API/console/table
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.table
---
{{APIRef("Console API")}}

The **`console.table()`** method displays tabular data as a table.

This function takes one mandatory argument `data`, which must be an array or
an object, and one additional optional parameter `columns`.

It logs `data` as a table. Each element in the array (or enumerable property
if `data` is an object) will be a row in the table.

The first column in the table will be labeled `(index)`. If
`data` is an array, then its values will be the array indices. If
`data` is an object, then its values will be the property names. Note that
(in Firefox) `console.table` is limited to displaying 1000 rows (first row is
the labeled index).

{{AvailableInWorkers}}

### Collections of primitive types

The `data` argument may be an array or an object.

```js
// an array of strings

console.table(["apples", "oranges", "bananas"]);
```

![](console-table-array.png)

```js
// an object whose properties are strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("John", "Smith");

console.table(me);
```

![](console-table-simple-object.png)

### Collections of compound types

If the elements in the array, or properties in the object, are themselves arrays or
objects, then their elements or properties are enumerated in the row, one per column:

```js
// an array of arrays

const people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);
```

![Table displaying array of arrays](console-table-array-of-array.png)

```js
// an array of objects

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Smith");
const jane = new Person("Jane", "Doe");
const emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
```

Note that if the array contains objects, then the columns are labeled with the property
name.

![Table displaying array of objects](console-table-array-of-objects.png)

```js
// an object whose properties are objects

const family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

![Table displaying object of objects](console-table-object-of-objects.png)

### Restricting the columns displayed

By default, `console.table()` lists all elements in each row. You can use
the optional `columns` parameter to select a subset of columns to display:

```js
// an array of objects, logging only firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Smith");
const jane = new Person("Jane", "Doe");
const emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);
```

![Table displaying array of objects with filtered output](console-table-array-of-objects-firstname-only.png)

### Sorting columns

You can sort the table by a particular column by clicking on that column's label.

## Syntax

```js
table(data)
table(data, columns)
```

### Parameters

- `data`
  - : The data to display. This must be either an array or an object.
- `columns`
  - : An array containing the names of columns to include in the output.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
