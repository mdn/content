---
title: JavaScript modules
slug: Web/JavaScript/Guide/Modules
page-type: guide
browser-compat:
  - javascript.statements.import
  - javascript.statements.export
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

This guide gives you all you need to get started with JavaScript module syntax.

## A background on modules

JavaScript programs started off pretty small — most of its usage in the early days was to do isolated scripting tasks, providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed. Fast forward a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being used in other contexts ([Node.js](/en-US/docs/Glossary/Node.js), for example).

It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed. Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module usage (for example, other [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-based module systems like [RequireJS](https://requirejs.org/), and more recently [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)).

The good news is that modern browsers have started to support module functionality natively, and this is what this article is all about. This can only be a good thing — browsers can optimize loading of modules, making it more efficient than having to use a library and do all of that extra client-side processing and extra round trips.

Use of native JavaScript modules is dependent on the {{jsxref("Statements/import", "import")}} and {{jsxref("Statements/export", "export")}} statements; these are supported in browsers as shown in the compatibility table below.

## Browser compatibility

{{Compat}}

## Introducing an example

To demonstrate usage of modules, we've created a [simple set of examples](https://github.com/mdn/js-examples/tree/main/module-examples) that you can find on GitHub. These examples demonstrate a simple set of modules that create a [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas) element on a webpage, and then draw (and report information about) different shapes on the canvas.

These are fairly trivial, but have been kept deliberately simple to demonstrate modules clearly.

> **Note:** If you want to download the examples and run them locally, you'll need to run them through a local web server.

## Basic example structure

In our first example (see [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) we have a file structure as follows:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> **Note:** All of the examples in this guide have basically the same structure; the above should start getting pretty familiar.

The modules directory's two modules are described below:

- `canvas.js` — contains functions related to setting up the canvas:

  - `create()` — creates a canvas with a specified `width` and `height` inside a wrapper [`<div>`](/en-US/docs/Web/HTML/Element/div) with a specified ID, which is itself appended inside a specified parent element. Returns an object containing the canvas's 2D context and the wrapper's ID.
  - `createReportList()` — creates an unordered list appended inside a specified wrapper element, which can be used to output report data into. Returns the list's ID.

- `square.js` — contains:

  - `name` — a constant containing the string 'square'.
  - `draw()` — draws a square on a specified canvas, with a specified size, position, and color. Returns an object containing the square's size, position, and color.
  - `reportArea()` — writes a square's area to a specific report list, given its length.
  - `reportPerimeter()` — writes a square's perimeter to a specific report list, given its length.

### Aside — .mjs versus .js

Throughout this article, we've used `.js` extensions for our module files, but in other resources you may see the `.mjs` extension used instead. [V8's documentation recommends this](https://v8.dev/features/modules#mjs), for example. The reasons given are:

- It is good for clarity, i.e. it makes it clear which files are modules, and which are regular JavaScript.
- It ensures that your module files are parsed as a module by runtimes such as [Node.js](https://nodejs.org/api/esm.html#esm_enabling), and build tools such as [Babel](https://babeljs.io/docs/en/options#sourcetype).

However, we decided to keep using `.js`, at least for the moment. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a `Content-Type` header that contains a JavaScript MIME type such as `text/javascript`. If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript. Most servers already set the correct type for `.js` files, but not yet for `.mjs` files. Servers that already serve `.mjs` files correctly include [GitHub Pages](https://pages.github.com/) and [`http-server`](https://github.com/http-party/http-server#readme) for Node.js.

This is OK if you are using such an environment already, or if you aren't but you know what you are doing and have access (i.e. you can configure your server to set the correct [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type) for `.mjs` files). It could however cause confusion if you don't control the server you are serving files from, or are publishing files for public use, as we are here.

For learning and portability purposes, we decided to keep to `.js`.

If you really value the clarity of using `.mjs` for modules versus using `.js` for "normal" JavaScript files, but don't want to run into the problem described above, you could always use `.mjs` during development and convert them to `.js` during your build step.

It is also worth noting that:

- Some tools may never support `.mjs`.
- The `<script type="module">` attribute is used to denote when a module is being pointed to, as you'll see below.

## Exporting module features

The first thing you do to get access to module features is export them. This is done using the {{jsxref("Statements/export", "export")}} statement.

The easiest way to use it is to place it in front of any items you want exported out of the module, for example:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

You can export functions, `var`, `let`, `const`, and — as we'll see later — classes. They need to be top-level items: for example, you can't use `export` inside a function.

A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importing features into your script

Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

You use the {{jsxref("Statements/import", "import")}} statement, followed by a comma-separated list of the features you want to import wrapped in curly braces, followed by the keyword `from`, followed by the _module specifier_.

The _module specifier_ provides a string that the JavaScript environment can resolve to a path to the module file.
In a browser, this could be a path relative to the site root, which for our `basic-modules` example would be `/js-examples/module-examples/basic-modules`.
However, here we are instead using the dot (`.`) syntax to mean "the current location", followed by the relative path to the file we are trying to find. This is much better than writing out the entire absolute path each time, as relative paths are shorter and make the URL portable — the example will still work if you move it to a different location in the site hierarchy.

So for example:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

becomes

```bash
./modules/square.js
```

You can see such lines in action in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js).

> **Note:** In some module systems, you can use a module specifier like `modules/square` that isn't a relative or absolute path, and that doesn't have a file extension.
> This kind of specifier can be used in a browser environment if you first define an [import map](#importing_modules_using_import_maps).

Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in `main.js`, below the import lines:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **Note:** The imported values are read-only views of the features that were exported. Similar to `const` variables, you cannot re-assign the variable that was imported, but you can still modify properties of object values. The value can only be re-assigned by the module exporting it. See the [`import` reference](/en-US/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) for an example.

## Importing modules using import maps

Above we saw how a browser can import a module using a module specifier that is either an absolute URL, or a relative URL that is resolved using the base URL of the document:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Import maps](/en-US/docs/Web/HTML/Element/script/type/importmap) allow developers to instead specify almost any text they want in the module specifier when importing a module; the map provides a corresponding value that will replace the text when the module URL is resolved.

For example, the `imports` key in the import map below defines a "module specifier map" JSON object where the property names can be used as module specifiers, and the corresponding values will be substituted when the browser resolves the module URL.
The values must be absolute or relative URLs.
Relative URLs are resolved to absolute URL addresses using the [base URL](/en-US/docs/Web/HTML/Element/base) of the document containing the import map.

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

The import map is defined using a [JSON object](/en-US/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) inside a `<script>` element with the `type` attribute set to [`importmap`](/en-US/docs/Web/HTML/Element/script/type/importmap).
There can only be one import map in the document, and because it is used to resolve which modules are loaded in both static and dynamic imports, it must be declared before any `<script>` elements that import modules.
Note that the import map only applies to the document — the specification does not cover how to apply an import map in a worker or worklet context. <!-- https://github.com/WICG/import-maps/issues/2 -->

With this map you can now use the property names above as module specifiers.
If there is no trailing forward slash on the module specifier key then the whole module specifier key is matched and substituted.
For example, below we match bare module names, and remap a URL to another path.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

If the module specifier has a trailing forward slash then the value must have one as well, and the key is matched as a "path prefix".
This allows remapping of whole classes of URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

It is possible for multiple keys in an import map to be valid matches for a module specifier.
For example, a module specifier of `shapes/circle/` could match the module specifier keys `shapes/` and `shapes/circle/`.
In this case the browser will select the most specific (longest) matching module specifier key.

Import maps allow modules to be imported using bare module names (as in Node.js), and can also simulate importing modules from packages, both with and without file extensions.
While not shown above, they also allow particular versions of a library to be imported, based on the path of the script that is importing the module.
Generally they let developers write more ergonomic import code, and make it easier to manage the different versions and dependencies of modules used by a site.
This can reduce the effort required to use the same JavaScript libraries in both browser and server.

The following sections expand on the various features outlined above.

### Feature detection

You can check support for import maps using the [`HTMLScriptElement.supports()`](/en-US/docs/Web/API/HTMLScriptElement/supports_static) static method (which is itself broadly supported):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importing modules as bare names

In some JavaScript environments, such as Node.js, you can use bare names for the module specifier.
This works because the environment can resolve module names to a standard location in the file system.
For example, you might use the following syntax to import the "square" module.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

To use bare names on a browser you need an import map, which provides the information needed by the browser to resolve module specifiers to URLs (JavaScript will throw a `TypeError` if it attempts to import a module specifier that can't be resolved to a module location).

Below you can see a map that defines a `square` module specifier key, which in this case maps to a relative address value.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

With this map we can now use a bare name when we import the module:

```js
import { name as squareName, draw } from "square";
```

### Remapping module paths

Module specifier map entries, where both the specifier key and its associated value have a trailing forward slash (`/`), can be used as a path-prefix.
This allows the remapping of a whole set of import URLs from one location to another.
It can also be used to emulate working with "packages and modules", such as you might see in the Node ecosystem.

> **Note:** The trailing `/` indicates that the module specifier key can be substituted as _part_ of a module specifier.
> If this is not present, the browser will only match (and substitute) the whole module specifier key.

#### Packages of modules

The following JSON import map definition maps `lodash` as a bare name, and the module specifier prefix `lodash/` to the path `/node_modules/lodash-es/` (resolved to the document base URL):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

With this mapping you can import both the whole "package", using the bare name, and modules within it (using the path mapping):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

It is possible to import `fp` above without the `.js` file extension, but you would need to create a bare module specifier key for that file, such as `lodash/fp`, rather than using the path.
This may be reasonable for just one module, but scales poorly if you wish to import many modules.

#### General URL remapping

A module specifier key doesn't have to be path — it can also be an absolute URL (or a URL-like relative path like `./`, `../`, `/`).
This may be useful if you want to remap a module that has absolute paths to a resource with your own local resources.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Scoped modules for version management

Ecosystems like Node use package managers such as npm to manage modules and their dependencies.
The package manager ensures that each module is separated from other modules and their dependencies.
As a result, while a complex application might include the same module multiple times with several different versions in different parts of the module graph, users do not need to think about this complexity.

> **Note:** You can also achieve version management using relative paths, but this is subpar because, among other things, this forces a particular structure on your project, and prevents you from using bare module names.

Import maps similarly allow you to have multiple versions of dependencies in your application and refer to them using the same module specifier.
You implement this with the `scopes` key, which allows you to provide module specifier maps that will be used depending on the path of the script performing the import.
The example below demonstrates this.

```json
{
  "imports": {
    "coolmodule": "/node_modules/coolmodule/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "coolmodule": "/node_modules/some/other/location/coolmodule/index.js"
    }
  }
}
```

With this mapping, if a script with an URL that contains `/node_modules/dependency/` imports `coolmodule`, the version in `/node_modules/some/other/location/coolmodule/index.js` will be used.
The map in `imports` is used as a fallback if there is no matching scope in the scoped map, or the matching scopes don't contain a matching specifier. For example, if `coolmodule` is imported from a script with a non-matching scope path, then the module specifier map in `imports` will be used instead, mapping to the version in `/node_modules/coolmodule/index.js`.

Note that the path used to select a scope does not affect how the address is resolved.
The value in the mapped path does not have to match the scopes path, and relative paths are still resolved to the base URL of the script that contains the import map.

Just as for module specifier maps, you can have many scope keys, and these may contain overlapping paths.
If multiple scopes match the referrer URL, then the most specific scope path is checked first (the longest scope key) for a matching specifier.
The browsers will fall back to the next most specific matching scoped path if there is no matching specifier, and so on.
If there is no matching specifier in any of the matching scopes, the browser checks for a match in the module specifier map in the `imports` key.

### Improve caching by mapping away hashed filenames

Script files used by websites often have hashed filenames to simplify caching.
The downside of this approach is that if a module changes, any modules that import it using its hashed filename will also need to be updated/regenerated.
This potentially results in a cascade of updates, which is wasteful of network resources.

Import maps provide a convenient solution to this problem.
Rather than depending on specific hashed filenames, applications and scripts instead depend on an un-hashed version of the module name (address).
An import map like the one below then provides a mapping to the actual script file.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

If `dependency_script` changes, then its hash contained in the file name changes as well. In this case, we only need to update the import map to reflect the changed name of the module.
We don't have to update the source of any JavaScript code that depends on it, because the specifier in the import statement does not change.

## Applying the module to your HTML

Now we just need to apply the `main.js` module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

First of all, you need to include `type="module"` in the [`<script>`](/en-US/docs/Web/HTML/Element/script) element, to declare this script as a module. To import the `main.js` script, we use this:

```html
<script type="module" src="main.js"></script>
```

You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the `<script>` element:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

You can only use `import` and `export` statements inside modules, not regular scripts. An error will be thrown if your `<script>` element doesn't have the `type="module"` attribute and attempts to import other modules. For example:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

You should generally define all your modules in separate files. Modules declared inline in HTML can only import other modules, but anything they export will not be accessible by other modules (because they don't have a URL).

> **Note:** Modules and their dependencies can be preloaded by specifying them in [`<link>`](/en-US/docs/Web/HTML/Element/link) elements with [`rel="modulepreloaded"`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload).
> This can significantly reduce load time when the modules are used.

## Other differences between modules and standard scripts

- You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a `file://` URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.
- Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use {{jsxref("Strict_mode", "strict mode", "", 1)}} automatically.
- There is no need to use the `defer` attribute (see [`<script>` attributes](/en-US/docs/Web/HTML/Element/script#attributes)) when loading a module script; modules are deferred automatically.
- Modules are only executed once, even if they have been referenced in multiple `<script>` tags.
- Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.

Module-defined variables are scoped to the module unless explicitly attached to the global object. On the other hand, globally-defined variables are available within the module. For example, given the following code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="main"></div>
    <script>
      // A var statement creates a global variable.
      var text = "Hello";
    </script>
    <script type="module" src="./render.js"></script>
  </body>
</html>
```

```js
/* render.js */
document.getElementById("main").innerText = text;
```

The page would still render `Hello`, because the global variables `text` and `document` are available in the module. (Also note from this example that a module doesn't necessarily need an import/export statement — the only thing needed is for the entry point to have `type="module"`.)

## Default exports versus named exports

The functionality we've exported so far has been comprised of **named exports** — each item (be it a function, `const`, etc.) has been referred to by its name upon export, and that name has been used to refer to it on import as well.

There is also a type of export called the **default export** — this is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems (as explained nicely in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) by Jason Orendorff; search for "Default exports").

Let's look at an example as we explain how it works. In our basic-modules `square.js` you can find a function called `randomSquare()` that creates a square with a random color, size, and position. We want to export this as our default, so at the bottom of the file we write this:

```js
export default randomSquare;
```

Note the lack of curly braces.

We could instead prepend `export default` onto the function and define it as an anonymous function, like this:

```js
export default function (ctx) {
  // …
}
```

Over in our `main.js` file, we import the default function using this line:

```js
import randomSquare from "./modules/square.js";
```

Again, note the lack of curly braces. This is because there is only one default export allowed per module, and we know that `randomSquare` is it. The above line is basically shorthand for:

```js
import { default as randomSquare } from "./modules/square.js";
```

> **Note:** The as syntax for renaming exported items is explained below in the [Renaming imports and exports](#renaming_imports_and_exports) section.

## Avoiding naming conflicts

So far, our canvas shape drawing modules seem to be working OK. But what happens if we try to add a module that deals with drawing another shape, like a circle or triangle? These shapes would probably have associated functions like `draw()`, `reportArea()`, etc. too; if we tried to import different functions of the same name into the same top-level module file, we'd end up with conflicts and errors.

Fortunately there are a number of ways to get around this. We'll look at these in the following sections.

## Renaming imports and exports

Inside your `import` and `export` statement's curly braces, you can use the keyword `as` along with a new feature name, to change the identifying name you will use for a feature inside the top-level module.

So for example, both of the following would do the same job, albeit in a slightly different way:

```js
// inside module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// inside main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Let's look at a real example. In our [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) directory you'll see the same module system as in the previous example, except that we've added `circle.js` and `triangle.js` modules to draw and report on circles and triangles.

Inside each of these modules, we've got features with the same names being exported, and therefore each has the same `export` statement at the bottom:

```js
export { name, draw, reportArea, reportPerimeter };
```

When importing these into `main.js`, if we tried to use

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

The browser would throw an error such as "SyntaxError: redeclaration of import name" (Firefox).

Instead we need to rename the imports so that they are unique:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Note that you could solve the problem in the module files instead, e.g.

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

And it would work just the same. What style you use is up to you, however it arguably makes more sense to leave your module code alone, and make the changes in the imports. This especially makes sense when you are importing from third party modules that you don't have any control over.

## Creating a module object

The above method works OK, but it's a little messy and long-winded. An even better solution is to import each module's features inside a module object. The following syntax form does that:

```js
import * as Module from "./modules/module.js";
```

This grabs all the exports available inside `module.js`, and makes them available as members of an object `Module`, effectively giving it its own namespace. So for example:

```js
Module.function1();
Module.function2();
```

Again, let's look at a real example. If you go to our [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) directory, you'll see the same example again, but rewritten to take advantage of this new syntax. In the modules, the exports are all in the following simple form:

```js
export { name, draw, reportArea, reportPerimeter };
```

The imports on the other hand look like this:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

In each case, you can now access the module's imports underneath the specified object name, for example:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

So you can now write the code just the same as before (as long as you include the object names where needed), and the imports are much neater.

## Modules and classes

As we hinted at earlier, you can also export and import classes; this is another option for avoiding conflicts in your code, and is especially useful if you've already got your module code written in an object-oriented style.

You can see an example of our shape drawing module rewritten with ES classes in our [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) directory. As an example, the [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) file now contains all its functionality in a single class:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

which we then export:

```js
export { Square };
```

Over in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js), we import it like this:

```js
import { Square } from "./modules/square.js";
```

And then use the class to draw our square:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregating modules

There will be times where you'll want to aggregate modules together. You might have multiple levels of dependencies, where you want to simplify things, combining several submodules into one parent module. This is possible using export syntax of the following forms in the parent module:

```js
export * from "x.js";
export { name } from "x.js";
```

For an example, see our [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) directory. In this example (based on our earlier classes example) we've got an extra module called `shapes.js`, which aggregates all the functionality from `circle.js`, `square.js`, and `triangle.js` together. We've also moved our submodules inside a subdirectory inside the `modules` directory called `shapes`. So the module structure in this example is:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In each of the submodules, the export is of the same form, e.g.

```js
export { Square };
```

Next up comes the aggregation part. Inside [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js), we include the following lines:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

These grab the exports from the individual submodules and effectively make them available from the `shapes.js` module.

> **Note:** The exports referenced in `shapes.js` basically get redirected through the file and don't really exist there, so you won't be able to write any useful related code inside the same file.

So now in the `main.js` file, we can get access to all three module classes by replacing

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

with the following single line:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamic module loading

A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages; let's read on and see how it works.

This new functionality allows you to call [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) as a function, passing it the path to the module as a parameter. It returns a {{jsxref("Promise")}}, which fulfills with a module object (see [Creating a module object](#creating_a_module_object)) giving you access to that object's exports. For example:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> **Note:** Dynamic import is permitted in the browser main thread, and in shared and dedicated workers.
> However `import()` will throw if called in a service worker or worklet.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Let's look at an example. In the [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) directory we've got another example based on our classes example. This time however we are not drawing anything on the canvas when the example loads. Instead, we include three buttons — "Circle", "Square", and "Triangle" — that, when pressed, dynamically load the required module and then use it to draw the associated shape.

In this example we've only made changes to our [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) and [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) files — the module exports remain the same as before.

Over in `main.js` we've grabbed a reference to each button using a [`document.querySelector()`](/en-US/docs/Web/API/Document/querySelector) call, for example:

```js
const squareBtn = document.querySelector(".square");
```

We then attach an event listener to each button so that when pressed, the relevant module is dynamically loaded and used to draw the shape:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

Note that, because the promise fulfillment returns a module object, the class is then made a subfeature of the object, hence we now need to access the constructor with `Module.` prepended to it, e.g. `Module.Square( /* … */ )`.

Another advantage of dynamic imports is that they are always available, even in script environments. Therefore, if you have an existing `<script>` tag in your HTML that doesn't have `type="module"`, you can still reuse code distributed as modules by dynamically importing it.

```html
<script>
  import("./modules/square.js").then((module) => {
    // Do something with the module.
  });
  // Other code that operates on the global scope and is not
  // ready to be refactored into modules yet.
  var btn = document.querySelector(".square");
</script>
```

## Top level await

Top level await is a feature available within modules. This means the `await` keyword can be used. It allows modules to act as big [asynchronous functions](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) meaning code can be evaluated before use in parent modules, but without blocking sibling modules from loading.

Let's take a look at an example. You can find all the files and code described in this section within the [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) directory, which extends from the previous examples.

Firstly we'll declare our color palette in a separate [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) file:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Then we'll create a module called [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) which uses a fetch request to load the [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) file and return the data as an object.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Notice the last export line here.

We're using the keyword `await` before specifying the constant `colors` to export. This means any other modules which include this one will wait until `colors` has been downloaded and parsed before using it.

Let's include this module in our [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) file:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

We'll use `colors` instead of the previously used strings when calling our shape functions:

```js
const square1 = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle1 = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle1 = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

This is useful because the code within [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) won't execute until the code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) has run. However it won't block other modules being loaded. For instance our [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) module will continue to load while `colors` is being fetched.

## Import declarations are hoisted

Import declarations are [hoisted](/en-US/docs/Glossary/Hoisting). In this case, it means that the imported values are available in the module's code even before the place that declares them, and that the imported module's side effects are produced before the rest of the module's code starts running.

So for example, in `main.js`, importing `Canvas` in the middle of the code would still work:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Still, it is considered good practice to put all your imports at the top of the code, which makes it easier to analyze dependencies.

## Cyclic imports

Modules can import other modules, and those modules can import other modules, and so on. This forms a [directed graph](https://en.wikipedia.org/wiki/Directed_graph) called the "dependency graph". In an ideal world, this graph is [acyclic](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In this case, the graph can be evaluated using a depth-first traversal.

However, cycles are often inevitable. Cyclic import arises if module `a` imports module `b`, but `b` directly or indirectly depends on `a`. For example:

```js
// -- a.js --
import { b } from "./b.js";

// -- b.js --
import { a } from "./a.js";

// Cycle:
// a.js ───> b.js
//  ^         │
//  └─────────┘
```

Cyclic imports don't always fail. The imported variable's value is only retrieved when the variable is actually used (hence allowing [live bindings](/en-US/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), and only if the variable remains uninitialized at that time will a [`ReferenceError`](/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) be thrown.

```js
// -- a.js --
import { b } from "./b.js";

setTimeout(() => {
  console.log(b); // 1
}, 10);

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);

export const b = 1;
```

In this example, both `a` and `b` are used asynchronously. Therefore, at the time the module is evaluated, neither `b` nor `a` is actually read, so the rest of the code is executed as normal, and the two `export` declarations produce the values of `a` and `b`. Then, after the timeout, both `a` and `b` are available, so the two `console.log` statements also execute as normal.

If you change the code to use `a` synchronously, the module evaluation fails:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

This is because when JavaScript evaluates `a.js`, it needs to first evaluate `b.js`, the dependency of `a.js`. However, `b.js` uses `a`, which is not yet available.

On the other hand, if you change the code to use `b` synchronously but `a` asynchronously, the module evaluation succeeds:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

console.log(b); // 1
export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

This is because the evaluation of `b.js` completes normally, so the value of `b` is available when `a.js` is evaluated.

You should usually avoid cyclic imports in your project, because they make your code more error-prone. Some common cycle-elimination techniques are:

- Merge the two modules into one.
- Move the shared code into a third module.
- Move some code from one module to the other.

However, cyclic imports can also occur if the libraries depend on each other, which is harder to fix.

## Authoring "isomorphic" modules

The introduction of modules encourages the JavaScript ecosystem to distribute and reuse code in a modular fashion. However, that doesn't necessarily mean a piece of JavaScript code can run in every environment. Suppose you discovered a module that generates SHA hashes of your user's password. Can you use it in the browser front end? Can you use it on your Node.js server? The answer is: it depends.

Modules still have access to global variables, as demonstrated previously. If the module references globals like `window`, it can run in the browser, but will throw an error in your Node.js server, because `window` is not available there. Similarly, if the code requires access to `process` to be functional, it can only be used in Node.js.

In order to maximize the reusability of a module, it is often advised to make the code "isomorphic" — that is, exhibits the same behavior in every runtime. This is commonly achieved in three ways:

- Separate your modules into "core" and "binding". For the "core", focus on pure JavaScript logic like computing the hash, without any DOM, network, filesystem access, and expose utility functions. For the "binding" part, you can read from and write to the global context. For example, the "browser binding" may choose to read the value from an input box, while the "Node binding" may read it from `process.env`, but values read from either place will be piped to the same core function and handled in the same way. The core can be imported in every environment and used in the same way, while only the binding, which is usually lightweight, needs to be platform-specific.
- Detect whether a particular global exists before using it. For example, if you test that `typeof window === "undefined"`, you know that you are probably in a Node.js environment, and should not read DOM.

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // We are running in Node.js; read it from `process.env`
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // We are running in the browser; read it from the input box
    password = document.getElementById("password").value;
  }
  ```

  This is preferable if the two branches actually end up with the same behavior ("isomorphic"). If it's impossible to provide the same functionality, or if doing so involves loading significant amounts of code while a large part remains unused, better use different "bindings" instead.

- Use a polyfill to provide a fallback for missing features. For example, if you want to use the [`fetch`](/en-US/docs/Web/API/Fetch_API) function, which is only supported in Node.js since v18, you can use a similar API, like the one provided by [`node-fetch`](https://www.npmjs.com/package/node-fetch). You can do so conditionally through dynamic imports:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  The [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) variable is a global object that is available in every environment and is useful if you want to read or create global variables within modules.

These practices are not unique to modules. Still, with the trend of code reusability and modularization, you are encouraged to make your code cross-platform so that it can be enjoyed by as many people as possible. Runtimes like Node.js are also actively implementing web APIs where possible to improve interoperability with the web.

## Troubleshooting

Here are a few tips that may help you if you are having trouble getting your modules to work. Feel free to add to the list if you discover more!

- We mentioned this before, but to reiterate: `.mjs` files need to be loaded with a MIME-type of `text/javascript` (or another JavaScript-compatible MIME-type, but `text/javascript` is recommended), otherwise you'll get a strict MIME type checking error like "The server responded with a non-JavaScript MIME type".
- If you try to load the HTML file locally (i.e. with a `file://` URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server. GitHub pages is ideal as it also serves `.mjs` files with the correct MIME type.
- Because `.mjs` is a non-standard file extension, some operating systems might not recognize it, or try to replace it with something else. For example, we found that macOS was silently adding on `.js` to the end of `.mjs` files and then automatically hiding the file extension. So all of our files were actually coming out as `x.mjs.js`. Once we turned off automatically hiding file extensions, and trained it to accept `.mjs`, it was OK.

## See also

- [JavaScript modules](https://v8.dev/features/modules) on v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) on hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) on hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) by Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
