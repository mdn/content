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
{{jsSidebar("Statements")}}

The **`try...catch`** statement marks a block of statements to
try and specifies a response should an exception be thrown.

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

## Syntax

```js
try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}
```

- `try_statements`
  - : The statements to be executed.
- `catch_statements`
  - : Statement that is executed if an exception is thrown in the `try`-block.
- `exception_var`
  - : An optional identifier to hold an exception object for the associated
    `catch`-block.
- `finally_statements`
  - : Statements that are executed after the `try` statement completes. These
    statements execute regardless of whether an exception was thrown or caught.

## Description

The `try` statement consists of a `try`-block, which contains one
or more statements. `{}` must always be used, even for single statements.
A `catch`-block, a `finally`-block, or both must be present.
This gives us three forms for the `try` statement:

- `try...catch`
- `try...finally`
- `try...catch...finally`

A `catch`-block contains statements that specify what to do if an exception
is thrown in the `try`-block. If any statement within the
`try`-block (or in a function called from within the `try`-block)
throws an exception, control is immediately shifted to the `catch`-block. If
no exception is thrown in the `try`-block, the `catch`-block is
skipped.

The `finally`-block will always execute after the `try`-block and
`catch`-block(s) have finished executing. It always executes, regardless of
whether an exception was thrown or caught.

You can nest one or more `try` statements. If an inner `try`
statement does not have a `catch`-block, the enclosing `try`
statement's `catch`-block is used instead.

You can also use the `try` statement to handle JavaScript exceptions. See
the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide) for more information
on JavaScript exceptions.

### Unconditional catch-block

When a `catch`-block is used, the `catch`-block is executed when
any exception is thrown from within the `try`-block. For example, when the
exception occurs in the following code, control transfers to the
`catch`-block.

```js
try {
  throw 'myException'; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

The `catch`-block specifies an identifier (`e` in the example
above) that holds the value of the exception; this value is only available in the
{{Glossary("Scope", "scope")}} of the `catch`-block.

### Conditional catch-blocks

You can create "Conditional `catch`-blocks" by combining
`try...catch` blocks with `if...else if...else` structures, like
this:

```js
try {
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
```

A common use case for this is to only catch (and silence) a small subset of expected
errors, and then re-throw the error in other cases:

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e;  // re-throw the error unchanged
  }
}
```

### The exception identifier

When an exception is thrown in the `try`-block,
_`exception_var`_ (i.e., the `e` in `catch (e)`)
holds the exception value. You can use this identifier to get information about the
exception that was thrown. This identifier is only available in the
`catch`-block's {{Glossary("Scope", "scope")}}. If you don't need the
exception value, it could be omitted.

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### The finally-block

The `finally`-block contains statements to execute after the
`try`-block and `catch`-block(s) execute, but before the
statements following the `try...catch...finally`-block. Note that the
`finally`-block executes regardless of whether an exception is thrown. Also,
if an exception is thrown, the statements in the `finally`-block execute even
if no `catch`-block handles the exception.

The following example shows one use case for the `finally`-block. The code
opens a file and then executes statements that use the file; the
`finally`-block makes sure the file always closes after it is used even if an
exception was thrown.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

## Examples

### Nested try-blocks

First, let's see what happens with this:

```js
try {
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
```

Now, if we already caught the exception in the inner `try`-block by adding a
`catch`-block

```js
try {
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
```

And now, let's rethrow the error.

```js
try {
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
```

Any given exception will be caught only once by the nearest enclosing
`catch`-block unless it is rethrown. Of course, any new exceptions raised in
the "inner" block (because the code in `catch`-block may do something that
throws), will be caught by the "outer" block.

### Returning from a finally-block

If the `finally`-block returns a value, this value becomes the return value
of the entire `try-catch-finally` statement, regardless of any
`return` statements in the `try` and `catch`-blocks.
This includes exceptions thrown inside of the `catch`-block:

```js
(function() {
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
// "finally"
```

The outer "oops" is not thrown because of the return in the `finally`-block.
The same would apply to any value returned from the `catch`-block.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
