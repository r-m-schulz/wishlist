// Quiz Questions
const quizQuestions = [
    {
        question: "Was ist das wichtigste an Weihnachten?",
        answers: [
            "Die Bescherung",
            "Die Zeit mit der Familie ❤️",
            "Die Kirche",
            "Der Weihnachtsbaum"
        ],
        correct: 1
    },
    {
        question: "Worauf hab ich dicke Bock?",
        answers: [
            "Gefragt werden was ich so mache wenn ich Freunde und Familie treffe (Und was machst du so?)",
            "Das kühle Bier am Weihnachtsmorgen im Leo's",
            "Futterrrrrrrr: Fois Gras, Lachs, Salat und so",
            "Das Händeschütteln in der Kirche"
        ],
        correct: 2
    },
    {
        question: "Wer sind meine Lieblingsmenschen?",
        answers: [
            "Die Bernhard Familie",
            "Meine Eltis, Schwistis und Omis",
            "Nicky der Kläffer und Marabello",
            "Nick Wirkotzki"
        ],
        correct: 1
    },
    {
        question: "Wer ist der wichtigste, coolste, liebste, schönste Teil der Familie? Achtung: einfacher als gedacht!",
        answers: [
            "Euer Bratan Robin natürlich!!!!",
            "Der coole Macker Robierto",
            "Der Sohn von Evelyn und Rolf",
            "Emille und Felille die Prototypen"
        ],
        correct: 3
    }
];

// Quiz functionality
let currentQuestionIndex = 0;
let userAnswers = [];
let answeredQuestions = [];

function initQuiz() {
    const quizModal = document.getElementById('quizModal');
    const quizContainer = document.getElementById('quizContainer');
    const submitButton = document.getElementById('submitQuiz');
    const mainContent = document.getElementById('mainContent');
    
    // Always show quiz on page load
    if (quizModal) quizModal.style.display = 'flex';
    if (mainContent) mainContent.style.display = 'none';
    
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = [];
    answeredQuestions = [];
    
    // Remove any existing retry button
    const existingRetry = document.getElementById('quizRetryButton');
    if (existingRetry) {
        existingRetry.remove();
    }
    
    // Show first question
    showQuestion(0);
}

function showQuestion(index) {
    const quizContainer = document.getElementById('quizContainer');
    const submitButton = document.getElementById('submitQuiz');
    const quizResults = document.getElementById('quizResults');
    
    if (!quizContainer) return;
    
    // Hide results if visible
    if (quizResults) quizResults.style.display = 'none';
    
    // Remove retry button if it exists
    const existingRetry = document.getElementById('quizRetryButton');
    if (existingRetry) {
        existingRetry.remove();
    }
    
    // Clear container
    quizContainer.innerHTML = '';
    
    if (index >= quizQuestions.length) {
        // All questions answered, show final results
        showFinalResults();
        return;
    }
    
    const question = quizQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.setAttribute('data-question-index', index);
    
    const questionTitle = document.createElement('h3');
    questionTitle.className = 'question-title';
    questionTitle.textContent = `Frage ${index + 1} von ${quizQuestions.length}: ${question.question}`;
    questionDiv.appendChild(questionTitle);
    
    const answersDiv = document.createElement('div');
    answersDiv.className = 'answers-container';
    
    question.answers.forEach((answer, answerIndex) => {
        const answerLabel = document.createElement('label');
        answerLabel.className = 'answer-option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${index}`;
        radio.value = answerIndex;
        radio.id = `q${index}-a${answerIndex}`;
        
        // Disable if already answered
        if (answeredQuestions.includes(index)) {
            radio.disabled = true;
            if (userAnswers[index] === answerIndex) {
                radio.checked = true;
            }
            if (answerIndex === question.correct) {
                answerLabel.classList.add('correct-answer');
            } else if (userAnswers[index] === answerIndex && userAnswers[index] !== question.correct) {
                answerLabel.classList.add('wrong-answer');
            }
        } else {
            // Add event listener for immediate answer check
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    checkAnswer(index, answerIndex);
                }
            });
        }
        
        const answerText = document.createElement('span');
        answerText.textContent = answer;
        
        answerLabel.appendChild(radio);
        answerLabel.appendChild(answerText);
        answersDiv.appendChild(answerLabel);
    });
    
    questionDiv.appendChild(answersDiv);
    
    // Add answer feedback if already answered
    if (answeredQuestions.includes(index)) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'answer-feedback';
        const isCorrect = userAnswers[index] === question.correct;
        feedbackDiv.innerHTML = isCorrect 
            ? '<p class="feedback-correct">✅ Richtig! Gut gemacht!</p>'
            : '<p class="feedback-wrong">❌ Falsch. Die richtige Antwort ist: ' + question.answers[question.correct] + '</p>';
        questionDiv.appendChild(feedbackDiv);
    }
    
    quizContainer.appendChild(questionDiv);
    
    // Hide submit button (we don't need it anymore)
    if (submitButton) submitButton.style.display = 'none';
}

function checkAnswer(questionIndex, answerIndex) {
    const question = quizQuestions[questionIndex];
    const isCorrect = answerIndex === question.correct;
    
    // Save answer
    userAnswers[questionIndex] = answerIndex;
    answeredQuestions.push(questionIndex);
    
    // Show feedback immediately
    showQuestion(questionIndex);
    
    if (isCorrect) {
        // Correct answer - automatically proceed to next question
        if (questionIndex < quizQuestions.length - 1) {
            // Not the last question, go to next
            setTimeout(() => {
                showQuestion(questionIndex + 1);
            }, 1500); // 1.5 second delay to show feedback
        } else {
            // Last question and correct - all questions passed!
            setTimeout(() => {
                // All questions answered correctly, grant access
                const quizModal = document.getElementById('quizModal');
                const mainContent = document.getElementById('mainContent');
                if (quizModal) quizModal.style.display = 'none';
                if (mainContent) mainContent.style.display = 'block';
                
                // Initialize main content
                generateGifts();
                showButtonHint();
                setupImageModal();
                setupGiftModals();
                
                // Update texts based on current theme
                const isChristmas = body.classList.contains('christmas-theme');
                updateTextsForTheme(isChristmas);
            }, 1500);
        }
    } else {
        // Wrong answer - show retry button
        setTimeout(() => {
            showRetryButton();
        }, 500);
        
        // Special handling for last question (index 3)
        if (questionIndex === 3) {
            // Show special popup for last question
            setTimeout(() => {
                showSpecialPopup();
            }, 1000);
        }
    }
}

function showRetryButton() {
    // Remove existing retry button if any
    const existingRetry = document.getElementById('quizRetryButton');
    if (existingRetry) {
        existingRetry.remove();
    }
    
    // Create retry button
    const retryButton = document.createElement('button');
    retryButton.id = 'quizRetryButton';
    retryButton.className = 'quiz-button retry-button quiz-retry-fixed';
    retryButton.textContent = 'Nochmal versuchen';
    retryButton.onclick = () => {
        // Reset quiz
        currentQuestionIndex = 0;
        userAnswers = [];
        answeredQuestions = [];
        
        // Remove retry button
        retryButton.remove();
        
        // Restart quiz
        showQuestion(0);
    };
    
    // Add to body (not quiz-content) for fixed positioning
    document.body.appendChild(retryButton);
}

function showSpecialPopup() {
    // Create popup modal
    const popup = document.createElement('div');
    popup.className = 'special-popup';
    popup.innerHTML = `
        <div class="special-popup-content">
            <h3>😄 Hör mal!</h3>
            <p>aber hörma das kann doch nicht sein dass ihr diese easy frage nicht richtig gemacht habt!! ihr kennt mich doch ich bin ein ganz herzlicher macker</p>
            <button class="quiz-button" id="closeSpecialPopup">OK, verstanden! 😅</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    // Close button functionality
    const closeButton = popup.querySelector('#closeSpecialPopup');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            popup.remove();
        });
    }
    
    // Close when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    });
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (popup.parentNode) {
            popup.remove();
        }
    }, 10000);
}

function showFinalResults() {
    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsScore = document.getElementById('resultsScore');
    const retryButton = document.getElementById('retryButton');
    
    if (!quizContainer || !quizResults) return;
    
    // Hide quiz container
    quizContainer.style.display = 'none';
    
    // Calculate score
    let correctCount = 0;
    quizQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correctCount++;
        }
    });
    
    const totalQuestions = quizQuestions.length;
    const scoreText = `Du hast ${correctCount} von ${totalQuestions} Fragen richtig beantwortet!`;
    
    if (correctCount === totalQuestions) {
        // Passed!
        if (resultsTitle) resultsTitle.textContent = '🎉 Perfekt! Du hast bestanden! 🎉';
        if (resultsTitle) resultsTitle.style.color = '#28a745';
        if (resultsScore) resultsScore.textContent = scoreText;
        
        // Show main content after a short delay
        setTimeout(() => {
            const quizModal = document.getElementById('quizModal');
            const mainContent = document.getElementById('mainContent');
            if (quizModal) quizModal.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            
            // Initialize main content now that quiz is passed
            generateGifts();
            showButtonHint();
            setupImageModal();
            setupGiftModals();
            
            // Update texts based on current theme
            const isChristmas = body.classList.contains('christmas-theme');
            updateTextsForTheme(isChristmas);
        }, 2000);
    } else {
        // Failed
        if (resultsTitle) resultsTitle.textContent = '😔 Leider nicht bestanden';
        if (resultsTitle) resultsTitle.style.color = '#dc3545';
        if (resultsScore) resultsScore.textContent = scoreText + ' Du brauchst ' + totalQuestions + '/' + totalQuestions + ' richtige Antworten. Versuch es nochmal!';
        
        // Show retry button
        if (retryButton) {
            retryButton.style.display = 'block';
            retryButton.onclick = () => {
                // Reset and restart quiz
                currentQuestionIndex = 0;
                userAnswers = [];
                answeredQuestions = [];
                showQuestion(0);
                if (quizResults) quizResults.style.display = 'none';
            };
        }
    }
    
    // Show results
    if (quizResults) quizResults.style.display = 'block';
}

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
        
        // Re-setup gift modals to ensure they work after theme change
        setupGiftModals();
        
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
        
        // Re-setup gift modals to ensure they work after theme change
        setupGiftModals();
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
    // Remove existing event listeners by cloning and replacing buttons
    const giftModalButtons = document.querySelectorAll('.gift-modal-button');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('elfImage');
    const modalText = document.querySelector('.modal-text');
    
    giftModalButtons.forEach(button => {
        // Remove any existing event listeners by replacing the button
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Add fresh event listener
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            const imageSrc = newButton.getAttribute('data-image');
            const text = newButton.getAttribute('data-text');
            
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
    // Initialize quiz first
    initQuiz();
    
    // Set up quiz submit button
    const submitButton = document.getElementById('submitQuiz');
    if (submitButton) {
        submitButton.addEventListener('click', submitQuiz);
    }
    
    // Main content will be initialized when quiz is passed
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

// Add parallax effect to header on scroll (only for professional theme)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header && !document.body.classList.contains('christmas-theme')) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    } else if (header && document.body.classList.contains('christmas-theme')) {
        // No parallax for Christmas theme to keep background visible
        header.style.transform = 'none';
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

