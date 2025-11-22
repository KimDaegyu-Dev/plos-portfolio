# plos-portfolio

Vite + React + MDX 기반 포트폴리오 사이트

## 🚀 기술 스택

- **Vite**: 빠른 개발 환경과 빌드 도구
- **React 18**: UI 컴포넌트 라이브러리
- **TypeScript**: 타입 안정성
- **MDX**: Markdown에서 React 컴포넌트 사용
- **React Router**: 클라이언트 사이드 라우팅
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크

## 📦 설치

```bash
npm install
```

## 🛠️ 개발

개발 서버를 실행합니다:

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)을 엽니다.

## 🏗️ 빌드

프로덕션 빌드를 생성합니다:

```bash
npm run build
```

## 👀 미리보기

빌드된 프로젝트를 로컬에서 미리 봅니다:

```bash
npm run preview
```

## 🧹 린트

코드를 린트합니다:

```bash
npm run lint
```

## 📁 프로젝트 구조

```
plos-portfolio/
├── public/              # 정적 파일
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   ├── content/         # MDX 콘텐츠 파일
│   │   ├── about.mdx
│   │   └── blog-example.mdx
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Blog.tsx
│   ├── styles/          # CSS 파일
│   │   └── index.css
│   ├── App.tsx          # 메인 App 컴포넌트
│   ├── main.tsx         # 진입점
│   └── vite-env.d.ts    # TypeScript 타입 정의
├── index.html           # HTML 템플릿
├── package.json
├── tsconfig.json
├── vite.config.ts       # Vite 설정
└── tailwind.config.js   # Tailwind 설정
```

## ✨ 특징

- ⚡ **빠른 HMR**: Vite의 즉각적인 핫 모듈 교체
- 📝 **MDX 지원**: Markdown에서 React 컴포넌트 사용
- 🎨 **Tailwind CSS**: 반응형 디자인 및 다크 모드 지원
- 🔒 **TypeScript**: 타입 안정성과 자동완성
- 🧭 **React Router**: SPA 라우팅

## 📝 콘텐츠 추가하기

새로운 MDX 콘텐츠를 추가하려면:

1. `src/content/` 폴더에 `.mdx` 파일 생성
2. 페이지 컴포넌트에서 MDX 파일 import
3. 컴포넌트로 렌더링

예시:
```tsx
import MyContent from '../content/my-content.mdx'

export default function MyPage() {
  return (
    <div className="prose">
      <MyContent />
    </div>
  )
}
```

## 🎨 스타일 커스터마이징

- `tailwind.config.js`: Tailwind 테마 설정
- `src/styles/index.css`: 글로벌 스타일

## 📄 라이선스

MIT
