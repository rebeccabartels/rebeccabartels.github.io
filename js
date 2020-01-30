// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []




    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    bf: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.bf;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = ca,
        ja = this || self,
        la = /^[\w+/_-]+[=]{0,2}$/,
        ma = null;
    var pa = function() {},
        qa = function(a) {
            return "function" == typeof a
        },
        g = function(a) {
            return "string" == typeof a
        },
        ra = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ua = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        r = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!ra(a) ||
                !ra(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ya = function(a, b) {
            for (var c = new xa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        za = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Da = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ea = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        Fa = function() {
            return (new Date).getTime()
        },
        xa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    xa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    xa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        Ia = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ma = function(a) {
            var b = [];
            za(a, function(c, d) {
                10 > c.length && d && b.push(c)
            });
            return b.join(",")
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Na = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Oa = function(a) {
            if (null == a) return String(a);
            var b = Na.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Pa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Qa = function(a) {
            if (!a || "object" != Oa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Pa(a, "constructor") && !Pa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Pa(a, b)
        },
        B = function(a, b) {
            var c = b || ("array" == Oa(a) ? [] : {}),
                d;
            for (d in a)
                if (Pa(a, d)) {
                    var e = a[d];
                    "array" == Oa(e) ? ("array" != Oa(c[d]) && (c[d] = []), c[d] = B(e, c[d])) : Qa(e) ? (Qa(c[d]) || (c[d] = {}), c[d] = B(e, c[d])) : c[d] = e
                } return c
        };
    var pb;
    var qb = [],
        rb = [],
        sb = [],
        tb = [],
        ub = [],
        wb = {},
        xb, yb, zb, Ab = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Bb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = wb[c],
                e = {},
                f;
            for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
            return void 0 !== d ? d(e) : pb(c, e, b)
        },
        Db = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Cb(a[e], b, c));
            return d
        },
        Eb = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = wb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        Cb = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Cb(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = qb[f];
                        if (!h || b.Jc(h)) return;
                        c[f] = !0;
                        try {
                            var k = Db(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Bb(k, b);
                            zb && (d = zb.If(d, k))
                        } catch (y) {
                            b.ke && b.ke(y, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Cb(a[l], b, c)] = Cb(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var q = Cb(a[n], b, c);
                            yb && (m = m || q === yb.qb);
                            d.push(q)
                        }
                        return yb && m ? yb.Lf(d) : d.join("");
                    case "escape":
                        d = Cb(a[1], b, c);
                        if (yb && ua(a[1]) && "macro" === a[1][0] && yb.qg(a)) return yb.Rg(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ra[a[u]] && (d = Ra[a[u]](d));
                        return d;
                    case "tag":
                        var p = a[1];
                        if (!tb[p]) throw Error("Unable to resolve tag reference " + p + ".");
                        return d = {
                            ae: a[2],
                            index: p
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t["function"] = a[1];
                        var v = Gb(t, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Gb = function(a, b, c) {
            try {
                return xb(Db(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Hb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            od: a("convert_case_to"),
            pd: a("convert_false_to"),
            qd: a("convert_null_to"),
            rd: a("convert_true_to"),
            sd: a("convert_undefined_to"),
            Dh: a("debug_mode_metadata"),
            oa: a("function"),
            Le: a("instance_name"),
            Pe: a("live_only"),
            Re: a("malware_disabled"),
            Se: a("metadata"),
            Eh: a("original_vendor_template_id"),
            Ve: a("once_per_event"),
            Bd: a("once_per_load"),
            Gd: a("setup_tags"),
            Id: a("tag_id"),
            Jd: a("teardown_tags")
        }
    }();
    var Ib = null,
        Lb = function(a) {
            function b(q) {
                for (var u = 0; u < q.length; u++) d[q[u]] = !0
            }
            var c = [],
                d = [];
            Ib = Jb(a);
            for (var e = 0; e < rb.length; e++) {
                var f = rb[e],
                    h = Kb(f);
                if (h) {
                    for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(f.block || [])
                } else null === h && b(f.block || [])
            }
            for (var m = [], n = 0; n < tb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        Kb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = Ib(b[c]);
                if (0 === d) return !1;
                if (2 === d) return null
            }
            for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var h = Ib(e[f]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Jb = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Gb(sb[c], a));
                return b[c]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var D = window,
        F = document,
        dc = navigator,
        ec = F.currentScript && F.currentScript.src,
        fc = function(a, b) {
            var c = D[a];
            D[a] = void 0 === c ? b : c;
            return D[a]
        },
        gc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        hc = function(a, b, c) {
            var d = F.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            gc(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ma) b: {
                var f = ja.document,
                    h = f.querySelector && f.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && la.test(k)) {
                        ma = k;
                        break b
                    }
                }
                ma = ""
            }
            e = ma;
            e && d.setAttribute("nonce", e);
            var l = F.getElementsByTagName("script")[0] || F.body || F.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        ic = function() {
            if (ec) {
                var a = ec.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        jc = function(a, b) {
            var c = F.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = F.body && F.body.lastChild ||
                F.body || F.head;
            d.parentNode.insertBefore(c, d);
            gc(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        kc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        lc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        mc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            D.setTimeout(a, 0)
        },
        nc = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        oc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        pc = function(a) {
            var b = F.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        qc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        rc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var uc = function(a) {
            return sc ? F.querySelectorAll(a) : null
        },
        vc = function(a, b) {
            if (!sc) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        wc = !1;
    if (F.querySelectorAll) try {
        var xc = F.querySelectorAll(":root");
        xc && 1 == xc.length && xc[0] == F.documentElement && (wc = !0)
    } catch (a) {}
    var sc = wc;
    var H = {
        na: "_ee",
        jc: "event_callback",
        Pa: "event_timeout",
        D: "gtag.config",
        T: "allow_ad_personalization_signals",
        kc: "restricted_data_processing",
        ic: "allow_google_signals",
        Y: "cookie_expires",
        Oa: "cookie_update",
        xa: "session_duration",
        da: "user_properties"
    };
    H.Zc = "page_view";
    H.Pg = "user_engagement";
    H.la = "purchase";
    H.zb = "refund";
    H.Qa = "begin_checkout";
    H.xb = "add_to_cart";
    H.yb = "remove_from_cart";
    H.Bg = "view_cart";
    H.xd = "add_to_wishlist";
    H.Ra = "view_item";
    H.Ig = "present_offer";
    H.Gg = "click_offer";
    H.Eg = "click_item_list";
    H.Xc = "view_item_list";
    H.wd = "add_payment_info";
    H.Ag = "add_shipping_info";
    H.Xg = "allow_custom_scripts";
    H.Zg = "allow_display_features";
    H.hh = "allow_enhanced_conversions";
    H.Pd = "enhanced_conversions";
    H.Bb = "client_id";
    H.W = "cookie_domain";
    H.Cb = "cookie_name";
    H.Ba = "cookie_path";
    H.ba = "currency";
    H.Eb = "custom_params";
    H.uh = "custom_map";
    H.kd = "groups";
    H.Ca = "language";
    H.sh = "country";
    H.Fh = "non_interaction";
    H.Wa = "page_location";
    H.Xa = "page_referrer";
    H.fc = "page_title";
    H.Ya = "send_page_view";
    H.Da = "send_to";
    H.gc = "session_engaged";
    H.Mb = "session_id";
    H.hc = "session_number";
    H.Te = "tracking_id";
    H.ma = "linker";
    H.Sa = "accept_incoming";
    H.C = "domains";
    H.Va = "url_position";
    H.Ta = "decorate_forms";
    H.md = "phone_conversion_number";
    H.Rd = "phone_conversion_callback";
    H.Sd = "phone_conversion_css_class";
    H.Td = "phone_conversion_options";
    H.Me = "phone_conversion_ids";
    H.Ke = "phone_conversion_country_code";
    H.yd = "aw_remarketing";
    H.zd = "aw_remarketing_only";
    H.X = "value";
    H.Ne = "quantity";
    H.Bh = "affiliation";
    H.Od = "tax";
    H.Ce = "shipping";
    H.ed = "list_name";
    H.Md = "checkout_step";
    H.Ld = "checkout_option";
    H.Ch = "coupon";
    H.Ae = "promotions";
    H.Za = "transaction_id";
    H.$a = "user_id";
    H.za = "conversion_linker";
    H.ya = "conversion_cookie_prefix";
    H.P = "cookie_prefix";
    H.M = "items";
    H.Ed = "aw_merchant_id";
    H.Cd = "aw_feed_country";
    H.Dd = "aw_feed_language";
    H.Ad = "discount";
    H.Hd = "disable_merchant_reported_purchases";
    H.cc = "new_customer";
    H.Fd = "customer_lifetime_value";
    H.Ah = "dc_natural_search";
    H.wh = "dc_custom_params";
    H.Ue = "trip_type";
    H.Qd = "passengers";
    H.Ie = "method";
    H.Qe = "search_term";
    H.oh = "content_type";
    H.Je = "optimize_id";
    H.De = "experiments";
    H.Kb = "google_signals";
    H.jd = "google_tld";
    H.Nb = "update";
    H.hd = "firebase_id";
    H.Ib = "ga_restrict_domain";
    H.fd = "event_settings";
    H.Oe = "screen_name";
    H.He = "_x_19";
    H.Fe = "_x_20";
    H.ia = "transport_url";
    H.Zd = [H.T, H.kc, H.W, H.Y, H.Cb, H.Ba,
        H.P, H.Oa, H.Eb, H.jc, H.fd, H.Pa, H.Ib, H.Kb, H.jd, H.kd, H.ma, H.Da, H.Ya, H.xa, H.Nb, H.da, H.ia
    ];
    H.Wd = [H.Wa, H.Xa, H.fc, H.Ca, H.Oe, H.$a, H.hd];
    H.Xe = [H.la, H.zb, H.Qa, H.xb, H.yb, H.Bg, H.xd, H.Ra, H.Ig, H.Gg, H.Xc, H.Eg, H.wd, H.Ag];
    H.vd = [H.Da, H.yd, H.zd, H.Eb, H.Ya, H.Ca, H.X, H.ba, H.Za, H.$a, H.za, H.ya, H.P, H.Wa, H.Xa, H.md, H.Rd, H.Sd, H.Td, H.M, H.Ed, H.Cd, H.Dd, H.Ad, H.Hd, H.cc, H.Fd, H.T, H.kc, H.Nb, H.hd, H.Pd, H.ia];
    var Nc = /[A-Z]+/,
        Oc = /\s/,
        Pc = function(a) {
            if (g(a) && (a = Ea(a), !Oc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Nc.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            m: d
                        }
                    }
                }
            }
        },
        Rc = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Pc(a[c]);
                d && (b[d.id] = d)
            }
            Qc(b);
            var e = [];
            za(b, function(f, h) {
                e.push(h)
            });
            return e
        };

    function Qc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.m[1] && b.push(d.containerId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Sc = {},
        Tc = null,
        Uc = Math.random();
    Sc.s = "UA-155347973-1";
    Sc.ub = "1f1";
    var Vc = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
            __paused: !0,
            __tg: !0
        },
        Wc = "www.googletagmanager.com/gtm.js";
    Wc = "www.googletagmanager.com/gtag/js";
    var Xc = Wc,
        Yc = null,
        Zc = null,
        $c = null,
        ad = "//www.googletagmanager.com/a?id=" + Sc.s + "&cv=1",
        bd = {},
        dd = {},
        ed = function() {
            var a = Tc.sequence || 0;
            Tc.sequence = a + 1;
            return a
        };
    var fd = {},
        I = function(a, b) {
            fd[a] = fd[a] || [];
            fd[a][b] = !0
        },
        gd = function(a) {
            for (var b = [], c = fd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var hd = function() {
            return "&tc=" + tb.filter(function(a) {
                return a
            }).length
        },
        kd = function() {
            id || (id = D.setTimeout(jd, 500))
        },
        jd = function() {
            id && (D.clearTimeout(id), id = void 0);
            void 0 === ld || md[ld] && !nd && !od || (pd[ld] || qd.sg() || 0 >= rd-- ? (I("GTM", 1), pd[ld] = !0) : (qd.ah(), kc(sd()), md[ld] = !0, td = ud = od = nd = ""))
        },
        sd = function() {
            var a = ld;
            if (void 0 === a) return "";
            var b = gd("GTM"),
                c = gd("TAGGING");
            return [vd, md[a] ? "" : "&es=1", wd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", hd(), nd, od, ud, td, "&z=0"].join("")
        },
        xd = function() {
            return [ad, "&v=3&t=t", "&pid=" +
                wa(), "&rv=" + Sc.ub
            ].join("")
        },
        yd = "0.005000" > Math.random(),
        vd = xd(),
        zd = function() {
            vd = xd()
        },
        md = {},
        nd = "",
        od = "",
        td = "",
        ud = "",
        ld = void 0,
        wd = {},
        pd = {},
        id = void 0,
        qd = function(a, b) {
            var c = 0,
                d = 0;
            return {
                sg: function() {
                    if (c < a) return !1;
                    Fa() - d >= b && (c = 0);
                    return c >= a
                },
                ah: function() {
                    Fa() - d >= b && (c = 0);
                    c++;
                    d = Fa()
                }
            }
        }(2, 1E3),
        rd = 1E3,
        Ad = function(a, b) {
            if (yd && !pd[a] && ld !== a) {
                jd();
                ld = a;
                td = nd = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                wd[a] = "&e=" + c + "&eid=" + a;
                kd()
            }
        },
        Bd = function(a, b, c) {
            if (yd && !pd[a] &&
                b) {
                a !== ld && (jd(), ld = a);
                var d, e = String(b[Hb.oa] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                nd = nd ? nd + "." + f : "&tr=" + f;
                kd();
                2022 <= sd().length && jd()
            }
        },
        Cd = function(a, b, c) {
            if (yd && !pd[a]) {
                a !== ld && (jd(), ld = a);
                var d = c + b;
                od = od ? od +
                    "." + d : "&epr=" + d;
                kd();
                2022 <= sd().length && jd()
            }
        };
    var Dd = {},
        Ed = new xa,
        Fd = {},
        Gd = {},
        Jd = {
            name: "dataLayer",
            set: function(a, b) {
                B(La(a, b), Fd);
                Hd()
            },
            get: function(a) {
                return Id(a, 2)
            },
            reset: function() {
                Ed = new xa;
                Fd = {};
                Hd()
            }
        },
        Id = function(a, b) {
            if (2 != b) {
                var c = Ed.get(a);
                if (yd) {
                    var d = Kd(a);
                    c !== d && I("GTM", 5)
                }
                return c
            }
            return Kd(a)
        },
        Kd = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                f = void 0;
            var h = function(k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(Ld(l.pop()), l) : Md(d)
            };
            e = !0;
            f = h(Fd.eventModel, [b, c]);
            return e ? f : Md(d)
        },
        Md = function(a) {
            for (var b = Fd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var Ld = function(a) {
            if (a) {
                var b = Md(["gtag", "targets", a]);
                return Qa(b) ? b : void 0
            }
        },
        Nd = function(a, b) {
            function c(f) {
                f && za(f, function(h) {
                    d[h] = null
                })
            }
            var d = {};
            c(Fd);
            delete d.eventModel;
            c(Ld(a));
            c(Ld(b));
            c(Fd.eventModel);
            var e = [];
            za(d, function(f) {
                e.push(f)
            });
            return e
        };
    var Od = function(a, b) {
            Gd.hasOwnProperty(a) || (Ed.set(a, b), B(La(a, b), Fd), Hd())
        },
        Hd = function(a) {
            za(Gd, function(b, c) {
                Ed.set(b, c);
                B(La(b, void 0), Fd);
                B(La(b, c), Fd);
                a && delete Gd[b]
            })
        },
        Pd = function(a, b, c) {
            Dd[a] = Dd[a] || {};
            var d = 1 !== c ? Kd(b) : Ed.get(b);
            "array" === Oa(d) || "object" === Oa(d) ? Dd[a][b] = B(d) : Dd[a][b] = d
        },
        Qd = function(a, b) {
            if (Dd[a]) return Dd[a][b]
        };
    var Rd = function() {
        var a = !1;
        return a
    };
    var Q = function(a, b, c, d) {
            return (2 === Sd() || d || "http:" != D.location.protocol ? a : b) + c
        },
        Sd = function() {
            var a = ic(),
                b;
            if (1 === a) a: {
                var c = Xc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = F.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Ud = function(a, b, c) {
            if (D[a.functionName]) return b.Pc && G(b.Pc), D[a.functionName];
            var d = Td();
            D[a.functionName] = d;
            if (a.Ab)
                for (var e = 0; e < a.Ab.length; e++) D[a.Ab[e]] = D[a.Ab[e]] || Td();
            a.Lb && void 0 === D[a.Lb] && (D[a.Lb] = c);
            hc(Q("https://", "http://", a.$c), b.Pc, b.Jg);
            return d
        },
        Td = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Vd = {
            functionName: "_googWcmImpl",
            Lb: "_googWcmAk",
            $c: "www.gstatic.com/wcm/loader.js"
        },
        Wd = {
            functionName: "_gaPhoneImpl",
            Lb: "ga_wpid",
            $c: "www.gstatic.com/gaphone/loader.js"
        },
        Xd = {
            Be: "",
            Ze: "1"
        },
        Yd = {
            functionName: "_googCallTrackingImpl",
            Ab: [Wd.functionName, Vd.functionName],
            $c: "www.gstatic.com/call-tracking/call-tracking_" + (Xd.Be || Xd.Ze) + ".js"
        },
        Zd = {},
        $d = function(a, b, c, d) {
            I("GTM", 22);
            if (c) {
                d = d || {};
                var e = Ud(Vd, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.fa && (f.autoreplace = c);
                e(2, d.fa, f, c, 0, new Date, d.options)
            }
        },
        ae = function(a, b, c) {
            I("GTM", 23);
            if (b) {
                c = c || {};
                var d = Ud(Wd, c, a),
                    e = {};
                void 0 !== c.fa ? e.receiver = c.fa : e.replace = b;
                e.ga_wpid = a;
                e.destination = b;
                d(2, new Date,
                    e)
            }
        },
        be = function(a, b, c, d) {
            I("GTM", 21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: new Date
                    }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    Zd[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.m.length ? (e.adData = {
                        ak: h.m[0],
                        cl: h.m[1]
                    }, Zd[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                        gaWpid: h.containerId
                    }, Zd[h.id] = !0))
                }(e.gaData || e.adData) && Ud(Yd, d)(d.fa, e, d.options)
            }
        },
        ce = function() {
            var a = !1;
            return a
        },
        de = function(a, b) {
            if (a)
                if (Rd()) {} else {
                    if (g(a)) {
                        var c = Pc(a);
                        if (!c) return;
                        a = c
                    }
                    var d = function(x) {
                            return b ? b.getWithConfig(x) : Kd(x, a.containerId, a.id)
                        },
                        e = void 0,
                        f = !1,
                        h = d(H.Me);
                    if (h && ua(h)) {
                        e = [];
                        for (var k = 0; k < h.length; k++) {
                            var l = Pc(h[k]);
                            l && (e.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (f = !0))
                        }
                    }
                    if (!e || f) {
                        var m = d(H.md),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var q = d(H.Rd),
                                u = d(H.Sd),
                                p = d(H.Td),
                                t = d(H.Ke),
                                v = q || u,
                                w = 1;
                            "UA" !== a.prefix || e || (w = 5);
                            for (var y = 0; y < n.length; y++) y < w && (e ? be(e, n[y], t, {
                                fa: v,
                                options: p
                            }) : "AW" === a.prefix && a.m[1] ? ce() ? be([a], n[y], t || "US", {
                                fa: v,
                                options: p
                            }) : $d(a.m[0], a.m[1], n[y], {
                                fa: v,
                                options: p
                            }) : "UA" === a.prefix && (ce() ? be([a], n[y], t || "US", {
                                fa: v
                            }) : ae(a.containerId, n[y], {
                                fa: v
                            })))
                        }
                    }
                }
        };
    var ge = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        he = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        ie = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        je = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var le = function(a) {
            dd.pntr = dd.pntr || ["nonGoogleScripts"];
            dd.snppx = dd.snppx || ["nonGoogleScripts"];
            dd.qpx = dd.qpx || ["nonGooglePixels"];
            var b = Id("gtm.whitelist");
            b && I("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Ka(Da(b), he),
                d = Id("gtm.blacklist");
            d || (d = Id("tagTypeBlacklist")) && I("GTM", 3);
            d ? I("GTM", 8) : d = [];
            ke() && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= r(Da(d), "google") && I("GTM", 2);
            var e = d && Ka(Da(d), ie),
                f = {};
            return function(h) {
                var k = h && h[Hb.oa];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = dd[k] || [],
                    m = a(k, l);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > r(c, k))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > r(c, l[q])) {
                                        I("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var u = !1;
                if (d) {
                    var p = 0 <= r(e, k);
                    if (p) u = p;
                    else {
                        var t = ya(e, l || []);
                        t && I("GTM", 10);
                        u = t
                    }
                }
                var v = !m || u;
                v || !(0 <= r(l, "sandboxedScripts")) || c && -1 !== r(c, "sandboxedScripts") || (v = ya(e, je));
                return f[k] = v
            }
        },
        ke = function() {
            return ge.test(D.location && D.location.hostname)
        };
    var me = {
        If: function(a, b) {
            b[Hb.od] && "string" === typeof a && (a = 1 == b[Hb.od] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Hb.qd) && null === a && (a = b[Hb.qd]);
            b.hasOwnProperty(Hb.sd) && void 0 === a && (a = b[Hb.sd]);
            b.hasOwnProperty(Hb.rd) && !0 === a && (a = b[Hb.rd]);
            b.hasOwnProperty(Hb.pd) && !1 === a && (a = b[Hb.pd]);
            return a
        }
    };
    var ne = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        oe = function(a) {
            var b = Tc.zones;
            !b && a && (b = Tc.zones = a());
            return b
        };
    var pe = function() {};
    var qe = !1,
        re = 0,
        se = [];

    function te(a) {
        if (!qe) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                qe = !0;
                for (var e = 0; e < se.length; e++) G(se[e])
            }
            se.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function ue() {
        if (!qe && 140 > re) {
            re++;
            try {
                F.documentElement.doScroll("left"), te()
            } catch (a) {
                D.setTimeout(ue, 50)
            }
        }
    }
    var ve = function(a) {
        qe ? a() : se.push(a)
    };
    var we = {},
        xe = {},
        ye = function(a, b, c, d) {
            if (!xe[a] || Vc[b] || "__zone" === b) return -1;
            var e = {};
            Qa(d) && (e = B(d, e));
            e.id = c;
            e.status = "timeout";
            return xe[a].tags.push(e) - 1
        },
        ze = function(a, b, c, d) {
            if (xe[a]) {
                var e = xe[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Ae(a) {
        for (var b = we[a] || [], c = 0; c < b.length; c++) b[c]();
        we[a] = {
            push: function(d) {
                d(Sc.s, xe[a])
            }
        }
    }
    var De = function(a, b, c) {
            xe[a] = {
                tags: []
            };
            qa(b) && Be(a, b);
            c && D.setTimeout(function() {
                return Ae(a)
            }, Number(c));
            return Ce(a)
        },
        Be = function(a, b) {
            we[a] = we[a] || [];
            we[a].push(Ha(function() {
                return G(function() {
                    b(Sc.s, xe[a])
                })
            }))
        };

    function Ce(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return Ha(function() {
                    b++;
                    d && b >= c && Ae(a)
                })
            },
            rf: function() {
                d = !0;
                b >= c && Ae(a)
            }
        }
    };
    var Ee = function() {
        function a(d) {
            return !ra(d) || 0 > d ? 0 : d
        }
        if (!Tc._li && D.performance && D.performance.timing) {
            var b = D.performance.timing.navigationStart,
                c = ra(Jd.get("gtm.start")) ? Jd.get("gtm.start") : 0;
            Tc._li = {
                cst: a(c - b),
                cbt: a(Zc - b)
            }
        }
    };
    var Ie = !1,
        Je = function() {
            return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject]
        },
        Ke = !1;
    var Le = function(a) {
            D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
            var b = D.GoogleAnalyticsObject;
            if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                D[b] = c
            }
            Ee();
            return D[b]
        },
        Me = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Je();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Oe = function() {},
        Ne = function() {
            return D.GoogleAnalyticsObject || "ga"
        };
    var Qe = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Re = /:[0-9]+$/,
        Se = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var h = f.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        Ve = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Te(a.protocol) || Te(D.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : D.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || D.location.hostname).replace(Re, "").toLowerCase());
            var f = b,
                h, k = Te(a.protocol);
            f && (f = String(f).toLowerCase());
            switch (f) {
                case "url_no_fragment":
                    h = Ue(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(Re, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || I("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= r(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = Se(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        Te = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Ue = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        We = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || I("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Re, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };

    function af(a, b, c, d) {
        var e = tb[a],
            f = bf(a, b, c, d);
        if (!f) return null;
        var h = Cb(e[Hb.Gd], c, []);
        if (h && h.length) {
            var k = h[0];
            f = af(k.index, {
                B: f,
                w: 1 === k.ae ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function bf(a, b, c, d) {
        function e() {
            if (f[Hb.Re]) k();
            else {
                var w = Db(f, c, []),
                    y = ye(c.id, String(f[Hb.oa]), Number(f[Hb.Id]), w[Hb.Se]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - C;
                        Bd(c.id, tb[a], "5");
                        ze(c.id, y, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - C;
                        Bd(c.id, tb[a], "6");
                        ze(c.id, y, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Bd(c.id, f, "1");
                var z = function() {
                    var A = Fa() - C;
                    Bd(c.id, f, "7");
                    ze(c.id, y, "exception", A);
                    x || (x = !0, k())
                };
                var C = Fa();
                try {
                    Bb(w, c)
                } catch (A) {
                    z(A)
                }
            }
        }
        var f = tb[a],
            h = b.B,
            k = b.w,
            l = b.terminate;
        if (c.Jc(f)) return null;
        var m = Cb(f[Hb.Jd], c, []);
        if (m && m.length) {
            var n = m[0],
                q = af(n.index, {
                    B: h,
                    w: k,
                    terminate: l
                }, c, d);
            if (!q) return null;
            h = q;
            k = 2 === n.ae ? l : q
        }
        if (f[Hb.Bd] || f[Hb.Ve]) {
            var u = f[Hb.Bd] ? ub : c.lh,
                p = h,
                t = k;
            if (!u[a]) {
                e = Ha(e);
                var v = cf(a, u, e);
                h = v.B;
                k = v.w
            }
            return function() {
                u[a](p, t)
            }
        }
        return e
    }

    function cf(a, b, c) {
        var d = [],
            e = [];
        b[a] = df(d, e, c);
        return {
            B: function() {
                b[a] = ef;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            w: function() {
                b[a] = ff;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function df(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ef(a) {
        a()
    }

    function ff(a, b) {
        b()
    };
    var jf = function(a, b) {
        for (var c = [], d = 0; d < tb.length; d++)
            if (a.ib[d]) {
                var e = tb[d];
                var f = b.add();
                try {
                    var h = af(d, {
                        B: f,
                        w: f,
                        terminate: f
                    }, a, d);
                    h ? c.push({
                        ye: d,
                        te: Eb(e),
                        Uf: h
                    }) : (gf(d, a), f())
                } catch (l) {
                    f()
                }
            } b.rf();
        c.sort(hf);
        for (var k = 0; k < c.length; k++) c[k].Uf();
        return 0 < c.length
    };

    function hf(a, b) {
        var c, d = b.te,
            e = a.te;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.ye,
                k = b.ye;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function gf(a, b) {
        if (!yd) return;
        var c = function(d) {
            var e = b.Jc(tb[d]) ? "3" : "4",
                f = Cb(tb[d][Hb.Gd], b, []);
            f && f.length && c(f[0].index);
            Bd(b.id, tb[d], e);
            var h = Cb(tb[d][Hb.Jd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var kf = !1,
        lf = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (kf) return !1;
                kf = !0
            }
            Ad(a, b);
            var f = De(a, d, e);
            Pd(a, "event", 1);
            Pd(a, "ecommerce", 1);
            Pd(a, "gtm");
            var h = {
                id: a,
                name: b,
                Jc: le(c),
                ib: [],
                lh: [],
                ke: function() {
                    I("GTM", 6)
                }
            };
            h.ib = Lb(h);
            var k = jf(h, f);
            if (!k) return k;
            for (var l = 0; l < h.ib.length; l++)
                if (h.ib[l]) {
                    var m = tb[l];
                    if (m && !Vc[String(m[Hb.oa])]) return !0
                } return !1
        };
    var mf = function(a, b) {
        var c = Ab(a, b);
        tb.push(c);
        return tb.length - 1
    };
    var nf = /^https?:\/\/www\.googletagmanager\.com/;

    function of () {
        var a;
        return a
    }

    function qf(a, b) {}

    function pf(a) {
        0 !== a.indexOf("http://") && 0 !== a.indexOf("https://") && (a = "https://" + a);
        "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1));
        return a
    }

    function rf() {
        var a = !1;
        return a
    };
    var sf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.h = {};
            this.globalConfig = {};
            this.B = function() {};
            this.w = function() {}
        },
        tf = function(a) {
            var b = new sf;
            b.eventModel = a;
            return b
        },
        uf = function(a, b) {
            a.targetConfig = b;
            return a
        },
        vf = function(a, b) {
            a.containerConfig = b;
            return a
        },
        wf = function(a, b) {
            a.h = b;
            return a
        },
        xf = function(a, b) {
            a.globalConfig = b;
            return a
        },
        yf = function(a, b) {
            a.B = b;
            return a
        },
        zf = function(a, b) {
            a.w = b;
            return a
        };
    sf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.h[a]) return this.h[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var Af = function(a) {
        function b(e) {
            za(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        za(c, function(e) {
            d.push(e)
        });
        return d
    };
    var Bf = {},
        Cf = ["G"];
    Bf.ze = "";
    var Df = Bf.ze.split(",");

    function Ef() {
        var a = Tc;
        return a.gcq = a.gcq || new Ff
    }
    var Gf = function(a, b, c) {
            Ef().register(a, b, c)
        },
        Hf = function(a, b, c, d) {
            Ef().push("event", [b, a], c, d)
        },
        If = function(a, b) {
            Ef().push("config", [a], b)
        },
        Jf = {},
        Kf = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.i = {};
            this.o = null;
            this.h = !1
        },
        Lf = function(a, b, c, d, e) {
            this.type = a;
            this.o = b;
            this.N = c || "";
            this.h = d;
            this.i = e
        },
        Ff = function() {
            this.i = {};
            this.o = {};
            this.h = []
        },
        Mf = function(a, b) {
            var c = Pc(b);
            return a.i[c.containerId] = a.i[c.containerId] || new Kf
        },
        Nf = function(a, b, c, d) {
            if (d.N) {
                var e = Mf(a, d.N),
                    f = e.o;
                if (f) {
                    var h = B(c),
                        k = B(e.targetConfig[d.N]),
                        l = B(e.containerConfig),
                        m = B(e.i),
                        n = B(a.o),
                        q = Id("gtm.uniqueEventId"),
                        u = Pc(d.N).prefix,
                        p = zf(yf(xf(wf(vf(uf(tf(h), k), l), m), n), function() {
                            Cd(q, u, "2");
                        }), function() {
                            Cd(q, u, "3");
                        });
                    try {
                        Cd(q, u, "1");
                        3 === f.length ? f(b, d.o, p) : 4 === f.length && f(d.N, b, d.o,
                            p)
                    } catch (t) {
                        Cd(q, u, "4");
                    }
                }
            }
        };
    Ff.prototype.register = function(a, b, c) {
        if (3 !== Mf(this, a).status) {
            Mf(this, a).o = b;
            Mf(this, a).status = 3;
            c && (Mf(this, a).i = c);
            var d = Pc(a),
                e = Jf[d.containerId];
            if (void 0 !== e) {
                var f = Tc[d.containerId].bootstrap,
                    h = d.prefix.toUpperCase();
                Tc[d.containerId]._spx && (h = h.toLowerCase());
                var k = Id("gtm.uniqueEventId"),
                    l = h,
                    m = Fa() - f;
                if (yd && !pd[k]) {
                    k !== ld && (jd(), ld = k);
                    var n = l + "." + Math.floor(f - e) + "." + Math.floor(m);
                    ud = ud ? ud + "," + n : "&cl=" + n
                }
                delete Jf[d.containerId]
            }
            this.flush()
        }
    };
    Ff.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Fa() / 1E3);
        if (c) {
            var f = Pc(c),
                h;
            if (h = f) {
                var k;
                if (k = 1 === Mf(this, c).status) a: {
                    var l = f.prefix;k = !0
                }
                h = k
            }
            if (h && (Mf(this, c).status = 2, this.push("require", [], f.containerId), Jf[f.containerId] = Fa(), !Rd())) {
                var m = encodeURIComponent(f.containerId),
                    n = ("http:" != D.location.protocol ? "https:" : "http:") +
                    "//www.googletagmanager.com";
                hc(n + "/gtag/js?id=" + m + "&l=dataLayer&cx=c")
            }
        }
        this.h.push(new Lf(a, e, c, b, d));
        d || this.flush()
    };
    Ff.prototype.flush = function(a) {
        for (var b = this; this.h.length;) {
            var c = this.h[0];
            if (c.i) c.i = !1, this.h.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Mf(this, c.N).status && !a) return;
                    break;
                case "set":
                    za(c.h[0], function(l, m) {
                        B(La(l, m), b.o)
                    });
                    break;
                case "config":
                    var d = c.h[0],
                        e = !!d[H.Nb];
                    delete d[H.Nb];
                    var f = Mf(this, c.N),
                        h = Pc(c.N),
                        k = h.containerId === h.id;
                    e || (k ? f.containerConfig = {} : f.targetConfig[c.N] = {});
                    f.h && e || Nf(this, H.D, d, c);
                    f.h = !0;
                    delete d[H.na];
                    k ? B(d, f.containerConfig) : B(d, f.targetConfig[c.N]);
                    break;
                case "event":
                    Nf(this, c.h[1], c.h[0], c)
            }
            this.h.shift()
        }
    };
    var Of = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), f = 0; f < e.length; f++) {
                var h = e[f].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        Rf = function(a, b, c, d) {
            var e = Pf(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Qf(e, function(f) {
                    return f.Gb
                }, b);
                if (1 === e.length) return e[0].id;
                e = Qf(e, function(f) {
                    return f.jb
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function Sf(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= Of(b, e).indexOf(c)
    }
    var Wf = function(a, b, c, d, e, f) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                f && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var q = void 0,
                u = void 0,
                p;
            for (p in h)
                if (h.hasOwnProperty(p)) {
                    var t = h[p];
                    if (null != t) switch (p) {
                        case "secure":
                            t && (m += "; secure");
                            break;
                        case "domain":
                            q = t;
                            break;
                        default:
                            "path" == p && (u = t), "expires" == p && t instanceof Date && (t =
                                t.toUTCString()), m += "; " + p + "=" + t
                    }
                } if ("auto" === q) {
                for (var v = Tf(), w = 0; w < v.length; ++w) {
                    var y = "none" != v[w] ? v[w] : void 0;
                    if (!Vf(y, u) && Sf(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else q && "none" != q && (m += "; domain=" + q),
            k = !Vf(q, u) && Sf(m, a, l)
        }
        return k
    };

    function Qf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Pf(a, b) {
        for (var c = [], d = Of(a), e = 0; e < d.length; e++) {
            var f = d[e].split("."),
                h = f.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = f.shift();
                k && (k = k.split("-"), c.push({
                    id: f.join("."),
                    Gb: 1 * k[0] || 1,
                    jb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var Xf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Yf = /(^|\.)doubleclick\.net$/i,
        Vf = function(a, b) {
            return Yf.test(document.location.hostname) || "/" === b && Xf.test(a)
        },
        Tf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            Yf.test(e) || Xf.test(e) || a.push("none");
            return a
        };
    var Zf = "".split(/,/),
        $f = !1;
    var ag = null,
        bg = {},
        cg = {},
        dg;

    function eg(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = B(b), b[H.jc] && (c.eventCallback = b[H.jc]), b[H.Pa] && (c.eventTimeout = b[H.Pa]));
        return c
    }
    var fg = function() {
            ag = ag || !Tc.gtagRegistered;
            Tc.gtagRegistered = !0;
            return ag
        },
        gg = function(a) {
            if (void 0 === cg[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = mf("gtagua", {
                            trackingId: a.id
                        });
                        break;
                    case "AW":
                        b = mf("gtagaw", {
                            conversionId: a
                        });
                        break;
                    case "DC":
                        b = mf("gtagfl", {
                            targetId: a.id
                        });
                        break;
                    case "GF":
                        b = mf("gtaggf", {
                            conversionId: a
                        });
                        break;
                    case "G":
                        b = mf("get", {
                            trackingId: a.id,
                            isAutoTag: !0
                        });
                        break;
                    case "HA":
                        b = mf("gtagha", {
                            conversionId: a
                        });
                        break;
                    case "GP":
                        b = mf("gtaggp", {
                            conversionId: a.id
                        });
                        break;
                    default:
                        return
                }
                if (!dg) {
                    var c =
                        Ab("v", {
                            name: "send_to",
                            dataLayerVersion: 2
                        });
                    qb.push(c);
                    dg = ["macro", qb.length - 1]
                }
                var d = {
                    arg0: dg,
                    arg1: a.id,
                    ignore_case: !1
                };
                d[Hb.oa] = "_lc";
                sb.push(d);
                var e = {
                    "if": [sb.length - 1],
                    add: [b]
                };
                e["if"] && (e.add || e.block) && rb.push(e);
                cg[a.id] = b
            }
        },
        hg = function(a) {
            za(bg, function(b, c) {
                var d = r(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        ig = Ha(function() {}),
        jg = function(a) {
            if (a.containerId !== Sc.s && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                I("GTM", b)
            }
        };
    var kg = {
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !g(a[1]) || !Qa(b)) return;
                var c = Pc(a[1]);
                if (!c) return;
                hg(c.id);
                var d = c.id,
                    e = b[H.kd] || "default";
                e = e.toString().split(",");
                for (var f = 0; f < e.length; f++) bg[e[f]] = bg[e[f]] || [], bg[e[f]].push(d);
                delete b[H.kd];
                B(b);
                if (fg()) {
                    if ($f && -1 !== r(Zf, c.prefix)) {
                        "G" === c.prefix && (b[H.na] = !0);
                        If(b, c.id);
                        return
                    }
                    gg(c);
                    jg(c)
                } else ig();
                Od("gtag.targets." + c.id, void 0);
                Od("gtag.targets." + c.id, B(b));
                var h = {};
                h[H.Da] = c.id;
                return eg(H.D, h);
            },
            event: function(a) {
                var b = a[1];
                if (g(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Qa(a[2]) && void 0 != a[2]) return;
                        c = a[2]
                    }
                    var d = eg(b, c);
                    var e;
                    var f = c,
                        h = Id("gtag.fields.send_to", 2);
                    g(h) ? I("GTM", 37) : h = H.Da;
                    var k = f && f[h];
                    void 0 === k && (k = Id(h, 2), void 0 === k && (k = "default"));
                    if (g(k) || ua(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(bg[l[n]] || []);
                        e = Rc(m)
                    } else e = void 0;
                    var q = e;
                    if (!q) return;
                    var u = fg();
                    u ||
                        ig();
                    for (var p = [], t = 0; u && t < q.length; t++) {
                        var v = q[t];
                        jg(v);
                        if ($f && -1 !== r(Zf, v.prefix)) {
                            var w = B(c);
                            "G" === v.prefix && (w[H.na] = !0);
                            Hf(b, w, v.id)
                        } else gg(v);
                        p.push(v.id)
                    }
                    B(c, {
                        event: b
                    });
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? d.eventModel[H.Da] = p.join() : delete d.eventModel[H.Da];
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Qa(a[1]) ? b = B(a[1]) : 3 == a.length && g(a[1]) &&
                    (b = {}, Qa(a[2]) || ua(a[2]) ? b[a[1]] = B(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (fg()) {
                        var c = B(b);
                        Ef().push("set", [c])
                    }
                    B(b);
                    b._clear = !0;
                    return b
                }
            }
        },
        lg = {
            policy: !0
        };
    var mg = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    } d && (c.end(), c.end = null)
            }
        },
        og = function(a) {
            var b = ng(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var pg = !1,
        qg = [];

    function rg() {
        if (!pg) {
            pg = !0;
            for (var a = 0; a < qg.length; a++) G(qg[a])
        }
    }
    var sg = function(a) {
        pg ? G(a) : qg.push(a)
    };
    var Hg = function(a) {
        if (Gg(a)) return a;
        this.h = a
    };
    Hg.prototype.ag = function() {
        return this.h
    };
    var Gg = function(a) {
        return !a || "object" !== Oa(a) || Qa(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Hg.prototype.getUntrustedUpdateValue = Hg.prototype.ag;
    var Ig = [],
        Jg = !1,
        Kg = function(a) {
            return D["dataLayer"].push(a)
        },
        Lg = function(a) {
            var b = Tc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {
                ++d === c && a()
            }
        };

    function Mg(a) {
        var b = a._clear;
        za(a, function(f, h) {
            "_clear" !== f && (b && Od(f, void 0), Od(f, h))
        });
        Yc || (Yc = a["gtm.start"]);
        var c = a.event;
        if (!c) return !1;
        var d = a["gtm.uniqueEventId"];
        d || (d = ed(), a["gtm.uniqueEventId"] = d, Od("gtm.uniqueEventId", d));
        $c = c;
        var e =
            Ng(a);
        $c = null;
        switch (c) {
            case "gtm.init":
                I("GTM", 19), e && I("GTM", 20)
        }
        return e
    }

    function Ng(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = Tc.zones;
        d = e ? e.checkState(Sc.s, c) : ne;
        return d.active ? lf(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }

    function Og() {
        for (var a = !1; !Jg && 0 < Ig.length;) {
            Jg = !0;
            delete Fd.eventModel;
            Hd();
            var b = Ig.shift();
            if (null != b) {
                var c = Gg(b);
                if (c) {
                    var d = b;
                    b = Gg(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
                        var h = e[f],
                            k = Id(h, 1);
                        if (ua(k) || Qa(k)) k = B(k);
                        Gd[h] = k
                    }
                }
                try {
                    if (qa(b)) try {
                        b.call(Jd)
                    } catch (v) {} else if (ua(b)) {
                        var l = b;
                        if (g(l[0])) {
                            var m =
                                l[0].split("."),
                                n = m.pop(),
                                q = l.slice(1),
                                u = Id(m.join("."), 2);
                            if (void 0 !== u && null !== u) try {
                                u[n].apply(u, q)
                            } catch (v) {}
                        }
                    } else {
                        var p = b;
                        if (p && ("[object Arguments]" == Object.prototype.toString.call(p) || Object.prototype.hasOwnProperty.call(p, "callee"))) {
                            a: {
                                if (b.length && g(b[0])) {
                                    var t = kg[b[0]];
                                    if (t && (!c || !lg[b[0]])) {
                                        b = t(b);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                Jg = !1;
                                continue
                            }
                        }
                        a = Mg(b) || a
                    }
                } finally {
                    c && Hd(!0)
                }
            }
            Jg = !1
        }
        return !a
    }

    function Pg() {
        var a = Og();
        try {
            mg(D["dataLayer"], Sc.s)
        } catch (b) {}
        return a
    }
    var Rg = function() {
            var a = fc("dataLayer", []),
                b = fc("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            ve(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            sg(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < Tc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Hg(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var f = c.apply(a, d);
                Ig.push.apply(Ig, d);
                if (300 <
                    this.length)
                    for (I("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof f || f;
                return Og() && h
            };
            Ig.push.apply(Ig, a.slice(0));
            Qg() && G(Pg)
        },
        Qg = function() {
            var a = !0;
            return a
        };
    var Sg = {};
    Sg.qb = new String("undefined");
    var Tg = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Sg.qb ? b : a[d]);
            return c.join("")
        }
    };
    Tg.prototype.toString = function() {
        return this.h("undefined")
    };
    Tg.prototype.valueOf = Tg.prototype.toString;
    Sg.$e = Tg;
    Sg.vc = {};
    Sg.Lf = function(a) {
        return new Tg(a)
    };
    var Ug = {};
    Sg.bh = function(a, b) {
        var c = ed();
        Ug[c] = [a, b];
        return c
    };
    Sg.Xd = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Ug[c];
            if (d && "function" === typeof d[b]) d[b]();
            Ug[c] = void 0
        }
    };
    Sg.qg = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Sg.Rg = function(a) {
        if (a === Sg.qb) return a;
        var b = ed();
        Sg.vc[b] = a;
        return 'google_tag_manager["' + Sc.s + '"].macro(' + b + ")"
    };
    Sg.Dg = function(a, b, c) {
        a instanceof Sg.$e && (a = a.h(Sg.bh(b, c)), b = pa);
        return {
            Hc: a,
            B: b
        }
    };
    var Vg = function(a, b, c) {
            function d(f, h) {
                var k = f[h];
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || nc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        Wg = function(a) {
            Tc.hasOwnProperty("autoEventsSettings") || (Tc.autoEventsSettings = {});
            var b = Tc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Xg = function(a, b, c) {
            Wg(a)[b] = c
        },
        Yg = function(a, b, c, d) {
            var e = Wg(a),
                f = Ga(e, b, d);
            e[b] = c(f)
        },
        Zg = function(a, b, c) {
            var d = Wg(a);
            return Ga(d, b, c)
        };
    var $g = function() {
            for (var a = dc.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = D.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, f, h;
            if (a)
                for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
        },
        ch = function(a, b, c, d) {
            var e = ah(b);
            return Rf(a, e, bh(c), d)
        },
        dh = function(a, b, c, d) {
            var e = "" + ah(c),
                f = bh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        ah = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        bh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var eh = ["1"],
        fh = {},
        jh = function(a, b, c, d) {
            var e = gh(a);
            fh[e] || hh(e, b, c) || (ih(e, $g(), b, c, d), hh(e, b, c))
        };

    function ih(a, b, c, d, e) {
        var f = dh(b, "1", d, c);
        Wf(a, f, c, d, 0 == e ? void 0 : new Date(Fa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function hh(a, b, c) {
        var d = ch(a, b, c, eh);
        d && (fh[a] = d);
        return d
    }

    function gh(a) {
        return (a || "_gcl") + "_au"
    };
    var kh = function() {
        for (var a = [], b = F.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                bd: e[1],
                value: e[2]
            })
        }
        var f = {};
        if (!a || !a.length) return f;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (f[a[h].bd] || (f[a[h].bd] = []), f[a[h].bd].push({
                timestamp: k[1],
                Xf: k[2]
            }))
        }
        return f
    };

    function lh() {
        for (var a = mh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function nh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var mh, oh;

    function ph(a) {
        mh = mh || nh();
        oh = oh || lh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                m = (f & 3) << 4 | h >> 4,
                n = (h & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (n = 64));
            b.push(mh[l], mh[m], mh[n], mh[q])
        }
        return b.join("")
    }

    function qh(a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = oh[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        mh = mh || nh();
        oh = oh || lh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var rh;

    function sh(a, b) {
        if (!a || b === F.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var wh = function() {
            var a = th,
                b = uh,
                c = vh(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                lc(F, "mousedown", d);
                lc(F, "keyup", d);
                lc(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        vh = function() {
            var a = fc("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var xh = /(.*?)\*(.*?)\*(.*)/,
        yh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        zh = /^(?:www\.|m\.|amp\.)+/,
        Ah = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Bh = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        Dh = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(ph(String(d))))
                } var e = b.join("*");
            return ["1", Ch(e), e].join("*")
        },
        Ch = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = rh)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            rh = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ rh[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        Fh = function() {
            return function(a) {
                var b = We(D.location.href),
                    c = b.search.replace("?", ""),
                    d = Se(c, "_gl", !0) || "";
                a.query = Eh(d) || {};
                var e = Ve(b, "fragment").match(Bh);
                a.fragment = Eh(e && e[3] ||
                    "") || {}
            }
        },
        Gh = function() {
            var a = Fh(),
                b = vh();
            b.data || (b.data = {
                query: {},
                fragment: {}
            }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ia(c, d.query), Ia(c, d.fragment));
            return c
        },
        Eh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = xh.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === Ch(k, n)) {
                                    l = !0;
                                    break a
                                } l = !1
                        }
                        if (l) {
                            for (var q = {}, u = k ? k.split("*") : [], p = 0; p < u.length; p += 2) q[u[p]] = qh(u[p + 1]);
                            return q
                        }
                    }
                }
            } catch (t) {}
        };

    function Hh(a, b, c) {
        function d(m) {
            var n = m,
                q = Bh.exec(n),
                u = n;
            if (q) {
                var p = q[2],
                    t = q[4];
                u = q[1];
                t && (u = u + p + t)
            }
            m = u;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Ah.exec(b);
        if (!e) return "";
        var f = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + f + h + k
    }

    function Ih(a, b, c) {
        for (var d = {}, e = {}, f = vh().decorators, h = 0; h < f.length; ++h) {
            var k = f[h];
            (!c || k.forms) && sh(k.domains, b) && (k.fragment ? Ia(e, k.callback()) : Ia(d, k.callback()))
        }
        if (Ja(d)) {
            var l = Dh(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], q = !1, u = 0; u < n.length; u++) {
                            var p = n[u];
                            if ("_gl" === p.name) {
                                p.setAttribute("value", l);
                                q = !0;
                                break
                            }
                        }
                        if (!q) {
                            var t = F.createElement("input");
                            t.setAttribute("type", "hidden");
                            t.setAttribute("name", "_gl");
                            t.setAttribute("value",
                                l);
                            a.appendChild(t)
                        }
                    } else if ("post" === m) {
                        var v = Hh(l, a.action);
                        Qe.test(v) && (a.action = v)
                    }
                }
            } else Jh(l, a, !1)
        }
        if (!c && Ja(e)) {
            var w = Dh(e);
            Jh(w, a, !0)
        }
    }

    function Jh(a, b, c) {
        if (b.href) {
            var d = Hh(a, b.href, void 0 === c ? !1 : c);
            Qe.test(d) && (b.href = d)
        }
    }
    var th = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || Ih(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        uh = function(a) {
            try {
                if (a.action) {
                    var b = Ve(We(a.action), "host");
                    Ih(a, b, !0)
                }
            } catch (c) {}
        },
        Kh = function(a, b, c, d) {
            wh();
            var e = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            vh().decorators.push(e)
        },
        Lh = function() {
            var a = F.location.hostname,
                b = yh.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(zh, ""),
                l = e.replace(zh, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        Mh = function(a, b) {
            return !1 === a ? !1 : a || b || Lh()
        };
    var Nh = {};
    var Oh = /^\w+$/,
        Ph = /^[\w-]+$/,
        Qh = /^~?[\w-]+$/,
        Rh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp"
        };

    function Sh(a) {
        return a && "string" == typeof a && a.match(Oh) ? a : "_gcl"
    }
    var Uh = function() {
        var a = We(D.location.href),
            b = Ve(a, "query", !1, void 0, "gclid"),
            c = Ve(a, "query", !1, void 0, "gclsrc"),
            d = Ve(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Se(e, "gclid", void 0);
            c = c || Se(e, "gclsrc", void 0)
        }
        return Th(b, c, d)
    };

    function Th(a, b, c) {
        var d = {},
            e = function(f, h) {
                d[h] || (d[h] = []);
                d[h].push(f)
            };
        if (void 0 !== a && a.match(Ph)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == Nh.gtm_3pds ? 0 : Nh.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha");
                break;
            case "gp":
                e(a, "gp")
        }
        c && e(c, "dc");
        return d
    }
    var Wh = function(a) {
        var b = Uh();
        Vh(b, a)
    };

    function Vh(a, b, c) {
        function d(q, u) {
            var p = Xh(q, e);
            p && Wf(p, u, h, f, l, !0)
        }
        b = b || {};
        var e = Sh(b.prefix),
            f = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Ja ? 7776E3 : b.Ja;
        c = c || Fa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(q) {
                return ["GCL", m, q].join(".")
            };
        a.aw && (!0 === b.Yh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]));
        a.gp && d("gp", n(a.gp[0]))
    }
    var Zh = function(a, b, c, d, e) {
            for (var f = Gh(), h = Sh(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== Rh[l]) {
                    var m = Xh(l, h),
                        n = f[m];
                    if (n) {
                        var q = Math.min(Yh(n), Fa()),
                            u;
                        b: {
                            for (var p = q, t = Of(m, F.cookie), v = 0; v < t.length; ++v)
                                if (Yh(t[v]) > p) {
                                    u = !0;
                                    break b
                                } u = !1
                        }
                        u || Wf(m, n, c, d, 0 == e ? void 0 : new Date(q + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = {
                prefix: b,
                path: c,
                domain: d
            };
            Vh(Th(f.gclid, f.gclsrc), w)
        },
        Xh = function(a, b) {
            var c = Rh[a];
            if (void 0 !== c) return b + c
        },
        Yh = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function $h(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var ai = function(a, b, c, d, e) {
            if (ua(b)) {
                var f = Sh(e);
                Kh(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = Xh(a[k], f);
                        if (l) {
                            var m = Of(l, F.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        bi = function(a) {
            return a.filter(function(b) {
                return Qh.test(b)
            })
        },
        ci = function(a, b) {
            for (var c = Sh(b && b.prefix), d = {}, e = 0; e < a.length; e++) Rh[a[e]] && (d[a[e]] = Rh[a[e]]);
            za(d, function(f, h) {
                var k = Of(c + h, F.cookie);
                if (k.length) {
                    var l = k[0],
                        m = Yh(l),
                        n = {};
                    n[f] = [$h(l)];
                    Vh(n, b, m)
                }
            })
        };
    var di = /^\d+\.fls\.doubleclick\.net$/;

    function ei(a) {
        var b = We(D.location.href),
            c = Ve(b, "host", !1);
        if (c && c.match(di)) {
            var d = Ve(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function fi(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = ei("gcl" + a);
            if (c) return c.split(".")
        }
        var d = Sh(b);
        if ("_gcl" == d) {
            var e;
            e = Uh()[a] || [];
            if (0 < e.length) return e
        }
        var f = Xh(a, d),
            h;
        if (f) {
            var k = [];
            if (F.cookie) {
                var l = Of(f, F.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = $h(l[m]);
                        n && -1 === r(k, n) && k.push(n)
                    }
                    h = bi(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var gi = function() {
            var a = ei("gac");
            if (a) return decodeURIComponent(a);
            var b = kh(),
                c = [];
            za(b, function(d, e) {
                for (var f = [], h = 0; h < e.length; h++) f.push(e[h].Xf);
                f = bi(f);
                f.length && c.push(d + ":" + f.join(","))
            });
            return c.join(";")
        },
        hi = function(a, b, c, d, e) {
            jh(b, c, d, e);
            var f = fh[gh(b)],
                h = Uh().dc || [],
                k = !1;
            if (f && 0 < h.length) {
                var l = Tc.joined_au = Tc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var q = "https://adservice.google.com/ddm/regclk",
                            u = q = q + "?gclid=" + h[n] + "&auiddc=" + f;
                        dc.sendBeacon && dc.sendBeacon(u) || kc(u);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && f) {
                var p = gh(b),
                    t = fh[p];
                t && ih(p, t, c, d, e)
            }
        };
    var ii;
    if (3 === Sc.ub.length) ii = "g";
    else {
        var ji = "G";
        ji = "g";
        ii = ji
    }
    var ki = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: ii,
            OPT: "o"
        },
        li = function(a) {
            var b = Sc.s.split("-"),
                c = b[0].toUpperCase(),
                d = ki[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Sc.ub.length) {
                var h = void 0;
                h = h || (Rd() ? "s" : "o");
                f = "2" + (h || "w")
            } else f =
                "";
            return f + d + Sc.ub + e
        };
    var mi = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        ni = function(a, b) {
            var c;
            if (2 === b.V) return a("ord", wa(1E11, 1E13)), !0;
            if (3 === b.V) return a("ord", "1"), a("num", wa(1E11, 1E13)), !0;
            if (4 === b.V) return mi(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.V) c = "1";
            else if (6 === b.V) c = b.Wc;
            else return !1;
            mi(c) && a("qty", c);
            mi(b.Db) && a("cost", b.Db);
            mi(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        oi = encodeURIComponent,
        pi = function(a, b) {
            function c(n, q, u) {
                f.hasOwnProperty(n) || (q += "", e += ";" + n + "=" +
                    (u ? q : oi(q)))
            }
            var d = a.Cc,
                e = a.protocol;
            e += a.Wb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + oi(d) + (";type=" + oi(a.Fc)) + (";cat=" + oi(a.cb));
            var f = a.Nf || {};
            za(f, function(n, q) {
                e += ";" + oi(n) + "=" + oi(q + "")
            });
            if (ni(c, a)) {
                mi(a.bc) && c("u", a.bc);
                mi(a.ac) && c("tran", a.ac);
                c("gtm", li());
                !1 === a.nf && c("npa", "1");
                if (a.Bc) {
                    var h = fi("dc", a.Ea);
                    h && h.length && c("gcldc", h.join("."));
                    var k = fi("aw", a.Ea);
                    k && k.length && c("gclaw", k.join("."));
                    var l = gi();
                    l && c("gac", l);
                    jh(a.Ea, void 0, a.Jf, a.Kf);
                    var m = fh[gh(a.Ea)];
                    m && c("auiddc", m)
                }
                mi(a.Sc) && c("prd", a.Sc, !0);
                za(a.dd, function(n, q) {
                    c(n, q)
                });
                e += b || "";
                mi(a.Rb) && c("~oref", a.Rb);
                a.Wb ? jc(e + "?", a.B) : kc(e + "?", a.B, a.w)
            } else G(a.w)
        };
    var qi = ["input", "select", "textarea"],
        ri = ["button", "hidden", "image", "reset", "submit"],
        si = function(a) {
            var b = a.tagName.toLowerCase();
            return !va(qi, function(c) {
                return c === b
            }) || "input" === b && va(ri, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        ti = function(a) {
            return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : qc(a, ["form"], 100)
        },
        ui = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (si(h)) {
                    if (h.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var wi = function(a) {
            var b;
            if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
            else if (a.hasOwnProperty("price")) b = "price";
            else return;
            var c = b,
                d = "/pagead/conversion/" + vi(a.conversion_id) + "/?",
                e = vi(JSON.stringify(a[c])),
                f = "https://www.googletraveladservices.com/travel/flights/clk" + d + c + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = fi("gf", a.cookiePrefix);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++) f += "&gclgf=" + vi(h[k])
            }
            kc(f, a.onSuccess, a.onFailure)
        },
        vi = function(a) {
            return null === a || void 0 === a || 0 === String(a).length ?
                "" : encodeURIComponent(String(a))
        };
    var xi = !!D.MutationObserver,
        yi = void 0,
        zi = function(a) {
            if (!yi) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (xi)(new MutationObserver(function() {
                            for (var e = 0; e < yi.length; e++) G(yi[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            lc(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < yi.length; e++) G(yi[e])
                                }))
                            })
                        }
                };
                yi = [];
                F.body ? b() : G(b)
            }
            yi.push(a)
        };
    var Vi = D.clearTimeout,
        Wi = D.setTimeout,
        R = function(a, b, c) {
            if (Rd()) {
                b && G(b)
            } else return hc(a, b, c)
        },
        Xi = function() {
            return D.location.href
        },
        Yi = function(a) {
            return Ve(We(a), "fragment")
        },
        Zi = function(a) {
            return Ue(We(a))
        },
        S = function(a, b) {
            return Id(a, b || 2)
        },
        $i = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Kg(a)) : d = Kg(a);
            return d
        },
        aj = function(a, b) {
            D[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === D[a] || c && !D[a]) && (D[a] =
                b);
            return D[a]
        },
        bj = function(a, b, c) {
            return Of(a, b, void 0 === c ? !0 : !!c)
        },
        cj = function(a, b) {
            if (Rd()) {
                b && G(b)
            } else jc(a, b)
        },
        dj = function(a) {
            return !!Zg(a, "init", !1)
        },
        ej = function(a) {
            Xg(a, "init", !0)
        },
        fj = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Xc;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            R(Q("https://", "http://", c))
        },
        gj = function(a, b) {
            var c = a[b];
            return c
        };
    var hj = Sg.Dg;
    var ij;
    var Fj = new xa;

    function Gj(a, b) {
        function c(h) {
            var k = We(h),
                l = Ve(k, "protocol"),
                m = Ve(k, "host", !0),
                n = Ve(k, "port"),
                q = Ve(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Hj(a) {
        return Ij(a) ? 1 : 0
    }

    function Ij(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++)
                if (Hj({
                        "function": a["function"],
                        arg0: b,
                        arg1: c[d]
                    })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < f.length; h++)
                                if (b[f[h]]) {
                                    e = b[f[h]](c);
                                    break a
                                }
                        } catch (v) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length -
                    l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= r(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var u = a.ignore_case ? "i" : void 0;
                try {
                    var p = String(c) + u,
                        t = Fj.get(p);
                    t || (t = new RegExp(c, u), Fj.set(p, t));
                    q = t.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Gj(b,
                    c)
        }
        return !1
    };
    var Jj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Kj = {},
        Lj = encodeURI,
        Y = encodeURIComponent,
        Mj = kc;
    var Nj = function(a, b) {
        if (!a) return !1;
        var c = Ve(We(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Oj = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    Kj.rg = function() {
        var a = !1;
        return a
    };
    var al = function() {
        var a = D.gaGlobal = D.gaGlobal || {};
        a.hid = a.hid || wa();
        return a.hid
    };
    var ll = window,
        ml = document,
        nl = function(a) {
            var b = ll._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === ll["ga-disable-" + a]) return !0;
            try {
                var c = ll.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Of("AMP_TOKEN", ml.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return ml.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var ql = function(a) {
        za(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[H.da] || {};
        za(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var ul = function(a, b, c) {
            Hf(b, c, a)
        },
        vl = function(a, b, c) {
            Hf(b, c, a, !0)
        },
        xl = function(a, b) {};

    function wl(a, b) {}
    var yl = function(a) {
            var b = qf(a, "/2");
            return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? Q("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js"
        },
        zl = !1,
        Al = [],
        Bl = ["aw", "dc"],
        Cl = function(a) {
            var b = D.google_trackConversion,
                c = a.gtm_onFailure;
            "function" == typeof b ? b(a) || c() : c()
        },
        Dl = function() {
            for (; 0 < Al.length;) Cl(Al.shift())
        },
        El = function(a) {
            if (!zl) {
                zl = !0;
                Ee();
                var b = function() {
                    Dl();
                    Al = {
                        push: Cl
                    }
                };
                Rd() ? b() : hc(a, b, function() {
                    Dl();
                    zl = !1
                })
            }
        },
        Fl = function(a) {
            if (a) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && b.push({
                        item_id: d.id,
                        quantity: d.quantity,
                        value: d.price,
                        start_date: d.start_date,
                        end_date: d.end_date
                    })
                }
                return b
            }
        },
        Gl = function(a, b, c, d) {
            var e = Pc(a),
                f = b == H.D,
                h = e.m[0],
                k = e.m[1],
                l = void 0 !== k,
                m = function(W) {
                    return d.getWithConfig(W)
                },
                n = !1 !== m(H.za),
                q = m(H.ya) || m(H.P),
                u = m(H.W),
                p = m(H.Y),
                t = yl(m(H.ia));
            if (f) {
                var v = m(H.ma) || {};
                if (n) {
                    Mh(v[H.Sa], !!v[H.C]) && Zh(Bl, q, void 0, u, p);
                    var w = {
                        prefix: q,
                        domain: u,
                        Ja: p
                    };
                    Wh(w);
                    ci(["aw", "dc"], w)
                }
                v[H.C] &&
                    ai(Bl, v[H.C], v[H.Va], !!v[H.Ta], q);
                var y = !1;
                y ? de(e, d) : de(e)
            }
            var x = !1 === m(H.yd) || !1 === m(H.Ya);
            if (!f || !l && !x)
                if (!0 === m(H.zd) && (l = !1), !1 !== m(H.T) || l) {
                    var z = {
                        google_conversion_id: h,
                        google_remarketing_only: !l,
                        onload_callback: d.B,
                        gtm_onFailure: d.w,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: k,
                        google_conversion_language: m(H.Ca),
                        google_conversion_value: m(H.X),
                        google_conversion_currency: m(H.ba),
                        google_conversion_order_id: m(H.Za),
                        google_user_id: m(H.$a),
                        google_conversion_page_url: m(H.Wa),
                        google_conversion_referrer_url: m(H.Xa),
                        google_gtm: li(),
                        google_transport_url: qf(m(H.ia), "/")
                    };
                    z.google_restricted_data_processing = m(H.kc);
                    Rd() && (z.opt_image_generator = function() {
                        return new Image
                    }, z.google_enable_display_cookie_match = !1);
                    !1 === m(H.T) && (z.google_allow_ad_personalization_signals = !1);
                    z.google_read_gcl_cookie_opt_out = !n;
                    n && q && (z.google_gcl_cookie_prefix = q);
                    var C = function() {
                        var W = m(H.Eb),
                            T = {
                                event: b
                            };
                        if (ua(W)) {
                            I("GTM", 26);
                            for (var na = 0; na < W.length; ++na) {
                                var ha = W[na],
                                    N = m(ha);
                                void 0 !== N && (T[ha] = N)
                            }
                            return T
                        }
                        var L = d.eventModel;
                        if (!L) return null;
                        B(L, T);
                        for (var P = 0; P < H.vd.length; ++P) delete T[H.vd[P]];
                        return T
                    }();
                    C && (z.google_custom_params = C);
                    !l && m(H.M) && (z.google_gtag_event_data = {
                        items: m(H.M),
                        value: m(H.X)
                    });
                    if (l && b == H.la) {
                        z.google_conversion_merchant_id = m(H.Ed);
                        z.google_basket_feed_country =
                            m(H.Cd);
                        z.google_basket_feed_language = m(H.Dd);
                        z.google_basket_discount = m(H.Ad);
                        z.google_basket_transaction_type = b;
                        z.google_disable_merchant_reported_conversions = !0 === m(H.Hd);
                        Rd() && (z.google_disable_merchant_reported_conversions = !0);
                        var A = Fl(m(H.M));
                        A && (z.google_conversion_items = A)
                    }
                    var E = function(W, T) {
                        void 0 != T && "" !== T && (z.google_additional_conversion_params = z.google_additional_conversion_params || {}, z.google_additional_conversion_params[W] = T)
                    };
                    l && ("boolean" === typeof m(H.cc) && E("vdnc", m(H.cc)), E("vdltv",
                        m(H.Fd)));
                    var J = !0;
                    J && Al.push(z)
                } El(t)
        };
    var Hl = function(a, b, c, d, e, f) {
            var h = {
                config: a,
                gtm: li()
            };
            c && (jh(d, void 0, e, f), h.auiddc = fh[gh(d)]);
            b && (h.loadInsecure = b);
            void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
            D.__dc_ns_processor.push(h);
            hc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        },
        Il = function(a, b, c) {
            var d = /^u([1-9]\d?|100)$/,
                e = a.getWithConfig(H.uh) || {},
                f = Nd(b, c);
            var h = {},
                k = {};
            if (Qa(e))
                for (var l in e)
                    if (e.hasOwnProperty(l) &&
                        d.test(l)) {
                        var m = e[l];
                        g(m) && (h[l] = m)
                    } for (var n = 0; n < f.length; n++) {
                var q = f[n];
                d.test(q) && (h[q] = q)
            }
            for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u]));
            return k
        },
        Jl = function(a) {
            function b(l, m, n) {
                void 0 !== n && 0 !== (n + "").length && d.push(l + m + ":" + c(n + ""))
            }
            var c = encodeURIComponent,
                d = [],
                e = a(H.M) || [];
            if (ua(e))
                for (var f = 0; f < e.length; f++) {
                    var h = e[f],
                        k = f + 1;
                    b("i", k, h.id);
                    b("p", k, h.price);
                    b("q", k, h.quantity);
                    b("c", k, a(H.sh));
                    b("l", k, a(H.Ca))
                }
            return d.join("|")
        },
        Kl = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                } [(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    N: b[3] ? a : "",
                    ef: b[1],
                    cf: b[3] || "",
                    cb: b[4] || "",
                    V: c
                }
            }
        },
        Ml = function(a, b, c, d) {
            var e = Kl(a);
            if (e) {
                var f = function(M) {
                        return d.getWithConfig(M)
                    },
                    h = !1 !== f(H.za),
                    k = f(H.ya) || f(H.P),
                    l = f(H.W),
                    m = f(H.Y),
                    n = f(H.Ah),
                    q = 3 === Sd();
                if (b === H.D) {
                    var u = f(H.ma) || {},
                        p = f(H.Oa),
                        t = void 0 === p ? !0 : !!p;
                    if (h) {
                        if (Mh(u[H.Sa], !!u[H.C])) {
                            Zh(Ll, k, void 0, l,
                                m);
                        }
                        var v = {
                            prefix: k,
                            domain: l,
                            Ja: m
                        };
                        Wh(v);
                        ci(Ll, v);
                        hi(t, k, void 0, l, m)
                    }
                    if (u[H.C]) {
                        ai(Ll, u[H.C], u[H.Va], !!u[H.Ta], k);
                    }
                    if (n && n.exclusion_parameters && n.engines)
                        if (Rd()) {} else Hl(n, q, h, k, l, m);
                    G(d.B)
                } else {
                    var w = {},
                        y = f(H.wh);
                    if (Qa(y))
                        for (var x in y)
                            if (y.hasOwnProperty(x)) {
                                var z = y[x];
                                void 0 !== z && null !==
                                    z && (w[x] = z)
                            } var C = "";
                    if (5 === e.V || 6 === e.V) C = Jl(f);
                    var A = Il(d, e.containerId, e.N),
                        E = !0 === f(H.Xg);
                    if (Rd() && E) {
                        E = !1
                    }
                    var J = {
                        cb: e.cb,
                        Bc: h,
                        Jf: l,
                        Kf: m,
                        Ea: k,
                        Db: f(H.X),
                        V: e.V,
                        Nf: w,
                        Cc: e.ef,
                        Fc: e.cf,
                        w: d.w,
                        B: d.B,
                        Rb: Ue(We(D.location.href)),
                        Sc: C,
                        protocol: q ? "http:" : "https:",
                        Wc: f(H.Ne),
                        Wb: E,
                        sessionId: f(H.Mb),
                        ac: void 0,
                        transactionId: f(H.Za),
                        bc: void 0,
                        dd: A,
                        nf: !1 !== f(H.T)
                    };
                    pi(J)
                }
            } else G(d.w)
        },
        Ll = ["aw", "dc"];
    var Nl = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        Pl = function(a, b, c, d) {
            var e = function(w) {
                    return d.getWithConfig(w)
                },
                f = Pc(a).m[0],
                h = !1 !== e(H.za),
                k = e(H.ya) || e(H.P),
                l = e(H.W),
                m = e(H.Y);
            if (b === H.D) {
                if (h) {
                    var n = {
                        prefix: k,
                        domain: l,
                        Ja: m
                    };
                    Wh(n);
                    ci(["aw", "dc"], n)
                }
                G(d.B)
            } else {
                var q = {
                        conversion_id: f,
                        onFailure: d.w,
                        onSuccess: d.B,
                        conversionLinkerEnabled: h,
                        cookiePrefix: k
                    },
                    u = Nl.test(D.location.href);
                if (b !== H.la) G(d.w);
                else {
                    var t = {
                            partner_id: f,
                            trip_type: e(H.Ue),
                            total_price: e(H.X),
                            currency: e(H.ba),
                            is_direct_booking: u,
                            flight_segment: Ol(e(H.M))
                        },
                        v = e(H.Qd);
                    v && "object" === typeof v && (t.passengers_total = v.total, t.passengers_adult = v.adult, t.passengers_child = v.child, t.passengers_infant_in_seat = v.infant_in_seat, t.passengers_infant_in_lap = v.infant_in_lap);
                    q.conversion_data = t;
                    wi(q)
                }
            }
        },
        Ol = function(a) {
            if (a) {
                for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                    var e = a[d];
                    !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                        cabin: e.travel_class,
                        fare_product: e.fare_product,
                        booking_code: e.booking_code,
                        flight_number: e.flight_number,
                        origin: e.origin,
                        destination: e.destination,
                        departure_date: e.start_date
                    }, c++)
                }
                return b
            }
        };
    var Ul = function(a, b, c, d) {
            var e = Pc(a),
                f = function(t) {
                    return d.getWithConfig(t)
                },
                h = !1 !== f(H.za),
                k = f(H.ya) || f(H.P),
                l = f(H.W),
                m = f(H.Y);
            if (b === H.D) {
                var n = f(H.ma) || {};
                if (h) {
                    Mh(n[H.Sa], !!n[H.C]) && Zh(Ql, k, void 0, l, m);
                    var q = {
                        prefix: k,
                        domain: l,
                        Ja: m
                    };
                    Wh(q);
                    ci(["aw", "dc"], q)
                }
                if (n[H.C]) {
                    ai(Ql, n[H.C], n[H.Va], !!n[H.Ta], k);
                }
                G(d.B)
            } else {
                var u, p;
                b === H.la ? u = Rl(f(H.Za), f(H.X), f(H.ba), f(H.M)) : b === H.Ra && (p = Sl(e.m[0], f(H.X), f(H.Od), f(H.ba),
                    f(H.M)));
                void 0 != u || void 0 != p ? Tl(e.m[0], u, p, h, k, d.B, d.w) : G(d.w)
            }
        },
        Rl = function(a, b, c, d) {
            var e = {};
            if (g(a) || Vl(a)) e.eg = String(a);
            g(c) && (e.hg = c);
            if (g(b) || Vl(b)) e.jg = e.dg = String(b);
            if (!ua(d) || 0 === d.length) return e;
            var f = d[0];
            if (!Qa(f)) return e;
            if (g(f.id) || Vl(f.id)) e.ig = String(f.id);
            g(f.start_date) && (e.fg = f.start_date);
            g(f.end_date) && (e.gg = f.end_date);
            return e
        },
        Tl = function(a, b, c, d, e, f, h) {
            if (/^\d+$/.test(a)) {
                var k = Wl(b, c);
                kc(Xl(a, k, d, e), f, h)
            } else G(h)
        },
        Sl = function(a, b, c, d, e) {
            function f(l, m) {
                void 0 === l &&
                    (l = 0);
                void 0 === m && (m = "USD");
                if (g(l)) return m + l;
                if (Vl(l)) return m + String(l)
            }
            var h = {};
            if (/^\d+$/.test(a)) h.Og = a;
            else return h;
            g(d) && (h.currency = d);
            if (g(b) || Vl(b)) h.uf = f(b, h.currency);
            if (g(c) || Vl(c)) h.nh = f(c, h.currency);
            if (g(b) || Vl(b)) h.Rf = f(b, h.currency);
            g("LANDING_PAGE") && (h.Lg = "LANDING_PAGE");
            if (!ua(e) || 0 == e.length) return h;
            var k = e[0];
            if (!Qa(k)) return h;
            if (g(k.price) || Vl(k.price)) h.ph = f(k.price, h.currency);
            g(k.id) ? h.qe = k.id : Vl(k.id) && (h.qe = String(k.id));
            g(k.start_date) && (h.Ff = k.start_date);
            g(k.end_date) &&
                (h.Gf = k.end_date);
            Vl(k.occupancy) && (h.df = k.occupancy);
            g(k.room_id) && (h.fh = k.room_id);
            g(k.rate_rule_id) && (h.Yg = k.rate_rule_id);
            return h
        },
        Xl = function(a, b, c, d) {
            var e = encodeURIComponent(a),
                f = encodeURIComponent(b),
                h = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + e + "/?data=" + f;
            c && (h += fi("ha", d).map(function(k) {
                return "&gclha=" + encodeURIComponent(k)
            }).join(""));
            return h
        },
        Wl = function(a, b) {
            function c(e, f) {
                void 0 !== f && d.push(e + "=" + f)
            }
            var d = [];
            void 0 !== a ? (c("hct_base_price", a.dg), c("hct_booking_xref",
                a.eg), c("hct_checkin_date", a.fg), c("hct_checkout_date", a.gg), c("hct_currency_code", a.hg), c("hct_partner_hotel_id", a.ig), c("hct_total_price", a.jg)) : void 0 !== b && (c("partner_id", b.Og), c("partner_hotel_id", b.qe), c("check_in_date", b.Ff), c("check_out_date", b.Gf), c("base_price_value_string", b.uf), c("tax_price_value_string", b.nh), c("total_price_value_string", b.ph), c("display_price_value_string", b.Rf), c("display_price_description_string", b.Mh), c("page_type", b.Lg), c("adults", b.df), c("room_id", b.fh), c("rate_rule_id",
                b.Yg));
            return d.join(";")
        },
        Vl = function(a) {
            return "number" === typeof a
        },
        Ql = ["ha"];
    var km = function(a, b, c, d) {
            var e = "https://www.google-analytics.com/analytics.js",
                f = Le();
            if (qa(f)) {
                var h = "gtag_" + a.split("-").join("_"),
                    k = function(x) {
                        var z = [].slice.call(arguments, 0);
                        z[0] = h + "." + z[0];
                        f.apply(window, z)
                    },
                    l = function() {
                        var x = function(E, J) {
                                for (var M = 0; J && M < J.length; M++) k(E, J[M])
                            },
                            z = bm(b, d);
                        if (z) {
                            var C = z.action;
                            if ("impressions" === C) x("ec:addImpression", z.lg);
                            else if ("promo_click" === C || "promo_view" === C) {
                                var A = z.Tc;
                                x("ec:addPromo", z.Tc);
                                A && 0 < A.length && "promo_click" === C && k("ec:setAction", C)
                            } else x("ec:addProduct",
                                z.Ka), k("ec:setAction", C, z.ab)
                        }
                    },
                    m = function() {
                        if (Rd()) {} else {
                            var x = d.getWithConfig(H.Je);
                            x && (k("require", x, {
                                dataLayer: "dataLayer"
                            }), k("require", "render"))
                        }
                    },
                    n = cm(a, h, b, d);
                dm(h, n.Fa) && (f(function() {
                    Je() && Je().remove(h)
                }), em[h] = !1);
                f("create", a, n.Fa);
                (function() {
                    var x = d.getWithConfig("custom_map");
                    f(function() {
                        if (Qa(x)) {
                            var z = n.ja,
                                C = Je().getByName(h),
                                A;
                            for (A in x)
                                if (x.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != x[A]) {
                                    var E = C.get(fm(x[A]));
                                    gm(z, A, E)
                                }
                        }
                    })
                })();
                (function(x) {
                    if (x) {
                        var z = {};
                        if (Qa(x))
                            for (var C in hm) hm.hasOwnProperty(C) && im(hm[C], C, x[C], z);
                        k("require", "linkid", z)
                    }
                })(n.linkAttribution);
                var u = n[H.ma];
                if (u && u[H.C]) {
                    var p = u[H.Va];
                    Me(h + ".", u[H.C], void 0 === p ? !!u.use_anchor : "fragment" === p, !!u[H.Ta])
                }
                var t = function(x, z, C) {
                    C && (z = "" + z);
                    n.ja[x] = z
                };
                if (b === H.Zc) m(), k("send", "pageview", n.ja);
                else if (b === H.D) {
                    m();
                    var v = !1;
                    v ? de(a, d) : de(a);
                    0 != n.sendPageView && k("send", "pageview", n.ja)
                } else "screen_view" === b ? k("send", "screenview", n.ja) : "timing_complete" === b ? (t("timingCategory",
                    n.eventCategory, !0), t("timingVar", n.name, !0), t("timingValue", Aa(n.value)), void 0 !== n.eventLabel && t("timingLabel", n.eventLabel, !0), k("send", "timing", n.ja)) : "exception" === b ? k("send", "exception", n.ja) : "optimize.callback" !== b && (0 <= r([H.Xc, "select_content", H.Ra, H.xb, H.yb, H.Qa, "set_checkout_option", H.la, H.zb, "view_promotion", "checkout_progress"], b) && (k("require", "ec", "ec.js"), l()), t("eventCategory", n.eventCategory, !0), t("eventAction", n.eventAction || b, !0), void 0 !== n.eventLabel && t("eventLabel", n.eventLabel,
                    !0), void 0 !== n.value && t("eventValue", Aa(n.value)), k("send", "event", n.ja));
                if (!jm) {
                    jm = !0;
                    Ee();
                    var w = d.w,
                        y = function() {
                            Je().loaded || w()
                        };
                    Rd() ? G(y) : hc(e, y, w)
                }
            } else G(d.w)
        },
        jm, em = {},
        lm = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac"
        },
        mm = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignTerm",
                content: "campaignContent",
                id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        },
        nm = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        },
        hm = {
            cookie_name: 1,
            cookie_expires: "duration",
            levels: 1
        },
        om = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1
        },
        im = function(a, b, c, d) {
            if (void 0 !== c)
                if (om[b] && (c = Ba(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[fm(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        fm = function(a) {
            return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        pm = function(a) {
            var b = "general";
            0 <= r([H.wd, H.xb, H.xd, H.Qa, "checkout_progress", H.la, H.zb,
                H.yb, "set_checkout_option"
            ], a) ? b = "ecommerce" : 0 <= r("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        gm = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        qm = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        cm = function(a, b,
            c, d) {
            var e = function(A) {
                    return d.getWithConfig(A)
                },
                f = {},
                h = {},
                k = {},
                l = qm(e(H.De));
            l && gm(h, "exp", l);
            var m = e("custom_map");
            if (Qa(m))
                for (var n in m)
                    if (m.hasOwnProperty(n) && /^(dimension|metric)\d+$/.test(n) && void 0 != m[n]) {
                        var q = e(String(m[n]));
                        void 0 !== q && gm(h, n, q)
                    } var u = Nd(a);
            for (var p = 0; p < u.length; ++p) {
                var t = u[p],
                    v = e(t);
                if (nm.hasOwnProperty(t)) im(nm[t], t, v, f);
                else if (mm.hasOwnProperty(t)) im(mm[t],
                    t, v, h);
                else if (lm.hasOwnProperty(t)) im(lm[t], t, v, k);
                else if (/^(dimension|metric|content_group)\d+$/.test(t)) im(1, t, v, h);
                else if ("developer_id" === t) {} else t === H.P && 0 > r(u, H.Cb) && (k.cookieName = v + "_ga")
            }
            gm(k, "cookieDomain", "auto");
            gm(h, "forceSSL", !0);
            gm(f, "eventCategory", pm(c));
            0 <= r(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && gm(h, "nonInteraction",
                !0);
            "login" === c || "sign_up" === c || "share" === c ? gm(f, "eventLabel", e(H.Ie)) : "search" === c || "view_search_results" === c ? gm(f, "eventLabel", e(H.Qe)) : "select_content" === c && gm(f, "eventLabel", e(H.oh));
            var y = f[H.ma] || {},
                x = y[H.Sa];
            x || 0 != x && y[H.C] ? k.allowLinker = !0 : !1 === x && gm(k, "useAmpClientId", !1);
            if (!1 === e(H.Zg) || !1 === e(H.T) || !1 === e(H.ic)) h.allowAdFeatures = !1;
            !1 === e(H.T) && I("GTM", 27);
            k.name = b;
            h["&gtm"] = li(!0);
            h.hitCallback = d.B;
            var z = e(H.He) || Id("gtag.remote_config." + a + ".url", 2),
                C = e(H.Fe) || Id("gtag.remote_config." +
                    a + ".dualId", 2);
            z && null != ec && (k._x_19 = z);
            C && (k._x_20 = C);
            f.ja = h;
            f.Fa = k;
            return f
        },
        bm = function(a, b) {
            function c(v) {
                var w = B(v);
                w.list = v.list_name;
                w.listPosition = v.list_position;
                w.position = v.list_position || v.creative_slot;
                w.creative = v.creative_name;
                return w
            }

            function d(v) {
                for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y]));
                return w.length ? w : void 0
            }

            function e(v) {
                return {
                    id: f(H.Za),
                    affiliation: f(H.Bh),
                    revenue: f(H.X),
                    tax: f(H.Od),
                    shipping: f(H.Ce),
                    coupon: f(H.Ch),
                    list: f(H.ed) || v
                }
            }
            for (var f = function(v) {
                        return b.getWithConfig(v)
                    },
                    h = f(H.M), k, l = 0; h && l < h.length && !(k = h[l][H.ed]); l++);
            var m = f("custom_map");
            if (Qa(m))
                for (var n = 0; h && n < h.length; ++n) {
                    var q = h[n],
                        u;
                    for (u in m) m.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != m[u] && gm(q, u, q[m[u]])
                }
            var p = null,
                t = f(H.Ae);
            a === H.la || a === H.zb ? p = {
                    action: a,
                    ab: e(),
                    Ka: d(h)
                } : a === H.xb ? p = {
                    action: "add",
                    Ka: d(h)
                } : a === H.yb ? p = {
                    action: "remove",
                    Ka: d(h)
                } : a === H.Ra ? p = {
                    action: "detail",
                    ab: e(k),
                    Ka: d(h)
                } : a === H.Xc ? p = {
                    action: "impressions",
                    lg: d(h)
                } : "view_promotion" === a ? p = {
                    action: "promo_view",
                    Tc: d(t)
                } :
                "select_content" === a && t && 0 < t.length ? p = {
                    action: "promo_click",
                    Tc: d(t)
                } : "select_content" === a ? p = {
                    action: "click",
                    ab: {
                        list: f(H.ed) || k
                    },
                    Ka: d(h)
                } : a === H.Qa || "checkout_progress" === a ? p = {
                    action: "checkout",
                    Ka: d(h),
                    ab: {
                        step: a === H.Qa ? 1 : f(H.Md),
                        option: f(H.Ld)
                    }
                } : "set_checkout_option" === a && (p = {
                    action: "checkout_option",
                    ab: {
                        step: f(H.Md),
                        option: f(H.Ld)
                    }
                });
            p && (p.Kh = f(H.ba));
            return p
        },
        rm = {},
        dm = function(a, b) {
            var c = rm[a];
            rm[a] = B(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                    c[e] !== b[e]) return !0;
            return !1
        };
    var Z = {
        a: {}
    };



    Z.a.gtagha = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = $c,
                    f = S("eventModel");
                if (a) {
                    Gf(d.id, Ul);
                    if (e === H.D) {
                        var h = S("gtag.targets." + d.id);
                        If(h, d.id)
                    } else Hf(e, f, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = zf(yf(tf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) {
                        return Kd(l, d.containerId, d.id)
                    };
                    Ul(d.id, e, (new Date).getTime(),
                        k)
                }
            };
            Z.__gtagha = b;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0;
        }();
    Z.a.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(Qd(a.vtp_gtmEventId, "event"))
            })
        }();

    Z.a.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = S(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();




    Z.a.gtagaw = ["google"],
        function() {
            var a = !1;
            a = !0;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = void 0 !== d.m[1] ? d.id : void 0,
                    f = $c,
                    h = S("eventModel");
                if (a) {
                    Gf(c.vtp_conversionId.id, Gl);
                    if (f === H.D) {
                        var k = S("gtag.targets." + d.id);
                        If(k, c.vtp_conversionId.id)
                    } else Hf(f, h, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var l = zf(yf(tf(h), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    l.getWithConfig = function(m) {
                        return Kd(m,
                            d.containerId, e)
                    };
                    Gl(c.vtp_conversionId.id, f, (new Date).getTime(), l)
                }
            };
            Z.__gtagaw = b;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0;
        }();

    Z.a.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.b = "get";
                Z.__get.g = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                if (a.vtp_isAutoTag) {
                    var b = String(a.vtp_trackingId),
                        c = $c || "",
                        d = {};
                    if (c === H.D) {
                        var e = S("gtag.targets." + b);
                        B(e, d);
                        d[H.na] = !0;
                        If(d, b)
                    } else {
                        var f = S("eventModel");
                        B(f, d);
                        d[H.na] = !0;
                        Hf(c, d, b)
                    }
                } else {
                    var h = a.vtp_settings;
                    (a.vtp_deferrable ? vl : ul)(String(h.streamId), String(a.vtp_eventName), h.eventParameters || {})
                }
                a.vtp_gtmOnSuccess()
            })
        }();


    Z.a.gtagfl = [],
        function() {
            function a(d) {
                var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d);
                if (e) return {
                    containerId: "DC-" + e[1],
                    N: e[3] && d
                }
            }
            var b = !1;
            var c = function(d) {
                var e = d.vtp_targetId,
                    f = $c,
                    h = S("eventModel");
                if (b) {
                    Gf(e, Ml);
                    if (f === H.D) {
                        var k = S("gtag.targets." + e);
                        If(k, e)
                    } else Hf(f, h, e);
                    G(d.vtp_gtmOnSuccess)
                } else {
                    var l = a(e);
                    if (l) {
                        var m = zf(yf(tf(h), d.vtp_gtmOnSuccess),
                            d.vtp_gtmOnFailure);
                        m.getWithConfig = function(n) {
                            return Kd(n, l.containerId, l.N)
                        };
                        Ml(e, f, (new Date).getTime(), m)
                    } else G(d.vtp_gtmOnFailure)
                }
            };
            Z.__gtagfl = c;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0;
        }();


    Z.a.gtaggf = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = $c,
                    f = S("eventModel");
                if (a) {
                    Gf(d.id, Pl);
                    if (e === H.D) {
                        var h = S("gtag.targets." + d.id);
                        If(h, d.id)
                    } else Hf(e, f, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = zf(yf(tf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) {
                        return Kd(l, d.containerId, d.id)
                    };
                    Pl(d.id, e,
                        (new Date).getTime(), k)
                }
            };
            Z.__gtaggf = b;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0;
        }();




    Z.a.gtagua = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_trackingId,
                    e = $c,
                    f = S("eventModel");
                if (a) {
                    Gf(d, km);
                    if (e === H.D) {
                        var h = S("gtag.targets." + d);
                        If(h, d)
                    } else Hf(e, f, d);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = zf(yf(tf(f), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) {
                        return Kd(l, d, void 0)
                    };
                    km(d, e, (new Date).getTime(), k)
                }
            };
            Z.__gtagua =
                b;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride = 0;
        }();


    var sm = {};
    sm.macro = function(a) {
        if (Sg.vc.hasOwnProperty(a)) return Sg.vc[a]
    }, sm.onHtmlSuccess = Sg.Xd(!0), sm.onHtmlFailure = Sg.Xd(!1);
    sm.dataLayer = Jd;
    sm.callback = function(a) {
        bd.hasOwnProperty(a) && qa(bd[a]) && bd[a]();
        delete bd[a]
    };

    function tm() {
        Tc[Sc.s] = sm;
        Ia(dd, Z.a);
        yb = yb || Sg;
        zb = me
    }

    function um() {
        Nh.gtm_3pds = !0;
        Tc = D.google_tag_manager = D.google_tag_manager || {};
        if (Tc[Sc.s]) {
            var a = Tc.zones;
            a && a.unregisterChild(Sc.s)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) qb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) tb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k <
                h.length; k++) sb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], q = {}, u = 0; u < n.length; u++) q[n[u][0]] = Array.prototype.slice.call(n[u], 1);
                rb.push(q)
            }
            wb = Z;
            xb = Hj;
            tm();
            Rg();
            qe = !1;
            re = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) te();
            else {
                lc(F, "DOMContentLoaded", te);
                lc(F, "readystatechange", te);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var p = !0;
                    try {
                        p = !D.frameElement
                    } catch (y) {}
                    p && ue()
                }
                lc(D, "load", te)
            }
            pg = !1;
            "complete" === F.readyState ? rg() : lc(D,
                "load", rg);
            a: {
                if (!yd) break a;D.setInterval(zd, 864E5);
            }
            Zc = (new Date).getTime();
            sm.bootstrap = Zc;
        }
    }
    um();

})()