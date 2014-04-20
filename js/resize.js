/*!
	Autosize v1.18.6 - 2014-03-13
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e) {
    var t, o = {
        className: "autosizejs",
        id: "autosizejs",
        append: "",
        callback: !1,
        resizeDelay: 10,
        placeholder: !0
    }, i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], a = e(i).data("autosize", !0)[0];
    a.style.lineHeight = "99px", "99px" === e(a).css("lineHeight") && n.push("lineHeight"), a.style.lineHeight = "", e.fn.autosize = function(i) {
        return this.length ? (i = e.extend({}, o, i || {}), a.parentNode !== document.body && e(document.body).append(a), this.each(function() {
            function o() {
                var t, o = window.getComputedStyle ? window.getComputedStyle(u, null) : !1;
                o ? (t = u.getBoundingClientRect().width, 0 === t && (t = parseInt(o.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, i) {
                    t -= parseInt(o[i], 10)
                })) : t = Math.max(p.width(), 0), a.style.width = t + "px"
            }
            function s() {
                var s = {};
                if (t = u, a.className = i.className, a.id = i.id, d = parseInt(p.css("maxHeight")
                    , 10), e.each(n, function(e, t) {
                    s[t] = p.css(t)
                }), e(a).css(s).attr("wrap", p.attr("wrap")), o(), window.chrome) {
                    var r = u.style.width;
                    u.style.width = "0px", u.offsetWidth, u.style.width = r
                }
            }
            function r() {
                var e, n;
                t !== u ? s() : o(), a.value=!u.value && i.placeholder ? (p.attr("placeholder") || "") + i.append : u.value + i.append, a.style.overflowY = u.style.overflowY, n = parseInt(u.style.height, 10), a.scrollTop = 0, a.scrollTop = 9e4, e = a.scrollTop, d && e > d ? (u.style.overflowY = "scroll", e = d) : (u.style.overflowY = "hidden", c > e && (e = c)), e += w, n !== e && (u.style.height = e + "px", f && i.callback.call(u, u))
            }
            function l() {
                clearTimeout(h), h = setTimeout(function() {
                    var e = p.width();
                    e !== g && (g = e, r())
                }, parseInt(i.resizeDelay, 10))
            }
            var d, c, h, u = this, p = e(u), w = 0, f = e.isFunction(i.callback), z = {
                height: u.style.height,
                overflow: u.style.overflow,
                overflowY: u.style.overflowY,
                wordWrap: u.style.wordWrap,
                resize: u.style.resize
            }, g = p.width();
            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (w = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - w || 0, p.height()), p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none": "horizontal"
            }), "onpropertychange"in u ? "oninput"in u ? p.on("input.autosize keyup.autosize", r) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && r()
            }) : p.on("input.autosize", r), i.resizeDelay!==!1 && e(window).on("resize.autosize", l), p.on("autosize.resize", r), p.on("autosize.resizeIncludeStyle", function() {
                t = null, r()
            }), p.on("autosize.destroy", function() {
                t = null, clearTimeout(h), e(window).off("resize", l), p.off("autosize").off(".autosize").css(z).removeData("autosize")
            }), r())
        })) : this
    }
})(window.jQuery || window.$);
