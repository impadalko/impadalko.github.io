(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("YFqc"),i=r.n(a);t.default=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Hello World!"),o.a.createElement(i.a,{href:"/computers"},o.a.createElement("a",null,"computers"))," ")}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("/HRN")),i=n(r("WaGi")),l=n(r("ZDA2")),f=n(r("/+P4")),u=n(r("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r("CxY0"),h=p(r("q1tI")),d=(s(r("17x9")),p(r("nOHt"))),v=r("Bu4q");function _(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,r,n,o,i;return(0,a.default)(this,t),(e=(0,l.default)(this,(0,f.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:_(e),as:_(t)}},n=null,o=null,i=null,function(e,t){if(e===n&&t===o)return i;var a=r(e,t);return n=e,o=t,i=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,l=a.as;if(function(e){var t=c.parse(e,!1,!0),r=c.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var f=window.location.pathname;i=c.resolve(f,i),l=l?c.resolve(f,l):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=d.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=w},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);