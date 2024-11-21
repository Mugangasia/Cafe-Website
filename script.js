document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const orderForm = document.getElementById('orderForm');
    
    orderForm.addEventListener('submit', function(event) {
        if (!orderForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        orderForm.classList.add('was-validated');
    }, false);

    // Pricing data
    const coffeePrices = {
        'latte': 200,
        'blackCoffee': 150,
        'espresso': 180,
        'cappuccino': 150,
        'caramelMacchiato': 275,
        'filterCoffee': 150,
        'hazelnut': 300,
        'mocha': 350
    };

    const pastryPrices = {
        'croissant': 90,
        'chocolateMuffin': 100,
        'biscuits': 50,
        'cookies': 50,
        'donut': 120,
        'cheesecake': 300,
        'garlicBread': 80
    };

    // Price calculation function
    function calculateTotal() {
        const coffeeSelect = document.getElementById('coffee');
        const pastrySelect = document.getElementById('pastry');
        const coffeeQuantity = document.getElementById('coffeeQuantity');
        const pastryQuantity = document.getElementById('pastryQuantity');

        const selectedCoffee = coffeeSelect.value;
        const selectedPastry = pastrySelect.value;
        const coffeeCount = coffeeQuantity.value;
        const pastryCount = pastryQuantity.value;

        // Remove any existing total price display
        const existingTotal = document.querySelector('.alert-info');
        if (existingTotal) {
            existingTotal.remove();
        }

        if (selectedCoffee && selectedPastry && coffeeCount && pastryCount) {
            const totalPrice = 
                (coffeePrices[selectedCoffee] * coffeeCount) + 
                (pastryPrices[selectedPastry] * pastryCount);
            
            // Create total price display
            const totalPriceDisplay = document.createElement('div');
            totalPriceDisplay.className = 'alert alert-info mt-3';
            totalPriceDisplay.textContent = `Total Price: ${totalPrice}/=`;
            
            // Append to form
            orderForm.appendChild(totalPriceDisplay);
        }
    }

    // Add event listeners for price calculation
    const priceCalculationElements = [
        document.getElementById('coffee'),
        document.getElementById('pastry'),
        document.getElementById('coffeeQuantity'),
        document.getElementById('pastryQuantity')
    ];

    priceCalculationElements.forEach(el => {
        if (el) {
            el.addEventListener('change', calculateTotal);
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});