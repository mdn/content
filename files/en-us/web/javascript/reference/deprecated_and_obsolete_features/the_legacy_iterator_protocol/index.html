---
title: The legacy Iterator protocol
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - ES2015
  - Guide
  - JavaScript
  - Legacy Iterator
---
<div>{{jsSidebar("More")}}</div>

<div class="warning"><p><strong>Warning:</strong> The legacy iterator protocol was a SpiderMonkey-specific feature, which is removed in Firefox 58+. For future-facing usages, consider using <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for..of</a> loops and the <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">iterator protocol</a>.</p></div>

<h2 id="The_deprecated_Firefox-only_iterator_protocol">The deprecated Firefox-only iterator protocol</h2>

<p>Firefox, prior to version 26 implemented another iterator protocol that is similar to the standard <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">ES2015 Iterator protocol</a>.</p>

<p>An object is an legacy iterator when it implements a <code>next()</code> method with the following semantics, and throws {{jsxref("Global_Objects/StopIteration", "StopIteration")}} at the end of iteration.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Value</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>A zero arguments function that returns an value.</td>
  </tr>
 </tbody>
</table>

<h3 id="Difference_between_legacy_and_ES2015_iterator_protocols">Difference between legacy and ES2015 iterator protocols</h3>

<ul>
 <li>The value was returned directly as a return value of calls to <code>next</code>, instead of the <code>value</code> property of a placeholder object</li>
 <li>Iteration termination was expressed by throwing a {{jsxref("Global_Objects/StopIteration", "StopIteration")}} object.</li>
</ul>

<h3 id="Simple_example_with_the_old_protocol">Simple example with the old protocol</h3>

<pre class="brush: js">function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex &lt; array.length){
               return array[nextIndex++];
           else
               throw new StopIteration();
       }
    }
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try{
    console.log(it.next());
}
catch(e){
    if(e instanceof StopIteration){
         // iteration over
    }
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Iterators and generators</a></li>
 <li>More <a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features">deprecated and obsolete features</a></li>
</ul>
