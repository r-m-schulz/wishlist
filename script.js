// Christmas jokes array - Deutsche Weihnachtswitze
const christmasJokes = [
    {
        question: "Warum mögen Weihnachtsbäume kein Stricken?",
        answer: "Weil sie immer ihre Nadeln verlieren! 🎄😄"
    },
    {
        question: "Was sagt ein Schneemann zum anderen?",
        answer: "Riechst du auch Karotten? 🥕❄️"
    },
    {
        question: "Warum ist der Weihnachtsmann so gut im Verstecken?",
        answer: "Weil niemand ihn das ganze Jahr über sieht! 🎅👀"
    },
    {
        question: "Was macht ein Weihnachtsmann im Sommer?",
        answer: "Er geht in die Berge zum Skifahren! ⛷️🎅"
    },
    {
        question: "Warum trägt der Weihnachtsmann eine rote Jacke?",
        answer: "Weil er sonst nicht durch den Kamin passt! 🔴🎅"
    },
    {
        question: "Was ist rot-weiß und kann nicht den Berg hoch?",
        answer: "Der Weihnachtsmann mit einem gebrochenen Schlitten! 🎅❄️"
    },
    {
        question: "Was ist der Unterschied zwischen Weihnachten und Ostern?",
        answer: "An Weihnachten bringt der Osterhase keine Eier! 🐰🎄"
    },
    {
        question: "Okay Leute sorry aber mir gehen die Sprüche aus... Hab vielleicht zu viele Wünsche... Aber eigentlich brauche ich nichts sondern hab aufgeschrieben was mir so einfällt und was mir die letzten Wochen so über die Füße gelaufen ist. :)",
        answer: "Hab eure Love und das ist eigentlich genug :) 💙💛🧡💚💜❤️"
    },
    {
        question: "Was ist der Lieblingsfilm des Weihnachtsmanns?",
        answer: "Die Muppets Weihnachtsgeschichte! 🎬🎄"
    },
    {
        question: "Warum freuen sich die Schneeflocken auf Weihnachten?",
        answer: "Weil sie dann endlich tanzen können! ❄️💃"
    }
];

// Function to create a joke box
function createJokeBox(joke, index) {
    const jokeBox = document.createElement('div');
    jokeBox.className = 'joke-box-inline';
    jokeBox.setAttribute('data-animate', '');
    jokeBox.style.display = body.classList.contains('christmas-theme') ? 'block' : 'none';
    
    jokeBox.innerHTML = `
        <p class="joke-question">${joke.question}</p>
        <p class="joke-answer">${joke.answer}</p>
    `;
    
    return jokeBox;
}

// Generate Gift Items from gifts.js data
function generateGifts() {
    const giftsContainer = document.getElementById('giftsContainer');
    
    if (!giftsContainer || !gifts || gifts.length === 0) {
        console.error('No gifts data found or container not found');
        return;
    }
    
    // Calculate how many jokes we need (one between each gift)
    const totalJokes = Math.min(christmasJokes.length, gifts.length - 1);
    
    gifts.forEach((gift, index) => {
        // Add gift item
        const giftItem = document.createElement('div');
        giftItem.className = 'gift-item';
        giftItem.setAttribute('data-animate', '');
        
        giftItem.innerHTML = `
            <div class="gift-image">
                <img src="${gift.image}" alt="${gift.title}">
            </div>
            <div class="gift-content">
                <h2 class="gift-title">${gift.title}</h2>
                <p class="gift-description">${gift.description}</p>
                <div class="gift-links">
                    ${gift.links.map(link => {
                        if (link.modalImage) {
                            // Create a button for modal images
                            return `<button class="gift-link gift-modal-button" data-image="${link.modalImage}" data-text="${link.modalText || link.text || ''}">${link.text}</button>`;
                        } else {
                            // Regular link
                            return `<a href="${link.url}" target="_blank" class="gift-link">${link.text}</a>`;
                        }
                    }).join('')}
                </div>
            </div>
        `;
        
        giftsContainer.appendChild(giftItem);
        
        // Add joke box after each gift (except the last one)
        if (index < gifts.length - 1 && index < totalJokes) {
            const jokeBox = createJokeBox(christmasJokes[index], index);
            giftsContainer.appendChild(jokeBox);
        }
    });
    
    // After generating gifts, set up scroll animations
    setupScrollAnimations();
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference or default to professional
const savedTheme = localStorage.getItem('theme') || 'professional';
if (savedTheme === 'christmas') {
    body.classList.add('christmas-theme');
    themeIcon.textContent = '🎄';
    // Update texts for Christmas theme on load
    setTimeout(() => {
        updateTextsForTheme(true);
        // Show joke boxes if Christmas theme
        document.querySelectorAll('.joke-box-inline').forEach(box => {
            box.style.display = 'block';
        });
    }, 100);
} else {
    // Hide tree emoji on professional theme (surprise!)
    themeIcon.textContent = '⚙️';
}

// Confetti animation function
function createConfetti() {
    const colors = ['#ffd700', '#dc3545', '#28a745', '#ff6b6b', '#4ecdc4'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Christmas greeting function
function showChristmasGreeting() {
    const greeting = document.createElement('div');
    greeting.className = 'christmas-greeting';
    greeting.innerHTML = '🎄 Frohe Weihnachten! 🎄';
    document.body.appendChild(greeting);
    
    setTimeout(() => {
        greeting.classList.add('fade-out');
        setTimeout(() => {
            greeting.remove();
        }, 300);
    }, 2000);
}

// Update texts for Christmas theme
function updateTextsForTheme(isChristmas) {
    const introText = document.getElementById('introText');
    const jokeText = document.getElementById('jokeText');
    const endMessage = document.getElementById('endMessage');
    const endSubmessage = document.getElementById('endSubmessage');
    const contactTitle = document.getElementById('contactTitle');
    const contactText = document.getElementById('contactText');
    
    if (isChristmas) {
        // Christmas theme texts - funny and festive!
        if (introText) {
            introText.innerHTML = 'HOHOHOllo! Wie geht\'s so? 🎅 Willkommen zu meiner super coolen Wunschliste! ' +
                'Das sind alles nur <em>Wünsche</em> - also keine Panik, Geschenke sind total optional! ' +
                'Die Liebe von euch ist das Beste Geschenk überhaupt! ❤️🎄';
        }
        // Hide the main joke section in Christmas theme (jokes are now between gifts)
        const jokeSection = document.getElementById('jokeSection');
        if (jokeSection) {
            jokeSection.style.display = 'none';
        }
        
        // Show inline joke boxes
        document.querySelectorAll('.joke-box-inline').forEach(box => {
            box.style.display = 'block';
        });
        if (endMessage) {
            endMessage.textContent = 'Das war\'s! Das Ende der Wunschliste! HOHOHO! 🎄';
        }
        if (endSubmessage) {
            endSubmessage.textContent = 'Danke, dass du dir Zeit genommen hast! Du bist mein Fave! ❤️🎅';
        }
        if (contactTitle) {
            contactTitle.textContent = 'Hast du Fragen? HOHOHO! 🎅';
        }
        if (contactText) {
            contactText.textContent = 'Falls du Fragen hast oder Hilfe brauchst, meld dich einfach! ' +
                'Ich freue mich immer über ein Gespräch! HOHOHO! 🎅✨';
        }
    } else {
        // Professional theme texts
        if (introText) {
            introText.innerHTML = 'Willkommen! Dies ist eine einfache Wunschliste mit Dingen, die mir aufgefallen sind. ' +
                'Bitte wisse, dass dies nur <em>Wünsche</em> sind und nichts für ein Geschenk benötigt wird. ' +
                'Die Liebe der Familie ist mehr als genug! ❤️';
        }
        // Show the main joke section in professional theme
        const jokeSection = document.getElementById('jokeSection');
        if (jokeSection) {
            jokeSection.style.display = 'none'; // Keep hidden on professional theme
        }
        
        // Hide inline joke boxes
        document.querySelectorAll('.joke-box-inline').forEach(box => {
            box.style.display = 'none';
        });
        if (endMessage) {
            endMessage.textContent = 'Das ist das Ende der Wunschliste!';
        }
        if (endSubmessage) {
            endSubmessage.textContent = 'Vielen Dank, dass du dir die Zeit genommen hast, sie durchzusehen. ❤️';
        }
        if (contactTitle) {
            contactTitle.textContent = 'Hast du Fragen?';
        }
        if (contactText) {
            contactText.textContent = 'Falls du Fragen zu einem der Artikel hast oder Hilfe beim Finden von etwas brauchst, ' +
                'melde dich gerne! Ich freue mich immer über ein Gespräch. 🎅';
        }
    }
}

themeToggle.addEventListener('click', () => {
    const isSwitchingToChristmas = !body.classList.contains('christmas-theme');
    
    body.classList.toggle('christmas-theme');
    
    if (body.classList.contains('christmas-theme')) {
        localStorage.setItem('theme', 'christmas');
        // Show tree emoji as surprise when switching to Christmas!
        themeIcon.textContent = '🎄';
        
        // Scroll to top when switching to Christmas
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Update texts for Christmas theme
        updateTextsForTheme(true);
        
        // Show/hide joke boxes
        document.querySelectorAll('.joke-box-inline').forEach(box => {
            box.style.display = 'block';
        });
        const jokeSection = document.getElementById('jokeSection');
        if (jokeSection) {
            jokeSection.style.display = 'none';
        }
        
        // Trigger confetti and greeting when switching TO Christmas
        if (isSwitchingToChristmas) {
            createConfetti();
            showChristmasGreeting();
        }
    } else {
        localStorage.setItem('theme', 'professional');
        // Hide tree emoji on professional theme (surprise!)
        themeIcon.textContent = '⚙️';
        
        // Update texts for professional theme
        updateTextsForTheme(false);
        
        // Hide joke boxes
        document.querySelectorAll('.joke-box-inline').forEach(box => {
            box.style.display = 'none';
        });
        const jokeSection = document.getElementById('jokeSection');
        if (jokeSection) {
            jokeSection.style.display = 'none';
        }
    }
});

// Button Hint Popup - Show on professional theme only
function showButtonHint() {
    const buttonHint = document.getElementById('buttonHint');
    const hintClose = document.getElementById('hintClose');
    
    if (!buttonHint || !hintClose) {
        console.log('Button hint elements not found');
        return; // Elements don't exist
    }
    
    // Always show on professional theme (removed localStorage check for now)
    if (!body.classList.contains('christmas-theme')) {
        setTimeout(() => {
            if (buttonHint) {
                buttonHint.classList.add('show');
                console.log('Showing button hint');
            }
        }, 2000); // Show after 2 seconds
    }
    
    // Close button functionality
    hintClose.addEventListener('click', () => {
        if (buttonHint) {
            buttonHint.classList.remove('show');
        }
    });
    
    // Also close when clicking outside
    buttonHint.addEventListener('click', (e) => {
        if (e.target === buttonHint) {
            buttonHint.classList.remove('show');
        }
    });
}

// Scroll Animation for Gift Items
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150); // Stagger animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all gift items and joke boxes
    document.querySelectorAll('.gift-item[data-animate], .joke-box-inline[data-animate]').forEach((item) => {
        observer.observe(item);
    });
}

// Image Modal functionality
function setupImageModal() {
    const chatButton = document.getElementById('chatButton');
    const imageModal = document.getElementById('imageModal');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('elfImage');
    const modalText = document.querySelector('.modal-text');
    
    // Store original values (use relative path from HTML)
    const originalImageSrc = 'IMG_0950.JPG';
    const originalText = 'hahaha der button kann nix lol. Ihr habt meine nummer. ruft ruhig an bratans';
    
    if (chatButton && imageModal) {
        chatButton.addEventListener('click', () => {
            // Restore original image and text for chat button
            if (modalImage) {
                modalImage.src = originalImageSrc;
                modalImage.alt = 'Elf on the Shelf';
            }
            if (modalText) {
                modalText.textContent = originalText;
            }
            imageModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                imageModal.classList.remove('show');
                document.body.style.overflow = '';
            });
        }
        
        // Close modal when clicking outside
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('show')) {
                imageModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
}

// Setup gift modal buttons
function setupGiftModals() {
    const giftModalButtons = document.querySelectorAll('.gift-modal-button');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('elfImage');
    const modalText = document.querySelector('.modal-text');
    
    giftModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imageSrc = button.getAttribute('data-image');
            const text = button.getAttribute('data-text');
            
            if (imageModal && modalImage) {
                modalImage.src = imageSrc;
                modalImage.alt = text || 'Gift Image';
                if (modalText) {
                    modalText.textContent = text || '';
                }
                imageModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    generateGifts();
    showButtonHint();
    setupImageModal();
    setupGiftModals();
    
    // Update texts based on current theme
    const isChristmas = body.classList.contains('christmas-theme');
    updateTextsForTheme(isChristmas);
});

// Smooth scroll behavior enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to header on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add entrance animation to sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe sections for fade-in animation
document.querySelectorAll('.intro-section, .joke-section, .end-section, .contact-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

