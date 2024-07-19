---
title: "In depth: Microtasks and the JavaScript runtime environment"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
page-type: guide
---

{{APIRef("HTML DOM")}}

When debugging or, possibly, when trying to decide upon the best approach to solving a problem around timing and scheduling of tasks and microtasks, there are things about how the JavaScript runtime operates under the hood that may be useful to understand.

JavaScript is an inherently single-threaded language. It was designed in an era in which this was a positive choice; there were few multi-processor computers available to the general public, and the expected amount of code that would be handled by JavaScript was relatively low at that time.

As time passed, of course, we know that computers have evolved into powerful multi-core systems, and JavaScript has become one of the most prolifically-used languages in the computing world. A vast number of the most popular applications are based at least in part on JavaScript code. To support this, it was necessary to find ways to allow for projects to escape the limitations of a single-threaded language.

Starting with the addition of timeouts and intervals as part of the Web API ({{domxref("setTimeout()")}} and {{domxref("setInterval()")}}), the JavaScript environment provided by Web browsers has gradually advanced to include powerful features that enable scheduling of tasks, multi-threaded application development, and so forth. To understand where `queueMicrotask()` comes into play here, it's helpful to understand how the JavaScript runtime operates when scheduling and running code.

## JavaScript execution contexts

> **Note:** The details here are generally not important to most JavaScript programmers. This information is provided as a basis for why microtasks are useful and how they function; if you don't care, you can skip this and come back later if you find that you need to.

When a fragment of JavaScript code runs, it runs inside an **execution context**. There are three types of code that create a new execution context:

- The global context is the execution context created to run the main body of your code; that is, any code that exists outside of a JavaScript function.
- Each function is run within its own execution context. This is frequently referred to as a "local context."
- Using the ill-advised {{jsxref("Global_Objects/eval", "eval()")}} function also creates a new execution context.

Each context is, in essence, a level of scope within your code. As one of these code segments begins execution, a new context is constructed in which to run it; that context is then destroyed when the code exits. Consider the JavaScript program below:

```js
const outputElem = document.getElementById("output");

const userLanguages = {
  Mike: "en",
  Teresa: "es",
};

function greetUser(user) {
  function localGreeting(user) {
    let greeting;
    const language = userLanguages[user];

    switch (language) {
      case "es":
        greeting = `¡Hola, ${user}!`;
        break;
      case "en":
      default:
        greeting = `Hello, ${user}!`;
        break;
    }
    return greeting;
  }
  outputElem.innerText += `${localGreeting(user)}\n`;
}

greetUser("Mike");
greetUser("Teresa");
greetUser("Veronica");
```

This short program contains three execution contexts, some of which are created and destroyed several times over the course of the program's execution. As each context is created, it is placed on the **execution context stack**. When it exits, the context is removed from the context stack.

- Upon starting the program, the global context is created.

  - When `greetUser("Mike")` is reached, a context is created for the `greetUser()` function; this execution context is pushed onto the execution context stack.

    - When `greetUser()` calls `localGreeting()`, another context is created to run that function. When this function returns, the context for `localGreeting()` is removed from the execution stack and destroyed. Program execution resumes with the next context found on the stack, which is `greetUser()`; this function resumes execution where it left off.
    - The `greetUser()` function returns and its context is removed from the stack and destroyed.

  - When `greetUser("Teresa")` is reached, a context is created for it and pushed onto the stack.

    - When `greetUser()` calls `localGreeting()`, another context is created to run that function. When this function returns, the context for `localGreeting()` is removed from the execution stack and destroyed. `greetUser()` continues to execute where it left off.
    - The `greetUser()` function returns and its context is removed from the stack and destroyed.

  - When `greetUser("Veronica")` is reached, a context is created for it and pushed onto the stack.

    - When `greetUser()` calls `localGreeting()`, another context is created to run that function. When this function returns, the context for `localGreeting()` is removed from the execution stack and destroyed.
    - The `greetUser()` function returns and its context is removed from the stack and destroyed.

- The main program exits and its execution context is removed from the execution stack; as there are no contexts remaining on the stack, program execution ends.

Using execution contexts in this manner, each program and function is able to have its own set of variables and other objects. Each context additionally tracks the next line in the program that should be run and other information critical to that context's operation. By using the contexts and the context stack in this manner, many of the fundamentals of how a program operates can be managed, including local and global variables, function calls and returns, and so forth.

A special note about recursive functions—that is, functions which call themselves, possibly over multiple levels of depth or recursion: each recursive call to the function creates a new execution context. This allows the JavaScript runtime to track the levels of recursion and the return of results through that recursion, but it also means that each time a function recurses, more memory is needed to create the new context.

## Run, JavaScript, run

To run JavaScript code, the runtime engine maintains a set of **agents** in which to execute JavaScript code. Each agent is made up of a set of execution contexts, the execution context stack, a main thread, a set for any additional threads that may be created to handle workers, a task queue, and a microtask queue. Other than the main thread—which some browsers share across multiple agents—each component of an agent is unique to that agent.

Here we look at how the runtime functions in slightly more detail.

### Event loops

Each agent is driven by an **event loop**, which collects any user and other events, enqueuing tasks to handle each callback. It then runs any pending JavaScript tasks, then any pending microtasks, then performs any needed rendering and painting before looping again to check for pending tasks.

Your website or app's code runs in the same **{{Glossary("thread")}}**, sharing the same **event loop**, as the user interface of the web browser itself. This is the **{{Glossary("main thread")}}**, and in addition to running your site's main code body, it handles receiving and dispatching user and other events, rendering and painting web content, and so forth.

The event loop, then, drives everything that happens in the browser as it pertains to the interaction with the user, but more importantly for our purposes here, it is responsible for the scheduling and execution of every piece of code that runs within its thread.

There are three types of event loop:

- Window event loop
  - : The window event loop is the one that drives all of the windows sharing a similar origin (though there are further limits to this, as described below).
- Worker event loop
  - : A worker event loop is one which drives a worker; this includes all forms of workers, including basic [web workers](/en-US/docs/Web/API/Web_Workers_API), [shared workers](/en-US/docs/Web/API/SharedWorker), and [service workers](/en-US/docs/Web/API/Service_Worker_API). Workers are kept in one or more agents that are separate from the "main" code; the browser may use a single event loop for all of the workers of a given type or may use multiple event loops to handle them.
- Worklet event loop
  - : A [worklet](/en-US/docs/Web/API/Worklet) event loop is the event loop used to drive agents which run the code for the worklets for a given agent. This includes worklets of type {{domxref("Worklet")}} and {{domxref("AudioWorklet")}}.

Several windows loaded from the same {{Glossary("origin")}} may be running on the same event loop, each queueing tasks onto the event loop so that their tasks take turns with the processor, one after another. Keep in mind that in web parlance, the word "window" actually means "browser-level container that web content runs within," including an actual window, a tab, or a frame.

There are specific circumstances in which this sharing of an event loop among windows with a common origin is possible, such as:

- If one window opened the other window, they are likely to be sharing an event loop.
- If a window is actually a container within an {{HTMLElement("iframe")}}, it likely shares an event loop with the window that contains it.
- The windows happen to share the same process in a multi-process web browser implementation.

The specifics may vary from browser to browser, depending on how they're implemented.

#### Tasks vs. microtasks

A **task** is any JavaScript scheduled to be run by the standard mechanisms such as initially starting to execute a program, an event triggering a callback, and so forth. Other than by using events, you can enqueue a task by using {{domxref("setTimeout()")}} or {{domxref("setInterval()")}}.

The difference between the task queue and the microtask queue is simple but very important:

- When executing tasks from the task queue, the runtime executes each task that is in the queue at the moment a new iteration of the event loop begins. Tasks added to the queue after the iteration begins _will not run until the next iteration_.
- Each time a task exits, and the execution context stack is empty, each microtask in the microtask queue is executed, one after another. The difference is that execution of microtasks continues until the queue is empty—even if new ones are scheduled in the interim. In other words, microtasks can enqueue new microtasks and those new microtasks will execute before the next task begins to run, and before the end of the current event loop iteration.

### Problems

Because your code runs in the same thread, using the same event loop, as the browser's user interface, if your code blocks or enters an infinite loop, the browser itself will stall. Even sluggish performance, whether caused by a bug or because of complex work being done by your code, can cause the user to suffer a sluggish browser.

When multiple programs and multiple code objects within those programs start to try to work at once, alongside a browser which also needs processor time—let alone time to render and draw the site and its own UI, handle user events, and so forth—everything becomes clogged up far too easily nowadays.

### Solutions

The use of [web workers](/en-US/docs/Web/API/Web_Workers_API), which allow the main script to run other scripts in new threads, help to alleviate this problem. A well-designed website or app uses workers to perform any complex or lengthy operations, leaving the main thread to do as little work as possible beyond updating, laying out, and rendering the web page.

This is further alleviated by using [asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous) techniques such as [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to allow the main code to continue to run while waiting for the results of a request. However, code running at a more fundamental level—such as code comprising a library or framework—may need a way to schedule code to be run at a safe time while still executing on the main thread, independent of the results of any single request or task.

Microtasks are another solution to this problem, providing a finer degree of access by making it possible to schedule code to run before the next iteration of the event loop begins, instead of having to wait until the next one.

The microtask queue has been around for a while, but it's historically been used only internally in order to drive things like promises. The addition of `queueMicrotask()`, exposing it to web developers, creates a unified queue for microtasks which is used wherever it's necessary to have the ability to schedule code to run safely when there are no execution contexts left on the JavaScript execution context stack. Across multiple instances and across all browsers and JavaScript runtimes, a standardized microqueue mechanism means these microtasks will operate reliably in the same order, thus avoiding potentially difficult to find bugs.

## See also

- [Microtask guide](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- {{domxref("queueMicrotask()")}}
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
  - [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous)
  - [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
