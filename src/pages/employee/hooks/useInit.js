import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { actions } from '../../employees/slices/get'

export const useInit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    
    dispatch(actions.attempt({where:{id}}))
}