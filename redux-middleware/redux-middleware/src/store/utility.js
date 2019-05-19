export const updatedObject = (oldObject, updateObject) => {
    return {
        ...oldObject,
        ...updateObject
    }
}