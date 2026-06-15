// navbar.js
(function() {
    const container = document.getElementById('global-navbar');
    if (!container) return;

    // Detect if we are on the home page index structure
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('.html');
    
    const homeLink = isHome ? '#gaming' : 'index.html#gaming';
    const adminLink = isHome ? '#admin' : 'index.html#admin';
    const safetyLink = 'safety-matrix.html';

    // Determine the active visual tab based on path and hash values
    let activeTab = 'gaming';
    if (window.location.hash.includes('admin')) {
        activeTab = 'admin';
    } else if (window.location.pathname.includes('safety-matrix.html')) {
        activeTab = 'safety';
    }

    container.innerHTML = `
    <nav class="bg-white border-b border-slate-100 py-3.5 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <!-- Branding Header (Both Image and Name link dynamically to homepage catalog) -->
            <a href="${homeLink}" class="flex items-center gap-3 group transition-all hover:opacity-90">
                <div class="relative w-11 h-11 flex items-center justify-center shrink-0">
                    <object data="images/profile_pic.png" type="image/png" class="w-11 h-11 rounded-2xl object-cover border border-slate-200 shadow-md shadow-teal-50 bg-white pointer-events-none">
                        <div class="bg-teal-600 text-white p-2.5 rounded-2xl shadow-md shadow-teal-100">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.125h.008v.008H9v-.008zm6 0h.008v.008H15v-.008zm0-3h.008v.008H15V7.125zm-6 0h.008v.008H9V7.125z" />
                            </svg>
                        </div>
                    </object>
                </div>
                <div>
                    <span class="font-display font-bold text-xl tracking-wide text-slate-800 group-hover:text-teal-600 transition-colors">EUGENESTARR.COM</span>
                    <span class="inline-block ml-2 bg-teal-50 text-teal-700 font-bold text-xs px-2.5 py-0.5 rounded-full">Browser Arcade</span>
                </div>
            </a>
            
            <!-- Shared Navigation Link Buttons (With dynamically checked active states) -->
            <div class="flex flex-wrap items-center justify-center gap-1 md:gap-2">
                <a href="${homeLink}" id="nav-gaming" class="px-4 py-2 rounded-xl font-bold text-sm transition-all ${activeTab === 'gaming' ? 'text-teal-600 bg-teal-50 shadow-sm' : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'}">🎮 Arcade Games</a>
                <a href="${safetyLink}" id="nav-safety" class="px-4 py-2 rounded-xl font-bold text-sm transition-all ${activeTab === 'safety' ? 'text-teal-600 bg-teal-50 shadow-sm' : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'} flex items-center gap-1.5">🛡️ Safety Matrix</a>
                <a href="${adminLink}" id="nav-admin" class="px-4 py-2 rounded-xl font-bold text-sm transition-all ${activeTab === 'admin' ? 'text-orange-600 bg-orange-50 shadow-sm border border-dashed border-orange-200 flex items-center gap-1.5' : 'text-orange-600 hover:bg-orange-50 border border-dashed border-orange-200 flex items-center gap-1.5'}">🔑 Teacher Panel</a>
            </div>
        </div>
    </nav>
    `;
})();
