const state = {
    money: {
        available: 110,
        spent: 0,
        by_click: 1,
    }
}

const getters = {
    getMoney: state => state.money
}

const mutations = {
    update_money_available: (state, payload) => {
        state.money.available = payload
    },
    update_money_spent: (state, payload) => {
        state.money.spent = payload
    }
}

const actions = {
    updateMoneyAvailable(ctx, payload) {
        const newMoney = ctx.getters.getMoney.available + payload
        ctx.commit('update_money_available', newMoney)
    },

    updateMoneySpent(ctx, payload) {
        const newMoneySpent = ctx.getters.getMoney.spent + payload.spent
        ctx.commit('update_money_spent', newMoneySpent)
        ctx.commit('update_money_available', payload.available)
    }
}

export default {
	state,
	getters,
	mutations,
    actions
}