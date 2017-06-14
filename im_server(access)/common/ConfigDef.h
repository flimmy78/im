
#pragma once

//公共配置
#define CONFIG_SECTION_IMCOMMON				"IMCommon"
#define CONFIG_KEY_IMMAX_USER_COUNT			"MaxUserCount"
//SSDB服务器ip
#define CONFIG_SECTION_SSDB					"SSDBConn"
#define CONFIG_KEY_SSDBADDR   				"SSDBAddr"
//hessianLog服务器配置
#define CONFIG_SECTION_HESSIAN				"Hessian"
#define CONFIG_HESSIAN_URL					"URL"
//压测配置
#define CONFIG_SECTION_PRESS				"Press"
#define CONFIG_PRESS_MID					"MerchantId"


//SHELL脚本配置通用项
#define CONFIG_SECTION_SHELL				"ShellConfig"
//Master服务器IP
#define CONFIG_MASTER_ADDR					"MasterIp"

//httpserver服务器配置
#define CONFIG_SECTION_HTTPSERVER           "HttpServer"
#define CONFIG_HTTPSERVER_IPADDR			"HttpServerIP"
#define CONFIG_HTTPSERVER_PORT              "HttpServerPort"

//zookeeper服务器配置
#define CONFIG_SECTION_ZOOKEEPER     		"ZookeeperServer"
#define CONFIG_ZOOKEEPER_IPADDR				"ZookeeperServerIP"
#define CONFIG_ZOOKEEPER_PORT				"ZookeeperServerPort"



//图片服务器ip
#define CONFIG_SECTION_IMG					"ImgServer"
#define CONFIG_KEY_IMGADDR   				"ImgServerIp"

//im服务器的ip
#define CONFIG_KEY_IMIPADDR					"IpAddr"
//im服务器内部通信礽p
#define CONFIG_SECTION_IMP2P			"IMP2P"
#define CONFIG_KEY_IMINIPADDR					"IpinAddr"
//服务器编号
#define CONFIG_KEY_SERVERNO					"ServerNo"
//IM日志级别
#define CONFIG_KEY_IM_LOG_PATH 				"IMLogPath"
#define CONFIG_KEY_IM_LOGCLASS				"IMLogClass"
//线程数量设置
#define CONFIG_KEY_MAXTHREADGROUPA			"MaxThreadGroupA"
#define CONFIG_KEY_MAXTHREADGROUPB			"MaxThreadGroupB"
#define CONFIG_KEY_MAXTHREADGROUPC			"MaxThreadGroupC"
#define CONFIG_KEY_TMAXTHREADGROUP			"MaxThreadGroup"

//接入服务器配置
#define CONFIG_SECTION_CONNECT_SERVER_COMMON	"ConnectCommon"
//接入服务器IP
#define CONFIG_KEY_CONNECT_SERVER_IP		"ConnectServerIP"

//接入服务器配置
#define CONFIG_SECTION_TCP	"WebConn"
//接入服务器IP
#define CONFIG_KEY_TCP		"TcpAddr"

//在线用户
#define CONFIG_SECTION_ONLINEUSER_COMMON	"OnlineUserCommon"
//全局在线用户管理服务器ip
#define	CONFIG_KEY_GLOBALONLINE_USER_SERVER "OnlineUserServer"
//在线用户日志级别
#define CONFIG_KEY_ONLINEUSER_LOGCLASS		"OnlineUserLogClass"
#define CONFIG_KEY_ONLINEUSER_LOG_PATH		"OnlineUserLogPath"

//中转服务器IP
#define CONFIG_SECTION_TRANSFER_COMMON		 "TransferCommon"
#define CONFIG_KEY_TRANSFER_SERVER			 "TransferServer"
#define CONFIG_KEY_MAX_TRANS_COUNT			 "MaxTransCount"
//文件传输日志级别
#define CONFIG_KEY_TRANSFER_LOGCLASS		"ImTransferLogClass"
#define CONFIG_KEY_TRANSFER_LOG_PATH		"ImTransferLogPath"


//在线家族
#define CONFIG_SECTION_ONLINEFAMILY_COMMON	"OnlineFamilyCommon"
//全局在线家族管理服务器ip
#define	CONFIG_KEY_ONLINEFAMILY_SERVER		"OnlineFamilyServer"
//在线家族日志级别
#define CONFIG_KEY_ONLINEFAMILY_LOGCLASS	"OnlineFamilyLogClass"
#define CONFIG_KEY_ONLINEFAMILY_LOG_PATH	"OnlineFamilyLogPath"


//网站消息通知
#define CONFIG_SECTION_WEBMSGNOTIFY_COMMON	"WebMsgNotifyCommon"
#define CINFIG_KEY_WEBMSGNOTIFY_SERVER	"WebMsgNotifyServer"
//网站消息通知日志级别
#define CONFIG_KEY_WEBMSGNOTIFY_LOGCLASS	"WebMsgNotifyLogClass"
#define CONFIG_KEY_WEBMSGNOTIFY_LOG_PATH	"WebMsgNotifyLogPath"

#define CONFIG_SECTION_LOGIN_URL			"LoginURL"
#define CONIFG_KEY_BUYER_LOGIN_URL			"BuyerLoginURL"
#define CONIFG_KEY_SELLER_LOGIN_URL			"SellerLoginURL"
#define CONIFG_KEY_WORK_LOGIN_URL			"WorkLoginURL"
#define CONIFG_KEY_LEVEL_URL				"BuyerLevelURL"
#define CONFIG_KEY_ISSAMEAREALOGIN_URL		"IsSameAreaLoginURL"
#define CONFIG_KEY_ISBINDMOBILE				"IsBindMobileURL"


#define CONFIG_SECTION_SEARCH_URL           "SearchMemberURL"
#define CONFIG_KEY_SEARCH_URL 			    "SearchMemberURL"

//headImgUrl配置
#define CONFIG_SECTION_HEADIMG_URL  "HeadImgURL"
#define CONFIG_KEY_HEADIMG_URL		"HeadImgURL"

//MySQL配置
#define CONFIG_SECTION_MYSQLSID_COMMON  "MYSQLSID"
#define CONFIG_KEY_MYSQLSID  "MYSQLSID"

#define CONFIG_SECTION_MYSQLUSER_COMMON  "MYSQLUSER"
#define CONFIG_KEY_MYSQLUSER "MYSQLUSER"

#define CONFIG_SECTION_MYSQLPWD_COMMON  "MYSQLPWD"
#define CONFIG_KEY_MYSQLPWD  "MYSQLPWD"

#define CONFIG_SECTION_MYSQLDB_COMMON  "MYSQLDB"
#define CONFIG_KEY_MYSQLDB  "MYSQLDB"

//MEMCACHED配置
#define CONFIG_SECTION_MEMCACHED_COMMON "MEMCACHEDCommon"
#define CONFIG_KEY_MEMCACHED_IPADDR "MEMCACHEDAddr"
#define CONFIG_KEY_MEMCACHED_IPPORT "MEMCACHEDPort"
#define CONFIG_KEY_MEMCACHED_MAGIC  "MEMCACHEDMagic"
//KAFKA 配置
#define CONFIG_SECTION_KAFKA_COMMON "KAFKACommon"
#define CONFIG_KEY_KAFKA_BROKER "KAFKABroker"
#define CONFIG_KEY_KAFKA_TOPIC "KAFKATopic"
#define CONFIG_KEY_KAFKA_TALK_TOPIC "KAFKATalkTopic"

// 客服工作台客服分组配置
#define CONFIG_SECTION_CS_GROUP "CSGroup"
#define CONFIG_KEY_CSGROUP_URL "CsGroupUrl"
#define CONFIG_KEY_GROUPID "GroupID"
#define CONFIG_KEY_CSNAME_URL "CsNameUrl"

// AES加密
#define CONFIG_SECTION_AES "AES"
#define CONFIG_KEY_AESKEY "KEY"

// 订单详情
#define CONFIG_SECTION_ORDER_DETAIL "ORDERDETAIL"
#define CONFIG_KEY_ORDER_DETAIL_URL "URL"

// 退货详情
#define CONFIG_SECTION_RETURN_INFO "RETURNINFO"

// 消息推送
#define CONFIG_SECTION_MSGNOTIFY "MSGNOTIFY"
#define CONFIG_KEY_MSGNOTIFY_IP "IP"

//imapi
#define CONFIG_SECTION_IMAPI "IMAPI"
#define CONFIG_KEY_IMAP_URL "HTTPURL"

#define CONFIG_KEY_IM_LOGGER_URL "ImLogger"
#define CONFIG_KEY_IM_WEBIM_URL "WEBIM"
#define CONFIG_KEY_IM_GET_FRIENDLIST_URL "GETFRIENDLIST"
#define CONFIG_KEY_IM_GET_GROUPLIST_URL "GETGROUPLIST"

// 接入服务器
#define CONFIG_SECTION_ACCESSSERVER "ACCESSSERVER"
#define CONFIG_KEY_ACCESSSERVER_IP "IP"
#define CONFIG_KEY_ACCESSSERVER_PORT "PORT"

#define CONFIG_SECTION_ACCESSSERVERCOMMON "AccessServerCommon"
#define CONFIG_KEY_ACCESSSERVER_LOG_PATH "AccessServerLogPath"
#define CONFIG_KEY_ACCESSSERVER_LOG_CLASS "AccessServerLogClass"