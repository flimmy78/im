<%@ page import="com.cn.feiniu.imindex.config.SystemConfig" %>
<%--
  Created by IntelliJ IDEA.
  User: wangchen
  Date: 2015/1/8
  Time: 10:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>飞牛哞哞卖家版下载页</title>
    <!-- 嵌入后台时可删掉feiniuStyle.css样式，此样式为飞牛网头尾样式 -->
    <link type="text/css" rel="stylesheet" href="css/feiniuStyle.css" />
    <!-- feiniuStyle.css样式 -->
    <link type="text/css" rel="stylesheet" href="css/MouMouSellerEdition.css" />
</head>
<body>
<div class="mou-floor floor-1">
    <div class="moumou-content">
        <span class="logo"><img src="images/LOGO.png" alt="飞牛哞哞" /></span>
        <div class="floor-1-word">
            <h1>飞牛哞哞商家版</h1>
            <span>高效、专业、体贴！</span>
            <p>版本：<%=SystemConfig.VERSION%></p>
            <p>大小：<%=SystemConfig.SIZE%>MB</p>
            <p>更新日期：<%=SystemConfig.UPDATE_DATE%></p>
            <p>系统：WindowsXp/7/8</p>
            <a class="download" href="exe/<%=SystemConfig.FILE_NAME%>" target="_self"></a>
        </div>
    </div>
</div>
<div class="mou-floor floor-2">
    <div class="moumou-content">
        <div class="floor-word">
            <h2>客户信息360度</h2>
            <p>全方位掌握客户信息，精准定位，贴心服务</p>
        </div>
    </div>
</div>
<div class="mou-floor floor-3">
    <div class="moumou-content">
        <div class="floor-word">
            <h2>客户分流，团队协作</h2>
            <p>高效分工，共同用心服务客户</p>
        </div>
    </div>
</div>
<div class="mou-floor floor-4">
    <div class="moumou-content">
        <div class="floor-word">
            <h2>商品搜索推荐</h2>
            <p>热销商品一键推荐</p>
        </div>
    </div>
</div>
</body>
</html>

