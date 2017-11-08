webpackJsonp([22],{464:function(t,s,a){t.exports=a(535)},535:function(t,s,a){var v=a(11)(null,a(536),null,null,null);t.exports=v.exports},536:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("ActionSheet")]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("ActionSheet")]),t._v("操作列表提供了两种常见的样式，灵活可控内容。")]),t._v(" "),a("h3",[t._v("示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("基本用法")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showActionSheet"')]),t._v(">")]),t._v("操作列表"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showDefault() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'我是标题~~~'")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'<em>舒适型</em>'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'cube-foo'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'七座商务'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("align")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'left'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'豪华型'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("align")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'right'")]),t._v("\n          }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-function"}},[t._v("("),a("span",{attrs:{class:"hljs-params"}},[t._v("item, index")]),t._v(") =>")]),t._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("txt")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("`Clicked "),a("span",{attrs:{class:"hljs-subst"}},[t._v("${item.content}")]),t._v("`")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1000")]),t._v("\n          }).show()\n        }\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),a("p",[t._v("配置标题 "),a("code",{pre:!0},[t._v("title")]),t._v(" 和 "),a("code",{pre:!0},[t._v("data")]),t._v(" 数据项，注意 "),a("code",{pre:!0},[t._v("data")]),t._v(" 中内容是 "),a("code",{pre:!0},[t._v("content")]),t._v("，一段 HTML 字符串，额外还可以配置自定义 class："),a("code",{pre:!0},[t._v("class")]),t._v(" 和方向："),a("code",{pre:!0},[t._v("align")]),t._v("（值可以是 "),a("code",{pre:!0},[t._v("left")]),t._v("、"),a("code",{pre:!0},[t._v("right")]),t._v("）。")])]),t._v(" "),a("li",[a("p",[t._v("高亮设置")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showActive"')]),t._v(">")]),t._v("ActionSheet - active"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showActive() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'我是标题~~~'")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("active")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'舒适型'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'七座商务'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'豪华型'")]),t._v("\n          }\n        ]\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),a("p",[t._v("通过设置 "),a("code",{pre:!0},[t._v("active")]),t._v(" 属性来控制高亮的是第几个。")])]),t._v(" "),a("li",[a("p",[t._v("Picker 样式设定")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showPickerStyle"')]),t._v(">")]),t._v("ActionSheet - picker style"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showPickerStyle() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'我是标题~~~'")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("pickerStyle")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'舒适型'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'七座商务'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'豪华型'")]),t._v("\n          }\n        ]\n      }).show()\n    }\n  }\n}\n")])]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("pickerStyle")]),t._v(" 属性决定是否使用 Picker 样式。")])])]),t._v(" "),a("h3",[t._v("Props 配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("组件的标题")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("''")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("需要展示的数据列表")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("[]")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("高亮第几个选项")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-1")])]),t._v(" "),a("tr",[a("td",[t._v("pickerStyle")]),t._v(" "),a("td",[t._v("Picker 样式")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("ul",[a("li",[a("code",{pre:!0},[t._v("data")]),t._v(" 子配置项")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("展示的内容")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("任意 HTML 字符串")]),t._v(" "),a("td",[t._v("''")])]),t._v(" "),a("tr",[a("td",[t._v("align")]),t._v(" "),a("td",[t._v("内容对齐方向")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("left/right")]),t._v(" "),a("td",[t._v("''")])]),t._v(" "),a("tr",[a("td",[t._v("class")]),t._v(" "),a("td",[t._v("自定义 class")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("''")])])])]),t._v(" "),a("h3",[t._v("事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("参数1")]),t._v(" "),a("th",[t._v("参数2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cancel")]),t._v(" "),a("td",[t._v("点击取消")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("select")]),t._v(" "),a("td",[t._v("点击某项")]),t._v(" "),a("td",[t._v("点击项 item，即 data[index]")]),t._v(" "),a("td",[t._v("点击项的索引值 index")])])])])])}]}}});