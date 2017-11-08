webpackJsonp([28],{458:function(s,t,a){s.exports=a(523)},523:function(s,t,a){var l=a(11)(null,a(524),null,null,null);s.exports=l.exports},524:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Scroll")]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("Scroll")]),s._v(" component, which is encapsulated based on "),a("code",{pre:!0},[s._v("better-scroll")]),s._v(", provides high-quality native scrolling experience and has convenient configuration along tith events.")]),s._v(" "),a("h3",[s._v("Example")]),s._v(" "),a("ul",[a("li",[s._v("Basic usage")])]),s._v(" "),a("p",[s._v("By setting "),a("code",{pre:!0},[s._v("data")]),s._v(" to an array, you can generate the list which can scrolls elegantly in the container.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll-wrapper"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("ul",[a("li",[s._v("Scroll bar")])]),s._v(" "),a("p",[s._v("Default is without scroll bar. You can set it to fade-in-fade-out or always-show style.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- fade-in-fade-out style --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":scrollbar")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- always-show style --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":scrollbar")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scrollbar"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("scrollbar")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fade")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    }\n  }\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("Pull down to refresh")])]),s._v(" "),a("p",[s._v("There is no pull-down-to-refresh function by default. Configuring "),a("code",{pre:!0},[s._v("pull-down-refresh")]),s._v(" can turn on the dispatching of the event "),a("code",{pre:!0},[s._v("pulling-down")]),s._v(" and the animation of pulling down. You can listen to "),a("code",{pre:!0},[s._v("pulling-down")]),s._v(" event to update data.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- turn on the pull-down-to-refresh function and use default configuration --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-down-refresh")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-down")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingDown"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- turn on the pull-down-to-refresh function and use custom configuration --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-down-refresh")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pullDownRefresh"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-down")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingDown"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pullDownRefresh")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("threshold")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("90")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("stop")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Refresh success'")]),s._v("\n      }\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onPullingDown() {\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// simulate updating data")]),s._v("\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() > "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(") {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// if new data")]),s._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".items.unshift("),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am new data: '")]),s._v(" + +"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("())\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// if no new data")]),s._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.scroll.forceUpdate()\n        }\n      }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n    }\n  }\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("Pulling up to load")])]),s._v(" "),a("p",[s._v("There is no pull-up-to-load function by default. Configuring "),a("code",{pre:!0},[s._v("pull-up-load")]),s._v(" can turn on the dispatching of the event "),a("code",{pre:!0},[s._v("pulling-up")]),s._v(" and the animation of pulling up. You can listen to "),a("code",{pre:!0},[s._v("pulling-up")]),s._v(" event to update data.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- turn on the pull-up-to-load function and use default configuration --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-up-load")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-up")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingUp"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- turn on the pull-up-to-load function and use custom configuration --\x3e")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-up-load")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pullUpLoad"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-up")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingUp"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": ["),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("itemIndex")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pullUpLoad")]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("threshold")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("more")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Load more'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("noMore")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'No more data'")]),s._v("\n        }\n      }\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onPullingUp() {\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// simulate updating data")]),s._v("\n      setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() > "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(") {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// if new data")]),s._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" newPage = [\n            "),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am line '")]),s._v(" + ++"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".itemIndex,\n            "),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am line '")]),s._v(" + ++"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".itemIndex,\n            "),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am line '")]),s._v(" + ++"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".itemIndex,\n            "),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am line '")]),s._v(" + ++"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".itemIndex,\n            "),a("span",{attrs:{class:"hljs-string"}},[s._v("'I am line '")]),s._v(" + ++"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".itemIndex\n          ]\n\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".items = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".items.concat(newPage)\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// if  no new data")]),s._v("\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.scroll.forceUpdate()\n        }\n      }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n    }\n  }\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("Customize the animation of pulling down refreshing and pulling up loading")])]),s._v(" "),a("p",[s._v("If you don't like the built-in slots of pulling down refreshing and pulling up loading, you can use "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Scoped-Slots"}},[s._v("scoped slots")]),s._v(" to customize animation. The example below uses scoped slots to customize animation of pulling down refreshing, while pulling up loading keeps default built-in animation.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scroll"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"items"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-down-refresh")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pullDownRefresh"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":pull-up-load")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pullUpLoad"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-down")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingDown"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@pulling-up")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onPullingUp"')]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"pulldown"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"props"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"props.pullDownRefresh"')]),s._v("\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"cube-pulldown-wrapper"')]),s._v("\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"props.pullDownStyle"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"props.beforePullDown"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"before-trigger"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{paddingTop: props.bubbleY + 'px'}\"")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{rotate: props.bubbleY > 40}"')]),s._v(">")]),s._v("↓"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"after-trigger"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-else")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"props.isPullingDown"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-loading")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-loading")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-else")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Refresh success"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-scroll")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("With the parameters that scoped slots provide, you can control the process of animation according to the change of the state. Detailed scope parameters and their meaning are shown below in 'Slots'.")]),s._v(" "),a("h3",[s._v("Props configuration")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("data used for list rendering")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("[]")])]),s._v(" "),a("tr",[a("td",[s._v("direction")]),s._v(" "),a("td",[s._v("scrolling direction")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'vertical', 'horizontal'")]),s._v(" "),a("td",[s._v("'vertical'")])]),s._v(" "),a("tr",[a("td",[s._v("scrollbar")]),s._v(" "),a("td",[s._v("configuration for scroll bar")]),s._v(" "),a("td",[s._v("Boolean/Object")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("pullDownRefresh")]),s._v(" "),a("td",[s._v("configuration for pulling down refreshing")]),s._v(" "),a("td",[s._v("Boolean/Object")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("pullUpLoad")]),s._v(" "),a("td",[s._v("configuration for pulling up loading")]),s._v(" "),a("td",[s._v("Boolean/Object")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("listenScroll")]),s._v(" "),a("td",[s._v("whether to dispatch scroll event")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true/false")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("probeType")]),s._v(" "),a("td",[s._v("the dispatching time of  scroll event "),a("br"),s._v("1. non-real-time dispatching; "),a("br"),s._v("2. real-time dispatching during the scrolling; "),a("br"),s._v("3. real-time dispatching during the entire scrolling including inertial stage")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("1, 2, 3")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("listenBeforeScroll")]),s._v(" "),a("td",[s._v("whether to dispatch  before-scroll-start event")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true/false")]),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("scrollbar")]),s._v(" sub configuration")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("fade")]),s._v(" "),a("td",[s._v("whether to have fade-in-fade-out style")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true/false")]),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("pullDownRefresh")]),s._v(" sub configuration")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("threshold")]),s._v(" "),a("td",[s._v("the threshold of  distance that pulling down for  refreshing")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("90")])]),s._v(" "),a("tr",[a("td",[s._v("stop")]),s._v(" "),a("td",[s._v("the position where rebounding stays")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("40")])]),s._v(" "),a("tr",[a("td",[s._v("txt")]),s._v(" "),a("td",[s._v("the text shown when refreshing successfully")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("'Refresh success'")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("pullUpLoad")]),s._v(" sub configuration")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("threshold")]),s._v(" "),a("td",[s._v("the threshold of  distance that pulling up for  loading")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("txt")]),s._v(" "),a("td",[s._v("the text shown when pulling up loading")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("{ more: 'Load more', noMore: 'No more data' }")])])])]),s._v(" "),a("h3",[s._v("Slot")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Scope Parameters")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("pulldown")]),s._v(" "),a("td",[s._v("located above the list and shown when pulling down refreshing")]),s._v(" "),a("td",[s._v("pullDownRefresh: whether to turn on pulling-down-refreshing function"),a("br"),s._v("pullDownStyle: the style of showing and fading"),a("br"),s._v("beforePullDown: whether in pulling down operation"),a("br"),s._v("isPullingDown: whether in the process of pulling in data"),a("br"),s._v("bubbleY: the distance of pulling down currently - 50")])]),s._v(" "),a("tr",[a("td",[s._v("pullup")]),s._v(" "),a("td",[s._v("located below the list and shown when pulling up loading")]),s._v(" "),a("td",[s._v("pullUpLoad: whether to turn on pulling-up-loading function"),a("br"),s._v("isPullUpLoad: whether the data is being loaded")])])])]),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Event Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Parameters")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("triggers when clicking the list item")]),s._v(" "),a("td",[s._v("item - the data of the list item")])]),s._v(" "),a("tr",[a("td",[s._v("scroll")]),s._v(" "),a("td",[s._v("triggers according to the value of probeType, if listenScroll is true")]),s._v(" "),a("td",[s._v("Object {x, y} - real-time scrolling coordinates")])]),s._v(" "),a("tr",[a("td",[s._v("before-scroll-start")]),s._v(" "),a("td",[s._v("triggers before scrolling start, if  listenBeforeScroll")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("pulling-down")]),s._v(" "),a("td",[s._v("triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("pulling-up")]),s._v(" "),a("td",[s._v("triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true")]),s._v(" "),a("td",[s._v("-")])])])])])}]}}});