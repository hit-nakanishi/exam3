!function(e){var t=function(){var t=65,n='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',i={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},a=function(t,n){var i=W(t);e(n).data("colorpicker").fields.eq(1).val(i.r).end().eq(2).val(i.g).end().eq(3).val(i.b).end()},r=function(t,n){e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()},s=function(t,n){e(n).data("colorpicker").fields.eq(0).val(N(t)).end()},o=function(t,n){e(n).data("colorpicker").selector.css("backgroundColor","#"+N({h:t.h,s:100,b:100})),e(n).data("colorpicker").selectorIndic.css({left:parseInt(150*t.s/100,10),top:parseInt(150*(100-t.b)/100,10)})},l=function(t,n){e(n).data("colorpicker").hue.css("top",parseInt(150-150*t.h/360,10))},d=function(t,n){e(n).data("colorpicker").currentColor.css("backgroundColor","#"+N(t))},u=function(t,n){e(n).data("colorpicker").newColor.css("backgroundColor","#"+N(t))},c=function(n){var i=n.charCode||n.keyCode||-1;if(i>t&&i<=90||32==i)return!1;var a=e(this).parent().parent();a.data("colorpicker").livePreview===!0&&h.apply(this)},h=function(t){var n,i=e(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?i.data("colorpicker").color=n=P(E(this.value)):this.parentNode.className.indexOf("_hsb")>0?i.data("colorpicker").color=n=H({h:parseInt(i.data("colorpicker").fields.eq(4).val(),10),s:parseInt(i.data("colorpicker").fields.eq(5).val(),10),b:parseInt(i.data("colorpicker").fields.eq(6).val(),10)}):i.data("colorpicker").color=n=I(j({r:parseInt(i.data("colorpicker").fields.eq(1).val(),10),g:parseInt(i.data("colorpicker").fields.eq(2).val(),10),b:parseInt(i.data("colorpicker").fields.eq(3).val(),10)})),t&&(a(n,i.get(0)),s(n,i.get(0)),r(n,i.get(0))),o(n,i.get(0)),l(n,i.get(0)),u(n,i.get(0)),i.data("colorpicker").onChange.apply(i,[n,N(n),W(n)])},p=function(){var t=e(this).parent().parent();t.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},f=function(){t=this.parentNode.className.indexOf("_hex")>0?70:65,e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),e(this).parent().addClass("colorpicker_focus")},m=function(t){var n=e(this).parent().find("input").focus(),i={el:e(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:t.pageY,field:n,val:parseInt(n.val(),10),preview:e(this).parent().parent().data("colorpicker").livePreview};e(document).bind("mouseup",i,g),e(document).bind("mousemove",i,_)},_=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&h.apply(e.data.field.get(0),[!0]),!1},g=function(t){return h.apply(t.data.field.get(0),[!0]),t.data.el.removeClass("colorpicker_slider").find("input").focus(),e(document).unbind("mouseup",g),e(document).unbind("mousemove",_),!1},y=function(){var t={cal:e(this).parent(),y:e(this).offset().top};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,b),e(document).bind("mousemove",t,v)},v=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},b=function(t){return a(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),s(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),e(document).unbind("mouseup",b),e(document).unbind("mousemove",v),!1},M=function(){var t={cal:e(this).parent(),pos:e(this).offset()};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,L),e(document).bind("mousemove",t,w)},w=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},L=function(t){return a(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),s(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),e(document).unbind("mouseup",L),e(document).unbind("mousemove",w),!1},k=function(){e(this).addClass("colorpicker_focus")},Y=function(){e(this).removeClass("colorpicker_focus")},D=function(){var t=e(this).parent(),n=t.data("colorpicker").color;t.data("colorpicker").origColor=n,d(n,t.get(0)),t.data("colorpicker").onSubmit(n,N(n),W(n),t.data("colorpicker").el)},T=function(){var t=e("#"+e(this).data("colorpickerId"));t.data("colorpicker").onBeforeShow.apply(this,[t.get(0)]);var n=e(this).offset(),i=C(),a=n.top+this.offsetHeight,r=n.left;return a+176>i.t+i.h&&(a-=this.offsetHeight+176),r+356>i.l+i.w&&(r-=356),t.css({left:r+"px",top:a+"px"}),0!=t.data("colorpicker").onShow.apply(this,[t.get(0)])&&t.show(),e(document).bind("mousedown",{cal:t},x),!1},x=function(t){S(t.data.cal.get(0),t.target,t.data.cal.get(0))||(0!=t.data.cal.data("colorpicker").onHide.apply(this,[t.data.cal.get(0)])&&t.data.cal.hide(),e(document).unbind("mousedown",x))},S=function(e,t,n){if(e==t)return!0;if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(t));for(var i=t.parentNode;i&&i!=n;){if(i==e)return!0;i=i.parentNode}return!1},C=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},H=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},j=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},E=function(e){var t=6-e.length;if(t>0){for(var n=[],i=0;i<t;i++)n.push("0");n.push(e),e=n.join("")}return e},A=function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(65280&e)>>8,b:255&e}},P=function(e){return I(A(e))},I=function(e){var t={h:0,s:0,b:0},n=Math.min(e.r,e.g,e.b),i=Math.max(e.r,e.g,e.b),a=i-n;return t.b=i,t.s=0!=i?255*a/i:0,0!=t.s?e.r==i?t.h=(e.g-e.b)/a:e.g==i?t.h=2+(e.b-e.r)/a:t.h=4+(e.r-e.g)/a:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t},W=function(e){var t={},n=Math.round(e.h),i=Math.round(255*e.s/100),a=Math.round(255*e.b/100);if(0==i)t.r=t.g=t.b=a;else{var r=a,s=(255-i)*a/255,o=(r-s)*(n%60)/60;360==n&&(n=0),n<60?(t.r=r,t.b=s,t.g=s+o):n<120?(t.g=r,t.b=s,t.r=r-o):n<180?(t.g=r,t.r=s,t.b=s+o):n<240?(t.b=r,t.r=s,t.g=r-o):n<300?(t.b=r,t.g=s,t.r=s+o):n<360?(t.r=r,t.g=s,t.b=r-o):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}},F=function(t){var n=[t.r.toString(16),t.g.toString(16),t.b.toString(16)];return e.each(n,function(e,t){1==t.length&&(n[e]="0"+t)}),n.join("")},N=function(e){return F(W(e))},O=function(){var t=e(this).parent(),n=t.data("colorpicker").origColor;t.data("colorpicker").color=n,a(n,t.get(0)),s(n,t.get(0)),r(n,t.get(0)),o(n,t.get(0)),l(n,t.get(0)),u(n,t.get(0))};return{init:function(t){if(t=e.extend({},i,t||{}),"string"==typeof t.color)t.color=P(t.color);else if(void 0!=t.color.r&&void 0!=t.color.g&&void 0!=t.color.b)t.color=I(t.color);else{if(void 0==t.color.h||void 0==t.color.s||void 0==t.color.b)return this;t.color=H(t.color)}return this.each(function(){if(!e(this).data("colorpickerId")){var i=e.extend({},t);i.origColor=t.color;var _="collorpicker_"+parseInt(1e3*Math.random());e(this).data("colorpickerId",_);var g=e(n).attr("id",_);i.flat?g.appendTo(this).show():g.appendTo(document.body),i.fields=g.find("input").bind("keyup",c).bind("change",h).bind("blur",p).bind("focus",f),g.find("span").bind("mousedown",m).end().find(">div.colorpicker_current_color").bind("click",O),i.selector=g.find("div.colorpicker_color").bind("mousedown",M),i.selectorIndic=i.selector.find("div div"),i.el=this,i.hue=g.find("div.colorpicker_hue div"),g.find("div.colorpicker_hue").bind("mousedown",y),i.newColor=g.find("div.colorpicker_new_color"),i.currentColor=g.find("div.colorpicker_current_color"),g.data("colorpicker",i),g.find("div.colorpicker_submit").bind("mouseenter",k).bind("mouseleave",Y).bind("click",D),a(i.color,g.get(0)),r(i.color,g.get(0)),s(i.color,g.get(0)),l(i.color,g.get(0)),o(i.color,g.get(0)),d(i.color,g.get(0)),u(i.color,g.get(0)),i.flat?g.css({position:"relative",display:"block"}):e(this).bind(i.eventName,T)}})},showPicker:function(){return this.each(function(){e(this).data("colorpickerId")&&T.apply(this)})},hidePicker:function(){return this.each(function(){e(this).data("colorpickerId")&&e("#"+e(this).data("colorpickerId")).hide()})},setColor:function(t){if("string"==typeof t)t=P(t);else if(void 0!=t.r&&void 0!=t.g&&void 0!=t.b)t=I(t);else{if(void 0==t.h||void 0==t.s||void 0==t.b)return this;t=H(t)}return this.each(function(){if(e(this).data("colorpickerId")){var n=e("#"+e(this).data("colorpickerId"));n.data("colorpicker").color=t,n.data("colorpicker").origColor=t,a(t,n.get(0)),r(t,n.get(0)),s(t,n.get(0)),l(t,n.get(0)),o(t,n.get(0)),d(t,n.get(0)),u(t,n.get(0))}})}}}();e.fn.extend({ColorPicker:t.init,ColorPickerHide:t.hidePicker,ColorPickerShow:t.showPicker,ColorPickerSetColor:t.setColor})}(jQuery);