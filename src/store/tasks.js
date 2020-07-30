import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const tasks = {
    state: {
        task: {},
        tasks: [],
        created: false
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        setCreated(state, val) {
            state.created = val
        }
    },
    actions: {
        createTask: async function ({ commit }, fields) {
            let cookie = cookies.get('token')
            if (!cookie) return false
            const body = {
                title: fields.title,
                description: fields.description
            }
            const opts = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookie}`
                },
                body: JSON.stringify(body)
            }
            const response = await fetch('http://localhost:4000/task', opts)
            await response.json();
            commit('setCreated', true)
        },
        getTasks: async function ({ commit }) {
            let cookie = cookies.get('token');
            if (!cookie) return false
            const response = await fetch('http://localhost:4000/tasks', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookie}`
                },
            });
            const tasks = await response.json();

            commit('setTasks', tasks);
        }
    }
}