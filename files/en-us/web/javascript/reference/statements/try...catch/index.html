---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
tags:
- Exception
- JavaScript
- Language feature
- Statement
browser-compat: javascript.statements.try_catch
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>try...catch</code></strong> statement marks a block of statements to
  try and specifies a response should an exception be thrown.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}
</pre>

<dl>
  <dt><code><em>try_statements</em></code></dt>
  <dd>The statements to be executed.</dd>

  <dt><code><em>catch_statements</em></code></dt>
  <dd>Statement that is executed if an exception is thrown in the <code>try</code>-block.
  </dd>

  <dt><code><em>exception_var</em></code></dt>
  <dd>An optional identifier to hold an exception object for the associated
    <code>catch</code>-block.</dd>

  <dt><code><em>finally_statements</em></code></dt>
  <dd>Statements that are executed after the <code>try</code> statement completes. These
    statements execute regardless of whether an exception was thrown or caught.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>try</code> statement consists of a <code>try</code>-block, which contains one
  or more statements. <code>{}</code> must always be used, even for single statements. At
  least one <code>catch</code>-block, or a <code>finally</code>-block, must be present.
  This gives us three forms for the <code>try</code> statement:</p>

<ul>
  <li><code>try...catch</code></li>
  <li><code>try...finally</code></li>
  <li><code>try...catch...finally</code></li>
</ul>

<p>A <code>catch</code>-block contains statements that specify what to do if an exception
  is thrown in the <code>try</code>-block. If any statement within the
  <code>try</code>-block (or in a function called from within the <code>try</code>-block)
  throws an exception, control is immediately shifted to the <code>catch</code>-block. If
  no exception is thrown in the <code>try</code>-block, the <code>catch</code>-block is
  skipped.</p>

<p>The <code>finally</code>-block will always execute after the <code>try</code>-block and
  <code>catch</code>-block(s) have finished executing. It always executes, regardless of
  whether an exception was thrown or caught.</p>

<p>You can nest one or more <code>try</code> statements. If an inner <code>try</code>
  statement does not have a <code>catch</code>-block, the enclosing <code>try</code>
  statement's <code>catch</code>-block is used instead.</p>

<p>You can also use the <code>try</code> statement to handle JavaScript exceptions. See
  the <a href="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a> for more information
  on JavaScript exceptions.</p>

<h3 id="Unconditional_catch-block">Unconditional catch-block</h3>

<p>When a <code>catch</code>-block is used, the <code>catch</code>-block is executed when
  any exception is thrown from within the <code>try</code>-block. For example, when the
  exception occurs in the following code, control transfers to the
  <code>catch</code>-block.</p>

<pre class="brush: js">try {
  throw 'myException'; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
</pre>

<p>The <code>catch</code>-block specifies an identifier (<code>e</code> in the example
  above) that holds the value of the exception; this value is only available in the
  {{Glossary("Scope", "scope")}} of the <code>catch</code>-block.</p>

<h3 id="Conditional_catch-blocks">Conditional catch-blocks</h3>

<p>You can create "Conditional <code>catch</code>-blocks" by combining
  <code>try...catch</code> blocks with <code>if...else if...else</code> structures, like
  this:</p>

<pre class="brush: js">try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
</pre>

<p>A common use case for this is to only catch (and silence) a small subset of expected
  errors, and then re-throw the error in other cases:</p>

<pre class="brush: js">try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e;  // re-throw the error unchanged
  }
}
</pre>

<h3 id="The_exception_identifier">The exception identifier</h3>

<p>When an exception is thrown in the <code>try</code>-block,
  <em><code>exception_var</code></em> (i.e., the <code>e</code> in <code>catch (e)</code>)
  holds the exception value. You can use this identifier to get information about the
  exception that was thrown. This identifier is only available in the
  <code>catch</code>-block's {{Glossary("Scope", "scope")}}. If you don't need the
  exception value, it could be omitted.</p>

<pre class="brush: js">function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
</pre>

<h3 id="The_finally-block">The finally-block</h3>

<p>The <code>finally</code>-block contains statements to execute after the
  <code>try</code>-block and <code>catch</code>-block(s) execute, but before the
  statements following the <code>try...catch...finally</code>-block. Note that the
  <code>finally</code>-block executes regardless of whether an exception is thrown. Also,
  if an exception is thrown, the statements in the <code>finally</code>-block execute even
  if no <code>catch</code>-block handles the exception.</p>

<p>The following example shows one use case for the <code>finally</code>-block. The code
  opens a file and then executes statements that use the file; the
  <code>finally</code>-block makes sure the file always closes after it is used even if an
  exception was thrown.</p>

<pre class="brush: js">openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Nested_try-blocks">Nested try-blocks</h3>

<p>First, let's see what happens with this:</p>

<pre class="brush: js">try {
  try {
    throw new Error('oops');
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "finally"
// "outer" "oops"
</pre>

<p>Now, if we already caught the exception in the inner <code>try</code>-block by adding a
  <code>catch</code>-block</p>

<pre class="brush: js">try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
</pre>

<p>And now, let's rethrow the error.</p>

<pre class="brush: js">try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
</pre>

<p>Any given exception will be caught only once by the nearest enclosing
  <code>catch</code>-block unless it is rethrown. Of course, any new exceptions raised in
  the "inner" block (because the code in <code>catch</code>-block may do something that
  throws), will be caught by the "outer" block.</p>

<h3 id="Returning_from_a_finally-block">Returning from a finally-block</h3>

<p>If the <code>finally</code>-block returns a value, this value becomes the return value
  of the entire <code>try-catch-finally</code> statement, regardless of any
  <code>return</code> statements in the <code>try</code> and <code>catch</code>-blocks.
  This includes exceptions thrown inside of the <code>catch</code>-block:</p>

<pre class="brush: js">(function() {
  try {
    try {
      throw new Error('oops');
    } catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    } finally {
      console.log('finally');
      return;
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }
})();

// Output:
// "inner" "oops"
// "finally"</pre>

<p>The outer "oops" is not thrown because of the return in the <code>finally</code>-block.
  The same would apply to any value returned from the <code>catch</code>-block.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Error")}}</li>
  <li>{{jsxref("Statements/throw", "throw")}}</li>
</ul>
