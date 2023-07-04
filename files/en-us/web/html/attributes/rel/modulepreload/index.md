---
title: rel=modulepreload
slug: Web/HTML/Attributes/rel/modulepreload
page-type: html-attribute-value
browser-compat: html.elements.link.rel.modulepreload
---

{{HTMLSidebar}}

The **`modulepreload`** keyword, for the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute of the {{HTMLElement("link")}} element, provides a declarative way to preemptively fetch a [module script](/en-US/docs/Web/JavaScript/Guide/Modules) and store it in the document's module map for later evaluation.

Links with `rel="modulepreload"` are similar to those with [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload).
The main differences are that `modulepreload` puts the results into the module map, and that the fetch operation follows the normal rules for modules, in particular with respect to the use of `crossorigin`.

The destination of the preloaded module, which indicates how the resource is to be used, is optional and defaults to `"script"`.
The value can be set using the [`as`](/en-US/docs/Web/HTML/Element/link#as) attribute to `"script"` or any script-like destination, such as `"audioworklet"`, `"paintworklet"`, `"serviceworker"`, `"sharedworker"`, or `"worker"`.
An error is fired on the element if any other destination is set.

A browser _may_ additionally also choose to automatically fetch any dependencies of the module resource.
Note however that this is a browser-specific optimization — the only way to ensure that the browser will try to preload a module's dependencies is to individually specify them!
Further, the `load` or `error` events fire immediately following success or failure of loading the _specified_ resources.
If dependencies are automatically fetched, no additional events are fired in the main thread (although you might monitor additional requests in a service worker or on the server).

## Examples

Consider the [basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules) example ([live version](https://mdn.github.io/js-examples/module-examples/basic-modules/)), introduced in the [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules#basic_example_structure) guide.

This has a file structure as shown below, consisting of the top level module `main.js`, which statically imports two dependency modules `modules/canvas.js` and `modules/square.js` using the [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import).

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

The HTML for the example below shows how `main.js` is fetched in a `<script>` element.
Only after `main.js` has loaded does the browser discover and fetch the two dependency modules.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

The HTML below updates the example to use `<link>` elements with `rel="modulepreload"` for the main file and each of the dependency modules.
This is much faster because the three modules all start downloading asynchronously and in parallel before they are needed.
By the time `main.js` has been parsed and its dependencies are known, they have already been fetched and downloaded.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <link rel="modulepreload" href="main.js" />
    <link rel="modulepreload" href="modules/canvas.js" />
    <link rel="modulepreload" href="modules/square.js" />
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>

    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
