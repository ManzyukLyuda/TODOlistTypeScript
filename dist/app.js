!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(e,t,n,r){this.tamplateElement=document.getElementById(e),this.conteiner=document.getElementById(t);const i=document.importNode(this.tamplateElement.content,!0);this.element=i.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.conteiner.insertAdjacentElement(e,this.element)}}function i(e){let t=!0;return e.required&&(t=t&&e.value.toString().trim().length>0),e.minLength&&(t=t&&e.value.toString().trim().length>e.minLength),e.maxLength&&(t=t&&e.value.toString().trim().length<e.maxLength),e.min&&(t=t&&+e.value>e.min),e.max&&(t=t&&+e.value<e.max),t}function s(e,t,n){const r=n.value;return{configurable:!0,enumerable:!1,get(){return r.bind(this)}}}var o;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(o||(o={}));class l{constructor(e,t,n,r,i){this.id=e,this.title=t,this.description=n,this.people=r,this.status=i}}class a extends class{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new a),this.instance}addProject(e,t,n){const r=new l(Math.random().toString(),e,t,n,o.Active);this.projects.push(r),this.updateListeners()}editProject(e,t){const n=this.projects.find(t=>t.id===e);n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const c=a.getInstance();var d=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};class u extends r{constructor(){super("project-input","app","afterbegin","user-input"),this.titleInputEl=this.element.querySelector("#title"),this.descriptionInputEl=this.element.querySelector("#description"),this.peopleInputEl=this.element.querySelector("#people"),this.configure()}geatherUserInput(){const e=this.titleInputEl.value,t=this.descriptionInputEl.value,n=this.peopleInputEl.value,r={value:t,required:!0,minLength:5},s={value:n,required:!0,min:1,max:10};return i({value:e,required:!0})&&i(r)&&i(s)?[e,t,+n]:void alert("invalid input")}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}clearInputfild(){this.titleInputEl.value="",this.descriptionInputEl.value="",this.peopleInputEl.value=""}submitHandler(e){e.preventDefault();const t=this.geatherUserInput();if(Array.isArray(t)){let[e,n,r]=t;c.addProject(e,n,r),this.clearInputfild()}}}d([s],u.prototype,"submitHandler",null);var p=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};class h extends r{constructor(e,t){super("single-project",e,"beforeend",t.id),this.project=t,this.configure(),this.renderContent()}get personAssaignedValue(){let e="";return e=1!==this.project.people?" Persones":" Person",this.project.people.toString()+e}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dargEndHandler(e){console.log("Drag End")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dargEndHandler)}renderContent(){const e=this.element.querySelector("h2"),t=this.element.querySelector("h3"),n=this.element.querySelector("p");e.innerText=this.project.title,t.innerText=this.personAssaignedValue+" assigned",n.innerText=this.project.description}}p([s],h.prototype,"dragStartHandler",null);var f=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};class g extends r{constructor(e){super("project-list","app","beforeend",e+"-projects"),this.type=e,this.configure(),this.renderContent()}dragOverHandler(e){if(e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]){e.preventDefault();this.element.querySelector("ul").classList.add("droppable")}}dropHandler(e){const t=e.dataTransfer.getData("text/plain"),n="active"===this.type?o.Active:o.Finished;c.editProject(t,n)}dargLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){c.addListener(e=>{const t=e.filter(e=>"active"===this.type?e.status===o.Active:e.status===o.Finished);this.assignedProjects=t,this.renderProject()}),this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dargLeaveHandler),this.element.addEventListener("drop",this.dropHandler)}renderContent(){const e=this.element.querySelector("h2"),t=this.element.querySelector("ul");e.textContent=this.type.toUpperCase()+" PROJECTS",t.id=this.type+"-project-list"}renderProject(){const e=document.getElementById(this.type+"-project-list");e.innerHTML="";for(const t of this.assignedProjects)new h(e.id,t)}}f([s],g.prototype,"dragOverHandler",null),f([s],g.prototype,"dropHandler",null),f([s],g.prototype,"dargLeaveHandler",null),new u,new g("active"),new g("finished")}]);