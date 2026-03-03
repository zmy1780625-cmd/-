# 🚀 部署指南

## 📋 部署文件清单

### ✅ 必须部署的核心文件

#### **前端文件**
```
index.html                    # 主页面（本地版本）
index-github-pages.html       # GitHub Pages版本
```

#### **后端API文件（Serverless Functions）**
```
api/
├── config.js                 # API配置管理
├── generate.js               # 演讲稿生成
├── status.js                 # 系统状态检查
└── test/
    └── [provider].js         # API连接测试
```

#### **配置文件**
```
package.json                  # 项目依赖和脚本
vercel.json                   # Vercel部署配置
README.md                     # 项目说明文档
```

### ⚠️ 不需要部署的文件

#### **本地开发文件**
```
server.js                     # 本地Express服务器（Vercel不需要）
start.bat                     # Windows启动脚本
deploy.bat                    # 本地部署脚本
.env                          # 本地环境变量（不要上传！）
node_modules/                 # 依赖包（自动安装）
package-lock.json             # 锁定文件（可选）
```

#### **测试和工具文件**
```
test-api.js                   # 本地API测试
test-system.js                # 系统测试
test-vercel.js                # Vercel测试
INSTALL.md                    # 安装说明
deploy-status.html            # 部署状态页面
```

#### **GitHub Pages相关**
```
_config.yml                   # Jekyll配置
CNAME                         # 自定义域名
deploy-github-pages.bat       # GitHub Pages部署脚本
README-GITHUB-PAGES.md       # GitHub Pages说明
VERCEL_DEPLOY.md              # Vercel部署说明
api-config.json               # 静态API配置
```

## 🎯 部署步骤

### 步骤1：准备Git仓库
```bash
# 初始化Git仓库
git init

# 创建.gitignore文件
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore

# 添加文件
git add .
git commit -m "Initial commit: Speech Generator for Vercel"
```

### 步骤2：推送到GitHub
```bash
# 创建GitHub仓库后
git remote add origin https://github.com/yourusername/speech-generator.git
git branch -M main
git push -u origin main
```

### 步骤3：连接Vercel
1. 访问 https://vercel.com
2. 点击 "New Project"
3. 选择GitHub仓库
4. 导入项目

### 步骤4：配置环境变量
在Vercel Dashboard → Settings → Environment Variables 中添加：
```
GLM_API_KEY = your_actual_api_key_here
```

### 步骤5：部署
- Vercel自动检测配置并部署
- 获得部署URL：`https://your-project.vercel.app`

## 🔧 部署后的URL结构

### 前端页面
```
https://your-project.vercel.app/              # 主页面
https://your-project.vercel.app/index.html    # 同上
```

### API端点
```
https://your-project.vercel.app/api/status    # 系统状态
https://your-project.vercel.app/api/config    # API配置
https://your-project.vercel.app/api/generate  # 生成演讲稿
https://your-project.vercel.app/api/test/glm  # 测试GLM连接
```

## ✅ 验证部署成功

部署完成后，访问以下URL验证：

1. **主页面**: `https://your-project.vercel.app`
2. **API状态**: `https://your-project.vercel.app/api/status`
3. **测试功能**: 在主页面中测试演讲稿生成

## 🎊 完成！

部署成功后，您将拥有一个完全功能的演讲稿生成器，支持：
- ✅ 现代化Web界面
- ✅ GLM-4 Plus AI生成
- ✅ 全球CDN加速
- ✅ 自动HTTPS
- ✅ 无服务器架构