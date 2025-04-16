// Fonction pour l'ancien compteur (simple)
const legacyCounter = document.querySelector(".legacy-counter");
async function updateLegacyCounter() {
    try {
        let response = await fetch(
            "https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/"
        );
        let data = await response.json();
        legacyCounter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error('Legacy counter error:', error);
        legacyCounter.innerHTML = 'Views: ∞';
    }
}

// Fonction pour le nouveau compteur (avec animations)
async function updateCounter() {
    try {
        const response = await fetch(
            "https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/"
        );
        
        if (!response.ok) throw new Error('Failed to fetch counter');
        
        const data = await response.json();
        counterElement.textContent = data.toLocaleString();
        
        // Animation
        counterElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 300);
        
    } catch (error) {
        console.error('Counter error:', error);
        counterElement.textContent = '∞';
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greeter-form');
    const nameInput = document.getElementById('name');
    const greetingBox = document.getElementById('greeting');
    const counterElement = document.getElementById('counter-number');
    
    // Chargement des compteurs
    updateLegacyCounter();
    updateCounter();
    
    // Mise à jour périodique du nouveau compteur
    setInterval(updateCounter, 30000);
    
    // Gestion du formulaire
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        if (!name) return;
        
        // Affichage du message
        greetingBox.textContent = `Hello, ${name}! Welcome to our serverless world!`;
        greetingBox.classList.add('show');
        
        // Effacement après 5 secondes
        setTimeout(() => {
            greetingBox.classList.remove('show');
            setTimeout(() => {
                greetingBox.textContent = '';
            }, 400);
        }, 7000);
        
        form.reset();
    });
});