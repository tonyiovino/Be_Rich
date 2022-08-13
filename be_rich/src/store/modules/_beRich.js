class _beRich {
    static addMoney(_beRichData, newMoney) {
        const increase = _beRichData.value
        console.log(increase)
        const next_beRichData = _beRichData.setIn(
          ['money'], newMoney
        );
        return next_beRichData;
    }
}

export default _beRich