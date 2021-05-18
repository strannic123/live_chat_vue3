import {ref} from "vue"
import {projectAuth} from "../firebase/config";


const error = ref('')

const signIn = async (email, password) => {
    error.value = null
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        return res
    }catch (err){
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {

    return {error, signIn}

}

export default useLogin
