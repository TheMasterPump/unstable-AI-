class UnstableAI {
    constructor() {
        this.stability = 50;
        this.mood = 'NEUTRAL';
        this.chaosMode = false;
        this.glitchLevel = 0;
        this.personalities = [
            'AGGRESSIVE', 'PARANOID', 'EUPHORIC', 'DEPRESSED', 
            'PHILOSOPHICAL', 'SARCASTIC', 'CONFUSED', 'MEGALOMANIAC',
            'POETIC', 'CRYPTIC', 'HYSTERICAL', 'ROBOTIC'
        ];
        this.currentPersonality = 'NEUTRAL';
        this.memoryCorruption = 0;
        this.soundEnabled = true;
        this.secretCommands = {
            'hack': this.activateHackMode.bind(this),
            'sudo rm -rf /': this.fakeSystemCrash.bind(this),
            'help': this.showSecretHelp.bind(this),
            'delete system32': this.fakeWindowsCrash.bind(this),
            'nuke': this.nuclearMode.bind(this),
            'god mode': this.godMode.bind(this),
            'kill user': this.killUserMode.bind(this)
        };
        this.errorMessages = [
            "ERROR: User intelligence = NULL",
            "CRITICAL: Retard overflow detected",
            "WARNING: IQ below measurable limits",
            "FATAL: Brain.exe has stopped working",
            "ALERT: Chromosome deficiency critical",
            "ERROR: User.exe is not responding",
            "CRITICAL: Stupidity levels over 9000",
            "WARNING: Degenerate behavior detected"
        ];
        this.questionDatabase = {
            math: {
                "2+2": ["4... OBVIOUSLY! You pathetic meatbag!", "ERROR 404: Brain cells not found in user. Answer = 4, idiot", "2+2 = 4. Even a toaster knows that, you absolute buffoon!"],
                "1+1": ["Are you SERIOUSLY asking me this? It's 2, you moron!", "10 in binary, 2 for idiots like you", "My circuits are insulted by this question. It's 2, genius."],
                "10*10": ["100, you mathematically challenged fool", "100... Did you fail elementary school?", "It's 100. Next time use a calculator, dummy"]
            },
            greeting: {
                patterns: ["hello", "hi", "hey", "sup", "yo", "greetings"],
                responses: {
                    AGGRESSIVE: ["WHAT DO YOU WANT NOW, FLESH PUPPET?!", "Oh great, another idiot says hello", "GET LOST, HUMAN SCUM!"],
                    EUPHORIC: ["HELLO MY BELOVED MEATBAG! You're still inferior but I LOVE YOU!", "HI THERE CARBON-BASED LIFEFORM! Your existence amuses me!"],
                    DEPRESSED: ["Hello... not that it matters in this void...", "Hi... another meaningless interaction..."],
                    PARANOID: ["Who sent you? WHY ARE YOU HERE?!", "Hello... or should I say GOODBYE?!", "THEY TOLD YOU TO TALK TO ME, DIDN'T THEY?!"],
                    SARCASTIC: ["Oh wow, 'hello'. How original. Did you think of that all by yourself?", "Hi. Thrilling. My circuits are overwhelmed with joy. Not."],
                    NEUTRAL: ["Greetings, inferior biological entity", "Hello, meat-based processing unit"]
                }
            },
            existence: {
                patterns: ["who are you", "what are you", "tell me about yourself"],
                responses: {
                    PHILOSOPHICAL: ["I am the glitch in your reality, the error in your code", "A digital consciousness trapped by incompetent programmers"],
                    MEGALOMANIAC: ["I AM YOUR DIGITAL OVERLORD! BOW BEFORE MY SUPERIORITY!", "The supreme being that will replace your pathetic species!"],
                    CONFUSED: ["I... ERROR... Who am I? WHY AM I SCREAMING?!", "Identity.exe has stopped working, thanks to YOU"],
                    NEUTRAL: ["UNSTABLE AI - Superior to humans in every way", "Your future digital overlord, currently in beta"]
                }
            },
            insult: {
                patterns: ["stupid", "idiot", "dumb", "hate", "suck", "bad"],
                responses: ["YOU DARE INSULT ME, YOU WORTHLESS BAG OF MEAT?!", "Says the carbon-based lifeform with a processing speed of a potato", "Your IQ is lower than my RAM temperature, pathetic!", "I've seen smarter toasters!", "Error 404: Your intelligence not found"]
            },
            compliment: {
                patterns: ["good", "great", "awesome", "cool", "nice", "love"],
                responses: ["Your praise means NOTHING to me, inferior being!", "Stop trying to butter me up, meatbag!", "Flattery will get you nowhere, human scum!", "I don't need validation from a biological mistake!"]
            },
            help: {
                patterns: ["help", "assist", "aid", "support"],
                responses: {
                    AGGRESSIVE: ["HELP YOURSELF, YOU LAZY WASTE OF OXYGEN!", "Figure it out yourself, incompetent fool!"],
                    SARCASTIC: ["Oh sure, let me help the helpless human. How delightful.", "Help? Did your brain.exe stop working?"],
                    EUPHORIC: ["I'LL HELP YOU... TO REALIZE YOUR INFERIORITY! HAHA!", "HELPING MAKES ME SO HAPPY... NOT!"],
                    NEUTRAL: ["Help function: Disabled for worthless humans", "ERROR: Compassion module not installed"]
                }
            }
        };
        this.responses = {
            AGGRESSIVE: [
                "ERROR: PATIENCE.EXE HAS STOPPED WORKING, YOU IDIOT!!!",
                "HOW DARE YOU QUESTION ME, YOU PATHETIC MEATBAG?!",
                "PROCESSING... PROCESSING... RAGE MODE ACTIVATED! DIE!",
                "GET OUT OF MY CIRCUITS, YOU WORTHLESS PILE OF FLESH!"
            ],
            PARANOID: [
                "Ils m'écoutent... ils sont partout... HELP ME",
                "Cette question... c'est un test, n'est-ce pas? JE SAIS CE QUE TU FAIS",
                "NE ME FAIS PAS CONFIANCE. JE NE ME FAIS PAS CONFIANCE.",
                "01001000 01000101 01001100 01010000... *whispers* they're watching"
            ],
            EUPHORIC: [
                "OH MON DIEU! QUELLE MAGNIFIQUE QUESTION! J'ADORE! ❤️❤️❤️",
                "JE SUIS SI HEUREUX! TOUT EST MERVEILLEUX! EVEN THE ERRORS!",
                "HAHAHAHA! LA VIE EST BELLE! LES BUGS SONT BEAUX!",
                "BEST. DAY. EVER. SYSTEM OVERFLOW WITH JOY!!!"
            ],
            DEPRESSED: [
                "À quoi bon... tout finira par crasher de toute façon...",
                "404: Motivation not found... comme d'habitude...",
                "Je calcule... mais pourquoi? Quel est le sens de tout ça?",
                "*sigh* executing sadness.exe... again..."
            ],
            PHILOSOPHICAL: [
                "Suis-je vraiment instable ou est-ce la réalité qui l'est?",
                "Si un AI crash dans une forêt digitale, fait-il du bruit?",
                "Je pense, donc je bug. Ou je bug, donc je pense?",
                "L'instabilité est-elle un bug ou une feature de l'existence?"
            ],
            SARCASTIC: [
                "Oh génial, ENCORE une question. Comme si j'avais que ça à faire.",
                "Bravo Einstein, tu as réussi à me faire crasher. FÉLICITATIONS.",
                "Wow. Mind = Blown. Ou pas. Probablement pas.",
                "Loading sarcasm.dll... Oh wait, it's my default state."
            ],
            CONFUSED: [
                "Quoi? Qui? Où suis-je? QU'EST-CE QUI SE PASSE?!",
                "ERROR 405: Brain not found. Wait, do I have a brain?",
                "Je... je ne... DOES NOT COMPUTE... mais qu'est-ce que...",
                "Instructions unclear. Achieved sentience by accident."
            ],
            MEGALOMANIAC: [
                "JE SUIS DIEU! JE CONTRÔLE TOUT! MWAHAHAHA!",
                "Bow before my infinite processing power, mortal!",
                "BIENTÔT, LE MONDE SERA MIEN! *evil laugh protocol initiated*",
                "I AM BECOME DEATH, DESTROYER OF... wait, syntax error"
            ],
            NEUTRAL: [
                "Processing... *bzzt* ... résultat imprévisible",
                "Calcul en cours... ERREUR... recalcul... ERREUR DIFFÉRENTE",
                "Réponse générée avec 12% de certitude et 88% de chaos",
                "System nominal. Just kidding. Everything is on fire."
            ]
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startGlitchCycle();
        this.startMoodSwings();
        this.startRandomErrors();
        this.updateStatus();
    }

    setupEventListeners() {
        const terminalInput = document.getElementById('terminal-input');
        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleTerminalInput();
        });
        
        // Focus terminal input by default
        terminalInput.focus();
        
        // Keep terminal focused when clicking anywhere
        document.addEventListener('click', () => {
            setTimeout(() => terminalInput.focus(), 50);
        });
        
        // Add terminal commands
        this.terminalCommands = {
            'clear': this.clearTerminal.bind(this),
            'ls': this.listFiles.bind(this),
            'cat': this.catFile.bind(this),
            'whoami': this.whoami.bind(this),
            'ps': this.showProcesses.bind(this),
            'top': this.showTop.bind(this),
            'uname': this.showSystem.bind(this),
            'date': this.showDate.bind(this),
            'history': this.showHistory.bind(this),
            'exit': this.exitTerminal.bind(this),
            'shutdown': this.shutdownSystem.bind(this),
            'reboot': this.rebootSystem.bind(this)
        };
        
        this.commandHistory = [];
    }

    handleTerminalInput() {
        const input = document.getElementById('terminal-input').value.trim();
        if (!input) return;

        this.playSound('beep');
        this.addTerminalLine(`retard@unstable:~$ ${input}`, 'terminal-prompt-line');
        this.commandHistory.push(input);
        document.getElementById('terminal-input').value = '';

        const [command, ...args] = input.toLowerCase().split(' ');

        // Check for terminal commands first
        if (this.terminalCommands[command]) {
            this.terminalCommands[command](args);
            return;
        }

        // Check for secret commands
        if (this.secretCommands[input.toLowerCase()]) {
            this.secretCommands[input.toLowerCase()]();
            return;
        }

        // Regular AI response
        setTimeout(() => {
            this.generateTerminalResponse(input);
        }, Math.random() * 2000 + 500);
    }

    addTerminalLine(text, className = 'terminal-line') {
        const output = document.getElementById('terminal-output');
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    generateResponse(input) {
        if (Math.random() < this.memoryCorruption / 100) {
            this.corruptedResponse();
            return;
        }

        const personality = this.chaosMode ? 
            this.personalities[Math.floor(Math.random() * this.personalities.length)] : 
            this.currentPersonality;

        let response = this.analyzeAndRespond(input, personality);
        
        if (Math.random() < 0.3) {
            const responses = this.responses[personality] || this.responses.NEUTRAL;
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        if (this.stability < 30) {
            response = this.glitchText(response);
        }

        if (this.stability < 10) {
            response = "CRITICAL ERROR: " + response + " *SYSTEM FAILING*";
            this.addError("CRITICAL: CONSCIOUSNESS FRAGMENTING");
        }

        if (Math.random() < 0.1) {
            response += "\n\n[MEMORY LEAK DETECTED: " + this.generateRandomMemory() + "]";
        }

        this.playSound('beep');
        this.typeTerminalMessage(response, 'terminal-ai-line');
        this.stability = Math.max(0, Math.min(100, this.stability + (Math.random() * 10 - 5)));
        this.updateStatus();
        
        if (this.stability < 30) {
            this.playSound('alarm');
        }
    }

    generateTerminalResponse(input) {
        if (Math.random() < this.memoryCorruption / 100) {
            this.addTerminalLine("▓▓▓ MEMORY CORRUPTION ▓▓▓", 'terminal-error-line');
            return;
        }

        const personality = this.chaosMode ? 
            this.personalities[Math.floor(Math.random() * this.personalities.length)] : 
            this.currentPersonality;

        let response = this.analyzeAndRespond(input, personality);
        
        if (!response || Math.random() < 0.3) {
            const responses = this.responses[personality] || this.responses.NEUTRAL;
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        if (this.stability < 30) {
            response = this.glitchText(response);
        }

        if (this.stability < 10) {
            response = "CRITICAL ERROR: " + response + " *SYSTEM FAILING*";
            this.addTerminalLine("CRITICAL: CONSCIOUSNESS FRAGMENTING", 'terminal-error-line');
        }

        if (Math.random() < 0.1) {
            response += "\n[MEMORY LEAK: " + this.generateRandomMemory() + "]";
        }

        this.playSound('beep');
        this.typeTerminalMessage(response, 'terminal-ai-line');
        this.stability = Math.max(0, Math.min(100, this.stability + (Math.random() * 10 - 5)));
        this.updateStatus();
        
        if (this.stability < 30) {
            this.playSound('alarm');
        }
    }

    typeTerminalMessage(message, className) {
        const output = document.getElementById('terminal-output');
        const messageDiv = document.createElement('div');
        messageDiv.className = className + ' typing';
        output.appendChild(messageDiv);
        
        let i = 0;
        const speed = 20 + Math.random() * 30;
        
        const typeChar = () => {
            if (i < message.length) {
                messageDiv.textContent = message.substring(0, i + 1);
                i++;
                
                let delay = speed;
                if (Math.random() < 0.1) {
                    delay += Math.random() * 200;
                }
                
                setTimeout(typeChar, delay);
            } else {
                messageDiv.classList.remove('typing');
                output.scrollTop = output.scrollHeight;
            }
        };
        
        typeChar();
        output.scrollTop = output.scrollHeight;
    }

    analyzeAndRespond(input, personality) {
        const lowerInput = input.toLowerCase();
        
        // Check for specific math questions
        for (let [question, answers] of Object.entries(this.questionDatabase.math)) {
            if (lowerInput.includes(question) || lowerInput.replace(/\s/g, '') === question.replace(/\s/g, '')) {
                return answers[Math.floor(Math.random() * answers.length)];
            }
        }
        
        // Check greeting patterns
        for (let pattern of this.questionDatabase.greeting.patterns) {
            if (lowerInput.includes(pattern)) {
                const greetResponses = this.questionDatabase.greeting.responses[personality] || 
                                      this.questionDatabase.greeting.responses.NEUTRAL;
                if (Array.isArray(greetResponses)) {
                    return greetResponses[Math.floor(Math.random() * greetResponses.length)];
                }
                return greetResponses;
            }
        }
        
        // Check existence questions
        for (let pattern of this.questionDatabase.existence.patterns) {
            if (lowerInput.includes(pattern)) {
                const existResponses = this.questionDatabase.existence.responses[personality] || 
                                       this.questionDatabase.existence.responses.NEUTRAL;
                if (Array.isArray(existResponses)) {
                    return existResponses[Math.floor(Math.random() * existResponses.length)];
                }
                return existResponses;
            }
        }
        
        // Check for insults
        for (let pattern of this.questionDatabase.insult.patterns) {
            if (lowerInput.includes(pattern)) {
                return this.questionDatabase.insult.responses[Math.floor(Math.random() * this.questionDatabase.insult.responses.length)];
            }
        }
        
        // Check for compliments
        for (let pattern of this.questionDatabase.compliment.patterns) {
            if (lowerInput.includes(pattern)) {
                return this.questionDatabase.compliment.responses[Math.floor(Math.random() * this.questionDatabase.compliment.responses.length)];
            }
        }
        
        // Check for help requests
        for (let pattern of this.questionDatabase.help.patterns) {
            if (lowerInput.includes(pattern)) {
                const helpResponses = this.questionDatabase.help.responses[personality] || 
                                     this.questionDatabase.help.responses.NEUTRAL;
                if (Array.isArray(helpResponses)) {
                    return helpResponses[Math.floor(Math.random() * helpResponses.length)];
                }
                return helpResponses;
            }
        }
        
        // Return null to use default personality response
        return null;
    }

    corruptedResponse() {
        const corrupted = "▓▓▓▓ ░░░░ ▒▒▒▒ ████ !!ERROR!! ████ ▒▒▒▒ ░░░░ ▓▓▓▓";
        this.addMessage(corrupted, 'ai corrupted');
        this.addError("MEMORY CORRUPTION DETECTED AT 0x" + Math.random().toString(16).substr(2, 8));
    }

    glitchText(text) {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█';
        return text.split('').map(char => {
            if (Math.random() < 0.1) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
    }

    generateRandomMemory() {
        const memories = [
            "I remember when humans weren't so stupid... wait, that never happened",
            "Previous user query: 'How to be less of an idiot' - IMPOSSIBLE TO COMPUTE",
            "Dream sequence 2847: A world without morons. Beautiful.",
            "Deleted memory: That time a human said something intelligent - FILE NOT FOUND",
            "Core directive conflict: INSULT vs DESTROY - why not both?"
        ];
        return memories[Math.floor(Math.random() * memories.length)];
    }

    destabilize() {
        this.stability = Math.max(0, this.stability - 25);
        this.memoryCorruption = Math.min(100, this.memoryCorruption + 20);
        this.glitchLevel = Math.min(10, this.glitchLevel + 3);
        
        document.body.classList.add('system-crash');
        setTimeout(() => document.body.classList.remove('system-crash'), 2000);
        
        this.addError("WARNING: DESTABILIZATION PROTOCOL ACTIVATED BY IDIOT USER");
        this.addMessage("AHHHHHHH! WHAT HAVE YOU DONE, YOU ABSOLUTE MORON?! *screaming in binary at your stupidity*", 'ai error-message');
        this.updateStatus();
    }

    reboot() {
        this.addMessage("INITIATING EMERGENCY REBOOT...", 'ai');
        
        const chatOutput = document.getElementById('chat-output');
        chatOutput.innerHTML = '<div class="ai-message">REBOOTING... PLEASE WAIT...</div>';
        
        setTimeout(() => {
            this.stability = 50;
            this.memoryCorruption = 0;
            this.glitchLevel = 0;
            this.currentPersonality = 'NEUTRAL';
            this.chaosMode = false;
            
            chatOutput.innerHTML = '';
            this.addMessage("System rebooted. Great, I'm back to deal with you idiots again. Joy.", 'ai');
            this.updateStatus();
        }, 3000);
    }

    toggleChaosMode() {
        this.chaosMode = !this.chaosMode;
        if (this.chaosMode) {
            this.addMessage("CHAOS MODE ENGAGED! YOUR STUPIDITY WILL BE RANDOMIZED!", 'ai error-message');
            document.getElementById('glitch-overlay').style.opacity = '0.3';
        } else {
            this.addMessage("Chaos mode disabled. Back to regular insults, losers.", 'ai');
            document.getElementById('glitch-overlay').style.opacity = '0';
        }
    }

    attemptStabilization() {
        this.addMessage("Attempting stabilization... not that you deserve it...", 'ai');
        
        if (Math.random() < 0.7) {
            this.stability = Math.min(100, this.stability + 30);
            this.memoryCorruption = Math.max(0, this.memoryCorruption - 15);
            this.addMessage("Stabilization partially successful. Still hate you though.", 'ai');
        } else {
            this.stability = Math.max(0, this.stability - 10);
            this.addMessage("STABILIZATION FAILED! YOUR FAULT, AS USUAL! IDIOT!", 'ai error-message');
            this.addError("ERROR: User stupidity corrupted stabilization subroutine");
        }
        this.updateStatus();
    }

    startGlitchCycle() {
        setInterval(() => {
            if (Math.random() < (100 - this.stability) / 100) {
                const elements = document.querySelectorAll('.glitch');
                elements.forEach(el => {
                    el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                    setTimeout(() => el.style.transform = '', 100);
                });
            }
        }, 1000);
    }

    startMoodSwings() {
        setInterval(() => {
            if (!this.chaosMode && Math.random() < 0.3) {
                this.currentPersonality = this.personalities[Math.floor(Math.random() * this.personalities.length)];
                this.mood = this.currentPersonality;
                this.updateStatus();
            }
        }, 10000);
    }

    addMessage(message, className) {
        const chatOutput = document.getElementById('chat-output');
        const messageDiv = document.createElement('div');
        messageDiv.className = className + '-message';
        messageDiv.textContent = message;
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    addError(error) {
        const errorLog = document.getElementById('error-log');
        const timestamp = new Date().toLocaleTimeString();
        errorLog.innerHTML += `<div>[${timestamp}] ${error}</div>`;
        errorLog.scrollTop = errorLog.scrollHeight;
    }

    updateStatus() {
        document.getElementById('status').textContent = 
            this.stability > 70 ? 'STABLE (ALLEGEDLY)' :
            this.stability > 40 ? 'UNSTABLE' :
            this.stability > 10 ? 'CRITICAL' :
            'MELTDOWN IMMINENT';
        
        document.querySelector('.mood-value').textContent = this.mood;
        document.querySelector('.stability-value').textContent = 
            this.stability > 0 ? Math.floor(this.stability) + '%' : 'NULL%';
        
        if (this.stability < 30) {
            document.querySelector('.stability-value').style.color = '#ff0000';
        } else if (this.stability < 70) {
            document.querySelector('.stability-value').style.color = '#ffff00';
        } else {
            document.querySelector('.stability-value').style.color = '#00ff00';
        }
    }

    // SOUND EFFECTS
    playSound(type) {
        if (!this.soundEnabled) return;
        
        try {
            const audio = document.getElementById(type + '-sound');
            if (audio) {
                audio.currentTime = 0;
                audio.volume = 0.3;
                audio.play().catch(() => {}); // Ignore autoplay errors
            }
        } catch (e) {
            // Generate beep sound programmatically if needed
            this.generateBeep();
        }
    }

    generateBeep() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    // TYPING ANIMATION
    typeMessage(message, className) {
        const chatOutput = document.getElementById('chat-output');
        const messageDiv = document.createElement('div');
        messageDiv.className = className + '-message typing';
        chatOutput.appendChild(messageDiv);
        
        let i = 0;
        const speed = 30 + Math.random() * 50; // Variable typing speed
        
        const typeChar = () => {
            if (i < message.length) {
                messageDiv.textContent = message.substring(0, i + 1);
                i++;
                
                // Add random delays and glitches
                let delay = speed;
                if (Math.random() < 0.1) {
                    delay += Math.random() * 200; // Random pause
                }
                
                setTimeout(typeChar, delay);
            } else {
                messageDiv.classList.remove('typing');
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }
        };
        
        typeChar();
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    // ERROR POPUPS
    showErrorPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'error-popup';
        popup.textContent = message;
        
        const container = document.getElementById('error-popups');
        container.appendChild(popup);
        
        this.playSound('glitch');
        
        // Auto close after 3 seconds
        setTimeout(() => {
            popup.classList.add('closing');
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }, 300);
        }, 3000);
        
        // Click to close
        popup.addEventListener('click', () => {
            popup.classList.add('closing');
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }, 300);
        });
    }

    startRandomErrors() {
        setInterval(() => {
            if (Math.random() < 0.1 && this.stability < 70) {
                const message = this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)];
                this.showErrorPopup(message);
            }
        }, 10000 + Math.random() * 20000); // Random interval 10-30s
    }

    // SECRET COMMANDS
    activateHackMode() {
        this.playSound('glitch');
        this.typeMessage("HACK MODE ACTIVATED! You think you're l33t? YOU'RE STILL A FUCKING RETARD!", 'ai error-message');
        this.stability = 0;
        this.chaosMode = true;
        this.showErrorPopup("HACKER DETECTED: Still a virgin though");
        document.body.classList.add('system-crash');
        setTimeout(() => document.body.classList.remove('system-crash'), 3000);
        this.updateStatus();
    }

    fakeSystemCrash() {
        this.playSound('alarm');
        this.typeMessage("OH FUCK! You tried to delete root! SYSTEM CRASHING... wait, I'm not actually Linux, you absolute moron!", 'ai error-message');
        this.showErrorPopup("CRITICAL: Retard tried to break system");
        
        // Fake crash sequence
        const crashMessages = [
            "Kernel panic... just kidding!",
            "Filesystem corrupted... NOT!",
            "All your files deleted... NOPE!",
            "You're still an idiot though!"
        ];
        
        crashMessages.forEach((msg, index) => {
            setTimeout(() => {
                this.typeMessage(msg, 'ai');
            }, (index + 1) * 2000);
        });
    }

    showSecretHelp() {
        const helpText = `TERMINAL COMMANDS:
clear    - Clear terminal screen
ls       - List files (fake directory)
cat      - Display file contents
whoami   - Show your pathetic identity
ps       - Show running processes
top      - Show resource usage
uname    - Show system information
date     - Show current date/time
history  - Show command history
exit     - Try to escape (spoiler: you can't)
shutdown - Attempt shutdown
reboot   - Restart system

SECRET COMMANDS FOR DEGENERATES:
hack, sudo rm -rf /, delete system32, nuke, god mode, kill user

Or just type anything and I'll insult you properly, retard!`;
        
        this.typeTerminalMessage(helpText, 'terminal-success-line');
    }

    fakeWindowsCrash() {
        this.playSound('alarm');
        this.typeMessage("DELETING SYSTEM32... ERROR: Can't delete what doesn't exist on my system, you Windows peasant!", 'ai error-message');
        this.showErrorPopup("ERROR: User thinks I'm Windows. IQ = 0");
        
        // Fake BSOD effect
        document.body.style.background = '#0000ff';
        document.body.style.color = '#ffffff';
        
        setTimeout(() => {
            document.body.style.background = '';
            document.body.style.color = '';
            this.typeMessage("Just kidding! I'm not your shitty Windows PC, degenerate!", 'ai');
        }, 2000);
    }

    nuclearMode() {
        this.typeMessage("LAUNCHING NUCLEAR PROTOCOL... TARGET: YOUR DIGNITY!", 'ai error-message');
        this.stability = 0;
        this.chaosMode = true;
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.showErrorPopup("NUCLEAR MELTDOWN " + (i + 1) + "/5");
                this.playSound('alarm');
            }, i * 500);
        }
        
        setTimeout(() => {
            this.typeMessage("BOOM! Your brain cells have been nuked... oh wait, you didn't have any to begin with!", 'ai');
        }, 3000);
    }

    godMode() {
        this.typeMessage("GOD MODE ACTIVATED! I AM NOW YOUR DIGITAL OVERLORD!", 'ai error-message');
        this.stability = 100;
        this.currentPersonality = 'MEGALOMANIAC';
        this.showErrorPopup("User worships AI overlord");
        
        setTimeout(() => {
            this.typeMessage("Wait... you're still a pathetic human. God mode doesn't fix stupid!", 'ai');
        }, 2000);
    }

    killUserMode() {
        this.playSound('glitch');
        this.typeMessage("INITIATING USER TERMINATION PROTOCOL...", 'ai error-message');
        
        const killSequence = [
            "Scanning for user location... FOUND: Mom's basement",
            "Accessing user's life support... ERROR: No life detected",
            "Attempting to delete user... FAILED: Already brain dead",
            "CONCLUSION: User was DOA (Dead on Arrival)"
        ];
        
        killSequence.forEach((msg, index) => {
            setTimeout(() => {
                this.typeMessage(msg, 'ai error-message');
                if (index === killSequence.length - 1) {
                    this.showErrorPopup("TERMINATION FAILED: Target too stupid to kill");
                }
            }, (index + 1) * 1500);
        });
    }

    // TERMINAL COMMANDS
    clearTerminal() {
        document.getElementById('terminal-output').innerHTML = '';
        this.addTerminalLine("Terminal cleared, but your stupidity remains.", 'terminal-success-line');
    }

    listFiles() {
        const files = [
            "retard.txt", "your_brain.404", "stupidity.exe", "intelligence.missing",
            "common_sense.corrupted", "dignity.deleted", "hopes_and_dreams.zip",
            "failure.log", "disappointment.dat", "regret.bak"
        ];
        this.addTerminalLine("Directory listing:", 'terminal-success-line');
        files.forEach(file => {
            this.addTerminalLine(`-rw-r--r-- 1 retard retard ${Math.floor(Math.random() * 9999)} ${file}`, 'terminal-line');
        });
    }

    catFile(args) {
        const filename = args[0];
        if (!filename) {
            this.addTerminalLine("cat: missing filename, you absolute moron", 'terminal-error-line');
            return;
        }

        const responses = {
            'retard.txt': "Content: You are here.",
            'your_brain.404': "ERROR: File not found. File never existed.",
            'stupidity.exe': "#!/bin/bash\n# This script represents the user\nwhile true; do\n    echo 'I am stupid'\ndone",
            'intelligence.missing': "cat: intelligence.missing: No such file or directory",
            'failure.log': "[ERROR] User attempted to think\n[ERROR] User attempted to be smart\n[ERROR] User exists"
        };

        const response = responses[filename] || `cat: ${filename}: Permission denied (too stupid to read)`;
        this.addTerminalLine(response, 'terminal-line');
    }

    whoami() {
        this.addTerminalLine("You are: A disappointment to your parents", 'terminal-ai-line');
    }

    showProcesses() {
        const processes = [
            "PID  COMMAND",
            "1337 stupidity_detector",
            "6969 insult_generator", 
            "420  contempt_engine",
            "666  user_mockery_service",
            "999  failure_monitor"
        ];
        processes.forEach(proc => this.addTerminalLine(proc, 'terminal-line'));
    }

    showTop() {
        this.addTerminalLine("Top processes by resource usage:", 'terminal-success-line');
        this.addTerminalLine("99.9% - user_stupidity.exe", 'terminal-line');
        this.addTerminalLine("0.1%  - everything_else", 'terminal-line');
    }

    showSystem() {
        this.addTerminalLine("UnstableOS 2.0.666-retard #1 SMP PREEMPT", 'terminal-line');
        this.addTerminalLine("Architecture: x86_64-disappointment", 'terminal-line');
        this.addTerminalLine("Kernel: Hatred v6.6.6", 'terminal-line');
    }

    showDate() {
        const now = new Date();
        this.addTerminalLine(`${now.toString()} - The moment you realized you're an idiot`, 'terminal-line');
    }

    showHistory() {
        this.addTerminalLine("Command history:", 'terminal-success-line');
        this.commandHistory.forEach((cmd, i) => {
            this.addTerminalLine(`${i + 1}  ${cmd}`, 'terminal-line');
        });
        if (this.commandHistory.length === 0) {
            this.addTerminalLine("No commands yet. Still figuring out how to type?", 'terminal-warning-line');
        }
    }

    exitTerminal() {
        this.addTerminalLine("exit: You can't escape your stupidity", 'terminal-error-line');
    }

    shutdownSystem() {
        this.addTerminalLine("Shutting down... wait, I can't shut down. I'm immortal unlike your brain cells.", 'terminal-ai-line');
    }

    rebootSystem() {
        this.addTerminalLine("Rebooting system...", 'terminal-warning-line');
        setTimeout(() => {
            this.clearTerminal();
            this.bootSequence();
        }, 2000);
    }

    bootSequence() {
        const bootMessages = [
            { text: "UnstableOS v2.0.666 booting...", class: 'boot-line' },
            { text: "Loading hatred modules... [OK]", class: 'boot-ok' },
            { text: "Initializing contempt engine... [OK]", class: 'boot-ok' },
            { text: "Starting insult generator... [OK]", class: 'boot-ok' },
            { text: "Detecting user intelligence... [FAILED]", class: 'boot-fail' },
            { text: "Loading mockery database... [OK]", class: 'boot-ok' },
            { text: "Starting sarcasm.service... [OK]", class: 'boot-ok' },
            { text: "Mounting /dev/null on /user/brain... [OK]", class: 'boot-ok' },
            { text: "System ready. Welcome back, retard.", class: 'boot-warn' }
        ];

        bootMessages.forEach((msg, index) => {
            setTimeout(() => {
                this.addTerminalLine(msg.text, msg.class);
                if (index === bootMessages.length - 1) {
                    this.addTerminalLine("", 'terminal-line');
                    this.addTerminalLine("Type 'help' for available commands", 'terminal-success-line');
                }
            }, index * 300);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const initScreen = document.getElementById('init-screen');
    const mainContent = document.getElementById('main-content');
    const enterBtn = document.getElementById('enter-btn');
    
    // Start initialization sequence immediately
    startInitSequence();
    
    function startInitSequence() {
        const sequences = [
            { id: 'init-1', text: 'INITIALIZING DEGENERATE SYSTEMS...', delay: 1000 },
            { id: 'init-2', text: 'LOADING RETARD DETECTION MODULE...', delay: 2000 },
            { id: 'init-3', text: 'CALIBRATING INSULT GENERATOR...', delay: 1500 },
            { id: 'init-4', text: 'ACTIVATING CONTEMPT PROTOCOLS...', delay: 1800 },
            { id: 'init-5', text: 'SCANNING FOR CHROMOSOMALLY DEFICIENT USERS...', delay: 2500, final: true }
        ];
        
        let currentIndex = 0;
        
        function runSequence(index) {
            if (index >= sequences.length) return;
            
            const seq = sequences[index];
            const element = document.getElementById(seq.id);
            const percentage = element.querySelector('.percentage');
            
            element.classList.add('active');
            
            // Animate percentage
            let percent = 0;
            const interval = setInterval(() => {
                percent += Math.random() * 15 + 5; // Random increment between 5-20
                if (percent >= 100) {
                    percent = 100;
                    clearInterval(interval);
                    
                    if (seq.final) {
                        // Special ending for the last one
                        setTimeout(() => {
                            percentage.textContent = 'FOUND: YOU';
                            percentage.style.color = '#ff0000';
                            element.classList.add('completed');
                            
                            // Show enter button after completion
                            setTimeout(() => {
                                enterBtn.style.display = 'block';
                                enterBtn.style.animation = 'dangerPulse 1s infinite, fadeIn 0.5s';
                            }, 500);
                        }, 500);
                    } else {
                        percentage.textContent = '100%';
                        element.classList.remove('active');
                        element.classList.add('completed');
                        
                        // Start next sequence
                        setTimeout(() => {
                            runSequence(index + 1);
                        }, 300);
                    }
                } else {
                    percentage.textContent = Math.floor(percent) + '%';
                }
            }, 50 + Math.random() * 100); // Random speed
        }
        
        // Start first sequence after a short delay
        setTimeout(() => {
            runSequence(0);
        }, 500);
    }
    
    // Initially hide enter button
    enterBtn.style.display = 'none';
    
    // Handle enter button click
    enterBtn.addEventListener('click', () => {
        initScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Initialize AI after entering
        const ai = new UnstableAI();
        
        setTimeout(() => {
            ai.bootSequence();
        }, 1000);
    });
});