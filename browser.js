// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.sqrt,r=Math.floor,t={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};return function(f){var n,i;if(r(f)!==f)return!1;if(f<=3)return f>1;if(f>9007199254740991||f%2==0)return!1;if(f<9)return!0;if(f%3==0)return!1;if(f%5==0)return!1;if(f%7==0)return!1;if(t[f])return!0;for(n=r(e(f)),i=11;i<=n;i+=210)if(f%i==0||f%(i+2)==0||f%(i+6)==0||f%(i+8)==0||f%(i+12)==0||f%(i+18)==0||f%(i+20)==0||f%(i+26)==0||f%(i+30)==0||f%(i+32)==0||f%(i+36)==0||f%(i+42)==0||f%(i+48)==0||f%(i+50)==0||f%(i+56)==0||f%(i+60)==0||f%(i+62)==0||f%(i+68)==0||f%(i+72)==0||f%(i+78)==0||f%(i+86)==0||f%(i+90)==0||f%(i+92)==0||f%(i+96)==0||f%(i+98)==0||f%(i+102)==0||f%(i+110)==0||f%(i+116)==0||f%(i+120)==0||f%(i+126)==0||f%(i+128)==0||f%(i+132)==0||f%(i+138)==0||f%(i+140)==0||f%(i+146)==0||f%(i+152)==0||f%(i+156)==0||f%(i+158)==0||f%(i+162)==0||f%(i+168)==0||f%(i+170)==0||f%(i+176)==0||f%(i+180)==0||f%(i+182)==0||f%(i+186)==0||f%(i+188)==0||f%(i+198)==0||f%(i+200)==0)return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isPrime=r();
//# sourceMappingURL=browser.js.map
