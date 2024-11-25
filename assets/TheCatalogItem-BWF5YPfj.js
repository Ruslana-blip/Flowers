import{_ as m,o,c as n,b as s,F as v,d as C,n as f,t as d,e as _,p as y,m as w,f as L,a as h,q as I,r as p,w as S,g as U}from"./index-Bpck9g6B.js";import{u as k}from"./categories-BAZdND2H.js";import{P as b}from"./PopUpBag-DMbuuTKN.js";const B={name:"TheNavigation",emits:["show-page"],props:{totalPlants:{type:Array},cardsPerPage:{type:Number,default:9}},data(){return{currentPage:1,filterArrayPlants:[]}},computed:{getCountPages(){return Math.ceil(this.totalPlants.length/this.cardsPerPage)}},methods:{showPage(e=1){if(this.totalPlants.length>0){const i=(e-1)*this.cardsPerPage;this.filterArrayPlants=this.totalPlants.slice(i,i+this.cardsPerPage),this.currentPage=e,this.$emit("show-page",this.currentPage)}}},mounted(){this.showPage(this.currentPage)}},$={key:0,class:"pagination"},x={class:"pagination__list"},A=["onClick"];function T(e,i,g,u,c,a){return a.getCountPages>1?(o(),n("div",$,[s("ul",x,[(o(!0),n(v,null,C(a.getCountPages,l=>(o(),n("li",{key:l,onClick:r=>a.showPage(l),class:f(["pagination__item",{active:c.currentPage===l}])},d(l),11,A))),128))])])):_("",!0)}const ne=m(B,[["render",T],["__scopeId","data-v-a4a26726"]]),V="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.62%2020.8096C12.28%2020.9296%2011.72%2020.9296%2011.38%2020.8096C8.48%2019.8196%202%2015.6896%202%208.68961C2%205.59961%204.49%203.09961%207.56%203.09961C9.38%203.09961%2010.99%203.97961%2012%205.33961C13.01%203.97961%2014.63%203.09961%2016.44%203.09961C19.51%203.09961%2022%205.59961%2022%208.68961C22%2015.6896%2015.52%2019.8196%2012.62%2020.8096Z'%20stroke='%2349454F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.62%2020.81C12.28%2020.93%2011.72%2020.93%2011.38%2020.81C8.48%2019.82%202%2015.69%202%208.68998C2%205.59998%204.49%203.09998%207.56%203.09998C9.38%203.09998%2010.99%203.97998%2012%205.33998C13.01%203.97998%2014.63%203.09998%2016.44%203.09998C19.51%203.09998%2022%205.59998%2022%208.68998C22%2015.69%2015.52%2019.82%2012.62%2020.81Z'%20fill='%23D85638'/%3e%3c/svg%3e",P=y("likedPlantsStore",{state:()=>({likedPlants:JSON.parse(localStorage.getItem("likedPlants"))||[]}),actions:{addLikedPlant(e){this.likedPlants.includes(e)||(this.likedPlants.push(e),this.updateLocalStorage())},removeLikedPlant(e){this.likedPlants=this.likedPlants.filter(i=>i!==e),this.updateLocalStorage()},updateLocalStorage(){localStorage.setItem("likedPlants",JSON.stringify(this.likedPlants))}}}),F="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.81043%202L5.19043%205.63'%20stroke='%2349454F'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.1904%202L18.8104%205.63'%20stroke='%2349454F'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%207.84961C2%205.99961%202.99%205.84961%204.22%205.84961H19.78C21.01%205.84961%2022%205.99961%2022%207.84961C22%209.99961%2021.01%209.84961%2019.78%209.84961H4.22C2.99%209.84961%202%209.99961%202%207.84961Z'%20stroke='%2349454F'%20stroke-width='1.5'/%3e%3cpath%20d='M3.5%2010L4.91%2018.64C5.23%2020.58%206%2022%208.86%2022H14.89C18%2022%2018.46%2020.64%2018.82%2018.76L20.5%2010'%20stroke='%2349454F'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",M={name:"TheLike",components:{PopUpBag:b},props:{plantId:{type:Number,required:!0}},data(){return{isPopUpVisible:!1,likeImage:V,likeActiveImage:N}},computed:{...w(P,["likedPlants"]),liked(){return this.likedPlants.includes(this.plantId)}},methods:{...L(P,["addLikedPlant","removeLikedPlant"]),toggleLike(){this.liked?this.removeLikedPlant(this.plantId):this.addLikedPlant(this.plantId)},togglePopUpBag(){this.isPopUpVisible=!this.isPopUpVisible}},inheritAttrs:!1},j={class:"actions__wrapper"},H=["src"],O={key:0,class:"actions__overlay"},Z={key:1,class:"actions__pinned"},q=["src"];function D(e,i,g,u,c,a){const l=p("PopUpBag");return o(),n("div",I({class:"actions"},e.$attrs),[s("div",j,[s("div",{class:"actions__bag",onClick:i[0]||(i[0]=(...r)=>a.togglePopUpBag&&a.togglePopUpBag(...r))},i[3]||(i[3]=[s("img",{src:F,alt:"icon bag",title:"icon bag"},null,-1)])),s("div",{class:"actions__like",onClick:i[1]||(i[1]=(...r)=>a.toggleLike&&a.toggleLike(...r))},[s("img",{src:c.likeImage,alt:"icon like",title:"icon like"},null,8,H)])]),c.isPopUpVisible?(o(),n("div",O,[h(l,{isPopUpVisible:c.isPopUpVisible,togglePopUpBag:a.togglePopUpBag},null,8,["isPopUpVisible","togglePopUpBag"])])):_("",!0),a.liked?(o(),n("div",Z,[s("div",{class:"actions__like",onClick:i[2]||(i[2]=(...r)=>a.toggleLike&&a.toggleLike(...r))},[s("img",{src:c.likeActiveImage,alt:"icon like",title:"icon like"},null,8,q)])])):_("",!0)],16)}const J=m(M,[["render",D],["__scopeId","data-v-ff4662a0"]]),R={name:"TheCatalogItem",components:{TheLike:J},props:{showPlants:{type:Object}},computed:{...w(k,["catalog"])},watch:{"$i18n.locale":function(e){return e}},methods:{...L(k,["getAllPlants"]),getStatusClass(e){return e==="Новинки"?"plant__newPlants":e==="Розпродаж"?"plant__sales":e==="Топ продажів"?"plant__top":""}}},z={class:"plant"},E={class:"plant__img"},G=["src","title","alt"],K={class:"actions"},Q={class:"plant__content"},W={class:"plant__main"},X={key:0},Y={class:"plant__originalPrice"},ee={class:"plant__salesPrice"},te={key:1};function se(e,i,g,u,c,a){const l=p("TheLike"),r=p("RouterLink");return o(),n("ul",z,[(o(!0),n(v,null,C(g.showPlants,t=>(o(),n("li",{class:"plant__item",key:t.id},[s("div",E,[s("img",{src:Array.isArray(t.img)?t.img[0]:t.img,title:e.$i18n.locale==="uk"?t.name:t.name_en,alt:e.$i18n.locale==="uk"?t.name:t.name_en},null,8,G),s("div",K,[h(l,{plantId:t.id},null,8,["plantId"])])]),s("div",Q,[h(r,{to:{name:"TheSinglePlantPage",params:{id:t.id}},class:"plant__name"},{default:S(()=>[U(d(e.$i18n.locale==="uk"?t.name:t.name_en),1)]),_:2},1032,["to"]),s("div",W,[t.status==="Розпродаж"?(o(),n("div",X,[s("span",Y,d(t.price)+" ₴ ",1),s("span",ee,d(t.price*.7)+" ₴ ",1)])):(o(),n("div",te,[s("span",null,d(t.price)+" ₴",1)])),s("span",{class:f(a.getStatusClass(t==null?void 0:t.status))},d(e.$i18n.locale==="uk"?t.status:t.status_en),3)])])]))),128))])}const le=m(R,[["render",se],["__scopeId","data-v-6564db37"]]);export{ne as T,le as a,P as u};
