/* =========================================
   ELEMENTS
========================================= */

const pages =
    document.querySelectorAll(".page");

const navigationButtons =
    document.querySelectorAll("[data-go-to]");

const bottomNavigationButtons =
    document.querySelectorAll(".nav-button");

const desktopNavigationButtons =
    document.querySelectorAll(".desktop-nav-button");

const eventFilterButtons =
    document.querySelectorAll(".event-filter");

const eventsList =
    document.getElementById("events-list");

const profileTrigger =
    document.getElementById("profile-trigger");

const profileMenu =
    document.getElementById("profile-menu");

const eventBackButton =
    document.getElementById("event-back-button");

const activityBackButton =
    document.getElementById(
        "activity-back-button"
    );

const badgesBackButton =
    document.getElementById(
        "badges-back-button"
    );

const viewAllActivityButton =
    document.getElementById(
        "view-all-activity"
    );

const viewAllBadgesButton =
    document.getElementById(
        "view-all-badges"
    );

const badgeModal =
    document.getElementById(
        "badge-modal"
    );

const badgeModalClose =
    document.getElementById(
        "badge-modal-close"
    );

const badgeModalIcon =
    document.getElementById(
        "badge-modal-icon"
    );

const badgeModalName =
    document.getElementById(
        "badge-modal-name"
    );

const badgeModalDescription =
    document.getElementById(
        "badge-modal-description"
    );

const badgeModalDate =
    document.getElementById(
        "badge-modal-date"
    );

const openProfileButton =
    document.getElementById(
        "open-profile-button"
    );

const profileBackButton =
    document.getElementById(
        "profile-back-button"
    );

const memberCard =
    document.getElementById(
        "member-card"
    );

const cardQr =
    document.getElementById(
        "card-qr"
    );

const cardQrButton =
    document.getElementById(
        "card-qr-button"
    );

const qrModal =
    document.getElementById(
        "qr-modal"
    );

const qrModalClose =
    document.getElementById(
        "qr-modal-close"
    );

const qrModalCode =
    document.getElementById(
        "qr-modal-code"
    );

const openManagementButton =
    document.getElementById(
        "open-management-button"
    );

const managementMemberSearch =
    document.getElementById(
        "management-member-search"
    );

const searchMemberButton =
    document.getElementById(
        "search-member-button"
    );

const memberSearchBackButton =
    document.getElementById(
        "member-search-back-button"
    );

const memberRecordBackButton =
    document.getElementById(
        "member-record-back-button"
    );

const memberSearchInput =
    document.getElementById(
        "member-search-input"
    );

const memberSearchResults =
    document.getElementById(
        "member-search-results"
    );

const memberSearchMeta =
    document.getElementById(
        "member-search-meta"
    );

const viewMemberRecordsButton =
    document.getElementById(
        "view-member-records-button"
    );

const memberRecordsBackButton =
    document.getElementById(
        "member-records-back-button"
    );

const memberRecordsSearch =
    document.getElementById(
        "member-records-search"
    );

const memberRecordsList =
    document.getElementById(
        "member-records-list"
    );

const memberRecordsCount =
    document.getElementById(
        "member-records-count"
    );

const recordFilterButtons =
    document.querySelectorAll(
        ".record-filter"
    );

const manageEventsButton =
    document.getElementById(
        "manage-events-button"
    );

const eventManagementBackButton =
    document.getElementById(
        "event-management-back-button"
    );

const eventManagementCreateButton =
    document.getElementById(
        "event-management-create-button"
    );

const managedEventsList =
    document.getElementById(
        "managed-events-list"
    );

const managedEventFilterButtons =
    document.querySelectorAll(
        ".managed-event-filter"
    );

const createEventQuickButton =
    document.getElementById(
        "create-event-button"
    );

const createEventBackButton =
    document.getElementById(
        "create-event-back-button"
    );

const createEventForm =
    document.getElementById(
        "create-event-form"
    );

const registrationRequiredInput =
    document.getElementById(
        "event-registration-required"
    );

const registrationSettings =
    document.getElementById(
        "registration-settings"
    );

const managementUpcomingCount =
    document.getElementById(
        "management-upcoming-count"
    );

const managementCompletedCount =
    document.getElementById(
        "management-completed-count"
    );

const manageEventBackButton =
    document.getElementById(
        "manage-event-back-button"
    );

const manageEventDetails =
    document.getElementById(
        "manage-event-details"
    );

const eventStatusModal =
    document.getElementById(
        "event-status-modal"
    );

const eventStatusModalClose =
    document.getElementById(
        "event-status-modal-close"
    );

const eventStatusOptions =
    document.getElementById(
        "event-status-options"
    );

const eventFormTitle =
    document.getElementById(
        "event-form-title"
    );

const eventFormSubmitButton =
    document.getElementById(
        "event-form-submit-button"
    );

const attendanceBackButton =
    document.getElementById(
        "attendance-back-button"
    );

const attendanceEventTitle =
    document.getElementById(
        "attendance-event-title"
    );

const attendanceEventMeta =
    document.getElementById(
        "attendance-event-meta"
    );

const attendanceCount =
    document.getElementById(
        "attendance-count"
    );

const attendanceTotal =
    document.getElementById(
        "attendance-total"
    );

const attendanceRate =
    document.getElementById(
        "attendance-rate"
    );

const attendanceSearchInput =
    document.getElementById(
        "attendance-search-input"
    );

const attendanceResultsCount =
    document.getElementById(
        "attendance-results-count"
    );

const attendanceList =
    document.getElementById(
        "attendance-list"
    );

/* =========================================
   MEMBER INFORMATION
========================================= */

function renderMemberInformation() {

    document.getElementById("welcome-name").textContent =
        currentMember.nickname;

    document.getElementById("header-name").textContent =
        currentMember.nickname;

    document.getElementById("card-name").textContent =
        currentMember.name;

    document.getElementById("card-role").textContent =
        currentMember.role;

    document.getElementById("card-position").textContent =
        `${currentMember.position} — ${currentMember.positionArea}`;

    document.getElementById("card-specialization").textContent =
        currentMember.specialization;

    document.getElementById("card-member-id").textContent =
        currentMember.memberId;

    document.getElementById("card-back-name").textContent =
    currentMember.name;

    document.getElementById("card-back-member-id").textContent =
        currentMember.memberId;

    document.getElementById("qr-modal-title").textContent =
        currentMember.name;

    document.getElementById("qr-modal-member-id").textContent =
        currentMember.memberId;

    document.getElementById("home-points").textContent =
        currentMember.points;

    document.getElementById("journey-points").textContent =
        currentMember.points;

    document.getElementById("home-academic-year").textContent =
        currentMember.academicYear;

    document.getElementById("journey-year").textContent =
        `${currentMember.academicYear} • ${currentMember.semester}`;


    const membershipStatus =
        document.getElementById("membership-status");

    if (currentMember.membershipStatus === "active") {

        membershipStatus.textContent =
            "Active Member";

    } else {

        membershipStatus.textContent =
            "Membership Inactive";

    }

    const managementMenuSection =
        document.getElementById(
            "management-menu-section"
        );


    managementMenuSection.hidden =
        !currentMember.permissions.management;

}

/* =========================================
   MEMBER QR
========================================= */

function renderMemberQr() {

    cardQr.innerHTML = "";

    qrModalCode.innerHTML = "";


    new QRCode(
        cardQr,
        {
            text: currentMember.qrCredential,
            width: 110,
            height: 110,
            colorDark: "#111111",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }
    );


    new QRCode(
        qrModalCode,
        {
            text: currentMember.qrCredential,
            width: 220,
            height: 220,
            colorDark: "#111111",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }
    );

}

/* =========================================
   MEMBER CARD
========================================= */

function toggleMemberCard() {

    const isFlipped =
        memberCard.classList.toggle(
            "flipped"
        );


    memberCard.setAttribute(
        "aria-pressed",
        isFlipped
    );

}


memberCard.addEventListener(
    "click",
    toggleMemberCard
);

memberCard.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            toggleMemberCard();

        }

    }
);

cardQrButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openQrModal();

    }
);

function openQrModal() {

    qrModal.classList.add(
        "open"
    );

    qrModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeQrModal() {

    qrModal.classList.remove(
        "open"
    );

    qrModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}

qrModalClose.addEventListener(
    "click",
    closeQrModal
);


qrModal.addEventListener(
    "click",
    (event) => {

        if (event.target === qrModal) {

            closeQrModal();

        }

    }
);

/* =========================================
   PROFILE
========================================= */

function renderProfile() {

    document.getElementById(
        "profile-full-name"
    ).textContent =
        currentMember.name;


    document.getElementById(
        "profile-role-display"
    ).textContent =
        currentMember.role;


    document.getElementById(
        "profile-position-display"
    ).textContent =
        `${currentMember.position} — ${currentMember.positionArea}`;


    document.getElementById(
        "profile-member-id"
    ).textContent =
        currentMember.memberId;


    document.getElementById(
        "profile-specialization"
    ).textContent =
        currentMember.specialization;


    document.getElementById(
        "profile-year-level"
    ).textContent =
        currentMember.yearLevel;


    document.getElementById(
        "profile-academic-year"
    ).textContent =
        currentMember.academicYear;


    document.getElementById(
        "profile-role"
    ).textContent =
        currentMember.role;


    document.getElementById(
        "profile-position"
    ).textContent =
        `${currentMember.position} — ${currentMember.positionArea}`;


    const membershipStatus =
        document.getElementById(
            "profile-membership-status"
        );


    membershipStatus.textContent =
        currentMember.membershipStatus === "active"
            ? "Active"
            : "Inactive";


    const initials =
        currentMember.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();


    document.getElementById(
        "profile-avatar-large"
    ).textContent =
        initials;
}

/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageName) {

    pages.forEach((page) => {

        const isActive =
            page.dataset.page === pageName;

        page.classList.toggle(
            "active",
            isActive
        );

    });


    let navigationPage =
    pageName;


if (pageName === "event-details") {

    navigationPage =
        "events";

}


if (
    pageName === "activity-history" ||
    pageName === "badge-collection"
) {

    navigationPage =
        "journey";

}

if (pageName === "profile") {

    navigationPage =
        "home";

}

    bottomNavigationButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.goTo === navigationPage
        );

    });


    desktopNavigationButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.goTo === navigationPage
        );

});


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


navigationButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const pageName =
            button.dataset.goTo;

        showPage(pageName);

    });

});


eventBackButton.addEventListener(
    "click",
    () => {

        showPage("events");

    }
);


viewAllActivityButton.addEventListener(
    "click",
    () => {

        renderActivityHistory();

        showPage("activity-history");

    }
);


viewAllBadgesButton.addEventListener(
    "click",
    () => {

        renderBadgeCollection();

        showPage("badge-collection");

    }
);


activityBackButton.addEventListener(
    "click",
    () => {

        showPage("journey");

    }
);


badgesBackButton.addEventListener(
    "click",
    () => {

        showPage("journey");

    }
);


openProfileButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        profileMenu.classList.remove(
            "open"
        );

        profileTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

        renderProfile();

        showPage("profile");

    }
);


profileBackButton.addEventListener(
    "click",
    () => {

        showPage("home");

    }
);

openManagementButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        profileMenu.classList.remove(
            "open"
        );

        profileTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

        showPage("management");

    }
);

if (managementMemberSearch) {

    managementMemberSearch.addEventListener(
        "click",
        () => {

            renderMemberSearch();

            showPage("member-search");

            memberSearchInput.focus();

        }
    );

}


if (searchMemberButton) {

    searchMemberButton.addEventListener(
        "click",
        () => {

            renderMemberSearch();

            showPage("member-search");

            memberSearchInput.focus();

        }
    );

}


memberSearchBackButton.addEventListener(
    "click",
    () => {

        showPage("management");

    }
);

memberRecordBackButton.addEventListener(
    "click",
    () => {

        showPage(
            memberRecordSource
        );

    }
);


if (viewMemberRecordsButton) {

    viewMemberRecordsButton.addEventListener(
        "click",
        () => {

            showPage("member-records");

            renderMemberRecords();

        }
    );

}


memberRecordsBackButton.addEventListener(
    "click",
    () => {

        showPage("management");

    }
);

if (manageEventsButton) {

    manageEventsButton.addEventListener(
        "click",
        () => {

            renderManagedEvents();

            showPage(
                "event-management"
            );

        }
    );

}


if (eventManagementBackButton) {

    eventManagementBackButton.addEventListener(
        "click",
        () => {

            showPage(
                "management"
            );

        }
    );

}

let eventFormMode =
    "create";

let editingEventId =
    null;

function openCreateEventPage() {

    eventFormMode =
        "create";

    editingEventId =
        null;


    createEventForm.reset();


    registrationSettings.hidden =
        true;


    document.getElementById(
        "event-capacity-input"
    ).required =
        false;


    document.getElementById(
        "event-deadline-input"
    ).required =
        false;


    eventFormTitle.textContent =
        "Create Event";


    eventFormSubmitButton.textContent =
        "Create Event";

    setEventFormDateLimits();
        
    showPage(
        "create-event"
    );

}

function openEditEventPage() {

    const selectedEvent =
        events.find(
            (event) =>
                event.id ===
                selectedManagedEventId
        );


    if (!selectedEvent) {
        return;
    }


    eventFormMode =
        "edit";

    editingEventId =
        selectedEvent.id;


    eventFormTitle.textContent =
        "Edit Event";


    eventFormSubmitButton.textContent =
        "Save Changes";


    document.getElementById(
        "event-title-input"
    ).value =
        selectedEvent.title;


    document.getElementById(
        "event-category-input"
    ).value =
        selectedEvent.category;


    document.getElementById(
        "event-description-input"
    ).value =
        selectedEvent.description;


    document.getElementById(
        "event-venue-input"
    ).value =
        selectedEvent.venue;


    document.getElementById(
        "event-points-input"
    ).value =
        selectedEvent.points ??
        selectedEvent.pointsEarned ??
        0;


    const registrationRequired =
        Boolean(
            selectedEvent.registration &&
            selectedEvent.registration.required
        );


    registrationRequiredInput.checked =
        registrationRequired;


    registrationSettings.hidden =
        !registrationRequired;


    document.getElementById(
        "event-capacity-input"
    ).required =
        registrationRequired;


    document.getElementById(
        "event-deadline-input"
    ).required =
        registrationRequired;


    if (registrationRequired) {

        document.getElementById(
            "event-capacity-input"
        ).value =
            selectedEvent.registration.capacity;


        document.getElementById(
            "event-deadline-input"
        ).value =
            selectedEvent.registration
                .deadlineValue || "";

    }


    /* Event date */

    document.getElementById(
        "event-date-input"
    ).value =
        selectedEvent.dateValue || "";


    /* Event time */

    document.getElementById(
        "event-time-input"
    ).value =
        selectedEvent.timeValue || "";


    /* Apply current date restrictions */

    setEventFormDateLimits();


    /* Set registration deadline max
       based on selected event date */

    document.getElementById(
        "event-date-input"
    ).dispatchEvent(
        new Event("change")
    );


    showPage(
        "create-event"
    );

}


if (eventManagementCreateButton) {

    eventManagementCreateButton.addEventListener(
        "click",
        openCreateEventPage
    );

}


if (createEventQuickButton) {

    createEventQuickButton.addEventListener(
        "click",
        openCreateEventPage
    );

}


if (createEventBackButton) {

    createEventBackButton.addEventListener(
        "click",
        () => {

            if (
                eventFormMode === "edit"
            ) {

                const selectedEvent =
                    events.find(
                        (event) =>
                            event.id ===
                            editingEventId
                    );


                if (selectedEvent) {

                    renderManagedEventDetails(
                        selectedEvent
                    );

                }


                showPage(
                    "manage-event"
                );

                return;
            }


            showPage(
                "event-management"
            );

        }
    );

}

registrationRequiredInput.addEventListener(
    "change",
    () => {

        const isRequired =
            registrationRequiredInput.checked;


        registrationSettings.hidden =
            !isRequired;


        document.getElementById(
            "event-capacity-input"
        ).required =
            isRequired;


        document.getElementById(
            "event-deadline-input"
        ).required =
            isRequired;

    }
);

document.getElementById(
    "event-date-input"
).addEventListener(
    "change",
    () => {

        const eventDateInput =
            document.getElementById(
                "event-date-input"
            );

        const deadlineInput =
            document.getElementById(
                "event-deadline-input"
            );


        if (!eventDateInput.value) {

            deadlineInput.removeAttribute(
                "max"
            );

            return;
        }


        const eventDate =
            new Date(
                `${eventDateInput.value}T00:00:00`
            );


        /* Deadline must be at least
           2 days before the event */

        const latestDeadline =
            new Date(eventDate);


        latestDeadline.setDate(
            latestDeadline.getDate() - 2
        );


        deadlineInput.max =
            [
                latestDeadline.getFullYear(),
                String(
                    latestDeadline.getMonth() + 1
                ).padStart(2, "0"),
                String(
                    latestDeadline.getDate()
                ).padStart(2, "0")
            ].join("-");


        /* Remove an already selected
           deadline if it became invalid */

        if (
            deadlineInput.value &&
            deadlineInput.value >
                deadlineInput.max
        ) {

            deadlineInput.value =
                "";

        }

    }
);

if (manageEventBackButton) {

    manageEventBackButton.addEventListener(
        "click",
        () => {

            renderManagedEvents();

            showPage(
                "event-management"
            );

        }
    );

}

/* =========================================
   HOME EVENT
========================================= */

function renderHomeEvent() {

    const container =
        document.getElementById("home-event");

    const upcomingEvent =
        events.find(
            (event) =>
                event.status === "upcoming"
        );


    if (!upcomingEvent) {

        container.innerHTML = `
            <div class="empty-state">
                No upcoming events yet.
            </div>
        `;

        return;
    }


    let registrationText =
        "No registration required";


    if (upcomingEvent.registration.required) {

        if (upcomingEvent.registration.registered) {

            registrationText =
                "You're registered";

        } else if (
            upcomingEvent.registration.count >=
            upcomingEvent.registration.capacity
        ) {

            registrationText =
                "Registration full";

        } else {

            registrationText =
                `${upcomingEvent.registration.count}/${upcomingEvent.registration.capacity} registered`;

        }

    }


    container.innerHTML = `
        <article class="home-event-card" data-event-id="${upcomingEvent.id}">

            <div class="home-event-top">

                <span class="home-event-category">
                    ${upcomingEvent.category}
                </span>

                <span class="event-status">
                    ${registrationText}
                </span>

            </div>

            <h3>
                ${upcomingEvent.title}
            </h3>

            <p>
                ${upcomingEvent.date}
                <br>
                ${upcomingEvent.time}
                <br>
                ${upcomingEvent.venue}
            </p>

        </article>
    `;
}

document
    .getElementById("home-event")
    .addEventListener(
        "click",
        (event) => {

            const eventCard =
                event.target.closest(
                    ".home-event-card"
                );


            if (!eventCard) {
                return;
            }


            openEventDetails(
                eventCard.dataset.eventId
            );

        }
    );


/* =========================================
   EVENTS
========================================= */

function getEventStatusText(event) {

    if (event.status === "past") {

        if (event.attended) {
            return `✓ Attended • +${event.pointsEarned} pts`;
        }

        return "Did not attend";
    }


    if (!event.registration.required) {
        return "No registration required";
    }


    if (event.registration.registered) {
        return "✓ Registered";
    }


    if (
        event.registration.count >=
        event.registration.capacity
    ) {
        return "Registration full";
    }


    return "Registration open";
}


function renderEvents(filter = "upcoming") {

    const filteredEvents =
        events.filter(
            (event) =>
                event.status === filter
        );


    if (filteredEvents.length === 0) {

        eventsList.innerHTML = `
            <div class="empty-state">
                No ${filter} events.
            </div>
        `;

        return;
    }


    eventsList.innerHTML =
        filteredEvents
            .map((event) => {

                const attendedClass =
                    event.attended
                        ? "attended"
                        : "";

                return `
                    <article
                        class="event-card"
                        data-event-id="${event.id}"
                    >

                        <div class="event-date">
                            ${event.shortDate}
                        </div>

                        <div class="event-content">

                            <h3>
                                ${event.title}
                            </h3>

                            <p class="event-meta">
                                ${event.time}
                                <br>
                                ${event.venue}
                            </p>

                        </div>

                        <div class="event-footer">

                            <span class="event-category">
                                ${event.category}
                            </span>

                            <span
                                class="
                                    event-status
                                    ${attendedClass}
                                "
                            >
                                ${getEventStatusText(event)}
                            </span>

                        </div>

                    </article>
                `;

            })
            .join("");
}


eventFilterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        eventFilterButtons.forEach(
            (filterButton) => {

                filterButton.classList.remove(
                    "active"
                );

            }
        );


        button.classList.add("active");


        renderEvents(
            button.dataset.eventFilter
        );

    });

});

/* =========================================
   EVENT DETAILS
========================================= */

let selectedEventId = null;


function openEventDetails(eventId) {

    selectedEventId =
        Number(eventId);


    const event =
        events.find(
            (event) =>
                event.id === selectedEventId
        );


    if (!event) {
        return;
    }


    renderEventDetails(event);

    showPage("event-details");
}


function renderEventDetails(event) {

    const container =
        document.getElementById(
            "event-details"
        );


    let participationMarkup = "";


    /* =====================================
       UPCOMING EVENT
    ====================================== */

    if (event.status === "upcoming") {

        if (!event.registration.required) {

            participationMarkup = `
                <section class="event-detail-section">

                    <p class="eyebrow">
                        REGISTRATION
                    </p>

                    <h2>
                        No Registration Required
                    </h2>

                    <p class="event-detail-text">
                        You can attend this event without
                        registering beforehand.
                    </p>

                </section>
            `;

        } else {

            const registration =
                event.registration;


            if (registration.registered) {

                participationMarkup = `
                    <section class="event-detail-section">

                        <p class="eyebrow">
                            REGISTRATION
                        </p>

                        <div class="registration-success">
                            ✓ You're Registered
                        </div>

                        <p class="event-detail-text">
                            Your slot for this event has
                            been reserved.
                        </p>

                        <button
                            class="secondary-button"
                            id="cancel-registration-button"
                            type="button"
                        >
                            Cancel Registration
                        </button>

                    </section>
                `;

            } else if (
                registration.count >=
                registration.capacity
            ) {

                participationMarkup = `
                    <section class="event-detail-section">

                        <p class="eyebrow">
                            REGISTRATION
                        </p>

                        <h2>
                            Registration Full
                        </h2>

                        <p class="event-detail-text">
                            All ${registration.capacity}
                            available slots have been taken.
                        </p>

                    </section>
                `;

            } else {

                const remainingSlots =
                    registration.capacity -
                    registration.count;


                participationMarkup = `
                    <section class="event-detail-section">

                        <div class="event-detail-heading">

                            <div>

                                <p class="eyebrow">
                                    REGISTRATION
                                </p>

                                <h2>
                                    Registration Open
                                </h2>

                            </div>

                            <span class="slots-left">
                                ${remainingSlots} slots left
                            </span>

                        </div>


                        <div class="registration-progress">

                            <div class="registration-numbers">

                                <span>
                                    ${registration.count}
                                    registered
                                </span>

                                <span>
                                    ${registration.capacity}
                                    capacity
                                </span>

                            </div>


                            <div class="progress-track">

                                <div
                                    class="progress-fill"
                                    style="
                                        width:
                                        ${
                                            (
                                                registration.count /
                                                registration.capacity
                                            ) * 100
                                        }%;
                                    "
                                ></div>

                            </div>

                        </div>


                        <p class="event-detail-text">
                            Registration closes on
                            <strong>
                                ${registration.deadline}
                            </strong>.
                        </p>


                        <button
                            class="primary-button"
                            id="register-event-button"
                            type="button"
                        >
                            Register for Event
                        </button>

                    </section>
                `;

            }

        }

    }


    /* =====================================
       PAST EVENT
    ====================================== */

    if (event.status === "past") {

        if (event.attended) {

            participationMarkup = `
                <section class="event-detail-section">

                    <p class="eyebrow">
                        YOUR PARTICIPATION
                    </p>

                    <div class="attendance-success">
                        ✓ Attended
                    </div>

                    <div class="points-earned">
                        +${event.pointsEarned}
                        <span>PTS</span>
                    </div>

                    <p class="event-detail-text">
                        Points earned from this event.
                    </p>

                </section>
            `;

        } else {

            participationMarkup = `
                <section class="event-detail-section">

                    <p class="eyebrow">
                        YOUR PARTICIPATION
                    </p>

                    <h2>
                        Did Not Attend
                    </h2>

                    <p class="event-detail-text">
                        No attendance was recorded for
                        your account at this event.
                    </p>

                </section>
            `;

        }

    }


    container.innerHTML = `

        <div class="event-detail-header">

            <span class="event-category-large">
                ${event.category}
            </span>

            <h1>
                ${event.title}
            </h1>

            <div class="event-detail-meta">

                <div>
                    <span class="detail-label">
                        DATE
                    </span>

                    <strong>
                        ${event.date}
                    </strong>
                </div>


                <div>
                    <span class="detail-label">
                        TIME
                    </span>

                    <strong>
                        ${event.time}
                    </strong>
                </div>


                <div>
                    <span class="detail-label">
                        VENUE
                    </span>

                    <strong>
                        ${event.venue}
                    </strong>
                </div>

            </div>

        </div>


        <section class="event-detail-section">

            <p class="eyebrow">
                ABOUT THE EVENT
            </p>

            <p class="event-description">
                ${event.description}
            </p>

        </section>


        ${
            event.points !== undefined
                ? `
                    <section class="event-detail-section">

                        <p class="eyebrow">
                            ENGAGEMENT
                        </p>

                        <h2>
                            ${event.points} Attendance Points
                        </h2>

                        <p class="event-detail-text">
                            Attend this event to earn
                            ${event.points} engagement points.
                        </p>

                    </section>
                `
                : ""
        }


        ${participationMarkup}
    `;


    attachEventDetailListeners();
}

/* REGISTRATION */

function attachEventDetailListeners() {

    const registerButton =
        document.getElementById(
            "register-event-button"
        );

    const cancelButton =
        document.getElementById(
            "cancel-registration-button"
        );


    if (registerButton) {

        registerButton.addEventListener(
            "click",
            registerForSelectedEvent
        );

    }


    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            cancelSelectedRegistration
        );

    }

}


function registerForSelectedEvent() {

    const event =
        events.find(
            (event) =>
                event.id === selectedEventId
        );


    if (
        !event ||
        !event.registration.required
    ) {
        return;
    }


    if (event.registration.registered) {
        return;
    }


    if (
        event.registration.count >=
        event.registration.capacity
    ) {
        return;
    }


    event.registration.registered = true;

    event.registration.count += 1;


    renderEventDetails(event);

    renderEvents();

    renderHomeEvent();
}


function cancelSelectedRegistration() {

    const event =
        events.find(
            (event) =>
                event.id === selectedEventId
        );


    if (
        !event ||
        !event.registration.required
    ) {
        return;
    }


    if (!event.registration.registered) {
        return;
    }


    event.registration.registered = false;

    event.registration.count -= 1;


    renderEventDetails(event);

    renderEvents();

    renderHomeEvent();
}

/* =========================================
   ACTIVITY
========================================= */

function createActivityMarkup(activity) {

    const isBadge =
        activity.type === "badge";


    const icon =
        isBadge
            ? "✦"
            : `+${activity.amount}`;


    return `
        <article class="activity-item">

            <div
                class="
                    activity-icon
                    ${isBadge ? "badge" : ""}
                "
            >
                ${icon}
            </div>

            <div class="activity-content">

                <strong>
                    ${activity.title}
                </strong>

                <span>
                    ${activity.description}
                </span>

            </div>

            <span class="activity-date">
                ${activity.date}
            </span>

        </article>
    `;
}


function renderActivities() {

    const homeContainer =
        document.getElementById(
            "home-activity"
        );

    const journeyContainer =
        document.getElementById(
            "journey-activity"
        );


    const homeActivities =
        activities.slice(0, 3);

    const journeyActivities =
        activities.slice(0, 4);


    homeContainer.innerHTML =
        homeActivities
            .map(createActivityMarkup)
            .join("");


    journeyContainer.innerHTML =
        journeyActivities
            .map(createActivityMarkup)
            .join("");
}

eventsList.addEventListener(
    "click",
    (event) => {

        const eventCard =
            event.target.closest(
                ".event-card"
            );


        if (!eventCard) {
            return;
        }


        openEventDetails(
            eventCard.dataset.eventId
        );

    }
);

/* =========================================
   ACTIVITY HISTORY
========================================= */

function renderActivityHistory() {

    const container =
        document.getElementById(
            "activity-history-list"
        );


    if (activities.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                No activity recorded yet.
            </div>
        `;

        return;
    }


    container.innerHTML =
        activities
            .map(createActivityMarkup)
            .join("");
}

/* =========================================
   BADGES
========================================= */

function createBadgeMarkup(badge) {

    return `
        <button
            class="badge-tile"
            type="button"
            data-badge-id="${badge.id}"
        >

            <div class="badge-tile-icon">
                ${badge.icon}
            </div>

            <span class="badge-tile-name">
                ${badge.name}
            </span>

        </button>
    `;
}


function renderBadges() {

    const container =
        document.getElementById(
            "badge-list"
        );


    const previewBadges =
        badges.slice(0, 4);


    container.innerHTML =
        previewBadges
            .map(createBadgeMarkup)
            .join("");
}

/* =========================================
   BADGE COLLECTION
========================================= */

function renderBadgeCollection() {

    const container =
        document.getElementById(
            "badge-collection-list"
        );

    const badgeCount =
        document.getElementById(
            "badge-count"
        );


    badgeCount.textContent =
        badges.length;


    if (badges.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                No badges earned yet.
            </div>
        `;

        return;
    }


    container.innerHTML =
        badges
            .map(createBadgeMarkup)
            .join("");
}

/* =========================================
   BADGE MODAL
========================================= */

function openBadgeModal(badgeId) {

    const badge =
        badges.find(
            (badge) =>
                badge.id === Number(badgeId)
        );


    if (!badge) {
        return;
    }


    badgeModalIcon.textContent =
        badge.icon;

    badgeModalName.textContent =
        badge.name;

    badgeModalDescription.textContent =
        badge.description;

    badgeModalDate.textContent =
        badge.earnedDate;


    badgeModal.classList.add(
        "open"
    );

    badgeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeBadgeModal() {

    badgeModal.classList.remove(
        "open"
    );

    badgeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}

document.addEventListener(
    "click",
    (event) => {

        const badgeTile =
            event.target.closest(
                ".badge-tile"
            );


        if (!badgeTile) {
            return;
        }


        openBadgeModal(
            badgeTile.dataset.badgeId
        );

    }
);


badgeModalClose.addEventListener(
    "click",
    closeBadgeModal
);


badgeModal.addEventListener(
    "click",
    (event) => {

        if (event.target === badgeModal) {

            closeBadgeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            badgeModal.classList.contains(
                "open"
            )
        ) {

            closeBadgeModal();

        }


        if (
            qrModal.classList.contains(
                "open"
            )
        ) {

            closeQrModal();

        }


        if (
            eventStatusModal.classList.contains(
                "open"
            )
        ) {

            closeEventStatusModal();

        }

    }
);

/* =========================================
   PROFILE MENU
========================================= */

profileTrigger.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        const isOpen =
            profileMenu.classList.toggle(
                "open"
            );


        profileTrigger.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


document.addEventListener(
    "click",
    () => {

        profileMenu.classList.remove(
            "open"
        );

        profileTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);

let memberRecordSource =
    "member-search";

/* =========================================
   MEMBER SEARCH
========================================= */

function getMemberRoleText(member) {

    if (
        member.position &&
        member.positionArea
    ) {

        return `${member.role} • ${member.position} — ${member.positionArea}`;

    }


    if (member.position) {

        return `${member.role} • ${member.position}`;

    }


    return member.role;
}


function createMemberResultMarkup(member) {

    const statusText =
        member.membershipStatus === "active"
            ? "Active"
            : "Inactive";


    return `
        <button
            class="member-result"
            type="button"
            data-member-id="${member.memberId}"
        >

            <div class="member-result-main">

                <strong>
                    ${member.name}
                </strong>

                <span>
                    ${getMemberRoleText(member)}
                </span>

                <small>
                    ${member.specialization}
                    •
                    ${member.yearLevel}
                </small>

            </div>


            <div class="member-result-side">

                <span
                    class="
                        member-result-status
                        ${member.membershipStatus}
                    "
                >
                    ${statusText}
                </span>

                <span class="member-result-arrow">
                    →
                </span>

            </div>

        </button>
    `;
}

function renderMemberSearch(query = "") {

    const normalizedQuery =
        query
            .trim()
            .toLowerCase();


    const filteredMembers =
        members.filter((member) => {

            const searchableText = `
                ${member.name}
                ${member.nickname}
                ${member.memberId}
            `.toLowerCase();


            return searchableText.includes(
                normalizedQuery
            );

        });


    if (normalizedQuery === "") {

        memberSearchMeta.textContent =
            `${members.length} members`;

    } else {

        memberSearchMeta.textContent =
            `${filteredMembers.length} result${
                filteredMembers.length === 1
                    ? ""
                    : "s"
            }`;

    }


    if (filteredMembers.length === 0) {

        memberSearchResults.innerHTML = `
            <div class="empty-state">

                No members found for
                "<strong>${query}</strong>".

            </div>
        `;

        return;
    }


    memberSearchResults.innerHTML =
        filteredMembers
            .map(createMemberResultMarkup)
            .join("");
}

memberSearchInput.addEventListener(
    "input",
    () => {

        renderMemberSearch(
            memberSearchInput.value
        );

    }
);

memberSearchResults.addEventListener(
    "click",
    (event) => {

        const result =
            event.target.closest(
                ".member-result"
            );


        if (!result) {
            return;
        }


        memberRecordSource =
            "member-search";


        openMemberRecord(
            result.dataset.memberId
        );

    }
);

/* =========================================
   MEMBER RECORD
========================================= */

function openMemberRecord(memberId) {

    const member =
        members.find(
            (member) =>
                member.memberId === memberId
        );


    if (!member) {
        return;
    }


    renderMemberRecord(member);

    showPage("member-record");
}


function renderMemberRecord(member) {

    const container =
        document.getElementById(
            "member-record"
        );


    const statusText =
        member.membershipStatus === "active"
            ? "Active Member"
            : "Inactive Member";


    container.innerHTML = `

        <div class="member-record-header">

            <p class="eyebrow">
                MEMBER RECORD
            </p>

            <h1>
                ${member.name}
            </h1>

            <p>
                ${getMemberRoleText(member)}
            </p>

        </div>


        <section class="member-record-section">

            <p class="eyebrow">
                MEMBERSHIP
            </p>


            <div class="profile-info-list">

                <div class="profile-info-row">

                    <span>
                        Member ID
                    </span>

                    <strong>
                        ${member.memberId}
                    </strong>

                </div>


                <div class="profile-info-row">

                    <span>
                        Status
                    </span>

                    <strong
                        class="
                            member-record-status
                            ${member.membershipStatus}
                        "
                    >
                        ${statusText}
                    </strong>

                </div>


                <div class="profile-info-row">

                    <span>
                        Specialization
                    </span>

                    <strong>
                        ${member.specialization}
                    </strong>

                </div>


                <div class="profile-info-row">

                    <span>
                        Year Level
                    </span>

                    <strong>
                        ${member.yearLevel}
                    </strong>

                </div>

            </div>

        </section>


        <section class="member-record-section">

            <p class="eyebrow">
                ENGAGEMENT
            </p>


            <div class="member-record-points">

                <strong>
                    ${member.points}
                </strong>

                <span>
                    CURRENT POINTS
                </span>

            </div>

        </section>


        <section class="member-record-section">

            <p class="eyebrow">
                RECORDS
            </p>


            <div class="management-link-list">

                <button
                    class="management-link-row"
                    type="button"
                >

                    <span>
                        Attendance Record
                    </span>

                    <span>
                        →
                    </span>

                </button>


                <button
                    class="management-link-row"
                    type="button"
                >

                    <span>
                        Engagement History
                    </span>

                    <span>
                        →
                    </span>

                </button>

            </div>

        </section>
    `;
}

let currentRecordFilter =
    "all";


/* =========================================
   MEMBER RECORDS
========================================= */

function getEngagementStatusText(status) {

    if (status === "low") {
        return "Low Engagement";
    }


    if (status === "none") {
        return "No engagement";
    }


    return "Engaged";
}


function renderMemberRecords() {

    const query =
        memberRecordsSearch.value
            .trim()
            .toLowerCase();


    const filteredMembers =
        members.filter((member) => {

            const matchesFilter =
                currentRecordFilter === "all" ||
                member.engagementStatus ===
                    currentRecordFilter;


            const searchableText = `
                ${member.name}
                ${member.nickname}
                ${member.memberId}
                ${member.specialization}
                ${member.role}
                ${member.positionArea || ""}
            `.toLowerCase();


            const matchesSearch =
                searchableText.includes(
                    query
                );


            return (
                matchesFilter &&
                matchesSearch
            );

        });


    memberRecordsCount.textContent =
        `${filteredMembers.length} member${
            filteredMembers.length === 1
                ? ""
                : "s"
        }`;


    if (filteredMembers.length === 0) {

        memberRecordsList.innerHTML = `
            <div class="empty-state">
                No member records match these filters.
            </div>
        `;

        return;
    }


    memberRecordsList.innerHTML =
        filteredMembers
            .map((member) => {

                return `
                    <button
                        class="member-result"
                        type="button"
                        data-member-id="${member.memberId}"
                    >

                        <div class="member-result-main">

                            <strong>
                                ${member.name}
                            </strong>

                            <span>
                                ${getMemberRoleText(member)}
                            </span>

                            <small>
                                ${member.memberId}
                                •
                                ${member.specialization}
                            </small>

                        </div>


                        <div class="member-result-side">

                            <span
                                class="
                                    engagement-status
                                    ${member.engagementStatus}
                                "
                            >
                                ${
                                    getEngagementStatusText(
                                        member.engagementStatus
                                    )
                                }
                            </span>

                            <span class="member-result-arrow">
                                →
                            </span>

                        </div>

                    </button>
                `;

            })
            .join("");
}


/* =========================================
   MEMBER RECORDS SEARCH
========================================= */

memberRecordsSearch.addEventListener(
    "input",
    renderMemberRecords
);


/* =========================================
   MEMBER RECORD FILTERS
========================================= */

recordFilterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                recordFilterButtons.forEach(
                    (filterButton) => {

                        filterButton.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentRecordFilter =
                    button.dataset.recordFilter;


                renderMemberRecords();

            }
        );

    }
);


/* =========================================
   OPEN MEMBER FROM RECORDS
========================================= */

memberRecordsList.addEventListener(
    "click",
    (event) => {

        const result =
            event.target.closest(
                ".member-result"
            );


        if (!result) {
            return;
        }


        memberRecordSource =
            "member-records";


        openMemberRecord(
            result.dataset.memberId
        );

    }
);

/* =========================================
   EVENT FORM VALIDATION
========================================= */

function validateEventSchedule(
    dateValue,
    registrationRequired,
    deadlineValue
) {

    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    /* =====================================
       EVENT DATE
       Must be at least 5 days from today
    ====================================== */

    const minimumEventDate =
        new Date(today);


    minimumEventDate.setDate(
        minimumEventDate.getDate() + 5
    );


    const eventDate =
        new Date(
            `${dateValue}T00:00:00`
        );


    if (
        eventDate <
        minimumEventDate
    ) {

        return {
            valid: false,
            message:
                "Events must be posted at least 5 days before the event date."
        };

    }


    /* =====================================
       REGISTRATION DEADLINE
    ====================================== */

    if (registrationRequired) {

        const registrationDeadline =
            new Date(
                `${deadlineValue}T00:00:00`
            );


        /* Deadline cannot be today
           or in the past */

        if (
            registrationDeadline <=
            today
        ) {

            return {
                valid: false,
                message:
                    "The registration deadline must be after today."
            };

        }


        /* Latest deadline =
           2 days before event */

        const latestDeadline =
            new Date(eventDate);


        latestDeadline.setDate(
            latestDeadline.getDate() - 2
        );


        if (
            registrationDeadline >
            latestDeadline
        ) {

            return {
                valid: false,
                message:
                    "Registration must close at least 2 days before the event."
            };

        }

    }


    return {
        valid: true
    };
}

function setEventFormDateLimits() {

    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    /* Earliest event:
       5 days from today */

    const minimumEventDate =
        new Date(today);


    minimumEventDate.setDate(
        minimumEventDate.getDate() + 5
    );


    /* Earliest registration deadline:
       tomorrow */

    const minimumDeadline =
        new Date(today);


    minimumDeadline.setDate(
        minimumDeadline.getDate() + 1
    );


    const formatDateForInput =
        (date) => {

            return [
                date.getFullYear(),
                String(
                    date.getMonth() + 1
                ).padStart(2, "0"),
                String(
                    date.getDate()
                ).padStart(2, "0")
            ].join("-");

        };


    const eventDateInput =
        document.getElementById(
            "event-date-input"
        );


    const deadlineInput =
        document.getElementById(
            "event-deadline-input"
        );


    eventDateInput.min =
        formatDateForInput(
            minimumEventDate
        );


    deadlineInput.min =
        formatDateForInput(
            minimumDeadline
        );


    /* Clear an old maximum from
       a previous Create/Edit session */

    deadlineInput.removeAttribute(
        "max"
    );

}

/* =========================================
   CREATE / EDIT EVENT
========================================= */

createEventForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        /* Event Details */

        const title =
            document.getElementById(
                "event-title-input"
            ).value.trim();


        const category =
            document.getElementById(
                "event-category-input"
            ).value;


        const description =
            document.getElementById(
                "event-description-input"
            ).value.trim();


        const dateValue =
            document.getElementById(
                "event-date-input"
            ).value;


        const timeValue =
            document.getElementById(
                "event-time-input"
            ).value;


        const venue =
            document.getElementById(
                "event-venue-input"
            ).value.trim();


        const points =
            Number(
                document.getElementById(
                    "event-points-input"
                ).value
            );


        const registrationRequired =
            registrationRequiredInput.checked;


        const deadlineValue =
            document.getElementById(
                "event-deadline-input"
            ).value;


        /* Validate Schedule */

        const scheduleValidation =
            validateEventSchedule(
                dateValue,
                registrationRequired,
                deadlineValue
            );


        if (!scheduleValidation.valid) {

            alert(
                scheduleValidation.message
            );

            return;

        }


        /* Format Event Date */

        const eventDate =
            new Date(
                `${dateValue}T00:00:00`
            );


        const formattedDate =
            eventDate.toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );


        const shortDate =
            eventDate
                .toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric"
                    }
                )
                .toUpperCase();


        /* Format Event Time */

        const formattedTime =
            new Date(
                `2000-01-01T${timeValue}`
            ).toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "2-digit"
                }
            );


        /* Build Event */

        const newEvent = {

            id:
                Math.max(
                    0,
                    ...events.map(
                        (event) =>
                            event.id
                    )
                ) + 1,

            title:
                title,

            category:
                category,

            description:
                description,

            date:
                formattedDate,

            dateValue:
                dateValue,

            shortDate:
                shortDate,

            time:
                formattedTime,

            timeValue:
                timeValue,

            venue:
                venue,

            status:
                "upcoming",

            registration: {
                required:
                    registrationRequired
            },

            points:
                points

        };


        /* Registration Settings */

        if (registrationRequired) {

            newEvent.registration = {

                required:
                    true,

                status:
                    "open",

                registered:
                    false,

                count:
                    0,

                capacity:
                    Number(
                        document.getElementById(
                            "event-capacity-input"
                        ).value
                    ),

                deadline:
                    new Date(
                        `${deadlineValue}T00:00:00`
                    ).toLocaleDateString(
                        "en-US",
                        {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    ),

                deadlineValue:
                    deadlineValue

            };

        }


        /* =====================================
           EDIT EXISTING EVENT
        ====================================== */

        if (
            eventFormMode === "edit"
        ) {

            const existingEvent =
                events.find(
                    (event) =>
                        event.id ===
                        editingEventId
                );


            if (!existingEvent) {
                return;
            }


            const oldDateValue =
                existingEvent.dateValue;


            const oldTimeValue =
                existingEvent.timeValue;


            existingEvent.title =
                newEvent.title;


            existingEvent.category =
                newEvent.category;


            existingEvent.description =
                newEvent.description;


            existingEvent.date =
                newEvent.date;


            existingEvent.dateValue =
                newEvent.dateValue;


            existingEvent.shortDate =
                newEvent.shortDate;


            existingEvent.time =
                newEvent.time;


            existingEvent.timeValue =
                newEvent.timeValue;


            existingEvent.venue =
                newEvent.venue;


            existingEvent.points =
                newEvent.points;


            existingEvent.registration =
                newEvent.registration;


            /* Detect Rescheduling */

            if (
                (
                    oldDateValue &&
                    oldDateValue !==
                        newEvent.dateValue
                ) ||
                (
                    oldTimeValue &&
                    oldTimeValue !==
                        newEvent.timeValue
                )
            ) {

                existingEvent.rescheduled =
                    true;

            }


            selectedManagedEventId =
                existingEvent.id;

        }


        /* =====================================
           CREATE NEW EVENT
        ====================================== */

        else {

            events.push(
                newEvent
            );

        }


        /* Refresh Event Views */

        currentManagedEventFilter =
            "upcoming";


        managedEventFilterButtons.forEach(
            (button) => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .managedEventFilter ===
                        "upcoming"
                );

            }
        );


        renderManagedEvents();

        renderEvents();

        renderHomeEvent();

        renderManagementEventSummary();


        /* =====================================
           NAVIGATION AFTER SAVE
        ====================================== */

        if (
            eventFormMode === "edit"
        ) {

            const editedEvent =
                events.find(
                    (event) =>
                        event.id ===
                        editingEventId
                );


            if (editedEvent) {

                renderManagedEventDetails(
                    editedEvent
                );


                showPage(
                    "manage-event"
                );

            }

        } else {

            showPage(
                "event-management"
            );

        }

    }
);

/* =========================================
   MANAGEMENT EVENT SUMMARY
========================================= */

function renderManagementEventSummary() {

    const upcomingCount =
        events.filter(
            (event) =>
                event.status === "upcoming"
        ).length;


    const completedCount =
        events.filter(
            (event) =>
                event.status === "past"
        ).length;


    managementUpcomingCount.textContent =
        upcomingCount;


    managementCompletedCount.textContent =
        completedCount;
}

/* =========================================
   EVENT MANAGEMENT
========================================= */

let currentManagedEventFilter =
    "upcoming";


function getManagedEventStatus(event) {

    if (event.status === "cancelled") {
        return "Cancelled";
    }


    if (event.status === "past") {
        return "Completed";
    }


    if (
        !event.registration ||
        !event.registration.required
    ) {
        return "No Registration";
    }


    if (
        event.registration.count >=
        event.registration.capacity
    ) {
        return "Registration Full";
    }


    return "Registration Open";
}


function renderManagedEvents() {

    const filteredEvents =
    events.filter(
        (event) => {

            if (
                currentManagedEventFilter ===
                "upcoming"
            ) {

                return (
                    event.status ===
                    "upcoming"
                );

            }


            if (
                currentManagedEventFilter ===
                "past"
            ) {

                return (
                    event.status === "past" ||
                    event.status === "cancelled"
                );

            }


            return false;

        }
    );


    if (filteredEvents.length === 0) {

        managedEventsList.innerHTML = `
            <div class="empty-state">
                No ${currentManagedEventFilter}
                events.
            </div>
        `;

        return;
    }


    managedEventsList.innerHTML =
        filteredEvents
            .map((event) => {

                let registrationMarkup = "";


                if (
                    event.status === "upcoming" &&
                    event.registration.required
                ) {

                    registrationMarkup = `
                        <div class="managed-event-registration">

                            <strong>
                                ${event.registration.count}
                                /
                                ${event.registration.capacity}
                            </strong>

                            <span>
                                registered
                            </span>

                        </div>
                    `;

                }


                return `
                    <button
                        class="managed-event-card"
                        type="button"
                        data-managed-event-id="${event.id}"
                    >

                        <div class="managed-event-main">

                            <span class="managed-event-category">
                                ${event.category}
                            </span>

                            <h2>
                                ${event.title}
                            </h2>

                            <p>
                                ${event.date}
                                •
                                ${event.time}
                            </p>

                            <p>
                                ${event.venue}
                            </p>

                        </div>


                        <div class="managed-event-side">

                            <span class="managed-event-status">
                                ${getManagedEventStatus(event)}
                            </span>

                            ${registrationMarkup}

                            <span class="managed-event-arrow">
                                →
                            </span>

                        </div>

                    </button>
                `;

            })
            .join("");
}

managedEventFilterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                managedEventFilterButtons.forEach(
                    (filterButton) => {

                        filterButton.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentManagedEventFilter =
                    button.dataset
                        .managedEventFilter;


                renderManagedEvents();

            }
        );

    }
);

if (managedEventsList) {

    managedEventsList.addEventListener(
        "click",
        (event) => {

            const eventCard =
                event.target.closest(
                    "[data-managed-event-id]"
                );


            if (!eventCard) {
                return;
            }


            const eventId =
                Number(
                    eventCard.dataset
                        .managedEventId
                );


            openManagedEvent(
                eventId
            );

        }
    );

}


/* =========================================
   MANAGE EVENT
========================================= */

let selectedManagedEventId =
    null;


function openManagedEvent(eventId) {

    selectedManagedEventId =
        Number(eventId);


    const selectedEvent =
        events.find(
            (event) =>
                event.id ===
                selectedManagedEventId
        );


    if (!selectedEvent) {
        return;
    }


    renderManagedEventDetails(
        selectedEvent
    );


    showPage(
        "manage-event"
    );
}


function renderManagedEventDetails(event) {

    let registrationMarkup = "";


    if (
    event.registration &&
    event.registration.required
    ) {

        registrationMarkup = `

            <section class="manage-event-section">

                <div class="manage-event-section-header">

                    <div>

                        <p class="eyebrow">
                            REGISTRATION
                        </p>

                        <h2>
                            Registration
                        </h2>

                    </div>

                    <span class="managed-event-status">
                        ${
                            event.registration.status ===
                            "open"
                                ? "Open"
                                : "Closed"
                        }
                    </span>

                </div>


                <div class="manage-event-stat-grid">

                    <div class="manage-event-stat">

                        <strong>
                            ${event.registration.count}
                        </strong>

                        <span>
                            Registered
                        </span>

                    </div>


                    <div class="manage-event-stat">

                        <strong>
                            ${event.registration.capacity}
                        </strong>

                        <span>
                            Capacity
                        </span>

                    </div>

                </div>


                <div class="manage-event-info">

                    <span>
                        Registration Deadline
                    </span>

                    <strong>
                        ${event.registration.deadline}
                    </strong>

                </div>

            </section>
        `;

    } else {

        registrationMarkup = `

            <section class="manage-event-section">

                <p class="eyebrow">
                    REGISTRATION
                </p>

                <h2>
                    No Registration Required
                </h2>

                <p class="manage-event-text">
                    Members can attend without registering beforehand.
                </p>

            </section>
        `;

    }


    let attendanceMarkup = "";


    if (event.status === "past") {

        attendanceMarkup = `

            <section class="manage-event-section">

                <div class="manage-event-section-header">

                    <div>

                        <p class="eyebrow">
                            ATTENDANCE
                        </p>

                        <h2>
                            Attendance Records
                        </h2>

                    </div>

                    <button
                        class="inline-link"
                        id="view-event-attendance-button"
                        type="button"
                    >
                        View Attendance →
                    </button>

                </div>

                <p class="manage-event-text">
                    Review attendance records and participation
                    for this event.
                </p>

            </section>
        `;

    } else if (
        event.status === "cancelled"
    ) {

        attendanceMarkup = `

            <section class="manage-event-section">

                <p class="eyebrow">
                    ATTENDANCE
                </p>

                <h2>
                    No Attendance
                </h2>

                <p class="manage-event-text">
                    Attendance is unavailable because
                    this event was cancelled.
                </p>

            </section>
        `;

    } else {

        attendanceMarkup = `

            <section class="manage-event-section">

                <p class="eyebrow">
                    ATTENDANCE
                </p>

                <h2>
                    Attendance
                </h2>

                <p class="manage-event-text">
                    Attendance tools will become available
                    for this event.
                </p>

            </section>
        `;

    }


    manageEventDetails.innerHTML = `

        <div class="manage-event-header">

            <div>

                <span class="event-category-large">
                    ${event.category}
                </span>

                <h1>
                    ${event.title}
                </h1>

                <span
                class="
                    manage-event-state
                    ${event.status}
                "
            >
                ${
                    event.status === "upcoming"
                        ? "Upcoming"
                        : event.status === "cancelled"
                            ? "Cancelled"
                            : "Completed"
                }
            </span>

            </div>


            <button
                class="secondary-button manage-event-edit-button"
                id="edit-managed-event-button"
                type="button"
            >
                Edit Event
            </button>

        </div>


        <section class="manage-event-section">

            <p class="eyebrow">
                EVENT DETAILS
            </p>


            <div class="manage-event-info-list">

                <div class="manage-event-info">

                    <span>
                        Date
                    </span>

                    <strong>
                        ${event.date}
                    </strong>

                </div>


                <div class="manage-event-info">

                    <span>
                        Time
                    </span>

                    <strong>
                        ${event.time}
                    </strong>

                </div>


                <div class="manage-event-info">

                    <span>
                        Venue
                    </span>

                    <strong>
                        ${event.venue}
                    </strong>

                </div>

            </div>


            <p class="manage-event-description">
                ${event.description}
            </p>

        </section>


        ${registrationMarkup}


        <section class="manage-event-section">

            <p class="eyebrow">
                ENGAGEMENT
            </p>


            <div class="manage-event-points">

                <strong>
                    ${event.points ?? event.pointsEarned ?? 0}
                </strong>

                <span>
                    ATTENDANCE POINTS
                </span>

            </div>

        </section>


        ${attendanceMarkup}


        <section class="manage-event-section">

            <p class="eyebrow">
                EVENT STATUS
            </p>


            <div class="manage-event-status-actions">

                <button
                    class="secondary-button"
                    id="manage-event-status-button"
                    type="button"
                >
                    Manage Status
                </button>

            </div>

        </section>
    `;
}

/* =========================================
   EVENT ATTENDANCE
========================================= */

function getAttendanceRecord(
    eventId,
    memberId
) {

    return attendanceRecords.find(
        (record) =>
            record.eventId === eventId &&
            record.memberId === memberId
    );

}


function openEventAttendance() {

    const selectedEvent =
        events.find(
            (event) =>
                event.id ===
                selectedManagedEventId
        );


    if (
        !selectedEvent ||
        selectedEvent.status !== "past"
    ) {
        return;
    }


    attendanceSearchInput.value =
        "";


    renderEventAttendance(
        selectedEvent
    );


    showPage(
        "event-attendance"
    );

}


function renderEventAttendance(
    selectedEvent
) {

    const query =
        attendanceSearchInput.value
            .trim()
            .toLowerCase();


    attendanceEventTitle.textContent =
        selectedEvent.title;


    attendanceEventMeta.textContent =
        `${selectedEvent.date} • ${selectedEvent.venue}`;


    const filteredMembers =
        members.filter(
            (member) => {

                const searchableText = `
                    ${member.name}
                    ${member.nickname}
                    ${member.memberId}
                    ${member.specialization}
                `.toLowerCase();


                return searchableText.includes(
                    query
                );

            }
        );


    const eventRecords =
        attendanceRecords.filter(
            (record) =>
                record.eventId ===
                selectedEvent.id
        );


    const attendedRecords =
        eventRecords.filter(
            (record) =>
                record.attended
        );


    attendanceCount.textContent =
        attendedRecords.length;


    attendanceTotal.textContent =
        members.length;


    const rate =
        members.length === 0
            ? 0
            : Math.round(
                (
                    attendedRecords.length /
                    members.length
                ) * 100
            );


    attendanceRate.textContent =
        `${rate}%`;


    attendanceResultsCount.textContent =
        `${filteredMembers.length} member${
            filteredMembers.length === 1
                ? ""
                : "s"
        }`;


    if (filteredMembers.length === 0) {

        attendanceList.innerHTML = `
            <div class="empty-state">
                No members found.
            </div>
        `;

        return;
    }


    attendanceList.innerHTML =
        filteredMembers
            .map(
                (member) => {

                    const record =
                        getAttendanceRecord(
                            selectedEvent.id,
                            member.memberId
                        );


                    const attended =
                        Boolean(
                            record &&
                            record.attended
                        );


                    return `
                        <article class="attendance-member">

                            <div class="attendance-member-info">

                                <strong>
                                    ${member.name}
                                </strong>

                                <span>
                                    ${member.memberId}
                                    •
                                    ${member.specialization}
                                </span>

                            </div>


                            <button
                                class="
                                    attendance-toggle
                                    ${
                                        attended
                                            ? "attended"
                                            : ""
                                    }
                                "
                                type="button"
                                data-attendance-member-id="${member.memberId}"
                            >
                                ${
                                    attended
                                        ? "✓ Attended"
                                        : "Mark Attended"
                                }
                            </button>

                        </article>
                    `;

                }
            )
            .join("");

}

attendanceSearchInput.addEventListener(
    "input",
    () => {

        const selectedEvent =
            events.find(
                (event) =>
                    event.id ===
                    selectedManagedEventId
            );


        if (!selectedEvent) {
            return;
        }


        renderEventAttendance(
            selectedEvent
        );

    }
);

attendanceList.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "[data-attendance-member-id]"
            );


        if (!button) {
            return;
        }


        const selectedEvent =
            events.find(
                (event) =>
                    event.id ===
                    selectedManagedEventId
            );


        if (!selectedEvent) {
            return;
        }


        const memberId =
            button.dataset
                .attendanceMemberId;


        let record =
            getAttendanceRecord(
                selectedEvent.id,
                memberId
            );


        if (record) {

            record.attended =
                !record.attended;


            record.pointsEarned =
                record.attended
                    ? (
                        selectedEvent.points ??
                        selectedEvent.pointsEarned ??
                        0
                    )
                    : 0;

        } else {

            record = {

                eventId:
                    selectedEvent.id,

                memberId:
                    memberId,

                attended:
                    true,

                pointsEarned:
                    selectedEvent.points ??
                    selectedEvent.pointsEarned ??
                    0

            };


            attendanceRecords.push(
                record
            );

        }


        renderEventAttendance(
            selectedEvent
        );

    }
);

attendanceBackButton.addEventListener(
    "click",
    () => {

        const selectedEvent =
            events.find(
                (event) =>
                    event.id ===
                    selectedManagedEventId
            );


        if (selectedEvent) {

            renderManagedEventDetails(
                selectedEvent
            );

        }


        showPage(
            "manage-event"
        );

    }
);

/* =========================================
   EVENT STATUS
========================================= */

function openEventStatusModal() {

    const selectedEvent =
        events.find(
            (event) =>
                event.id ===
                selectedManagedEventId
        );


    if (!selectedEvent) {
        return;
    }


    eventStatusOptions.innerHTML = `

        <button
            class="
                event-status-option
                ${
                    selectedEvent.status === "upcoming"
                        ? "selected"
                        : ""
                }
            "
            type="button"
            data-event-status="upcoming"
        >

            <div>
                <strong>
                    Upcoming
                </strong>

                <span>
                    Event is scheduled and visible
                    as an upcoming event.
                </span>
            </div>

        </button>


        <button
            class="
                event-status-option
                ${
                    selectedEvent.status === "past"
                        ? "selected"
                        : ""
                }
            "
            type="button"
            data-event-status="past"
        >

            <div>
                <strong>
                    Completed
                </strong>

                <span>
                    Event has already taken place.
                </span>
            </div>

        </button>


        <button
            class="
                event-status-option
                ${
                    selectedEvent.status === "cancelled"
                        ? "selected"
                        : ""
                }
            "
            type="button"
            data-event-status="cancelled"
        >

            <div>
                <strong>
                    Cancelled
                </strong>

                <span>
                    Event will no longer take place.
                </span>
            </div>

        </button>
    `;


    eventStatusModal.classList.add(
        "open"
    );

    eventStatusModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


function closeEventStatusModal() {

    eventStatusModal.classList.remove(
        "open"
    );

    eventStatusModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}

manageEventDetails.addEventListener(
    "click",
    (event) => {

        const statusButton =
            event.target.closest(
                "#manage-event-status-button"
            );


        if (statusButton) {

            openEventStatusModal();

            return;
        }


        const editButton =
            event.target.closest(
                "#edit-managed-event-button"
            );


        if (editButton) {

            openEditEventPage();

            return;
        }


        const attendanceButton =
            event.target.closest(
                "#view-event-attendance-button"
            );


        if (attendanceButton) {

            openEventAttendance();

        }

    }
);

eventStatusOptions.addEventListener(
    "click",
    (event) => {

        const option =
            event.target.closest(
                "[data-event-status]"
            );


        if (!option) {
            return;
        }


        const selectedEvent =
            events.find(
                (event) =>
                    event.id ===
                    selectedManagedEventId
            );


        if (!selectedEvent) {
            return;
        }


        selectedEvent.status =
            option.dataset.eventStatus;


        closeEventStatusModal();


        renderManagedEventDetails(
            selectedEvent
        );

        renderManagedEvents();

        renderEvents();

        renderHomeEvent();

        renderManagementEventSummary();

    }
);

eventStatusModalClose.addEventListener(
    "click",
    closeEventStatusModal
);


eventStatusModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            eventStatusModal
        ) {

            closeEventStatusModal();

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

function initializeApp() {

    renderMemberInformation();

    renderMemberQr();

    renderHomeEvent();

    renderEvents();

    renderActivities();

    renderBadges();

    renderActivityHistory();

    renderBadgeCollection();

    renderProfile();

    renderManagementEventSummary();

}


initializeApp();