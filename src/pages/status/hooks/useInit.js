import {useDispatch} from "react-redux";
import { actions } from '../../employees/slices/get'

export const useInit = () => {
    const dispatch = useDispatch()
    const id = "8e0e752d-2cce-4423-93d2-b68c6cd46c11"
    
    dispatch(actions.attempt({where: {id}}))
}