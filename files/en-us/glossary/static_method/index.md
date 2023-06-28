---
title: Static method
slug: Glossary/Static_method
page-type: glossary-definition
---

{{GlossarySidebar}}

A static method (or _static function_) is a {{Glossary("method")}} defined as a member of an {{Glossary("object")}} but is accessible directly from an API object's constructor, rather than from an object instance created via the constructor.

In a [Web API](/en-US/docs/Web/API), a static method is one which is defined by an interface but can be called without instantiating an object of that type first.

Methods called on object instances are called _instance methods_.

## Examples

In the [Notifications API](/en-US/docs/Web/API/Notifications_API), the {{domxref("Notification.requestPermission()")}} method is called on the actual {{domxref("Notification")}} constructor itself — it is a static method:

```js
let promise = Notification.requestPermission();
```

The {{domxref("Notification.close()")}} method on the other hand, is an instance method — it is called on a specific notification object instance to close the system notification it represents:

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## See also

- [Static Method](https://www.techopedia.com/definition/24034/static-method-java) on Techopedia
- [static](/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{Glossary("Object")}}
  - {{Glossary("Method")}}
