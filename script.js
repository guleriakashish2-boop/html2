const departments = {

    "B.Tech": [
        "Computer Science & Engineering (CSE)",
        "Electrical & Electronics Engineering (EEE)",
        "Civil Engineering",
        "Artificial Intelligence & Machine Learning (AI/ML)",
        "Mechanical Engineering"
    ],

    "Law": [
        "Bachelor of Arts + Bachelor of Laws (BALLB)"
    ],

    "Other Programs": [
        "Bachelor of Computer Applications (BCA)",
        "Bachelor of Business Administration (BBA)"
    ],

    "Polytechnic": [
        "Computer Science & Engineering (CSE)",
        "Electrical & Electronics Engineering (EEE)",
        "Civil Engineering",
        "Mechanical Engineering"
    ]
};


function showHome() {

    document.getElementById("home").classList.remove("hidden");

    document.getElementById("programSection").classList.add("hidden");

}


function showCategory(category) {

    document.getElementById("home").classList.add("hidden");

    document.getElementById("programSection").classList.remove("hidden");

    document.getElementById("categoryTitle").textContent =
        category;

    const container =
        document.getElementById("departmentContainer");

    container.innerHTML = "";

    departments[category].forEach(department => {

        container.innerHTML += `

            <div class="department-card">

                <h3>${department}</h3>

                <button onclick="showInfo('${department}', 'Subjects')">
                    📚 Subjects
                </button>

                <button onclick="showInfo('${department}', 'Faculty')">
                    👨‍🏫 Faculty
                </button>

                <button onclick="showInfo('${department}', 'Timetable')">
                    📅 Timetable
                </button>

                <button onclick="showInfo('${department}', 'Notices')">
                    📢 Notices
                </button>

            </div>

        `;

    });

}


function showInfo(department, type) {

    alert(
        `${type} information for ${department} will be displayed here.`
    );

}


// AI ASSISTANT

function askAI() {

    const input =
        document.getElementById("userQuestion");

    const chatBox =
        document.getElementById("chatBox");

    const question =
        input.value.toLowerCase().trim();

    if (question === "") {
        return;
    }

    chatBox.innerHTML += `
        <p><b>You:</b> ${input.value}</p>
    `;

    let answer =
        "Sorry, I don't have that information yet. 🤔";


    if (
        question.includes("cse") ||
        question.includes("computer science")
    ) {

        answer =
            "CSE stands for Computer Science and Engineering. 💻 It is available under B.Tech and Polytechnic in our portal.";

    }

    else if (
        question.includes("eee") ||
        question.includes("electrical")
    ) {

        answer =
            "EEE stands for Electrical & Electronics Engineering. ⚡ It is available under B.Tech and Polytechnic.";

    }

    else if (question.includes("civil")) {

        answer =
            "Civil Engineering is available under B.Tech and Polytechnic. 🏗️";

    }

    else if (
        question.includes("ai") ||
        question.includes("machine learning")
    ) {

        answer =
            "Artificial Intelligence & Machine Learning (AI/ML) is available under B.Tech. 🤖";

    }

    else if (question.includes("mechanical")) {

        answer =
            "Mechanical Engineering is available under B.Tech and Polytechnic. ⚙️";

    }

    else if (
        question.includes("ballb") ||
        question.includes("law")
    ) {

        answer =
            "BALLB is our Law program. ⚖️";

    }

    else if (question.includes("bca")) {

        answer =
            "BCA stands for Bachelor of Computer Applications. 💻";

    }

    else if (question.includes("bba")) {

        answer =
            "BBA stands for Bachelor of Business Administration. 📊";

    }

    else if (question.includes("department")) {

        answer =
            "Our portal contains B.Tech, Law, Other Programs and Polytechnic departments. 🏫";

    }


    chatBox.innerHTML += `
        <p><b>AI:</b> ${answer}</p>
    `;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}
