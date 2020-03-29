import { Auth } from 'aws-amplify'
export default function ({
    store,redirect
}){
    console.log("auth loaded")
    store.dispatch("auth/load")
    console.log('isAuthenticated', store.state.auth.isAuthenticated);
    if(!store.state.auth.isAuthenticated){
        return redirect("/login")
    }
}
