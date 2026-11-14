/* Free, offline Number Systems Study Assistant.
   Answers are generated locally from built-in teaching rules; no API or key is used. */
(() => {
  const toggle = document.getElementById('aiChatToggle');
  const panel = document.getElementById('aiChatPanel');
  const close = document.getElementById('aiChatClose');
  const form = document.getElementById('aiChatForm');
  const input = document.getElementById('aiChatInput');
  const messages = document.getElementById('aiChatMessages');
  const send = document.getElementById('aiChatSend');
  if (!toggle || !panel || !form || !input || !messages || !send) return;

  const systems = {
    binary: { name: 'Binary', base: 2, digits: '0 and 1', use: 'computers represent data using two states, often described as off and on' },
    decimal: { name: 'Decimal', base: 10, digits: '0 to 9', use: 'everyday counting and measurement' },
    octal: { name: 'Octal', base: 8, digits: '0 to 7', use: 'a compact way to write groups of binary digits' },
    hexadecimal: { name: 'Hexadecimal', base: 16, digits: '0 to 9 and A to F', use: 'compact representation of binary values, such as colours and memory addresses' }
  };
  const aliases = {
    bin: 'binary', binary: 'binary', base2: 'binary',
    dec: 'decimal', decimal: 'decimal', base10: 'decimal',
    oct: 'octal', octal: 'octal', base8: 'octal',
    hex: 'hexadecimal', hexadecimal: 'hexadecimal', base16: 'hexadecimal'
  };
  const cleanKey = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  function findSystem(text, position) {
    const t = text.toLowerCase();
    const patterns = {
      binary: /\bbinary\b|\bbase\s*2\b|\bbin\b/,
      decimal: /\bdecimal\b|\bbase\s*10\b|\bdenary\b/,
      octal: /\boctal\b|\bbase\s*8\b/,
      hexadecimal: /\bhexadecimal\b|\bhex\b|\bbase\s*16\b/
    };
    const found = Object.keys(patterns).filter(k => patterns[k].test(t));
    if (!position) return found[0] || null;
    const matches = [];
    for (const k of found) {
      const m = patterns[k].exec(t);
      if (m) matches.push({ key: k, index: m.index });
    }
    matches.sort((a,b) => a.index-b.index);
    return matches[position - 1]?.key || null;
  }
  function formatDigits(n, base) {
    return n.toString(base).toUpperCase();
  }
  function conversionAnswer(q) {
    const from = findSystem(q, 1), to = findSystem(q, 2);
    if (!from || !to || from === to || !/(convert|change|turn|to)/i.test(q)) return null;
    const match = q.match(/(?:convert|change|turn)\s+(?:the\s+number\s+)?([0-9a-f]+)|\bnumber\s+([0-9a-f]+)|\b([0-9a-f]+)\s+(?:from|in)\b/i);
    const raw = match && (match[1] || match[2] || match[3]);
    if (!raw) return null;
    const value = raw.toUpperCase();
    const base = systems[from].base;
    const valid = base <= 10 ? new RegExp(`^[0-${base-1}]+$`).test(value) : /^[0-9A-F]+$/.test(value) && [...value].every(c => parseInt(c,16) < base);
    if (!valid) return `The number ${value} is not valid in ${systems[from].name}. ${systems[from].name} uses ${systems[from].digits}. Please check the digits and try again.`;
    const decimal = parseInt(value, base);
    const result = formatDigits(decimal, systems[to].base);
    const expanded = [...value].reverse().map((d,i) => `${parseInt(d,base)} × ${base}^${i}`).reverse().join(' + ');
    return `Let's convert ${value} from ${systems[from].name} (base ${base}) to ${systems[to].name} (base ${systems[to].base}).\n\nStep 1: Convert to decimal.\n${value} = ${expanded} = ${decimal}₁₀\n\nStep 2: Convert ${decimal}₁₀ to base ${systems[to].base}.\n${decimal} in ${systems[to].name} is ${result}.\n\nFinal answer: ${value}₍${base}₎ = ${result}₍${systems[to].base}₎.`;
  }
  function answer(q) {
    const s = q.toLowerCase();
    const conversion = conversionAnswer(q);
    if (conversion) return conversion;
    if (/\b(hello|hi|hey|kuzuzangpo|good morning|good afternoon)\b/.test(s))
      return 'Kuzuzangpo la! 😊 I am your free Number Systems Study Assistant. Ask me about Binary, Decimal, Octal, Hexadecimal or number conversions. I can explain them step by step.';
    if (/\b(help|what can you do|topics|options)\b/.test(s))
      return 'I can help you with:\n• Definitions and place value of the four number systems\n• Comparing Binary, Decimal, Octal and Hexadecimal\n• Converting numbers between bases with worked steps\n• Valid digits in each system\n• Bits, bytes and simple digital technology concepts\n\nTry asking: “Convert 1011 from binary to decimal.”';
    if (/\b(binary|decimal|octal|hexadecimal|hex)\b/.test(s) && /\b(difference|compare|versus|vs)\b/.test(s))
      return 'Here is a quick comparison:\n\n• Binary (base 2): digits 0 and 1.\n• Octal (base 8): digits 0–7.\n• Decimal (base 10): digits 0–9.\n• Hexadecimal (base 16): digits 0–9 and A–F.\n\nEach position represents a power of its base. Computers use binary internally, while octal and hexadecimal make long binary values shorter to read.';
    for (const key of Object.keys(systems)) {
      const sys = systems[key];
      const pattern = new RegExp(key === 'hexadecimal' ? 'hexadecimal|hex' : key);
      if (pattern.test(s)) {
        if (/\b(digit|symbol|use|used|base|meaning|what is|define|explain)\b/.test(s) || /\b(number system)\b/.test(s))
          return `${sys.name} is a number system with base ${sys.base}. It uses ${sys.digits}. ${sys.use[0].toUpperCase()+sys.use.slice(1)}.\n\nPlace values are powers of ${sys.base}. For example, the rightmost position is ${sys.base}⁰ = 1, the next is ${sys.base}¹ = ${sys.base}, and the next is ${sys.base}² = ${sys.base*sys.base}.`;
      }
    }
    if (/\b(bit|byte)\b/.test(s))
      return 'A bit (binary digit) is the smallest basic unit of digital data and has a value of 0 or 1. A byte is commonly made up of 8 bits. For example, 10101010 is one group of 8 bits, or one byte.';
    if (/\b(place value|positional)\b/.test(s))
      return 'In a positional number system, the value of a digit depends on its position. Each position represents a power of the base. In decimal 345, for example, the value is 3×10² + 4×10¹ + 5×10⁰ = 300 + 40 + 5 = 345.';
    if (/\b(add|addition|sum)\b/.test(s) && /\b(binary|base 2)\b/.test(s))
      return 'Binary addition follows these basic rules:\n0 + 0 = 0\n0 + 1 = 1\n1 + 0 = 1\n1 + 1 = 10 (write 0 and carry 1).\n\nTry adding 101₂ + 11₂. Work from right to left and remember to carry when needed.';
    if (/\b(example|practice|question|quiz)\b/.test(s))
      return 'Try this practice question:\n\nConvert 1101₂ to decimal.\n\nHint: Multiply each digit by its place value from right to left: 2⁰, 2¹, 2² and 2³. Add the results. Send me your answer and I can check it.';
    if (/\b(number system|number systems)\b/.test(s))
      return 'A number system is a way of representing numbers using a set of digits and a base (also called radix). The four systems on this website are:\n\n• Binary – base 2 (0, 1)\n• Octal – base 8 (0–7)\n• Decimal – base 10 (0–9)\n• Hexadecimal – base 16 (0–9, A–F)\n\nThe base tells us how many different digits are used.';
    return 'I can help with the number systems taught on this website. Please mention Binary, Decimal, Octal or Hexadecimal, or ask a conversion question such as “Convert 1011 from binary to decimal.” You can also type “help” to see what I can explain.';
  }

  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    const label = toggle.querySelector('.ai-toggle-label');
    if (label) label.textContent = open ? 'Close' : 'Ask AI';
    if (open) setTimeout(() => input.focus(), 80);
  }
  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  if (close) close.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false); });

  function addMessage(role, text) {
    const row = document.createElement('div');
    row.className = `ai-message ${role === 'user' ? 'ai-message-user' : 'ai-message-bot'}`;
    if (role !== 'user') {
      const avatar = document.createElement('span');
      avatar.className = 'ai-message-avatar'; avatar.textContent = '༄'; row.appendChild(avatar);
    }
    const bubble = document.createElement('div');
    bubble.className = 'ai-message-bubble'; bubble.textContent = text;
    row.appendChild(bubble); messages.appendChild(row); messages.scrollTop = messages.scrollHeight;
  }
  function ask(question) {
    const clean = question.trim();
    if (!clean) return;
    send.disabled = true; input.disabled = true;
    addMessage('user', clean);
    window.setTimeout(() => {
      addMessage('assistant', answer(clean));
      send.disabled = false; input.disabled = false; input.focus();
    }, 220);
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const value = input.value;
    if (!value.trim()) return;
    input.value = ''; input.style.height = 'auto'; ask(value);
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });
  document.querySelectorAll('[data-ai-prompt]').forEach(button => button.addEventListener('click', () => {
    setOpen(true); ask(button.dataset.aiPrompt);
  }));
})();
