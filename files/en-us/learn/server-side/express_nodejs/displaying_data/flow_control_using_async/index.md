---
title: Asynchronous flow control using async
slug: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
tags:
  - Express
  - Node
  - displaying data
  - part 5
  - server-side
---
The controller code for some of our _LocalLibrary_ pages will depend on the results of multiple asynchronous requests, which may be required to run either in some particular order or in parallel. In order to manage flow control, and render pages when we have all the required information available, we'll use the popular node [async](https://www.npmjs.com/package/async) module.

> **Note:** There are a number of other ways to manage asynchronous behavior and flow control in JavaScript, including relatively recent JavaScript language features like [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Async has a lot of useful methods (check out [the documentation](https://caolan.github.io/async/v3/docs.html)). Some of the more important functions are:

- [`async.parallel()`](https://caolan.github.io/async/v3/docs.html#parallel) to execute any operations that must be performed in parallel.
- [`async.series()`](https://caolan.github.io/async/v3/docs.html#series) for when we need to ensure that asynchronous operations are performed in series.
- [`async.waterfall()`](https://caolan.github.io/async/v3/docs.html#waterfall) for operations that must be run in series, with each operation depending on the results of preceding operations.

## Why is this needed?

Most of the methods we use in _Express_ are asynchronous—you specify an operation to perform, passing a callback. The method returns immediately, and the callback is invoked when the requested operation completes. By convention in _Express_, callback functions pass an _error_ value as the first parameter (or `null` on success) and the results from the function (if there are any) as the second parameter.

If a controller only needs to _perform **one** asynchronous operation_ to get the information required to render a page then the implementation is easy—we render the template in the callback. The code fragment below shows this for a function that renders the count of a model `SomeModel` (using the Mongoose [`countDocuments`](https://mongoosejs.com/docs/api.html#model_Model.countDocuments) method):

```js
exports.some_model_count = function(req, res, next) {

  SomeModel.countDocuments({ a_model_field: 'match_value' }, function (err, count) {
    // Do something if there is an err.

    // On success, render the result by passing count into the render function (here, as the variable 'data').
    res.render('the_template', { data: count });
  });
}
```

What if you need to make **multiple** asynchronous queries, and you can't render the page until all the operations have completed? A naive implementation could "daisy chain" the requests, kicking off subsequent requests in the callback of a previous request, and rendering the response in the final callback. The problem with this approach is that our requests would have to be run in series, even though it might be more efficient to run them in parallel. This could also result in complicated nested code, commonly referred to as [callback hell](http://callbackhell.com/).

A much better solution would be to execute all the requests in parallel and then have a single callback that executes when all of the queries have completed. This is the sort of flow operation that the _Async_ module makes easy!

## Asynchronous operations in parallel

The method [`async.parallel()`](https://caolan.github.io/async/v3/docs.html#parallel) is used to run multiple asynchronous operations in parallel.

The first argument to `async.parallel()` is a collection of the asynchronous functions to run (an array, object or other iterable). Each function is passed a `callback(err, result)` which it must call on completion with an error `err` (which can be `null`) and an optional `results` value.

The optional second argument to  `async.parallel()` is a callback that will be run when all the functions in the first argument have completed. The callback is invoked with an error argument and a result collection that contains the results of the individual asynchronous operations. The result collection is of the same type as the first argument (i.e. if you pass an array of asynchronous functions, the final callback will be invoked with an array of results). If any of the parallel functions reports an error the callback is invoked early (with the error value).

The example below shows how this works when we pass an object as the first argument. As you can see, the results are _returned_ in an object with the same property names as the original functions that were passed in.

```js
async.parallel({
  one(callback) { /* … */ },
  two(callback) { /* … */ },
  // …
  something_else(callback) { /* … */ }
  },
  // optional callback
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, …, something_else: some_value}
  }
);
```

If you instead pass an array of functions as the first argument, the results will be an array (the array order results will match the original order that the functions were declared—not the order in which they completed).

## Asynchronous operations in series

The method [`async.series()`](https://caolan.github.io/async/v3/docs.html#series) is used to run multiple asynchronous operations in sequence, when subsequent functions do not depend on the output of earlier functions. It is essentially declared and behaves in the same way as `async.parallel()`.

```js
async.series({
  one(callback) { /* … */ },
  two(callback) { /* … */ },
  // …
  something_else(callback) { /* … */ }
  },
  // optional callback after the last asynchronous function completes.
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, /* …, */ something_else: some_value}
  }
);
```

> **Note:** The ECMAScript (JavaScript) language specification states that the order of enumeration of an object is undefined, so it is possible that the functions will not be called in the same order as you specify them on all platforms. If the order really is important, then you should pass an array instead of an object, as shown below.

```js
async.series([
  function(callback) {
    // do some stuff …
    callback(null, 'one');
  },
  function(callback) {
    // do some more stuff …
    callback(null, 'two');
  }
 ],
  // optional callback
  function(err, results) {
  // results is now equal to ['one', 'two']
  }
);
```

## Dependent asynchronous operations in series

The method [`async.waterfall()`](https://caolan.github.io/async/v3/docs.html#waterfall) is used to run multiple asynchronous operations in sequence when each operation is dependent on the result of the previous operation.

The callback invoked by each asynchronous function contains `null` for the first argument and results in subsequent arguments. Each function in the series takes the results arguments of the previous callback as the first parameters, and then a callback function. When all operations are complete, a final callback is invoked with the result of the last operation. The way this works is more clear when you consider the code fragment below (this example is from the _async_ documentation):

```js
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
  },
  function(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done'
}
);
```

## Installing async

Install the async module using the npm package manager so that we can use it in our code. You do this in the usual way, by opening a prompt in the root of the _LocalLibrary_ project and entering the following command:

```bash
npm install async
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of Part 5: [Template primer](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer).
