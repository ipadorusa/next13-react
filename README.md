# next13-react

## 설치방법

- next 수동 설치

```plaintxt
npm install next@latest react@latest react-dom@latest eslint-config-next@latest
```

- .gitignore

```plaintxt
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

```plaintxt
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true
}

```

- .prettierignore

```plaintxt
.yarn
.pnp.*


```

- .editorconfig

```plaintxt
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

```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- app 폴더 생성
  - head.jsx
  - layout.jsx
  - page.jsx
