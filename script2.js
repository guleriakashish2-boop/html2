const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const content = document.getElementById("modalContent");

function openModal(t, c) {
    title.innerHTML = t;
    content.innerHTML = c;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}


/* LOGIN */

function openLogin() {
    openModal("🔐 Student Login", `
        <input type="text" id="username" placeholder="Student ID">
        <input type="password" placeholder="Password">

        <button onclick="login()">Login</button>

        <p id="loginResult"></p>
    `);
}

function login() {
    document.getElementById("loginResult").innerHTML =
        "✅ Login successful! Welcome to Smart Campus.";
}


/* AI CHATBOT */

function openChat() {

    openModal("🤖 CampusAI Assistant", `

        <div class="chat" id="chatBox">
            <div class="bot-msg">
                🤖 Hello! I am CampusAI.<br>
                Ask me about timetable, labs, library, faculty or campus.
            </div>
        </div>

        <input type="text"
        id="question"
        placeholder="Ask your question...">

        <button onclick="askAI()">Ask</button>
    `);
}

function askAI() {

    let question =
        document.getElementById("question").value.toLowerCase();

    let answer = "";

    if (question.includes("lab")) {
        answer =
        "📍 CSE Lab is in Block A, 2nd Floor, Room 204.";
    }

    else if (question.includes("next class")) {
        answer =
        "📅 Your next class is Data Structures at 10:00 AM.";
    }

    else if (question.includes("python") ||
             question.includes("teacher")) {
        answer =
        "👨‍🏫 Python is handled by the CSE department faculty.";
    }

    else if (question.includes("library")) {
        answer =
        "📚 Library is located near the Main Academic Block.";
    }

    else if (question.includes("canteen")) {
        answer =
        "🍔 Canteen is open from 9:00 AM to 5:00 PM.";
    }

    else {
        answer =
        "🤖 I am still learning. Please try asking about lab, timetable, library or canteen.";
    }

    document.getElementById("chatBox").innerHTML +=
        `<div class="user-msg">👤 ${question}</div>`;

    document.getElementById("chatBox").innerHTML +=
        `<div class="bot-msg">🤖 ${answer}</div>`;

    document.getElementById("question").value = "";
}


/* TIMETABLE */

function showTimetable() {

    openModal("📅 Smart Timetable", `

        <div class="info">
            <b>09:00 AM</b><br>
            Mathematics
        </div>

        <div class="info">
            <b>10:00 AM</b><br>
            Data Structures
        </div>

        <div class="info">
            <b>11:00 AM</b><br>
            Programming Lab
        </div>

        <div class="info">
            <b>01:30 PM</b><br>
            Communication Skills
        </div>
    `);
}


/* NAVIGATION */

function showNavigation() {

    openModal("🗺️ Smart Campus Navigation", `

        <select id="destination">
            <option>CSE Lab</option>
            <option>HOD Office</option>
            <option>Library</option>
            <option>Canteen</option>
            <option>Main Gate</option>
        </select>

        <button onclick="findRoute()">Take Me There 🚶</button>

        <div id="route"></div>
    `);
}

function findRoute() {

    let place =
        document.getElementById("destination").value;

    document.getElementById("route").innerHTML = `

        <div class="info">
            📍 Route to <b>${place}</b><br><br>

            Main Gate → Central Corridor
            → Block A → ${place}
            <br><br>

            🚶 Estimated walking time: 3 minutes
        </div>
    `;
}


/* QR */

function showQR() {

    openModal("📱 QR / Barcode Smart Scan", `

        <p>Enter Campus ID:</p>

        <input id="qrText"
        value="CSE-LAB-204">

        <button onclick="generateQR()">
            Generate QR
        </button>

        <div id="qrResult"
        style="margin-top:20px;text-align:center;">
        </div>
    `);
}

function generateQR() {

    let value =
        document.getElementById("qrText").value;

    document.getElementById("qrResult").innerHTML =
        `<div class="info">
            📱 QR Code Generated<br><br>
            <b>${value}</b>
        </div>`;
}


/* VOICE */

function startVoice() {

    if (!("webkitSpeechRecognition" in window)) {

        alert("Voice recognition is not supported in this browser.");
        return;
    }

    let recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = function(event) {

        let text =
            event.results[0][0].transcript;

        openModal("🎤 Voice Assistant", `
            <div class="info">
                You said:<br><br>
                <b>${text}</b>
            </div>

            <p>CampusAI is processing your question...</p>
        `);
    };
}


/* LIBRARY */

function showLibrary() {

    openModal("📚 Smart Library", `

        <input placeholder="Search book..."
        id="bookSearch">

        <button onclick="searchBook()">Search</button>

        <div id="bookResult"></div>
    `);
}

function searchBook() {

    let book =
        document.getElementById("bookSearch").value;

    document.getElementById("bookResult").innerHTML = `

        <div class="info">
            📖 Book: <b>${book}</b><br>
            ✍️ Author: Demo Author<br>
            📍 Shelf: CSE-A-12<br>
            🟢 Status: Available
        </div>
    `;
}


/* COMPLAINT */

function showComplaint() {

    openModal("🛠️ Smart Complaint System", `

        <input id="complaintName"
        placeholder="Your Name">

        <input id="complaintLocation"
        placeholder="Location">

        <textarea id="complaintText"
        placeholder="Describe your problem"></textarea>

        <button onclick="submitComplaint()">
            Submit Complaint
        </button>

        <p id="complaintResult"></p>
    `);
}

function submitComplaint() {

    let id =
        "CMP-" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("complaintResult").innerHTML = `
        <br>
        ✅ Complaint Registered!<br>
        Complaint ID: <b>${id}</b><br>
        Status: <b>Pending</b>
    `;
}


/* BUS */

function showBus() {

    openModal("🚌 College Bus Tracking", `

        <div class="info">
            🚌 Route 01<br>
            College → Dharamshala<br>
            Status: 🟢 On Route
        </div>

        <div class="info">
            🚌 Route 02<br>
            College → Kangra<br>
            Status: 🟢 On Time
        </div>

        <div class="info">
            🚌 Route 03<br>
            College → Main Market<br>
            Status: 🟡 10 min Delay
        </div>
    `);
}


/* CANTEEN */

function showCanteen() {

    openModal("🍔 Smart Canteen", `

        <div class="info">
            🍛 Rajma Rice — ₹60
        </div>

        <div class="info">
            🥪 Veg Sandwich — ₹40
        </div>

        <div class="info">
            🍜 Noodles — ₹50
        </div>

        <div class="info">
            ☕ Tea — ₹15
        </div>

        <div class="info">
            🥤 Cold Drink — ₹30
        </div>

        <p><b>⏰ Timing:</b> 9:00 AM – 5:00 PM</p>
    `);
}


/* FACULTY */

function showFaculty() {

    openModal("👨‍🏫 Faculty Information", `

        <div class="info">
            <b>CSE Department</b><br>
            Head of Department<br>
            Room: Block A
        </div>

        <div class="info">
            <b>Programming Faculty</b><br>
            Department of Computer Science
        </div>

        <div class="info">
            <b>Data Structures Faculty</b><br>
            Department of Computer Science
        </div>
    `);
}


/* NOTICES */

function showNotices() {

    openModal("📢 Notices & Events", `

        <div class="info">
            📢 Engineering Day — Coming Soon
        </div>

        <div class="info">
            📢 Internal Assessment Schedule Released
        </div>

        <div class="info">
            📢 Coding Competition Registration Open
        </div>
    `);
}


/* EMERGENCY */

function emergency() {

    openModal("🚨 Emergency SOS", `

        <div class="info">
            🚨 Emergency: <b>112</b>
        </div>

        <div class="info">
            👮 Security: <b>100</b>
        </div>

        <div class="info">
            🚑 Ambulance: <b>108</b>
        </div>

        <br>

        <button onclick="alert('Emergency alert sent!')">
            🚨 SEND SOS
        </button>

    `);
}