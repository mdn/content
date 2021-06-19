---
title: Details of the object model
slug: Web/JavaScript/Guide/Details_of_the_Object_Model
tags:
  - Guide
  - Intermediate
  - JavaScript
  - Object
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>

<p class="summary">JavaScript is an object-based language based on prototypes, rather than being class-based. Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies of objects and to have inheritance of properties and their values. This chapter attempts to clarify the situation.</p>

<p>This chapter assumes that you are already somewhat familiar with JavaScript and that you have used JavaScript functions to create simple objects.</p>

<h2 id="Class-based_vs._prototype-based_languages">Class-based vs. prototype-based languages</h2>

<p>Class-based object-oriented languages, such as Java and C++, are founded on the concept of two distinct entities: classes and instances.</p>

<ul>
 <li>A <em>class</em> defines all of the properties that characterize a certain set of objects (considering methods and fields in Java, or members in C++, to be properties). A class is abstract rather than any particular member in a set of objects it describes. For example, the <code>Employee</code> class could represent the set of all employees.</li>
 <li>An <em>instance</em>, on the other hand, is the instantiation of a class; that is. For example, <code>Victoria</code> could be an instance of the <code>Employee</code> class, representing a particular individual as an employee. An instance has exactly the same properties of its parent class (no more, no less).</li>
</ul>

<p>A prototype-based language, such as JavaScript, does not make this distinction: it has objects. A prototype-based language has the notion of a <em>prototypical object</em>, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the <em>prototype</em> for another object, allowing the second object to share the first object's properties.</p>

<h3 id="Defining_a_class">Defining a class</h3>

<p>In class-based languages, you define a class in a separate <em>class definition</em>. In that definition you can specify special methods, called <em>constructors</em>, to create instances of the class. A constructor method can specify initial values for the instance's properties and perform other processing appropriate at creation time. You use the <code>new</code> operator in association with the constructor method to create class instances.</p>

<p>JavaScript follows a similar model, but does not have a class definition separate from the constructor. Instead, you define a constructor function to create objects with a particular initial set of properties and values. Any JavaScript function can be used as a constructor. You use the <code>new</code> operator with a constructor function to create a new object.</p>

<div class="notecard note">
<p><strong>Note:</strong> ECMAScript 2015 introduces a <a href="/en-US/docs/Web/JavaScript/Reference/Classes">class declaration</a>:</p>

<blockquote>
<p>JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax <em>does not</em> introduce a new object-oriented inheritance model to JavaScript.</p>
</blockquote>
</div>

<h3 id="Subclasses_and_inheritance">Subclasses and inheritance</h3>

<p>In a class-based language, you create a hierarchy of classes through the class definitions. In a class definition, you can specify that the new class is a <em>subclass</em> of an already existing class. The subclass inherits all the properties of the superclass and additionally can add new properties or modify the inherited ones. For example, assume the <code>Employee</code> class includes only the <code>name</code> and <code>dept</code> properties, and <code>Manager</code> is a subclass of <code>Employee</code> that adds the <code>reports</code> property. In this case, an instance of the <code>Manager</code> class would have all three properties: <code>name</code>, <code>dept</code>, and <code>reports</code>.</p>

<p>JavaScript implements inheritance by allowing you to associate a prototypical object with any constructor function. So, you can create exactly the <code>Employee</code> — <code>Manager</code> example, but you use slightly different terminology. First you define the <code>Employee</code> constructor function, specifying the <code>name</code> and <code>dept</code> properties. Next, you define the <code>Manager</code> constructor function, calling the <code>Employee</code> constructor and specifying the <code>reports</code> property. Finally, you assign a new object derived from <code>Employee.prototype</code> as the <code>prototype</code> for the <code>Manager</code> constructor function. Then, when you create a new <code>Manager</code>, it inherits the <code>name</code> and <code>dept</code> properties from the <code>Employee</code> object.</p>

<h3 id="Adding_and_removing_properties">Adding and removing properties</h3>

<p>In class-based languages, you typically create a class at compile time and then you instantiate instances of the class either at compile time or at run time. You cannot change the number or the type of properties of a class after you define the class. In JavaScript, however, at run time you can add or remove properties of any object. If you add a property to an object that is used as the prototype for a set of objects, the objects for which it is the prototype also get the new property.</p>

<h3 id="Summary_of_differences">Summary of differences</h3>

<p>The following table gives a short summary of some of these differences. The rest of this chapter describes the details of using JavaScript constructors and prototypes to create an object hierarchy and compares this to how you would do it in Java.</p>

<table class="standard-table">
 <caption>Comparison of class-based (Java) and prototype-based (JavaScript) object systems</caption>
 <thead>
  <tr>
   <th scope="row">Category</th>
   <th scope="col">Class-based (Java)</th>
   <th scope="col">Prototype-based (JavaScript)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Class vs. Instance</th>
   <td>Class and instance are distinct entities.</td>
   <td>All objects can inherit from another object.</td>
  </tr>
  <tr>
   <th scope="row">Definition</th>
   <td>Define a class with a class definition; instantiate a class with constructor methods.</td>
   <td>Define and create a set of objects with constructor functions.</td>
  </tr>
  <tr>
   <th scope="row">Creation of new object</th>
   <td>Create a single object with the <code>new</code> operator.</td>
   <td>Same.</td>
  </tr>
  <tr>
   <th scope="row">Construction of object hierarchy</th>
   <td>Construct an object hierarchy by using class definitions to define subclasses of existing classes.</td>
   <td>Construct an object hierarchy by assigning an object as the prototype associated with a constructor function.</td>
  </tr>
  <tr>
   <th scope="row">Inheritance model</th>
   <td>Inherit properties by following the class chain.</td>
   <td>Inherit properties by following the prototype chain.</td>
  </tr>
  <tr>
   <th scope="row">Extension of properties</th>
   <td>Class definition specifies <em>all</em> properties of all instances of a class. Cannot add properties dynamically at run time.</td>
   <td>Constructor function or prototype specifies an <em>initial set</em> of properties. Can add or remove properties dynamically to individual objects or to the entire set of objects.</td>
  </tr>
 </tbody>
</table>

<h2 id="The_employee_example">The employee example</h2>

<p>The remainder of this chapter uses the employee hierarchy shown in the following figure.</p>

<p><img alt="" src="figure8.1.png"></p>

<p>This shows an object hierarchy with the following objects:</p>

<ul>
 <li><code>Employee</code> has the properties <code>name</code> (whose value defaults to the empty string) and <code>dept</code> (whose value defaults to "general").</li>
 <li><code>Manager</code> is based on <code>Employee</code>. It adds the <code>reports</code> property (whose value defaults to an empty array, intended to have an array of <code>Employee</code> objects as its value).</li>
 <li><code>WorkerBee</code> is also based on <code>Employee</code>. It adds the <code>projects</code> property (whose value defaults to an empty array, intended to have an array of strings as its value).</li>
 <li><code>SalesPerson</code> is based on <code>WorkerBee</code>. It adds the <code>quota</code> property (whose value defaults to 100). It also overrides the <code>dept</code> property with the value "sales", indicating that all salespersons are in the same department.</li>
 <li><code>Engineer</code> is based on <code>WorkerBee</code>. It adds the <code>machine</code> property (whose value defaults to the empty string) and also overrides the <code>dept</code> property with the value "engineering".</li>
</ul>


<h2 id="Creating_the_hierarchy">Creating the hierarchy</h2>

<p>There are several ways to define appropriate constructor functions to implement the Employee hierarchy. How you choose to define them depends largely on what you want to be able to do in your application.</p>

<p>This section shows how to use very simple (and comparatively inflexible) definitions to demonstrate how to get the inheritance to work. In these definitions, you cannot specify any property values when you create an object. The newly-created object gets the default values, which you can change at a later time.</p>

<p>In a real application, you would probably define constructors that allow you to provide property values at object creation time (see <a href="#more_flexible_constructors">More flexible constructors</a> for information). For now, these simple definitions demonstrate how the inheritance occurs.</p>

<p>The following Java and JavaScript <code>Employee</code> definitions are similar. The only difference is that you need to specify the type for each property in Java but not in JavaScript (this is due to Java being a <a href="https://en.wikipedia.org/wiki/Strong_and_weak_typing">strongly typed language</a> while JavaScript is a weakly typed language).</p>

<h4 id="JavaScript_using_this_may_cause_an_error_for_the_following_examples">JavaScript (using this may cause an error for the following examples)</h4>

<pre class="brush: js">class Employee {
  constructor() {
    this.name = '';
    this.dept = 'general';
  }
}
</pre>

<h4 id="JavaScript_**_use_this_instead">JavaScript ** (use this instead)</h4>

<pre class="brush: js">function Employee() {
    this.name = '';
    this.dept = 'general';
}
</pre>

<h4 id="Java">Java</h4>

<pre class="brush: java">public class Employee {
   public String name = "";
   public String dept = "general";
}
</pre>

<p>The <code>Manager</code> and <code>WorkerBee</code> definitions show the difference in how to specify the next object higher in the inheritance chain. In JavaScript, you add a prototypical instance as the value of the <code>prototype</code> property of the constructor function, then override the <code>prototype.constructor</code> to the constructor function. You can do so at any time after you define the constructor. In Java, you specify the superclass within the class definition. You cannot change the superclass outside the class definition.</p>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;
</pre>

<h4 id="Java_2">Java</h4>

<pre class="brush: java">public class Manager extends Employee {
   public Employee[] reports =
       new Employee[0];
}

public class WorkerBee extends Employee {
   public String[] projects = new String[0];
}
</pre>

<p>The <code>Engineer</code> and <code>SalesPerson</code> definitions create objects that descend from <code>WorkerBee</code> and hence from <code>Employee</code>. An object of these types has properties of all the objects above it in the chain. In addition, these definitions override the inherited value of the <code>dept</code> property with new values specific to these objects.</p>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js">function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
   WorkerBee.call(this);
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype)
Engineer.prototype.constructor = Engineer;
</pre>

<h4 id="Java_3">Java</h4>

<pre class="brush: java">public class SalesPerson extends WorkerBee {
   public String dept = "sales";
   public double quota = 100.0;
}

public class Engineer extends WorkerBee {
   public String dept = "engineering";
   public String machine = "";
}
</pre>

<p>Using these definitions, you can create instances of these objects that get the default values for their properties. The next figure illustrates using these JavaScript definitions to create new objects and shows the property values for the new objects.</p>

<div class="note">
<p><strong>Note:</strong> The term <em>instance</em> has a specific technical meaning in class-based languages. In these languages, an instance is an individual instantiation of a class and is fundamentally different from a class. In JavaScript, "instance" does not have this technical meaning because JavaScript does not have this difference between classes and instances. However, in talking about JavaScript, "instance" can be used informally to mean an object created using a particular constructor function. So, in this example, you could informally say that <code>jane</code> is an instance of <code>Engineer</code>. Similarly, although the terms <em>parent</em>, <em>child</em>, <em>ancestor</em>, and <em>descendant</em> do not have formal meanings in JavaScript; you can use them informally to refer to objects higher or lower in the prototype chain.</p>
</div>

<h3 id="Creating_objects_with_simple_definitions">Creating objects with simple definitions</h3>

<div class="twocolumns">
<h4 id="Object_hierarchy">Object hierarchy</h4>

<p>The following hierarchy is created using the code on the right side.</p>

<p><img src="figure8.3.png"></p>

<h4 id="Individual_objects_Jim_Sally_Mark_Fred_Jane_etc._Instances_created_from_constructor">Individual objects = Jim, Sally, Mark, Fred, Jane, etc.<br>
 "Instances" created from constructor</h4>

<pre class="brush: js">var jim = new Employee;
// Parentheses can be omitted if the
// constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
// mark.name is ''
// mark.dept is 'general'
// mark.projects is []

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer;
// jane.name is ''
// jane.dept is 'engineering'
// jane.projects is []
// jane.machine is ''
</pre>
</div>

<h2 id="Object_properties">Object properties</h2>

<p>This section discusses how objects inherit properties from other objects in the prototype chain and what happens when you add a property at run time.</p>

<h3 id="Inheriting_properties">Inheriting properties</h3>

<p>Suppose you create the <code>mark</code> object as a <code>WorkerBee</code> with the following statement:</p>

<pre class="brush: js">var mark = new WorkerBee;
</pre>

<p>When JavaScript sees the <code>new</code> operator, it creates a new generic object and implicitly sets the value of the internal property [[Prototype]] to the value of <code>WorkerBee.prototype</code> and passes this new object as the value of the <em><code>this</code></em> keyword to the <code>WorkerBee</code> constructor function. The internal [[Prototype]] property determines the prototype chain used to return property values. Once these properties are set, JavaScript returns the new object and the assignment statement sets the variable <code>mark</code> to that object.</p>

<p>This process does not explicitly put values in the <code>mark</code> object (<em>local</em> values) for the properties that <code>mark</code> inherits from the prototype chain. When you ask for the value of a property, JavaScript first checks to see if the value exists in that object. If it does, that value is returned. If the value is not there locally, JavaScript checks the prototype chain (using the internal [[Prototype]] property). If an object in the prototype chain has a value for the property, that value is returned. If no such property is found, JavaScript says the object does not have the property. In this way, the <code>mark</code> object has the following properties and values:</p>

<pre class="brush: js">mark.name = '';
mark.dept = 'general';
mark.projects = [];
</pre>

<p>The <code>mark</code> object is assigned local values for the <code>name</code> and <code>dept</code> properties by the Employee constructor. It is assigned a local value for the <code>projects</code> property by the <code>WorkerBee</code> constructor. This gives you inheritance of properties and their values in JavaScript. Some subtleties of this process are discussed in <a href="#property_inheritance_revisited">Property inheritance revisited</a>.</p>

<p>Because these constructors do not let you supply instance-specific values, this information is generic. The property values are the default ones shared by all new objects created from <code>WorkerBee</code>. You can, of course, change the values of any of these properties. So, you could give specific information for <code>mark</code> as follows:</p>

<pre class="brush: js">mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];</pre>

<h3 id="Adding_properties">Adding properties</h3>

<p>In JavaScript, you can add properties to any object at run time. You are not constrained to use only the properties provided by the constructor function. To add a property that is specific to a single object, you assign a value to the object, as follows:</p>

<pre class="brush: js">mark.bonus = 3000;
</pre>

<p>Now, the <code>mark</code> object has a <code>bonus</code> property, but no other <code>WorkerBee</code> has this property.</p>

<p>If you add a new property to an object that is being used as the prototype for a constructor function, you add that property to all objects that inherit properties from the prototype. For example, you can add a <code>specialty</code> property to all employees with the following statement:</p>

<pre class="brush: js">Employee.prototype.specialty = 'none';
</pre>

<p>As soon as JavaScript executes this statement, the <code>mark</code> object also has the <code>specialty</code> property with the value of <code>"none"</code>. The following figure shows the effect of adding this property to the <code>Employee</code> prototype and then overriding it for the <code>Engineer</code> prototype.</p>

<img alt="Adding properties" src="figure8.4.png">

<h2 id="More_flexible_constructors">More flexible constructors</h2>

<p>The constructor functions shown so far do not let you specify property values when you create an instance. As with Java, you can provide arguments to constructors to initialize property values for instances. The following figure shows one way to do this.</p>

<img alt="Specifying properties in a constructor, take 1" src="figure8.5.png">

<p>The following pairs of examples show the Java and JavaScript definitions for these objects.</p>

<pre class="brush: js">function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
}
</pre>

<pre class="brush: java">public class Employee {
   public String name;
   public String dept;
   public Employee () {
      this("", "general");
   }
   public Employee (String name) {
      this(name, "general");
   }
   public Employee (String name, String dept) {
      this.name = name;
      this.dept = dept;
   }
}
</pre>

<pre class="brush: js">function WorkerBee(projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;
</pre>

<pre class="brush: java">public class WorkerBee extends Employee {
   public String[] projects;
   public WorkerBee () {
      this(new String[0]);
   }
   public WorkerBee (String[] projs) {
      projects = projs;
   }
}
</pre>

<pre class="brush: js">
function Engineer(mach) {
  this.dept = 'engineering';
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
</pre>

<pre class="brush: java">public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      dept = "engineering";
      machine = "";
   }
   public Engineer (String mach) {
      dept = "engineering";
      machine = mach;
   }
}
</pre>

<p>These JavaScript definitions use a special idiom for setting default values:</p>

<pre class="brush: js">this.name = name || '';
</pre>

<p>The JavaScript logical OR operator (<code>||</code>) evaluates its first argument. If that argument converts to true, the operator returns it. Otherwise, the operator returns the value of the second argument. Therefore, this line of code tests to see if <code>name</code> has a useful value for the <code>name</code> property. If it does, it sets <code>this.name</code> to that value. Otherwise, it sets <code>this.name</code> to the empty string. This chapter uses this idiom for brevity; however, it can be puzzling at first glance.</p>

<div class="note">
<p><strong>Note:</strong> This may not work as expected if the constructor function is called with arguments which convert to <code>false</code> (like <code>0</code> (zero) and empty string (<code>""</code>)). In this case the default value will be chosen.</p>
</div>

<p>With these definitions, when you create an instance of an object, you can specify values for the locally defined properties. You can use the following statement to create a new <code>Engineer</code>:</p>

<pre class="brush: js">var jane = new Engineer('belau');
</pre>

<p><code>Jane</code>'s properties are now:</p>

<pre class="brush: js">jane.name == '';
jane.dept == 'engineering';
jane.projects == [];
jane.machine == 'belau';
</pre>

<p>Notice that with these definitions, you cannot specify an initial value for an inherited property such as <code>name</code>. If you want to specify an initial value for inherited properties in JavaScript, you need to add more code to the constructor function.</p>

<p>So far, the constructor function has created a generic object and then specified local properties and values for the new object. You can have the constructor add more properties by directly calling the constructor function for an object higher in the prototype chain. The following figure shows these new definitions.</p>

<img alt="Specifying properties in a constructor, take 2" src="figure8.6.png">

<p>Let's look at one of these definitions in detail. Here's the new definition for the <code>Engineer</code> constructor:</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<p>Suppose you create a new <code>Engineer</code> object as follows:</p>

<pre class="brush: js">var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
</pre>

<p>JavaScript follows these steps:</p>

<ol>
 <li>The <code>new</code> operator creates a generic object and sets its <code>__proto__</code> property to <code>Engineer.prototype</code>.</li>
 <li>The <code>new</code> operator passes the new object to the <code>Engineer</code> constructor as the value of the <code>this</code> keyword.</li>
 <li>The constructor creates a new property called <code>base</code> for that object and assigns the value of the <code>WorkerBee</code> constructor to the <code>base</code> property. This makes the <code>WorkerBee</code> constructor a method of the <code>Engineer</code> object. The name of the <code>base</code> property is not special. You can use any legal property name; <code>base</code> is evocative of its purpose.</li>
 <li>The constructor calls the <code>base</code> method, passing as its arguments two of the arguments passed to the constructor (<code>"Doe, Jane"</code> and <code>["navigator", "javascript"]</code>) and also the string <code>"engineering"</code>. Explicitly using <code>"engineering"</code> in the constructor indicates that all <code>Engineer</code> objects have the same value for the inherited <code>dept</code> property, and this value overrides the value inherited from <code>Employee</code>.</li>
 <li>Because <code>base</code> is a method of <code>Engineer</code>, within the call to <code>base</code>, JavaScript binds the <code>this</code> keyword to the object created in Step 1. Thus, the <code>WorkerBee</code> function in turn passes the <code>"Doe, Jane"</code> and <code>"engineering"</code> arguments to the <code>Employee</code> constructor function. Upon return from the <code>Employee</code> constructor function, the <code>WorkerBee</code> function uses the remaining argument to set the <code>projects</code> property.</li>
 <li>Upon return from the <code>base</code> method, the <code>Engineer</code> constructor initializes the object's <code>machine</code> property to <code>"belau"</code>.</li>
 <li>Upon return from the constructor, JavaScript assigns the new object to the <code>jane</code> variable.</li>
</ol>

<p>You might think that, having called the <code>WorkerBee</code> constructor from inside the <code>Engineer</code> constructor, you have set up inheritance appropriately for <code>Engineer</code> objects. This is not the case. Calling the <code>WorkerBee</code> constructor ensures that an <code>Engineer</code> object starts out with the properties specified in all constructor functions that are called. However, if you later add properties to the <code>Employee</code> or <code>WorkerBee</code> prototypes, those properties are not inherited by the <code>Engineer</code> object. For example, assume you have the following statements:</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
Employee.prototype.specialty = 'none';
</pre>

<p>The <code>jane</code> object does not inherit the <code>specialty</code> property. You still need to explicitly set up the prototype to ensure dynamic inheritance. Assume instead you have these statements:</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
Employee.prototype.specialty = 'none';
</pre>

<p>Now the value of the <code>jane</code> object's <code>specialty</code> property is "none".</p>

<p>Another way of inheriting is by using the <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code> / <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><code>apply()</code></a> methods. Below are equivalent:</p>

<pre class="brush: js">function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<pre class="brush: js">function Engineer(name, projs, mach) {
  WorkerBee.call(this, name, 'engineering', projs);
  this.machine = mach || '';
}
</pre>

<p>Using the javascript <code>call()</code> method makes a cleaner implementation because the <code>base</code> is not needed anymore.</p>

<h2 id="Property_inheritance_revisited">Property inheritance revisited</h2>

<p>The preceding sections described how JavaScript constructors and prototypes provide hierarchies and inheritance. This section discusses some subtleties that were not necessarily apparent in the earlier discussions.</p>

<h3 id="Local_versus_inherited_values">Local versus inherited values</h3>

<p>When you access an object property, JavaScript performs these steps, as described earlier in this chapter:</p>

<ol>
 <li>Check to see if the value exists locally. If it does, return that value.</li>
 <li>If there is not a local value, check the prototype chain (using the <code>__proto__</code> property).</li>
 <li>If an object in the prototype chain has a value for the specified property, return that value.</li>
 <li>If no such property is found, the object does not have the property.</li>
</ol>

<p>The outcome of these steps depends on how you define things along the way. The original example had these definitions:</p>

<pre class="brush: js">function Employee() {
  this.name = '';
  this.dept = 'general';
}

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
</pre>

<p>With these definitions, suppose you create <code>amy</code> as an instance of <code>WorkerBee</code> with the following statement:</p>

<pre class="brush: js">var amy = new WorkerBee;
</pre>

<p>The <code>amy</code> object has one local property, <code>projects</code>. The values for the <code>name</code> and <code>dept</code> properties are not local to <code>amy</code> and so derive from the <code>amy</code> object's <code>__proto__</code> property. Thus, <code>amy</code> has these property values:</p>

<pre class="brush: js">amy.name == '';
amy.dept == 'general';
amy.projects == [];
</pre>

<p>Now suppose you change the value of the <code>name</code> property in the prototype associated with <code>Employee</code>:</p>

<pre class="brush: js">Employee.prototype.name = 'Unknown';
</pre>

<p>At first glance, you might expect that new value to propagate down to all the instances of <code>Employee</code>. However, it does not.</p>

<p>When you create <em>any</em> instance of the <code>Employee</code> object, that instance gets a <strong>local value</strong> for the <code>name</code> property (the empty string). This means that when you set the <code>WorkerBee</code> prototype by creating a new <code>Employee</code> object, <code>WorkerBee.prototype</code> has a local value for the <code>name</code> property. Therefore, when JavaScript looks up the <code>name</code> property of the <code>amy</code> object (an instance of <code>WorkerBee</code>), JavaScript finds the local value for that property in <code>WorkerBee.prototype</code>. It therefore does not look further up the chain to <code>Employee.prototype</code>.</p>

<p>If you want to change the value of an object property at run time and have the new value be inherited by all descendants of the object, you cannot define the property in the object's constructor function. Instead, you add it to the constructor's associated prototype. For example, assume you change the preceding code to the following:</p>

<pre class="brush: js">function Employee() {
  this.dept = 'general';    // Note that this.name (a local variable) does not appear here
}
Employee.prototype.name = '';    // A single copy

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;

Employee.prototype.name = 'Unknown';
</pre>

<p>In this case, the <code>name</code> property of <code>amy</code> becomes "Unknown".</p>

<p>As these examples show, if you want to have default values for object properties and you want to be able to change the default values at run time, you should set the properties in the constructor's prototype, not in the constructor function itself.</p>

<h3 id="Determining_instance_relationships">Determining instance relationships</h3>

<p>Property lookup in JavaScript looks within an object's own properties and, if the property name is not found, it looks within the special object property <code>__proto__</code>. This continues recursively; the process is called "lookup in the prototype chain".</p>

<p>The special property <code>__proto__</code> is set when an object is constructed; it is set to the value of the constructor's <code>prototype</code> property. So the expression <code>new Foo()</code> creates an object with <code>__proto__ == Foo.prototype</code>. Consequently, changes to the properties of <code>Foo.prototype</code> alters the property lookup for all objects that were created by <code>new Foo()</code>.</p>

<p>Every object has a <code>__proto__</code> object property (except <code>Object</code>); every function has a <code>prototype</code> object property. So objects can be related by 'prototype inheritance' to other objects. You can test for inheritance by comparing an object's <code>__proto__</code> to a function's <code>prototype</code> object. JavaScript provides a shortcut: the <code>instanceof</code> operator tests an object against a function and returns true if the object inherits from the function prototype. For example,</p>

<pre class="brush: js">var f = new Foo();
var isTrue = (f instanceof Foo);</pre>

<p>For a more detailed example, suppose you have the same set of definitions shown in <a href="#inheriting_properties">Inheriting properties</a>. Create an <code>Engineer</code> object as follows:</p>

<pre class="brush: js">var chris = new Engineer('Pigman, Chris', ['jsd'], 'fiji');
</pre>

<p>With this object, the following statements are all true:</p>

<pre class="brush: js">chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;
</pre>

<p>Given this, you could write an <code>instanceOf</code> function as follows:</p>

<pre class="brush: js">function instanceOf(object, constructor) {
   object = object.__proto__;
   while (object != null) {
      if (object == constructor.prototype)
         return true;
      if (typeof object == 'xml') {
        return constructor.prototype == XML.prototype;
      }
      object = object.__proto__;
   }
   return false;
}
</pre>

<div class="note"><p><strong>Note:</strong> The implementation above checks the type of the object against "xml" in order to work around a quirk of how XML objects are represented in recent versions of JavaScript. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=634150">bug 634150</a> if you want the nitty-gritty details.</p></div>

<p>Using the instanceOf function defined above, these expressions are true:</p>

<pre class="brush: js">instanceOf(chris, Engineer)
instanceOf(chris, WorkerBee)
instanceOf(chris, Employee)
instanceOf(chris, Object)
</pre>

<p>But the following expression is false:</p>

<pre class="brush: js">instanceOf(chris, SalesPerson)
</pre>

<h3 id="Global_information_in_constructors">Global information in constructors</h3>

<p>When you create constructors, you need to be careful if you set global information in the constructor. For example, assume that you want a unique ID to be automatically assigned to each new employee. You could use the following definition for <code>Employee</code>:</p>

<pre class="brush: js">var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}
</pre>

<p>With this definition, when you create a new <code>Employee</code>, the constructor assigns it the next ID in sequence and then increments the global ID counter. So, if your next statement is the following, <code>victoria.id</code> is 1 and <code>harry.id</code> is 2:</p>

<pre class="brush: js">var victoria = new Employee('Pigbert, Victoria', 'pubs');
var harry = new Employee('Tschopik, Harry', 'sales');
</pre>

<p>At first glance that seems fine. However, <code>idCounter</code> gets incremented every time an <code>Employee</code> object is created, for whatever purpose. If you create the entire <code>Employee</code> hierarchy shown in this chapter, the <code>Employee</code> constructor is called every time you set up a prototype. Suppose you have the following code:</p>

<pre class="brush: js">var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}

function Manager(name, dept, reports) {...}
Manager.prototype = new Employee;

function WorkerBee(name, dept, projs) {...}
WorkerBee.prototype = new Employee;

function Engineer(name, projs, mach) {...}
Engineer.prototype = new WorkerBee;

function SalesPerson(name, projs, quota) {...}
SalesPerson.prototype = new WorkerBee;

var mac = new Engineer('Wood, Mac');
</pre>

<p>Further assume that the definitions omitted here have the <code>base</code> property and call the constructor above them in the prototype chain. In this case, by the time the <code>mac</code> object is created, <code>mac.id</code> is 5.</p>

<p>Depending on the application, it may or may not matter that the counter has been incremented these extra times. If you care about the exact value of this counter, one possible solution involves instead using the following constructor:</p>

<pre class="brush: js">function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   if (name)
      this.id = idCounter++;
}
</pre>

<p>When you create an instance of <code>Employee</code> to use as a prototype, you do not supply arguments to the constructor. Using this definition of the constructor, when you do not supply arguments, the constructor does not assign a value to the id and does not update the counter. Therefore, for an <code>Employee</code> to get an assigned id, you must specify a name for the employee. In this example, <code>mac.id</code> would be 1.</p>

<p>Alternatively, you can create a copy of Employee's prototype object to assign to WorkerBee:</p>

<pre class="brush: js">WorkerBee.prototype = Object.create(Employee.prototype);
// instead of WorkerBee.prototype = new Employee
</pre>

<h3 id="No_multiple_inheritance">No multiple inheritance</h3>

<p>Some object-oriented languages allow multiple inheritance. That is, an object can inherit the properties and values from unrelated parent objects. JavaScript does not support multiple inheritance.</p>

<p>Inheritance of property values occurs at run time by JavaScript searching the prototype chain of an object to find a value. Because an object has a single associated prototype, JavaScript cannot dynamically inherit from more than one prototype chain.</p>

<p>In JavaScript, you can have a constructor function call more than one other constructor function within it. This gives the illusion of multiple inheritance. For example, consider the following statements:</p>

<pre class="brush: js">function Hobbyist(hobby) {
   this.hobby = hobby || 'scuba';
}

function Engineer(name, projs, mach, hobby) {
   this.base1 = WorkerBee;
   this.base1(name, 'engineering', projs);
   this.base2 = Hobbyist;
   this.base2(hobby);
   this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
</pre>

<p>Further assume that the definition of <code>WorkerBee</code> is as used earlier in this chapter. In this case, the <code>dennis</code> object has these properties:</p>

<pre class="brush: js">dennis.name == 'Doe, Dennis';
dennis.dept == 'engineering';
dennis.projects == ['collabra'];
dennis.machine == 'hugo';
dennis.hobby == 'scuba';
</pre>

<p>So <code>dennis</code> does get the <code>hobby</code> property from the <code>Hobbyist</code> constructor. However, assume you then add a property to the <code>Hobbyist</code> constructor's prototype:</p>

<pre class="brush: js">Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd'];
</pre>

<p>The <code>dennis</code> object does not inherit this new property.</p>

<div>{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Using_promises")}}</div>
