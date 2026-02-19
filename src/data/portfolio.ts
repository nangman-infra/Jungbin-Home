export const portfolioData = {
  name: "유정빈",
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
      school: "메가존 클라우드 MSP 솔루션 아키텍트 양성과정 4기",
      degree: "AWS Cloud Infrastructure Architect",
      period: "2023.08 - 2024.02",
      description: "클라우드 서비스 모델(SaaS, PaaS, IaaS) 이해 및 AWS 솔루션 아키텍처 설계 실습. Terraform 기반 인프라 자동화 및 K8s 클러스터 운영 경험 보유."
    }
  ],

  certificates: [
    { title: "AWS Solutions Architect Associate (SAA)", issuer: "AWS", date: "2023.11" },
    { title: "SQL Developer (SQLD)", issuer: "KODB", date: "2023.09" }
  ],

  // 사용자가 요청한 대규모 인프라 기술 스택 블로그 카테고리
  blogCategories: [
    {
      name: "Cloud (AWS/NCP/GCP)",
      posts: [
        { id: 1, title: "멀티 가용 영역(Multi-AZ) VPC 설계 가이드", date: "2024.02.19" },
        { id: 2, title: "IAM Role과 Policy를 활용한 최소 권한 원칙 구현", date: "2024.02.10" }
      ]
    },
    {
      name: "IaC & Automation",
      posts: [
        { id: 3, title: "Terraform State 관리와 가로채기(Locking) 전략", date: "2024.02.15" },
        { id: 4, title: "Ansible을 활용한 구성 관리 자동화 및 효율화", date: "2024.02.05" }
      ]
    },
    {
      name: "Container & K8s",
      posts: [
        { id: 5, title: "Kubernetes 아키텍처와 컨트롤 플레인의 이해", date: "2024.02.12" },
        { id: 6, title: "Helm Chart를 활용한 어플리케이션 배포 표준화", date: "2024.01.30" }
      ]
    },
    {
      name: "Network & Security",
      posts: [
        { id: 7, title: "OSI 7계층 관점에서 바라본 네트워크 트러블슈팅", date: "2024.02.08" },
        { id: 8, title: "SSL/TLS 핸드셰이크 과정과 인증서 관리 실무", date: "2024.01.25" }
      ]
    },
    {
      name: "Database (RDBMS/NoSQL)",
      posts: [
        { id: 9, title: "RDS Read Replica를 통한 읽기 성능 분산 전략", date: "2024.02.02" },
        { id: 10, title: "NoSQL vs RDBMS: 인프라 관점에서의 선택 기준", date: "2024.01.15" }
      ]
    },
    {
      name: "OS & Server",
      posts: [
        { id: 11, title: "Linux 커널 파라미터 튜닝을 통한 서버 최적화", date: "2024.01.28" },
        { id: 12, title: "Shell Script를 활용한 로그 관리 및 알람 자동화", date: "2024.01.10" }
      ]
    },
    {
      name: "Monitoring & Logging",
      posts: [
        { id: 13, title: "Prometheus & Grafana를 활용한 통합 메트릭 수집", date: "2024.01.22" },
        { id: 14, title: "ELK Stack 기반 중앙 집중형 로그 분석 환경 구축", date: "2024.01.05" }
      ]
    },
    {
      name: "CI/CD & DevOps",
      posts: [
        { id: 15, title: "GitHub Actions와 ArgoCD를 활용한 GitOps 구현", date: "2024.01.18" }
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
