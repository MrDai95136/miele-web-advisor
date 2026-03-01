// 微信分享功能
class ShareManager {
    constructor() {
        this.initShareButtons();
    }

    initShareButtons() {
        // 复制链接按钮
        const copyBtn = document.getElementById('copy-link');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyToClipboard();
            });
        }

        // 微信分享提示
        const wechatShare = document.getElementById('wechat-share');
        if (wechatShare) {
            wechatShare.addEventListener('click', () => {
                this.showWechatShareTip();
            });
        }
    }

    copyToClipboard() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showNotification('链接已复制到剪贴板！');
        }).catch(err => {
            console.error('复制失败:', err);
            this.showNotification('复制失败，请手动复制链接');
        });
    }

    showWechatShareTip() {
        // 创建分享提示遮罩
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;

        const tip = document.createElement('div');
        tip.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            max-width: 300px;
        `;
        tip.innerHTML = `
            <h3 style="margin: 0 0 15px 0; color: #2c3e50;">分享到微信</h3>
            <p style="margin: 0 0 15px 0; color: #7f8c8d;">
                点击右上角「...」<br>
                选择「在浏览器中打开」<br>
                然后分享给好友
            </p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                我知道了
            </button>
        `;

        overlay.appendChild(tip);
        document.body.appendChild(overlay);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #27ae60;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// 初始化分享功能
document.addEventListener('DOMContentLoaded', () => {
    new ShareManager();
});