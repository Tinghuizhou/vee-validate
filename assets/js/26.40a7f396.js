(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{216:function(e,t,s){"use strict";s.r(t);var i=s(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("In the following example, we have two scopes and we operate on either of them independently:")]),e._v(" "),s("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/y3504yr0l1?initialpath=%2F%23%2Fscopes&module=%2Fsrc%2Fcomponents%2FScopes.vue&view=preview",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),e._v(" "),s("p",[s("a",{attrs:{href:"https://codesandbox.io/s/y3504yr0l1?initialpath=%2F%23%2Fscopes&module=%2Fsrc%2Fcomponents%2FScopes.vue",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit VeeValidate Examples"}}),s("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"scopes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scopes","aria-hidden":"true"}},[this._v("#")]),this._v(" Scopes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, the scope of the validator is the same as the Vue instance that owns it. Sometimes you may have multiple fields within the same component, they are in different forms and serve different purposes. Since the validator uses the "),t("code",[this._v("name")]),this._v(" or "),t("code",[this._v("data-vv-name")]),this._v(" attributes to identify the field, fields with the same name will conflict with each other, which will cause problems when trying to display error messages for either of them.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can tell the validator to scope the fields by adding a "),t("code",[this._v("data-vv-scope")]),this._v(". Those fields will be then identified using their name and their scope. You can have inputs with the same name in different scopes, and you can display, clear and validate those scopes independently.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For convenience, you may add the "),t("code",[this._v("data-vv-scope")]),this._v(" attribute on the form that owns the inputs, you don't have to add the attribute on every input. You can also pass "),t("code",[this._v("scope")]),this._v(" property to the validator expression.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[t("code",[this._v("data-vv-scope")]),this._v(" when applied on forms works if the inputs are HTML5 inputs. Custom components would need to define their scope using the attribute.")])])}],!1,null,null,null);o.options.__file="scopes.md";t.default=o.exports}}]);