const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

// Remove bottom borders
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
document.addEventListener('DOMContentLoaded', () => {
    // Tabs functionality (your existing code)
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('show');
    }

    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });

    // ✅ Sign In functionality
    const signInBtn = document.getElementById('signInBtn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Simulated Sign In Logic
            alert('Sign In Successful!');
            window.location.href = 'dashboard.html';
        });
    }
});
