const advertisementsData = [
    { title: 'Ad 1', description: 'This is the first advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact1@example.com' },
    { title: 'Ad 2', description: 'This is the second advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact2@example.com' },
    { title: 'Ad 3', description: 'This is the third advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact3@example.com' },
    { title: 'Ad 4', description: 'This is the fourth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact4@example.com' },
    { title: 'Ad 5', description: 'This is the fifth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact5@example.com' },
    { title: 'Ad 6', description: 'This is the sixth advertisement.', image: 'https://via.placeholder.com/150', contact: 'contact6@example.com' }
];

const advertisementsList = document.getElementById('advertisements-list');
const filterInput = document.getElementById('filter-input');

function createAdvertisementCard(ad) {
    const card = document.createElement('div');
    card.className = 'col-md-4';

    const cardContent = `
        <div class="card">
            <img src="${ad.image}" class="card-img-top" alt="${ad.title}">
            <div class="card-body">
                <h5 class="card-title">${ad.title}</h5>
                <p class="card-text">${ad.description}</p>
                <p class="card-text contact-info">Contact: <span class="contact-hidden">***</span><span class="contact-full d-none">${ad.contact}</span></p>
                <button class="btn btn-primary toggle-contact">Toggle Contact</button>
                <button class="btn btn-info details">Details</button>
            </div>
        </div>
    `;

    card.innerHTML = cardContent;
    return card;
}

function displayAdvertisements(ads) {
    advertisementsList.innerHTML = '';
    ads.forEach(ad => {
        const adCard = createAdvertisementCard(ad);
        advertisementsList.appendChild(adCard);
    });
}

function filterAdvertisements() {
    const filterValue = filterInput.value.toLowerCase();
    const filteredAds = advertisementsData.filter(ad => ad.title.toLowerCase().includes(filterValue));
    displayAdvertisements(filteredAds);
}

function toggleContact(event) {
    const cardBody = event.target.parentElement;
    const contactHidden = cardBody.querySelector('.contact-hidden');
    const contactFull = cardBody.querySelector('.contact-full');
    contactHidden.classList.toggle('d-none');
    contactFull.classList.toggle('d-none');
}

function showDetails(event) {
    const cardBody = event.target.parentElement;
    const contactFull = cardBody.querySelector('.contact-full').textContent;
    alert(`Contact information: ${contactFull}`);
}

document.addEventListener('DOMContentLoaded', () => {
    displayAdvertisements(advertisementsData);

    filterInput.addEventListener('input', filterAdvertisements);

    advertisementsList.addEventListener('click', event => {
        if (event.target.classList.contains('toggle-contact')) {
            toggleContact(event);
        }
        if (event.target.classList.contains('details')) {
            showDetails(event);
        }
    });
});
