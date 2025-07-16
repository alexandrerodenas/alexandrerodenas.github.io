import{l as nl,L as sl,s as cs}from"./index-CxxrrAVy.js";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rl=1e-7,ol=1e-4;class al{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class ur{refCount(t){return ct("refCount")}incRef(t){return ct("incRef")}timerAvailable(){return!0}time(t){return ct("time")}read(t){return ct("read")}readSync(t){return ct("readSync")}readToGPU(t,n){return ct("readToGPU")}numDataIds(){return ct("numDataIds")}disposeData(t,n){return ct("disposeData")}write(t,n,s){return ct("write")}move(t,n,s,r,o){return ct("move")}createTensorFromGPUData(t,n,s){return ct("createTensorFromGPUData")}memory(){return ct("memory")}floatPrecision(){return ct("floatPrecision")}epsilon(){return this.floatPrecision()===32?rl:ol}dispose(){return ct("dispose")}}function ct(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hr(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,nn(e,t,n)}function il(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,nn(e,n,s),nn(t,n,s)}function Ie(e,t,n){return Math.max(e,Math.min(t,n))}function cl(e){return e%2===0?e:e+1}function nn(e,t,n){const s=e[t];e[t]=e[n],e[n]=s}function ll(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function ul(e,t){const n=Math.random();return t*n+(1-n)*e}function hl(e,t){let n=0;for(let s=0;s<e.length;s++){const r=Number(e[s])-Number(t[s]);n+=r*r}return n}function p(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function rt(e,t,n=""){p(It(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function ee(e){p(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function O(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function fl(e){return e.length===0}function fr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function It(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function pe(e){return e%1===0}function dl(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function pl(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function gl(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return hr(t),t}function Se(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function ml(e,t=r=>0,n,s){return new Promise((r,o)=>{let a=0;const i=()=>{if(e()){r();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}s!=null?s(i,c):setTimeout(i,c)};i()})}function bl(e,t){let n=1,s=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const r=e.slice();return r[s]=t/n,r}function Ue(e,t){const n=t.length;return e=e==null?t.map((s,r)=>r):[].concat(e),p(e.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),p(e.every(s=>pe(s)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(s=>s<0?n+s:s)}function dr(e,t){const n=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:Ue(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),s.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),s.push(i))}return{newShape:n,keptDims:s}}function pr(e,t){return ls(e,t)}function ls(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function gr(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function mr(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function wl(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function sn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function br(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Nt(e){return typeof e=="string"||e instanceof String}function wr(e){return typeof e=="boolean"}function yr(e){return typeof e=="number"}function Ge(e){return Array.isArray(e)?Ge(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":yr(e)?"float32":Nt(e)?"string":wr(e)?"bool":"float32"}function Ct(e){return!!(e&&e.constructor&&e.call&&e.apply)}function rn(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function we(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*e[s+1];return n}function $r(e,t,n,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let a=0;a<o;a++)r[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<o;c++)r[c]=$r(e+c*i,a,n,s)}return r}function ce(e,t,n=!1){if(e.length===0)return t[0];const s=e.reduce((r,o)=>r*o)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return $r(0,e,t,n)}function yl(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function us(e,t){const n=pn(e,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function pn(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function $l(e,t){const n=e.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return ce(e,new Float32Array(n));if(t==="int32")return ce(e,new Int32Array(n));if(t==="bool")return ce(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function ut(e){e.forEach(t=>{p(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function kl(e,t,n){if(t===0)return 0;if(t===1)return e[0];let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=n[r]*e[r];return s}function El(e,t,n){if(t===0)return[];if(t===1)return[e];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(e/n[r]),e-=s[r]*n[r];return s[s.length-1]=e,s}function gn(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const js="tfjsflags";class kr{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Sl,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(D().getBool("IS_TEST")||D().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];D().getBool("IS_TEST")||D().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(gn(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);js in t&&t[js].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=vl(r,o)})}}function Sl(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(xl(t,s[0],s[1]),s.join("="))),t}function xl(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function vl(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function D(){return hs}let hs=null;function Il(e){hs=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Mn;function Er(){if(Mn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Mn=e}return Mn}function Tl(){const e=Er();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function fs(e,t){const n=Tl();if(n.has(e))return n.get(e);{const s=t();return n.set(e,s),n.get(e)}}const Sr="Abs",xr="Acos",vr="Acosh",ds="Add",Ir="AddN",Tr="All",_r="Any",Ar="ArgMax",Dr="ArgMin",Mr="Asin",Nr="Asinh",Br="Atan",Rr="Atanh",Fr="Atan2",Cr="AvgPool",_l="AvgPoolGrad",Pr="AvgPool3D",Al="AvgPool3DGrad",Or="BatchMatMul",Lr="BatchToSpaceND",Wr="Bincount",Ur="BitwiseAnd",Dl="BroadcastTo",Gr="BroadcastArgs",ps="Cast",Kr="Ceil",zr="ClipByValue",qr="Complex",Vr="ComplexAbs",Hr="Concat",jr="Conv2D",Xr="Conv2DBackpropFilter",Yr="Conv2DBackpropInput",Jr="Conv3D",Ml="Conv3DBackpropFilterV2",Zr="Conv3DBackpropInputV2",Qr="Cos",to="Cosh",eo="Cumprod",no="Cumsum",so="CropAndResize",ro="DenseBincount",oo="DepthToSpace",ao="DepthwiseConv2dNative",io="DepthwiseConv2dNativeBackpropFilter",co="DepthwiseConv2dNativeBackpropInput",lo="Diag",uo="Dilation2D",Nl="Dilation2DBackpropInput",Bl="Dilation2DBackpropFilter",gs="Draw",ho="RealDiv",fo="Einsum",po="Elu",Rl="EluGrad",go="Erf",mo="Equal",bo="Exp",wo="ExpandDims",yo="Expm1",$o="FFT",ko="Fill",Eo="FlipLeftRight",So="Floor",xo="FloorDiv",vo="FusedBatchNorm",Io="GatherV2",To="GatherNd",_o="Greater",Ao="GreaterEqual",ms="Identity",Do="IFFT",Mo="Imag",No="IsFinite",Bo="IsInf",Ro="IsNan",Fo="LeakyRelu",Co="Less",Po="LessEqual",Oo="LinSpace",Lo="Log",Wo="Log1p",Uo="LogicalAnd",Go="LogicalNot",Ko="LogicalOr",Fl="LogicalXor",Cl="LogSoftmax",Pl="LowerBound",zo="LRN",Ol="LRNGrad",Ll="MatrixBandPart",qo="Max",Vo="Maximum",Ho="MaxPool",Wl="MaxPoolGrad",jo="MaxPool3D",Ul="MaxPool3DGrad",Xo="MaxPoolWithArgmax",Yo="Mean",Jo="Min",Zo="Minimum",Qo="MirrorPad",ta="Mod",ea="Multinomial",na="Multiply",sa="Neg",ra="NotEqual",oa="NonMaxSuppressionV3",aa="NonMaxSuppressionV4",ia="NonMaxSuppressionV5",ca="OnesLike",la="OneHot",ua="Pack",ha="PadV2",Gl="Pool",fa="Pow",da="Prelu",pa="Prod",ga="RaggedGather",ma="RaggedRange",ba="RaggedTensorToTensor",wa="Range",ya="Real",$a="Reciprocal",ka="Relu",Ea="Reshape",Sa="ResizeNearestNeighbor",Kl="ResizeNearestNeighborGrad",xa="ResizeBilinear",zl="ResizeBilinearGrad",va="Relu6",Ia="Reverse",Ta="Round",_a="Rsqrt",Aa="ScatterNd",Da="TensorScatterUpdate",Ma="SearchSorted",Na="Select",Ba="Selu",Ra="Slice",Fa="Sin",Ca="Sinh",Pa="Sign",Oa="Sigmoid",La="Softplus",Wa="Sqrt",Ua="Sum",Ga="SpaceToBatchND",Ka="SplitV",za="Softmax",qa="SparseFillEmptyRows",Va="SparseReshape",Ha="SparseSegmentMean",ja="SparseSegmentSum",Xa="SparseToDense",Ya="SquaredDifference",ql="Square",Ja="StaticRegexReplace",Za="StridedSlice",Qa="StringNGrams",ti="StringSplit",ei="StringToHashBucketFast",ni="Sub",si="Tan",ri="Tanh",bs="Tile",oi="TopK",ai="Transform",Ze="Transpose",ii="Unique",ci="Unpack",li="UnsortedSegmentSum",Vl="UpperBound",ui="ZerosLike",hi="Step",Pn="FromPixels",fi="RotateWithOffset",On="_FusedMatMul",Ln="FusedConv2D",Wn="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dt(...e){D().getBool("IS_TEST")||D().getBool("PROD")||console.warn(...e)}function Hl(...e){D().getBool("IS_TEST")||D().getBool("PROD")||console.log(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ge=fs("kernelRegistry",()=>new Map),Te=fs("gradRegistry",()=>new Map);function _e(e,t){const n=ws(e,t);return ge.get(n)}function Un(e){return Te.get(e)}function on(e){const t=ge.entries(),n=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,a]=r,[i]=o.split("_");i===e&&n.push(a)}return n}function di(e){const{kernelName:t,backendName:n}=e,s=ws(t,n);ge.has(s)&&Dt(`The kernel '${t}' for backend '${n}' is already registered`),ge.set(s,e)}function jl(e){const{kernelName:t}=e;Te.has(t)&&D().getBool("DEBUG")&&Dt(`Overriding the gradient for '${t}'`),Te.set(t,e)}function Xl(e,t){const n=ws(e,t);if(!ge.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);ge.delete(n)}function Yl(e){if(!Te.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);Te.delete(e)}function Jl(e,t){on(e).forEach(s=>{const r=Object.assign({},s,{backendName:t});di(r)})}function ws(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pi(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zt=nl||sl;function Ke(e){return zt.fromString(e,!0,16)}const gi=Ke("c3a5c85c97cb3127"),Kt=Ke("b492b66fbe98f273"),nt=Ke("9ae16a3b2f90404f");function Gn(e){return e.xor(e.shru(47))}function mi(e,t,n){const s=e.slice(t,t+n);return zt.fromBytes(Array.from(s),!0,!0)}function W(e,t){return mi(e,t,8)}function Xs(e,t){return mi(e,t,4)}function J(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Rt(e,t,n=Ke("9ddfea08eb382d69")){let s=e.xor(t).mul(n);s=s.xor(s.shru(47));let r=t.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function Zl(e,t,n,s,r,o){r=r.add(e),o=J(o.add(r).add(s),21);const a=r;return r=r.add(t),r=r.add(n),o=o.add(J(r,44)),[r.add(s),o.add(a)]}function Ye(e,t,n,s){return Zl(W(e,t),W(e,t+8),W(e,t+16),W(e,t+24),n,s)}function Ql(e,t=e.length){if(t>=8){const n=nt.add(t*2),s=W(e,0).add(nt),r=W(e,t-8),o=J(r,37).mul(n).add(s),a=J(s,25).add(r).mul(n);return Rt(o,a,n)}if(t>=4){const n=nt.add(t*2),s=Xs(e,0);return Rt(s.shl(3).add(t),Xs(e,t-4),n)}if(t>0){const n=e[0],s=e[t>>1],r=e[t-1],o=n+(s<<8),a=t+(r<<2);return Gn(nt.mul(o).xor(gi.mul(a))).mul(nt)}return nt}function tu(e,t=e.length){const n=nt.add(t*2),s=W(e,0).mul(Kt),r=W(e,8),o=W(e,t-8).mul(n),a=W(e,t-16).mul(nt);return Rt(J(s.add(r),43).add(J(o,30)).add(a),s.add(J(r.add(nt),18)).add(o),n)}function eu(e,t=e.length){const n=nt.add(t*2),s=W(e,0).mul(nt),r=W(e,8),o=W(e,t-8).mul(n),a=W(e,t-16).mul(nt),i=J(s.add(r),43).add(J(o,30)).add(a),c=Rt(i,s.add(J(r.add(nt),18)).add(o),n),l=W(e,16).mul(n),h=W(e,24),u=i.add(W(e,t-32)).mul(n),d=c.add(W(e,t-24)).mul(n);return Rt(J(l.add(h),43).add(J(u,30)).add(d),l.add(J(h.add(s),18)).add(u),n)}function nu(e,t=e.length){const n=zt.fromNumber(81,!0);if(t<=32)return t<=16?Ql(e,t):tu(e,t);if(t<=64)return eu(e,t);let s=n,r=n.mul(Kt).add(113),o=Gn(r.mul(nt).add(113)).mul(nt),a=[zt.UZERO,zt.UZERO],i=[zt.UZERO,zt.UZERO];s=s.mul(nt).add(W(e,0));let c=0;const l=(t-1>>6)*64,h=l+(t-1&63)-63;do s=J(s.add(r).add(a[0]).add(W(e,c+8)),37).mul(Kt),r=J(r.add(a[1]).add(W(e,c+48)),42).mul(Kt),s=s.xor(i[1]),r=r.add(a[0]).add(W(e,c+40)),o=J(o.add(i[0]),33).mul(Kt),a=Ye(e,c,a[1].mul(Kt),s.add(i[0])),i=Ye(e,c+32,o.add(i[1]),r.add(W(e,c+16))),[o,s]=[s,o],c+=64;while(c!==l);const u=Kt.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),s=J(s.add(r).add(a[0]).add(W(e,c+8)),37).mul(u),r=J(r.add(a[1]).add(W(e,c+48)),42).mul(u),s=s.xor(i[1].mul(9)),r=r.add(a[0].mul(9).add(W(e,c+40))),o=J(o.add(i[0]),33).mul(u),a=Ye(e,c,a[1].mul(u),s.add(i[0])),i=Ye(e,c+32,o.add(i[1]),r.add(W(e,c+16))),[o,s]=[s,o],Rt(Rt(a[0],i[0],u).add(Gn(r).mul(gi)).add(o),Rt(a[1],i[1],u).add(s),u)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function su(e,t){return t==="string"?ze(e):mn([e],t)}function ru(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function mn(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Pt(e)),D().getBool("DEBUG")&&gr(e,t),ru(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let s=0;s<n.length;++s)Math.round(e[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function Ae(){return D().platform.now()}function ou(e,t){return D().platform.fetch(e,t)}function ze(e,t="utf-8"){return t=t||"utf-8",D().platform.encode(e,t)}function an(e,t="utf-8"){return t=t||"utf-8",D().platform.decode(e,t)}function Z(e){return D().platform.isTypedArray!=null?D().platform.isTypedArray(e):pi(e)}function Pt(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||gn(e)||e==null||Z(e)&&n)t.push(e);else if(Array.isArray(e)||Z(e))for(let s=0;s<e.length;++s)Pt(e[s],t,n);else{let s=-1;for(const r of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)Pt(e[r],t,n)}return t}const au=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:It,arraysEqualWithNull:fr,assert:p,assertNonNegativeIntegerDimensions:ut,assertNonNull:ee,assertShapesMatch:rt,bytesFromStringArray:br,bytesPerElement:sn,checkConversionForErrors:gr,clamp:Ie,computeStrides:we,convertBackendValuesAndArrayBuffer:yl,createScalarValue:su,createShuffledIndices:gl,decodeString:an,distSquared:hl,encodeString:ze,fetch:ou,fingerPrint64:nu,flatten:Pt,getArrayFromDType:ls,getTypedArrayFromDType:pr,hasEncodingLoss:wl,hexToLong:Ke,indexToLoc:El,inferDtype:Ge,inferFromImplicitShape:bl,isBoolean:wr,isFunction:Ct,isInt:pe,isNumber:yr,isPromise:gn,isScalarShape:fl,isString:Nt,isTypedArray:Z,isValidDtype:mr,locToIndex:kl,makeOnesTypedArray:us,makeZerosNestedTypedArray:$l,makeZerosTypedArray:pn,nearestDivisor:rn,nearestLargerEven:cl,now:Ae,parseAxisParam:Ue,randUniform:ul,repeatedTry:ml,rightPad:Se,shuffle:hr,shuffleCombo:il,sizeFromShape:O,sizeToSquarishShape:pl,squeezeShape:dr,sum:ll,swap:nn,tanh:dl,toNestedArray:ce,toTypedArray:mn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class iu{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new lu)}profileKernel(t,n,s){let r;const o=()=>{r=s()};let a;const i=Ae();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const l of r)l.dataSync();a=Promise.resolve({kernelMs:Ae()-i})}if(D().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<r.length;l++){const h=r[l];h.data().then(u=>{cu(u,h.dtype,t)})}return{kernelName:t,outputs:r,inputs:n,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:r,inputs:o,extraInfo:a}=t;s.forEach(i=>{Promise.all([i.data(),r,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function cu(e,t,n){if(t!=="float32")return!1;for(let s=0;s<e.length;s++){const r=e[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class lu{logKernelProfile(t,n,s,r,o,a){const i=typeof r=="number"?Se(`${r}ms`,9):r.error,c=Se(t,25),l=n.rank,h=n.size,u=Se(n.shape.toString(),14);let d="";for(const b in o){const w=o[b];if(w!=null){const $=w.shape||n.shape,y=$.length;d+=`${b}: ${y}D ${y>0?$:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${u}	%c${h}	%c${d}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uu(e,t,n){const s={},r={};for(let c=0;c<t.length;c++)s[t[c].id]=!0;for(let c=0;c<e.length;c++){const l=e[c],h=l.inputs;for(const u in h){const d=h[u];let b=!1;for(let w=0;w<t.length;w++)if(s[d.id]){l.outputs.forEach($=>s[$.id]=!0),b=!0,r[l.id]=!0;break}if(b)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const l=e[c],h=l.inputs;for(let u=0;u<l.outputs.length;u++)if(o[l.outputs[u].id]){for(const d in h)o[h[d].id]=!0,a[l.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const l=e[c];if(r[l.id]&&a[l.id]){const h={};for(const d in l.inputs){const b=l.inputs[d];s[b.id]&&(h[d]=b)}const u=Object.assign({},l);u.inputs=h,u.outputs=l.outputs,i.push(u)}}return i}function hu(e,t,n,s){for(let r=t.length-1;r>=0;r--){const o=t[r],a=[];if(o.outputs.forEach(c=>{const l=e[c.id];l!=null?a.push(l):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=n(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const h=o.inputs[c];if(!It(l.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=l;else{const u=e[h.id];e[h.id]=s(u,l),u.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ys=20,$e=3,Nn=7;function fu(e,t,n,s){const r=we(t),o=du(e,t,n,r),a=t.length,i=Qe(e,t,n,r,o),c=["Tensor"];return s&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function du(e,t,n,s){const r=O(t),o=s[s.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?Ee(e):e;if(i>1)for(let l=0;l<r/o;l++){const h=l*o;for(let u=0;u<o;u++)a[u]=Math.max(a[u],ke(c[h+u],0,n).length)}return a}function ke(e,t,n){let s;return Array.isArray(e)?s=`${parseFloat(e[0].toFixed(Nn))} + ${parseFloat(e[1].toFixed(Nn))}j`:Nt(e)?s=`'${e}'`:n==="bool"?s=bi(e):s=parseFloat(e.toFixed(Nn)).toString(),Se(s,t)}function bi(e){return e===0?"false":"true"}function Qe(e,t,n,s,r,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const $=Ee(e);return[ke($[0],0,n)]}return n==="bool"?[bi(e[0])]:[e[0].toString()]}if(c===1){if(i>Ys){const y=$e*a;let S=Array.from(e.slice(0,y)),A=Array.from(e.slice((i-$e)*a,i*a));return n==="complex64"&&(S=Ee(S),A=Ee(A)),["["+S.map((E,v)=>ke(E,r[v],n)).join(", ")+", ..., "+A.map((E,v)=>ke(E,r[i-$e+v],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ee(e):Array.from(e)).map((y,S)=>ke(y,r[S],n)).join(", ")+"]"]}const l=t.slice(1),h=s.slice(1),u=s[0]*a,d=[];if(i>Ys){for(let $=0;$<$e;$++){const y=$*u,S=y+u;d.push(...Qe(e.slice(y,S),l,n,h,r,!1))}d.push("...");for(let $=i-$e;$<i;$++){const y=$*u,S=y+u;d.push(...Qe(e.slice(y,S),l,n,h,r,$===i-1))}}else for(let $=0;$<i;$++){const y=$*u,S=y+u;d.push(...Qe(e.slice(y,S),l,n,h,r,$===i-1))}const b=c===2?",":"";d[0]="["+(i>0?d[0]+b:"");for(let $=1;$<d.length-1;$++)d[$]=" "+d[$]+b;let w=`,
`;for(let $=2;$<c;$++)w+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":w),d}function Ee(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cn{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=O(t),s!=null){const r=s.length;p(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||ls(n,this.size),this.strides=we(t)}set(t,...n){n.length===0&&(n=[0]),p(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const r of t){if(r<0||r>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return gt().makeTensor(this.values,this.shape,this.dtype)}}let gt=null,oe=null;function pu(e){gt=e}function gu(e){oe=e}class H{constructor(t,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=O(t),this.strides=we(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return oe.buffer(this.shape,this.dtype,t)}bufferSync(){return oe.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return ce(this.shape,t,this.dtype==="complex64")}arraySync(){return ce(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=gt().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>an(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),gt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=gt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>an(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await gt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),gt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return oe.print(this,t)}clone(){return this.throwIfDisposed(),oe.clone(this)}toString(t=!1){const n=this.dataSync();return fu(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),oe.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),gt().makeVariable(this,t,n,s)}}Object.defineProperty(H,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function wi(){return fs("Tensor",()=>H)}wi();class De extends H{constructor(t,n,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!It(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);gt().disposeTensor(this),this.dataId=t.dataId,gt().incRef(this,null)}dispose(){gt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(De,Symbol.hasInstance,{value:e=>e instanceof H&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Kn;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Kn||(Kn={}));var zn;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(zn||(zn={}));var qn;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(qn||(qn={}));var Vn;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Vn||(Vn={}));var Hn;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Hn||(Hn={}));const mu={float32:Vn,int32:zn,bool:qn,complex64:Hn};function bn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return mu[e][t]}function bu(e){return bn(e,"int32")}function yi(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function $i(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V(e,t){if(e.dtype===t.dtype)return[e,t];const n=bn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ki(e,t){p(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function wu(e,t){return t.some(n=>n.id===e.id)}function ys(e){const t=[];return Ei(e,t,new Set),t}function Ei(e,t,n){if(e==null)return;if(e instanceof H){t.push(e);return}if(!yu(e))return;const s=e;for(const r in s){const o=s[r];n.has(o)||(n.add(o),Ei(o,t,n))}}function yu(e){return Array.isArray(e)||typeof e=="object"}const $u=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:ki,getTensorsInContainer:ys,isTensorInList:wu,makeTypesMatch:V},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bn(e){return e.kernelName!=null}class Js{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class me{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Js}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(Dt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new iu(this.backendInstance),!0}setupRegisteredKernels(){on(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){on(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof ur)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(a=>r<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Dt(`Initialization of backend ${t} failed`),Dt(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Dt(`Initialization of backend ${t} failed`),Dt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),r=s.backend,o=this.readSync(n),a=r.refCount(n);r.disposeData(n,!0),s.backend=t,t.move(n,o,s.shape,s.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,n,s){t();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return me.nextTensorId++}nextVariableId(){return me.nextVariableId++}clone(t){const n=m.runKernel(ms,{x:t}),s={x:t},r=a=>({x:()=>{const i="float32",c={x:a},l={dtype:i};return m.runKernel(ps,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,o,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!(_e(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const r=this.backend.numDataIds();let o=0;s.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const r=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=Bn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Bn(t)){const{kernelName:w,inputs:$,attrs:y}=t;this.backendName==null&&this.backend;const S=_e(w,this.backendName);p(S!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const A=this.backend.numDataIds();c=S.kernelFunc({inputs:$,attrs:y,backend:this.backend});const E=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,A,E);const v=E.map(T=>T.rank!=null?T:this.makeTensorFromTensorInfo(T));if(r){const T=this.getTensorsForGradient(w,$,v);s=this.saveTensorsForBackwardMode(T)}return v}}else{const{forwardFunc:w}=t,$=y=>{r&&(s=y.map(S=>this.keep(this.clone(S))))};i=()=>{const y=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,$));const S=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,y,S),S}}const{inputs:h,attrs:u}=t,d=Bn(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(b=this.profiler.profileKernel(l,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),n=b.outputs)}),r&&this.addTapeNode(l,h,n,d,s,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const r=Un(t);if(r!=null){const o=r.inputsToSave||[],a=r.outputsToSave||[];let i;r.saveAllInputs?(p(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(l=>n[l])):i=o.map(l=>n[l]);const c=s.filter((l,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&Nt(t[0])&&(o=t.map(c=>ze(c)));const a=r.write(o,n,s),i=new H(n,s,a,this.nextTensorId());if(this.trackTensor(i,r),s==="string"){const c=this.state.tensorInfo.get(a),l=br(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,n,s,r){s=s||"float32";const o={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:r,dtype:o}=t,a=new H(r,o,s,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new De(t,n,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*sn(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof De||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*sn(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,r,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:o},c=Un(t);c!=null&&(r=c.gradFunc),r!=null&&(i.gradient=l=>(l=l.map((h,u)=>{if(h==null){const d=s[u],b=pn(d.size,d.dtype);return this.makeTensor(b,d.shape,d.dtype)}return h}),r(l.length>1?l:l[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=ys(t),s=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!s.has(a.id)&&a.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,n,s,r=!1){if(p(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));p(o instanceof H,()=>"The result y returned by f() must be a tensor.");const a=uu(this.state.activeTape,n,o);if(!r&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=s??ku(o.shape),hu(i,a,l=>this.tidy(l),Eu);const c=n.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const h of l.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return p(Ct(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{p(n.every(i=>i instanceof H),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((i,c)=>{r[c]=i});const o=(i,c)=>(s=t(...n,c),p(s.value instanceof H,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),p(Ct(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),a=(i,c)=>{const l=s.gradFunc(i,c),h=Array.isArray(l)?l:[l];p(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),p(h.every(d=>d instanceof H),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const u={};return h.forEach((d,b)=>{u[b]=()=>d}),u};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=Ae(),s=await this.backend.time(t);return s.wallMs=Ae()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Js;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}me.nextTensorId=0;me.nextVariableId=0;function ku(e){const t=us(O(e),"float32");return m.makeTensor(t,e,"float32")}function Si(){const e=Er();if(e._tfengine==null){const t=new kr(e);e._tfengine=new me(t)}return Il(e._tfengine.ENV),pu(()=>e._tfengine),e._tfengine}const m=Si();function Eu(e,t){const n={a:e,b:t};return m.runKernel(ds,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Su(){return typeof navigator<"u"&&navigator!=null}let jn;function xu(e){jn=e}function vu(e){if(jn!==void 0)return jn;if(e||Su()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function xi(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const Iu=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:xi,isMobile:vu,mockIsMobile:xu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const at=D();at.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});at.registerFlag("IS_BROWSER",()=>xi());at.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");at.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));at.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));at.registerFlag("PROD",()=>!1);at.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>at.getBool("DEBUG"));at.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);at.registerFlag("IS_TEST",()=>!1);at.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>at.getBool("DEBUG"));at.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);at.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);at.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $t(e,t){let n=e;if(Z(e))return t==="string"?[]:[e.length];if(yi(e)){const r=e.channels||"RGBA";return[e.height,e.width*r.length]}else if($i(e))return[e.buffer.size/(t==null?4:sn(t))];if(!Array.isArray(e))return[];const s=[];for(;Array.isArray(n)||Z(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(e)&&D().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&vi(e,s,[]),s}function vi(e,t,n){if(n=n||[],!Array.isArray(e)&&!Z(e)){p(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}p(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),p(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const s=t.slice(1);for(let r=0;r<e.length;++r)vi(e[r],s,n.concat(r))}function Zs(e,t,n,s){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${e} tensor, but got ${t} tensor`)}}function f(e,t,n,s="numeric"){if(e instanceof wi())return Zs(s,e.dtype,t,n),e;let r=Ge(e);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Zs(s,r,t,n),e==null||!Z(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=$t(e,r);!Z(e)&&!Array.isArray(e)&&(e=[e]);const i=r!=="string"?mn(e,r):Pt(e,[],!0);return m.makeTensor(i,o,r)}function Me(e,t,n,s="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>f(o,`${t}[${a}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ii="__op";function g(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Ii;const r=(...o)=>{m.startScope(n);try{const a=s(...o);return gn(a)&&console.error("Cannot return a Promise inside of tidy."),m.endScope(a),a}catch(a){throw m.endScope(null),a}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tu(e,t){const n=f(e,"real","complex"),s=f(t,"imag","complex");rt(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return m.runKernel(qr,r)}const Ot=g({complex_:Tu});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wt(e,t,n,s){if(s==null)s=Ge(e);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if($i(e)||yi(e)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return m.backend.createTensorFromGPUData(e,t||n,s)}if(!Z(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ut(t);const r=O(t),o=O(n);p(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==O(t.slice(a)):!0;p(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Z(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=s!=="string"?mn(e,s):Pt(e,[],!0),m.makeTensor(e,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function le(e,t,n){const s=$t(e,n);return Wt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jt={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class bt{static join(t){return new bt(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>Z(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=n+r.byteLength;this.shards.push({buffer:r,start:n,end:o}),n=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=n-t,o=new ArrayBuffer(r),a=new Uint8Array(o);let i=0;for(let c=s;c<this.shards.length;c++){const l=this.shards[c],u=t+i-l.start,d=i,w=Math.min(n,l.end)-l.start,$=new Uint8Array(l.buffer,u,w-u);if(a.set($,d),i+=$.length,n<l.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(r){return t<r.start?-1:t>=r.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=_u(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function _u(e,t){let n=0,s=e.length;for(;n<=s;){const r=Math.floor((s-n)/2)+n,o=t(e[r]);if(o===0)return r;o<0?s=r:n=r+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Au(){D().set("PROD",!0)}function Du(){D().set("DEBUG",!0)}function Mu(){D().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function Nu(e){D().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Bu(){m.disposeVariables()}function Ru(){return m}function Fu(){return m.memory()}function Cu(e){return m.profile(e)}function j(e,t){return m.tidy(e,t)}function ot(e){ys(e).forEach(n=>n.dispose())}function Ti(e){return m.keep(e)}function Pu(e){return m.time(e)}function Ou(e){return m.setBackend(e)}function Lu(){return m.ready()}function _i(){return m.backendName}function Wu(e){m.removeBackend(e)}function Uu(e){return m.findBackend(e)}function Gu(e){return m.findBackendFactory(e)}function Ku(e,t,n=1){return m.registerBackend(e,t,n)}function Ai(){return m.backend}function zu(e,t){D().setPlatform(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt=4;async function qu(e,t){const n=[],s=[],r=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<r.length;++a){const i=r[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async u=>{const d=await c.bytes(),b=d.reduce((y,S)=>y+S.length,0)+Lt*d.length,w=new Uint8Array(b);let $=0;for(let y=0;y<d.length;y++){const S=d[y],A=new Uint8Array(new Uint32Array([S.length]).buffer);w.set(A,$),$+=Lt,w.set(S,$),$+=S.length}u(w)});s.push(h)}else s.push(c.data());t!=null&&(l.group=t),n.push(l)}const o=await Promise.all(s);return{data:Xu(o),specs:n}}function Di(e,t){const n=new bt(e),s={};let r=0;for(const o of t){const a=Vu(o,(i,c)=>n.slice(r+i,r+c));s[o.name]=Mi(o,n.slice(r,r+a)),r+=a}return s}function Vu(e,t){const n=O(e.shape);let s;if("quantization"in e){const r=e.quantization;s=jt[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=Lt+new Uint32Array(t(r,r+Lt))[0];return r}else s=jt[e.dtype];return n*s}async function Hu(e,t){const n=O(e.shape);let s;if("quantization"in e){const r=e.quantization;s=jt[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=Lt+new Uint32Array(await t(r,r+Lt))[0];return r}else s=jt[e.dtype];return n*s}function Mi(e,t){const n=e.name,s=e.dtype,r=e.shape,o=O(r);let a,i=0;if("quantization"in e){const c=e.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${e.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${e.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=jt[c.dtype],h=c.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=d*c.scale+c.min}}else if(c.dtype==="float16")a=nh()(h);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(s==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(h.length);for(let u=0;u<h.length;u++){const d=h[u];a[u]=Math.round(d*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*l}else if(s==="string"){const c=O(e.shape);a=[];for(let l=0;l<c;l++){const h=new Uint32Array(t.slice(i,i+Lt))[0];i+=Lt;const u=new Uint8Array(t.slice(i,i+h));a.push(u),i+=h}}else{const c=jt[s];if(s==="float32")a=new Float32Array(t);else if(s==="int32")a=new Int32Array(t);else if(s==="bool")a=new Uint8Array(t);else if(s==="complex64"){a=new Float32Array(t);const l=new Float32Array(a.length/2),h=new Float32Array(a.length/2);for(let w=0;w<l.length;w++)l[w]=a[w*2],h[w]=a[w*2+1];const u=le(l,r,"float32"),d=le(h,r,"float32"),b=Ot(u,d);return u.dispose(),d.dispose(),b}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*c}return le(a,r,s)}async function Qs(e,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:r,value:o}=await e.read();if(r&&o==null){const i=n-s.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const a=new Uint8Array(s.length+o.byteLength);a.set(s,0),a.set(new Uint8Array(o),s.length),s=a}return s.buffer}async function ju(e,t){const n={},s=e.getReader();let r=new ArrayBuffer(0);for(const o of t){const a=await Hu(o,async(l,h)=>(r=await Qs(s,r,h),r.slice(l,h)));r=await Qs(s,r,a);const i=r.slice(0,a);r=r.slice(a);const c=Mi(o,i);if(n[o.name]=c,_i()==="webgpu"){const l=Ai();"uploadToGPU"in l&&O(c.shape)>=D().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return n}function Xu(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return n.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const $s=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function tr(e){return $s?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function Yu(e){if($s)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let s=0,r=t.length;s<r;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function Ju(e){if($s){const s=Buffer.from(e,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function Zu(e){return bt.join(e)}function er(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function Ni(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Bi(e,t,n){const s={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(s.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return e.signature!=null&&(s.signature=e.signature),e.userDefinedMetadata!=null&&(s.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(s.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(s.initializerSignature=e.initializerSignature),s}async function ks(e,t){let n,s;return e.weightsManifest!=null&&([n,s]=await t(e.weightsManifest)),Bi(e,n,s)}function qe(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:tr(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:tr(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new bt(e.weightData).byteLength}}function Xn(e){const t=[];for(const n of e)t.push(...n.weights);return t}function Qu(){const e=n=>{let s=n<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function th(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function eh(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function nh(){const e=Qu(),t=th(),n=eh();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let a=0;a<s.length;a++){const i=s[a],c=e[n[i>>10]+(i&1023)]+t[i>>10];o[a]=c}return new Float32Array(r)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class q{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return q.instance==null&&(q.instance=new q),q.instance}static registerSaveRouter(t){q.getInstance().saveRouters.push(t)}static registerLoadRouter(t){q.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return q.getHandlers(t,"save")}static getLoadHandlers(t,n){return q.getHandlers(t,"load",n)}static getHandlers(t,n,s){const r=[];return(n==="load"?q.getInstance().loadRouters:q.getInstance().saveRouters).forEach(a=>{const i=a(t,s);i!==null&&r.push(i)}),r}}const sh=e=>q.registerSaveRouter(e),rh=e=>q.registerLoadRouter(e),oh=e=>q.getSaveHandlers(e),ah=(e,t)=>q.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yn="tensorflowjs",Jn=1,qt="models_store",Bt="model_info_store";function Ri(){if(!D().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Zn(e){const t=e.result;t.createObjectStore(qt,{keyPath:"modelPath"}),t.createObjectStore(Bt,{keyPath:"modelPath"})}class Xt{constructor(t){if(this.indexedDB=Ri(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,r)=>{const o=this.indexedDB.open(Yn,Jn);o.onupgradeneeded=()=>Zn(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(qt,"readonly"),l=i.objectStore(qt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=h=>(a.close(),r(l.error)),i.oncomplete=()=>a.close()}else{n.weightData=bt.join(n.weightData);const i=qe(n),c=a.transaction(Bt,"readwrite");let l=c.objectStore(Bt),h;try{h=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(d){return r(d)}let u;h.onsuccess=()=>{u=a.transaction(qt,"readwrite");const d=u.objectStore(qt);let b;try{b=d.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(w){return r(w)}b.onsuccess=()=>s({modelArtifactsInfo:i}),b.onerror=w=>{l=c.objectStore(Bt);const $=l.delete(this.modelPath);$.onsuccess=()=>(a.close(),r(b.error)),$.onerror=y=>(a.close(),r(b.error))}},h.onerror=d=>(a.close(),r(h.error)),c.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}}},o.onerror=a=>r(o.error)})}}Xt.URL_SCHEME="indexeddb://";const Fi=e=>D().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Xt.URL_SCHEME)?ih(e.slice(Xt.URL_SCHEME.length)):null;q.registerSaveRouter(Fi);q.registerLoadRouter(Fi);function ih(e){return new Xt(e)}function ch(e){return e.startsWith(Xt.URL_SCHEME)?e.slice(Xt.URL_SCHEME.length):e}class lh{constructor(){this.indexedDB=Ri()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(Yn,Jn);s.onupgradeneeded=()=>Zn(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(Bt,"readonly"),i=o.objectStore(Bt).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(r.close(),n(i.error)),o.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})}async removeModel(t){return t=ch(t),new Promise((n,s)=>{const r=this.indexedDB.open(Yn,Jn);r.onupgradeneeded=()=>Zn(r),r.onsuccess=()=>{const o=r.result,a=o.transaction(Bt,"readwrite"),i=a.objectStore(Bt),c=i.get(t);let l;c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),u=()=>{l=o.transaction(qt,"readwrite");const b=l.objectStore(qt).delete(t);b.onsuccess=()=>n(c.result.modelArtifactsInfo),b.onerror=w=>s(c.error)};h.onsuccess=u,h.onerror=d=>(u(),o.close(),s(c.error))}},c.onerror=h=>(o.close(),s(c.error)),a.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const St="/",ae="tensorflowjs_models",Ci="info",uh="model_topology",hh="weight_specs",fh="weight_data",dh="model_metadata";function Pi(e){return{info:[ae,e,Ci].join(St),topology:[ae,e,uh].join(St),weightSpecs:[ae,e,hh].join(St),weightData:[ae,e,fh].join(St),modelMetadata:[ae,e,dh].join(St)}}function Oi(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function ph(e){const t=e.split(St);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(St)}function gh(e){return e.startsWith(Yt.URL_SCHEME)?e.slice(Yt.URL_SCHEME.length):e}class Yt{constructor(t){if(!D().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Pi(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=qe(t),o=bt.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Yu(o));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw Oi(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Ju(a),n}}Yt.URL_SCHEME="localstorage://";const Li=e=>D().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Yt.URL_SCHEME)?mh(e.slice(Yt.URL_SCHEME.length)):null;q.registerSaveRouter(Li);q.registerLoadRouter(Li);function mh(e){return new Yt(e)}class bh{constructor(){p(D().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),p(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=ae+St,s=St+Ci;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(s)){const a=ph(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=gh(t);const n=Pi(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return Oi(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue="://";class et{constructor(){this.managers={}}static getInstance(){return et.instance==null&&(et.instance=new et),et.instance}static registerManager(t,n){p(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ue)&&(t=t.slice(0,t.indexOf(ue))),p(t.length>0,()=>"scheme must not be an empty string.");const s=et.getInstance();p(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=et.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(et.getInstance().managers)}}function tn(e){if(e.indexOf(ue)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${et.getSchemes().join(",")}`);return{scheme:e.split(ue)[0],path:e.split(ue)[1]}}async function Wi(e,t,n=!1){p(e!==t,()=>`Old path and new path are the same: '${e}'`);const s=q.getLoadHandlers(e);p(s.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),p(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${e}.`);const r=s[0],o=q.getSaveHandlers(t);p(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),p(o.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const a=o[0],i=tn(e).scheme,c=tn(e).path,l=i===tn(e).scheme,h=await r.load();n&&l&&await et.getManager(i).removeModel(c);const u=await a.save(h);return n&&!l&&await et.getManager(i).removeModel(c),u.modelArtifactsInfo}async function wh(){const e=et.getSchemes(),t={};for(const n of e){const s=await et.getManager(n).listModels();for(const r in s){const o=n+ue+r;t[o]=s[r]}}return t}async function yh(e){const t=tn(e);return et.getManager(t.scheme).removeModel(t.path)}async function $h(e,t){return Wi(e,t,!1)}async function kh(e,t){return Wi(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Eh{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!D().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return pi(t)}}if(D().get("IS_BROWSER")){D().setPlatform("browser",new Eh);try{et.registerManager(Yt.URL_SCHEME,new bh)}catch{}try{et.registerManager(Xt.URL_SCHEME,new lh)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sh={importFetch:()=>require("node-fetch")};let Rn;class xh{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return D().global.fetch!=null?D().global.fetch(t,n):(Rn==null&&(Rn=Sh.importFetch()),Rn(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}D().get("IS_NODE")&&!D().get("IS_BROWSER")&&D().setPlatform("node",new xh);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xt(e,t="float32",n){return t=t||"float32",ut(e),new cn(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vh(e,t){const n=f(e,"x","cast");if(!mr(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:t};return m.runKernel(ps,s,r)}const K=g({cast_:vh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(e){const n={x:f(e,"x","clone","string_or_numeric")};return m.runKernel(ms,n)}const Ht=g({clone_:Ih});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ui(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Si();const Th={buffer:xt,cast:K,clone:Ht,print:Ui};gu(Th);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _h(e,t){let n=f(e,"a","add"),s=f(t,"b","add");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(ds,r)}const _=g({add_:_h});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ah(e,t){let n=f(e,"a","floorDiv"),s=f(t,"b","floorDiv");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(xo,r)}const Gi=g({floorDiv_:Ah});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dh(e,t){let n=f(e,"a","div"),s=f(t,"b","div");if([n,s]=V(n,s),n.dtype==="int32"&&s.dtype==="int32")return Gi(n,s);const r={a:n,b:s},o={};return m.runKernel(ho,r,o)}const G=g({div_:Dh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mh(e,t){let n=f(e,"a","mul"),s=f(t,"b","mul");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(na,r)}const x=g({mul_:Mh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nh(e){const t=f(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return m.runKernel(Vr,n)}else{const n={x:t};return m.runKernel(Sr,n)}}const ht=g({abs_:Nh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bh(e){const n={x:f(e,"x","acos")};return m.runKernel(xr,n)}const Rh=g({acos_:Bh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fh(e){const n={x:f(e,"x","acosh")};return m.runKernel(vr,n)}const Ch=g({acosh_:Fh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(e){p(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),p(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((r,o)=>f(r,`tensors${o}`,"addN")),n=t[0];t.forEach(r=>{if(r.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(r=>{if(!It(r.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return m.runKernel(Ir,s)}const Oh=g({addN_:Ph});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lh(e,t=null,n=!1){const r={x:f(e,"x","all","bool")},o={axis:t,keepDims:n};return m.runKernel(Tr,r,o)}const Wh=g({all_:Lh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(e,t=null,n=!1){const r={x:f(e,"x","any","bool")},o={axis:t,keepDims:n};return m.runKernel(_r,r,o)}const Gh=g({any_:Uh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kh(e,t=0){const s={x:f(e,"x","argMax")},r={axis:t};return m.runKernel(Ar,s,r)}const zh=g({argMax_:Kh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qh(e,t=0){const s={x:f(e,"x","argMin")},r={axis:t};return m.runKernel(Dr,s,r)}const Vh=g({argMin_:qh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hh(e){const n={x:f(e,"x","asin")};return m.runKernel(Mr,n)}const jh=g({asin_:Hh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(e){const n={x:f(e,"x","asinh")};return m.runKernel(Nr,n)}const Yh=g({asinh_:Xh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(e){const n={x:f(e,"x","atan")};return m.runKernel(Br,n)}const Zh=g({atan_:Jh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(e,t){let n=f(e,"a","atan2"),s=f(t,"b","atan2");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(Fr,r)}const tf=g({atan2_:Qh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ef(e){const n={x:f(e,"x","atanh")};return m.runKernel(Rr,n)}const nf=g({atanh_:ef});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sf(e,t,n,s,r="NHWC",o){const a=e[3],i=[...t,a],c=qi(r);return Ve(e,i,n,o,s,null,null,c)}function Ki(e,t,n,s,r,o,a="channelsLast"){const[i,c]=Ne(t);let l;if(a==="channelsLast")l=[i,c,e[3],e[3]];else if(a==="channelsFirst")l=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return Ve(e,l,n,s,r,o,!1,a)}function rf(e,t,n,s,r,o,a="NDHWC"){const[i,c,l]=Qn(t);let h,u;if(a==="NDHWC")u="channelsLast",h=[i,c,l,e[4],e[4]];else if(a==="NCDHW")u="channelsFirst",h=[i,c,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return zi(e,h,n,s,r,!1,u,o)}function Ve(e,t,n,s,r,o,a=!1,i="channelsLast"){let[c,l,h,u]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,h,u]=e;else if(i==="channelsFirst")[c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[d,b,,w]=t,[$,y]=Ne(n),[S,A]=Ne(s),E=he(d,S),v=he(b,A),{padInfo:T,outHeight:I,outWidth:R}=cf(r,l,h,$,y,E,v,o,i),B=a?w*u:w;let M;return i==="channelsFirst"?M=[c,B,I,R]:i==="channelsLast"&&(M=[c,I,R,B]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:h,inChannels:u,outHeight:I,outWidth:R,outChannels:B,padInfo:T,strideHeight:$,strideWidth:y,filterHeight:d,filterWidth:b,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationHeight:S,dilationWidth:A,inShape:e,outShape:M,filterShape:t}}function zi(e,t,n,s,r,o=!1,a="channelsLast",i){let[c,l,h,u,d]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,h,u,d]=e;else if(a==="channelsFirst")[c,d,l,h,u]=e;else throw new Error(`Unknown dataFormat ${a}`);const[b,w,$,,y]=t,[S,A,E]=Qn(n),[v,T,I]=Qn(s),R=he(b,v),B=he(w,T),M=he($,I),{padInfo:C,outDepth:F,outHeight:Y,outWidth:Q}=lf(r,l,h,u,S,A,E,R,B,M,i),tt=o?y*d:y;let it;return a==="channelsFirst"?it=[c,tt,F,Y,Q]:a==="channelsLast"&&(it=[c,F,Y,Q,tt]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:u,inChannels:d,outDepth:F,outHeight:Y,outWidth:Q,outChannels:tt,padInfo:C,strideDepth:S,strideHeight:A,strideWidth:E,filterDepth:b,filterHeight:w,filterWidth:$,effectiveFilterDepth:R,effectiveFilterHeight:B,effectiveFilterWidth:M,dilationDepth:v,dilationHeight:T,dilationWidth:I,inShape:e,outShape:it,filterShape:t}}function of(e,t,n,s,r){s==null&&(s=Es(e,t,n));const o=e[0],a=e[1],i=Be((o-t+2*s)/n+1,r),c=Be((a-t+2*s)/n+1,r);return[i,c]}function af(e,t,n,s,r,o){r==null&&(r=Es(e,t[0],s[0]));const a=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*r>=t[i]&&(a[i]=Be((e[i]-t[i]+2*r)/s[i]+1,o));return a}function Es(e,t,n,s=1){const r=he(t,s);return Math.floor((e[0]*(n-1)-n+r)/2)}function Ne(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Qn(e){return typeof e=="number"?[e,e,e]:e}function he(e,t){return t<=1?e:e+(e-1)*(t-1)}function cf(e,t,n,s,r,o,a,i,c){let l,h,u;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const b=of([t,n],o,s,e,i);h=b[0],u=b[1]}else if(e==="same"){h=Math.ceil(t/s),u=Math.ceil(n/r);const d=Math.max(0,(h-1)*s+o-t),b=Math.max(0,(u-1)*r+a-n),w=Math.floor(d/2),$=d-w,y=Math.floor(b/2),S=b-y;l={top:w,bottom:$,left:y,right:S,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/s),u=Math.ceil((n-a+1)/r);else if(typeof e=="object"){const d=c==="channelsLast"?e[1][0]:e[2][0],b=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],$=c==="channelsLast"?e[2][1]:e[3][1];l={top:d,bottom:b,left:w,right:$,type:d===0&&b===0&&w===0&&$===0?"VALID":"EXPLICIT"},h=Be((t-o+d+b)/s+1,i),u=Be((n-a+w+$)/r+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:h,outWidth:u}}function lf(e,t,n,s,r,o,a,i,c,l,h){let u,d,b,w;if(e==="valid"&&(e=0),typeof e=="number"){u={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const y=af([t,n,s,1],[i,c,l],1,[r,o,a],e,h);d=y[0],b=y[1],w=y[2]}else if(e==="same"){d=Math.ceil(t/r),b=Math.ceil(n/o),w=Math.ceil(s/a);const $=(d-1)*r+i-t,y=(b-1)*o+c-n,S=(w-1)*a+l-s,A=Math.floor($/2),E=$-A,v=Math.floor(y/2),T=y-v,I=Math.floor(S/2),R=S-I;u={top:v,bottom:T,left:I,right:R,front:A,back:E,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:b,outWidth:w}}function Be(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Re(e){const[t,n,s]=Ne(e);return t===1&&n===1&&s===1}function Tt(e,t){return Re(e)||Re(t)}function Jt(e){return Ne(e).every(t=>t>0)}function qi(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function pt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")p(pe(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{p(pe(r),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(e,t){const s={x:f(e,"x","reshape","string_or_numeric")},r={shape:t};return m.runKernel(Ea,s,r)}const k=g({reshape_:uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(e,t,n,s,r){const o=f(e,"x","avgPool","float32"),a=1;p(Tt(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=k(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),pt("avgPool",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r};let u=m.runKernel(Cr,l,h);return u=K(u,o.dtype),c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Vi=g({avgPool_:hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ff(e,t,n,s,r,o="NDHWC"){const a=f(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),p(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),pt("avgPool3d",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o};let u=m.runKernel(Pr,l,h);return u=K(u,i.dtype),c?k(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const df=g({avgPool3d_:ff});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pf(e,t=0){p(e.length>=1,()=>"Pass at least one tensor to concat");const n=Me(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return Ht(n[0]);const s=n,r={axis:t};return m.runKernel(Hr,s,r)}const lt=g({concat_:pf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(e,t,n=!1,s=!1){let r=f(e,"a","matMul"),o=f(t,"b","matMul");[r,o]=V(r,o);const a={a:r,b:o},i={transposeA:n,transposeB:s};return m.runKernel(Or,a,i)}const P=g({matMul_:gf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(e){const n={x:f(e,"x","sigmoid","float32")};return m.runKernel(Oa,n)}const fe=g({sigmoid_:mf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(e,t,n){const s=f(e,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:n};return m.runKernel(Ra,r,o)}const z=g({slice_:bf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wf(e){const n={x:f(e,"x","tanh","float32")};return m.runKernel(ri,n)}const ts=g({tanh_:wf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(e,t,n,s,r,o){const a=f(e,"forgetBias","basicLSTMCell"),i=f(t,"lstmKernel","basicLSTMCell"),c=f(n,"lstmBias","basicLSTMCell"),l=f(s,"data","basicLSTMCell"),h=f(r,"c","basicLSTMCell"),u=f(o,"h","basicLSTMCell"),d=lt([l,u],1),b=P(d,i),w=_(b,c),$=w.shape[0],y=w.shape[1]/4,S=[$,y],A=z(w,[0,0],S),E=z(w,[0,y],S),v=z(w,[0,y*2],S),T=z(w,[0,y*3],S),I=_(x(fe(A),ts(E)),x(h,fe(_(a,v)))),R=x(ts(I),fe(T));return[I,R]}const $f=g({basicLSTMCell_:yf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(e,t,n){const s=f(e,"x","batchToSpaceND"),r=t.reduce((i,c)=>i*c);p(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),p(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),p(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},a={blockShape:t,crops:n};return m.runKernel(Lr,o,a)}const Hi=g({batchToSpaceND_:kf});function Ef(e){let t;return e.rank===0||e.rank===1?t=k(e,[1,1,1,e.size]):e.rank===2?t=k(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sf(e,t,n,s,r,o){o==null&&(o=.001);const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;s!=null&&(h=f(s,"offset","batchNorm")),p(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),p(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),p(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Ef(a),scale:l,offset:h,mean:i,variance:c},b={varianceEpsilon:o},w=m.runKernel(vo,d,b);return k(w,a.shape)}const wn=g({batchNorm_:Sf});function xf(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),p(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),p(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),wn(a,i,c,h,l,o)}const vf=g({batchNorm2d_:xf});function If(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),p(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),p(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),wn(a,i,c,h,l,o)}const Tf=g({batchNorm3d_:If});function _f(e,t,n,s,r,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;r!=null&&(l=f(r,"scale","batchNorm"));let h;return s!=null&&(h=f(s,"offset","batchNorm")),p(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),p(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),p(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),wn(a,i,c,h,l,o)}const Af=g({batchNorm4d_:_f});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(e,t,n){const s=f(e,"x","bincount"),r=f(t,"weights","bincount");p(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},a={size:n};return m.runKernel(Wr,o,a)}const ji=g({bincount_:Df});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(e,t){const n=f(e,"x","bitwiseAnd"),s=f(t,"y","bitwiseAnd");if(!It(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const r={a:n,b:s};return m.runKernel(Ur,r)}const Nf=g({bitwiseAnd_:Mf});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bf(e,t){const n=f(e,"s0","broadcastArgs","int32"),s=f(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const r={s0:n,s1:s};return m.runKernel(Gr,r)}const Rf=g({broadcastArgs_:Bf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(e,t){let n=f(e,"broadcastTo","x");const s=n.shape;if(ut(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=k(n,l)}const r=n.shape,o=Array.from(t);for(let l=t.length-1;l>=0;l--)if(r[l]===t[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((l,h)=>l>1?h:-1).filter(l=>l>=0).length===0)return Ht(n);const i={x:n},c={reps:o};return m.runKernel(bs,i,c)}const en=g({broadcastTo_:Ff});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(e){const n={x:f(e,"x","ceil","float32")};return m.runKernel(Kr,n)}const Pf=g({ceil_:Cf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function He(e,t,n){ut(e),n=n||Ge(t);const s={shape:e,value:t,dtype:n};return m.runKernel(ko,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Of(e,t,n){const s=f(e,"x","clipByValue");if(p(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return He(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:n};return m.runKernel(zr,r,o)}const Lf=g({clipByValue_:Of});function Wf(e){return lt(e,0)}const Uf=g({concat1d_:Wf});function Gf(e,t){return lt(e,t)}const Kf=g({concat2d_:Gf});function zf(e,t){return lt(e,t)}const qf=g({concat3d_:zf});function Vf(e,t){return lt(e,t)}const Hf=g({concat4d_:Vf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(e,t,n,s,r="NHWC",o=[1,1],a){const i=f(e,"x","conv2d","float32"),c=f(t,"filter","conv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),pt("conv2d",s,a);const u=r==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in conv2d: depth of input (${u}) must match input depth for filter ${c.shape[2]}.`),p(Tt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(Jt(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),p(Jt(n),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:l,filter:c},b={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=m.runKernel(jr,d,b);return h?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const yn=g({conv2d_:jf});function Xf(e,t,n,s,r="NWC",o=1,a){const i=f(e,"x","conv1d"),c=f(t,"filter","conv1d");let l=i,h=!1;i.rank===2&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1]])),p(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),p(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),pt("conv1d",s,a),p(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),p(Tt(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),p(Jt(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),p(Jt(n),()=>"Error in conv1D: Stride should be larger than 0."),p(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const u=k(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=k(l,[l.shape[0],1,l.shape[1],l.shape[2]]),y=yn(d,u,[1,n],s,"NHWC",[1,o],a);return h?k(y,[y.shape[2],y.shape[3]]):k(y,[y.shape[0],y.shape[2],y.shape[3]])}const Yf=g({conv1d_:Xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(e,t,n,s,r,o="NHWC",a){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,l=!1;t.rank===3&&(l=!0,c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),p(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),p(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),p(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],u=o==="NHWC"?c.shape[3]:c.shape[1];p(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),p(u===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[3]}.`),pt("conv2dDerInput",r,a);const d={dy:c,filter:n},b={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,inputShape:i},w=m.runKernel(Yr,d,b);return l?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Xi=g({conv2DBackpropInput_:Jf});function Zf(e,t,n,s,r,o){const a=f(e,"x","conv2dTranspose"),i=f(t,"filter","conv2dTranspose");return Xi(n,a,i,s,r,"NHWC",o)}const Qf=g({conv2dTranspose_:Zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(e,t,n,s,r="NDHWC",o=[1,1,1]){const a=f(e,"x","conv3d"),i=f(t,"filter","conv3d");let c=a,l=!1;a.rank===4&&(l=!0,c=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),p(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),p(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),p(Tt(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),p(Jt(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),p(Jt(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:c,filter:i},u={strides:n,pad:s,dataFormat:r,dilations:o},d=m.runKernel(Jr,h,u);return l?k(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const ed=g({conv3d_:td});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(e,t,n,s,r){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=k(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],l=a.shape[4];p(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),p(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),p(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),p(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),p(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},u={pad:r,strides:s,inputShape:o},d=m.runKernel(Zr,h,u);return i?k(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const sd=g({conv3DBackpropInput_:nd});function rd(e,t,n,s,r){const o=f(e,"x","conv3dTranspose"),a=f(t,"filter","conv3dTranspose");return sd(n,o,a,s,r)}const od=g({conv3dTranspose_:rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(e){const n={x:f(e,"x","cos","float32")};return m.runKernel(Qr,n)}const id=g({cos_:ad});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(e){const n={x:f(e,"x","cosh","float32")};return m.runKernel(to,n)}const ld=g({cosh_:cd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(e,t=0,n=!1,s=!1){const o={x:f(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:s};return m.runKernel(eo,o,a)}const hd=g({cumprod_:ud});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(e,t=0,n=!1,s=!1){const o={x:f(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:s};return m.runKernel(no,o,a)}const dd=g({cumsum_:fd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(e,t,n,s=!1){const r=f(e,"x","denseBincount"),o=f(t,"weights","denseBincount");p(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),p(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const a={x:r,weights:o},i={size:n,binaryOutput:s};return m.runKernel(ro,a,i)}const gd=g({denseBincount_:pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(e,t,n="NHWC"){const s=f(e,"x","depthToSpace","float32"),r=n==="NHWC"?s.shape[1]:s.shape[2],o=n==="NHWC"?s.shape[2]:s.shape[3],a=n==="NHWC"?s.shape[3]:s.shape[1];p(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),p(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),p(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),p(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${s.shape}`);const i={x:s},c={blockSize:t,dataFormat:n};return m.runKernel(oo,i,c)}const bd=g({depthToSpace_:md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(e,t,n,s,r="NHWC",o=[1,1],a){const i=f(e,"x","depthwiseConv2d","float32"),c=f(t,"filter","depthwiseConv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const u=r==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${u}) must match the inChannels dimension in filter ${c.shape[2]}.`),pt("depthwiseConv2d",s,a);const d={x:l,filter:c},b={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=m.runKernel(ao,d,b);return h?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Ss=g({depthwiseConv2d_:wd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(e){const n={x:f(e,"x","diag")};return m.runKernel(lo,n)}const $d=g({diag_:yd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(e,t,n,s,r=[1,1],o="NHWC"){const a=f(e,"x","dilation2d"),i=f(t,"filter","dilation2d");p(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),p(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),p(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,l=!1;a.rank===3&&(c=k(a,[1,a.shape[0],a.shape[1],a.shape[2]]),l=!0),p(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);const h={x:c,filter:i},u={strides:n,pad:s,dilations:r},d=m.runKernel(uo,h,u);return l?k(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Ed=g({dilation2d_:kd});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yi(e,t){const n=e.length,s=[];for(let r=0;r<n;r++){const o=n-1-r,a=e[o]||1;(t[t.length-1-r]||1)>1&&a===1&&s.unshift(o)}return s}function xs(e,t){const n=[];for(let s=0;s<t.length;s++){const r=e[e.length-s-1],o=t.length-s-1,a=t[o];(r==null||r===1&&a>1)&&n.unshift(o)}return n}function X(e,t){const n=Math.max(e.length,t.length),s=new Array(n);for(let r=0;r<n;r++){let o=e[e.length-r-1];o==null&&(o=1);let a=t[t.length-r-1];if(a==null&&(a=1),o===1)s[n-r-1]=a;else if(a===1)s[n-r-1]=o;else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else s[n-r-1]=o}return s}const Sd=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:X,getBroadcastDims:Yi,getReductionAxes:xs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xd(e,t){let n=f(e,"a","equal","string_or_numeric"),s=f(t,"b","equal","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(mo,r)}const Ji=g({equal_:xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(e,t,n){const s=f(t,"a","where"),r=f(n,"b","where"),o=f(e,"condition","where","bool"),a=X(X(o.shape,s.shape),r.shape),i=en(o,a),c=en(s,a),l=en(r,a),h={condition:i,t:c,e:l};return m.runKernel(Na,h)}const Ft=g({where_:vd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(e){const n={x:f(e,"x","zerosLike")};return m.runKernel(ui,n)}const ft=g({zerosLike_:Id});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Td(e,t){let n=f(e,"a","div"),s=f(t,"b","div");[n,s]=V(n,s);const r=G(n,s),o=ft(r),a=Ji(s,o);return Ft(a,o,r)}const _d=g({divNoNan_:Td});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(e,t){const n=f(e,"t1","dot"),s=f(t,"t2","dot");p((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const r=n.rank===1?n.size:n.shape[1],o=s.rank===1?s.size:s.shape[0];if(p(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),n.rank===1&&s.rank===1){const a=k(n,[1,-1]),i=k(s,[-1,1]),c=P(a,i);return k(c,[])}else if(n.rank===1&&s.rank===2){const a=k(n,[1,-1]),i=k(s,[s.shape[0],s.shape[1]]),c=P(a,i);return k(c,[c.size])}else if(n.rank===2&&s.rank===1){const a=k(s,[-1,1]),i=P(n,a);return k(i,[i.size])}else{const a=k(s,[s.shape[0],s.shape[1]]);return P(n,a)}}const Dd=g({dot_:Ad});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Md(e,...t){const n=t.map((r,o)=>f(r,`tensors${o}`,"einsum")),s={equation:e};return m.runKernel(fo,n,s)}const ie=g({einsum_:Md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(e){const n={x:f(e,"x","elu","float32")};return m.runKernel(po,n)}const Zi=g({elu_:Nd});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(e,t){const n=f(e,"x","ensureShape","string_or_numeric");if(!fr(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const Rd=g({ensureShape_:Bd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(e){let t=f(e,"x","erf");p(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=K(t,"float32"));const n={x:t};return m.runKernel(go,n)}const Cd=g({erf_:Fd});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vs(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Qi(e,t,n){const s=e.length+t.length,r=[];let o=0,a=0;for(let i=0;i<s;i++)n.indexOf(i)===-1?r.push(e[o++]):r.push(t[a++]);return r}function Pd(e,t){const n=[],s=e.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&n.push(e[o]);const r=t.map(o=>e[o]);return[n,r]}function je(e,t){const n=t.map(s=>1);return Qi(e,n,t)}function Od(e,t,n){p(vs(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Ld(e,t){if(vs(e,t))return null;const n=[];for(let s=0;s<t;++s)e.indexOf(s)===-1&&n.push(s);return e.forEach(s=>n.push(s)),n}function Wd(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function Ud(e,t){const n=[];for(let s=t-e;s<t;++s)n.push(s);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(e,t=null,n=!1){const r={x:f(e,"x","max")},o={reductionIndices:t,keepDims:n};return m.runKernel(qo,r,o)}const de=g({max_:Gd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(e,t=null,n=!1){const r={x:f(e,"x","min")},o={axis:t,keepDims:n};return m.runKernel(Jo,r,o)}const es=g({min_:Kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(e,t){let n=f(e,"base","pow"),s=f(t,"exp","pow");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(fa,r)}const Fe=g({pow_:zd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L(e,t){if((Z(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Z(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Wt(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(e){const n={x:f(e,"x","sqrt","float32")};return m.runKernel(Wa,n)}const vt=g({sqrt_:qd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vd(e){const t=f(e,"x","square"),n={};return m.runKernel("Square",{x:t},n)}const mt=g({square_:Vd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e,t=null,n=!1){let s=f(e,"x","sum");s.dtype==="bool"&&(s=K(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return m.runKernel(Ua,r,o)}const U=g({sum_:Hd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(e,t="euclidean",n=null,s=!1){e=f(e,"x","norm");const r=tc(e,t,n);let o=r.shape;if(s){const a=Ue(n,e.shape);o=je(r.shape,a)}return k(r,o)}function tc(e,t,n=null){if(e.rank===0)return ht(e);if(e.rank!==1&&n===null)return tc(k(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return U(ht(e),n);if(t===1/0)return de(ht(e),n);if(t===-1/0)return es(ht(e),n);if(t==="euclidean"||t===2)return vt(U(Fe(ht(e),L(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return de(U(ht(e),n[0]),n[1]-1);if(t===1/0)return de(U(ht(e),n[1]),n[0]);if(t===-1/0)return es(U(ht(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return vt(U(mt(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const $n=g({norm_:jd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(e,t=null,n=!1){return $n(e,"euclidean",t,n)}const Yd=g({euclideanNorm_:Xd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(e){const n={x:f(e,"x","exp")};return m.runKernel(bo,n)}const Zt=g({exp_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(e,t=0){const n=f(e,"x","expandDims","string_or_numeric");p(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:t};return m.runKernel(wo,s,r)}const At=g({expandDims_:Zd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(e){const n={x:f(e,"x","expm1")};return m.runKernel(yo,n)}const tp=g({expm1_:Qd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ep(e,t){const n=f(e,"x","tile","string_or_numeric");p(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},r={reps:t};return m.runKernel(bs,s,r)}const xe=g({tile_:ep});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(e,t,n,s="float32"){t==null&&(t=e);const r=xt([e,t],s),o=e<=t?e:t;for(let i=0;i<o;++i)r.set(1,i,i);const a=k(r.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return xe(At(a,0),[n[0],1,1]);if(n.length===2)return xe(At(At(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return xe(At(At(At(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const ec=g({eye_:np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sp(e){const n={x:f(e,"x","floor","float32")};return m.runKernel(So,n)}const nc=g({floor_:sp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rp(e,t,n=0,s=0){const r=f(e,"x","gather"),o=f(t,"indices","gather","int32"),a={x:r,indices:o},i={axis:n,batchDims:s};return m.runKernel(Io,a,i)}const sc=g({gather_:rp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(e,t){let n=f(e,"a","greater","string_or_numeric"),s=f(t,"b","greater","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(_o,r)}const kn=g({greater_:op});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ap(e,t){let n=f(e,"a","greaterEqual","string_or_numeric"),s=f(t,"b","greaterEqual","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Ao,r)}const rc=g({greaterEqual_:ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(e){const n={input:f(e,"input","imag")};return m.runKernel(Mo,n)}const En=g({imag_:ip});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(e){const n={x:f(e,"x","isFinite")};return m.runKernel(No,n)}const lp=g({isFinite_:cp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function up(e){const n={x:f(e,"x","isInf")};return m.runKernel(Bo,n)}const hp=g({isInf_:up});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fp(e){const n={x:f(e,"x","isNaN")};return m.runKernel(Ro,n)}const dp=g({isNaN_:fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(e,t=.2){const s={x:f(e,"x","leakyRelu")},r={alpha:t};return m.runKernel(Fo,s,r)}const oc=g({leakyRelu_:pp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(e,t){let n=f(e,"a","less","string_or_numeric"),s=f(t,"b","less","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Co,r)}const ns=g({less_:gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mp(e,t){let n=f(e,"a","lessEqual","string_or_numeric"),s=f(t,"b","lessEqual","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Po,r)}const Is=g({lessEqual_:mp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:e,stop:t,num:n};return m.runKernel(Oo,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(e,t=5,n=1,s=1,r=.5){const o=f(e,"x","localResponseNormalization");p(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),p(pe(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=k(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},l={depthRadius:t,bias:n,alpha:s,beta:r},h=m.runKernel(zo,c,l);return i?k(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const yp=g({localResponseNormalization_:wp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(e){const n={x:f(e,"x","log","float32")};return m.runKernel(Lo,n)}const Ce=g({log_:$p});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(e){const n={x:f(e,"x","log1p")};return m.runKernel(Wo,n)}const ac=g({log1p_:kp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(e){return p(Ct(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const s=f(t,"x","tf.grad","string_or_numeric"),r=n!=null?f(n,"dy","tf.grad"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(s),[s],r);return r!=null&&rt(o.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Sn(a),a[0]})}}function Sp(e){return p(Ct(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{p(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=Me(t,"args","tf.grads","string_or_numeric"),r=n!=null?f(n,"dy","tf.grads"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(...s),s,r);return r!=null&&rt(o.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sn(a),a})}}function xp(e){return p(Ct(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{p(t instanceof H,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),p(n==null||n instanceof H,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=m.gradients(()=>e(t),[t],n);return Sn(s),{grad:s[0],value:r}}}function vp(e){return p(Ct(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{p(Array.isArray(t)&&t.every(r=>r instanceof H),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),p(n==null||n instanceof H,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=m.gradients(()=>e(...t),t,n);return n!=null&&rt(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sn(s.grads),s}}function ic(e,t){p(Ct(e),()=>"The f passed in variableGrads(f) must be a function"),p(t==null||Array.isArray(t)&&t.every(l=>l instanceof De),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in m.registeredVariables)t.push(m.registeredVariables[l])}const s=n?t.filter(l=>!l.trainable):null,r=t.length;t=t.filter(l=>l.trainable),p(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:a,grads:i}=m.gradients(e,t,null,o);p(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),p(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((l,h)=>{i[h]!=null&&(c[l.name]=i[h])}),s!=null&&s.forEach(l=>c[l.name]=null),{value:a,grads:c}}function kt(e){return m.customGrad(e)}function Sn(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(e){const n={x:f(e,"x","neg")};return m.runKernel(sa,n)}const yt=g({neg_:Ip});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(e){const n={x:f(e,"x","softplus")};return m.runKernel(La,n)}const cc=g({softplus_:Tp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(e){const t=f(e,"x","logSigmoid");return kt(s=>({value:yt(cc(yt(s))),gradFunc:a=>x(a,fe(yt(s)))}))(t)}const Ap=g({logSigmoid_:_p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dp(e,t){let n=f(e,"a","sub"),s=f(t,"b","sub");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(ni,r)}const N=g({sub_:Dp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(e,t=-1){const n=f(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return kt((r,o)=>{const i=de(r,t,!0),c=N(r,i),l=N(K(c,"float32"),Ce(U(Zt(c),t,!0)));return o([l]),{value:l,gradFunc:(u,d)=>{const[b]=d,w=!0,$=Zt(b);return N(u,x(U(u,t,w),$))}}})(n)}const Np=g({logSoftmax_:Mp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(e,t=null,n=!1){const s=f(e,"x","logSumExp"),r=Ue(t,s.shape),o=de(s,r,!0),a=N(s,o),i=Zt(a),c=U(i,r),l=Ce(c),h=_(k(o,l.shape),l);if(n){const u=je(h.shape,r);return k(h,u)}return h}const lc=g({logSumExp_:Bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(e,t){const n=f(e,"a","logicalAnd","bool"),s=f(t,"b","logicalAnd","bool");X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Uo,r)}const ln=g({logicalAnd_:Rp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(e){const n={x:f(e,"x","logicalNot","bool")};return m.runKernel(Go,n)}const uc=g({logicalNot_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(e,t){const n=f(e,"a","logicalOr","bool"),s=f(t,"b","logicalOr","bool");X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Ko,r)}const hc=g({logicalOr_:Cp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(e,t){const n=f(e,"a","logicalXor","bool"),s=f(t,"b","logicalXor","bool");return X(n.shape,s.shape),ln(hc(e,t),uc(ln(e,t)))}const Op=g({logicalXor_:Pp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Je=2147483648;function Lp(e,t,n="left"){const s=f(e,"sortedSequence","searchSorted"),r=f(t,"values","searchSorted"),o=s.shape[s.shape.length-1],a=r.shape[r.shape.length-1],i=k(s,[-1,o]),c=k(r,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(O(c.shape)>=Je)throw new Error(`values tensor size must less than ${Je}`);if(i.shape[1]>=Je)throw new Error(`trailing dim_size must less than ${Je} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:c},h={side:n};return m.runKernel(Ma,l,h)}const Ts=g({searchSorted_:Lp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wp(e,t){return Ts(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(e,t,n,s,r){const o=f(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=k(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),p(Tt(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),pt("maxPool",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r},u=m.runKernel(Ho,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const fc=g({maxPool_:Up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(e,t=[1,1,1],n,s,r,o="NDHWC"){const a=f(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),pt("maxPool3d",s,r);const l={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o},u=m.runKernel(jo,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const Kp=g({maxPool3d_:Gp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(e,t,n,s,r=!1){const a={x:f(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:s,includeBatchInIndex:r},c=m.runKernel(Xo,a,i);return{result:c[0],indexes:c[1]}}const qp=g({maxPoolWithArgmax_:zp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(e,t){let n=f(e,"a","maximum"),s=f(t,"b","maximum");[n,s]=V(n,s),n.dtype==="bool"&&(n=K(n,"int32"),s=K(s,"int32")),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Vo,r)}const dc=g({maximum_:Vp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(e,t=null,n=!1){const r={x:f(e,"x","mean")},o={axis:t,keepDims:n};return m.runKernel(Yo,r,o)}const un=g({mean_:Hp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function be(e,t="float32"){if(ut(e),t==="complex64"){const s=be(e,"float32"),r=be(e,"float32");return Ot(s,r)}const n=pn(O(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vt(e,t="float32"){if(ut(e),t==="complex64"){const s=Vt(e,"float32"),r=be(e,"float32");return Ot(s,r)}const n=us(O(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jp(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let s=f(e,"x","meshgrid",e instanceof H?e.dtype:"float32");if(t===void 0)return[s];let r=f(t,"y","meshgrid",t instanceof H?t.dtype:"float32");const o=O(s.shape),a=O(r.shape);return n==="xy"?(s=k(s,[1,-1]),r=k(r,[-1,1]),[P(Vt([a,1],s.dtype),s),P(r,Vt([1,o],r.dtype))]):(s=k(s,[-1,1]),r=k(r,[1,-1]),[P(s,Vt([1,a],s.dtype)),P(Vt([o,1],r.dtype),r)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(e,t){let n=f(e,"a","minimum"),s=f(t,"b","minimum");[n,s]=V(n,s),n.dtype==="bool"&&(n=K(n,"int32"),s=K(s,"int32")),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(Zo,r)}const hn=g({minimum_:Xp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yp(e,t,n){p(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=f(e,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");p(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=n==="reflect"?1:0;for(let i=0;i<s.rank;i++)p(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),p(t[i][0]>=0&&t[i][0]<=s.shape[i]-r&&t[i][1]>=0&&t[i][1]<=s.shape[i]-r,()=>`Padding in dimension ${i} cannot be greater than or equal to ${s.shape[i]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:n},a={x:s};return m.runKernel(Qo,a,o)}const Jp=g({mirrorPad_:Yp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(e,t){let n=f(e,"a","mod"),s=f(t,"b","mod");[n,s]=V(n,s);const r={a:n,b:s};return m.runKernel(ta,r)}const Qp=g({mod_:Zp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(e,t=null,n=!1){e=f(e,"x","moments");const s=Ue(t,e.shape),r=un(e,s,n);let o=r.shape;n||(o=je(r.shape,s));const a=mt(N(K(e,"float32"),k(r,o))),i=un(a,s,n);return{mean:r,variance:i}}const eg=g({moments_:tg});function ng(e,t,n,s){const r=f(t,"data","multiRNNCell"),o=Me(n,"c","multiRNNCell"),a=Me(s,"h","multiRNNCell");let i=r;const c=[];for(let u=0;u<e.length;u++){const d=e[u](i,o[u],a[u]);c.push(d[0]),c.push(d[1]),i=d[1]}const l=[],h=[];for(let u=0;u<c.length;u+=2)l.push(c[u]),h.push(c[u+1]);return[l,h]}const sg=g({multiRNNCell_:ng});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(e,t,n,s=!1){const r=f(e,"logits","multinomial"),o=r.size,a=r.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);n=n||Math.random();const c={logits:a===1?k(r,[1,-1]):r},l={numSamples:t,seed:n,normalized:s},h=m.runKernel(ea,c,l);return a===1?k(h,[h.size]):h}const og=g({multinomial_:rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(e,t){let n=f(e,"a","notEqual","string_or_numeric"),s=f(t,"b","notEqual","string_or_numeric");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s};return m.runKernel(ra,r)}const pc=g({notEqual_:ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(e,t,n=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:f(e,"indices","oneHot","int32")},i={dtype:r,depth:t,onValue:n,offValue:s};return m.runKernel(la,a,i)}const ss=g({oneHot_:ig});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(e){const n={x:f(e,"x","onesLike")};return m.runKernel(ca,n)}const lg=g({onesLike_:cg});function ug(e,t){const n=f(e,"v1","outerProduct"),s=f(t,"v2","outerProduct");p(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const r=k(n,[-1,1]),o=k(s,[1,-1]);return P(r,o)}const hg=g({outerProduct_:ug});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(e,t,n=0){const s=f(e,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:n},o={x:s};return m.runKernel(ha,o,r)}const Xe=g({pad_:fg});function dg(e,t,n=0){return p(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Xe(e,[t],n)}const pg=g({pad1d_:dg});function gg(e,t,n=0){return p(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Xe(e,t,n)}const mg=g({pad2d_:gg});function bg(e,t,n=0){return p(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Xe(e,t,n)}const wg=g({pad3d_:bg});function yg(e,t,n=0){return p(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Xe(e,t,n)}const $g=g({pad4d_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(e,t,n){const s=f(e,"x","spaceToBatchND");p(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),p(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),p(s.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:n};return m.runKernel(Ga,r,o)}const gc=g({spaceToBatchND_:kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(e,t,n,s,r,o,a){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const i=f(e,"x","maxPool");let c=i,l=!1;i.rank===3&&(l=!0,c=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(Tt(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const h=Ki(c.shape,t,o,r,s),u=[h.dilationHeight,h.dilationWidth];let d;s==="same"?d=xg([h.filterHeight,h.filterWidth],u):d=[[0,0],[0,0]];const b=u[0]===1&&u[1]===1,[w,$]=Sg([h.inHeight,h.inWidth],u,d),y=b?s:"valid",S=b?c:gc(c,u,w),E=(n==="avg"?()=>Vi(S,t,o,y,a):()=>fc(S,t,o,y,a))(),v=b?E:Hi(E,u,$);return l?k(v,[v.shape[1],v.shape[2],v.shape[3]]):v}function Sg(e,t,n){const s=n.map(h=>h[0]),r=n.map(h=>h[1]),o=e.concat(s,r),a=t.map((h,u)=>(h-o[u]%h)%h),i=r.map((h,u)=>h+a[u]),c=t.map((h,u)=>[s[u],i[u]]),l=t.map((h,u)=>[0,a[u]]);return[c,l]}function xg(e,t){const s=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),r=s.map(a=>Math.floor(a/2)),o=s.map((a,i)=>a-r[i]);return s.map((a,i)=>[r[i],o[i]])}const vg=g({pool_:Eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(e,t){const n=f(e,"x","prelu"),s=f(t,"alpha","prelu"),r={x:n,alpha:s};return m.runKernel(da,r)}const mc=g({prelu_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(e,t=null,n=!1){let s=f(e,"x","prod");s.dtype==="bool"&&(s=K(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return m.runKernel(pa,r,o)}const _g=g({prod_:Tg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(e,t,n,s){const r=e.map((h,u)=>f(h,`tensors${u}`,"raggedGather","int32")),o=f(t,"paramsDenseValues","raggedGather"),a=f(n,"indices","raggedGather","int32"),i={paramsNestedSplits:r,paramsDenseValues:o,indices:a},c={outputRaggedRank:s},l=m.runKernel(ga,i,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const Dg=g({raggedGather_:Ag});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(e,t,n){const s=f(e,"starts","raggedRange"),r=f(t,"limits","raggedRange",s.dtype),o=f(n,"deltas","raggedRange",s.dtype),a={starts:s,limits:r,deltas:o},i=m.runKernel(ma,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const Ng=g({raggedRange_:Mg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(e,t,n,s,r){const o=f(e,"shape","raggedTensorToTensor","int32"),a=f(t,"values","raggedTensorToTensor"),i=f(n,"defaultValue","raggedTensorToTensor",a.dtype),c=s.map((u,d)=>f(u,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:o,values:a,defaultValue:i,rowPartitionTensors:c},h={rowPartitionTypes:r};return m.runKernel(ba,l,h)}const Rg=g({raggedTensorToTensor_:Bg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(e,t,n){ut(e);const s=O(e);let r=null;if(n==null||n==="float32")r=new Float32Array(s);else if(n==="int32")r=new Int32Array(s);else if(n==="bool")r=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<s;o++)r[o]=t();return m.makeTensor(r,e,n)}const Cg=g({rand_:Fg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pg=.001,bc=.1;function Og(e,t,n){return n==null&&(n=_s()),rs(e,t,(s,r)=>As(s,r,n))}function _s(){return m.backend.floatPrecision()===32?Pg:bc}function rs(e,t,n){let s=!0;if((Z(e)||Z(t))&&(s=!1),Z(e)&&Z(t)&&(s=!0),s){const a=e.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(e)&&Array.isArray(t)){const a=$t(e),i=$t(t);if(!It(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}const r=Z(e)?e:Pt(e),o=Z(t)?t:Pt(t);if(r.length!==o.length)throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${o.length}.
Actual:   ${r}.
Expected: ${o}.`);for(let a=0;a<o.length;++a){const i=r[a],c=o[a];if(!n(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${r}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function Lg(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function Wg(e,t){const n=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return Nt(e)||Nt(e[0])||Nt(t)||Nt(t[0])?rs(e,n,(s,r)=>s==r):rs(e,t,(s,r)=>As(s,r,0))}function Ug(e,t,n){if(n==null&&(n=_s()),!As(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function As(e,t,n){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function Gg(e,t,n){for(let s=0;s<e.length;s++)if(e[s]<t||e[s]>n)throw new Error(`Value out of range:${e[s]} low: ${t}, high: ${n}`)}function Kg(e,t){const n=new Float32Array(e),s=new Float32Array(t);if(n.length!==s.length)throw new Error(`Expected ArrayBuffer to be of length ${s.length}, but it was ${n.length}`);for(let r=0;r<s.length;r++)if(n[r]!==s[r])throw new Error(`Expected ArrayBuffer value at ${r} to be ${s[r]} but got ${n[r]} instead`)}function wc(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?wc(n):e[t]=ze(n)}return e}function zg(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(n=>{t.addEventListener("loadeddata",s=>n(t)),t.load()})}async function qg(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const Vg=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:bc,createVideoElement:zg,encodeStrings:wc,expectArrayBuffersEqual:Kg,expectArraysClose:Og,expectArraysEqual:Wg,expectNumbersClose:Ug,expectPromiseToFail:Lg,expectValuesInRange:Gg,play:qg,testEpsilon:_s},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ds{constructor(t,n,s,r,o){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=cs.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,n,s=!1;for(;!s;){let r,o,a;do r=2*this.random()-1,o=2*this.random()-1,a=r*r+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*r*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Hg{constructor(t,n,s,r){this.alpha=t,this.beta=1/n,this.dtype=s;const o=r||Math.random();this.randu=cs.alea(o.toString()),this.randn=new Ds(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,r,o,a;for(;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,t=r*r,n=1-.331*t*t,s=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<n||Math.log(o)<s)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class jg{constructor(t=0,n=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=cs.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(e,t,n=1,s="float32",r){if(ut(e),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const o=new Hg(t,n,s,r),a=xt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Yg=g({randomGamma_:Xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(e,t=0,n=1,s,r){if(ut(e),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new Ds(t,n,s,!1,r),a=xt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const yc=g({randomNormal_:Jg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return yc(e,0,1,t,n)}const Qg=g({randomStandardNormal_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(e,t=0,n=1,s="float32",r){ut(e);const o=xt(e,s),a=new jg(t,n,null,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Ms=g({randomUniform_:tm});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(e,t,n,s){return Ms(e,t,n,"int32",s)}const nm=g({randomUniformInt_:em});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pe(e,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:e,stop:t,step:n,dtype:s};return m.runKernel(wa,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sm(e){const n={input:f(e,"input","real")};return m.runKernel(ya,n)}const Oe=g({real_:sm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(e){const n={x:f(e,"x","reciprocal")};return m.runKernel($a,n)}const om=g({reciprocal_:rm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(e){const n={x:f(e,"x","relu")};return m.runKernel(ka,n)}const xn=g({relu_:am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(e){const n={x:f(e,"x","relu6")};return m.runKernel(va,n)}const $c=g({relu6_:im});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(e,t){const s={x:f(e,"x","reverse")},r={dims:t};return m.runKernel(Ia,s,r)}const Qt=g({reverse_:cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lm(e){const t=f(e,"x","reverse");return p(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Qt(t,0)}const um=g({reverse1d_:lm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(e,t){const n=f(e,"x","reverse");return p(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Qt(n,t)}const fm=g({reverse2d_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(e,t){const n=f(e,"x","reverse");return p(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Qt(n,t)}const pm=g({reverse3d_:dm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gm(e,t){const n=f(e,"x","reverse");return p(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Qt(n,t)}const mm=g({reverse4d_:gm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(e){const n={x:f(e,"x","round")};return m.runKernel(Ta,n)}const kc=g({round_:bm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(e){const n={x:f(e,"x","rsqrt","float32")};return m.runKernel(_a,n)}const ym=g({rsqrt_:wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(e){const n={x:f(e,"x","selu")};return m.runKernel(Ba,n)}const km=g({selu_:$m});function Em(e,t,n,s,r,o=[1,1],a="NHWC"){const i=f(e,"x","separableConv2d"),c=f(t,"depthwiseFilter","separableConv2d"),l=f(n,"pointwiseFilter","separableConv2d");let h=i,u=!1;if(i.rank===3&&(u=!0,h=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");p(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),p(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),p(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),p(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),p(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=c.shape[2],b=c.shape[3];p(l.shape[2]===d*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*b}, but got ${l.shape[2]}.`);const w=Ss(h,c,s,r,a,o),y=yn(w,l,1,"valid",a);return u?k(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const Sm=g({separableConv2d_:Em});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function xm(e,t){const n=f(e,"x","setdiff1d"),s=f(t,"y","setdiff1d");p(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),p(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),p(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const r=await n.data(),o=await s.data(),a=new Set(o);let i=0;for(let h=0;h<r.length;h++)a.has(r[h])||i++;const c=new cn([i],n.dtype),l=new cn([i],"int32");for(let h=0,u=0;h<r.length;h++)a.has(r[h])||(c.values[u]=r[h],l.values[u]=h,u++);return[c.toTensor(),l.toTensor()]}const vm=xm;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Im(e){const n={x:f(e,"x","sign")};return m.runKernel(Pa,n)}const Tm=g({sign_:Im});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _m(e){const n={x:f(e,"x","sin","float32")};return m.runKernel(Fa,n)}const Am=g({sin_:_m});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(e){const n={x:f(e,"x","sinh")};return m.runKernel(Ca,n)}const Mm=g({sinh_:Dm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nm(e,t,n){const s=f(e,"x","slice1d");return p(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),z(s,[t],[n])}const Bm=g({slice1d_:Nm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(e,t,n){const s=f(e,"x","slice2d");return p(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),z(s,t,n)}const Fm=g({slice2d_:Rm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(e,t,n){const s=f(e,"x","slice3d");return p(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),z(s,t,n)}const Pm=g({slice3d_:Cm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(e,t,n){const s=f(e,"x","slice4d");return p(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),z(s,t,n)}const Lm=g({slice4d_:Om});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(e,t=-1){const n=f(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},r={dim:t};return m.runKernel(za,s,r)}const Um=g({softmax_:Wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel($o,t)}const Ns=g({fft_:Gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Km(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Do,t)}const fn=g({ifft_:Km});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(e){const t=e.shape[e.shape.length-1],n=e.size/t;let s;if(t<=2){const r=k(e,[n,t]);s=fn(r)}else{const r=[n,2*(t-1)],o=k(Oe(e),[n,t]),a=k(En(e),[n,t]),i=Qt(z(o,[0,1],[n,t-2]),1),c=x(Qt(z(a,[0,1],[n,t-2]),1),L(-1)),l=lt([o,i],1),h=lt([a,c],1),u=k(Ot(l,h),[r[0],r[1]]);s=fn(u)}if(s=Oe(s),e.rank===3&&e.shape[0]!==0){const r=s,o=e.shape[0];s=k(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const Ec=g({irfft_:zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(e,t,n=0){const r={x:f(e,"x","split")},o={numOrSizeSplits:t,axis:n};return m.runKernel(Ka,r,o)}const Le=g({split_:qm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(e,t){p(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const s=e.size/n;let r;if(t!=null&&t<n){const w=e.shape.map(y=>0),$=e.shape.map(y=>y);$[e.shape.length-1]=t,r=z(e,w,$),n=t}else if(t!=null&&t>n){const w=e.shape.map($=>$);w[e.shape.length-1]=t-n,r=lt([e,be(w)],e.shape.length-1),n=t}else r=e;const o=ft(r),a=k(Ot(r,o),[s,n]),i=Ns(a),c=Math.floor(n/2)+1,l=Oe(i),h=En(i),u=Le(l,[c,n-c],l.shape.length-1),d=Le(h,[c,n-c],h.shape.length-1),b=r.shape.slice();return b[r.shape.length-1]=c,k(Ot(u[0],d[0]),b)}const Bs=g({rfft_:Vm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(e,t){let n=f(e,"a","squaredDifference"),s=f(t,"b","squaredDifference");[n,s]=V(n,s),X(n.shape,s.shape);const r={a:n,b:s},o={};return m.runKernel(Ya,r,o)}const Sc=g({squaredDifference_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(e,t){const n=f(e,"x","squeeze","string_or_numeric");return k(n,dr(n.shape,t).newShape)}const Rs=g({squeeze_:jm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(e,t=0){const n=Me(e,"tensors","stack","string_or_numeric");p(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&p(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:t};return m.runKernel(ua,s,r)}const We=g({stack_:Xm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(e,t=0){const s={x:f(e,"x","step")},r={alpha:t};return m.runKernel(hi,s,r)}const xc=g({step_:Ym});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(e,t,n,s,r=0,o=0,a=0,i=0,c=0){const h={x:f(e,"x","stridedSlice","string_or_numeric")},u={begin:t,end:n,strides:s,beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return m.runKernel(Za,h,u)}const Zm=g({stridedSlice_:Jm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(e){const n={x:f(e,"x","tan","float32")};return m.runKernel(si,n)}const tb=g({tan_:Qm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dt(e,t){ee(e);const n=$t(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Wt(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ve(e,t,n){if(ee(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=$t(e,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Wt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vc(e,t,n){if(ee(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=$t(e,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Wt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(e,t,n){if(ee(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=$t(e,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Wt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nb(e,t,n){if(ee(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=$t(e,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Wt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sb(e,t,n){if(ee(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=$t(e,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,Wt(e,t,s,n)}function Fs(e,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(o+` update.rank < ${r}. `);if(e.length<s+(n.rank-r))throw new Error(o+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+e.length-s)throw new Error(o+` update.rank != ${r+e.length-s}`);for(let a=0;a<r;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-r;++a)if(n.shape[a+r]!==e[a+s])throw new Error(o+` updates.shape[${a+r}] (${n.shape[a+r]}) != shape[${a+r}] (${e[a+r]})`)}function vn(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Fs(n,t,e)}function Ic(e,t,n){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=n.length;let a=1;for(let u=r;u<o;++u)a*=n[u];const i=r<1?1:r,c=O(t.shape)/i,l=[...we(n.slice(0,r)),1],h=O(n);return{sliceRank:r,numUpdates:c,sliceSize:a,strides:l,outputSize:h}}const rb=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Ic,validateInput:vn,validateUpdateShape:Fs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(e,t,n){const s=f(e,"tensor","tensorScatterupdate"),r=f(t,"indices","tensorScatterupdate","int32"),o=f(n,"updates","tensorScatterupdate");if(vn(o,r,s.shape),s.dtype!==o.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${o.dtype}.`);const a={tensor:s,indices:r,updates:o},i={};return m.runKernel(Da,a,i)}const ab=g({tensorScatterUpdate_:ob});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(e,t=1,n=!0){const s=f(e,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},a={k:t,sorted:n},[i,c]=m.runKernel(oi,o,a);return{values:i,indices:c}}const cb=g({topk_:ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(e,t=0,n=1,s,r){if(ut(e),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Ds(t,n,s,!0,r),a=xt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const ub=g({truncatedNormal_:lb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(e,t=0){const n=f(e,"x","unique","string_or_numeric");p(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},r={axis:t},[o,a]=m.runKernel(ii,s,r);return{values:o,indices:a}}const fb=g({unique_:hb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(e,t,n){const s=f(e,"x","unsortedSegmentSum"),r=f(t,"segmentIds","unsortedSegmentSum","int32");p(pe(n),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},a={numSegments:n};return m.runKernel(li,o,a)}const pb=g({unsortedSegmentSum_:db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(e,t=0){const n=f(e,"x","unstack","string_or_numeric");p(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:t};return m.runKernel(ci,s,r)}const Cs=g({unstack_:gb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(e,t){return Ts(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(e,t=!0,n,s){return m.makeVariable(e,t,n,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tc(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const s=xt(e,"int32"),r=xt([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=s.indexToLoc(n[o]),i=o*e.length;r.values.set(a,i)}return r.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function wb(e){const t=f(e,"condition","whereAsync","bool"),n=await t.data(),s=Tc(t.shape,n);return e!==t&&t.dispose(),s}const _c=wb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function yb(e,t,n){const s=f(e,"tensor","boolMask"),r=f(t,"mask","boolMask","bool"),o=n??0,a=r.rank,i=s.shape;p(a>0,()=>"mask cannot be scalar"),rt(i.slice(o,o+a),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let $=o;$<o+a;$++)c*=i[$];const l=i.slice(0,o).concat([c],i.slice(o+a)),h=k(s,l),u=k(r,[-1]),d=await _c(u),b=Rs(d,[1]),w=sc(h,b,o);return e!==s&&s.dispose(),t!==r&&r.dispose(),b.dispose(),h.dispose(),u.dispose(),d.dispose(),w}const $b=yb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(e,t,n){const s=f(e,"x","transpose");if(t==null&&(t=s.shape.map((a,i)=>i).reverse()),p(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(a=>{p(a>=0&&a<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?j(()=>{let a=Oe(s),i=En(s);return a=m.runKernel(Ze,{x:a},o),i=m.runKernel(Ze,{x:i},o),n&&(i=yt(i)),Ot(a,i)}):m.runKernel(Ze,r,o)}const dn=g({transpose_:kb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(e,t,n,s,r=!0){const o=f(e,"v","movingAverage"),a=f(t,"x","movingAverage"),i=f(n,"decay","movingAverage");ki(o,a),p(It(o.shape,a.shape),()=>"Shape mismatch in v and x");const c=L(1),l=N(c,i);let h=x(N(a,o),l);if(r){p(s!=null,()=>"When using zeroDebias: true, step is required.");const u=f(s,"step","movingAverage");h=G(h,N(c,Fe(i,u)))}return _(o,h)}const Sb=g({movingAverage_:Eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(e,t,n){ut(n);const s=f(e,"indices","scatterND","int32"),r=f(t,"updates","scatterND");vn(r,s,n);const o={indices:s,updates:r},a={shape:n};return m.runKernel(Aa,o,a)}const vb=g({scatterND_:xb});function Ib(e,t,n,s){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const r=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===r))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${r}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(e,t,n,s=0){ut(n);const r=f(e,"sparseIndices","sparseToDense","int32"),o=f(t,"sparseValues","sparseToDense","string_or_numeric"),a=f(s,"defaultValue","sparseToDense",o.dtype);Ib(r,o,n,a);const i={sparseIndices:r,sparseValues:o,defaultValue:a},c={outputShape:n};return m.runKernel(Xa,i,c)}const _b=g({sparseToDense_:Tb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(e,t){const n=f(t,"indices","gatherND","int32"),r={params:f(e,"x","gatherND","string_or_numeric"),indices:n};return m.runKernel(To,r)}const Db=g({gatherND_:Ab});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(e,t){if(t==null)return e.shape.slice();if(It(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let s=0;s<e.shape.length;s++)t[s]==null&&e.shape[s]!=null?n.push(e.shape[s]):n.push(t[s]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(e,t,n,s){const r=f(e,"x","dropout");if(p(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),p(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof H?r.clone():r;const o=Mb(r,n),a=1-t,i=G(nc(_(Ms(o,0,1,"float32",s),a)),a);return x(r,i)}const Bb=g({dropout_:Nb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ac(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Ps(e,t,n){const s=1-e%2,r=new Float32Array(e);for(let o=0;o<e;++o){const a=2*Math.PI*o/(e+s-1);r[o]=t-n*Math.cos(a)}return dt(r,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Rb(e,t,n=1){const s=f(e,"predictions","inTopK"),r=f(t,"targets","inTopK");p(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),p(s.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${r.rank}`),rt(s.shape.slice(0,s.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=s.shape[s.shape.length-1];p(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const a=await s.data(),i=await r.data(),[c,l]=[a.length/o,o],h=pr("bool",c);for(let u=0;u<c;u++){const d=u*l,b=a.subarray(d,d+l),w=[];for(let $=0;$<b.length;$++)w.push({value:b[$],index:$});w.sort(($,y)=>y.value-$.value),h[u]=0;for(let $=0;$<n;$++)if(w[$].index===i[u]){h[u]=1;break}}return e!==s&&s.dispose(),t!==r&&r.dispose(),le(h,r.shape,"bool")}const Fb=Rb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(e,t,n,s,r,o="NHWC",a){let i=e;e.rank===3&&(i=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]])),p(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),p(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),p(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];p(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),p(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),pt("conv2dDerFilter",r,a);const u={x:i,dy:c},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,filterShape:n};return m.runKernel(Xr,u,d)}const Pb=g({conv2DBackpropFilter_:Cb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function In(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return x(e,xc(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Tn(e,t){let n=t;const s=xs(e.shape,t.shape);return s.length>0&&(n=U(n,s)),k(n,e.shape)}function _n(e,t,n,s){if(t==="linear")return e;if(t==="relu")return xn(e);if(t==="elu")return Zi(e);if(t==="relu6")return $c(e);if(t==="prelu")return mc(e,n);if(t==="leakyrelu")return oc(e,s);if(t==="sigmoid")return fe(e);throw new Error(`Unknown fused activation ${t}.`)}const An=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(c=c||"linear",An(m.state.gradientDepth,c)===!1){p(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let I=yn(e,t,n,s,r,o,a);return i!=null&&(I=_(I,i)),_n(I,c,l,h)}const u=f(e,"x","conv2d","float32"),d=f(t,"filter","conv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=k(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),pt("fused conv2d",s,a);const $=r==="NHWC"?b.shape[3]:b.shape[1];p(d.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${d.shape[2]}.`),p(Tt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const y=Ve(b.shape,d.shape,n,o,s,a);let S;i!=null&&(S=f(i,"bias","fused conv2d"),[S]=V(S,u),r==="NHWC"?X(y.outShape,S.shape):(p(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),p(S.shape.length===0||S.shape[0]===y.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${y.outChannels})`)));let A;if(l!=null){const I=l.shape;if(p(I.length<=1||I.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${I.length}.`),I.length===1)p(I[0]===1||I[0]===y.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the number of output channels (${y.outChannels}).`);else if(I.length===3)try{X(I,y.outShape)}catch{const B=`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(B)}A=f(l,"prelu weights","fused conv2d")}const E=(I,R)=>{p(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[B,M,C,F]=R,Y=In(I,C,c);p(Re(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const Q=Xi(M.shape,Y,B,n,s),tt=Pb(M,Y,B.shape,n,s),it=[Q,tt];if(F!=null){const ne=Tn(F,Y);it.push(ne)}return it},v={x:b,filter:d,bias:S,preluActivationWeights:A},T={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?kt((R,B,M)=>{let C=m.runKernel(Ln,v,T);return M([B,R,C]),w&&(C=k(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:E}})(b,d):kt((R,B,M,C)=>{let F=m.runKernel(Ln,v,T);return C([B,R,F,M]),w&&(F=k(F,[F.shape[1],F.shape[2],F.shape[3]])),{value:F,gradFunc:E}})(b,d,S)}const Lb=g({fusedConv2d_:Ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(e,t,n,s,r,o=[1,1],a){let i=e;e.rank===3&&(i=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:c},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,filterShape:n};return m.runKernel(io,l,h)}const Ub=g({depthwiseConv2dNativeBackpropFilter_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(e,t,n,s,r,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,inputShape:e},u=m.runKernel(co,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Kb=g({depthwiseConv2dNativeBackpropInput_:Gb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(An(m.state.gradientDepth,c)===!1){let T=Ss(e,t,n,s,r,o,a);return i!=null&&(T=_(T,i)),_n(T,c,l,h)}const u=f(e,"x","depthwiseConv2d","float32"),d=f(t,"filter","depthwiseConv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=k(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),p(b.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),o==null&&(o=[1,1]),p(Tt(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),pt("fused depthwiseConv2d",s,a);const $=Ve(b.shape,d.shape,n,o,s,a,!0);let y;i!=null&&(y=f(i,"bias","fused conv2d"),[y]=V(y,u),X($.outShape,y.shape));let S;l!=null&&(S=f(l,"prelu weights","fused depthwiseConv2d"));const A=(T,I)=>{p(Re(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[R,B,M,C]=I,F=In(T,M,c),Y=Kb(B.shape,F,R,n,s,o,a),Q=Ub(B,F,R.shape,n,s,o,a);if(C!=null){const tt=Tn(y,F);return[Y,Q,tt]}return[Y,Q]},E={x:b,filter:d,bias:y,preluActivationWeights:S},v={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?kt((I,R,B)=>{let M=m.runKernel(Wn,E,v);return B([R,I,M]),w&&(M=k(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:A}})(b,d):kt((I,R,B,M)=>{let C=m.runKernel(Wn,E,v);return M([R,I,C,B]),w&&(C=k(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:A}})(b,d,y)}const qb=g({fusedDepthwiseConv2d_:zb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb({a:e,b:t,transposeA:n=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(An(m.state.gradientDepth,o)===!1){let F=P(e,t,n,s);return r!=null&&(F=_(F,r)),_n(F,o,a,i)}let c=f(e,"a","fused matMul"),l=f(t,"b","fused matMul");[c,l]=V(c,l);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],u=s?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?c.shape[c.rank-1]:c.shape[c.rank-2],b=s?l.shape[l.rank-2]:l.shape[l.rank-1],w=c.shape.slice(0,-2),$=l.shape.slice(0,-2),y=O(w),S=O($);p(h===u,()=>`Error in fused matMul: inner shapes (${h}) and (${u}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${s} must match.`);const E=X(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,b]),v=n?k(c,[y,h,d]):k(c,[y,d,h]),T=s?k(l,[S,b,u]):k(l,[S,u,b]);let I;r!=null&&(I=f(r,"bias","fused matMul"),[I]=V(I,c),X(E,I.shape));let R;a!=null&&(R=f(a,"prelu weights","fused matMul"));const B=(F,Y)=>{const[Q,tt,it,ne]=Y,Et=In(k(F,it.shape),it,o);let se,re;if(!n&&!s?(se=P(Et,tt,!1,!0),re=P(Q,Et,!0,!1)):!n&&s?(se=P(Et,tt,!1,!1),re=P(Et,Q,!0,!1)):n&&!s?(se=P(tt,Et,!1,!0),re=P(Q,Et,!1,!1)):(se=P(tt,Et,!0,!0),re=P(Et,Q,!0,!0)),r!=null){const el=Tn(ne,Et);return[se,re,el]}else return[se,re]},M={a:v,b:T,bias:I,preluActivationWeights:R},C={transposeA:n,transposeB:s,activation:o,leakyreluAlpha:i};return r==null?kt((Y,Q,tt)=>{const it=m.runKernel(On,M,C);return tt([Y,Q,it]),{value:k(it,E),gradFunc:B}})(v,T):kt((Y,Q,tt,it)=>{const ne=m.runKernel(On,M,C);return it([Y,Q,ne,tt]),{value:k(ne,E),gradFunc:B}})(v,T,I)}const Hb=g({fusedMatMul_:Vb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jb=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Lb,depthwiseConv2d:qb,matMul:Hb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(e){return Ps(e,.54,.46)}const Yb=g({hammingWindow_:Xb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jb(e){return Ps(e,.5,.5)}const Dc=g({hannWindow_:Jb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(e,t,n,s=!1,r=0){let o=0;const a=[];for(;o+t<=e.size;)a.push(z(e,o,t)),o+=n;if(s)for(;o<e.size;){const i=o+t-e.size,c=lt([z(e,o,t-i),He([i],r)]);a.push(c),o+=n}return a.length===0?ve([],[0,t]):k(lt(a),[a.length,t])}const Mc=g({frame_:Zb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(e,t,n,s,r=Dc){s==null&&(s=Ac(t));const o=Mc(e,t,n),a=x(o,r(t));return Bs(a,s)}const tw=g({stft_:Qb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(e,t,n,s,r="bilinear",o=0){const a=f(e,"image","cropAndResize"),i=f(t,"boxes","cropAndResize","float32"),c=f(n,"boxInd","cropAndResize","int32"),l=i.shape[0];p(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),p(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),p(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),p(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),p(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const h={image:a,boxes:i,boxInd:c},u={method:r,extrapolationValue:o,cropSize:s};return m.runKernel(so,h,u)}const nw=g({cropAndResize_:ew});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(e){const t=f(e,"image","flipLeftRight","float32");p(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return m.runKernel(Eo,n,{})}const rw=g({flipLeftRight_:sw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(e){const t=f(e,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];p(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),p(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,n),r[n]=3,xe(t,r)}const aw=g({grayscaleToRGB_:ow});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(e){const t=f(e,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];p(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),p(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=K(t,"float32"),a=dt([.2989,.587,.114]);let i;switch(t.rank){case 2:i=ie("ij,j->i",o,a);break;case 3:i=ie("ijk,k->ij",o,a);break;case 4:i=ie("ijkl,l->ijk",o,a);break;case 5:i=ie("ijklm,m->ijkl",o,a);break;case 6:i=ie("ijklmn,n->ijklm",o,a);break;default:throw new Error("Not a valid tensor rank.")}return i=At(i,-1),K(i,r)}const cw=g({rgbToGrayscale_:iw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(e,t,n=0,s=.5){const r=f(e,"image","rotateWithOffset","float32");p(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},a={radians:t,fillValue:n,center:s};return m.runKernel(fi,o,a)}const uw=g({rotateWithOffset_:lw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ye(e,t,n,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),p(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),p(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),p(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),p(t.rank===1,()=>"scores must be a 1D tensor"),p(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),p(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppression","float32"),a=f(t,"scores","nonMaxSuppression","float32"),i=ye(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return m.runKernel(oa,{boxes:o,scores:a},c)}const fw=g({nonMaxSuppression_:hw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(e,t,n){const s=pw(e,t,n),r=s<0?-(s+1):s;e.splice(r,0,t)}function pw(e,t,n){return mw(e,t,n||gw)}function gw(e,t){return e>t?1:e<t?-1:0}function mw(e,t,n){let s=0,r=e.length,o=0,a=!1;for(;s<r;){o=s+(r-s>>>1);const i=n(t,e[o]);i>0?s=o+1:(r=o,a=!i)}return a?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nc(e,t,n,s,r){return Os(e,t,n,s,r,0)}function Bc(e,t,n,s,r,o){return Os(e,t,n,s,r,0,!1,o,!0)}function Rc(e,t,n,s,r,o){return Os(e,t,n,s,r,o,!0)}function Os(e,t,n,s,r,o,a=!1,i=!1,c=!1){const l=[];for(let y=0;y<t.length;y++)t[y]>r&&l.push({score:t[y],boxIndex:y,suppressBeginIndex:0});l.sort(nr);const h=o>0?-.5/o:0,u=[],d=[];for(;u.length<n&&l.length>0;){const y=l.pop(),{score:S,boxIndex:A,suppressBeginIndex:E}=y;if(S<r)break;let v=!1;for(let T=u.length-1;T>=E;--T){const I=bw(e,A,u[T]);if(I>=s){v=!0;break}if(y.score=y.score*ww(s,h,I),y.score<=r)break}y.suppressBeginIndex=u.length,v||(y.score===S?(u.push(A),d.push(y.score)):y.score>r&&dw(l,y,nr))}const b=u.length,w=n-b;i&&w>0&&(u.push(...new Array(w).fill(0)),d.push(...new Array(w).fill(0)));const $={selectedIndices:u};return a&&($.selectedScores=d),c&&($.validOutputs=b),$}function bw(e,t,n){const s=e.subarray(t*4,t*4+4),r=e.subarray(n*4,n*4+4),o=Math.min(s[0],s[2]),a=Math.min(s[1],s[3]),i=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),l=Math.min(r[0],r[2]),h=Math.min(r[1],r[3]),u=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),b=(i-o)*(c-a),w=(u-l)*(d-h);if(b<=0||w<=0)return 0;const $=Math.max(o,l),y=Math.max(a,h),S=Math.min(i,u),A=Math.min(c,d),E=Math.max(S-$,0)*Math.max(A-y,0);return E/(b+w-E)}function ww(e,t,n){const s=Math.exp(t*n*n);return n<=e?s:0}function nr(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function yw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppressionAsync"),a=f(t,"scores","nonMaxSuppressionAsync"),i=ye(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),l=c[0],h=c[1],{selectedIndices:u}=Nc(l,h,n,s,r);return o!==e&&o.dispose(),a!==t&&a.dispose(),dt(u,"int32")}const $w=yw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=ye(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const l={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},u=m.runKernel(ia,l,h);return{selectedIndices:u[0],selectedScores:u[1]}}const Ew=g({nonMaxSuppressionWithScore_:kw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Sw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=ye(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const l=await Promise.all([a.data(),i.data()]),h=l[0],u=l[1],{selectedIndices:d,selectedScores:b}=Rc(h,u,n,s,r,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:dt(d,"int32"),selectedScores:dt(b)}}const xw=Sw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=ye(a,i,n,s,r,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,d={boxes:a,scores:i},b={maxOutputSize:l,iouThreshold:h,scoreThreshold:u,padToMaxOutputSize:o},w=m.runKernel(aa,d,b);return{selectedIndices:w[0],validOutputs:w[1]}}const Iw=g({nonMaxSuppressionPadded_:vw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Tw(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=ye(a,i,n,s,r,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,[d,b]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:$}=Bc(d,b,l,h,u,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:dt(w,"int32"),validOutputs:L($,"int32")}}const _w=Tw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(e,t,n=!1,s=!1){const r=f(e,"images","resizeBilinear");p(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),p(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),p(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=k(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},l=m.runKernel(xa,i,c);return a?k(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Dw=g({resizeBilinear_:Aw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(e,t,n=!1,s=!1){const r=f(e,"images","resizeNearestNeighbor");p(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),p(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),p(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),p(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=k(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},l=m.runKernel(Sa,i,c);return a?k(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Nw=g({resizeNearestNeighbor_:Mw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bw(e,t="binary",n=!1,s=.5){const r=f(e,"image","threshold"),o=.2989,a=.587,i=.114,c=r.shape[0]*r.shape[1];let l=x(dt([s]),255),h,u,d,b;if(p(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),p(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),p(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),p(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[h,u,d]=Le(r,[1,1,1],-1);const y=x(h,o),S=x(u,a),A=x(d,i);b=_(_(y,S),A)}else b=e;if(t==="otsu"){const y=ji(K(kc(b),"int32"),le([]),256);l=Rw(y,c)}const w=n?Is(b,l):kn(b,l);return K(x(w,255),"int32")}function Rw(e,t){let n=dt([-1]),s=dt([0]),r=dt([0]),o,a,i,c,l,h;for(let u=0;u<e.size-1;u++){o=z(e,0,u+1),a=z(e,u+1),l=G(U(o),t),h=G(U(a),t);const d=U(x(o,Pe(0,o.size)));i=G(d,U(o));const b=He(a.shape,o.size),w=_(Pe(0,a.size),b),$=x(a,w);c=G(U($),U(a));const y=N(i,c),S=N(i,c),A=x(l,h);r=x(x(A,y),S);const E=kn(r,s);s=Ft(E,r,s),n=Ft(E,dt([u]),n)}return n}const Fw=g({threshold_:Bw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(e,t,n="nearest",s="constant",r=0,o){const a=f(e,"image","transform","float32"),i=f(t,"transforms","transform","float32");p(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),p(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},l={interpolation:n,fillMode:s,fillValue:r,outputShape:o};return m.runKernel(ai,c,l)}const Pw=g({transform_:Cw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(e,t,n){const s=f(e,"a","bandPart");p(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,a]=s.shape.slice(-2);let i,c;typeof t=="number"?(p(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),p(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),i=f(t<0?o:t,"numLower","bandPart")):(p(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=Ft(ns(t,0),o,hn(t,o))),typeof n=="number"?(p(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),p(n<=a,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`),c=f(n<0?a:n,"numUpper","bandPart")):(p(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=Ft(ns(n,0),a,hn(n,a)));const l=k(Pe(0,o,1,"int32"),[-1,1]),h=Pe(0,a,1,"int32"),u=N(l,h),d=ln(Is(u,i),rc(u,yt(c))),b=be([o,a],s.dtype);return k(We(Cs(k(s,[-1,o,a])).map(w=>Ft(d,w,b))),r)}const Lw=g({bandPart_:Ow});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(e){let t;if(Array.isArray(e)){t=!1,p(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=e[0].shape[0];for(let o=1;o<e.length;++o)p(e[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${r})`)}else t=!0,e=Le(e,e.shape[0],0).map(r=>Rs(r,[0]));p(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],s=e;for(let r=0;r<e.length;++r)n.push(m.tidy(()=>{let o=s[r];if(r>0)for(let a=0;a<r;++a){const i=x(U(x(n[a],o)),n[a]);o=N(o,i)}return G(o,$n(o,"euclidean"))}));return t?We(n,0):n}const Uw=g({gramSchmidt_:Ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gw(e,t=!1){if(p(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return sr(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,l)=>c*l),s=Cs(k(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],o=[];s.forEach(c=>{const[l,h]=sr(c,t);r.push(l),o.push(h)});const a=k(We(r,0),e.shape),i=k(We(o,0),e.shape);return[a,i]}}function sr(e,t=!1){return m.tidy(()=>{p(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],s=e.shape[1];let r=ec(n),o=Ht(e);const a=ve([[1]],[1,1]);let i=Ht(a);const c=n>=s?s:n;for(let l=0;l<c;++l){const h=o,u=i,d=r;[i,o,r]=m.tidy(()=>{const b=z(o,[l,l],[n-l,1]),w=$n(b),$=z(o,[l,l],[1,1]),y=Ft(kn($,0),ve([[-1]]),ve([[1]])),S=N($,x(y,w)),A=G(b,S);A.shape[0]===1?i=Ht(a):i=lt([a,z(A,[1,0],[A.shape[0]-1,A.shape[1]])],0);const E=yt(G(P(y,S),w)),v=z(o,[l,0],[n-l,s]),T=x(E,i),I=dn(i);if(l===0)o=N(v,P(T,P(I,v)));else{const M=N(v,P(T,P(I,v)));o=lt([z(o,[0,0],[l,s]),M],0)}const R=dn(T),B=z(r,[0,l],[n,r.shape[1]-l]);if(l===0)r=N(B,P(P(B,i),R));else{const M=N(B,P(P(B,i),R));r=lt([z(r,[0,0],[n,l]),M],1)}return[i,o,r]}),ot([h,u,d])}return!t&&n>s&&(r=z(r,[0,0],[n,s]),o=z(o,[0,0],[s,s])),[r,o]})}const Kw=g({qr_:Gw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var st;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(st||(st={}));function zw(e,t,n=st.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"losses","computeWeightedLoss");let r=null;t!=null&&(r=f(t,"weights","computeWeightedLoss"));const o=r==null?s:x(s,r);if(n===st.NONE)return o;if(n===st.SUM)return U(o);if(n===st.MEAN){if(r==null)return un(o);{const a=s.size/r.size,i=G(U(o),U(r));return a>1?G(i,L(a)):i}}if(n===st.SUM_BY_NONZERO_WEIGHTS){if(r==null)return G(U(o),L(s.size));{const a=x(r,Vt(s.shape)),i=K(U(pc(a,L(0))),"float32");return G(U(o),i)}}throw Error(`Unknown reduction: ${n}`)}const _t=g({computeWeightedLoss_:zw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(e,t,n,s=st.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"labels","absoluteDifference"),o=f(t,"predictions","absoluteDifference");let a=null;n!=null&&(a=f(n,"weights","absoluteDifference")),rt(r.shape,o.shape,"Error in absoluteDifference: ");const i=ht(N(r,o));return _t(i,a,s)}const Vw=g({absoluteDifference_:qw});function Hw(e,t,n,s,r=st.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","cosineDistance"),a=f(t,"predictions","cosineDistance");let i=null;s!=null&&(i=f(s,"weights","cosineDistance")),rt(o.shape,a.shape,"Error in cosineDistance: ");const c=L(1),l=N(c,U(x(o,a),n,!0));return _t(l,i,r)}const jw=g({cosineDistance_:Hw});function Xw(e,t,n,s=st.SUM_BY_NONZERO_WEIGHTS){let r=f(e,"labels","hingeLoss");const o=f(t,"predictions","hingeLoss");let a=null;n!=null&&(a=f(n,"weights","hingeLoss")),rt(r.shape,o.shape,"Error in hingeLoss: ");const i=L(1);r=N(x(L(2),r),i);const c=xn(N(i,x(r,o)));return _t(c,a,s)}const Yw=g({hingeLoss_:Xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(e,t,n,s=1,r=st.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","huberLoss"),a=f(t,"predictions","huberLoss");let i=null;n!=null&&(i=f(n,"weights","huberLoss")),rt(o.shape,a.shape,"Error in huberLoss: ");const c=L(s),l=ht(N(a,o)),h=hn(l,c),u=N(l,h),d=_(x(L(.5),mt(h)),x(c,u));return _t(d,i,r)}const Zw=g({huberLoss_:Jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qw(e,t,n,s=1e-7,r=st.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","logLoss"),a=f(t,"predictions","logLoss");let i=null;n!=null&&(i=f(n,"weights","logLoss")),rt(o.shape,a.shape,"Error in logLoss: ");const c=L(1),l=L(s),h=yt(x(o,Ce(_(a,l)))),u=x(N(c,o),Ce(_(N(c,a),l))),d=N(h,u);return _t(d,i,r)}const ty=g({logLoss_:Qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(e,t,n,s=st.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"labels","meanSquaredError"),o=f(t,"predictions","meanSquaredError");let a=null;n!=null&&(a=f(n,"weights","meanSquaredError")),rt(r.shape,o.shape,"Error in meanSquaredError: ");const i=Sc(r,o);return _t(i,a,s)}const ny=g({meanSquaredError_:ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(e,t){const n=f(e,"labels","sigmoidCrossEntropyWithLogits"),s=f(t,"logits","sigmoidCrossEntropyWithLogits");rt(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=xn(s),o=x(s,n),a=ac(Zt(yt(ht(s))));return _(N(r,o),a)}function ry(e,t,n,s=0,r=st.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"multiClassLabels","sigmoidCrossEntropy");const a=f(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","sigmoidCrossEntropy")),rt(o.shape,a.shape,"Error in sigmoidCrossEntropy: "),s>0){const l=L(s),h=L(1),u=L(.5);o=_(x(o,N(h,l)),x(u,l))}const c=sy(o,a);return _t(c,i,r)}const oy=g({sigmoidCrossEntropy_:ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return kt((r,o,a)=>{const c=lc(o,[n],!0),l=N(K(o,"float32"),c);a([r,l]);const h=yt(x(l,r));return{value:U(h,[n]),gradFunc:(b,w)=>{const[$,y]=w,S=je(b.shape,[n]);return[x(k(b,S),N(K($,"float32"),Zt(y))),x(k(b,S),N(Zt(y),K($,"float32")))]}}})(e,t)}function iy(e,t,n,s=0,r=st.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"onehotLabels","softmaxCrossEntropy");const a=f(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","softmaxCrossEntropy")),rt(o.shape,a.shape,"Error in softmaxCrossEntropy: "),s>0){const l=L(s),h=L(1),u=L(o.shape[1]);o=_(x(o,N(h,l)),G(l,u))}const c=ay(o,a);return _t(c,i,r)}const cy=g({softmaxCrossEntropy_:iy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(e,t,n,s){const r=f(e,"indices","sparseFillEmptyRows","int32"),o=f(t,"values","sparseFillEmptyRows"),a=f(n,"denseShape","sparseFillEmptyRows","int32"),i=f(s,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:r,values:o,denseShape:a,defaultValue:i},l=m.runKernel(qa,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const uy=g({sparseFillEmptyRows_:ly});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(e,t,n){const s=f(e,"inputIndices","sparseReshape","int32"),r=f(t,"inputShape","sparseReshape","int32"),o=f(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const a={inputIndices:s,inputShape:r,newShape:o},i=m.runKernel(Va,a);return{outputIndices:i[0],outputShape:i[1]}}const fy=g({sparseReshape_:hy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(e,t,n){const s=f(e,"data","sparseSegmentMean"),r=f(t,"indices","sparseSegmentMean","int32"),o=f(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return m.runKernel(Ha,a)}const py=g({sparseSegmentMean_:dy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(e,t,n){const s=f(e,"data","sparseSegmentSum"),r=f(t,"indices","sparseSegmentSum","int32"),o=f(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return m.runKernel(ja,a)}const my=g({sparseSegmentSum_:gy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(e,t,n,s,r,o,a,i){const c=f(e,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=f(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:s,leftPad:r,rightPad:o,padWidth:a,preserveShortSequences:i},u={data:c,dataSplits:l},d=m.runKernel(Qa,u,h);return{nGrams:d[0],nGramsSplits:d[1]}}const wy=g({stringNGrams_:by});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(e,t,n=!0){const s=f(e,"input","stringSplit","string"),r=f(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:n},a={input:s,delimiter:r},i=m.runKernel(ti,a,o);return{indices:i[0],values:i[1],shape:i[2]}}const $y=g({stringSplit_:yy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ky(e,t){const n=f(e,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return m.runKernel(ei,r,s)}const Ey=g({stringToHashBucketFast_:ky});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sy(e,t,n,s=!0){const r=f(e,"input","staticRegexReplace","string"),o={pattern:t,rewrite:n,replaceGlobal:s};return m.runKernel(Ja,{x:r},o)}const xy=g({staticRegexReplace_:Sy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vy={fft:Ns,ifft:fn,rfft:Bs,irfft:Ec},Iy={hammingWindow:Yb,hannWindow:Dc,frame:Mc,stft:tw},Ty={flipLeftRight:rw,grayscaleToRGB:aw,resizeNearestNeighbor:Nw,resizeBilinear:Dw,rgbToGrayscale:cw,rotateWithOffset:uw,cropAndResize:nw,nonMaxSuppression:fw,nonMaxSuppressionAsync:$w,nonMaxSuppressionWithScore:Ew,nonMaxSuppressionWithScoreAsync:xw,nonMaxSuppressionPadded:Iw,nonMaxSuppressionPaddedAsync:_w,threshold:Fw,transform:Pw},_y={bandPart:Lw,gramSchmidt:Uw,qr:Kw},Ay={absoluteDifference:Vw,computeWeightedLoss:_t,cosineDistance:jw,hingeLoss:Yw,huberLoss:Zw,logLoss:ty,meanSquaredError:ny,sigmoidCrossEntropy:oy,softmaxCrossEntropy:cy},Dy={sparseFillEmptyRows:uy,sparseReshape:fy,sparseSegmentMean:py,sparseSegmentSum:my},My={stringNGrams:wy,stringSplit:$y,stringToHashBucketFast:Ey,staticRegexReplace:xy};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ny=new Map,os=new Map;class Fc{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Mt{constructor(){this.classNameMap={}}static getMap(){return Mt.instance==null&&(Mt.instance=new Mt),Mt.instance}static register(t){Mt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Cc(e,t,n){p(e.className!=null,()=>"Class being registered does not have the static className property defined."),p(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),p(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const s=n,r=t+">"+s;return Mt.register(e),Ny.set(r,e),os.set(e,r),e}function By(e){return os.has(e)?os.get(e):e.className}const Ry=Object.freeze(Object.defineProperty({__proto__:null,Serializable:Fc,SerializationMap:Mt,getRegisteredName:By,registerClass:Cc},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ut extends Fc{minimize(t,n=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const a=s.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ot(o),n?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return ic(t,n)}dispose(){this.iterations_!=null&&ot(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:L(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Ut,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ls extends Ut{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s],a=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:j(()=>ft(o).variable(a))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:j(()=>ft(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedGrads[r].variable,l=this.accumulatedUpdates[r].variable;j(()=>{const h=_(x(c,this.rho),x(mt(i),1-this.rho)),u=x(G(vt(_(l,this.epsilon)),vt(_(c,this.epsilon))),i),d=_(x(l,this.rho),x(mt(u),1-this.rho));c.assign(h),l.assign(d);const b=_(x(u,-this.learningRate),o);o.assign(b)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ot(this.accumulatedGrads.map(t=>t.variable)),ot(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ws extends Ut{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:j(()=>He(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const i=this.accumulatedGrads[r].variable;j(()=>{const c=_(i,mt(a));i.assign(c);const l=_(x(G(a,vt(_(c,m.backend.epsilon()))),-this.learningRate),o);o.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ot(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Us extends Ut{static get className(){return"Adam"}constructor(t,n,s,r=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],j(()=>{this.accBeta1=L(n).variable(),this.accBeta2=L(s).variable()}),r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);j(()=>{const s=N(1,this.accBeta1),r=N(1,this.accBeta2);n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:j(()=>ft(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:j(()=>ft(i).variable(c))});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedSecondMoment[a].variable,d=_(x(h,this.beta1),x(l,1-this.beta1)),b=_(x(u,this.beta2),x(mt(l),1-this.beta2)),w=G(d,s),$=G(b,r);h.assign(d),u.assign(b);const y=_(x(G(w,_(vt($),this.epsilon)),-this.learningRate),i);i.assign(y)}),this.accBeta1.assign(x(this.accBeta1,this.beta1)),this.accBeta2.assign(x(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ot(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ot(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),j(()=>{this.accBeta1.assign(Fe(this.beta1,this.iterations_+1)),this.accBeta2.assign(Fe(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gs extends Ut{static get className(){return"Adamax"}constructor(t,n,s,r=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],j(()=>{this.iteration=L(0).variable(),this.accBeta1=L(n).variable()}),r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);j(()=>{const s=N(1,this.accBeta1),r=G(-this.learningRate,_(x(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:ft(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:ft(i).variable(c)});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedWeightedInfNorm[a].variable,d=_(x(h,this.beta1),x(l,1-this.beta1)),b=x(u,this.beta2),w=ht(l),$=dc(b,w);h.assign(d),u.assign($);const y=_(x(G(r,s),G(d,_($,this.epsilon))),i);i.assign(y)}),this.iteration.assign(_(this.iteration,1)),this.accBeta1.assign(x(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ot(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ot(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dn extends Ut{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const a=m.registeredVariables[s];j(()=>{const i=_(x(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Ti(L(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ks extends Dn{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=L(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:j(()=>ft(o).variable(!1))});const a=this.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[s];i!=null&&j(()=>{let c;const l=_(x(this.m,a),i);this.useNesterov?c=_(x(this.c,_(i,x(l,this.m))),o):c=_(x(this.c,l),o),a.assign(l),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ot(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zs extends Ut{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=m.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=m.registeredVariables[s],a=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:j(()=>ft(o).variable(a))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:j(()=>ft(o).variable(a))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:j(()=>ft(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedMeanSquares[r].variable,l=this.accumulatedMoments[r].variable;j(()=>{const h=_(x(c,this.decay),x(mt(i),1-this.decay));if(this.centered){const u=this.accumulatedMeanGrads[r].variable,d=_(x(u,this.decay),x(i,1-this.decay)),b=G(x(i,this.learningRate),vt(N(h,_(mt(d),this.epsilon)))),w=_(x(l,this.momentum),b);c.assign(h),u.assign(d),l.assign(w);const $=N(o,w);o.assign($)}else{const u=_(x(c,this.decay),x(mt(i),1-this.decay)),d=_(x(l,this.momentum),G(x(i,this.learningRate),vt(_(u,this.epsilon))));c.assign(u),l.assign(d);const b=N(o,d);o.assign(b)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ot(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ot(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ot(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fy=[Ls,Ws,Us,Gs,Ks,zs,Dn];function Cy(){for(const e of Fy)Cc(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Py="model",Oy=".json",Ly=".weights.bin";function rr(e){return new Promise(t=>setTimeout(t)).then(e)}class te{constructor(t){if(!D().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(te.URL_SCHEME)&&(t=t.slice(te.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Py),this.modelJsonFileName=t+Oy,this.weightDataFileName=t+Ly}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=bt.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=Ni(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await rr(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=s,await rr(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:qe(t)}}}}te.URL_SCHEME="downloads://";class Wy{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{const o=JSON.parse(r.target.result),a=o.modelTopology;if(a==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const c=ks(o,l=>this.loadWeights(l));t(c)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const a of t)n.push(...a.weights),s.push(...a.paths);const r=this.checkManifestAndWeightFiles(t),o=s.map(a=>this.loadWeightsFile(a,r[a]));return Promise.all(o).then(a=>[n,a])}loadWeightsFile(t,n){return new Promise((s,r)=>{const o=new FileReader;o.onload=a=>{const i=a.target.result;s(i)},o.onerror=a=>r(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(o=>er(o.name)),r={};for(const o of t)o.paths.forEach(a=>{const i=er(a);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),s.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);r[a]=this.weightsFiles[s.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Uy=e=>D().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(te.URL_SCHEME)?Gy(e.slice(te.URL_SCHEME.length)):null;q.registerSaveRouter(Uy);function Gy(e="model"){return new te(e)}function Ky(e){return new Wy(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function or(e,t,n,s){a(e),n=n??0,s=s??1,i(n,s);let r=0;const o=c=>(c.then(l=>{const h=n+ ++r/e.length*(s-n);return t(h),l}),c);function a(c){p(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){p(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),p(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),p(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(e.map(o))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Pc(e,t){t==null&&(t={});const n=t.fetchFunc==null?D().platform.fetch:t.fetchFunc,s=e.map(u=>n(u,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(s):await or(s,t.onProgress,0,.5)).map(u=>u.arrayBuffer());return t.onProgress==null?await Promise.all(i):await or(i,t.onProgress,.5,1)}function zy(e,t){var n;const s=t.fetchFunc==null?D().platform.fetch:t.fetchFunc;let r=0,o;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async a=>{for(var i;r<e.length;){o||(o=(await s(e[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:l}=await o.read();if(c){r++,o=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,r/e.length);continue}a.enqueue(l);return}a.close()}})}async function qy(e,t="",n,s){return Oc(a=>Pc(a,{requestInit:s}))(e,t,n)}function Oc(e){return async(t,n="",s)=>{const r=t.map(()=>!1),o={},a=s!=null?s.map(()=>!1):[],i=[];if(t.forEach((b,w)=>{let $=0;b.weights.forEach(y=>{const S="quantization"in y?y.quantization.dtype:y.dtype,A=jt[S]*O(y.shape),E=()=>{r[w]=!0,o[w]==null&&(o[w]=[]),o[w].push({manifestEntry:y,groupOffset:$,sizeBytes:A})};s!=null?s.forEach((v,T)=>{v===y.name&&(E(),a[T]=!0)}):E(),i.push(y.name),$+=A})}),!a.every(b=>b)){const b=s.filter((w,$)=>!a[$]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=r.reduce((b,w,$)=>(w&&b.push($),b),[]),l=[];c.forEach(b=>{t[b].paths.forEach(w=>{const $=n+(n.endsWith("/")?"":"/")+w;l.push($)})});const h=await e(l),u={};let d=0;return c.forEach(b=>{const w=t[b].paths.length,$=new bt(h.slice(d,d+w));o[b].forEach(S=>{const A=$.slice(S.groupOffset,S.groupOffset+S.sizeBytes),E=Di(A,[S.manifestEntry]);for(const v in E)u[v]=E[v]}),d+=w}),u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vy="application/octet-stream",Hy="application/json";class qs{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(p(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=D().platform.fetch,p(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&p(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=Ni(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(r)],{type:Hy}),"model.json"),t.weightData!=null){const a=bt.join(t.weightData);n.body.append("model.weights.bin",new Blob([a],{type:Vy}),"model.weights.bin")}const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:qe(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return ks(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=Xn(t.weightsManifest),r=()=>zy(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=jy(n),o=this.weightPathPrefix||s,a=[],i=[];for(const c of t)for(const l of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(l)):a.push(o+l+r);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(t){const n=await this.getWeightUrls(t),s=Xn(t),r=await Pc(n,this.loadOptions);return[s,r]}}qs.URL_SCHEME_REGEX=/^https?:\/\//;function jy(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),s=e.substring(0,t),r=n>t?e.substring(n):"";return[s+"/",r]}function as(e){return e.match(qs.URL_SCHEME_REGEX)!=null}const Lc=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(s=>as(s)):n=as(e),n)return Vs(e,t)}return null};q.registerSaveRouter(Lc);q.registerLoadRouter(Lc);function Vs(e,t){return new qs(e,t)}function Xy(e,t){return Vs(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Wc{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Yy{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function Jy(e,t,n,s){const r=arguments;return new Yy(Uc(...r))}function Uc(e,t,n,s){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Fn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:s}))}function Zy(e){return new Wc(e)}function Qy(e){return new Wc(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t$=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:bt,browserFiles:Ky,browserHTTPRequest:Xy,concatenateArrayBuffers:Zu,copyModel:$h,decodeWeights:Di,decodeWeightsStream:ju,encodeWeights:qu,fromMemory:Jy,fromMemorySync:Uc,getLoadHandlers:ah,getModelArtifactsForJSON:ks,getModelArtifactsForJSONSync:Bi,getModelArtifactsInfoForJSON:qe,getSaveHandlers:oh,getWeightSpecs:Xn,http:Vs,isHTTPScheme:as,listModels:wh,loadWeights:qy,moveModel:kh,registerLoadRouter:rh,registerSaveRouter:sh,removeModel:yh,weightsLoaderFactory:Oc,withSaveHandler:Zy,withSaveHandlerSync:Qy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e$(e,t,n){const s=f(e,"labels","confusionMatrix"),r=f(t,"predictions","confusionMatrix");p(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),p(s.rank===1,()=>`Expected the rank of labels to be 1, but got ${s.rank}`),p(r.rank===1,()=>`Expected the rank of predictions to be 1, but got ${r.rank}`),p(s.shape[0]===r.shape[0],()=>`Mismatch in the number of examples: ${s.shape[0]} vs. ${r.shape[0]}. Labels and predictions should have the same number of elements.`),p(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const o=ss(K(s,"int32"),n),a=ss(K(r,"int32"),n),i=dn(o),c=P(i,a);return K(c,"int32")}const n$=g({confusionMatrix_:e$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s$=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:n$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Gt,ar=!1;function Gc(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,r=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(_e(Pn,m.backendName)!=null){const w={pixels:e},$={numChannels:t};return m.runKernel(Pn,w,$)}const[l,h]=r?[e.videoWidth,e.videoHeight]:[e.width,e.height];let u;if(a)u=e.getContext("2d").getImageData(0,0,l,h).data;else if(s||n)u=e.data;else if(o||r||i){if(Gt==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Gt=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Gt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Gt.canvas.width=l,Gt.canvas.height=h,Gt.drawImage(e,0,0,l,h),u=Gt.getImageData(0,0,l,h).data}let d;if(t===4)d=new Int32Array(u);else{const w=l*h;d=new Int32Array(w*t);for(let $=0;$<w;$++)for(let y=0;y<t;++y)d[$*t+y]=u[$*4+y]}return vc(d,[h,l,t],"int32")}function r$(e){return e!=null&&e.data instanceof Uint8Array}function o$(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function a$(e){return e!=null&&e.width!==0&&e.height!==0}function i$(e){return o$()&&!(e instanceof ImageBitmap)&&a$(e)&&!r$(e)}async function c$(e,t=3){let n=null;if(D().getBool("WRAP_TO_IMAGEBITMAP")&&i$(e)){let s;try{s=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===e.width&&s.height===e.height?n=s:n=e}else n=e;return Gc(n,t)}function Kc(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}function l$(e){const t=(e==null?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function u$(e,t){let n=f(e,"img","toPixels");if(!(e instanceof H)){const l=n;n=K(l,"int32"),l.dispose()}Kc(n);const[s,r]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2],a=await n.data(),i=n.dtype==="float32"?255:1,c=new Uint8ClampedArray(r*s*4);for(let l=0;l<s*r;++l){const h=[0,0,0,255];for(let d=0;d<o;d++){const b=a[l*o+d];if(n.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(n.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);o===1?(h[0]=b*i,h[1]=b*i,h[2]=b*i):h[d]=b*i}const u=l*4;c[u+0]=Math.round(h[0]),c[u+1]=Math.round(h[1]),c[u+2]=Math.round(h[2]),c[u+3]=Math.round(h[3])}if(t!=null){ar||_e(gs,m.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),ar=!0),t.width=r,t.height=s;const l=t.getContext("2d"),h=new ImageData(c,r,s);l.putImageData(h,0,0)}return n!==e&&n.dispose(),c}function h$(e,t,n){let s=f(e,"img","draw");if(!(e instanceof H)){const a=s;s=K(a,"int32"),a.dispose()}Kc(s),l$(n==null?void 0:n.imageOptions);const r={image:s},o={canvas:t,options:n};m.runKernel(gs,r,o)}const f$=g({fromPixels_:Gc}),d$=Object.freeze(Object.defineProperty({__proto__:null,draw:h$,fromPixels:f$,fromPixelsAsync:c$,toPixels:u$},Symbol.toStringTag,{value:"Module"}));function zc(e,t){const n=e.shape.length,s=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${n}`);if(O(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const r=t.shape,o=r[r.length-1];let a=1;for(let u=0;u<r.length-1;++u)a*=r[u];const i=e.shape,c=r.slice();c.pop();let l=1;for(let u=o;u<n;++u)l*=i[u],c.push(i[u]);const h=[...we(e.shape).map(u=>u/l),1].slice(0,o);return[c,a,l,h]}const p$=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:zc},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const is=-2,g$=-1;function m$(e,t,n){const s=e.shape.length;p(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),p(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)p(t[r]+n[r]<=e.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+n[r]}) would overflow input.shape[${r}] (${e.shape[r]})`)}function b$(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function w$(e,t,n){const s=[];for(let r=0;r<e.length;r++)s[r]=Math.ceil((t[r]-e[r])/n[r]);return s}function qc(e,t,n,s){const r=[...e];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<n;o++)o===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function Vc(e,t,n){return n<=e?n:n-(t-1)}function Hc(e,t){const n=[];for(let s=0;s<e;s++)n.push(t+s);return n}function y$(e,t,n,s,r,o,a,i,c){const l=e.length;let h=new Array(l),u=new Array(l),d=new Array(l);if(t.length&&n>0){const b=t[0],w=n+1;h=jc(a,b,w,s,e),u=Xc(i,b,w,r,e),d=qc(o,b,w,e)}else for(let b=0;b<l;b++)h[b]=Jc(a,s,o,e,b,c),u[b]=Zc(i,r,o,e,b,c),d[b]=Yc(o,b,c);return{begin:h,end:u,strides:d}}function jc(e,t,n,s,r){const o=[...r],a=Hc(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=Vc(t,n,i);let l=s[c];e&1<<c&&(l=0),o[i]=l}return o}function Xc(e,t,n,s,r){const o=[...r],a=Hc(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=Vc(t,n,i);let l=s[c];e&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[i]=l}for(let i=0;i<o.length;i++){const c=r[i];o[i]<0&&(o[i]+=c),o[i]=Ie(0,o[i],r[i])}return o}function Yc(e,t,n){let s=e[t];return(n&1<<t||s==null)&&(s=1),s}function Jc(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),a=Ie(0,a,c-1),a}function Zc(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),i>0?a=Ie(0,a,c):a=Ie(-1,a,c-1),a}function $$(e,t,n){let s=n.length;for(let r=0;r<n.length;r++)if(n[r]>1){s=r;break}for(let r=s+1;r<n.length;r++)if(t[r]>0||n[r]!==e[r])return!1;return!0}function k$(e,t){let n=e.length>0?e[e.length-1]:1;for(let s=0;s<e.length-1;s++)n+=e[s]*t[s];return n}function E$(e,t,n){let s;const r=e.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(a=>{p(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(r).fill(-1):typeof n=="number"?o=[n,...new Array(r-1).fill(-1)]:n.length<r?o=n.concat(new Array(r-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(p(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-s[i])),[s,o]}function S$(e,t,n,s,r,o,a,i,c){let l;if(s==null?(l=new Array(t.length),l.fill(1)):l=s,a!=null&&(a&a-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const u={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let E=0;E<u.dims;E++)h&&(1<<E&i)!==0&&u.numAddAxisAfterEllipsis++,1<<E&a&&(h=!0);h||(u.ellipsisMask|=1<<u.dims,u.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};x$(u,d);let b=!0,w=!0,$=!0;const y=[],S=[];for(let E=0;E<e.length;++E){if(d.strides[E]===0)throw Error(`strides[${E}] must be non-zero`);const v=!!(d.shrinkAxisMask&1<<E),T=e[E];if(T===-1){y.push(v?1:-1);continue}const I=[d.beginMask&1<<E,d.endMask&1<<E],R=[d.strides[E]>0?0:-1,d.strides[E]>0?T:T-1];if(v&&d.strides[E]<=0)throw Error("only stride 1 allowed on non-range indexing.");$=$&&d.strides[E]===1;const B=!!(d.beginMask&1<<E&&d.endMask&1<<E);if(d.beginValid&&d.endValid){if(v){const Y=d.begin[E]<0?T+d.begin[E]:d.begin[E];if(d.begin[E]=Y,d.end[E]=d.begin[E]+1,Y<0||Y>=T)throw Error(`slice index ${d.begin[E]} of dimension ${E} out of bounds.`)}else d.begin[E]=ir(d.begin[E],0,d.strides[E],T,I,R),d.end[E]=ir(d.end[E],1,d.strides[E],T,I,R);const F=d.strides[E]===1&&d.begin[E]===0&&d.end[E]===T;b=b&&F,w=w&&(E===0&&d.strides[E]===1||F)}else b=b&&d.strides[E]===1&&B,w=w&&(E===0&&d.strides[E]===1||B);let M,C=!1;if(d.beginValid&&d.endValid?(M=d.end[E]-d.begin[E],C=!0):v?(M=1,C=!0):B&&T>=0&&(d.strides[E]<0?M=-T:M=T,C=!0),C){let F;M===0||M<0!=d.strides[E]<0?F=0:F=Math.trunc(M/d.strides[E])+(M%d.strides[E]!==0?1:0),y.push(F)}else y.push(-1)}for(let E=0;E<d.finalShapeGatherIndices.length;++E){const v=d.finalShapeGatherIndices[E];v>=0?S.push(y[v]):v===is&&S.push(1)}return{finalShapeSparse:S.filter((E,v)=>d.finalShapeGatherIndices[v]!==is),finalShape:S,isIdentity:b,sliceDim0:w,isSimpleSlice:$,begin:d.begin,end:d.end,strides:d.strides}}function x$(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<e.dims;s++)if(1<<s&e.ellipsisMask){const r=Math.min(t.dims-(e.dims-s)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<r;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&e.newAxisMask)t.finalShapeGatherIndices.push(is),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[s]),e.end!=null&&(t.end[n]=e.end[s]),t.strides[n]=e.strides[s],e.beginMask&1<<s&&(t.beginMask|=1<<n),e.endMask&1<<s&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(g$),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[n]=s,n++}}function ir(e,t,n,s,r,o){if(r[t])return n>0?o[t]:o[t+1&1];{const a=e<0?s+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const Qc=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:m$,computeFlatOffset:k$,computeOutShape:w$,getNormalizedAxes:y$,isSliceContinous:$$,maskToAxes:b$,parseSliceParams:E$,sliceInfo:S$,startForAxis:Jc,startIndicesWithElidedDims:jc,stopForAxis:Zc,stopIndicesWithElidedDims:Xc,stridesForAxis:Yc,stridesWithElidedDims:qc},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const v$="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tl{static sgd(t){return new Dn(t)}static momentum(t,n,s=!1){return new Ks(t,n,s)}static rmsprop(t,n=.9,s=0,r=null,o=!1){return new zs(t,n,s,r,o)}static adam(t=.001,n=.9,s=.999,r=null){return new Us(t,n,s,r)}static adadelta(t=.001,n=.95,s=null){return new Ls(t,n,s)}static adamax(t=.002,n=.9,s=.999,r=null,o=0){return new Gs(t,n,s,r,o)}static adagrad(t,n=.1){return new Ws(t,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I$=tl;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T$=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e();function _$(){return new Promise(e=>T$(()=>e()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A$(e,t){const n=e[0].length;e.forEach((r,o)=>{p(r.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),p(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=e[0];e.forEach((r,o)=>{for(let a=0;a<n;a++)p(a===t||r[a]===s[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function D$(e,t){const n=e[0].slice();for(let s=1;s<e.length;s++)n[t]+=e[s][t];return n}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var wt;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(wt||(wt={}));function M$(e,t,n){let s=new Array;if(n==null&&t==null)return s;if(t==null)for(;s.length<e+n.length;)s.push(-1);else s=t.slice();if(n==null)return s;if(e+n.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${s.length}`);for(let r=1;r<n.length;++r){const o=n[r],a=s[s.length-n.length+r],i=s[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+e}] = ${o} but shape[${r+e}] = ${i}`)}else s[a]=o}return s}function N$(e){const t={FIRST_DIM_SIZE:wt.FIRST_DIM_SIZE,VALUE_ROWIDS:wt.VALUE_ROWIDS,ROW_LENGTHS:wt.ROW_LENGTHS,ROW_SPLITS:wt.ROW_SPLITS,ROW_LIMITS:wt.ROW_LIMITS,ROW_STARTS:wt.ROW_STARTS},n=[];for(const s of e)if(s in t)n.push(t[s]);else break;return n}function B$(e){return e.length===0?0:e[0]===wt.FIRST_DIM_SIZE?e.length-1:e.length}function R$(e,t){if(e==null||t==null)return;const n=e.length,s=t.length;if(n>=s)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(n,s-1);++r){const o=e[r],a=t[r+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-e.length}] = ${o} but ragged tensor input.flatValues.shape[${r-e.length}] = ${a}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hs=30;function F$(e){return e<=Hs?e:rn(e,Math.floor(Math.sqrt(e)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C$(e,t,n){const s=n*(typeof e=="number"?e:e[0]),r=t*(typeof e=="number"?e:e[1]);return[s,r]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P$(e,t,n,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(e[0]/n),r=r.concat(e.slice(1));else{r=r.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)r=r.concat([e[a+1]/t[a],t[a]]);r=r.concat(e.slice(o+1))}return r}function O$(e,t,n=!0){const s=[];if(n){s.push(t);for(let r=t+1;r<e;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):r.push(a);s.push(...r),s.push(0),s.push(...o)}return s}function L$(e,t,n,s=!0){const r=[];s?r.push(e[0]/n):r.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?s?r.push(t[o-1]*e[o]):r.push(e[o]/t[o-1]):r.push(e[o]);return r}function W$(e,t){const n=[0];for(let s=0;s<t;++s)n.push(e[s][0]);return n}function U$(e,t,n){const s=e.slice(0,1);for(let r=0;r<n;++r)s.push(e[r+1]-t[r][0]-t[r][1]);return s}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G$=1.7580993408473768,K$=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z$=.3275911,q$=.254829592,V$=-.284496736,H$=1.421413741,j$=-1.453152027,X$=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y$(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let s=0;s<n.length;s+=2)n[s]=e[s/2],n[s+1]=t[s/2];return n}function J$(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let s=0;s<e.length;s+=2)t[s/2]=e[s],n[s/2]=e[s+1];return{real:t,imag:n}}function Z$(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function Q$(e){const t=Math.floor(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function t1(e,t){const n=e[t*2],s=e[t*2+1];return{real:n,imag:s}}function e1(e,t,n,s){e[s*2]=t,e[s*2+1]=n}function n1(e,t){const n=new Float32Array(e/2),s=new Float32Array(e/2);for(let r=0;r<Math.ceil(e/2);r++){const o=(t?2:-2)*Math.PI*(r/e);n[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:n,imag:s}}function s1(e,t,n){const s=(n?2:-2)*Math.PI*(e/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cn="->",r1=/->/g,cr=",",lr="...";function o1(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(r1,"").length)/Cn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Cn}").`);const[s,r]=e.split(Cn);p(s.indexOf(lr)===-1,()=>`The ellipsis notation ("${lr}") is not supported yet.`);const o=s.split(cr),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let d=0;d<r.length;++d){const b=r[d];if(!o.some(w=>w.indexOf(b)!==-1))throw new Error(`Output subscripts contain the label ${b} not present in the input subscripts.`);i.indexOf(b)===-1&&i.push(b)}for(let d=0;d<s.length;++d){const b=s[d];i.indexOf(b)===-1&&b!==cr&&i.push(b)}const c=new Array(o.length);for(let d=0;d<a;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);c[d]=[];for(let b=0;b<o[d].length;++b)c[d].push(i.indexOf(o[d][b]))}const l=i.length,h=r.length,u=[];for(let d=h;d<l;++d)u.push(d);return{allDims:i,summedDims:u,idDims:c}}function a1(e,t){let n=new Array(e);n.fill(-1);for(let r=0;r<t.length;++r)n[t[r]]=r;const s=[];for(let r=0;r<e;++r)n[r]===-1&&s.push(r);return n=n.filter(r=>r!==-1),{permutationIndices:n,expandDims:s}}function i1(e,t,n){const s=new Array(e);for(let r=0;r<n.length;++r){const o=n[r].shape;for(let a=0;a<t[r].length;++a)s[t[r][a]]===void 0?s[t[r][a]]=o[a]:p(s[t[r][a]]===o[a],()=>`Expected dimension ${s[t[r][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function c1(e,t){const n=e,s=[];let r=0;e.length===0&&n.push(-1),r=e.length+1;for(let a=0;a<r;++a)s.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=u1(t,i);for(const l of c)o.indexOf(l)===-1&&(s[a].push(l),o.push(l))}return{path:n,steps:s}}function l1(e){return e.every((t,n)=>t===n)}function u1(e,t){const n=[];for(let s=0;s<e.length;++s)(e[s].length===0||e[s].indexOf(t)!==-1||t===-1)&&n.push(s);return n}function h1(e,t,n=0){let s=[];if(typeof t=="number")p(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(e.shape[n]/t);else{const r=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);p(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}p(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f1(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function d1(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function p1(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g1(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function m1(e,t){return`size ${e} must be non-negative, not ${t}`}function b1(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function w1(e,t){const n=O(e),s=O(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${e} outputShape= ${t}`}function y1(e,t){const n=O(e),s=O(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${e} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $1(){return"segment ids must be >= 0"}function k1(){return"segment ids are not increasing"}function E1(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function S1(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x1(e,t){let n=!1,s;for(e<=Hs?(s=e,n=!0):s=rn(e,Math.floor(Math.sqrt(e)));!n;)s>t||s===e?n=!0:s=rn(e,s+1);return s}function v1(e,t,n){const s=[],r=e.length;for(let o=0;o<r;o++)o!==t?s.push(e[o]):s.push(n);return s}function I1(e,t,n,s){const r=t.shape.length,o=e.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let u=0;u<s;++u)if(e.shape[u]!==t.shape[u])throw new Error(`x.shape[${u}]: ${e.shape[u]} should be equal to indices.shape[${u}]: ${t.shape[u]}.`);const a=e.shape[n],i=[];let c=1,l=1,h=1;for(let u=0;u<s;++u)i.push(e.shape[u]),c*=e.shape[u];for(let u=s;u<n;u++)i.push(e.shape[u]),l*=e.shape[u];for(let u=s;u<r;u++)i.push(t.shape[u]);for(let u=n+1;u<o;u++)i.push(e.shape[u]),h*=e.shape[u];return{batchSize:c,sliceSize:h,outerSize:l,dimSize:a,outputShape:i}}const T1=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:I1,computeOutShape:v1,segOpComputeOptimalWindowSize:x1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _1(e){try{return e.map(t=>an(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function A1(e){return e.map(t=>ze(t))}const D1=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:q$,ERF_A2:V$,ERF_A3:H$,ERF_A4:j$,ERF_A5:X$,ERF_P:z$,PARALLELIZE_THRESHOLD:Hs,get RowPartitionType(){return wt},SELU_SCALE:K$,SELU_SCALEALPHA:G$,applyActivation:_n,assertAndGetBroadcastShape:X,assertAxesAreInnerMostDims:Od,assertParamsConsistent:A$,assignToTypedArray:e1,axesAreInnerMostDims:vs,calculateShapes:Ic,checkEinsumDimSizes:i1,checkPadOnDimRoundingMode:pt,combineLocations:Qi,combineRaggedTensorToTensorShapes:M$,complexWithEvenIndex:Z$,complexWithOddIndex:Q$,computeConv2DInfo:Ve,computeConv3DInfo:zi,computeDefaultPad:Es,computeDilation2DInfo:sf,computeOptimalWindowSize:F$,computeOutAndReduceShapes:Pd,computeOutShape:D$,computePool2DInfo:Ki,computePool3DInfo:rf,convertConv2DDataFormat:qi,decodeEinsumEquation:o1,eitherStridesOrDilationsAreOne:Tt,expandShapeToKeepDim:je,exponent:s1,exponents:n1,fromStringArrayToUint8:A1,fromUint8ToStringArray:_1,getAxesPermutation:Ld,getBroadcastDims:Yi,getComplexWithIndex:t1,getEinsumComputePath:c1,getEinsumPermutation:a1,getFusedBiasGradient:Tn,getFusedDyActivation:In,getImageCenter:C$,getInnerMostAxes:Ud,getPermuted:O$,getRaggedRank:B$,getReductionAxes:xs,getReshaped:P$,getReshapedPermuted:L$,getRowPartitionTypesHelper:N$,getSliceBeginCoords:W$,getSliceSize:U$,getSparseFillEmptyRowsIndicesDenseShapeMismatch:f1,getSparseFillEmptyRowsNegativeIndexErrorMessage:d1,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:p1,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:b1,getSparseReshapeInputOutputMismatchErrorMessage:y1,getSparseReshapeInputOutputMultipleErrorMessage:w1,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:g1,getSparseReshapeNegativeOutputDimErrorMessage:m1,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:S1,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:$1,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:k1,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:E1,getUndoAxesPermutation:Wd,isIdentityPermutation:l1,log:Hl,mergeRealAndImagArrays:Y$,prepareAndValidate:zc,prepareSplitSize:h1,segment_util:T1,shouldFuse:An,slice_util:Qc,splitRealAndImagArrays:J$,stridesOrDilationsArePositive:Jt,tupleValuesAreOne:Re,upcastType:bn,validateDefaultValueShape:R$,validateInput:vn,validateUpdateShape:Fs,warn:Dt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M1=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:Nc,nonMaxSuppressionV4Impl:Bc,nonMaxSuppressionV5Impl:Rc,whereImpl:Tc},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Cy();const B1=Object.freeze(Object.defineProperty({__proto__:null,Abs:Sr,Acos:xr,Acosh:vr,AdadeltaOptimizer:Ls,AdagradOptimizer:Ws,AdamOptimizer:Us,AdamaxOptimizer:Gs,Add:ds,AddN:Ir,All:Tr,Any:_r,ArgMax:Ar,ArgMin:Dr,Asin:Mr,Asinh:Nr,Atan:Br,Atan2:Fr,Atanh:Rr,AvgPool:Cr,AvgPool3D:Pr,AvgPool3DGrad:Al,AvgPoolGrad:_l,BatchMatMul:Or,BatchToSpaceND:Lr,Bincount:Wr,BitwiseAnd:Ur,BroadcastArgs:Gr,BroadcastTo:Dl,Cast:ps,Ceil:Kr,ClipByValue:zr,Complex:qr,ComplexAbs:Vr,Concat:Hr,Conv2D:jr,Conv2DBackpropFilter:Xr,Conv2DBackpropInput:Yr,Conv3D:Jr,Conv3DBackpropFilterV2:Ml,Conv3DBackpropInputV2:Zr,Cos:Qr,Cosh:to,CropAndResize:so,Cumprod:eo,Cumsum:no,DataStorage:al,DenseBincount:ro,DepthToSpace:oo,DepthwiseConv2dNative:ao,DepthwiseConv2dNativeBackpropFilter:io,DepthwiseConv2dNativeBackpropInput:co,Diag:lo,Dilation2D:uo,Dilation2DBackpropFilter:Bl,Dilation2DBackpropInput:Nl,Draw:gs,get ENV(){return hs},Einsum:fo,Elu:po,EluGrad:Rl,Environment:kr,Equal:mo,Erf:go,Exp:bo,ExpandDims:wo,Expm1:yo,FFT:$o,Fill:ko,FlipLeftRight:Eo,Floor:So,FloorDiv:xo,FromPixels:Pn,FusedBatchNorm:vo,FusedConv2D:Ln,FusedDepthwiseConv2D:Wn,GatherNd:To,GatherV2:Io,Greater:_o,GreaterEqual:Ao,IFFT:Do,Identity:ms,Imag:Mo,IsFinite:No,IsInf:Bo,IsNan:Ro,KernelBackend:ur,LRN:zo,LRNGrad:Ol,LeakyRelu:Fo,Less:Co,LessEqual:Po,LinSpace:Oo,Log:Lo,Log1p:Wo,LogSoftmax:Cl,LogicalAnd:Uo,LogicalNot:Go,LogicalOr:Ko,LogicalXor:Fl,LowerBound:Pl,MatrixBandPart:Ll,Max:qo,MaxPool:Ho,MaxPool3D:jo,MaxPool3DGrad:Ul,MaxPoolGrad:Wl,MaxPoolWithArgmax:Xo,Maximum:Vo,Mean:Yo,Min:Jo,Minimum:Zo,MirrorPad:Qo,Mod:ta,MomentumOptimizer:Ks,Multinomial:ea,Multiply:na,Neg:sa,NonMaxSuppressionV3:oa,NonMaxSuppressionV4:aa,NonMaxSuppressionV5:ia,NotEqual:ra,OP_SCOPE_SUFFIX:Ii,OneHot:la,OnesLike:ca,Optimizer:Ut,OptimizerConstructors:tl,Pack:ua,PadV2:ha,Pool:Gl,Pow:fa,Prelu:da,Prod:pa,RMSPropOptimizer:zs,RaggedGather:ga,RaggedRange:ma,RaggedTensorToTensor:ba,Range:wa,get Rank(){return Kn},Real:ya,RealDiv:ho,Reciprocal:$a,get Reduction(){return st},Relu:ka,Relu6:va,Reshape:Ea,ResizeBilinear:xa,ResizeBilinearGrad:zl,ResizeNearestNeighbor:Sa,ResizeNearestNeighborGrad:Kl,Reverse:Ia,RotateWithOffset:fi,Round:Ta,Rsqrt:_a,SGDOptimizer:Dn,ScatterNd:Aa,SearchSorted:Ma,Select:Na,Selu:Ba,Sigmoid:Oa,Sign:Pa,Sin:Fa,Sinh:Ca,Slice:Ra,Softmax:za,Softplus:La,SpaceToBatchND:Ga,SparseFillEmptyRows:qa,SparseReshape:Va,SparseSegmentMean:Ha,SparseSegmentSum:ja,SparseToDense:Xa,SplitV:Ka,Sqrt:Wa,Square:ql,SquaredDifference:Ya,StaticRegexReplace:Ja,Step:hi,StridedSlice:Za,StringNGrams:Qa,StringSplit:ti,StringToHashBucketFast:ei,Sub:ni,Sum:Ua,Tan:si,Tanh:ri,Tensor:H,TensorBuffer:cn,TensorScatterUpdate:Da,Tile:bs,TopK:oi,Transform:ai,Transpose:Ze,Unique:ii,Unpack:ci,UnsortedSegmentSum:li,UpperBound:Vl,Variable:De,ZerosLike:ui,_FusedMatMul:On,abs:ht,acos:Rh,acosh:Ch,add:_,addN:Oh,all:Wh,any:Gh,argMax:zh,argMin:Vh,asin:jh,asinh:Yh,atan:Zh,atan2:tf,atanh:nf,avgPool:Vi,avgPool3d:df,backend:Ai,backend_util:D1,basicLSTMCell:$f,batchNorm:wn,batchNorm2d:vf,batchNorm3d:Tf,batchNorm4d:Af,batchToSpaceND:Hi,bincount:ji,bitwiseAnd:Nf,booleanMaskAsync:$b,broadcastArgs:Rf,broadcastTo:en,broadcast_util:Sd,browser:d$,buffer:xt,cast:K,ceil:Pf,clipByValue:Lf,clone:Ht,complex:Ot,concat:lt,concat1d:Uf,concat2d:Kf,concat3d:qf,concat4d:Hf,conv1d:Yf,conv2d:yn,conv2dTranspose:Qf,conv3d:ed,conv3dTranspose:od,copyRegisteredKernels:Jl,cos:id,cosh:ld,cosineWindow:Ps,cumprod:hd,cumsum:dd,customGrad:kt,denseBincount:gd,deprecationWarn:Nu,depthToSpace:bd,depthwiseConv2d:Ss,device_util:Iu,diag:$d,dilation2d:Ed,disableDeprecationWarnings:Mu,dispose:ot,disposeVariables:Bu,div:G,divNoNan:_d,dot:Dd,dropout:Bb,einsum:ie,elu:Zi,enableDebugMode:Du,enableProdMode:Au,enclosingPowerOfTwo:Ac,engine:Ru,ensureShape:Rd,env:D,equal:Ji,erf:Cd,euclideanNorm:Yd,exp:Zt,expandDims:At,expm1:tp,eye:ec,fft:Ns,fill:He,findBackend:Uu,findBackendFactory:Gu,floor:nc,floorDiv:Gi,fused:jb,gather:sc,gatherND:Db,gather_util:p$,getBackend:_i,getGradient:Un,getKernel:_e,getKernelsForBackend:on,grad:Ep,grads:Sp,greater:kn,greaterEqual:rc,ifft:fn,imag:En,image:Ty,inTopKAsync:Fb,io:t$,irfft:Ec,isFinite:lp,isInf:hp,isNaN:dp,keep:Ti,kernel_impls:M1,leakyRelu:oc,less:ns,lessEqual:Is,linalg:_y,linspace:bp,localResponseNormalization:yp,log:Ce,log1p:ac,logSigmoid:Ap,logSoftmax:Np,logSumExp:lc,logicalAnd:ln,logicalNot:uc,logicalOr:hc,logicalXor:Op,losses:Ay,lowerBound:Wp,matMul:P,math:s$,max:de,maxPool:fc,maxPool3d:Kp,maxPoolWithArgmax:qp,maximum:dc,mean:un,memory:Fu,meshgrid:jp,min:es,minimum:hn,mirrorPad:Jp,mod:Qp,moments:eg,movingAverage:Sb,mul:x,multiRNNCell:sg,multinomial:og,neg:yt,nextFrame:_$,norm:$n,notEqual:pc,oneHot:ss,ones:Vt,onesLike:lg,op:g,outerProduct:hg,pad:Xe,pad1d:pg,pad2d:mg,pad3d:wg,pad4d:$g,pool:vg,pow:Fe,prelu:mc,print:Ui,prod:_g,profile:Cu,raggedGather:Dg,raggedRange:Ng,raggedTensorToTensor:Rg,rand:Cg,randomGamma:Yg,randomNormal:yc,randomStandardNormal:Qg,randomUniform:Ms,randomUniformInt:nm,range:Pe,ready:Lu,real:Oe,reciprocal:om,registerBackend:Ku,registerGradient:jl,registerKernel:di,relu:xn,relu6:$c,removeBackend:Wu,reshape:k,reverse:Qt,reverse1d:um,reverse2d:fm,reverse3d:pm,reverse4d:mm,rfft:Bs,round:kc,rsqrt:ym,scalar:L,scatterND:vb,scatter_util:rb,searchSorted:Ts,selu:km,separableConv2d:Sm,serialization:Ry,setBackend:Ou,setPlatform:zu,setdiff1dAsync:vm,sigmoid:fe,sign:Tm,signal:Iy,sin:Am,sinh:Mm,slice:z,slice1d:Bm,slice2d:Fm,slice3d:Pm,slice4d:Lm,slice_util:Qc,softmax:Um,softplus:cc,spaceToBatchND:gc,sparse:Dy,sparseToDense:_b,spectral:vy,split:Le,sqrt:vt,square:mt,squaredDifference:Sc,squeeze:Rs,stack:We,step:xc,stridedSlice:Zm,string:My,sub:N,sum:U,sumOutType:bu,tan:tb,tanh:ts,tensor:le,tensor1d:dt,tensor2d:ve,tensor3d:vc,tensor4d:eb,tensor5d:nb,tensor6d:sb,tensorScatterUpdate:ab,tensor_util:$u,test_util:Vg,tidy:j,tile:xe,time:Pu,topk:cb,train:I$,transpose:dn,truncatedNormal:ub,unique:fb,unregisterGradient:Yl,unregisterKernel:Xl,unsortedSegmentSum:pb,unstack:Cs,upcastType:bn,upperBound:mb,util:au,valueAndGrad:xp,valueAndGrads:vp,variable:bb,variableGrads:ic,version_core:v$,where:Ft,whereAsync:_c,zeros:be,zerosLike:ft},Symbol.toStringTag,{value:"Module"}));export{_r as $,X as A,fl as B,qr as C,al as D,z$ as E,ko as F,bn as G,_1 as H,ms as I,Sr as J,ur as K,xr as L,vr as M,ds as N,Ir as O,Pd as P,Ue as Q,Ea as R,K$ as S,Ze as T,Ld as U,Ud as V,Od as W,je as X,bu as Y,Tr as Z,On as _,It as a,Nl as a$,Ar as a0,Dr as a1,Mr as a2,Nr as a3,Br as a4,Fr as a5,Rr as a6,qo as a7,Yo as a8,Cr as a9,Mo as aA,Hr as aB,A$ as aC,jr as aD,qi as aE,Ve as aF,Xr as aG,Yr as aH,Jr as aI,zi as aJ,Ml as aK,Zr as aL,Qr as aM,to as aN,so as aO,Wd as aP,eo as aQ,no as aR,ro as aS,oo as aT,ao as aU,io as aV,co as aW,lo as aX,uo as aY,sf as aZ,Bl as a_,Ki as aa,Pr as ab,rf as ac,Al as ad,_l as ae,Or as af,Ra as ag,E$ as ah,m$ as ai,Lr as aj,P$ as ak,O$ as al,L$ as am,W$ as an,U$ as ao,Wr as ap,Gr as aq,ra as ar,ya as as,ps as at,be as au,wl as av,Kr as aw,zr as ax,Vr as ay,D$ as az,p as b,la as b$,gs as b0,na as b1,Ua as b2,fo as b3,o1 as b4,i1 as b5,c1 as b6,a1 as b7,l1 as b8,po as b9,Co as bA,Po as bB,Oo as bC,Lo as bD,Wo as bE,Uo as bF,Go as bG,Ko as bH,zo as bI,Ol as bJ,Vo as bK,Ho as bL,jo as bM,Ul as bN,Wl as bO,Xo as bP,Jo as bQ,Zo as bR,Qo as bS,ta as bT,za as bU,ea as bV,sa as bW,oa as bX,Nc as bY,ia as bZ,Rc as b_,Rl as ba,mo as bb,go as bc,bo as bd,wo as be,yo as bf,$o as bg,Eo as bh,So as bi,xo as bj,Pn as bk,vo as bl,Ln as bm,Wn as bn,Tt as bo,To as bp,zc as bq,Io as br,I1 as bs,_o as bt,Ao as bu,Do as bv,No as bw,Bo as bx,Ro as by,Fo as bz,we as c,Fl as c$,ui as c0,ca as c1,ua as c2,rt as c3,ha as c4,fa as c5,da as c6,pa as c7,wa as c8,ho as c9,Xa as cA,pn as cB,Ka as cC,h1 as cD,Wa as cE,ql as cF,Ya as cG,hi as cH,Za as cI,S$ as cJ,w$ as cK,Qa as cL,ni as cM,si as cN,ri as cO,Da as cP,oi as cQ,ai as cR,ci as cS,li as cT,v1 as cU,di as cV,le as cW,$$ as cX,k$ as cY,Ur as cZ,A1 as c_,$a as ca,ka as cb,va as cc,xa as cd,zl as ce,Sa as cf,Kl as cg,Ia as ch,fi as ci,C$ as cj,Ta as ck,_a as cl,Aa as cm,Ic as cn,Ma as co,Na as cp,Ba as cq,Oa as cr,Pa as cs,Fa as ct,Ca as cu,La as cv,Ga as cw,Ha as cx,ja as cy,bs as cz,Ru as d,Ch as d$,aa as d0,qa as d1,p1 as d2,d1 as d3,f1 as d4,Va as d5,y1 as d6,w1 as d7,m1 as d8,g1 as d9,su as dA,pe as dB,F$ as dC,Bc as dD,ga as dE,ma as dF,ba as dG,Ja as dH,x1 as dI,El as dJ,kl as dK,mn as dL,N$ as dM,B$ as dN,wt as dO,R$ as dP,M$ as dQ,k as dR,en as dS,cn as dT,nn as dU,nu as dV,ce as dW,Ht as dX,Ii as dY,ht as dZ,Rh as d_,b1 as da,$1 as db,S1 as dc,E1 as dd,k1 as de,ti as df,ei as dg,ii as dh,Ae as di,sn as dj,Nu as dk,ou as dl,pl as dm,Se as dn,cl as dp,dr as dq,vu as dr,D1 as ds,ml as dt,Dt as du,Tc as dv,j as dw,_$ as dx,L as dy,xi as dz,D as e,He as e$,_ as e0,Oh as e1,Wh as e2,Gh as e3,zh as e4,Vh as e5,jh as e6,Yh as e7,Zh as e8,tf as e9,od as eA,id as eB,ld as eC,Ps as eD,hd as eE,dd as eF,gd as eG,bd as eH,Ss as eI,$d as eJ,Ed as eK,G as eL,_d as eM,Dd as eN,Bb as eO,ie as eP,Zi as eQ,Ac as eR,Rd as eS,Ji as eT,Cd as eU,Yd as eV,Zt as eW,At as eX,tp as eY,ec as eZ,Ns as e_,nf as ea,Vi as eb,df as ec,$f as ed,wn as ee,vf as ef,Tf as eg,Af as eh,Hi as ei,ji as ej,Nf as ek,$b as el,Rf as em,K as en,Pf as eo,Lf as ep,Ot as eq,lt as er,Uf as es,Kf as et,qf as eu,Hf as ev,Yf as ew,yn as ex,Qf as ey,ed as ez,yl as f,Fe as f$,nc as f0,Gi as f1,jb as f2,sc as f3,Db as f4,kn as f5,rc as f6,fn as f7,En as f8,Ty as f9,qp as fA,dc as fB,un as fC,jp as fD,es as fE,hn as fF,Jp as fG,Qp as fH,eg as fI,Sb as fJ,x as fK,sg as fL,og as fM,yt as fN,$n as fO,pc as fP,ss as fQ,Vt as fR,lg as fS,g as fT,hg as fU,Xe as fV,pg as fW,mg as fX,wg as fY,$g as fZ,vg as f_,Fb as fa,Ec as fb,lp as fc,hp as fd,dp as fe,oc as ff,ns as fg,Is as fh,_y as fi,bp as fj,yp as fk,Ce as fl,ac as fm,Ap as fn,Np as fo,lc as fp,ln as fq,uc as fr,hc as fs,Op as ft,Ay as fu,Wp as fv,P as fw,de as fx,fc as fy,Kp as fz,Yi as g,nb as g$,mc as g0,Ui as g1,_g as g2,Dg as g3,Ng as g4,Rg as g5,Cg as g6,Yg as g7,yc as g8,Qg as g9,Bm as gA,Fm as gB,Pm as gC,Lm as gD,Um as gE,cc as gF,gc as gG,Dy as gH,_b as gI,vy as gJ,Le as gK,vt as gL,mt as gM,Sc as gN,Rs as gO,We as gP,xc as gQ,Zm as gR,My as gS,N as gT,U as gU,tb as gV,ts as gW,dt as gX,ve as gY,vc as gZ,eb as g_,Ms as ga,nm as gb,Pe as gc,Oe as gd,om as ge,xn as gf,$c as gg,Qt as gh,um as gi,fm as gj,pm as gk,mm as gl,Bs as gm,kc as gn,ym as go,vb as gp,Ts as gq,km as gr,Sm as gs,vm as gt,fe as gu,Tm as gv,Iy as gw,Am as gx,Mm as gy,z as gz,an as h,sb as h0,ab as h1,xe as h2,cb as h3,dn as h4,ub as h5,fb as h6,pb as h7,Cs as h8,mb as h9,bb as ha,Ft as hb,_c as hc,ft as hd,Ti as he,gn as hf,t$ as hg,ju as hh,H as hi,ot as hj,B1 as hk,f$ as hl,xt as i,Pt as j,ll as k,Nt as l,Y$ as m,ze as n,pr as o,G$ as p,q$ as q,Ku as r,O as s,V$ as t,H$ as u,j$ as v,X$ as w,Ge as x,ls as y,bl as z};
