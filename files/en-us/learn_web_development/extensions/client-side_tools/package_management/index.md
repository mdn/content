---
title: Package management basics
slug: Learn_web_development/Extensions/Client-side_tools/Package_management
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

In this article, we'll look at package managers in some detail to understand how we can use them in our own projects — to install project tool dependencies, keep them up-to-date, and more.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what package managers and package repositories are, why
        they are needed, and the basics of how to use them.
      </td>
    </tr>
  </tbody>
</table>

## A dependency in your project

A **dependency** is a third-party bit of software that was probably written by someone else and ideally solves a single problem for you. A web project can have any number of dependencies, ranging from none to many, and your dependencies might include sub-dependencies that you didn't explicitly install — your dependencies may have their own dependencies.

A simple example of a useful dependency that your project might need is some code to calculate relative dates as human-readable text. You could certainly code this yourself, but there's a strong chance that someone else has already solved this problem — why waste time reinventing the wheel? Moreover, a reliable third-party dependency will likely have been tested in a lot of different situations, making it more robust and cross-browser compatible than your own solution.

A project dependency can be an entire JavaScript library or framework — such as React or Vue — or a very small utility like our human-readable date library, or it can be a command line tool such as Prettier or ESLint, which we talked about in previous articles.

Without modern build tools, dependencies like this might be included in your project using a simple [`<script>`](/en-US/docs/Web/HTML/Element/script) element, but this might not work right out of the box and you will likely need some modern tooling to bundle your code and dependencies together when they are released on the web. A bundle is a term that's generally used to refer to a single file on your web server that contains all the JavaScript for your software — typically compressed as much as possible to help reduce the time it takes to get your software downloaded and displayed in your visitors' browser.

In addition, what happens if you find a better tool that you want to use instead of the current one, or a new version of your dependency is released that you want to update to? This is not too painful for a couple of dependencies, but in larger projects with many dependencies, this kind of thing can become really challenging to keep track of. It makes more sense to use a **package manager** such as npm, as this will guarantee that the code is added and removed cleanly, as well as a host of other advantages.

## What exactly is a package manager?

We've met [npm](https://www.npmjs.com/) already, but stepping back from npm itself, a package manager is a system that will manage your project dependencies.

The package manager will provide a method to install new dependencies (also referred to as "packages"), manage where packages are stored on your file system, and offer capabilities for you to publish your own packages.

In theory, you may not need a package manager and you could manually download and store your project dependencies, but a package manager will seamlessly handle installing and uninstalling packages. If you didn't use one, you'd have to manually handle:

- Finding all the correct package JavaScript files.
- Checking them to make sure they don't have any known vulnerabilities.
- Downloading them and putting them in the correct locations in your project.
- Writing the code to include the package(s) in your application (this tends to be done using [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules), another subject that is worth reading up on and understanding).
- Doing the same thing for all of the packages' sub-dependencies, of which there could be tens, or hundreds.
- Removing all the files again if you want to remove the packages.

In addition, package managers handle duplicate dependencies (something that becomes important and common in front-end development).

In the case of npm (and JavaScript- and Node-based package managers) you have two options for where you install your dependencies. As we touched on in the previous article, dependencies can be installed globally or locally to your project. Although there tend to be more pros for installing globally, the pros for installing locally are more important — such as code portability and version locking.

For example, if your project relied on webpack with a certain configuration, you'd want to ensure that if you installed that project on another machine or returned to it much later on, the configuration would still work. If a different version of webpack was installed, it may not be compatible. To mitigate this, dependencies are installed locally to a project.

To see local dependencies really shine, all you need to do is try to download and run an existing project — if it works and all the dependencies work right out of the box, then you have local dependencies to thank for the fact that the code is portable.

> [!NOTE]
> npm is not the only package manager available. A successful and popular alternative package manager is [Yarn](https://yarnpkg.com/). Yarn resolves the dependencies using a different algorithm that can mean a faster user experience. There are also a number of other emerging clients, such as [pnpm](https://pnpm.js.org/).

## Package registries

For a package manager to work, it needs to know where to install packages from, and this comes in the form of a package registry. The registry is a central place where a package is published and thus can be installed from. npm, as well as being a package manager, is also the name of the most commonly-used package registry for JavaScript packages. The npm registry exists at [npmjs.com](https://www.npmjs.com/).

npm is not the only option. You could manage your own package registry — products like [Microsoft Azure](https://azure.microsoft.com/) allow you to create proxies to the npm registry (so you can override or lock certain packages), [GitHub also offers a package registry service](https://docs.github.com/en/packages), and there will be likely more options appearing as time goes on.

What is important is that you ensure you've chosen the best registry for you. Many projects will use npm, and we'll stick to this in our examples throughout the rest of the module.

## Using the package ecosystem

Let's run through an example to get you started with using a package manager and registry to install a command line utility.

We will use [Vite](https://vite.dev/) to create a blank website. In the next article, we will expand on the toolchain to include more tools and show you how to deploy the site.

Vite provides some [init templates](https://vite.dev/guide/#scaffolding-your-first-vite-project), with all necessary dependencies and configurations, to get you started quickly in a real project. For demonstration, we will configure one from scratch, using the [React template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react) as a reference.

### Setting up the app as an npm package

First of all, create a new directory to store our experimental app in, somewhere sensible that you'll find again. We'll call it `npm-experiment`, but you can call it whatever you like:

```bash
mkdir npm-experiment
cd npm-experiment
```

Next, let's initialize our app as an npm package, which creates a config file — `package.json` — that allows us to save our configuration details in case we want to recreate this environment later on, or even publish the package to the npm registry (although it's not relevant for our article, because we are developing an application, not a reusable library).

Type the following command, making sure you are inside the `npm-experiment` directory:

```bash
npm init
```

You will now be asked some questions; npm will then create a default `package.json` file based on the answers. Note that none of these are relevant for our purposes because they are only used if you publish your package to a registry and others want to install and import it.

- `name`: A name to identify the app. Just press <kbd>Return</kbd> to accept the default `npm-experiment`.
- `version`: The starting version number for the app. Again, just press <kbd>Return</kbd> to accept the default `1.0.0`.
- `description`: A quick description of the app's purpose. We'll omit it here, but you can also enter anything you like. Press <kbd>Return</kbd>.
- `entry point`: This will be the JavaScript file that is run when others import your package. It has no use for us, so just press <kbd>Return</kbd>.
- `test command`, `git repository`, and `keywords`: press <kbd>Return</kbd> to leave each of these blank for now.
- `author`: The author of the project. Type your own name, and press <kbd>Return</kbd>.
- `license`: The license to publish the package under. Press <kbd>Return</kbd> to accept the default for now.

Press <kbd>Return</kbd> one more time to accept these settings.

Go into your `npm-experiment` directory and you should now find you've got a package.json file. Open it up and it should look something like this:

```json
{
  "name": "npm-experiment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your name",
  "license": "ISC"
}
```

We will add two more lines to package.json:

- `"type": "module"`, which causes Node to interpret all `.js` files as [ES modules](/en-US/docs/Web/JavaScript/Guide/Modules) rather than the old CommonJS modules. It's a generally good habit to get into.
- `"private": true`, which prevents you from accidentally publishing your package to the npm registry.

Add these lines right below the `"name"`:

```json
"name": "npm-experiment",
"type": "module",
"private": true,
```

So this is the config file that defines your package. This is good for now, so let's move on.

### Installing Vite

We will first install Vite, the build tool for our website. It is responsible for bundling our HTML, CSS, and JavaScript files into an optimized bundle for the browser.

```bash
npm install --save-dev vite
```

Once that's done _All The Things_, take another look at your package.json file. You'll see that npm has added a new field, `devDependencies`:

```json
"devDependencies": {
  "vite": "^5.2.13"
}
```

This is part of the npm magic — if in the future you move your codebase to another location, on another machine, you can recreate the same setup by running the command `npm install`, and npm will look at the dependencies and install them for you.

One disadvantage is that Vite is only available inside our `npm-experiment` app; you won't be able to run it in a different directory. But the advantages outweigh the disadvantages.

Note that we chose to install `vite` as a dev dependency. This difference rarely matters for an application, but for a library, it means when others install your package, they won't implicitly install Vite. Usually, for applications, any package imported in source code is a real dependency, while any package used for development (usually as command line tools) is a dev dependency. Install real dependencies by removing the `--save-dev` flag.

You'll find a number of new files created too:

- `node_modules`: The dependency files required to run Vite. npm has downloaded all of them for you.
- `package-lock.json`: This is a lockfile storing the exact information needed to reproduce the `node_modules` directory. This ensures that as long as the lockfile is unchanged, the `node_modules` directory will be the same across different machines.

You needn't worry about these files, as they are managed by npm. You should add `node_modules` to your `.gitignore` file if you are using Git, but you should generally keep `package-lock.json`, because as mentioned it's used to synchronize the `node_modules` state across different machines.

### Setting up our example app

Anyway, on with the setup.

In Vite, the `index.html` file is front and central. It defines the starting point of your app, and Vite will use it to find other files needed to build your app. Create an `index.html` file in your `npm-experiment` directory, and give it the following contents:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My test page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Note that the `<script>` elements creates a dependency on a file called `src/main.jsx`, which declares the entry point of the JavaScript logic for the app. Create the `src` folder and create `main.jsx` in this folder, but leave it blank for now.

> [!NOTE]
> The [`type="module"`](/en-US/docs/Web/HTML/Element/script/type) attribute is important. It tells the browser to treat the script as an ES module, which allows us to use `import` and `export` syntax in our JavaScript code. The file extension is `.jsx`, because in the next article, we will add React JSX syntax to it. Browsers don't understand JSX, but Vite will transform it to regular JavaScript for us, as if browsers do!

### Having fun with Vite

Now we'll run our newly installed Vite tool. In your terminal, run the following command:

```bash
npx vite
```

You should see something like this printed in your terminal:

```plain
VITE v5.2.13  ready in 326 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Now we're ready to benefit from the full JavaScript package ecosystem. For a start, there is now a local web server running at `http://localhost:5173`. You'll not see anything for now, but what is cool is that when you do make changes to your app, Vite will rebuild it and refresh the server automatically so you can instantly see the effect your update had.

You can stop the dev server any time with <kbd>Ctrl</kbd> + <kbd>C</kbd> and start it again with the same command. If you decide to keep it running, you can open a new terminal window to run other commands.

Now for some page content. As a demonstration, let's add a graph to the page. We will use the [plotly.js](https://www.npmjs.com/package/plotly.js) package, a data visualization library. Install it by running the following command:

```bash
npm install plotly.js-dist-min
```

Note how we are installing without the `--save-dev` flag. As previously mentioned, this is because we will actually use this package in our source code, not just as a command line tool. This command will add a new `"dependencies"` object to your `package.json` file, with `plotly.js-dist-min` in it.

> [!NOTE]
> Here, we chose the package for you to complete our task. When you are writing your own code, think about the following questions when finding and installing a dependency:
>
> - Do I need a dependency at all? Is it possible to do it with built-in features, or is it simple enough to write myself?
> - What exactly do I need to do? The more detailed you are, the more likely you are going to find a package that does exactly what you need. You can search for keywords on npm or Google. Also prefer small packages to big ones, as the latter may lead to performance issues when installing, running, etc.
> - Is the dependency trustable and well-maintained? Check when the last version was published, who the author is, and how many weekly downloads the package has. Determining the trustworthiness of a package is a skill that comes with experience, because you have to account for factors such as how likely the package needs updates, or how many people may need it.

In the `src/main.jsx` file, add the following code and save it:

```js
import Plotly from "plotly.js-dist-min";

const root = document.getElementById("root");
Plotly.newPlot(
  root,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
    },
  ],
  {
    margin: { t: 0 },
  },
);
```

Go back to `http://localhost:5173` and you'll see a graph on the page. Change the different numbers and see the graph updated every time you save your file.

### Building our code for production

However, this code is not ready for production. Most build tooling systems, including Vite, have a "development mode" and a "production mode". The important difference is that a lot of the helpful features you will use in development are not needed in the final site, so will be stripped out for production, e.g. "hot module replacement", "live reloading", and "uncompressed and commented source code". Though far from exhaustive, these are some of the common web development features that are very helpful at the development stage but are not very useful in production. In production, they will just bloat your site.

Now stop the running Vite dev server using <kbd>Ctrl</kbd> + <kbd>C</kbd>.

We can now prepare our bare bones example site for an imaginary deployment. Vite provides an additional `build` command to generate files that are suited to publication.

Run the following command:

```bash
npx vite build
```

You should see an output like so:

```plain
vite v5.2.13 building for production...
✓ 6 modules transformed.
dist/index.html                    0.32 kB │ gzip:     0.24 kB
dist/assets/index-BlYAJQFz.js  3,723.18 kB │ gzip: 1,167.74 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 4.36s
```

Vite will create a directory called `dist`. If you look into it, it contains an `index.html`, which looks very similar to the root one, except that the `script`'s source is now replaced with a path to the `assets` folder. The `assets` folder containing transformed JavaScript output, which is now minified and optimized for production.

> [!NOTE]
> You may be worried about the warning that there's a chunk that's too large. This is expected because we are loading a library that does a lot of things behind the scenes (imagine writing all the code yourself to draw the same graph). For now, we don't need to worry about it.

## A rough guide to package manager clients

This tutorial installed the Vite package using npm, but as mentioned earlier on there are some alternatives. It's worth at least knowing they exist and having some vague idea of the common commands across the tools. You've already seen some in action, but let's look at the others.

The list will grow over time, but at the time of writing, the following main package managers are available:

- npm at [npmjs.org](https://www.npmjs.com/)
- pnpm at [pnpm.js.org](https://pnpm.js.org/)
- Yarn at [yarnpkg.com](https://yarnpkg.com/)

npm and pnpm are similar from a command line point of view — in fact, pnpm aims to have full parity over the argument options that npm offers. It differs in that it uses a different method for downloading and storing the packages on your computer, aiming to reduce the overall disk space required.

Where npm is shown in the examples below, pnpm can be swapped in and the command will work.

Yarn is often thought to be quicker than npm in terms of the installation process (though your mileage may vary). This is important to developers because there can be a significant amount of time wasted on waiting for dependencies to install (and copy to the computer).

However, worth noting that the npm package manager is **not** required to install packages from the npm registry. pnpm and Yarn can consume the same `package.json` format as npm, and can install any package from the npm and other package registries.

Let's review the common actions you'll want to perform with package managers.

> [!NOTE]
> We will demonstrate both npm and Yarn commands. They are not meant to be run in the same project. You should set up your project with either npm or Yarn and use commands from that package manager consistently.

### Initialize a new project

```bash
npm init
yarn init
```

As shown above, this will prompt and walk you through a series of questions to describe your project (name, license, description, and so on) then generate a `package.json` for you that contains meta-information about your project and its dependencies.

### Installing dependencies

```bash
npm install vite
yarn add vite
```

We also saw `install` in action above. This would directly add the `vite` package to the working directory in a subdirectory called `node_modules`, along with `vite`'s own dependencies.

By default, this command will install the latest version of `vite`, but you can control this too. You can ask for `vite@4`, which gives you the latest 4.x version (which is 4.5.3). Or you could try `vite@^4.0.0`, which means the latest version after or including 4.0.0 (the same meaning as above).

### Updating dependencies

```bash
npm update
yarn upgrade
```

This will look at the currently installed dependencies and update them, if there is an update available, within the range that's specified in the package.

The range is specified in the version of the dependency in your `package.json`, such as `"vite": "^5.2.13"` — in this case, the caret character `^` means all minor and patch releases after and including 5.2.13, up to but excluding 6.0.0.

This is determined using a system called [semver](https://semver.org/), which might look a bit complicated from the documentation but can be simplified by considering only the summary information and that a version is represented by `MAJOR.MINOR.PATCH`, such as 2.0.1 being major version 2 with patch version 1. An excellent way to try out semver values is to use the [semver calculator](https://semver.npmjs.com/).

It's important to remember that `npm update` will not upgrade the dependencies to beyond the range defined in the `package.json` — to do this you will need to install that version specifically.

### More commands

You can find out more about the individual commands for [npm](https://docs.npmjs.com/cli-documentation/) and [yarn](https://classic.yarnpkg.com/en/docs/cli/) online. Again, [pnpm](https://pnpm.io/cli/add) commands will have parity with npm, with a handful of additions.

## Making your own commands

The package managers also support creating your own commands and executing them from the command line. For instance, previously we invoked the command `vite` with `npx` to start the Vite dev server. We could create the following command:

```bash
npm run dev
# or yarn run dev
```

This would run a custom script for starting our project in "development mode". In fact, we regularly include this in all projects as the local development setup tends to run slightly differently to how it would run in production.

If you tried running this in your test project from earlier it would (likely) claim the "dev script is missing". This is because npm, Yarn (and the like) are looking for a property called `dev` in the `scripts` property of your `package.json` file. So, let's create a custom shorthand command — "dev" — in our `package.json`. If you followed the tutorial from earlier, you should have a `package.json` file inside your npm-experiment directory. Open it up, and its `scripts` member should look like this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Update it so that it looks like this, and save the file:

```json
"scripts": {
  "dev": "vite"
},
```

We've added a custom `dev` command as an npm script.

Now try running the following in your terminal, making sure you are inside the `npm-experiment` directory:

```bash
npm run dev
```

This should start Vite and start the same local development server, as we saw before.

Note that the script we defined here no longer need the `npx` prefix. This is because npm (and yarn) commands are clever in that they will search for command line tools that are locally installed to the project before trying to find them through conventional methods (where your computer will normally store and allow software to be found). You can [learn more about the technical intricacies of the `run` command](https://docs.npmjs.com/cli/run-script/), although in most cases your own scripts will run just fine.

This particular one may look unnecessary — `npm run dev` is more characters to type than `npx vite`, but it is a form of _abstraction_. It allows us to add more work to the `dev` command in the future, such as setting environment variables, generating temporary files, etc., without complicating the command.

You can add all kinds of things to the `scripts` property that help you do your job. For example, here's what Vite recommends in the template:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```

## Summary

This brings us to the end of our tour of package managers. Our next move is to build up a sample toolchain, putting all that we've learnt so far into practice.

## See also

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_tools/Overview","Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
