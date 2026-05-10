
// ================= MAP =================
const map = L.map('map').setView([52.2,21],4);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

let marker;

// ================= TERMINAL =================
const terminal = document.getElementById("terminal");

function log(text){

const line = document.createElement("div");

line.innerText = "> " + text;

terminal.appendChild(line);

terminal.scrollTop = terminal.scrollHeight;
}

// ================= ANALYZE =================
function analyze(){

const value =
document.getElementById("search").value;

if(!value) return;

document.getElementById("status")
.innerText = "SCANNING";

log("Initializing AI scan...");
log("Collecting metadata...");
log("Searching global database...");
log("Analyzing threat patterns...");

fakeLoading();

randomMap();

timeline();

}

// ================= LOADING =================
function fakeLoading(){

let p = 0;

const interval = setInterval(()=>{

p += 10;

document.getElementById("confidence")
.innerText = p + "%";

if(p >= 100){

clearInterval(interval);

document.getElementById("status")
.innerText = "TARGET FOUND";

randomThreat();

log("Target identified.");
log("Analysis complete.");

}

},300);

}

// ================= THREAT =================
function randomThreat(){

const levels = [
"LOW",
"MEDIUM",
"HIGH",
"CRITICAL"
];

const random =
levels[Math.floor(Math.random()*levels.length)];

document.getElementById("threat")
.innerText = random;

}

// ================= MAP =================
function randomMap(){

const lat =
Math.random()*140 - 70;

const lon =
Math.random()*360 - 180;

map.flyTo([lat,lon],6);

if(marker) map.removeLayer(marker);

marker = L.marker([lat,lon]).addTo(map);

}

// ================= TIMELINE =================
function timeline(){

const list =
document.getElementById("timeline");

list.innerHTML = "";

const events = [
"Unknown signal detected",
"Encrypted communication found",
"Location triangulated",
"Satellite scan completed",
"Behavior analysis completed"
];

events.forEach((e,i)=>{

setTimeout(()=>{

const li =
document.createElement("li");

li.innerText = e;

list.appendChild(li);

},i*800);

});

}

// ================= START =================
log("AI Detective initialized.");
log("System online.");
