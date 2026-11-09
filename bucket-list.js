// Ballet Polaroid Wall — standalone edition
// All photos and progress are stored locally in the visitor's browser.
const BUCKET_STATE_KEY='balletPolaroidWallStateV1';
const BUCKET_DB_NAME='BalletPolaroidWallPhotos';
const BUCKET_DB_VERSION=1;
const BUCKET_TASKS=[
      ['初次约会','一起去一家从没去过的小咖啡馆'],['初次约会','在街角拍一张即时成像风格的合照'],['初次约会','一起逛一次花店，挑一束喜欢的花'],['初次约会','在书店为对方挑一本书'],['初次约会','一起坐一次没有目的地的公交或电车'],
      ['日常浪漫','为对方准备一次小小的惊喜早餐'],['日常浪漫','一起做一顿完整的晚餐'],['日常浪漫','在雨天共撑一把伞散步'],['日常浪漫','交换一封手写信'],['日常浪漫','给彼此拍一张自然又好看的照片'],
      ['电影与音乐','凌晨一起看一部老电影'],['电影与音乐','一起去一次露天电影放映'],['电影与音乐','制作一张属于我们的歌单'],['电影与音乐','在家举办一次迷你电影之夜'],['电影与音乐','一起听完一张完整的专辑'],
      ['城市漫游','去一座陌生的城市散步'],['城市漫游','一起寻找城市里最可爱的甜品店'],['城市漫游','坐一次摩天轮看城市夜景'],['城市漫游','在地图上标记一个想再来的地方'],['城市漫游','一起逛一次夜市或周末市集'],
      ['四季收藏','春天一起赏花'],['四季收藏','夏天去海边看日落'],['四季收藏','秋天踩着落叶散步'],['四季收藏','冬天一起看初雪'],['四季收藏','拍一张四季同一地点的照片'],
      ['居家时光','一起拼完一幅拼图'],['居家时光','一起搭建一个小小的积木作品'],['居家时光','在家做一次手工'],['居家时光','一起整理一个属于我们的收藏角'],['居家时光','窝在沙发上度过一个慢悠悠的下午'],
      ['美食地图','一起学做一道新菜'],['美食地图','挑战制作一款漂亮的蛋糕'],['美食地图','去吃一次一直想尝试的料理'],['美食地图','为对方制作一杯特调饮品'],['美食地图','一起做一份野餐便当'],
      ['旅行计划','一起看一次海上日出'],['旅行计划','安排一次说走就走的短途旅行'],['旅行计划','住进一间有漂亮窗景的小旅馆'],['旅行计划','在旅行中拍一组纪念照片'],['旅行计划','一起收集旅途中的车票或票根'],
      ['纪念收藏','制作一本迷你回忆相册'],['纪念收藏','为彼此挑选一件有纪念意义的小物'],['纪念收藏','写下未来一年想完成的愿望'],['纪念收藏','录一段给未来自己的语音'],['纪念收藏','在特别的日子拍一张纪念照'],
      ['户外小事','一起去公园野餐'],['户外小事','找一片草地看云发呆'],['户外小事','一起骑车去附近的小镇'],['户外小事','在夜晚散步看月亮'],['户外小事','一起去植物园或温室'],
      ['可爱挑战','互相为对方画一张小画像'],['可爱挑战','一起做一次陶艺'],['可爱挑战','给对方挑选一套有趣的穿搭'],['可爱挑战','一起拍一组复古主题照片'],['可爱挑战','尝试一次双人舞蹈或舞步'],
      ['温柔时刻','在重要日子认真说一次谢谢'],['温柔时刻','一起做一件帮助别人的小事'],['温柔时刻','给未来的自己写一张明信片'],['温柔时刻','一起看一场星空或天文展'],['温柔时刻','在忙碌的一天结束后好好聊天'],
      ['小小探索','去一次水族馆'],['小小探索','一起参观美术馆或博物馆'],['小小探索','去一次植物市集'],['小小探索','找一家有黑胶唱片的店'],['小小探索','一起体验一次新的兴趣课程'],
      ['特别日子','一起庆祝一个不需要理由的纪念日'],['特别日子','准备一场只属于我们的主题日'],['特别日子','在生日时写一封特别的信'],['特别日子','一起倒数迎接新的一年'],['特别日子','为某个普通日子留下特别纪念'],
      ['慢生活','一起去图书馆安静地待一会儿'],['慢生活','在清晨散步买早餐'],['慢生活','一起养护一盆植物'],['慢生活','整理一次照片并讲讲背后的故事'],['慢生活','找一个安静角落读书或写字'],
      ['创意时光','共同设计一张专属明信片'],['创意时光','一起拍一段生活小短片'],['创意时光','为彼此做一份迷你礼物'],['创意时光','共同完成一幅画或拼贴'],['创意时光','制作一张属于我们的纪念海报'],
      ['旅行纪念','在旅行目的地寄一张明信片给自己'],['旅行纪念','收集一次旅行中的日出或日落'],['旅行纪念','一起坐一次观光列车'],['旅行纪念','在旅途中尝试当地特色早餐'],['旅行纪念','为一次旅行制作小小手账'],
      ['日常仪式','每个月选一天拍一张合照'],['日常仪式','一起建立一个年度愿望清单'],['日常仪式','每年重拍一次同款照片'],['日常仪式','为彼此准备一份无理由的小礼物'],['日常仪式','一起庆祝完成这份清单的第十件事'],
      ['未来愿望','一起去看一场喜欢的现场演出'],['未来愿望','计划一次期待很久的旅行'],['未来愿望','共同布置一个舒服的小空间'],['未来愿望','一起完成一件曾经觉得很难的事'],['未来愿望','回顾这些照片，重新讲一遍每个故事'],['未来愿望','一起完成一份属于我们的旅行地图'],['未来愿望','把最喜欢的一张合照装进相框'],['未来愿望','为彼此录下一段鼓励的话'],['未来愿望','一起去一个想了很久却还没去的地方'],['未来愿望','在某个平凡的日子，认真庆祝我们的小小进步']
    ].map((x,i)=>({id:'bucket-'+String(i+1).padStart(2,'0'),number:i+1,category:x[0],text:x[1]}));
let bucketFilter='all',bucketSelectedId=null,bucketDbPromise=null,bucketJustCompletedId=null;
function getBucketState(){try{return JSON.parse(localStorage.getItem(BUCKET_STATE_KEY)||'{}')||{};}catch(_ ){return {};}}
function saveBucketState(state){try{localStorage.setItem(BUCKET_STATE_KEY,JSON.stringify(state));return true;}catch(e){showToast('记录保存失败，请检查浏览器存储空间。');return false;}}
function openBucketPhotoDB(){if(bucketDbPromise)return bucketDbPromise;bucketDbPromise=new Promise((resolve,reject)=>{if(!('indexedDB'in window)){reject(new Error('当前浏览器不支持本地照片保存'));return;}const request=indexedDB.open(BUCKET_DB_NAME,BUCKET_DB_VERSION);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos',{keyPath:'id'});};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error('图库打开失败'));});return bucketDbPromise;}
async function getBucketPhoto(id){try{const db=await openBucketPhotoDB();return await new Promise((resolve,reject)=>{const tx=db.transaction('photos','readonly'),r=tx.objectStore('photos').get(id);r.onsuccess=()=>resolve(r.result?.data||'');r.onerror=()=>reject(r.error);});}catch(e){console.warn(e);return '';}}
async function saveBucketPhoto(id,data){const db=await openBucketPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').put({id,data,updatedAt:Date.now()});tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error||new Error('照片保存失败'));tx.onabort=()=>reject(tx.error||new Error('照片保存已取消'));});}
async function deleteBucketPhoto(id){try{const db=await openBucketPhotoDB();await new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}catch(e){console.warn(e);}}
function showToast(message){const el=document.getElementById('toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2300);}
function compressImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(new Error('图片读取失败'));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error('无法识别图片'));img.onload=()=>{const canvas=document.createElement('canvas');const scale=Math.min(1,1800/Math.max(img.width,img.height));canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));const ctx=canvas.getContext('2d');if(!ctx)return reject(new Error('无法处理图片'));ctx.drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.82));};img.src=reader.result;};reader.readAsDataURL(file);});}
async function renderBucketList(){
 const grid=document.getElementById('bucket-grid');if(!grid)return;const state=getBucketState(),completed=BUCKET_TASKS.filter(t=>state[t.id]?.done).length,pct=Math.round(completed/BUCKET_TASKS.length*100);
 document.getElementById('bucket-progress-label').textContent=`OUR LITTLE ADVENTURES · ${completed} / ${BUCKET_TASKS.length}`;
 document.getElementById('bucket-progress-percent').textContent=pct+'%';document.getElementById('bucket-progress-fill').style.width=pct+'%';
 document.querySelectorAll('.bucket-filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===bucketFilter));
 let tasks=BUCKET_TASKS.filter(t=>bucketFilter==='all'||(bucketFilter==='pending'?!state[t.id]?.done:bucketFilter==='completed'?!!state[t.id]?.done:true));
 if(bucketFilter==='date')tasks.sort((a,b)=>(state[b.id]?.date||'').localeCompare(state[a.id]?.date||''));
 document.getElementById('bucket-visible-count').textContent=`${tasks.length} LITTLE THINGS`;grid.innerHTML='';
 if(!tasks.length){grid.innerHTML='<div class="bucket-empty">Every lovely memory begins with a little wish. ✧<br>先从一件小事开始吧。</div>';return;}
 for(const task of tasks){
  const item=state[task.id]||{},photo=item.done?await getBucketPhoto(task.id):'';
  const card=document.createElement('article');card.className='bucket-item '+(item.done&&photo?'completed'+(bucketJustCompletedId===task.id?' just-completed':''):'pending');card.dataset.bucketId=task.id;card.style.setProperty('--bucket-tilt',(item.tilt??0)+'deg');
  if(item.done&&photo){
   const img=document.createElement('img');img.className='bucket-polaroid-photo';img.alt='Saved memory';img.loading='lazy';img.src=photo;
   const cat=document.createElement('span');cat.className='bucket-category';cat.textContent=task.category;
   const caption=document.createElement('div');caption.className='bucket-polaroid-caption';const title=document.createElement('strong');title.textContent=task.text;const time=document.createElement('time');time.textContent=item.date||'';caption.append(title,time);
   const undo=document.createElement('button');undo.type='button';undo.className='bucket-polaroid-undo';undo.textContent='↶';undo.title='撤销打卡';undo.setAttribute('aria-label','撤销打卡');undo.addEventListener('click',e=>{e.stopPropagation();undoBucketTask(task.id);});
   card.append(img,cat,caption,undo);card.title='点击更换照片';
  }else{
   const inner=document.createElement('div');inner.className='bucket-card-inner';const num=document.createElement('span');num.className='bucket-number';num.textContent=String(task.number).padStart(2,'0');const cat=document.createElement('span');cat.className='bucket-category';cat.textContent=task.category;const text=document.createElement('div');text.className='bucket-task-text';text.textContent=task.text;const bottom=document.createElement('div');bottom.className='bucket-pending-bottom';bottom.innerHTML='<span>完成后，收藏一张照片</span><span class="bucket-pending-mark">＋</span>';inner.append(num,cat,text,bottom);card.append(inner);
  }
  card.addEventListener('click',()=>chooseBucketPhoto(task.id));grid.appendChild(card);
 }
 bucketJustCompletedId=null;
}
function setBucketFilter(filter){bucketFilter=filter;renderBucketList();}
function chooseBucketPhoto(id){bucketSelectedId=id;const picker=document.getElementById('bucket-photo-picker');if(!picker)return;picker.value='';picker.click();}
async function handleBucketPhoto(event){const file=event.target.files?.[0],id=bucketSelectedId;event.target.value='';if(!file||!id)return;if(!file.type.startsWith('image/')){showToast('请选择一张图片。');return;}const task=BUCKET_TASKS.find(t=>t.id===id);if(!task)return;const button=document.querySelector(`[data-bucket-id="${id}"]`);button?.classList.add('is-processing');try{const data=await compressImage(file);await saveBucketPhoto(id,data);const state=getBucketState(),old=state[id]||{};state[id]={...old,done:true,date:new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric'}),tilt:old.tilt??(Math.random()*6-3)};if(!saveBucketState(state)){await deleteBucketPhoto(id);return;}bucketJustCompletedId=id;showToast('这段小小的回忆，已经收藏好啦 ✧');await renderBucketList();}catch(error){console.error(error);showToast('照片保存失败，请尝试选择较小的图片。');}finally{button?.classList.remove('is-processing');bucketSelectedId=null;}}
async function undoBucketTask(id){if(!confirm('要把这张拍立得放回未完成清单吗？照片也会从这张卡片中移除。'))return;const state=getBucketState();delete state[id];if(saveBucketState(state)){await deleteBucketPhoto(id);renderBucketList();}}
document.addEventListener('DOMContentLoaded',()=>{document.getElementById('bucket-photo-picker')?.addEventListener('change',handleBucketPhoto);document.getElementById('bucket-filter-row')?.addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(btn)setBucketFilter(btn.dataset.filter);});renderBucketList();});
