import { actions } from '../slices/get'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const useInit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    
    dispatch(actions.attempt({where: {id}}))
}