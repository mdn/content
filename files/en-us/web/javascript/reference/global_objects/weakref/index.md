---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
tags:
  - Class
  - JavaScript
  - Reference
  - WeakRef
browser-compat: javascript.builtins.WeakRef
---
<div>{{JSRef}}</div>

<p>A <strong><code>WeakRef</code></strong> object lets you hold a weak reference to another object, without preventing that object from getting garbage-collected.</p>

<h2 id="Description">Description</h2>

<p>A <code>WeakRef</code> object contains a weak reference to an object, which is called its <em>target</em> or <em>referent</em>. A <em>weak reference</em> to an object is a reference that does not prevent the object from being reclaimed by the garbage collector. In contrast, a normal (or <em>strong</em>) reference keeps an object in memory. When an object no longer has any strong references to it, the JavaScript engine's garbage collector may destroy the object and reclaim its memory. If that happens, you can't get the object from a weak reference anymore.</p>

<div class="note">
<p><strong>Note:</strong> Please see the <a href="#avoid_where_possible">Avoid where possible</a> section below. Correct use of <code>WeakRef</code> takes careful thought, and it's best avoided if possible.</p>
</div>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("WeakRef/WeakRef", "WeakRef()")}}</dt>
 <dd>Creates a new <code>WeakRef</code> object.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("WeakRef.deref", "WeakRef.prototype.deref()")}}</dt>
 <dd>Returns the <code>WeakRef</code> object's target object, or <code>undefined</code> if the target object has been reclaimed.</dd>
</dl>

<h2 id="Avoid_where_possible">Avoid where possible</h2>

<p>Correct use of <code>WeakRef</code> takes careful thought, and it's best avoided if possible. It's also important to avoid relying on any specific behaviors not guaranteed by the specification. When, how, and whether garbage collection occurs is down to the implementation of any given JavaScript engine. Any behavior you observe in one engine may be different in another engine, in another version of the same engine, or even in a slightly different situation with the same version of the same engine. Garbage collection is a hard problem that JavaScript engine implementers are constantly refining and improving their solutions to.</p>

<p>Here are some specific points that the authors of the WeakRef proposal included in its <a href="https://github.com/tc39/proposal-weakrefs/blob/master/README.md">explainer document</a>:</p>

<blockquote>
<p><a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">Garbage collectors</a> are complicated. If an application or library depends on GC cleaning up a WeakRef or calling a finalizer [cleanup callback] in a timely, predictable manner, it's likely to be disappointed: the cleanup may happen much later than expected, or not at all. Sources of variability include:</p>

<ul>
 <li>One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.</li>
 <li>Garbage collection work can be split up over time using incremental and concurrent techniques.</li>
 <li>Various runtime heuristics can be used to balance memory usage, responsiveness.</li>
 <li>The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).</li>
 <li>Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.</li>
 <li>Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.</li>
</ul>
</blockquote>

<h2 id="Notes_on_WeakRefs">Notes on WeakRefs</h2>

<p>Some notes on <code>WeakRef</code>s:</p>

<ul>
 <li>If your code has just created a <code>WeakRef</code> for a target object, or has gotten a target object from a <code>WeakRef</code>'s <code>deref</code> method, that target object will not be reclaimed until the end of the current JavaScript <a href="https://tc39.es/ecma262/#job">job</a> (including any promise reaction jobs that run at the end of a script job). That is, you can only "see" an object get reclaimed between turns of the event loop. This is primarily to avoid making the behavior of any given JavaScript engine's garbage collector apparent in code — because if it were, people would write code relying on that behavior, which would break when the garbage collector's behavior changed. (Garbage collection is a hard problem; JavaScript engine implementers are constantly refining and improving how it works.)</li>
 <li>If multiple <code>WeakRef</code>s have the same target, they're consistent with one another. The result of calling <code>deref</code> on one of them will match the result of calling <code>deref</code> on another of them (in the same job), you won't get the target object from one of them but <code>undefined</code> from another.</li>
 <li>If the target of a <code>WeakRef</code> is also in a {{jsxref("FinalizationRegistry")}}, the <code>WeakRef</code>'s target is cleared at the same time or before any cleanup callback associated with the registry is called; if your cleanup callback calls <code>deref</code> on a <code>WeakRef</code> for the object, it will receive <code>undefined</code>.</li>
 <li>You cannot change the target of a <code>WeakRef</code>, it will always only ever be the original target object or <code>undefined</code> when that target has been reclaimed.</li>
 <li>A <code>WeakRef</code> might never return <code>undefined</code> from <code>deref</code>, even if nothing strongly holds the target, because the garbage collector may never decide to reclaim the object.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_a_WeakRef_object">Using a WeakRef object</h3>

<p>This example starts a counter shown in a DOM element, stopping when the element doesn't exist anymore:</p>

<pre class="brush: js">class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () =&gt; {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
setTimeout(() =&gt; {
  document.getElementById("counter").remove();
}, 5000);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("FinalizationRegistry")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
