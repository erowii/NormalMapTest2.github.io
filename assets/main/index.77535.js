window.__require=function t(e,o,r){function n(p,s){if(!o[p]){if(!e[p]){var u=p.split("/");if(u=u[u.length-1],!e[u]){var a="function"==typeof __require&&__require;if(!s&&a)return a(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+p+"'")}p=u}var c=o[p]={exports:{}};e[p][0].call(c.exports,function(t){return n(e[p][1][t]||t)},c,c.exports,t,e,o,r)}return o[p].exports}for(var i="function"==typeof __require&&__require,p=0;p<r.length;p++)n(r[p]);return n}({NormalMap:[function(t,e,o){"use strict";cc._RF.push(e,"09282bYjDhKEIJ99bAAWgqV","NormalMap");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,p=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(p=(i<3?n(p):i>3?n(e,o,p):n(e,o))||p);return i>3&&p&&Object.defineProperty(e,o,p),p};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.mousePos=cc.v2(0,0),e.rgb=[1,1,1,1],e.lightHeight=5,e.normalMapReverse=!1,e.testY=0,e.onMouseMove=function(t){e.mousePos=e.node.convertToNodeSpaceAR(t.getLocation()),e.updateMaterial()},e.updateMaterial=function(){var t=e.sprite.getMaterial(0),o=e.mousePos.x/e.node.width+.5,r=-e.mousePos.y/e.node.height*(e.normalMapReverse?-1:1)+.5;t.setProperty("mouseX",o),t.setProperty("mouseY",r),t.setProperty("lightHeight",e.lightHeight),t.setProperty("lightColor",e.rgb)},e}return r(e,t),e.prototype.start=function(){this.sprite=this.getComponent(cc.Sprite),this.sprite.getMaterial(0).setProperty("normalMap",this.texture),this.node.parent.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove),this.node.parent.on(cc.Node.EventType.TOUCH_MOVE,this.onMouseMove)},e.prototype.updateLightHeight=function(t){this.lightHeight=t.progress,this.updateMaterial()},e.prototype.updateColor_Red=function(t){this.rgb[0]=2*t.progress,this.updateMaterial()},e.prototype.updateColor_Green=function(t){this.rgb[1]=2*t.progress,this.updateMaterial()},e.prototype.updateColor_Blue=function(t){this.rgb[2]=2*t.progress,this.updateMaterial()},n([s(cc.Texture2D)],e.prototype,"texture",void 0),n([s],e.prototype,"lightHeight",void 0),n([s],e.prototype,"normalMapReverse",void 0),e=n([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["NormalMap"]);