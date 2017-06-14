/** =========================================================================*/
/**扩展EasyUI 的原生校验扩展*/
/** =========================================================================*/
$.extend($.fn.validatebox.defaults.rules, {
	equalTo: {//必须和某个字段相等
        validator:function(value,param){
            return $(param[0]).val() == value;
        },
        message:'字段不匹配'
    },
    minLength : { // 判断最小长度
        validator : function(value, param) {
            return value.length >= param[0];
        },
        message : '最少输入 {0} 个字符。'
    },
    length:{validator:function(value,param){
        var len=$.trim(value).length;
            return len>=param[0]&&len<=param[1];
        },
            message:"输入内容长度必须介于{0}和{1}之间."
        },
    phone : {// 验证电话号码
        validator : function(value) {
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : '格式不正确,请使用下面格式:020-88888888'
    },
    minValue : {
		validator: function (value,param) {
			var reg = /^[0-9]+$/;//验证整数
			var flag = false;
			if(reg.exec(value)) {
				if(value >= param) {
					flag = true;
				}
			}
			return flag;
		},
		message: '请输入大于等于{0}的整数'
	},
	precision:{
		validator: function (value,prec) {
			if(new RegExp("^([0-9]+|0)(\.[0-9]{0,"+prec+"})?$").exec(value)) {
				return true;
			}else{
				return false;
			}
		},
		message: '精度不为{0}位'
	},
	money:{
		validator: function (value) {
		    if (/^([0-9]{1,7}|0)(\.[0-9]{0,2})?$/.test(value)) {
		        return true;
		    }else {
		        return false;
		    }
		},
		message: '请输入0~9999999.99范围内的金额值'
	},
	moneyOne:{
		validator: function (value) {
		    if (/^([0-9]{1,7}|0)(\.[0-9]{1})?$/.test(value)) {
		        return true;
		    }else {
		        return false;
		    }
		},
		message: '请输入0~9999999.9范围内的金额值'
	},
	intBetween : {
		validator: function (value,param) {
			var reg = /^[0-9]+$/;//验证整数
			var flag = false;
			if(reg.exec(value)) {
				if(value >= param[0] && value <= param[1]) {
					flag = true;
				}
			}
			return flag;
		},
		message: '请输入{0}-{1}之间的整数'
	},
    mobile : {// 验证手机号码
        validator : function(value) {
            return /^(13|14|15|17|18)\d{9}$/i.test(value);
        },
        message : '手机号码格式不正确'
    },
    idcard : {// 验证身份证
        validator : function(value) {
            return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
        },
        message : '身份证号码格式不正确'
    },
    intOrFloat : {// 验证整数或小数
        validator : function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message : '请输入数字，并确保格式正确'
    },
    date : {
		validator: function (value) {
			var reg = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
			return reg.exec(value);
		},
		message: '请输入有效日期，格式为：yyyy-MM-dd'
	},
	dateTime : {
		validator: function (value) {
			var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/;
			return reg.exec(value);
		},
		message: '请输入有效日期，格式为：yyyy-MM-dd hh:mm:ss'
	},
    currency : {// 验证货币
        validator : function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message : '货币格式不正确'
    },
    qq : {// 验证QQ,从10000开始
        validator : function(value) {
            return /^[1-9]\d{4,9}$/i.test(value);
        },
        message : 'QQ号码格式不正确'
    },
    Number : {
		validator: function (value) {
			var reg = /^(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/;
			return reg.exec(value);
		},
		message: '请输入有效的实数'
	},
    integer : {// 验证整数
        validator : function(value) {
            return /^[+]?[1-9]+\d*$/i.test(value);
        },
        message : '请输入整数'
    },
    chinese : {// 验证中文
        validator : function(value) {
            return /^[\u0391-\uFFE5]+$/i.test(value);
        },
        message : '请输入中文'
    },
    english : {// 验证英语
        validator : function(value) {
            return /^[A-Za-z]+$/i.test(value);
        },
        message : '请输入英文'
    },
    englishNum : {//验证字母数字
    	validator : function(value) {
            return /^\w+$/i.test(value);
        },
        message : '请输入(字母，数字)格式的内容'
    },
    unnormal : {// 验证是否包含空格和非法字符
        validator : function(value) {
            return /.+/i.test(value);
        },
        message : '输入值不能为空和包含其他非法字符'
    },
    username : {// 验证用户名
        validator : function(value) {
            return /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/i.test(value);
        },
        message : '用户名不合法（字母开头，允许3-16字节，允许字母数字下划线）'
    },
    faxno : {// 验证传真
        validator : function(value) {
//            return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value);
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : '传真号码不正确'
    },
    zip : {// 验证邮政编码
        validator : function(value) {
            return /^[1-9]\d{5}$/i.test(value);
        },
        message : '邮政编码格式不正确'
    },
    NormalName : {
        validator : function(value) { 
            return /^[a-zA-Z0-9\u4E00-\u9FA5]+$/g.test(value); 
        }, 
        message : '请输入(中文，字母，数字)格式的内容' 
    },
    SpecialName : {
        validator : function(value) { 
            return /^[a-zA-Z0-9\u4E00-\u9FA5_\s]+$/g.test(value); 
        }, 
        message : '请输入(中文，字母，数字，下划线，空格)格式的内容' 
    },
    eqPassword : { 
    		validator : function(value, param) { 
    			return value == $(param[0]).val(); 
    		}, 
    		message : '两次密码不一致！' 
    } ,
    ip : {// 验证IP地址
        validator : function(value) {
            return /d+.d+.d+.d+/i.test(value);
        },
        message : 'IP地址格式不正确'
    },
    portNum : {
		validator:function(value,param){
			return (/^[+]?[0-9]+\d*$/i.test(value))&&(value>=0&&value<=65535);
		},
		message:"端口号必须是0~65535之间的整数"
    },
    table: {
        validator: function (value, param) {
            return /^[^\u0391-\uFFE5^\,]+$/.test(value)&&(/^[^\*,@#\?\"<>\|]*$/.test(value));
        },
        message: '不能输入汉字与非法字符'
    },
    fileName : {
		validator:function(value,param){
	    	return (/^[^\\\/:,@#\*\?\"<>\|]*$/.test(value));
	    },
    	message:"文件名称不能包含\\\/:,@#\*\?\"<>\|"
    },
    locationInfo : {
    	validator:function(value,param){
    		return (/^[^\*,@#\?\"<>\|]*$/.test(value));
		},
		message:"存储位置不能包含\*,@#\?\"<>\|"
    },
    remark : {
		validator:function(value,param){
	    	return (/^[^<>]*$/.test(value));
	    },
    	message:"备注不能包含<>"
    },
    opinion : {
		validator:function(value,param){
	    	return (/^[^<>~@#$%^&*|:]*$/.test(value));
	    },
    	message:"审核意见不能包含<>~@#$%^&*|:"
    },
    name : {// 验证姓名，可以是中文或英文
            validator : function(value) {
                return /^[\u0391-\uFFE5]+$/i.test(value)|/^\w+[\w\s]+\w+$/i.test(value);
            },
            message : '请输入姓名'
    },
    carNo:{//车牌号
        validator : function(value){
            return /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/.test(value); 
        },
        message : '车牌号码无效（例：粤J12350）'
    },
    email : {//邮箱
    	validator : function(value){
            return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(value); 
        },
        message : '邮箱格式错误'
    },
    url:{//网址
    	validator : function(value){
            return /^(https?\:\/\/)?\S+(\.\S+)+$/.test(value); 
        },
        message : '网址格式错误'
    },
    keyWordContent : {
		validator:function(value,param){
	    	return (/^[^\\\/:@#\*\?\"<>\|]*$/.test(value));
	    },
    	message:"资产关键字不能包含\\\/:@#\*\?\"<>\|"
    },
    keyWordContent1 : {
		validator:function(value,param){
	    	return (/^[^\\\/:@#\*\?\"<>\|]*$/.test(value));
	    },
    	message:"不能包含\\\/:@#\*\?\"<>\|"
    }, 
    owner : {
		validator:function(value,param){
			return /^[\u0391-\uFFE5\w]+$/.test(value);
	    },
    	message:"资产所有者只能输入汉字、字母、数字及下划线'"
    },
    dateGtTo:{//日期大于等于
    	validator : function(value,param){
    		if("yyyy-MM-dd " == param[1]){
    			var dateThis = new Date(value.replace(/-/g, "/"));
    			var dateDist = new Date($(param[0]).val().replace(/-/g, "/"));
    			return dateThis >= dateDist;
    		}
    		
            return true;
        },
        message : '日期过小'
    	
    },
    dateLtTo:{//日期小于等于
    	validator : function(value,param){
    		if("yyyy-MM-dd " == param[1]){
    			var dateThis = new Date(value.replace(/-/g, "/"));
    			var dateDist = new Date($(param[0]).val().replace(/-/g, "/"));
    			return dateThis <= dateDist;
    		}
    		
            return true;
        },
        message : '日期过大'
    }
});
