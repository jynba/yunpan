# yunpan

## 如何开始？

1. 修改 application-window.properties 中的路径到电脑磁盘中路径（规范基于已有的格式）
2. 创建 mysql 数据库，架构名为 pan，执行`src\main\resources\static\pan.sql`脚本（使用云数据库则这一步可免）
3. 测试账号为 admin,密码 123；服务启动端口为 8080，/toLogin 为登录页
4. **注意**：设置激活码。需要登录 cflower,123 账号后，打开/registerCode 为新用户申请激活码，然后才可以用激活码注册
