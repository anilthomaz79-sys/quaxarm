(function () {
  const CONTACT = "contact.html";
  const EMAIL = "contact@quaxarm.com";

  const topics = [
    {
      id: "about",
      title: "What Quaxarm does",
      keywords: [
        "llp",
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
        "Quaxarm Technologies LLP is a digital-native firm. We help operators modernise the systems that run the business: products customers and staff use, infrastructure that must not fail, identity that keeps the estate safe, and AI on operational data. Delivery is senior-led — from strategy through to a system that holds after go-live.",
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
        "Specialty is education, healthcare, and marine logistics — environments where failure is expensive. Adjacent sectors (travel, financial services, public sector, manufacturing, retail, and others) are taken when the operating constraint is the same, not as eight equal claims.",
      links: [
        { href: "index.html", label: "Home" },
        { href: "about.html", label: "About" },
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
        "deploy",
        "tenant",
        "credential",
        "local",
        "permission",
        "store",
      ],
      answer:
        "Testora is Quaxarm’s digital assessment product. Exam centres, candidates, and exam providers work in one platform instead of spreadsheets and phone calls. It is deployed in the client’s environment; access and data handling follow that organisation’s security framework. Quaxarm does not store the client’s operational data or credentials. The product has been tested; implementation with prospective clients is planned.",
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
        "deploy",
        "tenant",
        "credential",
        "cli",
        "local",
        "store",
        "permission",
        "checklist",
      ],
      answer:
        "Aegis is deployed in the client’s Azure environment. It can be explored locally without Azure. Cost, Defender, and checklist modules talk to Azure only after the client provides a subscription and signs in with their own credentials (Azure CLI, device code, or Azure’s default credential chain). Quaxarm does not store credentials or Azure data. The product has been tested; implementation with prospective clients is planned.",
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
        "Two products have been tested, with implementation planned with prospective clients. Testora is a digital assessment platform for exam centres, candidates, and providers. Aegis runs in the client’s Azure environment for cost, Defender, and checklists. Neither stores client data at Quaxarm.",
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
        ". There is a form on the Contact page. The legal name is Quaxarm Technologies LLP. Privacy and website terms are linked in the footer. We do not publish a rate card — a twenty-minute intro is enough to start.",
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
        "Programmes and solutions can be delivered anywhere in the world. For a conversation, email is usually the fastest start.",
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
      <div class="qa-backdrop" data-qa-close hidden></div>
      <button class="qa-launch" type="button" aria-expanded="false" aria-controls="qa-panel" aria-label="Ask about Quaxarm">
        <span class="qa-launch-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 16.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4A2.8 2.8 0 0 1 16.2 16H9l-4 3.2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="qa-launch-label">Ask Quaxarm</span>
      </button>
      <section id="qa-panel" class="qa-panel" hidden aria-hidden="true">
        <header class="qa-head">
          <div>
            <p class="qa-kicker">Site guide</p>
            <h2>Ask about Quaxarm</h2>
          </div>
          <button class="qa-close" type="button" data-qa-close aria-label="Close the site guide">Close</button>
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
    const backdrop = root.querySelector(".qa-backdrop");
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

    function isOpen() {
      return root.classList.contains("is-open");
    }

    function open() {
      root.classList.add("is-open");
      panel.hidden = false;
      backdrop.hidden = false;
      panel.setAttribute("aria-hidden", "false");
      launch.setAttribute("aria-expanded", "true");
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
      root.classList.remove("is-open");
      panel.hidden = true;
      backdrop.hidden = true;
      panel.setAttribute("aria-hidden", "true");
      launch.setAttribute("aria-expanded", "false");
    }

    function onClose(event) {
      event.preventDefault();
      event.stopPropagation();
      shut();
    }

    launch.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen()) shut();
      else open();
    });
    root.addEventListener("pointerdown", (event) => {
      if (event.target.closest("[data-qa-close]")) onClose(event);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) shut();
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
