// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt,t=Math.floor,f={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};function e(e){var n,u;if(t(e)!==e)return!1;if(e<=3)return e>1;if(e>9007199254740991||e%2==0)return!1;if(e<9)return!0;if(e%3==0)return!1;if(e%5==0)return!1;if(e%7==0)return!1;if(f[e])return!0;for(n=t(r(e)),u=11;u<=n;u+=210)if(e%u==0||e%(u+2)==0||e%(u+6)==0||e%(u+8)==0||e%(u+12)==0||e%(u+18)==0||e%(u+20)==0||e%(u+26)==0||e%(u+30)==0||e%(u+32)==0||e%(u+36)==0||e%(u+42)==0||e%(u+48)==0||e%(u+50)==0||e%(u+56)==0||e%(u+60)==0||e%(u+62)==0||e%(u+68)==0||e%(u+72)==0||e%(u+78)==0||e%(u+86)==0||e%(u+90)==0||e%(u+92)==0||e%(u+96)==0||e%(u+98)==0||e%(u+102)==0||e%(u+110)==0||e%(u+116)==0||e%(u+120)==0||e%(u+126)==0||e%(u+128)==0||e%(u+132)==0||e%(u+138)==0||e%(u+140)==0||e%(u+146)==0||e%(u+152)==0||e%(u+156)==0||e%(u+158)==0||e%(u+162)==0||e%(u+168)==0||e%(u+170)==0||e%(u+176)==0||e%(u+180)==0||e%(u+182)==0||e%(u+186)==0||e%(u+188)==0||e%(u+198)==0||e%(u+200)==0)return!1;return!0}export{e as default};
//# sourceMappingURL=mod.js.map
