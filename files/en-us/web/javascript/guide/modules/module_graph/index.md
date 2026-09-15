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

Each module graph needs at least one entry point, from which the runtime starts discovering dependencies. In the example above, there are multiple entry points: each `<script>` element starts one. In [Node.js](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms) (or other server-side runtimes), this entry point is the file you invoked `node` with. In workers, this is the file you passed to the {{domxref("Worker/Worker", "Worker()")}} constructor. Graphs from different entry points aren't necessarily disjoint: if they import the same module (or the entry point itself is already imported), they can be merged into one larger graph.

## From module source to execution

Let's talk about how modules are loaded and evaluated, using the following example, assuming it is run in Node with `node main.js` (there's nothing Node-specific here, but modules are easier to spin up in Node).

```js
// -- main.js --
import { greet } from "./formatters.js";
import config from "./config.js";

greet("Josh", config.locale);
```

```js
// -- formatters.js --
import config from "./config.js";
import { log } from "./logger.js";

export function greet(name, localeName = config.defaultLocale) {
  const locale = new Intl.Locale(localeName);
  if (locale.language === "en") {
    log(`Hello, ${name}!`);
  } else if (locale.language === "fr") {
    log(`Bonjour, ${name} !`);
  } else {
    throw new Error(`Sorry, I don't speak ${locale}.`);
  }
}
```

```js
// -- config.js --
export default {
  locale: "en-US",
  defaultLocale: "en-US",
};
```

```js
// -- logger.js --
export function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}
```

### Loading the graph

Module loading is the part that requires a close collaboration between the host (Node) and the engine (V8). Each time:

- The host receives a _module request_, containing the module specifier and import attributes, if any. The host loads the respective module's source code (such as by mapping it to a file system location and reading that file's content).
  - This step can be further broken down to two steps: [specifier resolution](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) and actually sending the request, which may be an HTTP request in browsers or a file system access in Node.
  - Neither of the steps above are taken by the entry point: for the entry point, the host gets the module source directly. For example, the `main.js` command-line argument is directly read as a file path, and the `src` attribute of `<script>` elements is directly read as a URL; neither are module specifiers. The loading process might also be slightly different.
- The host gives the engine the module source code. The engine parses the source code and collects all `import` and `export from` declarations, which create new module requests. (If the source is not JavaScript, the host may ask some other parser to process the source code instead.)
- All these module requests are given to the host and the host starts the whole process again, possibly handling multiple requests concurrently.
- If the host finds out that it has already loaded or is loading a module request (in browsers and Node.js, modules are cached by both resolved URLs and module types), it does not fetch it again and does not ask the engine to parse again. Instead, it supplies the existing module, waiting for the ongoing load to finish if necessary.

In this particular example:

- The host reads the `main.js` file and asks the engine to parse it.
- The engine finds two module requests, for `./formatters.js` and `./config.js`. It sends those module requests to the host.
- The host loads both of them by reading the corresponding files. Suppose `formatters.js` finishes loading first, so the host sends its source text to the engine first.
- Parsing `formatters.js` reveals another request for `./config.js`, as well as a new dependency, `./logger.js`. The engine sends both of them to the host.
- The host finds out that `./config.js` was already requested by `main.js` and skips it (although it's still loading), and starts loading `logger.js`.
- The loading for both `logger.js` and `config.js` finishes; neither contains further requests.

If a module request failed—for example, the specifier failed to resolve, the request returned an error status, or the source code failed to parse—the loading process for this graph stops immediately without processing any unprocessed module requests. Already in-progress requests may still complete normally and be used later.

After this step, the module graph is already established, all modules have been loaded and parsed, but no JavaScript module bodies have been executed by this loading process.

![Module graph](module-graph.svg)

### Linking modules

After the graph has finished loading successfully, the host asks the engine to _link_ the entry module. The main goal of linking is to set up the [module environment](/en-US/docs/Glossary/Scope), i.e., the various {{glossary("binding", "bindings")}}, including the bindings to be exported. Each imported name is resolved to the place where it's actually defined and exported, potentially going through multiple layers of `export from` declarations. All modules in the graph need to be linked before they can be evaluated, so that importing a name that isn't exported on the other side can be caught early, before any code starts evaluating. It also makes subsequent evaluation easier because it avoids walking the module graph many times as each imported name gets used.

During the linking phase, the engine traverses the module graph using depth-first search. Each time:

- The engine visits a module. If the module is already linked, or is already being linked (which happens with [cyclic imports](#cyclic_imports)), the engine does not process it again. Otherwise, the engine marks the module as currently linking.
- The engine recursively links each of the module's dependencies using the same process. Unlike loading, linking is fully synchronous and deterministic: dependencies are visited in the order their module requests appear in the source.
- After all dependencies have been visited, the engine sets up the module's own environment. It creates a binding for each top-level declaration of the module. For each imported name (other than namespace imports, which create fresh object bindings), it resolves the name to the binding in the module that actually declares it, then creates an _indirect binding_: a name in the importing module that permanently refers to that other module's binding. If some imported name cannot be resolved, linking fails.
- This module is marked as linked. (If there's a cycle, then they are all marked as linked together; again, we'll talk about this later.)

In our example:

- The engine starts with `main.js` and follows its first dependency, `formatters.js`. Before setting up `formatters.js`, it visits `config.js` and `logger.js` first.
- For `config.js`, the engine creates a binding for the default export, but does not yet evaluate the object literal.
- For `logger.js`, the engine creates the `log` binding and initializes it with the function object, without running the function body. Creating a binding and initializing its value are separate operations: function declarations are initialized during linking, while `let`, `const`, and `class` declarations remain uninitialized until evaluation reaches them. Bindings for `var` declarations are initialized to `undefined`.
- The engine can now set up `formatters.js`. Its imported `config` binding refers to the default export of `config.js`, and its imported `log` binding refers to the `log` binding in `logger.js`. Its own `greet` binding is initialized with the function object.
- Finally, the engine returns to `main.js`. Its other dependency, `config.js`, is already linked, so the engine reuses it. It connects `main.js`'s `greet` and `config` imports to their respective exported bindings.

![Imported identifiers point to their corresponding exports in the dependency modules.](module-linking.svg)

Most of the time, the imported name is declared directly in the imported module, as in the example here, so the binding connections follow the same paths as the module dependency graph. However, if you use `export from`, or export an identifier you imported, the linker will follow those layers until it finds the place where it's actually declared.

![Solid arrows show the dependency chain from a.js through b.js and c.js to d.js. Dashed arrows connect the imported x bindings in a.js and b.js directly to the x declaration in d.js.](module-reexports.svg)

Here, although the import chain is `a.js → b.js → c.js → d.js`, every single `x` binding in this chain eventually resolves to the same `const` declaration in `d.js`, while `c.js` has no module-scoped binding. The binding connections go directly to `d.js`, while the module dependency graph still includes the entire import chain.

An `export * from` declaration re-exports all names from another module (except for `default`) as named exports of the current module. When resolving an imported name, the engine first checks for an explicit export of that name. If there is none, it follows the `export * from` declarations and recursively resolves the name in those modules.

Multiple `export * from` declarations may make the current module export the same name multiple times (again, `export * from` never collides with an explicit named export; the latter always takes priority). If these declarations eventually resolve to the same binding, then there's no ambiguity. If they resolve to different bindings, the name is ambiguous, even if those bindings happen to contain the same value. For example:

```js
// -- first.js --
export const x = 1;
```

```js
// -- second.js --
export const x = 1;
```

```js
// -- combined.js --
export * from "./first.js";
export * from "./second.js";
// Should "x" from this module resolve to first.js or second.js?
```

The star exports alone do not cause an error. However, `import { x } from "./combined.js"` or `export { x } from "./combined.js"` causes a {{jsxref("SyntaxError")}} during linking. A namespace import, `import * as combined from "./combined.js"`, succeeds, but the namespace object has no `x` property.

Adding `export { x } from "./first.js"` to `combined.js` resolves the ambiguity: explicit exports take precedence over star exports, regardless of declaration order.

### Evaluating modules

Now that all modules have their environment prepared, they are finally ready for evaluation. The host asks the engine to evaluate the entry module. The engine traverses the module graph yet again, using depth-first search. For now, assume no module uses [top-level `await`](#asynchronous_evaluation_with_top-level_await). Each time:

- The engine visits a module. If the module has already been evaluated successfully, it does not execute it again. If a previous evaluation failed, the engine propagates the recorded error instead. If the module is already being evaluated, the engine does not visit its dependencies again, avoiding infinite recursion in a cycle. Otherwise, it marks the module as currently evaluating.
- The engine recursively evaluates each dependency using the same process, in the order their module requests appear in the source.
- After visiting all dependencies, the engine executes the module body. Variable initializers run, initializing the bindings prepared during linking, and other statements execute in source order. Imported names access the bindings connected during linking. In a cycle, a dependency's body may not have executed yet, so an imported binding may still be uninitialized; we'll discuss this [later](#cyclic_imports).
- After the module body finishes successfully, the module is marked as evaluated. In a cycle, modules in the same strongly connected component are marked as evaluated together once their bodies have finished.

In our example:

- The engine starts with `main.js`, follows its dependency on `formatters.js`, and then reaches `config.js`. It evaluates the object literal and initializes the default-export binding with the resulting object.
- Next, it evaluates `logger.js`. Its `log` function was already created during linking, and the function body does not execute until the function is called.
- The engine returns to `formatters.js`. Its `greet` function was also created during linking; neither its body nor its default parameter expression runs yet.
- Finally, the engine returns to `main.js`. Its other dependency, `config.js`, has already been evaluated, so it is not executed again. The engine calls `greet("Josh", config.locale)`, which calls `log` and prints a timestamp followed by `Hello, Josh!`.

Moving an `import` declaration below the `greet()` call would not change this order: dependencies are evaluated before the importing module's body starts, regardless of where its import declarations appear among other statements.

If evaluation throws an uncaught error, it propagates through the dependent modules being evaluated, and the entry module's evaluation promise rejects. Effects of code that already ran are not undone, and the error is retained so subsequent evaluation attempts do not execute the failed module again.

With top-level `await`, a module can suspend execution and delay modules that depend on it while other branches continue; we'll cover this in [asynchronous evaluation](#asynchronous_evaluation_with_top-level_await).

> [!NOTE]
> This evaluation strategy is "bottom-up": dependencies evaluate before the dependent, all the way back to the entry point. There's a cursed way to make certain statements evaluate "top-down", which is with [`data:` URLs](/en-US/docs/Web/JavaScript/Reference/Statements/import#module_specifier_resolution) in supporting environments, because they evaluate at resolution time, which happens top-down. This might be useful for debugging, but don't rely on this for anything significant.
>
> ```js
> // -- main.js --
> import "data:text/javascript,console.log('main.js - top-down')";
> import "./dependency.js";
>
> console.log("main.js - bottom-up");
> ```
>
> ```js
> // -- dependency.js --
> import "data:text/javascript,console.log('dependency.js - top-down')";
>
> console.log("dependency.js - bottom-up");
> ```
>
> Output:
>
> ```plain
> main.js - top-down
> dependency.js - top-down
> dependency.js - bottom-up
> main.js - bottom-up
> ```

## Cyclic imports

The module dependency graph is traversed using DFS [three times](#from_module_source_to_execution) for loading, linking, and evaluation. This strategy works well for acyclic dependency graphs, like the example presented above. Even the fact that two modules import the same module is minimally problematic—there's always a well-defined "end" (`config.js` and `logger.js`) from where we can work backwards. We just need to be careful not to link or evaluate the same module twice.

However, cycles are often inevitable. Cyclic import arises if module `a` imports module `b`, but `b` directly or indirectly depends on `a`. For example, consider the simplest two-module cycle:

```js
// -- a.js --
import { b } from "./b.js";
```

```js
// -- b.js --
import { a } from "./a.js";
```

![A module dependency cycle: a.js imports b.js, and b.js imports a.js.](module-cycle.svg)

- If a dependency is itself still being linked, the engine has found a cycle back to it: every module along the chain of imports from that dependency to the current module belongs to one group of mutually dependent modules. Such a group is called a _strongly connected component_ (SCC) of the graph: within it, every module reaches every other by following imports. A module that isn't part of any cycle forms a component all by itself.
- The module's environment is now fully set up, but if other modules of its component are still being processed, the module isn't done yet: all modules of a component are marked as linked together, once the engine finishes the module through which the component was first discovered. For example, in the cycle `a → b → a`, when `b` finds `a` still being linked, it knows the two form one component; after `b`'s environment is set up, it remains in the linking state until `a` is finished, and then both are marked as linked together.

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
