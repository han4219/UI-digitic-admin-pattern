import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/stores'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch
