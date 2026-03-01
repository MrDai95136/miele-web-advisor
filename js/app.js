// Miele Web Advisor JavaScript
class MieleAdvisor {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadProductData();
    }

    bindEvents() {
        // Product selection
        const productButtons = document.querySelectorAll('.product-btn');
        productButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.selectProduct(e.target.dataset.product);
            });
        });

        // Question form submission
        const questionForm = document.getElementById('question-form');
        if (questionForm) {
            questionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleQuestion();
            });
        }

        // Share functionality
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareToWechat();
            });
        }
    }

    loadProductData() {
        this.products = {
            washer: {
                name: '洗衣机',
                features: [
                    'Hygiene Drum Clean（筒清洁）',
                    'Steam Finish（蒸汽护理）',
                    'Night Economy（夜间节能）',
                    'Stain Programs（污渍程序）'
                ],
                tips: [
                    '每月运行一次筒清洁程序',
                    '每3个月清理滤网',
                    '使用后门微开防霉'
                ]
            },
            dishwasher: {
                name: '洗碗机',
                features: [
                    'AutoOpen drying（自动开门烘干）',
                    'Extra Dry（额外烘干）',
                    'QuickPowerWash（快速强力洗）'
                ],
                tips: [
                    '定期清理滤网',
                    '正确摆放餐具',
                    '使用专用洗碗块'
                ]
            },
            oven: {
                name: '烤箱',
                features: [
                    'Sous-vide（低温慢煮）',
                    'Crisp function（酥脆功能）',
                    'Moisture plus（蒸汽辅助）'
                ],
                tips: [
                    '使用前预热',
                    '定期自清洁',
                    '温度校准'
                ]
            },
            coffee: {
                name: '咖啡机',
                features: [
                    'My Espresso（我的意式浓缩）',
                    'My Latte（我的拿铁）',
                    'Aroma intensity（香气强度）'
                ],
                tips: [
                    '每周清洁程序',
                    '使用新鲜咖啡豆',
                    '个性化设置保存'
                ]
            }
        };
    }

    selectProduct(productType) {
        const productInfo = document.getElementById('product-info');
        const product = this.products[productType];
        
        if (product) {
            let html = `<h3>${product.name}专业指导</h3>`;
            html += '<div class="features"><h4>隐藏功能：</h4><ul>';
            product.features.forEach(feature => {
                html += `<li>✅ ${feature}</li>`;
            });
            html += '</ul></div>';
            
            html += '<div class="tips"><h4>保养建议：</h4><ul>';
            product.tips.forEach(tip => {
                html += `<li>💡 ${tip}</li>`;
            });
            html += '</ul></div>';
            
            productInfo.innerHTML = html;
            productInfo.style.display = 'block';
            
            // Scroll to results
            productInfo.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleQuestion() {
        const questionInput = document.getElementById('question-input');
        const question = questionInput.value.trim();
        const answerContainer = document.getElementById('answer-container');
        
        if (!question) {
            alert('请输入您的问题');
            return;
        }

        // Simple AI-like responses based on keywords
        let answer = this.generateAnswer(question);
        
        answerContainer.innerHTML = `
            <div class="answer">
                <h4>专业解答：</h4>
                <p>${answer}</p>
            </div>
        `;
        answerContainer.style.display = 'block';
        
        // Clear input
        questionInput.value = '';
        
        // Scroll to answer
        answerContainer.scrollIntoView({ behavior: 'smooth' });
    }

    generateAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('棉') || lowerQuestion.includes('cotton')) {
            return 'Miele洗衣机的Cottons（棉织物）程序最适合棉质衣物。建议使用40°C温度，1200-1400rpm转速。不要超载滚筒，使用Miele专用洗涤剂效果最佳。';
        }
        else if (lowerQuestion.includes('羽绒') || lowerQuestion.includes('down')) {
            return 'Miele洗衣机的Down Wear（羽绒服）程序专为羽绒衣物设计。使用30°C温和洗涤，400-600rpm低转速防止羽绒结块。务必添加2-3个网球帮助羽绒均匀分布，不要使用柔顺剂。';
        }
        else if (lowerQuestion.includes('洗碗机') || lowerQuestion.includes('dishwasher')) {
            return 'Miele洗碗机的AutoOpen drying（自动开门烘干）功能可节省50%电力。确保安装时预留60cm前方空间，选择带有AutoOpen标识的程序，避免在高湿度环境使用。';
        }
        else if (lowerQuestion.includes('筒清洁') || lowerQuestion.includes('drum clean')) {
            return 'Hygiene Drum Clean（筒清洁）程序可有效避免内筒霉菌滋生。路径：Menu → Maintenance → Drum Clean，建议每月运行一次。这是延长Miele洗衣机寿命的关键保养步骤。';
        }
        else {
            return '感谢您的咨询！我是前美诺销售专家四丶十二。您的问题很专业，建议您选择相应的产品类型获取详细指导，或联系我进行99元/次的深度一对一指导服务。';
        }
    }

    shareToWechat() {
        if (navigator.share) {
            navigator.share({
                title: 'Miele高阶使用顾问',
                text: '前美诺销售专家私藏技巧，帮你充分发挥Miele产品价值！',
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback for older browsers
            alert('请复制当前页面链接分享给好友');
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MieleAdvisor();
});