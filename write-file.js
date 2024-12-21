const APIs = {
  Duration: {
    "javascript-constructor": ["Duration"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds",
      "microseconds",
      "nanoseconds",
      "sign",
      "blank",
    ],
    "javascript-instance-method": [
      "with",
      "negated",
      "abs",
      "add",
      "subtract",
      "round",
      "total",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
    ],
  },
  Instant: {
    "javascript-constructor": ["Instant"],
    "javascript-static-method": [
      "from",
      "fromEpochMilliseconds",
      "fromEpochNanoseconds",
      "compare",
    ],
    "javascript-instance-accessor-property": [
      "epochMilliseconds",
      "epochNanoseconds",
    ],
    "javascript-instance-method": [
      "add",
      "subtract",
      "until",
      "since",
      "round",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "toZonedDateTimeISO",
    ],
  },
  Now: {
    "javascript-static-method": [
      "timeZoneId",
      "instant",
      "plainDateISO",
      "plainTimeISO",
      "plainDateTimeISO",
      "zonedDateTimeISO",
    ],
  },
  PlainDate: {
    "javascript-constructor": ["PlainDate"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "calendarId",
      "era",
      "eraYear",
      "year",
      "month",
      "monthCode",
      "day",
      "dayOfWeek",
      "dayOfYear",
      "weekOfYear",
      "yearOfWeek",
      "daysInWeek",
      "daysInMonth",
      "daysInYear",
      "monthsInYear",
      "inLeapYear",
    ],
    "javascript-instance-method": [
      "toPlainYearMonth",
      "toPlainMonthDay",
      "with",
      "withCalendar",
      "add",
      "subtract",
      "until",
      "since",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "toPlainDateTime",
      "toZonedDateTime",
    ],
  },
  PlainTime: {
    "javascript-constructor": ["PlainTime"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "hour",
      "minute",
      "second",
      "millisecond",
      "microsecond",
      "nanosecond",
    ],
    "javascript-instance-method": [
      "with",
      "add",
      "subtract",
      "until",
      "since",
      "round",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
    ],
  },
  PlainDateTime: {
    "javascript-constructor": ["PlainDateTime"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "calendarId",
      "era",
      "eraYear",
      "year",
      "month",
      "monthCode",
      "day",
      "dayOfWeek",
      "dayOfYear",
      "weekOfYear",
      "yearOfWeek",
      "hour",
      "minute",
      "second",
      "millisecond",
      "microsecond",
      "nanosecond",
      "daysInWeek",
      "daysInMonth",
      "daysInYear",
      "monthsInYear",
      "inLeapYear",
    ],
    "javascript-instance-method": [
      "with",
      "withPlainTime",
      "withCalendar",
      "add",
      "subtract",
      "until",
      "since",
      "round",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "toPlainDate",
      "toPlainTime",
      "toZonedDateTime",
    ],
  },
  PlainYearMonth: {
    "javascript-constructor": ["PlainYearMonth"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "calendarId",
      "era",
      "eraYear",
      "year",
      "month",
      "monthCode",
      "daysInYear",
      "daysInMonth",
      "monthsInYear",
      "inLeapYear",
    ],
    "javascript-instance-method": [
      "with",
      "add",
      "subtract",
      "until",
      "since",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "toPlainDate",
    ],
  },
  PlainMonthDay: {
    "javascript-constructor": ["PlainMonthDay"],
    "javascript-static-method": ["from"],
    "javascript-instance-accessor-property": ["calendarId", "monthCode", "day"],
    "javascript-instance-method": [
      "with",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "toPlainDate",
    ],
  },
  ZonedDateTime: {
    "javascript-constructor": ["ZonedDateTime"],
    "javascript-static-method": ["from", "compare"],
    "javascript-instance-accessor-property": [
      "calendarId",
      "timeZoneId",
      "era",
      "eraYear",
      "year",
      "month",
      "monthCode",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
      "microsecond",
      "nanosecond",
      "epochMilliseconds",
      "epochNanoseconds",
      "dayOfWeek",
      "dayOfYear",
      "weekOfYear",
      "yearOfWeek",
      "hoursInDay",
      "daysInWeek",
      "daysInMonth",
      "daysInYear",
      "monthsInYear",
      "inLeapYear",
      "offsetNanoseconds",
      "offset",
    ],
    "javascript-instance-method": [
      "with",
      "withPlainTime",
      "withTimeZone",
      "withCalendar",
      "add",
      "subtract",
      "until",
      "since",
      "round",
      "equals",
      "toString",
      "toJSON",
      "toLocaleString",
      "valueOf",
      "startOfDay",
      "getTimeZoneTransition",
      "toInstant",
      "toPlainDate",
      "toPlainTime",
      "toPlainDateTime",
    ],
  },
};

for (const [apiName, api] of Object.entries(APIs)) {
  for (const [type, members] of Object.entries(api)) {
    members.sort();
  }
}

const args = {
  Duration: [
    "years?",
    "months?",
    "weeks?",
    "days?",
    "hours?",
    "minutes?",
    "seconds?",
    "milliseconds?",
    "microseconds?",
    "nanoseconds?",
  ],
  "Duration.compare": ["duration1", "duration2", "options?"],
  "Duration.from": ["info"],
  "Duration#with": ["info"],
  "Duration#negated": [],
  "Duration#abs": [],
  "Duration#add": ["other"],
  "Duration#subtract": ["other"],
  "Duration#round": ["smallestUnit|options"],
  "Duration#total": ["unit|options"],
  "Duration#toString": ["options?"],
  "Duration#toJSON": [],
  "Duration#toLocaleString": ["locales?", "options?"],
  "Duration#valueOf": [],
  Instant: ["epochNanoseconds"],
  "Instant.from": ["info"],
  "Instant.fromEpochMilliseconds": ["epochMilliseconds"],
  "Instant.fromEpochNanoseconds": ["epochNanoseconds"],
  "Instant.compare": ["instant1", "instant2"],
  "Instant#add": ["duration"],
  "Instant#subtract": ["duration"],
  "Instant#until": ["other", "options?"],
  "Instant#since": ["other", "options?"],
  "Instant#round": ["smallestUnit|options"],
  "Instant#equals": ["other"],
  "Instant#toString": ["options?"],
  "Instant#toJSON": [],
  "Instant#toLocaleString": ["locales?", "options?"],
  "Instant#valueOf": [],
  "Instant#toZonedDateTimeISO": ["timeZone"],
  "Now.timeZoneId": [],
  "Now.instant": [],
  "Now.plainDateISO": ["timeZone?"],
  "Now.plainTimeISO": ["timeZone?"],
  "Now.plainDateTimeISO": ["timeZone?"],
  "Now.zonedDateTimeISO": ["timeZone?"],
  PlainDate: ["year", "month", "day", "calendar?"],
  "PlainDate.compare": ["date1", "date2"],
  "PlainDate.from": ["info", "options?"],
  "PlainDate#with": ["info"],
  "PlainDate#withCalendar": ["calendar"],
  "PlainDate#add": ["duration"],
  "PlainDate#subtract": ["duration"],
  "PlainDate#until": ["other", "options?"],
  "PlainDate#since": ["other", "options?"],
  "PlainDate#equals": ["other"],
  "PlainDate#toString": ["options?"],
  "PlainDate#toJSON": [],
  "PlainDate#toLocaleString": ["locales?", "options?"],
  "PlainDate#valueOf": [],
  "PlainDate#toPlainDateTime": ["plainTime?"],
  "PlainDate#toZonedDateTime": ["timeZone|info"],
  "PlainDate#toPlainYearMonth": [],
  "PlainDate#toPlainMonthDay": [],
  PlainTime: [
    "hour?",
    "minute?",
    "second?",
    "millisecond?",
    "microsecond?",
    "nanosecond?",
  ],
  "PlainTime.compare": ["time1", "time2"],
  "PlainTime.from": ["info", "options?"],
  "PlainTime#with": ["info", "options?"],
  "PlainTime#add": ["duration"],
  "PlainTime#subtract": ["duration"],
  "PlainTime#until": ["other", "options?"],
  "PlainTime#since": ["other", "options?"],
  "PlainTime#round": ["smallestUnit|options"],
  "PlainTime#equals": ["other"],
  "PlainTime#toString": ["options?"],
  "PlainTime#toJSON": [],
  "PlainTime#toLocaleString": ["locales?", "options?"],
  "PlainTime#valueOf": [],
  PlainDateTime: [
    "year",
    "month",
    "day",
    "hour?",
    "minute?",
    "second?",
    "millisecond?",
    "microsecond?",
    "nanosecond?",
    "calendar?",
  ],
  "PlainDateTime.compare": ["dateTime1", "dateTime2"],
  "PlainDateTime.from": ["info", "options?"],
  "PlainDateTime#with": ["info", "options?"],
  "PlainDateTime#withPlainTime": ["time"],
  "PlainDateTime#withCalendar": ["calendar"],
  "PlainDateTime#add": ["duration", "options?"],
  "PlainDateTime#subtract": ["duration", "options?"],
  "PlainDateTime#until": ["other", "options?"],
  "PlainDateTime#since": ["other", "options?"],
  "PlainDateTime#round": ["smallestUnit|options"],
  "PlainDateTime#equals": ["other"],
  "PlainDateTime#toString": ["options?"],
  "PlainDateTime#toJSON": [],
  "PlainDateTime#toLocaleString": ["locales?", "options?"],
  "PlainDateTime#valueOf": [],
  "PlainDateTime#toPlainDate": [],
  "PlainDateTime#toPlainTime": [],
  "PlainDateTime#toZonedDateTime": ["timeZone", "options?"],
  PlainYearMonth: ["year", "month", "calendar?", "referenceDay?"],
  "PlainYearMonth.compare": ["yearMonth1", "yearMonth2"],
  "PlainYearMonth.from": ["info", "options?"],
  "PlainYearMonth#with": ["info", "options?"],
  "PlainYearMonth#add": ["duration", "options?"],
  "PlainYearMonth#subtract": ["duration", "options?"],
  "PlainYearMonth#until": ["other", "options?"],
  "PlainYearMonth#since": ["other", "options?"],
  "PlainYearMonth#equals": ["other"],
  "PlainYearMonth#toString": ["options?"],
  "PlainYearMonth#toJSON": [],
  "PlainYearMonth#toLocaleString": ["locales?", "options?"],
  "PlainYearMonth#valueOf": [],
  "PlainYearMonth#toPlainDate": ["info"],
  PlainMonthDay: ["month", "day", "calendar?", "referenceYear?"],
  "PlainMonthDay.from": ["info", "options?"],
  "PlainMonthDay#with": ["info", "options?"],
  "PlainMonthDay#equals": ["other"],
  "PlainMonthDay#toString": ["options?"],
  "PlainMonthDay#toJSON": [],
  "PlainMonthDay#toLocaleString": ["locales?", "options?"],
  "PlainMonthDay#valueOf": [],
  "PlainMonthDay#toPlainDate": ["info"],
  ZonedDateTime: ["epochNanoseconds", "timeZone", "calendar?"],
  "ZonedDateTime.compare": ["dateTime1", "dateTime2"],
  "ZonedDateTime.from": ["info", "options?"],
  "ZonedDateTime#with": ["info", "options?"],
  "ZonedDateTime#withPlainTime": ["time"],
  "ZonedDateTime#withTimeZone": ["timeZone"],
  "ZonedDateTime#withCalendar": ["calendar"],
  "ZonedDateTime#add": ["duration", "options?"],
  "ZonedDateTime#subtract": ["duration", "options?"],
  "ZonedDateTime#until": ["other", "options?"],
  "ZonedDateTime#since": ["other", "options?"],
  "ZonedDateTime#round": ["smallestUnit|options"],
  "ZonedDateTime#equals": ["other"],
  "ZonedDateTime#toString": ["options?"],
  "ZonedDateTime#toJSON": [],
  "ZonedDateTime#toLocaleString": ["locales?", "options?"],
  "ZonedDateTime#valueOf": [],
  "ZonedDateTime#startOfDay": [],
  "ZonedDateTime#getTimeZoneTransition": ["direction"],
  "ZonedDateTime#toInstant": [],
  "ZonedDateTime#toPlainDate": [],
  "ZonedDateTime#toPlainTime": [],
  "ZonedDateTime#toPlainDateTime": [],
};

function createTitle(apiName, type, member) {
  switch (type) {
    case "javascript-instance-accessor-property":
      return `Temporal.${apiName}.prototype.${member}`;
    case "javascript-instance-method":
      return `Temporal.${apiName}.prototype.${member}()`;
    case "javascript-static-method":
      return `Temporal.${apiName}.${member}()`;
    case "javascript-constructor":
      return `Temporal.${apiName}()`;
  }
}

function createIntro(apiName, type, member) {
  switch (type) {
    case "javascript-instance-accessor-property":
      return `The **\`${member}\`** accessor property of {{jsxref("Temporal.${apiName}")}} instances TODO`;
    case "javascript-instance-method":
      return `The **\`${member}()\`** method of {{jsxref("Temporal.${apiName}")}} instances TODO`;
    case "javascript-static-method":
      return `The **\`Temporal.${apiName}.${member}()\`** static method TODO`;
    case "javascript-constructor":
      return `The **\`Temporal.${apiName}()\`** constructor creates {{jsxref("Temporal.${apiName}")}} objects.`;
  }
}

function formatArguments(args) {
  if (args === undefined) {
    return [[["TODO"]], ["TODO"]];
  }
  if (args.length === 0) {
    return [[[""]], []];
  } else if (args.length === 1 && args[0].includes("|")) {
    return [
      args[0].split("|").map((arg) => [arg]),
      args[0].split("|").map((arg) => `\`${arg}\``),
    ];
  }
  // If we have (a, b?, c?) then we should return:
  // [[a], [a, b], [a, b, c]]
  const optional = args
    .filter((arg) => arg.endsWith("?"))
    .map((arg) => arg.slice(0, -1));
  const result = [];
  for (let i = 0; i <= optional.length; i++) {
    const current = [];
    for (const required of args.filter((arg) => !arg.endsWith("?"))) {
      current.push(required);
    }
    for (let j = 0; j < i; j++) {
      current.push(optional[j]);
    }
    result.push(current);
  }
  return [
    result,
    result
      .at(-1)
      .map(
        (arg) =>
          `\`${arg}\`` + (optional.includes(arg) ? " {{optional_inline}}" : ""),
      ),
  ];
}

function createSyntax(apiName, type, member) {
  let callee = "";
  let funcArgs = [];
  let allArgs = [];
  switch (type) {
    case "javascript-instance-accessor-property":
      throw new Error("Accessor properties do not have syntax");
    case "javascript-instance-method":
      callee = `${member}`;
      [funcArgs, allArgs] = formatArguments(args[`${apiName}#${member}`]);
      break;
    case "javascript-static-method":
      callee = `Temporal.${apiName}.${member}`;
      [funcArgs, allArgs] = formatArguments(args[`${apiName}.${member}`]);
      break;
    case "javascript-constructor":
      callee = `new Temporal.${apiName}`;
      [funcArgs, allArgs] = formatArguments(args[`${apiName}`]);
      break;
  }
  return `\`\`\`js-nolint
${funcArgs.map((args) => `${callee}(${args.join(", ")})`).join("\n")}
\`\`\`

### Parameters

${
  allArgs.length
    ? allArgs.map((arg) => `- ${arg}\n  - : TODO`).join("\n")
    : "None."
}`;
}

for (const [apiName, api] of Object.entries(APIs)) {
  const path = `files/en-us/web/javascript/reference/global_objects/temporal/${apiName.toLowerCase()}/index.md`;
  let content = "";
  if (apiName !== "Now") {
    content = `---
title: Temporal.${apiName}
slug: Web/JavaScript/Reference/Global_Objects/Temporal/${apiName}
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.${apiName}
---

{{JSRef}}

The **\`Temporal.${apiName}\`** object TODO

## Constructor

- {{jsxref("Temporal/${apiName}/${apiName}", "Temporal.${apiName}()")}}
  - : Creates a new \`Temporal.${apiName}\` object.

## Static methods

${api["javascript-static-method"]
  .map(
    (method) =>
      `- {{jsxref("Temporal/${apiName}/${method}", "Temporal.${apiName}.${method}()")}}\n  - : TODO`,
  )
  .join("\n")}

## Instance properties

These properties are defined on \`Temporal.${apiName}.prototype\` and shared by all \`Temporal.${apiName}\` instances.

${[...api["javascript-instance-accessor-property"], "constructor"]
  .sort()
  .map((prop) =>
    prop === "constructor"
      ? `- {{jsxref("Object/constructor", "Temporal.${apiName}.prototype.constructor")}}
  - : The constructor function that created the instance object. For \`Temporal.${apiName}\` instances, the initial value is the {{jsxref("Temporal/${apiName}/${apiName}", "Temporal.${apiName}()")}} constructor.`
      : `- {{jsxref("Temporal/${apiName}/${prop}", "Temporal.${apiName}.prototype.${prop}")}}\n  - : TODO`,
  )
  .join("\n")}
- \`Temporal.${apiName}.prototype[Symbol.toStringTag]\`
  - : The initial value of the [\`[Symbol.toStringTag]\`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string \`"Temporal.${apiName}"\`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

${api["javascript-instance-method"]
  .map(
    (method) =>
      `- {{jsxref("Temporal/${apiName}/${method}", "Temporal.${apiName}.prototype.${method}()")}}\n  - : TODO`,
  )
  .join("\n")}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
`;
  } else {
    content = `---
title: Temporal.${apiName}
slug: Web/JavaScript/Reference/Global_Objects/Temporal/${apiName}
page-type: javascript-namespace
browser-compat: javascript.builtins.Temporal.${apiName}
---

{{JSRef}}

The **\`Temporal.${apiName}\`** object TODO

## Static properties

- \`Temporal.${apiName}[Symbol.toStringTag]\`
  - : The initial value of the [\`[Symbol.toStringTag]\`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string \`"Temporal.${apiName}"\`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

${api["javascript-static-method"]
  .map(
    (method) =>
      `- {{jsxref("Temporal/${apiName}/${method}", "Temporal.${apiName}.${method}()")}}\n  - : TODO`,
  )
  .join("\n")}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
`;
  }
  Bun.write(path, content);
  for (const [type, members] of Object.entries(api)) {
    for (const member of members) {
      const path = `files/en-us/web/javascript/reference/global_objects/temporal/${apiName.toLowerCase()}/${member.toLowerCase()}/index.md`;
      const content = `---
title: ${createTitle(apiName, type, member)}
slug: Web/JavaScript/Reference/Global_Objects/Temporal/${apiName}/${member}
page-type: ${type}
browser-compat: javascript.builtins.Temporal.${apiName}.${member}
---

{{JSRef}}

${createIntro(apiName, type, member)}

${
  !["javascript-instance-accessor-property"].includes(type)
    ? `## Syntax

${createSyntax(apiName, type, member)}

### Return value

TODO

### Exceptions

TODO

`
    : ""
}## Description

TODO

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
`;
      Bun.write(path, content);
    }
  }
}
