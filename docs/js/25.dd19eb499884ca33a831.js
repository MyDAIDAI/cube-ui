webpackJsonp([25],{461:function(t,s,e){t.exports=e(529)},529:function(t,s,e){var a=e(11)(null,e(530),null,null,null);t.exports=a.exports},530:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",[t._v("TimePicker")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("TimePicker")]),t._v(" component provides commonly used functions of date selection.")]),t._v(" "),e("h3",[t._v("Example")]),t._v(" "),e("ul",[e("li",[t._v("Basic usage")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"showTimePicker"')]),t._v(">")]),t._v("TimePicker"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-js"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showTimePicker () {\n      "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createTimePicker({\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("showNow")]),t._v(": "),e("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("minuteStep")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("5")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("delay")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("15")]),t._v("\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("showNow")]),t._v(' is uesed to control whether the time "now" is displayed. '),e("code",{pre:!0},[t._v("minuteStep")]),t._v(" is used to control the step of the minute. "),e("code",{pre:!0},[t._v("delay")]),t._v(" represents the time that postponed backwards from now, which determines the minimal optional time.")]),t._v(" "),e("ul",[e("li",[t._v("Configuration of date options")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"showTimePicker"')]),t._v(">")]),t._v("TimePicker - day options"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-js"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showTimePicker () {\n      "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createTimePicker({\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("showNow")]),t._v(": "),e("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("minuteStep")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("10")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("delay")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("10")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("day")]),t._v(": {\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("len")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("5")]),t._v(",\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("filter")]),t._v(": ["),e("span",{attrs:{class:"hljs-string"}},[t._v("'Today'")]),t._v(", "),e("span",{attrs:{class:"hljs-string"}},[t._v("'Tomorrow'")]),t._v("],\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("format")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'M year d day'")]),t._v("\n        },\n        onSelect(selectedTime, selectedText) {\n          "),e("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(selectedTime, selectedText)\n        }\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("len")]),t._v(" attribute in "),e("code",{pre:!0},[t._v("day")]),t._v(" can set the length of date displayed in the first column.")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("filter")]),t._v(" attribute can set the text of the date displayed in the first column.")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("format")]),t._v(" attribute can set the text in "),e("code",{pre:!0},[t._v("M year d day")]),t._v(" format when the "),e("code",{pre:!0},[t._v("len")]),t._v(" is greater than the length of "),e("code",{pre:!0},[t._v("filter")]),t._v(" array.")]),t._v(" "),e("ul",[e("li",[t._v("Set time manually")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"showTimePicker"')]),t._v(">")]),t._v("TimePicker - setTime(next hour)"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-js"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" time = "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"hljs-built_in"}},[t._v("Date")]),t._v("().valueOf() + "),e("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(" * "),e("span",{attrs:{class:"hljs-number"}},[t._v("60")]),t._v(" * "),e("span",{attrs:{class:"hljs-number"}},[t._v("60")]),t._v(" * "),e("span",{attrs:{class:"hljs-number"}},[t._v("1000")]),t._v("\n    showTimePicker () {\n      "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" timePicker = "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createTimePicker({\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("showNow")]),t._v(": "),e("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("minuteStep")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("10")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("delay")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("15")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("day")]),t._v(": {\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("len")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("5")]),t._v(",\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("filter")]),t._v(": ["),e("span",{attrs:{class:"hljs-string"}},[t._v("'Today'")]),t._v(", "),e("span",{attrs:{class:"hljs-string"}},[t._v("'Tomorrow'")]),t._v(", "),e("span",{attrs:{class:"hljs-string"}},[t._v("'The day after tomorrow'")]),t._v("],\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("format")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'M year d day'")]),t._v("\n        }\n      })\n\n      timePicker.setTime(time)\n      timePicker.show()\n    }\n  }\n}\n")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("timePicker")]),t._v(" instance exports "),e("code",{pre:!0},[t._v("setTime")]),t._v(" methos to set time manually with the time stamp as time format. When the time stamp is lower than current time stamp, "),e("code",{pre:!0},[t._v("timePicker")]),t._v(" displays current time by default.")]),t._v(" "),e("h3",[t._v("Props configuration")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("title")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("'选择时间'")])]),t._v(" "),e("tr",[e("td",[t._v("delay")]),t._v(" "),e("td",[t._v("minutes that postponed backwards from now, which determines the minimal optional time")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("15")])]),t._v(" "),e("tr",[e("td",[t._v("day")]),t._v(" "),e("td",[t._v("date configuration")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("{ len: 3, filter: ['今日'], format: 'M月d日' }")])]),t._v(" "),e("tr",[e("td",[t._v("showNow")]),t._v(" "),e("td",[t._v("whether to display current time")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("minuteStep")]),t._v(" "),e("td",[t._v("step of the minute")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("10")])])])]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("day")]),t._v(" sub configuration")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("len")]),t._v(" "),e("td",[t._v("date column, postpone "),e("code",{pre:!0},[t._v("len")]),t._v(" days backwards from now")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("filter")]),t._v(" "),e("td",[t._v("date column, map time to the text in filter")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[t._v("['今日']")])]),t._v(" "),e("tr",[e("td",[t._v("format")]),t._v(" "),e("td",[t._v("format time")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("'M月d日'")])])])]),t._v(" "),e("h3",[t._v("Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Parameters 1")]),t._v(" "),e("th",[t._v("Parameters 2")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("select")]),t._v(" "),e("td",[t._v("triggers when clicking the confirm button")]),t._v(" "),e("td",[t._v("selectedTime: currently selected timestamp")]),t._v(" "),e("td",[t._v("selectText: text of currently selected time")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("triggers when sliding to change time-picker roller")]),t._v(" "),e("td",[t._v("selectedTime: currently selected timestamp")]),t._v(" "),e("td",[t._v("selectText: text of currently selected time")])]),t._v(" "),e("tr",[e("td",[t._v("cancel")]),t._v(" "),e("td",[t._v("triggers when clicking the cancel button")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h3",[t._v("Instance methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Method name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Parameters")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("setTime")]),t._v(" "),e("td",[t._v("manually set time displayed in time-picker with with the time stamp as time format")]),t._v(" "),e("td",[t._v("time stamp")])])])])])}]}}});