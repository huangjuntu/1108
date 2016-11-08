<?php
/*session_start();
if (!isset($_SESSION['authenticated'])) {
    date_default_timezone_set('PRC');
    require "code/qrlib.php";
    require "auth/service.code.php";

    $time = date('Y-m-d H-i-s',time());
    $uid = md5(rand(1000,100000).$time.rand(1000,100000));

    $errorCorrectionLevel = 'L';
    $matrixPointSize = 4;
    $filepath = 'temp/'.$uid.'.png';
    $url = 'http://10.200.46.216/smartparkOS/qrcode.php?uid='.$uid;//手机扫码二维码地址
    $code -> SaveUid($uid,'123',$time);

    QRcode::png($url, $filepath, $errorCorrectionLevel, $matrixPointSize, 2);
}else {
    //require "auth/service.code.php";
    //获取手机信息
}*/
?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta name="description" content="qunshanghui" />
    <meta name="author" content="yzx" />
    <meta http-equiv="content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta name="format-detection" content="telephone=no" />
    <title>
        i-stack
    </title>
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Google Fonts
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800"
          rel="stylesheet" type="text/css" />
    <link href="http://fonts.googleapis.com/css?family=Oswald:400,300,700"
          rel="stylesheet" type="text/css" /> -->
    <!-- Library CSS -->
    <!-- Theme CSS -->
    <link rel="stylesheet" href="./css/index.css"/>
    <link rel="stylesheet" href="./css/bootstrap.css"/>
    <link rel="stylesheet" href="css/auth.css" media="all">
    <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js">
    </script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="./css/jquery.jdigiclock.css" />
    <style  type = "text/css">
        #leapposition {
            z-index: 9999;
            width: 25px;
            height: 25px;
            position: absolute;
            background-color: #ffab32;
            display: none;
        }
    </style>
</head>

<body>
<!-- 热插拔开始 -->
<script type="text/javascript">

</script>
<!-- text content for search engines: -->
<div class="san" >

</div>
<div class="alert">
    <h1></h1>
</div>
<div class="dialog">
    <a class="close" >+</a>
    <h3>系统消息</h3>
    <hr>
    <div class="d_content">
        <ul>

        </ul>
    </div>
    <div src="http://10.200.43.37/smartlight/index.php?page=saas" class="d_bottom toframe"><a>查看详情</a></div>
</div>
<!-- leap -->
<div id = "leapposition" > </div>
<div id="free"><input id="hidecode" type="hidden" value="<?php if(isset($uid))echo $uid; ?>" /></div>
<!-- 热插拔结束 -->
<!-- text content for search engines: -->
<div id="main">
    <div class="wrap">
        <div id="leap" class="smartcollege toframe college1" src="http://localhost/Project/wqms/">
            <div class="flower"></div>
            <h3>智慧路灯</br>中央研究院&</br>亚明</h3>
        </div>
        <div class="smartcollege toframe college2" src="http://10.200.43.35/welcome">
            <div class="bangong"></div>
            <h3>智慧办公</br>中央研究院</h3>
        </div>
        <div class="smartcollege toframe college3" src="http://10.200.43.41">
            <div class="jy"></div>
            <h3>我要云学习</br>鑫森科技</h3>
        </div>
        <div class="smartcollege toframe college4" src="http://10.200.43.46">
            <div class="nx"></div>
            <h3>能效管理平台</br>仪电物联</h3>
        </div>
        <div class="smartcollege toframe college5" src="http://10.200.43.42/JDsmartcity">
            <div class="dashuju"></div>
            <h3>大数据</br>政务信息平台</br>南洋万邦</h3>
        </div>
        <div class="smartcollege toframe college6" src="http://10.200.43.37/wqms">
            <div class="sw"></div>
            <h3>二次供水</br>在线监测系统</br>科学仪器&</br>中央研究院</h3>
        </div>

        <div class="smartcollege toframe college7" src="http://10.200.43.3:8080/yzXJ">
            <div class="yz"></div>
            <h3>人脸识别</br>云智&</br>中央研究院</h3>
        </div>
        <div id="dleap"></div>
        <!--登录-->
        <?php
          //  if (!isset($_SESSION['user_name'])) {
                ?>
			<!--<div class="theme-popover">
                    <div class="theme-poptit">
                        
                        <h3>用户登录</h3>
                    </div>
                    <img src="<?php //echo $filepath; ?>" />
                    <div class="theme-popbod dform">
                        <form class="theme-signin" name="loginform" action="auth/verifications.php" method="post">
                            <ol>
                                <li><h4></h4></li>
                                <li><label for="email">用户名：</label><input id="eamil" class="ipt" type="text" name="name" placeholder="邮箱" size="30" required /></li>
                                <li><label for="email">密&nbsp;&nbsp;&nbsp;码：</label><input id="pwd" class="ipt" type="password" name="password" placeholder="******" size="30" required /></li>
                                <li><input class="btn btn-primary" type="submit" name="submit" value=" 登 录 "/></li>
                            </ol>
                        </form>
                    </div>
                </div>
                <div class="theme-popover-mask"></div> -->
                <?php
           // }
        ?>
        <div class="myiframe">
            <iframe id = "allframe" src="" frameborder="2px" name="content" style="background-color: white;">

            </iframe>
            <div class="img">
                <img class="img1" src="./img/ClockCirlce.png" alt=""/>
                <img class="img2" src="./img/MinusCircle.png" alt=""/>
                <img id="close" class="img3" src="./img/OvalCopy.png" alt=""/>
            </div>

        </div>
        <div class="logo">

        </div>
        <div class="shuixiang">

        </div>
        <div class="menu">
            <div class="clitrigger">
            </div>
            <div class="first">
                <div class="roundbox">
                    <ul>
                        <li><span class="firround"></span></li>
                        <li><span class="firround"></span></li>
                        <li><span class="firround"></span></li>
                        <li><span class="firround"></span></li>
                        <li><span class="firround"></span></li>
                        <li><span class="firround"></span></li>
                    </ul>
                </div>
                <div class="smartbox">
                    <ul>
                        <li class="smart"><h4></h4><span class="tri"></span>
                        <li class="smarttype"><h4>应用集市</h4><span class="tri"></span></li>
                        <li class="smarttype"><h4>数据整合</h4><span class="tri"></span></li>
                        <li class="smarttype"><h4 class="toframe top" src="http://10.200.43.33/dashboard/iot/add">智慧编程</h4><span class="tri"></span></li>
                        <li class="smarttype"><h4>系统管理</h4><span class="tri"></span></li>
                    </ul>
                </div>
            </div>
            <div class="second nenu ">
                <div class="smartfunction secondclose">
                    <ul class="inesainside">
                        <li>智慧建筑</li>
                        <li>智慧交通</li>
                        <li>平安城市</li>
                        <li>智慧溯源</li>
                        <li>智慧政务</li>
                        <li>智慧水务</li>
                        <li>智慧教育</li>
                        <li>智慧医疗</li>
                    </ul>
                </div>
                <div class="company secondclose">
                    <ul class="appstore" style="padding-left: 40px;">
                        <li class="appl" style="margin-bottom: -10px;" >国际合作伙伴</li>
                        <li ><span class="citrix" order="0"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="1" class="symantec right"></span></li>
                        <li ><span class="ibm" order="2"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span class="vmware right" order="3"></span></li>
                        <li ><span class="schneider" order="4"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span class="fujitsu right" order="5"></span></li>
                        <li ><span class="oracle" order="6"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span class="autodesk right" order="7"></span></li>
                        <li ><span class="adobe" order="8"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="9" class="avaya right"></span></li>
                        <li ><span class="emc" order="10"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="11" class="siemens right"></span></li>
                        <li ><span class="sony" order="12"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="13" class="micro right"></span></li>
                        <li ><span class="quannong" order="14"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="15" class="ov right"></span></li>
                        <li class="appl" style="margin-top: 10px;">国内合作伙伴</li>
                        <li ><span order="16" class="huawei"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="17" class="bosch right"></span></li>
                        <li ><span order="18" class="xiaomi"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="19" class="simit right"></span></li>
                        <li ><span order="20" class="zhaoxin"></span><h5 class="left"><a  href=""></a></h5><h5><a href=""></a></h5><span order="21" class="zky right"></span></li>
                    </ul>
                </div>
                <div class="data secondclose">
                    <ul class="istack toframe" src="http://10.200.43.37/istack#footer" ><a href="javascript:void(0)">http://i-stack.org/</a></ul>
                </div>
                <div class="secondclose">
                    <!--  <ul>
                          <li>选项1</li>
                          <li>选项2</li>
                          <li>选项3</li>
                          <li>选项4</li>
                          <li>选项5</li>
                      </ul>-->
                </div>
                <div class="systemmanagement secondclose" >
                    <div class="leftdiv">
                        <h6>INESA本地服务器版本</h6>
                        <ul>
                            <li><h5  class="toframe top" src="http://10.200.43.33/">管理面板</h5></li>
                            <li><h5>资源动态伸缩</h5></li>
                            <li><h5>虚拟网络</h5></li>
                            <li><h5>块存储</h5></li>
                            <li><h5>镜像管理</h5></li>
                            <li><h5>认证和授权</h5></li>
                            <li><h5>物联网应用可编程协作</h5></li>
                            <li class="bigdatasave"><h5>大数据统一存储</h5></li>
                            <li><h5>一站式上云服务(科技网)</h5></li>
                        </ul>
                    </div>
                    <div class="rightdiv">
                        <h6>INESA IDC版</h6>

                        <ul>
                            <li><a href="">对象存储</a></li>
                            <li><a href="">超融合架构</a></li>
                            <li><a href="">高可用架构</a></li>
                            <li><a href="">高可用架构</a></li>
                            <li><a href="">分布式容灾架构</a></li>
                            <li><a href="">应用级高可用</a></li>
                            <li><a href="">SDN集成</a></li>
                            <li><a href="">秒级资源计费</a></li>
                            <li><a href="">云端大数据分析</a></li>
                            <li><a href="">云端大数据分析</a></li>
                            <li><a href="">负载均衡器</a></li>
                            <li><a href="">虚拟桌面</a></li>
                            <li><a href="">加密云存储</a></li>
                            <li><a href="">应用性能监控</a></li>
                            <li><a href="">应用安全服务</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <!--menu3 开始 -->
            <div class="commenu">
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["基于BIM的智能安防综合运维平台","http://10.200.43.37/company/baotongfanqiu/shxuhui03233.11467.com/index.htm"],["智能停车场管理系统平台实物场景","http://10.200.43.37/company/baotongfanqiu/shxuhui03233.11467.com/index.htm"],["华鑫中心实景漫游","http://10.200.43.37/company/baotongfanqiu/shxuhui03233.11467.com/index.htm"]]'
                            data-info="采用BIM建模，大数据分析，三维可视综合运维管理平台//“互联网+”的智能停车场管理系统//采用BIM建模，大数据分析，三维可视综合运维管理平台" data-url="http://10.200.43.37/company/baotongfanqiu/shxuhui03233.11467.com/index.htm">上海宝通汎球电子有限公司</li>
                        <li class="detail" data-product='[["*能效管理平台","http://10.200.43.46"]]'
                            data-info="合理规划用能、有效配置资源，创新服务模式促进全市园区智慧化建设" data-url="http://10.200.43.37/company/yidianwulian/www.kingsway.com.cn/index.htm">上海仪电物联技术股份有限公司</li>
                        <li class="detail" data-product='[["景观亮美系列","http://10.200.43.37/company/feileyinxiangliangmei/www.facs.com.cn/cases.aspx.htm"],["室内照明系列","http://10.200.43.37/company/feileyinxiangshinei/www.facs.com.cn/product.aspx-id=2.htm"]]'
                            data-url="http://10.200.43.37/company/feileyinxiang/www.facs.com.cn/index.htm">上海飞乐音响股份有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["智慧公交管理平台","http://10.200.43.37/company/yunsai/www.inesa.com/cply/hxcy/xxfwy/xxfwyjj/2013-06-25/46.html"]]'
                            data-info="实现公交运维管理的实时全程可视化，可追溯，打造平安、便捷的公交出行平台" data-url="http://10.200.43.37/company/yunsai/www.inesa.com/cply/hxcy/xxfwy/xxfwyjj/2013-06-25/46.html">上海仪电信息网络有限公司</li>
                        <li class="detail" data-product='[["汽车线束","http://10.200.43.37/company/qichedianziqichexiansu/www.fl-dai-ichi.com/chanpinzhongxin-155601-50220.html"],["注塑件","http://10.200.43.37/company/qichedianziqichexiansu/www.fl-dai-ichi.com/chanpinzhongxin-155601-50221.html"],["冲制件","http://10.200.43.37/company/qichedianziqichexiansu/www.fl-dai-ichi.com/chanpinzhongxin-155601-50218.html"],["防盗器线圈","http://10.200.43.37/company/qichedianziqichexiansu/www.fl-dai-ichi.com/chanpinzhongxin-155601-50219.html"]]'
                            data-url="http://10.200.43.37/company/qichedianzi/www.fl-dai-ichi.com/index.htm">上海仪电汽车电子系统有限公司</li>
                        <li class="detail" data-product='[["汽车继电器","http://10.200.43.37/company/hugongqiche/www.hg-china.com/3product/product.asp-column=5.htm"],["汽车控制器","http://10.200.43.37/company/hugongqiche/www.hg-china.com/3product/product.asp-column=6.htm"],["汽车开关","http://10.200.43.37/company/hugongqiche/www.hg-china.com/3product/product.asp-column=7.htm"],["汽车执行器和其他","http://10.200.43.37/company/hugongqiche/www.hg-china.com/3product/product.asp-column=8.htm"],["汽车保险丝盒","http://10.200.43.37/company/hugongqiche/www.hg-china.com/3product/product.asp-column=9.htm"]]'
                            data-url="http://10.200.43.37/company/hugongqiche/www.hg-china.com/index.htm">上海沪工汽车电器有限公司</li>
                        <!--<li class="detail" data-product='[["组合仪表","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp?lbid=20&title=%D7%E9%BA%CF%D2%C7%B1%ED"],["传感器","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=21&lb=传感器.htm"],["数字钟","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=22&lb=数字钟.htm"],["空调控制器","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=23&lb=空调控制器.htm"],["LED半导体照明","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=24&lb=LED半导体照明.htm"],["拜纳","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=25&lb=拜纳.htm"],["医疗熏蒸仪","http://10.200.43.37/company/dekedianzi/www.sde-cn.com/pro.asp-lbid=26&lb=医疗熏蒸仪.htm"],["BCM、防盗系统","http://10.200.43.37/company/dekedianziBCM/www.sde-cn.com/pro.asp-lbid=27%26lb=BCM、防盗系统.htm"],["网关","http://10.200.43.37/company/dekedianziBCM/www.sde-cn.com/pro.asp-lbid=28&lb=网关.htm"]]'
                          data-url="http://10.200.43.37/company/dekedianzi/www.sde-cn.com/index.asp.htm">上海德科电子仪表有限公司</li>-->
                        <li class="detail" data-product='[["轨道交通系统集成设计和系统维护","http://10.200.43.37/company/yidianwulian/www.kingsway.com.cn/service/znjt_bmjs.jsp.htm"],["公交系统集成设计和维护","http://10.200.43.37/company/yidianwulian/www.kingsway.com.cn/service/znjt_bmjs.jsp.htm"]]'
                            data-url="http://10.200.43.37/company/yidianwulian/www.kingsway.com.cn/index.htm">上海仪电物联技术股份有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["*智能视频分析系统","http://10.200.43.3：8080/yzXJ"],["智能隧道灯","http://10.200.43.37/company/yunzhichanpin/www.inesa-yun.com/index.php-m=Product&a=detail&id=2.htm"],["平安城市监控解决方案","http://10.200.43.37/company/yunzhichanpin/www.inesa-yun.com/index.php-m=Product&a=detail&id=3.htm"]]'
                            data-info="立足视频智能分析核心环节，服务国家安全及平安城市稳固推进" data-url="http://10.200.43.37/company/yunzhichanpin/www.inesa-yun.com/index.htm">云智视像科技（上海）有限公司</li>
                        <li class="detail" data-product='[["无人值守机房动力环境监测系统","http://10.200.43.37/company/zhinuoshouye/zenointel.wlworld.com.cn/index.htm"],["ATM人脸智能分析器","http://10.200.43.37/company/zhinuoshouye/zenointel.wlworld.com.cn/sell/index.php-itemid=237.htm"],["智能周界分析器","http://10.200.43.37/company/zhinuoshouye/zenointel.wlworld.com.cn/sell/index.php-itemid=238.htm"]]'
                            data-info="全参数，可视化，机房环境监测系统" data-url="http://10.200.43.37/company/zhinuoshouye/zenointel.wlworld.com.cn/index.htm">杭州智诺英特科技有限公司</li>
                        <li class="detail" data-product='[["全方位安防与应急广播系统","http://10.200.43.37/company/saijia/shminxing036356.11467.com/index.htm"]]'
                            data-info="公共场所安全预防监控和紧急疏散指导管理平台" data-url="http://10.200.43.37/company/saijia/shminxing036356.11467.com/index.htm">上海赛嘉电子科技有限公司</li>
                        <li class="detail" data-product='[["住宅小区安防系统","http://10.200.43.37/company/yiren/www.infinite.com.cn/product.asp-id=520&class1=571&class2=579.htm"],["办公楼宇安防系统","http://10.200.43.37/company/yiren/www.infinite.com.cn/product.asp-id=520&class1=571&class2=580.htm"],["TETRA数字集群","http://10.200.43.37/company/yiren/www.infinite.com.cn/product.asp-id=565&class1=568.htm"]]'
                            data-url="http://10.200.43.37/company/yiren/www.infinite.com.cn/index.asp.htm">上海亿人通信终端有限公司</li>
                        <li class="detail" data-product='[["安防","http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html"]]'
                            data-url="http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html">上海仪电鑫森科技发展有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["区县食品安全检测网格化管理系统  ","http://10.200.43.37/company/yiren/www.infinite.com.cn/index.asp.htm"]]'
                            data-info="废弃油脂全过程闭环式电子化监管。利用大数据分析，系统可自动呈现图表" data-url="http://10.200.43.37/company/yiren/www.infinite.com.cn/index.asp.htm">上海亿人通信终端有限公司</li>
                        <li class="detail" data-product='[["上海市食品安全信息追溯平台  ","http://10.200.43.37/company/zhinengdianzi/www.inesa-ie.com/cn/index/index.htm?xyz=0.015281694009900093"]]'
                            data-info="从田头到餐桌，覆盖食品生产流通餐饮全生命周期，打造城市级食品安全信息追溯平台" data-url="http://10.200.43.37/company/zhinengdianzi/www.inesa-ie.com/cn/index/index.htm?xyz=0.015281694009900093">上海仪电智能电子有限公司</li>
                        <li class="detail" data-product='[["食品安全检测快检实验室设计方案","http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/index.htm"],["农场食品安全检测系统解决方案","http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/news_detail_jjfa/newsId=12.html"],["集体用餐配送中心食品安全检测","http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/news_detail_jjfa/newsId=13.html"],["水源地水质监测系统解决方案","http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/news_detail_jjfa/newsId=57.html"],["药品质量检测解决方案","http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/news_detail_jjfa/newsId=21.html"]]'
                            data-info="食以安为先，安以检为准；快速检测，把好食品安全第一关" data-url="http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/index.htm">上海仪电科学仪器股份有限公司</li>

                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["*大数据政务信息平台","http://10.200.43.42/JDsmartcity"],["在线会议E-Learning","http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/ruan_class.aspx-Class_ID=163&Class_page=163.htm"],["虚拟化及云计算","http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/ruan_class.aspx-Class_ID=36&Class_page=189.htm"],["数据保护","http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/ruan_class.aspx-Class_ID=88&Class_page=174.htm"],["流媒体及加密解决方案","http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/ruan_class.aspx-Class_ID=34&Class_page=204.htm"],["PDF企业及解决方案","http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/ruan_class.aspx-Class_ID=34&Class_page=207.htm"]]'
                            data-info="“指尖上的政府”，统一数据平台支撑政府部门精细化管理，促进公共服务创新" data-url="http://10.200.43.37/company/nanyangwanbang/www.nysoftland.com.cn/index.htm">上海南洋万邦软件技术有限公司 </li>
                        <li class="detail" data-product='[["信息安全整体解决方案","http://10.200.43.37/company/saiway/www.saiway.com.cn/index.htm"],["智慧政务云桌面解决方案","http://10.200.43.37/company/saiway/www.saiway.com.cn/index.htm"],["集中式虚拟桌面","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2.htm"],["分布式虚拟桌面","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2002.htm"],["云服务平台案","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2004.htm"],["服务器虚拟化软件","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2006.htm"],["云安全软件","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2007.htm"],["云平台硬件","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2008.htm"],["安全移动云","http://10.200.43.37/company/saiway/www.saiway.com.cn/Product/Index/2009.htm"]]'
                            data-info="高安全、易管理、用户便利的全新云办公体验" data-url="http://10.200.43.37/company/saiway/www.saiway.com.cn/index.htm">上海赛为信息技术有限公司 </li>
                        <li class="detail" data-product='[["全方位安防与应急广播系统","http://shminxing036356.11467.com/"]]'
                            data-info="公共场所安全预防监控和紧急疏散指导管理平台" data-url="http://shminxing036356.11467.com/">上海赛嘉电子科技有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["智慧管网信息化管理平台","http://10.200.43.37/company/yunhan/18903491.pe168.com/index.htm"],["智能水表远传解决方案","http://10.200.43.37/company/yunhan/18903491.pe168.com/index.htm"]]'
                            data-info="水资源利用，水业务融合的大数据管理云平台//智能物联网水表无线实时管理系统" data-url="http://10.200.43.37/company/yunhan/18903491.pe168.com/index.htm">上海云瀚科技股份有限公司</li>
                        <li class="detail" data-product='[["*二次供水在线监测系统","http://10.200.43.37/wqms"]]'
                            data-info="监测水质情况，掌控水质安全，确保放心水流入百姓家" data-url="http://10.200.43.37/company/kexueyiqi/www.inesa-instrument.com/index.htm">上海仪电科学仪器股份有限公司 </li>
                        <li class="detail" data-product='[["学校直饮水解决方案","http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html"]]'
                            data-info="实时监测、自动预警、智能控制、大数据分析、统一监管" data-url="http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html">上海仪电鑫森科技发展有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["*我要云学习","http://10.200.43.41"],["智慧心理教室","http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html"],["在线培训平台","http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html"]]'
                            data-info="我们致力于让每一个学生随时、随地、随心、随需享受优质教育资源//移动互联、互动！打造新一代在线教育平台" data-url="http://10.200.43.37/company/xinsen/www.sinthonic.com/sinthonic/index.html">上海仪电鑫森科技发展有限公司 </li>
                        <li class="detail" data-product='[["远程教育","http://10.200.43.37/company/wangluoyuanchengjiaoyu/info.inesa.com/business8a6.html"]]'
                            data-url="http://10.200.43.37/company/yunsai/www.inesa.com/cply/hxcy/xxfwy/xxfwyjj/2013-06-25/46.html">上海仪电信息网络有限公司</li>
                    </ul>
                </div>
                <div class="menucom" style="display:none">
                    <ul class="child">
                        <li class="detail" data-product='[["“互联网+”医疗平台","http://10.200.43.37/company/senyint/index-19.jhtml.htm"],["区域医疗","http://10.200.43.37/company/senyint/index.jhtml.htm"],["远程会诊系统","http://10.200.43.37/company/senyint/index-1.jhtml.htm"],["基于电子病历的医院信息平台","http://10.200.43.37/company/senyint/index-2.jhtml.htm"],["容灾备份一体化解决方案","http://10.200.43.37/company/senyint/index-3.jhtml.htm"]]'
                            data-info="我们致力于让每一个学生随时、随地、随心、随需享受优质教育资源//移动互联、互动！打造新一代在线教育平台" data-url="http://10.200.43.37/company/senyint/">心医国际</li>
                        <li class="detail" data-product='[["远程医疗","http://10.200.43.37/company/wangluoyuanchengyiliao/info.inesa.com/business7a4.html"]]'
                            data-url="http://10.200.43.37/company/yunsai/www.inesa.com/cply/hxcy/xxfwy/xxfwyjj/2013-06-25/46.html">上海仪电信息网络有限公司</li>
                    </ul>
                </div>
            </div>
            <!--menu3 结束 -->
            <!--menu4 b -->
            <div class="menu4">

                <div id="pros"></div><div class="lines"></div><div id="info"></div><div id="url"><div src="" class="box toframe"><a style=" margin-left: 16px;line-height: 40px;color:white" href="javascript:void(0)" >企业官网</a></div></div>

            </div>
            <!--menu4 e -->
        </div>
        <div class="time">
            <a id="time" style="color:#FFF"></a>
        </div>
    </div>

</div>

<script language="javascript" type="text/javascript" src="./js/socket.io.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery-1.11.3.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/main.js"></script>
<script language="javascript" type="text/javascript" src="./js/bootstrap.js"></script>
<script type="text/javascript" src="./js/jquery.jdigiclock.js"></script>
<script src="js/leap-0.6.4.js"></script>
<script src="js/leap-plugins-0.1.6.js"></script>
<script src="js/three.js"></script>
<?php
if (!isset($_SESSION['user_name'])) {
    ?>
    <script>
        jQuery(document).ready(function ($) {
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);

            $('.theme-poptit .close').click(function () {
                $('.theme-popover-mask').fadeOut(100);
                $('.theme-popover').slideUp(200);
            })
            //  $('.theme-login').click(function(){})
        })
    </script>
    <?php
}
?>
<script  type = "text/javascript">
    Leap.loop({enableGestures: true},function(frame) {
        var nameMap = ["thumb", "index", "middle", "ring", "pinky"];
        var  element  =  document .getElementById("leapposition");

        if (frame.valid && frame.pointables.length  >  0) {
            element.style.display = "block";
            //var hand = frame.hands[0];
            //var finger = hand.fingers[1];
            //if (nameMap[finger.type] == "index") {
                var  position  =  frame .pointables[0].stabilizedTipPosition;//.tipPosition;//获取指尖坐标数据
                var  normalized  =  frame .interactionBox.normalizePoint(position,true);//规整坐标数据

                var appx =  parseInt(window .innerWidth * normalized[0]); //X
                element.style.left  = window .innerWidth * normalized[0] +'px';
                var appy  =  parseInt(window .innerHeight * (1 - normalized[1]))//手指控制页面鼠标运动Y
                element.style.top = window .innerHeight * (1 - normalized[1]) +'px';
                //document.getElementById('dleap').innerHTML = appx +'fgfgf'+ appy;
                frame.gestures.forEach(function(gesture) {
                    if (gesture.type == 'keyTap' || gesture.type == 'Circle' || gesture.type == 'Swipe' || gesture.type == 'Screen Tap') {
                        //document.getElementById('dleap').innerHTML = appx +'fgfgf'+ appy;
                        if ((appy < 145) && (appx < 125)) {
                            element.style.zIndex = 0;
                            element.style.display = 'none';
                            document.getElementById("leap").click();
                        } else if ((appy>310 && appy < 470) && (appx > 140 && appx < 220)){
                            element.style.zIndex = 0;
                            element.style.display = 'none';
                            document.getElementById("leap").click();
                        }else {
                            //document.getElementById('dleap').innerHTML = appx +'fgfgf'+ appy;
                            //document.getElementById('dleap').innerHTML = appx +'fgfgf'+ appy;
                            document.getElementById("close").click();
                        }
                    }else {}
                });//手指动作类型
            //}else {}
        }else {
            element.style.display = 'none';
            element.style.zIndex = 9999;
        }
    });
</script >

<?php
    if (!isset($_SESSION['user_name'])) {
        ?>
        <script>
            var uid = $("#hidecode").val();
            //var uid = 'f77b5b45e5e01ca657d496be90461f48';
            var t = 0;
            function timedCount()
            {
                $.ajax({
                    type: 'post',
                    url: 'http://10.200.46.37/smartparkOS/auth/checkqrcode.php',
                    data: {
                        uid: uid
                    },
                    cache: false,
                    dataType: 'json',
                    success: function (data) {
                        if (data.msg == "right") {
                            //alert(data.msg);
                            stopCount();
                            location.href = 'http://10.200.46.37/smartparkOS';
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        //alert( XMLHttpRequest.error());
                        //alert(textStatus);
                        //stopCount();
                        //location.href = 'http://10.200.46.37/smartparkOS';
                    }
                });
                t=setTimeout("timedCount()",2000);
            }
            timedCount();
            function stopCount() {
                clearTimeout(t)
            }
        </script>
        <?php
    }
?>
<div class="TaskBarSoftware"><!--应用提示框-->
    <div id="TaskBarSoftwareFrame" style="display: none;"><!--矩形框-->
        <ul class="overm">

        </ul>
        <div id="TaskBarSoftwareArrow" style="display: none;"> <!--三角框-->
        </div>
    </div>
</div>
</body>
</html>
