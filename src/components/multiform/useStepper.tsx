import {useDispatch} from 'react-redux'

export const useStepper = (cb: Function) => {
    const dispatch = useDispatch()

    const onChangeSelectedIndex = (index: number) => {
        dispatch(cb(index))
    }

    return {
        onChangeSelectedIndex
    }
}
