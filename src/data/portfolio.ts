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
      school: "메가존클라우드 솔루션 아키텍트 양성과정 4기",
      degree: "AWS Cloud Infrastructure Architect",
      period: "2025.07.31 - 2026.02.06",
      description: "클라우드 서비스 모델 이해 및 글로벌 이커머스 클라우드 마이그레이션 프로젝트 수행, AIOps 파이프라인 구축 등 현업 실무 중심의 아키텍처 설계 실습.",
      curriculum: [
        { week: "이론 & 실습", title: "이론 & 실습 중심 클라우드 기술 교육", desc: "서버 운영시스템 / 네트워크 기초 / 데이터베이스 / 파이썬 프로그래밍 / 쿠버네티스 아키텍처 설계 / ICT 인프라 구조 / KVM 및 Docker 가상화" },
        { week: "핵심 역량", title: "멀티 클라우드 핵심 역량 학습", desc: "AWS 클라우드 기술 기초 / AWS 아키텍처 설계 / AWS 고급 아키텍처 설계 / Google 클라우드 핵심 서비스 / DevOps 환경에서의 CI/CD / Google 쿠버네티스 아키텍처 설계 및 구축 / 배포 자동화를 위한 Terraform" }
      ]
    },
    {
      school: "코멘토 (Comento) 직무 체험 캠프",
      degree: "IT 직무 기초체험 및 기술역량 강화",
      period: "2025.01.25 - 2025.02.22",
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
      posts: [
        { id: 1, title: "HAProxy vs AWS ALB", url: "https://velog.io/@jungbin99/HAProxy-vs-AWS-ALB", date: "2024.03" },
        { id: 2, title: "AWS EC2 Blue/Green CI/CD", url: "https://velog.io/@jungbin99/AWS-EC2-BlueGreen-CICD", date: "2024.03" },
        { id: 3, title: "멀티 가용 영역(Multi-AZ) VPC 설계 가이드", url: "https://velog.io/@jungbin99", date: "2024.02" }
      ]
    },
    {
      name: "IaC & Automation",
      posts: [
        { id: 4, title: "Immutable Infrastructure", url: "https://velog.io/@jungbin99/Immutable-Infrastructure", date: "2024.03" },
        { id: 5, title: "Terraform State 관리와 가로채기(Locking) 전략", url: "https://velog.io/@jungbin99", date: "2024.02" },
        { id: 6, title: "Ansible을 활용한 구성 관리 자동화 및 효율화", url: "https://velog.io/@jungbin99", date: "2024.02" }
      ]
    },
    {
      name: "Container Orchestration",
      posts: [
        { id: 7, title: "KVM, Container, MicroVM", url: "https://velog.io/@jungbin99/KVM-Container-MicroVM", date: "2024.03" },
        { id: 8, title: "Kubernetes 아키텍처와 컨트롤 플레인의 이해", url: "https://velog.io/@jungbin99", date: "2024.02" },
        { id: 9, title: "Helm Chart를 활용한 어플리케이션 배포 표준화", url: "https://velog.io/@jungbin99", date: "2024.01" }
      ]
    },
    {
      name: "Network",
      posts: [
        { id: 10, title: "OSI 7계층 관점에서 바라본 네트워크 트러블슈팅", url: "https://velog.io/@jungbin99", date: "2024.02" }
      ]
    },
    {
      name: "Security",
      posts: [
        { id: 11, title: "SSL/TLS 핸드셰이크 과정과 인증서 관리 실무", url: "https://velog.io/@jungbin99", date: "2024.01" },
        { id: 12, title: "IAM Role과 Policy를 활용한 최소 권한 원칙 구현", url: "https://velog.io/@jungbin99", date: "2024.02" }
      ]
    },
    {
      name: "OS & Systems",
      posts: [
        { id: 13, title: "[OS 2편] CPU 스케줄링", url: "https://velog.io/@jungbin99/OS-2편-CPU-스케줄링", date: "2024.03" },
        { id: 14, title: "[OS 1편] 프로세스와 스레드", url: "https://velog.io/@jungbin99/OS-1편-프로세스와-스레드", date: "2024.03" },
        { id: 15, title: "Linux 커널 파라미터 튜닝을 통한 서버 최적화", url: "https://velog.io/@jungbin99", date: "2024.01" }
      ]
    },
    {
      name: "Observability",
      posts: [
        { id: 16, title: "Prometheus & Grafana를 활용한 통합 메트릭 수집", url: "https://velog.io/@jungbin99", date: "2024.01" },
        { id: 17, title: "ELK Stack 기반 중앙 집중형 로그 분석 환경 구축", url: "https://velog.io/@jungbin99", date: "2024.01" }
      ]
    },
    {
      name: "DevOps & CI/CD",
      posts: [
        { id: 18, title: "GitHub Actions와 ArgoCD를 활용한 GitOps 구현", url: "https://velog.io/@jungbin99", date: "2024.01" }
      ]
    },
    {
      name: "Database",
      posts: [
        { id: 19, title: "RDS Read Replica를 통한 읽기 성능 분산 전략", url: "https://velog.io/@jungbin99", date: "2024.02" },
        { id: 20, title: "NoSQL vs RDBMS: 인프라 관점에서의 선택 기준", url: "https://velog.io/@jungbin99", date: "2024.01" }
      ]
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
