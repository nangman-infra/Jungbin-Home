# RYU JEONGBIN Portfolio Site

인프라 시스템의 가치를 설계하고 자동화를 지향하는 인프라 아키텍트 **유정빈**의 포트폴리오 저장소입니다.  
본 프로젝트는 [seongwon.org](https://seongwon.org/)의 디자인 철학을 모티브로 하여 극도의 미니멀리즘과 'Boxed Precision' 스타일을 지향합니다.

## 📁 Repository Structure

본 리포지토리는 배포 환경의 표준성과 관리의 용이성을 위해 Next.js App Router의 표준 루트 구조를 따르고 있습니다.

```text
.
├── src/
│   ├── app/            # 페이지 라우트 및 레이아웃 (Home, Education, Projects, Blog)
│   ├── components/ui/  # 포트폴리오 전용 고정밀 UI 컴포넌트
│   ├── data/           # 포트폴리오 콘텐츠의 중앙 관리 데이터 (portfolio.ts)
│   └── lib/            # 유틸리티 함수
├── public/             # 이미지, 폰트 등 정적 에셋
├── package.json        # 종속성 및 스크립트 설정
├── tailwind.config.ts  # 'Boxed Precision' 디자인 토큰 설정
└── tsconfig.json       # TypeScript 설정
```

### 🎯 Key Design Principles
- **Boxed Precision**: 모든 섹션을 명확한 경계선으로 구분하여 시각적 인지도를 높였습니다.
- **High Contrast**: Zinc-950과 White의 극명한 대비를 통해 전문적이고 정교한 인상을 전달합니다.
- **Single-line Layout**: 핵심 정보는 단일 행 배치를 강제하여 정돈된 고품격 미니멀리즘을 유지합니다.

## 🚀 Development

### Prerequisites
- Node.js (v18+)
- pnpm (Recommended)

### Local Setup
```bash
# 종속성 설치
pnpm install

# 로컬 개발 서버 실행
pnpm dev
```

---
© 2026 RYU JEONGBIN. All Rights Reserved.
