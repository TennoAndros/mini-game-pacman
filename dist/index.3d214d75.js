// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2UeK4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _setup = require("./setup");
var _gameBoard = require("./GameBoard");
var _gameBoardDefault = parcelHelpers.interopDefault(_gameBoard);
var _pacman = require("./Pacman");
var _pacmanDefault = parcelHelpers.interopDefault(_pacman);
var _ghostMovement = require("./ghostMovement");
var _ghostMovementDefault = parcelHelpers.interopDefault(_ghostMovement);
var _ghost = require("./Ghost");
var _ghostDefault = parcelHelpers.interopDefault(_ghost);
const soundDot = require("2e7478b6c3d5803f");
const soundPill = require("228de6ccdeb7b623");
const soundGameStart = require("ef0456028a6e7e0");
const soundGameOver = require("8e74c180d2ccbe69");
const soundGhost = require("452ddb28132dce2c");
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
const POWER_PILL_TIME = 15000;
const GLOBAL_SPEED = 80;
const gameBoard = (0, _gameBoardDefault.default).createGameBoard(gameGrid, (0, _setup.LEVEL));
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;
function playAudio(audio) {
    const soundEffect = new Audio(audio);
    soundEffect.play();
}
function gameOver(pacman, grid) {
    playAudio(soundGameOver);
    document.removeEventListener("keydown", (event)=>pacman.handleKeyInput(event, gameBoard.objectExists.bind(gameBoard)));
    gameBoard.showGameStatus(gameWin);
    clearInterval(timer);
    startButton.classList.remove("hide");
}
function checkCollision(pacman, ghosts) {
    const collidedGhost = ghosts.find((ghost)=>pacman.position === ghost.position);
    if (collidedGhost) {
        if (pacman.powerPill) {
            playAudio(soundGhost);
            gameBoard.removeObject(collidedGhost.position, [
                (0, _setup.OBJECT_TYPE).GHOST,
                (0, _setup.OBJECT_TYPE).SCARED,
                collidedGhost.name
            ]);
            collidedGhost.position = collidedGhost.startPosition;
            score += 200;
        } else {
            gameBoard.removeObject(pacman.position, [
                (0, _setup.OBJECT_TYPE).PACMAN
            ]);
            gameBoard.rotateDiv(pacman.position, 0);
            gameOver(pacman, gameGrid);
        }
    }
}
function gameLoop(pacman, ghosts) {
    gameBoard.moveCharacter(pacman);
    checkCollision(pacman, ghosts);
    ghosts.forEach((ghost)=>gameBoard.moveCharacter(ghost));
    checkCollision(pacman, ghosts);
    if (gameBoard.objectExists(pacman.position, (0, _setup.OBJECT_TYPE).DOT)) {
        playAudio(soundDot);
        gameBoard.removeObject(pacman.position, [
            (0, _setup.OBJECT_TYPE).DOT
        ]);
        gameBoard.dotCount--;
        score += 10;
    }
    if (gameBoard.objectExists(pacman.position, (0, _setup.OBJECT_TYPE).PILL)) {
        playAudio(soundPill);
        gameBoard.removeObject(pacman.position, [
            (0, _setup.OBJECT_TYPE).PILL
        ]);
        pacman.powerPill = true;
        score += 50;
        clearTimeout(powerPillTimer);
        powerPillTimer = setTimeout(()=>pacman.powerPill = false, POWER_PILL_TIME);
    }
    if (pacman.powerPill !== powerPillActive) {
        powerPillActive = pacman.powerPill;
        ghosts.forEach((ghost)=>ghost.isScared = pacman.powerPill);
    }
    if (gameBoard.dotCount === 0) {
        gameWin = true;
        gameOver(pacman, ghosts);
    }
    scoreTable.innerHTML = score;
}
function startGame() {
    playAudio(soundGameStart);
    gameWin = false;
    powerPillActive = false;
    score = 0;
    startButton.classList.add("hide");
    gameBoard.createGrid((0, _setup.LEVEL));
    const pacman = new (0, _pacmanDefault.default)(2, 287);
    gameBoard.addObject(287, [
        (0, _setup.OBJECT_TYPE).PACMAN
    ]);
    document.addEventListener("keydown", (event)=>pacman.handleKeyInput(event, gameBoard.objectExists.bind(gameBoard)));
    const ghosts = [
        new (0, _ghostDefault.default)(5, 188, (0, _ghostMovementDefault.default), (0, _setup.OBJECT_TYPE).BLINKY),
        new (0, _ghostDefault.default)(4, 209, (0, _ghostMovementDefault.default), (0, _setup.OBJECT_TYPE).PINKY),
        new (0, _ghostDefault.default)(3, 230, (0, _ghostMovementDefault.default), (0, _setup.OBJECT_TYPE).INKY),
        new (0, _ghostDefault.default)(2, 251, (0, _ghostMovementDefault.default), (0, _setup.OBJECT_TYPE).CLYDE)
    ];
    timer = setInterval(()=>gameLoop(pacman, ghosts), GLOBAL_SPEED);
}
startButton.addEventListener("click", startGame);

},{"./setup":"b1uhz","./GameBoard":"2NYHR","./Pacman":"dnwXd","./ghostMovement":"eK1QA","./Ghost":"1xT3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","2e7478b6c3d5803f":"Jn4sK","228de6ccdeb7b623":"2Ipe7","ef0456028a6e7e0":"fLvF3","8e74c180d2ccbe69":"YW1z5","452ddb28132dce2c":"eO2UM"}],"b1uhz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GRID_SIZE", ()=>GRID_SIZE);
parcelHelpers.export(exports, "CELL_SIZE", ()=>CELL_SIZE);
parcelHelpers.export(exports, "DIRECTIONS", ()=>DIRECTIONS);
parcelHelpers.export(exports, "OBJECT_TYPE", ()=>OBJECT_TYPE);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST);
parcelHelpers.export(exports, "LEVEL", ()=>LEVEL);
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const DIRECTIONS = {
    ArrowLeft: {
        code: 37,
        movement: -1,
        rotation: 180
    },
    ArrowUp: {
        code: 38,
        movement: -GRID_SIZE,
        rotation: 270
    },
    ArrowRight: {
        code: 39,
        movement: 1,
        rotation: 0
    },
    ArrowDown: {
        code: 40,
        movement: GRID_SIZE,
        rotation: 90
    }
};
const OBJECT_TYPE = {
    BLANK: "blank",
    WALL: "wall",
    DOT: "dot",
    BLINKY: "blinky",
    PINKY: "pinky",
    INKY: "inky",
    CLYDE: "clyde",
    PILL: "pill",
    PACMAN: "pacman",
    GHOST: "ghost",
    SCARED: "scared",
    GHOSTLAIR: "lair"
};
const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.DOT,
    OBJECT_TYPE.BLINKY,
    OBJECT_TYPE.PINKY,
    OBJECT_TYPE.INKY,
    OBJECT_TYPE.CLYDE,
    OBJECT_TYPE.PILL,
    OBJECT_TYPE.PACMAN,
    OBJECT_TYPE.GHOSTLAIR
];
const LEVEL = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    7,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    7,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    7,
    2,
    2,
    2,
    2,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    2,
    2,
    2,
    2,
    7,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    7,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    7,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2NYHR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
class GameBoard {
    constructor(DOMGrid){
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }
    showGameStatus(gameWin) {
        const div = document.createElement("div");
        div.classList.add("game-status");
        div.innerHTML = `${gameWin ? "WIN!" : "GAME OVER!"}`;
        this.DOMGrid.appendChild(div);
    }
    createGrid(level) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid.innerHTML = "";
        this.DOMGrid.style.cssText = `grid-template-columns:repeat(${0, _setup.GRID_SIZE},${0, _setup.CELL_SIZE}px);`;
        level.forEach((square)=>{
            const div = document.createElement("div");
            div.classList.add("square", (0, _setup.CLASS_LIST)[square]);
            div.style.cssText = `width:${0, _setup.CELL_SIZE}px; height:${0, _setup.CELL_SIZE}px`;
            this.DOMGrid.appendChild(div);
            this.grid.push(div);
            if ((0, _setup.CLASS_LIST)[square] === (0, _setup.OBJECT_TYPE).DOT) this.dotCount++;
        });
    }
    addObject(position, classes) {
        this.grid[position].classList.add(...classes);
    }
    removeObject(position, classes) {
        this.grid[position].classList.remove(...classes);
    }
    objectExists = (position, object)=>{
        return this.grid[position].classList.contains(object);
    };
    rotateDiv(position, degrees) {
        this.grid[position].style.transform = `rotate(${degrees}deg)`;
    }
    moveCharacter(character) {
        if (character.shouldMove()) {
            const { nextMovePosition, direction } = character.getNextMove(this.objectExists.bind(this));
            const { classesToRemove, classesToAdd } = character.makeMove();
            if (character.rotation && nextMovePosition !== character.position) {
                this.rotateDiv(nextMovePosition, character.direction.rotation);
                this.rotateDiv(character.position, 0);
            }
            this.removeObject(character.position, classesToRemove);
            this.addObject(nextMovePosition, classesToAdd);
            character.setNewPosition(nextMovePosition, direction);
        }
    }
    static createGameBoard(DOMGrid, level) {
        const board = new this(DOMGrid);
        board.createGrid(level);
        return board;
    }
}
exports.default = GameBoard;

},{"./setup":"b1uhz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnwXd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
class Pacman {
    constructor(speed, startPosition){
        this.position = startPosition;
        this.speed = speed;
        this.direction = null;
        this.timer = 0;
        this.powerPill = false;
        this.rotation = true;
    }
    shouldMove() {
        if (!this.direction) return false;
        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }
    getNextMove(objectExists) {
        let nextMovePosition = this.position + this.direction.movement;
        if (objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).WALL) || objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).GHOSTLAIR)) nextMovePosition = this.position;
        return {
            nextMovePosition,
            direction: this.direction
        };
    }
    makeMove() {
        const classesToRemove = [
            (0, _setup.OBJECT_TYPE).PACMAN
        ];
        const classesToAdd = [
            (0, _setup.OBJECT_TYPE).PACMAN
        ];
        return {
            classesToRemove,
            classesToAdd
        };
    }
    setNewPosition(nextMovePosition) {
        this.position = nextMovePosition;
    }
    handleKeyInput(event, objectExists) {
        let direction;
        if (event.keyCode >= 37 && event.keyCode <= 40) direction = (0, _setup.DIRECTIONS)[event.key];
        else return;
        const nextMovePosition = this.position + direction.movement;
        if (objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).WALL) || objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).GHOST_LAIR)) return;
        this.direction = direction;
    }
}
exports.default = Pacman;

},{"./setup":"b1uhz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eK1QA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
function randomMovement(position, direction, objectExists) {
    let nextMovePosition = position + direction.movement;
    const keys = Object.keys((0, _setup.DIRECTIONS));
    while(objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).WALL) || objectExists(nextMovePosition, (0, _setup.OBJECT_TYPE).GHOST)){
        const key = keys[Math.floor(Math.random() * keys.length)];
        direction = (0, _setup.DIRECTIONS)[key];
        nextMovePosition = position + direction.movement;
    }
    return {
        nextMovePosition,
        direction
    };
}
exports.default = randomMovement;

},{"./setup":"b1uhz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xT3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
var _ghostMovement = require("./ghostMovement");
var _ghostMovementDefault = parcelHelpers.interopDefault(_ghostMovement);
class Ghost {
    constructor(speed = 5, startPosition, movement, name){
        this.name = name;
        this.movement = movement;
        this.startPosition = startPosition;
        this.position = startPosition;
        this.direction = (0, _setup.DIRECTIONS).ArrowRight;
        this.speed = speed;
        this.timer = 0;
        this.isScared = false;
        this.rotation = false;
    }
    shouldMove() {
        if (this.times === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
        return false;
    }
    getNextMove(objectExists) {
        const { nextMovePosition, direction } = this.movement(this.position, this.direction, objectExists);
        return {
            nextMovePosition,
            direction
        };
    }
    makeMove() {
        const classesToRemove = [
            (0, _setup.OBJECT_TYPE).GHOST,
            (0, _setup.OBJECT_TYPE).SCARED,
            this.name
        ];
        let classesToAdd = [
            (0, _setup.OBJECT_TYPE).GHOST,
            this.name
        ];
        if (this.isScared) classesToAdd = [
            ...classesToAdd,
            (0, _setup.OBJECT_TYPE).SCARED
        ];
        return {
            classesToRemove,
            classesToAdd
        };
    }
    setNewPosition(nextMovePosition, direction) {
        this.position = nextMovePosition;
        this.direction = direction;
    }
}
exports.default = Ghost;

},{"./setup":"b1uhz","./ghostMovement":"eK1QA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Jn4sK":[function(require,module,exports) {
module.exports = require("2048747ced4d6a39").getBundleURL("UckoE") + "munch.c68cc271.wav" + "?" + Date.now();

},{"2048747ced4d6a39":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"2Ipe7":[function(require,module,exports) {
module.exports = require("c6116c930edad911").getBundleURL("UckoE") + "pill.ca3fa8cf.wav" + "?" + Date.now();

},{"c6116c930edad911":"lgJ39"}],"fLvF3":[function(require,module,exports) {
module.exports = require("9993f32dc0b832d1").getBundleURL("UckoE") + "game_start.89e0045d.wav" + "?" + Date.now();

},{"9993f32dc0b832d1":"lgJ39"}],"YW1z5":[function(require,module,exports) {
module.exports = require("bc2bec26990adc1c").getBundleURL("UckoE") + "death.0d78249f.wav" + "?" + Date.now();

},{"bc2bec26990adc1c":"lgJ39"}],"eO2UM":[function(require,module,exports) {
module.exports = require("163eb681fdfbfa5b").getBundleURL("UckoE") + "eat_ghost.32586e2e.wav" + "?" + Date.now();

},{"163eb681fdfbfa5b":"lgJ39"}]},["2UeK4","bB7Pu"], "bB7Pu", "parcelRequire2a9d")

//# sourceMappingURL=index.3d214d75.js.map
