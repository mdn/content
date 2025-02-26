---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
page-type: tutorial
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

This intro-level tutorial walks through all the steps of building a basic progressive web app, or PWA. We will be using web technologies — HTML, CSS, and JavaScript — to build a menstruation cycle tracking web app called "CycleTracker". Like all web apps, CycleTracker is designed to work in all browsers on all devices.

By default, PWAs are regular websites, built with the same technologies. Just like regular websites, PWAs are linkable, discoverable via search engines, and visible in a browser. By including a manifest file, and serving the website over TLS, any website can become a PWA.

We will first cover the steps of building a fully functional web app, then progressively enhance CycleTracker to [make it installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable), and to work even when the user is offline.

## PWA benefits

Using the languages of the web, we will create a fully functioning application that works both online and offline, both in the browsers and on the user's operating systems (OS). Like any regular website, CycleTracker is hosted on and downloadable from a web server. All we need is a text editor: CycleTracker, like all PWAs, doesn't require any additional programming language knowledge, packaging, or proprietary SDK. CycleTracker, like any PWA, can be seamlessly installed on any operating system without the need of app stores (nor app store approval and fees).

- Use standard and open web technologies

  - : Historically, for an application to be installable on an OS, such as Windows, iOS, macOS, Linux, and Android, the applications are developed in OS-supported programming languages, like C#, .Net, Objective C, Swift, Kotlin, Java, or Python. PWAs are based on a different model: they use a single code base, written using standard open web technologies (HTML, CSS, and JavaScript) that work across OSes.

- No compiling required

  - : With most programming languages—like Java, C/C++, and Kotlin, which are commonly used for building Android apps, and Objective-C and Swift, for iOS—the code needs to be compiled and packaged into an installable format, like .exe, .dmg, .elf, and .apk, or another installable file type, depending on the operating system. Depending on the language, compiling and packaging may require the OS's {{glossary("SDK")}}. PWAs use web technologies supported by every operating system that doesn't need to be packaged or compiled. Yes, developer teams can have complex build systems, but, as we will demonstrate as we build CycleTracker, PWAs can be built out of just HTML and JavaScript (and CSS, though styling is not necessarily required for a PWA).

- Available anywhere and everywhere

  - : Single-OS-only applications are distributed to users through downloads, often in proprietary app stores. They are available through a vendor like the Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store](https://apps.microsoft.com/), or similar. PWAs don't have these requirements. If you want to distribute your CycleTracker app, you won't require an intermediary. A user can access your app by visiting its online version. But if you want, it is possible to distribute your PWA on the Play Store and App Store, undifferentiated from other iOS or Android apps.

- Easy for the user to install

  - : Historically, downloaded single-OS-only applications have to be intentionally installed by the user. Depending on the OS, install format, and download origin, this can be a multi-step installation process. PWAs are streamlined. PWAs are available to anyone with a supporting browser, and are [installable](/en-US/docs/Web/Progressive_web_apps/Guides/Installing) with a couple of clicks.

### Compared to OS-installed software applications

Once installed, PWAs can be made to appear and act similarly to other applications installed on the user's device:

- Application window

  - : With a [manifest](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation) setting, we'll make CycleTracker open in its own application window, meaning installed PWAs are similar to other installed applications.

- Application icon

  - : PWAs display an application icon in the same location as other installed applications installed on the users' operating system. This can be an icon on the homescreen, in the toolbar, in the application's folder, or wherever the device displays application icons. We'll learn how to [declare icons](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography) for CycleTracker, so, once installed, our PWA can appear like any other installed application on the user's device.

- Works offline

  - : Internet access is initially required to download the application and is also required when syncing data with the server or other users. This is required of all applications, not just PWAs. We'll add a [service worker](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) to create an offline experience, meaning CycleTracker will work even when the user loses internet access. We will only touch on the power of PWA offline support. Service workers can be used to make PWAs work offline just like any other installed application. If a user makes changes while offline, service workers enable PWAs to sync data once connectivity is restored. With service workers, the user doesn't need to be actively engaging with the PWA, in fact, the PWA doesn't even need to be open, for it to send and retrieve server data.

## CycleTracker PWA lessons

The base web application for this PWA tutorial is a period tracker, in which the user can track the beginning and end of each menstrual cycle. We'll create a static website shell and style it, then learn how to create a secure connection to view our progress. We'll add JavaScript functionality converting the HTML and CSS shell into a fully functioning application storing data in localStorage. Using this fully functional web application you built, we will progressively enhance this web app into an offline capable PWA by adding a manifest file, including iconography, and a service worker.

The steps include:

- [App HTML and CSS](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)

  - : Line by line explanation of HTML for the static content of the website, the CycleTracker static content, along with the CSS to style that content.

- [Local development environment or secure connection](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)

  - : In order to be installable, PWAs must be served with the `https://` protocol, or as locally-delivered resources using `127.0.0.1` or `localhost` URLs served with the `http://` protocol. We will look at the page with the `file://` protocol, and also cover options for creating a secure localhost connection to test your installation code as we progress through the tutorial steps. We also look at serving your PWA with GitHub pages.

- [JavaScript and LocalStorage](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)

  - : Full explanation of the JavaScript functionality to make a client-side period tracker web application so we have a functioning application that can be progressively enhanced into a PWA, using [`localStorage`](/en-US/docs/Web/API/Window/localStorage) to store period information.

- [Manifest: identity, appearance, and iconography](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)

  - : A PWA requires a manifest, which is a JSON file that describes the name, icon, description, and other definitions of how the application works within the operating system on which the PWA is installed. We will create a manifest file that defines the appearance of the application when installed, including which icons should be used depending on the user's device, and parameters for the application viewport. We also look at debugging the manifest file with browser developer tools.

- [Service workers](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)

  - : The service worker enables the application to work offline. With the secure connection in the previous step, the initial visit to a page provides its baseline functionality while the service worker downloads. After a service worker is installed and activated, it controls the page to offer improved reliability and speed.

<!--

- [Offline experience](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : With JavaScript, we will determine whether the user is online or offline. When offline, they will be shown an offline experience that informs the user they are offline. When online, the experience will be similar to the website, but the installation button will not be visible.

- [Session storage](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Will take a look at service workers and session storage, using JavaScript to enhance the PWA.
-->

To complete this tutorial, it is helpful to have a basic level of understanding of HTML, CSS, and JavaScript. The tutorial provides instructions on creating the manifest file and initiating the service worker, as well as setting up a local development environment so you can view your progress. <!--The tutorial will cover checking for internet access, defining both an online and offline experience.-->

While a secure connection is a requirement, there are no software requirements for creating a PWA other than any text editor to code the PWA and a browser to view it.

You can try the [live period tracker](https://mdn.github.io/pwa-examples/cycletracker/) and view the [period tracker source code](https://github.com/mdn/pwa-examples/tree/main/cycletracker) on GitHub.

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
