// 静态类型
// 基础类型
const age: number = 18
const username: string = 'McCall'
// 还有 ： null, undefined, boolean, symbol, void


// 复杂类型： 对象、 数组
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '小红',
    age: 19
}

const xiaoJieJie2: string[] = ['小1', '小2', '小3']




// 类型注解
const myAge: number = 18

// 类型推断
function getTotal(one: number, two: number) {
    return one + two
}

const result = getTotal(1, 2)
// result没给类型 ts自动推断为 number 这就是 类型推断。

// 小结
// 1. 如果 TS 能够自动分析变量类型，那么我们什么也不需要做
// 2. 如果 TS 无法分析变量类型，我们就需要使用 类型注解。

