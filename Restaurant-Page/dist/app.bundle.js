(() => {
  'use strict';
  var n = {
      919: (n, e, t) => {
        t.d(e, { A: () => p });
        var o = t(354),
          r = t.n(o),
          a = t(314),
          i = t.n(a),
          A = t(417),
          s = t.n(A),
          c = new URL(t(431), t.b),
          l = i()(r());
        l.push([
          n.id,
          '@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);',
        ]);
        var f = s()(c);
        l.push([
          n.id,
          `*,*::before,*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --header-height: 10vh;\n  --ff-primary: Inter, sans-serif;\n  --content-padding: calc(var(--header-height) + 3rem);\n}\n\n/* @font-face {\n  font-family: Inter;\n  src: url('../inter-variablefont_slntwght-webfont.woff2') format('woff2'), url('../inter-variablefont_slntwght-webfont.woff') format('woff');\n  font-weight: 200;\n} */\n\n.inter-x {\n  font-family: "Inter", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 900;\n  font-style: normal;\n  font-variation-settings:\n    "slnt" 0;\n}\n\nbody {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${f});\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100svh;\n  background-position: center;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--header-height);\n  position: fixed;\n  width: 100%;\n}\n\nnav {\n  display: flex;\n  gap: 2rem;\n}\n\nbutton {\n  position: relative;\n  background-color: transparent;\n  color: #b4b4b4;\n  border: none;\n  border-radius: .2rem;\n  padding: .8rem 2.8rem;\n  cursor: pointer;\n  outline: 0px solid white;\n  outline-offset: 0px;\n  transition: all .1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  font-size: 1.2rem;\n  font-family: var(--ff-primary);\n  font-weight: 400;\n}\n\nbutton:hover {\n  color: #fff;\n}\n\n button.active::after{\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: white;\n  transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1); \n  backdrop-filter: blur(5px);\n}\n\nbutton.active, button:focus-visible {\n  color: white;\n}\n\n\n\n.content {\n  min-height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .hero {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    h1 {\n      color: white;\n      font-size: 3.8rem;\n      max-width: 30ch;\n    }\n\n    .dress {\n      color: #b4b4b4;\n      font-size: 1.5rem;\n    }\n  }\n\n  .contain {\n    width: 90%;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n\n  .menuList {\n    align-self: baseline;\n    padding-top: var(--content-padding);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 2rem;\n    list-style: none;\n\n    li {\n      border-radius: 1rem;\n      padding: .5rem;\n      backdrop-filter: blur(15px);\n      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    img{\n      max-width: 100%;\n      height: 200px;\n      width: 100%;\n      object-fit: cover;\n      border-radius: .5rem;\n    }\n\n    .menuContent {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: .5rem;\n    }\n\n    h4{\n      font-family: var(--ff-primary);\n      font-weight: 300;\n      letter-spacing: .055rem;\n      text-transform: capitalize;\n      color: white;\n    }\n\n    span{\n      font-family: var(--ff-primary);\n      font-weight: 900;\n      color: orange;\n      font-size: 1.2rem;\n    }\n  }\n\n  .about {\n    padding-top: var(--content-padding);\n    min-height: 100svh;\n    color: white;\n    font-size: 1.2rem;\n    line-height: 1.7;\n    font-family: var(--ff-primary);\n\n    p {\n      backdrop-filter: blur(10px);\n    }\n  }\n}\n\n`,
          '',
          {
            version: 3,
            sources: ['webpack://./src/styles/style.css'],
            names: [],
            mappings:
              'AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;EAC/B,oDAAoD;AACtD;;AAEA;;;;GAIG;;AAEH;EACE,gCAAgC;EAChC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB;YACU;AACZ;;AAEA;EACE,uHAAqH;EACrH,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;EAClB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,cAAc;EACd,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,eAAe;EACf,wBAAwB;EACxB,mBAAmB;EACnB,sDAAsD;EACtD,iBAAiB;EACjB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;CAEC;EACC,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,uDAAuD;EACvD,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd;;;;AAIA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB;IACE,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;MACE,YAAY;MACZ,iBAAiB;MACjB,eAAe;IACjB;;IAEA;MACE,cAAc;MACd,iBAAiB;IACnB;EACF;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,oBAAoB;IACpB,mCAAmC;IACnC,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,SAAS;IACT,gBAAgB;;IAEhB;MACE,mBAAmB;MACnB,cAAc;MACd,2BAA2B;MAC3B,0CAA0C;;MAE1C,aAAa;MACb,sBAAsB;MACtB,8BAA8B;IAChC;;IAEA;MACE,eAAe;MACf,aAAa;MACb,WAAW;MACX,iBAAiB;MACjB,oBAAoB;IACtB;;IAEA;MACE,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,UAAU;IACZ;;IAEA;MACE,8BAA8B;MAC9B,gBAAgB;MAChB,uBAAuB;MACvB,0BAA0B;MAC1B,YAAY;IACd;;IAEA;MACE,8BAA8B;MAC9B,gBAAgB;MAChB,aAAa;MACb,iBAAiB;IACnB;EACF;;EAEA;IACE,mCAAmC;IACnC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,8BAA8B;;IAE9B;MACE,2BAA2B;IAC7B;EACF;AACF',
            sourcesContent: [
              "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');\n\n*,*::before,*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --header-height: 10vh;\n  --ff-primary: Inter, sans-serif;\n  --content-padding: calc(var(--header-height) + 3rem);\n}\n\n/* @font-face {\n  font-family: Inter;\n  src: url('../inter-variablefont_slntwght-webfont.woff2') format('woff2'), url('../inter-variablefont_slntwght-webfont.woff') format('woff');\n  font-weight: 200;\n} */\n\n.inter-x {\n  font-family: \"Inter\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 900;\n  font-style: normal;\n  font-variation-settings:\n    \"slnt\" 0;\n}\n\nbody {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('../assets/images/dumplings.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100svh;\n  background-position: center;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--header-height);\n  position: fixed;\n  width: 100%;\n}\n\nnav {\n  display: flex;\n  gap: 2rem;\n}\n\nbutton {\n  position: relative;\n  background-color: transparent;\n  color: #b4b4b4;\n  border: none;\n  border-radius: .2rem;\n  padding: .8rem 2.8rem;\n  cursor: pointer;\n  outline: 0px solid white;\n  outline-offset: 0px;\n  transition: all .1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  font-size: 1.2rem;\n  font-family: var(--ff-primary);\n  font-weight: 400;\n}\n\nbutton:hover {\n  color: #fff;\n}\n\n button.active::after{\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: white;\n  transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1); \n  backdrop-filter: blur(5px);\n}\n\nbutton.active, button:focus-visible {\n  color: white;\n}\n\n\n\n.content {\n  min-height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .hero {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    h1 {\n      color: white;\n      font-size: 3.8rem;\n      max-width: 30ch;\n    }\n\n    .dress {\n      color: #b4b4b4;\n      font-size: 1.5rem;\n    }\n  }\n\n  .contain {\n    width: 90%;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n\n  .menuList {\n    align-self: baseline;\n    padding-top: var(--content-padding);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 2rem;\n    list-style: none;\n\n    li {\n      border-radius: 1rem;\n      padding: .5rem;\n      backdrop-filter: blur(15px);\n      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    img{\n      max-width: 100%;\n      height: 200px;\n      width: 100%;\n      object-fit: cover;\n      border-radius: .5rem;\n    }\n\n    .menuContent {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: .5rem;\n    }\n\n    h4{\n      font-family: var(--ff-primary);\n      font-weight: 300;\n      letter-spacing: .055rem;\n      text-transform: capitalize;\n      color: white;\n    }\n\n    span{\n      font-family: var(--ff-primary);\n      font-weight: 900;\n      color: orange;\n      font-size: 1.2rem;\n    }\n  }\n\n  .about {\n    padding-top: var(--content-padding);\n    min-height: 100svh;\n    color: white;\n    font-size: 1.2rem;\n    line-height: 1.7;\n    font-family: var(--ff-primary);\n\n    p {\n      backdrop-filter: blur(10px);\n    }\n  }\n}\n\n",
            ],
            sourceRoot: '',
          },
        ]);
        const p = l;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  o &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (t += n(e)),
                  o && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, o, r, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var A = 0; A < this.length; A++) {
                  var s = this[A][0];
                  null != s && (i[s] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                (o && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = t))
                      : (l[2] = t)),
                  r &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = r))
                      : (l[4] = ''.concat(r))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      417: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ('function' == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  o
                ),
              a = '/*# '.concat(r, ' */');
            return [e].concat([a]).join('\n');
          }
          return [e].join('\n');
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var a = {}, i = [], A = 0; A < n.length; A++) {
            var s = n[A],
              c = o.base ? s[0] + o.base : s[0],
              l = a[c] || 0,
              f = ''.concat(c, ' ').concat(l);
            a[c] = l + 1;
            var p = t(f),
              u = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(u);
            else {
              var d = r(u, o);
              (o.byIndex = A),
                e.splice(A, 0, { identifier: f, updater: d, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var a = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var A = t(a[i]);
              e[A].references--;
            }
            for (var s = o(n, r), c = 0; c < a.length; c++) {
              var l = t(a[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = s;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = '';
                t.supports && (o += '@supports ('.concat(t.supports, ') {')),
                  t.media && (o += '@media '.concat(t.media, ' {'));
                var r = void 0 !== t.layer;
                r &&
                  (o += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (o += t.css),
                  r && (o += '}'),
                  t.media && (o += '}'),
                  t.supports && (o += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      431: (n, e, t) => {
        n.exports = t.p + 'af92a4f641359ac4b804.jpg';
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { id: o, exports: {} });
    return n[o](a, a.exports, t), a.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (n) {
        if ('object' == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + '');
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var o = e.getElementsByTagName('script');
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!n || !/^http(s?):/.test(n)); )
            n = o[r--].src;
      }
      if (!n)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (n = n
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        o = t(825),
        r = t.n(o),
        a = t(659),
        i = t.n(a),
        A = t(56),
        s = t.n(A),
        c = t(540),
        l = t.n(c),
        f = t(113),
        p = t.n(f),
        u = t(919),
        d = {};
      (d.styleTagTransform = p()),
        (d.setAttributes = s()),
        (d.insert = i().bind(null, 'head')),
        (d.domAPI = r()),
        (d.insertStyleElement = l()),
        e()(u.A, d),
        u.A && u.A.locals && u.A.locals;
      const m = JSON.parse(
          '{"food":[{"name":"Shrimp soup","price":"$19","image":"https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Meatballs","price":"$15","image":"https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Godzilla burger","price":"$10","image":"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Curry salmon","price":"$22","image":"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Shrimp pasta","price":"$17","image":"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Iced coffee","price":"$10","image":"https://images.unsplash.com/photo-1533007716222-4b465613a984?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Orange smash","price":"$10","image":"https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"name":"Strawberry milkshake","price":"$10","image":"https://images.unsplash.com/photo-1589734580748-6d9421464885?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]}'
        ),
        h = document.querySelector('#content'),
        g = document.querySelector('.nav'),
        b = [
          function () {
            const n = document.createElement('div'),
              e = document.createElement('h1'),
              t = document.createElement('span');
            return (
              (n.className = 'hero'),
              (e.className = 'inter-x'),
              (t.className = 'dress'),
              (e.textContent =
                'Good food is the foundation of genuine happiness'),
              (t.textContent = '"Food is a passion, food is love"'),
              n.append(e, t),
              n
            );
          },
          function () {
            return ((n) => {
              const e = document.createElement('ul');
              return (
                (e.className = 'menuList contain'),
                m.food
                  .map((n) => {
                    const { name: t, price: o, image: r } = n,
                      a = document.createElement('li'),
                      i = document.createElement('img'),
                      A = document.createElement('h4'),
                      s = document.createElement('span'),
                      c = document.createElement('div');
                    (i.src = r),
                      (i.alt = t),
                      (A.textContent = t),
                      (s.textContent = o),
                      (c.className = 'menuContent'),
                      c.append(A, s),
                      a.append(i, c),
                      e.append(a);
                  })
                  .join(' '),
                e
              );
            })();
          },
          function () {
            const n = document.createElement('div');
            n.className = 'about contain';
            const e = document.createElement('p');
            return (
              (e.textContent =
                'Gummi bears apple pie cookie I love I love powder I love icing oat cake. Cookie toffee toffee oat cake shortbread pastry gingerbread cookie. I love ice cream I love oat cake powder cake. Jujubes cheesecake liquorice croissant marzipan pastry chupa chups.\n\n  Gummi bears liquorice chocolate cake apple pie pudding pastry gingerbread. I love candy canes gingerbread cupcake cheesecake brownie wafer toffee. Dragée apple pie tiramisu bonbon macaroon. Jelly-o topping I love icing chocolate cake lollipop dessert candy lollipop.\n  \n  Carrot cake sesame snaps I love gummi bears jelly beans toffee pastry. Gummies wafer cake marshmallow tootsie roll dessert. Jelly donut I love I love brownie oat cake marzipan. Chocolate pie cookie I love biscuit tiramisu.'),
              n.append(e),
              n
            );
          },
        ],
        B = (n) => {
          const e = b[n];
          (h.innerHTML = ''), h.append(e());
        };
      (g.onclick = (n) => {
        const e = n.target;
        if ('BUTTON' !== e.tagName) return;
        const t = [...g.children].indexOf(e);
        [...g.children].forEach((n) => n.classList.remove('active')),
          B(t),
          e.classList.add('active');
      }),
        (window.onload = B(0));
    })();
})();
//# sourceMappingURL=app.bundle.js.map
