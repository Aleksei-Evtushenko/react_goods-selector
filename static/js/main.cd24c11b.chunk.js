(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),a=c(5),r=c(8),l=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.clearGoods=function(){e.setState({selectedGood:""})},e.selectGoods=function(t){return e.state.selectedGood===t?e.clearGoods():e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[t.length?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearGoods})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){var s=t===c;return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":s}),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":s?"RemoveButton":"AddButton",type:"button",className:s?"button is-info":"button",onClick:function(){return e.selectGoods(c)},children:s?"-":"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cd24c11b.chunk.js.map