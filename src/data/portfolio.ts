export interface Project {
  id: number;
  title: string;
  category: string;
  period: string;
  shortDesc: string;
  desc: string;
  background: string;
  architecture: string[] | string;
  outcomes: string[];
  coreTech: string[];
  tech: string[];
  tag: string;
  status: string;
  hasArchitecture: boolean;
  images?: string[];
  image?: string;
  pdfUrl?: string;
  demoUrl?: string;
}

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
      degree: "Hybrid AI-Infrastructure Platform",
      period: "2026.06 - 진행 중",
      description: "현업에서 활동 중인 AWS 엔지니어 멘토님의 지도 아래, 실무 수준의 클라우드 네이티브 아키텍처를 직접 구축해보는 인프라 팀(랩)입니다.\n\n대전과 석촌에 위치한 실제 온프레미스 환경과 퍼블릭 AWS 클라우드를 상호 연동하여 하이브리드 테스트베드를 설계 및 구축 중이며, 이를 바탕으로 실전과 동일한 인프라 운영 역량을 집중적으로 훈련하고 있습니다.",
      link: "https://nangman.cloud/ko"
    },
    {
      school: "메가존클라우드 솔루션 아키텍트 양성과정 4기",
      degree: "AWS Cloud Infrastructure Architect",
      period: "2025.07 - 2026.02",
      description: "클라우드 및 멀티 클라우드 핵심 기술에 대한 이론 및 실습 교육을 이수했습니다. 총 960시간의 '메가존클라우드 실사례 기반 클라우드 심화 프로젝트'와 '온프레미스 인프라 설계 프로젝트'를 수행하며 솔루션 아키텍트로서의 실무 문제 해결 역량을 길렀습니다.",
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
      title: "GitOps 기반 온프레미스 MSA 전환 (Nangman-Note)",
      category: "Cloud Native & Automation",
      period: "2026.06 - Present",
      shortDesc: "모놀리식 애플리케이션의 MSA 전환 및 GitOps 파이프라인 구축을 통한 인프라 자동화 프로젝트입니다.",
      desc: "모놀리식 애플리케이션(nangman-note)의 마이크로서비스(MSA) 전환, Ansible을 활용한 K3s 클러스터 프로비저닝 및 ArgoCD 기반 GitOps 배포 자동화 파이프라인을 구축하는 인프라 연구 프로젝트입니다. 리눅스 커널 최적화를 통해 컨테이너 집적도를 향상시키고 있습니다.",
      background: "기존 모놀리식 아키텍처는 트래픽 증가에 따른 유연한 확장이 어렵고, 배포 시 전체 시스템의 다운타임이 발생하는 구조적 한계가 있었습니다. 이를 해결하기 위해, 향후 대규모 워크로드를 안정적으로 처리할 수 있는 고가용성 클라우드 네이티브 인프라 환경 구축을 목표로 프로젝트를 진행하고 있습니다.",
      architecture: [
        "하이브리드 프로비저닝: 온프레미스(Raspberry Pi 기반) 환경에 Ansible을 활용하여 K3s 클러스터 프로비저닝 과정을 코드로 템플릿화",
        "MSA 아키텍처 설계: 인프라 확장에 대비하여 기존 모놀리식 애플리케이션을 마이크로서비스 구조로 점진적 분리하는 방안 연구",
        "GitOps 파이프라인: GitHub Actions와 ArgoCD를 도입하여 선언적 배포 자동화 기반 마련"
      ],
      outcomes: [
        "IaC(Ansible) 적용을 통해 수동 인프라 구성의 휴먼 에러를 방지하고 일관된 클러스터 배포 환경 확보",
        "ArgoCD 기반 파이프라인을 설계하여, 추후 트래픽 분산 테스트 시 무중단 배포 및 즉각적인 롤백이 가능한 체계 마련",
        "현재 클라우드 네이티브 기반의 핵심 인프라 뼈대를 완성하고, 향후 대규모 워크로드 검증을 위한 테스트베드 고도화 진행 중"
      ],
      coreTech: ["K3s", "ArgoCD", "Ansible"],
      tech: ["Kubernetes", "Ansible", "ArgoCD", "MSA", "Linux Kernel"],
      tag: "Team",
      status: "In Progress",
      hasArchitecture: false,
      images: ["/images/project1-ui.png"],
      demoUrl: "https://transnote.nangman.cloud/"
    },
    {
      id: 2,
      title: "가상의 글로벌 E커머스 AWS EKS 마이그레이션",
      category: "AI Security & Edge Optimization",
      period: "2025.11 - 2026.02",
      shortDesc: "SageMaker 기반 지능형 봇 탐지 체계와 GitOps 파이프라인, 그리고 엣지 최적화를 도입한 EKS 마이그레이션 프로젝트입니다.",
      desc: "가상의 글로벌 코스메틱 브랜드 'Kyeol'을 대상으로, 기존 레거시 인프라를 AWS EKS 기반의 클라우드 네이티브 환경으로 마이그레이션하는 대규모 프로젝트입니다. 글로벌 트래픽 폭증에 유연하게 대응하고, 높은 가용성과 보안을 보장하는 모던 인프라를 구축하는 것이 핵심 목표였습니다.",
      background: "글로벌 서비스로 확장함에 따라 트래픽이 급증하면서 기존 인프라의 한계가 드러났습니다. 성공적인 클라우드 네이티브 전환을 위해 저는 다음 세 가지 핵심 인프라 개선 업무를 직접 주도했습니다.\n\n1. 매크로 등 지능형 봇 공격으로 인한 인프라 리소스 낭비 차단\n2. 다중 가용 영역(AZ) 및 여러 환경 배포 시 발생하는 형상 불일치와 수동 배포 오류 해결\n3. 전 세계 사용자에게 동일한 오리진 서버에서 콘텐츠를 제공할 때 발생하는 물리적 거리로 인한 응답 지연(Latency) 문제 해결",
      architecture: [
        "AI 지능형 보안 (SageMaker): 단순 정적 규칙(Static Rule)의 한계를 극복하기 위해 정상 사용자 행위 기반 6차원 벡터(요청 간격, 속도, 시간대, URL 복잡도, IP 신뢰도, 계정 이력) 모델링 수행",
        "실시간 이상 탐지 파이프라인: CloudFront 원본 로그를 Kinesis로 버퍼링 없이 즉시 스트리밍하고 Lambda에서 6가지 핵심 행동 지표 추출. SageMaker(Random Cut Forest) 모델을 통해 정상 패턴과의 통계적 거리를 측정하여 이상 점수(Score > 3.0) 산출",
        "WAF 자율 차단 체계: 이상 징후 포착 즉시 WAF 블랙리스트(IP Set)에 자동 등록. 단, 무조건 차단 대신 Captcha를 띄워 혹시 모를 정상 유저를 보호하는 유연한 대응 조치 구현",
        "GitOps 지속적 배포 (ArgoCD): GitHub Actions와 ArgoCD를 연계하여 코드 푸시부터 매니페스트 업데이트, 클러스터 반영(Sync)까지 이어지는 100% 선언적 배포 자동화 구축",
        "보안 및 동기화 아키텍처: VPC Peering을 활용하여 매니지먼트 클러스터에서 워크로드 클러스터로의 동기화를 외부 인터넷 노출 없이 프라이빗 네트워크 환경에서 안전하게 수행",
        "Edge 최적화 및 Ingress 라우팅: CloudFront 전역 엣지 로케이션을 도입해 콘텐츠를 즉시 전달하고, ALB Ingress를 설정하여 내부 Worker Node로 트래픽을 안정적으로 분산",
        "서버리스 이벤트 자동화: Lambda@Edge와 EventBridge를 연동하여 S3에 이미지가 저장되는 시점을 트리거로 활용, 환경별 데이터 분류 및 후속 처리 프로세스 자동화"
      ],
      outcomes: [
        "비정상적인 매크로(지능형 봇) 접근을 실시간 차단하여 오리진 서버 부하를 최소화하고 인프라 리소스 낭비 원천 방지",
        "Git을 단일 공급원(Source of Truth)으로 삼아 수동 배포에 따른 인적 오류를 완벽히 제거하고, 운영 리드 타임 단축 및 다중 환경 배포 정합성 확보",
        "CDN 엣지 캐싱 및 인프라 최적화 적용 전 대비 글로벌 TTFB(Time to First Byte)를 178.27ms에서 29.34ms로 약 84% 획기적으로 단축하여 사용자 경험 개선"
      ],
      coreTech: ["AWS SageMaker", "ArgoCD", "CloudFront"],
      tech: ["AWS EKS", "SageMaker", "Kinesis", "Lambda@Edge", "EventBridge", "ArgoCD", "CloudFront", "WAF", "Terraform"],
      tag: "Team",
      status: "Completed",
      hasArchitecture: true,
      images: [
        "/images/project2-arch.png",
        "/images/project2-detail-1.png",
        "/images/project2-detail-2.png",
        "/images/project2-detail-3.png",
        "/images/project2-detail-4.png"
      ]
    },
    {
      id: 3,
      title: "로컬 LLM 기반 AIOps 자율 관제 시스템",
      category: "Observability & AI",
      period: "2025.11 - 2026.02",
      shortDesc: "이기종 텔레메트리 데이터와 토폴로지 그래프를 연동하여 장애 근본 원인(RCA)을 자동 분석하는 관제 파이프라인입니다.",
      desc: "이기종 텔레메트리 데이터(Zabbix, Wazuh, Uptime Kuma)를 통합하고, Neo4j 토폴로지 의존성 그래프와 로컬 LLM을 연동하여 장애 탐지부터 근본 원인 분석(RCA)까지 자동화하는 자율형 관제 파이프라인을 개발했습니다.",
      background: "마이크로서비스 및 분산 인프라 환경에서는 장애 발생 시 이기종 모니터링 시스템의 파편화된 알람 폭탄으로 인해, 엔지니어가 근본 원인(Root Cause)을 파악하고 복구하는 데(MTTR) 지나치게 오랜 시간이 소요되었습니다.",
      architecture: [
        "이기종 텔레메트리 통합: Zabbix, Wazuh, Uptime Kuma 등 파편화된 모니터링 데이터를 중앙 수집",
        "토폴로지 그래프 매핑: Neo4j 그래프 데이터베이스를 활용해 리소스 간의 토폴로지 의존성 맵 구축",
        "AI 자동 관제: 온프레미스 로컬 LLM을 연동하여, 알람 발생 시 그래프 역추적을 통해 장애 원인을 자동 분석하는 RCA 파이프라인 개발"
      ],
      outcomes: [
        "장애 알람 발생 시 Neo4j 그래프를 통한 근본 원인(RCA) 자동 도출 로직 구현",
        "AIOps 파이프라인 도입으로 장애 인지부터 분석까지의 MTTR(평균 복구 시간) 획기적 단축",
        "퍼블릭 클라우드 의존성 없이 로컬 LLM을 활용한 폐쇄망 관제 체계 검증 완료"
      ],
      coreTech: ["Neo4j", "Local LLM", "Zabbix"],
      tech: ["Neo4j", "Python", "Local LLM", "Zabbix", "AWS ECS"],
      tag: "Team",
      status: "Completed",
      hasArchitecture: true,
      images: ["/images/project3-slack.png"]
    },
    {
      id: 4,
      title: "전사 하이브리드 인프라 거버넌스 구축",
      category: "DevOps & Governance",
      period: "2025.07 - 2026.02",
      shortDesc: "클라우드 및 온프레미스 자산 식별을 명확히 하고 운영 자동화의 거버넌스 기반을 마련하는 프로젝트입니다.",
      desc: "AWS 및 온프레미스 자산에 대한 일관된 Naming/Tagging 기준을 정의하여 자산 식별을 명확히 하고, 최소한의 태그로 운영 기준 통일 및 자동화 기반을 마련했습니다. 하이브리드 환경의 운영 복잡도를 크게 낮추고 리소스 검색 속도를 대폭 향상시켰습니다.",
      background: "다수의 팀이 클라우드 리소스를 각자의 규칙대로 무분별하게 생성함에 따라, 운영 환경의 관리 복잡도가 급증하고 부서별 비용 추적(Cost Allocation)이 불가능한 섀도우 IT(Shadow IT) 문제가 발생했습니다.",
      architecture: [
        "거버넌스 중앙 통제: AWS Organizations와 AWS Tag Policies를 활용하여 전사 리소스 네이밍 및 태깅 거버넌스를 중앙에서 통제하는 아키텍처 설계",
        "표준화 가이드라인 수립: 최소한의 필수 태그로 운영 기준을 통일하여 하이브리드 배포 환경의 일관성 확보",
        "자동화 기반 마련: 체계적인 태깅 정책을 통해 향후 스크립트 및 인프라 자동화 확장을 위한 논리적 기반 완성"
      ],
      outcomes: [
        "전사 클라우드 리소스 100% 태깅 규정 준수(Compliance) 달성",
        "부서/프로젝트별 정확한 클라우드 비용 할당 및 추적 체계 확립을 통한 비용 최적화 기틀 마련",
        "일관된 네이밍 컨벤션 적용으로 인프라 운영자의 리소스 식별 및 관리 시간 감소"
      ],
      coreTech: ["AWS Governance", "Tagging Policy"],
      tech: ["AWS", "Governance", "Automation", "On-Premise"],
      tag: "Team",
      status: "Completed",
      hasArchitecture: false
    }
  ] as Project[]
};
