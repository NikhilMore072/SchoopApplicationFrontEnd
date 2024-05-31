import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function authManage(Component) {
    const token = localStorage.getItem('token')
    return function Auth(props) {
      const navigate = useNavigate()
    useEffect(() => {
      
    if(!token){
        return navigate('/')
    }
      
    })
    return <Component {...props}/>
  }
}

export default authManage