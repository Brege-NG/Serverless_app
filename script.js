async function fetchCounterData() {
    try {
        const response = await fetch(
            "https://bepfhiv46ttkajjw2jgvwbr5m40otvyc.lambda-url.us-east-1.on.aws/"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

async function updateAllCounters() {
    const count = await fetchCounterData();
    
    if (count !== null) {
        document.querySelector("#counter-number").innerHTML = `Views: ${count}`;
        document.querySelector(".legacy-counter").innerHTML = `Views: ${count}`;
    } else {
        // Fallback local
        const localCount = parseInt(localStorage.getItem('views') || 0) + 1;
        localStorage.setItem('views', localCount);
        document.querySelector("#counter-number").innerHTML = `Views: ${localCount}`;
        document.querySelector(".legacy-counter").innerHTML = `Views: ${localCount}`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateAllCounters();
    
    
});