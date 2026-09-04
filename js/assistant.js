(function () {
  const CONTACT = "contact.html";
  const EMAIL = "contact@quaxarm.com";
  const PHONE = "+91 94897 91125";

  const topics = [
    {
      id: "about",
      title: "What Quaxarm does",
      keywords: [
        "quaxarm",
        "company",
        "about",
        "who",
        "what",
        "firm",
        "partner",
        "mission",
        "do",
        "offer",
        "services",
        "help",
      ],
      answer:
        "Quaxarm Technologies is a digital-native firm. We help operators modernise the systems that run the business: products customers and staff use, infrastructure that must not fail, identity that keeps the estate safe, and applied AI on real operational data. Delivery is senior-led — from strategy through to a system that holds after go-live.",
      links: [
        { href: "about.html", label: "About" },
        { href: "capabilities.html", label: "Capabilities" },
      ],
    },
    {
      id: "capabilities",
      title: "Capabilities",
      keywords: [
        "capability",
        "capabilities",
        "engineering",
        "platform",
        "cloud",
        "infrastructure",
        "reliability",
        "identity",
        "iam",
        "workplace",
        "cyber",
        "security",
        "mdm",
        "microsoft",
        "365",
        "ai",
        "machine",
        "learning",
        "automation",
        "advisory",
        "transformation",
        "architecture",
      ],
      answer:
        "Five areas, one accountable team: product and platform engineering; cloud, infrastructure and reliability; identity, workplace and cyber; applied AI and intelligent operations; and digital transformation advisory. The point is not a catalogue of services — it is carrying a programme from diagnosis to production without handing the work between disconnected vendors.",
      links: [{ href: "capabilities.html", label: "Capabilities" }],
    },
    {
      id: "industries",
      title: "Industries",
      keywords: [
        "industry",
        "industries",
        "sector",
        "education",
        "campus",
        "travel",
        "hospitality",
        "hotel",
        "healthcare",
        "clinical",
        "marine",
        "logistics",
        "supply",
        "chain",
        "port",
        "financial",
        "bank",
        "public",
        "government",
        "enterprise",
        "manufacturing",
        "plant",
        "retail",
        "commerce",
        "insurance",
        "energy",
        "utilities",
        "real",
        "estate",
      ],
      answer:
        "We work wherever operations, data, identity, and customer experience have to move together. Core sectors: education; travel and hospitality; healthcare and life sciences; marine, logistics and supply chain; financial services; public sector and enterprise; manufacturing and operations; retail and consumer. The same stack also fits insurers, energy and utilities, real estate, and professional services.",
      links: [
        { href: "index.html", label: "Home" },
        { href: "capabilities.html", label: "By sector" },
      ],
    },
    {
      id: "testora",
      title: "Testora",
      keywords: [
        "testora",
        "exam",
        "exams",
        "examination",
        "assessment",
        "centre",
        "center",
        "candidate",
        "student",
        "booking",
        "provider",
      ],
      answer:
        "Testora is Quaxarm’s digital assessment product. Exam centres, candidates, and exam providers work in one platform instead of spreadsheets and phone calls. It covers centre operations (bookings, payments, inventory, multi-site control), a clearer candidate booking journey, provider visibility and audit trails, and matching unused capacity between centres.",
      links: [
        { href: "products.html", label: "Products" },
        { href: CONTACT, label: "Ask about Testora" },
      ],
    },
    {
      id: "aegis",
      title: "Aegis",
      keywords: [
        "aegis",
        "azure",
        "defender",
        "cost",
        "spend",
        "bill",
        "optimisation",
        "optimization",
        "vulnerability",
        "vulnerabilities",
        "readiness",
        "subscription",
      ],
      answer:
        "Aegis connects to an Azure environment you grant it and answers three operating questions in one view: is the estate costing more than it should, are Microsoft Defender vulnerabilities known but not owned, and are resources actually ready for the load you intend? It is built for architecture, security, and finance conversations that today live in three different portals.",
      links: [
        { href: "products.html", label: "Products" },
        { href: CONTACT, label: "Ask about Aegis" },
      ],
    },
    {
      id: "products",
      title: "Products",
      keywords: ["products", "product", "flagship", "software"],
      answer:
        "Two products are live today. Testora is an end-to-end digital assessment platform for exam centres, candidates, and exam providers. Aegis connects to Azure to surface cost optimisation, Microsoft Defender vulnerabilities, and resource readiness.",
      links: [{ href: "products.html", label: "Products" }],
    },
    {
      id: "team",
      title: "How we work",
      keywords: [
        "team",
        "people",
        "leadership",
        "founder",
        "consultant",
        "bench",
        "how",
        "work",
        "programme",
        "program",
        "project",
        "lifecycle",
        "discover",
        "design",
        "build",
        "assure",
        "release",
        "iso",
        "nist",
        "owasp",
        "gdpr",
        "itil",
        "certified",
        "certification",
      ],
      answer:
        "Programmes are led by a hands-on leadership bench with more than 20 years in the industry, with specialist consultants assigned as the work requires. Delivery follows discover → design → build → assure → release and operate. We align to widely used practices (ISO/IEC 27001 thinking, NIST CSF, OWASP, Microsoft Cloud Adoption Framework / Well-Architected on Azure, GDPR-minded data handling, ITIL-style operations, ISO 9001-style quality). That is alignment to those practices — not a claim of certification unless a client already holds one.",
      links: [{ href: "team.html", label: "Team" }],
    },
    {
      id: "contact",
      title: "Contact",
      keywords: [
        "contact",
        "email",
        "phone",
        "call",
        "talk",
        "meet",
        "enquiry",
        "inquiry",
        "quote",
        "price",
        "pricing",
        "hire",
        "start",
        "conversation",
      ],
      answer:
        "Email " +
        EMAIL +
        " or call " +
        PHONE +
        ". There is a form on the Contact page; messages go to the same inbox. We do not publish a rate card — tell us the programme, the constraint, and what a useful next twelve months would look like.",
      links: [{ href: CONTACT, label: "Contact page" }],
    },
    {
      id: "office",
      title: "Office",
      keywords: [
        "office",
        "location",
        "address",
        "where",
        "kochi",
        "kerala",
        "india",
        "based",
        "headquarters",
        "hq",
      ],
      answer:
        "The office is in Kochi, Kerala, India. The team is India-based with global delivery experience. For a programme conversation, email is usually the fastest start.",
      links: [{ href: CONTACT, label: "Contact" }],
    },
  ];

  const stop = new Set([
    "a",
    "an",
    "the",
    "and",
    "or",
    "to",
    "of",
    "in",
    "on",
    "for",
    "is",
    "are",
    "your",
    "you",
    "we",
    "our",
    "me",
    "my",
    "can",
    "could",
    "please",
    "tell",
    "about",
    "what",
    "how",
    "who",
    "where",
    "do",
    "does",
    "with",
    "from",
  ]);

  function tokens(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9+]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 1 && !stop.has(w));
  }

  function greet(text) {
    const t = (text || "").trim().toLowerCase();
    if (/^(hi|hello|hey|hiya|good (morning|afternoon|evening))\b/.test(t)) {
      return {
        answer:
          "Hello. I can walk you through what Quaxarm does, the five capability areas, Testora and Aegis, or how to get in touch. What would you like to know?",
        links: [],
      };
    }
    if (/^(thanks|thank you|cheers|ok|okay)\b/.test(t)) {
      return {
        answer: "Glad to help. If you want a conversation with the team, use the contact page or email " + EMAIL + ".",
        links: [{ href: CONTACT, label: "Contact" }],
      };
    }
    return null;
  }

  function match(text) {
    const greeted = greet(text);
    if (greeted) return greeted;

    const words = tokens(text);
    const raw = (text || "").toLowerCase();
    if (!words.length && raw.length < 2) {
      return {
        answer: "Ask about capabilities, Testora, Aegis, industries, or how to contact the team.",
        links: [],
      };
    }

    const phraseBoost = [
      { re: /how much|pricing|rate card|day rate|fee|quote/, id: "contact" },
      { re: /testora|\bexams?\b|examination|exam centre|exam center/, id: "testora" },
      { re: /\baegis\b|defender|azure (cost|bill|spend|readiness)/, id: "aegis" },
      { re: /\bproducts?\b|flagship/, id: "products" },
    ];

    const scored = topics.map((topic) => {
      let score = 0;
      topic.keywords.forEach((key) => {
        if (raw.includes(key)) score += key.length > 5 ? 3 : 2;
        if (words.includes(key)) score += 2;
      });
      if (raw.includes(topic.title.toLowerCase())) score += 8;
      phraseBoost.forEach((rule) => {
        if (rule.id === topic.id && rule.re.test(raw)) score += 12;
      });
      return { topic, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const best = scored[0];

    if (!best || best.score < 4) {
      return {
        answer:
          "I only answer from this website, so I may not have that. For a programme, pricing, or anything specific to your environment, email " +
          EMAIL +
          " or send a note on the contact page.",
        links: [{ href: CONTACT, label: "Contact Quaxarm" }],
      };
    }

    const links = best.topic.links.slice();
    const second = scored[1];
    if (second && second.score >= 4 && second.score >= best.score - 2 && second.topic.id !== best.topic.id) {
      links.push({ href: "#", label: second.topic.title, topicId: second.topic.id });
    }

    return { answer: best.topic.answer, links, topicId: best.topic.id };
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function init() {
    const root = el("div", "qa");
    root.innerHTML = `
      <button class="qa-launch" type="button" aria-expanded="false" aria-controls="qa-panel" aria-label="Ask about Quaxarm">
        <span class="qa-launch-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 16.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4A2.8 2.8 0 0 1 16.2 16H9l-4 3.2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="qa-launch-label">Ask Quaxarm</span>
      </button>
      <section id="qa-panel" class="qa-panel" hidden>
        <header class="qa-head">
          <div>
            <p class="qa-kicker">Site guide</p>
            <h2>Ask about Quaxarm</h2>
          </div>
          <button class="qa-close" type="button" aria-label="Close">×</button>
        </header>
        <p class="qa-note">Answers come from this website. For a programme, use Contact.</p>
        <div class="qa-log" role="log" aria-live="polite"></div>
        <div class="qa-chips"></div>
        <form class="qa-form">
          <label class="qa-sr" for="qa-input">Your question</label>
          <input id="qa-input" name="q" type="text" autocomplete="off" placeholder="e.g. What is Testora?" />
          <button class="qa-send" type="submit">Send</button>
        </form>
      </section>
    `;
    document.body.appendChild(root);

    const launch = root.querySelector(".qa-launch");
    const panel = root.querySelector(".qa-panel");
    const close = root.querySelector(".qa-close");
    const log = root.querySelector(".qa-log");
    const form = root.querySelector(".qa-form");
    const input = root.querySelector("#qa-input");
    const chips = root.querySelector(".qa-chips");

    const suggestions = [
      { label: "What you do", q: "What does Quaxarm do?" },
      { label: "Testora", q: "Tell me about Testora" },
      { label: "Aegis", q: "What is Aegis?" },
      { label: "Contact", q: "How do I contact you?" },
    ];

    suggestions.forEach((item) => {
      const btn = el("button", "qa-chip", item.label);
      btn.type = "button";
      btn.addEventListener("click", () => ask(item.q));
      chips.appendChild(btn);
    });

    function add(role, payload) {
      const row = el("div", "qa-msg qa-msg-" + role);
      const body = el("p", "", payload.answer || payload);
      row.appendChild(body);
      if (payload.links && payload.links.length) {
        const nav = el("div", "qa-links");
        payload.links.forEach((link) => {
          if (link.topicId) {
            const b = el("button", "qa-link", "Also: " + link.label);
            b.type = "button";
            b.addEventListener("click", () => {
              const topic = topics.find((t) => t.id === link.topicId);
              if (topic) add("bot", { answer: topic.answer, links: topic.links });
            });
            nav.appendChild(b);
            return;
          }
          const a = el("a", "qa-link", link.label);
          a.href = link.href;
          nav.appendChild(a);
        });
        row.appendChild(nav);
      }
      log.appendChild(row);
      log.scrollTop = log.scrollHeight;
    }

    function ask(question) {
      add("user", { answer: question });
      add("bot", match(question));
      input.value = "";
      input.focus();
    }

    function open() {
      panel.hidden = false;
      launch.setAttribute("aria-expanded", "true");
      root.classList.add("is-open");
      if (!log.childElementCount) {
        add("bot", {
          answer:
            "I can explain what Quaxarm does, the products (Testora and Aegis), industries, and how to reach the team. I do not invent answers beyond this site.",
          links: [],
        });
      }
      input.focus();
    }

    function shut() {
      panel.hidden = true;
      launch.setAttribute("aria-expanded", "false");
      root.classList.remove("is-open");
      launch.focus();
    }

    launch.addEventListener("click", () => (panel.hidden ? open() : shut()));
    close.addEventListener("click", shut);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) shut();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      ask(question);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
