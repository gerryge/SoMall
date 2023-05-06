# SoMall 多租户多商户多应用开源平台

[Angular CLI, Angular, Node.js, TypeScript, and RxJS version compatibility matrix](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3). Officially part of the Angular documentation as of 2023-04-19 https://angular.io/guide/versions

# Start

## Prerequisites
1. Angular: ~11.2.5
2. Node.js: ^10.13.0 || ^12.11.0
3. .NET 5.0
4. Redis
5. RabbitMQ

## DB Migration
Please run `TT.SoMall.DbMigrator` project.

## Debug
1. Start `TT.SoMall.IdentityServer` project
2. Start `TT.SoMall.HttpApi.Host` project
3. Start Angualr project

**一个社交( Socail)+商城(Mall) 的开源学习项目**

**后端采用 abp二代 模块化开发**

**商城小程序+H5(页面比较多,第一个DEMO应该是小程序和后台一起上了)**
![image](_temp/mall/mall_1.jpg)

**管理后台Angular9 - Ant Design**
![image](_temp/angular/2.png)
![image](_temp/angular/3.png)
![image](_temp/angular/spu_edit.jpg)

#### 技术栈:

.netcore 3.1
vue
uni-app
typescript
docker
mssql

#### 前端

Angular9 - Ant Design
ng-zorro-antd
ng-alain

#### 小程序 
uni-app typescript

#### 后端+微服务技术栈

RabbitMQ (Event Bus)
Redis
Ocelot (Api Gate)
Consul (Service Discovery)
Quartz (background Job Schedule)


想运行项目首选要熟悉
ids4
abp.vnext
文档:
https://docs.abp.io/en/abp/latest/
somall相关视频
https://space.bilibili.com/486919427/

#### 交流QQ群353211
![image](_temp/qq_qun_353211.png)