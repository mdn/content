---
title: Understanding the module graph
slug: Web/JavaScript/Guide/Modules/Module_graph
page-type: guide
sidebar: jssidebar
---

Through `import` and `export` declarations, JavaScript modules form a complex graph of dependencies. This guide talks about various concepts related to how modules are loaded, and how that impacts the way you structure and author your code.

## What is the module graph?

In the [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide, we already showed a basic example of a module graph:

![Diagram showing how modules are attached to web pages](/en-US/docs/Web/JavaScript/Guide/Modules/module-loading.svg)

In this module graph, the nodes are the HTML file plus the different modules being imported (all modules here are JavaScript, but JSON, CSS, WebAssembly, etc. would all be valid). Each time you write `import ... from "module B"` (or `export ... from "module B"`) in `module A`, you create a directed edge from `module A` to `module B`. This can be any _graph_, not just a tree or a DAG (directed acyclic graph), because [cycles](#cyclic_imports) and diamond structures (where both modules import the same module, like above) are allowed.

Each module graph needs a single entry point, from which the runtime starts discovering dependencies. In the example above, this entry point is the HTML file. In [Node.js](/en-US/docs/Web/JavaScript/Guide/Modules/Cross-platform_modules) (or other server-side runtimes), this entry point is the file you invoked `node` with. In workers, this is the file you passed to the {{domxref("Worker/Worker", "Worker()")}} constructor.

## The module loading process

### Loading the graph

Walk through resolving a specifier, obtaining and parsing the source, discovering its static dependencies, and recursively loading them. Explain how the host identifies an already-loaded module. Distinguish loading order from execution order; leave URL and package resolution details to the other subpages.

### Linking modules

Explain how imports connect to exported bindings before module bodies execute. Cover missing exports, ambiguous star exports, and why imports are live bindings rather than copied values. Distinguish creating a binding from initializing its value.

### Evaluating modules

Trace the diamond example with logging statements. Explain dependency traversal, side effects, and why the shared dependency runs once. Connect this to import hoisting: moving an import declaration down the file does not postpone its dependency's execution. Loading, linking, and evaluation are distinct operations in the ECMAScript module model.

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

## Asynchronous evaluation with top-level await

Extend the running example with one asynchronous dependency. Show which importers wait and which independent branches can proceed. Cover rejected initialization and, briefly, circular waiting involving await import(). The main guide can retain its introductory syntax example.

## Dynamic imports and the graph

Explain when import() starts loading, what must finish before its promise fulfills, and how it can reach an existing module or load additional modules. Contrast conditional loading with static dependencies. Include repeated and concurrent imports.

## Module identity, caching, and failures

Consolidate what "the same module" means: resolved identity, relevant attributes, and separate environments. Distinguish module caching from HTTP caching. Organize errors by phase—resolution/loading, parsing, linking, evaluation—and explain propagation and retry behavior with host-specific qualifications.

## Controlling import phases

Finish with source imports and deferred evaluation as applications of the lifecycle already explained. A comparison table should show what each form loads, links, evaluates, and returns. Link to the detailed references and distinguish implementation availability from the source-import and deferred-evaluation proposals.
