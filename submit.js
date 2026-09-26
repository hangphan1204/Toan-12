
function validDrive(url){return /^https?:\/\/(drive\.google\.com|docs\.google\.com)\//i.test(url.trim())}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function getList(){return JSON.parse(localStorage.getItem('toan12Questions')||'[]')}
function setList(v){localStorage.setItem('toan12Questions',JSON.stringify(v))}
function submitQuestion(){
  const data={name:name.value.trim(),grade:grade.value.trim(),topic:topic.value,title:title.value.trim(),question:question.value.trim(),drive:drive.value.trim(),created:new Date().toLocaleString('vi-VN'),status:'Đang chờ giải đáp'};
  const s=document.getElementById('status');
  if(!data.name||!data.title||!data.question||!data.drive){s.className='status err';s.textContent='Vui lòng điền đủ họ tên, tiêu đề, nội dung và link Drive.';return}
  if(!validDrive(data.drive)){s.className='status err';s.textContent='Link Google Drive chưa đúng định dạng.';return}
  const a=getList();a.unshift(data);setList(a);s.className='status ok';s.textContent='Đã lưu bài gửi trên trình duyệt này.';render();
}
function clearForm(){['name','grade','title','question','drive'].forEach(id=>document.getElementById(id).value='');const s=document.getElementById('status');s.className='status';s.textContent=''}
function removeItem(i){const a=getList();a.splice(i,1);setList(a);render()}
function render(){
  const box=document.getElementById('sentList');if(!box)return;const a=getList();
  if(!a.length){box.innerHTML='<p class="muted small">Chưa có bài nào được gửi trên thiết bị này.</p>';return}
  box.innerHTML=a.map((x,i)=>`<div class="ticket"><div class="meta">${esc(x.created)} · ${esc(x.topic)}</div><h3 style="margin:.45rem 0">${esc(x.title)}</h3><p>${esc(x.question)}</p><div class="actions" style="margin-top:8px"><a class="btn btn-soft" href="${encodeURI(x.drive)}" target="_blank" rel="noopener">Mở Drive ↗</a><button class="btn btn-danger" onclick="removeItem(${i})">Xóa</button></div></div>`).join('');
}
document.addEventListener('DOMContentLoaded',render);
