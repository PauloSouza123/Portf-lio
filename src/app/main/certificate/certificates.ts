// Verified against uploaded completion certificates and the original portfolio archive.
// Preserve the original Portuguese course titles used on the certificates.
// The 19 certificates link to their stored PDFs; newer courses also link to issuer verification pages.
export type CertificateCategory = "Software Development" | "Cybersecurity";

export type Certificate = {
  id: string;
  title: string;
  provider?: string;
  date: string; // YYYY-MM-DD
  hours: string;
  category: CertificateCategory;
  pdfPath?: string;
  verifyUrl?: string;
  credentialId?: string;
};

export const certificates: Certificate[] = [
  {
    "id": "java-udemy",
    "title": "Java COMPLETO: Do Zero ao Profissional + Projetos!",
    "provider": "Udemy · Cod3r Cursos Online",
    "date": "2026-01-22",
    "hours": "77h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/java-completo-udemy-2026.pdf",
    "verifyUrl": "https://www.udemy.com/certificate/UC-74de62c8-a88f-4f54-bfbc-818cf032c195/",
    "credentialId": "UC-74de62c8-a88f-4f54-bfbc-818cf032c195"
  },
  {
    "id": "spring-boot-danki",
    "title": "Crie Sua Primeira Aplicação em Spring Boot com Java",
    "provider": "Danki Code",
    "date": "2026-01-29",
    "hours": "9h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/spring-boot-danki-2026.pdf",
    "verifyUrl": "https://cursos.dankicode.com/validate-certificate",
    "credentialId": "c5b68b40-8f38-4fa8-97e8-97c0ad64ebc7"
  },
  {
    "id": "python-intro-solyd",
    "title": "Introdução ao Python e Algoritmos",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-14",
    "hours": "31h 12m",
    "category": "Software Development",
    "pdfPath": "/c_certificate/python-algoritmos-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/Ql3DMqGk3B"
  },
  {
    "id": "python-oo-solyd",
    "title": "Python Orientado a Objetos e Automação",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-18",
    "hours": "46h 40m",
    "category": "Software Development",
    "pdfPath": "/c_certificate/python-orientado-objetos-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/vGxpoeOMm8"
  },
  {
    "id": "web-attacks-solyd",
    "title": "Ataques em Aplicações Web",
    "provider": "Solyd Offensive Security",
    "date": "2026-03-08",
    "hours": "52h",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/ataques-aplicacoes-web-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/mYCAnRww8R"
  },
  {
    "id": "bug-bounty-solyd",
    "title": "Automação e Estratégias em Bug Bounty",
    "provider": "Solyd Offensive Security",
    "date": "2026-03-16",
    "hours": "26h 40m",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/bug-bounty-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/HfxOLQTma9"
  },
  {
    "id": "cryptography-solyd",
    "title": "Fundamentos de Criptografia e Senhas",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-06",
    "hours": "5h 48m",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/criptografia-senhas-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/o7ZMHpgrNr"
  },
  {
    "id": "network-pentest-solyd",
    "title": "Dominando o Pentest em Infraestrutura de Redes",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-12",
    "hours": "13h 20m",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/pentest-infraestrutura-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/0sKCR4L1hG"
  },
  {
    "id": "intro-security-solyd",
    "title": "Fundamentos de Segurança da Informação e Pentest",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-04",
    "hours": "3h",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/seguranca-informacao-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/MLE749r6HX"
  },
  {
    "id": "linux-shell-solyd",
    "title": "Dominando o Linux e Shell Script para Pentesters",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-05",
    "hours": "16h",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/linux-shell-pentest-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/scFMV252YQ"
  },
  {
    "id": "methodology-solyd",
    "title": "Metodologias de Pentest na Prática",
    "provider": "Solyd Offensive Security",
    "date": "2026-03-20",
    "hours": "10h",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/metodologias-pentest-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/TbqApF5nEG"
  },
  {
    "id": "recon-solyd",
    "title": "Dominando o Recon em Pentest",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-10",
    "hours": "34h 40m",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/recon-pentest-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/dY2nYzSfZd"
  },
  {
    "id": "networks-solyd",
    "title": "Fundamentos de Redes para Pentesters",
    "provider": "Solyd Offensive Security",
    "date": "2026-02-08",
    "hours": "8h 30m",
    "category": "Cybersecurity",
    "pdfPath": "/c_certificate/redes-pentest-solyd-2026.pdf",
    "verifyUrl": "https://solyd.com.br/verificar/cqYxXqrgFK"
  },
  {
    "id": "front-end-old",
    "title": "Front-End Completo",
    "date": "2024-11-22",
    "hours": "83h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/Certificado_Front_End.pdf"
  },
  {
    "id": "nextjs-old",
    "title": "Next.js",
    "date": "2025-02-18",
    "hours": "2h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/Certificado_nextjs.pdf"
  },
  {
    "id": "php-old",
    "title": "PHP JEDAI",
    "date": "2025-01-07",
    "hours": "27h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/Certificado_PHP_JEDAI.pdf"
  },
  {
    "id": "react-old",
    "title": "React",
    "date": "2025-02-14",
    "hours": "4h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/certificado-react.pdf"
  },
  {
    "id": "games-js-old",
    "title": "Games JS",
    "date": "2024-12-26",
    "hours": "6h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/Games_JS.pdf"
  },
  {
    "id": "git-github-old",
    "title": "Git & GitHub",
    "date": "2025-01-31",
    "hours": "2h",
    "category": "Software Development",
    "pdfPath": "/c_certificate/git_github.pdf"
  }
];
