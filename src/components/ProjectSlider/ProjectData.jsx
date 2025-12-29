export const projects = [
  {
    id: 1,
    title: "Borcelle Coffee Cafe Platform",
    description: "Full-service coffee cafe platform with table reservations, event bookings, and online food ordering. Integrates cafe seating management with e-commerce for merchandise, built with Laravel for seamless operations",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Tailwind"],
    image: "public/webkopi.png",
    emoji: "🛍️",
    year: "2024",
    // githubLink: "https://github.com/yourusername/ecommerce-platform",
    // demoLink: "https://demo-ecommerce.example.com",
    category: "E-Commerce",
    features: [
        "Table reservation system",
        "Digital menu with dietary filters",
        "In-cafe order via QR code",
        "Event & workshop bookings",
        "Merchandise online store",
        "Customer feedback system"
    ],
    stats: [
        { value: "1M+", label: "Cups Sold" },
        { value: "50+", label: "Brewing Methods" },
        { value: "24/7", label: "Fresh Roasting" },
        { value: "Zero Waste", label: "Initiative" }
    ]
  },
  {
    id: 2,
    title: "Modern School Web platform",
    description: "A comprehensive school management system with online registration, real-time notifications, and interactive learning modules. Features a modern, user-friendly interface for students, parents, and staff.",
    tech: ["Laravel", "PHP", "MySQL", "Livewire", "Tailwind CSS", "Alpine.js", "Redis"],
    image: "public/webschool.png",
    emoji: "🤖",
    year: "2024",
    // githubLink: "https://github.com/yourusername/ai-chat-app",
    demoLink: "https://asyariyah.arizex.xyz",
    category: "Education",
    features: [
        "Multi-role authentication (Laravel Sanctum)",
        "Real-time notifications with Laravel Echo",
        "Automated background jobs (Laravel Queue)",
        "RESTful API for mobile integration",
        "Admin panel with Laravel Nova",
        "Secure file upload system"
    ],
    stats: [
      { value: "50", label: "Teachers" },
      { value: "500+", label: "Students" }
    ]
  },
  {
    id: 3,
    title: "Telemedicine & Doctor Appointment System",
    description: "A comprehensive healthcare platform enabling online doctor consultations, appointment scheduling, and digital medical records. Built with Laravel for secure, scalable healthcare solutions with HIPAA-compliant data protection.",
    tech: ["Vue.js", "Express", "PostgreSQL", "WebSocket", "JWT"],
    image : "public/webdoctor.png",
    emoji: "🏥",
    year: "2023",
    // githubLink: "https://github.com/yourusername/task-manager",
    // demoLink: "https://demo-taskmanager.example.com",
    category: "Healthcare",
    features: [
        "Online doctor appointment booking",
        "Secure video consultations (WebRTC)",
        "Digital prescription system",
        "Electronic Health Records (EHR)",
        "Medicine delivery integration",
        "Real-time appointment reminders"
    ],
    stats: [
      { value: "200+", label: "Doctors" },
      { value: "10k", label: "Patients" }
    ]
  }
];