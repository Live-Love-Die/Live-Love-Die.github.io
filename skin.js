// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: interface.ggsk
// Generated 2025-11-25T03:06:47

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   1";
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 94px;';
		hs+='position : absolute;';
		hs+='right : 27px;';
		hs+='top : calc(50% - ((94px + 0px) / 2) - 18px);';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   2";
		el.ggDy=-19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((94px + 0px) / 2) - 19px);';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiUlEQVR4nO2YsU7DMBCG/1dgpmFDmWGB54R3ABVF7QCUnbYzfQsGWtR2YzIyukSVlYRzfbaj6j7pFvv+6/1NrKsLKIoSwhKAGUgsQoyYgcXRBBcQwqgRQo0IY9QIoUaEMWqEUCPCGDVCqBFhjBphFCgAVAD2FFMAZUduqN7EMmKb2LTcF75pj2PCR29iGalo/RXAiGJGa0+Mur56I2XEvWruac02UFPQ2o5Rl6tfSt0QFwdF5sxGtoFGtozPF2NKxWfUgI03Whsn0ItR0sF0D+va+ZZj6UUp6GDuKMaeTYTqlZozAKue/54+KCeW3ht38k4OJu81gJ+WJuzaVQI9m67Ju2G+x7n12Sa3tD755I6lTz65Y+kbJj'+
			'2T1z52y23LO3yTUM+i7Dlsl5Rz37J/l1DPZuRM3sqzSG79aVAAeKAfb12Td005xQD1f1z8U8CNL6dYbn3DIyU8AzhHN3bvpeXukFvf8EmbfUX6hlNufUP9yLi4+bn1p2vEeMZQ9A3zI4q8D0ivKIjAL1YCSJIIqSs4AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   3";
		el.ggDx=-200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 200px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABc0lEQVR4nO2YPU7DQBCFnzbmBDS04QyUXIMSKJA4Ez0SV6CjIOQMQIqkpkJUlIMijSVLRJZ3d/4c7ZPcZJ7j+eSdJ2uApqajVAfgBsA7AKq43JQAXAH4qAQgL5BDAFsA9/x2wmv2AB3PwGYAsOHfFuw5AXCX8Z9keZymAPTaZjZGFiAlR4gigaSKGQgBkgSG2BUkHQDYFaaQC0g3MsSdUQpRDcgUAKsUohKQkiOk3Rjl+GtmIARIEhhid5BLAJ8TZsC8sRz/BYDfmaQQjfmfufgwgxSiMf8PF0+jNZbr/+biMvfGaP5HLr4AOI/UWK7/DMDXwPSm9SAL/xLAEx+zVaTGpL61JB+0HtQlL3MQOjYQF1ED+a8GIi'+
			'GNFHIRCafQq8KmPuRRSQWb+lAg6otubRCzTT0pgagBrLU/EViLjB1ZkUg5hfYA15oAvbQyXnJP7AJiDiAN4gYgBeIOUAsSBqA2tSgKQK9VBcD+bdx6AzQ1QV5/dd3m1RYlmjIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 100px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_5);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVR4nO2WPYoCMRiGH8GfVtQbWHkEG21sLS1tvYKV/bYewMbSG2y1rFgo2oiNV1DQVhDWSOCbZcgaJzM7jk1eCEz+3iffNzNJwMvrxfoGtkD7hYy2ML7CjQtAATdgAlRTBFbF8yaMebizAAyBi3SegQGQ+ye0BxzE8wp8AKVHA+vApwxU8goaCYDOPvnQs46yDxxlks7CCCg6AIsyNsjcUbxyFhZ7oGuYlIEx8BNauWvR73MK1AzPjnxgvwomPFpVKwG4ZfFSBudPg5mBuGBbhCoKbKvHBUfV8WD1LvAMaKYAboqXM5gUf6ennJkRoVbF2NzjlOCw0R48yUDyzd2QedicXA+betaHRCHpSiMUmblVhheBZd'+
			'Cho9oAuwyuPjtgnUImvbyw6g4f2Pls66mh6AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   6";
		el.ggDx=200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 200px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_6.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_6);
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};