function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=t.parcelRequireca0a;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},t.parcelRequireca0a=o),o.register("27Lyk",(function(t,n){var s,o;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var a={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("k1PCf",(function(e,t){e.exports=new URL(o("27Lyk").resolve("aIdCK"),import.meta.url).toString()})),o.register("908Ah",(function(e,t){e.exports=new URL(o("27Lyk").resolve("jYzGd"),import.meta.url).toString()})),o.register("gLTua",(function(e,t){e.exports=new URL(o("27Lyk").resolve("lyYKJ"),import.meta.url).toString()})),o.register("fOLdg",(function(e,t){e.exports=new URL(o("27Lyk").resolve("cK2FM"),import.meta.url).toString()})),o.register("6lgj9",(function(e,t){e.exports=new URL(o("27Lyk").resolve("C68j3"),import.meta.url).toString()})),o.register("aUtwV",(function(e,t){e.exports=new URL(o("27Lyk").resolve("hDotC"),import.meta.url).toString()})),o.register("9n4cr",(function(e,t){e.exports=new URL(o("27Lyk").resolve("447nc"),import.meta.url).toString()})),o.register("kp10g",(function(e,t){e.exports=new URL(o("27Lyk").resolve("5OL91"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.6d115d24.js","aIdCK":"Piedra-Papel-Tijera.1b361087.svg","jYzGd":"papel.5f79bbf0.svg","lyYKJ":"piedra.c88f7ccf.svg","cK2FM":"tijera.6a2fdda1.svg","C68j3":"text-largo.64875818.svg","hDotC":"resultado-empate.0e9dbf05.png","447nc":"resultado-ganaste.925a67b3.svg","5OL91":"resultado-perdiste.9846907e.svg"}'));const a={data:{currentMoves:{myPlay:"",computerPlay:""},result:[],historyScore:{jugador:0,computadora:0}},listeners:[],init(){let e=localStorage.getItem("save-score");null===e&&console.log("Estas por iniciar el juego"),e?this.data.historyScore=JSON.parse(e):localStorage.setItem("save-score",JSON.stringify(this.data.historyScore))},moveGame(e){let t=this.getState();t.currentMoves.myPlay=e;t.currentMoves.computerPlay=["piedra","tijeras","papel"][Math.floor(3*Math.random()+0)]},whoWins(e,t){let n=this.getState().result,s=["tijeras"===e&&"papel"===t,"papel"===e&&"piedra"===t,"piedra"===e&&"tijeras"===t].includes(!0),o=["tijeras"===e&&"tijeras"===t,"papel"===e&&"papel"===t,"piedra"===e&&"piedra"===t].includes(!0);n[0]=s?"ganaste":o?"empataste":"perdiste",this.pushToHistory(n[0])},getState(){return this.data},setState(e){this.data=e},suscribe(e){this.data.listeners.push(e)},pushToHistory(e){"ganaste"===e?this.data.historyScore.jugador++:"perdiste"===e&&this.data.historyScore.computadora++,this.saveScore()},saveScore(){let e=this.getState().historyScore;localStorage.setItem("save-score",JSON.stringify(e))},deleteScore(){localStorage.setItem("save-score",JSON.stringify({jugador:0,computadora:0}))}};class r extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=this.textContent;const t=document.createElement("div"),n=document.createElement("style");n.innerHTML="\n        .btn{\n            width: 332px;\n            heigth: 87px;\n            background-color: var(--fondo-azul);\n            border:5px solid #001997;\n            text-align:center;\n            color:white;\n            padding:5px 0;\n            font-size:45px;\n            font-family:Odibee Sans;\n        }\n        ",t.innerHTML=`\n        <button class="btn"> ${e}</button>\n        `,this.shadow.appendChild(n),this.shadow.appendChild(t)}}customElements.define("custom-button",r),customElements.define("custom-title",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=o("k1PCf"),t=document.createElement("div");t.innerHTML='\n            <div class="img">\n            </div>\n        ';t.querySelector(".img").innerHTML=`\n        <img src=${e}>\n        `,this.shadow.appendChild(t)}}),customElements.define("papel-hand",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=o("908Ah"),t=document.createElement("img");t.src=e,this.shadow.appendChild(t)}}),customElements.define("hand-piedra",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=o("gLTua"),t=document.createElement("img");t.src=e,this.shadow.appendChild(t)}}),customElements.define("hand-tijeras",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=o("fOLdg"),t=document.createElement("img");t.src=e,this.shadow.appendChild(t)}});customElements.define("text-long",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=o("6lgj9"),t=document.createElement("div");t.innerHTML='\n            <div class="imgTitle">\n            </div>\n            ';t.querySelector(".imgTitle").innerHTML=`\n                <img src="${e}"/>\n            `,this.shadow.appendChild(t)}});customElements.define("custom-score",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=document.createElement("div"),t=document.createElement("style"),n=this.getAttribute("player")||0,s=this.getAttribute("computer")||0;t.innerHTML="\n        .score{\n            width:259px;\n            heigth:130px;\n            border:10px solid #000;\n            background-color:#fff;\n            font-family:Odibee Sans;\n        }\n        .score h2{\n            font-size:55px;\n            text-align:center;\n        }\n        .score p span{\n            font-size:45px;\n            font-family:Odibee Sans;\n\n            \n        }\n        .score p{\n            text-align:right;\n            padding:0 10px;\n        }\n        ",e.innerHTML=`\n            <div class="score">\n                <h2>Score</h2>\n                <p><span class="jugador">Vos: ${n}</span></p>\n                <p><span class="maquina">Machine: ${s}</span></p>\n            </div>\n        `,this.shadow.appendChild(t),this.shadow.appendChild(e)}}),customElements.define("star-empate",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=o("aUtwV"),t=document.createElement("style");t.innerHTML="\n        img{\n            width:230px;\n            height:230px;\n        }\n        ";let n=document.createElement("img");n.src=e,this.shadow.appendChild(t),this.shadow.appendChild(n)}});customElements.define("star-win",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=o("9n4cr"),t=document.createElement("style");t.innerHTML="\n        img{\n            width:230px;\n            height:230px;\n        }\n        ";let n=document.createElement("img");n.src=e,this.shadow.appendChild(t),this.shadow.appendChild(n)}});customElements.define("star-lose",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=o("kp10g"),t=document.createElement("style");t.innerHTML="\n        img{\n            width:230px;\n            height:230px;\n        }\n        ";let n=document.createElement("img");n.src=e,this.shadow.appendChild(t),this.shadow.appendChild(n)}});const d=[{path:/\/home/,component:e=>{const t=document.createElement("div"),n=document.createElement("style");t.classList.add("contenedor"),t.innerHTML='\n    <custom-title></custom-title>\n    <custom-button class="btnEl">Empezar</custom-button>\n    <div class="hands">\n        <hand-piedra></hand-piedra>\n        <hand-tijeras></hand-tijeras>\n        <papel-hand></papel-hand>\n    </div>\n    ',n.innerHTML="\n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        padding: 85px 0 0 0;\n        overflow:hidden;\n    }\n    .hands{\n        width:80%;\n        display:flex;\n        justify-content: space-between;\n        position:relative;\n        top:15px;\n    }\n    ";return t.querySelector(".btnEl")?.addEventListener("click",(t=>{e.goTo("/intructions")})),t.appendChild(n),t}},{path:/\/intructions/,component:e=>{const t=document.createElement("div"),n=document.createElement("style");t.classList.add("contenedor"),t.innerHTML='\n    <text-long></text-long>\n    <custom-button class="btnEl">Jugar</custom-button>\n    <div class="hands">\n        <hand-piedra></hand-piedra>\n        <hand-tijeras></hand-tijeras>\n        <papel-hand></papel-hand>\n    </div>\n    ',n.innerHTML="\n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        padding: 85px 0 0 0;\n        overflow:hidden;\n    }\n    .hands{\n        width:80%;\n        display:flex;\n        justify-content: space-between;\n        position:relative;\n        top:15px;\n    }\n    ";return t.querySelector(".btnEl")?.addEventListener("click",(t=>{e.goTo("/play")})),t.appendChild(n),t}},{path:/\/play/,component:e=>{let t=3;const n=setInterval((()=>{t--;s.querySelector(".contador").textContent=String(t),0===t&&(clearInterval(n),e.goTo("/intructions"))}),1e3),s=document.createElement("div"),r=document.createElement("style");s.classList.add("contenedor");const d=o("gLTua"),i=o("908Ah"),c=o("fOLdg");s.innerHTML=`\n    <div class="hands-computer hands-disabled">\n    <img class="piedra-computadora" src="${d}" />\n    <img class="papel-computadora" src="${i}" />\n    <img class="tijera-computadora" src="${c}" />\n    </div>\n    <div class="contador">${t}</div>\n    <div class="hands hands-jugador">\n        <img class="piedra-jugador" src="${d}"/>\n        <img class="papel-jugador" src="${i}"/>\n        <img class="tijera-jugador" src="${c}"/>\n    </div>\n    `,r.innerHTML="\n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        overflow:hidden;\n    }\n    .contador{\n        font-size:100px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        width:243px;\n        height:243px;\n        border-radius:50%;\n        border:solid #000 23px;\n        margin-top:25vh;\n    }\n    .hands-computer{\n        transform:rotate(180deg);\n        width:80%;\n        display:flex;\n        justify-content: space-between;\n        position:relative;\n    }\n    .hands{\n        width:80%;\n        display:flex;\n        justify-content: space-between;\n        position:relative;\n        top:15px;\n    }\n    .hands-disabled{\n        display:none;\n    }\n    .hand-selected{\n        width:157.02px;\n        height:250px;\n        transform:translateY(-40px);\n        transtion: all ease .3s;\n    }\n    .hand-selected-computer{\n        width:157.02px;\n        height:250px;\n        transform:translateY(-40px);\n        transtion: all ease .3s;\n    }\n    .hand-no-selected{\n        display:none;\n    }\n    .jugando{\n        display:flex;\n        justify-content:center;\n    }\n";const l=s.querySelector(".hands-jugador"),p=s.querySelector(".piedra-jugador"),u=s.querySelector(".papel-jugador"),h=s.querySelector(".tijera-jugador"),m=s.querySelector(".piedra-computadora"),g=s.querySelector(".papel-computadora"),f=s.querySelector(".tijera-computadora"),y=s.querySelector(".hands-computer"),v=s.querySelector(".hands-jugador"),L=s.querySelector(".contador");for(const e of l.children)e.addEventListener("click",(t=>{const s=e.getAttribute("class");clearInterval(n),"papel-jugador"===s?(a.moveGame("papel"),x("papel")):"tijera-jugador"===s?(a.moveGame("tijeras"),x("tijeras")):(a.moveGame("piedra"),x("piedra"))}));const x=t=>{let n=a.getState().currentMoves.myPlay,s=a.getState().currentMoves.computerPlay;"piedra"===t?(p?.classList.add("hand-selected"),v?.classList.add("jugando"),u?.classList.add("hand-no-selected"),h?.classList.add("hand-no-selected")):"papel"===t?(v?.classList.add("jugando"),u?.classList.add("hand-selected"),p?.classList.add("hand-no-selected"),h?.classList.add("hand-no-selected")):"tijeras"===t&&(v?.classList.add("jugando"),h?.classList.add("hand-selected"),p?.classList.add("hand-no-selected"),u?.classList.add("hand-no-selected")),L?.remove(),y?.classList.remove("hands-disabled"),"piedra"===s?(m?.classList.add("hand-selected-computer"),g?.classList.add("hand-no-selected"),f?.classList.add("hand-no-selected"),y?.classList.add("jugando")):"papel"===s?(g?.classList.add("hand-selected-computer"),f?.classList.add("hand-no-selected"),m?.classList.add("hand-no-selected"),y?.classList.add("jugando")):"tijeras"===s&&(f?.classList.add("hand-selected-computer"),m?.classList.add("hand-no-selected"),g?.classList.add("hand-no-selected"),y?.classList.add("jugando")),a.whoWins(n,s),setTimeout((()=>{let t=a.getState().result[0];e.goTo(`/${t}`)}),1500)};return s.appendChild(r),s}},{path:/\/empataste/,component:e=>{let t=a.getState().historyScore,n=t.jugador,s=t.computadora,o=document.createElement("div"),r=document.createElement("style");r.innerHTML="\n        .contenedor{\n            width:100vw;\n            background-color: var(--fondo-gris);\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n        }\n        @media(min-width:960px){\n            .contenedor{\n                height: 100vh;\n            }\n        }\n        @media (min-width:960px){\n            .btnEl{\n                margin-top:10px;\n                margin-bottom:10px;\n            }\n        }\n    ",o.classList.add("contenedor"),o.innerHTML=`\n        <star-empate></star-empate>\n        <custom-score player=${n} computer=${s}></custom-score>\n        <custom-button class="btnEl">Volver a jugar</custom-button>\n        <custom-button class="reiniciar">Reset Score</custom-button>\n    `;let d=o.querySelector(".btnEl"),i=o.querySelector(".reiniciar");return d.addEventListener("click",(t=>{e.goTo("/intructions")})),i.addEventListener("click",(t=>{a.deleteScore(),e.goTo("/home"),a.init()})),o.appendChild(r),o}},{path:/\/ganaste/,component:e=>{let t=a.getState().historyScore,n=t.jugador,s=t.computadora,o=document.createElement("div"),r=document.createElement("style");r.innerHTML="\n        .contenedor{\n            width:100vw;\n            background-color: var(--fondo-verde);\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n        }\n        @media(min-width:960px){\n            .contenedor{\n                height: 100vh;\n            }\n            .btnEl{\n                margin-top:10px;\n                margin-bottom:10px;\n            }\n        }\n    ",o.classList.add("contenedor"),o.innerHTML=`\n        <star-win></star-win>\n        <custom-score player=${n} computer=${s}></custom-score>\n        <custom-button class="btnEl">Volver a jugar</custom-button>\n        <custom-button class="reiniciar">Reset Score</custom-button>\n    `;let d=o.querySelector(".btnEl"),i=o.querySelector(".reiniciar");return d.addEventListener("click",(t=>{e.goTo("/intructions")})),i.addEventListener("click",(t=>{a.deleteScore(),e.goTo("/home"),a.init()})),o.appendChild(r),o}},{path:/\/perdiste/,component:e=>{let t=a.getState().historyScore,n=t.jugador,s=t.computadora,o=document.createElement("div"),r=document.createElement("style");r.innerHTML="\n        .contenedor{\n            width:100vw;\n            background-color: var(--fondo-rojo);\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n        }\n        @media(min-width:960px){\n            .contenedor{\n                height: 100vh;\n            }\n            .btnEl{\n                margin-top:10px;\n                margin-bottom:10px;\n            }\n        }\n    ",o.classList.add("contenedor"),o.innerHTML=`\n        <star-lose></star-lose>\n        <custom-score player=${n} computer=${s}></custom-score>\n        <custom-button class="btnEl">Volver a jugar</custom-button>\n        <custom-button class="reiniciar">Reset Score</custom-button>\n    `;let d=o.querySelector(".btnEl"),i=o.querySelector(".reiniciar");return d.addEventListener("click",(t=>{e.goTo("/intructions")})),i.addEventListener("click",(t=>{a.deleteScore(),e.goTo("/home"),a.init()})),o.appendChild(r),o}}];function i(){return location.host.includes("github.io")}function c(e){function t(n){const s=i()?"/Desafío-5"+n:n;history.pushState({},"",s),function(n){const s=i()?n.replace("/Desafío-5",""):n;for(let n of d)if(n.path.test(s)){let s=n.component({goTo:t});e?.firstChild&&e.firstChild.remove(),e?.appendChild(s)}}(s)}i(),t("/home")}(()=>{let e=document.querySelector(".root");a.init(),c(e)})();
//# sourceMappingURL=index.6d115d24.js.map