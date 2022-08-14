//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    const list = [];
    for (let i = 0; i < 30; i++) {
        const listObject = {
            title: Random.csentence(5, 10),
            //随机生成一段中文文本。
            company: Random.csentence(5, 10),
            attention_degree: Random.integer(100, 9999),
            photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
        }
        list.push(listObject);
    }
    return {
        data: list
    }
})
