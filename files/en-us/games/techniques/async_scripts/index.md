---
title: Async scripts for asm.js
slug: Games/Techniques/Async_scripts
tags:
  - Games
  - JavaScript
  - asm.js
  - async
---
{{GamesSidebar}}

Every medium or large game should compile [asm.js](/en-US/docs/Games/Tools/asm.js) code as part of an async script to give the browser the maximum flexibility to optimize the compilation process. In Gecko, async compilation allows the JavaScript engine to compile the asm.js off the main thread when the game is loading and cache the generated machine code so that the game doesn't need to be compiled on subsequent loads (starting in Firefox 28). To see the difference, toggle `javascript.options.parallel_parsing` in `about:config`.

## Putting async into action

Getting async compilation is easy: when writing your JavaScript, just use the `async` attribute like so:

```js
<script async src="file.js"></script>
```

or, to do the same thing via script:

```js
var script = document.createElement('script');
script.src = "file.js";
document.body.appendChild(script);
```

(Scripts created from script default to `async`.) The default HTML shell Emscripten generates produces the latter.

## When is async not async?

Two common situations in which a script is \*not\* async (as [defined by the HTML spec](https://www.w3.org/TR/html5/scripting-1.html)) are:

```js
<script async>code</script>
```

and

```js
var script = document.createElement('script');
script.textContent = "code";
document.body.appendChild(script);
```

Both are counted as 'inline' scripts and get compiled and then run immediately.

What if your code is in a JS string? Instead of using `eval` or `innerHTML`, both of which trigger synchronous compilation, you should use a Blob with an object URL:

```js
var blob = new Blob([codeString]);
var script = document.createElement('script');
var url = URL.createObjectURL(blob);
script.onload = script.onerror = function() { URL.revokeObjectURL(url); };
script.src = url;
document.body.appendChild(script);
```

The setting of `src` rather than `innerHTML` is what makes this script async.
