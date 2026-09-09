const API=window.ADMIN_API_BASE_URL;
try{document.addEventListener("gesturestart",e=>e.preventDefault(),{passive:false});document.addEventListener("gesturechange",e=>e.preventDefault(),{passive:false});document.addEventListener("gestureend",e=>e.preventDefault(),{passive:false})}catch{}
let token=localStorage.getItem("ip_admin_token")||"",me=null,lang=localStorage.getItem("ip_admin_lang")||"en";
const $=id=>document.getElementById(id);
const T={
en:{
brand:"Investment Portal",adminAccess:"Administration",secureAdmin:"SECURE ADMINISTRATION",adminSignIn:"Admin sign in",signInSub:"Sign in with your administrator account.",usernameEmail:"Username or email",password:"Password",signIn:"Sign in",firstTime:"First-time setup",setupHint:"Create the first administrator using the private setup key configured on the Worker.",setupKey:"Setup key",fullName:"Full name",email:"Email address",username:"Username",password8:"Password (8+ characters)",createAdmin:"Create administrator",firstAdmin:"First administrator setup",administrator:"Administrator",logout:"Log out",dashboard:"Dashboard",users:"Users",funding:"Funding",withdrawals:"Withdrawals",investments:"Investments",audit:"Audit log",overview:"ADMINISTRATION",dashboardSub:"A live view of members, requests and account activity.",refresh:"Refresh",totalUsers:"Total users",serverRecorded:"Server recorded",pendingFunding:"Pending funding",awaitingReview:"Awaiting review",pendingWithdrawals:"Pending withdrawals",recordedKwd:"Recorded KWD balance",fromMemberWallets:"From member wallets",quickActions:"Quick actions",manageUsers:"Manage users",searchEditStatus:"Search, edit and change status",reviewFunding:"Review funding",approveReject:"Approve or reject requests",reviewWithdrawals:"Review withdrawals",manageInvestments:"Manage investments",createInvestment:"Create recorded investments",security:"Security",serverAuth:"Server-side authentication",serverAuthSub:"Admin role is verified by the Worker on every protected request.",auditTrail:"Administrative audit trail",auditTrailSub:"Credit, debit, approvals and management actions are recorded.",members:"MEMBERS",usersSub:"Search and manage member accounts.",searchUsers:"Search username, name or email",search:"Search",requests:"REQUESTS",fundingSub:"Review member funding requests before crediting accounts.",withdrawalsSub:"Review requests against available member balance.",portfolio:"PORTFOLIO",investmentsSub:"Create and review server-recorded investments.",newInvestment:"New investment",securityLog:"SECURITY LOG",auditSub:"Administrative actions recorded by the Worker.",pending:"Pending",all:"All",approved:"Approved",rejected:"Rejected",approve:"Approve",reject:"Reject",edit:"Edit",credit:"Credit",debit:"Debit",status:"Status",active:"Active",suspended:"Suspended",balance:"Balance",invested:"Invested",earnings:"Earnings",member:"Member",created:"Created",actions:"Actions",noRequests:"No requests found.",noUsers:"No users found.",noInvestments:"No investments found.",noAudit:"No audit entries found.",amount:"Amount",currency:"Currency",description:"Description",reference:"Reference",reason:"Reason",cancel:"Cancel",save:"Save changes",close:"Close",currentPassword:"Current password",newPassword:"New password",confirm:"Confirm",planName:"Plan name",selectUser:"Select user",success:"Completed successfully.",invalidAdmin:"The account is not an administrator or authentication failed.",setupDone:"Administrator created. Sign in with the new account.",confirmAction:"Please confirm this action.",insufficient:"Insufficient balance or user not found.",locked:"Administrator setup is locked because an admin account already exists.",session:"Your session has expired. Please sign in again.",notFound:"The requested record was not found.",systemError:"Something went wrong. Please try again.",financialControl:"Financial controls",walletAction:"Wallet balance",recordedTotals:"Recorded totals",perCurrency:"Balances by currency",balances:"Balances",manageBalance:"Manage balance",createInvestment:"Create recorded investment",accountStatus:"Account status",searchHint:"Search members instantly",manageInvested:"Set total invested",manageEarnings:"Set total earnings",messageUser:"Message member",reviewMessage:"Message to member",messagePlaceholder:"Write a message for the member",withdrawalMessage:"Approval or rejection message",bank:"Bank",country:"Country",destination:"Destination",setTotal:"Set total",sendMessage:"Send message",messageSent:"Message sent successfully."
},
ar:{
brand:"بوابة الاستثمار",adminAccess:"الإدارة",secureAdmin:"إدارة آمنة",adminSignIn:"تسجيل دخول المشرف",signInSub:"سجّل الدخول باستخدام حساب المشرف.",usernameEmail:"اسم المستخدم أو البريد الإلكتروني",password:"كلمة المرور",signIn:"تسجيل الدخول",firstTime:"الإعداد الأول",setupHint:"أنشئ أول حساب مشرف باستخدام مفتاح الإعداد الخاص المكوّن في الـ Worker.",setupKey:"مفتاح الإعداد",fullName:"الاسم الكامل",email:"البريد الإلكتروني",username:"اسم المستخدم",password8:"كلمة المرور (8 أحرف أو أكثر)",createAdmin:"إنشاء حساب المشرف",firstAdmin:"إعداد أول مشرف",administrator:"مشرف",logout:"تسجيل الخروج",dashboard:"لوحة التحكم",users:"المستخدمون",funding:"طلبات التمويل",withdrawals:"السحوبات",investments:"الاستثمارات",audit:"سجل التدقيق",overview:"الإدارة",dashboardSub:"نظرة مباشرة على المستخدمين والطلبات ونشاط الحسابات.",refresh:"تحديث",totalUsers:"إجمالي المستخدمين",serverRecorded:"مسجل على الخادم",pendingFunding:"طلبات التمويل المعلقة",awaitingReview:"بانتظار المراجعة",pendingWithdrawals:"طلبات السحب المعلقة",recordedKwd:"الرصيد المسجل بالدينار الكويتي",fromMemberWallets:"من محافظ المستخدمين",quickActions:"إجراءات سريعة",manageUsers:"إدارة المستخدمين",searchEditStatus:"بحث وتعديل وتغيير الحالة",reviewFunding:"مراجعة التمويل",approveReject:"الموافقة أو الرفض",reviewWithdrawals:"مراجعة السحوبات",manageInvestments:"إدارة الاستثمارات",createInvestment:"إنشاء استثمارات مسجلة",security:"الأمان",serverAuth:"مصادقة على الخادم",serverAuthSub:"يتم التحقق من صلاحية المشرف بواسطة الـ Worker في كل طلب محمي.",auditTrail:"سجل الإجراءات الإدارية",auditTrailSub:"يتم تسجيل الإضافة والخصم والموافقات وإجراءات الإدارة.",members:"المستخدمون",usersSub:"ابحث عن حسابات المستخدمين وأدرها.",searchUsers:"ابحث باسم المستخدم أو الاسم أو البريد الإلكتروني",search:"بحث",requests:"الطلبات",fundingSub:"راجع طلبات التمويل قبل إضافة الرصيد.",withdrawalsSub:"راجع الطلبات مقابل الرصيد المتاح للمستخدم.",portfolio:"المحفظة",investmentsSub:"أنشئ وراجع الاستثمارات المسجلة على الخادم.",newInvestment:"استثمار جديد",securityLog:"سجل الأمان",auditSub:"الإجراءات الإدارية المسجلة بواسطة الـ Worker.",pending:"معلق",all:"الكل",approved:"مقبول",rejected:"مرفوض",approve:"موافقة",reject:"رفض",edit:"تعديل",credit:"إضافة رصيد",debit:"خصم",status:"الحالة",active:"نشط",suspended:"موقوف",balance:"الرصيد",invested:"المستثمر",earnings:"الأرباح",member:"المستخدم",created:"تاريخ الإنشاء",actions:"الإجراءات",noRequests:"لا توجد طلبات.",noUsers:"لا يوجد مستخدمون.",noInvestments:"لا توجد استثمارات.",noAudit:"لا توجد سجلات تدقيق.",amount:"المبلغ",currency:"العملة",description:"الوصف",reference:"المرجع",reason:"السبب",cancel:"إلغاء",save:"حفظ التغييرات",close:"إغلاق",currentPassword:"كلمة المرور الحالية",newPassword:"كلمة المرور الجديدة",confirm:"تأكيد",planName:"اسم الخطة",selectUser:"اختر مستخدمًا",success:"تمت العملية بنجاح.",invalidAdmin:"الحساب ليس حساب مشرف أو فشلت المصادقة.",confirmAction:"يرجى تأكيد هذه العملية.",insufficient:"الرصيد غير كافٍ أو المستخدم غير موجود.",locked:"تم قفل إعداد المشرف لأن هناك حساب مشرف موجودًا.",session:"انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",notFound:"السجل المطلوب غير موجود.",systemError:"حدث خطأ. حاول مرة أخرى.",financialControl:"التحكم المالي",walletAction:"رصيد المحفظة",recordedTotals:"الإجماليات المسجلة",perCurrency:"الأرصدة حسب العملة",balances:"الأرصدة",manageBalance:"إدارة الرصيد",createInvestment:"إنشاء استثمار مسجل",accountStatus:"حالة الحساب",searchHint:"ابحث عن الأعضاء فورًا",manageInvested:"تعيين إجمالي الاستثمارات",manageEarnings:"تعيين إجمالي الأرباح",messageUser:"مراسلة المستخدم",reviewMessage:"رسالة إلى المستخدم",messagePlaceholder:"اكتب رسالة للمستخدم",withdrawalMessage:"رسالة الموافقة أو الرفض",bank:"البنك",country:"الدولة",destination:"وجهة السحب",setTotal:"تعيين الإجمالي",sendMessage:"إرسال الرسالة",messageSent:"تم إرسال الرسالة بنجاح."
}};
function tr(k){return (T[lang]&&T[lang][k])||k}
function applyLang(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=tr(e.dataset.i18n));
 document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>e.placeholder=tr(e.dataset.i18nPlaceholder));
 $("langBtn").textContent=lang==="ar"?"English":"العربية"; $("langBtnApp").textContent=lang==="ar"?"English":"العربية";
}
function toast(msg){$("toast").textContent=msg;$("toast").hidden=false;clearTimeout(window.__toast);window.__toast=setTimeout(()=>$("toast").hidden=true,3200)}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function amountValue(id){
  const raw=String($(id)?.value??"").trim().replace(/,/g,"");
  if(!/^\d+(?:\.\d{1,3})?$/.test(raw)) throw Error(tr("systemError"));
  const n=Number(raw);
  if(!Number.isFinite(n)||n<=0||n>1000000000) throw Error(tr("systemError"));
  return Math.round(n*1000)/1000;
}
async function api(path,opt={}){
 const headers={"content-type":"application/json",...(token?{authorization:"Bearer "+token}:{})};
 const r=await fetch(API+path,{...opt,headers});
 let d={};try{d=await r.json()}catch{}
 if(!r.ok){if(r.status===401){logout(false);throw Error(tr("session"))}throw Error(d.error||tr("systemError"))}
 return d;
}
function showAuth(){ $("app").hidden=true;$("auth").hidden=false; }
function showApp(){ $("auth").hidden=true;$("app").hidden=false; }
function logout(notify=true){localStorage.removeItem("ip_admin_token");token="";me=null;showAuth();if(notify)toast(tr("logout"))}
async function login(e){
 e.preventDefault();$("loginBtn").disabled=true;$("loginErr").textContent="";
 try{
  const d=await api("/api/auth/login",{method:"POST",body:JSON.stringify({username:$("loginIdent").value.trim(),password:$("loginPass").value})});
  if(d.user?.role!=="admin")throw Error(tr("invalidAdmin"));
  token=d.session?.token||"";if(!token)throw Error(tr("invalidAdmin"));
  localStorage.setItem("ip_admin_token",token);me=d.user;showApp();renderAdmin();await refreshAll();
 }catch(err){$("loginErr").textContent=err.message;localStorage.removeItem("ip_admin_token");token=""}
 finally{$("loginBtn").disabled=false}
}
async function setupAdmin(e){
 e.preventDefault();$("setupBtn").disabled=true;$("setupMsg").textContent="";
 try{
  const r=await fetch(API+"/api/setup-admin",{method:"POST",headers:{"content-type":"application/json","X-Admin-Setup-Key":$("setupKey").value},body:JSON.stringify({full_name:$("setupName").value.trim(),email:$("setupEmail").value.trim(),username:$("setupUser").value.trim(),password:$("setupPass").value})});
  const d=await r.json();if(!r.ok)throw Error(d.error||tr("systemError"));
  $("setupMsg").textContent=tr("setupDone");$("setupForm").reset();
 }catch(err){$("setupMsg").textContent=err.message}finally{$("setupBtn").disabled=false}
}
function renderAdmin(){if(!me)return;$("adminName").textContent=me.full_name||me.username;$("adminInitial").textContent=(me.full_name||me.username||"A").slice(0,1).toUpperCase()}
function nav(page){
 document.querySelectorAll(".page").forEach(p=>p.hidden=p.id!==page);
 document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 if(page==="users")loadUsers(); if(page==="funding")loadFunding();if(page==="withdrawals")loadWithdrawals();if(page==="investments")loadInvestments();if(page==="audit")loadAudit();
}
function table(headers,rows){
 return `<table class="table"><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table>`
}
async function loadUsers(){
 const q=encodeURIComponent($("userSearch").value.trim());const d=await api("/api/admin/users?q="+q+"&limit=200");const a=d.users||[];
 $("usersTable").innerHTML=a.length?table([tr("member"),tr("username"),tr("balances"),tr("invested"),tr("earnings"),tr("status"),tr("actions")],a.map(u=>`<tr>
 <td><b>${esc(u.full_name)}</b><br><small>${esc(u.email)}</small></td><td>${esc(u.username)}</td>
 <td><b>${Number(u.balance||0).toFixed(3)} KWD</b><br><small>${Number(u.balance_usd||0).toFixed(2)} USD · ${Number(u.balance_eur||0).toFixed(2)} EUR</small></td><td>${Number(u.total_invested||0).toFixed(3)} KWD</td><td>${Number(u.recorded_earnings||0).toFixed(3)} KWD</td>
 <td><span class="badge ${u.status}">${tr(u.status)}</span></td>
 <td><div class="mini-actions">
<button class="mini" onclick='editUser(${JSON.stringify(u.id)})'>${tr("edit")}</button>
<button class="mini green" onclick='creditUser(${JSON.stringify(u.id)},${JSON.stringify(u.full_name)})'>${tr("credit")}</button>
<button class="mini red" onclick='debitUser(${JSON.stringify(u.id)},${JSON.stringify(u.full_name)})'>${tr("debit")}</button>
<button class="mini" onclick='totalsModal(${JSON.stringify(u.id)},${JSON.stringify(u.full_name)},"invested",${Number(u.total_invested||0)})'>${tr("manageInvested")}</button>
<button class="mini" onclick='totalsModal(${JSON.stringify(u.id)},${JSON.stringify(u.full_name)},"earnings",${Number(u.recorded_earnings||0)})'>${tr("manageEarnings")}</button>
<button class="mini" onclick='messageUser(${JSON.stringify(u.id)},${JSON.stringify(u.full_name)})'>${tr("messageUser")}</button>
<button class="mini" onclick='toggleStatus(${JSON.stringify(u.id)},${JSON.stringify(u.status)})'>${u.status==="active"?tr("suspended"):tr("active")}</button>
</div></td>
 </tr>`)):`<div class="empty">${tr("noUsers")}</div>`;
 $("statUsers").textContent=a.length;
 return a;
}
async function loadFunding(){
 const st=$("fundingFilter").value,d=await api("/api/admin/funding?status="+encodeURIComponent(st)),a=d.requests||[];
 const pending=a.filter(x=>x.status==="pending").length;$("fundingBadge").hidden=!pending;$("fundingBadge").textContent=pending;
 $("fundingList").innerHTML=a.length?a.map(r=>`<div class="request"><div><h3>${esc(r.full_name)} <span class="badge ${r.status}">${esc(tr(r.status))}</span></h3><p>@${esc(r.username)} · ${esc(r.email)}</p><p>${esc(r.payment_method)}${r.reference?" · "+esc(r.reference):""}</p><p>${esc(r.notes||"")}</p></div><div><div class="amount">${Number(r.amount).toFixed(3)} ${esc(r.currency||"KWD")}</div>${r.status==="pending"?`<div class="mini-actions"><button class="mini green" onclick='reviewFunding(${JSON.stringify(r.id)},"approved")'>${tr("approve")}</button><button class="mini red" onclick='reviewFunding(${JSON.stringify(r.id)},"rejected")'>${tr("reject")}</button></div>`:""}</div></div>`).join(""):`<div class="empty">${tr("noRequests")}</div>`;
 $("statFunding").textContent=pending;
}
async function loadWithdrawals(){
 const st=$("withdrawFilter").value,d=await api("/api/admin/withdrawals?status="+encodeURIComponent(st)),a=d.requests||[];
 const pending=a.filter(x=>x.status==="pending").length;$("withdrawBadge").hidden=!pending;$("withdrawBadge").textContent=pending;
 $("withdrawList").innerHTML=a.length?a.map(r=>`<div class="request"><div><h3>${esc(r.full_name)} <span class="badge ${r.status}">${esc(tr(r.status))}</span></h3><p>@${esc(r.username)} · ${esc(r.email)}</p><p>${esc(r.method)} · ${esc(r.destination)}</p><p>${esc(r.notes||"")}</p></div><div><div class="amount">${Number(r.amount).toFixed(3)} ${esc(r.currency||"KWD")}</div>${r.status==="pending"?`<div class="mini-actions"><button class="mini green" onclick='reviewWithdrawal(${JSON.stringify(r.id)},"approved")'>${tr("approve")}</button><button class="mini red" onclick='reviewWithdrawal(${JSON.stringify(r.id)},"rejected")'>${tr("reject")}</button></div>`:""}</div></div>`).join(""):`<div class="empty">${tr("noRequests")}</div>`;
 $("statWithdrawals").textContent=pending;
}
async function loadInvestments(){
 const d=await api("/api/admin/investments"),a=d.investments||[];
 $("investmentList").innerHTML=a.length?table([tr("member"),tr("planName"),tr("amount"),tr("status"),tr("created")],a.map(i=>`<tr><td><b>${esc(i.full_name)}</b><br><small>@${esc(i.username)}</small></td><td>${esc(i.plan_name)}</td><td>${Number(i.amount).toFixed(3)} ${esc(i.currency||"KWD")}</td><td><span class="badge ${i.status}">${esc(i.status)}</span></td><td>${esc(i.created_at)}</td></tr>`)):`<div class="empty">${tr("noInvestments")}</div>`;
}
async function loadAudit(){
 const d=await api("/api/admin/audit"),a=d.logs||[];
 $("auditList").innerHTML=a.length?table(["Time","Admin","Action","Target","Amount","Details"],a.map(x=>`<tr><td>${esc(x.created_at)}</td><td>${esc(x.admin_username||"")}</td><td>${esc(x.action)}</td><td>${esc(x.target_username||"")}</td><td>${x.amount==null?"—":Number(x.amount).toFixed(3)+" "+esc(x.currency||"KWD")}</td><td>${esc(x.details||"")}</td></tr>`)):`<div class="empty">${tr("noAudit")}</div>`;
}
async function refreshAll(){
 try{
  const users=await loadUsers();
  await Promise.all([loadFunding(),loadWithdrawals(),loadInvestments(),loadAudit()]);
  $("statBalance").textContent=users.reduce((s,u)=>s+Number(u.balance||0),0).toFixed(3)+" KWD";
 }catch(e){toast(e.message)}
}
function openModal(title,body){
 $("modalContent").innerHTML=`<h2>${esc(title)}</h2>${body}`;$("modal").hidden=false;
}
function closeModal(){$("modal").hidden=true;$("modalContent").innerHTML=""}
async function editUser(id){
 const users=await api("/api/admin/users?limit=200"),u=(users.users||[]).find(x=>x.id===id);if(!u)return toast(tr("notFound"));
 openModal(tr("edit"),`<form id="editForm" class="modal-form"><label>${tr("fullName")}<input id="mName" value="${esc(u.full_name)}" required></label><label>${tr("email")}<input id="mEmail" type="email" value="${esc(u.email)}" required></label><button class="primary">${tr("save")}</button></form>`);
 $("editForm").onsubmit=async e=>{e.preventDefault();try{await api("/api/admin/users/"+encodeURIComponent(id),{method:"PATCH",body:JSON.stringify({full_name:$("mName").value.trim(),email:$("mEmail").value.trim()})});closeModal();toast(tr("success"));await loadUsers()}catch(err){toast(err.message)}}
}
function creditUser(id,name){walletModal(id,name,"credit")}
function debitUser(id,name){walletModal(id,name,"debit")}
function walletModal(id,name,dir){
 openModal(dir==="credit"?tr("credit"):tr("debit"),`<form id="walletForm" class="modal-form"><div class="modal-hero"><span class="eyebrow">${tr("financialControl")}</span><h3>${esc(name)}</h3><p>${tr("walletAction")} · ${dir==="credit"?tr("credit"):tr("debit")}</p></div><label>${tr("amount")}<input id="mAmount" type="number" min="0.001" step="0.001" required></label><label>${tr("currency")}<select id="mCurrency"><option value="KWD">KWD</option><option value="USD">USD</option><option value="EUR">EUR</option></select></label><label>${tr("description")}<input id="mDesc"></label><label>${tr("reference")}<input id="mRef"></label><button class="${dir==="credit"?"primary":"secondary"}">${dir==="credit"?tr("credit"):tr("debit")}</button></form>`);
 $("walletForm").onsubmit=async e=>{e.preventDefault();try{await api("/api/admin/"+dir,{method:"POST",body:JSON.stringify({user_id:id,amount:amountValue("mAmount"),description:$("mDesc").value.trim(),reference:$("mRef").value.trim(),currency:$("mCurrency").value})});closeModal();toast(tr("success"));await loadUsers();await loadAudit()}catch(err){toast(err.message)}}
}
async function toggleStatus(id,current){const next=current==="active"?"suspended":"active";if(!confirm(tr("confirmAction")))return;try{await api("/api/admin/users/"+encodeURIComponent(id)+"/status",{method:"PATCH",body:JSON.stringify({status:next})});toast(tr("success"));await loadUsers();await loadAudit()}catch(e){toast(e.message)}}
async function reviewFunding(id,status){
  openModal(status==="approved"?tr("approve"):tr("reject"),`<form id="fundReviewForm" class="modal-form">
    <div class="modal-hero"><span class="eyebrow">${tr("funding")}</span><h3>${status==="approved"?tr("approve"):tr("reject")}</h3>
    <p>${tr("reviewMessage")}</p></div>
    <label>${tr("reviewMessage")}<textarea id="fundReviewMessage" rows="5" placeholder="${esc(tr("messagePlaceholder"))}" required></textarea></label>
    <button class="${status==="approved"?"primary":"secondary"}">${status==="approved"?tr("approve"):tr("reject")}</button>
  </form>`);
  $("fundReviewForm").onsubmit=async e=>{
    e.preventDefault();
    try{
      const message=$("fundReviewMessage").value.trim();
      if(!message) throw Error(tr("systemError"));
      await api("/api/admin/funding/"+encodeURIComponent(id),{method:"PATCH",body:JSON.stringify({status,message})});
      closeModal();toast(tr("success"));await loadFunding();await loadAudit();
    }catch(e){toast(e.message)}
  };
}
async function reviewWithdrawal(id,status){
  openModal(status==="approved"?tr("approve"):tr("reject"),`<form id="reviewForm" class="modal-form">
    <div class="modal-hero"><span class="eyebrow">${tr("withdrawals")}</span><h3>${status==="approved"?tr("approve"):tr("reject")}</h3>
    <p>${tr("withdrawalMessage")}</p></div>
    <label>${tr("reviewMessage")}<textarea id="reviewMessage" rows="5" placeholder="${esc(tr("messagePlaceholder"))}" required></textarea></label>
    <button class="${status==="approved"?"primary":"secondary"}">${status==="approved"?tr("approve"):tr("reject")}</button>
  </form>`);
  $("reviewForm").onsubmit=async e=>{
    e.preventDefault();
    try{
      const message=$("reviewMessage").value.trim();
      if(!message) throw Error(tr("systemError"));
      await api("/api/admin/withdrawals/"+encodeURIComponent(id),{method:"PATCH",body:JSON.stringify({status,message})});
      closeModal();toast(tr("success"));await loadWithdrawals();await loadUsers();await loadAudit();
    }catch(e){toast(e.message)}
  };
}
function totalsModal(id,name,type,current){
  const title=type==="invested"?tr("manageInvested"):tr("manageEarnings");
  openModal(title,`<form id="totalsForm" class="modal-form">
    <div class="modal-hero"><span class="eyebrow">${tr("recordedTotals")}</span><h3>${esc(name)}</h3><p>${title}</p></div>
    <label>${tr("amount")}<input id="totalAmount" type="number" min="0" step="0.001" value="${Number(current||0).toFixed(3)}" required></label>
    <label>${tr("currency")}<select id="totalCurrency"><option value="KWD">KWD</option><option value="USD">USD</option><option value="EUR">EUR</option></select></label>
    <button class="primary">${tr("setTotal")}</button>
  </form>`);
  $("totalsForm").onsubmit=async e=>{
    e.preventDefault();
    try{
      const amount=amountValue("totalAmount");
      await api("/api/admin/users/"+encodeURIComponent(id)+"/totals",{method:"PATCH",body:JSON.stringify({type,amount,currency:$("totalCurrency").value})});
      closeModal();toast(tr("success"));await loadUsers();await loadAudit();
    }catch(err){toast(err.message)}
  };
}
function messageUser(id,name){
  openModal(tr("messageUser"),`<form id="messageForm" class="modal-form">
    <div class="modal-hero"><span class="eyebrow">${tr("member")}</span><h3>${esc(name)}</h3></div>
    <label>${tr("reviewMessage")}<textarea id="userMessage" rows="6" placeholder="${esc(tr("messagePlaceholder"))}" required></textarea></label>
    <button class="primary">${tr("sendMessage")}</button>
  </form>`);
  $("messageForm").onsubmit=async e=>{
    e.preventDefault();
    try{
      const message=$("userMessage").value.trim();
      if(!message) throw Error(tr("systemError"));
      await api("/api/admin/notifications",{method:"POST",body:JSON.stringify({user_id:id,message})});
      closeModal();toast(tr("messageSent"));
    }catch(err){toast(err.message)}
  };
}
async function newInvestment(){
 const d=await api("/api/admin/users?limit=200"),users=d.users||[];
 openModal(tr("newInvestment"),`<form id="investmentForm" class="modal-form"><div class="modal-hero"><span class="eyebrow">${tr("portfolio")}</span><h3>${tr("createInvestment")}</h3></div><label>${tr("selectUser")}<select id="iUser">${users.filter(u=>u.status==="active"&&Number(u.balance)>0).map(u=>`<option value="${esc(u.id)}">${esc(u.full_name)} (@${esc(u.username)}) — ${Number(u.balance).toFixed(3)} KWD</option>`).join("")}</select></label><label>${tr("planName")}<input id="iPlan" required></label><label>${tr("amount")}<input id="iAmount" type="number" min="0.001" step="0.001" required></label><label>${tr("currency")}<select id="iCurrency"><option>KWD</option><option>USD</option><option>EUR</option></select></label><button class="primary">${tr("createInvestment")}</button></form>`);
 $("investmentForm").onsubmit=async e=>{e.preventDefault();try{await api("/api/admin/investments",{method:"POST",body:JSON.stringify({user_id:$("iUser").value,plan_name:$("iPlan").value.trim(),amount:amountValue("iAmount"),currency:$("iCurrency").value})});closeModal();toast(tr("success"));await loadInvestments();await loadUsers();await loadAudit()}catch(err){toast(err.message)}}
}
async function boot(){
 applyLang();
 if(!token)return showAuth();
 try{
  const d=await api("/api/me");if(d.user?.role!=="admin")throw Error(tr("invalidAdmin"));me=d.user;showApp();renderAdmin();await refreshAll();
 }catch(e){localStorage.removeItem("ip_admin_token");token="";showAuth()}
}
$("loginForm").onsubmit=login;$("setupForm").onsubmit=setupAdmin;$("logout").onclick=()=>logout(true);
$("showSetup").onclick=()=>{$("setupBox").hidden=!$("setupBox").hidden};
$("langBtn").onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("ip_admin_lang",lang);applyLang()};
$("langBtnApp").onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("ip_admin_lang",lang);applyLang();renderAdmin()};
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("ip_admin_theme",document.body.classList.contains("dark")?"dark":"light")};
document.querySelectorAll(".nav,[data-page]").forEach(b=>b.addEventListener("click",e=>{if(b.dataset.page)nav(b.dataset.page)}));
$("userSearch").oninput=()=>loadUsers();$("searchUsersBtn").onclick=()=>loadUsers();
$("fundingFilter").onchange=loadFunding;$("withdrawFilter").onchange=loadWithdrawals;$("newInvestment").onclick=newInvestment;$("refreshAll").onclick=refreshAll;$("modalClose").onclick=closeModal;$("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
if(localStorage.getItem("ip_admin_theme")==="dark")document.body.classList.add("dark");
boot();
