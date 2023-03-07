# next13-react

## 설치방법

- next 수동 설치

```bash
npm install next@latest react@latest react-dom@latest eslint-config-next@latest
```

- .gitignore

```bash
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

- .prettierrc.json

```bash
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true
}

```

- .prettierignore

```bash
.yarn
.pnp.*


```

- .editorconfig

```bash
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{md,mdx}]
trim_trailing_whitespace = false
```

- package.json

```bash
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- .eslintrc.json

```bash
{
  "extends": "next/core-web-vitals"
}

```

```git 설정
git config core.autocrlf = false
```

- app 폴더 생성
  - head.jsx
  - layout.jsx
  - page.jsx
