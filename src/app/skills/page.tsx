"use client";

import { motion } from "framer-motion";
import { Layers, Cloud, Terminal, ActivitySquare, Database, Shield, Cpu } from "lucide-react";

export default function SkillsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="main-wrapper max-w-4xl"
        >
            <div className="mb-16">
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
                    Tech Stack & Core Competencies.
                </h1>
                <p className="text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
                    시스템의 근본 원리를 바탕으로 설계된, 클라우드 아키텍처 및 자동화 관련 핵심 기술 스택입니다.
                </p>
            </div>

            <section className="space-y-6">
                <div className="flex flex-col gap-12">
            
                    {/* 1. Cloud & Hybrid Infrastructure */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                            <Cloud className="w-5 h-5 text-blue-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">Cloud Infrastructure</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">다계층 아키텍처 및 트래픽 분산</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">N-Tier Architecture</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">AWS (VPC, EC2, S3, RDS) 기반의 인프라 설계 및 Multi-AZ 가용 영역 분산을 통한 서비스 고가용성(HA) 아키텍처 구축. DMZ(Public), Application(Private), Data(Isolated) 서브넷 철저 분리</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Container Orchestration</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Docker 기반 컨테이너화 및 Managed k8s(EKS), Lightweight k8s(k3s) 환경에서의 워크로드 배포 및 오케스트레이션</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">CDN & Global Routing</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Amazon CloudFront, Route 53 기반 글로벌 트래픽 최적화</p>
                        </div>
                    </div>
                    </div>

                    {/* 2. Automation & IaC */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                            <Terminal className="w-5 h-5 text-emerald-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">Infrastructure as Code</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">선언적 인프라 및 자동화</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">IaC Automation</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Terraform을 활용한 클라우드 리소스 모듈화 및 프로비저닝 자동화. Ansible 기반 서버 구성 관리(Configuration Management) 구현</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">GitOps & CI/CD</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">GitHub Actions와 ArgoCD 연동한 선언적 배포 파이프라인(GitOps) 구축 및 지속적 배포(CD) 체계 운영. EC2 Blue/Green 무중단 배포 아키텍처</p>
                        </div>
                    </div>
                    </div>

                    {/* 3. Observability & Monitoring */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                            <ActivitySquare className="w-5 h-5 text-orange-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">Observability</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">전체 가시성 확보 및 분석</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Metrics & Dashboards</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Prometheus와 Grafana 기반 시스템 가시성 확보, 지연 시간/트래픽/에러율 등 핵심 지표 분석 및 장애 대응 체계 수립</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Log Analytics</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Kinesis Data Streams, Fluent Bit, Amazon Athena 실시간 로그 파이프라인</p>
                        </div>
                    </div>
                    </div>

                    {/* 4. Database & Caching */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100">
                            <Database className="w-5 h-5 text-sky-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">Database & Caching</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">데이터 계층 고가용성 설계</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">RDBMS & NoSQL</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">PostgreSQL 기반 Multi-AZ(다중 가용영역) 고가용성 데이터베이스 아키텍처 운영. Neo4j 기반 복잡한 데이터 관계(Relationship) 모델링</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">In-Memory Cache</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Amazon ElastiCache for Valkey 기반 병목 구간 부하 분산</p>
                        </div>
                    </div>
                    </div>

                    {/* 5. Security & Compliance */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                            <Shield className="w-5 h-5 text-purple-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">Security & Compliance</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">보안 내재화 및 망분리 설계</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Network & IAM Security</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">ISMS-P 규격을 준수하는 엄격한 서브넷 망분리 원칙 준수, 전용 NAT Gateway와 NACL을 적용한 결제망 격리. 최소 권한(Least Privilege) 원칙 적용</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Data Protection</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">AWS WAF 기반 알려진 웹 공격에 대한 1차 방어, ACM/KMS 기반 엔드투엔드 데이터 암호화</p>
                        </div>
                    </div>
                    </div>

                    {/* 6. AI & ML Operations */}
                    <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-100 pb-12 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100">
                            <Cpu className="w-5 h-5 text-pink-500" />
                        </div>
                        <h4 className="font-black text-zinc-950 text-[18px]">AI & ML Operations</h4>
                        </div>
                        <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">지능형 AIOps 파이프라인</p>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">AIOps Pipeline</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">사내 모니터링/보안 시스템(Zabbix, Wazuh) API와 연동해 이벤트 데이터를 수집하고, 오픈소스 로컬 LLM을 활용하여 장애 근본 원인(RCA)을 자율 분석하는 지능형 파이프라인 구축</p>
                        </div>
                        <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                        <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Anomaly Detection</span>
                        <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Random Cut Forest (RCF) 모델 기반 정상 사용자 행위 6차원 벡터 모델링, 비지도 학습 악성 봇 탐지 파이프라인 구축 및 WAF 연동 차단</p>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
        </motion.div>
    );
}
