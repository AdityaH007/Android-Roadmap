// JavaScript to load content dynamically
document.addEventListener('DOMContentLoaded', function () {
    const roadmap = [
       {
            title: '1. Android Studio Basics',
            icon: 'fas fa-laptop-code',
            description: 'Learn how to set up Android Studio, use AVD (Android Virtual Device), navigate through the project structure, and create your first Android application.',
        },
        {
            title: '2. UI Components and Views',
            icon: 'fas fa-mobile-alt',
            description: 'Understand TextViews, EditTexts, Buttons, ImageViews, and design layouts using ConstraintLayout, LinearLayout, and FrameLayout. You\'ll dive into responsive UI design for different screen sizes.',
        },
        {
            title: '3. Navigation and Architecture',
            icon: 'fas fa-directions',
            description: 'Learn to implement intents for navigating between activities, fragments for creating dynamic UI, and MVVM architecture with ViewModel, LiveData, and Repository patterns.',
        },
        {
            title: '4. Data Persistence',
            icon: 'fas fa-database',
            description: 'Store data locally using SharedPreferences for small data, SQLite for relational data, and Room Database for abstraction over SQLite.',
        },
        {
            title: '5. Networking',
            icon: 'fas fa-network-wired',
            description: 'Integrate networking libraries like Retrofit, OkHttp for making API calls, handling JSON responses, and efficiently fetching data from REST APIs.',
        },
        {
            title: '6. Multithreading & Background Tasks',
            icon: 'fas fa-tasks',
            description: 'Master Kotlin Coroutines for asynchronous programming and perform background tasks using WorkManager, foreground services, and threading for smooth user experiences.',
        },
        {
            title: '7. Advanced UI Concepts',
            icon: 'fas fa-paint-brush',
            description: 'Learn to create custom views, animations, transitions, and work with Canvas for custom drawing.',
        },
        {
            title: '8. Jetpack Components',
            icon: 'fas fa-cubes',
            description: 'Explore Jetpack libraries like Jetpack Compose, Paging Library, Navigation Components, Data Binding, and Hilt for dependency injection.',
        },
        {
            title: '9. Location and Sensors',
            icon: 'fas fa-map-marker-alt',
            description: 'Work with Google Maps integration, location services, and Android\'s various sensors like accelerometer, gyroscope, and compass for creating location-aware applications.',
        },
        {
            title: '10. Firebase Integration',
            icon: 'fas fa-fire',
            description: 'Integrate Firebase Authentication, Firestore Database, Cloud Storage, and Cloud Messaging for building serverless apps with real-time features like push notifications.',
        },
        {
            title: '11. Performance Optimization',
            icon: 'fas fa-rocket',
            description: 'Learn techniques for optimizing your app performance through memory management, profiling tools, battery optimization, and reducing app startup times for smooth user experiences.',
        },
        {
            title: '12. Testing',
            icon: 'fas fa-vial',
            description: 'Write unit tests using JUnit, perform UI testing with Espresso, and integration testing to ensure the reliability and quality of your application before release.',
        },
        {
            title: '13. Publishing',
            icon: 'fas fa-cloud-upload-alt',
            description: 'Learn how to publish your app on the Google Play Store, manage app signing, handle updates, and integrate monetization options like in-app purchases and ads.',
        },
        {
            title: '14. Advanced Topics',
            icon: 'fas fa-code-branch',
            description: 'Explore more advanced topics like modularization for large codebases, NDK (Native Development Kit) for integrating C/C++ code, and Kotlin Multiplatform for cross-platform app development.',
        }   ];

    const tips = [
        "Tip 1: Always structure your Android project properly.",
        "Tip 2: Use ConstraintLayout for dynamic UIs.",
        "Tip 3: Make use of ViewModel to persist data.",
        "Tip 4: Optimize your app for low battery consumption.",
        "Tip 5: Use WorkManager for background tasks.",
        "Tip 6: Avoid memory leaks by cleaning up resources in onDestroy()."
    ];

    const timeline = document.getElementById('timeline');

    roadmap.forEach((item, index) => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container', index % 2 === 0 ? 'left' : 'right');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const icon = document.createElement('i');
        icon.className = item.icon + ' icon';

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        contentDiv.appendChild(icon);
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        containerDiv.appendChild(contentDiv);
        timeline.appendChild(containerDiv);
    });

    // Randomly populate background icons
    const backgroundIcons = document.querySelector('.background-icons');
    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-random';
        icon.style.setProperty('--i', i);
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.top = Math.random() * 100 + 'vh';
        backgroundIcons.appendChild(icon);
    }

    // Update tips every 5 seconds
    const tipText = document.getElementById('tip-text');
    let tipIndex = 0;
    function updateTip() {
        tipText.textContent = tips[tipIndex];
        tipIndex = (tipIndex + 1) % tips.length;
    }
    updateTip();
    setInterval(updateTip, 5000);
});

