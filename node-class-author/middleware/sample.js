
const abc1 = async (req, res, next) => {
    console.log(111111111)
    next()
}

const abc2 = async (req, res, next) => {
    console.log(2222222222)
    next()
}

const abc3 = async (req, res, next) => {
    console.log(3333333333)
    next()
}

module.exports = {abc1,abc2,abc3}