import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/stores'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
