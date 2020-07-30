import Cookies from 'universal-cookie'
const cookies = new Cookies();
export default function auth({ next, store }) {
    
    if (!store.state.profile.signedUser && cookies.get("token") == null) {
        return next({
            name: "login"
        })
    }
    return next()
}