export const profile = {
  name: "Muhammad Anas",
  role: "Full-Stack Engineer",
  location: "Passau, Germany",
  email: "anasm9877@gmail.com",
  github: "https://github.com/MuhammadAnas14",
  linkedin: "https://linkedin.com/in/muhammadanas14/",
  resume: "/Muhammad_Anas_Resume.pdf",
  // Set to "/photo.jpg" once the photo is in /public
  photo: null as string | null,
};

export const impact = [
  { value: 60, suffix: "%", label: "faster initial page load after moving the grower dashboard to Next.js" },
  { value: 80, suffix: "%", label: "less deployment time with Terraform, Argo CD and Jenkins" },
  { value: 80, suffix: "%", label: "less fraudulent activity for client banks with real-time fraud detection" },
  { value: 3, suffix: "", label: "countries of commercial greenhouses running on the IoT platform I built" },
];

export const signalPath = [
  { step: "01 · Device", title: "Firmware on STM32 & ESP32", detail: "C++ · sensors · master/slave networks" },
  { step: "02 · Pipeline", title: "MQTT, RabbitMQ, WebSockets", detail: "Node.js · Python · FastAPI ETL" },
  { step: "03 · Cloud", title: "AWS, Kubernetes, Terraform", detail: "EKS · Lambda · IoT Core · Argo CD" },
  { step: "04 · Interface", title: "Dashboards people use daily", detail: "React · Next.js · D3 · React Native" },
];

export const story = [
  {
    when: "2017 · Karachi",
    title: "Hardware first",
    text: "B.E. Computer System Engineering at NED University. IT Lead at the IEEE student branch.",
  },
  {
    when: "2021 · TPS Worldwide",
    title: "Payments for banks",
    text: "3DS, EMV and fraud detection, where every transaction had to be secure, fast and correct.",
  },
  {
    when: "2023 · Link4 Controls",
    title: "IoT, end to end",
    text: "Firmware, pipeline, dashboard and DevOps for greenhouses in the US, Canada and South Africa.",
  },
  {
    when: "2023 to present · Passau",
    title: "Cloud, AI & security",
    text: "M.Sc. Computer Science at the University of Passau (ongoing), with research in AI vulnerability detection and vehicle security.",
    current: true,
  },
];

export const experience = [
  {
    company: "Link4 Controls",
    role: "Software Engineer",
    when: "Mar 2023 to Sep 2026 · Remote (US)",
    about:
      "IoT platform that commercial greenhouses use to monitor and control their controllers and sensors from the cloud.",
    points: [
      "Built the grower dashboard in React, Next.js, TypeScript and D3 with live climate data, crop statistics and pump controls.",
      "Built the device to dashboard data flow: RabbitMQ, Node.js and Python services, WebSockets, PostgreSQL and MongoDB.",
      "Wrote C++ firmware for STM32F4 controllers and brought device logs into the web platform for remote debugging.",
      "Owned DevOps: Terraform, Docker on AWS EKS via Argo CD, Jenkins CI/CD, Grafana and Lambda alerts.",
      "Built a FastAPI ETL service that turns sensor data into training data for crop-condition ML models.",
    ],
    tech: ["Next.js", "TypeScript", "RabbitMQ", "FastAPI", "C++ / STM32F4", "AWS EKS", "Terraform", "Stripe"],
  },
  {
    company: "TPS Worldwide",
    role: "Software Engineer",
    when: "Nov 2021 to Mar 2023 · Karachi",
    about: "Payment technology for banks: a POS and card processing platform handling millions of transactions.",
    points: [
      "Built secure payment services with 3DS authentication and EMV-compliant processing for VISA and MasterCard.",
      "Integrated real-time fraud detection into the live transaction flow, cutting fraud by 80% for client banks.",
      "Built Node.js and SQL REST APIs for web and mobile banking, 30% faster on average.",
      "Extended Java and C++ banking middleware, working with ISO8583, UPI and HSM standards.",
    ],
    tech: ["Node.js", "SQL", "Java", "C++", "3DS / EMV", "ISO8583"],
  },
];

export type Tag = "IoT" | "Cloud" | "AI" | "Security";

export const projects: {
  name: string;
  kind: string;
  tags: Tag[];
  flow: string;
  desc: string;
  stack: string[];
  url: string;
}[] = [
  {
    name: "RoboSync",
    kind: "Cloud · IoT",
    tags: ["Cloud", "IoT"],
    flow: "robot → MQTT → IoT Core → Lambda → Postgres",
    desc: "Cloud sync backend for autonomous robots: telemetry in, commands out. One Express codebase runs locally and as Lambda, and every command is tracked from queued to acknowledged.",
    stack: ["Node.js", "TypeScript", "AWS IoT Core", "Lambda", "Terraform"],
    url: "https://github.com/MuhammadAnas14/robosync",
  },
  {
    name: "Bem Control",
    kind: "IoT · SaaS",
    tags: ["IoT"],
    flow: "ESP32 → MQTTS → Node.js → WebSocket → app",
    desc: "IoT fleet management SaaS. Provision a device in one API call, watch its telemetry update live in about a second, and get alerted the moment it drops offline.",
    stack: ["ESP32", "MQTT/TLS", "Prisma", "React", "React Native"],
    url: "https://github.com/MuhammadAnas14/bem-control",
  },
  {
    name: "Daybook",
    kind: "AI · Mobile",
    tags: ["AI", "Cloud"],
    flow: "Flutter → API Gateway → Lambda → Bedrock",
    desc: "Offline-first journal. Write one line and an LLM turns it into mood, tags and a summary. Entries save instantly offline and sync in the background.",
    stack: ["Flutter", "AWS CDK", "DynamoDB", "Cognito", "Bedrock"],
    url: "https://github.com/MuhammadAnas14/daybook",
  },
  {
    name: "EU MLOps Platform",
    kind: "Cloud · ML",
    tags: ["Cloud", "AI"],
    flow: "train → register → gate → deploy endpoint",
    desc: "Self-service paved road for data teams: train, register and promote fraud-detection models through a gated CI/CD flow, pinned to the EU.",
    stack: ["SageMaker", "Terraform", "GitHub Actions", "Python"],
    url: "https://github.com/MuhammadAnas14/mlops-platform",
  },
  {
    name: "Splunk SIEM",
    kind: "Security",
    tags: ["Security"],
    flow: "endpoints → forwarders → indexer → alerts",
    desc: "A deployable SIEM with 19 correlation rules mapped to MITRE ATT&CK, SOC dashboards and scripted, repeatable installs.",
    stack: ["Splunk", "Bash", "PowerShell", "MITRE ATT&CK"],
    url: "https://github.com/MuhammadAnas14/siem-detection-engineering",
  },
  {
    name: "Communication Agent",
    kind: "AI · SaaS",
    tags: ["AI"],
    flow: "call · SMS · email · chat → n8n → GPT",
    desc: "AI customer service platform that puts calls, email, SMS and web chat in one inbox, with n8n workflows handling routine requests.",
    stack: ["Next.js 15", "Flask", "n8n", "OpenAI", "Telnyx"],
    url: "https://github.com/MuhammadAnas14/communication-agent",
  },
  {
    name: "Vulnerability Detection with AI",
    kind: "M.Sc. research",
    tags: ["Security", "AI"],
    flow: "code → embeddings → LSTM/GRU → verdict",
    desc: "Compares LSTM, CNN, GRU and BiGRU models on Word2Vec, CodeBERT and GraphCodeBERT embeddings to find vulnerable Python code.",
    stack: ["Python", "Hugging Face", "CodeBERT", "Deep learning"],
    url: "https://github.com/MuhammadAnas14/vulnerability-detection-ml",
  },
  {
    name: "Autonomous Vehicle Risk Analysis",
    kind: "M.Sc. research",
    tags: ["Security", "AI"],
    flow: "NVD + EPSS + ECU graph → Random Forest",
    desc: "Ranks the most exploitable ECUs and paths in a vehicle network by combining vulnerability data with graph features, shown in an interactive dashboard.",
    stack: ["Python", "Flask", "Next.js", "NetworkX", "scikit-learn"],
    url: "https://github.com/MuhammadAnas14/vulnerability-mitigation-analysis-distributed-systems",
  },
];

export const stack = [
  { layer: "Interface", items: "React, Next.js, TypeScript, Redux, React Native, Flutter, D3.js, Tailwind, shadcn/ui" },
  { layer: "Backend", items: "Node.js, Express, Python, FastAPI, Flask, Java, C++, REST, GraphQL, PostgreSQL, MongoDB, Prisma" },
  {
    layer: "Cloud & DevOps",
    items: "AWS (EKS, Lambda, IoT Core, API Gateway, RDS, SageMaker), Docker, Kubernetes, Terraform, Argo CD, Jenkins, GitHub Actions, Grafana",
  },
  { layer: "Device & IoT", items: "C++ firmware (STM32F4, ESP32), MQTT, RabbitMQ, WebSockets, master/slave device networks" },
  { layer: "AI & Security", items: "LLM apps (OpenAI, Bedrock), n8n, CodeBERT, scikit-learn, Splunk SIEM, MITRE ATT&CK, 3DS/EMV, HSM" },
];

export const extras = [
  { label: "Certification", value: "AWS Certified Developer, Associate" },
  { label: "Certification", value: "AWS Certified Cloud Practitioner" },
  { label: "Languages", value: "English C1 · German B1" },
];
