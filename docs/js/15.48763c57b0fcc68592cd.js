webpackJsonp([15],{471:function(s,t,a){s.exports=a(549)},549:function(s,t,a){var v=a(11)(null,a(550),null,null,null);s.exports=v.exports},550:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("IndexList")]),s._v(" "),a("p",[s._v("索引列表，提供了列表索引的功能，也是一个基于"),a("code",{pre:!0},[s._v("better-scroll")]),s._v("进行封装的组件。")]),s._v(" "),a("h3",[s._v("示例")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("基本使用")]),s._v(" "),a("p",[s._v("构造如示例中 "),a("code",{pre:!0},[s._v("cityData")]),s._v(" 这样结构的数据，传入 "),a("code",{pre:!0},[s._v("cube-index-list")]),s._v(" 组件的 "),a("code",{pre:!0},[s._v("data")]),s._v(" 属性。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-index-list")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"cityData"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"selectItem"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@title-click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"clickTitle"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-index-list")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cityData = [\n  {\n    "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"★Hot City"')]),s._v(",\n    "),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v(": [\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"BEIJING"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"SHANGHAI"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n      }\n    ]\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"A"')]),s._v(",\n    "),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v(": [\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"ANSHAN"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"ANQING"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n    ]\n  }\n]\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Current City: BEIJING'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cityData")]),s._v(": cityData\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    selectItem(item) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(item.name)\n    },\n    clickTitle(title) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(title)\n    }\n  }\n}\n")])])])]),s._v(" "),a("h3",[s._v("Props 配置")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("标题")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("需要展示的数据")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("[]")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("data")]),s._v(" 子配置项")])]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("data")]),s._v(" 是数组，表示的是一组数据，每一项配置：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("name")]),s._v(" "),a("td",[s._v("组名")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("items")]),s._v(" "),a("td",[s._v("当前组下的数据项")]),s._v(" "),a("td",[s._v("Array")])])])]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("items")]),s._v(" 数组中的每一项必须是对象，且包含 "),a("code",{pre:!0},[s._v("name")]),s._v(" 属性用于显示内容；例如 "),a("code",{pre:!0},[s._v("items")]),s._v(": "),a("code",{pre:!0},[s._v("[{name: 'xx', ...}, ...]")])]),s._v(" "),a("h3",[s._v("事件")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("点击 IndexList 的某一项后触发")]),s._v(" "),a("td",[s._v("该选项的数据")])]),s._v(" "),a("tr",[a("td",[s._v("title-click")]),s._v(" "),a("td",[s._v("点击 title 后触发(title 必须设置后才有效)")]),s._v(" "),a("td",[s._v("title属性值")])])])])])}]}}});