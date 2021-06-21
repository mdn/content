# Report from 6/21/2021, 4:35:18 PM
## Top 20 unhandled elements
- tr (177)
- td (162)
- th[scope="row"] (43)
- table.standard-table (39)
- th (17)
- span.seoSummary (14)
- kbd (13)
- table (6)
- table.fullwidth-table (4)
- sub (4)
- p.summary (3)
- dfn (3)
- code (3)
- dl (2)
- th[colSpan="4"] (2)
- td[rowSpan="4"] (1)
- td[rowSpan="2"] (1)
- pre.brush:.js.example-bad.line-numbers.language-js (1)
- table.fullwidth-table.standard-table (1)
- p.noinclude (1)
## Details per Document
### [/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
#### Invalid AST transformations
##### td (206:4) => tableCell
```
type: "paragraph"
summary: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "If "
  type: "inlineCode"
  value: "true"
  type: "text"
  value: ", the property will be enumerated in "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
  children: 
    type: "text"
    value: "for...in"
  type: "text"
  value: " loops."
  type: "break"
  type: "text"
  value: "See also "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"
  children: 
    type: "text"
    value: "Enumerability and ownership of properties"
  type: "text"
  value: "."
```
##### tr (203:3) => tableRow
```
type: "html"
value: "<td><p>If <code>true</code>, the property will be enumerated in <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for...in</a> loops.<br>See also <a href=\"/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties\">Enumerability and ownership of properties</a>.</p></td>"
```
##### table.standard-table (180:1) => table
```
type: "html"
value: "<tr><td>[[Enumerable]]</td><td>Boolean</td><td><p>If <code>true</code>, the property will be enumerated in <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for...in</a> loops.<br>See also <a href=\"/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties\">Enumerability and ownership of properties</a>.</p></td><td><code>false</code></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
#### Invalid AST transformations
##### td (35:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
  children: 
    type: "inlineCode"
    value: "propertyIsEnumerable",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
  children: 
    type: "inlineCode"
    value: "hasOwnProperty"
```
##### tr (31:5) => tableRow
```
type: "html"
value: "<th>Enumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code></p></td>"
```
##### td (46:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 2
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
  children: 
    type: "inlineCode"
    value: "hasOwnProperty"
  type: "text"
  value: " – filtered to exclude enumerables using "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
  children: 
    type: "inlineCode"
    value: "propertyIsEnumerable"
```
##### tr (42:5) => tableRow
```
type: "html"
value: "<th>Nonenumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code> – filtered to exclude enumerables using <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></p></td>"
```
##### td (56:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
  children: 
    type: "inlineCode"
    value: "hasOwnProperty"
```
##### tr (52:5) => tableRow
```
type: "html"
value: "<th>Enumerable and Nonenumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code></p></td>"
```
##### table (21:1) => table
```
type: "html"
value: "<tr><th>Enumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code></p></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Nonenumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code> – filtered to exclude enumerables using <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></p></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Enumerable and Nonenumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\">hasOwnProperty</a></code></p></td><td><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Operators/in\">in</a></code></td><td>Not available without extra code</td></tr>"
```
##### td (81:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
  children: 
    type: "inlineCode"
    value: "Object.keys",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
  children: 
    type: "inlineCode"
    value: "getOwnPropertyNames"
  type: "text"
  value: " ",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
  children: 
    type: "inlineCode"
    value: "getOwnPropertySymbols"
```
##### tr (77:5) => tableRow
```
type: "html"
value: "<th>Enumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\">Object.keys</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code> </p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td>"
```
##### tr (89:5) => tableRow
```
type: "html"
value: "<th>Nonenumerable</th>"
```
##### td (101:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
  children: 
    type: "inlineCode"
    value: "getOwnPropertyNames",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
  children: 
    type: "inlineCode"
    value: "getOwnPropertySymbols"
```
##### tr (97:5) => tableRow
```
type: "html"
value: "<th>Enumerable and Nonenumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td>"
```
##### table (67:1) => table
```
type: "html"
value: "<tr><th>Enumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\">Object.keys</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code> </p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Nonenumerable</th><td><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code>, <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code> – filtered to exclude enumerables using <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Enumerable and Nonenumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>"
```
##### td (127:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
  children: 
    type: "inlineCode"
    value: "Object.keys",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
  children: 
    type: "inlineCode"
    value: "getOwnPropertyNames"
  type: "text"
  value: " ",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
  children: 
    type: "inlineCode"
    value: "getOwnPropertySymbols"
```
##### td (132:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
  children: 
    type: "inlineCode"
    value: "for..in",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "(excluding symbols)"
```
##### tr (123:5) => tableRow
```
type: "html"
value: "<th>Enumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\">Object.keys</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code> </p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for..in</a></code></p><p>(excluding symbols)</p></td>"
```
##### tr (138:5) => tableRow
```
type: "html"
value: "<th>Nonenumerable</th>"
```
##### td (150:7) => tableCell
```
type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
  children: 
    type: "inlineCode"
    value: "getOwnPropertyNames",type: "paragraph"
summary: "Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
  children: 
    type: "inlineCode"
    value: "getOwnPropertySymbols"
```
##### tr (146:5) => tableRow
```
type: "html"
value: "<th>Enumerable and Nonenumerable</th>",type: "html"
value: "<td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td>"
```
##### table (113:1) => table
```
type: "html"
value: "<tr><th>Enumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\">Object.keys</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code> </p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for..in</a></code></p><p>(excluding symbols)</p></td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Nonenumerable</th><td><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code>, <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code> – filtered to exclude enumerables using <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable\">propertyIsEnumerable</a></code></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>",type: "html"
value: "<tr><th>Enumerable and Nonenumerable</th><td><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\">getOwnPropertyNames</a></code></p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">getOwnPropertySymbols</a></code></p></td><td>Not available without extra code</td><td>Not available without extra code</td></tr>"
```
##### tr (247:5) => tableRow
```
type: "html"
value: "<th><code>in</code></th>"
```
##### tr (256:5) => tableRow
```
type: "html"
value: "<th><code>for..in</code></th>"
```
##### tr (265:5) => tableRow
```
type: "html"
value: "<th><code>obj.hasOwnProperty</code></th>"
```
##### tr (274:5) => tableRow
```
type: "html"
value: "<th><code>obj.propertyIsEnumerable</code></th>"
```
##### tr (283:5) => tableRow
```
type: "html"
value: "<th><code>Object.keys</code></th>"
```
##### tr (292:5) => tableRow
```
type: "html"
value: "<th><code>Object.getOwnPropertyNames</code></th>"
```
##### tr (301:5) => tableRow
```
type: "html"
value: "<th><code>Object.getOwnPropertyDescriptors</code></th>"
```
##### tr (310:5) => tableRow
```
type: "html"
value: "<th><code>Reflect.ownKeys()</code></th>"
```
##### table (234:1) => table
```
type: "html"
value: "<tr><th><code>in</code></th><td>true</td><td>true</td><td>true</td><td>true</td><td>true</td><td>true</td></tr>",type: "html"
value: "<tr><th><code>for..in</code></th><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>obj.hasOwnProperty</code></th><td>true</td><td>true</td><td>true</td><td>false</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>obj.propertyIsEnumerable</code></th><td>true</td><td>false</td><td>true</td><td>false</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>Object.keys</code></th><td>true</td><td>false</td><td>false</td><td>false</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>Object.getOwnPropertyNames</code></th><td>true</td><td>true</td><td>false</td><td>false</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>Object.getOwnPropertyDescriptors</code></th><td>true</td><td>true</td><td>true</td><td>false</td><td>false</td><td>false</td></tr>",type: "html"
value: "<tr><th><code>Reflect.ownKeys()</code></th><td>true</td><td>true</td><td>true</td><td>false</td><td>false</td><td>false</td></tr>"
```
### Missing conversion rules
- th (32:7)
- th (43:7)
- th (53:7)
- th (78:7)
- th (90:7)
- th (98:7)
- th (124:7)
- th (139:7)
- th (147:7)
- th (248:7)
- th (257:7)
- th (266:7)
- th (275:7)
- th (284:7)
- th (293:7)
- th (302:7)
- th (311:7)
### [/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
#### Invalid AST transformations
##### dl (484:1) => paragraph
```
type: "code"
lang: "js"
meta: ""
value: "let stoppingForce = obj.mass * -obj.velocity;",type: "paragraph"
summary: "There are four equality algorithms in ES2015:"
children: 
  type: "text"
  value: "If "
  type: "inlineCode"
  value: "obj.velocity"
  type: "text"
  value: " is "
  type: "inlineCode"
  value: "0"
  type: "text"
  value: " (or computes to "
  type: "inlineCode"
  value: "0"
  type: "text"
  value: "), a "
  type: "inlineCode"
  value: "-0"
  type: "text"
  value: " is introduced at that place and propagates out into "
  type: "inlineCode"
  value: "stoppingForce"
  type: "text"
  value: "."
```
### [/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
#### Invalid AST transformations
##### tr (60:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Category</th>"
```
##### tr (67:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Class vs. Instance</th>"
```
##### tr (72:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Definition</th>"
```
##### tr (77:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Creation of new object</th>"
```
##### tr (82:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Construction of object hierarchy</th>"
```
##### tr (87:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Inheritance model</th>"
```
##### tr (92:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Extension of properties</th>"
```
##### table.standard-table (57:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">Category</th><th scope=\"col\">Class-based (Java)</th><th scope=\"col\">Prototype-based (JavaScript)</th></tr>",type: "html"
value: "<tr><th scope=\"row\">Class vs. Instance</th><td>Class and instance are distinct entities.</td><td>All objects can inherit from another object.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Definition</th><td>Define a class with a class definition; instantiate a class with constructor methods.</td><td>Define and create a set of objects with constructor functions.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Creation of new object</th><td>Create a single object with the <code>new</code> operator.</td><td>Same.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Construction of object hierarchy</th><td>Construct an object hierarchy by using class definitions to define subclasses of existing classes.</td><td>Construct an object hierarchy by assigning an object as the prototype associated with a constructor function.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Inheritance model</th><td>Inherit properties by following the class chain.</td><td>Inherit properties by following the prototype chain.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Extension of properties</th><td>Class definition specifies <em>all</em> properties of all instances of a class. Cannot add properties dynamically at run time.</td><td>Constructor function or prototype specifies an <em>initial set</em> of properties. Can add or remove properties dynamically to individual objects or to the entire set of objects.</td></tr>"
```
### Missing conversion rules
- th[scope="row"] (61:4)
- th[scope="row"] (68:4)
- th[scope="row"] (73:4)
- th[scope="row"] (78:4)
- th[scope="row"] (83:4)
- th[scope="row"] (88:4)
- th[scope="row"] (93:4)
### [/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
#### Invalid AST transformations
##### td (280:7) => tableCell
```
type: "paragraph"
summary: "This chapter describes JavaScript's expressions and operators,\n  including assignment, comparison, arithmetic, bitwise, logical, string, ternary and\n  more."
rowIndex: 1
shouldWrap: true
children: 
  type: "inlineCode"
  value: "\"3\" == var1"
```
##### tr (275:5) => tableRow
```
type: "html"
value: "<td><code>3 == var1</code><p><code>\"3\" == var1</code></p><code>3 == '3'</code></td>"
```
##### table.standard-table (265:1) => table
```
type: "html"
value: "<tr><td><a href=\"/en-US/docs/Web/JavaScript/Reference/Operators#equality\">Equal</a>\n(<code>==</code>)</td><td>Returns <code>true</code> if the operands are equal.</td><td><code>3 == var1</code><p><code>\"3\" == var1</code></p><code>3 == '3'</code></td></tr>"
```
### Missing conversion rules
- table.fullwidth-table (374:1)
- table.fullwidth-table (593:1)
- table.fullwidth-table (646:1)
### [/en-US/docs/Web/JavaScript/Guide/Grammar_and_types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
#### Invalid AST transformations
##### td (679:4) => tableCell
```
type: "paragraph"
summary: "This chapter discusses JavaScript's basic grammar, variable declarations, data types and literals."
rowIndex: 12
shouldWrap: true
children: 
  type: "text"
  value: "The character with the Latin-1 encoding specified by the two hexadecimal digits "
  type: "emphasis"
  children: 
    type: "text"
    value: "XX"
  type: "text"
  value: " between "
  type: "inlineCode"
  value: "00"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "FF"
  type: "text"
  value: "."
  type: "break"
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "\\xA9"
  type: "text"
  value: " is the hexadecimal sequence for the copyright symbol."
```
##### tr (677:3) => tableRow
```
type: "html"
value: "<td><p>The character with the Latin-1 encoding specified by the two hexadecimal digits <em>XX</em> between <code>00</code> and <code>FF</code>.<br>For example, <code>\\xA9</code> is the hexadecimal sequence for the copyright symbol.</p></td>"
```
##### table.standard-table (623:1) => table
```
type: "html"
value: "<tr><td><code>\\x<em>XX</em></code></td><td><p>The character with the Latin-1 encoding specified by the two hexadecimal digits <em>XX</em> between <code>00</code> and <code>FF</code>.<br>For example, <code>\\xA9</code> is the hexadecimal sequence for the copyright symbol.</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
### Missing conversion rules
- kbd (115:29)
- kbd (115:45)
- kbd (115:62)
- kbd (115:99)
- kbd (115:114)
- kbd (115:132)
- kbd (148:10)
- kbd (148:25)
- kbd (148:45)
- kbd (148:61)
### [/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
### Missing conversion rules
- p.summary (15:1)
### [/en-US/docs/Web/JavaScript/Guide/Meta_programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)
#### Invalid AST transformations
##### dfn (34:44) => text
```
type: "element"
tagName: "code"
properties: 

children: 
  type: "element"
  tagName: "var"
  properties: 

  children: 
    type: "text"
    value: "target"
```
##### dfn (34:115) => text
```
type: "element"
tagName: "code"
properties: 

children: 
  type: "element"
  tagName: "var"
  properties: 

  children: 
    type: "text"
    value: "handler"
```
##### td (73:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "getPrototypeOf"
      type: "text"
      value: " method must return an object or "
      type: "inlineCode"
      value: "null"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "If "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " is not extensible, "
      type: "inlineCode"
      value: "Object.getPrototypeOf(proxy)"
      type: "text"
      value: " method must return the same value as "
      type: "inlineCode"
      value: "Object.getPrototypeOf(target)"
      type: "text"
      value: "."
```
##### tr (66:3) => tableRow
```
type: "html"
value: "<td><ul><li><code>getPrototypeOf</code> method must return an object or <code>null</code>.</li><li>If <code><var>target</var></code> is not extensible, <code>Object.getPrototypeOf(<var>proxy</var>)</code> method must return the same value as <code>Object.getPrototypeOf(<var>target</var>)</code>.</li></ul></td>"
```
##### td (102:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "getOwnPropertyDescriptor"
      type: "text"
      value: " must return an object or "
      type: "inlineCode"
      value: "undefined"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as non-existent if it exists as a non-configurable own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as non-existent if it exists as an own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " and "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " is not extensible."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as existent if it does not exists as an own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " and "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " is not extensible."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as non-configurable if it does not exist as an own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " or if it exists as a configurable own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The result of "
      type: "inlineCode"
      value: "Object.getOwnPropertyDescriptor(target)"
      type: "text"
      value: " can be applied to "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " using "
      type: "inlineCode"
      value: "Object.defineProperty"
      type: "text"
      value: " and will not throw an exception."
```
##### tr (98:3) => tableRow
```
type: "html"
value: "<td><ul><li><code>getOwnPropertyDescriptor</code> must return an object or <code>undefined</code>.</li><li>A property cannot be reported as non-existent if it exists as a non-configurable own property of <code><var>target</var></code>.</li><li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li><li>A property cannot be reported as existent if it does not exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li><li>A property cannot be reported as non-configurable if it does not exist as an own property of <code><var>target</var></code> or if it exists as a configurable own property of <code><var>target</var></code>.</li><li>The result of <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> can be applied to <code><var>target</var></code> using <code>Object.defineProperty</code> and will not throw an exception.</li></ul></td>"
```
##### td (117:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be added if "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " is not extensible."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be added as (or modified to be) non-configurable if it does not exist as a non-configurable own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property may not be non-configurable if a corresponding configurable property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " exists."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "If a property has a corresponding target object property, then "
      type: "inlineCode"
      value: "Object.defineProperty(target, prop, descriptor)"
      type: "text"
      value: " will not throw an exception."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "In strict mode, a "
      type: "inlineCode"
      value: "false"
      type: "text"
      value: " value returned from the "
      type: "inlineCode"
      value: "defineProperty"
      type: "text"
      value: " handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception."
```
##### tr (113:3) => tableRow
```
type: "html"
value: "<td><ul><li>A property cannot be added if <code><var>target</var></code> is not extensible.</li><li>A property cannot be added as (or modified to be) non-configurable if it does not exist as a non-configurable own property of <code><var>target</var></code>.</li><li>A property may not be non-configurable if a corresponding configurable property of <code><var>target</var></code> exists.</li><li>If a property has a corresponding target object property, then <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code> will not throw an exception.</li><li>In strict mode, a <code>false</code> value returned from the <code>defineProperty</code> handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception.</li></ul></td>"
```
##### td (129:4) => tableCell
```
type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Property query"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "foo in proxy"
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Inherited property query"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "foo in Object.create(proxy)"
          type: "break"
          type: "text"
          value: "{{anN4cmVmKCJSZWZsZWN0LmhhcygpIik=}}"
```
##### td (138:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as non-existent, if it exists as a non-configurable own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "A property cannot be reported as non-existent if it exists as an own property of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " and "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " is not extensible."
```
##### tr (127:3) => tableRow
```
type: "html"
value: "<td><dl><dt>Property query</dt><dd><code>foo in proxy</code></dd><dt>Inherited property query</dt><dd><code>foo in Object.create(<var>proxy</var>)</code><br>{{anN4cmVmKCJSZWZsZWN0LmhhcygpIik=}}</dd></dl></td>",type: "html"
value: "<td><ul><li>A property cannot be reported as non-existent, if it exists as a non-configurable own property of <code><var>target</var></code>.</li><li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li></ul></td>"
```
##### td (147:4) => tableCell
```
type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Property access"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "proxy[foo]"
          type: "break"
          type: "inlineCode"
          value: "proxy.bar"
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Inherited property access"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "Object.create(proxy)[foo]"
          type: "break"
          type: "text"
          value: "{{anN4cmVmKCJSZWZsZWN0LmdldCgpIik=}}"
```
##### td (157:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The value reported for a property must be the same as the value of the corresponding "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " property if "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "'s property is a non-writable, non-configurable data property."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The value reported for a property must be "
      type: "inlineCode"
      value: "undefined"
      type: "text"
      value: " if the corresponding "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " property is non-configurable accessor property that has undefined as its "
      type: "inlineCode"
      value: "[[Get]]"
      type: "text"
      value: " attribute."
```
##### tr (145:3) => tableRow
```
type: "html"
value: "<td><dl><dt>Property access</dt><dd><code><var>proxy</var>[foo]</code><br><code><var>proxy</var>.bar</code></dd><dt>Inherited property access</dt><dd><code>Object.create(<var>proxy</var>)[foo]</code><br>{{anN4cmVmKCJSZWZsZWN0LmdldCgpIik=}}</dd></dl></td>",type: "html"
value: "<td><ul><li>The value reported for a property must be the same as the value of the corresponding <code><var>target</var></code> property if <code><var>target</var></code>'s property is a non-writable, non-configurable data property.</li><li>The value reported for a property must be <code>undefined</code> if the corresponding <code><var>target</var></code> property is non-configurable accessor property that has undefined as its <code>[[Get]]</code> attribute.</li></ul></td>"
```
##### td (166:4) => tableCell
```
type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Property assignment"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "proxy[foo] = bar"
          type: "break"
          type: "inlineCode"
          value: "proxy.foo = bar"
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Inherited property assignment"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "Object.create(proxy)[foo] = bar"
          type: "break"
          type: "text"
          value: "{{anN4cmVmKCJSZWZsZWN0LnNldCgpIik=}}"
```
##### td (176:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Cannot change the value of a property to be different from the value of the corresponding "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " property if the corresponding "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " property is a non-writable, non-configurable data property."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Cannot set the value of a property if the corresponding "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " property is a non-configurable accessor property that has "
      type: "inlineCode"
      value: "undefined"
      type: "text"
      value: " as its "
      type: "inlineCode"
      value: "[[Set]]"
      type: "text"
      value: " attribute."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "In strict mode, a "
      type: "inlineCode"
      value: "false"
      type: "text"
      value: " return value from the "
      type: "inlineCode"
      value: "set"
      type: "text"
      value: " handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception."
```
##### tr (164:3) => tableRow
```
type: "html"
value: "<td><dl><dt>Property assignment</dt><dd><code><var>proxy</var>[foo] = bar</code><br><code><var>proxy</var>.foo = bar</code></dd><dt>Inherited property assignment</dt><dd><code>Object.create(<var>proxy</var>)[foo] = bar</code><br>{{anN4cmVmKCJSZWZsZWN0LnNldCgpIik=}}</dd></dl></td>",type: "html"
value: "<td><ul><li>Cannot change the value of a property to be different from the value of the corresponding <code><var>target</var></code> property if the corresponding <code><var>target</var></code> property is a non-writable, non-configurable data property.</li><li>Cannot set the value of a property if the corresponding <code><var>target</var></code> property is a non-configurable accessor property that has <code>undefined</code> as its <code>[[Set]]</code> attribute.</li><li>In strict mode, a <code>false</code> return value from the <code>set</code> handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception.</li></ul></td>"
```
##### td (186:4) => tableCell
```
type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Property deletion"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "delete proxy[foo]"
          type: "break"
          type: "inlineCode"
          value: "delete proxy.foo"
          type: "break"
          type: "text"
          value: "{{anN4cmVmKCJSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCkiKQ==}}"
```
##### tr (184:3) => tableRow
```
type: "html"
value: "<td><dl><dt>Property deletion</dt><dd><code>delete <var>proxy</var>[foo]</code><br><code>delete <var>proxy</var>.foo</code><br>{{anN4cmVmKCJSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCkiKQ==}}</dd></dl></td>"
```
##### td (198:4) => tableCell
```
type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Property enumeration / "
      type: "inlineCode"
      value: "for...in"
      type: "text"
      value: ":"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": "
          type: "inlineCode"
          value: "for (let name in proxy) {...}"
          type: "break"
          type: "text"
          value: "{{anN4cmVmKCJSZWZsZWN0LmVudW1lcmF0ZSgpIik=}}"
```
##### tr (196:3) => tableRow
```
type: "html"
value: "<td><dl><dt>Property enumeration / <code>for...in</code>:</dt><dd><code>for (let name in <var>proxy</var>) {...}</code><br>{{anN4cmVmKCJSZWZsZWN0LmVudW1lcmF0ZSgpIik=}}</dd></dl></td>"
```
##### td (213:4) => tableCell
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The result of "
      type: "inlineCode"
      value: "ownKeys"
      type: "text"
      value: " is a List."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The Type of each result List element is either {{anN4cmVmKCJTdHJpbmciKQ==}} or {{anN4cmVmKCJTeW1ib2wiKQ==}}."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "The result List must contain the keys of all non-configurable own properties of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: "."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "If the "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " object is not extensible, then the result List must contain all the keys of the own properties of "
      type: "inlineCode"
      value: "target"
      type: "text"
      value: " and no other values."
```
##### tr (207:3) => tableRow
```
type: "html"
value: "<td><ul><li>The result of <code>ownKeys</code> is a List.</li><li>The Type of each result List element is either {{anN4cmVmKCJTdHJpbmciKQ==}} or {{anN4cmVmKCJTeW1ib2wiKQ==}}.</li><li>The result List must contain the keys of all non-configurable own properties of <code><var>target</var></code>.</li><li>If the <code><var>target</var></code> object is not extensible, then the result List must contain all the keys of the own properties of <code><var>target</var></code> and no other values.</li></ul></td>"
```
##### table.standard-table (57:1) => table
```
type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9nZXRQcm90b3R5cGVPZiIsICJoYW5kbGVyLmdldFByb3RvdHlwZU9mKCkiKQ==}}</td><td>{{anN4cmVmKCJPYmplY3QuZ2V0UHJvdG90eXBlT2YoKSIp}}<br>{{anN4cmVmKCJSZWZsZWN0LmdldFByb3RvdHlwZU9mKCkiKQ==}}<br>{{anN4cmVmKCJPYmplY3QvcHJvdG8iLCAiX19wcm90b19fIik=}}<br>{{anN4cmVmKCJPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoKSIp}}<br>{{anN4cmVmKCJPcGVyYXRvcnMvaW5zdGFuY2VvZiIsICJpbnN0YW5jZW9mIik=}}</td><td><ul><li><code>getPrototypeOf</code> method must return an object or <code>null</code>.</li><li>If <code><var>target</var></code> is not extensible, <code>Object.getPrototypeOf(<var>proxy</var>)</code> method must return the same value as <code>Object.getPrototypeOf(<var>target</var>)</code>.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCAiaGFuZGxlci5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoKSIp}}</td><td>{{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkiKQ==}}<br>{{anN4cmVmKCJSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpIik=}}</td><td><ul><li><code>getOwnPropertyDescriptor</code> must return an object or <code>undefined</code>.</li><li>A property cannot be reported as non-existent if it exists as a non-configurable own property of <code><var>target</var></code>.</li><li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li><li>A property cannot be reported as existent if it does not exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li><li>A property cannot be reported as non-configurable if it does not exist as an own property of <code><var>target</var></code> or if it exists as a configurable own property of <code><var>target</var></code>.</li><li>The result of <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> can be applied to <code><var>target</var></code> using <code>Object.defineProperty</code> and will not throw an exception.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9kZWZpbmVQcm9wZXJ0eSIsICJoYW5kbGVyLmRlZmluZVByb3BlcnR5KCkiKQ==}}</td><td>{{anN4cmVmKCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSIp}}<br>{{anN4cmVmKCJSZWZsZWN0LmRlZmluZVByb3BlcnR5KCkiKQ==}}</td><td><ul><li>A property cannot be added if <code><var>target</var></code> is not extensible.</li><li>A property cannot be added as (or modified to be) non-configurable if it does not exist as a non-configurable own property of <code><var>target</var></code>.</li><li>A property may not be non-configurable if a corresponding configurable property of <code><var>target</var></code> exists.</li><li>If a property has a corresponding target object property, then <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code> will not throw an exception.</li><li>In strict mode, a <code>false</code> value returned from the <code>defineProperty</code> handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9oYXMiLCAiaGFuZGxlci5oYXMoKSIp}}</td><td><dl><dt>Property query</dt><dd><code>foo in proxy</code></dd><dt>Inherited property query</dt><dd><code>foo in Object.create(<var>proxy</var>)</code><br>{{anN4cmVmKCJSZWZsZWN0LmhhcygpIik=}}</dd></dl></td><td><ul><li>A property cannot be reported as non-existent, if it exists as a non-configurable own property of <code><var>target</var></code>.</li><li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9nZXQiLCAiaGFuZGxlci5nZXQoKSIp}}</td><td><dl><dt>Property access</dt><dd><code><var>proxy</var>[foo]</code><br><code><var>proxy</var>.bar</code></dd><dt>Inherited property access</dt><dd><code>Object.create(<var>proxy</var>)[foo]</code><br>{{anN4cmVmKCJSZWZsZWN0LmdldCgpIik=}}</dd></dl></td><td><ul><li>The value reported for a property must be the same as the value of the corresponding <code><var>target</var></code> property if <code><var>target</var></code>'s property is a non-writable, non-configurable data property.</li><li>The value reported for a property must be <code>undefined</code> if the corresponding <code><var>target</var></code> property is non-configurable accessor property that has undefined as its <code>[[Get]]</code> attribute.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9zZXQiLCAiaGFuZGxlci5zZXQoKSIp}}</td><td><dl><dt>Property assignment</dt><dd><code><var>proxy</var>[foo] = bar</code><br><code><var>proxy</var>.foo = bar</code></dd><dt>Inherited property assignment</dt><dd><code>Object.create(<var>proxy</var>)[foo] = bar</code><br>{{anN4cmVmKCJSZWZsZWN0LnNldCgpIik=}}</dd></dl></td><td><ul><li>Cannot change the value of a property to be different from the value of the corresponding <code><var>target</var></code> property if the corresponding <code><var>target</var></code> property is a non-writable, non-configurable data property.</li><li>Cannot set the value of a property if the corresponding <code><var>target</var></code> property is a non-configurable accessor property that has <code>undefined</code> as its <code>[[Set]]</code> attribute.</li><li>In strict mode, a <code>false</code> return value from the <code>set</code> handler will throw a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} exception.</li></ul></td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9kZWxldGVQcm9wZXJ0eSIsICJoYW5kbGVyLmRlbGV0ZVByb3BlcnR5KCkiKQ==}}</td><td><dl><dt>Property deletion</dt><dd><code>delete <var>proxy</var>[foo]</code><br><code>delete <var>proxy</var>.foo</code><br>{{anN4cmVmKCJSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCkiKQ==}}</dd></dl></td><td>A property cannot be deleted if it exists as a non-configurable own property of <code><var>target</var></code>.</td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9oYW5kbGVyL2VudW1lcmF0ZSIsICJoYW5kbGVyLmVudW1lcmF0ZSgpIik=}}</td><td><dl><dt>Property enumeration / <code>for...in</code>:</dt><dd><code>for (let name in <var>proxy</var>) {...}</code><br>{{anN4cmVmKCJSZWZsZWN0LmVudW1lcmF0ZSgpIik=}}</dd></dl></td><td>The <code>enumerate</code> method must return an object.</td></tr>",type: "html"
value: "<tr><td>{{anN4cmVmKCJHbG9iYWxfT2JqZWN0cy9Qcm94eS9Qcm94eS9vd25LZXlzIiwgImhhbmRsZXIub3duS2V5cygpIik=}}</td><td>{{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpIik=}}<br>{{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCkiKQ==}}<br>{{anN4cmVmKCJPYmplY3Qua2V5cygpIik=}}<br>{{anN4cmVmKCJSZWZsZWN0Lm93bktleXMoKSIp}}</td><td><ul><li>The result of <code>ownKeys</code> is a List.</li><li>The Type of each result List element is either {{anN4cmVmKCJTdHJpbmciKQ==}} or {{anN4cmVmKCJTeW1ib2wiKQ==}}.</li><li>The result List must contain the keys of all non-configurable own properties of <code><var>target</var></code>.</li><li>If the <code><var>target</var></code> object is not extensible, then the result List must contain all the keys of the own properties of <code><var>target</var></code> and no other values.</li></ul></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
#### Invalid AST transformations
##### td (253:4) => tableCell
```
type: "paragraph"
summary: "This chapter introduces the concepts, objects and functions used to work with and perform calculations using numbers and dates in JavaScript. This includes using numbers written in various bases including decimal, binary, and hexadecimal, as well as the use of the global {{anN4cmVmKCJNYXRoIik=}} object to perform a wide variety of mathematical operations on numbers."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "{{anN4cmVmKCJNYXRoLnBvdyIsICJwb3coKSIp}}, {{anN4cmVmKCJNYXRoLmV4cCIsICJleHAoKSIp}}, {{anN4cmVmKCJNYXRoLmV4cG0xIiwgImV4cG0xKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzEwIiwgImxvZzEwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzFwIiwgImxvZzFwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzIiLCAibG9nMigpIik=}}"
```
##### tr (252:3) => tableRow
```
type: "html"
value: "<td><p>{{anN4cmVmKCJNYXRoLnBvdyIsICJwb3coKSIp}}, {{anN4cmVmKCJNYXRoLmV4cCIsICJleHAoKSIp}}, {{anN4cmVmKCJNYXRoLmV4cG0xIiwgImV4cG0xKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzEwIiwgImxvZzEwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzFwIiwgImxvZzFwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzIiLCAibG9nMigpIik=}}</p></td>"
```
##### table.standard-table (223:1) => table
```
type: "html"
value: "<tr><td><p>{{anN4cmVmKCJNYXRoLnBvdyIsICJwb3coKSIp}}, {{anN4cmVmKCJNYXRoLmV4cCIsICJleHAoKSIp}}, {{anN4cmVmKCJNYXRoLmV4cG0xIiwgImV4cG0xKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzEwIiwgImxvZzEwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzFwIiwgImxvZzFwKCkiKQ==}}, {{anN4cmVmKCJNYXRoLmxvZzIiLCAibG9nMigpIik=}}</p></td><td>Exponential and logarithmic functions.</td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
#### Invalid AST transformations
##### td (34:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, "
  type: "inlineCode"
  value: "/^A/"
  type: "text"
  value: " does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " This character has a different meaning when it appears at the start of a "
    type: "link"
    title: 

    url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
    children: 
      type: "text"
      value: "group"
    type: "text"
    value: "."
```
##### tr (32:3) => tableRow
```
type: "html"
value: "<td><p>Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, <code>/^A/</code> does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".</p><div class=\"notecard note\"><p><strong>Note:</strong> This character has a different meaning when it appears at the start of a <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">group</a>.</p></div></td>"
```
##### td (44:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, "
  type: "inlineCode"
  value: "/t$/"
  type: "text"
  value: " does not match the \"t\" in \"eater\", but does match it in \"eat\"."
```
##### tr (42:3) => tableRow
```
type: "html"
value: "<td><p>Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, <code>/t$/</code> does not match the \"t\" in \"eater\", but does match it in \"eat\".</p></td>"
```
##### td (50:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.",type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Examples:",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/\\bm/"
      type: "text"
      value: " matches the \"m\" in \"moon\"."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/oo\\b/"
      type: "text"
      value: " does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/oon\\b/"
      type: "text"
      value: " matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/\\w\\b\\w/"
      type: "text"
      value: " will never match anything, because a word character can never be followed by both a non-word and a word character.",type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "To match a backspace character ("
  type: "inlineCode"
  value: "[\\b]"
  type: "text"
  value: "), see "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
  children: 
    type: "text"
    value: "Character Classes"
  type: "text"
  value: "."
```
##### tr (48:3) => tableRow
```
type: "html"
value: "<td><p>Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p><p>Examples:</p><ul><li><code>/\\bm/</code> matches the \"m\" in \"moon\".</li><li><code>/oo\\b/</code> does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character.</li><li><code>/oon\\b/</code> matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character.</li><li><code>/\\w\\b\\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li></ul><p>To match a backspace character (<code>[\\b]</code>), see <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character Classes</a>.</p></td>"
```
##### td (67:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, "
  type: "inlineCode"
  value: "/\\Bon/"
  type: "text"
  value: " matches \"on\" in \"at noon\", and "
  type: "inlineCode"
  value: "/ye\\B/"
  type: "text"
  value: " matches \"ye\" in \"possibly yesterday\"."
```
##### tr (65:3) => tableRow
```
type: "html"
value: "<td><p>Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, <code>/\\Bon/</code> matches \"on\" in \"at noon\", and <code>/ye\\B/</code> matches \"ye\" in \"possibly yesterday\".</p></td>"
```
##### table.standard-table (24:1) => table
```
type: "html"
value: "<tr><td><code>^</code></td><td><p>Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, <code>/^A/</code> does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".</p><div class=\"notecard note\"><p><strong>Note:</strong> This character has a different meaning when it appears at the start of a <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">group</a>.</p></div></td></tr>",type: "html"
value: "<tr><td><code>$</code></td><td><p>Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, <code>/t$/</code> does not match the \"t\" in \"eater\", but does match it in \"eat\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\b</code></td><td><p>Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p><p>Examples:</p><ul><li><code>/\\bm/</code> matches the \"m\" in \"moon\".</li><li><code>/oo\\b/</code> does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character.</li><li><code>/oon\\b/</code> matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character.</li><li><code>/\\w\\b\\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li></ul><p>To match a backspace character (<code>[\\b]</code>), see <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character Classes</a>.</p></td></tr>",type: "html"
value: "<tr><td><code>\\B</code></td><td><p>Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, <code>/\\Bon/</code> matches \"on\" in \"at noon\", and <code>/ye\\B/</code> matches \"ye\" in \"possibly yesterday\".</p></td></tr>"
```
##### td (90:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 1
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Lookahead assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is followed by \"y\". For example, /"
  type: "inlineCode"
  value: "Jack(?=Sprat)/"
  type: "text"
  value: " matches \"Jack\" only if it is followed by \"Sprat\"."
  type: "break"
  type: "inlineCode"
  value: "/Jack(?=Sprat|Frost)/"
  type: "text"
  value: " matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results."
```
##### tr (88:3) => tableRow
```
type: "html"
value: "<td><p><strong>Lookahead assertion: </strong>Matches \"x\" only if \"x\" is followed by \"y\". For example, /<code>Jack(?=Sprat)/</code> matches \"Jack\" only if it is followed by \"Sprat\".<br><code>/Jack(?=Sprat|Frost)/</code> matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results.</p></td>"
```
##### td (97:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 2
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Negative lookahead assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is not followed by \"y\". For example, "
  type: "inlineCode"
  value: "/\\d+(?!\\.)/"
  type: "text"
  value: " matches a number only if it is not followed by a decimal point. "
  type: "inlineCode"
  value: "/\\d+(?!\\.)/.exec('3.141')"
  type: "text"
  value: " matches \"141\" but not \"3\"."
```
##### tr (95:3) => tableRow
```
type: "html"
value: "<td><p><strong>Negative lookahead assertion: </strong>Matches \"x\" only if \"x\" is not followed by \"y\". For example, <code>/\\d+(?!\\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\\d+(?!\\.)/.exec('3.141')</code> matches \"141\" but not \"3\".</p></td>"
```
##### td (103:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 3
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Lookbehind assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is preceded by \"y\". For example, "
  type: "inlineCode"
  value: "/(?<=Jack)Sprat/"
  type: "text"
  value: " matches \"Sprat\" only if it is preceded by \"Jack\". "
  type: "inlineCode"
  value: "/(?<=Jack|Tom)Sprat/"
  type: "text"
  value: " matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results."
```
##### tr (101:3) => tableRow
```
type: "html"
value: "<td><p><strong>Lookbehind assertion: </strong>Matches \"x\" only if \"x\" is preceded by \"y\". For example, <code>/(?&#x3C;=Jack)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results.</p></td>"
```
##### td (109:4) => tableCell
```
type: "paragraph"
summary: "Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)."
rowIndex: 4
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Negative lookbehind assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is not preceded by \"y\". For example, "
  type: "inlineCode"
  value: "/(?<!-)\\d+/"
  type: "text"
  value: " matches a number only if it is not preceded by a minus sign. "
  type: "inlineCode"
  value: "/(?<!-)\\d+/.exec('3')"
  type: "text"
  value: " matches \"3\". "
  type: "inlineCode"
  value: "/(?<!-)\\d+/.exec('-3')"
  type: "text"
  value: "  match is not found because the number is preceded by the minus sign."
```
##### tr (107:3) => tableRow
```
type: "html"
value: "<td><p><strong>Negative lookbehind assertion: </strong>Matches \"x\" only if \"x\" is not preceded by \"y\". For example, <code>/(?&#x3C;!-)\\d+/</code> matches a number only if it is not preceded by a minus sign. <code>/(?&#x3C;!-)\\d+/.exec('3')</code> matches \"3\". <code>/(?&#x3C;!-)\\d+/.exec('-3')</code>  match is not found because the number is preceded by the minus sign.</p></td>"
```
##### table.standard-table (80:1) => table
```
type: "html"
value: "<tr><td><code>x(?=y)</code></td><td><p><strong>Lookahead assertion: </strong>Matches \"x\" only if \"x\" is followed by \"y\". For example, /<code>Jack(?=Sprat)/</code> matches \"Jack\" only if it is followed by \"Sprat\".<br><code>/Jack(?=Sprat|Frost)/</code> matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results.</p></td></tr>",type: "html"
value: "<tr><td><code>x(?!y)</code></td><td><p><strong>Negative lookahead assertion: </strong>Matches \"x\" only if \"x\" is not followed by \"y\". For example, <code>/\\d+(?!\\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\\d+(?!\\.)/.exec('3.141')</code> matches \"141\" but not \"3\".</p></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;=y)x</code></td><td><p><strong>Lookbehind assertion: </strong>Matches \"x\" only if \"x\" is preceded by \"y\". For example, <code>/(?&#x3C;=Jack)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results.</p></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;!y)x</code></td><td><p><strong>Negative lookbehind assertion: </strong>Matches \"x\" only if \"x\" is not preceded by \"y\". For example, <code>/(?&#x3C;!-)\\d+/</code> matches a number only if it is not preceded by a minus sign. <code>/(?&#x3C;!-)\\d+/.exec('3')</code> matches \"3\". <code>/(?&#x3C;!-)\\d+/.exec('-3')</code>  match is not found because the number is preceded by the minus sign.</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
#### Invalid AST transformations
##### td (34:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Has one of the following meanings:",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Matches any single character "
      type: "emphasis"
      children: 
        type: "text"
        value: "except"
      type: "text"
      value: " line terminators: "
      type: "inlineCode"
      value: "\\n"
      type: "text"
      value: ", "
      type: "inlineCode"
      value: "\\r"
      type: "text"
      value: ", "
      type: "inlineCode"
      value: "\\u2028"
      type: "text"
      value: " or "
      type: "inlineCode"
      value: "\\u2029"
      type: "text"
      value: ". For example, "
      type: "inlineCode"
      value: "/.y/"
      type: "text"
      value: " matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\"."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Inside a character class, the dot loses its special meaning and matches a literal dot.",type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Note that the "
  type: "inlineCode"
  value: "m"
  type: "text"
  value: " multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class "
  type: "inlineCode"
  value: "[^]"
  type: "text"
  value: " can be used — it will match any character including newlines.",type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "ES2018 added the "
  type: "inlineCode"
  value: "s"
  type: "text"
  value: " \"dotAll\" flag, which allows the dot to also match line terminators."
```
##### tr (32:3) => tableRow
```
type: "html"
value: "<td><p>Has one of the following meanings:</p><ul><li>Matches any single character <em>except</em> line terminators: <code>\\n</code>, <code>\\r</code>, <code>\\u2028</code> or <code>\\u2029</code>. For example, <code>/.y/</code> matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\".</li><li>Inside a character class, the dot loses its special meaning and matches a literal dot.</li></ul><p>Note that the <code>m</code> multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class <code>[^]</code> can be used — it will match any character including newlines.</p><p>ES2018 added the <code>s</code> \"dotAll\" flag, which allows the dot to also match line terminators.</p></td>"
```
##### td (49:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches any digit (Arabic numeral). Equivalent to "
  type: "inlineCode"
  value: "[0-9]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\d/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[0-9]/"
  type: "text"
  value: " matches \"2\" in \"B2 is the suite number\"."
```
##### tr (47:3) => tableRow
```
type: "html"
value: "<td><p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>. For example, <code>/\\d/</code> or <code>/[0-9]/</code> matches \"2\" in \"B2 is the suite number\".</p></td>"
```
##### td (55:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches any character that is not a digit (Arabic numeral). Equivalent to "
  type: "inlineCode"
  value: "[^0-9]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\D/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[^0-9]/"
  type: "text"
  value: " matches \"B\" in \"B2 is the suite number\"."
```
##### tr (53:3) => tableRow
```
type: "html"
value: "<td><p>Matches any character that is not a digit (Arabic numeral). Equivalent to <code>[^0-9]</code>. For example, <code>/\\D/</code> or <code>/[^0-9]/</code> matches \"B\" in \"B2 is the suite number\".</p></td>"
```
##### td (61:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to "
  type: "inlineCode"
  value: "[A-Za-z0-9_]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\w/"
  type: "text"
  value: " matches \"a\" in \"apple\", \"5\" in \"$5.28\", \"3\" in \"3D\" and \"m\" in \"Émanuel\"."
```
##### tr (59:3) => tableRow
```
type: "html"
value: "<td><p>Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For example, <code>/\\w/</code> matches \"a\" in \"apple\", \"5\" in \"$5.28\", \"3\" in \"3D\" and \"m\" in \"Émanuel\".</p></td>"
```
##### td (67:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Matches any character that is not a word character from the basic Latin alphabet. Equivalent to "
  type: "inlineCode"
  value: "[^A-Za-z0-9_]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\W/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[^A-Za-z0-9_]/"
  type: "text"
  value: " matches \"%\" in \"50%\" and \"É\" in \"Émanuel\"."
```
##### tr (65:3) => tableRow
```
type: "html"
value: "<td><p>Matches any character that is not a word character from the basic Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example, <code>/\\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches \"%\" in \"50%\" and \"É\" in \"Émanuel\".</p></td>"
```
##### td (73:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to "
  type: "inlineCode"
  value: "[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\s\\w*/"
  type: "text"
  value: " matches \" bar\" in \"foo bar\"."
```
##### tr (71:3) => tableRow
```
type: "html"
value: "<td><p>Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to <code>[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\s\\w*/</code> matches \" bar\" in \"foo bar\".</p></td>"
```
##### td (79:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "Matches a single character other than white space. Equivalent to "
  type: "inlineCode"
  value: "[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\S\\w*/"
  type: "text"
  value: " matches \"foo\" in \"foo bar\"."
```
##### tr (77:3) => tableRow
```
type: "html"
value: "<td><p>Matches a single character other than white space. Equivalent to <code>[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\S\\w*/</code> matches \"foo\" in \"foo bar\".</p></td>"
```
##### td (113:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 15
shouldWrap: true
children: 
  type: "text"
  value: "Matches a control character using "
  type: "link"
  title: 

  url: "https://en.wikipedia.org/wiki/Caret_notation"
  children: 
    type: "text"
    value: "caret notation"
  type: "text"
  value: ", where \"X\" is a letter from A–Z (corresponding to codepoints "
  type: "inlineCode"
  value: "U+0001"
  type: "emphasis"
  children: 
    type: "text"
    value: "–"
  type: "inlineCode"
  value: "U+001F"
  type: "text"
  value: "). For example, "
  type: "inlineCode"
  value: "/\\cM/"
  type: "text"
  value: " matches \"\\r\" in \"\\r\\n\"."
```
##### tr (111:3) => tableRow
```
type: "html"
value: "<td><p>Matches a control character using <a href=\"https://en.wikipedia.org/wiki/Caret_notation\">caret notation</a>, where \"X\" is a letter from A–Z (corresponding to codepoints <code>U+0001</code><em>–</em><code>U+001F</code>). For example, <code>/\\cM/</code> matches \"\\r\" in \"\\r\\n\".</p></td>"
```
##### td (135:4) => tableCell
```
type: "paragraph"
summary: "Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits."
rowIndex: 20
shouldWrap: true
children: 
  type: "text"
  value: "Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, "
      type: "inlineCode"
      value: "/b/"
      type: "text"
      value: " matches the character \"b\". By placing a backslash in front of \"b\", that is by using "
      type: "inlineCode"
      value: "/\\b/"
      type: "text"
      value: ", the character becomes special to mean match a word boundary."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, "
      type: "inlineCode"
      value: "/a*/"
      type: "text"
      value: " means match 0 or more \"a\"s. To match "
      type: "inlineCode"
      value: "*"
      type: "text"
      value: " literally, precede it with a backslash; for example, "
      type: "inlineCode"
      value: "/a\\*/"
      type: "text"
      value: " matches \"a*\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " To match this character literally, escape it with itself. In other words to search for "
    type: "inlineCode"
    value: "\\"
    type: "text"
    value: " use "
    type: "inlineCode"
    value: "/\\\\/"
    type: "text"
    value: "."
```
##### tr (133:3) => tableRow
```
type: "html"
value: "<td><p>Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.</p><ul><li>For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, <code>/b/</code> matches the character \"b\". By placing a backslash in front of \"b\", that is by using <code>/\\b/</code>, the character becomes special to mean match a word boundary.</li><li>For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, <code>/a*/</code> means match 0 or more \"a\"s. To match <code>*</code> literally, precede it with a backslash; for example, <code>/a\\*/</code> matches \"a*\".</li></ul><div class=\"notecard note\"><p><strong>Note:</strong> To match this character literally, escape it with itself. In other words to search for <code>\\</code> use <code>/\\\\/</code>.</p></div></td>"
```
##### table.standard-table (22:1) => table
```
type: "html"
value: "<tr><td><code>.</code></td><td><p>Has one of the following meanings:</p><ul><li>Matches any single character <em>except</em> line terminators: <code>\\n</code>, <code>\\r</code>, <code>\\u2028</code> or <code>\\u2029</code>. For example, <code>/.y/</code> matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\".</li><li>Inside a character class, the dot loses its special meaning and matches a literal dot.</li></ul><p>Note that the <code>m</code> multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class <code>[^]</code> can be used — it will match any character including newlines.</p><p>ES2018 added the <code>s</code> \"dotAll\" flag, which allows the dot to also match line terminators.</p></td></tr>",type: "html"
value: "<tr><td><code>\\d</code></td><td><p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>. For example, <code>/\\d/</code> or <code>/[0-9]/</code> matches \"2\" in \"B2 is the suite number\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\D</code></td><td><p>Matches any character that is not a digit (Arabic numeral). Equivalent to <code>[^0-9]</code>. For example, <code>/\\D/</code> or <code>/[^0-9]/</code> matches \"B\" in \"B2 is the suite number\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\w</code></td><td><p>Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For example, <code>/\\w/</code> matches \"a\" in \"apple\", \"5\" in \"$5.28\", \"3\" in \"3D\" and \"m\" in \"Émanuel\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\W</code></td><td><p>Matches any character that is not a word character from the basic Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example, <code>/\\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches \"%\" in \"50%\" and \"É\" in \"Émanuel\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\s</code></td><td><p>Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to <code>[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\s\\w*/</code> matches \" bar\" in \"foo bar\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\S</code></td><td><p>Matches a single character other than white space. Equivalent to <code>[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\S\\w*/</code> matches \"foo\" in \"foo bar\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\c<em>X</em></code></td><td><p>Matches a control character using <a href=\"https://en.wikipedia.org/wiki/Caret_notation\">caret notation</a>, where \"X\" is a letter from A–Z (corresponding to codepoints <code>U+0001</code><em>–</em><code>U+001F</code>). For example, <code>/\\cM/</code> matches \"\\r\" in \"\\r\\n\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\</code></td><td><p>Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.</p><ul><li>For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, <code>/b/</code> matches the character \"b\". By placing a backslash in front of \"b\", that is by using <code>/\\b/</code>, the character becomes special to mean match a word boundary.</li><li>For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, <code>/a*/</code> means match 0 or more \"a\"s. To match <code>*</code> literally, precede it with a backslash; for example, <code>/a\\*/</code> matches \"a*\".</li></ul><div class=\"notecard note\"><p><strong>Note:</strong> To match this character literally, escape it with itself. In other words to search for <code>\\</code> use <code>/\\\\/</code>.</p></div></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
#### Invalid AST transformations
##### td (30:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Has one of the following meanings:",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Matches any single character "
      type: "emphasis"
      children: 
        type: "text"
        value: "except"
      type: "text"
      value: " line terminators: "
      type: "inlineCode"
      value: "\\n"
      type: "text"
      value: ", "
      type: "inlineCode"
      value: "\\r"
      type: "text"
      value: ", "
      type: "inlineCode"
      value: "\\u2028"
      type: "text"
      value: " or "
      type: "inlineCode"
      value: "\\u2029"
      type: "text"
      value: ". For example, "
      type: "inlineCode"
      value: "/.y/"
      type: "text"
      value: " matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\"."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Inside a character class, the dot loses its special meaning and matches a literal dot.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Note that the "
  type: "inlineCode"
  value: "m"
  type: "text"
  value: " multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class "
  type: "inlineCode"
  value: "[^]"
  type: "text"
  value: " can be used — it will match any character including newlines.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "ES2018 added the "
  type: "inlineCode"
  value: "s"
  type: "text"
  value: " \"dotAll\" flag, which allows the dot to also match line terminators."
```
##### tr (28:3) => tableRow
```
type: "html"
value: "<td><p>Has one of the following meanings:</p><ul><li>Matches any single character <em>except</em> line terminators: <code>\\n</code>, <code>\\r</code>, <code>\\u2028</code> or <code>\\u2029</code>. For example, <code>/.y/</code> matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\".</li><li>Inside a character class, the dot loses its special meaning and matches a literal dot.</li></ul><p>Note that the <code>m</code> multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class <code>[^]</code> can be used — it will match any character including newlines.</p><p>ES2018 added the <code>s</code> \"dotAll\" flag, which allows the dot to also match line terminators.</p></td>"
```
##### td (45:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches any digit (Arabic numeral). Equivalent to "
  type: "inlineCode"
  value: "[0-9]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\d/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[0-9]/"
  type: "text"
  value: " matches \"2\" in \"B2 is the suite number\"."
```
##### tr (43:3) => tableRow
```
type: "html"
value: "<td><p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>. For example, <code>/\\d/</code> or <code>/[0-9]/</code> matches \"2\" in \"B2 is the suite number\".</p></td>"
```
##### td (51:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches any character that is not a digit (Arabic numeral). Equivalent to "
  type: "inlineCode"
  value: "[^0-9]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\D/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[^0-9]/"
  type: "text"
  value: " matches \"B\" in \"B2 is the suite number\"."
```
##### tr (49:3) => tableRow
```
type: "html"
value: "<td><p>Matches any character that is not a digit (Arabic numeral). Equivalent to <code>[^0-9]</code>. For example, <code>/\\D/</code> or <code>/[^0-9]/</code> matches \"B\" in \"B2 is the suite number\".</p></td>"
```
##### td (57:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to "
  type: "inlineCode"
  value: "[A-Za-z0-9_]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\w/"
  type: "text"
  value: " matches \"a\" in \"apple\", \"5\" in \"$5.28\", and \"3\" in \"3D\"."
```
##### tr (55:3) => tableRow
```
type: "html"
value: "<td><p>Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For example, <code>/\\w/</code> matches \"a\" in \"apple\", \"5\" in \"$5.28\", and \"3\" in \"3D\".</p></td>"
```
##### td (63:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Matches any character that is not a word character from the basic Latin alphabet. Equivalent to "
  type: "inlineCode"
  value: "[^A-Za-z0-9_]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\W/"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "/[^A-Za-z0-9_]/"
  type: "text"
  value: " matches \"%\" in \"50%\"."
```
##### tr (61:3) => tableRow
```
type: "html"
value: "<td><p>Matches any character that is not a word character from the basic Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example, <code>/\\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches \"%\" in \"50%\".</p></td>"
```
##### td (69:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to "
  type: "inlineCode"
  value: "[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\s\\w*/"
  type: "text"
  value: " matches \" bar\" in \"foo bar\"."
```
##### tr (67:3) => tableRow
```
type: "html"
value: "<td><p>Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to <code>[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\s\\w*/</code> matches \" bar\" in \"foo bar\".</p></td>"
```
##### td (75:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "Matches a single character other than white space. Equivalent to "
  type: "inlineCode"
  value: "[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/\\S\\w*/"
  type: "text"
  value: " matches \"foo\" in \"foo bar\"."
```
##### tr (73:3) => tableRow
```
type: "html"
value: "<td><p>Matches a single character other than white space. Equivalent to <code>[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\S\\w*/</code> matches \"foo\" in \"foo bar\".</p></td>"
```
##### td (109:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 15
shouldWrap: true
children: 
  type: "text"
  value: "Matches a control character using "
  type: "link"
  title: 

  url: "https://en.wikipedia.org/wiki/Caret_notation"
  children: 
    type: "text"
    value: "caret notation"
  type: "text"
  value: ", where \"X\" is a letter from A–Z (corresponding to codepoints "
  type: "inlineCode"
  value: "U+0001"
  type: "emphasis"
  children: 
    type: "text"
    value: "–"
  type: "inlineCode"
  value: "U+001F"
  type: "text"
  value: "). For example, "
  type: "inlineCode"
  value: "/\\cM/"
  type: "text"
  value: " matches \"\\r\" in \"\\r\\n\"."
```
##### tr (107:3) => tableRow
```
type: "html"
value: "<td><p>Matches a control character using <a href=\"https://en.wikipedia.org/wiki/Caret_notation\">caret notation</a>, where \"X\" is a letter from A–Z (corresponding to codepoints <code>U+0001</code><em>–</em><code>U+001F</code>). For example, <code>/\\cM/</code> matches \"\\r\" in \"\\r\\n\".</p></td>"
```
##### td (127:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 19
shouldWrap: true
children: 
  type: "text"
  value: "Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, "
      type: "inlineCode"
      value: "/b/"
      type: "text"
      value: " matches the character \"b\". By placing a backslash in front of \"b\", that is by using "
      type: "inlineCode"
      value: "/\\b/"
      type: "text"
      value: ", the character becomes special to mean match a word boundary."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, "
      type: "inlineCode"
      value: "/a*/"
      type: "text"
      value: " means match 0 or more \"a\"s. To match "
      type: "inlineCode"
      value: "*"
      type: "text"
      value: " literally, precede it with a backslash; for example, "
      type: "inlineCode"
      value: "/a\\*/"
      type: "text"
      value: " matches \"a*\".",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 19
shouldWrap: true
children: 
  type: "text"
  value: "Note that some characters like "
  type: "inlineCode"
  value: ":"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "-"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "@"
  type: "text"
  value: ", etc. neither have a special meaning when escaped nor when unescaped. Escape sequences like "
  type: "inlineCode"
  value: "\\:"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "\\-"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "\\@"
  type: "text"
  value: " will be equivalent to their literal, unescaped character equivalents in regular expressions. However, in regular expressions with the "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2"
  children: 
    type: "text"
    value: "unicode flag"
  type: "text"
  value: ", these will cause an "
  type: "emphasis"
  children: 
    type: "text"
    value: "invalid identity escape"
  type: "text"
  value: " error. This is done to ensure backward compatibility with existing code that uses new escape sequences like "
  type: "inlineCode"
  value: "\\p"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "\\k"
  type: "text"
  value: ".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " To match this character literally, escape it with itself. In other words to search for "
    type: "inlineCode"
    value: "\\"
    type: "text"
    value: " use "
    type: "inlineCode"
    value: "/\\\\/"
    type: "text"
    value: "."
```
##### tr (125:3) => tableRow
```
type: "html"
value: "<td><p>Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.</p><ul><li>For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, <code>/b/</code> matches the character \"b\". By placing a backslash in front of \"b\", that is by using <code>/\\b/</code>, the character becomes special to mean match a word boundary.</li><li>For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, <code>/a*/</code> means match 0 or more \"a\"s. To match <code>*</code> literally, precede it with a backslash; for example, <code>/a\\*/</code> matches \"a*\".</li></ul><p>Note that some characters like <code>:</code>, <code>-</code>, <code>@</code>, etc. neither have a special meaning when escaped nor when unescaped. Escape sequences like <code>\\:</code>, <code>\\-</code>, <code>\\@</code> will be equivalent to their literal, unescaped character equivalents in regular expressions. However, in regular expressions with the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2\">unicode flag</a>, these will cause an <em>invalid identity escape</em> error. This is done to ensure backward compatibility with existing code that uses new escape sequences like <code>\\p</code> or <code>\\k</code>.</p><div class=\"notecard note\"><p><strong>Note:</strong> To match this character literally, escape it with itself. In other words to search for <code>\\</code> use <code>/\\\\/</code>.</p></div></td>"
```
##### table.standard-table (18:1) => table
```
type: "html"
value: "<tr><td><code>.</code></td><td><p>Has one of the following meanings:</p><ul><li>Matches any single character <em>except</em> line terminators: <code>\\n</code>, <code>\\r</code>, <code>\\u2028</code> or <code>\\u2029</code>. For example, <code>/.y/</code> matches \"my\" and \"ay\", but not \"yes\", in \"yes make my day\".</li><li>Inside a character class, the dot loses its special meaning and matches a literal dot.</li></ul><p>Note that the <code>m</code> multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class <code>[^]</code> can be used — it will match any character including newlines.</p><p>ES2018 added the <code>s</code> \"dotAll\" flag, which allows the dot to also match line terminators.</p></td></tr>",type: "html"
value: "<tr><td><code>\\d</code></td><td><p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>. For example, <code>/\\d/</code> or <code>/[0-9]/</code> matches \"2\" in \"B2 is the suite number\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\D</code></td><td><p>Matches any character that is not a digit (Arabic numeral). Equivalent to <code>[^0-9]</code>. For example, <code>/\\D/</code> or <code>/[^0-9]/</code> matches \"B\" in \"B2 is the suite number\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\w</code></td><td><p>Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For example, <code>/\\w/</code> matches \"a\" in \"apple\", \"5\" in \"$5.28\", and \"3\" in \"3D\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\W</code></td><td><p>Matches any character that is not a word character from the basic Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example, <code>/\\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches \"%\" in \"50%\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\s</code></td><td><p>Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to <code>[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\s\\w*/</code> matches \" bar\" in \"foo bar\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\S</code></td><td><p>Matches a single character other than white space. Equivalent to <code>[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]</code>. For example, <code>/\\S\\w*/</code> matches \"foo\" in \"foo bar\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\c<em>X</em></code></td><td><p>Matches a control character using <a href=\"https://en.wikipedia.org/wiki/Caret_notation\">caret notation</a>, where \"X\" is a letter from A–Z (corresponding to codepoints <code>U+0001</code><em>–</em><code>U+001F</code>). For example, <code>/\\cM/</code> matches \"\\r\" in \"\\r\\n\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\</code></td><td><p>Indicates that the following character should be treated specially, or \"escaped\". It behaves one of two ways.</p><ul><li>For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, <code>/b/</code> matches the character \"b\". By placing a backslash in front of \"b\", that is by using <code>/\\b/</code>, the character becomes special to mean match a word boundary.</li><li>For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, \"*\" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, <code>/a*/</code> means match 0 or more \"a\"s. To match <code>*</code> literally, precede it with a backslash; for example, <code>/a\\*/</code> matches \"a*\".</li></ul><p>Note that some characters like <code>:</code>, <code>-</code>, <code>@</code>, etc. neither have a special meaning when escaped nor when unescaped. Escape sequences like <code>\\:</code>, <code>\\-</code>, <code>\\@</code> will be equivalent to their literal, unescaped character equivalents in regular expressions. However, in regular expressions with the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2\">unicode flag</a>, these will cause an <em>invalid identity escape</em> error. This is done to ensure backward compatibility with existing code that uses new escape sequences like <code>\\p</code> or <code>\\k</code>.</p><div class=\"notecard note\"><p><strong>Note:</strong> To match this character literally, escape it with itself. In other words to search for <code>\\</code> use <code>/\\\\/</code>.</p></div></td></tr>"
```
##### td (160:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, "
  type: "inlineCode"
  value: "/^A/"
  type: "text"
  value: " does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " This character has a different meaning when it appears at the start of a "
    type: "link"
    title: 

    url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
    children: 
      type: "text"
      value: "group"
    type: "text"
    value: "."
```
##### tr (158:3) => tableRow
```
type: "html"
value: "<td><p>Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, <code>/^A/</code> does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".</p><div class=\"notecard note\"><p><strong>Note:</strong> This character has a different meaning when it appears at the start of a <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">group</a>.</p></div></td>"
```
##### td (170:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, "
  type: "inlineCode"
  value: "/t$/"
  type: "text"
  value: " does not match the \"t\" in \"eater\", but does match it in \"eat\"."
```
##### tr (168:3) => tableRow
```
type: "html"
value: "<td><p>Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, <code>/t$/</code> does not match the \"t\" in \"eater\", but does match it in \"eat\".</p></td>"
```
##### td (176:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Examples:",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/\\bm/"
      type: "text"
      value: " matches the \"m\" in \"moon\"."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/oo\\b/"
      type: "text"
      value: " does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/oon\\b/"
      type: "text"
      value: " matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/\\w\\b\\w/"
      type: "text"
      value: " will never match anything, because a word character can never be followed by both a non-word and a word character.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "To match a backspace character ("
  type: "inlineCode"
  value: "[\\b]"
  type: "text"
  value: "), see "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
  children: 
    type: "text"
    value: "Character Classes"
  type: "text"
  value: "."
```
##### tr (174:3) => tableRow
```
type: "html"
value: "<td><p>Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p><p>Examples:</p><ul><li><code>/\\bm/</code> matches the \"m\" in \"moon\".</li><li><code>/oo\\b/</code> does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character.</li><li><code>/oon\\b/</code> matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character.</li><li><code>/\\w\\b\\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li></ul><p>To match a backspace character (<code>[\\b]</code>), see <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character Classes</a>.</p></td>"
```
##### td (193:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, "
  type: "inlineCode"
  value: "/\\Bon/"
  type: "text"
  value: " matches \"on\" in \"at noon\", and "
  type: "inlineCode"
  value: "/ye\\B/"
  type: "text"
  value: " matches \"ye\" in \"possibly yesterday\"."
```
##### tr (191:3) => tableRow
```
type: "html"
value: "<td><p>Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, <code>/\\Bon/</code> matches \"on\" in \"at noon\", and <code>/ye\\B/</code> matches \"ye\" in \"possibly yesterday\".</p></td>"
```
##### table.standard-table (150:1) => table
```
type: "html"
value: "<tr><td><code>^</code></td><td><p>Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, <code>/^A/</code> does not match the \"A\" in \"an A\", but does match the first \"A\" in \"An A\".</p><div class=\"notecard note\"><p><strong>Note:</strong> This character has a different meaning when it appears at the start of a <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">group</a>.</p></div></td></tr>",type: "html"
value: "<tr><td><code>$</code></td><td><p>Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, <code>/t$/</code> does not match the \"t\" in \"eater\", but does match it in \"eat\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\b</code></td><td><p>Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p><p>Examples:</p><ul><li><code>/\\bm/</code> matches the \"m\" in \"moon\".</li><li><code>/oo\\b/</code> does not match the \"oo\" in \"moon\", because \"oo\" is followed by \"n\" which is a word character.</li><li><code>/oon\\b/</code> matches the \"oon\" in \"moon\", because \"oon\" is the end of the string, thus not followed by a word character.</li><li><code>/\\w\\b\\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li></ul><p>To match a backspace character (<code>[\\b]</code>), see <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character Classes</a>.</p></td></tr>",type: "html"
value: "<tr><td><code>\\B</code></td><td><p>Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, <code>/\\Bon/</code> matches \"on\" in \"at noon\", and <code>/ye\\B/</code> matches \"ye\" in \"possibly yesterday\".</p></td></tr>"
```
##### td (216:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Lookahead assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is followed by \"y\". For example, /"
  type: "inlineCode"
  value: "Jack(?=Sprat)/"
  type: "text"
  value: " matches \"Jack\" only if it is followed by \"Sprat\"."
  type: "break"
  type: "inlineCode"
  value: "/Jack(?=Sprat|Frost)/"
  type: "text"
  value: " matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results."
```
##### tr (214:3) => tableRow
```
type: "html"
value: "<td><p><strong>Lookahead assertion: </strong>Matches \"x\" only if \"x\" is followed by \"y\". For example, /<code>Jack(?=Sprat)/</code> matches \"Jack\" only if it is followed by \"Sprat\".<br><code>/Jack(?=Sprat|Frost)/</code> matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results.</p></td>"
```
##### td (223:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Negative lookahead assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is not followed by \"y\". For example, "
  type: "inlineCode"
  value: "/\\d+(?!\\.)/"
  type: "text"
  value: " matches a number only if it is not followed by a decimal point. "
  type: "inlineCode"
  value: "/\\d+(?!\\.)/.exec('3.141')"
  type: "text"
  value: " matches \"141\" but not \"3\"."
```
##### tr (221:3) => tableRow
```
type: "html"
value: "<td><p><strong>Negative lookahead assertion: </strong>Matches \"x\" only if \"x\" is not followed by \"y\". For example, <code>/\\d+(?!\\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\\d+(?!\\.)/.exec('3.141')</code> matches \"141\" but not \"3\".</p></td>"
```
##### td (229:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Lookbehind assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is preceded by \"y\". For example, "
  type: "inlineCode"
  value: "/(?<=Jack)Sprat/"
  type: "text"
  value: " matches \"Sprat\" only if it is preceded by \"Jack\". "
  type: "inlineCode"
  value: "/(?<=Jack|Tom)Sprat/"
  type: "text"
  value: " matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results."
```
##### tr (227:3) => tableRow
```
type: "html"
value: "<td><p><strong>Lookbehind assertion: </strong>Matches \"x\" only if \"x\" is preceded by \"y\". For example, <code>/(?&#x3C;=Jack)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results.</p></td>"
```
##### td (235:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Negative lookbehind assertion:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" only if \"x\" is not preceded by \"y\". For example, "
  type: "inlineCode"
  value: "/(?<!-)\\d+/"
  type: "text"
  value: " matches a number only if it is not preceded by a minus sign. "
  type: "inlineCode"
  value: "/(?<!-)\\d+/.exec('3')"
  type: "text"
  value: " matches \"3\". "
  type: "inlineCode"
  value: "/(?<!-)\\d+/.exec('-3')"
  type: "text"
  value: "  match is not found because the number is preceded by the minus sign."
```
##### tr (233:3) => tableRow
```
type: "html"
value: "<td><p><strong>Negative lookbehind assertion: </strong>Matches \"x\" only if \"x\" is not preceded by \"y\". For example, <code>/(?&#x3C;!-)\\d+/</code> matches a number only if it is not preceded by a minus sign. <code>/(?&#x3C;!-)\\d+/.exec('3')</code> matches \"3\". <code>/(?&#x3C;!-)\\d+/.exec('-3')</code>  match is not found because the number is preceded by the minus sign.</p></td>"
```
##### table.standard-table (206:1) => table
```
type: "html"
value: "<tr><td><code>x(?=y)</code></td><td><p><strong>Lookahead assertion: </strong>Matches \"x\" only if \"x\" is followed by \"y\". For example, /<code>Jack(?=Sprat)/</code> matches \"Jack\" only if it is followed by \"Sprat\".<br><code>/Jack(?=Sprat|Frost)/</code> matches \"Jack\" only if it is followed by \"Sprat\" or \"Frost\". However, neither \"Sprat\" nor \"Frost\" is part of the match results.</p></td></tr>",type: "html"
value: "<tr><td><code>x(?!y)</code></td><td><p><strong>Negative lookahead assertion: </strong>Matches \"x\" only if \"x\" is not followed by \"y\". For example, <code>/\\d+(?!\\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\\d+(?!\\.)/.exec('3.141')</code> matches \"141\" but not \"3\".</p></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;=y)x</code></td><td><p><strong>Lookbehind assertion: </strong>Matches \"x\" only if \"x\" is preceded by \"y\". For example, <code>/(?&#x3C;=Jack)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> matches \"Sprat\" only if it is preceded by \"Jack\" or \"Tom\". However, neither \"Jack\" nor \"Tom\" is part of the match results.</p></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;!y)x</code></td><td><p><strong>Negative lookbehind assertion: </strong>Matches \"x\" only if \"x\" is not preceded by \"y\". For example, <code>/(?&#x3C;!-)\\d+/</code> matches a number only if it is not preceded by a minus sign. <code>/(?&#x3C;!-)\\d+/.exec('3')</code> matches \"3\". <code>/(?&#x3C;!-)\\d+/.exec('-3')</code>  match is not found because the number is preceded by the minus sign.</p></td></tr>"
```
##### td (255:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches either \"x\" or \"y\". For example, "
  type: "inlineCode"
  value: "/green|red/"
  type: "text"
  value: " matches \"green\" in \"green apple\" and \"red\" in \"red apple\"."
```
##### tr (253:3) => tableRow
```
type: "html"
value: "<td><p>Matches either \"x\" or \"y\". For example, <code>/green|red/</code> matches \"green\" in \"green apple\" and \"red\" in \"red apple\".</p></td>"
```
##### td (262:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[abcd]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[a-d]"
  type: "text"
  value: ". They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[abcd-]"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "[-abcd]"
  type: "text"
  value: " match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[\\w-]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[A-Za-z0-9_-]"
  type: "text"
  value: ". They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\"."
```
##### tr (259:3) => tableRow
```
type: "html"
value: "<td><p>A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.</p><p>For example, <code>[abcd]</code> is the same as <code>[a-d]</code>. They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".</p><p>For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".</p><p>For example, <code>[\\w-]</code> is the same as <code>[A-Za-z0-9_-]</code>. They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\".</p></td>"
```
##### td (273:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "inlineCode"
  value: "[^xyz] [^a-c]"
```
##### td (277:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, "
  type: "inlineCode"
  value: "[^abc]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[^a-c]"
  type: "text"
  value: ". They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " The ^ character may also indicate the "
    type: "link"
    title: 

    url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
    children: 
      type: "text"
      value: "beginning of input"
    type: "text"
    value: "."
```
##### tr (272:3) => tableRow
```
type: "html"
value: "<td><p><code>[^xyz]<br>[^a-c]</code></p></td>",type: "html"
value: "<td><p>A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, <code>[^abc]</code> is the same as <code>[^a-c]</code>. They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".</p><div class=\"notecard note\"><p><strong>Note:</strong> The ^ character may also indicate the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">beginning of input</a>.</p></div></td>"
```
##### td (287:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Capturing group:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches "
  type: "inlineCode"
  value: "x"
  type: "text"
  value: " and remembers the match. For example, "
  type: "inlineCode"
  value: "/(foo)/"
  type: "text"
  value: " matches and remembers \"foo\" in \"foo bar\". ",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements ("
  type: "inlineCode"
  value: "[1], ..., [n]"
  type: "text"
  value: ") or from the predefined "
  type: "inlineCode"
  value: "RegExp"
  type: "text"
  value: " object's properties ("
  type: "inlineCode"
  value: "$1, ..., $9"
  type: "text"
  value: ").",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
  children: 
    type: "inlineCode"
    value: "String.match()"
  type: "text"
  value: " won't return groups if the "
  type: "inlineCode"
  value: "/.../g"
  type: "text"
  value: " flag is set. However, you can still use "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
  children: 
    type: "inlineCode"
    value: "String.matchAll()"
  type: "text"
  value: " to get all matches."
```
##### tr (285:3) => tableRow
```
type: "html"
value: "<td><p><strong>Capturing group: </strong>Matches <code><em>x</em></code> and remembers the match. For example, <code>/(foo)/</code> matches and remembers \"foo\" in \"foo bar\". </p><p>A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</p><p>Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).</p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match\">String.match()</a></code> won't return groups if the <code>/.../g</code> flag is set. However, you can still use <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll\">String.matchAll()</a></code> to get all matches.</p></td>"
```
##### td (299:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, "
  type: "inlineCode"
  value: "/apple(,)\\sorange\\1/"
  type: "text"
  value: " matches \"apple, orange,\" in \"apple, orange, cherry, peach\"."
```
##### tr (297:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, <code>/apple(,)\\sorange\\1/</code> matches \"apple, orange,\" in \"apple, orange, cherry, peach\".</p></td>"
```
##### td (305:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "A back reference to the last substring matching the "
  type: "strong"
  children: 
    type: "text"
    value: "Named capture group"
  type: "text"
  value: " "
  type: "text"
  value: "specified by "
  type: "inlineCode"
  value: "<Name>"
  type: "text"
  value: ".",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "/(?<title>\\w+), yes \\k<title>/"
  type: "text"
  value: " matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " "
    type: "inlineCode"
    value: "\\k"
    type: "text"
    value: " is used literally here to indicate the beginning of a back reference to a Named capture group."
```
##### tr (303:3) => tableRow
```
type: "html"
value: "<td><p>A back reference to the last substring matching the <strong>Named capture group </strong>specified by <code>&#x3C;Name></code>.</p><p>For example, <code>/(?&#x3C;title>\\w+), yes \\k&#x3C;title>/</code> matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".</p><div class=\"notecard note\"><p><strong>Note:</strong> <code>\\k</code> is used literally here to indicate the beginning of a back reference to a Named capture group.</p></div></td>"
```
##### td (317:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 7
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Named capturing group:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" and stores it on the groups property of the returned matches under the name specified by "
  type: "inlineCode"
  value: "<Name>"
  type: "text"
  value: ". The angle brackets ("
  type: "inlineCode"
  value: "<"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: ">"
  type: "text"
  value: ") are required for group name.",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "For example, to extract the United States area code from a phone number, we could use "
  type: "inlineCode"
  value: "/\\((?<area>\\d\\d\\d)\\)/"
  type: "text"
  value: ". The resulting number would appear under "
  type: "inlineCode"
  value: "matches.groups.area"
  type: "text"
  value: "."
```
##### tr (315:3) => tableRow
```
type: "html"
value: "<td><p><strong>Named capturing group: </strong>Matches \"x\" and stores it on the groups property of the returned matches under the name specified by <code>&#x3C;Name></code>. The angle brackets (<code>&#x3C;</code> and <code>></code>) are required for group name.</p><p>For example, to extract the United States area code from a phone number, we could use <code>/\\((?&#x3C;area>\\d\\d\\d)\\)/</code>. The resulting number would appear under <code>matches.groups.area</code>.</p></td>"
```
##### table.standard-table (245:1) => table
```
type: "html"
value: "<tr><td><code><em>x</em>|<em>y</em></code></td><td><p>Matches either \"x\" or \"y\". For example, <code>/green|red/</code> matches \"green\" in \"green apple\" and \"red\" in \"red apple\".</p></td></tr>",type: "html"
value: "<tr><td><code>[xyz]<br>[a-c]</code></td><td><p>A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.</p><p>For example, <code>[abcd]</code> is the same as <code>[a-d]</code>. They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".</p><p>For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".</p><p>For example, <code>[\\w-]</code> is the same as <code>[A-Za-z0-9_-]</code>. They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\".</p></td></tr>",type: "html"
value: "<tr><td><p><code>[^xyz]<br>[^a-c]</code></p></td><td><p>A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, <code>[^abc]</code> is the same as <code>[^a-c]</code>. They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".</p><div class=\"notecard note\"><p><strong>Note:</strong> The ^ character may also indicate the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">beginning of input</a>.</p></div></td></tr>",type: "html"
value: "<tr><td><code>(<em>x</em>)</code></td><td><p><strong>Capturing group: </strong>Matches <code><em>x</em></code> and remembers the match. For example, <code>/(foo)/</code> matches and remembers \"foo\" in \"foo bar\". </p><p>A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</p><p>Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).</p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match\">String.match()</a></code> won't return groups if the <code>/.../g</code> flag is set. However, you can still use <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll\">String.matchAll()</a></code> to get all matches.</p></td></tr>",type: "html"
value: "<tr><td><code>\\<em>n</em></code></td><td><p>Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, <code>/apple(,)\\sorange\\1/</code> matches \"apple, orange,\" in \"apple, orange, cherry, peach\".</p></td></tr>",type: "html"
value: "<tr><td>\\k&#x3C;Name></td><td><p>A back reference to the last substring matching the <strong>Named capture group </strong>specified by <code>&#x3C;Name></code>.</p><p>For example, <code>/(?&#x3C;title>\\w+), yes \\k&#x3C;title>/</code> matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".</p><div class=\"notecard note\"><p><strong>Note:</strong> <code>\\k</code> is used literally here to indicate the beginning of a back reference to a Named capture group.</p></div></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;Name>x)</code></td><td><p><strong>Named capturing group: </strong>Matches \"x\" and stores it on the groups property of the returned matches under the name specified by <code>&#x3C;Name></code>. The angle brackets (<code>&#x3C;</code> and <code>></code>) are required for group name.</p><p>For example, to extract the United States area code from a phone number, we could use <code>/\\((?&#x3C;area>\\d\\d\\d)\\)/</code>. The resulting number would appear under <code>matches.groups.area</code>.</p></td></tr>"
```
##### td (347:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 0 or more times. For example, "
  type: "inlineCode"
  value: "/bo*/"
  type: "text"
  value: " matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\"."
```
##### tr (345:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 0 or more times. For example, <code>/bo*/</code> matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\".</p></td>"
```
##### td (353:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 1 or more times. Equivalent to "
  type: "inlineCode"
  value: "{1,}"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/a+/"
  type: "text"
  value: " matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\"."
```
##### tr (351:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 1 or more times. Equivalent to <code>{1,}</code>. For example, <code>/a+/</code> matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\".</p></td>"
```
##### td (359:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 0 or 1 times. For example, "
  type: "inlineCode"
  value: "/e?le?/"
  type: "text"
  value: " matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"",type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "If used immediately after any of the quantifiers "
  type: "inlineCode"
  value: "*"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "+"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "?"
  type: "text"
  value: ", or "
  type: "inlineCode"
  value: "{}"
  type: "text"
  value: ", makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times)."
```
##### tr (357:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 0 or 1 times. For example, <code>/e?le?/</code> matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"</p><p>If used immediately after any of the quantifiers <code>*</code>, <code>+</code>, <code>?</code>, or <code>{}</code>, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).</p></td>"
```
##### td (367:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{2}/"
  type: "text"
  value: " doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\"."
```
##### tr (365:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2}/</code> doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\".</p></td>"
```
##### td (373:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{2,}/"
  type: "text"
  value: " doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\"."
```
##### tr (371:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2,}/</code> doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\".</p></td>"
```
##### td (379:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and "
  type: "inlineCode"
  value: "m > n"
  type: "text"
  value: ", matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{1,3}/"
  type: "text"
  value: " matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it."
```
##### tr (377:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and <code><em>m</em> > <em>n</em></code>, matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, <code>/a{1,3}/</code> matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it.</p></td>"
```
##### td (384:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 7
shouldWrap: true
children: 
  type: "inlineCode"
  value: "x*?"
  type: "break"
  type: "inlineCode"
  value: "x+?"
  type: "break"
  type: "inlineCode"
  value: "x??"
  type: "break"
  type: "inlineCode"
  value: "x{n}?"
  type: "break"
  type: "inlineCode"
  value: "x{n,}?"
  type: "break"
  type: "inlineCode"
  value: "x{n,m}?"
```
##### td (392:4) => tableCell
```
type: "paragraph"
summary: "This page provides an overall cheat sheet of all the capabilities of RegExp syntax by aggregating the content of the articles in the RegExp guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to the guide."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "By default quantifiers like "
  type: "inlineCode"
  value: "*"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "+"
  type: "text"
  value: " are \"greedy\", meaning that they try to match as much of the string as possible. The "
  type: "inlineCode"
  value: "?"
  type: "text"
  value: " character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some <foo> <bar> new </bar> </foo> thing\":",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/<.*>/"
      type: "text"
      value: " will match \"<foo> <bar> new </bar> </foo>\""
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/<.*?>/"
      type: "text"
      value: " will match \"<foo>\""
```
##### tr (383:3) => tableRow
```
type: "html"
value: "<td><p><code><em>x</em>*?</code><br><code><em>x</em>+?</code><br><code><em>x</em>??</code><br><code><em>x</em>{n}?</code><br><code><em>x</em>{n,}?</code><br><code><em>x</em>{n,m}?</code></p></td>",type: "html"
value: "<td><p>By default quantifiers like <code>*</code> and <code>+</code> are \"greedy\", meaning that they try to match as much of the string as possible. The <code>?</code> character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing\":</p><ul><li><code>/&#x3C;.*>/</code> will match \"&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>\"</li><li><code>/&#x3C;.*?>/</code> will match \"&#x3C;foo>\"</li></ul></td>"
```
##### table.standard-table (337:1) => table
```
type: "html"
value: "<tr><td><code><em>x</em>*</code></td><td><p>Matches the preceding item \"x\" 0 or more times. For example, <code>/bo*/</code> matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>+</code></td><td><p>Matches the preceding item \"x\" 1 or more times. Equivalent to <code>{1,}</code>. For example, <code>/a+/</code> matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>?</code></td><td><p>Matches the preceding item \"x\" 0 or 1 times. For example, <code>/e?le?/</code> matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"</p><p>If used immediately after any of the quantifiers <code>*</code>, <code>+</code>, <code>?</code>, or <code>{}</code>, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>}</code></td><td><p>Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2}/</code> doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>,}</code></td><td><p>Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2,}/</code> doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td><td><p>Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and <code><em>m</em> > <em>n</em></code>, matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, <code>/a{1,3}/</code> matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it.</p></td></tr>",type: "html"
value: "<tr><td><p><code><em>x</em>*?</code><br><code><em>x</em>+?</code><br><code><em>x</em>??</code><br><code><em>x</em>{n}?</code><br><code><em>x</em>{n,}?</code><br><code><em>x</em>{n,m}?</code></p></td><td><p>By default quantifiers like <code>*</code> and <code>+</code> are \"greedy\", meaning that they try to match as much of the string as possible. The <code>?</code> character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing\":</p><ul><li><code>/&#x3C;.*>/</code> will match \"&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>\"</li><li><code>/&#x3C;.*?>/</code> will match \"&#x3C;foo>\"</li></ul></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
#### Invalid AST transformations
##### td (33:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches either \"x\" or \"y\". For example, "
  type: "inlineCode"
  value: "/green|red/"
  type: "text"
  value: " matches \"green\" in \"green apple\" and \"red\" in \"red apple\"."
```
##### tr (31:3) => tableRow
```
type: "html"
value: "<td><p>Matches either \"x\" or \"y\". For example, <code>/green|red/</code> matches \"green\" in \"green apple\" and \"red\" in \"red apple\".</p></td>"
```
##### td (40:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[abcd]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[a-d]"
  type: "text"
  value: ". They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[abcd-]"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "[-abcd]"
  type: "text"
  value: " match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "[\\w-]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[A-Za-z0-9_-]"
  type: "text"
  value: ". They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\"."
```
##### tr (37:3) => tableRow
```
type: "html"
value: "<td><p>A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.</p><p>For example, <code>[abcd]</code> is the same as <code>[a-d]</code>. They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".</p><p>For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".</p><p>For example, <code>[\\w-]</code> is the same as <code>[A-Za-z0-9_-]</code>. They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\".</p></td>"
```
##### td (51:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 3
shouldWrap: true
children: 
  type: "inlineCode"
  value: "[^xyz] [^a-c]"
```
##### td (55:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, "
  type: "inlineCode"
  value: "[^abc]"
  type: "text"
  value: " is the same as "
  type: "inlineCode"
  value: "[^a-c]"
  type: "text"
  value: ". They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " The ^ character may also indicate the "
    type: "link"
    title: 

    url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
    children: 
      type: "text"
      value: "beginning of input"
    type: "text"
    value: "."
```
##### tr (50:3) => tableRow
```
type: "html"
value: "<td><p><code>[^xyz]<br>[^a-c]</code></p></td>",type: "html"
value: "<td><p>A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, <code>[^abc]</code> is the same as <code>[^a-c]</code>. They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".</p><div class=\"notecard note\"><p><strong>Note:</strong> The ^ character may also indicate the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">beginning of input</a>.</p></div></td>"
```
##### td (65:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 4
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Capturing group:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches "
  type: "inlineCode"
  value: "x"
  type: "text"
  value: " and remembers the match. For example, "
  type: "inlineCode"
  value: "/(foo)/"
  type: "text"
  value: " matches and remembers \"foo\" in \"foo bar\". ",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements ("
  type: "inlineCode"
  value: "[1], ..., [n]"
  type: "text"
  value: ") or from the predefined "
  type: "inlineCode"
  value: "RegExp"
  type: "text"
  value: " object's properties ("
  type: "inlineCode"
  value: "$1, ..., $9"
  type: "text"
  value: ").",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 4
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
  children: 
    type: "inlineCode"
    value: "String.match()"
  type: "text"
  value: " won't return groups if the "
  type: "inlineCode"
  value: "/.../g"
  type: "text"
  value: " flag is set. However, you can still use "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
  children: 
    type: "inlineCode"
    value: "String.matchAll()"
  type: "text"
  value: " to get all matches."
```
##### tr (63:3) => tableRow
```
type: "html"
value: "<td><p><strong>Capturing group: </strong>Matches <code><em>x</em></code> and remembers the match. For example, <code>/(foo)/</code> matches and remembers \"foo\" in \"foo bar\". </p><p>A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</p><p>Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).</p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match\">String.match()</a></code> won't return groups if the <code>/.../g</code> flag is set. However, you can still use <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll\">String.matchAll()</a></code> to get all matches.</p></td>"
```
##### td (77:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, "
  type: "inlineCode"
  value: "/apple(,)\\sorange\\1/"
  type: "text"
  value: " matches \"apple, orange,\" in \"apple, orange, cherry, peach\"."
```
##### tr (75:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, <code>/apple(,)\\sorange\\1/</code> matches \"apple, orange,\" in \"apple, orange, cherry, peach\".</p></td>"
```
##### td (83:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "A back reference to the last substring matching the "
  type: "strong"
  children: 
    type: "text"
    value: "Named capture group"
  type: "text"
  value: " specified by "
  type: "inlineCode"
  value: "<Name>"
  type: "text"
  value: ".",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "For example, "
  type: "inlineCode"
  value: "/(?<title>\\w+), yes \\k<title>/"
  type: "text"
  value: " matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " "
    type: "inlineCode"
    value: "\\k"
    type: "text"
    value: " is used literally here to indicate the beginning of a back reference to a Named capture group."
```
##### tr (81:3) => tableRow
```
type: "html"
value: "<td><p>A back reference to the last substring matching the <strong>Named capture group</strong> specified by <code>&#x3C;Name></code>.</p><p>For example, <code>/(?&#x3C;title>\\w+), yes \\k&#x3C;title>/</code> matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".</p><div class=\"notecard note\"><p><strong>Note:</strong> <code>\\k</code> is used literally here to indicate the beginning of a back reference to a Named capture group.</p></div></td>"
```
##### td (95:4) => tableCell
```
type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 7
shouldWrap: true
children: 
  type: "strong"
  children: 
    type: "text"
    value: "Named capturing group:"
  type: "text"
  value: " "
  type: "text"
  value: "Matches \"x\" and stores it on the groups property of the returned matches under the name specified by "
  type: "inlineCode"
  value: "<Name>"
  type: "text"
  value: ". The angle brackets ("
  type: "inlineCode"
  value: "<"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: ">"
  type: "text"
  value: ") are required for group name.",type: "paragraph"
summary: "Groups and ranges indicate groups and ranges of expression characters."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "For example, to extract the United States area code from a phone number, we could use "
  type: "inlineCode"
  value: "/\\((?<area>\\d\\d\\d)\\)/"
  type: "text"
  value: ". The resulting number would appear under "
  type: "inlineCode"
  value: "matches.groups.area"
  type: "text"
  value: "."
```
##### tr (93:3) => tableRow
```
type: "html"
value: "<td><p><strong>Named capturing group: </strong>Matches \"x\" and stores it on the groups property of the returned matches under the name specified by <code>&#x3C;Name></code>. The angle brackets (<code>&#x3C;</code> and <code>></code>) are required for group name.</p><p>For example, to extract the United States area code from a phone number, we could use <code>/\\((?&#x3C;area>\\d\\d\\d)\\)/</code>. The resulting number would appear under <code>matches.groups.area</code>.</p></td>"
```
##### table.standard-table (23:1) => table
```
type: "html"
value: "<tr><td><code><em>x</em>|<em>y</em></code></td><td><p>Matches either \"x\" or \"y\". For example, <code>/green|red/</code> matches \"green\" in \"green apple\" and \"red\" in \"red apple\".</p></td></tr>",type: "html"
value: "<tr><td><code>[xyz]<br>[a-c]</code></td><td><p>A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.</p><p>For example, <code>[abcd]</code> is the same as <code>[a-d]</code>. They match the \"b\" in \"brisket\", and the \"c\" in \"chop\".</p><p>For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"-\" (hyphen) in \"non-profit\".</p><p>For example, <code>[\\w-]</code> is the same as <code>[A-Za-z0-9_-]</code>. They both match the \"b\" in \"brisket\", the \"c\" in \"chop\", and the \"n\" in \"non-profit\".</p></td></tr>",type: "html"
value: "<tr><td><p><code>[^xyz]<br>[^a-c]</code></p></td><td><p>A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, <code>[^abc]</code> is the same as <code>[^a-c]</code>. They initially match \"o\" in \"bacon\" and \"h\" in \"chop\".</p><div class=\"notecard note\"><p><strong>Note:</strong> The ^ character may also indicate the <a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">beginning of input</a>.</p></div></td></tr>",type: "html"
value: "<tr><td><code>(<em>x</em>)</code></td><td><p><strong>Capturing group: </strong>Matches <code><em>x</em></code> and remembers the match. For example, <code>/(foo)/</code> matches and remembers \"foo\" in \"foo bar\". </p><p>A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</p><p>Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).</p><p><code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match\">String.match()</a></code> won't return groups if the <code>/.../g</code> flag is set. However, you can still use <code><a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll\">String.matchAll()</a></code> to get all matches.</p></td></tr>",type: "html"
value: "<tr><td><code>\\<em>n</em></code></td><td><p>Where \"n\" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, <code>/apple(,)\\sorange\\1/</code> matches \"apple, orange,\" in \"apple, orange, cherry, peach\".</p></td></tr>",type: "html"
value: "<tr><td><code>\\k&#x3C;Name></code></td><td><p>A back reference to the last substring matching the <strong>Named capture group</strong> specified by <code>&#x3C;Name></code>.</p><p>For example, <code>/(?&#x3C;title>\\w+), yes \\k&#x3C;title>/</code> matches \"Sir, yes Sir\" in \"Do you copy? Sir, yes Sir!\".</p><div class=\"notecard note\"><p><strong>Note:</strong> <code>\\k</code> is used literally here to indicate the beginning of a back reference to a Named capture group.</p></div></td></tr>",type: "html"
value: "<tr><td><code>(?&#x3C;Name>x)</code></td><td><p><strong>Named capturing group: </strong>Matches \"x\" and stores it on the groups property of the returned matches under the name specified by <code>&#x3C;Name></code>. The angle brackets (<code>&#x3C;</code> and <code>></code>) are required for group name.</p><p>For example, to extract the United States area code from a phone number, we could use <code>/\\((?&#x3C;area>\\d\\d\\d)\\)/</code>. The resulting number would appear under <code>matches.groups.area</code>.</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
#### Invalid AST transformations
##### td (85:4) => tableCell
```
type: "paragraph"
summary: "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the {{anN4cmVmKCJSZWdFeHAuZXhlYyIsICJleGVjKCkiKQ==}} and {{anN4cmVmKCJSZWdFeHAudGVzdCIsICJ0ZXN0KCkiKQ==}} methods of {{anN4cmVmKCJSZWdFeHAiKQ==}}, and with the {{anN4cmVmKCJTdHJpbmcubWF0Y2giLCAibWF0Y2goKSIp}}, {{anN4cmVmKCJTdHJpbmcubWF0Y2hBbGwiLCAibWF0Y2hBbGwoKSIp}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZSIsICJyZXBsYWNlKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZUFsbCIsICJyZXBsYWNlQWxsKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcuc2VhcmNoIiwgInNlYXJjaCgpIik=}}, and {{anN4cmVmKCJTdHJpbmcuc3BsaXQiLCAic3BsaXQoKSIp}} methods of {{anN4cmVmKCJTdHJpbmciKQ==}}. This chapter describes JavaScript regular expressions."
rowIndex: 1
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
  children: 
    type: "text"
    value: "Character classes"
```
##### tr (83:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character classes</a></p></td>"
```
##### td (91:4) => tableCell
```
type: "paragraph"
summary: "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the {{anN4cmVmKCJSZWdFeHAuZXhlYyIsICJleGVjKCkiKQ==}} and {{anN4cmVmKCJSZWdFeHAudGVzdCIsICJ0ZXN0KCkiKQ==}} methods of {{anN4cmVmKCJSZWdFeHAiKQ==}}, and with the {{anN4cmVmKCJTdHJpbmcubWF0Y2giLCAibWF0Y2goKSIp}}, {{anN4cmVmKCJTdHJpbmcubWF0Y2hBbGwiLCAibWF0Y2hBbGwoKSIp}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZSIsICJyZXBsYWNlKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZUFsbCIsICJyZXBsYWNlQWxsKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcuc2VhcmNoIiwgInNlYXJjaCgpIik=}}, and {{anN4cmVmKCJTdHJpbmcuc3BsaXQiLCAic3BsaXQoKSIp}} methods of {{anN4cmVmKCJTdHJpbmciKQ==}}. This chapter describes JavaScript regular expressions."
rowIndex: 2
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
  children: 
    type: "text"
    value: "Assertions"
```
##### tr (89:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">Assertions</a></p></td>"
```
##### td (97:4) => tableCell
```
type: "paragraph"
summary: "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the {{anN4cmVmKCJSZWdFeHAuZXhlYyIsICJleGVjKCkiKQ==}} and {{anN4cmVmKCJSZWdFeHAudGVzdCIsICJ0ZXN0KCkiKQ==}} methods of {{anN4cmVmKCJSZWdFeHAiKQ==}}, and with the {{anN4cmVmKCJTdHJpbmcubWF0Y2giLCAibWF0Y2goKSIp}}, {{anN4cmVmKCJTdHJpbmcubWF0Y2hBbGwiLCAibWF0Y2hBbGwoKSIp}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZSIsICJyZXBsYWNlKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZUFsbCIsICJyZXBsYWNlQWxsKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcuc2VhcmNoIiwgInNlYXJjaCgpIik=}}, and {{anN4cmVmKCJTdHJpbmcuc3BsaXQiLCAic3BsaXQoKSIp}} methods of {{anN4cmVmKCJTdHJpbmciKQ==}}. This chapter describes JavaScript regular expressions."
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
  children: 
    type: "text"
    value: "Groups and ranges"
```
##### tr (95:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">Groups and ranges</a></p></td>"
```
##### td (103:4) => tableCell
```
type: "paragraph"
summary: "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the {{anN4cmVmKCJSZWdFeHAuZXhlYyIsICJleGVjKCkiKQ==}} and {{anN4cmVmKCJSZWdFeHAudGVzdCIsICJ0ZXN0KCkiKQ==}} methods of {{anN4cmVmKCJSZWdFeHAiKQ==}}, and with the {{anN4cmVmKCJTdHJpbmcubWF0Y2giLCAibWF0Y2goKSIp}}, {{anN4cmVmKCJTdHJpbmcubWF0Y2hBbGwiLCAibWF0Y2hBbGwoKSIp}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZSIsICJyZXBsYWNlKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcucmVwbGFjZUFsbCIsICJyZXBsYWNlQWxsKCkiKQ==}}, {{anN4cmVmKCJTdHJpbmcuc2VhcmNoIiwgInNlYXJjaCgpIik=}}, and {{anN4cmVmKCJTdHJpbmcuc3BsaXQiLCAic3BsaXQoKSIp}} methods of {{anN4cmVmKCJTdHJpbmciKQ==}}. This chapter describes JavaScript regular expressions."
rowIndex: 4
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
  children: 
    type: "text"
    value: "Quantifiers"
```
##### tr (101:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers\">Quantifiers</a></p></td>"
```
##### table.standard-table (74:1) => table
```
type: "html"
value: "<tr><td><code>\\</code>, <code>.</code>, <code>\\cX</code>, <code>\\d</code>, <code>\\D</code>, <code>\\f</code>, <code>\\n</code>, <code>\\r</code>, <code>\\s</code>, <code>\\S</code>, <code>\\t</code>, <code>\\v</code>, <code>\\w</code>, <code>\\W</code>, <code>\\0</code>, <code>\\xhh</code>, <code>\\uhhhh</code>, <code>\\uhhhhh</code>, <code>[\\b]</code></td><td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes\">Character classes</a></p></td></tr>",type: "html"
value: "<tr><td><code>^</code>, <code>$</code>, <code>x(?=y)</code>, <code>x(?!y)</code>, <code>(?&#x3C;=y)x</code>, <code>(?&#x3C;!y)x</code>, <code>\\b</code>, <code>\\B</code></td><td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions\">Assertions</a></p></td></tr>",type: "html"
value: "<tr><td><code>(x)</code>, <code>(?:x)</code>, <code>(?&#x3C;Name>x)</code>, <code>x|y</code>, <code>[xyz]</code>, <code>[^xyz]</code>, <code>\\<em>Number</em></code></td><td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges\">Groups and ranges</a></p></td></tr>",type: "html"
value: "<tr><td><code>*</code>, <code>+</code>, <code>?</code>, <code>x{<em>n</em>}</code>, <code>x{<em>n</em>,}</code>, <code>x{<em>n</em>,<em>m</em>}</code></td><td><p><a href=\"/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers\">Quantifiers</a></p></td></tr>"
```
##### tr (228:3) => tableRow
```
type: "html"
value: "<td rowspan=\"4\"><code>myArray</code></td>"
```
##### tr (249:3) => tableRow
```
type: "html"
value: "<td rowspan=\"2\"><code>myRe</code></td>"
```
##### table.standard-table (217:1) => table
```
type: "html"
value: "<tr><td rowspan=\"4\"><code>myArray</code></td><td></td><td>The matched string and all remembered substrings.</td><td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td></tr>",type: "html"
value: "<tr><td rowspan=\"2\"><code>myRe</code></td><td><code>lastIndex</code></td><td>The index at which to start the next match. (This property is set only if the regular expression uses the g option, described in <a href=\"#advanced_searching_with_flags\">Advanced Searching With Flags</a>.)</td><td><code>5</code></td></tr>"
```
### Missing conversion rules
- td[rowSpan="4"] (229:4)
- td[rowSpan="2"] (250:4)
- kbd (405:65)
### [/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
#### Invalid AST transformations
##### td (36:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 0 or more times. For example, "
  type: "inlineCode"
  value: "/bo*/"
  type: "text"
  value: " matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\"."
```
##### tr (34:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 0 or more times. For example, <code>/bo*/</code> matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\".</p></td>"
```
##### td (42:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 1 or more times. Equivalent to "
  type: "inlineCode"
  value: "{1,}"
  type: "text"
  value: ". For example, "
  type: "inlineCode"
  value: "/a+/"
  type: "text"
  value: " matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\"."
```
##### tr (40:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 1 or more times. Equivalent to <code>{1,}</code>. For example, <code>/a+/</code> matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\".</p></td>"
```
##### td (48:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Matches the preceding item \"x\" 0 or 1 times. For example, "
  type: "inlineCode"
  value: "/e?le?/"
  type: "text"
  value: " matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"",type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "If used immediately after any of the quantifiers "
  type: "inlineCode"
  value: "*"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "+"
  type: "text"
  value: ", "
  type: "inlineCode"
  value: "?"
  type: "text"
  value: ", or "
  type: "inlineCode"
  value: "{}"
  type: "text"
  value: ", makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times)."
```
##### tr (46:3) => tableRow
```
type: "html"
value: "<td><p>Matches the preceding item \"x\" 0 or 1 times. For example, <code>/e?le?/</code> matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"</p><p>If used immediately after any of the quantifiers <code>*</code>, <code>+</code>, <code>?</code>, or <code>{}</code>, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).</p></td>"
```
##### td (56:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{2}/"
  type: "text"
  value: " doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\"."
```
##### tr (54:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2}/</code> doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\".</p></td>"
```
##### td (62:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 5
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{2,}/"
  type: "text"
  value: " doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\"."
```
##### tr (60:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2,}/</code> doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\".</p></td>"
```
##### td (68:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and "
  type: "inlineCode"
  value: "m > n"
  type: "text"
  value: ", matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, "
  type: "inlineCode"
  value: "/a{1,3}/"
  type: "text"
  value: " matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it."
```
##### tr (66:3) => tableRow
```
type: "html"
value: "<td><p>Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and <code><em>m</em> > <em>n</em></code>, matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, <code>/a{1,3}/</code> matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it.</p></td>"
```
##### td (73:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 7
shouldWrap: true
children: 
  type: "inlineCode"
  value: "x*?"
  type: "break"
  type: "inlineCode"
  value: "x+?"
  type: "break"
  type: "inlineCode"
  value: "x??"
  type: "break"
  type: "inlineCode"
  value: "x{n}?"
  type: "break"
  type: "inlineCode"
  value: "x{n,}?"
  type: "break"
  type: "inlineCode"
  value: "x{n,m}?"
```
##### td (81:4) => tableCell
```
type: "paragraph"
summary: "Quantifiers indicate numbers of characters or expressions to match."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "By default quantifiers like "
  type: "inlineCode"
  value: "*"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "+"
  type: "text"
  value: " are \"greedy\", meaning that they try to match as much of the string as possible. The "
  type: "inlineCode"
  value: "?"
  type: "text"
  value: " character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some <foo> <bar> new </bar> </foo> thing\":",type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/<.*>/"
      type: "text"
      value: " will match \"<foo> <bar> new </bar> </foo>\""
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "/<.*?>/"
      type: "text"
      value: " will match \"<foo>\""
```
##### tr (72:3) => tableRow
```
type: "html"
value: "<td><p><code><em>x</em>*?</code><br><code><em>x</em>+?</code><br><code><em>x</em>??</code><br><code><em>x</em>{n}?</code><br><code><em>x</em>{n,}?</code><br><code><em>x</em>{n,m}?</code></p></td>",type: "html"
value: "<td><p>By default quantifiers like <code>*</code> and <code>+</code> are \"greedy\", meaning that they try to match as much of the string as possible. The <code>?</code> character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing\":</p><ul><li><code>/&#x3C;.*>/</code> will match \"&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>\"</li><li><code>/&#x3C;.*?>/</code> will match \"&#x3C;foo>\"</li></ul></td>"
```
##### table.standard-table (26:1) => table
```
type: "html"
value: "<tr><td><code><em>x</em>*</code></td><td><p>Matches the preceding item \"x\" 0 or more times. For example, <code>/bo*/</code> matches \"boooo\" in \"A ghost booooed\" and \"b\" in \"A bird warbled\", but nothing in \"A goat grunted\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>+</code></td><td><p>Matches the preceding item \"x\" 1 or more times. Equivalent to <code>{1,}</code>. For example, <code>/a+/</code> matches the \"a\" in \"candy\" and all the \"a\"'s in \"caaaaaaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>?</code></td><td><p>Matches the preceding item \"x\" 0 or 1 times. For example, <code>/e?le?/</code> matches the \"el\" in \"angel\" and the \"le\" in \"angle.\"</p><p>If used immediately after any of the quantifiers <code>*</code>, <code>+</code>, <code>?</code>, or <code>{}</code>, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>}</code></td><td><p>Where \"n\" is a positive integer, matches exactly \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2}/</code> doesn't match the \"a\" in \"candy\", but it matches all of the \"a\"'s in \"caandy\", and the first two \"a\"'s in \"caaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>,}</code></td><td><p>Where \"n\" is a positive integer, matches at least \"n\" occurrences of the preceding item \"x\". For example, <code>/a{2,}/</code> doesn't match the \"a\" in \"candy\", but matches all of the a's in \"caandy\" and in \"caaaaaaandy\".</p></td></tr>",type: "html"
value: "<tr><td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td><td><p>Where \"n\" is 0 or a positive integer, \"m\" is a positive integer, and <code><em>m</em> > <em>n</em></code>, matches at least \"n\" and at most \"m\" occurrences of the preceding item \"x\". For example, <code>/a{1,3}/</code> matches nothing in \"cndy\", the \"a\" in \"candy\", the two \"a\"'s in \"caandy\", and the first three \"a\"'s in \"caaaaaaandy\". Notice that when matching \"caaaaaaandy\", the match is \"aaa\", even though the original string had more \"a\"s in it.</p></td></tr>",type: "html"
value: "<tr><td><p><code><em>x</em>*?</code><br><code><em>x</em>+?</code><br><code><em>x</em>??</code><br><code><em>x</em>{n}?</code><br><code><em>x</em>{n,}?</code><br><code><em>x</em>{n,m}?</code></p></td><td><p>By default quantifiers like <code>*</code> and <code>+</code> are \"greedy\", meaning that they try to match as much of the string as possible. The <code>?</code> character after the quantifier makes the quantifier \"non-greedy\": meaning that it will stop as soon as it finds a match. For example, given a string like \"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing\":</p><ul><li><code>/&#x3C;.*>/</code> will match \"&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>\"</li><li><code>/&#x3C;.*?>/</code> will match \"&#x3C;foo>\"</li></ul></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Text_formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
#### Invalid AST transformations
##### td (133:4) => tableCell
```
type: "paragraph"
summary: "This chapter introduces how to work with strings and text in JavaScript."
rowIndex: 10
shouldWrap: true
children: 
  type: "text"
  value: "Return the string in all lowercase or all uppercase, respectively."
```
##### tr (131:3) => tableRow
```
type: "html"
value: "<td><p>Return the string in all lowercase or all uppercase, respectively.</p></td>"
```
##### table.standard-table (84:1) => table
```
type: "html"
value: "<tr><td>{{anN4cmVmKCJTdHJpbmcudG9Mb3dlckNhc2UiLCAidG9Mb3dlckNhc2UiKQ==}}, {{anN4cmVmKCJTdHJpbmcudG9VcHBlckNhc2UiLCAidG9VcHBlckNhc2UiKQ==}}</td><td><p>Return the string in all lowercase or all uppercase, respectively.</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
### Missing conversion rules
- p.summary (16:1)
### [/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
#### Invalid AST transformations
##### tr (406:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Pro(s)</th>",type: "html"
value: "<td>Supported in all browsers — including older browsers (going all the way back to IE 5.5). Also, it is very fast, very standard, and very JIT-optimizable.</td>"
```
##### td (412:7) => tableCell
```
type: "paragraph"
summary: "JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based)."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Both of those are generally not problems in practice."
```
##### tr (410:7) => tableRow
```
type: "html"
value: "<th scope=\"row\">Con(s)</th>",type: "html"
value: "<td><div>1. In order to use this method, the function in question must be initialized. During this initialization, the constructor may store unique information that must be generated per-object. This unique information would only be generated once, potentially leading to problems.</div><div>2. The initialization of the constructor may put unwanted methods onto the object.</div><p>Both of those are generally not problems in practice.</p></td>"
```
##### table.standard-table (403:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">Pro(s)</th><td>Supported in all browsers — including older browsers (going all the way back to IE 5.5). Also, it is very fast, very standard, and very JIT-optimizable.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Con(s)</th><td><div>1. In order to use this method, the function in question must be initialized. During this initialization, the constructor may store unique information that must be generated per-object. This unique information would only be generated once, potentially leading to problems.</div><div>2. The initialization of the constructor may put unwanted methods onto the object.</div><p>Both of those are generally not problems in practice.</p></td></tr>"
```
##### tr (458:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Pro(s)</th>",type: "html"
value: "<td>Supported in all modern browsers. Allows the direct setting of <code>__proto__</code> in a way that is a single event, which permits the browser to further optimize the object. Also allows the creation of objects without a prototype, using <code>Object.create(null)</code>.</td>"
```
##### tr (462:7) => tableRow
```
type: "html"
value: "<th scope=\"row\">Con(s)</th>"
```
##### table.standard-table (455:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">Pro(s)</th><td>Supported in all modern browsers. Allows the direct setting of <code>__proto__</code> in a way that is a single event, which permits the browser to further optimize the object. Also allows the creation of objects without a prototype, using <code>Object.create(null)</code>.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Con(s)</th><td>Not supported in IE8 and below. However, as Microsoft has discontinued extended support for systems running IE8 and below, that should not be a concern for most applications. Additionally, the slow object initialization can be a performance black hole if using the second argument, because each object-descriptor property has its own separate descriptor object. When dealing with hundreds of thousands of object descriptors in the form of objects, that lag time might become a serious issue.</td></tr>"
```
##### tr (506:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Pro(s)</th>",type: "html"
value: "<td>Supported in all modern browsers. Allows the dynamic manipulation of an object’s prototype and can even force a prototype on a prototype-less object created with <code>Object.create(null)</code>.</td>"
```
##### tr (510:7) => tableRow
```
type: "html"
value: "<th scope=\"row\">Con(s)</th>"
```
##### table.standard-table (503:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">Pro(s)</th><td>Supported in all modern browsers. Allows the dynamic manipulation of an object’s prototype and can even force a prototype on a prototype-less object created with <code>Object.create(null)</code>.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Con(s)</th><td>Ill-performing. Should be deprecated. Many browsers optimize the prototype and try to guess the location of the method in memory when calling an instance in advance; but setting the prototype dynamically disrupts all those optimizations. It might cause some browsers to recompile your code for de-optimization, to make it work according to the specs. Not supported in IE8 and below.</td></tr>"
```
##### tr (549:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Pro(s)</th>",type: "html"
value: "<td>Supported in all modern browsers. Setting {{anN4cmVmKCJPYmplY3QvcHJvdG8iLCJfX3Byb3RvX18iKQ==}}\nto something that is not an object only fails silently. It does not throw an exception.</td>"
```
##### tr (554:7) => tableRow
```
type: "html"
value: "<th scope=\"row\">Con(s)</th>"
```
##### table.standard-table (546:4) => table
```
type: "html"
value: "<tr><th scope=\"row\">Pro(s)</th><td>Supported in all modern browsers. Setting {{anN4cmVmKCJPYmplY3QvcHJvdG8iLCJfX3Byb3RvX18iKQ==}}\nto something that is not an object only fails silently. It does not throw an exception.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Con(s)</th><td>Non-performant and deprecated. Many browsers optimize the prototype and try to guess the location of the method in the memory when calling an instance in advance; but setting the prototype dynamically disrupts all those optimizations and can even force some browsers to recompile for de-optimization of your code, to make it work according to the specs. Not supported in IE10 and below.</td></tr>"
```
### Missing conversion rules
- th[scope="row"] (407:7)
- td (408:7)
- th[scope="row"] (411:7)
- th[scope="row"] (459:7)
- td (460:7)
- th[scope="row"] (463:7)
- th[scope="row"] (507:7)
- td (508:7)
- th[scope="row"] (511:7)
- th[scope="row"] (550:7)
- td (551:7)
- th[scope="row"] (555:7)
### [/en-US/docs/Web/JavaScript/Language_Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
#### Invalid AST transformations
##### tr (23:3) => tableRow
```
type: "html"
value: "<th colspan=\"4\">Current editions</th>"
```
##### td (28:4) => tableCell
```
type: "paragraph"
summary: "ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The following ECMAScript standards have been approved or are being worked on:"
rowIndex: 2
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf"
  children: 
    type: "text"
    value: "PDF"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://ecma-international.org/ecma-262/11.0/index.html"
  children: 
    type: "text"
    value: "HTML"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://tc39.github.io/ecma262/"
  children: 
    type: "text"
    value: "Working draft"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://github.com/tc39/ecma262"
  children: 
    type: "text"
    value: "repository"
```
##### tr (26:4) => tableRow
```
type: "html"
value: "<td><p><a href=\"https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf\">PDF</a>, <a href=\"https://ecma-international.org/ecma-262/11.0/index.html\">HTML</a>, <a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td>"
```
##### td (36:4) => tableCell
```
type: "paragraph"
summary: "ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The following ECMAScript standards have been approved or are being worked on:"
rowIndex: 3
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf"
  children: 
    type: "text"
    value: "PDF"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://ecma-international.org/ecma-262/10.0/index.html"
  children: 
    type: "text"
    value: "HTML"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://tc39.github.io/ecma262/"
  children: 
    type: "text"
    value: "Working draft"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://github.com/tc39/ecma262"
  children: 
    type: "text"
    value: "repository"
```
##### tr (34:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf\">PDF</a>, <a href=\"https://ecma-international.org/ecma-262/10.0/index.html\">HTML</a>, <a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td>"
```
##### td (44:4) => tableCell
```
type: "paragraph"
summary: "ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The following ECMAScript standards have been approved or are being worked on:"
rowIndex: 4
shouldWrap: true
children: 
  type: "link"
  title: 

  url: "http://ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf"
  children: 
    type: "text"
    value: "PDF"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "http://ecma-international.org/ecma-262/9.0/index.html#Title"
  children: 
    type: "text"
    value: "HTML"
  type: "text"
  value: ", "
  type: "break"
  type: "link"
  title: 

  url: "https://tc39.github.io/ecma262/"
  children: 
    type: "text"
    value: "Working draft"
  type: "text"
  value: ", "
  type: "link"
  title: 

  url: "https://github.com/tc39/ecma262"
  children: 
    type: "text"
    value: "repository"
```
##### tr (42:3) => tableRow
```
type: "html"
value: "<td><p><a href=\"http://ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf\">PDF</a>, <a href=\"http://ecma-international.org/ecma-262/9.0/index.html#Title\">HTML</a>, <br><a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td>"
```
##### tr (57:3) => tableRow
```
type: "html"
value: "<th colspan=\"4\">Obsolete/historical editions</th>"
```
##### table.standard-table (15:1) => table
```
type: "html"
value: "<tr><th colspan=\"4\">Current editions</th></tr>",type: "html"
value: "<tr><td>ECMA-262 11th Edition</td><td><p><a href=\"https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf\">PDF</a>, <a href=\"https://ecma-international.org/ecma-262/11.0/index.html\">HTML</a>, <a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td><td>2020</td><td>ECMAScript 2020 Language Specification</td></tr>",type: "html"
value: "<tr><td>ECMA-262 10th Edition</td><td><p><a href=\"https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf\">PDF</a>, <a href=\"https://ecma-international.org/ecma-262/10.0/index.html\">HTML</a>, <a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td><td>2019</td><td>ECMAScript 2019 Language Specification</td></tr>",type: "html"
value: "<tr><td>ECMA-262 9th Edition</td><td><p><a href=\"http://ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf\">PDF</a>, <a href=\"http://ecma-international.org/ecma-262/9.0/index.html#Title\">HTML</a>, <br><a href=\"https://tc39.github.io/ecma262/\">Working draft</a>, <a href=\"https://github.com/tc39/ecma262\">repository</a></p></td><td>2018</td><td>ECMAScript 2018 Language Specification</td></tr>",type: "html"
value: "<tr><th colspan=\"4\">Obsolete/historical editions</th></tr>"
```
### Missing conversion rules
- th[colSpan="4"] (24:4)
- th[colSpan="4"] (58:4)
### [/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
#### Invalid AST transformations
##### td (31:4) => tableCell
```
type: "paragraph"
summary: "This page lists features of JavaScript that are deprecated (that is, still available but planned for removal) and obsolete (that is, no longer usable)."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "Parenthesized substring matches, if any."
  type: "break"
  type: "strong"
  children: 
    type: "text"
    value: "Warning:"
  type: "text"
  value: " Using these properties can result in problems, since browser extensions can modify them. Avoid them!"
```
##### tr (29:3) => tableRow
```
type: "html"
value: "<td><p>Parenthesized substring matches, if any.<br><strong>Warning:</strong> Using these properties can result in problems, since browser extensions can modify them. Avoid them!</p></td>"
```
##### table.standard-table (23:1) => table
```
type: "html"
value: "<tr><td>{{anN4cmVmKCJSZWdFeHAubiIsICIkMS0kOSIp}}</td><td><p>Parenthesized substring matches, if any.<br><strong>Warning:</strong> Using these properties can result in problems, since browser extensions can modify them. Avoid them!</p></td></tr>"
```
##### tr (251:3) => tableRow
```
type: "html"
value: "<td>Property</td>",type: "html"
value: "<td>Description</td>"
```
##### table.standard-table (249:1) => table
```
type: "html"
value: "<tr><td>Property</td><td>Description</td></tr>"
```
### Missing conversion rules
- td (252:4)
- td (253:4)
### [/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token)
### Missing conversion rules
- pre.brush:.js.example-bad.line-numbers.language-js (58:1)
### [/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
### Missing conversion rules
- span.seoSummary (14:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
### Missing conversion rules
- table.fullwidth-table.standard-table (210:1)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
#### Invalid AST transformations
##### tr (181:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">first call</th>"
```
##### tr (189:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">second call</th>"
```
##### tr (197:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">third call</th>"
```
##### tr (205:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fourth call</th>"
```
##### table.standard-table (169:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">first call</th><td><code>0</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>1</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">second call</th><td><code>1</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>3</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">third call</th><td><code>3</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>6</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fourth call</th><td><code>6</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr>"
```
##### tr (246:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">first call</th>"
```
##### tr (254:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">second call</th>"
```
##### tr (262:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">third call</th>"
```
##### tr (270:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fourth call</th>"
```
##### tr (278:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fifth call</th>"
```
##### table.standard-table (234:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">first call</th><td><code>10</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">second call</th><td><code>10</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>11</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">third call</th><td><code>11</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>13</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fourth call</th><td><code>13</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>16</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fifth call</th><td><code>16</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr>"
```
### Missing conversion rules
- th[scope="row"] (182:7)
- th[scope="row"] (190:7)
- th[scope="row"] (198:7)
- th[scope="row"] (206:7)
- th[scope="row"] (247:7)
- th[scope="row"] (255:7)
- th[scope="row"] (263:7)
- th[scope="row"] (271:7)
- th[scope="row"] (279:7)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
#### Invalid AST transformations
##### tr (125:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">first call</th>"
```
##### tr (133:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">second call</th>"
```
##### tr (141:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">third call</th>"
```
##### tr (149:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fourth call</th>"
```
##### table (113:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">first call</th><td><code>4</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>7</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">second call</th><td><code>7</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>9</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">third call</th><td><code>9</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fourth call</th><td><code>10</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr>"
```
##### tr (183:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">first call</th>"
```
##### tr (191:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">second call</th>"
```
##### tr (199:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">third call</th>"
```
##### tr (207:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fourth call</th>"
```
##### tr (215:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">fifth call</th>"
```
##### table (171:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">first call</th><td><code>10</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>14</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">second call</th><td><code>14</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>17</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">third call</th><td><code>17</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>19</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fourth call</th><td><code>19</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr>",type: "html"
value: "<tr><th scope=\"row\">fifth call</th><td><code>20</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr>"
```
### Missing conversion rules
- th[scope="row"] (126:7)
- th[scope="row"] (134:7)
- th[scope="row"] (142:7)
- th[scope="row"] (150:7)
- th[scope="row"] (184:7)
- th[scope="row"] (192:7)
- th[scope="row"] (200:7)
- th[scope="row"] (208:7)
- th[scope="row"] (216:7)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
#### Invalid AST transformations
##### tr (37:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Current time zone</th>"
```
##### tr (45:3) => tableRow
```
type: "html"
value: "<th scope=\"row\">Return Value</th>"
```
##### table.standard-table (35:1) => table
```
type: "html"
value: "<tr><th scope=\"row\">Current time zone</th><th scope=\"col\">UTC-8</th><th scope=\"col\">UTC</th><th scope=\"col\">UTC+3</th></tr>",type: "html"
value: "<tr><th scope=\"row\">Return Value</th><td>480</td><td>0</td><td>-180</td></tr>"
```
### Missing conversion rules
- th[scope="row"] (38:4)
- th[scope="row"] (46:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments)
#### Invalid AST transformations
##### code (15:8) => text
```
type: "element"
tagName: "em"
properties: 

children: 
  type: "text"
  value: "function"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName)
#### Invalid AST transformations
##### code (14:8) => text
```
type: "element"
tagName: "em"
properties: 

children: 
  type: "text"
  value: "function"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
### Missing conversion rules
- span.seoSummary (14:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)
#### Invalid AST transformations
##### td (78:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function f(){}"
```
##### td (82:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"function f(){}\""
```
##### tr (77:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function f(){}</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"function f(){}\"</pre></td>"
```
##### td (88:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "class A { a(){} }"
```
##### td (92:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"class A { a(){} }\""
```
##### tr (87:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">class A { a(){} }</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"class A { a(){} }\"</pre></td>"
```
##### td (98:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function* g(){}"
```
##### td (102:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"function* g(){}\""
```
##### tr (97:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function* g(){}</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"function* g(){}\"</pre></td>"
```
##### td (108:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "a => a"
```
##### td (112:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"a => a\""
```
##### tr (107:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">a => a</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"a => a\"</pre></td>"
```
##### td (118:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "({ a(){} }.a)"
```
##### td (122:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"a(){}\""
```
##### tr (117:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">({ a(){} }.a)</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"a(){}\"</pre></td>"
```
##### td (128:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "({ *a(){} }.a)"
```
##### td (132:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"*a(){}\""
```
##### tr (127:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">({ *a(){} }.a)</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"*a(){}\"</pre></td>"
```
##### td (138:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "({ [0](){} }[0])"
```
##### td (142:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"[0](){}\""
```
##### tr (137:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">({ [0](){} }[0])</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"[0](){}\"</pre></td>"
```
##### td (148:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "Object.getOwnPropertyDescriptor({     get a(){} }, \"a\").get"
```
##### td (154:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"get a(){}\""
```
##### tr (147:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">Object.getOwnPropertyDescriptor({\n    get a(){}\n}, \"a\").get</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"get a(){}\"</pre></td>"
```
##### td (160:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "Object.getOwnPropertyDescriptor({     set a(x){} }, \"a\").set"
```
##### td (166:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"set a(x){}\""
```
##### tr (159:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">Object.getOwnPropertyDescriptor({\n    set a(x){}\n}, \"a\").set</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"set a(x){}\"</pre></td>"
```
##### td (172:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "Function.prototype.toString"
```
##### td (176:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"function toString() { [native code] }\""
```
##### tr (171:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">Function.prototype.toString</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"function toString() { [native code] }\"</pre></td>"
```
##### td (182:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "(function f(){}.bind(0))"
```
##### td (186:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"function () { [native code] }\""
```
##### tr (181:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">(function f(){}.bind(0))</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"function () { [native code] }\"</pre></td>"
```
##### td (192:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "Function(\"a\", \"b\")"
```
##### td (196:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "\"function anonymous(a\\n) {\\nb\\n}\""
```
##### tr (191:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">Function(\"a\", \"b\")</pre></td>",type: "html"
value: "<td><pre class=\"brush: js\">\"function anonymous(a\\n) {\\nb\\n}\"</pre></td>"
```
##### table.standard-table (69:1) => table
```
type: "html"
value: "<tr><td><pre class=\"brush: js\">function f(){}</pre></td><td><pre class=\"brush: js\">\"function f(){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">class A { a(){} }</pre></td><td><pre class=\"brush: js\">\"class A { a(){} }\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function* g(){}</pre></td><td><pre class=\"brush: js\">\"function* g(){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">a => a</pre></td><td><pre class=\"brush: js\">\"a => a\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">({ a(){} }.a)</pre></td><td><pre class=\"brush: js\">\"a(){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">({ *a(){} }.a)</pre></td><td><pre class=\"brush: js\">\"*a(){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">({ [0](){} }[0])</pre></td><td><pre class=\"brush: js\">\"[0](){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">Object.getOwnPropertyDescriptor({\n    get a(){}\n}, \"a\").get</pre></td><td><pre class=\"brush: js\">\"get a(){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">Object.getOwnPropertyDescriptor({\n    set a(x){}\n}, \"a\").set</pre></td><td><pre class=\"brush: js\">\"set a(x){}\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">Function.prototype.toString</pre></td><td><pre class=\"brush: js\">\"function toString() { [native code] }\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">(function f(){}.bind(0))</pre></td><td><pre class=\"brush: js\">\"function () { [native code] }\"</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">Function(\"a\", \"b\")</pre></td><td><pre class=\"brush: js\">\"function anonymous(a\\n) {\\nb\\n}\"</pre></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw)
#### Invalid AST transformations
##### dl (36:1) => paragraph
```
type: "list"
ordered: false
start: 

spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Has the value "
      type: "inlineCode"
      value: "true"
      type: "text"
      value: " if the iterator is past the end of the iterated\nsequence. In this case "
      type: "inlineCode"
      value: "value"
      type: "text"
      value: " optionally specifies the "
      type: "emphasis"
      children: 
        type: "text"
        value: "return\nvalue"
      type: "text"
      value: " of the iterator."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "text"
      value: "Has the value "
      type: "inlineCode"
      value: "false"
      type: "text"
      value: " if the iterator was able to produce the next\nvalue in the sequence. This is equivalent of not specifying the "
      type: "inlineCode"
      value: "done"
      type: "text"
      value: "\nproperty altogether."
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
### Missing conversion rules
- p.noinclude (261:3)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
#### Invalid AST transformations
##### td (108:4) => tableCell
```
type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Warning:"
    type: "text"
    value: " The "
    type: "inlineCode"
    value: "islamicc"
    type: "text"
    value: " calendar key has been deprecated. Please use "
    type: "inlineCode"
    value: "islamic-civil"
    type: "text"
    value: ".",type: "paragraph"
summary: "The Intl.Locale.prototype.calendar property is an accessor property which returns the type of calendar used in the Locale."
rowIndex: 19
shouldWrap: true
children: 
  type: "inlineCode"
  value: "islamicc"
```
##### tr (107:3) => tableRow
```
type: "html"
value: "<td><div class=\"notecard warning\"><p><strong>Warning:</strong> The <code>islamicc</code> calendar key has been deprecated. Please use <code>islamic-civil</code>.</p></div><p><code>islamicc</code></p></td>"
```
##### table.standard-table (26:1) => table
```
type: "html"
value: "<tr><td><div class=\"notecard warning\"><p><strong>Warning:</strong> The <code>islamicc</code> calendar key has been deprecated. Please use <code>islamic-civil</code>.</p></div><p><code>islamicc</code></p></td><td>Civil (algorithmic) Arabic calendar</td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
#### Invalid AST transformations
##### td (49:4) => tableCell
```
type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Warning:"
    type: "text"
    value: " The "
    type: "inlineCode"
    value: "direct"
    type: "text"
    value: " collation type has been deprected. Do not use.",type: "paragraph"
summary: "The Intl.Locale.prototype.collation property is an accessor property that returns the collation type for the Locale, which is used to order strings according to the locale's rules."
rowIndex: 4
shouldWrap: true
children: 
  type: "text"
  value: "direct"
```
##### tr (48:3) => tableRow
```
type: "html"
value: "<td><div class=\"notecard warning\"><p><strong>Warning:</strong> The <code>direct</code> collation type has been deprected. Do not use.</p></div><p>direct</p></td>"
```
##### td (115:4) => tableCell
```
type: "paragraph"
summary: "The Intl.Locale.prototype.collation property is an accessor property that returns the collation type for the Locale, which is used to order strings according to the locale's rules."
rowIndex: 19
shouldWrap: true
children: 
  type: "text"
  value: "Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (used in Chinese)"
```
##### tr (113:3) => tableRow
```
type: "html"
value: "<td><p>Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (used in Chinese)</p></td>"
```
##### table.standard-table (28:1) => table
```
type: "html"
value: "<tr><td><div class=\"notecard warning\"><p><strong>Warning:</strong> The <code>direct</code> collation type has been deprected. Do not use.</p></div><p>direct</p></td><td>Binary code point order (used in Hindi)</td></tr>",type: "html"
value: "<tr><td>zhuyin</td><td><p>Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (used in Chinese)</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize)
### Missing conversion rules
- span.seoSummary (17:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize)
### Missing conversion rules
- span.seoSummary (16:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString)
### Missing conversion rules
- span.seoSummary (17:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
### Missing conversion rules
- p.seoSummary (17:1)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
#### Invalid AST transformations
##### tr (54:5) => tableRow
```
type: "html"
value: "<th scope=\"row\"></th>"
```
##### td (65:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "An "
  type: "inlineCode"
  value: "Object"
  type: "text"
  value: " has a prototype, so it contains default keys that could collide with your own keys if you're not careful.",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
    type: "text"
    value: " As of ES5, this can be bypassed by using {{anN4cmVmKCJPYmplY3QuY3JlYXRlIiwgIk9iamVjdC5jcmVhdGUobnVsbCkiKQ==}}, but this is seldom done."
```
##### tr (61:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Accidental Keys</th>",type: "html"
value: "<td><p>An <code>Object</code> has a prototype, so it contains default keys that could\ncollide with your own keys if you're not careful.</p><div class=\"notecard note\"><p><strong>Note:</strong> As of ES5, this can be bypassed by using\n{{anN4cmVmKCJPYmplY3QuY3JlYXRlIiwgIk9iamVjdC5jcmVhdGUobnVsbCkiKQ==}}, but this is seldom done.</p></div></td>"
```
##### tr (76:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Key Types</th>"
```
##### td (85:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "The keys in "
  type: "inlineCode"
  value: "Map"
  type: "text"
  value: " are ordered in a simple, straightforward way: A "
  type: "inlineCode"
  value: "Map"
  type: "text"
  value: " object iterates entries, keys, and values in the order of entry insertion."
```
##### td (90:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "Although the keys of an ordinary "
  type: "inlineCode"
  value: "Object"
  type: "text"
  value: " are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order.",type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 3
shouldWrap: true
children: 
  type: "text"
  value: "The order was first defined for own properties only in ECMAScript 2015; ECMAScript 2020 defines order for inherited properties as well. See the "
  type: "link"
  title: 

  url: "https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
  children: 
    type: "text"
    value: "OrdinaryOwnPropertyKeys"
  type: "text"
  value: " and "
  type: "link"
  title: 

  url: "https://tc39.es/ecma262/#sec-enumerate-object-properties"
  children: 
    type: "text"
    value: "EnumerateObjectProperties"
  type: "text"
  value: " abstract specification operations. But note that no single mechanism iterates "
  type: "strong"
  children: 
    type: "text"
    value: "all"
  type: "text"
  value: " of an object's properties; the various mechanisms each include different subsets of properties. ({{anN4cmVmKCJTdGF0ZW1lbnRzL2Zvci4uLmluIiwKICAgICAgICAgICJmb3ItaW4iKQ==}} includes only enumerable string-keyed properties; {{anN4cmVmKCJPYmplY3Qua2V5cyIp}} includes only own, enumerable, string-keyed properties; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyIp}} includes own, string-keyed properties even if non-enumerable; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIik=}} does the same for just "
  type: "inlineCode"
  value: "Symbol"
  type: "text"
  value: "-keyed properties, etc.)"
```
##### tr (83:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Key Order</th>",type: "html"
value: "<td><p>The keys in <code>Map</code> are ordered in a simple, straightforward way: A\n<code>Map</code> object iterates entries, keys, and values in the order of entry\ninsertion.</p></td>",type: "html"
value: "<td><p>Although the keys of an ordinary <code>Object</code> are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely\non property order.</p><p>The order was first defined for own properties only in ECMAScript 2015;\nECMAScript 2020 defines order for inherited properties as well. See the <a href=\"https://tc39.es/ecma262/#sec-ordinaryownpropertykeys\">OrdinaryOwnPropertyKeys</a>\nand <a href=\"https://tc39.es/ecma262/#sec-enumerate-object-properties\">EnumerateObjectProperties</a>\nabstract specification operations. But note that no single mechanism iterates\n<strong>all</strong> of an object's properties; the various mechanisms each\ninclude different subsets of properties. ({{anN4cmVmKCJTdGF0ZW1lbnRzL2Zvci4uLmluIiwKICAgICAgICAgICJmb3ItaW4iKQ==}} includes only enumerable string-keyed properties;\n{{anN4cmVmKCJPYmplY3Qua2V5cyIp}} includes only own, enumerable, string-keyed\nproperties; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyIp}} includes own, string-keyed\nproperties even if non-enumerable; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIik=}}\ndoes the same for just <code>Symbol</code>-keyed properties, etc.)</p></td>"
```
##### tr (108:5) => tableRow
```
type: "html"
value: "<th scope=\"row\"><p>Size</p></th>"
```
##### td (121:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 5
shouldWrap: true
children: 
  type: "inlineCode"
  value: "Object"
  type: "text"
  value: " does not implement an "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
  children: 
    type: "text"
    value: "iteration protocol"
  type: "text"
  value: ", and so objects are not directly iterable using the JavaScript "
  type: "link"
  title: 

  url: "/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
  children: 
    type: "text"
    value: "for...of"
  type: "text"
  value: " statement (by default).",type: "blockquote"
children: 
  type: "paragraph"
  children: 
    type: "strong"
    children: 
      type: "text"
      value: "Note:"
  type: "list"
  ordered: false
  start: 

  spread: false
  children: 
    type: "listItem"
    spread: false
    children: 
      type: "paragraph"
      children: 
        type: "text"
        value: "An object can implement the iteration protocol, or you can get an iterable for an object using "
        type: "link"
        title: 

        url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
        children: 
          type: "inlineCode"
          value: "Object.keys"
        type: "text"
        value: " or "
        type: "link"
        title: 

        url: "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
        children: 
          type: "inlineCode"
          value: "Object.entries"
        type: "text"
        value: "."
    type: "listItem"
    spread: false
    children: 
      type: "paragraph"
      children: 
        type: "text"
        value: "The "
        type: "link"
        title: 

        url: "/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
        children: 
          type: "text"
          value: "for...in"
        type: "text"
        value: " statement allows you to iterate over the "
        type: "emphasis"
        children: 
          type: "text"
          value: "enumerable"
        type: "text"
        value: " properties of an object."
```
##### tr (116:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Iteration</th>",type: "html"
value: "<td><p><code>Object</code> does not implement an <a href=\"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol\">iteration\nprotocol</a>, and so objects are not directly iterable using the JavaScript <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...of\">for...of</a>\nstatement (by default).</p><div class=\"notecard note\"><p><strong>Note:</strong></p><ul><li>An object can implement the iteration protocol, or you can get an iterable\nfor an object using <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\"><code>Object.keys</code></a> or <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries\"><code>Object.entries</code></a>.</li><li>The <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for...in</a>\nstatement allows you to iterate over the <em>enumerable</em> properties of\nan object.</li></ul></div></td>"
```
##### td (147:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Performs better in scenarios involving frequent additions and removals of key-value pairs."
```
##### td (151:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 6
shouldWrap: true
children: 
  type: "text"
  value: "Not optimized for frequent additions and removals of key-value pairs."
```
##### tr (145:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Performance</th>",type: "html"
value: "<td><p>Performs better in scenarios involving frequent additions and removals of\nkey-value pairs.</p></td>",type: "html"
value: "<td><p>Not optimized for frequent additions and removals of key-value pairs.</p></td>"
```
##### td (157:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "No native support for serialization or parsing.",type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "(But you can build your own serialization and parsing support for "
  type: "inlineCode"
  value: "Map"
  type: "text"
  value: " by using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}} with its "
  type: "emphasis"
  children: 
    type: "text"
    value: "replacer"
  type: "text"
  value: " argument, and by using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}} with its "
  type: "emphasis"
  children: 
    type: "text"
    value: "reviver"
  type: "text"
  value: " argument. See the Stack Overflow question "
  type: "link"
  title: 

  url: "https://stackoverflow.com/q/29085197/"
  children: 
    type: "text"
    value: "How do you JSON.stringify an ES6 Map?"
  type: "text"
  value: ")."
```
##### td (161:7) => tableCell
```
type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "Native support for serialization from {{anN4cmVmKCJPYmplY3QiKQ==}} to JSON, using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}}.",type: "paragraph"
summary: "The Map object holds key-value\n    pairs and remembers the original insertion order of the keys. Any value (both\n  objects and {{Z2xvc3NhcnkoIlByaW1pdGl2ZSIsICJwcmltaXRpdmUgdmFsdWVzIik=}}) may be used as either a key\n  or a value."
rowIndex: 7
shouldWrap: true
children: 
  type: "text"
  value: "Native support for parsing from JSON to {{anN4cmVmKCJPYmplY3QiKQ==}}, using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}}."
```
##### tr (155:5) => tableRow
```
type: "html"
value: "<th scope=\"row\">Serialization and parsing</th>",type: "html"
value: "<td><p>No native support for serialization or parsing.</p><p>(But you can build your own serialization and parsing support for <code>Map</code> by using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}} with its <em>replacer</em> argument, and by using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}} with its <em>reviver</em> argument. See the Stack Overflow question <a href=\"https://stackoverflow.com/q/29085197/\">How do you JSON.stringify an ES6 Map?</a>).</p></td>",type: "html"
value: "<td><p>Native support for serialization from {{anN4cmVmKCJPYmplY3QiKQ==}} to JSON, using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}}.</p><p>Native support for parsing from JSON to {{anN4cmVmKCJPYmplY3QiKQ==}}, using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}}.</p></td>"
```
##### table.standard-table (52:1) => table
```
type: "html"
value: "<tr><th scope=\"row\"></th><th scope=\"col\">Map</th><th scope=\"col\">Object</th></tr>",type: "html"
value: "<tr><th scope=\"row\">Accidental Keys</th><td>A <code>Map</code> does not contain any keys by default. It only contains what\nis explicitly put into it.</td><td><p>An <code>Object</code> has a prototype, so it contains default keys that could\ncollide with your own keys if you're not careful.</p><div class=\"notecard note\"><p><strong>Note:</strong> As of ES5, this can be bypassed by using\n{{anN4cmVmKCJPYmplY3QuY3JlYXRlIiwgIk9iamVjdC5jcmVhdGUobnVsbCkiKQ==}}, but this is seldom done.</p></div></td></tr>",type: "html"
value: "<tr><th scope=\"row\">Key Types</th><td>A <code>Map</code>'s keys can be any value (including functions, objects, or any\nprimitive).</td><td>The keys of an <code>Object</code> must be either a {{anN4cmVmKCJTdHJpbmciKQ==}} or a\n{{anN4cmVmKCJTeW1ib2wiKQ==}}.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Key Order</th><td><p>The keys in <code>Map</code> are ordered in a simple, straightforward way: A\n<code>Map</code> object iterates entries, keys, and values in the order of entry\ninsertion.</p></td><td><p>Although the keys of an ordinary <code>Object</code> are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely\non property order.</p><p>The order was first defined for own properties only in ECMAScript 2015;\nECMAScript 2020 defines order for inherited properties as well. See the <a href=\"https://tc39.es/ecma262/#sec-ordinaryownpropertykeys\">OrdinaryOwnPropertyKeys</a>\nand <a href=\"https://tc39.es/ecma262/#sec-enumerate-object-properties\">EnumerateObjectProperties</a>\nabstract specification operations. But note that no single mechanism iterates\n<strong>all</strong> of an object's properties; the various mechanisms each\ninclude different subsets of properties. ({{anN4cmVmKCJTdGF0ZW1lbnRzL2Zvci4uLmluIiwKICAgICAgICAgICJmb3ItaW4iKQ==}} includes only enumerable string-keyed properties;\n{{anN4cmVmKCJPYmplY3Qua2V5cyIp}} includes only own, enumerable, string-keyed\nproperties; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyIp}} includes own, string-keyed\nproperties even if non-enumerable; {{anN4cmVmKCJPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIik=}}\ndoes the same for just <code>Symbol</code>-keyed properties, etc.)</p></td></tr>",type: "html"
value: "<tr><th scope=\"row\"><p>Size</p></th><td>The number of items in a <code>Map</code> is easily retrieved from its\n{{anN4cmVmKCJNYXAucHJvdG90eXBlLnNpemUiLCAic2l6ZSIp}} property.</td><td>The number of items in an <code>Object</code> must be determined manually.</td></tr>",type: "html"
value: "<tr><th scope=\"row\">Iteration</th><td>A <code>Map</code> is an <a href=\"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols\">iterable</a>, so it can be\ndirectly iterated.</td><td><p><code>Object</code> does not implement an <a href=\"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol\">iteration\nprotocol</a>, and so objects are not directly iterable using the JavaScript <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...of\">for...of</a>\nstatement (by default).</p><div class=\"notecard note\"><p><strong>Note:</strong></p><ul><li>An object can implement the iteration protocol, or you can get an iterable\nfor an object using <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\"><code>Object.keys</code></a> or <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries\"><code>Object.entries</code></a>.</li><li>The <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\">for...in</a>\nstatement allows you to iterate over the <em>enumerable</em> properties of\nan object.</li></ul></div></td></tr>",type: "html"
value: "<tr><th scope=\"row\">Performance</th><td><p>Performs better in scenarios involving frequent additions and removals of\nkey-value pairs.</p></td><td><p>Not optimized for frequent additions and removals of key-value pairs.</p></td></tr>",type: "html"
value: "<tr><th scope=\"row\">Serialization and parsing</th><td><p>No native support for serialization or parsing.</p><p>(But you can build your own serialization and parsing support for <code>Map</code> by using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}} with its <em>replacer</em> argument, and by using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}} with its <em>reviver</em> argument. See the Stack Overflow question <a href=\"https://stackoverflow.com/q/29085197/\">How do you JSON.stringify an ES6 Map?</a>).</p></td><td><p>Native support for serialization from {{anN4cmVmKCJPYmplY3QiKQ==}} to JSON, using {{anN4cmVmKCJKU09OLnN0cmluZ2lmeSgpIik=}}.</p><p>Native support for parsing from JSON to {{anN4cmVmKCJPYmplY3QiKQ==}}, using {{anN4cmVmKCJKU09OLnBhcnNlKCkiKQ==}}.</p></td></tr>"
```
### Missing conversion rules
- th[scope="row"] (55:7)
- th[scope="row"] (62:7)
- th[scope="row"] (77:7)
- th[scope="row"] (84:7)
- th[scope="row"] (109:7)
- th[scope="row"] (117:7)
- th[scope="row"] (146:7)
- th[scope="row"] (156:7)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
### Missing conversion rules
- sub (91:38)
- sub (93:38)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
### Missing conversion rules
- span.seoSummary (21:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
### Missing conversion rules
- span.seoSummary (16:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)
#### Invalid AST transformations
##### td (77:4) => tableCell
```
type: "paragraph"
summary: "The {{anN4cmVmKCJSZWZsZWN0Iik=}} object, introduced in ES2015, is a built-in object that provides methods to interface with JavaScript objects. Some of the static functions that exist on Reflect also correspond to methods available on {{anN4cmVmKCJPYmplY3QiKQ==}}, which predates ES2015. Although some of the methods appear to be similar in their behavior, there are often subtle differences between them."
rowIndex: 10
shouldWrap: true
children: 
  type: "text"
  value: "{{anN4cmVmKCJSZWZsZWN0LmlzRXh0ZW5zaWJsZSgpIik=}} returns "
  type: "inlineCode"
  value: "true"
  type: "text"
  value: " if the object is extensible, and "
  type: "inlineCode"
  value: "false"
  type: "text"
  value: " if it is not. Throws a "
  type: "inlineCode"
  value: "TypeError"
  type: "text"
  value: " if the first argument is not an object (a primitive)."
```
##### tr (74:3) => tableRow
```
type: "html"
value: "<td><p>{{anN4cmVmKCJSZWZsZWN0LmlzRXh0ZW5zaWJsZSgpIik=}} returns <code>true</code> if the object is extensible, and <code>false</code> if it is not. Throws a <code>TypeError</code> if the first argument is not an object (a primitive).</p></td>"
```
##### td (83:4) => tableCell
```
type: "paragraph"
summary: "The {{anN4cmVmKCJSZWZsZWN0Iik=}} object, introduced in ES2015, is a built-in object that provides methods to interface with JavaScript objects. Some of the static functions that exist on Reflect also correspond to methods available on {{anN4cmVmKCJPYmplY3QiKQ==}}, which predates ES2015. Although some of the methods appear to be similar in their behavior, there are often subtle differences between them."
rowIndex: 11
shouldWrap: true
children: 
  type: "text"
  value: "{{anN4cmVmKCJPYmplY3QucHJldmVudEV4dGVuc2lvbnMoKSIp}} returns the object that is being made non-extensible. Throws a "
  type: "inlineCode"
  value: "TypeError"
  type: "text"
  value: "in ES5 if the argument is not an object (a primitive). In ES2015, treats the argument as a non-extensible, ordinary object and returns the object itself."
```
##### tr (81:3) => tableRow
```
type: "html"
value: "<td><p>{{anN4cmVmKCJPYmplY3QucHJldmVudEV4dGVuc2lvbnMoKSIp}} returns the object that is being made non-extensible. Throws a <code>TypeError</code>in ES5 if the argument is not an object (a primitive). In ES2015, treats the argument as a non-extensible, ordinary object and returns the object itself.</p></td>"
```
##### table.standard-table (20:1) => table
```
type: "html"
value: "<tr><td><code>isExtensible()</code></td><td>{{anN4cmVmKCJPYmplY3QuaXNFeHRlbnNpYmxlKCkiKQ==}} returns <code>true</code> if the object is extensible, and <code>false</code> if it is not. Throws a <code>TypeError</code> in ES5 if the first argument is not an object (a primitive). In ES2015, it will be coerced into a non-extensible, ordinary object and will return <code>false</code>.</td><td><p>{{anN4cmVmKCJSZWZsZWN0LmlzRXh0ZW5zaWJsZSgpIik=}} returns <code>true</code> if the object is extensible, and <code>false</code> if it is not. Throws a <code>TypeError</code> if the first argument is not an object (a primitive).</p></td></tr>",type: "html"
value: "<tr><td><code>preventExtensions()</code></td><td><p>{{anN4cmVmKCJPYmplY3QucHJldmVudEV4dGVuc2lvbnMoKSIp}} returns the object that is being made non-extensible. Throws a <code>TypeError</code>in ES5 if the argument is not an object (a primitive). In ES2015, treats the argument as a non-extensible, ordinary object and returns the object itself.</p></td><td>{{anN4cmVmKCJSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKCkiKQ==}} returns <code>true</code> if the object has been made non-extensible, and <code>false</code> if it has not. Throws a <code>TypeError</code> if the argument is not an object (a primitive).</td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)
### Missing conversion rules
- span.seoSummary (16:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)
### Missing conversion rules
- span.seoSummary (16:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
#### Invalid AST transformations
##### td (90:7) => tableCell
```
type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "The parenthesized substring matches, if any.",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 2
shouldWrap: true
children: 
  type: "text"
  value: "The number of possible parenthesized substrings is unlimited."
```
##### td (95:7) => tableCell
```
type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 2
shouldWrap: true
children: 
  type: "inlineCode"
  value: "result[1] === \"Brown\"",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 2
shouldWrap: true
children: 
  type: "inlineCode"
  value: "result[2] === \"Jumps\""
```
##### tr (88:5) => tableRow
```
type: "html"
value: "<td><p>The parenthesized substring matches, if any.</p><p>The number of possible parenthesized substrings is unlimited.</p></td>",type: "html"
value: "<td><p><code>result[1] === \"Brown\"</code></p><p><code>result[2] === \"Jumps\"</code></p></td>"
```
##### td (118:7) => tableCell
```
type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 4
shouldWrap: true
children: 
  type: "inlineCode"
  value: "indices[0] === Array [ 4, 25 ]",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 4
shouldWrap: true
children: 
  type: "inlineCode"
  value: "indices[1] === Array [ 10, 15 ]",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 4
shouldWrap: true
children: 
  type: "inlineCode"
  value: "indices[2] === Array [ 20, 25 ]",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 4
shouldWrap: true
children: 
  type: "inlineCode"
  value: "indices.groups === undefined",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 4
shouldWrap: true
children: 
  type: "inlineCode"
  value: "indices.length === 3"
```
##### tr (106:5) => tableRow
```
type: "html"
value: "<td><p><code>indices[0] === Array [ 4, 25 ]</code></p><p><code>indices[1] === Array [ 10, 15 ]</code></p><p><code>indices[2] === Array [ 20, 25 ]</code></p><p><code>indices.groups === undefined</code></p><p><code>indices.length === 3</code></p></td>"
```
##### table.standard-table (74:1) => table
```
type: "html"
value: "<tr><td><code>[1], ...[<var>n</var>]</code></td><td><p>The parenthesized substring matches, if any.</p><p>The number of possible parenthesized substrings is unlimited.</p></td><td><p><code>result[1] === \"Brown\"</code></p><p><code>result[2] === \"Jumps\"</code></p></td></tr>",type: "html"
value: "<tr><td><code>indices</code></td><td>An array where each entry represents a substring match.\nEach substring match itself is an array where the first entry\nrepresents its start index and the second entry its end index.<br>The <code>indices</code> array additionally has a <code>groups</code>\nproperty which holds an object of all named capturing groups. The keys\nare the names of the capturing groups and each value is an array with\nthe first item being the start entry and the second entry being the\nend index of the capturing group. If the regular expression doesn't\ncontain any capturing groups, <code>groups</code> is <code>undefined</code>.</td><td><p><code>indices[0] === Array [ 4, 25 ]</code></p><p><code>indices[1] === Array [ 10, 15 ]</code></p><p><code>indices[2] === Array [ 20, 25 ]</code></p><p><code>indices.groups === undefined</code></p><p><code>indices.length === 3</code></p></td></tr>"
```
##### td (147:7) => tableCell
```
type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "The index at which to start the next match.",type: "paragraph"
summary: "The exec() method executes a\n    search for a match in a specified string. Returns a result array, or\n    {{anN4cmVmKCJudWxsIik=}}."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "If "
  type: "inlineCode"
  value: "g"
  type: "text"
  value: " is absent, this will always be "
  type: "inlineCode"
  value: "0"
  type: "text"
  value: "."
```
##### tr (145:5) => tableRow
```
type: "html"
value: "<td><p>The index at which to start the next match.</p><p>If <code>g</code> is absent, this will always be <code>0</code>.</p></td>"
```
##### table.standard-table (136:1) => table
```
type: "html"
value: "<tr><td><code>lastIndex</code></td><td><p>The index at which to start the next match.</p><p>If <code>g</code> is absent, this will always be <code>0</code>.</p></td><td><code>25</code></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
### Missing conversion rules
- pre.brush:.js[dir="ltr"] (263:1)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
### Missing conversion rules
- span.seoSummary (15:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
### Missing conversion rules
- span.seoSummary (16:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### Missing conversion rules
- kbd (44:48)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
### Missing conversion rules
- span.seoSummary (15:4)
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name)
#### Invalid AST transformations
##### code (14:8) => text
```
type: "element"
tagName: "em"
properties: 

children: 
  type: "text"
  value: "TypedArray"
```
### [/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear)
### Missing conversion rules
- pre.brush:.js;highlight:[10].example-bad (27:1)
### [/en-US/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
#### Invalid AST transformations
##### td (63:4) => tableCell
```
type: "paragraph"
summary: "As a couple of additions to ECMAScript 2015, Iteration protocols aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object by following some conventions."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "A function, with either zero arguments or one argument, that returns an object with at least the following two properties. If the "
  type: "inlineCode"
  value: "next()"
  type: "text"
  value: " method is called with one argument, that argument will be available to the "
  type: "inlineCode"
  value: "next()"
  type: "text"
  value: " method being invoked.",type: "list"
spread: false
children: 
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "done"
      type: "text"
      value: " (boolean)"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        summary: "As a couple of additions to ECMAScript 2015, Iteration protocols aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object by following some conventions."
        rowIndex: 1
        shouldWrap: true
        children: 
          type: "text"
          value: ": "
          type: "text"
          value: "Has the value "
          type: "inlineCode"
          value: "false"
          type: "text"
          value: " if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the "
          type: "inlineCode"
          value: "done"
          type: "text"
          value: " property altogether.)"
        type: "paragraph"
        summary: "As a couple of additions to ECMAScript 2015, Iteration protocols aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object by following some conventions."
        rowIndex: 1
        shouldWrap: true
        children: 
          type: "text"
          value: "Has the value "
          type: "inlineCode"
          value: "true"
          type: "text"
          value: " if the iterator has completed its sequence. In this case, "
          type: "inlineCode"
          value: "value"
          type: "text"
          value: " optionally specifies the return value of the iterator."
  type: "listItem"
  spread: false
  children: 
    type: "paragraph"
    children: 
      type: "inlineCode"
      value: "value"
    type: "list"
    spread: false
    children: 
      type: "listItem"
      spread: false
      children: 
        type: "paragraph"
        children: 
          type: "text"
          value: ": Any JavaScript value returned by the iterator. Can be omitted when "
          type: "inlineCode"
          value: "done"
          type: "text"
          value: " is "
          type: "inlineCode"
          value: "true"
          type: "text"
          value: ".",type: "paragraph"
summary: "As a couple of additions to ECMAScript 2015, Iteration protocols aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object by following some conventions."
rowIndex: 1
shouldWrap: true
children: 
  type: "text"
  value: "The "
  type: "inlineCode"
  value: "next()"
  type: "text"
  value: " method must always return an object with appropriate properties including "
  type: "inlineCode"
  value: "done"
  type: "text"
  value: " and "
  type: "inlineCode"
  value: "value"
  type: "text"
  value: ". If a non-object value gets returned (such as "
  type: "inlineCode"
  value: "false"
  type: "text"
  value: " or "
  type: "inlineCode"
  value: "undefined"
  type: "text"
  value: "), a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} ("
  type: "inlineCode"
  value: "\"iterator.next() returned a non-object value\""
  type: "text"
  value: ") will be thrown."
```
##### tr (61:3) => tableRow
```
type: "html"
value: "<td><p>A function, with either zero arguments or one argument, that returns an object with at least the following two properties. If the <code>next()</code> method is called with one argument, that argument will be available to the <code>next()</code> method being invoked.</p><dl><dt><code>done</code> (boolean)</dt><dd><p>Has the value <code>false</code> if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the <code>done</code> property altogether.)</p><p>Has the value <code>true</code> if the iterator has completed its sequence. In this case, <code>value</code> optionally specifies the return value of the iterator.</p></dd><dt><code>value</code></dt><dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code> is <code>true</code>.</dd></dl><p>The <code>next()</code> method must always return an object with appropriate properties including <code>done</code> and <code>value</code>. If a non-object value gets returned (such as <code>false</code> or <code>undefined</code>), a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} (<code>\"iterator.next() returned a non-object value\"</code>) will be thrown.</p></td>"
```
##### table.standard-table (53:1) => table
```
type: "html"
value: "<tr><td><code>next()</code></td><td><p>A function, with either zero arguments or one argument, that returns an object with at least the following two properties. If the <code>next()</code> method is called with one argument, that argument will be available to the <code>next()</code> method being invoked.</p><dl><dt><code>done</code> (boolean)</dt><dd><p>Has the value <code>false</code> if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the <code>done</code> property altogether.)</p><p>Has the value <code>true</code> if the iterator has completed its sequence. In this case, <code>value</code> optionally specifies the return value of the iterator.</p></dd><dt><code>value</code></dt><dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code> is <code>true</code>.</dd></dl><p>The <code>next()</code> method must always return an object with appropriate properties including <code>done</code> and <code>value</code>. If a non-object value gets returned (such as <code>false</code> or <code>undefined</code>), a {{anN4cmVmKCJUeXBlRXJyb3IiKQ==}} (<code>\"iterator.next() returned a non-object value\"</code>) will be thrown.</p></td></tr>"
```
### [/en-US/docs/Web/JavaScript/Reference/Operators/delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
### Missing conversion rules
- span.seoSummary (19:4)
### [/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
### Missing conversion rules
- kbd (49:62)
### [/en-US/docs/Web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
### Missing conversion rules
- u (74:39)
### [/en-US/docs/Web/JavaScript/Reference/Operators/in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
### Missing conversion rules
- span.seoSummary (14:4)
- span.short_text[lang="en"] (31:54)
### [/en-US/docs/Web/JavaScript/Reference/Operators/new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
### Missing conversion rules
- p.summary (89:1)
### [/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
#### Invalid AST transformations
##### tr (58:9) => tableRow
```
type: "html"
value: "<td>Code</td>",type: "html"
value: "<td>Output</td>"
```
##### td (63:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function echo(name, num) {     console.log(\"Evaluating the \" + name + \" side\");     return num; } // Notice the division operator (/) console.log(echo(\"left\", 6) / echo(\"right\", 2)); "
```
##### td (73:13) => tableCell
```
type: "code"
lang: "plain"
meta: ""
value: "Evaluating the left side Evaluating the right side 3 "
```
##### tr (62:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the division operator (/)\nconsole.log(echo(\"left\", 6) / echo(\"right\", 2));\n</pre></td>",type: "html"
value: "<td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the right side\n3\n</pre></td>"
```
##### td (82:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function echo(name, num) {     console.log(\"Evaluating the \" + name + \" side\");     return num; } // Notice the exponentiation operator (**) console.log(echo(\"left\", 2) ** echo(\"right\", 3));"
```
##### td (91:13) => tableCell
```
type: "code"
lang: "plain"
meta: ""
value: "Evaluating the left side Evaluating the right side 8"
```
##### tr (81:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the exponentiation operator (**)\nconsole.log(echo(\"left\", 2) ** echo(\"right\", 3));</pre></td>",type: "html"
value: "<td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the right side\n8</pre></td>"
```
##### table.standard-table (56:1) => table
```
type: "html"
value: "<tr><td>Code</td><td>Output</td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the division operator (/)\nconsole.log(echo(\"left\", 6) / echo(\"right\", 2));\n</pre></td><td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the right side\n3\n</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the exponentiation operator (**)\nconsole.log(echo(\"left\", 2) ** echo(\"right\", 3));</pre></td><td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the right side\n8</pre></td></tr>"
```
##### tr (109:9) => tableRow
```
type: "html"
value: "<td>Code</td>",type: "html"
value: "<td>Output</td>"
```
##### td (114:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function echo(name, num) {     console.log(\"Evaluating the \" + name + \" side\");     return num; } // Notice the division operator (/) console.log(echo(\"left\", 6) / echo(\"middle\", 2) / echo(\"right\", 3)); "
```
##### td (124:13) => tableCell
```
type: "code"
lang: "plain"
meta: ""
value: "Evaluating the left side Evaluating the middle side Evaluating the right side 1 "
```
##### tr (113:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the division operator (/)\nconsole.log(echo(\"left\", 6) / echo(\"middle\", 2) / echo(\"right\", 3));\n</pre></td>",type: "html"
value: "<td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n1\n</pre></td>"
```
##### td (134:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function echo(name, num) {     console.log(\"Evaluating the \" + name + \" side\");     return num; } // Notice the exponentiation operator (**) console.log(echo(\"left\", 2) ** echo(\"middle\", 3) ** echo(\"right\", 2)); "
```
##### td (144:13) => tableCell
```
type: "code"
lang: "plain"
meta: ""
value: "Evaluating the left side Evaluating the middle side Evaluating the right side 512 "
```
##### tr (133:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the exponentiation operator (**)\nconsole.log(echo(\"left\", 2) ** echo(\"middle\", 3) ** echo(\"right\", 2));\n</pre></td>",type: "html"
value: "<td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n512\n</pre></td>"
```
##### td (154:13) => tableCell
```
type: "code"
lang: "js"
meta: ""
value: "function echo(name, num) {     console.log(\"Evaluating the \" + name + \" side\");     return num; } // Notice the parentheses around the left and middle exponentiation console.log((echo(\"left\", 2) ** echo(\"middle\", 3)) ** echo(\"right\", 2));"
```
##### td (163:13) => tableCell
```
type: "code"
lang: "plain"
meta: ""
value: "Evaluating the left side Evaluating the middle side Evaluating the right side 64"
```
##### tr (153:9) => tableRow
```
type: "html"
value: "<td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the parentheses around the left and middle exponentiation\nconsole.log((echo(\"left\", 2) ** echo(\"middle\", 3)) ** echo(\"right\", 2));</pre></td>",type: "html"
value: "<td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n64</pre></td>"
```
##### table.standard-table (107:1) => table
```
type: "html"
value: "<tr><td>Code</td><td>Output</td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the division operator (/)\nconsole.log(echo(\"left\", 6) / echo(\"middle\", 2) / echo(\"right\", 3));\n</pre></td><td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n1\n</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the exponentiation operator (**)\nconsole.log(echo(\"left\", 2) ** echo(\"middle\", 3) ** echo(\"right\", 2));\n</pre></td><td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n512\n</pre></td></tr>",type: "html"
value: "<tr><td><pre class=\"brush: js\">function echo(name, num) {\n    console.log(\"Evaluating the \" + name + \" side\");\n    return num;\n}\n// Notice the parentheses around the left and middle exponentiation\nconsole.log((echo(\"left\", 2) ** echo(\"middle\", 3)) ** echo(\"right\", 2));</pre></td><td><pre class=\"brush: plain\">Evaluating the left side\nEvaluating the middle side\nEvaluating the right side\n64</pre></td></tr>"
```
### Missing conversion rules
- sub (22:7)
- sub (22:26)
- td (59:13)
- td (60:13)
- td (110:13)
- td (111:13)
- table.fullwidth-table (223:1)
### [/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
### Missing conversion rules
- div.notecard.note (81:1)
### [/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
#### Invalid AST transformations
##### dfn (49:12) => text
```
type: "element"
tagName: "em"
properties: 

children: 
  type: "text"
  value: "tagged template"
```