import { useDispatch } from "react-redux";
import { actions } from "../slices/get"

export const useInit = () => {
    const dispatch = useDispatch()
    
    dispatch(actions.attempt())
}