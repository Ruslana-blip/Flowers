import{b as d,E as p,F as f,u as v}from"./users-DdIZIjdB.js";import{m as _,_ as N,o as V,c as b,b as a,a as s,l as m,r as o}from"./index-Bpck9g6B.js";const y={name:"ThePersonalityInfo",components:{Field:d,ErrorMessage:p,VeeForm:f},data(){return{}},props:{width:{type:Number}},computed:{..._(v,["user"]),isDataExists(){return!!localStorage.getItem("user")}},methods:{validateEmail(l){return l?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(l)?!0:"Введіть будь ласка валідний email":"Це поле є обов'язковим"},validateName(l){return l?/^[A-Za-zА-Яа-яІіЇїЄє'`]+$/.test(l)?!0:"Ім’я може містити лише букви та апостроф.":"Це поле є обов’язковим."},validateNumber(l){return l?/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(l)?!0:"Номер повинен містити 13 символів":"Це поле є обов’язковим."}}},g={class:"inputs"};function E(l,e,r,w,x,n){const u=o("Field"),i=o("ErrorMessage");return V(),b("div",g,[a("div",{class:"inputs__field",style:m({width:r.width+"px"})},[e[4]||(e[4]=a("label",{for:"name"},null,-1)),s(u,{rules:n.validateName,type:"text",id:"name",name:"name",class:"inputs__input",modelValue:l.user.name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.user.name=t)},null,8,["rules","modelValue"]),s(i,{name:"name",class:"inputs__error"})],4),a("div",{class:"inputs__field",style:m({width:r.width+"px"})},[e[5]||(e[5]=a("label",{for:"lastName"},null,-1)),s(u,{rules:n.validateName,type:"text",id:"lastName",name:"lastName",class:"inputs__input",modelValue:l.user.lastName,"onUpdate:modelValue":e[1]||(e[1]=t=>l.user.lastName=t)},null,8,["rules","modelValue"]),s(i,{name:"lastName",class:"inputs__error"})],4),a("div",{class:"inputs__field",style:m({width:r.width+"px"})},[e[6]||(e[6]=a("label",{for:"number"},null,-1)),s(u,{rules:n.validateNumber,type:"tel",id:"number",name:"number",class:"inputs__input",modelValue:l.user.number,"onUpdate:modelValue":e[2]||(e[2]=t=>l.user.number=t)},null,8,["rules","modelValue"]),s(i,{name:"number",class:"inputs__error"})],4),a("div",{class:"inputs__field",style:m({width:r.width+"px"})},[e[7]||(e[7]=a("label",{for:"email"},null,-1)),s(u,{rules:n.validateEmail,id:"email",class:"inputs__input",type:"email",name:"email",modelValue:l.user.email,"onUpdate:modelValue":e[3]||(e[3]=t=>l.user.email=t)},null,8,["rules","modelValue"]),s(i,{name:"email",class:"inputs__error"})],4)])}const U=N(y,[["render",E],["__scopeId","data-v-238a7a8a"]]);export{U as T};
