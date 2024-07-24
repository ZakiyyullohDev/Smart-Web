document.addEventListener("DOMContentLoaded", () => {
    const gpuNameElement = document.getElementById("gpuName");
    const totalMemory = document.getElementById("memory");
    const freeMemory = document.getElementById("freeMemory");
    const usedMemory = document.getElementById("usedMemory");

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            gpuNameElement.textContent = renderer;
        } else {
            gpuNameElement.textContent = "Not available";
        }
    } else {
        gpuNameElement.textContent = "WebGL not supported";
    }

    if ('deviceMemory' in navigator) {
        const deviceMemory = navigator.deviceMemory;
        const usedMem = deviceMemory * 0.7;
        const freeMem = deviceMemory - usedMem;

        totalMemory.textContent = `${deviceMemory}GB`;
        freeMemory.textContent = `${freeMem.toFixed(1)}GB`;
        usedMemory.textContent = `${usedMem.toFixed(1)}GB`;
    } else if (typeof window.performance.memory !== 'undefined') {
        const memoryInfo = window.performance.memory;
        const totalMem = memoryInfo.jsHeapSizeLimit / (1024 * 1024 * 1024);
        const usedMem = memoryInfo.usedJSHeapSize / (1024 * 1024 * 1024); 
        const freeMem = totalMem - usedMem;

        totalMemory.textContent = `${totalMem.toFixed(1)}GB`;
        freeMemory.textContent = `${freeMem.toFixed(1)}GB`;
        usedMemory.textContent = `${usedMem.toFixed(1)}GB`;
    } else {
        totalMemory.textContent = "Unknown";
        freeMemory.textContent = "Unknown";
        usedMemory.textContent = "Unknown";
    }
});

document.addEventListener('DOMContentLoaded', (e)=> {
    if (!localStorage.getItem("UserToken") && !localStorage.getItem("UserInfoSignUp")) {
        window.location.href = 'login.html'
    }
})
