/*! Unmark Internal - http://unmark.it - v0.3.5 - 2014-03-04 - http://plainmade.com */ 
var Hogan={};(function(t,e){function a(t){return(null===t||void 0===t?"":t)+""}function n(t){return t=a(t),c.test(t)?t.replace(o,"&amp;").replace(i,"&lt;").replace(r,"&gt;").replace(l,"&#39;").replace(s,"&quot;"):t}t.Template=function(t,a,n,o){this.r=t||this.r,this.c=n,this.options=o,this.text=a||"",this.buf=e?[]:""},t.Template.prototype={r:function(){return""},v:n,t:a,render:function(t,e,a){return this.ri([t],e||{},a)},ri:function(t,e,a){return this.r(t,e,a)},rp:function(t,e,a,n){var o=a[t];return o?(this.c&&"string"==typeof o&&(o=this.c.compile(o,this.options)),o.ri(e,a,n)):""},rs:function(t,e,a){var n=t[t.length-1];if(!u(n))return a(t,e,this),void 0;for(var o=0;n.length>o;o++)t.push(n[o]),a(t,e,this),t.pop()},s:function(t,e,a,n,o,i,r){var l;return u(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ls(t,e,a,n,o,i,r)),l=""===t||!!t,!n&&l&&e&&e.push("object"==typeof t?t:e[e.length-1]),l)},d:function(t,e,a,n){var o=t.split("."),i=this.f(o[0],e,a,n),r=null;if("."===t&&u(e[e.length-2]))return e[e.length-1];for(var l=1;o.length>l;l++)i&&"object"==typeof i&&o[l]in i?(r=i,i=i[o[l]]):i="";return n&&!i?!1:(n||"function"!=typeof i||(e.push(r),i=this.lv(i,e,a),e.pop()),i)},f:function(t,e,a,n){for(var o=!1,i=null,r=!1,l=e.length-1;l>=0;l--)if(i=e[l],i&&"object"==typeof i&&t in i){o=i[t],r=!0;break}return r?(n||"function"!=typeof o||(o=this.lv(o,e,a)),o):n?!1:""},ho:function(t,e,a,n,o){var i=this.c,r=this.options;r.delimiters=o;var n=t.call(e,n);return n=null==n?n+"":""+n,this.b(i.compile(n,r).render(e,a)),!1},b:e?function(t){this.buf.push(t)}:function(t){this.buf+=t},fl:e?function(){var t=this.buf.join("");return this.buf=[],t}:function(){var t=this.buf;return this.buf="",t},ls:function(t,e,a,n,o,i,r){var l=e[e.length-1],s=null;if(!n&&this.c&&t.length>0)return this.ho(t,l,a,this.text.substring(o,i),r);if(s=t.call(l),"function"==typeof s){if(n)return!0;if(this.c)return this.ho(s,l,a,this.text.substring(o,i),r)}return s},lv:function(t,e,n){var o=e[e.length-1],i=t.call(o);return"function"==typeof i&&(i=a(i.call(o)),this.c&&~i.indexOf("{{"))?this.c.compile(i,this.options).render(o,n):a(i)}};var o=/&/g,i=/</g,r=/>/g,l=/\'/g,s=/\"/g,c=/[&<>\"\']/,u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}})("undefined"!=typeof exports?exports:Hogan),function(t){function e(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function a(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function n(t,e,a){if(e.charAt(a)!=t.charAt(0))return!1;for(var n=1,o=t.length;o>n;n++)if(e.charAt(a+n)!=t.charAt(n))return!1;return!0}function o(t,e,a,n){for(var l=[],s=null,c=null;t.length>0;)if(c=t.shift(),"#"==c.tag||"^"==c.tag||i(c,n))a.push(c),c.nodes=o(t,c.tag,a,n),l.push(c);else{if("/"==c.tag){if(0===a.length)throw Error("Closing tag without opener: /"+c.n);if(s=a.pop(),c.n!=s.n&&!r(c.n,s.n,n))throw Error("Nesting error: "+s.n+" vs. "+c.n);return s.end=c.i,l}l.push(c)}if(a.length>0)throw Error("missing closing tag: "+a.pop().n);return l}function i(t,e){for(var a=0,n=e.length;n>a;a++)if(e[a].o==t.n)return t.tag="#",!0}function r(t,e,a){for(var n=0,o=a.length;o>n;n++)if(a[n].c==t&&a[n].o==e)return!0}function l(t){return t.replace(w,"\\\\").replace(v,'\\"').replace(S,"\\n").replace(b,"\\r")}function s(t){return~t.indexOf(".")?"d":"f"}function c(t){for(var e="",a=0,n=t.length;n>a;a++){var o=t[a].tag;"#"==o?e+=u(t[a].nodes,t[a].n,s(t[a].n),t[a].i,t[a].end,t[a].otag+" "+t[a].ctag):"^"==o?e+=h(t[a].nodes,t[a].n,s(t[a].n)):"<"==o||">"==o?e+=d(t[a]):"{"==o||"&"==o?e+=f(t[a].n,s(t[a].n)):"\n"==o?e+=g('"\\n"'+(t.length-1==a?"":" + i")):"_v"==o?e+=p(t[a].n,s(t[a].n)):void 0===o&&(e+=g('"'+l(t[a])+'"'))}return e}function u(t,e,a,n,o,i){return"if(_.s(_."+a+'("'+l(e)+'",c,p,1),'+"c,p,0,"+n+","+o+',"'+i+'")){'+"_.rs(c,p,"+"function(c,p,_){"+c(t)+"});c.pop();}"}function h(t,e,a){return"if(!_.s(_."+a+'("'+l(e)+'",c,p,1),c,p,1,0,0,"")){'+c(t)+"};"}function d(t){return'_.b(_.rp("'+l(t.n)+'",c,p,"'+(t.indent||"")+'"));'}function f(t,e){return"_.b(_.t(_."+e+'("'+l(t)+'",c,p,0)));'}function p(t,e){return"_.b(_.v(_."+e+'("'+l(t)+'",c,p,0)));'}function g(t){return"_.b("+t+");"}var m=/\S/,v=/\"/g,S=/\n/g,b=/\r/g,w=/\\/g,y={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};t.scan=function(t,o){function i(){v.length>0&&(S.push(new String(v)),v="")}function r(){for(var t=!0,e=k;S.length>e;e++)if(t=S[e].tag&&y[S[e].tag]<y._v||!S[e].tag&&null===S[e].match(m),!t)return!1;return t}function l(t,e){if(i(),t&&r())for(var a,n=k;S.length>n;n++)S[n].tag||((a=S[n+1])&&">"==a.tag&&(a.indent=""+S[n]),S.splice(n,1));else e||S.push({tag:"\n"});b=!1,k=S.length}function s(t,e){var n="="+M,o=t.indexOf(n,e),i=a(t.substring(t.indexOf("=",e)+1,o)).split(" ");return x=i[0],M=i[1],o+n.length-1}var c=t.length,u=0,h=1,d=2,f=u,p=null,g=null,v="",S=[],b=!1,w=0,k=0,x="{{",M="}}";for(o&&(o=o.split(" "),x=o[0],M=o[1]),w=0;c>w;w++)f==u?n(x,t,w)?(--w,i(),f=h):"\n"==t.charAt(w)?l(b):v+=t.charAt(w):f==h?(w+=x.length-1,g=y[t.charAt(w+1)],p=g?t.charAt(w+1):"_v","="==p?(w=s(t,w),f=u):(g&&w++,f=d),b=w):n(M,t,w)?(S.push({tag:p,n:a(v),otag:x,ctag:M,i:"/"==p?b-M.length:w+x.length}),v="",w+=M.length-1,f=u,"{"==p&&("}}"==M?w++:e(S[S.length-1]))):v+=t.charAt(w);return l(b,!0),S},t.generate=function(e,a,n){var o='var _=this;_.b(i=i||"");'+c(e)+"return _.fl();";return n.asString?"function(c,p,i){"+o+";}":new t.Template(Function("c","p","i",o),a,t,n)},t.parse=function(t,e,a){return a=a||{},o(t,"",[],a.sectionTags||[])},t.cache={},t.compile=function(t,e){e=e||{};var a=t+"||"+!!e.asString,n=this.cache[a];return n?n:(n=this.generate(this.parse(this.scan(t,e.delimiters),t,e),t,e),this.cache[a]=n)}}("undefined"!=typeof exports?exports:Hogan),function(t){function e(e,n,o){var i=this;return this.on("click.pjax",e,function(e){var r=t.extend({},d(n,o));r.container||(r.container=t(this).attr("data-pjax")||i),a(e,r)})}function a(e,a,n){n=d(a,n);var i=e.currentTarget;if("A"!==i.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||location.protocol!==i.protocol||location.hostname!==i.hostname||i.hash&&i.href.replace(i.hash,"")===location.href.replace(location.hash,"")||i.href===location.href+"#")){var r={url:i.href,container:t(i).attr("data-pjax"),target:i},l=t.extend({},r,n),s=t.Event("pjax:click");t(i).trigger(s,[l]),s.isDefaultPrevented()||(o(l),e.preventDefault(),t(i).trigger("pjax:clicked",[l]))}}function n(e,a,n){n=d(a,n);var i=e.currentTarget;if("FORM"!==i.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var r={type:i.method.toUpperCase(),url:i.action,data:t(i).serializeArray(),container:t(i).attr("data-pjax"),target:i};o(t.extend({},r,n)),e.preventDefault()}function o(e){function a(e,a){var o=t.Event(e,{relatedTarget:n});return l.trigger(o,a),!o.isDefaultPrevented()}e=t.extend(!0,{},t.ajaxSettings,o.defaults,e),t.isFunction(e.url)&&(e.url=e.url());var n=e.target,i=h(e.url).hash,l=e.context=f(e.container);e.data||(e.data={}),e.data._pjax=l.selector;var s;e.beforeSend=function(t,n){return"GET"!==n.type&&(n.timeout=0),t.setRequestHeader("X-PJAX","true"),t.setRequestHeader("X-PJAX-Container",l.selector),a("pjax:beforeSend",[t,n])?(n.timeout>0&&(s=setTimeout(function(){a("pjax:timeout",[t,e])&&t.abort("timeout")},n.timeout),n.timeout=0),e.requestUrl=h(n.url).href,void 0):!1},e.complete=function(t,n){s&&clearTimeout(s),a("pjax:complete",[t,n,e]),a("pjax:end",[t,e])},e.error=function(t,n,o){var i=m("",t,e),l=a("pjax:error",[t,n,o,e]);"GET"==e.type&&"abort"!==n&&l&&r(i.url)},e.success=function(n,s,u){var d="function"==typeof t.pjax.defaults.version?t.pjax.defaults.version():t.pjax.defaults.version,f=u.getResponseHeader("X-PJAX-Version"),p=m(n,u,e);if(d&&f&&d!==f)return r(p.url),void 0;if(!p.contents)return r(p.url),void 0;o.state={id:e.id||c(),url:p.url,title:p.title,container:l.selector,fragment:e.fragment,timeout:e.timeout},(e.push||e.replace)&&window.history.replaceState(o.state,p.title,p.url),document.activeElement.blur(),p.title&&(document.title=p.title),l.html(p.contents);var g=l.find("input[autofocus], textarea[autofocus]").last()[0];if(g&&document.activeElement!==g&&g.focus(),v(p.scripts),"number"==typeof e.scrollTo&&t(window).scrollTop(e.scrollTo),""!==i){var S=h(p.url);S.hash=i,o.state.url=S.href,window.history.replaceState(o.state,p.title,S.href);var b=t(S.hash);b.length&&t(window).scrollTop(b.offset().top)}a("pjax:success",[n,s,u,e])},o.state||(o.state={id:c(),url:window.location.href,title:document.title,container:l.selector,fragment:e.fragment,timeout:e.timeout},window.history.replaceState(o.state,document.title));var d=o.xhr;d&&4>d.readyState&&(d.onreadystatechange=t.noop,d.abort()),o.options=e;var d=o.xhr=t.ajax(e);return d.readyState>0&&(e.push&&!e.replace&&(S(o.state.id,l.clone().contents()),window.history.pushState(null,"",u(e.requestUrl))),a("pjax:start",[d,e]),a("pjax:send",[d,e])),o.xhr}function i(e,a){var n={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return o(t.extend(n,d(e,a)))}function r(t){window.history.replaceState(null,"","#"),window.location.replace(t)}function l(e){var a=e.state;if(a&&a.container){if(x&&M==a.url)return;if(o.state.id===a.id)return;var n=t(a.container);if(n.length){var i,l=F[a.id];o.state&&(i=o.state.id<a.id?"forward":"back",b(i,o.state.id,n.clone().contents()));var s=t.Event("pjax:popstate",{state:a,direction:i});n.trigger(s);var c={id:a.id,url:a.url,container:n,push:!1,fragment:a.fragment,timeout:a.timeout,scrollTo:!1};l?(n.trigger("pjax:start",[null,c]),a.title&&(document.title=a.title),n.html(l),o.state=a,n.trigger("pjax:end",[null,c])):o(c),n[0].offsetHeight}else r(location.href)}x=!1}function s(e){var a=t.isFunction(e.url)?e.url():e.url,n=e.type?e.type.toUpperCase():"GET",o=t("<form>",{method:"GET"===n?"GET":"POST",action:a,style:"display:none"});"GET"!==n&&"POST"!==n&&o.append(t("<input>",{type:"hidden",name:"_method",value:n.toLowerCase()}));var i=e.data;if("string"==typeof i)t.each(i.split("&"),function(e,a){var n=a.split("=");o.append(t("<input>",{type:"hidden",name:n[0],value:n[1]}))});else if("object"==typeof i)for(key in i)o.append(t("<input>",{type:"hidden",name:key,value:i[key]}));t(document.body).append(o),o.submit()}function c(){return(new Date).getTime()}function u(t){return t.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function h(t){var e=document.createElement("a");return e.href=t,e}function d(e,a){return e&&a?a.container=e:a=t.isPlainObject(e)?e:{container:e},a.container&&(a.container=f(a.container)),a}function f(e){if(e=t(e),e.length){if(""!==e.selector&&e.context===document)return e;if(e.attr("id"))return t("#"+e.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+e.selector}function p(t,e){return t.filter(e).add(t.find(e))}function g(e){return t.parseHTML(e,document,!0)}function m(e,a,n){var o={};if(o.url=u(a.getResponseHeader("X-PJAX-URL")||n.requestUrl),/<html/i.test(e))var i=t(g(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),r=t(g(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));else var i=r=t(g(e));if(0===r.length)return o;if(o.title=p(i,"title").last().text(),n.fragment){if("body"===n.fragment)var l=r;else var l=p(r,n.fragment).first();l.length&&(o.contents=l.contents(),o.title||(o.title=l.attr("title")||l.data("title")))}else/<html/i.test(e)||(o.contents=r);return o.contents&&(o.contents=o.contents.not(function(){return t(this).is("title")}),o.contents.find("title").remove(),o.scripts=p(o.contents,"script[src]").remove(),o.contents=o.contents.not(o.scripts)),o.title&&(o.title=t.trim(o.title)),o}function v(e){if(e){var a=t("script[src]");e.each(function(){var e=this.src,n=a.filter(function(){return this.src===e});if(!n.length){var o=document.createElement("script");o.type=t(this).attr("type"),o.src=t(this).attr("src"),document.head.appendChild(o)}})}}function S(t,e){for(F[t]=e,P.push(t);C.length;)delete F[C.shift()];for(;P.length>o.defaults.maxCacheLength;)delete F[P.shift()]}function b(t,e,a){var n,o;F[e]=a,"forward"===t?(n=P,o=C):(n=C,o=P),n.push(e),(e=o.pop())&&delete F[e]}function w(){return t("meta").filter(function(){var e=t(this).attr("http-equiv");return e&&"X-PJAX-VERSION"===e.toUpperCase()}).attr("content")}function y(){t.fn.pjax=e,t.pjax=o,t.pjax.enable=t.noop,t.pjax.disable=k,t.pjax.click=a,t.pjax.submit=n,t.pjax.reload=i,t.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:w},t(window).on("popstate.pjax",l)}function k(){t.fn.pjax=function(){return this},t.pjax=s,t.pjax.enable=y,t.pjax.disable=t.noop,t.pjax.click=t.noop,t.pjax.submit=t.noop,t.pjax.reload=function(){window.location.reload()},t(window).off("popstate.pjax",l)}var x=!0,M=window.location.href,L=window.history.state;L&&L.container&&(o.state=L),"state"in window.history&&(x=!1);var F={},C=[],P=[];0>t.inArray("state",t.event.props)&&t.event.props.push("state"),t.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),t.support.pjax?y():k()}(jQuery);var Chart=function(t){function e(t,e,a){return t=i((t-e.graphMin)/(e.steps*e.stepValue),1,0),a*e.steps*t}function a(t,e,a,n){function o(){s+=r;var c=t.animation?i(l(s),null,0):1;n.clearRect(0,0,u,h),t.scaleOverlay?(a(c),e()):(e(),a(c)),1>=s?S(o):"function"==typeof t.onAnimationComplete&&t.onAnimationComplete()}var r=t.animation?1/i(t.animationSteps,Number.MAX_VALUE,1):1,l=c[t.animationEasing],s=t.animation?0:1;"function"!=typeof e&&(e=function(){}),S(o)}function n(t,e,a,n,i,r){var l;for(t=Math.floor(Math.log(n-i)/Math.LN10),i=Math.floor(i/(1*Math.pow(10,t)))*Math.pow(10,t),n=Math.ceil(n/(1*Math.pow(10,t)))*Math.pow(10,t)-i,t=Math.pow(10,t),l=Math.round(n/t);a>l||l>e;)t=a>l?t/2:2*t,l=Math.round(n/t);return e=[],o(r,e,l,i,t),{steps:l,stepValue:t,graphMin:i,labels:e}}function o(t,e,a,n,o){if(t)for(var i=1;a+1>i;i++)e.push(l(t,{value:(n+o*i).toFixed(0!=o%1?(""+o).split(".")[1].length:0)}))}function i(t,e,a){return!isNaN(parseFloat(e))&&isFinite(e)&&t>e?e:!isNaN(parseFloat(a))&&isFinite(a)&&a>t?a:t}function r(t,e){var a,n={};for(a in t)n[a]=t[a];for(a in e)n[a]=e[a];return n}function l(t,e){var a=/\W/.test(t)?Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):b[t]=b[t]||l(document.getElementById(t).innerHTML);return e?a(e):a}var s=this,c={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return 1>(t/=.5)?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return 1>(t/=.5)?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return 1>(t/=.5)?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return 1>(t/=.5)?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0==t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1==t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0==t?0:1==t?1:1>(t/=.5)?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return 1>(t/=.5)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,a=0,n=1;return 0==t?0:1==(t/=1)?1:(a||(a=.3),Math.abs(1)>n?(n=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-e)*Math.PI/a)))},easeOutElastic:function(t){var e=1.70158,a=0,n=1;return 0==t?0:1==(t/=1)?1:(a||(a=.3),Math.abs(1)>n?(n=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin(2*(1*t-e)*Math.PI/a)+1)},easeInOutElastic:function(t){var e=1.70158,a=0,n=1;return 0==t?0:2==(t/=.5)?1:(a||(a=.3*1.5),Math.abs(1)>n?(n=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/n),1>t?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-e)*Math.PI/a):.5*n*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-e)*Math.PI/a)+1)},easeInBack:function(t){return 1*(t/=1)*t*(2.70158*t-1.70158)},easeOutBack:function(t){return 1*((t=t/1-1)*t*(2.70158*t+1.70158)+1)},easeInOutBack:function(t){var e=1.70158;return 1>(t/=.5)?.5*t*t*(((e*=1.525)+1)*t-e):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-c.easeOutBounce(1-t)},easeOutBounce:function(t){return 1/2.75>(t/=1)?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*c.easeInBounce(2*t):.5*c.easeOutBounce(2*t-1)+.5}},u=t.canvas.width,h=t.canvas.height;window.devicePixelRatio&&(t.canvas.style.width=u+"px",t.canvas.style.height=h+"px",t.canvas.height=h*window.devicePixelRatio,t.canvas.width=u*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio)),this.PolarArea=function(e,a){s.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?r(s.PolarArea.defaults,a):s.PolarArea.defaults;return new d(e,n,t)},this.Radar=function(e,a){s.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?r(s.Radar.defaults,a):s.Radar.defaults;return new f(e,n,t)},this.Pie=function(e,a){s.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?r(s.Pie.defaults,a):s.Pie.defaults;return new p(e,n,t)},this.Doughnut=function(e,a){s.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?r(s.Doughnut.defaults,a):s.Doughnut.defaults;return new g(e,n,t)},this.Line=function(e,a){s.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?r(s.Line.defaults,a):s.Line.defaults;return new m(e,n,t)},this.Bar=function(e,a){s.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?r(s.Bar.defaults,a):s.Bar.defaults;return new v(e,n,t)};var d=function(t,i,r){var l,s,c,d,f,p,g,m,v;for(f=Math.min.apply(Math,[u,h])/2,f-=Math.max.apply(Math,[.5*i.scaleFontSize,.5*i.scaleLineWidth]),d=2*i.scaleFontSize,i.scaleShowLabelBackdrop&&(d+=2*i.scaleBackdropPaddingY,f-=1.5*i.scaleBackdropPaddingY),m=f,d=d?d:5,l=Number.MIN_VALUE,s=Number.MAX_VALUE,c=0;t.length>c;c++)t[c].value>l&&(l=t[c].value),s>t[c].value&&(s=t[c].value);c=Math.floor(m/(.66*d)),d=Math.floor(.5*(m/d)),v=i.scaleShowLabels?i.scaleLabel:null,i.scaleOverride?(g={steps:i.scaleSteps,stepValue:i.scaleStepWidth,graphMin:i.scaleStartValue,labels:[]},o(v,g.labels,g.steps,i.scaleStartValue,i.scaleStepWidth)):g=n(m,c,d,l,s,v),p=f/g.steps,a(i,function(){for(var t=0;g.steps>t;t++)if(i.scaleShowLine&&(r.beginPath(),r.arc(u/2,h/2,p*(t+1),0,2*Math.PI,!0),r.strokeStyle=i.scaleLineColor,r.lineWidth=i.scaleLineWidth,r.stroke()),i.scaleShowLabels){r.textAlign="center",r.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily;var e=g.labels[t];if(i.scaleShowLabelBackdrop){var a=r.measureText(e).width;r.fillStyle=i.scaleBackdropColor,r.beginPath(),r.rect(Math.round(u/2-a/2-i.scaleBackdropPaddingX),Math.round(h/2-p*(t+1)-.5*i.scaleFontSize-i.scaleBackdropPaddingY),Math.round(a+2*i.scaleBackdropPaddingX),Math.round(i.scaleFontSize+2*i.scaleBackdropPaddingY)),r.fill()}r.textBaseline="middle",r.fillStyle=i.scaleFontColor,r.fillText(e,u/2,h/2-p*(t+1))}},function(a){var n=-Math.PI/2,o=2*Math.PI/t.length,l=1,s=1;for(i.animation&&(i.animateScale&&(l=a),i.animateRotate&&(s=a)),a=0;t.length>a;a++)r.beginPath(),r.arc(u/2,h/2,l*e(t[a].value,g,p),n,n+s*o,!1),r.lineTo(u/2,h/2),r.closePath(),r.fillStyle=t[a].color,r.fill(),i.segmentShowStroke&&(r.strokeStyle=i.segmentStrokeColor,r.lineWidth=i.segmentStrokeWidth,r.stroke()),n+=s*o},r)},f=function(t,r,l){var s,c,d,f,p,g,m,v,S;for(t.labels||(t.labels=[]),p=Math.min.apply(Math,[u,h])/2,f=2*r.scaleFontSize,s=v=0;t.labels.length>s;s++)l.font=r.pointLabelFontStyle+" "+r.pointLabelFontSize+"px "+r.pointLabelFontFamily,c=l.measureText(t.labels[s]).width,c>v&&(v=c);for(p-=Math.max.apply(Math,[v,1.5*(r.pointLabelFontSize/2)]),p-=r.pointLabelFontSize,v=p=i(p,null,0),f=f?f:5,s=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;t.datasets.length>d;d++)for(S=0;t.datasets[d].data.length>S;S++)t.datasets[d].data[S]>s&&(s=t.datasets[d].data[S]),c>t.datasets[d].data[S]&&(c=t.datasets[d].data[S]);d=Math.floor(v/(.66*f)),f=Math.floor(.5*(v/f)),S=r.scaleShowLabels?r.scaleLabel:null,r.scaleOverride?(m={steps:r.scaleSteps,stepValue:r.scaleStepWidth,graphMin:r.scaleStartValue,labels:[]},o(S,m.labels,m.steps,r.scaleStartValue,r.scaleStepWidth)):m=n(v,d,f,s,c,S),g=p/m.steps,a(r,function(){var e=2*Math.PI/t.datasets[0].data.length;if(l.save(),l.translate(u/2,h/2),r.angleShowLineOut){l.strokeStyle=r.angleLineColor,l.lineWidth=r.angleLineWidth;for(var a=0;t.datasets[0].data.length>a;a++)l.rotate(e),l.beginPath(),l.moveTo(0,0),l.lineTo(0,-p),l.stroke()}for(a=0;m.steps>a;a++){if(l.beginPath(),r.scaleShowLine){l.strokeStyle=r.scaleLineColor,l.lineWidth=r.scaleLineWidth,l.moveTo(0,-g*(a+1));for(var n=0;t.datasets[0].data.length>n;n++)l.rotate(e),l.lineTo(0,-g*(a+1));l.closePath(),l.stroke()}r.scaleShowLabels&&(l.textAlign="center",l.font=r.scaleFontStyle+" "+r.scaleFontSize+"px "+r.scaleFontFamily,l.textBaseline="middle",r.scaleShowLabelBackdrop&&(n=l.measureText(m.labels[a]).width,l.fillStyle=r.scaleBackdropColor,l.beginPath(),l.rect(Math.round(-n/2-r.scaleBackdropPaddingX),Math.round(-g*(a+1)-.5*r.scaleFontSize-r.scaleBackdropPaddingY),Math.round(n+2*r.scaleBackdropPaddingX),Math.round(r.scaleFontSize+2*r.scaleBackdropPaddingY)),l.fill()),l.fillStyle=r.scaleFontColor,l.fillText(m.labels[a],0,-g*(a+1)))}for(a=0;t.labels.length>a;a++){l.font=r.pointLabelFontStyle+" "+r.pointLabelFontSize+"px "+r.pointLabelFontFamily,l.fillStyle=r.pointLabelFontColor;var n=Math.sin(e*a)*(p+r.pointLabelFontSize),o=Math.cos(e*a)*(p+r.pointLabelFontSize);l.textAlign=e*a==Math.PI||0==e*a?"center":e*a>Math.PI?"right":"left",l.textBaseline="middle",l.fillText(t.labels[a],n,-o)}l.restore()},function(a){var n=2*Math.PI/t.datasets[0].data.length;l.save(),l.translate(u/2,h/2);for(var o=0;t.datasets.length>o;o++){l.beginPath(),l.moveTo(0,-1*a*e(t.datasets[o].data[0],m,g));for(var i=1;t.datasets[o].data.length>i;i++)l.rotate(n),l.lineTo(0,-1*a*e(t.datasets[o].data[i],m,g));if(l.closePath(),l.fillStyle=t.datasets[o].fillColor,l.strokeStyle=t.datasets[o].strokeColor,l.lineWidth=r.datasetStrokeWidth,l.fill(),l.stroke(),r.pointDot)for(l.fillStyle=t.datasets[o].pointColor,l.strokeStyle=t.datasets[o].pointStrokeColor,l.lineWidth=r.pointDotStrokeWidth,i=0;t.datasets[o].data.length>i;i++)l.rotate(n),l.beginPath(),l.arc(0,-1*a*e(t.datasets[o].data[i],m,g),r.pointDotRadius,2*Math.PI,!1),l.fill(),l.stroke();l.rotate(n)}l.restore()},l)},p=function(t,e,n){for(var o=0,i=Math.min.apply(Math,[h/2,u/2])-5,r=0;t.length>r;r++)o+=t[r].value;a(e,null,function(a){var r=-Math.PI/2,l=1,s=1;for(e.animation&&(e.animateScale&&(l=a),e.animateRotate&&(s=a)),a=0;t.length>a;a++){var c=2*(s*t[a].value/o)*Math.PI;n.beginPath(),n.arc(u/2,h/2,l*i,r,r+c),n.lineTo(u/2,h/2),n.closePath(),n.fillStyle=t[a].color,n.fill(),e.segmentShowStroke&&(n.lineWidth=e.segmentStrokeWidth,n.strokeStyle=e.segmentStrokeColor,n.stroke()),r+=c}},n)},g=function(t,e,n){for(var o=0,i=Math.min.apply(Math,[h/2,u/2])-5,r=i*(e.percentageInnerCutout/100),l=0;t.length>l;l++)o+=t[l].value;a(e,null,function(a){var l=-Math.PI/2,s=1,c=1;for(e.animation&&(e.animateScale&&(s=a),e.animateRotate&&(c=a)),a=0;t.length>a;a++){var d=2*(c*t[a].value/o)*Math.PI;n.beginPath(),n.arc(u/2,h/2,s*i,l,l+d,!1),n.arc(u/2,h/2,s*r,l+d,l,!0),n.closePath(),n.fillStyle=t[a].color,n.fill(),e.segmentShowStroke&&(n.lineWidth=e.segmentStrokeWidth,n.strokeStyle=e.segmentStrokeColor,n.stroke()),l+=d}},n)},m=function(t,i,r){var l,s,c,d,f,p,g,m,v,S,b,w,y,k=0;for(f=h,r.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily,S=1,d=0;t.labels.length>d;d++)l=r.measureText(t.labels[d]).width,S=l>S?l:S;for(S>u/t.labels.length?(k=45,u/t.labels.length<Math.cos(k)*S?(k=90,f-=S):f-=Math.sin(k)*S):f-=i.scaleFontSize,d=i.scaleFontSize,f=f-5-d,l=Number.MIN_VALUE,s=Number.MAX_VALUE,c=0;t.datasets.length>c;c++)for(m=0;t.datasets[c].data.length>m;m++)t.datasets[c].data[m]>l&&(l=t.datasets[c].data[m]),s>t.datasets[c].data[m]&&(s=t.datasets[c].data[m]);if(c=Math.floor(f/(.66*d)),d=Math.floor(.5*(f/d)),m=i.scaleShowLabels?i.scaleLabel:"",i.scaleOverride?(g={steps:i.scaleSteps,stepValue:i.scaleStepWidth,graphMin:i.scaleStartValue,labels:[]},o(m,g.labels,g.steps,i.scaleStartValue,i.scaleStepWidth)):g=n(f,c,d,l,s,m),p=Math.floor(f/g.steps),d=1,i.scaleShowLabels){for(r.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily,l=0;g.labels.length>l;l++)s=r.measureText(g.labels[l]).width,d=s>d?s:d;d+=10}b=u-d-S,v=Math.floor(b/(t.labels.length-1)),w=u-S/2-b,y=f+i.scaleFontSize/2,a(i,function(){r.lineWidth=i.scaleLineWidth,r.strokeStyle=i.scaleLineColor,r.beginPath(),r.moveTo(u-S/2+5,y),r.lineTo(u-S/2-b-5,y),r.stroke(),k>0?(r.save(),r.textAlign="right"):r.textAlign="center",r.fillStyle=i.scaleFontColor;for(var e=0;t.labels.length>e;e++)r.save(),k>0?(r.translate(w+e*v,y+i.scaleFontSize),r.rotate(-(k*(Math.PI/180))),r.fillText(t.labels[e],0,0),r.restore()):r.fillText(t.labels[e],w+e*v,y+i.scaleFontSize+3),r.beginPath(),r.moveTo(w+e*v,y+3),i.scaleShowGridLines&&e>0?(r.lineWidth=i.scaleGridLineWidth,r.strokeStyle=i.scaleGridLineColor,r.lineTo(w+e*v,5)):r.lineTo(w+e*v,y+3),r.stroke();for(r.lineWidth=i.scaleLineWidth,r.strokeStyle=i.scaleLineColor,r.beginPath(),r.moveTo(w,y+5),r.lineTo(w,5),r.stroke(),r.textAlign="right",r.textBaseline="middle",e=0;g.steps>e;e++)r.beginPath(),r.moveTo(w-3,y-(e+1)*p),i.scaleShowGridLines?(r.lineWidth=i.scaleGridLineWidth,r.strokeStyle=i.scaleGridLineColor,r.lineTo(w+b+5,y-(e+1)*p)):r.lineTo(w-.5,y-(e+1)*p),r.stroke(),i.scaleShowLabels&&r.fillText(g.labels[e],w-8,y-(e+1)*p)},function(a){function n(n,o){return y-a*e(t.datasets[n].data[o],g,p)}for(var o=0;t.datasets.length>o;o++){r.strokeStyle=t.datasets[o].strokeColor,r.lineWidth=i.datasetStrokeWidth,r.beginPath(),r.moveTo(w,y-a*e(t.datasets[o].data[0],g,p));for(var l=1;t.datasets[o].data.length>l;l++)i.bezierCurve?r.bezierCurveTo(w+v*(l-.5),n(o,l-1),w+v*(l-.5),n(o,l),w+v*l,n(o,l)):r.lineTo(w+v*l,n(o,l));if(r.stroke(),i.datasetFill?(r.lineTo(w+v*(t.datasets[o].data.length-1),y),r.lineTo(w,y),r.closePath(),r.fillStyle=t.datasets[o].fillColor,r.fill()):r.closePath(),i.pointDot)for(r.fillStyle=t.datasets[o].pointColor,r.strokeStyle=t.datasets[o].pointStrokeColor,r.lineWidth=i.pointDotStrokeWidth,l=0;t.datasets[o].data.length>l;l++)r.beginPath(),r.arc(w+v*l,y-a*e(t.datasets[o].data[l],g,p),i.pointDotRadius,0,2*Math.PI,!0),r.fill(),r.stroke()}},r)},v=function(t,i,r){var l,s,c,d,f,p,g,m,v,S,b,w,y,k,x=0;for(f=h,r.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily,S=1,d=0;t.labels.length>d;d++)l=r.measureText(t.labels[d]).width,S=l>S?l:S;for(S>u/t.labels.length?(x=45,u/t.labels.length<Math.cos(x)*S?(x=90,f-=S):f-=Math.sin(x)*S):f-=i.scaleFontSize,d=i.scaleFontSize,f=f-5-d,l=Number.MIN_VALUE,s=Number.MAX_VALUE,c=0;t.datasets.length>c;c++)for(m=0;t.datasets[c].data.length>m;m++)t.datasets[c].data[m]>l&&(l=t.datasets[c].data[m]),s>t.datasets[c].data[m]&&(s=t.datasets[c].data[m]);if(c=Math.floor(f/(.66*d)),d=Math.floor(.5*(f/d)),m=i.scaleShowLabels?i.scaleLabel:"",i.scaleOverride?(g={steps:i.scaleSteps,stepValue:i.scaleStepWidth,graphMin:i.scaleStartValue,labels:[]},o(m,g.labels,g.steps,i.scaleStartValue,i.scaleStepWidth)):g=n(f,c,d,l,s,m),p=Math.floor(f/g.steps),d=1,i.scaleShowLabels){for(r.font=i.scaleFontStyle+" "+i.scaleFontSize+"px "+i.scaleFontFamily,l=0;g.labels.length>l;l++)s=r.measureText(g.labels[l]).width,d=s>d?s:d;d+=10}b=u-d-S,v=Math.floor(b/t.labels.length),k=(v-2*i.scaleGridLineWidth-2*i.barValueSpacing-(i.barDatasetSpacing*t.datasets.length-1)-(i.barStrokeWidth/2*t.datasets.length-1))/t.datasets.length,w=u-S/2-b,y=f+i.scaleFontSize/2,a(i,function(){r.lineWidth=i.scaleLineWidth,r.strokeStyle=i.scaleLineColor,r.beginPath(),r.moveTo(u-S/2+5,y),r.lineTo(u-S/2-b-5,y),r.stroke(),x>0?(r.save(),r.textAlign="right"):r.textAlign="center",r.fillStyle=i.scaleFontColor;for(var e=0;t.labels.length>e;e++)r.save(),x>0?(r.translate(w+e*v,y+i.scaleFontSize),r.rotate(-(x*(Math.PI/180))),r.fillText(t.labels[e],0,0),r.restore()):r.fillText(t.labels[e],w+e*v+v/2,y+i.scaleFontSize+3),r.beginPath(),r.moveTo(w+(e+1)*v,y+3),r.lineWidth=i.scaleGridLineWidth,r.strokeStyle=i.scaleGridLineColor,r.lineTo(w+(e+1)*v,5),r.stroke();for(r.lineWidth=i.scaleLineWidth,r.strokeStyle=i.scaleLineColor,r.beginPath(),r.moveTo(w,y+5),r.lineTo(w,5),r.stroke(),r.textAlign="right",r.textBaseline="middle",e=0;g.steps>e;e++)r.beginPath(),r.moveTo(w-3,y-(e+1)*p),i.scaleShowGridLines?(r.lineWidth=i.scaleGridLineWidth,r.strokeStyle=i.scaleGridLineColor,r.lineTo(w+b+5,y-(e+1)*p)):r.lineTo(w-.5,y-(e+1)*p),r.stroke(),i.scaleShowLabels&&r.fillText(g.labels[e],w-8,y-(e+1)*p)
},function(a){r.lineWidth=i.barStrokeWidth;for(var n=0;t.datasets.length>n;n++){r.fillStyle=t.datasets[n].fillColor,r.strokeStyle=t.datasets[n].strokeColor;for(var o=0;t.datasets[n].data.length>o;o++){var l=w+i.barValueSpacing+v*o+k*n+i.barDatasetSpacing*n+i.barStrokeWidth*n;r.beginPath(),r.moveTo(l,y),r.lineTo(l,y-a*e(t.datasets[n].data[o],g,p)+i.barStrokeWidth/2),r.lineTo(l+k,y-a*e(t.datasets[n].data[o],g,p)+i.barStrokeWidth/2),r.lineTo(l+k,y),i.barShowStroke&&r.stroke(),r.closePath(),r.fill()}}},r)},S=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},b={}};if(void 0===unmark)var unmark={};void 0===unmark.graph&&(unmark.graph={}),function(){unmark.createGraph=function(t,e,a,n,o,i,r,l,s,c){var u,h;lineChartElement=document.getElementById("unmark-graph").getContext("2d"),u={labels:["4 Days Ago","3 Days Ago","2 Days Ago","Yesterday","Today"],datasets:[{strokeColor:"#DCDCDC",pointColor:"#C1C1C1",pointStrokeColor:"#fff",data:[t,e,a,n,o]},{strokeColor:"#B8B7B7",pointColor:"#777777",pointStrokeColor:"#fff",data:[i,r,l,s,c]}]},h={scaleShowLabels:!1,scaleShowGridLines:!1,datasetFill:!1,bezierCurve:!1,scaleLineColor:"transparent",scaleFontColor:"transparent"},new Chart(lineChartElement).Line(u,h)}}(window.jQuery),function(t){"use strict";t.fn.fitVids=function(e){var a={customSelector:null};if(!document.getElementById("fit-vids-style")){var n=document.createElement("div"),o=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],i="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";n.className="fit-vids-style",n.id="fit-vids-style",n.style.display="none",n.innerHTML=i,o.parentNode.insertBefore(n,o)}return e&&t.extend(a,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];a.customSelector&&e.push(a.customSelector);var n=t(this).find(e.join(","));n=n.not("object object"),n.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var a="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),n=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),o=a/n;if(!e.attr("id")){var i="fitvid"+Math.floor(999999*Math.random());e.attr("id",i)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);