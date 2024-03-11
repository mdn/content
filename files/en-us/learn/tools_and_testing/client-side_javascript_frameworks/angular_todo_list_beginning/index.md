---
title: 开始开发我们的 Angular 待办事项应用程序
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

此刻，我们已准备好使用 Angular 来创建我们的待办事项应用程序。完成后的应用程序将具有显示待办项目列表，并包含编辑、删除与新增项目等功能。在本篇中，你将学到应用程序的结构，以及建立一个可显示待办项目的基础列表。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>，
        <a href="/zh-CN/docs/Learn/CSS">CSS</a>， 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，
        以及
        <a
          href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >终端命令行</a
        >的知识。

      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        创建一个可显示待办事项列表的基本应用程序结构，来理解Angular的基本概念，如组件结构、组件间数据共享以及循环内容创建。

      </td>
    </tr>
  </tbody>
</table>


## 待办事项应用程序结构

就像一个不使用框架的基本应用程序一样，Angular 应用程序有一个`index.html`文件。
在`index.html`的`<body>`标签内，Angular 使用一个特殊的元素——`<app-root>`——来插入你的主组件，而主组件又包括你创建的其他组件。
通常，你不需要修改`index.html`，而是专注于你的应用程序中称为组件的专门区域内的工作。

### 用组件组织你的应用程序

组件是 Angular 应用程序的核心构建块。
这个待办事项应用程序有两个组件——一个作为应用程序基础的组件，以及一个用于处理待办事项的组件。

每个组件由一个 TypeScript 类、HTML 和 CSS 组成。
TypeScript会转译（或转换）成 JavaScript，这意味着你的应用程序最终会以纯 JavaScript 的形式出现，但你可以方便地使用TypeScript的扩展功能和简洁语法。

### 使用\*ngIf和\*ngFor动态改变 UI

这个教程还涵盖了两个重要的 Angular 指令，用于动态改变DOM的结构。
指令就像是你可以在HTML中使用的命令，用于在应用程序中实现变化。

这个教程涵盖的第一个指令是 Angular 的迭代器，`*ngFor`。
`*ngFor`可以基于数组中的项动态创建 DOM 元素。

你在这个教程中学到的第二个指令是`*ngIf`。
你可以使用`*ngIf`基于条件添加或移除 DOM 中的元素。
例如，如果用户想要编辑待办事项列表中的某个项目，你可以为他们提供编辑该项目的手段。
如果他们不想编辑某个项目，你可以移除编辑界面。

### 在组件之间共享数据

在这个待办事项应用程序中，你配置你的组件以共享数据。
为了向待办事项列表中添加新项目，主组件必须将新项目发送给第二个组件。
这个第二个组件管理项目，并负责编辑、标记完成以及删除个别项目。

你通过称为`@Input()`和`@Output()`的特殊装饰器在 Angular 组件之间共享数据。
你使用这些装饰器来指定某些属性允许数据进入或离开一个组件。
要使用`@Output()`，你在一个组件中引发一个事件，以便另一个组件知道有数据可用。

## Define Item

在 `app` 目录中，创建一个名为 `item.ts` 的新文件，并包含以下内容：

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

你不会立即使用这个文件，直到后面的课程，但现在是一个了解和记录你对`item`是什么的知识的好时机。`Item`接口创建了一个`item`对象模型，以便你的应用程序能够理解`item`是什么。对于这个待办事项列表来说，一个`item`是一个具有描述并且可以完成的对象。


## 为 AppComponent 添加逻辑

现在你知道了什么是`item`，你可以通过将它们添加到TypeScript文件`app.component.ts`中，为你的应用程序提供一些项目。 在`app.component.ts`中，将内容替换为以下内容：


```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root"，
  templateUrl: "./app.component.html"，
  styleUrls: ["./app.component.css"]，
})
export class AppComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat"， done: true }，
    { description: "sleep"， done: false }，
    { description: "play"， done: false }，
    { description: "laugh"， done: false }，
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}
```
第一行是一个 JavaScript 导入语句，用于导入 Angular。
`@Component()`装饰器指定了`AppComponent`的元数据。
默认的元数据属性如下：


- `selector`：告诉你在模板中用来实例化这个组件的CSS选择器的名称。这里是`'app-root'`。
  在`index.html`的`<body>`标签内，Angular CLI在生成应用程序时添加了`<app-root></app-root>`。
  你可以通过将所有组件选择器添加到其他组件的HTML模板中，以相同的方式使用它们。
- `templateUrl`：指定与此组件关联的HTML文件。这里是`'./app.component.html'`，
- `styleUrls`：提供特定于此组件的样式文件的位置和名称。这里是`'./app.component.css'`。

`filter`属性是`union`类型，这意味着`filter`可以是`all`、`active`或`done`的值。
使用`union`类型，如果你在为`filter`属性赋值时打错了字，TypeScript会让你知道，这样你就可以早点发现错误。
这个指南会在后面的步骤中向你展示如何添加过滤功能，但你也可以使用过滤器来显示所有项目的默认列表。

`allItems`数组包含待办事项及其是否`done`。
第一个项目`eat`的`done`值为true。

获取器`get items()`会从`allItems`数组中检索项目，如果`filter`等于`all`。
否则，`get items()`会根据用户过滤视图的方式返回`done`项目或未完成的项目。
获取器还将数组的名称设为`items`，你将在下一节中使用这个名称。

## 向 AppComponent 模板添加 HTML

要在浏览器中看到项目列表，请将`app.component.html`的内容替换为以下 HTML：

```html
<div class="main">
  <h1>My To Do List</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

`<li>`标签包含了一个`*ngFor`，这是 Angular 内置的指令，用于遍历`items`数组中的项目。 对于每一个项目，`*ngFor`都会创建一个新的`<li>`。 包含`item.description`的双花括号指示Angular用每个项目的描述文本填充每个`<li>`。



在浏览器中，你应该会看到如下的项目列表：

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## 将项目添加到列表中

待办事项列表需要一种添加项目的方法。

在`app.component.ts`中，向类中添加以下方法：

```ts
addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}
```

`addItem()`方法接受用户提供的项目，并在用户点击**添加**按钮时将其添加到数组中。
`addItem()`方法使用数组方法`unshift()`将新项目添加到数组的开头和列表的顶部。
你也可以选择使用`push()`，这将把新项目添加到数组的末尾和列表的底部。

要使用`addItem()`方法，请编辑`AppComponent`模板中的HTML。

在`app.component.html`中，将`<h2>`替换为以下内容：

```html
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput" />


<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

在上述HTML中，`#newItem`是一个模板变量。在这种情况下，模板变量使用`<input>`元素作为其值。模板变量可以在组件模板的任何地方被引用。



当用户在`<input>`字段中输入新项目并按下**Enter**键时，`addItem()`方法会将值添加到`allItems`数组中。 按下**Enter**键还会将`<input>`的值重置为空字符串。模板变量`#newItem`用于在模板中访问`<input>`元素的值。 用户也可以点击**添加**按钮来调用相同的`addItem()`方法，而不是按下**Enter**键。

## 总结

到目前为止，你应该已经在浏览器中显示了基本的待办事项列表。这是很大的进步！当然，我们还有很多工作要做。在下一篇文章中，我们将看看如何为我们的应用程序添加一些样式。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started"，"Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling"， "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
