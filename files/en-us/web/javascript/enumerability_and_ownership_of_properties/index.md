---
title: Enumerability and ownership of properties
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
tags:
  - Guide
  - JavaScript
---
{{JsSidebar("More")}}

Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via [Object.defineProperty](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) and such default enumerable to false.

Enumerable properties show up in [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops unless the property's key is a [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain. Properties of an object can also be retrieved in total.

## Detecting, retrieving, and enumerating object properties

There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties. These are summarized in the tables below.

### Detection

|                              | Own object                                                                                                                                                                                                                                | Own object and prototype chain                         | Prototype chain only             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------- |
| Enumerable                   | [`propertyIsEnumerable`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)                                         | Not available without extra code                       | Not available without extra code |
| Nonenumerable                | [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) – filtered to exclude enumerables using [`propertyIsEnumerable`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | Not available without extra code                       | Not available without extra code |
| Enumerable and Nonenumerable | [`hasOwnProperty`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)                                                                                                                                                | [`in`](/ko/docs/Web/JavaScript/Reference/Operators/in) | Not available without extra code |

### Retrieval

|                              | Own object                                                                                                                                                                                                                                                                                                                                                    | Own object and prototype chain   | Prototype chain only             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------- |
| Enumerable                   | [`Object.keys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)  [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                  | Not available without extra code | Not available without extra code |
| Nonenumerable                | [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) – filtered to exclude enumerables using [`propertyIsEnumerable`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | Not available without extra code | Not available without extra code |
| Enumerable and Nonenumerable | [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                                 | Not available without extra code | Not available without extra code |

### Iteration

|                              | Own object                                                                                                                                                                                                                                                                                                                                                    | Own object and prototype chain                                                         | Prototype chain only             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------- |
| Enumerable                   | [`Object.keys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)  [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                  | [`for..in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) (excluding symbols) | Not available without extra code |
| Nonenumerable                | [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames), [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) – filtered to exclude enumerables using [`propertyIsEnumerable`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | Not available without extra code                                                       | Not available without extra code |
| Enumerable and Nonenumerable | [`getOwnPropertyNames`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) [`getOwnPropertySymbols`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                                 | Not available without extra code                                                       | Not available without extra code |

## Obtaining properties by enumerability/ownership

Note that this is not the most efficient algorithm for all cases, but useful for a quick demonstration.

- Detection can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Iteration can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (or use `filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
    getOwnEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
    },
    getOwnNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Or just use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Or could use unfiltered for..in
    },
    getOwnAndPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable: function(obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable: function(obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable: function(obj, prop) {
        return true;
    },
    // Inspired by http://stackoverflow.com/a/8024294/271577
    _getPropertyNames: function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function(prop) {
                    if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};
```

## Detection Table

<table>
  <thead>
    <tr>
      <th></th>
      <th>Enumerable</th>
      <th>Nonenumerable</th>
      <th>Symbols keys</th>
      <th>Inherited Enumerable</th>
      <th>Inherited Nonenumerable</th>
      <th>Inherited Symbols keys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>in</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <th><code>for..in</code></th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>obj.hasOwnProperty</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>obj.propertyIsEnumerable</code></th>
      <td>true</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.keys</code></th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.getOwnPropertyNames</code></th>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.getOwnPropertyDescriptors</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Reflect.ownKeys()</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## See also

- [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
