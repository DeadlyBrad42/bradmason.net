(function (a) { a.fn.fancyZoom = function (p) { var p = p || {}; var m = p && p.directory ? p.directory : "images"; var e = false; if (a("#zoom").length == 0) { var f = a.browser.msie ? "gif" : "png"; var k = '<div id="zoom" style="display:none;">                   <table id="zoom_table" style="border-collapse:collapse; width:100%; height:100%;">                     <tbody>                       <tr>                         <td class="tl" style="background:url(' + m + "/tl." + f + ') 0 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="tm" style="background:url(' + m + "/tm." + f + ') 0 0 repeat-x; height:20px; overflow:hidden;" />                         <td class="tr" style="background:url(' + m + "/tr." + f + ') 100% 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="ml" style="background:url(' + m + "/ml." + f + ') 0 0 repeat-y; width:20px; overflow:hidden;" />                         <td class="mm" style="background:#fff; vertical-align:top; padding:10px;">                           <div id="zoom_content">                           </div>                         </td>                         <td class="mr" style="background:url(' + m + "/mr." + f + ') 100% 0 repeat-y;  width:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="bl" style="background:url(' + m + "/bl." + f + ') 0 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="bm" style="background:url(' + m + "/bm." + f + ') 0 100% repeat-x; height:20px; overflow:hidden;" />                         <td class="br" style="background:url(' + m + "/br." + f + ') 100% 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                     </tbody>                   </table>                   <a href="#" title="Close" id="zoom_close" style="position:absolute; top:0; left:0;">                     <img src="' + m + "/closebox." + f + '" alt="Close" style="border:none; margin:0; padding:0;" />                   </a>                 </div>'; a("body").append(k); a("html").click(function (q) { if (a(q.target).parents("#zoom:visible").length == 0) { l(); } }); a(document).keyup(function (q) { if (q.keyCode == 27 && a("#zoom:visible").length > 0) { l(); } }); a("#zoom_close").click(l); } var o = a("#zoom"); var j = a("#zoom_table"); var i = a("#zoom_close"); var h = a("#zoom_content"); var b = a("td.ml,td.mm,td.mr"); this.each(function (q) { a(a(this).attr("href")).hide(); a(this).click(n); }); return this; function n(w) { if (e) { return false; } e = true; var q = a(a(this).attr("href")); var u = p.width; var v = p.height; var r = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth); var E = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight); var C = window.pageXOffset || (window.document.documentElement.scrollLeft || window.document.body.scrollLeft); var B = window.pageYOffset || (window.document.documentElement.scrollTop || window.document.body.scrollTop); var F = { width: r, height: E, x: C, y: B }; var r = (u || q.width()) + 60; var E = (v || q.height()) + 60; var z = F; var A = Math.max((z.height / 2) - (E / 2) + B, 0); var D = (z.width / 2) - (r / 2); var s = w.pageY; var t = w.pageX; i.attr("curTop", s); i.attr("curLeft", t); i.attr("scaleImg", p.scaleImg ? "true" : "false"); a("#zoom").hide().css({ position: "absolute", top: s + "px", left: t + "px", width: "1px", height: "1px" }); g(); i.hide(); if (p.closeOnClick) { a("#zoom").click(l); } if (p.scaleImg) { h.html(q.html()); a("#zoom_content img").css("width", "100%"); } else { h.html(""); } a("#zoom").animate({ top: A + "px", left: D + "px", opacity: "show", width: r, height: E }, 500, null, function () { if (p.scaleImg != true) { h.html(q.html()); } d(); i.show(); e = false; }); return false; } function l() { if (e) { return false; } e = true; a("#zoom").unbind("click"); g(); if (i.attr("scaleImg") != "true") { h.html(""); } i.hide(); a("#zoom").animate({ top: i.attr("curTop") + "px", left: i.attr("curLeft") + "px", opacity: "hide", width: "1px", height: "1px" }, 500, null, function () { if (i.attr("scaleImg") == "true") { h.html(""); } d(); e = false; }); return false; } function c(s) { a("#zoom_table td").each(function (u) { var t = a(this).css("background-image").replace(/\.(png|gif|none)\"\)$/, "." + s + '")'); a(this).css("background-image", t); }); var r = i.children("img"); var q = r.attr("src").replace(/\.(png|gif|none)$/, "." + s); r.attr("src", q); } function g() { if (a.browser.msie && parseFloat(a.browser.version) >= 7) { c("gif"); } } function d() { if (a.browser.msie && a.browser.version >= 7) { c("png"); } } }; })(jQuery);