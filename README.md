# vue3-ts-cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### git push 失败时按以下操作可以解决问题

### git config --global --unset http.proxy

### git config --global --unset https.proxy

### 解决方案：cmd 下命令执行 ipconfig/flushdns

### 清理 dns 缓存

### 解除报错问题:fatal: unable to access 'https://github.com/raochongmou/r-c-m-vue-3.0-typescript-cms.git/': Failed to connect to github.com port 443: Timed out

### 产生原因：一般是这是因为服务器的 SSL 证书没有经过第三方机构的签署，所以才报错

### 解除 ssl 验证命令

### git config --global http.sslVerify "false"
