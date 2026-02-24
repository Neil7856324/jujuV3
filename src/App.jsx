import React, { useState } from 'react';
import { 
  Plane, Car, ShoppingBag, MapPin, Utensils, 
  Camera, Calendar, CheckSquare, Info, Ship, 
  Clock, Sun, Coffee, ShoppingCart, Gem,
  Square, CheckSquare as CheckSquareIcon,
  ChevronRight, ArrowLeft, Heart, Bookmark,
  StickyNote, Star, Sparkles, Anchor, ParkingCircle,
  Smartphone, Timer, Landmark, Bus, Wand2,
  Music, Camera as CameraIcon, Gift
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('cover'); // 'cover' or 'guide'
  const [activeTab, setActiveTab] = useState('checklist');
  
  // 行前準備清單
  const [checkedItems, setCheckedItems] = useState({
    '護照 & 國際駕照 & 台汽機照': false,
    '台幣 10000 & 旅遊險 & 簽證': false,
    '絕緣膠帶 & 行李束帶 & 扣環': false,
    '行動電源*2 & 原廠線 & 轉接頭': false,
    '可淘汰衣物襪子 & 牙刷': false,
    '下載 Airbnb/機票/租車檔案': false,
    'Wowpass 下載/儲值/綁定': false,
    'KKday/Klook Sim卡預約': false
  });

  // 行程中任務狀態
  const [tripTasks, setTripTasks] = useState({
    'rental_confirm': false,
    'udo_wowpass': false,
    'udo_forms': false,
    'udo_passport_check': false,
    'udo_return_ticket': false,
    'sisters_reservation': false
  });

  const toggleItem = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const toggleTripTask = (taskId) => {
    setTripTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const days = [
    {
      id: 'day1',
      title: 'DAY 1 (03/23)',
      subtitle: '濟州島，我們來了！',
      icon: '✈️',
      dailyNote: '✈️ 今天要移動比較久，穿寬鬆舒適最重要！領車時記得張大眼核對時間，別讓司機歐爸等太久唷！',
      schedule: [
        { time: '17:25', activity: '降落 ✈️ 濟州機場', detail: '辦理入境手續。' },
        { 
          time: '18:30', 
          activity: '天使租車 🚗', 
          isTask: true,
          taskId: 'rental_confirm',
          taskText: '確認承租時間 3/23 18:30 - 3/29 08:00',
          detail: '1樓5號出口5區14號。' 
        },
        { time: '19:30', activity: 'Check-in Sodam Pension', detail: '🏠 放置行李，稍作休息。' },
        { time: '20:30', activity: '偶來市場巡禮 🥯', detail: '老奶奶橘子麻糬 (NT$2100)、炸壽司、蒜香麵包。' },
        { time: '21:30', activity: '必吃炸雞 🍴', detail: '營業至 23:00，宵夜首選！' }
      ]
    },
    {
      id: 'day2',
      title: 'DAY 2 (03/24)',
      subtitle: '網美攝影與黑豬肉',
      icon: '📷',
      dailyNote: '👗 下午有攝影行程，最厲害的洋裝穿起來！記得留點肚子給晚上的黑豬肉，那是人間美味～',
      schedule: [
        { time: '08:00', activity: '紅豆蒸包 🥯', detail: '限量供應！08:00-14:00' },
        { time: '09:00', activity: '倫敦貝果 🥯', detail: '必拍人氣店，建議提早排隊。' },
        { time: '11:00', activity: 'Mazeland 迷宮', detail: '🎟️ 門票 NT$327，挑戰兩小時脫逃。' },
        { time: '13:30', activity: '海女博物館', detail: '🎟️ 深入了解海女文化。' },
        { time: '15:00', activity: 'Tempus Cafe ☕️', detail: '月汀里無敵海景 + 招牌橘子咖啡。' },
        { time: '16:30', activity: '無名照相館 📷', detail: '無地標私藏點，加購精緻相框。' },
        { 
          time: '18:30', 
          activity: 'Donsadon 豚似豚돈사돈 🍴', 
          hasExtraNote: 'donsadon',
          detail: '12:00-21:30 權志龍 GD 認證的名店！' 
        },
        { time: '20:30', activity: '逛街時光 🛍️', detail: '大創(22:00止)、Gentle Monster。' }
      ]
    },
    {
      id: 'day3',
      title: 'DAY 3 (03/25)',
      subtitle: '跳島：牛島慢活',
      icon: '🚢',
      dailyNote: '⚓ 海邊風很大要注意髮型，太陽公公很熱情也要做好防曬唷！護照跟船票是命根子，絕對不能丟！',
      schedule: [
        { 
          time: '09:00', 
          activity: '城山港碼頭 🚢', 
          hasExtraNote: 'udo_terminal',
          detail: '前往牛島前，務必先完成碼頭購票流程。' 
        },
        { 
          time: '09:30', 
          activity: '購票任務清單 (點擊劃掉)', 
          isTaskList: true,
          tasks: [
            { id: 'udo_wowpass', text: '🎟️ 使用 Wowpass 自動售票機購票' },
            { id: 'udo_forms', text: '📃 填寫登船申請書 (去回各一份)' },
            { id: 'udo_passport_check', text: '🛂 出示護照正本買票/登船' },
            { id: 'udo_return_ticket', text: '🎫 回程船票已收好' }
          ]
        },
        { time: '10:30', activity: '牛島美食全攻略 🥜', detail: '花生冰淇淋、炸醬麵、鮑魚、烤魷魚。' },
        { time: '17:00', activity: 'Under The Dam 🍴', detail: '需預約。必點白切肉與炸茄子。' },
        { time: '20:00', activity: '早點休息 😴', detail: '為了明天的體力，今晚好好放鬆！' }
      ]
    },
    {
      id: 'day4',
      title: 'DAY 4 (03/26)',
      subtitle: '絕景與海洋奇緣',
      icon: '🌋',
      dailyNote: '⛰️ 日出峰要爬很多階梯，不想腿軟就穿球鞋！下午去採橘子，穿橘色系的衣服拍照會超可愛唷～',
      schedule: [
        { time: '08:00', activity: '城山日出峰 ⛰️', detail: '🎟️ 走很多路！必爬絕景約兩小時。' },
        { time: '11:00', activity: '水上星球 Aqua Planet 🎟️', detail: '門票 NT$732。必看海洋劇場(40min)：10:00 / 12:00 / 14:00 / 15:40' },
        { time: '14:30', activity: '漢拿山奶油餅乾 🎁', detail: '11:00-17:00 購買伴手禮。' },
        { time: '15:30', activity: 'Ae-in 柑橘園 🍊', detail: '10:00-18:00。體驗：做果醬、採摘、必喝松露濃湯。' },
        { time: '18:00', activity: '返回住宿地點 🏠', detail: '先回住宿休息，改成叫 Uber 去喝酒吧！' },
        { time: '19:00', activity: '三姓穴海鮮鍋 🍴', detail: '營業至 21:00，海味饗宴補充滿滿體力。' },
        { time: '21:00', activity: 'Taengtail 酒吧 🍸', detail: '營業至凌晨 02:00，放鬆微醺的時光。' }
      ]
    },
    {
      id: 'day5',
      title: 'DAY 5 (03/27)',
      subtitle: '極速賽車與燈塔日落',
      icon: '🏎️',
      dailyNote: '🏎️ 玩賽車穿褲裝最帥也最方便！今天的主角是日落，記得要隨時盯著手錶，別讓夕陽不等你就溜走囉！',
      schedule: [
        { time: '10:30', activity: '退房 sodam 🧳', detail: '11:00前完成退房。' },
        { time: '11:00', activity: '9.81 公園 🏎️', detail: '🎟️ NT$751。營業 09:30-18:00。預計玩 2 小時，建議「只買動力賽車」。' },
        { time: '13:30', activity: 'Jaemi Jeju 🍴', detail: '義大利麵午餐。營業時間：11:00-15:00, 17:00-19:20。' },
        { time: '15:30', activity: 'mumujeju 🎁', detail: '可愛選物店。營業時間：11:00-18:00。' },
        { time: '16:30', activity: 'Haejigae Cafe ☕️', detail: '09:00-21:00。推薦鹽麵包，觀察丹麥麵包外觀。看日落聖地！' },
        { time: '18:00', activity: '梨湖 海邊小馬燈塔 📷', detail: '絕美日落視角。結束後「回住宿處改搭 Uber」去市區。' },
        { 
          time: '19:00', 
          activity: '入住 Villa de Aewol 🏠', 
          detail: '※ 若趕燈塔日落時間不夠，就延後 Check-in。' 
        },
        { time: '19:30', activity: 'Mandarin Island 🎁', detail: '14:00-21:00 (週四公休)。採買精緻伴手禮。' },
        { time: '20:30', activity: 'Wonwoojeong 韓牛 🍴', detail: '大推排骨大醬湯。醬蟹小菜不要吃！' }
      ]
    },
    {
      id: 'day6',
      title: 'DAY 6 (03/28)',
      subtitle: '文化巡禮與最後衝刺',
      icon: '🏛️',
      dailyNote: '🏛️ 慢慢散步感受文化的氣息，博物館很大要量力而為喔！預約麵條的時間記在心裡，歐爸在等你了！',
      schedule: [
        { time: '08:30', activity: '海螺湯麵 🍴', detail: '道地早餐，配蒸餃更完美。' },
        { 
          time: '11:00', 
          activity: '濟州特別自治道 民俗自然史博物館 🏛️', 
          hasExtraNote: 'museum_info',
          detail: '🎟️ 需門票 / 09:00-18:00 / 建議停留兩小時。' 
        },
        { 
          time: '13:30', 
          activity: '濟州牧 官衙 🏯', 
          detail: '🎟️ 需門票 / 09:00-18:00 / 預計一小時。朝鮮時代濟州島的行政中心。' 
        },
        { time: '15:00', activity: '小馬體驗公園 🐎', detail: '與濟州小馬近距離接觸。' },
        { 
          time: '16:10', 
          activity: '姊妹麵條 🍴', 
          isTask: true,
          taskId: 'sisters_reservation',
          taskText: '姊妹麵條預約成功 (預約制)',
          detail: '吃飯時間 16:10-18:00。必點豬肉湯麵、拌麵。' 
        },
        { time: '19:00', activity: '伴手禮補貨 🎁', detail: '最後的購物衝刺 (The Islander)。' }
      ]
    },
    {
      id: 'day7',
      title: 'DAY 7 (03/29)',
      subtitle: '平安回家，滿載而歸',
      icon: '👋',
      dailyNote: '🎁 行李箱塞滿了嗎？退稅單要收好，記得留點時間去機場最後巡禮，把濟州島的香氣帶回家！',
      schedule: [
        { time: '07:00', activity: '天使租車還車 🚗', detail: '抵達租車中心，處理還車手續。' },
        { 
          time: '07:20', 
          activity: '搭乘機場接駁車 🚌', 
          hasExtraNote: 'shuttle_info',
          detail: '車次時間：07:20 / 07:40 / 08:00 / 08:20。' 
        },
        { time: '08:30', activity: '濟州機場辦理手續 ✈️', detail: '辦理退稅、行李託運與最後採買。' },
        { time: '10:40', activity: '班機起飛返家', detail: 'Bye Bye Jeju! 帶著滿滿的回憶與橘子香氣回家。' }
      ]
    }
  ];

  const ScrapbookCover = () => (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-700 cute-font relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-10 left-10 text-4xl opacity-50 animate-bounce">🍊</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-50 animate-pulse">✨</div>
      <div className="absolute top-1/4 right-20 text-3xl opacity-50">🌼</div>
      
      {/* 修正：在這裡加入了 h-auto min-h-[500px] md:min-h-0 md:aspect-[3/4] 保留原本討論的RWD自適應設定 */}
      <div className="max-w-md w-full h-auto min-h-[500px] md:min-h-0 md:aspect-[3/4] bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(255,152,0,0.25)] border-8 border-[#FFD8B2] relative flex flex-col overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
        {/* 紙膠帶 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-80 -rotate-2 z-20 rounded-sm shadow-sm"></div>
        
        <div className="flex-grow flex flex-col items-center justify-center p-8 border-4 border-dashed border-orange-200 m-4 rounded-[2rem] bg-gradient-to-b from-white to-orange-50/50">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-5 py-2 rounded-full mb-6 font-bold text-sm tracking-widest shadow-md flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" /> 2026 SPRING
          </div>
          
          <h1 className="text-5xl font-black text-[#FF9800] text-center leading-tight mb-2 tracking-wide drop-shadow-sm">
            濟州島
          </h1>
          <h2 className="text-3xl font-black text-[#78C2AD] text-center mb-6 bg-white px-4 py-1 rounded-2xl shadow-sm border-2 border-teal-100 rotate-1">
            探險手帳 🧸
          </h2>
          
          <div className="relative w-48 h-48 mb-8 group">
             <div className="absolute inset-0 bg-[#FFE0B2] rounded-full flex items-center justify-center text-8xl shadow-inner border-4 border-white transition-transform group-hover:scale-110 duration-300">
               🍊
             </div>
             <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-bounce">
               <CameraIcon className="w-8 h-8 text-orange-400" />
             </div>
          </div>
          
          <button onClick={() => setView('guide')} className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[#FF9800] rounded-full hover:bg-[#F57C00] hover:shadow-[0_8px_20px_rgba(255,152,0,0.4)] hover:-translate-y-1">
            <span className="text-lg">翻開手帳</span> 
            <Heart className="ml-2 w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  if (view === 'cover') return <ScrapbookCover />;

  return (
    <div className="min-h-screen bg-[#FFFDF8] p-4 md:p-8 cute-font text-[#5A4A42] selection:bg-orange-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8">
        <button onClick={() => setView('cover')} className="flex items-center text-[#FF9800] font-bold hover:bg-white transition-all bg-orange-100/50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md border border-orange-200">
          <ArrowLeft className="mr-2 w-4 h-4" /> 返回封面
        </button>
        <div className="flex items-center gap-2 text-[#FF9800] font-black text-xl bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
          <Heart className="w-5 h-5 fill-orange-400 text-orange-400 animate-pulse" /> JEJU 2026
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <aside className="md:w-52 flex-shrink-0 z-10">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-3 pb-4 md:pb-0 no-scrollbar px-1">
            <button onClick={() => setActiveTab('checklist')} className={`flex-shrink-0 px-5 py-3.5 rounded-full transition-all text-sm font-black flex items-center shadow-sm ${activeTab === 'checklist' ? 'bg-[#FF9800] text-white shadow-md shadow-orange-200 translate-x-1 md:translate-x-2' : 'bg-white text-orange-400 hover:bg-orange-50'}`}>
              <Bookmark className="mr-2 w-4 h-4" /> 行前清單
            </button>
            {days.map((day) => (
              <button key={day.id} onClick={() => setActiveTab(day.id)} className={`flex-shrink-0 px-5 py-3.5 rounded-full transition-all text-sm font-black flex items-center shadow-sm ${activeTab === day.id ? 'bg-[#FF9800] text-white shadow-md shadow-orange-200 translate-x-1 md:translate-x-2' : 'bg-white text-orange-400 hover:bg-orange-50'}`}>
                <span className="mr-3 text-lg">{day.icon}</span> {day.id.toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-grow bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_10px_40px_rgba(255,152,0,0.15)] border-4 border-orange-50 min-h-[600px] relative overflow-hidden">
          
          {activeTab === 'checklist' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl shadow-inner">🧳</div>
                <h2 className="text-3xl font-black text-[#FF9800]">我的行李箱</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                   {Object.entries(checkedItems).map(([item, isChecked]) => (
                    <div key={item} onClick={() => toggleItem(item)} className={`flex items-center p-4 rounded-3xl cursor-pointer transition-all border-2 ${isChecked ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-orange-100 hover:border-orange-300 hover:shadow-md'}`}>
                      <div className={`w-7 h-7 rounded-full mr-4 flex items-center justify-center transition-colors ${isChecked ? 'bg-orange-400' : 'bg-orange-50 border-2 border-orange-200'}`}>
                        {isChecked && <CheckSquareIcon className="w-4 h-4 text-white" />}
                      </div>
                      <span className={`font-bold ${isChecked ? 'line-through text-gray-400' : 'text-[#5A4A42]'}`}>{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Q版便利貼 */}
                <div className="bg-[#FFF9C4] p-8 rounded-[2rem] border-2 border-yellow-200 rotate-2 shadow-sm relative h-fit mt-4 lg:mt-0">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-orange-200/60 rotate-2 rounded-sm"></div>
                  <h4 className="font-black text-yellow-700 flex items-center mb-4 text-lg">
                    <StickyNote className="mr-2 w-5 h-5" /> 貼心小備忘 🧸
                  </h4>
                  <ul className="text-sm text-yellow-800/80 leading-loose space-y-2 font-bold">
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">🍊</span> KKday(桃機) / Klook(機台)</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">🍊</span> 門口換匯匯率較優</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">🍊</span> 台灣汽機駕照都要帶唷！</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {days.map((day) => activeTab === day.id && (
            <div key={day.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="mb-8 border-b-2 border-dashed border-orange-100 pb-6">
                <h2 className="text-3xl md:text-4xl font-black text-[#FF9800] mb-2 flex items-center gap-3">
                  {day.title} 
                </h2>
                <div className="inline-block bg-teal-50 text-teal-500 px-4 py-1.5 rounded-full font-bold text-sm border border-teal-100">
                  {day.subtitle} ✨
                </div>
              </div>
              
              {/* Q版每日小語 */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-5 md:p-6 rounded-[2rem] mb-10 shadow-sm flex gap-4 items-center border-2 border-white relative">
                <div className="absolute -top-3 -right-3 text-3xl animate-bounce-slow">🌼</div>
                <div className="bg-white p-3 rounded-full shadow-sm text-orange-400 flex-shrink-0">
                  <Wand2 className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold leading-relaxed text-[#7A6A62]">{day.dailyNote}</p>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-100 before:to-yellow-100 before:rounded-full">
                {day.schedule.map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* 時間軸點 */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-orange-200 font-black text-xs text-orange-500 shadow-sm z-10 md:mx-auto absolute left-0 md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 group-hover:border-orange-300 transition-transform">
                      {item.time.split(':')[0]}<span className="text-[8px] mt-1">{item.time.split(':')[1]}</span>
                    </div>

                    {/* 內容卡片 */}
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-5 rounded-[2rem] bg-white border-2 border-orange-50 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-black text-[#5A4A42] mb-3 flex items-center gap-2">
                        {item.activity}
                      </h4>
                      
                      {item.isTask && (
                        <div onClick={() => toggleTripTask(item.taskId)} className={`flex items-center p-3 rounded-2xl cursor-pointer mb-3 transition-colors ${tripTasks[item.taskId] ? 'bg-green-50 border-2 border-green-100 opacity-70' : 'bg-orange-50 border-2 border-orange-100 hover:bg-orange-100'}`}>
                          <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${tripTasks[item.taskId] ? 'bg-green-400' : 'bg-white border-2 border-orange-200'}`}>
                            {tripTasks[item.taskId] && <CheckSquareIcon className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm font-bold ${tripTasks[item.taskId] ? 'line-through text-green-600' : 'text-orange-600'}`}>{item.taskText}</span>
                        </div>
                      )}

                      {item.isTaskList && (
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          {item.tasks.map(task => (
                            <div key={task.id} onClick={() => toggleTripTask(task.id)} className={`flex items-center p-3 rounded-2xl cursor-pointer transition-all ${tripTasks[task.id] ? 'bg-blue-50 border-2 border-blue-100 opacity-70' : 'bg-white border-2 border-blue-50 hover:border-blue-100'}`}>
                              <div className={`w-6 h-6 rounded-full mr-3 flex flex-shrink-0 items-center justify-center ${tripTasks[task.id] ? 'bg-blue-400' : 'bg-white border-2 border-blue-200'}`}>
                                {tripTasks[task.id] && <CheckSquareIcon className="w-3 h-3 text-white" />}
                              </div>
                              <span className={`text-xs font-bold ${tripTasks[task.id] ? 'line-through text-blue-500' : 'text-blue-700'}`}>{task.text}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-sm text-[#8A7A72] font-bold bg-[#FDFBFB] p-4 rounded-2xl border-2 border-dashed border-gray-100 leading-relaxed">
                        {item.detail}
                      </p>
                      
                      {/* Q版特別重點小卡 */}
                      {item.hasExtraNote === 'shuttle_info' && (
                        <div className="mt-4 p-4 bg-yellow-50 rounded-2xl border-2 border-yellow-100 relative overflow-hidden">
                           <h5 className="font-black text-yellow-600 mb-3 flex items-center text-sm"><Bus className="w-4 h-4 mr-1" /> 接駁班次</h5>
                           <div className="flex flex-wrap gap-2 text-xs">
                              {['07:20', '07:40', '08:00', '08:20'].map(t => (
                                <div key={t} className="bg-white px-3 py-1.5 rounded-full border-2 border-yellow-200 text-yellow-600 font-bold shadow-sm">{t}</div>
                              ))}
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'museum_info' && (
                        <div className="mt-4 p-4 bg-teal-50 rounded-2xl border-2 border-teal-100 relative overflow-hidden">
                           <h5 className="font-black text-teal-600 mb-2 flex items-center text-sm"><Star className="w-4 h-4 mr-1" /> 必看清單</h5>
                           <div className="text-xs text-teal-700/80 space-y-1 font-bold">
                              <p>🐋 震撼的巨型鯨魚骨架</p>
                              <p>🌋 濟州火山地形發展史</p>
                              <p>📸 外頭石像群是必拍！</p>
                           </div>
                        </div>
                      )}

                      {item.hasExtraNote === 'donsadon' && (
                        <div className="mt-4 p-4 bg-red-50 rounded-2xl border-2 border-red-100 text-xs text-red-700/80 font-bold">
                           <h5 className="font-black text-red-500 mb-1">✨ GD 認證名店</h5>
                           <p>黑豬肉 66,000₩ (雙人份)，專人代烤！搭配泡菜燉湯超絕配 🍖</p>
                        </div>
                      )}

                      {item.hasExtraNote === 'udo_terminal' && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100 text-xs text-blue-700/80 font-bold">
                           <h5 className="font-black text-blue-600 mb-1">🚢 乘船秘笈</h5>
                           <p>Wowpass 限定自動售票，去回各一份申請書。回程票絕對不能弄丟！🎫</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Day 7 專屬甜蜜結尾 */}
              {day.id === 'day7' && (
                <div className="mt-16 py-12 px-6 flex flex-col items-center animate-in fade-in duration-1000 bg-gradient-to-b from-orange-50 to-yellow-50 rounded-[2.5rem] border-4 border-dashed border-orange-200 relative overflow-hidden shadow-sm">
                  <div className="absolute -top-6 -left-6 text-6xl opacity-30 rotate-12">✈️</div>
                  <div className="absolute -bottom-6 -right-6 text-6xl opacity-30 -rotate-12">🛍️</div>
                  
                  <div className="relative mb-6">
                    <div className="text-6xl animate-bounce">🍊</div>
                    <div className="absolute -top-4 -right-6 text-3xl animate-pulse">✨</div>
                    <div className="absolute -bottom-2 -left-4 text-3xl">💖</div>
                  </div>
                  
                  <div className="text-center space-y-4 relative z-10">
                     <p className="text-2xl font-black text-[#FF9800] tracking-widest drop-shadow-sm">旅途愉快！滿載而歸</p>
                     
                     <div className="w-16 h-1.5 bg-orange-300 mx-auto rounded-full"></div>
                     
                     <p className="text-lg md:text-xl font-bold text-amber-500 italic px-4">
                        "Our sweetest journey continues, forever and always..."
                     </p>
                     
                     <div className="mt-8 pt-6">
                       <p className="text-sm font-black text-white bg-[#FF9800] px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                          <Gift className="w-4 h-4" /> Made with Love by HYH & RJ <Heart className="w-4 h-4 fill-white" />
                       </p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>

      <style>{`
        /* 匯入日韓系可愛圓潤字體 */
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800;900&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,600&display=swap');
        
        .cute-font { 
          font-family: 'Nunito', 'M PLUS Rounded 1c', sans-serif; 
          letter-spacing: 0.02em;
        }
        
        /* 隱藏卷軸但保留滾動功能 */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* 自訂動畫 */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
