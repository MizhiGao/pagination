const PAGE={
    data:{
    newsData:[
    {
    title:'美国科技巨头"花式劝退"老员工，数万人丢掉饭碗',
    content:'在数十年前称霸业界的时代，IBM在美国的员工人数曾一度增至25万。'
},
    {
        title:'央视名嘴贺炜8连红变彩神 命中11场比赛带彩民致富',
        content:'2019年8月1日，周中足彩比赛火热进行中，在今天上午结束的两场解放者杯比赛中'
    },
    {
        title:'53岁巩俐为新戏现身女排集训 紧盯郎平认真做笔记',
        content:'当天的巩俐穿着非常普通，而且没有化妆，看起来非常低调'
    },
    {
        title:'郎朗回应没帮老婆拿行李：以后得多帮她提些',
        content:'郎朗与妻子吉娜·爱丽丝现身机场'
    },
    {
        title:'以身试菌”的疯狂科学家',
        content:'几十年来，主流学说一直认为胃溃疡主要是由于压力过大、吃太多辛辣食物和胃酸过多引起的。'
    },
    {
        title:'詹皇回应被喷:黑够了吧 皇冠被玩弄太久我该爆发了',
        content:'他看儿子比赛时的激动反应被一些专家质疑“抢戏博关注”'
    },
    {
        title:'格里芬：围绕詹姆斯建队很无趣 夺冠后就想离开',
        content:'从2014-2017，格里芬在骑士队完成了多笔出色的运作'
    },
    {
        title:' 《哪吒》票房超《疯狂动物城》，位列中国影史动画电影票房第一',
        content:'哪吒之魔童降世》的累积票房破15.28亿，打破由《疯狂动物城》保持的分账票房15.27705亿元累计综合票房纪录，登顶新冠军。'
    },
    {
        title:' 浓眉哥赤膊苦练！训练机器纪录被打破，湖人二当家霸气秀肌肉',
        content:'北京时间8月1日，浓眉哥继续今夏的苦练'
    },
    {
        title:' 新疆男篮大外援人选确定 阿的江的选择让人意外！',
        content:'这两天CBA似乎掀起了夏季转会的高潮，包括辽宁男篮在内的冲冠集团都开始确定外援'
    },
    {
        title:' 乔家大院被摘牌后：晋中市委书记要求彻查整改，尽快再创5A',
        content:'山西省晋中市乔家大院景区在被文化和旅游部取消旅游景区质量等级次日，晋中市召开专题会议研究部署整改工作等。'
    },
    {
        title:' 大族激光低开逾9% 股价创逾两年新低',
        content:'大族激光低开逾9%，股价创逾两年新低。公司公告为董事长不当言论致歉，同时公司称欧洲研发中心项目主体建筑已经建成，预计在2020年底竣工。'
    },
    {
        title:' 捡漏悍将！快船又升级，夺冠赔率第一超湖人，仍留位抢FMVP？',
        content:'北京时间8月2日，根据ESPN名记沃纳洛夫斯基的报道，雷霆正式买断了大前锋帕特里克·帕特森，而帕特森在过了澄清期之后计划加盟快船。'
    },
    {
        title:' 又将有两名NBA球员加盟CBA？其中一位还是勇士总冠军成员',
        content:'北京时间8月1日，据国内媒体报道，辽宁队主帅郭士强表示正在球队考察小外援，前洛杉矶湖人队球员兰斯-史蒂芬森是候选人之一。'
    }
    ],
    pageSize:5,
    currentPage:1,
    },
    init:function() {
        this.pageNumber();
        this.render();
        this.changePageClass();
        let pagination=document.querySelector('.pagination');
        pagination.addEventListener('click',this.togglePage);
        let skipInput=document.querySelector('.skip input');
        skipInput.addEventListener('keyup',this.skipPage);
        let prev=document.querySelector ('.prev');
        let next=document.querySelector ('.next');
        prev.addEventListener('click',this.prevPage);
        next.addEventListener('click',this.nextPage);
    },
    //1.渲染新闻容器页面
    render:function (){
        let newsMain=document.querySelector('.news-main');//新闻容器
        let newsData=PAGE.data.newsData;
        let pageSize=PAGE.data.pageSize;
        let currentPage=PAGE.data.currentPage;//根据currentPage显示每页的数据   
        newsMain.innerHTML='';
        showData=newsData.slice((currentPage-1)*pageSize,pageSize*currentPage);//每页要显示的数据，一页显示5条
        let showDataStr=showData.map(function (item) {
            return `<div class="item"><div class="item-title">${item.title}</div><div class="item-content">${item.content}</div></div>`}).join('');       
        newsMain.innerHTML=showDataStr;
    }, 
    // 2.渲染pagination页面  
    pageNumber:function(){
        let pagination=document.querySelector('.pagination');//页数容器
        let newsData=PAGE.data.newsData;
        let pageCount=Math.ceil(newsData.length/5);//计算总共几页
        for(let i=0;i<pageCount;i++){
            pagination.innerHTML+=`<a>${i+1}</a>`;
        }
        let skipPage=document.querySelector('.skip-page');
        skipPage.innerHTML+=`<span class="skip">跳转至<input type="text" class="input-page">页</span>`;//获取页数
    }, 
    changePageClass:function(){
        let pagination=document.querySelector('.pagination');//页数容器
        let asAll=pagination.querySelectorAll('a');
        let currentPage=PAGE.data.currentPage;
        for(let j=0;j<asAll.length;j++){
            asAll[j].classList.remove('active');
        }
        asAll[currentPage-1].classList.add('active');
    },       
    togglePage:function(e){
        currentPage=e.target.innerHTML;        
        PAGE.data.currentPage=Number(currentPage);
        PAGE.render();
        PAGE. changePageClass();
    },
    skipPage:function(e){
        let pagination=document.querySelector('.pagination');//页数容器
        let asAll=pagination.querySelectorAll('a');
        let skipInput=document.querySelector('.skip input');
        if(e.keyCode===13 && skipInput.value!==''){
            PAGE.changePageClass();
            currentPage=skipInput.value;
            PAGE.data.currentPage=Number(currentPage);
            if(currentPage>asAll.length||currentPage<=0){
                return;
            }
            PAGE.render();
            PAGE.changePageClass();
            skipInput.blur();
        }
        
    },
    prevPage:function(){
        let currentPage=PAGE.data.currentPage;
        if(currentPage===1){
            return;
        }else{
            PAGE.data.currentPage=currentPage-1;
            PAGE.changePageClass();
            PAGE.render();
        }
    },
    nextPage:function(){
        let currentPage=PAGE.data.currentPage;
        if(currentPage===3){
            return;
        }else{
            PAGE.data.currentPage=currentPage+1;
            PAGE.changePageClass();
            PAGE.render();
        }
    }

}
PAGE.init();

