/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId, clickedButton = null) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    // Activate clicked navigation
    if (clickedButton) {
        clickedButton.classList.add("active");
    }

}


/* =========================
   NEW CASE
========================= */

function showNewCase() {

    showPage("new-case");

}


/* =========================
   CASE PROFILE
========================= */

function showCaseProfile() {

    showPage("case-profile");

}


/* =========================
   SYMPTOM CHIPS
========================= */

function toggleChip(button) {

    button.classList.toggle("selected");

}


/* =========================
   SAVE CASE
========================= */

function saveCase() {

    const name =
        document.getElementById("patientName").value;


    if (name.trim() === "") {

        showToast("Please enter patient name");

        return;

    }


    showToast("Case saved successfully ✓");


    setTimeout(() => {

        showPage("dashboard");

    }, 1200);

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("globalSearch");


searchInput.addEventListener("input", function () {

    const search =
        this.value.toLowerCase();


    const rows =
        document.querySelectorAll(".table-row");


    rows.forEach(row => {

        const text =
            row.textContent.toLowerCase();


        if (text.includes(search)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});