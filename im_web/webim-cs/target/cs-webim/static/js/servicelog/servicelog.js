/**
 * Created by wangchen on 2015/4/16.
 */
var TemplatePic =
    '<li class="hrefPic" style="float: left;"><a href="$hrefUrl"><img src="$picUrl" /></a></li>' ;
var TemplateOn =
    '<li class="on" class="hrefPic" style="float: left;"><a href="$hrefUrl"><img src="$picUrl" /></a></li>';

var TemplateHistoryLog =
    '<li class="historyLog"><p><em></em>$time   $serviceName</p><span class="on">$detail</span></li>';

var TemplateOpt=
    '<li class="askingOpt"><input  name="" type="checkbox" value="" id="$id" checked=$isChecked onchange="onTextChange()" class="askingOptCheckBox" textvalue="$text"><span>$text</span></li>';

var TemplateAskingInfo =
    ' <li class="askingInfo">' +
    '<input class="selectAskingInfo" name="askingInfo" type="checkbox" onchange="onTextChange()" value=$index />' +
    '<i class="expanAskingInfo"></i>' +
    '<span>$title</span>' +
    '<div class="info" style="display:none;">' +
    '<span>商品ID:$goodId</span>' +
    '<span>加购/赠品:$addGood</span>' +
    '<span>出货类型:$sellType</span>' +
    '<span>数量:$sellCount</span>' +
    '<span>出货者名称:$sellerName</span>' +
    '</div>' +
    '</li>';

var TemplateSavedAskingInfo =
    '<li class="savedAskingInfo">' +
    '<i class="expanAskingInfo"></i>' +
    '<span>$title</span>' +
    '<div class="info" style="margin-left: 13px; display: none;">' +
    '<span>商品ID:$goodId</span>' +
    '<span>加购/赠品:$addGood</span>' +
    '<span>出货类型:$sellType</span>' +
    '<span>数量:$sellCount</span>' +
    '<span>出货者名称:$sellerName</span>' +
    '</div>' +
    '</li>';

var TemplateSavedControl=
    '<div class="picScroll carousel" data-widget="clz:fnx/cmp/switchable/carousel" widget-options="{'+
       "effect:'scrollx',"+
        ' interval: 1000,'+
        ' duration: 300,'+
        ' autoplay: false,'+
        '   circular: true,'+
        '   size: 4,'+
        '   step: 4,'+
        '   hasTriggers : false'+
        ' }">'+
        '  <div class="wrap ui-pic-list" style="height: 75px;width: 338px;">'+
        '     <p class="btn-area">'+
        '    <a data-role="prev" href="javascript:;" class="js_prev ui-switchable-prev-btn" id="js_prev" data-role="prev"></a>'+
        '   <a data-role="next" href="javascript:;" class="js_next ui-switchable-next-btn" id="js_nexty" data-role="next"></a>'+
        '  </p>'+
        '   <ul data-role="content" id="AskingPictures" >'+
        '   $askingPictureList'+
        ' </ul>'+
        '  </div>'+
        ' </div>';

var TemplateSavedOpts =
    '<li class="savedAskingOpt"><em></em><span>$optName</span></li>';

function initSlide(){
    var Carousel = FNX.include('fnx/cmp/switchable/carousel');

    var slide = new Carousel({
        element: $('.carousel'),
        effect:'scrollx',
        size:4,
        step :4,
        hasTriggers: false
    });
}

function onSelectChange(){
    var self = serviceLog;
    var selectTmp=document.getElementById("statuSelect");
    self._tempVars.serviceStatus = selectTmp.options[selectTmp.selectedIndex].value;
    self._tempVars.serviceLogSaved = false;
};
function onTextChange(){
    var self = serviceLog;
    self._tempVars.serviceLogSaved = false;
}

function onCommodityClick(){
    $(this).toggleClass('on');
    $(this).nextAll(".info").slideToggle();
};
function showInfo(content) {
    alert(content);
}
var serviceLog = {
    _request:{
        customerId:"-",
        customerServiceName:"--",
        goodsAskingType:"0"
    },
    _tempVars:{
        serviceType:"服务查询",
        serviceLevel:"普通",
        serviceStatus:"处理中",
        askingInfoList:null,
        serviceLogType:2,
        askingOptionsCode:"",
        askingGoodsInfoCode:"",
        historyServiceLogCode:"",
        askingPicturesCode:"",
        serviceLogSaved:false
    },

    _params: {
        userInfo:{
            MEM_USERNAME:"--",
            NICKNAME:"--",
            MEM_GUID:"5F4E1EB2-2848-7BA5-78D1-624C1FE14A6B"
        },
        userLevel:{
            memLevel:"--",
            memLevelDesc:"--"
        },
        connectInfo:{
            customerName:"--",
            customerTel:"--"
        },
        askingPictures:null,
        orderDetail:{
            orderId:"--",
            orderStatus:"--",
            orderList:"--",
            lastOrderTime:"--",
            lastOrderStatus:"--",
            lastOrderId:"--",
            lastTotalCost:"--",
            totalGoodsNum:"--",
            allDealCount:"--",
            meanPrice:"--"
        },
        askingOptions:null,
        askingGoodsInfo:null,
        historyServiceLog:null,
        serviceLog:""
    },

    init: function () {
        this.initUI();
        this.initData();
        this.bindUI();
    },
    initData: function () {
        var self = this;
        self.updateInfoToParams(function(){
            self._tempVars.serviceLogSaved = true;
        });
    },
    //获取数据的接口,捕捉动作，筛查数据
    initUI: function () {
        var self =this;
        $tempdata = $('tmpdata');
        var serviceLogRequest = $tempdata.data('servicelogrequest') || [];
        self._request=serviceLogRequest;

        if(self._request.goodsAskingType == "0"){
            $('#currentOrderInfo').hide();
        } else if(self._request.goodsAskingType == "1"){

        }else{
            $('#currentOrderInfo').hide();
            $('#picScroller ').hide();
            $('#consultative-prd').hide();
        }
    },

    checkCheckedBox:function(className){
        var checked = false;
        var opts=document.getElementsByClassName(className );
        var len = opts.length;
        for (var i=0;i<len; i++){
            if (opts[i].checked){
                checked = true;
                return checked;
            }
        }
        return checked;
    },
    checkUIParams:function(){
        var self =this;
        if($("#userName").val()==null || $("#telephone").val() == null){
            return false;
        }

        if(!self.checkCheckedBox("askingOptCheckBox") || !self.checkCheckedBox("selectAskingInfo"))
            return false;

        if($("#serviceLog").val()==null||$("#serviceLog").val()=="")
            $("#serviceLog").val(" ");

        return true;
    },
    //捕捉提交数据的动作，与java后台交互
    bindUI: function () {
        var self = this;

        $('#saveServiceLog').click(function () {
            if(!self.checkUIParams()){
                generalUtil.redirectInCurrentWindow(
                    'http://im.feiniu.com?savedlog=2'
                );
                return;
            }
            self.saveServiceLog(function(){
                self._tempVars.serviceLogType = 1;
                $('#product_info').hide();
                $('#product_info_save').show();
                self._tempVars.serviceLogSaved = true;
                generalUtil.redirectInCurrentWindow(
                    'http://im.feiniu.com?savedlog=1'
                );
            });
        });

        $('#modifyServiceLog').click(function () {
            self._tempVars.serviceLogType = 2;
            $('#product_info').show();
            $('#product_info_save').hide();
            generalUtil.redirectInCurrentWindow(
                'http://im.feiniu.com?savedlog=0'
            );
        });

        $("#J_product").click(function(){
            //$(this).toggleClass('on');
            //$(this).nextAll(".info").slideToggle();
            if(self._tempVars.serviceLogType == 1){
                $('#product_info').hide();
                $('#product_info_save').show();
            }else{
                $('#product_info').show();
                $('#product_info_save').hide();
            }

        });


        $("#allSelectAskingInfo").click(function(){
            var self =this;
            var selectAskingInfo = document.getElementsByClassName("selectAskingInfo");
            var len = selectAskingInfo.length;
            var checked = this.checked;
            for (var i=0;i<len; i++){
                selectAskingInfo[i].checked = checked;
            }
        });

        $(".serviceType").click(function(){
            self._tempVars.serviceType = this.value;
        });

        $(".priority").click(function(){
            self._tempVars.serviceLevel = this.value;
        });

    },


    getAskingInfoCodeByIndex:function(index,askingInfoList,saved){
        var askingInfoU = askingInfoList[index];
        var title = askingInfoU.title;
        var goodId = askingInfoU.goodId;
        var addGood = askingInfoU.addGood;
        var sellType = askingInfoU.sellType;
        var sellCount = askingInfoU.sellCount;
        var sellerName = askingInfoU.sellerName;

        var tmp = "";
        if(saved)
            tmp =TemplateSavedAskingInfo;
        else
            tmp =TemplateAskingInfo;

        var urlIndex = tmp.replace(/\$goodId/g,goodId.toString())
                .replace(/\$addGood/g,addGood.toString())
                .replace(/\$sellType/g,sellType.toString())
                .replace(/\$sellCount/g,sellCount.toString())
                .replace(/\$sellerName/g,sellerName.toString())
                .replace(/\$title/g,title.toString())
                .replace(/\$index/g,index.toString())
            ;
        return urlIndex;
    },
    getAskingInfoCode:function(number,askingInfoList){
        var self =this;

        self._tempVars.askingInfoList = askingInfoList;

        var toAppend = '';
        if (!!askingInfoList) {
            for (var i = 0; i < askingInfoList.length; i++) {
                var urlIndex = self.getAskingInfoCodeByIndex(i,askingInfoList,false);
                toAppend += urlIndex;
            }
        }

        return toAppend;
    },
    getHistoryListCode:function(number,histroyList){
        var toAppend = '';
        if (!!histroyList) {
            for (var i = 0; i < histroyList.length; i++) {
                var histroyU = histroyList[i];
                var time = histroyU.time;
                var serviceName = histroyU.serviceName;
                var detail = histroyU.detail;

                tmp =TemplateHistoryLog;

                var urlIndex = tmp.replace(/\$time/g,time.toString())
                        .replace(/\$serviceName/g,serviceName.toString())
                        .replace(/\$detail/g,detail.toString());

                toAppend += urlIndex;
            }
        }

        return toAppend;
    },

    getAskingPicsCode:function(number,picList){

        var toAppend = '';
        if (!!picList) {
            for (var i = 0; i < picList.length; i++) {
                var picU = picList[i];
                var hrefUrl = picU.url;
                var picUrl = picU.picUrl;

                var tmp = "";
                tmp =TemplatePic;

                var urlIndex = tmp.replace(/\$hrefUrl/g,hrefUrl.toString())
                        .replace(/\$picUrl/g,picUrl.toString());

                toAppend += urlIndex;
            }
        }

        return toAppend;

    },

    getAskingOpts:function(number,askingOpts){

        var toAppend = '';
        if (!!askingOpts) {
            for (var i = 0; i < askingOpts.length; i++) {
                var optIndex = askingOpts[i];
                var text = optIndex.text;
                var isChecked = optIndex.checked;
                var id= optIndex.id;

                var tmp = TemplateOpt;


                var urlIndex = tmp.replace(/\$text/g,text.toString())
                    .replace(/\$isChecked/g,isChecked.toString())
                    .replace(/\$id/g,id.toString());

                toAppend += urlIndex;
            }
        }

        return toAppend;
    },

    updateCodeToUI:function(opts,opt,codeString) {
        var self =this;
        var x=document.getElementById(opts);
        var pics=x.getElementsByClassName(opt );
        var len = pics.length;
        for (var i=0;i<len; i++){
            x.removeChild(pics[0]);
        }

        var askingPics = $('#'+opts);
        askingPics.append(codeString);
    },


    updateInfoToParams:function(callback){
        var self =this;
        var params = self.getRequestParams();
        $.post('../webRight/get-CustomerInfo',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.connectInfo=data.connectInfo;
                    self.updateParamsToUI(0);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-UserInfo',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.userInfo=data.userInfo;
                    self._params.userLevel=data.userLevel;
                    self.updateParamsToUI(1);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-AskingPics',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.askingPictures= data.askingPictures;
                    self._tempVars.askingPicturesCode = self.getAskingPicsCode(self._params.askingPictures.length
                        ,self._params.askingPictures);
                    self.updateParamsToUI(2);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-OrderDetail',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.orderDetail= data.orderDetail;
                    self.updateParamsToUI(3);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-AskingOpts',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.askingOptions = data.askingOpts;
                    self._tempVars.askingOptionsCode = self.getAskingOpts(self._params.askingOptions.length,
                        self._params.askingOptions);
                    self.updateParamsToUI(4);

                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-AskingInfos',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.askingGoodsInfo= data.askingInfos;

                    self._tempVars.askingGoodsInfoCode= self.getAskingInfoCode(self._params.askingGoodsInfo.length,
                        self._params.askingGoodsInfo);
                    self.updateParamsToUI(5);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

        $.post('../webRight/get-HistoryLogs',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    var data= resultInfo.data;
                    self._params.historyServiceLog= data.historyServiceLog;
                    self._tempVars.historyServiceLogCode = self.getHistoryListCode(self._params.historyServiceLog.length,
                        self._params.historyServiceLog);
                    self.updateParamsToUI(6);
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，初始化失败');
                }
            },
            'json');

    },

    updateParamsToUI: function (index){
        var self = this;
        switch (index){
            case 0:{
                $("#userName").val(self._params.connectInfo.customerName);
                $("#telephone").val(self._params.connectInfo.customerTel);
            }
                break;
            case 1:{
                $('#customerName').text(self._params.userInfo.mem_USERNAME);
                $('#customerNickName').text(self._params.userInfo.nickname);
                $('#customerLevel').text(self._params.userLevel.memLevelDesc);
            }
                break;
            case 2:{
                self.updateCodeToUI("AskingPictures","hrefPic",self._tempVars.askingPicturesCode);
                initSlide();
            }
                break;
            case 3:{
                $('#orderId').text(self._params.orderDetail.orderId);
                $('#orderStatus').text(self._params.orderDetail.orderStatus);
                $('#orderList').text(self._params.orderDetail.orderList);
                $('#lastOrderTime').text(self._params.orderDetail.lastOrderTime);
                $('#lastOrderStatus').text(self._params.orderDetail.lastOrderStatus);
                $('#lastOrderId').text(self._params.orderDetail.lastOrderId);
                $('#lastTotalCost').text(self._params.orderDetail.lastTotalCost);
                $('#allDealCount').text(self._params.orderDetail.allDealCount);
                $('#totalGoodsNum').text(self._params.orderDetail.totalGoodsNum);
                $('#meanPrice').text(self._params.orderDetail.meanPrice);
            }
                break;
            case 4:{
                self.updateCodeToUI("askingOpts","askingOpt",self._tempVars.askingOptionsCode);
            }
                break;
            case 5:{
                self.updateCodeToUI("askingInfos","askingInfo",self._tempVars.askingGoodsInfoCode);
                self.saveEvent();
            }
                break;

            case 6:{
                self.updateCodeToUI("historyLogs","historyLog",self._tempVars.historyServiceLogCode);
            }
                break;
            default :
                break;

        }

    },

    saveServiceOpts:function(){
        var self = this;
        var opts=document.getElementsByClassName("askingOptCheckBox" );
        var len = opts.length;
        var toAppend = '';
        for (var i=0;i<len; i++){
            if (opts[i].checked){
                var optName =  opts[i].getAttribute("textvalue");
                var tmp =TemplateSavedOpts;
                var urlIndex = tmp.replace(/\$optName/g,optName.toString());
                toAppend += urlIndex;
            }
        }

        self.updateCodeToUI("savedAskingOpts","savedAskingOpt",toAppend);
    },

    saveEvent:function(){
        var expanAskingInfos=document.getElementsByClassName("expanAskingInfo");
        for(var j= 0;j<expanAskingInfos.length ;j++){
            expanAskingInfos[j].onclick = function(){
                $(this).toggleClass('on');
                $(this).nextAll(".info").slideToggle();
            };
        }
    },
    saveAskingInfo:function(){
        var self = this;
        var opts=document.getElementsByClassName("selectAskingInfo" );
        var len = opts.length;
        var toAppend = '';
        for (var i=0;i<len; i++){
            if (opts[i].checked){
                var index =  opts[i].value;
                var urlIndex = self.getAskingInfoCodeByIndex(index,self._tempVars.askingInfoList,true);
                toAppend += urlIndex;
            }
        }

        self.updateCodeToUI("savedAskingInfos","savedAskingInfo",toAppend);
        self.saveEvent();
    },
    flushToSavedLogPage:function(){
        var self = this;
        $('#savedName').text($('#userName').val());
        $('#savedTel').text($('#telephone').val());

        $('#savedType').text(self._tempVars.serviceType);
        $('#savedLevel').text(self._tempVars.serviceLevel);
        $('#savedStatus').text(self._tempVars.serviceStatus);
        self.saveServiceOpts();
        self.saveAskingInfo();
        //self.updateCodeToUI("savedAskingInfos","askingInfo",self._serviceParams.askingGoodsInfo);
        $('#savedServiceLog').text($('#serviceLog').val());

        var mydate = new Date();
        var time = generalUtil.formateOnlyTime(mydate);
        var date = generalUtil.formateDate(mydate);

        var askingInfoList = new Array(
            {time:date+" "+time,serviceName:self._request.customerServiceName,detail:$('#serviceLog').val()});

        var savedLog = self.getHistoryListCode(1,askingInfoList);

        self._tempVars.historyServiceLogCode = savedLog + self._tempVars.historyServiceLogCode;
        self.updateCodeToUI("savedHistoryLogs","historyLog",self._tempVars.historyServiceLogCode);
        self.updateCodeToUI("historyLogs","historyLog",self._tempVars.historyServiceLogCode);
    },

    flushBackUItoParams:function(){
        var self =this ;
        self._params.connectInfo.customerName =$('#userName').val();
        self._params.connectInfo.customerTel=$('#telephone').val();

        var opts=document.getElementsByClassName("askingOptCheckBox" );
        var len = opts.length;
        for (var i=0;i<len; i++){
            if (opts[i].checked){
                self._params.askingOptions[i].checked = opts[i].checked;
            }
        }
        var infos=document.getElementsByClassName("selectAskingInfo" );
        var len = infos.length;
        for (var i=0;i<len; i++){
            if (infos[i].checked){
                self._params.askingGoodsInfo[i].checked = infos[i].checked;
            }
        }

        return;
    },
    getUIParams:function(){
        var self =this;
        self.flushBackUItoParams();
        return $.extend({}, {
            customerUUID:self._request.customerId,
            serviceName:self._request.customerServiceName,
            savedName:$('#userName').val(),
            savedTel:$('#telephone').val(),
            savedType:self._tempVars.serviceType,
            savedLevel:self._tempVars.serviceLevel,
            savedStatus:self._tempVars.serviceStatus,
            askingOptions:JSON.stringify(self._params.askingOptions),
            askingGoodsInfo:JSON.stringify(self._params.askingGoodsInfo),
            serviceLog:$('#serviceLog').val()
        });
    },

    saveServiceLog:function(callback){
        var self =this;
        var params = self.getUIParams();

        $.post('../webRight/save-serviceLog',
            params,
            function (resultInfo) {
                if (resultInfo && !!resultInfo.success) {
                    self.flushToSavedLogPage();
                    callback.call();
                } else {
                    showInfo((resultInfo || {}).message || '服务器发生故障，保存失败');
                }
            },
            'json');

    },

    getRequestParams:function(){
        var  self = this;
        return $.extend({}, {
            customerId: self._request.customerId,
            askingGoodIdList:"",
            goodsAskingType:self._request.goodsAskingType
        });
    }
};

$(function () {
    serviceLog.init();
});
