export const portfolioData = {
  name: "Ryu Jungbin",
  role: "Infrastructure Engineer",
  email: "jerome1803183@gmail.com",
  github: "https://github.com/Jungbin7",
  linkedin: "https://linkedin.com/in/정빈-유-9783402a5",
  tagline: "Building scalable, secure, and automated cloud infrastructure.",

  metrics: [
    { label: "Focus", value: "Cloud Native", desc: "Architecture Design" },
    { label: "Core Stack", value: "AWS & IaC", desc: "Automation Specialist" },
    { label: "OS / Env", value: "Linux & Git", desc: "System Foundations" },
    { label: "Goal", value: "Scalability", desc: "Building Reliable Systems" }
  ],

  navigation: [
    {
      group: "Intro",
      items: [
        { name: "Dashboard", icon: "LayoutDashboard", href: "/" }
      ]
    },
    {
      group: "Professional",
      items: [
        { name: "Tech Stack", icon: "Layers", href: "/skills" },
        { name: "Education & Certs", icon: "GraduationCap", href: "/education" },
        { name: "Projects", icon: "Hexagon", href: "/projects" }
      ]
    },
    {
      group: "Insight",
      items: [
        { name: "Technical Blog", icon: "Library", href: "/blog" },
        { name: "Contact", icon: "Send", href: "/contact" }
      ]
    }
  ],

  education: [
    {
      school: "Nangman Infra (IT 인프라 스터디 랩)",
      degree: "Hybrid AI-Infrastructure Platform 연구",
      period: "2026.06 - 진행 중",
      description: "클라우드 네이티브 및 AI 인프라 아키텍처를 심도 있게 연구하고 직접 구축해보는 실무 지향적 스터디 모임입니다. 라즈베리파이 기반 온프레미스 환경(K3s)과 AWS 클라우드를 연동하여, 실제 트래픽과 장애 상황을 모의할 수 있는 대규모 하이브리드 테스트베드를 구축하며 인프라 운영 역량을 기르고 있습니다.",
      curriculum: [
        { week: "Phase 1", title: "하이브리드 아키텍처 및 VPN 연동", desc: "AWS Site-to-Site VPN 기반 온프레미스와 퍼블릭 클라우드 간 안전한 하이브리드 네트워크 설계" },
        { week: "Phase 2", title: "MSA 분리 및 GitOps 파이프라인", desc: "모놀리식 구조를 4개의 마이크로서비스로 분리하고, GitHub Actions와 ArgoCD 기반 CI/CD 파이프라인 자동화" },
        { week: "Phase 3", title: "IaC 적용 및 10분 마이그레이션", desc: "Ansible과 Terraform을 활용한 인프라 코드화(IaC)로 향후 x86 고성능 서버 도입 시 즉각적인 스케일업 환경 구축" },
        { week: "Phase 4", title: "AIOps 및 인프라 관측성(Observability)", desc: "Kafka, Prometheus, 로컬 LLM을 연동하여 시스템 장애를 사전 모의하고 근본 원인(RCA)을 자율 분석하는 테스트베드 운영" }
      ]
    },
    {
      school: "메가존클라우드 솔루션 아키텍트 양성과정 4기",
      degree: "AWS Cloud Infrastructure Architect",
      period: "2025.07 - 2026.02",
      description: "클라우드 및 멀티 클라우드 핵심 기술에 대한 이론 및 실습 교육을 이수했습니다. 총 320시간의 '메가존클라우드 실사례 기반 클라우드 심화 프로젝트'와 '온프레미스 인프라 설계 프로젝트'를 수행하며 솔루션 아키텍트로서의 실무 문제 해결 역량을 길렀습니다.",
      curriculum: [
        { week: "Phase 1", title: "서버 운영시스템 및 네트워크 기초", desc: "서버 운영체제 핵심 원리 및 OSI 7계층 기반 네트워크 인프라 기초 학습" },
        { week: "Phase 2", title: "클라우드 핵심 기술 기초 및 데이터베이스", desc: "AWS 클라우드 기술 기초와 RDBMS/NoSQL 데이터베이스 설계 및 실습" },
        { week: "Phase 3", title: "쿠버네티스 아키텍처 및 KVM/Docker 가상화", desc: "KVM 및 Docker 가상화 환경 구축 및 쿠버네티스 아키텍처 설계" },
        { week: "Phase 4", title: "멀티 클라우드(AWS/GCP) 고급 아키텍처 설계", desc: "AWS 고급 아키텍처 및 Google 클라우드 핵심 서비스 기반 인프라 구축" },
        { week: "Phase 5", title: "DevOps CI/CD 및 Terraform 배포 자동화", desc: "배포 자동화를 위한 Terraform 실습 및 DevOps 환경에서의 CI/CD 파이프라인 구성" }
      ]
    },
    {
      school: "코멘토 (Comento) 직무 체험 캠프",
      degree: "IT 직무 기초체험 및 기술역량 강화",
      period: "2025.01 - 2025.02",
      description: "현직자 멘토링 기반 클라우드 인프라 구축, 프론트엔드 배포, 동적 서버 구성 및 성능 테스트 등을 포함한 4주간의 실무 프로젝트 수행.",
      curriculum: [
        { week: "1주차", title: "기획 및 웹서버 구축", desc: "클라우드 환경 웹서버 생성 및 자기소개 웹페이지 기획안 작성" },
        { week: "2주차", title: "프론트엔드 개발 및 배포", desc: "HTML 소스 수정 후 배포 및 IT 인프라 비용 산정 보고서 작성" },
        { week: "3주차", title: "동적 서버 구성 및 모니터링", desc: "웹서버와 RDS 연동, 확장을 위한 기술 적용 및 모니터링 지표 구성" },
        { week: "4주차", title: "서버리스 백엔드 API & 성능 테스트", desc: "서버리스 기반 API 구현, 부하 성능 테스트 진행 및 아키텍처 설계" }
      ]
    }
  ],

  certificates: [
    { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services (AWS)", date: "2025.05.21" },
    { title: "SQL Developer (SQLD)", issuer: "Kdata", date: "2025.04.20" }
  ],

  blogCategories: [
    {
      name: "Cloud Architecture",
      posts: []
    },
    {
      name: "IaC & Automation",
      posts: []
    },
    {
      name: "Container Orchestration",
      posts: []
    },
    {
      name: "Network",
      posts: []
    },
    {
      name: "Security",
      posts: []
    },
    {
      name: "OS & Systems",
      posts: []
    },
    {
      name: "Observability",
      posts: []
    },
    {
      name: "DevOps & CI/CD",
      posts: []
    },
    {
      name: "Database",
      posts: []
    }
  ],

  projects: [
    {
      id: 1,
      title: "Megazone MSP Team Project",
      category: "Infra Design",
      desc: "고가용성(HA) 멀티 앱 아키텍처 설계 및 구축 프로젝트. CloudFormation을 통한 리소스 자동 프로비저닝 적용.",
      tech: ["AWS", "IaC", "AutoScaling"],
      tag: "Team"
    },
    {
      id: 2,
      title: "Personal Infrastructure Lab",
      category: "Cloud Native",
      desc: "K3s 및 Docker를 활용한 홈 랩(Home-Lab) 환경 구축 및 온프레미스 연동 테스트.",
      tech: ["K3s", "Docker", "RaspberryPi"],
      tag: "Personal"
    }
  ]
};
