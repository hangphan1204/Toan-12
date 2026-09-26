
function norm(v){return String(v??'').trim().toLowerCase().replace(',','.').replace(/\s+/g,'')}
function gradeQuiz(){
  const qs=[...document.querySelectorAll('.quiz[data-answer]')];let score=0;
  qs.forEach(q=>{
    q.classList.remove('correct','wrong');
    const type=q.dataset.type||'text',expected=norm(q.dataset.answer),tol=Number(q.dataset.tolerance||0);
    let given='';
    if(type==='mcq'){const c=q.querySelector('input[type=radio]:checked');given=c?norm(c.value):''}
    else{const i=q.querySelector('.answer-input');given=i?norm(i.value):''}
    let ok=false;
    if(type==='number'){const g=Number(given),e=Number(expected);ok=Number.isFinite(g)&&Number.isFinite(e)&&Math.abs(g-e)<=tol}else ok=given===expected;
    q.classList.add(ok?'correct':'wrong');const ex=q.querySelector('.explain');if(ex)ex.style.display='block';score+=ok?1:0;
  });
  const box=document.getElementById('result');box.style.display='block';box.innerHTML=`<strong>Điểm: ${score}/${qs.length}</strong><br><span>${score===qs.length?'Xuất sắc ✨':'Xem phần giải thích dưới từng câu để kiểm tra lại nha.'}</span>`;
}
function resetQuiz(){document.querySelectorAll('.quiz').forEach(q=>{q.classList.remove('correct','wrong');q.querySelectorAll('input').forEach(i=>{if(i.type==='radio')i.checked=false;else i.value=''});const ex=q.querySelector('.explain');if(ex)ex.style.display='none'});const r=document.getElementById('result');r.style.display='none';r.innerHTML=''}
