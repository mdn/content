---
title: Optimizing startup performance
slug: Web/Performance/Optimizing_startup_performance
tags:
  - Apps
  - Games
  - Performance
---
An often overlooked aspect of app software development—even among those focusing on performance optimization—is startup performance. How long does your app take to start up? Does it seem to lock up the device or the user's browser while the app loads? That makes users worry that your app is crashed, or that something else is wrong. It's always a good idea to take the time to ensure that your app starts up nicely. This article offers tips and suggestions to help you achieve that goal, both when writing a new app and when porting an app from another platform to the Web.

## Starting up nicely

Regardless of platform, it's always a good idea to start up as **quickly** as possible. Since that's a universal issue, we won't be focusing on it too much here. Instead, we're going to look at a more important issue when building Web apps: starting up as **asynchronously** as possible. That means not running all your startup code in a single event handler on the app's main thread.

Instead, you should write your code so that your app creates a [Web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) that does as much as possible in a background thread (for example, fetching and processing data.) Then, anything that must be done on the main thread (such as user events and rendering UI) should be broken up into small pieces so that the app's event loop continues to cycle while it starts up. This will prevent the app, browser, and/or device from appearing to have locked up.

Why is it important to be asynchronous? Other than the reasons suggested above, consider the impact of a non-responsive page or user interface. The user is unable to cancel if they launched your app by mistake. If the app is being run in a browser, it's possible the user may get an "unresponsive app" or "slow script" notification. You should present some kind of interface, such as a progress bar, so that the user knows how much longer they'll need to wait while your app starts up.

## Where there's a will…

If you're starting your project from scratch, it's usually pretty easy to just write everything the "right way," making appropriate bits of the code asynchronous. All pure startup calculations should be performed in background threads, while you keep the run-time of main thread events as short as possible. Include a progress indicator so the user knows what's going on and how long they'll be waiting. In theory, anyway, it should be pretty easy to design your new app to start up nicely.

On the other hand, however, it can get tricky when you're porting an existing app to the Web. A desktop application doesn't need to be written in an asynchronous fashion because usually the operating system handles that for you, or the app is the only thing that matters which is currently running, depending on the operating environment. The source application might have a main loop that can easily be made to operate asynchronously (by running each main loop iteration separately); startup is often just a continuous, monolithic procedure that might periodically update a progress meter.

While you can use [Web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to run even very large, long-duration chunks of [JavaScript](/en-US/docs/Web/JavaScript) code asynchronously, there's a huge caveat that: workers don't have access to [WebGL](/en-US/docs/Web/API/WebGL_API) or audio, and they can't send synchronous messages to the main thread, so you can't even proxy those APIs to the main thread. This all means that unless you can easily pull out the "pure calculation" chunks of your startup process into workers, you'll wind up having to run most or all of your startup code on the main thread.

However, even code like that can be made asynchronous, with a little work.

## Getting asynchronous

Here are some suggestions for how to build your startup process to be as asynchronous as possible (whether it's a new app or a port):

- Use the {{ htmlattrxref("defer") }} or {{ htmlattrxref("async") }} attribute on script tags needed by the Web application. This allows HTML parsers to continue processing the document, instead of having to wait until the scripts have been downloaded and executed before continuing.
- If you need to decode asset files (for example, decoding JPEG files and turning them into raw texture data for later use by WebGL), that's great to do in workers.
- When dealing with data supported by the browser (for example, decoding image data), use the decoders built into the browser or device rather than rolling your own or using one from the original codebase. The provided one is almost certainly significantly faster, and will reduce your app size to boot. In addition, the browser may automatically parallelize these decoders.
- Any data processing that can be done in parallel should be. Don't do one chunk of data after another; do them all at once when possible!
- Don't include scripts or stylesheets that don't participate in the critical path in your startup HTML file. Load them only when needed.
- Reduce the size of your JavaScript files. Try to send the minify version of the file to the browser and use compression like Gzip or Brotli.
- Utilize resource hints (like preconnect or preload) whenever possible to indicate to the browser which files are more critical for your application.

The more stuff you can do asynchronously, the better advantage your app can take of multicore processors.

### Porting issues

Once the initial loading is done and the app's main code starts to run, it's possible your app may necessarily be single-threaded,especially if it's a port. The most important thing to do to try to help with the main code's startup process is to refactor the code into small pieces that can be done in chunks interspersed across multiple calls to your app's main loop, so that the main thread gets to handle input and the like.

Emscripten provides an API to help with this refactoring; for example, you can use `emscripten_push_main_loop_blocker()` to establish a function to be executed before the main thread is allowed to continue. By establishing a queue of functions to be called in sequence, you can more easily manage running bits of code without blocking the main thread.

That leaves, though, the problem of having to refactor your existing code to actually work that way. That can take some time.

### How asynchronous should I get?

It's worth keeping in mind that most browsers typically start complaining that your script is blocking the main thread for too long at around 10 seconds or so. Ideally, you won't block anywhere near that long, but as long as you keep it below that, you should be okay. Keep in mind, though, that if someone has an older, slower computer than yours, they may experience longer delays than you do!

## Other suggestions

There are other things beyond going asynchronous, which can help you improve your app's startup time. Here are a few of them:

- Download time
  - : Keep in mind how long it will take the user to download your game's data. If your game is really big, really popular, or has to re-download content frequently, you should try to have as fast a hosting server as possible. You should also consider gzipping your data to make it as small as you can.
- GPU factors
  - : Compiling shaders and uploading textures to the GPU can take time, especially for really intricate games. While this happens with native (non-Web) games too, it can still be pretty annoying. Avoid doing this without keeping the user apprised that the game is in fact still starting up.
- Data size
  - : Do your best to optimize the size of your game data; smaller level files will download and be processed faster than larger ones.
- Subjective factors
  - : Anything you can do to help keep the user engaged during the startup process will help make the time seem to go by faster. For games, consider having background music playing or a nice splash screen displayed. In between calculations, update your progress indicator, make changes to the display, or anything else you might be able to do to help the user feel like your app is doing something instead of sitting there quietly.

## See also

- [Apps](/en-US/docs/Web/Progressive_web_apps)
- [Games](/en-US/docs/Games)

## Original Document Information

- Author(s): Alon Zakai
- Source Link: [BananaBread (or any compiled codebase) Startup Experience](https://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html)
