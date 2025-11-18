// Computer Networks Syllabus Data
const syllabusData = [
    {
        unit: 1,
        title: "Introduction & Physical Layer",
        pdfFile: "unit1.pdf", // Place your PDF in the same folder and name it unit1.pdf
        topics: [
            { name: "Network Types (LAN, MAN, WAN)", important: true },
            { name: "Network Topologies", important: true },
            { name: "OSI Reference Model", important: true },
            { name: "TCP/IP Reference Model", important: true },
            { name: "Comparison of OSI and TCP/IP", important: true },
            { name: "Guided Media - Twisted-pair Cable", important: false },
            { name: "Guided Media - Coaxial Cable", important: false },
            { name: "Guided Media - Fiber Optic Cable", important: false },
            { name: "Unguided Media Introduction", important: false }
        ]
    },
    {
        unit: 2,
        title: "Data Link Layer",
        pdfFile: "unit2.pdf", // Place your PDF in the same folder and name it unit2.pdf
        topics: [
            { name: "Data Link Layer Design Issues", important: true },
            { name: "Framing - Fixed Size & Variable Size", important: true },
            { name: "Flow Control", important: true },
            { name: "Error Control", important: true },
            { name: "Error Detection and Correction Codes", important: true },
            { name: "CRC (Cyclic Redundancy Check)", important: true },
            { name: "Checksum & Internet Checksum", important: true },
            { name: "Services Provided to Network Layer", important: false },
            { name: "Simplex Protocol", important: false },
            { name: "Simplex Stop and Wait", important: true },
            { name: "Simplex Protocol for Noisy Channel", important: false },
            { name: "Sliding Window Protocol - One Bit", important: true },
            { name: "Go Back N Protocol", important: true },
            { name: "Selective Repeat Protocol", important: true },
            { name: "Stop and Wait Protocol", important: true },
            { name: "HDLC (High-Level Data Link Control)", important: true },
            { name: "PPP (Point-to-Point Protocol)", important: true }
        ]
    },
    {
        unit: 3,
        title: "Media Access Control & Wired LANs",
        pdfFile: "unit3.pdf", // Place your PDF in the same folder and name it unit3.pdf
        topics: [
            { name: "Random Access - ALOHA", important: true },
            { name: "CSMA (Carrier Sense Multiple Access)", important: true },
            { name: "CSMA/CD (Collision Detection)", important: true },
            { name: "CSMA/CA (Collision Avoidance)", important: true },
            { name: "Controlled Access - Reservation", important: false },
            { name: "Controlled Access - Polling", important: true },
            { name: "Controlled Access - Token Passing", important: true },
            { name: "FDMA (Frequency Division Multiple Access)", important: true },
            { name: "TDMA (Time Division Multiple Access)", important: true },
            { name: "CDMA (Code Division Multiple Access)", important: true },
            { name: "Ethernet Protocol", important: true },
            { name: "Standard Ethernet", important: true },
            { name: "Fast Ethernet (100 Mbps)", important: true },
            { name: "Gigabit Ethernet", important: true },
            { name: "10 Gigabit Ethernet", important: false }
        ]
    },
    {
        unit: 4,
        title: "Network Layer & Internetworking",
        pdfFile: "unit4.pdf", // Place your PDF in the same folder and name it unit4.pdf
        topics: [
            { name: "Network Layer Design Issues", important: true },
            { name: "Store and Forward Packet Switching", important: true },
            { name: "Services Provided to Transport Layer", important: false },
            { name: "Connectionless Service Implementation", important: true },
            { name: "Connection Oriented Service Implementation", important: true },
            { name: "Virtual Circuit vs Datagram Networks", important: true },
            { name: "Routing Algorithms - Optimality Principle", important: true },
            { name: "Shortest Path Routing", important: true },
            { name: "Flooding", important: false },
            { name: "Distance Vector Routing", important: true },
            { name: "Link State Routing", important: true },
            { name: "Hierarchical Routing", important: true },
            { name: "Congestion Control - General Principles", important: true },
            { name: "Congestion Prevention Policies", important: true },
            { name: "Traffic Aware Routing", important: false },
            { name: "Admission Control", important: true },
            { name: "Traffic Throttling", important: true },
            { name: "Load Shedding", important: false },
            { name: "Leaky Bucket Algorithm", important: true },
            { name: "Token Bucket Algorithm", important: true },
            { name: "Internetworking - How Networks Differ", important: false },
            { name: "Tunnelling", important: true },
            { name: "Internetwork Routing", important: true },
            { name: "Fragmentation", important: true },
            { name: "IPv4 Protocol & Header Format", important: true },
            { name: "IP Addresses & Classful Addressing", important: true },
            { name: "CIDR (Classless Inter-Domain Routing)", important: true },
            { name: "Subnetting", important: true },
            { name: "IPv6 - Main Header", important: true },
            { name: "Transition from IPv4 to IPv6", important: true },
            { name: "Comparison of IPv4 & IPv6", important: true }
        ]
    },
    {
        unit: 5,
        title: "Transport & Application Layer",
        pdfFile: "unit5.pdf", // Place your PDF in the same folder and name it unit5.pdf
        topics: [
            { name: "Transport Layer Introduction", important: false },
            { name: "Transport Layer Services", important: true },
            { name: "Port Numbers", important: true },
            { name: "UDP (User Datagram Protocol)", important: true },
            { name: "UDP Services & Applications", important: true },
            { name: "TCP (Transmission Control Protocol)", important: true },
            { name: "TCP Services & Features", important: true },
            { name: "TCP Segment Structure", important: true },
            { name: "TCP Connection Establishment", important: true },
            { name: "TCP Windows", important: true },
            { name: "TCP Flow Control", important: true },
            { name: "TCP Error Control", important: true },
            { name: "TCP Congestion Control", important: true },
            { name: "World Wide Web & HTTP", important: true },
            { name: "Electronic Mail Architecture", important: true },
            { name: "Web-based Mail", important: false },
            { name: "Email Security", important: true },
            { name: "TELNET - Remote Logging", important: true },
            { name: "DNS (Domain Name System)", important: true }
        ]
    }
];

// State Management
let progressData = {};
let currentTheme = 'light';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadProgressFromStorage();
    loadThemeFromStorage();
    renderUnits();
    updateOverallProgress();
    setupThemeToggle();
});

// Load Progress from LocalStorage
function loadProgressFromStorage() {
    const saved = localStorage.getItem('cnProgressData');
    if (saved) {
        progressData = JSON.parse(saved);
    } else {
        // Initialize progress data
        syllabusData.forEach(unit => {
            unit.topics.forEach((topic, index) => {
                const key = `unit${unit.unit}-topic${index}`;
                progressData[key] = false;
            });
        });
    }
}

// Save Progress to LocalStorage
function saveProgressToStorage() {
    localStorage.setItem('cnProgressData', JSON.stringify(progressData));
}

// Load Theme from LocalStorage
function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('cnTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.setAttribute('data-theme', currentTheme);
        updateThemeButton();
    }
}

// Save Theme to LocalStorage
function saveThemeToStorage() {
    localStorage.setItem('cnTheme', currentTheme);
}

// Setup Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        saveThemeToStorage();
        updateThemeButton();
    });
}

// Update Theme Button Text
function updateThemeButton() {
    const themeToggle = document.getElementById('themeToggle');
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

// Render All Units
function renderUnits() {
    const container = document.getElementById('unitsContainer');
    container.innerHTML = '';

    syllabusData.forEach(unit => {
        const unitCard = createUnitCard(unit);
        container.appendChild(unitCard);
    });
}

// Create Unit Card
function createUnitCard(unit) {
    const unitDiv = document.createElement('div');
    unitDiv.className = 'unit-card';

    const unitId = `unit${unit.unit}`;
    const collapseId = `collapse${unitId}`;

    // Calculate unit progress
    const unitProgress = calculateUnitProgress(unit.unit);

    // Unit Header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'unit-header';
    headerDiv.setAttribute('data-bs-toggle', 'collapse');
    headerDiv.setAttribute('data-bs-target', `#${collapseId}`);
    headerDiv.setAttribute('aria-expanded', 'false');
    headerDiv.setAttribute('aria-controls', collapseId);

    headerDiv.innerHTML = `
        <div class="unit-title-section">
            <h3 class="unit-title">UNIT ${unit.unit}: ${unit.title}</h3>
            <span class="unit-progress-mini">${unitProgress.completed}/${unitProgress.total} topics</span>
        </div>
        <div class="unit-actions">
            <button class="btn-pdf" onclick="event.stopPropagation(); openPDF('${unit.pdfFile}', 'Unit ${unit.unit}')">
                <i class="fas fa-file-pdf"></i> View PDF
            </button>
            <button class="btn-collapse">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    `;

    // Unit Body (Collapsible)
    const bodyDiv = document.createElement('div');
    bodyDiv.id = collapseId;
    bodyDiv.className = 'collapse';

    const bodyContent = document.createElement('div');
    bodyContent.className = 'unit-body';

    // Render Topics
    unit.topics.forEach((topic, index) => {
        const topicItem = createTopicItem(topic, unit.unit, index);
        bodyContent.appendChild(topicItem);
    });

    bodyDiv.appendChild(bodyContent);
    unitDiv.appendChild(headerDiv);
    unitDiv.appendChild(bodyDiv);

    return unitDiv;
}

// Create Topic Item
function createTopicItem(topic, unitNum, topicIndex) {
    const topicDiv = document.createElement('div');
    const key = `unit${unitNum}-topic${topicIndex}`;
    const isCompleted = progressData[key] || false;

    topicDiv.className = `topic-item ${isCompleted ? 'completed' : ''} ${topic.important ? 'important' : ''}`;

    const searchQuery = encodeURIComponent(`Computer Networks Unit ${unitNum} ${topic.name}`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

    topicDiv.innerHTML = `
        <div class="topic-name">${topic.name}</div>
        <div class="topic-actions">
            <a href="${youtubeUrl}" target="_blank" class="btn-youtube">
                <i class="fab fa-youtube"></i> YouTube
            </a>
            <div class="checkbox-wrapper">
                <input type="checkbox" class="topic-checkbox" 
                    data-unit="${unitNum}" 
                    data-topic="${topicIndex}" 
                    ${isCompleted ? 'checked' : ''}>
            </div>
        </div>
    `;

    // Add event listener to checkbox
    const checkbox = topicDiv.querySelector('.topic-checkbox');
    checkbox.addEventListener('change', (e) => {
        handleCheckboxChange(e, unitNum, topicIndex, topicDiv);
    });

    return topicDiv;
}

// Handle Checkbox Change
function handleCheckboxChange(event, unitNum, topicIndex, topicDiv) {
    const key = `unit${unitNum}-topic${topicIndex}`;
    progressData[key] = event.target.checked;

    // Update UI
    if (event.target.checked) {
        topicDiv.classList.add('completed');
    } else {
        topicDiv.classList.remove('completed');
    }

    // Save to storage
    saveProgressToStorage();

    // Update progress displays
    updateOverallProgress();
    updateUnitProgress(unitNum);
}

// Calculate Unit Progress
function calculateUnitProgress(unitNum) {
    const unit = syllabusData.find(u => u.unit === unitNum);
    if (!unit) return { completed: 0, total: 0 };

    let completed = 0;
    unit.topics.forEach((topic, index) => {
        const key = `unit${unitNum}-topic${index}`;
        if (progressData[key]) completed++;
    });

    return { completed, total: unit.topics.length };
}

// Update Unit Progress Display
function updateUnitProgress(unitNum) {
    const progress = calculateUnitProgress(unitNum);
    const unitHeader = document.querySelector(`[data-bs-target="#collapseunit${unitNum}"]`);
    if (unitHeader) {
        const progressSpan = unitHeader.querySelector('.unit-progress-mini');
        if (progressSpan) {
            progressSpan.textContent = `${progress.completed}/${progress.total} topics`;
        }
    }
}

// Update Overall Progress
function updateOverallProgress() {
    let totalTopics = 0;
    let completedTopics = 0;

    syllabusData.forEach(unit => {
        unit.topics.forEach((topic, index) => {
            totalTopics++;
            const key = `unit${unit.unit}-topic${index}`;
            if (progressData[key]) completedTopics++;
        });
    });

    // Update progress bar
    const progressBar = document.getElementById('overallProgress');
    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;

    // Update text
    document.getElementById('completedTopics').textContent = completedTopics;
    document.getElementById('totalTopics').textContent = totalTopics;
}

// Open PDF in New Tab
function openPDF(pdfFile, unitTitle) {
    window.open(pdfFile, '_blank');
}

// Make openPDF function globally accessible
window.openPDF = openPDF;