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
      description: "현업에서 활동 중인 AWS 엔지니어 멘토님의 지도 아래, 실무 수준의 클라우드 네이티브 아키텍처를 연구하고 직접 구축해보는 인프라 팀(랩)입니다.\n\n대전과 석촌에 위치한 실제 온프레미스 환경과 퍼블릭 AWS 클라우드를 상호 연동하여 하이브리드 테스트베드를 설계 및 구축 중이며, 이를 바탕으로 실전과 동일한 인프라 운영 역량을 집중적으로 훈련하고 있습니다.\n\n(참조 페이지: nangman.cloud)"
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
      name: "DevOps & CI/CD",
      posts: [
        { id: "cicd-1", title: "AWS EC2 Blue/Green CI/CD, CI/CD Pipeline", date: "2026.05.27", url: "https://velog.io/@jungbin99/zz" }
      ]
    },
    {
      name: "OS & Systems",
      posts: [
        { id: "os-1", title: "[OS 1편] CPU, 코어, 프로세스, 쓰레드, 시스템 콜", date: "2026.05.14", url: "https://velog.io/@jungbin99/OS-1%ED%8E%B8-CPU-%EC%BD%94%EC%96%B4-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EC%93%B0%EB%A0%88%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%BD%9C" },
        { id: "os-2", title: "[OS 2편] CPU 스케줄링과 big.LITTLE 구조", date: "2026.05.31", url: "https://velog.io/@jungbin99/OS-2%ED%8E%B8-CPU-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81%EA%B3%BC-big.LITTLE-%EA%B5%AC%EC%A1%B0" },
        { id: "os-3", title: "KVM, Container, MicroVM — 가상화 격리 아키텍처 분석", date: "2026.06.15", url: "https://velog.io/@jungbin99/KVM-Container-MicroVM-%EA%B0%80%EC%83%81%ED%99%94-%EA%B2%A9%EB%A6%AC-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EB%B6%84%EC%84%9D" }
      ]
    },
    {
      name: "Security",
      posts: [
        { id: "sec-1", title: "SageMaker Anomaly Detection: 지능형 봇 실시간 차단 시스템 구축기", date: "2026.03.06", url: "https://velog.io/@jungbin99/SageMaker-Anomaly-Detection-%EC%A7%80%EB%8A%A5%ED%98%95-%EB%B4%87-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B0%A8%EB%8B%A8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%B6%95%EA%B8%B0" }
      ]
    },
    {
      name: "Network",
      posts: [
        { id: "nw-1", title: "HAProxy 로드밸런싱", date: "2026.04.23", url: "https://velog.io/@jungbin99/HAProxy-L7-%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1" },
        { id: "nw-2", title: "HAProxy vs AWS ALB", date: "2026.05.29", url: "https://velog.io/@jungbin99/HAProxy-vs-AWS-ALB" }
      ]
    },
    {
      name: "Cloud Architecture",
      posts: [
        { id: "ca-1", title: "Nangman Infra Naming & Tagging Guide v1.0", date: "2026.03.12", url: "https://velog.io/@jungbin99/AWS-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EA%B7%9C%EC%B9%99" }
      ]
    },
    {
      name: "IaC & Automation",
      posts: [
        { id: "iac-1", title: "Immutable Infrastructure", date: "2026.06.27", url: "https://velog.io/@jungbin99/Immutable-Infrastructure-Paradigms-for-Modern-Operations" }
      ]
    },
    {
      name: "Container Orchestration",
      posts: [
        { id: "co-1", title: "Docker 특징과 사용하는 이유", date: "2026.05.13", url: "https://velog.io/@jungbin99/Docker-%ED%8A%B9%EC%A7%95%EA%B3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0" }
      ]
    },
    {
      name: "Observability",
      posts: [
        { id: "ob-1", title: "Linux health-check 검증", date: "2026.03.24", url: "https://velog.io/@jungbin99/%EC%8B%A4%EC%A0%84-%EB%A6%AC%EB%88%85%EC%8A%A4-%EC%9E%A5%EC%95%A0-%EB%8C%80%EC%9D%91-%EB%9F%B0%EB%B6%81" },
        { id: "ob-2", title: "서버 상태 점검 스크립트", date: "2026.05.06", url: "https://velog.io/@jungbin99/%EC%84%9C%EB%B2%84-%EC%83%81%ED%83%9C-%EC%A0%90%EA%B2%80-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8" }
      ]
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
