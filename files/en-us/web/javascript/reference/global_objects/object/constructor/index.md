---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
  - Prototype
browser-compat: javascript.builtins.Object.constructor
---
<div>{{JSRef}}</div>

<p>The <strong><code>constructor</code></strong> property returns a reference to the {{jsxref("Object")}} constructor function that created the instance object. Note that the value of this property is a reference to <em>the function itself</em>, not a string containing the function's name.</p>

<p>The value is only read-only for primitive values such as <code>1</code>, <code>true</code>, and <code>"test"</code>.</p>

<h2 id="Description">Description</h2>

<p>All objects (with the exception of objects created with <code>Object.create(null)</code>) will have a <code>constructor</code> property. Objects created without the explicit use of a constructor function (such as object- and array-literals) will have a <code>constructor</code> property that points to the Fundamental Object constructor type for that object.</p>

<pre class="brush: js">let o = {}
o.constructor === Object // true

let o = new Object
o.constructor === Object // true

let a = []
a.constructor === Array // true

let a = new Array
a.constructor === Array // true

let n = new Number(3)
n.constructor === Number // true
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Displaying_the_constructor_of_an_object">Displaying the constructor of an object</h3>

<p>The following example creates a constructor (<code>Tree</code>) and an object of that type (<code>theTree</code>). The example then displays the <code>constructor</code> property for the object <code>theTree</code>.</p>

<pre class="brush: js">function Tree(name) {
  this.name = name
}

let theTree = new Tree('Redwood')
console.log('theTree.constructor is ' + theTree.constructor)
</pre>

<p>This example displays the following output:</p>

<pre class="brush: js">theTree.constructor is function Tree(name) {
  this.name = name
}
</pre>

<h3 id="Changing_the_constructor_of_an_object">Changing the constructor of an object</h3>

<p>One can assign the <code>constructor</code> property for any value except <code>null</code> and <code>undefined</code> since those don't have a corresponding constructor function (like <code>String</code>, <code>Number</code>, <code>Boolean</code> etc.), but values which are primitives won't keep the change (with no exception thrown). This is due to the same mechanism, which allows one to set any property on primitive values (except <code>null</code> and <code>undefined</code>) with no effect. Namely whenever one uses such a primitive as an object an instance of the corresponding constructor is created and discarded right after the statement was executed.</p>

<pre class="brush: js">let val = null;
val.constructor = 1; //TypeError: var is null

val = 'abc';
val.constructor = Number; //val.constructor === String

val.foo = 'bar'; //An implicit instance of String('abc') was created and assigned the prop foo
val.foo === undefined; //true, since a new instance of String('abc') was created for this comparison, which doesn't have the foo property</pre>

<p>So basically one can change the value of the <code>constructor</code> property for anything, except the primitives mentioned above, <strong>note that changing the </strong><code>constructor</code><strong> property does not affect the instanceof operator</strong>:</p>

<pre class="brush: js">let a = [];
a.constructor = String
a.constructor === String // true
a instanceof String //false
a instanceof Array //true

a = new Foo();
a.constructor = 'bar'
a.constructor === 'bar' // true

//etc.</pre>

<p>If the object is sealed/frozen then the change has no effect and no exception is thrown:</p>

<pre class="brush: js">let a = Object.seal({});
a.constructor = Number;
a.constructor === Object; //true</pre>

<h3 id="Changing_the_constructor_of_a_function">Changing the constructor of a function</h3>

<p>Mostly this property is used for defining a function as a <strong>function-constructor</strong> with further calling it with <strong>new</strong> and prototype-inherits chain.</p>

<pre class="brush: js">function Parent() { /* ... */ }
Parent.prototype.parentMethod = function parentMethod() {}

function Child() {
   Parent.call(this) // Make sure everything is initialized properly
}
Child.prototype = Object.create(Parent.prototype) // re-define child prototype to Parent prototype

Child.prototype.constructor = Child // return original constructor to Child</pre>

<p>But when do we need to perform the last line here? Unfortunately, the answer is: <em>it depends</em>.</p>

<p>Let's try to define the cases in which re-assignment of the original constructor will play a major role, and when it will be one superfluous line of code.</p>

<p>Take the following case: the object has the <code>create()</code> method to create itself.</p>

<pre class="brush: js">function Parent() { /* ... */ }
function CreatedConstructor() {
   Parent.call(this)
}

CreatedConstructor.prototype = Object.create(Parent.prototype)

CreatedConstructor.prototype.create = function create() {
  return new this.constructor()
}

new CreatedConstructor().create().create() // TypeError undefined is not a function since constructor === Parent</pre>

<p>In the example above the exception will be shown since the constructor links to Parent.</p>

<p>To avoid this, just assign the necessary constructor you are going to use.</p>

<pre class="brush: js">function Parent() { /* ... */ }
function CreatedConstructor() { /* ... */ }

CreatedConstructor.prototype = Object.create(Parent.prototype)
CreatedConstructor.prototype.constructor = CreatedConstructor // sets the correct constructor for future use

CreatedConstructor.prototype.create = function create() {
  return new this.constructor()
}

new CreatedConstructor().create().create() // it's pretty fine</pre>

<p>Ok, now it's pretty clear why changing the constructor can be useful.</p>

<p>Let's consider one more case.</p>

<pre class="brush: js">function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y:0 } // Static member property
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition
}

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  }
}

Child = Object.assign(Child, ParentWithStatic)  // copies over the static members from ParentWithStatic to Child
Child.prototype = Object.create(ParentWithStatic.prototype)
Child.prototype.constructor = Child

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  let position = this.position
  let startPosition = this.constructor.getStartPosition() // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};</pre>

<p>For this example we need either to stay parent constructor to continue to work properly or reassign static properties to child's constructor:</p>

<pre class="brush: js">...
Child = Object.assign(Child, ParentWithStatic) // Notice that we assign it before we create(...) a prototype below
Child.prototype = Object.create(ParentWithStatic.prototype)
...
</pre>

<p>or assign parent constructor identifier to a separate property on the Child constructor function and access it via that property:</p>

<pre class="brush: js">...
Child.parentConstructor = ParentWithStatic
Child.prototype = Object.create(ParentWithStatic.prototype)
...
   let startPosition = this.constructor.parentConstructor.getStartPosition()
...
</pre>

<div class="notecard note">
<p><strong>Note:</strong> Manually updating or setting the constructor can lead to different and sometimes confusing consequences. To prevent this, just define the role of <code>constructor</code> in each specific case. In most cases, <code>constructor</code> is not used and reassignment of it is not necessary.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>


<ul>
 <li>{{jsxref("statements/class","Class declaration","",1)}}</li>
 <li>{{jsxref("Classes/constructor","Class constructor","",1)}}</li>
 <li>Glossary: {{Glossary("constructor", "", 1)}}</li>
</ul>
