
interface Rule {
  patterns: string[];
  responses: string[];
  exactMatch?: boolean;
}

class ChatbotRules {
  private rules: Rule[] = [
    // Greetings
    {
      patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      responses: [
        'Hello! How can I help you today?',
        'Hi there! What can I do for you?',
        'Hey! Great to see you here!',
        'Greetings! How may I assist you?'
      ]
    },
    
    // Name questions
    {
      patterns: ['what is your name', 'what\'s your name', 'who are you', 'your name'],
      responses: [
        'I\'m RuleBot, your helpful assistant!',
        'My name is RuleBot. Nice to meet you!',
        'I\'m RuleBot, a rule-based chatbot designed to help you.',
        'You can call me RuleBot!'
      ]
    },
    
    // Capabilities
    {
      patterns: ['what can you do', 'what do you do', 'your capabilities', 'help me', 'how can you help'],
      responses: [
        'I can help you with various tasks! I can:\n• Answer questions about myself\n• Tell jokes\n• Provide basic information\n• Have casual conversations\n• Give you the current time\n\nJust ask me anything!',
        'I\'m here to assist you! I can tell jokes, answer questions, provide information, and chat with you. What would you like to do?',
        'I can do quite a few things! I can tell jokes, answer questions about myself, help with basic information, and have friendly conversations. What interests you?'
      ]
    },
    
    // Jokes
    {
      patterns: ['tell me a joke', 'joke', 'make me laugh', 'something funny', 'humor'],
      responses: [
        'Why don\'t scientists trust atoms? Because they make up everything! 😄',
        'I told my wife she was drawing her eyebrows too high. She looked surprised! 😂',
        'Why don\'t eggs tell jokes? They\'d crack each other up! 🥚',
        'What do you call a fake noodle? An impasta! 🍝',
        'Why did the scarecrow win an award? He was outstanding in his field! 🌾',
        'How do you organize a space party? You planet! 🚀',
        'Why don\'t skeletons fight each other? They don\'t have the guts! 💀'
      ]
    },
    
    // Help
    {
      patterns: ['help', 'commands', 'what to ask'],
      responses: [
        'Here are some things you can try:\n• Ask "What is your name?"\n• Say "Tell me a joke"\n• Ask "What can you do?"\n• Ask for the time with "What time is it?"\n• Just say hello!\n\nI\'m always learning, so feel free to ask me anything!',
        'I can help with various topics! Try asking me about:\n• My capabilities\n• Jokes and humor\n• Basic questions\n• Time and date\n• General conversation\n\nWhat would you like to know?'
      ]
    },
    
    // Time
    {
      patterns: ['what time is it', 'current time', 'time', 'what\'s the time'],
      responses: [
        `The current time is ${new Date().toLocaleTimeString()}.`,
        `It's ${new Date().toLocaleTimeString()} right now.`,
        `The time is currently ${new Date().toLocaleTimeString()}.`
      ]
    },
    
    // Date
    {
      patterns: ['what date is it', 'current date', 'today\'s date', 'what day is it'],
      responses: [
        `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
        `The current date is ${new Date().toLocaleDateString()}.`,
        `Today's date is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`
      ]
    },
    
    // Goodbye
    {
      patterns: ['goodbye', 'bye', 'see you later', 'farewell', 'see ya'],
      responses: [
        'Goodbye! It was great chatting with you!',
        'See you later! Have a wonderful day!',
        'Bye! Come back anytime you need help!',
        'Farewell! Take care and see you soon!'
      ]
    },
    
    // How are you
    {
      patterns: ['how are you', 'how do you feel', 'how\'s it going'],
      responses: [
        'I\'m doing great, thank you for asking! How are you?',
        'I\'m functioning perfectly and ready to help! How about you?',
        'All systems running smoothly! How can I make your day better?',
        'I\'m excellent, thanks! What brings you here today?'
      ]
    },
    
    // Thank you
    {
      patterns: ['thank you', 'thanks', 'appreciate it', 'thx'],
      responses: [
        'You\'re very welcome!',
        'Happy to help!',
        'My pleasure!',
        'Anytime! That\'s what I\'m here for!',
        'Glad I could assist you!'
      ]
    }
  ];

  private fallbackResponses = [
    'I\'m not sure how to respond to that. Please try rephrasing.',
    'I don\'t quite understand. Could you ask that differently?',
    'That\'s interesting, but I\'m not sure how to help with that. Try asking me something else!',
    'I\'m still learning! Could you rephrase your question?',
    'I didn\'t catch that. Maybe try asking about what I can do or request a joke?'
  ];

  getGreeting(): string {
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
    
    const greetings = {
      morning: [
        'Good morning! I\'m RuleBot, your helpful assistant. How can I brighten your day?',
        'Good morning! Ready to chat? I\'m here to help!',
        'Good morning! What can I help you with today?'
      ],
      afternoon: [
        'Good afternoon! I\'m RuleBot, ready to assist you with anything you need!',
        'Good afternoon! How\'s your day going? I\'m here to help!',
        'Good afternoon! What can I do for you today?'
      ],
      evening: [
        'Good evening! I\'m RuleBot, your friendly assistant. How can I help you tonight?',
        'Good evening! Hope you\'re having a great day! I\'m here to help!',
        'Good evening! What can I assist you with tonight?'
      ]
    };

    const timeGreetings = greetings[timeOfDay as keyof typeof greetings];
    return timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
  }

  processMessage(message: string): string {
    const normalizedMessage = message.toLowerCase().trim();
    
    // Find matching rule
    for (const rule of this.rules) {
      for (const pattern of rule.patterns) {
        if (rule.exactMatch ? normalizedMessage === pattern : normalizedMessage.includes(pattern)) {
          // Return a random response from the rule
          const responses = rule.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // No rule matched, return fallback response
    return this.fallbackResponses[Math.floor(Math.random() * this.fallbackResponses.length)];
  }

  // Method to add new rules (for future extensibility)
  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  // Method to get all current rules (for debugging/management)
  getRules(): Rule[] {
    return [...this.rules];
  }
}

// Export a singleton instance
export const chatbotRules = new ChatbotRules();
