---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Class
  - JavaScript
  - Object
  - Reference
browser-compat: javascript.builtins.Error
---
<div>{{JSRef}}</div>

<p><code>Error</code> objects are thrown when runtime errors occur. The <code>Error</code> object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.</p>

<h2 id="Description">Description</h2>

<p>Runtime errors result in new <code>Error</code> objects being created and thrown.</p>

<h3 id="Error_types">Error types</h3>

<p>Besides the generic <code>Error</code> constructor, there are other core error constructors in JavaScript. For client-side exceptions, see <a href="/en-US/docs/Web/JavaScript/Guide/Statements#Exception_handling_statements">Exception handling statements</a>.</p>

<dl>
 <dt>{{JSxRef("EvalError")}}</dt>
 <dd>Creates an instance representing an error that occurs regarding the global function {{JSxRef("eval", "eval()")}}.</dd>
 <dt>{{JSxRef("RangeError")}}</dt>
 <dd>Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.</dd>
 <dt>{{JSxRef("ReferenceError")}}</dt>
 <dd>Creates an instance representing an error that occurs when de-referencing an invalid reference.</dd>
 <dt>{{JSxRef("SyntaxError")}}</dt>
 <dd>Creates an instance representing a syntax error.</dd>
 <dt>{{JSxRef("TypeError")}}</dt>
 <dd>Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.</dd>
 <dt>{{JSxRef("URIError")}}</dt>
 <dd>Creates an instance representing an error that occurs when {{JSxRef("encodeURI", "encodeURI()")}} or {{JSxRef("decodeURI", "decodeURI()")}} are passed invalid parameters.</dd>
 <dt>{{JSxRef("AggregateError")}}</dt>
 <dd>Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by {{JSxRef("Promise.any()")}}.</dd>
 <dt>{{JSxRef("InternalError")}} {{non-standard_inline}}</dt>
 <dd>Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".</dd>
</dl>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error"><code>Error()</code></a></dt>
 <dd>Creates a new <code>Error</code> object.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{JSxRef("Error.captureStackTrace()")}}</dt>
 <dd>A non-standard <strong>V8</strong> function that creates the {{JSxRef("Error.prototype.stack", "stack")}} property on an Error instance.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message")}}</dt>
 <dd>Error message.</dd>
 <dt>{{jsxref("Error.prototype.name")}}</dt>
 <dd>Error name.</dd>
 <dt>{{jsxref("Error.prototype.description")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Microsoft property for the error description. Similar to {{jsxref("Error.prototype.message", "message")}}.</dd>
 <dt>{{jsxref("Error.prototype.number")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Microsoft property for an error number.</dd>
 <dt>{{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Mozilla property for the path to the file that raised this error.</dd>
 <dt>{{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Mozilla property for the line number in the file that raised this error.</dd>
 <dt>{{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Mozilla property for the column number in the line that raised this error.</dd>
 <dt>{{jsxref("Error.prototype.stack")}} {{non-standard_inline}}</dt>
 <dd>A non-standard Mozilla property for a stack trace.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Error.prototype.toString()")}}</dt>
 <dd>Returns a string representing the specified object. Overrides the {{jsxref("Object.prototype.toString()")}} method.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Throwing_a_generic_error">Throwing a generic error</h3>

<p>Usually you create an <code>Error</code> object with the intention of raising it using the {{JSxRef("Statements/throw", "throw")}} keyword. You can handle the error using the {{JSxRef("Statements/try...catch", "try...catch")}} construct:</p>

<pre class="brush: js">try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
</pre>

<h3 id="Handling_a_specific_error">Handling a specific error</h3>

<p>You can choose to handle only specific error types by testing the error type with the error's {{JSxRef("Object.prototype.constructor", "constructor")}} property or, if you're writing for modern JavaScript engines, {{JSxRef("Operators/instanceof", "instanceof")}} keyword:</p>

<pre class="brush: js">try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc
  
  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
</pre>

<h3 id="Custom_Error_Types">Custom Error Types</h3>

<p>You might want to define your own error types deriving from <code>Error</code> to be able to <code>throw new MyError()</code> and use <code>instanceof MyError</code> to check the kind of error in the exception handler.  This results in cleaner and more consistent error handling code.</p>

<p>See <a href="http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript">"What's a good way to extend Error in JavaScript?"</a> on StackOverflow for an in-depth discussion.</p>

<h4 id="ES6_Custom_Error_Class">ES6 Custom Error Class</h4>

<div class="notecard warning">
<p><strong>Warning:</strong> Versions of Babel prior to 7 can handle <code>CustomError</code> class methods, but only when they are declared with <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty()</a>. Otherwise, old versions of Babel and other transpilers will not correctly handle the following code without <a href="https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend">additional configuration</a>.</p>
</div>

<div class="notecard note">
<p><strong>Note:</strong> Some browsers include the <code>CustomError</code> constructor in the stack trace when using ES2015 classes.</p>
</div>

<pre class="brush: js">class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    // Custom debugging information
    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('baz', 'bazMessage')
} catch(e) {
  console.error(e.name)    //CustomError
  console.error(e.foo)     //baz
  console.error(e.message) //bazMessage
  console.error(e.stack)   //stacktrace
}</pre>

<h4 id="ES5_Custom_Error_Object">ES5 Custom Error Object</h4>

<div class="warning">
<p><strong>Warning:</strong> All browsers include the <code>CustomError</code> constructor in the stack trace when using a prototypal declaration.</p>
</div>

<pre class="brush: js">function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = 'CustomError';
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.error(e.name); //CustomError
  console.error(e.foo); //baz
  console.error(e.message); //bazMessage
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{JSxRef("Statements/throw", "throw")}}</li>
 <li>{{JSxRef("Statements/try...catch", "try...catch")}}</li>
</ul>
