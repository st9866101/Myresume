
var text = '';
var i;
var te = ['51Job企业招聘',
'智联招聘',
'人人网',
'自由人协作平台',
'兼职吧',
'猪八戒',
'上上网上兼职',
'大学城兼职',
'大学生兼职吧',
'赶集网',
'1010兼职网',
'58同城',
'口袋兼职',
'前程无忧<repart',
'e兼职',
'职多多',
'大上海人才',
'招才猫',
'中华英才网',
'上啥班',
'兼客兼职',
'兼职网',
'兼职地带',
'53兼职网',
'外活兼职网',
'老百姓',
'豌豆帮',
'兼职猫',
'自由职客',
'斗米网',
'打零工',
'零工网',
'拉勾网',
'e京网',
'汕头招聘网',
'智通人才网',
'三亚人才网',
'汉中人才网',
'宝鸡人才网',
'自贡人才网',
'潇湘人才网',
'博才网',
'新疆人才网',
'恒信人才网',
'云南招聘网',
'四川人才网',
'深圳人才网',
'金宝兼职网',
'派代网',
];
var www = [
    'https://www.51job.com/',
'https://www.zhaopin.com/',
'http://renren.com/',
'http://www.freemancn.com/',
'http://www.jianzhi8.com/',
'https://www.zbj.com/',
'http://bj.ssjzw.com/',
'http://www.dx-job.com/',
'https://www.jianzhiba.net/',
'http://bj.ganji.com/',
'https://www.1010jz.com/',
'https://bj.58.com/job.shtml?PGTID=0d100000-0000-1a8f-1c09-dfea3a1aed9e&ClickID=3',
'https://www.kdjz.com/',
'https://www.51job.com/',
'http://www.ejzhi.com/',
'http://www.chinalao.com/',
'http://www.dshrc.com/',
'http://www.jobcat.cn/',
'https://www.chinahr.com/home/sjz',
'http://www.shangshaban.com/',
'https://www.jianke.cc/',
'https://www.jianzhiwang.com/',
'http://www.jzdd.net/',
'http://www.53jianzhi.net/',
'http://shijiazhuang.waihuo.com/',
'http://shijiazhuang.lbx.cc/gongqiu/zhaopin/',
'http://www.wandoujob.com/',
'https://www.jianzhimao.com/',
'http://www.freekeer.com/',
'http://www.doumi.com/tegong/',
'http://www.dalinggong.com/',
'http://www.linggongwang.com/',
'https://www.lagou.com/',
'http://info.st001.com/forum-1433.html',
'http://www.stzp.cn/',
'http://www.job5156.com/',
'http://www.sanyajob.com/',
'http://www.job916.com/',
'http://www.job0917.com/',
'http://zg.neijob.com/',
'http://www.dxrc.com/',
'http://bd.hbrc.com/',
'http://www.xjhr.com/',
'http://www.91job.com/',
'http://www.ynzp.com/',
'http://www.huaxirc.com/',
'http://www.szhr.com.cn/',
'http://www.goldboo.com/',
'http://www.paidai.com/',

];
for (i = 0; i < www.length; i++) {
    text += '<strong><a class="friendlinka"  href="'+www[i]+'">'+te[i]+'</a><strong>';
}
document.querySelectorAll(".friendlink")[0].innerHTML=text;

 
