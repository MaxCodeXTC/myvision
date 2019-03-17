!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);function r(e){e.forEachObject(e=>{e.selectable=!0}),e.defaultCursor="default",e.hoverCursor="move"}const a={};function s(e,t){return{left:e.origX,top:e.origY,width:t.x-e.origX,height:t.y-e.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)",shapeName:"bndBoxTemp"}}function c(e,t){const n=document.getElementById("labelNamePopUp");n.style.display="block";const o=document.getElementById("canvas-wrapper").getBoundingClientRect(),i=o.top,r=o.left;n.style.top=`${t+i}px`,n.style.left=`${e+r}px`}function l(){document.getElementById("labelNamePopUp").style.display="none"}a.tempBndBoxProps=s,a.finalBndBoxProps={fill:"rgba(255,0,0,0.1)",shapeName:"bndBox",objectCaching:!1};const u={},d={inProgress:!1};let f=null,g=null,h=0;function m(e,t){f=e,g=t,d.inProgress=!0}function p(){const e=document.getElementById("label-title").value;r(g),l(),f.set("id",h),"bndBoxTemp"===f.shapeName&&f.set(a.finalBndBoxProps),h+=1,u[f[f.id]]=e,d.inProgress=!1}function b(e){e.discardActiveObject(),e.renderAll(),e.forEachObject(e=>{e.selectable=!1}),e.defaultCursor="crosshair",e.hoverCursor="crosshair"}let w=null,y=!1,x=!1;const v={};function P(e){(w=e).backgroundImage&&(y=!0,b(w),w.discardActiveObject()),e.on("mouse:down",()=>{!function(){if(y){x=!0;const e=w.getPointer(w.e);v.origX=e.x,v.origY=e.y,v.rect=new i.a.Rect(a.tempBndBoxProps(v,e)),w.add(v.rect)}}()}),e.on("mouse:move",e=>{!function(e){if(!x)return;const t=w.getPointer(e.e);v.origX>t.x&&v.rect.set({left:Math.abs(t.x)}),v.origY>t.y&&v.rect.set({top:Math.abs(t.y)}),v.rect.set({width:Math.abs(v.origX-t.x)}),v.rect.set({height:Math.abs(v.origY-t.y)}),w.renderAll()}(e)}),e.on("mouse:up",e=>{!function(e){if(x){y=!1,x=!1,v.rect.setCoords(),v.rect.selectable=!1,r(w);const t=w.getPointer(e.e);m(v.rect,w),c(t.x,t.y)}}(e)})}const C={};function j(e,t,n){const o=n.getPointer(t.e);return{radius:3,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:o.x,top:o.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"tempPoint",pointId:e,objectCaching:!1}}function B(e,t){return{radius:3,fill:"blue",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e}}C.newPolygon={stroke:"rgba(255,0,0)",strokeWidth:1.75,fill:"rgba(237, 237, 237, 0.01)",perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygon",selectable:!1,evented:!0,objectCaching:!1},C.newTempPolygon={stroke:"#333333",strokeWidth:.8,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},C.newLine={strokeWidth:1.1,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},C.firstPoint={fill:"red",shapeName:"firstPoint"},C.newPoint=j,C.existingPolygonPoint=B;let O=null,N=[],_=[],A=!0,k=null,E=!1,L=0;function W(){_.forEach(e=>{O.remove(e)}),O.remove(E).remove(k)}function I(){N[0]&&(N.forEach(e=>{O.remove(e)}),W(),N=[],_=[],E=null,k=null,L=0)}function X(e){e.target&&e.target.shapeName&&"firstPoint"===e.target.shapeName&&function(e){const t=[];N.forEach(e=>{t.push({x:e.left,y:e.top}),O.remove(e)}),W();const n=new i.a.Polygon(t,C.newPolygon);O.add(n),k=null,E=null,A=!1;const o=O.getPointer(e.e);m(n,O),c(o.x,o.y)}(e),A&&function(e){const t=O.getPointer(e.e),n=new i.a.Circle(C.newPoint(L,e,O));L+=1,0===N.length&&n.set(C.firstPoint);let o=[t.x,t.y,t.x,t.y];const r=new i.a.Line(o,C.newLine);if(E){(o=E.get("points")).push({x:t.x,y:t.y});const e=new i.a.Polygon(o,C.newTempPolygon);O.remove(E),O.add(e),E=e,O.renderAll()}else{const e=[{x:t.x,y:t.y}],n=new i.a.Polygon(e,C.newTempPolygon);E=n,O.add(n)}k=r,N.push(n),_.push(r),O.add(n),O.selection=!1}(e)}function Y(e){O=e,A=!0,I(),O.discardActiveObject(),b(O),e.on("mouse:down",e=>{(!e.target||e.target&&"tempPoint"!==e.target.shapeName)&&X(e)}),e.on("object:moving",e=>{!function(e){E&&(E.points[e.target.pointId]={x:e.target.getCenterPoint().x,y:e.target.getCenterPoint().y})}(e)}),e.on("mouse:move",e=>{!function(e){if(k&&"line"===k.class){const t=O.getPointer(e.e);k.set({x2:t.x,y2:t.y});const n=E.get("points");n[N.length]={x:t.x,y:t.y},E.set({points:n}),O.renderAll()}O.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target.selectable?e.hoverCursor="move":e.hoverCursor="crosshair"})}let M=null,U=[],T=null,$=null;function H(e,t,n,o){!function(e,t,n,o){M=e,U=t,T=n,$=o}(e,t,n,o);const r=function(){const e=new i.a.Polygon([],$.newPolygon);return e.set({id:M.id,selectable:!0}),e}();T.add(r);const a=function(e){let t=0;const n=[];return e.forEach(e=>{const o=new i.a.Circle($.existingPolygonPoint(t,e));T.add(o),U.push(o),n.push({x:o.left-1,y:o.top-1}),t+=1}),n}(function(){const e=M.calcTransformMatrix();return M.get("points").map(e=>new i.a.Point(e.x-M.pathOffset.x,e.y-M.pathOffset.y)).map(t=>i.a.util.transformPoint(t,e))}());return T.remove(M),(M=r).set("points",a),function(){const e=M._calcDimensions();M.set({left:e.left,top:e.top,height:e.height,width:e.width,pathOffset:{x:e.left+e.width/2,y:e.top+e.height/2}}),M.setCoords(),T.renderAll()}(),M}let R=null,S=null,D=[];function F(){S=H(S,D,R,C)}function z(e,t){R=e,S=t}function q(e,t){z(e,t),e.discardActiveObject(),function(){let e=0;S.get("points").forEach(t=>{const n=new i.a.Circle(C.existingPolygonPoint(e,t));R.add(n),D.push(n),e+=1})}()}function G(){0!==D.length&&(D.forEach(e=>{R.remove(e)}),R.renderAll(),D=[])}let J=!1,K=!1,Q=!1,V=null,Z=!1;function ee(e,t){var n,o;Z?(n=t,o=e.target,z(n,o),n.discardActiveObject(),F(),V=e.target.id):F(),K=!1,J=!0}function te(){!function(){const e=S._calcDimensions();S.set({left:e.left,top:e.top,height:e.height,width:e.width,pathOffset:{x:e.left+e.width/2,y:e.top+e.height/2}}),S.setCoords(),R.renderAll()}(),Q=!1}function ne(){G(),J=!1,V=null}function oe(e,t){K?ee(e,t):Z?function(e,t){J&&G(),q(t,e.target),V=e.target.id,J=!0}(e,t):Q?te():e.target&&"polygon"===e.target.shapeName?(R.discardActiveObject(),D.forEach(e=>{e.bringForward()})):!e.target&&J&&ne()}function ie(e){e.target&&("polygon"===e.target.shapeName?(J&&(G(),J=!1),K=!0):"point"===e.target.shapeName&&(!function(e){const{left:t}=e.target,{top:n}=e.target,o=e.target;S.points[o.pointId]={x:t,y:n}}(e),Q=!0))}function re(e){e.on("mouse:down",e=>{!function(e){e.target?"bndBox"===e.target.shapeName&&J?(ne(),Z=!1):Z="polygon"===e.target.shapeName&&e.target.id!==V:Z=!1}(e)}),e.on("mouse:up",t=>{oe(t,e)}),e.on("object:moving",e=>{ie(e)}),e.on("object:scaling",e=>{"bndBox"===e.target.shapeName&&(e.target.width*=e.target.scaleX,e.target.height*=e.target.scaleY,e.target.scaleX=1,e.target.scaleY=1)}),e.on("mouse:over",t=>{t.target&&"point"!==t.target.shapeName&&(t.target.set("fill","rgba(255,0,0,0.2)"),e.renderAll())}),e.on("mouse:out",t=>{t.target&&"point"!==t.target.shapeName&&("bndBox"===t.target.shapeName?t.target.set("fill","rgba(255,0,0,0"):"polygon"===t.target.shapeName&&t.target.set("fill","rgba(255,0,0,0.01)"),e.renderAll())})}function ae(e){e.__eventListeners&&(e.__eventListeners["mouse:down"]=[],e.__eventListeners["mouse:over"]=[],e.__eventListeners["mouse:out"]=[],e.__eventListeners["mouse:move"]=[],e.__eventListeners["mouse:up"]=[],e.__eventListeners["object:moving"]=[])}let se=null,ce=!1;function le(){ae(se),P(se),ce=!1}function ue(){ae(se),Y(se),ce=!1}function de(){se.getActiveObject()?se.remove(se.getActiveObject()):S&&R.remove(S)}function fe(){ce||(ae(se),r(se),re(se),ce=!0)}const ge={uploaded:!1,name:null},he={};let me=null;function pe(e,t){t?function(e,t){me.setWidth(t.width),me.setHeight(t.height),i.a.Image.fromURL(e.src,e=>{me.setBackgroundImage(e,me.renderAll.bind(me),{scaleX:me.width/e.width,scaleY:me.height/e.height})})}(e,t):function(e){me.setWidth(e.width),me.setHeight(e.height),me.setBackgroundColor({source:e.src},()=>{me.renderAll()})}(e)}function be(e){const t={},n=he.maximumCanvasWidth/e.width;return t.width=he.maximumCanvasWidth,t.height=e.height*n,t}function we(){ge.uploaded=!0;const e=this;if(he.maximumCanvasHeight<e.height){let t=function(e){const t={},n=he.maximumCanvasHeight/e.height;return t.height=he.maximumCanvasHeight,t.width=e.width*n,t}(e);he.maximumCanvasWidth<t.width&&(t=be(t)),pe(e,t)}else if(he.maximumCanvasWidth<e.width){pe(e,be(e))}else pe(e)}function ye(e){const t=new Image;t.src=e.target.result,t.onload=we}function xe(e){me=e,he.maximumCanvasHeight=window.innerHeight-54,he.maximumCanvasWidth=window.innerWidth-110}function ve(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}let Pe=null;function Ce(e){const t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});return t.setAttribute("href",window.URL.createObjectURL(n)),t.setAttribute("download",`${new RegExp("^([^.]+)").exec(ge.name)[0]}.xml`),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.draggable=!0,t.classList.add("dragout"),t}function je(){if(Pe.backgroundImage){!function(e){Ce(e).click()}(ve(function(e,t){const n={};return n.annotations=function(e,t){return{folder:"Unknown",filename:t.name,path:"Unknown",source:{database:"Unknown"},size:{width:e.getWidth(),height:e.getHeight(),depth:1},segmented:0}}(e,t),n.annotations.object=function(e){let t={};return e.forEachObject(e=>{const n=e._objects[0],o=e._objects[1].text;t={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),t}(e),n}(Pe,ge)))}}function Be(){p(),fe()}function Oe(){d.inProgress&&(l(),g.remove(f),d.inProgress=!1,d.inProgress=!1)}function Ne(){I(),Oe(),G(),V=null}function _e(e){Ne(),e&&e()}function Ae(e){Ne(),function(e){if(e.files&&e.files[0]){const t=new FileReader;ge.name=e.files[0].name,t.onload=ye,t.readAsDataURL(e.files[0])}}(e)}!function(){const e=new i.a.Canvas("c",{selection:!1});i.a.Object.prototype.transparentCorners=!1,se=e,xe(e),function(e){Pe=e}(e)}(),function(){window.createNewBndBox=_e.bind(this,le),window.createNewPolygon=_e.bind(this,ue),window.removeShape=_e.bind(this,de),window.downloadXML=_e.bind(this,je),window.cancel=_e.bind(this,fe),window.uploadImage=Ae,window.labelShape=Be}()}]);