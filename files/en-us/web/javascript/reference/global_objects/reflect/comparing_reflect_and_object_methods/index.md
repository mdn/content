---
title: Comparing Reflect and Object methods
slug: >-
  Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods
tags:
  - Guide
  - JavaScript
  - JavaScript Object Model
  - Object
  - Overview
  - Reflect
---
<div>{{jssidebar}}</div>

<p>The {{jsxref("Reflect")}} object, introduced in ES2015, is a built-in object that provides methods to interface with JavaScript objects. Some of the static functions that exist on <code>Reflect</code> also correspond to methods available on {{jsxref("Object")}}, which predates ES2015. Although some of the methods appear to be similar in their behavior, there are often subtle differences between them.</p>

<p>The table below details the differences between the methods available on the <code>Object</code> and <code>Reflect</code> APIs. Please note that if a method does not exist in an API, it is marked as N/A.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Method Name</th>
   <th scope="col"><code>Object</code></th>
   <th scope="col"><code>Reflect</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>defineProperty()</code></td>
   <td>{{jsxref("Object.defineProperty()")}} returns the object that was passed to the function. Returns a <code>TypeError</code> if the property was not successfully defined on the object.</td>
   <td>{{jsxref("Reflect.defineProperty()")}} returns <code>true</code> if the property was defined on the object and <code>false</code> if it was not.</td>
  </tr>
  <tr>
   <td><code>defineProperties()</code></td>
   <td>{{jsxref("Object.defineProperties()")}} returns the objects that were passed to the function. Returns a <code>TypeError</code> if any properties were not successfully defined on the object.</td>
   <td>N/A</td>
  </tr>
  <tr>
   <td><code>set()</code></td>
   <td>N/A</td>
   <td>{{jsxref("Reflect.set()")}} returns <code>true</code> if the property was set successfully on the object and <code>false</code> if it was not. Throws a <code>TypeError</code> if the target was not an <code>Object</code>.</td>
  </tr>
  <tr>
   <td><code>get()</code></td>
   <td>N/A</td>
   <td>{{jsxref("Reflect.get()")}} returns the value of the property. Throws a <code>TypeError</code> if the target was not an <code>Object</code>.</td>
  </tr>
  <tr>
   <td><code>deleteProperty()</code></td>
   <td>N/A</td>
   <td>{{jsxref("Reflect.deleteProperty()")}} returns <code>true</code> if the property was deleted from the object and <code>false</code> if it was not.</td>
  </tr>
  <tr>
   <td><code>getOwnPropertyDescriptor()</code></td>
   <td>{{jsxref("Object.getOwnPropertyDescriptor()")}} returns a property descriptor of the given property if it exists on the object argument passed in, and returns <code>undefined</code> if it does not exist. However, if an object is not passed in as the first argument, it will be coerced into an object.</td>
   <td>{{jsxref("Reflect.getOwnPropertyDescriptor()")}} returns a property descriptor of the given property if it exists on the object. Returns <code>undefined</code> if it does not exist, and a <code>TypeError</code> if anything other than an object (a primitive) is passed in as the first argument.</td>
  </tr>
  <tr>
   <td><code>getOwnPropertyDescriptors()</code></td>
   <td>{{jsxref("Object.getOwnPropertyDescriptors()")}} returns an object containing a property descriptor of each passed-in object. Returns an empty object if the passed-in object has no owned property descriptors.</td>
   <td>N/A</td>
  </tr>
  <tr>
   <td><code>getPrototypeOf()</code></td>
   <td>{{jsxref("Object.getPrototypeOf()")}} returns the prototype of the given object. Returns <code>null</code> if there are no inherited properties. Throws a <code>TypeError</code> for non-objects in ES5, but coerces non-objects in ES2015.</td>
   <td>{{jsxref("Reflect.getPrototypeOf()")}} returns the prototype of the given object. Returns <code>null</code> if there are no inherited properties, and throws a <code>TypeError</code> for non-objects.</td>
  </tr>
  <tr>
   <td><code>setPrototypeOf()</code></td>
   <td>{{jsxref("Object.setPrototypeOf()")}} returns the object itself if its prototype was set successfully. Throws a <code>TypeError</code> if the prototype being set was anything other than an <code>Object</code> or <code>null</code>, or if the prototype for the object being modified is non-extensible. </td>
   <td>{{jsxref("Reflect.setPrototypeOf()")}} returns <code>true</code> if the prototype was successfully set on the object and <code>false</code> if it wasn't (including if the prototype is non-extensible). Throws a <code>TypeError</code> if the target passed in was not an <code>Object</code>, or if the prototype being set was anything other than an <code>Object</code> or <code>null</code>.</td>
  </tr>
  <tr>
   <td><code>isExtensible()</code></td>
   <td>{{jsxref("Object.isExtensible()")}} returns <code>true</code> if the object is extensible, and <code>false</code> if it is not. Throws a <code>TypeError</code> in ES5 if the first argument is not an object (a primitive). In ES2015, it will be coerced into a non-extensible, ordinary object and will return <code>false</code>.</td>
   <td>
    <p>{{jsxref("Reflect.isExtensible()")}} returns <code>true</code> if the object is extensible, and <code>false</code> if it is not. Throws a <code>TypeError</code> if the first argument is not an object (a primitive).</p>
   </td>
  </tr>
  <tr>
   <td><code>preventExtensions()</code></td>
   <td>
    <p>{{jsxref("Object.preventExtensions()")}} returns the object that is being made non-extensible. Throws a <code>TypeError</code>in ES5 if the argument is not an object (a primitive). In ES2015, treats the argument as a non-extensible, ordinary object and returns the object itself.</p>
   </td>
   <td>{{jsxref("Reflect.preventExtensions()")}} returns <code>true</code> if the object has been made non-extensible, and <code>false</code> if it has not. Throws a <code>TypeError</code> if the argument is not an object (a primitive).</td>
  </tr>
  <tr>
   <td><code>keys()</code></td>
   <td>{{jsxref("Object.keys()")}} returns an <code>Array</code> of strings that map to the target object's own (enumerable) property keys. Throws a <code>TypeError</code> in ES5 if the target is not an object, but coerces non-object targets into objects in ES2015.</td>
   <td>N/A</td>
  </tr>
  <tr>
   <td><code>ownKeys()</code></td>
   <td>N/A</td>
   <td>{{jsxref("Reflect.ownKeys()")}} returns an <code>Array</code> of property names that map to the target object's own property keys. Throws a <code>TypeError</code> if the target is not an <code>Object</code>.</td>
  </tr>
 </tbody>
</table>
