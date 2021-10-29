import { actions } from '../../asset/slices/get'
import { useDispatch } from "react-redux";

export const useInit = () => {
    const dispatch = useDispatch()
    
    dispatch(actions.attempt())
}