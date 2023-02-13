import { FC, createContext, useEffect, useMemo, useState } from 'react'
import { IUser, TypeSetState } from '../../types'
import { getAuth, onAuthStateChanged, Auth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
import { dataUsers } from '../layout/sidebar/UserItems/dataUsers'
import { useNavigate } from 'react-router-dom'

interface IContext {
  user: IUser | null
  setUser: TypeSetState<IUser | null>
  ga: Auth
  db: Firestore
}

interface IProps {
  children: any
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const ga = getAuth()
  const db = getFirestore()

  useEffect(() => {
    const unlisten = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          _id: authUser.uid,
          avatar: dataUsers[1].avatar,
          name: authUser.displayName || '',
        })
      } else {
        setUser(null)
      }
    })

    return () => {
      unlisten()
    }
  }, [])

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db,
    }),
    [user, ga],
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
