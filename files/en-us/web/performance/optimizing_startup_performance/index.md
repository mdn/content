---
title: Optimizing startup performance
slug: Web/Performance/Optimizing_startup_performance
---

{{QuickLinksWithSubPages("Web/Performance")}}

Improving your startup performance is often one of the highest value performance optimizations that can be made. How long does your app take to start up? Does it seem to lock up the device or the user's browser while the app loads? That makes users worry that your application has crashed, or that something else is wrong. Good user experience includes ensuring your app loads quickly. This article provides performance tips and suggestions for both writing new applications and porting applications to the web from other platforms.

## Fast asynchronous loading

Regardless of platform, it's always a good idea to start up as **quickly** as possible. Since that's a universal issue, we won't be focusing on it too much here. Instead, we're going to look at a more important issue when building Web apps: starting up as **asynchronously** as possible. That means not running all your startup code in a single event handler on the app's main thread.

Rather, create a [Web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) that does as much as possible in a background thread (for example, fetching and processing data.) Relegating tasks to a Web worker frees up the main thread for tasks requiring it, like user events and rendering UI. In turn, main thread events should consist of many small tasks, also known as [micro tasks](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth), rather than larger, more time consuming tasks.

Asynchronous loading helps prevent pages and user interfaces from appearing to be (or actually becoming) unresponsive. By minimizing the time required for any individual loading task, the application's [event loop](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#event_loops) will continue to cycle while it starts up. This will prevent the application, browser, and/or device from appearing frozen.

In the worst case, blocking the main thread can cause users to uninstall your app; for example, if someone launches your app by mistake and they aren't prevented from closing the application, they may want to take action so that doesn't accidentally happen again.

## Where there's a will…

It is easier to just write everything the "right way" the first time then it is to retrofit for performance (and accessibility). When you are starting from scratch, making appropriate bits of code asynchronous means a retrofit isn't necessary. All pure startup calculations should be performed in background threads, while you keep the run-time of main thread events as short as possible. Instead of including a progress indicator so the user knows what's going on and how long they'll be waiting, make the progress bar unnecessary.

On the other hand, porting an existing app to the Web can be challenging. Native application don't need to be written in an asynchronous fashion because the operating system usually handles loading for you. The source application might have a main loop that can easily be made to operate asynchronously (by running each main loop iteration separately); startup is often just a continuous, monolithic procedure that might periodically update a progress meter.

While you can use [Web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to run even very large, long-duration chunks of [JavaScript](/en-US/docs/Web/JavaScript) code asynchronously, there's a huge caveat: Web workers can't directly manipulate the [DOM](/en-US/docs/Web/API/Document_Object_Model) and have limited access to methods and properties of the [window](/en-US/docs/Web/API/Window) object, including no access to [WebGL](/en-US/docs/Web/API/WebGL_API). This all means that unless you can easily pull out the "pure calculation" chunks of your startup process into workers, you'll wind up having to run most or all of your startup code on the main thread.

However, even code like that can be made asynchronous, with a little work.

## Getting asynchronous

Here are some suggestions for how to build your startup process to be as asynchronous as possible (whether it's a new app or a port):

- Use the [`defer`](/en-US/docs/Web/HTML/Element/script#defer) or [`async`](/en-US/docs/Web/HTML/Element/script#async) attribute on script tags needed by the Web application. This allows HTML parsers to continue processing the document, instead of having to wait until the scripts have been downloaded and executed before continuing.
- If you need to decode asset files (for example, decoding JPEG files and turning them into raw texture data for later use by WebGL), that's great to do in workers.
- When dealing with data supported by the browser (for example, decoding image data), use the decoders built into the browser or device rather than rolling your own or using one from the original codebase. The provided one is almost certainly significantly faster, and will reduce your app size to boot. In addition, the browser may automatically parallelize these decoders.
- Any data processing that can be done in parallel should be. Don't do one chunk of data after another; do them all at once when possible!
- Don't include scripts or stylesheets that don't participate in the [critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path) in your startup HTML file. Load them only when needed.
- Reduce the size of your JavaScript files. Try to send the minified version of the file to the browser and use compression like Gzip or Brotli.
- Utilize resource hints (like preconnect or preload) whenever possible to indicate to the browser which files are more critical for your application.

The more stuff you can do asynchronously, the better advantage your app can take of multicore processors.

### Porting issues

Once the initial loading is done and the app's main code starts to run, it's possible your app has to be single-threaded, especially if it's a port. The most important thing to do to try to help with the main code's startup process is to refactor the code into small pieces. These can then be executed in chunks interspersed across multiple calls to your app's main loop (so that the main thread gets to handle input and the like).

Emscripten provides an API to help with this refactoring; for example, you can use `emscripten_push_main_loop_blocker()` to establish a function to be executed before the main thread is allowed to continue. By establishing a queue of functions to be called in sequence, you can more easily manage running bits of code without blocking the main thread.

That leaves, though, the problem of having to refactor your existing code to actually work that way. That can take some time.

### How asynchronous should I get?

The faster your site first becomes usable and the more responsive it is to user input, the better it will be perceived.
A site that takes 1 or 2 seconds before content first appears is usually seen as fast; if you're used to sites taking 3 or 4 seconds, then 7 or 8 seconds feels like a very long time.

In terms of responsiveness, users won't notice a delay of 50ms or less. Any delay of over 200ms and the user will perceive your site as sluggish. When working to improve the loading and responsiveness of your applications, remember that many of your users may have older, slower computer than yours, they may experience longer delays than you do!

## Other suggestions

There are other things beyond going asynchronous, which can help you improve your app's startup time. Here are a few of them:

- Download time
  - : Keep in mind how long it will take the user to download your application's data. If your application is very popular, or has to re-download content frequently, you should try to have as fast a hosting server as possible. Always [compress](/en-US/docs/Glossary/GZip_compression) your data to make it as small as you can.
- Data size
  - : Do your best to optimize the size of your data; smaller level files will download and be processed faster than larger ones.
- Subjective factors
  - : Anything you can do to help keep the user engaged during the startup process will help make the time seem to go by faster. Displaying a mock splash screen can improve [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance). For heavy sites, anything you can do to help the user feel like your app is doing something instead of sitting there quietly helps.

## See also

- [Apps](/en-US/docs/Web/Progressive_web_apps)
- [Games](/en-US/docs/Games)
- [BananaBread (or any compiled codebase) Startup Experience](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html) (2012)
