// vendor-search.js

function displayVendors(filterText = "") {
    const container = document.getElementById('vendor-container');
    container.innerHTML = ""; // Clear current view

    const filtered = VENDORS.filter(v => 
        v.title.toLowerCase().includes(filterText.toLowerCase()) || 
        v.tags.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">No verified vendors found for "${filterText}"</p>`;
        return;
    }

    filtered.forEach(vendor => {
        const card = `
            <div class="vendor-card">
                <a href="${vendor.link}" class="card-link"></a>
                <div class="image-box" style="background: ${vendor.color};">
                    <i class="fas ${vendor.icon}"></i>
                    <div class="verified-seal"><i class="fas fa-certificate"></i></div>
                </div>
                <div class="info-box">
                    <h3>${vendor.title}</h3>
                    <p>${vendor.desc}</p>
                    <div class="trust-score">
                        <i class="fas fa-star"></i> Uttam Certified Partner
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Attach Search Event
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.hero-search-container input');
    
    // Initial Load
    displayVendors();

    // Listen for typing
    searchInput.addEventListener('input', (e) => {
        displayVendors(e.target.value);
    });

    // Prevent form from reloading page on Enter
    document.querySelector('.hero-search-container').addEventListener('submit', (e) => {
        e.preventDefault();
    });
});