---
title: Working with objects
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - Beginner
  - Comparing object
  - Document
  - Guide
  - JavaScript
  - Object
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}</div>

<p class="summary">JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or <em>key</em>) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.</p>

<h2 id="Objects_overview">Objects overview</h2>

<p>Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.</p>

<p>In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.</p>

<h2 id="Objects_and_properties">Objects and properties</h2>

<p>A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:</p>

<pre class="brush: js">objectName.propertyName
</pre>

<p>Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive. You can define a property by assigning it a value. For example, let's create an object named <code>myCar</code> and give it properties named <code>make</code>, <code>model</code>, and <code>year</code> as follows:</p>

<pre class="brush: js">var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
</pre>

<p>The above example could also be written using an <strong><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#object_initializers">object initializer</a></strong>, which is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (<code>{}</code>):</p>

<pre class="brush: js">var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
</pre>

<p>Unassigned properties of an object are {{jsxref("undefined")}} (and not {{jsxref("null")}}).</p>

<pre class="brush: js">myCar.color; // undefined</pre>

<p>Properties of JavaScript objects can also be accessed or set using a bracket notation (for more details see <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a>). Objects are sometimes called <em>associative arrays</em>, since each property is associated with a string value that can be used to access it. So, for example, you could access the properties of the <code>myCar</code> object as follows:</p>

<pre class="brush: js">myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
</pre>

<p>An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime). Examples are as follows:</p>

<pre class="brush: js">// four variables are created and assigned in a single go,
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);
</pre>

<p>Please note that all keys in the square bracket notation are converted to string unless they're Symbols, since JavaScript object property names (keys) can only be strings or Symbols (at some point, private names will also be added as the <a href="https://github.com/tc39/proposal-class-fields">class fields proposal</a> progresses, but you won't use them with <code>[]</code> form). For example, in the above code, when the key <code>obj</code> is added to the <code>myObj</code>, JavaScript will call the {{jsxref("Object.toString", "obj.toString()")}} method, and use this result string as the new key.</p>

<p>You can also access properties by using a string value that is stored in a variable:</p>

<pre class="brush: js">var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
</pre>

<p>You can use the bracket notation with <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:</p>

<pre class="brush: js">function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}
</pre>

<p>So, the function call <code>showProps(myCar, "myCar")</code> would return the following:</p>

<pre class="brush: js">myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969</pre>

<h2 id="Enumerate_the_properties_of_an_object">Enumerate the properties of an object</h2>

<p>Starting with <a href="/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla">ECMAScript 5</a>, there are three native ways to list/traverse object properties:</p>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> loops<br>
  This method traverses all enumerable properties of an object and its prototype chain.</li>
 <li>{{jsxref("Object.keys", "Object.keys(o)")}}<br>
  This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object <code>o</code>.</li>
 <li>{{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(o)")}}<br>
  This method returns an array containing all own properties' names (enumerable or not) of an object <code>o</code>.</li>
</ul>

<p>Before ECMAScript 5, there was no native way to list all properties of an object. However, this can be achieved with the following function:</p>

<pre class="brush: js">function listAllProperties(o) {
	var objectToInspect;
	var result = [];

	for(objectToInspect = o; objectToInspect !== null;
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

	return result;
}
</pre>

<p>This can be useful to reveal "hidden" properties (properties in the prototype chain which are not accessible through the object, because another property has the same name earlier in the prototype chain). Listing accessible properties only can easily be done by removing duplicates in the array.</p>

<h2 id="Creating_new_objects">Creating new objects</h2>

<p>JavaScript has a number of predefined objects. In addition, you can create your own objects. You can create an object using an <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer</a>. Alternatively, you can first create a constructor function and then instantiate an object invoking that function in conjunction with the <code>new</code> operator.</p>

<h3 id="Using_object_initializers"><span id="Object_initializers">Using object initializers</span></h3>

<p>In addition to creating objects using a constructor function, you can create objects using an <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer</a>. Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++.</p>

<p>The syntax for an object using an object initializer is:</p>

<pre class="brush: js">var obj = { property_1:   value_1,   // property_# may be an identifier...
            2:            value_2,   // or a number...
            // ...,
            'property n': value_n }; // or a string
</pre>

<p>where <code>obj</code> is the name of the new object, each <code>property_<var>i</var></code> is an identifier (either a name, a number, or a string literal), and each <code>value_<var>i</var></code> is an expression whose value is assigned to the <code>property_<var>i</var></code>. The <code>obj</code> and assignment is optional; if you do not need to refer to this object elsewhere, you do not need to assign it to a variable. (Note that you may need to wrap the object literal in parentheses if the object appears where a statement is expected, so as not to have the literal be confused with a block statement.)</p>

<p>Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that will not compare to each other as equal. Objects are created as if a call to <code>new Object()</code> were made; that is, objects made from object literal expressions are instances of <code>Object</code>.</p>

<p>The following statement creates an object and assigns it to the variable <code>x</code> if and only if the expression <code>cond</code> is true:</p>

<pre class="brush: js">if (cond) var x = {greeting: 'hi there'};
</pre>

<p>The following example creates <code>myHonda</code> with three properties. Note that the <code>engine</code> property is also an object with its own properties.</p>

<pre class="brush: js">var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
</pre>

<p>You can also use object initializers to create arrays. See <a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals">array literals</a>.</p>

<h3 id="Using_a_constructor_function">Using a constructor function</h3>

<p>Alternatively, you can create an object with these two steps:</p>

<ol>
 <li>Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.</li>
 <li>Create an instance of the object with <code>new</code>.</li>
</ol>

<p>To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called <code>Car</code>, and you want it to have properties for make, model, and year. To do this, you would write the following function:</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>Notice the use of <code>this</code> to assign values to the object's properties based on the values passed to the function.</p>

<p>Now you can create an object called <code>mycar</code> as follows:</p>

<pre class="brush: js">var mycar = new Car('Eagle', 'Talon TSi', 1993);
</pre>

<p>This statement creates <code>mycar</code> and assigns it the specified values for its properties. Then the value of <code>mycar.make</code> is the string "Eagle", <code>mycar.year</code> is the integer 1993, and so on.</p>

<p>You can create any number of <code>Car</code> objects by calls to <code>new</code>. For example,</p>

<pre class="brush: js">var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
</pre>

<p>An object can have a property that is itself another object. For example, suppose you define an object called <code>person</code> as follows:</p>

<pre class="brush: js">function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
</pre>

<p>and then instantiate two new <code>person</code> objects as follows:</p>

<pre class="brush: js">var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
</pre>

<p>Then, you can rewrite the definition of <code>Car</code> to include an <code>owner</code> property that takes a <code>person</code> object, as follows:</p>

<pre class="brush: js">function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
</pre>

<p>To instantiate the new objects, you then use the following:</p>

<pre class="brush: js">var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
</pre>

<p>Notice that instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects <code>rand</code> and <code>ken</code> as the arguments for the owners. Then if you want to find out the name of the owner of car2, you can access the following property:</p>

<pre class="brush: js">car2.owner.name
</pre>

<p>Note that you can always add a property to a previously defined object. For example, the statement</p>

<pre class="brush: js">car1.color = 'black';
</pre>

<p>adds a property <code>color</code> to car1, and assigns it a value of "black." However, this does not affect any other objects. To add the new property to all objects of the same type, you have to add the property to the definition of the <code>Car</code> object type.</p>

<h3 id="Using_the_Object.create_method">Using the <code>Object.create</code> method</h3>

<p>Objects can also be created using the {{jsxref("Object.create()")}} method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.</p>

<pre class="brush: js">// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes</pre>

<h2 id="Inheritance">Inheritance</h2>

<p>All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the <code>prototype</code> object of the constructor. See <a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">Inheritance and the prototype chain</a> for more information.</p>

<h2 id="Indexing_object_properties">Indexing object properties</h2>

<p>You can refer to a property of an object either by its property name or by its ordinal index. If you initially define a property by its name, you must always refer to it by its name, and if you initially define a property by an index, you must always refer to it by its index.</p>

<p>This restriction applies when you create an object and its properties with a constructor function (as we did previously with the <code>Car</code> object type) and when you define individual properties explicitly (for example, <code>myCar.color = "red"</code>). If you initially define an object property with an index, such as <code>myCar[5] = "25 mpg"</code>, you subsequently refer to the property only as <code>myCar[5]</code>.</p>

<p>The exception to this rule is array-like object reflected from HTML, such as the <code>forms</code> array-like object. You can always refer to objects in these array-like objects by either their ordinal number (based on where they appear in the document) or their name (if defined). For example, if the second <code>&lt;FORM&gt;</code> tag in a document has a <code>NAME</code> attribute of "myForm", you can refer to the form as <code>document.forms[1]</code> or <code>document.forms["myForm"]</code> or <code>document.forms.myForm</code>.</p>

<h2 id="Defining_properties_for_an_object_type">Defining properties for an object type</h2>

<p>You can add a property to a previously defined object type by using the <code>prototype</code> property. This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object. The following code adds a <code>color</code> property to all objects of type <code>Car</code>, and then assigns a value to the <code>color</code> property of the object <code>car1</code>.</p>

<pre class="brush: js">Car.prototype.color = null;
car1.color = 'black';
</pre>

<p>See the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>prototype</code> property</a> of the <code>Function</code> object in the <a href="/en-US/docs/Web/JavaScript/Reference">JavaScript reference</a> for more information.</p>

<h2 id="Defining_methods">Defining methods</h2>

<p>A <em>method</em> is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. See also <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definitions</a> for more details. An example is:</p>

<pre class="brush: js">objectName.methodname = functionName;

var myObj = {
  myMethod: function(params) {
    // ...do something
  }

  // OR THIS WORKS TOO

  myOtherMethod(params) {
    // ...do something else
  }
};
</pre>

<p>where <code>objectName</code> is an existing object, <code>methodname</code> is the name you are assigning to the method, and <code>functionName</code> is the name of the function.</p>

<p>You can then call the method in the context of the object as follows:</p>

<pre class="brush: js">object.methodname(params);
</pre>

<p>You can define methods for an object type by including a method definition in the object constructor function. You could define a function that would format and display the properties of the previously-defined <code>Car</code> objects; for example,</p>

<pre class="brush: js">function displayCar() {
  var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  pretty_print(result);
}
</pre>

<p>where <code>pretty_print</code> is a function to display a horizontal rule and a string. Notice the use of <code>this</code> to refer to the object to which the method belongs.</p>

<p>You can make this function a method of <code>Car</code> by adding the statement</p>

<pre class="brush: js">this.displayCar = displayCar;
</pre>

<p>to the object definition. So, the full definition of <code>Car</code> would now look like</p>

<pre class="brush: js">function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
</pre>

<p>Then you can call the <code>displayCar</code> method for each of the objects as follows:</p>

<pre class="brush: js">car1.displayCar();
car2.displayCar();
</pre>

<h2 id="Using_this_for_object_references">Using <code>this</code> for object references</h2>

<p>JavaScript has a special keyword, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a></code>, that you can use within a method to refer to the current object. For example, suppose you have 2 objects, <code>Manager</code>and <code>Intern</code>. Each object have their own <code>name</code>, <code>age</code> and <code>job</code>.  In the function <code>sayHi()</code>, notice there is <code>this.name</code>. When added to the 2 objects they can be called and returns the <code>'Hello, My name is'</code> then adds the <code>name</code> value from that specific object. As shown below. </p>

<pre class="brush: js">const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern= {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}

function sayHi() {
    console.log('Hello, my name is', this.name)
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi() // Hello, my name is John'
Intern.sayHi() // Hello, my name is Ben'
</pre>

<p>The <code>this</code> refers to the object that it is in. You can create a new function called <code>howOldAmI()</code>which logs a sentence saying how old the person is. </p>

<pre class="brush: js">function howOldAmI (){
  console.log('I am ' + this.age + ' years old.')
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI() // I am 27 years old.
</pre>

<h2 id="Defining_getters_and_setters">Defining getters and setters</h2>

<p>A <a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> is a method that gets the value of a specific property. A <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a> is a method that sets the value of a specific property. You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties. </p>

<p>Getters and setters can be either</p>

<ul>
 <li>defined using <a href="#object_initializers">object initializers</a>, or</li>
 <li>added later to any object at any time using a getter or setter adding method.</li>
</ul>

<p>When defining getters and setters using <a href="#object_initializers">object initializers</a> all you need to do is to prefix a getter method with <code>get</code> and a setter method with <code>set</code>. Of course, the getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set). For instance:</p>

<pre class="brush: js">var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 &lt;-- At this point the get b() method is initiated.
o.c = 50;         //   &lt;-- At this point the set c(x) method is initiated
console.log(o.a); // 25
</pre>

<p>The <code>o</code> object's properties are:</p>

<ul>
 <li><code>o.a</code> — a number</li>
 <li><code>o.b</code> — a getter that returns <code>o.a</code> plus 1</li>
 <li><code>o.c</code> — a setter that sets the value of <code>o.a</code> to half of the value <code>o.c</code> is being set to</li>
</ul>

<p>Please note that function names of getters and setters defined in an object literal using "[gs]et <em>property</em>()" (as opposed to <code>__define[GS]etter__</code> ) are not the names of the getters themselves, even though the <code>[gs]et <em>propertyName</em>(){ }</code> syntax may mislead you to think otherwise.</p>

<p>Getters and setters can also be added to an object at any time after creation using the <code>Object.defineProperties</code> method. This method's first parameter is the object on which you want to define the getter or setter. The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions. Here's an example that defines the same getter and setter used in the previous example:</p>

<pre class="brush: js">var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6
</pre>

<p>Which of the two forms to choose depends on your programming style and task at hand. If you already go for the object initializer when defining a prototype you will probably most of the time choose the first form. This form is more compact and natural. However, if you need to add getters and setters later — because you did not write the prototype or particular object — then the second form is the only possible form. The second form probably best represents the dynamic nature of JavaScript — but it can make the code hard to read and understand.</p>

<h2 id="Deleting_properties">Deleting properties</h2>

<p>You can remove a non-inherited property by using the <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> operator. The following code shows how to remove a property.</p>

<pre class="brush: js">// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"
</pre>

<p>You can also use <code>delete</code> to delete a global variable if the <code>var</code> keyword was not used to declare the variable:</p>

<pre class="brush: js">g = 17;
delete g;
</pre>

<h2 id="Comparing_objects">Comparing objects</h2>

<p>In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.</p>

<pre class="brush: js">// Two variables, two distinct objects with the same properties
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false</pre>

<pre class="brush: js">// Two variables, a single object
var fruit = {name: 'apple'};
var fruitbear = fruit;  // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
</pre>

<p>For more information about comparison operators, see <a href="/en-US/docs/Web/JavaScript/Reference/Operators">Comparison operators</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>To dive deeper, read about the <a href="/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model">details of JavaScript's object model</a>.</li>
 <li>To learn about ECMAScript 2015 classes (an alternative way to create objects), read the <a href="/en-US/docs/Web/JavaScript/Reference/Classes">JavaScript classes</a> chapter.</li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}</p>
