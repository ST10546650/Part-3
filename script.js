/* =====================================
   SEARCH FUNCTION
===================================== */

function searchRooms() {
    const searchInput = document.getElementById("searchBox");
    const locationFilter = document.getElementById("filterLocation");
    const sortPrice = document.getElementById("sortPrice");
    const roomContainer = document.querySelector(".room-container");

    if (!searchInput || !locationFilter || !sortPrice || !roomContainer) return;

    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedLocation = locationFilter.value;
    const cards = Array.from(roomContainer.querySelectorAll(".room-card"));

    cards.forEach(card => {
        const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);
        const matchesLocation =
            !selectedLocation || card.dataset.location === selectedLocation;

        card.style.display = matchesSearch && matchesLocation ? "" : "none";
    });

    cards.sort((first, second) => {
        if (!sortPrice.value) {
            return Number(first.dataset.order) - Number(second.dataset.order);
        }

        const direction = sortPrice.value === "asc" ? 1 : -1;
        return (
            (Number(first.dataset.price) - Number(second.dataset.price)) * direction
        );
    });
    cards.forEach(card => roomContainer.appendChild(card));
}

async function loadListings() {
    const response = await fetch("listings.json");

    if (!response.ok) {
        throw new Error(`Failed to load listings: ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error("Listings data must be an array.");
    }

    const listingContainer = document.getElementById("listingContainer");
    if (!listingContainer) return;

    listingContainer.replaceChildren();
    data.forEach((listing, index) => {
        const card = document.createElement("article");
        card.className = "room-card";
        card.dataset.location = listing.location;
        card.dataset.price = String(listing.price);
        card.dataset.order = String(index);

        const image = document.createElement("img");
        image.src = listing.image;
        image.alt = `Room in ${listing.location}`;
        image.className = "lightbox-image";

        const heading = document.createElement("h3");
        heading.textContent = listing.name;

        const price = document.createElement("p");
        price.textContent = `R${Number(listing.price).toLocaleString("en-ZA")} per month`;

        card.append(image, heading, price);
        listingContainer.appendChild(card);
    });

    searchRooms();
}

function openModal() {
    const modal = document.getElementById("roomModal");

    if (!modal) return;

    modal.hidden = false;
    document.body.classList.add("no-scroll");
}

function closeModal() {
    const modal = document.getElementById("roomModal");

    if (!modal) return;

    modal.hidden = true;
    document.body.classList.remove("no-scroll");
}

/* =====================================
   FAQ ACCORDION
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBox");
    const locationFilter = document.getElementById("filterLocation");
    const sortPrice = document.getElementById("sortPrice");

    [searchInput, locationFilter, sortPrice].forEach(control => {
        if (control) {
            control.addEventListener("input", searchRooms);
            control.addEventListener("change", searchRooms);
        }
    });

    if (searchInput) {
        loadListings().catch(error => {
            console.error("Unable to load room listings.", error);
            const listingContainer =
                document.getElementById("listingContainer");
            if (listingContainer) {
                listingContainer.textContent =
                    "Unable to load room listings right now.";
            }
        });
    }

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImg");
    const lightboxClose = document.getElementById("closeLightbox");

    if (lightbox && lightboxImage && lightboxClose) {
        document.addEventListener("click", event => {
            const image = event.target.closest(".lightbox-image");
            if (image) {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightbox.style.display = "flex";
                document.body.classList.add("no-scroll");
                lightboxClose.focus();
            }
        });

        const closeLightbox = () => {
            lightbox.style.display = "none";
            document.body.classList.remove("no-scroll");
        };

        lightboxClose.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", event => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && lightbox.style.display === "flex") {
                closeLightbox();
            }
        });
    }

    const modal = document.getElementById("roomModal");

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && !modal.hidden) {
                closeModal();
            }
        });
    }

    const accordions =
    document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {

        accordion.addEventListener("click", () => {

            accordion.classList.toggle("active");

            let panel =
            accordion.nextElementSibling;

            if(panel.style.display === "block"){

                panel.style.display = "none";

            }else{

                panel.style.display = "block";

            }

        });

    });

});

/* =====================================
   ENQUIRY FORM VALIDATION
===================================== */

const enquiryForm =
document.getElementById("enquiryForm");

if(enquiryForm){

    enquiryForm.addEventListener("submit", (e)=>{

        e.preventDefault();

        const fullname =
        document.getElementById("fullName").value.trim();

        const phone =
        document.getElementById("phone").value.trim();

        const location =
        document.getElementById("location");

        const locationText =
            location.options[location.selectedIndex].text;

        const locationCost =
            Number(location.value);

        const roomType =
        document.getElementById("roomType");

        const moveDate =
        document.getElementById("moveDate").value;

        const error =
        document.getElementById("enquiryError");

        const result =
        document.getElementById("enquiryResult");

        error.textContent = "";
        result.replaceChildren();

        if(fullname.length < 3){

            error.textContent =
            "Full name must contain at least three characters.";

            return;
        }

        if(!/^[0-9]{10}$/.test(phone)){

            error.textContent =
            "Phone number must contain exactly 10 digits.";

            return;
        }

        if (!location.value || !roomType.value || !moveDate) {
            error.textContent =
                "Select a location, room type and move-in date.";
            return;
        }

        const rental = locationCost + Number(roomType.value);
        const heading = document.createElement("h3");
        heading.textContent = "Room Available";

        const locationResult = document.createElement("p");
        locationResult.textContent = `Location: ${locationText}`;

        const dateResult = document.createElement("p");
        dateResult.textContent = `Move-in Date: ${moveDate}`;

        const rentalResult = document.createElement("p");
        rentalResult.append("Estimated Rental: ");
        const rentalAmount = document.createElement("strong");
        rentalAmount.textContent = `R${rental.toLocaleString("en-ZA")}`;
        rentalResult.append(rentalAmount, " per month");

        const confirmation = document.createElement("p");
        confirmation.textContent =
            `Thank you ${fullname}. Your enquiry has been submitted successfully. ` +
            "A consultant will contact you within 24 hours.";

        result.append(
            heading,
            locationResult,
            dateResult,
            rentalResult,
            confirmation
        );
    });

}

/* =====================================
   CONTACT FORM VALIDATION
===================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        let name =
        document.getElementById("name").value.trim();

        let email =
        document.getElementById("emailContact").value.trim();

        let phone =
        document.getElementById("contactPhone").value.trim();

        let messageType =
        document.getElementById("messageType").value;

        let message =
        document.getElementById("contactMessage").value.trim();

        let error =
        document.getElementById("contactError");

        let success =
        document.getElementById("contactSuccess");

        error.textContent = "";
        success.textContent = "";

        if(name.length < 3){

            error.textContent =
            "Please enter a valid full name.";

            return;
        }

        if(!/^[0-9]{10}$/.test(phone)){

            error.textContent =
            "Phone number must contain exactly 10 digits.";

            return;
        }

        if(message.length < 10){

            error.textContent =
            "Message must contain at least 10 characters.";

            return;
        }

        success.textContent =
            "Validation successful. Opening email client...";

        let subject =
        encodeURIComponent(messageType);

        let body =
        encodeURIComponent(

`Full Name: ${name}

Email: ${email}

Phone Number: ${phone}

Message:

${message}`

        );

        window.location.href =
        `mailto:info@backroomfind.co.za?subject=${subject}&body=${body}`;

    });

}