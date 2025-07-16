import{A as Z,c as O,s as x,o as L,g as q,dJ as j,dK as z,dL as B,cB as _,i as P,y as v,dA as H,P as J,G as Q,dM as X,dN as Y,dO as tt,dP as et,dQ as nt,b as ot,dw as rt,dR as st,dS as lt,dT as it,d4 as at,d3 as ct,d2 as ut,d9 as ht,d8 as ft,da as pt,d7 as gt,d6 as wt,db as W,de as dt,dd as mt,dc as It,dU as V}from"./index-CifxtSSM.js";import{c as Et,r as Rt,s as St,a as yt,b as Tt,d as Mt,u as vt}from"./Unique_impl-BLiGiwCo.js";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xt(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}/**
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
 */function S(e){return(t,n,o,r,a)=>{const s=Z(t,n),l=s.length,i=O(s),c=x(s),h=L(a,c),f=t.length,w=n.length,d=O(t),g=O(n),I=q(t,s),u=q(n,s);if(I.length+u.length===0)for(let p=0;p<h.length;++p)h[p]=e(o[p%o.length],r[p%r.length]);else for(let p=0;p<h.length;++p){const m=j(p,l,i),R=m.slice(-f);I.forEach(b=>R[b]=0);const E=z(R,f,d),y=m.slice(-w);u.forEach(b=>y[b]=0);const T=z(y,w,g);h[p]=e(o[E],r[T])}return[h,s]}}/**
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
 */function bt(e,t,n,o){if(o==="int32"){const r=Int32Array.from(e);return[t,"int32",r]}if(o==="bool"){const r=B([0],n),[a,s]=S((l,i)=>l!==i?1:0)(t,[],e,r,"bool");return[s,"bool",a]}throw new Error(`Error in Cast: failed to cast ${n} to ${o}`)}/**
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
 */const Pt=S((e,t)=>e+t);/**
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
 */function Dt(e,t,n,o,r){const a=x(o),s=_(r,n);for(let l=0;l<e.length;l++){const i=e[l];if(i<0)throw new Error("Input x must be non-negative!");i>=r||(a>0?s[i]+=t[l]:s[i]+=1)}return s}function Ot(e,t,n,o=!1){const r=e.shape[0],a=e.shape[1],s=P([r,n],t.dtype);for(let l=0;l<r;l++)for(let i=0;i<a;i++){const c=e.get(l,i);if(c<0)throw new Error("Input x must be non-negative!");c>=n||(o?s.set(1,l,c):t.size>0?s.set(s.get(l,c)+t.get(l,i),l,c):s.set(s.get(l,c)+1,l,c))}return s}/**
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
 */const Vt=S((e,t)=>e&t);/**
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
 */function D(e){return(t,n,o)=>{const r=v(n,t.length);for(let a=0;a<t.length;++a)r[a]=e(t[a],o);return r}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const At=D(e=>Math.ceil(e));/**
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
 */const Lt=S((e,t)=>e===t?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ft=D(e=>Math.exp(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $t=D(e=>Math.expm1(e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zt=D(e=>Math.floor(e));/**
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
 */const jt=S((e,t)=>Math.floor(e/t));/**
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
 */function _t(e,t,n,o,r,a,s,l,i){const c=P([o,a],n);for(let h=0;h<o;h++){const f=[];let w=0;for(let d=0;d<r;d++){const g=e[h*r+d];w+=g*s[d],f.push(g)}if(w<0||w>=i/a)throw new Error(`Invalid indices: ${f} does not index into ${l}`);for(let d=0;d<a;d++)c.values[h*a+d]=t.get(...t.indexToLoc(w*a+d))}return c}/**
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
 */function qt(e,t,n){const o=P(n,e.dtype);for(let r=0;r<o.size;++r){const s=o.indexToLoc(r).slice(),l=s[0],i=s[2],c=t.locToIndex([l,i]);s[2]=t.values[c];const h=e.locToIndex(s);0<=h&&h<e.values.length&&(o.values[r]=e.values[h])}return o}/**
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
 */const Wt=S((e,t)=>e>t?1:0);/**
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
 */const Ct=S((e,t)=>e>=t?1:0);/**
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
 */const kt=S((e,t)=>e<t?1:0);/**
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
 */const Nt=S((e,t)=>e<=t?1:0);/**
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
 */function Gt(e,t,n){const o=(t-e)/(n-1),r=_(n,"float32");r[0]=e;for(let a=1;a<r.length;a++)r[a]=r[a-1]+o;return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kt=D(e=>Math.log(e));/**
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
 */function Ut(e,t,n,o){const r=L(o,x(n));for(let a=0;a<r.length;++a){const s=a*t;let l=e[s];for(let i=0;i<t;++i){const c=e[s+i];(Number.isNaN(c)||c>l)&&(l=c)}r[a]=l}return r}/**
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
 */const Zt=S((e,t)=>Math.max(e,t));/**
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
 */const Bt=S((e,t)=>Math.min(e,t));/**
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
 */const K=S((e,t)=>e*t);/**
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
 */function Ht(e,t,n){const o=H(-1,n);return K([],t,o,e,n)}/**
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
 */const Jt=S((e,t)=>e!==t?1:0);/**
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
 */function Qt(e,t,n,o,r){const a=t.length,s=x(t),l=O(t),i=O(r),c=L(n,x(r));for(let h=0;h<s;++h){const f=j(h,a,l),w=new Array(f.length);for(let g=0;g<w.length;g++)w[g]=f[o[g]];const d=z(w,a,i);c[d]=e[h]}return c}/**
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
 */function Xt(e,t,n,o){const[r,a]=J(e,o),s=Q(t,"int32"),l=_(x(r),s),i=x(a);for(let c=0;c<l.length;++c){const h=c*i;let f=1;for(let w=0;w<i;++w)f*=n[h+w];l[c]=f}return{outVals:l,outShape:r,outDtype:s}}/**
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
 */function Yt(e,t,n){e.forEach((o,r)=>{if(o<0||o>=n){const a=j(r,t.length,O(t)).join(",");throw new Error(`indices[${a}] = ${o} is not in [0, ${n})`)}})}function te(e,t){for(let n=0;n<e.length;++n){const o=e[n],r=n===e.length-1?t:e[n+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>r)throw new Error("Ragged splits must not point past values");for(let a=1;a<o.length;++a)if(o[a-1]>o[a])throw new Error("Ragged splits must be sorted in ascending order")}}function ee(e,t,n,o){const r=[];let a=0;const s=t.length-1+n.length,l=new Array(s).fill(null).map(()=>[0]);te(n,o);let i=1;for(let c=0;c<t.length-1;++c){i*=t[c];const h=t[c+1];for(let f=1;f<i+1;++f)l[c].push(f*h)}for(let c=0;c<e.length;++c){let h=e[c],f=e[c]+1;for(let w=0;w<n.length;++w){const d=n[w],g=w+t.length-1;if(g>=0){const I=l[g],u=I[I.length-1]-d[h];for(let p=h;p<f;++p)l[g].push(d[p+1]+u)}h=d[h],f=d[f]}f!==h&&(r.push([h,f]),a+=f-h)}return{outSplits:l,valueSlices:r,numValues:a}}function ne(e){const t=[];for(let n=0;n<e.length;++n){const o=e[n].length,r=v("int32",o);t.push(r),e[n].forEach((a,s)=>r[s]=a)}return t}function C(e,t){const n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let o=t;o<e.length;o++)n[t-1]*=e[o];return n}function oe(e,t,n,o,r,a){const s=C(t,2)[1],l=C(a,2)[1];let i=0;for(const c of n)for(let h=c[0];h<c[1];++h){for(let f=0;f<o;++f)r[i*l+f]=e[h*s+f];++i}}function re(e,t,n,o,r){const a=t.slice();a[0]=r;const s=v(n,x(a)),l=e.length,i=l===0?0:l/t[0];return oe(e,t,o,i,s,a),[s,a]}function se(e,t,n,o,r,a,s,l){if(e.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const i=t[0][0]-1;if(Yt(a,s,i),o.length===0)throw new Error("params.rank must be nonzero");const c=o[0],{outSplits:h,valueSlices:f,numValues:w}=ee(a,s,e,c),d=ne(h),g=re(n,o,r,f,w);return[d,g[0],g[1]]}/**
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
 */const k=2147483647;function le(e,t,n,o,r,a,s){if(t.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(s.length>1)throw new Error("deltas must be a scalar or vector");const l=t.length===0,i=r.length===0,c=s.length===0,h=[];l||h.push(t[0]),i||h.push(r[0]),c||h.push(s[0]);for(let u=1;u<h.length;++u)if(h[u]!==h[u-1])throw new Error("starts, limits, and deltas must have the same shape");const f=h.length===0?1:h[0],w=v("int32",f+1);w[0]=0;for(let u=0;u<f;++u){const p=l?e[0]:e[u],m=i?o[0]:o[u],R=c?a[0]:a[u];if(R===0)throw new Error("Requires delta != 0");let E;if(R>0&&m<p||R<0&&m>p)E=0;else if(E=Math.ceil(Math.abs((m-p)/R)),E>k)throw new Error(`Requires ((limit - start) / delta) <= ${k}`);w[u+1]=w[u]+E}const d=w[f],g=v(n,d);let I=0;for(let u=0;u<f;++u){const p=w[u+1]-w[u];let m=l?e[0]:e[u];const R=c?a[0]:a[u];for(let E=0;E<p;++E)g[I++]=m,m+=R}return[w,g]}/**
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
 */var M=tt;class ${constructor(t,n,o,r,a,s,l,i,c,h){this.shape=t,this.shapeShape=n,this.values=o,this.valuesShape=r,this.valuesDType=a,this.defaultValue=s,this.defaultValueShape=l,this.rowPartitionValues=i,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=X(h),this.raggedRank=Y(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===M.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case M.VALUE_ROWIDS:return $.getMaxWidthValueRowID(n);case M.ROW_SPLITS:return $.getMaxWidthRowSplit(n);default:throw new Error(`Cannot handle partition type ${M[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const n=t.length;if(n===0||n===1)return 0;let o=0;for(let r=0;r<n-1;++r){const a=t[r+1]-t[r];a>o&&(o=a)}return o}static getMaxWidthValueRowID(t){const n=t.length;if(n===0)return 0;let o=0,r=t[0],a=0;for(let s=1;s<n;++s){const l=t[s];l!==r&&(r=l,a=Math.max(s-o,a),o=s)}return Math.max(n-o,a)}tensorShapeFromTensor(t,n,o=!0){if(n.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return G(t,o)}calculateOutputSize(t){const n=this.valuesShape,o=this.defaultValueShape;et(o,n);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),s=nt(this.raggedRank,r,n);s[0]<0&&(s[0]=t);for(let l=1;l<=this.raggedRank;++l)s[l]<0&&(s[l]=this.getMaxWidth(l));return s}calculateFirstParentOutputIndex(t,n,o){const r=Math.min(t,o),a=[];let s=0;for(let l=0;l<r;++l,s+=n)a.push(s);for(let l=r;l<t;++l)a.push(-1);return ot(a.length===t,()=>"Final length of result must be equal to firstDimension."),a}calculateOutputIndexRowSplit(t,n,o,r){const a=t.length,s=[];for(let l=0;l<a-1;++l){const i=t[l+1]-t[l];let c=Math.min(r,i),h=n[l];h===-1&&(c=0);for(let f=0;f<c;++f)s.push(h),h+=o;for(let f=0;f<i-c;++f)s.push(-1)}if(a>0&&s.length!==t[a-1])throw new Error("Invalid row split size.");return s}calculateOutputIndexValueRowID(t,n,o,r){const a=t.length,s=[];if(a===0)return[];let l=0,i=t[0];if(i>=n.length)throw new Error(`Got currentValueRowId=${i}, which is not less than ${n.length}`);let c=n[i];s.push(c);for(let h=1;h<a;++h){const f=t[h];if(f===i)c>=0&&(++l,l<r?c+=o:c=-1);else{if(l=0,i=f,f>=n.length)throw new Error(`Got nextValueRowId=${f} which is not less than ${n.length}`);c=n[f]}s.push(c)}if(s.length!==t.length)throw new Error("Invalid row ids.");return s}calculateOutputIndex(t,n,o,r){const a=this.getRowPartitionTensor(t),s=this.getRowPartitionTypeByDimension(t);switch(s){case M.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(a,n,o,r);case M.ROW_SPLITS:if(a.length-1>n.length)throw new Error(`Row partition size is greater than output size: ${a.length-1} > ${n.length}`);return this.calculateOutputIndexRowSplit(a,n,o,r);default:throw new Error(`Unsupported partition type: ${M[s]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const n=this.rowPartitionTypes[0];switch(n){case M.FIRST_DIM_SIZE:return t[0];case M.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case M.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${M[n]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const n=this.getFirstDimensionSize(),o=this.calculateOutputSize(n),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let i=r.length-2;i>=0;--i)r[i]=r[i+1]*o[i+1];const a=G(o,!1),s=v(this.valuesDType,x(a));if(r[0]*o[0]>0){let i=this.calculateFirstParentOutputIndex(n,r[0],o[0]);for(let c=1;c<=this.raggedRank;++c)i=this.calculateOutputIndex(c-1,i,r[c],o[c]);this.setOutput(this.raggedRank,i,s,a)}return[a,s]}setOutput(t,n,o,r){if(o.length===0)return;const a=this.values,s=o;let l=r.slice();l=l.slice(t+1);const i=x(l),c=n.length;let h=this.defaultValue;if(h.length!==i&&h.length!==1){const g=this.defaultValueShape;rt(()=>{const I=st(h,g);h=lt(I,l).dataSync()})}let f=0,w=0,d=0;for(let g=0;g<=c;++g){let I=g<c?n[g]:-1;if(I===d){++d;continue}if(w<d){const u=a.subarray(f*i),p=s.subarray(w*i),m=(d-w)*i;N(p,u,m)}if(g>=c){const u=o.length;I=Math.floor(u/i)}if(I>d)if(this.defaultValue.length===1)s.subarray(d*i,I*i).fill(this.defaultValue[0]),d=I;else for(;I>d;){const u=s.slice(d*i);N(u,h,i),++d}I<0?(f=g+1,w=d):(f=g,w=d,d=w+1)}}}function N(e,t,n){for(let o=0;o<n;o++)e[o]=t[o]}function G(e,t){const n=[];for(let o of e){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}n.push(o)}return n}function ie(e,t,n,o,r,a,s,l,i,c){return new $(e,t,n,o,r,a,s,l,i,c).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ae=D(e=>1/Math.sqrt(e));/**
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
 */function ce(e,t,n,o,r,a,s,l,i,c){const h=[o/r,r],f=e.values,w=t.values;if(o===0)return P(n,t.dtype);const d=i instanceof it?i:P(h,t.dtype);typeof i=="string"||typeof i=="number"?d.values.fill(i):typeof i=="boolean"&&d.values.fill(+i);for(let g=0;g<a;g++){const I=[];let u=0;for(let p=0;p<s;p++){const m=f[g*s+p];I.push(m),u+=m*l[p]}if(u<0||u>=o/r)throw new Error(`Invalid indices: ${I} does not index into ${n}`);for(let p=0;p<r;p++)c?d.values[u*r+p]+=w[g*r+p]:d.values[u*r+p]=t.rank===0?w[0]:w[g*r+p]}return d}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue=D(e=>1/(1+Math.exp(-e)));/**
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
 */function he(e,t,n,o,r,a,s){const l=t[0],i=a[0],c=new Array(i),h=new Array(l),f=t[1];if(i===0){if(l!==0)throw new Error(at(l));const u=v(n,0),p=v(r,0);return[u,[0,f],p,c,h]}let w=!0,d=0;const g=new Array(i).fill(0);for(let u=0;u<l;++u){const p=e[u*f];if(p<0)throw new Error(ct(u,p));if(p>=i)throw new Error(ut(u,p,i));++g[p],w=w&&p>=d,d=p}let I=!0;for(let u=0;u<i;++u){const p=g[u]===0;c[u]=p,I=I&&!p,g[u]=Math.max(g[u],1),u>0&&(g[u]+=g[u-1])}if(I&&w){const u=e,p=o;for(let m=0;m<l;++m)h[m]=m;return[u,[l,f],p,c,h]}else{const u=g[i-1],p=v(n,u*f),m=v(r,u),R=new Array(i).fill(0);for(let E=0;E<l;++E){const y=e[E*f],T=R[y],b=(y===0?0:g[y-1])+T;R[y]++;for(let F=0;F<f;++F)p[b*f+F]=e[E*f+F];m[b]=o[E],h[E]=b}for(let E=0;E<i;++E)if(R[E]===0){const T=E===0?0:g[E-1];p[T*f+0]=E;for(let b=1;b<f;++b)p[T*f+b]=0;m[T]=s}return[p,[u,f],m,c,h]}}/**
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
 */function fe(e,t,n,o,r){const a=x(o),s=t[0],l=r.length,i=[];let c=1,h=-1;for(let u=0;u<l;++u){const p=r[u];if(p===-1){if(h!==-1)throw new Error(ht(h,u));h=u,i.push(1)}else{if(p<0)throw new Error(ft(u,p));c*=p,i.push(p)}}if(h!==-1){if(c<=0)throw new Error(pt());const u=Math.trunc(a/c);if(c*u!==a)throw new Error(gt(o,i));i[h]=u}if(x(i)!==a)throw new Error(wt(o,i));const w=o.length,d=[];if(w>0){d[w-1]=1;for(let u=w-2;u>=0;--u)d[u]=d[u+1]*o[u+1]}const g=[];if(l>0){g[l-1]=1;for(let u=l-2;u>=0;--u)g[u]=g[u+1]*i[u+1]}const I=v(n,s*l);for(let u=0;u<s;++u){let p=0;for(let m=0;m<w;++m)p+=e[u*w+m]*d[m];for(let m=0;m<l;++m)I[u*l+m]=Math.trunc(p/g[m]),p%=g[m]}return[I,[s,l],i]}/**
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
 */function pe(e,t,n,o,r,a=!1,s=0){const l=o.length,i=[t[0],e.length/t[0]],c=i[1],f=l>0?r[l-1]+1:0;if(f<0)throw new Error(W());const w=t.slice();w[0]=f;const d=w.reduce((R,E)=>R*E,1),g=v(n,d);if(l===0)return f>0&&g.fill(s),[g,w];if(f<=0)throw new Error(W());let I=0,u=1,p=0,m=r[I];for(;;){let R=0;if(u<l){if(R=r[u],m===R){++u;continue}if(m>=R)throw new Error(dt())}if(m<0||m>=f)throw new Error(mt(m,f));m>p&&g.fill(s,p*c,m*c);for(let E=I;E<u;++E){const y=o[E];if(y<0||y>=i[0])throw new Error(It(E,o[E],i[0]));for(let T=0;T<c;T++)g[m*c+T]+=e[y*c+T]}if(a)for(let E=0;E<c;E++)g[m*c+E]/=u-I;if(I=u,++u,p=m+1,m=R,u>l)break}return p<f&&g.fill(s,p*c,f*c),[g,w]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ge=D(e=>Math.sqrt(e));/**
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
 */const we=S((e,t)=>{const n=e-t;return n*n});/**
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
 */const de=D((e,t)=>{const{pattern:n,replaceGlobal:o,rewrite:r}=t;return e.replace(new RegExp(n,o?"g":""),r)});/**
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
 */function me(e,t,n,o){const r=P(e,t.dtype);for(let a=0;a<r.size;a++){const s=r.indexToLoc(a),l=new Array(s.length);for(let i=0;i<l.length;i++)l[i]=s[i]*n[i]+o[i];r.set(t.get(...l),...s)}return r}/**
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
 */const Ie=S((e,t)=>e-t);/**
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
 */function Ee(e,t){const n=new Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];const o=P(n,e.dtype);for(let r=0;r<o.values.length;++r){const a=o.indexToLoc(r),s=new Array(e.rank);for(let i=0;i<s.length;i++)s[i]=a[i]%e.shape[i];const l=e.locToIndex(s);o.values[r]=e.values[l]}return o}/**
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
 */const A=(e,t)=>{const n=t.value-e.value;return n===0?e.index-t.index:n};function U(e,t,n=0,o=e.length-1){for(;o>n;){if(o-n>600){const l=o-n+1,i=t-n+1,c=Math.log(l),h=.5*Math.exp(2*c/3),f=.5*Math.sqrt(c*h*(l-h)/l)*Math.sign(i-l/2),w=Math.max(n,Math.floor(t-i*h/l+f)),d=Math.min(o,Math.floor(t+(l-i)*h/l+f));U(e,t,w,d)}const r=e[t];let a=n,s=o;for(V(e,n,t),A(e[o],r)>0&&V(e,n,o);a<s;){for(V(e,a,s),a++,s--;A(e[a],r)<0;)a=a+1;for(;A(e[s],r)>0;)s=s-1}A(e[n],r)===0?V(e,n,s):(s=s+1,V(e,s,o)),s<=t&&(n=s+1),t<=s&&(o=s-1)}}function Re(e,t,n,o,r){const a=t[t.length-1],[s,l]=[e.length/a,a],i=L(n,s*o),c=L("int32",s*o);for(let f=0;f<s;f++){const w=f*l,d=e.subarray(w,w+l);let g=new Array(d.length);d.forEach((m,R)=>g[R]={value:m,index:R}),o<g.length&&(U(g,o),g=g.slice(0,o)),r&&g.sort(A);const I=f*o,u=i.subarray(I,I+o),p=c.subarray(I,I+o);for(let m=0;m<o;m++)u[m]=g[m].value,p[m]=g[m].index}const h=t.slice();return h[h.length-1]=o,[P(h,n,i),P(h,"int32",c)]}/**
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
 */const Te=Object.freeze(Object.defineProperty({__proto__:null,addImpl:Pt,bincountImpl:Dt,bincountReduceImpl:Ot,bitwiseAndImpl:Vt,castImpl:bt,ceilImpl:At,concatImpl:Et,equalImpl:Lt,expImpl:Ft,expm1Impl:$t,floorDivImpl:jt,floorImpl:zt,gatherNdImpl:_t,gatherV2Impl:qt,greaterEqualImpl:Ct,greaterImpl:Wt,lessEqualImpl:Nt,lessImpl:kt,linSpaceImpl:Gt,logImpl:Kt,maxImpl:Ut,maximumImpl:Zt,minimumImpl:Bt,multiplyImpl:K,negImpl:Ht,notEqualImpl:Jt,prodImpl:Xt,raggedGatherImpl:se,raggedRangeImpl:le,raggedTensorToTensorImpl:ie,rangeImpl:Rt,rsqrtImpl:ae,scatterImpl:ce,sigmoidImpl:ue,simpleAbsImpl:xt,sliceImpl:St,sparseFillEmptyRowsImpl:he,sparseReshapeImpl:fe,sparseSegmentReductionImpl:pe,sqrtImpl:ge,squaredDifferenceImpl:we,staticRegexReplaceImpl:de,stridedSliceImpl:me,stringNGramsImpl:yt,stringSplitImpl:Tt,stringToHashBucketFastImpl:Mt,subImpl:Ie,tileImpl:Ee,topKImpl:Re,transposeImpl:Qt,uniqueImpl:vt},Symbol.toStringTag,{value:"Module"}));export{Te as s};
