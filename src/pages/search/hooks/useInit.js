import {useDispatch} from "react-redux";
import { actions } from '../../employees/slices/get'

export const useInit = () => {
    const dispatch = useDispatch()
    
    dispatch(actions.attempt({where:{'hasAssigned_NOT': {id: null}}}))
}