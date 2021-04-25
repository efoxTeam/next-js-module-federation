!(function () {
  'use strict'
  var t,
    e,
    n = {},
    r = {}
  function o(t) {
    var e = r[t]
    if (void 0 !== e) return e.exports
    var i = (r[t] = {exports: {}})
    return n[t](i, i.exports, o), i.exports
  }
  ;(o.m = n),
    (o.d = function (t, e) {
      for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }),
    (o.f = {}),
    (o.e = function (t) {
      return Promise.all(
        Object.keys(o.f).reduce(function (e, n) {
          return o.f[n](t, e), e
        }, []),
      )
    }),
    (o.u = function (t) {
      return 'static/js/' + t + '.642951cb.js'
    }),
    (o.miniCssF = function (t) {}),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (t = {}),
    (e = 'static-host:'),
    (o.l = function (n, r, i, u) {
      if (t[n]) t[n].push(r)
      else {
        var a, c
        if (void 0 !== i)
          for (var s = document.getElementsByTagName('script'), f = 0; f < s.length; f++) {
            var l = s[f]
            if (l.getAttribute('src') == n || l.getAttribute('data-webpack') == e + i) {
              a = l
              break
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          o.nc && a.setAttribute('nonce', o.nc),
          a.setAttribute('data-webpack', e + i),
          (a.src = n)),
          (t[n] = [r])
        var d = function (e, r) {
            ;(a.onerror = a.onload = null), clearTimeout(p)
            var o = t[n]
            if (
              (delete t[n],
              a.parentNode && a.parentNode.removeChild(a),
              o &&
                o.forEach(function (t) {
                  return t(r)
                }),
              e)
            )
              return e(r)
          },
          p = setTimeout(d.bind(null, void 0, {type: 'timeout', target: a}), 12e4)
        ;(a.onerror = d.bind(null, a.onerror)), (a.onload = d.bind(null, a.onload)), c && document.head.appendChild(a)
      }
    }),
    (o.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0})
    }),
    (o.p = 'http://localhost:3003/'),
    (function () {
      var t = {staticHost: 0}
      o.f.j = function (e, n) {
        var r = o.o(t, e) ? t[e] : void 0
        if (0 !== r)
          if (r) n.push(r[2])
          else {
            var i = new Promise(function (n, o) {
              r = t[e] = [n, o]
            })
            n.push((r[2] = i))
            var u = o.p + o.u(e),
              a = new Error()
            o.l(
              u,
              function (n) {
                if (o.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                  var i = n && ('load' === n.type ? 'missing' : n.type),
                    u = n && n.target && n.target.src
                  ;(a.message = 'Loading chunk ' + e + ' failed.\n(' + i + ': ' + u + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = i),
                    (a.request = u),
                    r[1](a)
                }
              },
              'chunk-' + e,
              e,
            )
          }
      }
      var e = function (e, n) {
          var r,
            i,
            u = n[0],
            a = n[1],
            c = n[2],
            s = 0
          for (r in a) o.o(a, r) && (o.m[r] = a[r])
          for (c && c(o), e && e(n); s < u.length; s++) (i = u[s]), o.o(t, i) && t[i] && t[i][0](), (t[u[s]] = 0)
        },
        n = (self.webpackChunkstatic_host = self.webpackChunkstatic_host || [])
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)))
    })()
  var i,
    u,
    a,
    c,
    s = {}
  ;(i = s),
    (u = {
      './home': function () {
        return o.e('src_components_App_jsx').then(function () {
          return function () {
            return o(195)
          }
        })
      },
    }),
    (a = function (t, e) {
      return (
        (o.R = e),
        (e = o.o(u, t)
          ? u[t]()
          : Promise.resolve().then(function () {
              throw new Error('Module "' + t + '" does not exist in container.')
            })),
        (o.R = void 0),
        e
      )
    }),
    (c = function (t, e) {
      if (o.S) {
        var n = o.S.default,
          r = 'default'
        if (n && n !== t)
          throw new Error(
            'Container initialization failed as it has already been initialized with a different share scope',
          )
        return (o.S[r] = t), o.I(r, e)
      }
    }),
    o.d(i, {
      get: function () {
        return a
      },
      init: function () {
        return c
      },
    }),
    (module.exports.staticHost = s)
})()
