// Miele产品知识库
const mieleProducts = {
    washer: {
        name: "洗衣机",
        programs: [
            { name: "Cottons", description: "棉织物程序，适合日常棉质衣物洗涤", temp: "40-60°C", spin: "1200-1400rpm" },
            { name: "Down Wear", description: "羽绒服专用程序，温和洗涤保护羽绒", temp: "30°C", spin: "400-600rpm" },
            { name: "Hygiene Drum Clean", description: "筒清洁程序，每月运行一次保持内筒卫生", temp: "90°C", spin: "1200rpm" },
            { name: "Steam Finish", description: "蒸汽护理程序，去皱+除味，替代干洗", temp: "40°C", spin: "800rpm" }
        ],
        hiddenFeatures: [
            "Night Economy（夜间节能）：谷电时段自动运行，电费减半",
            "Stain Programs（污渍程序）：红酒/油渍/血渍专属算法",
            "Extra Rinse（额外漂洗）：敏感肌肤家庭必备",
            "Drum Light（筒灯）：夜间取衣不摸黑"
        ],
        maintenance: [
            "每3个月清理滤网一次",
            "使用后门微开防止霉菌滋生",
            "避免使用含氯漂白剂清洁不锈钢表面"
        ]
    },
    dishwasher: {
        name: "洗碗机",
        programs: [
            { name: "AutoOpen drying", description: "自动开门烘干，比传统热风烘干省电50%", temp: "70°C", duration: "2-3小时" },
            { name: "QuickPowerWash", description: "快速强力洗涤，适合日常餐具", temp: "65°C", duration: "58分钟" },
            { name: "Eco", description: "节能程序，适合轻度脏污餐具", temp: "50°C", duration: "3小时" }
        ],
        hiddenFeatures: [
            "确保安装时预留前方60cm空间，保证AutoOpen功能正常",
            "选择带有\"AutoOpen\"标识的程序才能启用省电功能",
            "避免在高湿度环境使用AutoOpen功能"
        ],
        maintenance: [
            "定期清理滤网，影响排水效率",
            "运行空筒清洁程序去除异味",
            "检查喷臂是否堵塞"
        ]
    },
    oven: {
        name: "烤箱",
        programs: [
            { name: "Sous-vide", description: "低温慢煮，牛排中心温度精准控制", temp: "50-85°C", time: "1-4小时" },
            { name: "Crisp function", description: "酥脆功能，法棍外脆内软", temp: "220°C", time: "15-20分钟" },
            { name: "Moisture plus", description: "蒸汽辅助，面包发酵完美膨胀", temp: "180°C", time: "25-30分钟" }
        ],
        hiddenFeatures: [
            "探针校准功能：进入设置→校准→按提示操作",
            "米其林餐厅级别的烹饪程序内置",
            "根据食材类型和重量自动匹配最佳参数"
        ],
        maintenance: [
            "定期运行自清洁程序",
            "清洁门封条防止漏气",
            "使用烤箱温度计验证温度准确性"
        ]
    },
    coffee: {
        name: "咖啡机",
        programs: [
            { name: "My Espresso", description: "个性化意式浓缩，保存个人偏好设置", temp: "92-95°C", pressure: "9 bar" },
            { name: "My Latte", description: "个性化拿铁，调整奶泡量和温度", temp: "65-70°C", milk: "可调" },
            { name: "Aroma intensity", description: "香气强度调节，从1-8级调整研磨度", grind: "1-8级", water: "30-200ml" }
        ],
        hiddenFeatures: [
            "长按饮品按钮3秒进入编程模式",
            "每周使用专用清洁片运行自动清洁程序",
            "保存多个个性化配方供不同用户使用"
        ],
        maintenance: [
            "每周运行一次自动清洁程序",
            "定期除垢保持萃取稳定性",
            "使用新鲜咖啡豆获得最佳风味"
        ]
    }
};

// 常见问题数据库
const faqDatabase = [
    { question: "Miele洗衣机怎么清洁？", answer: "每月运行一次Hygiene Drum Clean（筒清洁）程序，路径：Menu → Maintenance → Drum Clean。同时每3个月需清理滤网一次。" },
    { question: "洗碗机如何省电？", answer: "使用AutoOpen drying（自动开门烘干）功能，在洗涤程序结束前门会自动微开，利用余热自然烘干，比传统热风烘干节省约50%电力。" },
    { question: "羽绒服怎么洗？", answer: "使用Down Wear（羽绒服）程序，温度30°C，转速400-600rpm。必须添加2-3个网球帮助羽绒均匀分布，不要使用柔顺剂。" },
    { question: "咖啡机怎么设置个性化？", answer: "长按饮品按钮3秒进入编程模式，可调整研磨度（1-8级）、水量（30-200ml）、温度（85-95℃），保存为\"My Espresso\"或\"My Latte\"。" }
];