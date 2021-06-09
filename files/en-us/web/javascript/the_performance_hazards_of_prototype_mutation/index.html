---
title: The performance hazards of [[Prototype]] mutation
slug: Web/JavaScript/The_performance_hazards_of_prototype_mutation
tags:
  - Guide
  - JavaScript
  - Performance
---
<p>{{jsSidebar("Advanced")}}</p>

<p>Every JavaScript object has a <code>[[Prototype]]</code>.  Getting a property on an object first searches that object, then its <code>[[Prototype]]</code>, then that object's <code>[[Prototype]]</code>, until the property is found or the chain ends.  The <code>[[Prototype]]</code> chain is especially useful for <a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">object inheritance</a>.</p>

<p>ECMAScript 6 introduces ways to <em>mutate</em> <code>[[Prototype]]</code>.  This flexibility has a cost: it substantially degrades performance.  <strong><code>[[Prototype]]</code> mutation harms performance in <em>all</em> modern JavaScript engines.</strong>  This article explains why <code>[[Prototype]]</code> mutation is slow in <em>all</em> browsers and describes alternatives that should be used instead.</p>

<h2 id="How_JavaScript_engines_optimize_property_accesses">How JavaScript engines optimize property accesses</h2>

<p>Objects are hashes, so theoretically (and in reality) property accesses take constant time.  But "constant time" might be thousands of machine instructions.  Fortunately, objects and properties are often "predictable", and in such cases their underlying structure can also be predictable.  JITs can rely on this to make predictable accesses faster.</p>

<p>Engines optimize by depending on the <em>order</em> properties are added to objects.  Most properties are added to objects with quite similar ordering.  (Objects routinely accessed using <code>obj[val]</code>-style random access are a notable exception.)</p>

<pre class="brush: js">function Landmark(lat, lon, desc) {
  this.location = { lat: lat, long: lon };
  this.description = desc;
}
var lm1 = new Landmark(-90, 0, "South Pole");
var lm2 = new Landmark(-24.3756466, -128.311018, "Pitcairn Islands");</pre>

<p>Every <code>Landmark</code> has properties <code>location</code> and <code>description</code> in that order.  Each object literal storing latitude/longitude information has properties <code>lat</code> and long in that order.  Subsequent code <em>could</em> delete a property.  But it's unlikely, so engines can produce less-optimal code in such cases.  In SpiderMonkey, the JavaScript engine in Firefox, a particular ordering of properties (and some aspects of those properties, <em>not</em> including values) is called a <em>shape</em>.  (V8's name for the concept is <em>structure ID</em>.)  If two objects share a shape, their properties are stored identically.</p>

<p>Internally to engines, a (simplified) version of these ideas looks like this C++:</p>

<pre class="brush: cpp">struct Property {
  Property* prev; // null if first property
  String name; // name of property
  unsigned int index; // index of its value in storage
};
using Shape = Property*;
struct Object {
  Shape shape;
  Value* properties;
  Object* prototype;
};</pre>

<p>In the example, various JS expressions would correspond to this C++:</p>

<pre class="brush: cpp">lm1-&gt;properties[0]; // loc1.location
lm1-&gt;properties[1]; // loc1.description
lm2-&gt;properties[0].toObject()-&gt;properties[1]; // loc2.location.long</pre>

<p>If an engine knows an object has a particular shape, it can assume <em>all</em> property indexes for all properties on the object.  Accessing a particular property is only a couple cheap pointer accesses.  It's easy for machine code to check an object has a particular shape.  If it does, make assumptions for fast code; if not, do things the slow way.</p>

<h2 id="Naively_optimizing_inherited_properties">Naively optimizing inherited properties</h2>

<p>Many properties don't exist <em>directly</em> on the object: lookups often find properties on the prototype chain.  Accesses to properties on prototypes is just extra "hops" through the <code>prototype</code> field to the object containing the property.  Optimizing <em>correctly</em> requires that no object along the way have the property, so every hop must check that object's shape.</p>

<pre class="brush: js">var d = new Date();
d.toDateString(); // Date.prototype.toDateString

function Pair(x, y) { this.x = x; this.y = y; }
Pair.prototype.sum = function() { return this.x + this.y; };

var p = new Pair(3, 7);
p.sum(); // Pair.prototype.sum</pre>

<p>Engines take this quick-and-dirty approach in many cases.  But in especially performance-sensitive JavaScript, this isn't good enough.</p>

<h2 id="Intelligently_optimizing_inherited_properties">Intelligently optimizing inherited properties</h2>

<p>Predictable property accesses <em>usually</em> find the property a constant number of hops along the <code>[[Prototype]]</code> chain; intervening objects <em>usually</em> don't acquire new properties; the ultimate object <em>usually</em> won't have any properties <a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">deleted</a>.  Finally: <strong><code>[[Prototype]]</code> mutation is rare</strong>.  All these common assumptions are necessary to avoid slow prototype-hopping.  Different engines choose different approaches to intelligently optimize inherited properties.</p>

<dl>
 <dt>The shape of the <em>ultimate</em> object containing the inherited can be checked.</dt>
 <dd><p>In this case, a shape match must imply that no intervening object's <code>[[Prototype]]</code> has been modified.  Therefore, when an object's <code>[[Prototype]]</code> is mutated, every object along its <code>[[Prototype]]</code> chain must also have its shape changed.</p>
 <pre class="brush: js">var obj1 = {};
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);

// Objects whose shapes would change: obj3, obj2, obj1, Object.prototype
obj3.__proto__ = {};</pre>
 </dd>
 <dt>The shape of the object initially accessed can be checked.</dt>
 <dd><p>Every object that might inherit through a changed-<code>[[Prototype]]</code> object must change, reflecting the <code>[[Prototype]]</code> mutation having happened</p>
 <pre class="brush: js">var obj1 = {};
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);

// Objects whose shapes would change: obj1, obj2, obj3
obj1.__proto__ = {};</pre>
 </dd>
</dl>

<h2 id="Pernicious_effects_of_Prototype_mutation">Pernicious effects of <code>[[Prototype]]</code> mutation</h2>

<p><code>[[Prototype]]</code> mutation's adverse performance impact occurs in two phases: at the time mutation occurs, and in subsequent execution.  First, <strong>mutating <code>[[Prototype]]</code> is slow</strong>.  Second, <strong>mutating <code>[[Prototype]]</code> slows down code that interacts with mutated-<code>[[Prototype]]</code> objects</strong>.</p>

<h3 id="Mutating_Prototype_is_slow">Mutating <code>[[Prototype]] is slow</code></h3>

<p>While the spec considers mutating <code>[[Prototype]]</code> to be modifying a single hidden property, real-world implementations are considerably more complex.  Both shape-changing tactics described above require examining (and modifying) more than one object.  Which approach modifies fewer objects in practice, depends upon the workload.</p>

<h3 id="Mutated_Prototypes_slow_down_other_code">Mutated <code>[[Prototype]]</code>s slow down other code</h3>

<p>The bad effects of <code>[[Prototype]]</code> mutation don't end once the mutation is complete.  Because so many property-examination operations implicitly depend on <code>[[Prototype]]</code> chains not changing, when engines observe a mutation, <em>an object with mutated <code>[[Prototype]] "taints" all code the object flows through</code></em>.  This tainting flows through all code that ever observes a mutated-<code>[[Prototype]]</code> object.  As a near-worst-case illustration, consider these patterns of behavior:</p>

<pre class="brush: js">var obj = {};
obj.__proto__ = { x: 3 }; // gratuitous mutation

var arr = [obj];
for (var i = 0; i &lt; 5; i++)
  arr.push({ x: i });

function f(v, i) {
  var elt = v[i];
  var r =  elt.x &gt; 2 // pessimized
           ? elt
           : { x: elt.x + 1 };
  return r;
}
var c = f(arr, 0);
c.x; // pessimized: return value has unknown properties
c = f(arr, 1);
c.x; // still pessimized!

var arr2 = [c];
arr2[0].x; // pessimized
</pre>

<p>(Only code that runs many times is optimized, so this doesn't trigger <em>all</em> these bad behaviors.  But every breakdown could happen if it appeared in "hot" code.)</p>

<p>Recognizing exactly where a mutated-<code>[[Prototype]]</code> object flows, often across multiple scripts, is extraordinarily difficult.  It depends on careful textual analysis of the code and particular runtime behaviors.  Far-distant changes, that trigger subtly different control flow, can taint previously-optimal code paths with pessimal behavior.  <em>It's impossible to recognize all the places that will become slower, <strong>even for a JavaScript language implementer</strong>.</em></p>
