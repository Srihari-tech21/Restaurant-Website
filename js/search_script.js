// Unified menu data from all categories
const allMenuItems = {
    starters: [
        {name: "Paneer Tikka", description: "Cubes of cottage cheese marinated in aromatic spices and grilled in tandoor", price: "₹180", type: "veg", page: "menu.html"},
        {name: "Veg Manchuria", description: "Crispy vegetable balls tossed in Indo-Chinese sauce", price: "₹220", type: "veg", page: "menu.html", spicy: true},
        {name: "Gobi 65", description: "Deep-fried cauliflower florets with spicy masala", price: "₹210", type: "veg", page: "menu.html", spicy: true},
        {name: "Hara Bhara Kebab", description: "Spinach and green pea patties shallow fried", price: "₹230", type: "veg", page: "menu.html"},
        {name: "Crispy Corn", description: "Fried sweet corn tossed with spices and herbs", price: "₹160", type: "veg", page: "menu.html", spicy: true},
        {name: "Chicken Tikka", description: "Boneless chicken marinated in yogurt and spices", price: "₹320", type: "nonveg", page: "menu.html"},
        {name: "Chicken 65", description: "Spicy deep-fried chicken bites with curry leaves", price: "₹300", type: "nonveg", page: "menu.html", spicy: true},
        {name: "Tandoori Chicken", description: "Chicken roasted in clay oven with smoky flavor", price: "₹380", type: "nonveg", page: "menu.html", spicy: true},
        {name: "Apollo Fish", description: "Boneless fish cubes tossed in spicy Andhra masala", price: "₹360", type: "nonveg", page: "menu.html"},
        {name: "Mutton Seekh Kebab", description: "Minced mutton skewers grilled with herbs and spices", price: "₹420", type: "nonveg", page: "menu.html", spicy: true}
    ],
    rotis: [
        {name: "Tandoori Roti", description: "Whole wheat bread baked in tandoor", price: "₹30", type: "veg", page: "rotis.html"},
        {name: "Butter Naan", description: "Soft refined flour bread topped with butter", price: "₹50", type: "veg", page: "rotis.html"},
        {name: "Garlic Naan", description: "Naan flavored with garlic and coriander", price: "₹70", type: "veg", page: "rotis.html"},
        {name: "Butter Kulcha", description: "Stuffed bread baked in clay oven", price: "₹80", type: "veg", page: "rotis.html"},
        {name: "Laccha Paratha", description: "Layered flaky whole wheat bread", price: "₹60", type: "veg", page: "rotis.html"}
    ],
    curries: [
        {name: "Paneer Butter Masala", description: "Cubes of cottage cheese in rich creamy tomato gravy", price: "₹220", type: "veg", page: "curries.html"},
        {name: "Palak Paneer", description: "Cottage cheese cooked in spinach gravy", price: "₹200", type: "veg", page: "curries.html"},
        {name: "Dal Makhani", description: "Creamy black lentils simmered with butter and spices", price: "₹180", type: "veg", page: "curries.html"},
        {name: "Mixed Vegetable Curry", description: "Seasonal vegetables cooked in aromatic gravy", price: "₹160", type: "veg", page: "curries.html"},
        {name: "Chicken Butter Masala", description: "Tender chicken pieces in rich buttery tomato gravy", price: "₹280", type: "nonveg", page: "curries.html"},
        {name: "Mutton Rogan Josh", description: "Kashmiri-style mutton curry with aromatic spices", price: "₹350", type: "nonveg", page: "curries.html", spicy: true},
        {name: "Fish Curry", description: "Fresh fish cooked in tangy coconut-based gravy", price: "₹260", type: "nonveg", page: "curries.html"}
    ],
    biryanis: [
        {name: "Veg Dum Biryani", description: "Fragrant basmati rice cooked with vegetables and spices", price: "₹260", type: "veg", page: "biryani.html"},
        {name: "Paneer Biryani", description: "Spiced rice layered with marinated paneer", price: "₹290", type: "veg", page: "biryani.html", spicy: true},
        {name: "Kaju Biryani", description: "Spiced rice layered with full of fried kaju", price: "₹280", type: "veg", page: "biryani.html"},
        {name: "Mushroom Biryani", description: "Spiced rice layered with marinated mushroom", price: "₹270", type: "veg", page: "biryani.html"},
        {name: "Avakay Biryani", description: "A fiery and tangy Andhra specialty with raw mango pickle flavor", price: "₹280", type: "veg", page: "biryani.html", spicy: true},
        {name: "Chicken Dum Biryani", description: "Hyderabad-style chicken biryani slow cooked on dum", price: "₹340", type: "nonveg", page: "biryani.html"},
        {name: "Mutton Biryani", description: "Aromatic rice cooked with tender mutton pieces", price: "₹450", type: "nonveg", page: "biryani.html", spicy: true},
        {name: "Fish Biryani", description: "Coastal-style biryani prepared with spicy fish masala", price: "₹380", type: "nonveg", page: "biryani.html", spicy: true},
        {name: "Prawn Biryani", description: "Basmati rice cooked with juicy prawns and spices", price: "₹420", type: "nonveg", page: "biryani.html"},
        {name: "Ulvacharu biryani", description: "Andhra-style biryani with horse gram soup and chicken or veggies", price: "₹370", type: "nonveg", page: "biryani.html", spicy: true}
    ],
    desserts: [
        {name: "Gulab Jamun", description: "Soft milk dumplings soaked in rose-flavored sugar syrup", price: "₹80", type: "veg", page: "desserts.html"},
        {name: "Rasmalai", description: "Soft cottage cheese patties in creamy milk syrup", price: "₹90", type: "veg", page: "desserts.html"},
        {name: "Kheer", description: "Traditional rice pudding with nuts and cardamom", price: "₹70", type: "veg", page: "desserts.html"},
        {name: "Ice Cream", description: "Assorted flavors of premium ice cream", price: "₹100", type: "veg", page: "desserts.html"}
    ],
    beverages: [
        {name: "Masala Chai", description: "Spiced Indian tea with milk and sugar", price: "₹40", type: "veg", page: "beverages.html"},
        {name: "Filter Coffee", description: "Traditional South Indian filtered coffee", price: "₹45", type: "veg", page: "beverages.html"},
        {name: "Fresh Lime Soda", description: "Refreshing lime drink with soda and spices", price: "₹50", type: "veg", page: "beverages.html"},
        {name: "Mango Lassi", description: "Sweet yogurt drink with mango pulp", price: "₹60", type: "veg", page: "beverages.html"},
        {name: "Badam Milk", description: "Nutritious almond milk with cardamom", price: "₹55", type: "veg", page: "beverages.html"}
    ]
};

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm === '') {
            searchResults.innerHTML = '';
            // Show current page items
            const currentPageItems = document.querySelectorAll('.menu-item');
            currentPageItems.forEach(item => item.style.display = 'block');
            return;
        }
        
        const results = [];
        
        // Search across all categories
        Object.keys(allMenuItems).forEach(category => {
            allMenuItems[category].forEach(item => {
                const nameMatch = item.name.toLowerCase().includes(searchTerm);
                const descMatch = item.description.toLowerCase().includes(searchTerm);
                
                if (nameMatch || descMatch) {
                    results.push({...item, category: category});
                }
            });
        });
        
        // Hide current page items when searching
        const currentPageItems = document.querySelectorAll('.menu-item');
        currentPageItems.forEach(item => item.style.display = 'none');
        
        // Display search results
        if (results.length > 0) {
            let resultsHTML = '<h3 class="category-title">Search Results</h3>';
            results.forEach(item => {
                const categoryDisplay = item.category.charAt(0).toUpperCase() + item.category.slice(1);
                const spicyBadge = item.spicy ? '<span class="badge-spicy">Spicy</span>' : '';
                const typeBadge = item.type === 'veg' ? 
                    '<span class="badge-veg">Veg</span>' : 
                    '<span class="badge-nonveg">Non Veg</span>';
                
                resultsHTML += `
                    <div class="search-result-item" onclick="window.location.href='${item.page}'">
                        <div class="search-result-category">${categoryDisplay}</div>
                        <span class="item-price">${item.price}</span>
                        <div class="item-name">
                            ${item.name}
                            ${typeBadge}
                            ${spicyBadge}
                        </div>
                        <div class="item-description">${item.description}</div>
                    </div>
                `;
            });
            searchResults.innerHTML = resultsHTML;
        } else {
            searchResults.innerHTML = '<div class="no-results">No menu items found matching your search.</div>';
        }
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);
