(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{8045:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}var u=w(n(7294)),f=w(n(5443)),s=n(6978),l=n(5809),d=n(7190);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){return t&&t.__esModule?t:{default:t}}function y(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var p=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=new URL("".concat(e).concat(E(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,o=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(i).concat(E(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(E(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(t){return void 0!==t.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||l.imageConfigDefault,b=v.deviceSizes,S=v.imageSizes,_=v.loader,j=v.path,O=(v.domains,a(b).concat(a(S)));function I(t){var e=t.src,n=t.unoptimized,r=t.layout,o=t.width,i=t.quality,c=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var f=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,i=[];r=o.exec(n);r)i.push(parseInt(r[2]));if(i.length){var c,u=.01*(c=Math).min.apply(c,a(i));return{widths:O.filter((function(t){return t>=b[0]*u})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:b,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return O.find((function(e){return e>=t}))||O[O.length-1]})))),kind:"x"}}(o,r,c),s=f.widths,l=f.kind,d=s.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:s.map((function(t,n){return"".concat(u({src:e,quality:i,width:t})," ").concat("w"===l?t:n+1).concat(l)})).join(", "),src:u({src:e,quality:i,width:s[d]})}}function k(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e=h.get(_);if(e)return e(y({root:j},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(_))}function E(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,e){return t-e})),O.sort((function(t,e){return t-e}))},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(t,e,n){t.exports=n(5443)},5675:function(t,e,n){n(8045)}}]);