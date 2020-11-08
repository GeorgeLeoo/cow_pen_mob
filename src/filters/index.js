export const money = (money) => {
    if (Number.isNaN(money)) {
        return '¥0'
    }
    
    return '¥' + money
}
