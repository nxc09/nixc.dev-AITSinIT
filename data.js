const currentMember = {
    memberId: "AITS-25011",

    name: "Charlene Frias Hortel",
    nickname: "Nixc",

    specialization: "BSIT-WMA",
    yearLevel: "2nd Year",

    role: "Executive",
    position: "Vice President Internal",
    positionArea: "WMA",

    permissions: {
    management: true
    },

    points: 140,

    academicYear: "AY 2026–2027",
    semester: "1st Semester",

    membershipStatus: "active",

    qrCredential: "aits-dev-AITS-25011"
    
};

const members = [
    {
        memberId: "AITS-25011",
        name: "Charlene Frias Hortel",
        nickname: "Nixc",

        specialization: "BSIT-WMA",
        yearLevel: "2nd Year",

        role: "Executive",
        position: "Vice President Internal",
        positionArea: "WMA",

        points: 140,

        membershipStatus: "active",
        engagementStatus: "engaged"
    },

    {
        memberId: "AITS-25012",
        name: "Andrea Santos",
        nickname: "Andi",

        specialization: "BSIT-AGD",
        yearLevel: "2nd Year",

        role: "Director",
        position: "Director",
        positionArea: "Creatives",

        points: 95,

        membershipStatus: "active",
        engagementStatus: "engaged"
    },

    {
        memberId: "AITS-25013",
        name: "Miguel Reyes",
        nickname: "Miguel",

        specialization: "BSIT-CST",
        yearLevel: "1st Year",

        role: "Junior Officer",
        position: "Junior Officer",
        positionArea: "Technical",

        points: 70,

        membershipStatus: "active",
        engagementStatus: "none"
    },

    {
        memberId: "AITS-25014",
        name: "Sofia Garcia",
        nickname: "Sofia",

        specialization: "BSIT-BA",
        yearLevel: "3rd Year",

        role: "Member",
        position: null,
        positionArea: null,

        points: 35,

        membershipStatus: "active",
        engagementStatus: "low"
    },

    {
        memberId: "AITS-24008",
        name: "Daniel Cruz",
        nickname: "Dan",

        specialization: "BSIT-WMA",
        yearLevel: "3rd Year",

        role: "Member",
        position: null,
        positionArea: null,

        points: 10,

        membershipStatus: "active",
        engagementStatus: "none"
    }
];


const events = [
    {
        id: 1,

        title: "Cybersecurity Workshop",
        category: "Workshop",

        description:
            "Join AITS for an introductory workshop on cybersecurity concepts, online safety, and practical security practices for IT students.",

        date: "September 12, 2026",
        shortDate: "SEP 12",

        time: "1:00 PM – 5:00 PM",
        venue: "FEU Tech",

        status: "upcoming",

        registration: {
            required: true,
            status: "open",

            registered: false,

            count: 47,
            capacity: 60,

            deadline: "September 10, 2026"
        },

        points: 15
    },


    {
        id: 2,

        title: "AITS General Assembly",
        category: "General Assembly",

        description:
            "Meet fellow AITS members, hear updates from the organization, and learn about upcoming activities for the academic year.",

        date: "September 25, 2026",
        shortDate: "SEP 25",

        time: "2:00 PM – 5:00 PM",
        venue: "FEU Tech",

        status: "upcoming",

        registration: {
            required: false
        },

        points: 10
    },


    {
        id: 3,

        title: "Web Development Seminar",
        category: "Seminar",

        description:
            "A seminar exploring modern web development concepts, tools, and opportunities for aspiring developers.",

        date: "August 30, 2026",
        shortDate: "AUG 30",

        time: "1:00 PM – 4:00 PM",
        venue: "FEU Tech",

        status: "past",

        attended: true,

        pointsEarned: 10
    },


    {
        id: 4,

        title: "Community Outreach",
        category: "Outreach",

        description:
            "An AITS community outreach initiative bringing members together to volunteer and contribute beyond the organization.",

        date: "August 16, 2026",
        shortDate: "AUG 16",

        time: "8:00 AM – 2:00 PM",
        venue: "Quezon City",

        status: "past",

        attended: true,

        pointsEarned: 20
    },


    {
        id: 5,

        title: "Sports Fest",
        category: "Sports",

        description:
            "AITS members come together for a day of friendly competition, teamwork, and sports activities.",

        date: "August 8, 2026",
        shortDate: "AUG 08",

        time: "8:00 AM – 5:00 PM",
        venue: "FEU Tech Gym",

        status: "past",

        attended: false,

        pointsEarned: 0
    }
];


const activities = [
    {
        id: 1,
        type: "points",
        title: "Web Development Seminar",
        description: "Event attendance",
        amount: 10,
        date: "Aug 30"
    },

    {
        id: 2,
        type: "badge",
        title: "First Workshop",
        description: "Badge earned",
        date: "Aug 30"
    },

    {
        id: 3,
        type: "points",
        title: "Community Outreach",
        description: "Event participation",
        amount: 20,
        date: "Aug 16"
    },

    {
        id: 4,
        type: "points",
        title: "Hackathon Participant",
        description: "Event participation",
        amount: 20,
        date: "Aug 10"
    },

    {
        id: 5,
        type: "points",
        title: "Hackathon Winner",
        description: "Competition award",
        amount: 50,
        date: "Aug 10"
    }
];


const badges = [
    {
        id: 1,
        name: "First Event",
        description: "Attended your first AITS event.",
        icon: "✦",
        earnedDate: "August 8, 2026"
    },

    {
        id: 2,
        name: "First Workshop",
        description: "Participated in your first AITS workshop.",
        icon: "⌘",
        earnedDate: "August 30, 2026"
    },

    {
        id: 3,
        name: "Community",
        description: "Participated in an AITS outreach activity.",
        icon: "◇",
        earnedDate: "August 16, 2026"
    },

    {
        id: 4,
        name: "Competitor",
        description: "Participated in an AITS competition.",
        icon: "★",
        earnedDate: "August 10, 2026"
    }
];

const attendanceRecords = [

    {
        eventId: 3,
        memberId: "AITS-25011",
        attended: true,
        pointsEarned: 10
    },

    {
        eventId: 3,
        memberId: "AITS-25012",
        attended: true,
        pointsEarned: 10
    },

    {
        eventId: 3,
        memberId: "AITS-25013",
        attended: false,
        pointsEarned: 0
    },

    {
        eventId: 4,
        memberId: "AITS-25011",
        attended: true,
        pointsEarned: 20
    }

];
