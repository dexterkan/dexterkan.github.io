(()=>{
const root=document.querySelector('#nas-demo');if(!root)return;
const data=JSON.parse(document.querySelector('#nas-data').textContent);
const task=root.querySelector('#nas-task'),cloud=root.querySelector('#nas-cloud'),beam=root.querySelector('#nas-beam');let method=0;
const set=(id,text)=>root.querySelector('#'+id).textContent=text;
const utility=(d,v)=>v.toFixed(d.digits)+d.unit;
const methods=['Two-stage cloud search and on-device refinement with beam width b = 1.','Cloud-only evolutionary search using tournament selection, mutation, and crossover.','Cloud-only search using a PPO-based policy and a reward that penalizes constraint violations.','Cloud-only search using a Gaussian-process utility surrogate and UCB acquisition.'];
function update(){
 const t=Number(task.value),d=data.tasks[t],r=d.results[method],ours=d.results[0],evo=d.results[1];
 set('task-context',d.name+' · '+d.backbone+' · Cloud → edge data: '+d.datasets+'. Target budgets: '+d.budget+'.');
 set('utility-label',d.metric);set('nas-utility',utility(d,r[0]));set('utility-source',d.source+' · edge-data evaluation');set('nas-time',r[1].toFixed(2)+' min');set('nas-ratio',(r[1]/ours[1]).toFixed(2)+'×');set('method-context',methods[method]);
 const gap=t===0?(evo[0]-ours[0]).toFixed(1)+' percentage points lower accuracy':(ours[0]-evo[0]).toFixed(2)+' higher perplexity';
 set('tradeoff','Against Evo-HW-NAS, Cloud–Edge searches '+(evo[1]/ours[1]).toFixed(2)+'× faster, with '+gap+'. Accuracy is higher-is-better; perplexity is lower-is-better.');
 root.querySelectorAll('[data-nas-method]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.nasMethod)===method?'true':'false'));
 const chart=root.querySelector('#nas-bars');chart.replaceChildren();const max=Math.max(...d.results.map(r=>r[1]));
 d.results.forEach((r,i)=>{const row=document.createElement('div');row.className='lp-bar-row'+(i===method?' is-selected':'');const name=document.createElement('span');name.textContent=data.methods[i];const track=document.createElement('div');track.className='lp-bar-track';track.setAttribute('aria-hidden','true');const fill=document.createElement('div');fill.className='lp-bar-fill';fill.style.width=(r[1]/max*100)+'%';track.append(fill);const value=document.createElement('span');value.textContent=r[1].toFixed(2)+' min';row.append(name,track,value);chart.append(row);});
 updateBeam();
}
function updateBeam(){
 const t=Number(task.value),c=Number(cloud.value),b=Number(beam.value),d=data.tasks[t],rows=d.ablations[c],r=rows[b],first=rows[0];
 set('ablation-context',d.name+' · '+data.cloud[c]+' cloud search · Table 5('+['a','b'][t]+')');set('beam-utility-label',d.metric);set('beam-utility',utility(d,r[0]));set('beam-time',r[1].toFixed(2)+' min');set('beam-ratio',(r[1]/first[1]).toFixed(2)+'×');set('beam-table-metric',t===0?'Accuracy (%) ↑':'Perplexity ↓');
 const gain=t===0?(r[0]-first[0]).toFixed(1)+' percentage points higher accuracy':(first[0]-r[0]).toFixed(2)+' lower perplexity';
 set('beam-tradeoff',b===0?'b = 1 is the reference configuration. Wider beams preserve more candidates at each step.':'Compared with b = 1: '+gain+' and '+(r[1]-first[1]).toFixed(2)+' additional minutes of search.');
 const body=root.querySelector('#beam-table');body.replaceChildren();rows.forEach((r,i)=>{const row=document.createElement('tr');if(i===b)row.className='is-selected';const head=document.createElement('th');head.scope='row';head.textContent='b = '+(i+1);const value=document.createElement('td');value.textContent=utility(d,r[0]);const time=document.createElement('td');time.textContent=r[1].toFixed(2);row.append(head,value,time);body.append(row);});
}
const stages={
 cloud:['Cloud search','Train a weight-sharing supernet using sandwich-rule sampling and progressive shrinking. Evolutionary search evaluates public-data utility and lookup-table hardware costs with slightly relaxed budgets. Retain choices from the top-N architectures to form a reduced weight-sharing subnet.','Default configuration: population 50 · top-N = 50 · Section 3.1'],
 edge:['Edge adaptation','Refine the compact subnet with local data and direct profiling under the true latency and memory budgets. Sequential beam search grows architectures block-by-block and preserves the top-b partial candidates, reusing shared-prefix work.','Default configuration: b = 1 · Section 3.2'],
 monitor:['Re-adaptation','Monitor deployment constraints as device workload and available resources change. If constraints are violated, restart the lightweight edge stage to select an edgenet for the current operating state; cloud training and search do not need to repeat.','Designed feedback loop · quantitative workload traces are not reported']};
function stage(key){const box=root.querySelector('#stage-info');box.replaceChildren();const d=stages[key];const h=document.createElement('h3');h.textContent=d[0];const p=document.createElement('p');p.textContent=d[1];const note=document.createElement('p');note.className='lp-note';note.textContent=d[2];box.append(h,p,note);root.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.stage===key?'true':'false'));}
root.querySelectorAll('[data-nas-method]').forEach(b=>b.addEventListener('click',()=>{method=Number(b.dataset.nasMethod);update();}));root.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>stage(b.dataset.stage)));task.addEventListener('change',update);cloud.addEventListener('change',updateBeam);beam.addEventListener('change',updateBeam);update();stage('cloud');
})();
