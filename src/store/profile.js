
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const profile = {
    state: {
        token: "",
        user: {},
        tasks: [],
        signedUp: false,
        signedUser: false
    },
    getters: {
        signedUser: state => {
            return state.signedUser;
        }
    },
    mutations: {
        authUser(state, token) {
            state.token = token
        },
        signedUp(state, response) {
            state.signedUp = response
        },
        setUser(state, user) {
            state.user = user
        },
        signedUser(state, response) {
            state.signedUser = response
        },
    },
    actions: {
        signup: async function ({ commit }, fields) {
            const body = {
                name: fields.name,
                password: fields.password,
                email: fields.email
            }
            const opts = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
            try {
                const data = await fetch(`http://localhost:4000/profile/signup`, opts);
                if (data.status != 200) throw false
                let response = await data.json();
                commit('signedUp', response)
                return true
            } catch (error) {
                return false
            }

        },
        signin: async function ({ commit }, fields) {
            const body = {
                email: fields.email,
                password: fields.password
            }
            const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            };
            try {

                const data = await fetch(`http://localhost:4000/profile/signin`, opts);
                if (data.status == 400) return false;
                const response = await data.json();
                cookies.set("token", `${response.token}`, { path: '/', maxAge: 60 * 60 * 2, secure: false });
                commit('authUser', response.token);
                commit('signedUser', true)
                return true
            } catch (error) {
                return false
            }
        },
        verifyToken: async function ({ commit }) {
            console.log("Holaa");
            let cookie = cookies.get("token")
            if (cookie == null) {
                console.log("no hay token");
                commit('signedUser', false)
                return false
            }
            try {
                var response = await fetch(`http://localhost:4000/profile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookie}`
                    }
                })

                if (response.status == 400) return false
                commit('authUser', cookie);

                commit('signedUser', true)
                return true
            } catch (error) {
                return false
            }

        },
        logout: async function ({ commit }) {
            cookies.remove('token');
            console.log(cookies.getAll());
            commit('authUser', null);

            commit("setUser", null)
            commit('signedUser', false)

        },
    }
}

