const blank = "\u200b".repeat(500); 
Jsoup = org.jsoup.Jsoup;
var allsee="\u200b".repeat(500); 
var N = "\n";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){ 

if(msg=="전체보기"){
  replier.reply(allsee);
}


 try{
   
let 날짜 = "🔸️"+new Date().toLocaleString().split("일")[0]+"일"; 
var month = 날짜[8]+날짜[9]+날짜[10];
var d = new Date();
var date = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var 시간 = "💌"+month+" "+date+"일 "+hour+":"+minute;
  
var Url = 'https://izone.junklab.net/data/basic.json';
   
  if(msg=="/프메현황") { 
  let res = Jsoup.connect(Url).ignoreContentType(true).get().text();
 let res1 = JSON.parse(res);
  
  let 원영메일 = "원영: "+ res1[2].id_1
  let 쿠라메일 = "꾸라: "+ res1[2].id_2
  let 유리메일 = "유리: "+ res1[2].id_3
  let 예나메일 = "예나: "+ res1[2].id_4
  let 유진메일 = "유진: "+ res1[2].id_5
  let 나코메일 =     "나코: "+ res1[2].id_6
  let 은비메일 = "은비: "+ res1[2].id_7
  let 혜원메일 = "혜원: "+ res1[2].id_8
  let 토미메일 = "토미: "+ res1[2].id_9
  let 채원메일 = "채원: "+ res1[2].id_10
  let 민주메일 = "민주: "+ res1[2].id_11
  let 채연메일 = "채연: "+ res1[2].id_12
  
   replier.reply(시간+" 프메 현황💌"+N+은비메일+N+쿠라메일+N+혜원메일+N+예나메일+N+채연메일+N+채원메일+N+민주메일+N+나코메일+N+토미메일+N+유리메일+N+유진메일+N+원영메일);
   //replier.reply(res1);
  // replier.reply(J2);
   

}

}catch(e){
  replier.reply(e);
}
}
