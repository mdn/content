---
title: Creating your first PWA
slug: Web/Progressive_web_apps/Tutorials/Intro
---

Progressive web applications, known as PWAs, are a way to build applications for all devices using the web technologies we all know and love: HTML, CSS, and JavaScript.

PWAs are a way of progressively enhancing websites to make them available on a user's device, even offline. By default, PWAs are regular websites. They use the same technologies as regular websites. They are also linkable, discoverable via search engines, and visible in a browser, just like regular websites. By including a manifest file and service worker, and serving the website over SSL, any website can become a PWA.

## PWA benefits

Using the languages of the web, we can create fully functioning applications that work both online and offline, both in the browsers and on the user's operating systems (OS). PWAs don't require any additional programming language knowledge or proprietary SDK. Like regular websites, PWA are hosted on and downloadable from web servers. They don't require any packaging. They can be seamlessly installed on any operating system without the need of app stores (nor app store approval and fees).

- Use open web technologies you already know
- : Historically, for an application to be installable on an OS, such as Windows, iOS, MacOS, Linux, and Android, the applications are developed in OS-supported programming languages, like C#, .Net, Objective C, Swift, Kotlin, Java, or Python. PWAs solve this problem: they use a single code base, written using regular open web technologies: HTML, CSS, and JavaScript.

- No compiling required
  - : Historically, in most cases, the application code had to be compiled and packaged into an installable format, like .exe, .dmg, .elf, and .apk, or other installable files. Depending on the language, compiling and packaging required the OS's {{glossary("SDK")}}. PWAs solve this problem. Yes, developer teams can have complex build systems, but a PWA can be built out of just HTML and JavaScript.

- Available anywhere and everywhere
  - : Historically, single-OS-only applications are distributed to users through downloads, often in proprietary app stores. They are available through a vendor like the Apple App Store, [Google Play](https://play.google.com/store/apps), [Microsoft Store App](https://apps.microsoft.com/store/apps), or similar. PWAs don't have these requirements. A PWA can be acquired by visiting the online version of the app. While PWAs don't require that intermediary, the Play Store and App Store do distribute PWAs, undifferentiated from other iOS or Android apps.

- Easy for the user to install
  - : Historically, downloaded single-OS-only applications have to be intentionally installed by the user. Depending on the OS, install format, and download origin, this can be a multi-step installation process. PWAs are streamlined. PWAs are available to anyone with a supporting browser, [installable](/en-US/docs/Web/Progressive_web_apps/Installing) with a couple of clicks.

### Compared to OED applications

Once installed, PWAs can be made to appear and act similarly to other applications installed on the user's device:

- Application window

  - : Similar to other installed applications, depending on PWA settings defined by the developer and set with user preferences, the PWA can be made to open in its own application window.

- Application icon
  - : PWAs display an application icon in the same location as other installed applications installed on the users' operating system: this can be an icon on the homescreen, in the toolbar, in the application's folder, or wherever the device displays application icons.
  -
- Works offline
  - : Internet access is initially required to download the application and is also required when syncing data with the server or other users. This is required of all applications, not just PWAs. When [service workers] are set to create an offline experience, the application will keep working should the user lose or not have internet access. As the user makes changes while offline, the application can update local and session storage, and service workers can then sync the data once connectivity is restored. The user doesn't need to be actively engaging with the PWA, in fact, the PWA doesn't even need to be open, for it to send and retrieve server data.

## Creating your first PWA

In this tutorial, we will create a period tracker; a basic progressive web application in which the user can track the beginning and end of their menstrual cycle.

To complete this tutorial, it is helpful to have a basic level of understanding of HTML, CSS, and JavaScript. The tutorial provides instructions on creating the manifest file and initiating the service worker. The tutorial will cover checking for internet access, defining both an online and offline experience.

You will be installing node.js, MAMP, or another local server to create a local secure connection. While a secure connection is a requirement, there are no software requirements for creating a PWA other than any text editor to code the PWA and a browser to view it.

The steps include:

- [Basic site](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/html)
  - : We will create a website with a date picker and an installation button, using HTML, CSS, and JavaScript.
- [Icon and appearance](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest)
  - : A PWA requires a manifest, which is a JSON file that describes the name, icon, description, and other definitions of how the application works within the operating system on which the PWA is installed. We will create a manifest file that defines the appearance of the application when installed, including which icons should be used depending on the user's device, and parameters for the application viewport.
- [Secure connection](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/secure)
  - : While no frameworks are needed to create a PWA, we will link to options for creating a secure localhost connection so you can test your application and install it.
- [Service worker](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/service_worker)
  - : The service worker enables the application to work offline. With the secure connection in the previous step, the initial visit to a page provides its baseline functionality while the service worker downloads. After a service worker is installed and activated, it controls the page to offer improved reliability and speed.
- [Offline experience](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/offline)
  - : With JavaScript, we will determine whether the user is online or offline. When offline, they will be shown an offline experience that informs the user they are offline. When online, the experience will be similar to the website, but the installation button will not be visible.
- [Session storage](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/storage)
  - : Will take a look at service workers and session storage, using JavaScript to enhance the PWA.

## See Also

Possible other introductory level tutorial topics:

- [Splash page](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/splash)
