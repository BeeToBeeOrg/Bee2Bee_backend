export default function ({
    store,redirect
}){
    console.log('isAuthenticated', store.state.auth.isAuthenticated);
    if(!store.state.auth.isAuthenticated){
        return redirect("/login")
    }
}
