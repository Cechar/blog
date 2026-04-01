# 部署指南

## Vercel 部署

### 1. 准备工作

确保你已经：
- 注册了 Vercel 账号（可以使用 GitHub 账号登录）
- 将代码推送到 GitHub 仓库

### 2. 部署步骤

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动识别 Next.js 项目

3. **配置项目**
   - Framework Preset: 选择 "Next.js"
   - Build Command: `next build`（默认）
   - Output Directory: `dist`（根据 next.config.js 配置）

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得默认的 Vercel 域名（如 `my-app.vercel.app`）

### 3. 自动部署

每次推送到 GitHub 的 main 分支，Vercel 会自动重新部署。

## 自定义域名配置

### 支持的域名类型

Vercel 支持以下自定义域名：
- **根域名**：`example.com`
- **子域名**：`www.example.com`、`blog.example.com`
- **多级子域名**：`deep.subdomain.example.com`

### 配置步骤

#### 1. 在 Vercel 中添加域名

1. 进入项目设置
2. 点击 "Domains" 标签
3. 输入你的域名（如 `example.com`）
4. 点击 "Add"

#### 2. 配置 DNS 记录

根据 Vercel 提供的说明，在你的域名注册商处配置 DNS：

**方式一：A 记录（推荐）**
```
Type: A
Name: @
Value: 76.76.21.21
```

**方式二：CNAME 记录**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 3. 验证域名

- DNS 配置可能需要几分钟到几小时生效
- Vercel 会自动验证域名配置
- 验证成功后，域名状态会显示为 "Valid"

#### 4. 配置 HTTPS

Vercel 会自动为自定义域名配置 HTTPS 证书（Let's Encrypt），无需手动操作。

### 常见问题

#### 域名解析不生效
- 检查 DNS 记录是否正确
- 等待 DNS 传播（通常需要几分钟到几小时）
- 使用 `dig` 或 `nslookup` 命令检查解析状态

#### HTTPS 证书问题
- 确保证书已自动颁发（通常需要几分钟）
- 如果证书未颁发，尝试重新添加域名

#### 子域名配置
- 为每个子域名单独添加 DNS 记录
- 或者使用通配符 DNS 记录（`*`）

## 环境变量配置

如果项目需要环境变量（如 API 密钥）：

1. 在 Vercel 项目设置中，点击 "Environment Variables"
2. 添加变量名和值
3. 选择环境（Production、Preview、Development）
4. 重新部署项目

## 性能优化

### 1. 图片优化
- 使用 Next.js 的 Image 组件
- 配置图片域名白名单

### 2. 缓存策略
- 静态资源默认缓存
- API 路由可配置缓存头

### 3. 分析工具
- 使用 Vercel Analytics 监控性能
- 使用 Vercel Speed Insights 优化加载速度

## 故障排除

### 构建失败
- 检查本地构建是否成功：`npm run build`
- 查看 Vercel 构建日志
- 确保所有依赖都已安装

### 404 错误
- 检查路由配置
- 确认静态文件已正确生成
- 查看 Vercel 函数日志

### 性能问题
- 使用 Vercel Analytics 分析
- 优化图片和资源加载
- 考虑使用 Edge Functions

## 相关链接

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [自定义域名文档](https://vercel.com/docs/concepts/projects/custom-domains)
