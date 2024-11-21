"use strict";(self["webpackChunkvuejs_mytick8_com"]=self["webpackChunkvuejs_mytick8_com"]||[]).push([[182],{2094:function(e,t,s){s.d(t,{L:function(){return a}});var n=s(9876);const a=(0,n.Q_)("user",{state:()=>({user:JSON.parse(localStorage.getItem("user"))||{name:"",family:"",mobile:""},token:localStorage.getItem("token")||"",q:""}),getters:{getUser(e){return e.user},getToken(e){return e.token},getExpiresAt(e){return e.expires_at},getQ(e){return e.q},isAuth(e){let t=e.token;return t}},actions:{setUser(e){this.user=e,localStorage.setItem("user",JSON.stringify(e))},setToken(e){this.token=e,localStorage.setItem("token",e)},setExpiresAt(e){this.expires_at=e,localStorage.setItem("expires_at",e)},logout(){this.user="",this.token="",localStorage.removeItem("user"),localStorage.removeItem("token")},setQ(e){this.q=e}}})},6182:function(e,t,s){s.r(t),s.d(t,{default:function(){return ae}});s(560);var n=s(6252),a=s(2262),i=s(9963),l=s(3577),o=s(8189),r=s(1602),c=s(3002),d=s(2201),u=s(2094),_=s(2496),m=s(7853);const g={id:"sign"},p={class:"container"},v={class:"d-flex justify-content-center align-items-center"},b={class:"sign__wrapper"},f=(0,n.uE)('<div class="sign__header d-flex flex-column justify-content-between border-0 p-3"><div class="align-self-end"><span class="sign__header--sign-up">عضویت</span><span class="sign__header--slash mx-1">/</span><span class="sign__header--sign-in sign__header--active">ورود</span></div><img src="'+o+'" alt="" class="sign__header--logo" width="169px" height="43px"></div>',1),y={class:"sign__up"},h={class:"d-flex mb-3"},k={class:"form__control"},x=(0,n._)("label",{for:"fname",class:"form__control-label"},"نام*",-1),w={class:"d-flex"},S={class:"form__control"},U=(0,n._)("label",{for:"lname",class:"form__control-label"},"نام خانوادگی*",-1),C={class:"sign__in mb-3"},j={class:"d-flex flex-column mb-2"},q={class:"d-flex"},z={class:"form__control"},D=(0,n._)("label",{for:"telephone",class:"form__control-label"},"شماره موبایل*",-1),O={key:0,class:"spinner-border spinner-border-sm"},I={key:1},H={class:"d-flex flex-column"},T={class:"form__control"},A=(0,n._)("label",{for:"password",class:"form__control-label form__control-password"},"کد تایید شماره موبایل*",-1),V={class:"sign--waitingtime ps-2"},M={class:"sign--waitingtime ps-2"},E={class:"d-flex justify-content-between align-items-center"},F=(0,n._)("span",null,"زمان استفاده از کد به پایان رسید ",-1),Q={class:"d-flex flex-column"},Z={class:"form__control"},J=(0,n._)("label",{class:"form__control-label",style:{position:"relative",top:"0",right:"0"}},"منو به خاطر بسپار",-1),L={class:"d-flex justify-content-between align-items-center position-relative"},N={key:0,class:"spinner-border spinner-border-sm"},B={key:1},G=["disabled"],K={key:0,class:"spinner-border spinner-border-sm"},P={key:1},R={key:0},W={class:"mt-5 alert alert-danger"},X={key:0,style:{"font-size":"11px"},class:"text-danger"},Y={key:1,style:{"font-size":"11px"},class:"text-danger"},ee={key:2,style:{"font-size":"11px"},class:"text-danger"},te={key:3,style:{"font-size":"11px"},class:"text-danger"};var se={__name:"Auth",setup(e){(0,_.u)({title:(0,n.Fl)((()=>"صفحه ورود و عضویت"))});const t=(0,u.L)(),s=(0,d.tv)(),o=(0,c.pm)();let se=(0,a.iH)(!1),ne=(0,a.iH)(!1),ae=(0,a.iH)(!1),ie=(0,a.iH)(!1),le=(0,a.iH)(!1),oe=(0,a.iH)(""),re=(0,a.qj)({name:"",family:"",mobile:"",token:"",remember_me:!0}),ce={};async function de(){ae.value=!0;try{const t=await r.Z.post("/send/token",{mobile:re.mobile});if(ae.value=!1,"success"==t.data.status){if(ie.value=!0,le.value=!1,document.querySelector(".sign--waitingtime")){let s,n=20;const a=document.querySelector(".sign--waitingtime");let i=()=>{const e=Math.floor(n/60),t=n%60,i=l(String(e)),o=l(String(t)),r=`${i.padStart(2,"۰")}:${o.padStart(2,"۰")}`;n>=0?a.textContent=`${r} تا انقضای کد`:(clearInterval(s),ie.value=!1,le.value=!0),n--};function l(e){return e.replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+1728)}))}i(),s=setInterval(i,1e3)}o.success(t.data.message,{timeout:2e3})}}catch(e){ae.value=!1,o.error((0,m.S3)(e).join(", "),{timeout:2e3})}}async function ue(e){$(e.currentTarget).hasClass("sign-btn--deactive")&&($(".sign__header--sign-in").addClass("sign__header--active"),$(".sign__header--sign-up").removeClass("sign__header--active"),$(".sign__up").removeClass("sign__up--active"),$(".sign-in--btn").removeClass("sign-btn--deactive"),$(".sign-in--btn").addClass("sign-btn--active"),$(".sign-up--btn").removeClass("sign-btn--active"),$(".sign-up--btn").addClass("sign-btn--deactive")),se.value=!0;try{const e=await r.Z.post("/login/with/token",{mobile:re.mobile,token:re.token});se.value=!1,"success"==e.data.status&&(o.success(e.data.message,{timeout:2e3}),t.setUser(e.data.data.user),t.setToken(e.data.data.token),s.push({name:"panel_index"}))}catch(n){se.value=!1,o.error((0,m.S3)(n).join(", "),{timeout:2e3})}}async function _e(e){$(e.currentTarget).hasClass("sign-btn--deactive")&&($(".sign__header--sign-in").removeClass("sign__header--active"),$(".sign__header--sign-up").addClass("sign__header--active"),$(".sign__up").addClass("sign__up--active"),$(".sign-in--btn").removeClass("sign-btn--active"),$(".sign-in--btn").addClass("sign-btn--deactive"),$(".sign-up--btn").removeClass("sign-btn--deactive"),$(".sign-up--btn").addClass("sign-btn--active")),ne.value=!0,ce={};try{const e=await r.Z.post("register",{mobile:re.mobile,token:re.token,name:re.name,family:re.family});ne.value=!1,e.data.status?(o.success(e.data.message,{timeout:2e3}),t.setUser(e.data.user),t.setToken(e.data.token),s.push({name:"panel_index"})):o.warning(e.data.message,{timeout:2e3})}catch(n){ne.value=!1,422==n.response.status?ce=n.response.data.errors:o.error(n.response.data.message,{timeout:2e3})}}return(e,t)=>((0,n.wg)(),(0,n.iD)("section",g,[(0,n._)("div",p,[(0,n._)("div",v,[(0,n._)("div",b,[f,(0,n._)("div",y,[(0,n._)("div",h,[(0,n._)("div",k,[x,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.dq)(oe)?oe.value=e:oe=e),class:"form__control-input",placeholder:"لطفا نام خود را وارد کنید"},null,512),[[i.nr,(0,a.SU)(oe),void 0,{lazy:!0}]])])]),(0,n._)("div",w,[(0,n._)("div",S,[U,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>(0,a.SU)(re).family=e),class:"form__control-input",placeholder:"لطفا نام خانوادگی خود را وارد کنید"},null,512),[[i.nr,(0,a.SU)(re).family,void 0,{lazy:!0}]])])])]),(0,n._)("div",C,[(0,n._)("div",j,[(0,n._)("div",q,[(0,n._)("div",z,[D,(0,n.wy)((0,n._)("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=e=>(0,a.SU)(re).mobile=e),autocomplete:"off",class:"form__control-input",placeholder:"۰۹xxxxxxxxx مثال"},null,512),[[i.nr,(0,a.SU)(re).mobile,void 0,{lazy:!0}]])]),(0,n._)("button",{type:"button",onClick:de,class:"sign__in--confirm-number"},[(0,a.SU)(ae)?((0,n.wg)(),(0,n.iD)("div",O)):((0,n.wg)(),(0,n.iD)("span",I,"تایید"))])])]),(0,n._)("div",H,[(0,n._)("div",T,[A,(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>(0,a.SU)(re).token=e),class:"form__control-input",autocomplete:"off",placeholder:"xxxxxx"},null,512),[[i.nr,(0,a.SU)(re).token,void 0,{lazy:!0}]])]),(0,n.wy)((0,n._)("p",V,null,512),[[i.F8,(0,a.SU)(ie)]]),(0,n.wy)((0,n._)("p",M,[(0,n._)("div",E,[F,(0,n._)("button",{onClick:t[4]||(t[4]=(0,i.iM)((e=>de()),["prevent"])),class:"resend-otp-code"},"ارسال مجدد کد تایید")])],512),[[i.F8,(0,a.SU)(le)]])]),(0,n._)("div",Q,[(0,n._)("div",Z,[J,(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>(0,a.SU)(re).remember_me=e)},null,512),[[i.e8,(0,a.SU)(re).remember_me]])])])]),(0,n._)("div",L,[(0,n._)("button",{type:"submit",onClick:t[6]||(t[6]=(0,i.iM)((e=>ue(e)),["prevent"])),class:"sign-btn sign-in--btn sign-btn--active"},[(0,a.SU)(se)?((0,n.wg)(),(0,n.iD)("div",N)):((0,n.wg)(),(0,n.iD)("span",B,"ورود"))]),(0,n._)("button",{type:"submit",disabled:(0,a.SU)(ne),onClick:t[7]||(t[7]=(0,i.iM)((e=>_e(e)),["prevent"])),class:"sign-btn sign-up--btn sign-btn--deactive"},[(0,a.SU)(ne)?((0,n.wg)(),(0,n.iD)("div",K)):((0,n.wg)(),(0,n.iD)("span",P,"عضویت"))],8,G)]),Object.keys((0,a.SU)(ce)).length>0?((0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("ul",W,[Object.hasOwn((0,a.SU)(ce),"name")?((0,n.wg)(),(0,n.iD)("li",X,(0,l.zw)((0,a.SU)(ce).name.shift()),1)):(0,n.kq)("",!0),Object.hasOwn((0,a.SU)(ce),"family")?((0,n.wg)(),(0,n.iD)("li",Y,(0,l.zw)((0,a.SU)(ce).family.shift()),1)):(0,n.kq)("",!0),Object.hasOwn((0,a.SU)(ce),"mobile")?((0,n.wg)(),(0,n.iD)("li",ee,(0,l.zw)((0,a.SU)(ce).mobile.shift()),1)):(0,n.kq)("",!0),Object.hasOwn((0,a.SU)(ce),"token")?((0,n.wg)(),(0,n.iD)("li",te,(0,l.zw)((0,a.SU)(ce).token.shift()),1)):(0,n.kq)("",!0)])])):(0,n.kq)("",!0)])])])]))}};const ne=se;var ae=ne},8189:function(e,t,s){e.exports=s.p+"img/logo-white.bbf412f1.svg"}}]);
//# sourceMappingURL=182.ee1fc795.js.map