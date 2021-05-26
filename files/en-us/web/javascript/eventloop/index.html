---
title: Concurrency model and the event loop
slug: Web/JavaScript/EventLoop
tags:
  - Advanced
  - Event Loop
  - Event Management
  - Event Queue
  - Guide
  - Handling Events
  - JavaScript
  - events
---
<div>{{JsSidebar("Advanced")}}</div>

<p>JavaScript has a concurrency model based on an <strong>event loop</strong>, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.</p>

<h2 id="Runtime_concepts">Runtime concepts</h2>

<p>The following sections explain a theoretical model. Modern JavaScript engines implement and heavily optimize the described semantics.</p>

<h3 id="Visual_representation">Visual representation</h3>

<p><img alt="Stack, heap, queue" src="the_javascript_runtime_environment_example.svg"></p>

<h3 id="Stack">Stack</h3>

<p>Function calls form a stack of <em>frames</em>.</p>

<pre class="brush: js">function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

console.log(bar(7)) //returns 42
</pre>

<p>When calling <code>bar</code>, a first frame is created containing <code>bar</code>'s arguments and local variables. When <code>bar</code> calls <code>foo</code>, a second frame is created and pushed on top of the first one containing <code>foo</code>'s arguments and local variables. When <code>foo</code> returns, the top frame element is popped out of the stack (leaving only <code>bar</code>'s call frame). When <code>bar</code> returns, the stack is empty.</p>

<h3 id="Heap">Heap</h3>

<p>Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.</p>

<h3 id="Queue">Queue</h3>

<p>A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.</p>

<p>At some point during the <a href="#event_loop">event loop</a>, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.</p>

<p>The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).</p>

<h2 id="Event_loop">Event loop</h2>

<p>The <strong>event loop</strong> got its name because of how it's usually implemented, which usually resembles:</p>

<pre class="brush: js">while (queue.waitForMessage()) {
  queue.processNextMessage()
}</pre>

<p><code>queue.waitForMessage()</code> waits synchronously for a message to arrive (if one is not already available and waiting to be handled).</p>

<h3 id="Run-to-completion">"Run-to-completion"</h3>

<p>Each message is processed completely before any other message is processed.</p>

<p>This offers some nice properties when reasoning about your program, including the fact that whenever a function runs, it cannot be pre-empted and will run entirely before any other code runs (and can modify data the function manipulates). This differs from C, for instance, where if a function runs in a thread, it may be stopped at any point by the runtime system to run some other code in another thread.</p>

<p>A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the "a script is taking too long to run" dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.</p>

<h3 id="Adding_messages">Adding messages</h3>

<p>In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. If there is no listener, the event is lost. So a click on an element with a click event handler will add a message—likewise with any other event.</p>

<p>The function <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout</a></code> is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to <code>0</code>). The <em>time value</em> represents the (minimum) delay after which the message will actually be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the <code>setTimeout</code> message will have to wait for other messages to be processed. For this reason, the second argument indicates a <em>minimum</em> time—not a <em>guaranteed</em> time.<br>
 <br>
 Here is an example that demonstrates this concept (<code>setTimeout</code> does not run immediately after its timer expires):</p>

<pre class="brush: js">const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s &gt;= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
</pre>

<h3 id="Zero_delays">Zero delays</h3>

<p>Zero delay doesn't actually mean the call back will fire-off after zero milliseconds. Calling <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout</code></a> with a delay of <code>0</code> (zero) milliseconds doesn't execute the callback function after the given interval.</p>

<p>The execution depends on the number of waiting tasks in the queue. In the example below, the message <code>''this is just a message''</code> will be written to the console before the message in the callback gets processed, because the delay is the <em>minimum</em> time required for the runtime to process the request (not a <em>guaranteed</em> time).</p>

<p>Basically, the <code>setTimeout</code> needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your <code>setTimeout</code>.</p>

<pre class="brush: js">(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
</pre>

<h3 id="Several_runtimes_communicating_together">Several runtimes communicating together</h3>

<p>A web worker or a cross-origin <code>iframe</code> has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the <a href="/en-US/docs/Web/API/Window/postMessage"><code>postMessage</code></a> method. This method adds a message to the other runtime if the latter listens to <code>message</code> events.</p>

<h2 id="Never_blocking">Never blocking</h2>

<p>A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> query to return or an <a href="/en-US/docs/Web/API/XMLHttpRequest">XHR</a> request to return, it can still process other things like user input.</p>

<p>Legacy exceptions exist like <code>alert</code> or synchronous XHR, but it is considered a good practice to avoid them. Beware: <a href="http://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311">exceptions to the exception do exist</a> (but are usually implementation bugs, rather than anything else).</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops">Event loops in the HTML standard</a></li>
  <li><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop">Node.js Event Loop</a></li>
</ul>
