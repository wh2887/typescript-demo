// 静态类型
// 基础类型
var age = 18;
var username = 'McCall';
// 还有 ： null, undefined, boolean, symbol, void
// 复杂类型： 对象、 数组
var xiaoJieJie = {
    name: '小红',
    age: 19
};
var xiaoJieJie2 = ['小1', '小2', '小3'];
// 类型注解
var myAge = 18;
// 类型推断
function getTotal(one, two) {
    return one + two;
}
var result = getTotal(1, 2);
// result没给类型 ts自动推断为 number 这就是 类型推断。
// 小结
// 1. 如果 TS 能够自动分析变量类型，那么我们什么也不需要做
// 2. 如果 TS 无法分析变量类型，我们就需要使用 类型注解。
