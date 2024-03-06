---
title: "console: table() static method"
short-title: table()
slug: Web/API/console/table_static
page-type: web-api-instance-method
browser-compat: api.console.table_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.table()`** static method displays tabular data as a table.

This function takes one mandatory argument `data`, which must be an array or an object, and one additional optional parameter `columns`.

It logs `data` as a table. Each element in the array (or enumerable property if `data` is an object) will be a row in the table.

The first column in the table will be labeled `(index)`. If `data` is an array, then its values will be the array indices. If `data` is an object, then its values will be the property names. Note that (in Firefox) `console.table` is limited to displaying 1000 rows (first row is the labeled index).

### Collections of primitive types

The `data` argument may be an array or an object.

```js
// an array of strings

console.table(["apples", "oranges", "bananas"]);
```

| (index) | Values    |
| ------- | --------- |
| 0       | 'apples'  |
| 1       | 'oranges' |
| 2       | 'bananas' |

```js
// an object whose properties are strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
```

| (index)   | Values   |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### Collections of compound types

If the elements in the array, or properties in the object, are themselves arrays or objects, then their elements or properties are enumerated in the row, one per column:

```js
// an array of arrays

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'Tyrone' | 'Jones' |
| 1       | 'Janet'  | 'Smith' |
| 2       | 'Maria'  | 'Cruz'  |

```js
// an array of objects

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

Note that if the array contains objects, then the columns are labeled with the property name.

| (index) | firstName | lastName |
| ------- | --------- | -------- |
| 0       | 'Tyrone'  | 'Jones'  |
| 1       | 'Janet'   | 'Smith'  |
| 2       | 'Maria'   | 'Cruz'   |

```js
// an object whose properties are objects

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| (index)  | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### Restricting the columns displayed

By default, `console.table()` lists all elements in each row. You can use the optional `columns` parameter to select a subset of columns to display:

```js
// an array of objects, logging only firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);
```

| (index) | firstName |
| ------- | --------- |
| 0       | 'Tyrone'  |
| 1       | 'Janet'   |
| 2       | 'Maria'   |

### Sorting columns

You can sort the table by a particular column by clicking on that column's label.

## Syntax

```js-nolint
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

## See also

- [Microsoft Edge's documentation for `console.table()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#table)
- [Node.JS documentation for `console.table()`](https://nodejs.org/docs/latest/api/console.html#consoletabletabulardata-properties)
- [Google Chrome's documentation for `console.table()`](https://developer.chrome.com/docs/devtools/console/api/#table)
