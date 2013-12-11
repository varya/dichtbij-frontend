/*----------------------------------------------------------------------------------------------*/
//                                     Some common stuff
/*----------------------------------------------------------------------------------------------*/

// Global list of js objects
if (typeof (oLst) == "undefined") oLst = new Object();


function abs(val) { return val > 0 ? val : -1 * val; }
function sgn(val) { return val > 0 ? 1 : val < 0 ? -1 : 0; }



/*----------------------------------------------------------------------------------------------*/
//                                     jQuery extention
//                          Provide nice jumping effect (used by IDoc)
/*----------------------------------------------------------------------------------------------*/

if (typeof (jQuery) != "undefined") {
    jQuery.easing['jswing'] = jQuery.easing['swing'];

    jQuery.extend(jQuery.easing,
	{
	    def: 'easeOutQuad',
	    swing: function (x, t, b, c, d) {
	        //alert(jQuery.easing.default);
	        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	    },
	    easeInQuad: function (x, t, b, c, d) {
	        return c * (t /= d) * t + b;
	    },
	    easeOutQuad: function (x, t, b, c, d) {
	        return -c * (t /= d) * (t - 2) + b;
	    },
	    easeInOutQuad: function (x, t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	        return -c / 2 * ((--t) * (t - 2) - 1) + b;
	    },
	    easeInCubic: function (x, t, b, c, d) {
	        return c * (t /= d) * t * t + b;
	    },
	    easeOutCubic: function (x, t, b, c, d) {
	        return c * ((t = t / d - 1) * t * t + 1) + b;
	    },
	    easeInOutCubic: function (x, t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	        return c / 2 * ((t -= 2) * t * t + 2) + b;
	    },
	    easeInQuart: function (x, t, b, c, d) {
	        return c * (t /= d) * t * t * t + b;
	    },
	    easeOutQuart: function (x, t, b, c, d) {
	        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	    },
	    easeInOutQuart: function (x, t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    },
	    easeInQuint: function (x, t, b, c, d) {
	        return c * (t /= d) * t * t * t * t + b;
	    },
	    easeOutQuint: function (x, t, b, c, d) {
	        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    },
	    easeInOutQuint: function (x, t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    },
	    easeInSine: function (x, t, b, c, d) {
	        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	    },
	    easeOutSine: function (x, t, b, c, d) {
	        return c * Math.sin(t / d * (Math.PI / 2)) + b;
	    },
	    easeInOutSine: function (x, t, b, c, d) {
	        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	    },
	    easeInExpo: function (x, t, b, c, d) {
	        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	    },
	    easeOutExpo: function (x, t, b, c, d) {
	        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    },
	    easeInOutExpo: function (x, t, b, c, d) {
	        if (t == 0) return b;
	        if (t == d) return b + c;
	        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    },
	    easeInCirc: function (x, t, b, c, d) {
	        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    },
	    easeOutCirc: function (x, t, b, c, d) {
	        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    },
	    easeInOutCirc: function (x, t, b, c, d) {
	        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    },
	    easeInElastic: function (x, t, b, c, d) {
	        var s = 1.70158; var p = 0; var a = c;
	        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
	        if (a < Math.abs(c)) { a = c; var s = p / 4; }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    },
	    easeOutElastic: function (x, t, b, c, d) {
	        var s = 1.70158; var p = 0; var a = c;
	        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
	        if (a < Math.abs(c)) { a = c; var s = p / 4; }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    },
	    easeInOutElastic: function (x, t, b, c, d) {
	        var s = 1.70158; var p = 0; var a = c;
	        if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
	        if (a < Math.abs(c)) { a = c; var s = p / 4; }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	    },
	    easeInBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    },
	    easeOutBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    },
	    easeInOutBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
	        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	    },
	    easeInBounce: function (x, t, b, c, d) {
	        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	    },
	    easeOutBounce: function (x, t, b, c, d) {
	        if ((t /= d) < (1 / 2.75)) {
	            return c * (7.5625 * t * t) + b;
	        } else if (t < (2 / 2.75)) {
	            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
	        } else if (t < (2.5 / 2.75)) {
	            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
	        } else {
	            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	        }
	    },
	    easeInOutBounce: function (x, t, b, c, d) {
	        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
	        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	    }
	});
}


/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object ImgList
//                       Provide reusable and manageble Image List control
/*----------------------------------------------------------------------------------------------*/

function ImgList_Next(id) {
    if (oLst[id]) return oLst[id].Step(1);
    //alert("Wrong Image obj");
}

function ImgList_Prev(id) {
    if (oLst[id]) return oLst[id].Step(-1);
    //alert("Wrong Image obj");
}

function ImgList_Cur(id, i, noprev) {
    if (oLst[id]) return oLst[id].SetCur(i, noprev);
    //alert("Wrong Image obj");
}

function ImgList_Add(id, imgUrl, linkUrl, imgTitle) {
    if (oLst[id]) return oLst[id].Add(imgUrl, linkUrl, imgTitle);
    //alert("Wrong Image obj");
}

function ImgList(id, prm) {
    var slf = new Object();
    if (oLst[id]) {
        return oLst[id];
    } else oLst[id] = slf;
    slf.bas = document.getElementById(id);
    if (!slf.bas) { return null; }

    slf.Play = function (rate) {
        if (slf.play.style.display == "") { slf.play.style.display = "none"; slf.stop.style.display = ""; }
        slf.Step(1);
        slf.timer = setTimeout(function () { slf.Play(rate); }, rate);

        PageTrack('fotoplayartikel=ja');
    }

    slf.Stop = function (rate) {
        clearTimeout(slf.timer);
        slf.play.style.display = "";
        slf.stop.style.display = "none";

        PageTrack('fotostopartikel=ja');
    }

    slf.Zoom = function (Out) {  
        var delay = 500;
        if (slf.bas.parentNode.parentNode.parentNode && slf.bas.parentNode.parentNode.parentNode.innerHTML.indexOf('Familieberichten') > -1) {
            slf.bas.parentNode.style.cssText = Out ? "margin-left: 0px" : "margin-left: 150px";
        }
        var w = Out ? slf.z_w : slf.w;
        var h = Out ? $(slf.img).height() * slf.z_w / slf.w : $(slf.img).height() * slf.w / slf.z_w;

        slf.zin.style.display = Out ? "" : "none";
        slf.zout.style.display = Out ? "none" : "";

        var t = slf.z_type;
        slf.z_type = slf.type;
        slf.type = t;

        $(slf.bas).animate({ width: w }, delay);
        $(slf.ibs).animate({ width: w, height: h }, delay);
        $(slf.img).animate({ width: w, height: h }, delay, function () { slf.img.src = slf.ibs.src = slf.ToType(slf.img.src, slf.type); });

        $('#familieberichtenImageHolder').css('margin-left', Out ? '0px' : '126px');

        PageTrack('fotoinzoomenartikel=ja');
    }

    slf.SetCur = function (index, noprev) {
        if (index < 0 || index >= slf.list.length) return;
        slf.cntr.innerHTML = (slf.crnt = index) + 1;
        if (slf.ibs.src == '') {
            slf.ibs.src = slf.img.src && !noprev ? slf.img.src : slf.sfx + slf.ToType(slf.list[slf.crnt].src, slf.type);
        }

        //$(slf.img).css({ display: "none" })
        slf.img.src = slf.sfx + slf.ToType(slf.list[slf.crnt].src, slf.type);
        var title = slf.list[slf.crnt].title;
        if (title != null && title.length > 0) {
            slf.titlepnl.innerHTML = '<div>' + title + '</div>';
        }
        else {
            slf.titlepnl.innerHTML = '';
        }
        if (index != 0) {
            $(slf.img).ready(function () {
                $(slf.img).height(slf.ibs.clientHeight);
            });
        }
        if (slf.onChange) slf.onChange(index, slf);
    }

    slf.ToType = function (src, type) {
        src = src.replace("/medium/", "/" + type + "/");
        src = src.replace("/normal/", "/" + type + "/");
        src = src.replace("/large/", "/" + type + "/");
        src = src.replace("/xl/", "/" + type + "/");
        src = src.replace("/small/", "/" + type + "/");
        src = src.replace("/thumb/", "/" + type + "/");
        src = src.replace("/xxl/", "/" + type + "/");
        return src;
    }

    slf.Add = function (imgUrl, linkUrl, imgTitle) {
        slf.list.push({ url: linkUrl, src: imgUrl, title: imgTitle });
        if (slf.list.length == 1) slf.SetCur(0);

        slf.totl.innerHTML = slf.list.length;

        slf.pnl.style.display = slf.list.length > 1 ? "" : "none";
    }

    slf.Step = function (step) {
        slf.SetCur(slf.crnt + step >= slf.list.length ? 0 : slf.crnt + step < 0 ? slf.list.length - 1 : slf.crnt + step);

        PageTrack('fotobladerenartikel=ja');
    }

    slf.list = new Array();
    slf.crnt = 0;

    slf.sfx = prm.srcBase || prm.srcBase == '' ? prm.srcBase : "http://static-webregio.nl";
    slf.w = prm.w ? prm.w : 232;
    slf.type = prm.type ? prm.type : "medium";
    slf.onChange = prm.onChange;
    slf.z = prm.z ? prm.z : 10; // z-index


    if (prm.z_w != null && prm.z_type != null) {
        slf.zoom = true;
        slf.z_w = prm.z_w ? prm.z_w : 485;
        slf.z_type = prm.z_type ? prm.z_type : "large";
    }

    slf.bas.className = "imglist";
    slf.bas.style.width = slf.w + "px";

    slf.ibs = document.createElement("img");
    slf.img = document.createElement("img");
    slf.bas.appendChild(slf.ibs);
    slf.bas.appendChild(slf.img);
    $(slf.ibs).css({ width: slf.w, "z-index": slf.z + 1, "opacity": 0 });
    $(slf.img).css({ width: slf.w, position: "absolute", top: 0, left: 0, "z-index": slf.z + 2 });

    slf.img.onload = function () { $(slf.img).fadeTo("slow", 1); };
    slf.img.onclick = function () { slf.Zoom(slf.zin.style.display == 'none'); };

    slf.titlepnl = document.createElement("div");
    slf.titlepnl.className = "imglst_title";
    slf.titlepnl.innerHTML = prm.title;
    slf.bas.appendChild(slf.titlepnl);

    slf.pnl = document.createElement("div");
    slf.pnl.className = "imglist_parentdiv";
    slf.pnl.innerHTML = "<div class='imglist_cntr'><span id='imglist_crnt_" + id + "'></span> / <span id='imglist_totl_" + id + "'></span></div>" +
						"<div class='imglist_next' id='imglist_next_" + id + "'>volgende ></div><div class='imglist_play' id='imglist_play_" + id + "'>></div><div class='imglist_stop' id='imglist_stop_" + id + "'>||</div><div class='imglist_prev' id='imglist_prev_" + id + "'>< vorige</div>" + (slf.zoom ? "<div class='imglist_zoom' id='imglist_zout_" + id + "'><img src='/includes/img/zoom_out.png' alt='zoom out' /></div><div class='imglist_zoom' id='imglist_zin_" + id + "'><img src='/includes/img/zoom_in.png' alt='zoom in' /></div>" : "");
    slf.bas.appendChild(slf.pnl);

    slf.cntr = document.getElementById("imglist_crnt_" + id);
    slf.totl = document.getElementById("imglist_totl_" + id);

    slf.zout = document.getElementById("imglist_zout_" + id);
    slf.zin = document.getElementById("imglist_zin_" + id);

    slf.next = document.getElementById("imglist_next_" + id);
    slf.prev = document.getElementById("imglist_prev_" + id);
    slf.play = document.getElementById("imglist_play_" + id);
    slf.stop = document.getElementById("imglist_stop_" + id);

    slf.stop.style.display = "none";



    slf.next.onclick = function () { slf.Step(1); };
    slf.prev.onclick = function () { slf.Step(-1); };
    slf.play.onclick = function () { slf.Play(3000); };
    slf.stop.onclick = function () { slf.Stop(); };

    if (slf.zoom) {
        slf.zin.style.display = "none";
        slf.zout.onclick = function () { slf.Zoom(true); };
        slf.zin.onclick = function () { slf.Zoom(false); };
    }

    if (prm.alt) slf.alt = prm.alt;
    if (prm.src) slf.Add(prm.src, prm.url, prm.title);

    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object PopUp
//                       Provide reusable and manageble pop-up control
/*----------------------------------------------------------------------------------------------*/

function PopUp_Show(id, show) {
    if (oLst[id]) oLst[id].Show(show);
    if (show && oLst[id] && oLst[id].data && oLst[id].data.children && oLst[id].data.children[1]) oLst[id].data.children[1].focus();
}

function PopUp(id, prm) {
    var slf = new Object();
    if (oLst[id]) {
        //alert("Inited Image obj: " + id);
        return oLst[id];
    }
    else
        oLst[id] = slf;

    slf.prm = prm ? prm : new Object();
    prm.clos = prm.clos != null ? prm.clos : true;

    slf.id = id;
    slf.data = document.getElementById(id);
    if (!slf.data) { /*alert("Can't find obj: " + id);*/return null; }
    if (!prm.src) slf.data.className = prm.css ? prm.css : "form_m";

    slf.base = document.createElement("div");
    slf.base.setAttribute("id", "popup_base_" + slf.id);
    slf.base.className = "popup_base" + (slf.prm.modal ? " modal" : "");
    slf.base.innerHTML = "<table style='width:100%; height:100%'><tr><td style='vertical-align:middle;'><div id='popup_cntt_" + slf.id + "'></div></td></tr></table>";
    slf.data.parentNode.appendChild(slf.base);


    slf.cntt = document.getElementById("popup_cntt_" + slf.id);
    slf.cntt.className = "popup_cntt";
    slf.cntt.appendChild(slf.data);

    // Header
    slf.head = document.createElement("div");
    slf.head.className = "popup_head";
    slf.cntt.insertBefore(slf.head, slf.data);

    // Cloce button
    if (prm.clos) {
        slf.clos = document.createElement("span");
        slf.clos.innerHTML = "x";
        slf.clos.className = "popup_clos";
        slf.clos.setAttribute("id", "popup_clos");
        slf.head.appendChild(slf.clos);
        slf.clos.onclick = function () { slf.Show(false); };
    }

    if (prm.head) {
        slf.titl = document.createElement("span");
        slf.titl.innerHTML = prm.head;
        slf.head.appendChild(slf.titl);
    }

    if (prm.src) {
        slf.frm = document.createElement("iframe");
        slf.frm.setAttribute("frameborder", 0);
        slf.frm.setAttribute("scrolling", "no");
        slf.frm.setAttribute("id", "popupiframe");
        slf.data.appendChild(slf.frm);
        slf.frm.src = prm.src;
    }

    slf.Size = function () {
        slf.prm.w = slf.prm.w != null ? slf.prm.w : 495; //Don't set 'w' if it is not neccesary
        slf.cntt.style.height = "";
        slf.cntt.style.width = slf.prm.w + "px";
        slf.prm.h = $(slf.cntt).height();
        if (slf.frm) {
            $(slf.frm).contents().find(".form_m").width(slf.prm.w - 50);
            slf.frm.style.width = slf.prm.w + "px";
            slf.prm.h = $(slf.frm).contents().height() + 35;
            slf.frm.style.height = slf.prm.h - 35 + "px";
        }
        slf.cntt.style.height = "0px";
    }

    slf.Show = function (show) {
        if (show) {
            if (slf.base.style.display == "inline") return;
            $('object').css({ display: 'none' });
            slf.base.style.display = "inline";
            slf.Size();
            $(slf.cntt).animate({ height: slf.prm.h + "px" }, 300, function () { $(slf.cntt).dropShadow({ left: 8, top: 8, opacity: 0.5, blur: 4, color: '#333333' }); $(document.body).bind('click', slf.clickHandler); });
        }
        else {
            if (slf.base.style.display != "inline") return;
            $('object').css({ display: '' });
            $(document.body).unbind('click', slf.clickHandler);
            $(slf.cntt).removeShadow();
            $(slf.cntt).animate({ height: "0px" }, 300, function () { slf.base.style.display = "none"; });
        }
        if (slf.prm.onShow) slf.prm.onShow(show, slf);
    }

    slf.isParent = function (chld, prnt) {
        while (chld) {
            if (chld == prnt) return true;
            chld = chld.parentNode;
        }
        return false;
    }

    slf.clickHandler = function (e) {
    }

    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object Pager
//                            Provide reusable and manageble paging
/*----------------------------------------------------------------------------------------------*/

function Pager_Go(id, page) {
    if (oLst[id]) oLst[id].Go(page);
}

function Pager_AddPage(id, phtml) {
    if (oLst[id]) oLst[id].AddPage(phtml);
}

function Pager(id, prm) {
    var slf = new Object();
    if (oLst[id]) { alert("Inited Image obj: " + id); return oLst[id]; } else oLst[id] = slf;

    slf.base = document.getElementById(id);
    if (!slf.base) { /*alert("Can't find obj: " + id);*/return null; }

    slf.sel = document.getElementById(prm.Sel != null ? prm.Sel : id + "_sel");
    if (!slf.sel) { alert("Can't find selector placeholder: " + id); return null; }
    slf.sel.className = prm.sbs_css != null ? prm.sbs_css : "pgr_sbs";

    slf.id = id;
    slf.p = 0;

    slf.pages = new Array();
    slf.hldrs = new Array();

    slf.base.className = prm.bas_css != null ? prm.bas_css : "pgr_bas";
    slf.base.style.width = prm.w + "px";
    slf.base.style.height = prm.h + "px";

    slf.sep_css = prm.sep_css != null ? prm.sep_css : "pgr_sep";
    slf.sel_css = prm.sel_css != null ? prm.sel_css : "pgr_sel";
    slf.btn_css = prm.btn_css != null ? prm.btn_css : "pgr_btn";

    slf.onClick = prm.onClick;
    slf.step = prm.step != null ? prm.step : 1;

    slf.pnl = $("<div></div>").appendTo(slf.base).css({ "overflow": "hidden", "height": prm.h, "position": "relative" });
    slf.pos = 0;

    slf.Pgr = function () {
        var res = "";
        if (slf.cnt > 1) {
            if (slf.step < 1) slf.step = 1; // step - num of additional page links before and after current page

            var start = slf.p - slf.step;
            if (start < 2) start = 2;

            var finish = start + slf.step * 2 + 1;
            if (finish > slf.cnt) {
                start -= (finish - slf.cnt);
                if (start < 2) start = 2;
                finish = slf.cnt;
            }

            res += slf.Btn(1);
            if (start > 2) res += "<div class=\"" + slf.sep_css + "\">...</div>";

            for (var i = start; i < finish; i++)
                res += slf.Btn(i);

            if (finish < slf.cnt) res += "<div class=\"" + slf.sep_css + "\">...</div>";
            res += slf.Btn(slf.cnt);
        }
        return res;
    }

    slf.Btn = function (p) {
        if (slf.p == p) return "<div class=\"" + slf.sel_css + "\"><div>" + p + "</div></div>";
        var fnc = (slf.onClick == null ? "" : slf.onClick + "(" + p + ");");
        return "<div class=\"" + slf.btn_css + "\" onclick=\"javascript:Pager_Go('" + slf.id + "', " + p + ");" + fnc + "\"><div>" + p + "</div></div>";
    }

    slf.Go = function (p) {
        while (abs(p - slf.p) > 0) {
            slf.p += sgn(p - slf.p);
            if (slf.hldrs[slf.p - 1].children().length == 0) slf.hldrs[slf.p - 1].append(slf.pages[slf.p - 1]);
        }

        var nps = -1 * prm.w * (p - 1);
        $(slf.pnl).animate({ left: nps + "px" }, abs(slf.pos - nps) + 100);
        slf.pos = nps;

        slf.sel.innerHTML = slf.Pgr();
    }

    slf.AddPage = function (html) {
        slf.pages.push(html);
        slf.hldrs.push($("<div></div>").appendTo(slf.pnl).css({ "overflow": "hidden", "height": prm.h, "width": prm.w, "float": "left" }));
        slf.cnt = slf.pages.length;
        slf.pnl.css({ "width": prm.w * slf.cnt });
    }

    slf.AddLast = function (html) {
        if (slf.pages.length > 0)
            slf.pages[slf.pages.length - 1] += html;
    }

    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object IPgr
//                         Provide reusable and manageble image list
/*----------------------------------------------------------------------------------------------*/

function IPgr_Go(id, page) {
    if (oLst[id]) oLst[id].Go(page);
}

function IPgr_Add(id, inf) {
    if (oLst[id]) oLst[id].AddImg(inf);
}

function IPgr_Sel(id, i) {
    if (oLst[id]) oLst[id].Select(i);
}

function IPgr(id, prm) {
    var slf = new Object();
    if (oLst[id]) { alert('Inited Image obj: ' + id); return oLst[id]; } else oLst[id] = slf;

    slf.base = document.getElementById(id);
    if (!slf.base) { /*alert("Can't find obj: " + id);*/return null; }

    slf.id = id;
    slf.prm = prm;
    slf.images = new Array();

    slf.pgr_base = document.createElement('div');
    //slf.pgr_base.className = '';
    slf.pgr_base.id = id + '_pgr';
    slf.base.appendChild(slf.pgr_base);

    slf.psl_base = document.createElement('div');
    //slf.psl_base.className = '';
    slf.psl_base.id = id + '_pgr_sel';
    slf.base.appendChild(slf.psl_base);

    slf.pup_base = document.createElement('div');
    //slf.pup_base.className = '';
    slf.pup_base.id = id + '_pup';
    slf.base.appendChild(slf.pup_base);

    slf.img_base = document.createElement('div');
    slf.img_base.id = id + '_img';
    slf.pup_base.appendChild(slf.img_base);


    slf.pgr = Pager(slf.pgr_base.id, { w: prm.pgr_w ? prm.pgr_w : 470, h: prm.pgr_w ? prm.pgr_h : 320 });
    slf.pup = PopUp(slf.pup_base.id, { head: prm.pup_head, w: prm.pup_w, onShow: function (show) { if (slf.img) slf.img.Stop(); } });
    slf.img = ImgList(slf.img_base.id, { srcBase: '', w: prm.pup_w - 55, type: 'xl', z: 10000, onChange: function (i) { if (slf.pgr.p != 0 && slf.images[i].page != slf.pgr.p) slf.pgr.Go(slf.images[i].page); } });

    slf.Go = function (p) {
        slf.pgr.Go(p)
    }

    slf.AddImg = function (inf) {
        var i = slf.images.push(inf) - 1;
        slf.images[i].htm = "<div class='imgdiv_sm'><img src='" + inf.src + "' alt='" + inf.alt + "' onclick=\"IPgr_Sel('" + slf.id + "', " + i + ");\" /></div>";

        if (i % slf.prm.pgr_size == 0)
            slf.pgr.AddPage(slf.images[i].htm);
        else
            slf.pgr.AddLast(slf.images[i].htm);

        slf.images[i].page = slf.pgr.pages.length;
        slf.img.Add(slf.images[i].src);
    }

    slf.Select = function (i) {
        slf.img.SetCur(i, true);
        slf.pup.Show(true);

        if (!(typeof pageTracker == 'undefined')) {
            if (pageTracker) pageTracker._trackPageview(slf.images[i].url);
        }
    }

    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object FuList 
//                        To make several  inputs type File look like one
/*----------------------------------------------------------------------------------------------*/

function FuList_Rem(id, i) {
    if (oLst[id]) oLst[id].Rem(i);
}

function FuList(id, prm) {
    var slf = new Object();
    if (oLst[id]) { alert("Inited Image obj: " + id); return oLst[id]; } else oLst[id] = slf;

    if (!prm) prm = {};
    prm.ful_inf = prm.ful_inf ? prm.ful_inf : "ful_inf";
    prm.ful_bas = prm.ful_bas ? prm.ful_bas : "ful_bas";

    slf.id = id;
    slf.prm = prm;

    slf.bas = document.getElementById(id);
    if (!slf.bas) { /*alert("Can't find obj: " + id);*/return null; }
    slf.bas.className = prm.ful_bas;

    slf.spans = $(slf.bas).find('span');

    slf.onChange = function (e) {
        var i = e.data.i;
        if (slf.Val(i) != "") {
            $(slf.spans[i]).css({ display: 'none' });
            $(slf.bas).append("<div id='ful_bas_" + slf.id + "_" + i + "' class='" + slf.prm.ful_inf + "'><img src='/includes/img/attachment.png' alt='attachment' /><span onclick=\"FuList_Rem('" + slf.id + "', " + i + ")\">x</span>" + slf.Val(i).substr(slf.Val(i).lastIndexOf('\\') + 1) + "</div>");
            slf.FirstEmpty();
        }
    }

    slf.Val = function (i) {
        return $(slf.spans[i]).find('input').val();
    }

    slf.FirstEmpty = function () {
        slf.spans.css({ display: 'none' });
        for (var i = 0; i < slf.spans.length; i++)
            if (slf.Val(i) == "") {
                $(slf.spans[i]).find('input').bind('change', { i: i }, slf.onChange);
                return $(slf.spans[i]).css({ display: '' });
            }
    }

    slf.Rem = function (i) {
        $('#ful_bas_' + slf.id + '_' + i).remove();
        $(slf.spans[i]).html($(slf.spans[i]).html());
        slf.FirstEmpty();
    }

    slf.FirstEmpty();
    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object IDoc
//                   Provide the banners docked to the tob/bot of the page
/*----------------------------------------------------------------------------------------------*/

function IDoc_Pop(id, inf) {
    if (oLst[id]) oLst[id].Pop(inf);
}

function IDoc_Bas(id, inf) {
    if (oLst[id]) oLst[id].Bas(inf);
}

function IDoc(id, prm) {
    var slf = new Object();
    if (oLst[id]) { alert('Inited Image obj: ' + id); return oLst[id]; } else oLst[id] = slf;

    slf.prm = prm;
    slf.id = id;

    slf.pops = new Array();

    slf.div = $("<div></div>").appendTo($(document.body));

    slf.css = $.extend({ 'position': 'fixed', 'overflow': 'hidden', 'z-index': 10, 'left': '50%' }, prm.align == "top" ? { top: 0} : { bottom: 0 });

    slf.div.css({ height: prm.h ? prm.h : 50, width: prm.w });

    slf.Bas = function (inf) {
        slf.bas = $("<div>" + inf.htm + "</div>").appendTo(slf.div);
        slf.bas.css($.extend({ 'margin-left': -1 * slf.prm.w / 2 }, slf.css));
    }

    slf.Pop = function (inf) {
        var pop = $("<div>" + inf.htm + "</div>").appendTo(slf.div);
        slf.pops.push(pop);
        pop.attr("i", slf.pops.length - 1);
        pop.css($.extend({ height: slf.prm.h ? slf.prm.h : 50, 'margin-left': inf.x - slf.prm.w / 2 }, slf.css));
        pop.inf = inf;

        pop.mouseover(function () {
            $(this).stop().animate({ height: slf.pops[$(this).attr("i")].inf.h }, { queue: false, duration: 600, easing: 'easeOutBounce' })
        });

        pop.mouseout(function () {
            $(this).stop().animate({ height: slf.prm.h }, { queue: false, duration: 600, easing: 'easeOutBounce' })
        });
    }

    return slf;
}



/*----------------------------------------------------------------------------------------------*/
//                                  JavaScript Object IPager 
//                               !!!!!! PROTOTYPE (use jq.ad-gallery) 
//                                    Remove if not used
/*----------------------------------------------------------------------------------------------*/

function IPager_Go(id, page) {
    if (oLst[id]) oLst[id].Go(page);
}

function IPager_Add(id, inf) {
    if (oLst[id]) oLst[id].AddImg(inf);
}

function IPager_Sel(id, i) {
    if (oLst[id]) oLst[id].Select(i);
}

function IPager(id, prm) {
    var slf = new Object();
    if (oLst[id]) { alert('Inited Image obj: ' + id); return oLst[id]; } else oLst[id] = slf;

    slf.base = document.getElementById(id);
    if (!slf.base) { /*alert("Can't find obj: " + id);*/return null; }

    slf.id = id;

    slf.cnt = 0;

    $(slf.base).append("<div id='gallery' class='ad-gallery'><div class='ad-image-wrapper'></div><div class='ad-controls'></div><div class='ad-nav'><div class='ad-thumbs'><ul class='ad-thumb-list'></ul></div></div></div>");

    slf.Go = function (p) {
        var galleries = $('.ad-gallery').adGallery({ width: 490, height: 330, slideshow: { speed: 4000, start_label: '>>', stop_label: '||'} });

        $('#switch-effect').change(function () { galleries[0].settings.effect = $(this).val(); return false; });
    }

    slf.AddImg = function (inf) {
        if (slf.cnt % 12 == 0)
            slf.pg = $("<div class='thmbs'></div>").appendTo("<ul></ul>").appendTo($('.ad-thumb-list'));

        slf.pg.append("<a href='" + inf.src_l + "'><img src='" + inf.src + "' id='image_" + slf.cnt + "'></a>");
        $('img#image_' + slf.cnt).data('ad-desc', "Image description...<br />Additional description is here...<br /><span style='font-size:9px;'>Additional description is here...</span>");
        slf.cnt++;
    }

    return slf;
}





/*----------------------------------------------------------------------------------------------*/
//                                  Password Strength checker 
/*----------------------------------------------------------------------------------------------*/

(function ($) {

    $.fn.pwd_clear = function () {
        $(this).val('');
        $("#pwd_" + $(this)[0].id).text('');
    }

    $.fn.pwd_strength = function (options) {
        var prm = $.extend({
            'container': null,
            'min': 6,
            'texts': {
                0: 'verkeerde',
                1: 'korte',
                2: 'zeer zwak',
                3: 'zwakke',
                4: 'normale',
                5: 'sterke',
                6: 'zeer sterk'
            },
            'cmn': { 'padding': '0 5px', 'display': 'inline-block', 'font-size': '11px', 'position': 'absolute' },
            'css': {
                0: { 'background-color': '#f68668' },
                1: { 'background-color': '#f68668' },
                2: { 'background-color': '#fab380' },
                3: { 'background-color': '#f8e401' },
                4: { 'background-color': '#c9e567' },
                5: { 'background-color': '#bada48' },
                6: { 'background-color': '#86ab11' }
            }
        }, options);

        cntRgxp = function (val, rex) {
            var match = val.match(rex);
            return match ? match.length : 0;
        }

        getStrength = function (val, min) {
            var nm = cntRgxp(val, /\d/g), lw = cntRgxp(val, /[a-z]/g), up = cntRgxp(val, /[A-Z]/g), sb = cntRgxp(val, /[\-_]/g);
            if (nm + lw + up + sb != val.length) return 0;

            if (val.length < min) return 1;
            return 1 + (nm ? 1 : 0) + (lw ? 1 : 0) + (up ? 1 : 0) + (sb ? 1 : 0) + (val.length > 8 ? 1 : 0);
        }

        return this.each(function () {
            var container = prm.container ? $(prm.container) : $("<span id='pwd_" + $(this)[0].id + "'/>").appendTo($(this).parent());

            $(this).keyup(function () {
                var val = $(this).val();
                if (val.length != 0) {
                    var level = getStrength(val, prm.min);
                    if (level in prm.texts) container.text(prm.texts[level]).css($.extend({}, prm.cmn, prm.css[level]));
                    container.css({ left: $(this).position().left + $(this).width() - 1 - container.width(), top: $(this).position().top + 4 });
                }
                else container.text('');
            });
        });
    };

})(jQuery);



//set cookie in the collection
function Set_Cookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());

    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));

    document.cookie = name + "=" + escape(value) +
	((expires) ? ";expires=" + expires_date.toGMTString() : "") +
	((path) ? ";path=" + path : "") +
	((domain) ? ";domain=" + domain : "") +
	((secure) ? ";secure" : "");
}

//get cookie from the collection
function Get_Cookie(check_name) {
    var a_all_cookies = document.cookie.split(';');
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false; // set boolean t/f default f

    for (i = 0; i < a_all_cookies.length; i++) {
        a_temp_cookie = a_all_cookies[i].split('=');
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

        if (cookie_name == check_name) {
            b_cookie_found = true;
            if (a_temp_cookie.length > 1) {
                cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
            }
            return cookie_value;
            break;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }
    if (!b_cookie_found) {
        return null;
    }
}



function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function trim(text) {
    return text.replace(/^\s*/, "").replace(/\s*$/, "");
}


var browser = navigator.appName;

function getURLParam(strParamName) {
    var strReturn = "";
    var strHref = window.location.href;

    if (strHref.indexOf("?") > -1) {
        var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
        var aQueryString = strQueryString.split("&");

        for (var iParam = 0; iParam < aQueryString.length; iParam++) {
            if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1) {
                var aParam = aQueryString[iParam].split("=");
                strReturn = aParam[1];
                break;
            }
        }
    }

    return unescape(strReturn);
}

function checkPlatform() {
    var OS = navigator.platform.toLowerCase();
    var domain = document.domain.toLowerCase();
    var nAgt = navigator.userAgent;
    var offSet = nAgt.indexOf("MSIE");
    var bVersion = parseInt(nAgt.substring(offSet + 5));
    if (bVersion < 7 || OS.indexOf("unix") != -1 || OS.indexOf("linux") != -1) {
        if (domain.indexOf("amsterdamsstadsblad") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_amsterdamsstadsblad.png" border="0"></a>'));
        else if (domain.indexOf("diemercourant") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_diemercourant.png" border="0"></a>'));
        else if (domain.indexOf("uithoornsecourant") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_uithoornsecourant.png" border="0"></a>'));
        else if (domain.indexOf("amstelveensweekblad") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_amstelveensweekblad.png" border="0"></a>'));
        else if (domain.indexOf("aalsmeerdercourant") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_aalsmeerdercourant.png" border="0"></a>'));
        else if (domain.indexOf("derondevener") > 0)
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_derondevener.png" border="0"></a>'));
        else
            $('#flashobject').append($('<a href="http://www.dichtbij.nl/Default.aspx?IgnoreCookies=1"><img src="/content/acties/webregio_nl/logo/logo_webregio.png" border="0"></a>'));
    }
}

function callUrl(url) {
    var request = null;

    try {
        request = new XMLHttpRequest();
    }
    catch (error) {
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (error) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (error) {
                request = null;
            }
        }
    }

    request.open('GET', url, true);
    request.send(null);
}

function printWindow(content) {
    var mywin = window.open("", "", "width=750,height=500");
    mywin.document.write("<html><head>");
    mywin.document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://static-webregio.nl/includes/css/print.css\" />");
    mywin.document.write("</head><body>");
    mywin.document.write($(content).innerHTML);
    mywin.document.write("<script type=\"text/javascript\">setTimeout(\"window.print(); window.close();\", 500);</script></body></html>");
    mywin.document.close();
}




// JScript File

function HasMobileCookie() {
    return (Get_Cookie('ShowMobileQuestion') != null);
}

function SetMobileQuestionCookie() {
    Set_Cookie('ShowMobileQuestion', 1, '1825', '/', '', '');
}

function ShowMobileQuestion(redirecturl) {
    var question = false;
    var askagain = false;

    if (!HasMobileCookie()) {
        question = confirm("Wilt u onze mobiele site bezoeken?");
        askagain = confirm("Wilt u dat we deze vraag nogmaals stellen?");
    }

    if (askagain && question) {
        window.location = redirecturl;
    }
    else {
        if (!askagain && question) {
            SetMobileQuestionCookie();
        }

        if (question) {
            window.location = redirecturl;
        }
    }
}

function RemoveSiteBorderBackground() {
    $('#layoutcontainer').css({ 'background-image': 'none' });
    $('#sitecontainer').css({ 'background-color': 'transparent' });
}

function AddSiteBackgroundImage(imageurl, backgroundcolor) {
    $('#sitecontainer').css({ 'background-image': 'url(' + imageurl + ')', 'background-repeat': 'repeat-y', 'background-position': 'center top', 'background-color': backgroundcolor });
}

function AddSiteBackgroundColor(color) {
    var site = $('sitecontainer');
    var sky = $('skybannercontainer');

    if (site != null) {
        //site.setStyle('background-color', color)
    }

    if (sky != null) {
        // sky.setStyle('background-color',color);
    }
}

function SetFlashbackground() {
    $('#layoutcontainer').css({ 'background-color': 'transparent' });
    $('#leaderboardcontainer').css({ 'background-color': 'transparent' });
    $('#floorboardcontainer').css({ 'background-color': 'transparent' });
    $('#skybannercontainer').css({ 'background-color': 'transparent' });
    $('#ctl00_RightLargeBannerContent').css({ 'background-color': '#FFFFFF' });
}


function SubmitButtonSetHidden(buttonname, hiddenname, hidvalue) {
    var btn = document.getElementById(buttonname);
    var hid = document.getElementById(hiddenname);

    if (hid != null && btn != null) {
        hid.value = hidvalue;

        btn.click();
    }
}

function SubmitAspButton(buttonname) {
    var btn = document.getElementById(buttonname);

    if (btn != null) {
        btn.click();
    }
}


function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


function getRadioValue(idOrName) {
    var value = null;
    var element = document.getElementById(idOrName);
    var radioGroupName = null;

    // if null, then the id must be the radio group name
    if (element == null) {
        radioGroupName = idOrName;
    } else {
        radioGroupName = element.name;
    }
    if (radioGroupName == null) {
        return null;
    }
    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        var input = radios[i];
        if (input.type == 'radio' && input.name == radioGroupName && input.checked) {
            value = input.value;
            break;
        }
    }
    return value;
}


function fbLogin(callbackurl, regionid) {
    if (typeof FB != 'undefined') {
        FB.login(function (response) {
            if (response.authResponse) {
                PageTrackClickOut('inlogfacebook');
                FB.api('/me', function (response) {
                    PageTrack('inlogfacebookverstuurd=ja');
                    RegisterFacebookLogin(response.name, response.email, response.id, regionid);
                    UpdateLoginPanel();
                });
            } else {
                // user is not logged in
            }
        }, { scope: 'user_about_me,user_hometown,user_birthday,email' });
    }
}

function fbCheckLogin(regionid) {
    if (typeof FB != 'undefined') {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                // logged in and connected user, someone you know   
                FB.api('/me', function (response) {
                    PageTrack('inlogfacebookverstuurd=ja');
                    RegisterFacebookLogin(response.name, response.email, response.id, regionid);
                    UpdateLoginPanel();
                });
                return true;

            } else {
                return false;
            }
        });
    }
}

//function twitterLogin(callbackurl, buttonid, regionid) {

//    if (typeof twttr != 'undefined' && typeof twttr != null && twttr.anywhere != 'undefined' && twttr.anywhere != null) {
//        twttr.anywhere.config({ callbackURL: callbackurl });
//        twttr.anywhere(function (T) {
//            document.getElementById(buttonid).onclick = function () {
//                PageTrackClickOut('inlogtwitter');
//                T.signIn();
//            };
//            T.bind("authComplete", function (e, user) {
//                var screenName, userId;
//                screenName = user.data('screen_name');
//                userId = user.data('id');
//                email = user.data('email');
//                PageTrack('inlogtwitterverstuurd=ja');
//                RegisterTwitterLogin(screenName, email, userId, regionid);
//                UpdateLoginPanel();
//            });
//        });
//    }
//}

//function twitterCheckLogin(regionid) {
//    if (typeof twttr != 'undefined' && typeof twttr != null && twttr.anywhere != 'undefined' && twttr.anywhere != null) {
//        twttr.anywhere(function (T) {
//            var currentUser,
//			userId,
//			screenName,
//			profileImage,
//			profileImageTag;
//            if (T.isConnected()) {
//                currentUser = T.currentUser;
//                screenName = currentUser.data('screen_name');
//                userId = currentUser.data('id');
//                email = user.data('email');
//                PageTrack('inlogtwitterverstuurd=ja');
//                RegisterTwitterLogin(screenName, userId, regionid);
//                UpdateLoginPanel();
//            } else {
//                return false;
//            }
//        });
//    }
//}

function hyvesLogin(responsediv, callbackurl, appid, regionid, targetdiv) {
    try {
        Hyves.connect.init({
            // This is the consumer key bound to this application. The consumer key is used for API integration
            consumerKey: appid, //"ODYzOF9FxV0z2eLMB1szKRpL94q7",
            // This file is used for cross domain communication within older browsers
            rpcRelay: "http://www.dichtbij.nl/hcrpc_relay.html"
        });

        // Define the login option for the connect
        var loginOptions = {
            // Basic profile information: username, profile picture, profile page
            profileInformation: true,
            // Contact information: Home adress, email adress, phone number 
            contactInformation: true,
            // Define if you need API access or just want to use the login functionality
            apiAccess: false,
            // Define which API methods you need. This is ignored if apiAccess is set to false
            apiScope: "methods=users.get"
        };

        // Define the options for the button which will be displayed when autoAttempt fails or is disabled 
        var buttonOptions = {
            // Define your own or leave empty if you want to use the default image
            image: "http://static-webregio.nl/includes/img/hyvesicon_15x15.png",
            // Set to true if you want to automatically attempt to login. Set to false to show the connect button instead
            autoAttempt: false
        };

        var spanNode = document.getElementById(responsediv);

        // Execute the HyvesConnect Login script
        Hyves.connect.login.button(loginOptions, buttonOptions, function (response) {
            PageTrackClickOut('inloghyves');
            var nickname = response.getField(Hyves.constants.response.profileField.nickname);
            var userid = response.getField(Hyves.constants.response.field.userid);
            var profileUrl = response.getField(Hyves.constants.response.profileField.profileurl);
            var email = response.getField(Hyves.constants.response.field.email);

            PageTrack('inloghyvesverstuurd=ja');
            RegisterHyvesLogin(nickname, email, userid, regionid);
            document.getElementById(targetdiv).innerHTML = "<img src='http://static-webregio.nl/includes/img/hyvesicon_blue_15x15.png' alt='' title='Je bent ingelogd als: " + nickname + " (" + profileUrl + ")' />";
        }, spanNode);


        //return false;
    }
    catch (err) { return false; }
}



function swapimage(imgObj) {
    var objImage = document.getElementById('regiomap');
    if (objImage) objImage.src = eval(imgObj + ".src");

    $("#maplist a").css({ color: '#CCCCCC' });
    $("#region_" + imgObj + " a").css({ 'font-weight': 'bold', 'color': '#000000' });
}





/*----------------------------------------------------------------------------------------------*/
//                                      pagemethods stuff 
//                        scripts ued for User profile page features
/*----------------------------------------------------------------------------------------------*/

function IsValidAccount(membershipid) {
    var successmsg = "";
    var failmsg = "Je account heeft niet genoeg rechten.";
    var mresult = false;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.IsValidAccount(membershipid, function (response) { mresult = response; });

    return mresult;
}

function PostComment(name, city, email, text, keepmeposted, objectid, userid, isarticle, isphoto, ispoll, isstand, createcity, createregion) {
    var successmsg = 'Bedankt voor je reactie.';
    var failmsg = 'Helaas, de reactie kon niet worden opgeslagen.';

    // call server side method
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.PostComment(name, city, email, text, keepmeposted, objectid, userid, isarticle, isphoto, ispoll, isstand, createcity, createregion, CallSuccess, CallFailed, successmsg, failmsg)

}
// set the destination textbox value with the ContactName
function CallSuccess(res, successmsg, failmsg) {
    // alert(successmsg);
    return successmsg;
}
// alert message on some failure
function CallFailed(res, successmsg, failmsg) {
    //alert(res.get_message());
    return failmsg;
    //alert(failmsg);
}

//function RegisterTwitterLogin(username, email, userid, regionid) {
//    var successmsg = '';
//    var failmsg = '';
//    var loginproviderid = 2;
//    var loginIsSuccess = false;

//    PageMethods.set_path("/Page/Sheet.aspx");
//    PageMethods.RegisterExternalLogin(username, email, userid, loginproviderid, regionid
//        , function (res) {
//            if (res.status == "success" && res.userid > 0) {
//                if ($("#hidtempuserid") != null) {
//                    $("#hidtempuserid").val(res.userid);
//                }

//                if (res.createdNew == true) {                    
//                    PageTrack('registrationwithtwitter=ja');
//                }

//                $("#pusrname").text(username);

//                loginIsSuccess = true;
//            }
//            else if (res.status == "error") {
//                Msg("Het aanmelden is niet gelukt.");
//            }
//        }
//        , function (err) { Msg(err._message); });

//    return loginIsSuccess;
//}

function RegisterFacebookLogin(username, email, userid, regionid) {
    var successmsg = '';
    var failmsg = '';
    var loginproviderid = 3;
    var loginIsSuccess = false;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.RegisterExternalLogin(username, email, userid, loginproviderid, regionid
        , function (res) {
            if (res.status == "success" && res.userid > 0) {
                if ($("#hidtempuserid") != null) {
                    $("#hidtempuserid").val(res.userid);
                }

                if (res.createdNew == true) {
                    PageTrack('registrationwithfacebook=ja');
                }

                $("#pusrname").text(username);

                loginIsSuccess = true;
            }
            else if (res.status == "error") {
                Msg("Het aanmelden is niet gelukt.");
            }
        }
        , function (err) { Msg(err._message); });    

    return loginIsSuccess;
}

function RegisterHyvesLogin(username, email, userid, regionid) {
    var successmsg = '';
    var failmsg = '';
    var loginproviderid = 1;
    var loginIsSuccess = false;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.RegisterExternalLogin(username, email, userid, loginproviderid, regionid
        , function (res) {
            if (res.status == "success" && res.userid > 0) {
                if ($("#hidtempuserid") != null) {
                    $("#hidtempuserid").val(res.userid);
                }

                if (res.createdNew == true) {
                    PageTrack('registrationwithhyves=ja');
                }

                $("#pusrname").text(username);

                loginIsSuccess = true;
            }
            else if (res.status == "error") {
                Msg("Het aanmelden is niet gelukt.");
            }
        }
        , function (err) { Msg(err._message); });

    return loginIsSuccess;
}


/*----------------------------------------------------------------------------------------------*/
//                                      userprofile stuff 
//                        scripts ued for User profile page features
/*----------------------------------------------------------------------------------------------*/

function UserProfInit(UId, RegionId) {
    PopUp('usrinf', { head: 'profiel', w: 495 });
    PopUp('usrint', { head: 'interesses', w: 430 });
    PopUp('usrbio', { head: 'biografie', w: 430 });
    PopUp('usracc', { head: 'gegevens', w: 495 });
    PopUp('usrmail', { head: 'e-mail', w: 460 });
    PopUp('usrresendmail', { head: 'e-mail', w: 460 });
    PopUp('delevent', { head: 'agendapunt verwijderen', w: 460 });
    PopUp('delarticle', { head: 'artikel offline halen', w: 460 });
    PopUp('pubarticle', { head: 'artikel online zetten', w: 460 });
    PopUp('delphoto', { head: 'foto offline halen', w: 460 });
    PopUp('pubphoto', { head: 'foto online zetten', w: 460 });
    PopUp('editphoto', { head: 'foto aanpassen', w: 460 });
    PopUp('noeditallowed', { head: 'aanpassen is geblokkeerd', w: 460 });
    PopUp('removeprofile', { head: 'account verwijderen', w: 460 });
    PopUp('privacy', { head: 'privacy instellingen', w: 335 });
    PopUp('changedusername', { head: 'gebruikersnaam', w: 335 });
    PopUp('usravatar', { head: 'Pas profielfoto aan', w: 550, src: "/Page/Forms.aspx?uid=" + UId + "&pid=usravatar&form=UsrAvatar&RegionId=" + RegionId });

    $('#set_mail').click(function () { PopUp_Show('usrmail', true); });

}


function SaveUserInf(btnid) {
    var btn = document.getElementById(btnid);

    btn.click();
}

function SaveUserInt() {
}

function SaveUserBio() {
}

function ChangeUserName() {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.ChangeUserName($('#usrId').val(), $('#txtUserName').val(), function (res) { Msg(res.msg); if (res.err == "username veranderd") $('.usr_name').html(res.name); }, function (err) { Msg(err._message); });
    //PopUp_Show('usracc', false);
    //$('#txtUserName').val('');
}

function CheckUserName(name) {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.CheckUserName(name, function (res) { $('#newusername').html(res.msg); if (res.err == "Gebruikersnaam beschikbaar.") $('#newusername').html(res.name); }, function (err) { $('#newusername').html(err._message); });
}

function ChangeUserMail() {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.ChangeUserMail($('#usrId').val(), $('#memId').val(), $('#txtUserMail').val(), $('#regNm').val(), function (res) { Msg(res.msg); if (!res.err) { $('#usr_mail').html(res.mail); } }, function (err) { Msg(err._message); });
    PageTrack('emailwijzigenverstuurd=ja');
    PopUp_Show('usrmail', false);
}

function DeleteUserMail() {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.DeleteUserMail($('#usrId').val(), $('#memId').val(), $('#regNm').val(), function (res) { Msg(res.msg); if (!res.err) { $('#usr_mail').html(res.mail); } }, function (err) { Msg(err._message); });
    PopUp_Show('usrmail', false);
}

function ResendUserMail(email, regionname) {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.ReSendConfirmEmail(email, regionname, function (res) { Msg('De e-mail is gestuurd naar ' + email); }, function (err) { Msg(err._message); });
    PopUp_Show('usrresendmail', false);
}

function GetPhotoDetails(photoid, titleinput, descinput) {
    //PageMethods.set_path("/Page/Sheet.aspx");
    //PageMethods.
}

/*----------------------------------------------------------------------------------------------*/
//                                    Aanmelden stuff 
//                        scripts ued for Aanmelden page features
/*----------------------------------------------------------------------------------------------*/

function AanmInit(mail, active) {
    PopUp("cnl_dlg", { head: 'Afmelden nieuwsbrief', w: 520 });
    PopUp("reg_dlg", { head: 'Regio', w: 450, onShow: ShowRegions });

    if (mail != '') {
        $(".anm_chck input:checkbox").click(function () { $(this).parent().attr("class", $(this).is(':checked') ? "anm_green" : "anm_pink"); });
        $(".anm_chck input:checkbox:not(:checked)").parent().attr("class", "anm_pink");
        $(".anm_chck input:checkbox:checked").parent().attr("class", "anm_green");

        $('.amt_male').html(mail);
        $('#anm_act').css({ display: active ? '' : 'none' });
        $('#anm_dac').css({ display: active ? 'none' : '' });
    }

    $('#lForm').css({ display: mail == '' ? '' : 'none' });
    $('#fForm').css({ display: mail == '' ? 'none' : '' });

    ShowRegions();
}

function ShowRegions() {
    var res = '';
    $('#reg_dlg input:checkbox:checked').each(function (index) { res += $(this).next().text() + "<br />"; });
    $('#ActiveRegion').html(res.substring(0, res.length - 6));
}


/*----------------------------------------------------------------------------------------------*/
//                                    LostPass stuff 
/*----------------------------------------------------------------------------------------------*/
function ShowLoginPanel(RegionName, UId, RegionId) {

    if ($("#loginwidget") != null) $("#loginwidget").hide();
    if ($("#loggedinwidget") != null) $("#loggedinwidget").show();

    var link = "/" + RegionName + "/account/profiel/profiel.aspx";

    $("#usrprofilelink").attr('href', link);

    if ($("#commentloginboxcontainer") != null) {
        $("#commentloginboxcontainer").hide();

        if ($("#popup_cntt_reageer") != null) {
            $("#popup_cntt_reageer").height(320);
        }
    }

    LoggedInDisplay(UId, RegionId);
}

function LoginInit(UserIsLoggedIn, CallbackUrl, HyvesAppId, TwitterAppId, FacebookAppId, RegionId, UId, ButtonId, LoggedOut, RegionName, regionid) {

    UpdateLoginPanel = function () {

        if (logindiv != null) logindiv.style.display = 'none';
        if (loggedindiv != null) loggedindiv.style.display = 'block';

        var link = "/" + RegionName + "/account/profiel/profiel.aspx";

        $("#usrprofilelink").attr('href', link);

        if ($("#commentloginboxcontainer") != null) {
            $("#commentloginboxcontainer").hide();

            if ($("#popup_cntt_reageer") != null) {
                $("#popup_cntt_reageer").height(320);
            }
        }

        //$.fancybox.close();

        $("#btnPostComment").click(function () {
            return false;
        });

        $('#btnPostComment').off('click');

        $("#btnPostComment").click(function () {
            DoLoggedInPost();
        });

        if ($("#btnConfirmCommentDetails").is(":visible")) {
            $("#btnPostComment").click();
        }     

        LoggedInDisplay(UId, RegionId);
    }


    if (!UserIsLoggedIn) {
        var loggedindiv = document.getElementById('loggedinwidget');
        var logindiv = document.getElementById('loginwidget');
        var inpname = document.getElementById('txtloginnname');
        var inppwd = document.getElementById('txtloginpassword');

        $('#ctl00_WidgetLogin_txtloginnname').focus(function () {
            if (this.value == 'Gebruikersnaam') {
                this.value = '';
            }
        });
        $('#ctl00_WidgetLogin_txtloginnname').blur(function () {
            if (this.value == '') {
                this.value = 'Gebruikersnaam';
            }
        });

        var result = false;

        if (!LoggedOut) {
            if (!result) {
                //twitterCheckLogin(regionid);
                fbCheckLogin(regionid);
            }
        }

        if (logindiv != null) logindiv.style.display = result ? 'none' : 'block';
        if (loggedindiv != null) loggedindiv.style.display = result ? 'block' : 'none';

        PopUp('restorepass', { head: 'Wachtwoord vergeten', w: 430 });
    }
    else {
        LoggedInDisplay(UId, RegionId);
    }

}

function LoggedInDisplay(UId, RegionId) {
    //PopUp('usrart', { head: 'Voeg een artikel toe', w: 830, src: "/Page/Forms.aspx?uid=" + UId + "&pid=usrart&form=UsrArtikelen&RegionId=" + RegionId });
    //PopUp('usrfot', { head: 'Voeg een foto toe', w: 495, src: "/Page/Forms.aspx?uid=" + UId + "&pid=usrfot&form=UsrFoto&RegionId=" + RegionId });

    PopUp('newpwd', { head: 'verander wachtwoord', w: 480, onShow: ClearNewPwd });

    $('input:password').pwd_strength();
}

function ShowChangePwd() {
    $("#newpwd").show();
    PopUp_Show('newpwd', true);
}

function LostPass() {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.GetLostPassword($('#lostPassMail').val(), function (res) { Msg(res); }, function (err) { Msg(err._message); });
    PopUp_Show('restorepass', false);
    $('#lostPassMail').val('');
}

function NewPwd() {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.NewPassword($('#usrId').val(), $('#pwdOld').val(), $('#pwdNew').val(), $('#pwdConfirm').val(), function (res) { Msg(res); }, function (err) { /*Msg(err._message);*/ });
    PopUp_Show('newpwd', false);
}

function ClearNewPwd() {
    $('#pwdOld').pwd_clear();
    $('#pwdNew').pwd_clear();
    $('#pwdConfirm').pwd_clear();
}

function submitenter(myfield, e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        checkSearchInput();
        return false;
    }
    else
        return true;
}

function checkSearchInput() {
    var box = document.getElementById("searchbox");
    var searchvalue;
    //var regionname = "<%= RegionName %>";

    if (box != null) {
        searchvalue = box.value.trim();

        if (searchvalue == '') {
            alert('Vul a.u.b. een zoekterm in');
            box.focus();
            return false;
        }
        else {
            searchvalue = box.value.replace(/ /g, '+');
            var newurl = "/" + regionname + "/zoeken/zoeken.aspx?zoekwoord=" + searchvalue + "&zoekmachine=webregionl";
            location.href = newurl;
        }
    }

}


function closeInactivePopup(cityid) {
    var successmsg = '';
    var failmsg = '';
    var loginproviderid = 1;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.CloseInactiveCityWarning(cityid, CallSuccess, CallFailed, successmsg, failmsg);
}


function closeConfirmEmailPopup() {
    var successmsg = '';
    var failmsg = '';
    var loginproviderid = 1;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.CloseEmailConfirmWarning(CallSuccess, CallFailed, successmsg, failmsg)
}


function confirmEmailInit() {
    PopUp('newconfirm', { head: 'stuur bevestigings e-mail', w: 430 });
}

function SendNewConfirmMail() {
    var successmsg = '';
    var failmsg = '';
    var loginproviderid = 1;

    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.SendConfirmEmail(CallSuccess, CallFailed, successmsg, failmsg)
}

function RetryLostPassword() {
    PopUp_Show('msg_pop', false);
    $("#lostPassMail").val('');
    PopUp_Show('restorepass', true);
}


function ChangeCityOrRegion(cityid, regionid) {
    PageMethods.set_path("/Page/Sheet.aspx");
    PageMethods.RegionDropDownListChange(cityid, regionid, function (res) { Msg(res); }, function (err) { /*Msg(err._message);*/ });
}

function PageTrack(postamble) {
    var finalUrl = window.location.pathname;
    if (finalUrl.indexOf("?") > -1) {
        finalUrl = finalUrl + "&" + postamble;
    }
    else {
        finalUrl = finalUrl + "?" + postamble;
    }

    finalUrl = finalUrl.trim().replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "");

    if (typeof pageTracker != 'undefined') {
        setTimeout(function () { pageTracker._trackPageview(finalUrl); }, 500);
    }
    else {
        //alert(finalUrl);
    }
}

function PageTrackClickOut(trackString) {
    if (typeof pageTracker != 'undefined') {
        setTimeout(function () { pageTracker._trackPageview('/' + regionname + '/clickouts/' + trackString.trim().replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "")); }, 500);
    }
}

function isiPhone() {
    return (
    //Detect iPhone
		(navigator.userAgent.indexOf("iPhone") != -1) ||
    //Detect iPod
		(navigator.userAgent.indexOf("iPod") != -1)
	);
}

function isiPad() {
    return (navigator.userAgent.indexOf("iPad") != -1);
}
window.onscroll = scroll;

function scroll() {
    var offset = $("#backtotopFooter").offset();
    if (null != offset) {
        var pos = offset.top - $(window).scrollTop();
        if (pos < 0) {
            $(".backtotop").css({ "position": "fixed" });
            $(".backtotop").css({ "left": $(".backtotop").offset().left });
            $(".backtotop").css({ "top": "10px" });
            $(".backtotop").css({ "text-align": "center" });
            $(".backtotop").css({ "padding-bottom": "3px" });
            $(".backtotop").css({ "text-transform": "lowercase" });
            $(".backtotop").css({ "background-color": "#000" });
            $(".backtotop").css({ "margin-top": "5px" });
            $(".backtotop").css({ "padding-left": "3px" });
            $(".backtotop").css({ "width": "300px" });
            $(".backtotop").css({ "padding-right": "3px" });
            $(".backtotop").css({ "font-family": "Arial Black !important" });
            $(".backtotop").css({ "height": "20px" });
            $(".backtotop").css({ "color": "#fff" });
            $(".backtotop").css({ "font-size": "12px" });
            $(".backtotop").css({ "cursor": "pointer" });
            $(".backtotop").css({ "padding-top": "3px" });
        }
        else {
            $(".backtotop").css({ "position": "inherit" });
        }
    }
    if (document.body.offsetHeight < 621) {
        var skypos = 621 - $(window).scrollTop();
        if (skypos > document.body.offsetHeight) { $("#skybannerposition").css("top", (0 - $(window).scrollTop()) + "px"); }
        else { $("#skybannerposition").css("top", (document.body.offsetHeight - 617) + "px"); }
    }
}

function CheckBanners() {
    $(".bannercontainer").each(function () {
        var y = $(this).html().trim();
        if (y.length == 0) {
            if ($(this).parent() != null && $(this).parent().parent() != null && $(this).parent().parent().parent() != null) {
                var tohide = $(this).parent().parent().parent();
                if ($(tohide).attr("class") == "widget" || $(tohide).attr("id") == "leaderboardcontainer" || $(tohide).attr("id") == "floorboardcontainer") {
                    $(tohide).hide();
                }
            }
        }
    });

    $(".widgetbanner").each(function () {
        var child = $(this).children("div:first");
        var y = child.html().trim().length;

        if (y == 0) {
            if ($(this).parent() != null && $(this).parent().parent() != null) {
                var tohide = $(this).parent().parent();
                var todhidesmall = $(this).parent();

                if ($(todhidesmall).attr("class") == "widgetsmall") {
                    $(todhidesmall).hide();
                }

                if ($(tohide).attr("class") == "widget" || $(tohide).attr("id") == "leaderboardcontainer" || $(tohide).attr("id") == "floorboardcontainer") {
                    $(tohide).hide();
                }
            }
        }
    });
}

function DisplayBanners(hide) {
    $("iframe").each(function () {
        if (hide)
            $(this).hide();
        else
            $(this).show();
    });
}

function DisplayBannersLightbox(hide) {
    $("iframe").each(function () {
        var url = $(this).attr("src");
        if (url != null) {
            if (hide)
                $(this).hide();
            else
                $(this).show();
        }
    });
}

function show(display) {
    if (display) {
        $("#zoom").css("display", "block");
    }
    else {
        $("#zoom").css("display", "none");
    }
}


var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
		{
		    string: navigator.userAgent,
		    subString: "Chrome",
		    identity: "Chrome"
		},
		{ string: navigator.userAgent,
		    subString: "OmniWeb",
		    versionSearch: "OmniWeb/",
		    identity: "OmniWeb"
		},
		{
		    string: navigator.vendor,
		    subString: "Apple",
		    identity: "Safari",
		    versionSearch: "Version"
		},
		{
		    prop: window.opera,
		    identity: "Opera",
		    versionSearch: "Version"
		},
		{
		    string: navigator.vendor,
		    subString: "iCab",
		    identity: "iCab"
		},
		{
		    string: navigator.vendor,
		    subString: "KDE",
		    identity: "Konqueror"
		},
		{
		    string: navigator.userAgent,
		    subString: "Firefox",
		    identity: "Firefox"
		},
		{
		    string: navigator.vendor,
		    subString: "Camino",
		    identity: "Camino"
		},
		{		// for newer Netscapes (6+)
		    string: navigator.userAgent,
		    subString: "Netscape",
		    identity: "Netscape"
		},
		{
		    string: navigator.userAgent,
		    subString: "MSIE",
		    identity: "Explorer",
		    versionSearch: "MSIE"
		},
		{
		    string: navigator.userAgent,
		    subString: "Gecko",
		    identity: "Mozilla",
		    versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
		    string: navigator.userAgent,
		    subString: "Mozilla",
		    identity: "Netscape",
		    versionSearch: "Mozilla"
		}
	],
    dataOS: [
		{
		    string: navigator.platform,
		    subString: "Win",
		    identity: "Windows"
		},
		{
		    string: navigator.platform,
		    subString: "Mac",
		    identity: "Mac"
		},
		{
		    string: navigator.userAgent,
		    subString: "iPhone",
		    identity: "iPhone/iPod"
		},
		{
		    string: navigator.platform,
		    subString: "Linux",
		    identity: "Linux"
		}
	]

};

function submitnewsletterenter(myfield, e, region) {    
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        GoToNewsLetter(myfield.id, region);
        return false;
    }
    else
        return true;
}

function GoToNewsLetter(ele, region) {
    var email = document.getElementById(ele).value.toLowerCase();

    if (trim(email).length != 0 && !validateEmail(email)) {
        alert("Geen geldig e-mailadres.");
    } else {
        email = email.trim().replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "");
        //window.location.href = "/" + region + "/nieuwsbrief/aanmelden.aspx?email=" + email;

        post('/' + region + '/nieuwsbrief/aanmelden.aspx', { 'email': email });
    }
}

function post(url, params) {
    var form = '<form id="subscribeForm" action="' + url + '" method="post">';
    for (var key in params) {
        form += '<input type="hidden" ';
        form += 'name="' + key + '" ';
        form += 'value="' + params[key] + '">';
    }
    form += '</form>';
    $("#tempcontainer").append(form);
    var p = $("#tempcontainer").html();
    //alert(p);
    $("#subscribeForm").submit();
    $("#tempcontainer").empty();
}


function LoadFooter(twitter, facebook) {
    GetFooterTwitterData(twitter);
    GetFooterFacebookData(facebook);    
    StartSlideNewsPapers();
}

function StartSlideNewsPapers() {
    var currentPosition = 0;
    var slideWidth = 280;
    var slides = $('.slide');
    var numberOfSlides = slides.length;

    SlideNewspapers(slideWidth, numberOfSlides, slides);

    setInterval(function () {
        if (currentPosition == numberOfSlides) {
            currentPosition = 0;
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        } else {
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
            currentPosition = currentPosition + 1;
        }
    }, 5000);
}

function StopSlideNewsPapers() {
    $('#slideInner').stop();
}

function GetFooterTwitterData(twitaccount) {

    if (twitaccount != '' && twitaccount.length > 0) {
        $(function () {
            $.ajax({
                url: 'http://api.twitter.com/1/users/show.json',
                data: { screen_name: twitaccount },
                dataType: 'jsonp',
                success: function (data) {
                    $('#twitfollowers').html(data.followers_count);
                }
            });
        });
    }
    else {
        $("#regiontwitter").hide();
    }
}

function GetFooterFacebookData(fbaccount) {

    if (fbaccount.length > 0 && fbaccount != '') {

        var url = "https://graph.facebook.com/" + fbaccount + "?callback=?";

        $.getJSON(url, function (json) {
            $('#facebooklikes').html(json.likes);
        });
    } else {
        $("#regionfacebook").hide();
    }
}

function ShowHyves(hyvesaccount) {
    if (hyvesaccount == '' || hyvesaccount.length == 0) {
        $("#regionhyves").hide();
    }
}

function SlideNewspapers(slideWidth, numberOfSlides, slides) {

    // Remove scrollbar in JS
    $('#slidesContainer').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slides
		  .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
		  .css({
		      'float': 'left',
		      'width': slideWidth
		  });

    // Set #slideInner width equal to total width of all slides
    $('#slideInner').css('width', slideWidth * numberOfSlides);
}

function HideUserFeeds() {
    $("#uprecent").hide();
    $("#uparticles").hide();
    $("#upphotos").hide();
    $("#upagenda").hide();
    $("#upcomments").hide();

    $("#showuserrecent").removeClass('selected');
    $("#showuserphotos").removeClass('selected');
    $("#showuseragenda").removeClass('selected');
    $("#showusercomments").removeClass('selected');
    $("#showuserarticles").removeClass('selected');
}

function FormatUserFeedArticle(article) {
    var date = new Date(parseInt(article.Date.substr(6)));
    var formatteddate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var lead;
    var img = '';

    if (article.CityName != '' && article.CityName.length > 0) {
        lead = article.CityName + ' - ' + article.LeadText;
    } else {
        lead = article.LeadText;
    }

    if (article.ImageUrl != '' && article.ImageUrl.length > 0) {
        img = "<a href=\"" + article.LinkUrl + "\" title=\"\"><img src=\"" + article.ImageUrl + "\" class=\"subarticleimage\" alt=\"" + article.Title + "\" title=\"" + article.Title + "\" /></a>";
    }

    $("#uparticles").append("<div style='padding-top: 10px;' class='widgetcontent'>" +
						"<div class=\"lead_text\" style=\"clear:both;\">" +
						img +
						"<p class=\"ttl_l\" style=\"margin-top: 5px;\">" +
						"<a href=\"" + article.LinkUrl + "\" title=\"\">" + article.Title + "</a>" +
						"</p>" +
						"<div class=\"articleinfo\" style=\"height: 25px;\">" +
						"<div style=\"float: left;\">" + article.ArticleTypeName + "&nbsp; | &nbsp;</div>" +
						"<div style=\"float: left;\"><abbr class='timeago' title='" + formatteddate + "'>" + formatteddate + "</abbr> geschreven</div>" +
						"<div style=\"float: left;\">&nbsp; | &nbsp; </div>" +
						"<div class=\"reactionbubble\" style=\"float: left;\">" + article.CommentCount + "</div>" +
						"</div>" +
						"<div style='padding-top:2px;'>" + lead + "</div>" +
						"</div>" +
						"</div>");
}


function FormatUserFeedPhoto(photo) {
    var date = new Date(parseInt(photo.CreatedAt.substr(6)));
    var formatteddate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    $("#upphotos").append("<div style='padding-top: 10px;' class='widgetcontent'>" +
						"<div class=\"lead_text\" style=\"clear:both;\">" +
						"<a href=\"" + photo.LinkUrl + "\" title=\"\"><img src=\"" + photo.FileName + "\" class=\"subarticleimage\" alt=\"" + photo.Title + "\" title=\"" + photo.Title + "\" /></a>" +
						"<p class=\"ttl_l\" style=\"margin-top: 5px;\">" +
						"<a href=\"" + photo.LinkUrl + "\" title=\"\">" + photo.Title + "</a>" +
						"</p>" +
						"<div class=\"articleinfo\" style=\"height: 25px;\">" +
						"<div style=\"float: left;\">" + photo.PhotoShootTitle + "&nbsp; | &nbsp;</div>" +
						"<div style=\"float: left;\"><abbr class='timeago' title='" + formatteddate + "'>" + formatteddate + "</abbr> geplaatst</div>" +
						"</div>" +
						"<div>" + photo.Description + "</div>" +
						"</div>" +
						"</div>");
}

function FormatUserFeedComment(comment, username) {
    var date = new Date(parseInt(comment.Date.substr(6)));
    var formatteddate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var str = 'heeft gereageerd op het artikel ' + "<a href='" + comment.LinkUrl + "'>" + comment.Title + "</a>";


    $("#upcomments").append("<div style='padding-top: 10px; padding-bottom: 10px;border-bottom: 1px dotted #AAAAAA; width: 100%; position: relative; float: left;' >" +
						"<div class='userfeedrecentimg' style='float:left; padding-right: 10px; vertical-align: top;'>" +
						"<img src='http://static-webregio.nl/includes/img/dichtbij16x16px-favicon.png' alt='dichtbij.nl' title='dichtbij.nl' width='32' height='32' />" +
						"</div>" +
						"<div class='userfeedrecentcontent' style='float: left;'>" +
						"<b>" + username + "</b> " + str + "<br />" + "<abbr class='timeago' title='" + formatteddate + "'>" + formatteddate + "</abbr>" +
						"<div class='userfeedcommenttext'>" + comment.CommentText + "</div>" +
						"</div>" +
						"</div>");
}

function FormatUserFeedEvent(event) {
    var date = new Date(parseInt(event.Date.substr(6)));
    var formatteddate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var img = '';

    if (event.FileName != '' && event.FileName.length > 0) {
        img = "<img src=\"" + event.FileName + "\" class=\"subarticleimage\" alt=\"" + event.Title + "\" title=\"" + event.Title + "\" />";
    }

    $("#upagenda").append("<div style='padding-top: 10px;' class='widgetcontent'>" +
						"<div class=\"lead_text\" style=\"clear:both;\">" +
						img +
						"<p class=\"ttl_l\" style=\"margin-top: 5px;\">" +
						"<a href=\"" + event.LinkUrl + "\" title=\"\">" + event.Title + "</a>" +
						"</p>" +
						"<div class=\"articleinfo\" style=\"height: 25px;\">" +
						"<div style=\"float: left;\"><abbr class='timeago' title='" + formatteddate + "'>" + formatteddate + "</abbr> toegevoegd</div>" +
						"</div>" +
						"<div>" + event.LeadText + "</div>" +
						"</div>" +
						"</div>");
}


function FormatUserFeedRecent(recent, username, avatarurl) {
    var date = new Date(parseInt(recent.Date.substr(6)));
    var formatteddate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var img = '';
    var avimg = '';
    var str = '';
    var txt = '';

    if (recent.ImageUrl != '' && recent.ImageUrl.length > 0) {
        img = "<img src=\"" + recent.ImageUrl + "\" alt=\"" + recent.Title + "\" title=\"" + recent.Title + "\" />";
    }

    //    if (avatarurl != '' && avatarurl.length > 0) {
    //        avimg = "<img src='http://static-webregio.nl/content/" + avatarurl + "' alt='" + username + "' title='" + username + "' width='32' height='32' />";
    //    } else {
    //        avimg = "<img src='http://static-webregio.nl/includes/img/dichtbij16x16px-favicon.png' alt='dichtbij.nl' title='dichtbij.nl' width='32' height='32' />";
    //    }

    if (recent.ObjectType == 'article') {
        str = "schreef het artikel <a href='" + recent.ObjectUrl + "'>" + recent.Title + "</a>";
        avimg = "<img src='http://static-webregio.nl/includes/img/artikelen_bw.gif' alt='artikel' title='artikel' width='16' height='16' />";
    }
    else if (recent.ObjectType == 'photo') {
        str = "heeft een foto geplaatst in de fotoreportage <a href='" + recent.ObjectUrl + "'>" + recent.Title + "</a>";
        avimg = "<img src='http://static-webregio.nl/includes/img/fotos_bw.gif' alt='foto' title='foto' width='16' height='16' />";
    }
    else if (recent.ObjectType == 'comment') {
        str = "heeft gereageerd op het artikel <a href='" + recent.ObjectUrl + "'>" + recent.Title + "</a>";
        avimg = "<img src='http://static-webregio.nl/includes/img/reacties_bw.gif' alt='reactie' title='reactie' width='16' height='16' />";
        //txt = "<div class='userfeedrecentcomment'>" + recent.Text +"</div>";
    }
    else if (recent.ObjectType == 'event') {
        str = "heeft het agendapunt <a href='" + recent.ObjectUrl + "'>" + recent.Title + "</a> aangemaakt";
        avimg = "<img src='http://static-webregio.nl/includes/img/artikelen_bw.gif' alt='artikel' title='artikel' width='16' height='16' />";
    }

    $("#uprecent").append("<div style='padding-top: 10px; padding-bottom: 10px;border-bottom: 1px dotted #AAAAAA; width: 100%; position: relative; float: left;' >" +

						"<div class='userfeedrecentimg' style='float:left; padding-right: 10px; vertical-align: top;'>" +
						avimg +
						"</div>" +
						"<div class='userfeedrecentcontent' style='float: left;'>" +
						"<b>" + username + "</b> " + str + "<br />" + "<abbr class='timeago' title='" + formatteddate + "'>" + formatteddate + "</abbr>" +
						txt +
						"</div>" +
						"</div>");
}


function SetTimeAgo() {
    $('abbr.timeago').each(function () {
        $(this).timeago();
    });
}


function ShowCompanyProfileMessage(companyname) {
    $("#companyprofilename").html('');
    $("#companyprofilename").html(companyname);

    $("#companyprofilemessage").show();
}


function submituserloginenter(myfield, e, btnid) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        btnid.click();
        return false;
    }
    else
        return true;
}


function IsValidUserName() {
    var un = $("#txtTempName").val();
    var isvalid = false;

    $.ajax({
        url: "/Services/User/CheckUserName.aspx?un=" + un,
        dataType: 'json',
        data: data,
        async: false,
        success: function (json) {
            isvalid = json;
        }
    });

    return !isvalid;
}

function IsValidEmailAddress() {
    var em = $("#txtTempEmail").val();
    var isvalid = false;

    $.ajax({
        url: "/Services/User/CheckEmail.aspx?e=" + em,
        dataType: 'json',
        data: data,
        async: false,
        success: function (json) {
            isvalid = json;
        }
    });
    return !isvalid;
}

function IsValidLoginInfo() {
    var un = $("#txtCommentUserName").val();
    var pwd = $("#txtCommentPassword").val();
    var isvalid = false;

    $.ajax({
        url: "/Services/User/Authenticate.aspx?un=" + un + "&pwd=" + pwd,
        dataType: 'json',
        data: data,
        async: false,
        success: function (json) {
            isvalid = json;
        }
    });

    if (isvalid) {
        $("#pusrname").text(un);
    }

    return isvalid;
}

function GetUserStatus() {
    var un = $("#txtCommentUserName").val();
    var pwd = $("#txtCommentPassword").val();
    var accountStatus = "unknown";

    $.ajax({
        url: "/Services/User/Authenticate.aspx?accountstatus=1&un=" + un + "&pwd=" + pwd,
        dataType: 'json',
        data: data,
        async: false,
        success: function (json) {
            accountStatus = json;
        }
    });

    if (accountStatus == 'active') {
        $("#pusrname").text(un);
    }  

    return accountStatus;
}

function GetCurrentDateTime() {
    // get date values
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_minute = d.getMinutes();

    if (curr_date < 10) curr_date = "0" + curr_date;
    if (curr_month < 10) curr_month = "0" + curr_month;
    if (curr_hour < 10) curr_hour = "0" + curr_hour;
    if (curr_minute < 10) curr_minute = "0" + curr_minute;

    var dt = "" + curr_year + curr_month + curr_date + curr_hour + curr_minute;

    return dt;
}

function VoorspelEnWinSchema() {
    var curr = GetCurrentDateTime();
    var expires = new Date();
    expires.setYear(expires.getFullYear() + 1);

    // set match dates
    var match1start = 201206040000;
    var matcht1end = 201206091800;

    var match2start = 201206120000;
    var match2end = 201206132045;

    var match3start = 201206160000;
    var match3end = 201206172045;

    var q1start = 201206210000;
    var q1end = 201206212045;

    var q2start = 201206220000;
    var q2end = 201206222045;

    var q3start = 201206230000;
    var q3end = 201206232045;

    var q4start = 201206240000;
    var q4end = 201206242045;

    var sf1start = 201206270000;
    var sf1end = 201206272045;

    var sf2start = 201206280000;
    var sf2end = 201206282045;

    var fstart = 201207010000;
    var fend = 201207012045;


    if ($.cookie('voorspelenwinwedstrijd1_popup') == null && curr >= match1start && curr <= matcht1end) {
        $.cookie('voorspelenwinwedstrijd1_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijd2_popup') == null && curr >= match2start && curr <= match2end) {
        $.cookie('voorspelenwinwedstrijd2_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijd3_popup') == null && curr >= match3start && curr <= match3end) {
        $.cookie('voorspelenwinwedstrijd3_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdq1_popup') == null && curr >= q1start && curr <= q1end) {
        $.cookie('voorspelenwinwedstrijdq1_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdq2_popup') == null && curr >= q2start && curr <= q2end) {
        $.cookie('voorspelenwinwedstrijdq2_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdq3_popup') == null && curr >= q3start && curr <= q3end) {
        $.cookie('voorspelenwinwedstrijdq3_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdq4_popup') == null && curr >= q4start && curr <= q4end) {
        $.cookie('voorspelenwinwedstrijdq4_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdsf1_popup') == null && curr >= sf1start && curr <= sf1end) {
        $.cookie('voorspelenwinwedstrijdsf1_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

    if ($.cookie('voorspelenwinwedstrijdsf2_popup') == null && curr >= sf2start && curr <= sf2end) {
        $.cookie('voorspelenwinwedstrijdsf2_popup', 'true', { expires: expires, path: '/' });
    }

    if ($.cookie('voorspelenwinwedstrijdfinal_popup') == null && curr >= fstart && curr <= fend) {
        $.cookie('voorspelenwinwedstrijdfinal_popup', 'true', { expires: expires, path: '/' });
        ShowVoorspelEnWin();
    }

}

function ShowVoorspelEnWinWithResult(team1, team2, score1, score2) {

    var scoreUrl = "http://games.dichtbij.nl/ek/voorspel-en-win/gegevens/" + team1 + "-" + team2 + "/" + score1 + "-" + score2;

    $('<a class="iframe" href="' + scoreUrl + '"></a>').fancybox({
        padding: 0,
        margin: 0,
        width: 750,
        height: 550,
        overlayShow: true
    }).click();

}

function ShowVoorspelEnWin() {
    $('<a class="iframe" href="http://games.dichtbij.nl/ek/voorspel-en-win"></a>').fancybox({
        padding: 0,
        margin: 0,
        width: 750,
        height: 550,
        overlayShow: true
    }).click();
}

function ShowZoekDeBal() {
    $('<a class="iframe" href="http://games.dichtbij.nl/ek/zoek-de-bal"></a>').fancybox({
        padding: 0,
        margin: 0,
        width: 750,
        height: 550,
        overlayShow: true
    }).click();
}

function RegisterGAEvent(category, action, label, value) {  
    try {       
        if (!(typeof pageTracker == 'undefined')) {
            if (pageTracker) {                
                pageTracker._trackEvent(category, action, label, value);
            }
        }
        else {            
        }
    }
    catch (err) {        
    }    
} 