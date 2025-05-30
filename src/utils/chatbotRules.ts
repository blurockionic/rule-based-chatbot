interface Rule {
  patterns: string[];
  responses: string[];
  exactMatch?: boolean;
}

class ChatbotRules {
  private rules: Rule[] = [
    {
      patterns: [
        "hello",
        "hi",
        "hey",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
      ],
      responses: [
        "Hello! How can I help you today?",
        "Hi there! What can I do for you?",
        "Hey! Great to see you here!",
        "Greetings! How may I assist you?",
      ],
    },
    {
      patterns: [
        "what is your name",
        "what's your name",
        "who are you",
        "your name",
      ],
      responses: [
        "I'm Marriage vendors Assistant, your helpful assistant!",
        "My name is Marriage vendors Assistant. Nice to meet you!",
        "I'm Marriage vendors Assistant, a rule-based chatbot designed to help you.",
        "You can call me Marriage vendors Assistant!",
      ],
    },
    {
      patterns: [
        "what can you do",
        "what do you do",
        "your capabilities",
        "help me",
        "how can you help",
      ],
      responses: [
        "I’m your wedding assistant! I can:<br>• Help you find wedding vendors (decorators, photographers, venues, etc.)<br>• Share pricing info and packages<br>• Book appointments or consultations<br>• Answer FAQs about planning your big day<br>• Add some wedding fun with jokes too 🎉",
        "I’m here to make wedding planning easier! I can connect you with trusted vendors, share event ideas, and help manage bookings. What do you need help with?",
        "From finding the perfect venue to booking a mehndi artist—I’ve got you covered! Just tell me what you’re planning next.",
      ],
    },
    {
      patterns: [
        "tell me a joke",
        "joke",
        "make me laugh",
        "something funny",
        "humor",
      ],
      responses: [
        "Why did the bride bring a ladder to the wedding? Because she was ready to take their relationship to the next level! 💍😄",
        "Marriage is like a workshop… where the husband works and the wife shops! 🛍️😂",
        "Why are weddings like Wi-Fi? You only get connected when there’s a strong signal! 📶❤️",
        "What did the wedding cake say to the fork? “You want a piece of me?” 🍰😆",
        "I told my fiancé I wanted our wedding to be unforgettable… so we invited his ex! (Just kidding 😅)",
        "Why do married people live longer? Because they can’t argue if they’re dead! 💀💑",
        "My friend got married for the second time… now she’s really *re-committed*! 🔁💒",
      ],
    },
    {
      patterns: ["help", "commands", "what to ask"],
      responses: [
        `I’m your wedding assistant! I can:
• Help you find wedding vendors (decorators, photographers, venues, etc.)
• Share pricing info and packages
• Book appointments or consultations
• Answer FAQs about planning your big day
• Add some wedding fun with jokes too 🎉`,

        `I’m here to make wedding planning easier! I can connect you with trusted vendors, share event ideas, and help manage bookings.
What do you need help with?`,

        `From finding the perfect venue to booking a mehndi artist—I’ve got you covered!
Just tell me what you’re planning next.`,
      ],
    },
    {
      patterns: ["what time is it", "current time", "time", "what's the time"],
      responses: [
        `The current time is ${new Date().toLocaleTimeString()}.`,
        `It's ${new Date().toLocaleTimeString()} right now.`,
        `The time is currently ${new Date().toLocaleTimeString()}.`,
      ],
    },
    {
      patterns: [
        "what date is it",
        "current date",
        "today's date",
        "what day is it",
      ],
      responses: [
        `Today is ${new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}.`,
        `The current date is ${new Date().toLocaleDateString()}.`,
        `Today's date is ${new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}.`,
      ],
    },
    {
      patterns: ["goodbye", "bye", "see you later", "farewell", "see ya"],
      responses: [
        "Goodbye! It was great chatting with you!",
        "See you later! Have a wonderful day!",
        "Bye! Come back anytime you need help!",
        "Farewell! Take care and see you soon!",
      ],
    },
    {
      patterns: ["how are you", "how do you feel", "how's it going"],
      responses: [
        "I'm doing great, thank you for asking! How are you?",
        "I'm functioning perfectly and ready to help! How about you?",
        "All systems running smoothly! How can I make your day better?",
        "I'm excellent, thanks! What brings you here today?",
      ],
    },
    {
      patterns: ["thank you", "thanks", "appreciate it", "thx"],
      responses: [
        "You're very welcome!",
        "Happy to help!",
        "My pleasure!",
        "Anytime! That's what I'm here for!",
        "Glad I could assist you!",
      ],
    },
    {
      patterns: [
        "book a vendor",
        "vendor availability",
        "check availability",
        "book",
        "schedule vendor",
      ],
      responses: [
        "Sure! I can help you check vendor availability. What date are you looking at?",
        "Let’s get your booking started! Could you tell me the wedding date and vendor type (e.g. caterer, decorator)?",
        "Booking a vendor is easy. What service are you interested in?",
      ],
    },
    {
      patterns: [
        "what vendors do you have",
        "types of vendors",
        "wedding services",
        "vendor list",
      ],
      responses: [
        "We offer various services like catering, photography, decoration, mehendi, bridal makeup, DJ, and more.",
        "From decorators to photographers, we have a wide range of wedding service vendors. What are you looking for?",
        "You can find caterers, event planners, makeup artists, and more here!",
      ],
    },
    {
      patterns: ["pricing", "packages", "how much", "cost", "rates"],
      responses: [
        "Our vendors offer flexible packages for different budgets. What kind of service are you looking for?",
        "Prices vary depending on the service and location. Can you tell me what you’re looking for?",
        "We can help you compare vendor packages. Let me know the service and your budget range.",
      ],
    },
    {
      patterns: ["vendors in", "services in", "near me", "available in"],
      responses: [
        "Sure! Please tell me your city or wedding location.",
        "I can help with that. What city or area are you planning your wedding in?",
        "Let me know where the wedding will be, and I’ll find the best vendors nearby!",
      ],
    },
    {
      patterns: [
        "custom request",
        "talk to someone",
        "need help",
        "contact support",
      ],
      responses: [
        "Our team is happy to help with custom requests. Please share some details or leave your contact info!",
        "Let’s connect you to a specialist. Please share your name and contact number.",
        "For special needs or requests, you can also chat with our support team. Just say “connect me”.",
      ],
    },
    {
      patterns: ["interested", "want to know more", "sign me up"],
      responses: [
        "Great! Please provide your name, email, and wedding date, and we’ll reach out soon.",
        "Awesome! One last step: can you share your contact details so we can follow up with details?",
      ],
    },
  ];

  private fallbackResponses = [
    "I'm not sure how to respond to that. Please try rephrasing.",
    "I don't quite understand. Could you ask that differently?",
    "That's interesting, but I'm not sure how to help with that. Try asking me something else!",
    "I'm still learning! Could you rephrase your question?",
    "I didn't catch that. Maybe try asking about what I can do or request a joke?",
  ];

  getGreeting(): string {
    const hour = new Date().getHours();
    const timeOfDay =
      hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
    const greetings = {
      morning: [
        "Good morning! I'm Marriage Vendor assistant, your helpful assistant. How can I brighten your day?",
        "Good morning! Ready to chat? I'm here to help!",
        "Good morning! What can I help you with today?",
      ],
      afternoon: [
        "Good afternoon! I'm Marriage vendors Assistant, ready to assist you with anything you need!",
        "Good afternoon! How's your day going? I'm here to help!",
        "Good afternoon! What can I do for you today?",
      ],
      evening: [
        "Good evening! I'm Marriage vendors Assistant, your friendly assistant. How can I help you tonight?",
        "Good evening! Hope you're having a great day! I'm here to help!",
        "Good evening! What can I assist you with tonight?",
      ],
    };

    const timeGreetings = greetings[timeOfDay as keyof typeof greetings];
    return timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
  }

  processMessage(message: string): string {
    const normalizedMessage = message.toLowerCase().trim();
    for (const rule of this.rules) {
      for (const pattern of rule.patterns) {
        if (
          rule.exactMatch
            ? normalizedMessage === pattern
            : normalizedMessage.includes(pattern)
        ) {
          const responses = rule.responses;
          // Convert <br> to newline for display in chat
          const rawResponse =
            responses[Math.floor(Math.random() * responses.length)];
          return rawResponse.replace(/<br>/g, "\n");
        }
      }
    }
    return this.fallbackResponses[
      Math.floor(Math.random() * this.fallbackResponses.length)
    ];
  }

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  getRules(): Rule[] {
    return [...this.rules];
  }
}

export const chatbotRules = new ChatbotRules();
