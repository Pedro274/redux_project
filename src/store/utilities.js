export const updateState = (oldState, updateValue) => {
    return {
        ...oldState,
        ...updateValue
    }
};

export const addObjectToArr = (oldState, valueToAdd) => {
    return {
        ...oldState,
        recordCounter: oldState
            .recordCounter
            .concat([
                {
                    value: valueToAdd,
                    id: new Date()
                }
            ])
    }
};

export const deleteItemInArr = (oldState, elementIdToRemove) => {
    const newArr = oldState.recordCounter.filter(item => item.id !== elementIdToRemove)
    return {
        ...oldState,
        recordCounter: [...newArr]
    }
};
