import{fU as t,fV as e,a5 as s,q as a,s as i,T as o,S as n,u as r,aI as l,a4 as u,ah as p,fS as h,fW as c,bl as f,aJ as g,bD as m,aq as d,dn as S,a6 as b,fX as y,x as C,ao as w}from"./detailed_results-CYy0djv4.chunk.js";import{t as v,a as P}from"./index-CxS5KVR3.chunk.js";import{ag as E,b as M,al as R,am as x}from"./preset_utils-DFpbc2HQ.chunk.js";const I=t=>({min:t}),T=(t,e,s)=>t.matrix[Math.imul(e,t.width)+s],N=(t,e,s,a)=>{t.matrix[Math.imul(e,t.width)+s]=a},V=t=>"function"==typeof t[Symbol.iterator]?t:Object.entries(t),k=t=>!0===t||(!1===t?new Set:t instanceof Set?t:new Set(t)),z=(t,e)=>{const s=Math.round(1/e);return Math.round((t+Number.EPSILON)*s)/s},U=(t,e,s)=>{const a=T(t,e,s),i=t.variableAtPosition[t.width+e],o=t.variableAtPosition[s];t.variableAtPosition[t.width+e]=o,t.variableAtPosition[s]=i,t.positionOfVariable[i]=s,t.positionOfVariable[o]=t.width+e;const n=[];for(let r=0;r<t.width;r++){const s=T(t,e,r);Math.abs(s)>1e-16?(N(t,e,r,s/a),n.push(r)):N(t,e,r,0)}N(t,e,s,1/a);for(let r=0;r<t.height;r++){if(r===e)continue;const i=T(t,r,s);if(Math.abs(i)>1e-16){for(let s=0;s<n.length;s++){const a=n[s];N(t,r,a,T(t,r,a)-i*T(t,e,a))}N(t,r,s,-i/a)}}},A=(t,e,s,a)=>{t.push([e.variableAtPosition[e.width+s],e.variableAtPosition[a]]);for(let i=6;i<=Math.trunc(t.length/2);i++){let e=!0;for(let s=0;s<i;s++){const a=t.length-1-s,[o,n]=t[a],[r,l]=t[a-i];if(o!==r||n!==l){e=!1;break}}if(e)return!0}return!1},D=(t,e)=>{const s=[],{precision:a,maxPivots:i,checkCycles:o}=e;for(let n=0;n<i;n++){let e=0,i=a;for(let s=1;s<t.width;s++){const a=T(t,0,s);a>i&&(i=a,e=s)}if(0===e)return["optimal",z(T(t,0,0),a)];let n=0,r=1/0;for(let s=1;s<t.height;s++){const i=T(t,s,e);if(i<=a)continue;const o=T(t,s,0)/i;if(o<r&&(n=s,r=o,o<=a))break}if(0===n)return["unbounded",e];if(o&&A(s,t,n,e))return["cycled",NaN];U(t,n,e)}return["cycled",NaN]},O=(t,e)=>{const s=[],{precision:a,maxPivots:i,checkCycles:o}=e;for(let n=0;n<i;n++){let i=0,n=-a;for(let e=1;e<t.height;e++){const s=T(t,e,0);s<n&&(n=s,i=e)}if(0===i)return D(t,e);let r=0,l=-1/0;for(let e=1;e<t.width;e++){const s=T(t,i,e);if(s<-a){const a=-T(t,0,e)/s;a>l&&(l=a,r=e)}}if(0===r)return["infeasible",NaN];if(o&&A(s,t,i,r))return["cycled",NaN];U(t,i,r)}return["cycled",NaN]};var q,F={exports:{}};q=F,function(){var t,e,s,a,i,o,n,r,l,u,p,h,c,f,g;s=Math.floor,u=Math.min,e=function(t,e){return t<e?-1:t>e?1:0},l=function(t,a,i,o,n){var r;if(null==i&&(i=0),null==n&&(n=e),i<0)throw new Error("lo must be non-negative");for(null==o&&(o=t.length);i<o;)n(a,t[r=s((i+o)/2)])<0?o=r:i=r+1;return[].splice.apply(t,[i,i-i].concat(a)),a},o=function(t,s,a){return null==a&&(a=e),t.push(s),f(t,0,t.length-1,a)},i=function(t,s){var a,i;return null==s&&(s=e),a=t.pop(),t.length?(i=t[0],t[0]=a,g(t,0,s)):i=a,i},r=function(t,s,a){var i;return null==a&&(a=e),i=t[0],t[0]=s,g(t,0,a),i},n=function(t,s,a){var i;return null==a&&(a=e),t.length&&a(t[0],s)<0&&(s=(i=[t[0],s])[0],t[0]=i[1],g(t,0,a)),s},a=function(t,a){var i,o,n,r,l,u;for(null==a&&(a=e),l=[],o=0,n=(r=function(){u=[];for(var e=0,a=s(t.length/2);0<=a?e<a:e>a;0<=a?e++:e--)u.push(e);return u}.apply(this).reverse()).length;o<n;o++)i=r[o],l.push(g(t,i,a));return l},c=function(t,s,a){var i;if(null==a&&(a=e),-1!==(i=t.indexOf(s)))return f(t,0,i,a),g(t,i,a)},p=function(t,s,i){var o,r,l,u,p;if(null==i&&(i=e),!(r=t.slice(0,s)).length)return r;for(a(r,i),l=0,u=(p=t.slice(s)).length;l<u;l++)o=p[l],n(r,o,i);return r.sort(i).reverse()},h=function(t,s,o){var n,r,p,h,c,f,g,m,d;if(null==o&&(o=e),10*s<=t.length){if(!(p=t.slice(0,s).sort(o)).length)return p;for(r=p[p.length-1],h=0,f=(g=t.slice(s)).length;h<f;h++)o(n=g[h],r)<0&&(l(p,n,0,null,o),p.pop(),r=p[p.length-1]);return p}for(a(t,o),d=[],c=0,m=u(s,t.length);0<=m?c<m:c>m;0<=m?++c:--c)d.push(i(t,o));return d},f=function(t,s,a,i){var o,n,r;for(null==i&&(i=e),o=t[a];a>s&&i(o,n=t[r=a-1>>1])<0;)t[a]=n,a=r;return t[a]=o},g=function(t,s,a){var i,o,n,r,l;for(null==a&&(a=e),o=t.length,l=s,n=t[s],i=2*s+1;i<o;)(r=i+1)<o&&!(a(t[i],t[r])<0)&&(i=r),t[s]=t[i],i=2*(s=i)+1;return t[s]=n,f(t,l,s,a)},t=function(){function t(t){this.cmp=null!=t?t:e,this.nodes=[]}return t.push=o,t.pop=i,t.replace=r,t.pushpop=n,t.heapify=a,t.updateItem=c,t.nlargest=p,t.nsmallest=h,t.prototype.push=function(t){return o(this.nodes,t,this.cmp)},t.prototype.pop=function(){return i(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return r(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return n(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return a(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return c(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return(e=new t).nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),q.exports=t}.call(t);const W=e(F.exports),B=(t,e)=>({matrix:new Float64Array(t),positionOfVariable:new Int32Array(e),variableAtPosition:new Int32Array(e)}),H=(t,{matrix:e,positionOfVariable:s,variableAtPosition:a},i)=>{const{width:o,height:n}=t;e.set(t.matrix);for(let l=0;l<i.length;l++){const[s,a,r]=i[l],u=(n+l)*o,p=t.positionOfVariable[a];if(p<o)e[u]=s*r,e.fill(0,u+1,u+o),e[u+p]=s;else{const t=(p-o)*o;e[u]=s*(r-e[t]);for(let a=1;a<o;a++)e[u+a]=-s*e[t+a]}}s.set(t.positionOfVariable),a.set(t.variableAtPosition);const r=o+n+i.length;for(let l=o+n;l<r;l++)s[l]=l,a[l]=l;return{matrix:e.subarray(0,t.matrix.length+o*i.length),width:o,height:n+i.length,positionOfVariable:s.subarray(0,r),variableAtPosition:a.subarray(0,r)}},_=(t,e)=>{let s=0,a=0,i=0;for(let o=0;o<e.length;o++){const n=e[o],r=t.positionOfVariable[n]-t.width;if(r<0)continue;const l=T(t,r,0),u=Math.abs(l-Math.round(l));u>s&&(s=u,a=n,i=l)}return[a,i,s]},G=({tableau:t,sign:e,variables:s},a,i,{precision:o,includeZeroVariables:n})=>{if("optimal"===a||"timedout"===a&&!Number.isNaN(i)){const r=[];for(let e=0;e<s.length;e++){const[a]=s[e],i=t.positionOfVariable[e+1]-t.width,l=i>=0?T(t,i,0):0;l>o?r.push([a,z(l,o)]):n&&r.push([a,0])}return{status:a,result:-e*i,variables:r}}if("unbounded"===a){const a=t.variableAtPosition[i]-1;return{status:"unbounded",result:e*(1/0),variables:0<=a&&a<s.length?[[s[a][0],1/0]]:[]}}return{status:a,result:NaN,variables:[]}},L={precision:1e-8,checkCycles:!1,maxPivots:8192,tolerance:0,timeout:1/0,maxIterations:32768,includeZeroVariables:!1},$=(t,e)=>{const s=(t=>{const{direction:e,objective:s,integers:a,binaries:i}=t,o="minimize"===e?-1:1,n=V(t.constraints),r=V(t.variables),l=Array.isArray(r)?r:Array.from(r),u=[],p=[];if(null!=a||null!=i){const t=k(i),e=!0===t||k(a);for(let s=1;s<=l.length;s++){const[a]=l[s-1];!0===t||t.has(a)?(u.push(s),p.push(s)):(!0===e||e.has(a))&&p.push(s)}}const h=new Map;for(const[C,w]of n){const t=h.get(C)??{row:NaN,lower:-1/0,upper:1/0};t.lower=Math.max(t.lower,w.equal??w.min??-1/0),t.upper=Math.min(t.upper,w.equal??w.max??1/0),h.has(C)||h.set(C,t)}let c=1;for(const C of h.values())C.row=c,c+=(Number.isFinite(C.lower)?1:0)+(Number.isFinite(C.upper)?1:0);const f=l.length+1,g=c+u.length,m=f+g,d=new Float64Array(f*g),S=new Int32Array(m),b=new Int32Array(m),y={matrix:d,width:f,height:g,positionOfVariable:S,variableAtPosition:b};for(let C=0;C<m;C++)S[C]=C,b[C]=C;for(let C=1;C<f;C++)for(const[t,e]of V(l[C-1][1])){t===s&&N(y,0,C,o*e);const a=h.get(t);null!=a&&(Number.isFinite(a.upper)?(N(y,a.row,C,e),Number.isFinite(a.lower)&&N(y,a.row+1,C,-e)):Number.isFinite(a.lower)&&N(y,a.row,C,-e))}for(const C of h.values())Number.isFinite(C.upper)?(N(y,C.row,0,C.upper),Number.isFinite(C.lower)&&N(y,C.row+1,0,-C.lower)):Number.isFinite(C.lower)&&N(y,C.row,0,-C.lower);for(let C=0;C<u.length;C++){const t=c+C;N(y,t,0,1),N(y,t,u[C],1)}return{tableau:y,sign:o,variables:l,integers:p}})(t),a={...L,...e},[i,o]=O(s.tableau,a);if(0===s.integers.length||"optimal"!==i)return G(s,i,o,a);{const[t,e,i]=((t,e,s)=>{const{tableau:a,sign:i,integers:o}=t,{precision:n,maxIterations:r,tolerance:l,timeout:u}=s,[p,h,c]=_(a,o);if(c<=n)return[t,"optimal",e];const f=new W(((t,e)=>t[0]-e[0]));f.push([e,[[-1,p,Math.ceil(h)]]]),f.push([e,[[1,p,Math.floor(h)]]]);const g=2*o.length,m=a.matrix.length+g*a.width,d=a.positionOfVariable.length+g;let S=B(m,d),b=B(m,d);const y=e*(1-i*l),C=u+Date.now();let w=Date.now()>=C,v=!1,P=1/0,E=a,M=0;for(;M<r&&!f.empty()&&P>=y&&!w;){const[t,e]=f.pop();if(t>P)break;const i=H(a,S,e),[r,l]=O(i,s);if("optimal"===r&&l<P){const[t,s,a]=_(i,o);if(a<=n){v=!0,P=l,E=i;const t=b;b=S,S=t}else{const a=[],i=[];for(let s=0;s<e.length;s++){const o=e[s],[n,r]=o;r===t?n<0?i.push(o):a.push(o):(a.push(o),i.push(o))}i.push([1,t,Math.floor(s)]),a.push([-1,t,Math.ceil(s)]),f.push([l,a]),f.push([l,i])}}w=Date.now()>=C,M++}const R=(w||M>=r)&&!f.empty()&&P>=y?"timedout":v?"optimal":"infeasible";return[{...t,tableau:E},R,v?P:NaN]})(s,o,a);return G(t,e,i,a)}},j=[s.StatHitRating,s.StatCritRating,s.StatHasteRating,s.StatExpertiseRating,s.StatMasteryRating,s.StatDodgeRating,s.StatParryRating],Y={[s.StatMasteryRating]:()=>a(i,null,"Rating: ",a("strong",null,"excluding")," your base mastery",a("br",null),"%: ",a("strong",null,"including")," your base mastery"),[s.StatHasteRating]:()=>a(i,null,"Rating: final rating ",a("strong",null,"including")," all buffs/gear.",a("br",null),"%: final percentage value ",a("strong",null,"including")," all buffs/gear.")};class Z{constructor(t,e){this.statTooltips={},this.additionalSoftCapTooltipInformation={},this.freezeItemSlotsChangeEmitter=new o,this.freezeItemSlots=!1,this.frozenItemSlots=new Map,this.simUI=t,this.player=t.player,this.playerClass=this.player.getClass(),this.isExperimental=e?.experimental,this.isHybridCaster=[n.SpecBalanceDruid,n.SpecShadowPriest,n.SpecElementalShaman].includes(this.player.getSpec()),this.sim=t.sim,this.defaults=t.individualConfig.defaults,this.getEPDefaults=e?.getEPDefaults,this.updateSoftCaps=e?.updateSoftCaps,this.updateGearStatsModifier=e?.updateGearStatsModifier,this._softCapsConfig=this.defaults.softCapBreakpoints||[],this.statTooltips={...Y,...e?.statTooltips},this.additionalSoftCapTooltipInformation={...e?.additionalSoftCapTooltipInformation},this.statSelectionPresets=e?.statSelectionPresets,this._statCaps=this.statCaps;const s={label:"Suggest Reforges",cssClass:"suggest-reforges-action-button flex-grow-1",onClick:async({currentTarget:t})=>{const e=t;e&&(e.classList.add("loading"),e.disabled=!0);try{performance.mark("reforge-optimization-start"),await this.optimizeReforges(),new x({variant:"success",body:"Reforge optimization complete!"})}catch{new x({variant:"error",body:"Reforge optimization failed. Please try again, or report the issue if it persists."})}finally{performance.mark("reforge-optimization-end"),e&&(e.classList.remove("loading"),e.disabled=!1)}}},l={cssClass:"suggest-reforges-button-settings",children:a(i,null,a("i",{className:"fas fa-cog"}))},{group:u,children:[p,h]}=t.addActionGroup([s,l],{cssClass:r("suggest-reforges-settings-group d-flex",this.isExperimental&&!this.player.sim.getShowExperimental()&&"hide")});this.bindToggleExperimental(u),this.softCapsConfig?.length&&v(p,{theme:"suggest-reforges-softcaps",placement:"bottom",maxWidth:310,interactive:!0,onShow:t=>t.setContent(this.buildReforgeButtonTooltip())}),v(h,{placement:"bottom",content:"Change Reforge Optimizer settings"}),this.buildContextMenu(h)}bindToggleExperimental(t){const e=()=>t.classList[this.isExperimental&&!this.player.sim.getShowExperimental()?"add":"remove"]("hide");e(),this.player.sim.showExperimentalChangeEmitter.on((()=>{e()}))}get softCapsConfig(){return this.updateSoftCaps?.(l.cloneSoftCaps(this._softCapsConfig))||this._softCapsConfig}get statCaps(){return this.sim.getUseCustomEPValues()?this.player.getStatCaps():this.defaults.statCaps||new u}setStatCap(t,e){return this._statCaps=this._statCaps.withUnitStat(t,e),this.sim.getUseCustomEPValues()&&this.player.setStatCaps(o.nextEventID(),this._statCaps),this.statCaps}setDefaultStatCaps(){return this._statCaps=this.defaults.statCaps||new u,this.player.setStatCaps(o.nextEventID(),this._statCaps),this.statCaps}get preCapEPs(){let t=this.sim.getUseCustomEPValues()?this.player.getEpWeights():this.getEPDefaults?.(this.player)||this.defaults.epWeights;return this.isHybridCaster&&(t=t.withStat(s.StatSpirit,.01)),t}static checkWeights(t,e,a){let i=t;for(const o of[s.StatHitRating,s.StatCritRating,s.StatHasteRating]){const s=p.getChildren(o);if(s.map((e=>t.getPseudoStat(e))).some((t=>0!==t)))i=i.withStat(o,0);else for(const n of s)if(h(n,e,a)){const e=p.fromPseudoStat(n).convertPercentToRating(t.getStat(o));i=i.withPseudoStat(n,e),i=i.withStat(o,0);break}}return i}buildReforgeButtonTooltip(){return a(i,null,a("p",null,"The following breakpoints have been implemented for this spec:"),a("table",{className:"w-100"},a("tbody",null,this.softCapsConfig?.map((({unitStat:t,breakpoints:e,capType:o,postCapEPs:n},r)=>a(i,null,a("tr",null,a("th",{colSpan:2},t.getShortName(this.player.getClass())),a("td",{className:"text-end"},c.get(o))),this.additionalSoftCapTooltipInformation[t.getRootStat()]&&a("tr",null,a("td",{colSpan:3},this.additionalSoftCapTooltipInformation[t.getRootStat()]?.())),a("tr",null,a("th",null,a("em",null,"Rating")),a("th",{className:"text-end"},a("em",null,"%")),a("th",{className:"text-end"},a("em",null,"Post cap EP"))),e.map(((e,i)=>a("tr",null,a("td",null,Math.ceil(t.equalsStat(s.StatMasteryRating)?e-this.player.getBaseMastery()*f:t.convertDefaultUnitsToRating(e))),a("td",{className:"text-end"},t.equalsStat(s.StatMasteryRating)?(e/f*this.player.getMasteryPerPointModifier()).toFixed(2):t.convertDefaultUnitsToPercent(e).toFixed(2)),a("td",{className:"text-end"},t.convertEpToRatingScale(o===g.TypeThreshold?n[0]:n[i]).toFixed(2))))),r!==this.softCapsConfig.length-1&&a(i,null,a("tr",null,a("td",{colSpan:3,className:"border-bottom pb-2"})),a("tr",null,a("td",{colSpan:3,className:"pb-2"})))))))))}setFreezeItemSlots(t,e){this.freezeItemSlots!==e&&(this.freezeItemSlots=e,this.frozenItemSlots.clear(),this.freezeItemSlotsChangeEmitter.emit(t))}buildContextMenu(t){const e=v(t,{interactive:!0,trigger:"click",theme:"reforge-optimiser-popover",placement:"right-start",onShow:t=>{const e=new m(null,this.player,{id:"reforge-optimizer-enable-custom-ep-weights",label:"Use custom EP Weights",inline:!0,changedEvent:()=>this.sim.useCustomEPValuesChangeEmitter,getValue:()=>this.sim.getUseCustomEPValues(),setValue:(t,e,s)=>{this.sim.setUseCustomEPValues(t,s)}});let s=null;this.softCapsConfig?.length&&(s=new m(null,this.player,{id:"reforge-optimizer-enable-soft-cap-breakpoints",label:"Use soft cap breakpoints",inline:!0,changedEvent:()=>this.sim.useSoftCapBreakpointsChangeEmitter,getValue:()=>this.sim.getUseSoftCapBreakpoints(),setValue:(t,e,s)=>{this.sim.setUseSoftCapBreakpoints(t,s)}}));const o=new m(null,this.player,{id:"reforge-optimizer-freeze-item-slots",label:"Freeze item slots",labelTooltip:'Flag one or more item slots to be "frozen", which will prevent the optimizer from changing the Reforge in that slot from its current setting. This can be useful for hybrid classes who use the same gear piece for multiple raid roles.',inline:!1,changedEvent:()=>this.freezeItemSlotsChangeEmitter,getValue:()=>this.freezeItemSlots,setValue:(t,e,s)=>{this.setFreezeItemSlots(t,s)}}),n=C();t.setContent(a(i,null,e.rootElem,a("div",{ref:n,className:r("mb-0",this.sim.getUseCustomEPValues()&&"hide")},a("p",null,"This will enable modification of the default EP weights and setting custom stat caps."),a("p",null,"Ep weights can be modified in the Stat Weights editor."),a("p",null,"If you want to hard cap a stat make sure to put the EP for that stat higher.")),this.buildCapsList({useCustomEPValuesInput:e,description:n.value}),s?.rootElem,o.rootElem,this.buildFrozenSlotsInputs(),this.buildEPWeightsToggle({useCustomEPValuesInput:e})))},onHidden:()=>{e.setContent(a(i,null))}})}buildFrozenSlotsInputs(){const t=this.player.getGear().getItemSlots(),e=Math.floor(t.length/2)+1,s=[];for(let a=0;a<e;a++)s.push(t.slice(2*a,2*(a+1)));const i=C();return a("table",{ref:i},s.map((t=>{const e=C();return a("tr",{ref:e},t.map((t=>{const e=new m(null,this.player,{id:"reforge-optimizer-freeze-"+d[t],label:S.get(t),changedEvent:()=>this.freezeItemSlotsChangeEmitter,getValue:()=>this.frozenItemSlots.get(t)||!1,setValue:(e,s,a)=>{this.frozenItemSlots.set(t,a)},showWhen:()=>this.freezeItemSlots});return a("td",null,e.rootElem)})))})))}buildCapsList({useCustomEPValuesInput:t,description:e}){const n={changedEvent:t=>o.onAny([this.sim.useSoftCapBreakpointsChangeEmitter,this.player.statCapsChangeEmitter])},l={float:!0,showZeroes:!1,positive:!0,extraCssClasses:["mb-0"],...n},u=C(),p=C(),h=C(),c=a("table",{ref:u,className:r("reforge-optimizer-stat-cap-table mb-2",!this.sim.getUseCustomEPValues()&&"hide")},a("thead",null,a("tr",null,a("th",{colSpan:3,className:"pb-3"},a("div",{className:"d-flex"},a("h6",{className:"content-block-title mb-0 me-1"},"Edit stat caps"),a("button",{ref:p,className:"d-inline"},a("i",{className:"fa-regular fa-circle-question"})),a("button",{ref:h,className:"d-inline ms-auto",onclick:()=>this.setDefaultStatCaps()},a("i",{className:"fas fa-arrow-rotate-left"}))))),a("tr",null,a("th",null,"Stat"),a("th",{className:"text-end"},"Rating"),a("th",{className:"text-end"},"%"))),a("tbody",null,this.simUI.individualConfig.displayStats.map((e=>{if(!e.hasRootStat())return;const o=e.getRootStat();if(!j.includes(o))return;const r=C(),u=e.getShortName(this.player.getClass()),p=new E(null,this.player,{...l,id:`reforge-optimizer-${u}-rating`,enableWhen:()=>this.isAllowedToOverrideStatCaps||!this.softCapsConfig.some((t=>t.unitStat.equals(e))),getValue:()=>{let t=e.convertDefaultUnitsToRating(this.statCaps.getUnitStat(e));return e.equalsStat(s.StatMasteryRating)&&(t=this.toVisualBaseMasteryRating(t)),t},setValue:(t,a,i)=>{const o=e.equalsStat(s.StatMasteryRating)?i+this.baseMastery:e.convertRatingToDefaultUnits(i);this.setStatCap(e,o)}}),h=new E(null,this.player,{...l,id:`reforge-optimizer-${u}-percentage`,enableWhen:()=>this.isAllowedToOverrideStatCaps||!this.softCapsConfig.some((t=>t.unitStat.equals(e))),getValue:()=>{const t=this.statCaps.getUnitStat(e);let a=e.convertDefaultUnitsToPercent(t);return e.equalsStat(s.StatMasteryRating)&&(a=this.toVisualTotalMasteryPercentage(a,t)),a},setValue:(t,a,i)=>{let o=e.convertPercentToDefaultUnits(i);e.equalsStat(s.StatMasteryRating)&&(o/=this.player.getMasteryPerPointModifier()),this.setStatCap(e,o)}}),c=this.statSelectionPresets?.get(o),f=c?new M(null,this.player,{id:`reforge-optimizer-${u}-presets`,extraCssClasses:["mb-0"],label:"",values:[{name:"Select preset",value:0},...[...c.keys()].map((t=>{const a=c.get(t),i=e.convertRatingToPercent(a);return{name:`${t} - ${(e.equalsStat(s.StatMasteryRating)?i*this.player.getMasteryPerPointModifier():i).toFixed(2)}%`,value:a}}))].sort(((t,e)=>t.value-e.value)),enableWhen:()=>this.isAllowedToOverrideStatCaps||!this.softCapsConfig.some((t=>t.unitStat.equals(e))),getValue:()=>{let t=e.convertDefaultUnitsToRating(this.statCaps.getUnitStat(e));return e.equalsStat(s.StatMasteryRating)&&(t=this.toVisualBaseMasteryRating(t)),t},setValue:(t,a,i)=>{const o=e.equalsStat(s.StatMasteryRating)?i+this.baseMastery:e.convertRatingToDefaultUnits(i);this.setStatCap(e,o)},...n}):null,g=this.statTooltips[o],m=C(),d=a(i,null,a("tr",{ref:r,className:"reforge-optimizer-stat-cap-item"},a("td",null,a("div",{className:"reforge-optimizer-stat-cap-item-label"},u," ",g&&a("button",{ref:m,className:"d-inline"},a("i",{className:"fa-regular fa-circle-question"})))),a("td",null,p.rootElem),a("td",null,h.rootElem)),f&&a("tr",null,a("td",null),a("td",{colSpan:2},f.rootElem))),S=g?v(m.value,{content:g}):null;return t.addOnDisposeCallback((()=>S?.destroy())),d}))));if(p.value){const e=v(p.value,{content:"Stat caps are the maximum amount of a stat that can be gained from Reforging. If a stat exceeds its cap, the optimizer will attempt to reduce it to the cap value."});t.addOnDisposeCallback((()=>e.destroy()))}if(h.value){const e=v(h.value,{content:"Reset to stat cap defaults"});t.addOnDisposeCallback((()=>e.destroy()))}const f=this.sim.useCustomEPValuesChangeEmitter.on((()=>{const t=this.sim.getUseCustomEPValues();u.value?.classList[t?"remove":"add"]("hide"),e?.classList[t?"add":"remove"]("hide")}));return t.addOnDisposeCallback((()=>{c.remove(),f.dispose()})),c}buildEPWeightsToggle({useCustomEPValuesInput:t}){const e=["mt-3"];this.sim.getUseCustomEPValues()||e.push("hide");const s=R(null,this.simUI,{extraCssClasses:e,loadOnly:!0}),o=this.sim.useCustomEPValuesChangeEmitter.on((()=>{const t=this.sim.getUseCustomEPValues();s.rootElem?.classList[t?"remove":"add"]("hide")}));return t.addOnDisposeCallback((()=>{s.dispose(),s.rootElem.remove(),o.dispose()})),a(i,null,s.rootElem,this.simUI.epWeightsModal&&a("button",{className:"btn btn-outline-primary",onclick:()=>{this.simUI.epWeightsModal?.open(),P()}},"Edit weights"))}get isAllowedToOverrideStatCaps(){return!(this.sim.getUseSoftCapBreakpoints()&&this.softCapsConfig)}get processedStatCaps(){let t=this.statCaps;return this.isAllowedToOverrideStatCaps||this.softCapsConfig.forEach((({unitStat:e})=>{t=t.withUnitStat(e,0)})),t}async optimizeReforges(){const t=this.player.getGear().withoutReforges(this.player.canDualWield2H(),this.frozenItemSlots),e=await this.updateGear(t),s=e.computeStatCapsDelta(this.processedStatCaps),a=this.computeReforgeSoftCaps(e),i=Z.checkWeights(this.preCapEPs,s,a),o=this.buildYalpsVariables(t,i),n=this.buildYalpsConstraints(t);await this.solveModel(t,i,s,a,o,n)}async updateGear(t){this.player.setGear(o.nextEventID(),t),await this.sim.updateCharacterStats(o.nextEventID());let e=u.fromProto(this.player.getCurrentStats().finalStats);return e=e.addStat(s.StatMasteryRating,this.player.getBaseMastery()*f),this.updateGearStatsModifier&&(e=this.updateGearStatsModifier(e)),e}computeReforgeSoftCaps(t){const e=[];return this.isAllowedToOverrideStatCaps||this.softCapsConfig.slice().forEach((s=>{let a=s.postCapEPs.slice();const i=[];for(const e of s.breakpoints)i.push(t.computeGapToCap(s.unitStat,e));s.capType==g.TypeThreshold&&(i.reverse(),a=Array(i.length).fill(a[0])),e.push(new l(s.unitStat,i,s.capType,a))})),e}buildYalpsVariables(t,e){const s=new Map,a=this.simUI.individualConfig.epStats;for(const i of t.getItemSlots()){const o=t.getEquippedItem(i);if(o&&!this.frozenItemSlots.get(i))for(const t of this.player.getAvailableReforgings(o)){if(!a.includes(t.toStat))continue;const o=`${i}_${t.id}`,n=new Map;n.set(d[i],1),this.applyReforgeStat(n,t.fromStat,t.fromAmount,e),this.applyReforgeStat(n,t.toStat,t.toAmount,e),s.set(o,n)}}return s}applyReforgeStat(t,e,a,i){if(e==s.StatSpirit&&this.isHybridCaster){let e=a/w;switch(this.player.getSpec()){case n.SpecBalanceDruid:e*=.5*this.player.getTalents().balanceOfPower;break;case n.SpecShadowPriest:e*=.5*this.player.getTalents().twistedFaith;break;case n.SpecElementalShaman:e*=[0,.33,.66,1][this.player.getTalents().elementalPrecision]}this.setPseudoStatCoefficient(t,b.PseudoStatSpellHitPercent,e)}if(0==i.getStat(e))for(const s of p.getChildren(e))0!=i.getPseudoStat(s)&&this.setPseudoStatCoefficient(t,s,p.fromPseudoStat(s).convertRatingToPercent(a));else t.set(s[e],a)}setPseudoStatCoefficient(t,e,s){const a=t.get(b[e])||0;t.set(b[e],a+s)}buildYalpsConstraints(t){const e=new Map;for(const s of t.getItemSlots())e.set(d[s],{max:1});return e}async solveModel(t,e,s,a,i,o){const n=this.updateReforgeScores(i,e),r=$({direction:"maximize",objective:"score",constraints:o,variables:n,binaries:!0},{timeout:6e4,maxIterations:1/0,tolerance:.01}),l=await this.applyLPSolution(t,r),[u,p,h]=this.checkCaps(r,s,a,n,o,e);u&&(await y(100),await this.solveModel(l,h,s,a,n,p))}updateReforgeScores(t,e){const a=new Map;for(const[i,o]of t.entries()){let t=0;const n=new Map;for(const[a,i]of o.entries())if(n.set(a,i),a.includes("PseudoStat")){const s=b[a];t+=e.getPseudoStat(s)*i}else if(a.includes("Stat")){const o=s[a];t+=e.getStat(o)*i}n.set("score",t),a.set(i,n)}return a}async applyLPSolution(t,e){let s=t.withoutReforges(this.player.canDualWield2H(),this.frozenItemSlots);for(const[a,i]of e.variables){const e=a.split("_"),i=parseInt(e[0]),o=parseInt(e[1]),n=t.getEquippedItem(i);n&&(s=s.withEquippedItem(i,n.withReforge(this.sim.db.getReforgeById(o)),this.player.canDualWield2H()))}return await this.updateGear(s),s}checkCaps(t,e,a,i,o,n){let r=new u;for(const[u,c]of t.variables)for(const[t,e]of i.get(u).entries())if(t.includes("PseudoStat")){const s=b[t];r=r.addPseudoStat(s,e)}else if(t.includes("Stat")){const a=s[t];r=r.addStat(a,e)}let l=!1;const p=new Map(o);let h=n;for(const[s,u]of r.asUnitStatArray()){const t=e.getUnitStat(s),a=s.getKey();0!==t&&u>t&&!o.has(a)&&(p.set(a,I(t)),l=!0,h=h.withUnitStat(s,0))}for(;!l&&a.length>0;){const t=a[0],e=t.unitStat,s=e.getKey(),i=r.getUnitStat(e);let o=0;for(const a of t.breakpoints){if(i>a){p.set(s,I(a)),h=h.withUnitStat(e,t.postCapEPs[o]),l=!0;break}o++}t.capType==g.TypeSoftCap&&(t.breakpoints=t.breakpoints.slice(o+1),t.postCapEPs=t.postCapEPs.slice(o+1)),t.capType!=g.TypeThreshold&&0!=t.breakpoints.length||a.shift()}return[l,p,h]}get baseMastery(){return this.player.getBaseMastery()*f}toVisualTotalMasteryPercentage(t,e){return e-this.baseMastery<=0?t=0:t*=this.player.getMasteryPerPointModifier(),t}toVisualBaseMasteryRating(t){return t<=this.baseMastery?t=0:t-=this.baseMastery,t}}export{Z as R};