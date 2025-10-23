# Image SaaS

一个基于 Next.js 14 构建的现代化图像 SaaS 平台，采用全栈 TypeScript 开发，集成了用户认证、数据库管理和 tRPC API。

## ✨ 技术栈

### 核心框架
- **Next.js 14** - React 全栈框架，支持 App Router
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript 超集

### 后端技术
- **tRPC** - 端到端类型安全的 API
- **NextAuth.js** - 身份认证解决方案
- **Drizzle ORM** - 类型安全的 ORM
- **PostgreSQL** - 关系型数据库

### UI 框架
- **Tailwind CSS** - 原子化 CSS 框架
- **Radix UI** - 无头 UI 组件库
- **Lucide React** - 现代化图标库
- **class-variance-authority** - CSS 变体管理
- **tailwindcss-animate** - CSS 动画插件

### 状态管理
- **TanStack Query (React Query)** - 服务端状态管理

## 📋 功能特性

- ✅ 用户认证（GitLab OAuth）
- ✅ 响应式现代化 UI 设计
- ✅ 类型安全的 API（tRPC）
- ✅ 数据库迁移管理（Drizzle Kit）
- ✅ 用户会话管理
- ✅ Dashboard 仪表盘
- 🚧 图像处理功能（开发中）

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- pnpm（推荐）或 npm
- PostgreSQL 数据库

### 安装依赖

```bash
pnpm install
```

### 环境变量配置

创建 `.env.local` 文件并配置以下环境变量：

```env
# 数据库配置
DATABASE_URL=postgres://postgres:your_password@localhost:5432/your_database

# NextAuth 配置
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitLab OAuth（如果需要更改默认配置）
GITLAB_CLIENT_ID=your_gitlab_client_id
GITLAB_CLIENT_SECRET=your_gitlab_client_secret
```

### 数据库迁移

运行 Drizzle 迁移以创建数据库表：

```bash
pnpm drizzle-kit push
```

或生成迁移文件：

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
image-saas/
├── drizzle/              # 数据库迁移文件
├── public/               # 静态资源
├── src/
│   ├── app/             # Next.js App Router 页面
│   │   ├── api/         # API 路由
│   │   │   ├── auth/    # NextAuth 认证路由
│   │   │   └── trpc/    # tRPC API 路由
│   │   ├── dashboard/   # Dashboard 页面
│   │   ├── layout.tsx   # 根布局
│   │   └── page.tsx     # 首页
│   ├── components/      # React 组件
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── lib/             # 工具函数库
│   ├── server/          # 服务端代码
│   │   ├── auth/        # 认证配置
│   │   └── db/          # 数据库配置和 schema
│   └── utils/           # 工具函数
├── drizzle.config.ts    # Drizzle ORM 配置
├── next.config.js       # Next.js 配置
├── tailwind.config.js   # Tailwind CSS 配置
└── tsconfig.json        # TypeScript 配置
```

## 🗄️ 数据库 Schema

项目使用 Drizzle ORM 管理数据库，包含以下表：

- **users** - 用户信息表
- **accounts** - OAuth 账户关联表
- **sessions** - 用户会话表
- **verificationTokens** - 验证令牌表

详细 schema 定义见 `src/server/db/schema.ts`。

## 🔒 认证系统

项目集成了 NextAuth.js，支持以下认证方式：

- **GitLab OAuth** - 通过 GitLab 账号登录

认证配置位于 `src/server/auth/index.ts`。

## 🛠️ 开发命令

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 运行 ESLint 检查
pnpm lint

# 数据库相关
pnpm drizzle-kit generate   # 生成迁移文件
pnpm drizzle-kit push        # 直接推送 schema 到数据库
pnpm drizzle-kit studio      # 启动 Drizzle Studio 数据库管理界面
```

## 🎨 UI 组件

项目基于 Radix UI 和 Tailwind CSS 构建了一套可复用的 UI 组件系统：

- 支持深色模式
- 响应式设计
- 可访问性优先
- 类型安全的变体管理

组件库位于 `src/components/` 目录。

## 📦 API 架构

项目使用 tRPC 构建类型安全的 API：

- 端到端类型安全
- 自动类型推断
- 与 React Query 深度集成
- 支持实时查询和变更

tRPC 路由配置位于 `src/app/api/trpc/` 目录。

## 🔄 状态管理

使用 TanStack Query (React Query) 进行服务端状态管理：

- 自动缓存和重新验证
- 乐观更新
- 错误处理
- 加载状态管理

## 🚧 开发路线图

- [ ] 图像上传功能
- [ ] 图像编辑和处理
- [ ] 用户订阅系统
- [ ] 图像存储和管理
- [ ] AI 图像处理功能
- [ ] 图像分享和协作
- [ ] 性能优化和 CDN 集成

## 📝 环境变量说明

| 变量名 | 说明 | 必需 |
|--------|------|------|
| DATABASE_URL | PostgreSQL 数据库连接字符串 | ✅ |
| NEXTAUTH_URL | 应用的完整 URL | ✅ |
| NEXTAUTH_SECRET | NextAuth 加密密钥 | ✅ |
| GITLAB_CLIENT_ID | GitLab OAuth 客户端 ID | ⚠️ |
| GITLAB_CLIENT_SECRET | GitLab OAuth 客户端密钥 | ⚠️ |

⚠️ 注意：已在代码中硬编码默认值，生产环境应使用环境变量覆盖。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目为私有项目。

## 👥 作者

Image SaaS Team

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [tRPC](https://trpc.io/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

**注意**: 这是一个开发中的项目，某些功能可能尚未完全实现。欢迎贡献代码和反馈问题！
