import { AuthContext } from './AuthProvider'
import { useContext } from 'react'

export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
