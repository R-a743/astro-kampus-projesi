

document.addEventListener("DOMContentLoaded", function() {
    console.log("🔭 AstroKampüs Sistemi Forge Reality Temasıyla Yüklendi!");

  
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    if (tabParam) {
       
        if (tabParam === 'soru') {
            const soruTabEl = document.querySelector('#soru-tab');
            if (soruTabEl) {
                const triggerTab = new bootstrap.Tab(soruTabEl);
                triggerTab.show();
            }
        } 
       
        else if (tabParam === 'kayit') {
            const kayitTabEl = document.querySelector('#kayit-tab');
            if (kayitTabEl) {
                const triggerTab = new bootstrap.Tab(kayitTabEl);
                triggerTab.show();
            }
        }
    }
});