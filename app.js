const days=[
{name:"DÍA 1",focus:"PECHO + TRÍCEPS", exercises:[
["Press de pecho en máquina","Pectoral mayor","3 × 10–12","60–90 s",["Ajusta el asiento a la altura media del pecho.","Apoya la espalda completamente.","Empuja las manijas hacia delante sin rebote.","Regresa de forma controlada."]],
["Jalón al pecho (agarre amplio)","Dorsal ancho","3 × 10–12","60–90 s",["Agarra la barra ligeramente más ancho que los hombros.","Lleva la barra hacia la parte alta del pecho.","Mantén el torso estable.","No lleves la barra detrás de la cabeza."]],
["Aperturas en máquina (pecho)","Pectoral mayor","3 × 12–15","60–90 s",["Ajusta el asiento para que las manos queden a la altura del pecho.","Abre de forma controlada.","Cierra contrayendo el pecho.","Evita bloquear los codos."]],
["Fondos en paralelas (asistido si es necesario)","Tríceps","3 × 10–12","60–90 s",["Mantén el pecho abierto y el abdomen firme.","Desciende con control.","Empuja hasta extender los brazos.","Usa asistencia si la técnica se deteriora."]],
["Extensión de tríceps en polea (cuerda)","Tríceps","3 × 12–15","45–60 s",["Codos pegados al cuerpo.","Extiende hacia abajo.","Aprieta el tríceps al final.","Regresa lentamente."]]]},
{name:"DÍA 2",focus:"ESPALDA + BÍCEPS",exercises:[
["Remo sentado en máquina","Dorsal + romboides","3 × 10–12","60–90 s",["Pecho apoyado si la máquina lo permite.","Lleva los codos hacia atrás.","No encorves la zona lumbar.","Regresa lentamente."]],
["Jalón al pecho agarre neutro","Dorsal ancho","3 × 10–12","60–90 s",["Mantén el pecho elevado.","Tira hacia la parte alta del pecho.","Codos hacia abajo.","Controla la subida."]],
["Remo en polea baja","Romboides","3 × 10–12","60–90 s",["Espalda neutra.","Tira hacia el abdomen.","No uses impulso.","Extiende los brazos con control."]],
["Curl de bíceps en máquina","Bíceps","3 × 10–12","60 s",["Apoya el brazo en el soporte.","Flexiona sin levantar el hombro.","Aprieta arriba.","Baja lentamente."]],
["Curl martillo con mancuerna","Bíceps","2 × 12–15","60 s",["Palmas enfrentadas.","Codos cerca del torso.","Sube sin balancearte.","Controla la bajada."]]]},
{name:"DÍA 3",focus:"PIERNAS + GEMELOS",exercises:[
["Prensa de piernas","Cuádriceps + glúteo","3 × 10–12","90 s",["Pies firmes y simétricos.","Baja hasta un rango cómodo.","Rodillas siguen la línea de los pies.","No bloquees las rodillas."]],
["Extensión de cuádriceps","Cuádriceps","3 × 12–15","60 s",["Ajusta el eje de la máquina.","Extiende sin dar tirones.","Pausa arriba.","Baja controladamente."]],
["Curl femoral sentado","Isquiotibiales","3 × 10–12","60–90 s",["Ajusta el respaldo.","Flexiona llevando el talón hacia atrás.","Mantén la pelvis estable.","Regresa lentamente."]],
["Abducción de cadera en máquina","Glúteo medio","3 × 12–15","60 s",["Espalda apoyada.","Abre las piernas sin impulso.","Pausa brevemente.","Regresa con control."]],
["Elevación de gemelos en máquina","Gemelos","3 × 12–15","60 s",["Pie estable y rango cómodo.","Eleva el talón.","Pausa arriba.","Evita rebotes, especialmente por tu tobillo."]]]},
{name:"DÍA 4",focus:"HOMBROS + ABDOMEN",exercises:[
["Press de hombros en máquina (ligero)","Deltoides","2 × 10–12","60–90 s",["Usa un peso cómodo.","No fuerces el hombro izquierdo.","Empuja sin dolor.","No bloquees los codos."]],
["Elevación lateral en máquina","Deltoides medio","3 × 12–15","60 s",["Ajusta el asiento.","Eleva hasta una altura cómoda.","Evita encoger los hombros.","Baja lentamente."]],
["Face pull en polea","Deltoides posterior","3 × 12–15","60 s",["Cuerda a la altura de la cara.","Lleva las manos hacia las sienes.","Codos abiertos.","Movimiento controlado."]],
["Crunch en máquina","Abdomen","3 × 12–15","45–60 s",["Apoya la espalda.","Flexiona el tronco usando el abdomen.","No tires del cuello.","Regresa lentamente."]],
["Pallof press en polea","Core","3 × 10–12 por lado","45–60 s",["Postura estable.","Sujeta la polea frente al pecho.","Extiende sin rotar el torso.","Regresa al centro."]]]}
];

let day=0, timerSeconds=90, timerId=null, setNo=1;
const $=s=>document.querySelector(s);
function render(){
 const d=days[day];
 $("#app").innerHTML=`<div class="daytitle"><h1>${d.name} · ${d.focus}</h1><span class="tag">114 kg → 90 kg</span></div>`+
 d.exercises.map((e,i)=>`<article class="exercise">
  <div><h2>${i+1}. ${e[0]}</h2><span class="tag">${e[1]}</span><div class="meta">${e[2]} &nbsp;|&nbsp; Descanso: ${e[3]}</div>
  <div class="how">${e[4].map(x=>`<div>${x}</div>`).join("")}</div></div>
  <div class="photos"><div class="photo"><span>POSICIÓN INICIAL</span></div><div class="photo"><span>POSICIÓN FINAL</span></div></div>
  <div class="muscle"><div class="body"></div><b>MÚSCULOS</b><ul><li>${e[1]}</li><li>Estabilizadores</li><li>Apoyo secundario</li></ul></div>
 </article>`).join("");
 document.querySelectorAll(".tab,.daylink").forEach(x=>x.classList.toggle("active",Number(x.dataset.day)===day));
 updateChips();
}
function selectDay(n){day=n;render()}
document.querySelectorAll(".tab,.daylink").forEach(x=>x.addEventListener("click",()=>selectDay(Number(x.dataset.day))));
document.querySelectorAll(".nav").forEach(x=>x.addEventListener("click",()=>alert("Sección: "+x.innerText.replace(/\n/g," "))));
function setTimer(s){timerSeconds=s;updateTimer()}
function updateTimer(){let m=String(Math.floor(timerSeconds/60)).padStart(2,"0"),s=String(timerSeconds%60).padStart(2,"0");$("#timer").textContent=`${m}:${s}`}
function toggleTimer(){if(timerId){clearInterval(timerId);timerId=null;$("#timerToggle").textContent="▶ Iniciar";return}$("#timerToggle").textContent="Ⅱ Pausar";timerId=setInterval(()=>{if(timerSeconds<=0){clearInterval(timerId);timerId=null;$("#timerToggle").textContent="▶ Iniciar";navigator.vibrate?.([200,100,200]);return}timerSeconds--;updateTimer()},1000)}
function updateChips(){const el=$("#setChips");el.innerHTML=[1,2,3,4].map(n=>`<button class="${n===setNo?"active":""}" onclick="setNo=${n};updateChips()">${n}</button>`).join("")}
function saveSet(){
 const w=Number($("#weight").value||0),r=Number($("#reps").value||0);
 let data=JSON.parse(localStorage.getItem("gym90")||"[]");data.push({day:days[day].name,exercise:days[day].exercises[0][0],set:setNo,weight:w,reps:r,date:new Date().toISOString()});localStorage.setItem("gym90",JSON.stringify(data));updateStats();alert("Serie guardada ✓");setTimer(90)
}
function updateStats(){let d=JSON.parse(localStorage.getItem("gym90")||"[]");$("#sSets").textContent=d.length;$("#sVolume").textContent=Math.round(d.reduce((a,x)=>a+x.weight*x.reps,0)).toLocaleString("es-CO");$("#sWorkouts").textContent=new Set(d.map(x=>x.date.slice(0,10))).size;$("#sCalories").textContent=Math.round(d.length*35).toLocaleString("es-CO")}
render();updateTimer();updateStats();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
