(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{422:function(n,t,r){"use strict";function i(n){return"/"===n.charAt(0)}function o(n,t){for(var r=t,i=r+1,o=n.length;i<o;r+=1,i+=1)n[r]=n[i];n.pop()}t.a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=n&&n.split("/")||[],e=t&&t.split("/")||[],a=n&&i(n),f=t&&i(t),s=a||f;if(n&&i(n)?e=r:r.length&&(e.pop(),e=e.concat(r)),!e.length)return"/";var u=void 0;if(e.length){var h=e[e.length-1];u="."===h||".."===h||""===h}else u=!1;for(var p=0,c=e.length;c>=0;c--){var l=e[c];"."===l?o(e,c):".."===l?(o(e,c),p++):p&&(o(e,c),p--)}if(!s)for(;p--;p)e.unshift("..");!s||""===e[0]||e[0]&&i(e[0])||e.unshift("");var v=e.join("/");return u&&"/"!==v.substr(-1)&&(v+="/"),v}}}]);